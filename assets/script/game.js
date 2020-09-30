// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    properties: {
        Playerwrap: {
            type: cc.Node,
            default: null,
        },
        state:0,
        movestate:0,
        endtime:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.bg = this.node.getChildByName('gamemap');
        this.buttle = this.Playerwrap.getComponent('play');
        this.bg.on(cc.Node.EventType.TOUCH_START, function (event) {
            var temp = event.getLocation();
            // cc.log(this.Playerwrap);
            var tempPlayer = this.bg.parent.convertToNodeSpaceAR(temp);
            console.log(tempPlayer.x);
            console.log(tempPlayer.y);
            this.buttle.addbullet(tempPlayer.x + cc.find("Canvas/Main Camera").x, tempPlayer.y + cc.find("Canvas/Main Camera").y);
        }, this)
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        
    },

    onKeyDown(event) {
        this.gamemap = this.node.getChildByName('gamemap');
        this.Player = this.Playerwrap;
        this.PlayerAni = this.Player.getComponent('cc.Animation');
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.movestate = 1;     //控制方向为上
                break;
            case cc.macro.KEY.a:
                this.movestate = 2;     //控制方向为左
                break;
            case cc.macro.KEY.s:
                this.movestate = 3;     //控制方向为下
                break;
            case cc.macro.KEY.d:
                this.movestate = 4;     //控制方向为右
                break;
        }
    },

    move(){
        
    },

    start() {
    },

    update(dt) {
        switch (this.state) {
            case 0:       //当状态为静止时
                break;
            case 1:       //当状态为移动时
                switch(this.movestate){
                    case 1:     //当移动方向为上
                        break;
                    case 2:     //当移动方向为左
                        break;
                    case 3:     //当移动方向为下
                        break;
                    case 4:     //当移动方向为右
                        break;
                }
                break;
            case 2:
                break;
        //     case "up":
        //         var seq = cc.sequence(
        //             cc.moveBy(0.2, 0, 0),
        //             cc.moveBy(0.2, 0, 30),
        //         );
        //         this.Player.runAction(seq);
        //         this.PlayerAni.play('up');
        //         this._soloTime = 0;
        //         break;
        //     case "left":
        //         var seq = cc.sequence(
        //             cc.moveBy(0.2, 0, 0),
        //             cc.moveBy(0.2, -30, 0),
        //         );
        //         this.Player.runAction(seq);
        //         this.PlayerAni.play('left');
        //         this._soloTime = 0;
        //         break;
        //     case "right":
        //         var seq = cc.sequence(
        //             cc.moveBy(0.2, 0, 0),
        //             cc.moveBy(0.2, 30, 0),
        //         );
        //         this.Player.runAction(seq);
        //         this.PlayerAni.play('right');
        //         this._soloTime = 0;
        //         break;
        //     case "down":
        //         var seq = cc.sequence(
        //             cc.moveBy(0.2, 0, 0),
        //             cc.moveBy(0.2, 0, -30),
        //         );
        //         this.Player.runAction(seq);
        //         this.PlayerAni.play('down');
        //         this._soloTime = 0;
        //         break;
        //     default:
        //         var seq = cc.sequence(
        //             cc.moveBy(0.2, 0, 0),
        //             cc.moveBy(0.2, 0, 0),
        //         );
        //         this.Player.runAction(seq);
        //         this._soloTime = 0;
        //         break;
        }
    },
});
