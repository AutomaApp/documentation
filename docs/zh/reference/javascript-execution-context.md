---
title: JavaScript 执行上下文
---

# JavaScript 执行上下文
执行上下文是指 JavaScript 代码执行的环境。在 Automa 中，您可以选择两种执行环境：**活动标签**和**后台**。

## 活动标签

在工作流中，JavaScript 代码会被注入到当前活动的标签页中。当您需要进行 DOM 操作，或者想要获取某个元素的属性或文本时，请选择这个选项。不过，有些网站不允许注入 JavaScript 代码，这是因为它们有内容安全策略（CSP），限制了第三方代码的注入（它们常常是由目标网站的开发人员设置，我们目前也没有更好的解决办法）。要检查是否允许注入第三方代码，您可以通过按 `Ctrl + Shift + I` 打开 Chrome 开发者工具，然后在 `Console` 标签页中粘贴以下代码：
```js
const script = document.createElement('script');
script.textContent = 'alert("Hello world!")';
document.body.appendChild(script);
```

如果您看到 `Refused to execute inline script because it violates the following Content Security Policy directive...` 的错误信息，说明不允许注入第三方代码。

![CSP 错误](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/17kver-g7.png)

## 后台

在这个环境中，您的 JavaScript 代码会在一个沙箱中执行。如果您的代码与 DOM 无关，建议选择这个执行上下文。并且，它不需要活动标签页来运行。

如果您想进行调试，比如使用 `console.log` 方法，您可以在 Automa 仪表板上打开 Chrome 开发者工具来查看输出。