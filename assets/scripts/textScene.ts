import { _decorator, Component, debug, Node, NodeEventType } from 'cc';
import { m_proto } from './proto/proto';
import { netChannel } from './net/NetChannelManager';
import { monitorManager } from './MonitorManager';
import { PROTO_ID_BY_NAME } from './proto/proto_id_map';
const { ccclass, property } = _decorator;

@ccclass('textScene')
export class textScene extends Component {

    @property(Node)
    private btn1: Node = null;
    @property(Node)
    private btn2: Node = null;
    @property(Node)
    private btn3: Node = null;

    private _wss: WebSocket = null;
    
    private account: string = "3";
    private textSite: string =  "mycs_test";
    private roleName: string = "底层群员3";
    private career: number  = 1;

    start() {
        // this.initWebSocket();
        this.btn1.on(NodeEventType.TOUCH_START, this.sendEvent, this);
        this.btn2.on(NodeEventType.TOUCH_START, this.sendEvent2, this);
        this.btn3.on(NodeEventType.TOUCH_START, this.sendEvent3, this);
        monitorManager.addEventListener(PROTO_ID_BY_NAME.SC_Ping, this.sc_web_heartbeat, this);

        monitorManager.addEventListener(PROTO_ID_BY_NAME.SC_IsHasRole, this.sc_web_login, this);
        monitorManager.addEventListener(PROTO_ID_BY_NAME.SC_CreateRole, this.sc_web_create_role, this);
        monitorManager.addEventListener(PROTO_ID_BY_NAME.SC_EnterGame, this.sc_web_enter_game, this);

        this.loginServer();
    }

    private sc_web_heartbeat(event) {
        console.log("心跳", event)
    }

    private async loginServer() {
        
        netChannel.gameCreate();
        
		try {
			await netChannel.gameConnect("https://xzdjbtest.jvplay.cn:34001");
            
			console.error("----**----**----**---- 连接成功,uid:");
			// Utils.getManager().loginManager.cs_login_10001(uid);
		} catch (error) {
			console.error("loginServer error", error);
			// this.loginServer(server, fromUILogin);
		}
    }

    private sendEvent() {
        
        // console.log("pbBuffer", msgId, req, bytes);
        const obj: m_proto.ICS_IsHasRole = {
            account: this.account,
            server_id: 1
        }

        netChannel.game.send(PROTO_ID_BY_NAME.CS_IsHasRole, obj);
    }

    private sendEvent2() {
        
        // console.log("pbBuffer", msgId, req, bytes);
        const obj: m_proto.ICS_CreateRole = {
            roleName: this.roleName,
            site: this.textSite,
            career: this.career
        }

        netChannel.game.send(PROTO_ID_BY_NAME.CS_CreateRole, obj);
    }

    private sendEvent3() {
        
        // console.log("pbBuffer", msgId, req, bytes);
        const obj: m_proto.ICS_EnterGame = {
            site: this.textSite
        }

        netChannel.game.send(PROTO_ID_BY_NAME.CS_EnterGame, obj);
    }

    private sc_web_login(data: m_proto.SC_IsHasRole) {
        console.log("===sc_web_login:", data);
    }
    private sc_web_create_role(data: m_proto.SC_CreateRole) {
        console.log("===sc_web_create_role:", data);
    }
    private sc_web_enter_game(data: m_proto.SC_EnterGame) {
        console.log("===sc_web_enter_game:", data);
    }

    private initWebSocket() {

    }

}
