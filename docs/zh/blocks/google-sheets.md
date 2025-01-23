---
title: Google Sheets 块
---

# Google Sheets 块

读取或写入 Google Sheets 电子表格数据。

## 访问电子表格
在使用此块之前，您需要先授予 Automa 访问电子表格的权限。您可以通过两种方式做到这一点：

1. 将电子表格共享给公众。
2. 将电子表格共享给 Automa 服务账户。

当您将电子表格共享给公众时，Automa 仅具有读取权限。<br> 如果您计划更新电子表格的单元格值，则需要将电子表格共享给 Automa 服务账户。为此，打开您想要共享的电子表格，点击右上角的共享按钮，并输入 `service@automa2.iam.gserviceaccount.com`。

![服务账户](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/mj8jg-g1.png)

## 电子表格 ID
电子表格 ID 包含字母、数字、连字符或下划线。您可以在 Google Sheets 的 URL 中找到它。

<code>
	https://docs.google.com/spreadsheets/d/<mark>10FGdgjWhkFeJ8m-M5WC0zDIMnSqRFuctuZ1CkOr38mY</mark>/edit
</code>

![电子表格 ID](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/mj8jh-f2.png)

## 范围
您想要获取或更新的单元格值的范围，您可以使用 [A1 表示法](https://developers.google.com/sheets/api/guides/concepts#expandable-1) 定义单元格范围，例如 `Sheet1!A1:B2`，或使用 [R1C1 表示法](https://developers.google.com/sheets/api/guides/concepts#expandable-2) 定义，例如 `Sheet1!R1C1:R2C2`。

## 获取电子表格值
获取电子表格的单元格值。

- **参考键** <br>
	用于标识 Google Sheets 数据的键。

- **将第一行用作键** <br>
	将电子表格的第一行用作对象键。例如，当您有如下电子表格时。

	| name | age |
	| --- | --- |
	| foo | 22 |
	| bar | 23 |

```json
// 选项禁用
[["name", "age"], ["foo", 22], ["bar", 23]]

// 选项启用
[{ "name": "foo", "age": 22 }, { "name": "bar", "age": 23 }]
```

### 访问电子表格数据
要从块的输入中访问电子表格值，您可以使用 <code v-pre>{{ googleSheets.referenceKey.path }}</code> 语法。

阅读更多: [表达式](../workflow/expressions.md)

## 更新电子表格值
更新电子表格的单元格值。

- **值输入选项** <br>
	确定输入数据应如何解释，默认为 `RAW`。

	| 值 | 描述 |
	| --- | --- |
	| `RAW` | 用户输入的值将不会被解析，将按原样存储 |
	| `USER_ENTERED` | 值将被解析，仿佛用户在 UI 中输入它们。数字将保持为数字，但字符串可能会根据在 Google Sheets UI 中输入文本时应用的相同规则转换为数字、日期等。 |

	在 [Google 开发者页面](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption) 阅读更多信息。

- **数据来源** <br>
	用于更新电子表格的数据来源，默认为 [表格](../workflow/table.md)。
	使用自定义选项时，输入的数据必须是有效 JSON 语法的数组数组数据类型。

	**示例**
	```json
	[["name", "age"], ["foo", 22], ["bar", 23, "text"]]
	```

- **将键用作第一行** <br>
	将列用作电子表格的第一行。