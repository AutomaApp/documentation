---
title: 触发块
---

# 触发块
此块是工作流开始执行的起点，您可以使用此块配置工作流的触发方式。

## 触发类型
### 手动
通过点击播放（▶️）按钮手动触发工作流。

### 间隔
在间隔内执行工作流，您可以在提供的输入中定义间隔和执行工作流之前的延迟。

### 在特定日期
在特定日期和时间执行工作流。

### 在特定日子
在特定日子和时间执行工作流。

### 在浏览器启动时
在安装此扩展的浏览器配置文件启动时执行工作流。

### Cron 作业
使用 cron 表达式调度工作流执行。

![Cron](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/17s5ar-lj.png)

### 上下文菜单
通过上下文菜单（右键单击）执行工作流。当通过上下文菜单执行工作流时，将注入几个变量：

- `$ctxElSelector`: 右键单击的元素的选择器
- `$ctxTextSelection`: 选定的文本
- `$ctxMediaUrl`: 媒体元素（图像、视频或音频）的源 URL
- `$ctxLink`: 如果您右键单击链接，则为链接的 URL

但要使用此触发器，您必须授予 Automa 使用 `contextMenu` 权限。此触发器有两个选项：

- 上下文菜单中的工作流名称
- `将出现在`，您可以用来设置工作流在上下文菜单中出现的时机。如果未选择这些选项中的任何一个，它将在每次显示上下文菜单时出现。

### 访问网站时
当您访问与您输入的 URL 或 [正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) 匹配的网站时执行工作流。
当您勾选 `使用正则表达式` 复选框时，您输入的值将被视为 [正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)。

### 键盘快捷键
使用键盘快捷键执行工作流。您可以通过点击录制（⏺️）按钮并按下您想要使用的键来指定键盘快捷键。

默认情况下，当光标位于输入元素上时，快捷键将不起作用，因此为了防止这种行为，您可以勾选"在输入时保持活动"复选框。

::: tip 注意
键盘快捷键仅在您访问网站时有效。如果网站 URL 以 `chrome://` 或 `chrome-extension://` 开头，则键盘快捷键将不起作用。
:::

## 使用 JS CustomEvent 触发
您可以使用 JavaScript [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) 程序性地触发工作流，您可以将其嵌入到您的网站中。例如，
```js
// 使用工作流 ID
window.dispatchEvent(new CustomEvent('automa:execute-workflow', {
	detail: { id: 'workflow-id' }
}));

// 使用工作流 publicId
window.dispatchEvent(new CustomEvent('automa:execute-workflow', {
	detail: { publicId: 'public-id' }
}));
```
在 `detail` 属性中，您必须定义要执行的工作流的 `id` 或 `publicId`。您可以在工作流设置中定义工作流的 `publicId`。

![工作流 public ID](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/17s5as-e0.png)

要向该工作流添加变量，请在 [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) 属性中添加 `data` 属性。
```js
// 使用工作流 ID
window.dispatchEvent(new CustomEvent('automa:execute-workflow', {
	detail: { 
		id: 'workflow-id',
		data: {
			variables: {
				name: 'John Doe',
				search: 'Hello world'
			}
		} 
	}
}));
```

:::tip 注意
如果 `automa:execute-workflow` 事件不起作用，您可以将其替换为 `__automaExecuteWorkflow`。
:::

## 通过 URL 触发
从版本 v1.28.26 开始，您将能够通过 URL 执行 Automa 工作流，要做到这一点，您只需在浏览器中创建一个新标签并输入此 URL `chrome-extension://infppggnoaenmfagbfknfkancpbljcca/execute.html#/workflowId`，将 `workflowId` 替换为您想要执行的工作流的 ID。

您还可以通过向该 URL 添加查询来将变量传递给工作流。例如，`chrome-extension://infppggnoaenmfagbfknfkancpbljcca/execute.html#/workflowId?variableA=value&variableB=10`。

## 参数
参考: [工作流参数](../workflow/parameters.md)
