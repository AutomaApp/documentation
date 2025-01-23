---
title: 存储
---

# 存储
存储用于保存表格和变量的数据。这里存储的数据将会**持久化**，即使在工作流结束后也会保留（不是云数据，是本地存储，更换设备后数据会丢失）。

## 表格
要将一个 [表格](../workflow/table.md) 添加到存储中，请点击“添加表格”按钮，然后定义表格的名称和列。

![添加存储表格](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/173ht5-m8.png)

在工作流中使用这个表格时，打开工作流表格并点击“连接到存储表格”按钮。

![连接存储表格](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/173ht4-o6.png)

::: tip 注意
想了解更多关于表格的信息，请访问 [表格页面](../workflow/table.md)。
:::

## 变量
您可以在存储的变量页面或工作流中添加变量。每次您想要赋值或读取变量的值时，变量名必须以双美元符号（`$$`）开头。这是为了区分存储变量和工作流变量。例如，从一个块中添加或更新变量。

![赋值存储变量](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/173ht4-ts.png)

在块中访问变量。

![访问存储变量](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/173ht5-bs.png)

::: tip 注意
想了解更多关于变量的信息，请访问 [变量页面](../workflow/variables.md)。
:::

## 凭证
存储凭证的地方。存储在这里的凭证将会被加密，您无法在添加凭证后查看或编辑它们。

要在工作流中访问这些凭证，请在 Mustache 标签（双花括号）内使用 `secrets` 关键字。例如，您可以使用 <code v-pre>{{ secrets@credentialName }}</code> 来访问凭证。