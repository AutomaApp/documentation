---
title: 全局数据
---

# 全局数据

在您的工作流中定义或使用全局变量。例如，您有多个新标签模块，其中 URL 输入具有相同的域名，例如 "http://dribbble.com"。您可以在全局数据中定义 URL 域名，而不是逐个编辑模块以更改 URL 域名，如下所示：

```json
{
  "url": "https://dribbble.com"
}
```

然后可以在新标签模块的 URL 文本字段中使用 [表达式](./expressions.md) 访问全局数据。例如，<code v-pre>{{globalData.url}}</code>

![URL 输入](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16bhla-4b.png)
