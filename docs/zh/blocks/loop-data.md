---
title: 循环数据块
---

# 循环数据块

![循环示例](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/1069pe-en.gif)

当您想要遍历数据时，可以使用此块。

## 遍历数据
选择您想要循环的数据，您可以选择 [表格](../workflow/table.md)、数字、[Google Sheets](./google-sheets.md)、元素、[变量](../workflow/variables.md) 或自定义数据。

使用自定义数据选项时，请确保您使用 [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) 语法编写 [数组](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays) 数据类型。

**示例**
```json
["one", "two", 3, 4, { "key": "value" }]
```

当您选择 `elements` 选项时，Automa 将返回与您输入的 `selector` 匹配的元素选择器数组。您可以像下面这样使用循环数据块。

![循环元素](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/mgcyq-dr.png)

## 循环 ID
用于标识循环的 ID。当您想在 [表达式](../workflow/expressions.md) 中访问循环数据或使用 [循环断点](./loop-breakpoint.md) 块时，请使用此 ID。

## 最大数据
设置循环的数据限制。

<hr />

另见: [循环](../workflow/looping.md#using-the-loop-data-or-loop-elements-block)