import { BatchRequestObject, CallbackObject, INetworkTips, ISocket, RequestObject } from "./NetInterface";
import { WebSock } from "./WebSock";
import { NetGameTips } from "./NetGameTips";
// import { Prompt } from "../../../tool/Prompt";
// import { Utils } from "../../../tool/Utils";
import { CustomMonitorType, ProtoType } from "./ProtoType";

// import { LayerType, UIMgr } from "../../../ui/UIMgr";
// import { uiShopGem } from "../../../../game_moudle/game_shop/uiShopGem";
// import { AssetId } from "../../module/game_bag/BagManager";
import { ANDROID, DEBUG, HTML5, NATIVE } from "cc/env";
import proto from "../proto/proto.js";
// import GameConfig from "db://assets/script/def/GameConfig";
import { monitorManager } from "../MonitorManager";
import { DelayUtil } from "../DelayUtil";
import { PROTO_ID_BY_NAME, PROTO_NAME_BY_ID } from "../proto/proto_id_map";

/*
 *   CocosCreator网络节点基类，以及网络相关接口定义
 *   1. 网络连接、断开、请求发送、数据接收等基础功能
 *   2. 心跳机制
 *   3. 断线重连 + 请求重发
 *   4. 调用网络屏蔽层
 */

type CheckFunc = (checkedFunc: VoidFunc) => void;
type VoidFunc = () => void;
type BoolFunc = () => boolean;

const NetNodeStateStrs = ["连接失败", "已关闭", "连接中", "重连中", "验证中", "可传输数据"];


/** 网络提示类型枚举 */
export enum NetTipsType {
	Connecting,
	ReConnecting,
	Requesting
}

/** 网络状态枚举 */
export enum NetNodeState {
	Failed,      // 连接失败
	Closed,      // 已关闭
	Connecting,  // 连接中
	ReConnecting,// 重连中
	Checking,    // 验证中
	Working      // 可传输数据
}

/** 网络连接参数 */
export interface NetConnectOptions {
	host?: string;
	port?: number;
	url?: string;
	autoReconnect?: number; // -1永久重连，0不重连，正整数为重试次数
}

const checkCount = 2;

const reconnectConfig = {
	maxRetries: 5,
	initialDelay: 0.5,
	maxDelay: 10,
	backoffMultiplier: 2,
	randomizationFactor: 0.2
};

// ─────────────────────────────────────────────
// 日志工具
// ─────────────────────────────────────────────

enum LogLevel {
	DEBUG = 0,
	INFO  = 1,
	WARN  = 2,
	ERROR = 3
}

const CURRENT_LOG_LEVEL = !DEBUG && (HTML5 || (NATIVE && ANDROID)) ? LogLevel.WARN : LogLevel.DEBUG;
const ENABLE_HEARTBEAT_LOG = false;
const IS_NON_NATIVE_ENV = !NATIVE;

const LogTag = {
	CONNECT:   IS_NON_NATIVE_ENV ? "\x1b[36m🌐[NetConnect]\x1b[0m"   : "🌐[NetConnect]",
	RECONNECT: IS_NON_NATIVE_ENV ? "\x1b[33m🔄[NetReconnect]\x1b[0m" : "🔄[NetReconnect]",
	SEND:      IS_NON_NATIVE_ENV ? "\x1b[34m📤[NetSend]\x1b[0m"      : "📤[NetSend]",
	RECEIVE:   IS_NON_NATIVE_ENV ? "\x1b[32m📥[NetReceive]\x1b[0m"   : "📥[NetReceive]",
	HEARTBEAT: IS_NON_NATIVE_ENV ? "\x1b[35m💓[NetHeartbeat]\x1b[0m" : "💓[NetHeartbeat]",
	TIMEOUT:   IS_NON_NATIVE_ENV ? "\x1b[31m⏱️[NetTimeout]\x1b[0m"   : "⏱️[NetTimeout]",
	ERROR:     IS_NON_NATIVE_ENV ? "\x1b[31m❌[NetError]\x1b[0m"     : "❌[NetError]",
	WARN:      IS_NON_NATIVE_ENV ? "\x1b[33m⚠️[NetWarn]\x1b[0m"      : "⚠️[NetWarn]",
	INFO:      IS_NON_NATIVE_ENV ? "\x1b[36mℹ️[NetInfo]\x1b[0m"      : "ℹ️[NetInfo]",
	SUCCESS:   IS_NON_NATIVE_ENV ? "\x1b[32m✅[NetSuccess]\x1b[0m"   : "✅[NetSuccess]",
	CLEAN:     IS_NON_NATIVE_ENV ? "\x1b[90m🗑️[NetClean]\x1b[0m"     : "🗑️[NetClean]"
} as const;

class NetLogger {
	private static formatMessage(tag: string, msg: string) { return `${tag} ${msg}`; }

	static debug(tag: string, msg: string, ...args: any[]) {
		if (CURRENT_LOG_LEVEL <= LogLevel.DEBUG) console.log(this.formatMessage(tag, msg), ...args);
	}
	static info(tag: string, msg: string, ...args: any[]) {
		if (CURRENT_LOG_LEVEL <= LogLevel.INFO) console.log(this.formatMessage(tag, msg), ...args);
	}
	static warn(tag: string, msg: string, ...args: any[]) {
		if (CURRENT_LOG_LEVEL <= LogLevel.WARN) console.warn(this.formatMessage(tag, msg), ...args);
	}
	static error(tag: string, msg: string, ...args: any[]) {
		if (CURRENT_LOG_LEVEL <= LogLevel.ERROR) console.error(this.formatMessage(tag, msg), ...args);
	}
	static success(tag: string, msg: string, ...args: any[]) {
		if (CURRENT_LOG_LEVEL <= LogLevel.DEBUG) console.log(this.formatMessage(tag, msg), ...args);
	}
	static heartbeat(msg: string, ...args: any[]) {
		if (ENABLE_HEARTBEAT_LOG && CURRENT_LOG_LEVEL <= LogLevel.DEBUG)
			console.log(`${LogTag.HEARTBEAT} ${msg}`, ...args);
	}
}

// ─────────────────────────────────────────────
// 消息缓存条目
// key = protoId，便于按协议号精确清除
// ─────────────────────────────────────────────
interface MsgCatchEntry {
	sendTime: number;
	data: BatchRequestObject; // { protoId, obj }
}

/**
 * 网络节点类
 */
export class NetNode {
	protected _connectOptions: NetConnectOptions;

	/** 自动重连配置 */
	private _autoReconnect = { ws: 0, server: 0, time: 0 };

	public get autoReconnect(): number { return this._autoReconnect.ws; }
	public set autoReconnect(value: number) { this._autoReconnect.ws = value; }

	protected _socket: ISocket = undefined;

	public state: NetNodeState = NetNodeState.Closed;

	protected _networkTips: INetworkTips | null = null;
	protected _connectedCallback: CheckFunc | null = null;
	protected _disconnectCallback: BoolFunc | null = null;

	protected _keepAliveTimer: any   = null;
	protected _checkMsgTimeout: any  = null;
	protected _reconnectTimer: any   = null;
	protected _sendHandler: any      = null;

	protected _heartTime: number    = 5 * 1000;
	protected _receiveTime: number  = 5 * 6 * 1000;

	/**
	 * 当前待发送的单条请求。
	 * 原数组改为单条：每次 send() 覆盖写入，interval 消费后置 null。
	 */
	protected _requests: RequestObject | null = null;

	protected _listener: { [key: string]: CallbackObject[] | null } = {};

	/** 用户令牌（重连鉴权用） */
	private token = 0;

	/**
	 * 消息缓存：key = protoId
	 * 收到对应协议的响应后按 protoId 删除，超时则重发。
	 */
	private _msgCatch: { [protoId: number]: MsgCatchEntry } = {};

	// ─────────────────────────────────────────────
	// 初始化
	// ─────────────────────────────────────────────

	init() {
		if (!this._socket) {
			this._socket = new WebSock();
			NetLogger.info(LogTag.CONNECT, "网络模块初始化完成");
			this.initSocket();
		}
		this._networkTips = this._networkTips ?? new NetGameTips();
	}

	protected initSocket(cb?: () => void) {
		if (!this._socket) return;

		this._socket.onConnected = event => {
			if (this.state !== NetNodeState.Closed) {
				this.onConnected(event);
				cb?.();
			}
		};

		// onMessage 签名已去掉 sn，与 WebSock 保持一致
		this._socket.onMessage = (protoId, data) => {
			this.onMessage(protoId, data);
		};

		this._socket.onError = event => {
			this.onError(event);
		};

		this._socket.onClosed = event => {
			this.onClosed(event);
		};
	}

	// ─────────────────────────────────────────────
	// 连接
	// ─────────────────────────────────────────────

	connect(options: NetConnectOptions, isReconnect = false): Promise<boolean> {
		return new Promise((resolve, reject) => {
			if (!options && isReconnect) {
				options = this._connectOptions;
			}

			if (!this._socket || !options) {
				NetLogger.error(LogTag.ERROR, "网络未初始化，无法连接");
				return reject("网络未初始化，无法连接");
			}

			if (this.state > NetNodeState.Closed) {
				NetLogger.warn(LogTag.WARN, `网络状态为${NetNodeStateStrs[this.state]}，无需重新连接`);
				return resolve(true);
			}

			const connectType = isReconnect ? "重连" : "连接";
			NetLogger.info(LogTag.CONNECT, `开始${connectType}服务器`, {
				options,
				state: NetNodeStateStrs[this.state]
			});

			this._socket.onConnected = event => {
				if (this.state > NetNodeState.Closed) {
					this.onConnected(event);
					resolve(true);
				} else {
					reject("socket连上了，但是_state为Closed状态");
				}
			};

			let err: ((reason?: any) => void) | undefined = reject;
			this._socket.onError = event => {
				this.onError(event);
				if (err) {
					err("网络连接失败");
					err = undefined;
				}
			};

			this.state = isReconnect ? NetNodeState.ReConnecting : NetNodeState.Connecting;

			if (!this._socket.connect(options)) {
				this.updateNetTips(NetTipsType.Connecting, false);
				return reject("网络连接中...请稍后...");
			}

			if (!isReconnect) {
				this._connectOptions = options;
				this._connectOptions.autoReconnect = this._connectOptions.autoReconnect || reconnectConfig.maxRetries;
				this._autoReconnect = {
					ws: this._connectOptions.autoReconnect,
					server: checkCount,
					time: 0
				};
			}

			this.updateNetTips(NetTipsType.Connecting, true);
			NetLogger.info(LogTag.CONNECT, `网络状态变更为: ${NetNodeStateStrs[this.state]}`);
		});
	}

	// ─────────────────────────────────────────────
	// 连接成功回调
	// ─────────────────────────────────────────────

	protected onConnected(_event: any) {
		NetLogger.success(LogTag.CONNECT, "网络已连接", {
			options: this._connectOptions,
			time: new Date().toLocaleTimeString("zh-CN")
		});

		this._autoReconnect = {
			ws: this._connectOptions.autoReconnect,
			server: checkCount,
			time: 0
		};
		NetLogger.info(LogTag.RECONNECT, "重连配置已重置", this._autoReconnect);

		// 断线重连且持有 token，进入鉴权阶段
		if (this.state === NetNodeState.ReConnecting && this.token !== 0) {
			NetLogger.info(LogTag.RECONNECT, "请求断线重连鉴权");
			this.state = NetNodeState.Checking;
			this.cs_web_reconnect();
			this.updateNetTips(NetTipsType.ReConnecting, false);
		} else {
			this.onChecked();
		}

		NetLogger.info(LogTag.CONNECT, `网络当前状态: ${NetNodeStateStrs[this.state]}`);
		this.checkMsgTimeout();

		// 重置发送轮询
		clearInterval(this._sendHandler);
		this._sendHandler = setInterval(() => {
			// 无待发消息，跳过
			if (!this._requests) return;

			// 连接未就绪，跳过
			if (this.state < NetNodeState.Checking) return;

			const req = this._requests;
			const canSend = req.force || this.state === NetNodeState.Working ||
				(this.state === NetNodeState.Checking &&
					this.checkingProtoIds(req.protoId, "Authentication"));

			if (!canSend) return;

			// 先置空，防止发送异常时重复触发
			this._requests = null;

			try {
				this._socket.send(req.protoId, req.obj);
				// this.saveToMsgCatch(req);
			} catch (e) {
				NetLogger.error(LogTag.SEND, "消息发送异常，回滚至队列等待重试", e);
				this._requests = req; // 回滚，下次 interval 重试
			}
		}, 100);
	}

	// ─────────────────────────────────────────────
	// 协议 ID 分类查询
	// ─────────────────────────────────────────────

	protected checkingProtoIds(
		protoId: number,
		checkType: "Authentication" | "MsgCatch" | "ExcludeResend" | "AdMessage"
	): boolean {
		const protoIds = {
			Authentication: new Set([10001, 10002, 10003, 10004]),
			MsgCatch:        new Set([10005]),
			ExcludeResend:   new Set([10001, 10002, 10003]),
			AdMessage:       new Set([140001, 140002, 140021, 146001])
		};
		return protoIds[checkType].has(protoId);
	}

	// ─────────────────────────────────────────────
	// 连接验证成功
	// ─────────────────────────────────────────────

	protected onChecked() {
		NetLogger.success(LogTag.CONNECT, "连接验证成功，进入工作状态");
		this.state = NetNodeState.Working;
		this._autoReconnect.server = checkCount;

		this.resetHearbeatTimer();

		/**TODO 抛出事件 */
		monitorManager.dispatchEvent(ProtoType.net_checked);
		monitorManager.dispatchEvent(ProtoType.loading_auto_close);

		// this.resendMsgCatchs();
	}

	// ─────────────────────────────────────────────
	// 消息缓存（以 protoId 为 key）
	// ─────────────────────────────────────────────

	/**
	 * 保存消息到缓存，用于超时重发。
	 * key = protoId，同一协议的新请求会覆盖旧记录。
	 */
	private saveToMsgCatch(data: BatchRequestObject): void {
		if (!data) return;

		// this._msgCatch[data.protoId] = { sendTime: Date.now(), data };

		if (DEBUG) {
		// if (DEBUG && GameConfig.DebugInfo.showBattleMessageLog) {
			NetLogger.debug(LogTag.SEND, `消息已缓存 protoId=${data.protoId}`, {
				data,
				time: new Date().toLocaleTimeString("zh-CN")
			});
		}
	}

	/**
	 * 按 protoId 移除缓存条目（收到响应时调用）
	 * @returns 剩余缓存条目数
	 */
	private removeMsgCatchByProtoId(protoId: number): number {
		delete this._msgCatch[protoId];
		return Object.keys(this._msgCatch).length;
	}

	/** 清空消息缓存 */
	private clearMsgCatchs(): void {
		this._msgCatch = {};
	}

	// ─────────────────────────────────────────────
	// 对外发送接口
	// ─────────────────────────────────────────────

	/**
	 * 发起请求。
	 * 写入单条 _requests，由 interval 消费发送。
	 * 同一帧多次调用时，后一次覆盖前一次（如需队列请自行扩展）。
	 */
	send(protoId: number, obj?: any, force?: true): number {
		if (!this._socket) return -1;

		if (
			!force &&
			this.state < NetNodeState.ReConnecting &&
			!this.checkingProtoIds(protoId, "Authentication") &&
			!this.checkingProtoIds(protoId, "AdMessage")
		) {
			NetLogger.warn(LogTag.WARN, `当前状态为${NetNodeState[this.state]}，无法发送消息`, { protoId, force });
			return -1;
		}

		this._requests = { protoId, obj, force };
		return 0;
	}

	/**
	 * 重发缓存中所有未确认的消息
	 */
	resendMsgCatchs(): void {
		if (!this._socket || this.state < NetNodeState.Checking) return;

		for (const protoId in this._msgCatch) {
			const entry = this._msgCatch[protoId];
			this._socket.send(entry.data.protoId, entry.data.obj);
		}
	}

	// ─────────────────────────────────────────────
	// 消息接收
	// ─────────────────────────────────────────────

	/**
	 * 收到完整消息包（sn 已移除）
	 * @param protoId 协议号
	 * @param data    解码后的消息体
	 */
	protected onMessage(protoId: number, data: any): void {
		console.log("=====收到完整消息包onMessage:", PROTO_NAME_BY_ID[protoId], data);
		if (this.state < NetNodeState.Checking) {
			NetLogger.warn(LogTag.RECEIVE, `接收到消息但状态为${NetNodeState[this.state]}，消息被丢弃`, {
				protoId,
				data
			});
			return;
		}

		// 收到响应，从缓存中移除对应协议
		// const remaining = this.removeMsgCatchByProtoId(protoId);

		// 重连鉴权确认包
		if (this.state === NetNodeState.Checking && this.checkingProtoIds(protoId, "Authentication")) {
			this.onChecked();
		}

		// 重置心跳计时
		this.resetHearbeatTimer();

		if (protoId !== 10005) {
			// if (DEBUG && GameConfig.DebugInfo.showBattleMessageLog) {
			if (DEBUG) {
				NetLogger.debug(LogTag.RECEIVE, `已收到消息，协议号: ${PROTO_NAME_BY_ID[protoId]}`, {
					data,
					time: new Date().toLocaleTimeString("zh-CN")
				});
			}
		}

		// 10003 返回 token，保存用于断线重连鉴权
		if (protoId === 10003) {
			this.token = data.token;
		}

		/**TODO 抛出事件 */
		monitorManager.dispatchEvent(protoId, data);

		// if (remaining <= 0) {
		// 	monitorManager.dispatchEvent(ProtoType.loading_auto_close);
		// }

	}

	// ─────────────────────────────────────────────
	// 超时检测
	// ─────────────────────────────────────────────

	protected checkMsgTimeout(): void {
		if (this._checkMsgTimeout) {
			clearInterval(this._checkMsgTimeout);
			this._checkMsgTimeout = null;
		}

		this._checkMsgTimeout = setInterval(() => {
			if (this.state < NetNodeState.Checking) return;

			const now = Date.now();
			for (const protoIdStr in this._msgCatch) {
				const protoId = Number(protoIdStr);
				const entry   = this._msgCatch[protoId];
				const elapsed = now - entry.sendTime;

				if (elapsed <= 5000) continue;

				if (this.state === NetNodeState.Checking) {
					// Checking 阶段只处理重连协议 10004
					if (protoId === ProtoType.web_reconnect) {
						if (this._autoReconnect.server <= 0) {
							NetLogger.error(LogTag.TIMEOUT, "重连协议10004超时次数已用完，停止重试");
							this._socket.close();
							break;
						}
						this._socket.send(entry.data.protoId, entry.data.obj);
						entry.sendTime = now; // 更新发送时间，防止下一秒再次触发
						this._autoReconnect.server--;
					}
					// Checking 阶段其他协议不处理，跳出
					break;
				}

				// Working 阶段：超时直接重发
				NetLogger.debug(LogTag.TIMEOUT, `协议 ${protoId} 超时，重发`);
				this._socket.send(entry.data.protoId, entry.data.obj);
				entry.sendTime = now; // 更新发送时间，避免每秒连续重发
			}
		}, 1000);
	}

	// ─────────────────────────────────────────────
	// 心跳
	// ─────────────────────────────────────────────

	protected resetHearbeatTimer(): void {
		
		console.log("==== 重置resetHearbeatTimer")
		if (this._keepAliveTimer !== null) {
			clearTimeout(this._keepAliveTimer);
			this._keepAliveTimer = null;
		}

		if (this.state !== NetNodeState.Working) return;

		let heartTimeoutCount = 0;
		const heart = () => {
			NetLogger.heartbeat("发送心跳包", { timeoutCount: heartTimeoutCount });

			if (heartTimeoutCount > 0) {
				if (heartTimeoutCount > 2) {
					this.onError("heartbeat timeout");
					return;
				}
				monitorManager.dispatchEvent(CustomMonitorType.NET_STATUS, {
					status: "heartbeat_timeout",
					count: heartTimeoutCount
				});
			}

			this.cs_heartbeat();
			heartTimeoutCount++;
			this._keepAliveTimer = setTimeout(heart, this._heartTime);
		};

		this._keepAliveTimer = setTimeout(heart, this._heartTime);
	}

	// ─────────────────────────────────────────────
	// 内置协议
	// ─────────────────────────────────────────────

	/** 发送断线重连鉴权请求 */
	public cs_web_reconnect(): void {
		NetLogger.info(LogTag.RECONNECT, "发送断线重连请求");
		const obj: proto.m_proto.ICS_Reconnect = { token: this.token };

		// 先清除旧的 10004 缓存，再发送新的
		// this.removeMsgCatchByProtoId(ProtoType.web_reconnect);
		this._socket.send(PROTO_ID_BY_NAME.CS_Reconnect, obj);
		// this.saveToMsgCatch({ protoId: ProtoType.web_reconnect, obj });
	}

	/** 发送心跳包 */
	public cs_heartbeat(): void {
		NetLogger.heartbeat("发送心跳包");
		const obj = {};
		this._socket.send(PROTO_ID_BY_NAME.CS_Ping, obj);
		// this.saveToMsgCatch({ protoId: ProtoType.web_heartbeat, obj });
	}

	// ─────────────────────────────────────────────
	// 关闭 / 重置 / 重连
	// ─────────────────────────────────────────────

	close(code: 0 | 1 = 0): void {
		const closeType = code === 1 ? "超时重试断开" : "正常关闭";
		NetLogger.info(LogTag.CLEAN, `网络连接关闭 ${closeType}`, { socket: !!this._socket, code });
		this.reset();

		this._socket?.close();

		if (code === 1) {
			monitorManager.dispatchEvent(ProtoType.web_reconnect, { err_code: 1 });
		} else {
			this.token = 0;
			monitorManager.dispatchEvent(ProtoType.net_on_close);
		}
	}

	reset(): void {
		NetLogger.info(LogTag.CLEAN, "网络节点重置");
		this._listener = {};
		this.clearMsgCatchs();
		this._requests = null; // 单条置 null
		this._networkTips?.connectTips(false);
		this._networkTips?.reconnectTips(false);
		this._networkTips?.requestTips(false);
		this._autoReconnect = { ws: 0, server: 0, time: 0 };
		this.state = NetNodeState.Closed;
	}

	resetReconnectCfg(): void {
		this.state = NetNodeState.Failed;
		this._autoReconnect = {
			ws: this._connectOptions.autoReconnect || reconnectConfig.maxRetries,
			server: checkCount,
			time: 0
		};
	}

	protected cleanup(): void {
		if (this.state > NetNodeState.Closed) {
			this.state = NetNodeState.Failed;
		}
		this.clearTimer();
	}

	public clearTimer(): void {
		clearInterval(this._sendHandler);
		this._sendHandler = null;

		clearInterval(this._checkMsgTimeout);
		this._checkMsgTimeout = null;

		clearTimeout(this._keepAliveTimer);
		this._keepAliveTimer = null;

		clearTimeout(this._reconnectTimer);
		this._reconnectTimer = null;
	}

	// ─────────────────────────────────────────────
	// 网络事件回调
	// ─────────────────────────────────────────────

	protected onError(event: any): void {
		NetLogger.error(LogTag.ERROR, "网络错误", { event, currentState: NetNodeState[this.state] });
		this._socket.close();
		this.cleanup();
		this.state = NetNodeState.Failed;
		this.scheduReconnect();
	}

	protected onClosed(event: any): void {
		NetLogger.warn(LogTag.CLEAN, "网络连接已关闭", { event });
		this.cleanup();
		this.scheduReconnect();
	}

	protected async scheduReconnect(): Promise<void> {
		if (
			this.state !== NetNodeState.Failed ||
			this._autoReconnect.ws <= 0 ||
			this._autoReconnect.time > 0
		) {
			NetLogger.debug(LogTag.RECONNECT, "网络状态不符合条件，不进行重连", {
				state: NetNodeState[this.state],
				wsCount: this._autoReconnect.ws,
				time: this._autoReconnect.time
			});
			return;
		}

		this._autoReconnect.time = reconnectConfig.initialDelay;

		const reconnect = async (): Promise<boolean> => {
			try {
				await DelayUtil.delaySeconds(this._autoReconnect.time);

				const attemptCount = this._connectOptions.autoReconnect - --this._autoReconnect.ws;
				monitorManager.dispatchEvent(CustomMonitorType.NET_STATUS, {
					status: "reconnect",
					count: attemptCount
				});

				NetLogger.info(LogTag.RECONNECT, `第${attemptCount}次重连开始`);
				await this.connect(this._connectOptions, true);
				NetLogger.success(LogTag.RECONNECT, `第${attemptCount}次重连成功`);

				monitorManager.dispatchEvent(CustomMonitorType.NET_STATUS, {
					status: "reconnect_success"
				});
				return true;
			} catch (error) {
				const attemptCount = this._connectOptions.autoReconnect - this._autoReconnect.ws;
				NetLogger.warn(LogTag.RECONNECT, `第${attemptCount}次重连失败`, { error });

				this.state = NetNodeState.Failed;

				if (this._autoReconnect.ws <= 0) {
					NetLogger.error(LogTag.RECONNECT, "重连失败，次数已用完");
					this.close(1);
					return false;
				}

				this._autoReconnect.time = Math.min(
					this._autoReconnect.time * reconnectConfig.backoffMultiplier,
					reconnectConfig.maxDelay
				);
				NetLogger.info(LogTag.RECONNECT, `下一次重连等待时间: ${this._autoReconnect.time}秒`);
				return false;
			}
		};

		while (this.state === NetNodeState.Failed && this._autoReconnect.ws > 0) {
			const success = await reconnect();
			if (success) break;
		}
	}

	// ─────────────────────────────────────────────
	// 错误码提示
	// ─────────────────────────────────────────────

	private commomErrorCodeTip(code: number, prohibit_time: number): void {
		if (code > 10000000) {
			// const DaoJu = DBRecord.fetchId("DaoJu", code % 10000000);
			// if (!DaoJu) return;
			//Prompt.popTip(Utils.getGlobalTxt(DaoJu.name) + "不足");
			// if (DaoJu.id === AssetId.gem) {
			// 	UIMgr.inst.openOnce(uiShopGem, LayerType.panel);
			// }
			return;
		}

		if (code === 1021) {
			// Prompt.popTipWindow(
			// 	Utils.getManager().languageManager.getTextById(21),
			// 	Utils.getManager().languageManager.getTextById(110),
			// 	() => { Utils.getManager().goToLoginMain(); },
			// 	Utils.getManager().languageManager.getTextById(333000013)
			// );
			return;
		}

		// const cfg: dbr.CuoWuMa = DBRecord.fetchId("CuoWuMa", code);
		// if (!cfg || Object.keys(cfg).length === 0) {
		// 	if (DEBUG) {
		// 		//Prompt.popTip(`未配置错误码${code}`);
		// 	} else {
		// 		NetLogger.error(LogTag.ERROR, `策划未配置错误码表，id=${code}`);
		// 	}
		// 	return;
		// }

		if (code === 1031) {
			// monitorManager.dispatchEvent(ProtoType.user_fengjin);
		}

		if (code === 1009) {
			this.close(1);
		}

		// const showStr = prohibit_time > 0
		// 	? cfg.descrip + Utils.dateFormat(prohibit_time)
		// 	: cfg.descrip;
		//Prompt.popTip(Utils.setRichText(showStr));
	}

	protected updateNetTips(_tipsType: NetTipsType, _isShow: boolean): void {
		// 如需展示 UI 提示，在此实现
	}
}
