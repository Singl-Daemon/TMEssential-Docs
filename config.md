# 配置和数据文件详解

> [!Warning|style:flat]
> 任何对于配置文件的操作都必须使用专业的文本编辑器

> 只用记事本更改早晚出事

## 数据目录结构

在`plugins`文件夹会有一个叫 Timiya 的文件夹~~作者特殊标识(雾~~,里面的数据结构如下:

```filetree
Timiya/
├─config/   // 配置文件夹，一般提米系的插件配置文件都在这里
│      TMEssential.json    // TMEssential的配置文件
│
├─data/    // 数据文件夹，很多数据存放在这里
│      deathlist.json  // 持久化保存死亡点
│      history.json  // 转账记录文件
│      homelist.json  //玩家的home列表
│      langsetting.json  // 玩家的语言偏好设置
│      noticedata.json  // 关于公告的数据文件
│      offlineMoney.json  // 离线经济存储文件
│      shopdata.json  // 商店配置文件
│      tpasetting.json  // 玩家互传的偏好设置
│      warplist.json  // 地标配置文件
│
└─lang/  // 语言文件夹，有语言文件可以放在这个文件夹里
       zh_CN.json  // 默认的简体中文语言文件
```

## TMEssential 配置文件

TMEssential 的配置文件使用 json 存储，json 易读性较好

> [!TIP|style:flat] 配置文件使用 UTF-8 编码格式存储,使用记事本可能会被莫名其妙改的多了个 BOM

全局配置文件为 `TMEssential.json`，位于 `TMEssential/config` 目录下

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
    "SaveRequiredMoney": 0, // 设置home耗费的经济
    "GoHomeRequiredMoney": 0, // 前往home耗费的经济
    "DelHomeBackOffMoney": 0 // 删除homo(察觉)返还的经济
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

### 死亡点数据文件说明

todo(我这没找着文件)

### 转账记录数据文件说明

todo(我这没找着文件)

### 玩家 home 列表文件说明

用本人的数据文件做个注释:

```json
{
  "SilverSlinky606": {
    // 玩家名，名下可以有多个home(看你配置文件喽
    "test": {
      // 玩家设置的home的名字
      "x": 49524.9, // x
      "y": 65.6, // y
      "z": 50752.2, // z
      "dimid": 0 // dimid：0为主世界，1为地狱，2为末地
    }
  }
}
```

### 语言偏好数据文件说明

todo(我这还是没有)

### 公告数据文件说明

todo(没有没有没有)

### 离线经济存储文件说明

举个例子:

```json
{
  "1145141919810": 114514
  // 前面的数字是玩家的xuid，正版验证下每个玩家的xuid是唯一的，相当于身份证号码
  // 后面的数据是玩家的经济
}
```

> [!ATTENTION|style:flat] 通常来说不能更改此配置，后果自负

### 商店配置文件说明

```json
{
  "Buy": [
    //购买菜单,以下内容仅会出现在购买表单中
    {
      "type": "group", //类型 (group为分类
      "data": [
        // 按钮数据 type为group为数组
        // 这里原文可能有点晦涩难懂，你就可以理解为data里面是一堆物品的集合
        {
          "name": "空气", // 按钮名称
          "type": "exam", // 类型 (exam 为商品
          "data": {
            // 看上面的type，是exam就是该商品的数据
            "type": "minecraft:air", // 物品命名空间ID，同样可以百度一下
            "aux": 0, // 物品的特殊值，这个可以百度一下
            "remark": "", //商品备注
            "money": 11 // 购买一个所需的经济
          }
        },
        {
          "name": "bread", // 按钮名称
          "type": "exam", // 类型 (exam 为商品
          "data": {
            //看上面的type，是exam就是该商品的数据
            "type": "minecraft:bread", // 物品命名空间ID，同样可以百度一下
            "aux": 0, // 物品的特殊值，这个可以百度一下
            "remark": "", // 商品备注
            "money": 2 // 购买一个所需的经济
          }
        }
      ]
    },
    {
      "name": "air", // 按钮名称
      "type": "exam", // 类型（exam为商品
      "data": {
        // 数据 (type为exam为物品对象
        // 这里明显与上面不同，说明了data内数据实际上由type决定
        // group为数组(集合)，exam为单物品
        "type": "minecraft:air", // 物品命名空间ID，同样可以百度一下
        "aux": 0, // 物品的特殊值，这个可以百度一下
        "remark": "", // 商品备注
        "money": 11 // 购买一个所需的经济
      }
    }
  ],
  "Sell": [
    // 卖出菜单，以下内容仅会在售出菜单出现
    // 这里和上面Buy的很像，故不写注释
    {
      "name": "xx分类",
      "type": "group",
      "data": [
        {
          "name": "空气",
          "type": "exam",
          "data": {
            "type": "minecraft:air",
            "aux": 0,
            "remark": "",
            "money": 11 // 回收一个所获得的经济
          }
        },
        {
          "name": "bread",
          "type": "exam",
          "data": {
            "type": "minecraft:bread",
            "aux": 0,
            "remark": "",
            "money": 1
          }
        }
      ]
    },
    {
      "name": "redstone",
      "type": "exam",
      "data": {
        "type": "minecraft:redstone",
        "aux": 0,
        "remark": "",
        "money": 11
      }
    }
  ]
}
```

### 玩家互传偏好设置文件说明

没找着

### 地标配置文件说明

```json
{
  "§1提米家": {
    // 传送点的名字
    "x": 114514.1, // x
    "y": -255, // y
    "z": 1919.81, // z
    "dimid": 1 // dimid：0为主世界，1为地狱，2为末地
  }
}
```
