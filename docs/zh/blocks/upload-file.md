---
title: 上传文件块
---

# 上传文件块

将文件上传到 `<input type="file">` 元素中。

- **元素选择器** <br>
	用于选择 `<input type="file">` 元素的 [选择器](../workflow/element-selector.md)。

- **文件路径** <br>
	要上传的文件的绝对路径、URL 或 base64。<br>
	**示例**
	- 绝对路径
		- Windows: `C:\Users\Public\Documents\testing.docx`
		- MacOS: `/Users/Josh/Desktop/docs.pdf`
	- URL
		- `https://example.com/files/document.pdf`
		- `https://example.com/words.txt`
	- Base64<br>
		要上传 [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64) 编码的文件，您必须遵循此格式。 `filename|file mime|base64`
		- `landscape.png|image/png|data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA...` 
		- `my file.json|application/json|eyJleHRWZXJzaW9uIjoiMS4xNi4yIiwibmFtZSI6...`

## 要求
为了使此块正常工作，您必须通过启用“允许访问文件 URL”选项来允许 Automa 访问文件。
- 打开 `chrome://extensions`
- 找到 Automa 并点击“详细信息”按钮
- 向下滚动并启用“允许访问文件 URL”

## 查找上传文件选择器

在大多数情况下，上传文件的元素是隐藏的，您可以使用元素选择器选择该元素。由于此原因，您可以使用录制功能找到上传文件元素。

1. [开始录制](../guide/quick-start.md#recording-actions)
2. 上传文件并停止录制
3. 清理其他块，例如使网站打开文件选择窗口的点击元素块。因为在使用上传文件块时不需要它。

<!--@include: ../parts/blocks-interaction-note.md-->