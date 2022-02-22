---
title: Upload File Block
---

# Upload File Block

Upload file into an `<input type="file">` element.

- **Element selector** <br>
	[Selector](/api-reference/blocks.html#element-selector) for the `<input type="file">` element.

- **File path** <br>
	The absolute path or the URL of the file to upload.<br>
	**Examples**
	- Absolute Path
		- Windows: `C:\Users\Public\Documents\testing.docx`
		- MacOS: `/Users/Josh/Desktop/docs.pdf`
	- URL
		- `https://example.com/files/document.pdf`
		- `https://example.com/words.txt`

## Requirements
In order for this block to work, you must allow Automa to access the files by enabling the "Allow access to file URLs" option.
- Open `chrome://extensions`
- Find Automa and click the "Detail" button
- Scroll down and enable "Allow access to file URLs"