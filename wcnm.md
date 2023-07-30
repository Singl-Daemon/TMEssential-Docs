# 常见问题

> 忽略这个具有攻击性的网址

这个页面我要介绍一些在安装中容易出现的问题和解决方法

## 经济类问题

首先出场的是经典的,让群 u 津津乐道,萌新一脸懵逼,管理血压升高的问题
这个问题**比较常见**,会在你装完插件后出现:

`15:26:50 ERROR [LiteLoader] Command "money" already exists
`<br/>
`15:26:50 ERROR [TMEssential] 命令: money 注册失败!请检查此命令是否被其他插件注册!`

出现这个问题,通常是你的服务器你有一个叫作 LLMoney.dll 的插件<br/>
LLMoney 是 LiteLoaderBDS 的**经济核心**,提供了`/money`等一系列命令<br/>

在没有经济插件的地方,一个叫作`计分板`的东西被用做经济核心,存储玩家经济等一系列数据

TMEssential 的经济模块提供了计分板和 LLMoney 两种模式,都可以对当前的经济核心提供 GUI 图形界面等强大功能

### LLMoney用户解决方案

要想修复这个问题,我们要前往`.\plugins\Timiya\config\TMEssential.json`,改动一些配置

这就是 TMEssential 的配置文件:

```json
{
  "Enable": true,
  "AutoUpdate": {
    "Enable": true,
    "AutoReload": true
  },
  "SelectForm": {
    "Subsection": 40
  },
  "Language": {
    "Default": "zh_CN",
    "Cmd": "language"
  },
  "TPA": {
    "Enable": true,
    "ExpirationTime": 40,
    "ConsumeMoney": 0
  },
  "WARP": {
    "Enable": true,
    "ConsumeMoney": 0
  },
  "Back": {
    "Enable": true,
    "MaxSave": 5,
    "SaveToFile": true,
    "InvincibleTime": 5,
    "ConsumeMoney": 0
  },
  "Home": {
    "Enable": true,
    "MaxHome": 3,
    "SaveRequiredMoney": 0,
    "GoHomeRequiredMoney": 0,
    "DelHomeBackOffMoney": 0
  },
  "Money": {
    "Enable": true,
    "MoneyType": "score", //一会你就要改这个
    "MoneyName": "money",
    "PayTaxRate": 0,
    "HistoryLength": 10,
    "MaxRankingQuantity": 100,
    "MoneyChangeMsg": true,
    "PlayerInitialMoney": 0
  },
  "Notice": {
    "Enable": true,
    "JoinOpenNotice": true,
    "NoticeTitle": "hello",
    "NoticeText": "test"
  },
  "Shop": {
    "Enable": true
  },
  "DynamicMotd": {
    "Enable": true,
    "Time": 5,
    "MotdList": ["test", "test2"]
  },
  "TPR": {
    "Enable": true,
    "MaxXZCoordinate": 10000,
    "MinXZCoordinate": -10000,
    "ConsumeMoney": 0
  },
  "RefreshChunk": {
    "Enable": true,
    "ConsumeMoney": 0
  },
  "FarmLandProtect": {
    "Enable": true,
    "Type": 0
  },
  "UseLog": {
    "Enable": true,
    "Conf": {
      "API": false,
      "Language": true,
      "TPA": true,
      "WARP": true,
      "Back": true,
      "Home": true,
      "Money": true,
      "Notice": true,
      "Shop": true,
      "DynamicMotd": false,
      "TPR": true,
      "RefreshChunk": true,
      "FarmLandProtect": false
    }
  }
}
```

在第 39 行,你会看见这个:
`"MoneyType": "score",`

如果你不知道你的经济类型,那就把`MoneyType`后面的`score`改成`llmoney`,保存后重启服务器即可

**警告:绝对不要用记事本改,否则会发生编码错误问题**<br/>
**必须使用 VSCode.Subline Text 等专业编辑器**

**警告:绝对不要用记事本改,否则会发生编码错误问题**<br/>
**必须使用 VSCode.Subline Text 等专业编辑器**

**警告:绝对不要用记事本改,否则会发生编码错误问题**<br/>
**必须使用 VSCode.Subline Text 等专业编辑器**

**重要的事情说三遍**

经济类型为 llmoney 的同上

### 计分板用户解决方案

如果你的服务器是使用的计分板类型的经济,那就不用管这个,去解决一下 LiteLoader 的配置文件,它是`\plugins\LiteLoader\LiteLoader.json`

内容如下(注意,本文使用的配置文件是 LiteLoaderBDS 2.15.0,随时间推移可能会发生变化):

```json
{
  "ColorLog": true,
  "DebugMode": true,
  "Language": "system",
  "LogLevel": 4,
  "Modules": {
    "AddonsHelper": {
      "autoInstallPath": ".\\plugins\\AddonsHelper\\",
      "enabled": true
    },
    "CheckRunningBDS": {
      "enabled": true
    },
    "CrashLogger": {
      "enabled": true,
      "path": ".\\plugins\\LiteLoader\\CrashLogger.exe"
    },
    "DisableAutoCompactionLog": {
      "enabled": true
    },
    "EconomyCore": {
      "enabled": true //一会改这个
    },
    "ErrorStackTraceback": {
      "cacheSymbol": false,
      "enabled": true
    },
    "FixAbility": {
      "enabled": true
    },
    "FixBDSCrash": {
      "enabled": true
    },
    "FixBroadcastBug": {
      "enabled": true
    },
    "FixListenPort": {
      "enabled": false
    },
    "FixMcBug": {
      "enabled": true
    },
    "ForceUtf8Input": {
      "enabled": false
    },
    "OutputFilter": {
      "enabled": false,
      "filterRegex": [],
      "onlyFilterConsoleOutput": true
    },
    "ParticleAPI": {
      "enabled": false
    },
    "PermissionAPI": {
      "enabled": true
    },
    "SimpleServerLogger": {
      "enabled": true
    },
    "TpdimCommand": {
      "enabled": true
    },
    "UnlockCmd": {
      "enabled": true
    },
    "UnoccupyPort19132": {
      "enabled": true
    },
    "WelcomeText": {
      "enabled": true
    }
  },
  "ResourcePackEncryption": {},
  "ScriptEngine": {
    "alwaysLaunch": false,
    "enabled": true
  },
  "Version": 1
}
```

在 21 和 22 行,我们会看见这个:

        "EconomyCore": {
            "enabled": true

现在,把他的 enabled 后面的 true 改成 false,Ctrl+S 保存,退出,重启服务器

**警告:绝对不要用记事本改,否则会发生编码错误问题**<br/>
**必须使用 VSCode.Subline Text 等专业编辑器**

## 较严重的崩溃问题

首先你要明确的是: **TMEssential 绝对不会引起崩服**

那么崩溃就要从别的地方找原因了

### Python引擎崩溃
比如 wine 用户,部分非 Windows 环境的面板用户,或者**尊贵的简幻欢用户**常见的问题:

遇到类似于`Python` `random`字样的错误,服务器无法开启

你需要知道的是,脚本引擎在 LL 里一共有三个:
`JavaScript(QuickJS)`,`Lua`,`Node.JS`,还有个`Python`

LL 貌似没有搞好按需启动脚本引擎~~要挨打惹~~,只要有一个脚本插件就会把所有的脚本引擎拉起来,即使他们不需要加载

而这个 Python 引擎又刚好和`wine`相处不咋地,加载就会崩溃

所以 TMEssential 安装可能会造成上述环境的用户无法开启服务器

解决方法也很简单,前往`plugins\LiteLoader`

删掉`LiteLoader.Python.dll`,重启服务器

**注意:删除之前先把服务器关掉**


### 其他问题

你要是看见插件生成了xxxxxxx.TMETERROR文件,那就看群公告丢进对应的文件夹,反馈给作者

没生成或者只有红字且与TMET有关,那就截图反馈到群里