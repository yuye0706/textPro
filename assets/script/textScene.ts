import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('textScene')
export class textScene extends Component {

    @property(Node)
    private btn: Node = null;

    start() {

    }

    update(deltaTime: number) {
        
    }
}


