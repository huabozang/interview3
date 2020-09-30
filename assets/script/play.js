// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
        bulletPrefab: {
            type: cc.Prefab,
            default: null
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    onCollisionEnter(other, self) {
        if (self.tag != other.tag) {
            cc.director.pause()
        }
    },

    start() {
        this.bulletPool = new cc.NodePool();
        let initCount = 30;
        for (var i = 0; i < initCount; i++) {
            let bullet = cc.instantiate(this.bulletPrefab);
            this.bulletPool.put(bullet);
        }
    },

    addbullet(targetX,targetY) {
        var bullet = null;
        if (this.bulletPool.size() > 0) {
            bullet = this.bulletPool.get();
        } else {
            bullet = cc.instantiate(this.bulletPrefab);
        }
        bullet.getComponent("bullet").targetX = targetX;
        bullet.getComponent("bullet").targetY = targetY;
        this.node.addChild(bullet)
    },
    
    onbulletKilled() {
        this.bulletPool.put(bullet);
    },

    // update (dt) {},
});
