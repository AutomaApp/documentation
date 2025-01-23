---
title: 调试模式
---

# 调试模式
当启用调试模式时，Automa 将使用 Chrome Devtools Protocol API（简称“CDP”）来模拟用户操作，例如点击和输入，而不是使用 JavaScript API。

调试模式仅在 Chromium 版本的 Automa 中可用。

## 启用调试模式
有两种方法可以启用调试模式，第一种是通过工作流设置，第二种是通过模块设置。当您在工作流设置中启用调试模式时，Automa 将在整个模块中使用 CDP API。

![工作流设置](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16oapo-0c.png)

如果您只想在特定模块中使用调试模式，可以在模块设置中启用它。

## 何时使用调试模式
当您想在网站上输入文本，但文本框使用的是所见即所得（WYSIWYG）编辑器时，可以使用调试模式。例如，在编辑器中输入推文或在 Discord 中使用 [表单模块](../blocks/forms.md) 写消息。

![模块设置](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16oapn-0l.png)

或者，当您想使用 [触发事件模块](../blocks/trigger-event.md) 通过 X 和 Y 坐标执行点击操作时。

![触发事件模块](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16oapo-9u.png)

在这些情况下，Automa 无法通过 JavaScript API 模拟输入或点击操作。