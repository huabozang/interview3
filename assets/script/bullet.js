// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        attcak: 5,
        speed: 12,
        angle: 0,
        targetX: 0,
        targetY: 0,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    start() {
        this.getAngle()
    },

    onCollisionEnter(other, self) {
        self.node.destroy();
        other.node.destroy();

    },

    getAngle () {
        var canvas=cc.find("Canvas/gamemap");
        this.angle = Math.atan2(this.targetY - this.node.parent.y, this.targetX - this.node.parent.x);
    },

    move() {
        let moveX = Math.cos(this.angle) * this.speed;
        let moveY = Math.sin(this.angle) * this.speed;
        this.node.x += moveX;
        this.node.y += moveY;
    },

    update(dt) {
        this.move();
    },
});
