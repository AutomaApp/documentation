---
title: 快速入门
---

# 快速入门
本节将通过构建您的第一个工作流(workflow)，让您快速体验 Automa。在 Automa 中，有两种创建工作流的方法：
1. 通过录制您的网页操作
2. 手动创建

## 录制操作

录制是构建工作流最简单的方法。请点击右上角的 Automa 图标打开 Automa 总览页。接着，点击向下箭头图标 <v-remixicon name="riArrowLeftSLine" rotate="-90" />，选择“录制工作流”菜单。

![开始录制](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/11/29/ztyhv-eg.png)

当 Automa 开始录制时，它会记录您所有的操作，比如创建新标签、滚动、点击和输入文本。在录制过程中，您还可以选择一个元素以提取其文本或属性值。

![选择元素](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/11/29/ztyhu-qm.png)

要停止录制，请打开 Automa 弹出窗口并点击 ⏹️ 按钮。要了解更多关于录制工作流的信息，您可以观看相关的视频教程。

<iframe width="100%" height="400" src="https://www.youtube.com/embed/NmRCgLtsPnY" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 从工作流中的特定块开始录制
如果您已经创建了一个工作流，并希望从工作流中的特定块开始录制，可以右键点击该块的输出，然后选择“从这里录制”菜单。

![录制](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/zzlqq-rx.gif) 

## 手动创建

要手动创建工作流：
1. 点击右上角的 Automa 图标打开 Automa 总览页。
2. 点击“新建工作流”按钮，并输入工作流的名称和描述。
3. 打开您刚创建的工作流。

在编辑器中，您会看到一个触发模块。这个触发模块是工作流开始执行的地方，您还可以在这个模块中设置工作流的运行时间。

要向工作流中添加一个模块，请从左侧的模块列表中拖动一个模块并放到画布上。要将触发模块与您添加的模块连接，请拖动触发模块的输出（模块右侧的空心圆点）并放到模块的输入上（模块左侧的实心圆点）。

![添加模块](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/zzlqp-a3.gif)

保存工作流后，您可以通过点击图标 <v-remixicon name="riPlayLine" /> 来运行工作流。