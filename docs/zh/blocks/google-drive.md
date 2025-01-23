---
title: Google Drive
---

# Google Drive

将文件上传到您的 Google Drive。

您必须将 [Google Drive 与您的 Automa 账户连接](../integrations/google-drive.md) 才能使用此块。

## 上传文件
将一个或多个文件上传到您的 Google Drive。

- **文件位置** <br />
  您文件的位置。
  - **URL** <br> 
    文件的 URL。例如，`https://example.com/file.zip`
  - **本地计算机** <br> 
    文件的绝对路径。例如，`C:\users\downloads\file.zip` 或 `/Users/Josh/Desktop/docs.pdf`。<br>
    要使用此选项，您必须 [允许 Automa 访问文件 URL](./upload-file.md#requirements)。
  - **下载 ID** <br> 
    已下载文件的下载 ID。例如，`1010`

- **文件名（可选）** <br />
  文件的名称。在写文件名时，您还必须包括文件的扩展名，如 `movie.mp4` 或 `a-music.mp3`。