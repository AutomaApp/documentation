---
title: 创建元素块
---

# 创建元素块

创建一个元素并将其插入到页面中。

- **元素选择器** <br>
	目标元素的 [元素选择器](../workflow/element-selector.md)。
	
- **插入元素**<br>
	表示相对于目标元素的位置。
	- **作为第一个子元素**<br>
		将其插入为目标元素的第一个子元素。
	
	- **作为最后一个子元素**<br>
		将其插入为目标元素的最后一个子元素。
	
	- **作为前一个兄弟元素**<br>
		将其插入为目标元素的前一个兄弟元素。
	
	- **作为下一个兄弟元素**<br>
		将其插入为目标元素的下一个兄弟元素。
	
	- **替换目标元素**<br>
		用创建的元素替换目标元素。

- **HTML**<br>
	您想要创建的元素的 HTML。

- **CSS**<br>
	将注入到页面中的 CSS。

- **JavaScript**<br>
	将注入到页面中的 JavaScript。
	- **`automaRefData(keyword, path?)` 函数**<br>
		使用此函数来 [引用数据](../workflow/expressions.md)。 <br>
		有关更多详细信息，请打开 [JavaScript 块页面](/blocks/javascript-code.html#automarefdata-keyword-path)。
	
	- **`automaExecWorkflow(detail)` 函数**<br>
		执行工作流的函数。 <br>
		`detail` 参数是您输入工作流详细信息的地方，例如您要执行的工作流的 id 或 `publicId`。例如，
		```js
		// 根据其 id 执行工作流
		automaExecWorkflow({ id: 'workflow-id' });

		// 根据其 publicId 执行工作流
		automaExecWorkflow({ publicId: 'workflow-public-id' });
		```
		您还可以输入将在工作流运行时注入的变量。
		```js
		automaExecWorkflow({
			id: 'workflow-id',
			data: {
				variables: {
					varA: '变量 A 的值',
					postCode: 1212,
					numbers: [1, 2, 3, 4],
				}
			}
		})
		```
- **预加载脚本**<br>
	在注入元素之前加载脚本或样式。

<!--@include: ../parts/blocks-interaction-note.md-->