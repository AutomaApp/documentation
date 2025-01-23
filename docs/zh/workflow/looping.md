---
title: 循环
---

# 循环

循环允许您重复执行相同的操作，直到处理完所有项目后才停止。

循环在您想处理多个相似项目时非常有用，例如填写来自 Google Sheets 的表单值。在 Automa 中，有几种方法可以实现循环：

1. 使用 [循环数据模块](../blocks/loop-data.md) 遍历 [变量](./variables.md)、[表格](./table.md)、[Google Sheets](../blocks/google-sheets.md) 或自定义 JSON 数组。
2. 使用 [循环元素模块](../blocks/loop-elements.md) 遍历页面上的元素。
3. 使用 [重复任务模块](../blocks/repeat-task.md) 以指定的次数重复执行操作。

## 使用循环数据或循环元素模块

在使用 [循环数据模块](../blocks/log-data.md) 或 [循环元素模块](../blocks/loop-elements.md) 时，工作流中必须包含 [循环断点模块](../blocks/loop-breakpoint.md)。循环断点用于告诉工作流循环的范围。在循环断点内部，您还必须输入循环模块的循环 ID。

![带断点的循环](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16ydun-cy.png)

上述工作流将根据项目的数量重复执行表单和获取文本模块。在循环完所有项目后，工作流将继续到导出数据模块。

当您没有使用循环断点模块定义循环范围时，循环将无法正常工作。

![没有断点的循环](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16ydun-y8.png)

上述工作流将仅执行一次表单和获取文本模块，然后继续到导出数据模块。

### 访问循环项
您可以使用 [表达式](./expressions.md) 在循环范围内访问当前循环迭代的数据。例如，<code v-pre>{{loopData.loopId}}</code>；将 `loopId` 替换为您在循环数据或循环元素模块中输入的循环 ID。

![访问循环项](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16yduo-ib.png)

<code v-pre>{{loopData.loopId}}</code> 表达式将返回：
```json
{
  "data": ...,
  "$index": 1
}
```
因此，如果您想访问循环的索引，可以使用 [表达式](./expressions.md) 如 <code v-pre>{{loopData.loopId.$index}}</code>；要获取循环值，您不需要写 `data` 属性，如 <code v-pre>{{loopData.loopId.data}}</code>；Automa 会自动将其分配给表达式。但如果您使用 [JavaScript 表达式](./expressions.md#javascript-expressions)，则必须包含 `data` 属性 <code v-pre>!!{{loopData.loopId.data}}</code>。

## 使用重复任务模块

使用 [重复任务模块](../blocks/repeat-task.md) 是实现循环的最简单方法。您只需定义要重复执行操作的次数以及从哪里开始重复。

![重复任务](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16yduo-q7.png)

上述工作流将从点击元素模块开始重复执行，执行三次后，工作流将继续到新标签模块。