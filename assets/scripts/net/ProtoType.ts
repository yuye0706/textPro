export const enum ProtoType {
    
	// 登录相关
	web_login_check = 10000, // 各个渠道登录验证
    /**登录验证是否有角色 */
	web_login = 10001,
    /**创角 */
	web_create_role = 10002,
    /**确认角色 */
	web_enter_game = 10003,
	web_reconnect = 10004, // 断线重连
    /**心跳 */
	web_heartbeat = 10005, // 心跳
	// web_get_random_name = 10012, // 获得随机名字
	// web_select_job = 10013, // 重选职业
	// web_login_new = 10014, // 重选职业
	// web_role_notice_time = 16004, // 创角和开服天数
	// web_kick_off = 16007, // 被踢下线
	
	// 网络模块相关（非协议）
	net_checked = 10000201, // 网络准备就绪
	loading_auto_close = 10000202, // 等待界面自动关闭
	net_on_error = 10000203, // 网络错误
	net_on_close = 10000204, // 网络关闭
	proto_error_code = 10000205, // 协议错误码
}
export const enum CustomMonitorType {
	// 客户端自定义事件类型
	// 例:
	BUNDLE_LOADING = "bundle_loading", // 加载bundle资源
	BUNDLE_LOAD_COMPLETE = "bundle_load_complete", // 加载bundle资源完成
	SWITCH_SCENE = "switch_scene", // 切换场景
	SCENE_QUIT = "scene_quit", // 场景退出
	SWITCH_SCENE_END = "switch_scene_end", // 切换场景结束

	START_LOGIN = "start_login", // 开始登录
	NET_STATUS = "net_status", // 网络状态

	SDK_LOGIN = "sdk_login", // sdk登录
	GAME_CONFIG_INITED = "game_config_inited", // 游戏配置初始化完成
	SDK_LOGIN_STATUS = "sdk_login_status", // sdk登录状态
	SDK_ENTER_GAME = "sdk_enter_game", // sdk进入游戏场景类型
	GET_SDK_CONFIG = "get_sdk_config", // 获取sdk配置
	SDK_PAY_SUCCESS = "sdk_pay_success", // 支付成功
	SDK_PAY_FAILURE = "sdk_pay_failure", // 支付失败
	SDK_CUSTOMER_SERVICE = "sdk_customer_service", // 客服

	FIRST_ENTER_GAME = "first_enter_game", // 首次进入游戏
	GET_PLAYER_INFO = "get_player_info", // 获取玩家信息
	ENTER_GAME = "enter_game", // 进入游戏
	BASE_RES_LOADED = "base_res_loaded", // 基础资源加载完成
	CHANGE_JOB_TO_MAIN_GAME = "change_job_to_main_game", // 重选职业，进入主城
	GO_TO_LOGIN = "go_to_login", // 跳转登录
	GET_NOTICE = "get_notice" // 获取公告
}
