---
title: 链接块
---

# 链接块

打开一个 [锚点](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) (\<a>) 元素所具有的 URL。

因为有时锚点元素具有 [`target="_blank"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) 属性，当使用 [点击元素块](/blocks/event-click.md) 点击时，它会打开一个新标签。而由于它打开了一个新标签，Automa 不会在该新标签上执行下一个块。

因此，为了解决这个问题，您需要使用链接块。它将从锚点元素中获取 URL，并在同一标签中打开它。

- **元素选择器** <br>
	[元素选择器](../workflow/element-selector.md)。

<!--@include: ../parts/blocks-interaction-note.md-->