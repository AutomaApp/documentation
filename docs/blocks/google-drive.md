---
title: Google Drive
---

# Google Drive

Upload files into your Google Drive.

You must connect [Google Drive with your Automa account](../integrations/google-drive.md) to use this block.

## Upload files
Upload a file or multiple files into your Google Drive.

- **File Location** <br />
  The location of your file.
  - **URL** <br> 
    the URL of the file. For example, `https://example.com/file.zip`
  - **Local computer** <br> 
    the absolute path of the file. For example, `C:\users\downloads\file.zip` or `/Users/Josh/Desktop/docs.pdf`.<br>
    To use this option, you must [allow Automa to access the file URLs](./upload-file.md#requirements).
  - **Download id** <br> 
    The download id of the file that has been downloaded. For example, `1010`

- **Filename (optional)** <br />
  The name of the file. When writing the filename, you also must include the extension of the file like `movie.mp4` or `a-music.mp3`.