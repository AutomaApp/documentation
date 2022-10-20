---
title: Save Assets Block
---

# Save Assets Block
Save assets (image, video, audio, or file) from an element or URL.

- **Type** <br>
	Where to get the assets from, whether get assets from an URL or media elements like [image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), or [video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).

- **URL** <br>
	URL of the assets. for example, `https://example.com/image.png`

- **Element selector** <br>
	[Element selector](../workflow/element-selector.md).

- **File name** <br>
	The filename of the assets. If you don't want to rename the assets leave the input blank.

- **On conflict** <br>
	Specifies what to do if the name of a asset file conflict with an existing file.
	- `"uniquify"` <br>
		The browser will modify the filename to make it unique.
	
	- `"overwrite"` <br>
		The browser will overwrite the old file with the newly-downloaded file.
	
	- `"prompt"` <br>
		The browser will prompt the user, asking them to choose whether to uniquify or overwrite.