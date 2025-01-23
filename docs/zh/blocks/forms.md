---
title: 表单块
---

# 表单块

获取或填写表单元素（输入框、下拉框、复选框和单选框）的值。

- **元素选择器** <br>
	[元素选择器](../workflow/element-selector.md)。

## 获取表单值
获取表单元素的值。

- **分配给变量** <br>
	是否将值分配到 [变量](../workflow/variables.md) 中。

- **变量名称** <br>
	要分配值的变量名称。

- **插入到表格** <br>
	是否将值插入到 [表格](../workflow/table.md) 中。

- **选择列** <br>
	值将插入的列。

## 表单类型

### 文本字段

- **值** <br>
	文本字段元素的值，如 \<input> 和 \<textarea>，或具有 `contenteditable` 属性的元素。

- **清除表单值** <br>
	在插入新值之前清除文本字段元素的值。

- **输入延迟** <br>
	在插入每个字符时添加延迟。当设置为 0 时，值将一次性插入。

### 下拉框

- **值** <br>
	\<select> 元素的值。要为下拉框选择特定选项，您可以输入要选择的选项的值。您可以使用 [Automa 元素选择器](../workflow/element-selector.md) 或 [Chrome DevTools](https://developer.chrome.com/docs/devtools/) 查找选项值。

	![Chrome DevTools](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/18e1sr-pr.png)

### 复选框和单选框

- **已选择** <br>
	复选框或单选框元素是否被选中。

<!--@include: ../parts/blocks-interaction-note.md-->