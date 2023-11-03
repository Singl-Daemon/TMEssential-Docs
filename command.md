# 插件命令详解

## 语言相关命令

```mccommand
/language //打开语言切换GUI
/language <input:LangPackName> //切换语言
```

## TPA 相关命令

```mccommand
/tpa // 打开tpa面板
/tpahere // 同上
/tpa gui // 同上
/tpa ui // 开启或者关闭别人发来的请求ui
/tpa to <playerName:string> // 请求传送到某人
/tpahere to <playerName:string> // 请求某人传送到自己
/tpaaccept // 接受请求
/tpadeny // 拒绝某人的请求或者取消自己的请求
```

## Home 相关命令

```mccommand
/home // 打开home菜单
/home ls // 查看家列表
/home go <homeName:string> // 去往某个家
/home add <homeName:string> // 添加一个家
/home del <homeName:string> // 删除某个家
/homeas // 打开home管理菜单(仅op)
/homeas <playerName:string> ls // 查看某人的家列表(仅op)
/homeas <playerName:string> go <homeName:string> // 去往某人的某个家(仅op)
/homeas <playerName:string> add <homeName:string> // 给某人添加一个家(仅op)
/homeas <playerName:string> del <homeName:string> // 让某人痛失一个家(仅op)
```

## Warp 相关命令

```mccommand
/warp // 打开warp菜单
/warp ls // 列出传送点
/warp go <warpName:string> //  去往某传送点
/warp add <warpName:string> // 添加一个传送点(仅op)
/warp del <warpName:string> // 删除某传送点(仅op)
```

## Back 相关命令

```mccommand
/back // 前往最近的死亡点(这里的最近是时间上不是距离上)
/death // 查看前几次的死亡信息
```

## Money 相关命令

```mccommand
/money // 打开money表单
/money gui // 同上
/money top // 查看排行榜
/money hist <playerName:string> // 查看流水账
/money pay <playerName:string> <Num:int> // 给某人打钱
/money query [playerName:string] // 查询自己或者某人的经济
/money add <playerName:string> <Num:int> // 给某人添加经济(仅op)
/money set <playerName:string> <Num:int> // 设置某人的经济(仅op)
/money reduce <playerName:string> <Num:int> // 扣除某人的经济(仅op)
```

> [!TIP|style:flat]
> 在 LLMoney 模式下部分命令将直接使用 LLMoney 内置命令而不是 TMEssential 的

## Notice 相关命令

```mccommand
/notice // 打开公告
/notice_op // 编辑公告(仅op)
```

## Shop 相关命令

```mccommand
/shop // 打开商店总菜单
/shop buy // 打开购买菜单
/shop sell // 打开卖出菜单
```

## TPR 相关命令

```mccommand
/tpr // 使用随机传送
```

## 刷新区块命令

```mccommand
/rc // 刷新区块
```

## 控制台命令

> [!TIP|style:flat]
> 以下命令只能在控制台使用，不能由玩家和OP使用

```mccommand
/tmet reloaddata // 重新从硬盘加载所有已经加载过的数据文件
/tmet lslangpack // 列出所有存在的语言包
/tmet unloadlangpack <LangPackName:string> // 热卸载已加载的语言包
/tmet reloadlangpack <LangPackName:string> // 重载已加载的语言包
/tmet loadlangpack <LangPackName:string> // 热加载语言包
```
