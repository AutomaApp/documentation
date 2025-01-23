---
title: 插入数据块
---

# 插入数据块

将额外数据插入到 [表格](../workflow/table.md) 或 [变量](../workflow/variables.md) 中。

## 导入文件
将文件内容插入到变量或表格的列中。要使用此功能，您必须允许 Automa 访问文件 URL，操作步骤如下：

1. 转到 `chrome://extensions`
2. 找到 Automa 扩展并点击 **"详细信息"** 按钮
3. 向下滚动并启用 **"允许访问文件 URL"** 选项

在值文本字段中，您可以输入文件的绝对路径或文件的 URL。例如：

- 绝对路径
	- Windows: `C:\Users\Public\Documents\testing.docx`
	- MacOS: `/Users/Josh/Desktop/docs.pdf`
- URL
	- `https://example.com/files/document.pdf`
	- `https://example.com/words.txt`

![导入文件内容](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/mn1j8-au.png)

## 插入多个表格行
要将多个表格行插入到一列中，请用双竖线 (`||`) 分隔每个值。例如：

```
value 1 || value 2 || value 3
```
![多个行](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/mpoez-84.png)