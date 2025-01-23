---
title: 获取文本块
---

# 获取文本块

检索元素的文本内容。

- **元素选择器** <br>
	[元素选择器](../workflow/element-selector.md)。

- **正则表达式** <br>
	将检索到的文本与正则表达式进行匹配。

- **分配给变量** <br>
	是否将文本分配到 [变量](../workflow/variables.md) 中。

- **变量名称** <br>
	要分配文本的变量名称。

- **插入到表格** <br>
	是否将文本插入到 [表格](../workflow/table.md) 中。

- **选择列** <br>
	文本将插入的列。

- **文本前缀** <br>
	为检索到的文本添加前缀。

- **文本后缀** <br>
	为检索到的文本添加后缀。

- **添加额外行** <br>
	在 [表格](../workflow/table.md) 中插入额外行。

- **包含 HTML 标签** <br />
	包括元素本身及其所有子元素的 HTML 标签。
	当您需要获取完整内容，包括 HTML 标签时。
	- 返回元素的完整 HTML 字符串
	```html
	<!-- 例如 -->
	<div class="test">Hello <span style="display:none">hidden</span> world!</div>
	```

	返回 `<div class="test">Hello <span style="display:none">hidden</span> world!</div>`

- **使用 `textContent`** <br />
	即使文本在屏幕上不可见，也检索元素的所有文本。
	当您需要获取所有原始文本内容，而不考虑样式和可见性时。
	- 返回节点及其所有子孙的文本内容
	- 返回所有元素的文本，包括 `<script>` 和 `<style>` 元素
	- 返回隐藏元素的文本
	- 忽略样式并返回原始文本
	
	返回 `Hello hidden world!`

如果您不选择任何选项（这也是默认行为），它将返回如上例所示：`Hello world`。

当您只需要获取可见的文本内容时。


<!--@include: ../parts/blocks-interaction-note.md-->
