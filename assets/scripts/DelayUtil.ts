/**
 * 延时工具类
 * 提供基于Promise的延时功能
 */
export class DelayUtil {
	/**
	 * 延时指定毫秒数
	 * @param milliseconds 延时毫秒数
	 * @returns Promise<void>
	 *
	 * @example
	 * ```typescript
	 * // 延时1秒
	 * await DelayUtil.delay(1000);
	 *
	 * // 延时500毫秒
	 * await DelayUtil.delay(500);
	 * ```
	 */
	static delay(milliseconds: number): Promise<void> {
		return new Promise<void>(resolve => {
			setTimeout(() => {
				resolve();
			}, milliseconds);
		});
	}

	/**
	 * 延时指定秒数
	 * @param seconds 延时秒数
	 * @returns Promise<void>
	 *
	 * @example
	 * ```typescript
	 * // 延时3秒
	 * await DelayUtil.delaySeconds(3);
	 * ```
	 */
	static delaySeconds(seconds: number): Promise<void> {
		return this.delay(seconds * 1000);
	}

	// /**
	//  * 延时指定帧数（基于Cocos Creator的requestAnimationFrame）
	//  * @param frames 延时帧数
	//  * @returns Promise<void>
	//  *
	//  * @example
	//  * ```typescript
	//  * // 延时60帧（假设60fps，即1秒）
	//  * await DelayUtil.delayFrames(60);
	//  * ```
	//  */
	// static delayFrames(frames: number): Promise<void> {
	// 	return new Promise<void>(resolve => {
	// 		let currentFrame = 0;
	// 		const frameCallback = () => {
	// 			currentFrame++;
	// 			if (currentFrame >= frames) {
	// 				resolve();
	// 			} else {
	// 				requestAnimationFrame(frameCallback);
	// 			}
	// 		};
	// 		requestAnimationFrame(frameCallback);
	// 	});
	// }

	/**
	 * 带超时的延时
	 * @param milliseconds 延时毫秒数
	 * @param timeout 超时毫秒数
	 * @returns Promise<void> 超时时抛出错误
	 *
	 * @example
	 * ```typescript
	 * try {
	 *     await DelayUtil.delayWithTimeout(1000, 500);
	 * } catch (error) {
	 *     console.log('超时了');
	 * }
	 * ```
	 */
	static delayWithTimeout(milliseconds: number, timeout: number): Promise<void> {
		return Promise.race([
			this.delay(milliseconds),
			new Promise<void>((_, reject) => {
				setTimeout(() => {
					reject(new Error(`Delay timeout after ${timeout}ms`));
				}, timeout);
			})
		]);
	}

	/**
	 * 条件延时 - 等待直到条件满足
	 * @param condition 条件函数，返回true时结束等待
	 * @param checkInterval 检查间隔（毫秒），默认100ms
	 * @param timeout 超时时间（毫秒），默认无限等待
	 * @returns Promise<void>
	 *
	 * @example
	 * ```typescript
	 * // 等待某个变量变为true
	 * await DelayUtil.waitUntil(() => someVariable === true);
	 *
	 * // 等待加载完成，最多等待5秒
	 * await DelayUtil.waitUntil(() => isLoading === false, 100, 5000);
	 * ```
	 */
	static waitUntil(condition: () => boolean, checkInterval = 100, timeout = -1): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			const startTime = Date.now();

			const check = () => {
				if (condition()) {
					resolve();
					return;
				}

				if (startTime - Date.now() >= timeout) {
					reject(new Error("WaitUntil timeout"));
					return;
				}

				setTimeout(check, checkInterval);
			};

			check();
		});
	}
}
