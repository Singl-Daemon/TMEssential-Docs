# 配置和数据文件详解

## TMEssential 配置文件
TMEssential 的配置文件使用 json 存储，json 易读性比较好，有一点英语知识都能看懂

总的配置文件长这样：

```json
{
  "Enable": true,
  // TMEssential的总开关，关掉插件不会起任何作用
  // 仅用于错误排查和配置文件安装
  "AutoUpdate": {
    // 自动更新配置
    // 插件可以自行搜索更新并安装，得益于LLSE的热重载技术，通常JavaScript插件可以免重启更新
    "Enable": true, // 自动更新总开关
    "AutoReload": true
    // 在没有特殊情况下自动更新是否自动重载自身
    // 特殊情况就是需要重启服务器的更新
  },
  "SelectForm": {
    // 选择表单的配置
    // 无特殊需要可以不碰
    "Subsection": 40
    // 一页表单最多会有多少个选择项
    // 发送的GUI内最多会有多少个按钮
  },
  "Language": {
    // 语言配置
    // 适配多语言，让不同语言的人都能正常玩耍
    "Default": "zh_CN", // 默认语言，zh_CN为中文
    "Cmd": "language" // 注册的语言命令，使用此命令切换语言
  },
  "TPA": {
    // 玩家互传模块
    // 可让玩家互相传送，有tpa(请求到目标玩家的位置)和tpahere(请求目标玩家到请求玩家的位置)
    "Enable": true, // TPA模块开关
    "ExpirationTime": 40, // 请求超时时间(秒)，超时后请求将过期作废
    "ConsumeMoney": 0 // 传送成功后消耗的经济，0为无消耗
  },
  "WARP": {
    // 公共传送点(地标)模块
    // 由服务器管理组设置，提供一个统一的传送点供玩家使用
    "Enable": true, // 模块开关
    "ConsumeMoney": 0 // 传送一次所耗费的经济
  },
  "Back": {
    // 死亡点模块
    // 玩家趋势后提供记录和位置回溯功能
    "Enable": true, // 模块开关
    "MaxSave": 5, // 一个玩家最大可以保存的死亡点量
    "SaveToFile": true, // 是否保存至文件(服务器重启后玩家死亡点是否仍旧存在
    "InvincibleTime": 5, // 返回死亡点后的无敌时间(秒),防止因网络延迟而白死一次
    "ConsumeMoney": 0 //返回死亡点耗费的经济
  },
  "Home": {
    // (字面意思)配置
    // 个人觉得叫家太别扭，这里全用home代替
    // 玩家可自定义的传送点，随时可传送
    "Enable": true, // 模块开关
    "MaxHome": 3, // 最大可设置的home的数量
    "SaveRequiredMoney": 0, //设置home耗费的经济
    "GoHomeRequiredMoney": 0, //前往home耗费的经济
    "DelHomeBackOffMoney": 0 //删除homo(察觉)返还的经济
  },
  "Money": {
    // 经济模块配置
    // 为当前经济模块提供增强功能
    "Enable": true, // 模块开关
    "MoneyType": "score", // 经济模式(选填score或者llmoney
    "MoneyName": "money", // 经济名称(显示在服务器内给玩家看的
    "PayTaxRate": 0.0, // 转账税率(%)
    "HistoryLength": 10, // 一个玩家的最大流水账记录次数(0为关闭,-1为无限
    "MaxRankingQuantity": 100, // 排行榜最大显示排行数量
    "MoneyChangeMsg": true, // 经济变更提示开关
    "PlayerInitialMoney": 0 // 玩家初始经济(llmoney模式不用管
  },
  "Notice": {
    // 公告模块配置
    // 给玩家发送一则信息
    "Enable": true, // 模块开关
    "JoinOpenNotice": true, // 玩家进服时是否发送公告
    "NoticeTitle": "hello", // 发送公告的标题
    "NoticeText": "test" // 发送公告内容，好像可以使用\n换行符
  },
  "Shop": {
    // 商店模块配置
    // 具体一会往下翻就知道了
    "Enable": true // 模块开关
  },
  "DynamicMotd": {
    // 动态服务器消息展示配置
    // 什么是motd? 就是你没进服之前服务器名字地下那一行小字
    "Enable": true, // 模块开关
    "Time": 5, // 切换时间(秒)
    "MotdList": [
      // Motd列表
      "test",
      "test2"
    ]
  },
  "TPR": {
    // 随机传送模块配置
    // 我墙裂推荐你用这个模块
    "Enable": true, //开关
    "MaxXZCoordinate": 10000, // 最大X和Z轴
    "MinXZCoordinate": -10000, // 最小X和Z轴
    // 看不懂不要紧，上面这个意思就是X轴和Y轴在-10000 ~ 10000之间取值
    "ConsumeMoney": 0 // 传送一次耗费的经济
  },
  "RefreshChunk": {
    // 刷新客户端区块配置
    // 重载玩家所在的区块，我也不知道能干啥(
    "Enable": true, // 模块开关
    "ConsumeMoney": 0 // 刷新一次消耗的经济
  },
  "FarmLandProtect": {
    // 耕地保护配置
    // 字面意思，可以保护耕地不被踩坏
    "Enable": true, // 模块开关
    "Type": 0
    //保护类型(0为全部拦截,1只会拦截null对象造成耕地破坏,2只会拦截非玩家破坏,3只会拦截玩家破坏
  },
  "UseLog": {
    // 使用日志配置
    // 每个模块被使用时向文件内写入日志
    "Enable": true, // 模块开关
    "Conf": {
      // 配置哪个模块将会写入日志
      "API": false, // 当有插件调用API时
      "Language": true, // 使用language命令时
      "TPA": true, // 使用TPA模块时
      "WARP": true, // 使用公共传送模块时
      "Back": true, // 使用返回死亡点模块时
      "Home": true, // 使用home模块时
      "Money": true, // 调用经济模块时
      "Notice": true, //使用公告模块时
      "Shop": true, //使用商店模块时
      "DynamicMotd": false, // 动态motd? 无需开启
      "TPR": true, // 使用tpr模块时
      "RefreshChunk": true, // 重载区块时
      "FarmLandProtect": false // 耕地保护模块被调用时
    }
  }
}
```
