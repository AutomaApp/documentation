---
title: 工作流表格
---

# 工作流表格

工作流表格用于存储从网站检索到的数据。它类似于电子表格。但在表格中，每一列都有严格的数据类型。

## 添加表格列

在向表格插入数据之前，必须为表格定义一列。

打开一个工作流，点击右上角的表格图标 (<v-remixicon name="riTable2" />)。输入列的名称，然后点击添加按钮。在你添加的列旁边，可以选择列的数据类型。

你可以选择四种数据类型：`文本`、`数字`、[`布尔值`](https://en.wikipedia.org/wiki/Boolean_data_type)、[`数组`](https://en.wikipedia.org/wiki/Array_data_type) 和 `任意`。

![工作流表格](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16dibh-p3.png)

## 插入数据
你可以使用用于从网站提取数据的块来向表格插入数据，例如 [获取文本块](../blocks/get-text.md) 和 [属性值块](../blocks/attribute-value.md)。要使用这些块插入数据，点击编辑按钮，启用"插入到表格"选项，并选择其中一列。

![选择列](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16dibg-h2.png)

每次将数据插入表格时，数据将被推送到所选列的最后一行。例如，当你用数据填充表格如下：

| `title` | `price` | `urls` | `available` |
| --- | --- | --- | --- |
| 汽车 | 4000 | ["https://en.wikipedia.org/wiki/Car"] | true |
| 摩托车 | 2000 | ["https://en.wikipedia.org/wiki/Motorcycle"] | false |

当工作流执行获取文本块并将数据插入到 `title` 列时，表格将变为：

| `name` | `price` | `urls` | `available` |
| --- | --- | --- | --- |
| 汽车 | 4000 | ["https://en.wikipedia.org/wiki/Car"] | true |
| 摩托车 | 2000 | ["https://en.wikipedia.org/wiki/Motorcycle"] | false |
| 船 | | |

在工作流中，表格存储了一个对象数组。

```json
[
  {
    "name": "汽车",
    "price": 4000,
    "urls": ["https://en.wikipedia.org/wiki/Car"],
    "available": true
  },
  {
    "name": "摩托车",
    "price": 2000,
    "urls": ["https://en.wikipedia.org/wiki/Motorcycle"],
    "available": false
  },
  {
    "name": "船"
  }
]
```

## 导出表格数据
使用 [导出数据块](../blocks/export-data.md) 将表格导出为文件。你可以选择将表格导出为"文本"、"CSV"或"JSON"文件。