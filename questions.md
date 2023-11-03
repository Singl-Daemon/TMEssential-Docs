# 常见问题

这里将列举一些比较常见的问题以及解决方法

###  Another TMET is already running!

有关的报错信息如下:

```
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] Another TMET is already running! Please check the plugin list!
11:45:14 ERROR [TMEssential] 捕获到未处理错误: Error: NotBug: STOP
Error: NotBug: STOP
    at node:embedder_main_0:5915:15
    at node:embedder_main_0:5919:3
11:45:14 ERROR [TMEssential] 此错误不为bug!将不会收集错误信息!
```

此类型报错通常会重复输出10行，并伴有错误代码Error: NotBug: STOP

问题起因: 安装了数量多于1的TMEssential插件(例如同时安装了NodeJS和QJS版本)

解决方法: 卸载多余的TMEssential

如果你是全新安装时出现报错，删掉`./plugins`下的TMEssential.js即可



### 命令: money 注册失败!

有关的报错信息如下:

```
17:53:19 ERROR [LiteLoader] Command "money" already exists
17:53:19 ERROR [TMEssential] 命令: money 注册失败!请检查此命令是否被其他插件注册!
```

问题起因: 存在不止一个插件注册了/money命令，通常为LLMoney引起

解决方法: 前往TMEssential的配置文件中启用LLMoney兼容模式，或卸载LLMoney插件(直接删除LLMoney.dll)

> [!Warning|style:flat]
> 硬盘有价，数据无价，任何涉及玩家数据的操作前请务必完整备份！


## 其他问题

TMEssential通常会在异常发生时生成一份错误日志，请务必在问题发生时将此日志发送至timi用户QQ交流群(1073980007)或Gitee Issues，这有助于我们诊断问题
