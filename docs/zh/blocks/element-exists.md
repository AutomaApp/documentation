---
title: 元素存在块
---

# 元素存在块

检查 [文档](https://developer.mozilla.org/en-US/docs/Web/API/Document) 中是否存在 [元素](https://developer.mozilla.org/en-US/docs/Web/API/Element)。

如果元素存在，工作流将执行与第一个输出连接的块。如果不存在，则将执行 `fallback` 输出。

- **元素选择器** <br>
	[元素选择器](../workflow/element-selector.md)。

- **尝试次数** <br>
	定义根据选择器检查元素的次数。

- **超时** <br>
	每次尝试的延迟，默认为 500 毫秒。

- **后备** <br>
	当元素不存在时的后备选项。

- **如果不存在则抛出错误** <br />
	抛出错误而不是执行后备选项。