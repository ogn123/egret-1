var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
/* 玩家数据对象 */
var PlayerData = (function () {
    function PlayerData() {
        /*玩家id*/
        this.id = 0;
        /*玩家名字*/
        this.name = null;
    }
    return PlayerData;
}());
__reflect(PlayerData.prototype, "PlayerData");
//# sourceMappingURL=PlayerData.js.map