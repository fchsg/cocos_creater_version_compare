import { _decorator, Component, director, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {

    @property({type: Label})
    public label: Label|null = null;

    start() {
        let elapse : number = director.getTotalTime();
        let curTime: number = Date.now();
        this.label.string = curTime + "ms";
    }

    update(deltaTime: number) {
        
    }
}


