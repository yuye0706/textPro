export class Http {
	static Post(uri: string, params: Object = {}, successCallBack: Function, needToken = true) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", uri, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		// if (needToken) {
		//     xhr.setRequestHeader("token", Config.token);
		// }
		const str = this.querify(params);
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				const result = JSON.parse(xhr.responseText);
				successCallBack(result);
			}
		};
		xhr.send(str);
	}

	static httpPost(
		uri: string,
		params = {},
		successCallBack: (result: any) => void,
		failCallback?: (err: any) => void,
		timeout = 3000
	) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", uri, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		// 设置超时时间
		xhr.timeout = timeout;
		const str = this.querify2(params);
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						const result = JSON.parse(xhr.responseText);
						successCallBack(result);
					} catch (e) {
						// JSON 解析失败
						if (failCallback) {
							failCallback({ type: "parse_error", msg: "JSON Parse Error", error: e });
						}
					}
				} else {
					// HTTP 状态码错误 (如 404, 500 等)
					if (failCallback) {
						failCallback({ type: "http_error", status: xhr.status, msg: xhr.statusText });
					}
				}
			}
		};

		// 网络错误监听
		xhr.onerror = () => {
			if (failCallback) {
				failCallback({ type: "network_error", msg: "Network Error" });
			}
		};

		// 超时监听
		xhr.ontimeout = () => {
			if (failCallback) {
				failCallback({ type: "timeout", msg: "Request Timeout" });
			}
		};

		xhr.send(str);
	}

	static Get(uri: string, successCallBack: Function) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", uri, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		// if (needToken) {
		//     xhr.setRequestHeader("token", Config.token);
		// }
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				// let result = JSON.parse(xhr.responseText);
				successCallBack(xhr.responseText);
			}
		};
		xhr.send();
	}

	// 新增网络错误处理
	static Get_pro(uri: string, successCallBack: Function, errorCallBack: Function) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", uri, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let result;
					try {
						result = JSON.parse(xhr.responseText);
					} catch (e) {
						// 解析失败
						errorCallBack && errorCallBack("Failed to parse response.");
						return;
					}
					successCallBack(result);
				} else {
					errorCallBack && errorCallBack(xhr.statusText);
				}
			}
		};
		xhr.onerror = event => {
			console.error("Get request error: ", uri, event);
			errorCallBack && errorCallBack(event);
		};
		xhr.send();
	}

	// 数据处理
	private static querify(object = {}): string {
		const keys = Object.keys(object);
		const result = keys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
		return result;
	}

	// assets/script/frameworks/tool/Http.ts

	/**
	 * 将对象转换为URL查询参数字符串,修复对象中包含对象或数组时,无法正确转换为URL查询参数字符串的问题
	 * @param object 对象
	 * @returns 字符串
	 */
	private static querify2(object = {}): string {
		const keys = Object.keys(object);
		const result = keys
			.map(key => {
				let val = object[key];

				// 关键修复：如果值是对象（数组也是对象），先转成 JSON 字符串
				if (typeof val === "object" && val !== null) {
					val = JSON.stringify(val);
				}

				// 然后再进行 URL 编码
				return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
			})
			.join("&");
		return result;
	}
}
