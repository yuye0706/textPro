import { EDITOR } from "cc/env";
import { CustomMonitorType } from "./net/ProtoType";

/**
 * 缓存事件结构类型
 */
interface EventCache {
	target: any;
	callback: Function;
	once: boolean;
}

export class MonitorManager {
	private _eventCacheMap: Map<number | CustomMonitorType, EventCache[]> = new Map();
	private _fixedEvents: Map<number | CustomMonitorType, EventCache[]> = new Map();

	/**
	 * 注册监听事件
	 * @param eventType 事件类型
	 * @param callback 回调函数
	 * @param target 目标对象
	 * @param isOnce 是否只监听一次
	 */
	addEventListener(eventType: number | CustomMonitorType, callback: Function, target: any, isOnce?: boolean) {
		let eventCacheArray = this._eventCacheMap.get(eventType);
		if (!eventCacheArray) {
			eventCacheArray = [];
		}

		const index = eventCacheArray.findIndex(eventCache => {
			return eventCache?.target === target && eventCache?.callback === callback;
		});

		if (index === -1) {
			eventCacheArray.push({
				target: target,
				callback: callback,
				once: isOnce
			});
			this._eventCacheMap.set(eventType, eventCacheArray);
		}
	}

	/**
	 * 注册固定监听事件（不会被自动清理）
	 * @param eventType 事件类型
	 * @param callback 回调函数
	 * @param target 目标对象
	 */
	addFixEventListener(eventType: number | CustomMonitorType, callback: (...args: any[]) => void, target: any) {
		let eventCacheArray = this._fixedEvents.get(eventType);
		if (!eventCacheArray) {
			eventCacheArray = [];
		}

		const index = eventCacheArray.findIndex(eventCache => {
			return eventCache?.target === target && eventCache?.callback === callback;
		});

		if (index === -1) {
			eventCacheArray.push({
				target: target,
				callback: callback,
				once: false
			});
			this._fixedEvents.set(eventType, eventCacheArray);
		}
	}

	/**
	 * 注销事件 移除监听
	 *
	 * @param eventName 事件名
	 * @param callback 事件处理函数
	 * @param target 事件处理函数的执行对象
	 */
	removeEventListener(eventType: number | CustomMonitorType, callback?: Function, target?: any): void {
		let eventCacheArray = this._eventCacheMap.get(eventType);
		if (eventCacheArray) {
			if (callback && target) {
				const index = eventCacheArray.findIndex(eventCache => {
					return eventCache?.target === target && eventCache?.callback === callback;
				});
				if (index !== -1) {
					eventCacheArray[index] = null;
					if (eventCacheArray.filter(e => e !== null).length === 0) {
						this._eventCacheMap.delete(eventType);
					}
				}
			} else {
				eventCacheArray = undefined;
				this._eventCacheMap.delete(eventType);
			}
		}
	}

	/**
	 * 只监听一次自动移除
	 *
	 * @param eventType 事件类型
	 * @param func 事件处理函数
	 * @param target 事件处理函数的执行对象
	 */
	once(eventType: number | CustomMonitorType, func: Function, target: any) {
		this.addEventListener(eventType, func, target, true);
	}

	/**
	 * 发射事件
	 *
	 * @param eventName 事件名
	 * @param param 传递的剩余不定参数
	 */
	dispatchEvent(eventType: number | CustomMonitorType, ...param: any[]): void {
		const dispatch = (eventCaches: EventCache[], eventMap = this._eventCacheMap) => {
			if (eventCaches) {
				for (let i = 0; i < eventCaches.length; i++) {
					const eventCache = eventCaches[i];
					if (!eventCache) {
						continue;
					}
					if (!eventCache.callback) {
						continue;
					}
					eventCache.callback.apply(eventCache.target, param);
					// 只接受一次回调的事件，在触发之后就移除掉该缓存事件
					if (eventCache.once) {
						eventCaches[i] = undefined;
					}
				}

				const array = eventCaches.filter(e => !!e);

				if (array.length === 0) {
					eventMap.delete(eventType);
				} else {
					eventMap.set(eventType, array);
				}
			}
		};

		dispatch(this._eventCacheMap.get(eventType), this._eventCacheMap);
		dispatch(this._fixedEvents.get(eventType), this._fixedEvents);
	}

	/**
	 * 注销某个已经注册的对象的所有事件
	 *
	 * @param target 事件函数处理的执行对象
	 */
	offTarget(target: any): void {
		const remove = eventMap => {
			eventMap.forEach((eventCacheArray, eventName) => {
				if (eventCacheArray) {
					for (let i = eventCacheArray.length - 1; i >= 0; i--) {
						if (eventCacheArray[i]?.target === target) {
							eventCacheArray[i] = null;
						}
					}
					if (eventCacheArray.filter(e => e !== null).length === 0) {
						this._eventCacheMap.delete(eventName);
					}
				}
			});
		};

		remove(this._eventCacheMap);
		remove(this._fixedEvents);
	}

	/**
	 * 移除所有监听
	 */
	offAll() {
		this._eventCacheMap.clear();
	}

	public getEvents() {
		return this._eventCacheMap;
	}
}

export const monitorManager = !EDITOR ? new MonitorManager() : undefined;
