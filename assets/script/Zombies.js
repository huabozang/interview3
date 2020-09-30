// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        ZombiesPrefab: {
            type: cc.Prefab,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {

    // },

    start() {
        this.ZombiesPool = new cc.NodePool();
        let initCount = 20;
        for (var i = 0; i < initCount; i++) {
            let Zombies = cc.instantiate(this.ZombiesPrefab);
            this.ZombiesPool.put(Zombies);
        }
        this.schedule(function () {
            this.addZombies(i);
        }, 2, 15);
    },

    addZombies: function (parentNode) {
        let Zombies = null;
        if (this.ZombiesPool.size() > 0) {
            Zombies = this.ZombiesPool.get();
        } else {
            Zombies = cc.instantiate(this.ZombiesPrefab);
        }
        cc.find("Canvas/Zombies").addChild(Zombies);
    },

    onZombiesKilled() {
        this.ZombiesPool.put(Zombies);

    },

    move() {
    }

    // update (dt) {},
});
