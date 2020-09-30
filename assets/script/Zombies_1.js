// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        maxHP: 10,
        hp: 10,
        speed: 1,
        angle: 0,
        targetX: 0,
        targetY: 0,
        time: 0,
        movePath:[],
        index:0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.node.x = 0;
        this.node.y = 0;
        this.movePath=[{x:700,y:700},{x:750,y:850},{x:850,y:950}];
    },

    move() {
        this.angle = Math.atan2(this.targetY - this.node.y, this.targetX - this.node.x);
        let moveX = Math.cos(this.angle) * this.speed;
        let moveY = Math.sin(this.angle) * this.speed;
        let anim = this.getComponent(cc.Animation);
        if (Math.abs(moveX) > Math.abs(moveY)) {
            if (this.time > 1) {
                anim.play("ZombiesAni");
                this.time = 0;
            }
            if (moveX > 0) {
                this.node.scaleX = 1;
            } else {
                this.node.scaleX = -1;
            }
        } 
        this.node.x += moveX;
        this.node.y += moveY;
    },

    update(dt) {
        this.time += dt;
        this.move();
        if (Math.hypot(this.targetX - this.node.x, this.targetY - this.node.y) <= this.speed * 2 - 1) {
            this.targetX = this.movePath[this.index].x;
            this.targetY = this.movePath[this.index].y;
            if(this.index + 1 < this.movePath.length){
                this.index++;
            }
        }
        if (this.hp <= 0) {
            this.node.onZombiesKilled();
        }
    },
});
