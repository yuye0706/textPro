import { ISocket, MessageFunc } from "./NetInterface";
import proto from "../proto/proto.js";
import { DEBUG } from "cc/env";
import { PROTO_NAME_BY_ID } from "../proto/proto_id_map";

/** 连接参数：直接传 url，或传 ip/port/protocol 三元组 */
export interface ConnectOptions {
	url?: string;
	ip?: string;
	port?: number;
	protocol?: string;
	binaryType?: BinaryType;
}

/**
 * WebSocket 封装
 * 1. 连接/断开相关接口
 * 2. 网络异常回调
 * 3. 数据发送与接收（Protobuf 二进制协议）
 *
 * 帧格式（接收 & 发送）：
 *   每条消息 = [4B protoId][4B bodyLen][bodyLen B body]
 *   一个 WebSocket 包内可连续携带多条消息
 */
export class WebSock implements ISocket {
	private _ws: WebSocket | null = null;

	/** 连接成功回调 */
	onConnected: ((ev: Event) => void) | null = null;
	/** 收到消息回调：(protoId, decodedMsg) */
	onMessage: MessageFunc | null = null;
	/** 连接错误回调 */
	onError: ((ev: Event) => void) | null = null;
	/** 连接关闭回调 */
	onClosed: ((ev: CloseEvent) => void) | null = null;

	/**
	 * 连接标识，每次新建连接自增。
	 * 用于在异步回调中判断当前事件是否属于最新连接，
	 * 防止旧连接的事件污染新连接状态。
	 */
	private _connId = 0;

	// ─────────────────────────────────────────────
	// 连接管理
	// ─────────────────────────────────────────────

	/**
	 * 发起 WebSocket 连接
	 * @returns true 发起成功；false 已在连接中
	 */
	connect(options: ConnectOptions): boolean {
		if (this._ws?.readyState === WebSocket.CONNECTING) {
			console.warn("[WebSock] 已在连接中，忽略重复请求");
			return false;
		}

		const url = this._resolveUrl(options);
		const connId = ++this._connId;

		this._ws = new WebSocket(url);
		this._ws.binaryType = options.binaryType ?? "arraybuffer";

		this._ws.onopen = (ev) => {
			if (!this._isCurrentConn(connId, "onopen")) return;
			this.onConnected?.(ev);
		};

		this._ws.onmessage = (ev) => {
			if (!this._isCurrentConn(connId, "onmessage")) return;
			if (this.onMessage) {
				this._handleMessage(ev.data as ArrayBuffer);
			}
		};

		this._ws.onerror = (ev) => {
			if (!this._isCurrentConn(connId, "onerror")) return;
			this.onError?.(ev);
		};

		this._ws.onclose = (ev) => {
			if (!this._isCurrentConn(connId, "onclose")) return;
			this._destroySocket();
			this.onClosed?.(ev);
		};

		return true;
	}

	/**
	 * 主动关闭连接
	 * @param code   关闭码（默认 1000 正常关闭）
	 * @param reason 关闭原因
	 */
	close(code: number = 1000, reason?: string): void {
		if (!this._ws) {
			console.warn("[WebSock] close 调用时连接不存在");
			return;
		}
		if (this._ws.readyState !== WebSocket.CLOSED) {
			this._ws.close(code, reason);
		}
		this._destroySocket();
	}

	// ─────────────────────────────────────────────
	// 发送
	// ─────────────────────────────────────────────

	/**
	 * 发送单条消息
	 * 帧格式：[4B protoId][4B bodyLen][body]
	 *
	 * @param protoId 协议 ID
	 * @param obj     消息对象
	 * @returns 0 成功；-1 未连接
	 */
	send(protoId: number, obj: any): number {
		if (!this._isOpen()) return -1;

		const body = this._encode(protoId, obj);
		if (!body) return -1;

		const frame = this._buildFrame(protoId, body);
		this._ws!.send(frame);

		if (DEBUG) {// && GameConfig.DebugInfo.showSocketLog
			console.log(`[WebSock] >>>--- send protoId: ${protoId}, name: ${PROTO_NAME_BY_ID[protoId]}`);
		}
		return 0;
	}

	// ─────────────────────────────────────────────
	// Protobuf 编解码
	// ─────────────────────────────────────────────

	/**
	 * 将消息对象编码为 Protobuf 二进制
	 * 使用 CS_<protoId> 编码器
	 */
	pack(protoId: number, obj: any): Uint8Array | null {
		
		const encoder = proto.m_proto[PROTO_NAME_BY_ID[protoId]];
		if (!encoder) {
			console.error(`[WebSock] 未找到协议 ${PROTO_NAME_BY_ID[protoId]} 的编码器`);
			return null;
		}
		const msg = new encoder();
		for (const k in obj) {
			msg[k] = obj[k];
		}
		return encoder.encode(msg).finish() as Uint8Array;
	}

	// ─────────────────────────────────────────────
	// 内部实现
	// ─────────────────────────────────────────────

	/** 解析连接地址 */
	private _resolveUrl(options: ConnectOptions): string {
		if (options.url) return options.url;
		const { ip, port, protocol } = options;
		if (!ip || !port || !protocol) {
			throw new Error("[WebSock] connect options 缺少 url 或 ip/port/protocol");
		}
		return `${protocol}://${ip}:${port}`;
	}

	/** 判断当前事件是否归属最新连接 */
	private _isCurrentConn(connId: number, event: string): boolean {
		if (connId !== this._connId) {
			console.warn(`[WebSock] ${event} 连接ID不匹配（旧=${connId} 当前=${this._connId}），忽略`);
			return false;
		}
		return true;
	}

	/** 连接是否处于 OPEN 状态 */
	private _isOpen(): boolean {
		if (this._ws?.readyState === WebSocket.OPEN) return true;
		console.warn("[WebSock] 发送失败：连接未就绪");
		return false;
	}

	/** 清理 WebSocket 实例（移除所有监听，避免内存泄漏） */
	private _destroySocket(): void {
		if (!this._ws) return;
		this._ws.onopen    = null;
		this._ws.onmessage = null;
		this._ws.onerror   = null;
		this._ws.onclose   = null;
		this._ws = null;
	}

	/**
	 * 解析接收到的 ArrayBuffer，支持一包多消息（服务端批量推送）
	 * 帧格式：[4B protoId][body] × N
	 */
	private _handleMessage(data: ArrayBuffer): void {
		const view = new DataView(data);
		let offset = 0;

		while (offset + 4 <= data.byteLength) {
			const protoId = view.getInt32(offset, false);
			offset += 4;
			
			// 剩余数据即为当前消息体
			const body = new Uint8Array(data, offset, data.byteLength - offset);
			offset = data.byteLength; // 直接跳转至数据末尾，处理下一个消息需重新从头开始

			// 获取对应解码器
			const decoder = proto.m_proto[PROTO_NAME_BY_ID[protoId]];
			if (!decoder) {
				console.error(`[WebSock] 未找到协议 ${PROTO_NAME_BY_ID[protoId]} 的解码器`);
				continue;
			}

			const msg = decoder.decode(body);

		    if (DEBUG) {// && GameConfig.DebugInfo.showSocketLog
				console.log(`[WebSock] <<<--- recv protoId: ${protoId}, name: ${PROTO_NAME_BY_ID[protoId]}`);
			}

			this.onMessage!(protoId, msg);
		}
	}

	/**
	 * 构造单条发送帧
	 * 格式：[4B protoId][4B bodyLen][body]
	 */
	private _buildFrame(protoId: number, body: Uint8Array): ArrayBuffer {
		const frameLen = 8 + body.byteLength;
		const frame = new Uint8Array(frameLen);
		const view = new DataView(frame.buffer);
		view.setInt32(0, protoId, false);
		view.setInt32(4, body.byteLength, false);
		frame.set(body, 8);
		return frame.buffer;
	}

	/** encode 的安全封装（与 pack 等价，内部统一使用此方法） */
	private _encode(protoId: number, obj: any): Uint8Array | null {
		return this.pack(protoId, obj);
	}
}