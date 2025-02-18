---
title: 切换框架块
---

# 切换框架块

在主窗口和 [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) 元素之间切换。

当您想在 [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) 元素内部执行网页交互类别中的块时，使用此块。或者当您想切换回主窗口时。

- **Iframe 选择器** <br>
	CSS 选择器，用于选择 [Iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) 元素。

	让我们假设我们有以下 HTML 结构：

	```html
	<!DOCTYPE html>
	<html lang="zh">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>网站标题</title>
	</head>
	<body>
		<div id="app">
			<iframe id="my-iframe" src="https://example.com"></iframe>
		</div>
	</body>
	</html>
	```

	当您想切换到 iframe 时，您可以使用以下 CSS 选择器：

	```css
	#my-iframe

	或者

	#app #my-iframe
	```

	记住，切换框架块选择的是框架本身，而不是框架中的元素。确保您的 CSS 选择器正确。
	
	

<!--@include: ../parts/blocks-interaction-note.md-->