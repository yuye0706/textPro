
import { INetworkTips } from "./NetInterface";

/** 游戏服务器提示 */
export class NetGameTips implements INetworkTips {
	/** 连接提示 */
	connectTips(isShow: boolean): void {
		if (isShow) {
			// Prompt.popTip("游戏服务器正在连接...");
		}
		console.log("*****connectTips****");
	}

	/** 重连接提示 */
	reconnectTips(isShow: boolean): void {
		if (isShow) {
			// Prompt.popTip("服务器重连成功");
		}
		console.log("*****reconnectTips****");
	}

	/** 请求提示 */
	requestTips(isShow: boolean): void {
		if (isShow) {
			// Prompt.popTip("这里是网络loading层...");
		}
		console.log("*****reconnectTips****");
	}

	/** 响应错误码提示 */
	responseErrorCode(code: number): void {
		console.error("游戏服务器错误码", code);
		// if (code < 0) {
		//     tips.alert("netcode_" + code, () => {
		//         // SDKPlatform.restartGame(;)
		//     });
		// }
		// else {
		//     tips.alert("netcode_" + code);
		// }
	}
}
