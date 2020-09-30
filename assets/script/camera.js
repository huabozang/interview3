// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Player:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //cc.log(this.node);
        this.camera = this.node.getComponent(cc.Camera);
    },

    start () {
        this.x = this.node.x;
        this.y = this.node.y;
    },

    update (dt) {
        let targetPos = this.Player.convertToWorldSpaceAR(
            cc.Vec2.ZERO.add({x:this.x,y:this.y}));
        let pos = this.node.parent.convertToNodeSpaceAR(targetPos);
        this.node.position = pos;
    },
});
