---
title: Element Exists Block
---

# Element Exists Block

Check whether an [element](https://developer.mozilla.org/en-US/docs/Web/API/Element) exists in the [document](https://developer.mozilla.org/en-US/docs/Web/API/Document).

If the element exists, the workflow will execute the block that connects with the first output. And if it's not, it will execute the `fallback` output.

- **Element selector** <br>
	[Element selector](/api-reference/blocks.html#element-selector).

- **Try for** <br>
	Define how many times to check the element based on the selector.

- **Timeout** <br>
	Timeout for each of the try, defaults to 500ms.

- **Fallback** <br>
	A fallback when the element doesn't exist.