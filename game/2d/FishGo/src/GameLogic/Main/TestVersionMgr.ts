/**
 * Created by confiner.kang on 2017/5/5.
 */
/*测试版管理器*/
class TestVersionMgr{
    private _hero:Player = null;    // 主角
    private constructor(){
    }

    private static _inst:TestVersionMgr = null;

    /*提供单例对象*/
    public static get inst():TestVersionMgr{
        if(!TestVersionMgr._inst)
            TestVersionMgr._inst = new TestVersionMgr();

        return TestVersionMgr._inst;
    }

    /*初始化*/
    public initialize():void{
        // 资源预加载｛场景资源 角色资源 怪物资源｝

        // 注册主题
        ThemeMgr.inst.registerTheme(()=>{
            console.log("主题注册完成");
        });

        // 初始化输入管理器
        InputMgr.inst.initialize(InputMgr.JOYSTICK_INPUT);  // 摇杆输入

        // 初始化摄像机
        let camer:Camera = CameraMgr.inst.createCamera(Camera.TYPE_DEFAULT, 1280, 960);
        camer.focusWidth = 320;
        camer.focusHeight = 240;

        // 初始化一份玩家数据
        var playerData:PlayerData = new PlayerData();
        playerData.id = 1001;
        playerData.templateId = 3;
        let ani:ActionAni  = new ActionAni();
        // ani.unique = "attack1_+1";
        // ani.skill = "attack1";
        // ani.attack = "attack";
        // ani.stand = "steady";
        // ani.born = "steady";
        // ani.walk = "steady2";
        ani.unique = "uniqueAttack";
        ani.skill = "skillAttack1";
        ani.attack = "normalAttack";
        ani.stand = "win";
        ani.born = "win";
        ani.walk = "run";
        ani.death = "death";
        ani.damage = "hit";
        playerData.actionAni = ani;
        playerData.name = "测试名字";
        playerData.avatar = playerData.templateId + "_player";
        playerData.attack = 1000;
        playerData.defense = 200;
        playerData.gold = 123;
        playerData.money = 321;
        playerData.weaponId = 1;
        playerData.lv = 23;
        // 添加玩家数据
        PlayerDataMgr.inst.addPlayerData(playerData, true); // 英雄玩家

        // 创建一个玩家
        var player:Player = PlayerMgr.inst.createPlayer(playerData.templateId, playerData.id);
        CameraMgr.inst.setTarget<Player>(player);

        ResourceMgr.inst.loadGroup("home_ui", ()=>{
            // 进入场景
            SceneMgr.inst.enter(6);
        })
    }

    /*开始游戏*/
    public start():void{
        let player:Player = PlayerMgr.inst.getPlayer(1001);   // 获取一个玩家
        if(player)
            player.born(500, 500);

        this._hero = player;
        this._hero.speed = 10;
        /*let player1:Player = PlayerMgr.inst.getPlayer(1002);   // 获取一个玩家
        if(player1)
            player1.born(300, 500);*/
    }
}