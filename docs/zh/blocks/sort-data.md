---
title: 切换标签块
---

# 切换标签块

在标签之间切换。

## 按照以下方式查找标签

### 匹配模式
标签的 URL 模式。例如，`https://google.com/*`，Automa 将切换到具有 `google.com` 域的标签。
您可以在 [MDN 页面](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#examples) 上查看匹配模式的更多示例。

#### 如果没有匹配则创建
如果没有与模式匹配的标签 URL，Automa 将根据输入的 URL 创建一个新标签。

### 下一个标签
切换到活动标签的下一个标签。

### 上一个标签
切换到活动标签的上一个标签。

### 标签索引
根据标签的索引位置切换标签。例如，浏览器窗口中有 4 个标签（Google、GitHub、Chess 和 Microsoft），

![标签](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/184jtu-yv.png)

要切换到 Google 标签，您可以输入 `0`，要切换到 GitHub 标签，输入 `1`，依此类推。

### 标签标题
根据标签的标题切换标签。

## 活动标签
标签是否应该成为窗口中的活动标签。