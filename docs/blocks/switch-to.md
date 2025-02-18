---
title: Switch Frame Block
---

# Switch Frame Block

Switch between the main window and [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) element.

Use this block when you want to execute the blocks in the web interaction category inside an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) element. Or whan you want to switch back to the main window.

- **Iframe selector** <br>
	CSS Selector of the [Iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) element.

	Let's assume we have the following HTML structure:

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Website Title</title>
	</head>
	<body>	
		<div id="app">
			<iframe id="my-iframe" src="https://example.com"></iframe>
		</div>
		
	</body>
	</html>
	```

	When you want to switch to the iframe, you can use the following CSS selector:

	```css
	#my-iframe

	or

	#app #my-iframe
	```
	
	Remember that the Switch Frame block selects the frame itself, not the elements within it. Make sure your CSS selector is correct.





<!--@include: ../parts/blocks-interaction-note.md-->