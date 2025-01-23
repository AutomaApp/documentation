---
title: 等待连接块
---

# 等待连接块

在继续下一个块之前，等待所有连接到此块的执行结束。

当您在工作流中有分支块时使用此块。

![等待连接](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/17yal8-p0.png)

- **超时（毫秒）** <br>
  设置块等待所有流程完成执行的时间，默认为 10000 毫秒（10 秒）。一旦达到超时，工作流将继续执行下一个块。

## 仅继续特定流程
是否仅继续特定流程。

当您有如上图所示的分支块时，Automa 将为每个新分支创建一个新的"工作者"，其任务是执行该分支上的块。

![分支](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/17yal7-1a.png)

当您合并分支而未启用此选项时，每个工作者将执行相同的块，块将执行多次。

![特定流程禁用](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/108gx9-5b.gif)

为防止这种情况，请启用此选项并选择要继续的特定流程。

![特定流程启用](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/1090fl-d4.gif)
