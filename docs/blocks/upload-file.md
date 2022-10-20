---
title: Upload File Block
---

# Upload File Block

Upload file into an `<input type="file">` element.

- **Element selector** <br>
	[Selector](../workflow/element-selector.md) for the `<input type="file">` element.

- **File path** <br>
	The absolute path, the URL, or the base64 of the file to upload.<br>
	**Examples**
	- Absolute Path
		- Windows: `C:\Users\Public\Documents\testing.docx`
		- MacOS: `/Users/Josh/Desktop/docs.pdf`
	- URL
		- `https://example.com/files/document.pdf`
		- `https://example.com/words.txt`
	- Base64<br>
		To upload the [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64) encoded file, you must follow this format. `filename|file mime|base64`
		- `landscape.png|image/png|data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA...` 
		- `my file.json|application/json|eyJleHRWZXJzaW9uIjoiMS4xNi4yIiwibmFtZSI6...`

## Requirements
In order for this block to work, you must allow Automa to access the files by enabling the "Allow access to file URLs" option.
- Open `chrome://extensions`
- Find Automa and click the "Detail" button
- Scroll down and enable "Allow access to file URLs"