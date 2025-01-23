---
title: Google Sheets (GDrive)
---

# Google Sheets (GDrive)

Google Sheets (GDrive) 块的功能与 [Google Sheets 块](./google-sheets.md) 相同。不同之处在于，此块要求您在使用之前 [将 Google Drive 连接](../integrations/google-drive.md) 到您的 Automa 账户，并且它具有其他功能，例如创建电子表格。

因此，要查看如何在 Google 表格中获取、更新或清除值的文档，请打开 [Google Sheets 块页面](./google-sheets.md)。

## 连接电子表格

要在 Google 表格中获取、更新或清除值，您需要通过点击表格选择旁边的"连接"按钮来连接电子表格。然后，选择电子表格文件。

![连接电子表格](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/ml5uc-hh.png)

## 创建电子表格
您可以使用此功能创建电子表格。

- **分配给变量** <br>
	是否将创建的电子表格 ID 分配到 [变量](../workflow/variables.md) 中。

- **变量名称** <br>
	要分配创建的电子表格 ID 的变量名称。

- **插入到表格** <br>
	是否将创建的电子表格 ID 插入到 [表格](../workflow/table.md) 中。

- **选择列** <br>
	创建的电子表格 ID 将插入的列。

## 何时使用？
当您的工作流需要在短时间内频繁更新电子表格时，可以使用此块。例如，在每次 [循环](../workflow/looping.md) 的迭代中更新一行。