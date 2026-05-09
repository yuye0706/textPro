import { NetGameTips } from "./NetGameTips";
import { NetNode } from "./NetNode";
import { WebSock } from "./WebSock";

export enum NetChannelType {
	/** 游戏服务器 */
	Game = 0
}

/**
 * 单渠道
 */
export class NetChannelManager {
	public game!: NetNode;

	/** 创建游戏服务器 */
	gameCreate() {
		if (!this.game) {
			this.game = new NetNode();
			this.game.init();
		} else {
			this.game.reset();
		}
		// this.game = this.game ? this.game : new NetNode();
		// // 游戏网络事件逻辑统一在 NetGameTips 里写
		// this.game.init();
	}

	/** 连接游戏服务器 */
	async gameConnect(url, cb?, isReconnect = false) {
		try {
			console.warn("账号错误提示ffffffffffffffffffff = ", url);
			await this.game.connect(
				{
					url
					// autoReconnect: 7 // 手动重连接
				},
				isReconnect
			);

			if (cb) {
				cb();
			}
		} catch (error) {
			console.error("gameConnect error", error);
			this.gameClose();
			throw error;
		}
	}

	async gameReconnect() {
		try {
			this.game.resetReconnectCfg();
			await this.game.connect(undefined, true);
		} catch (error) {
			console.error("gameReconnect error", error);
			// this.gameClose();
			// throw error;
		}
	}

	/** 断开游戏服务器 */
	gameClose() {
		if (this.game) {
			// this.game.autoReconnect = 0;
			this.game.close();
		}
	}
}

export const netChannel = new NetChannelManager();
