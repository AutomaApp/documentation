---
title: Upload File Block
---

# Upload File Block

Upload file into an `<input type="file">` element.

- **Element selector** <br>
	[Selector](/api-reference/blocks.html#element-selector) for the `<input type="file">` element.

- **File path** <br>
	The absolute path of the file that you want to upload. For example:
	- Windows: `C:\Users\Public\Documents\testing.docx`
	- MacOS: `/Users/Josh/Desktop/docs.pdf`

## Requirements
In order for this block to work, you must allow Automa to access the files by enabling the "Allow access to file URLs" option.
- Open `chrome://extensions`
- Find Automa and click the "Detail" button
- Scroll down and enable "Allow access to file URLs"