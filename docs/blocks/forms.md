---
title: Forms Block
---

# Forms Block

Get or fill the value of a form (input, select, checkbox, and radio) element.

- **Element selector** <br>
	[Element selector](/api-reference/blocks.html#element-selector).

## Get form value
Get the value of the form element.

- **Save data** <br>
	Whether insert the value into the [data columns](/api-reference/data-columns.md) or not.

- **Data columns** <br>
	The column where the value will be inserted.

## Form type

### Text field

- **Value** <br>
	The value for the text field element like \<input> and \<textarea> or an element that has `contenteditable` attribute.

- **Clear form value** <br>
	Clear the value of the text field element before inserting the new one.

- **Typing delay** <br>
	Add delay when inserting each of the characters of the value. When set to 0, the value is inserted at once.

### Select

- **Value** <br>
	The value for the \<select> element. To select a specific option for the select element, you can input it with the value of the option you want to select. You can find the option value by using the Automa Element Selector or [Chrome DevTools](https://developer.chrome.com/docs/devtools/).

	![Chrome DevTools](https://res.cloudinary.com/chat-story/image/upload/v1642419001/automa/chrome_JQ9AV5L07X_fmvf5u.png)

### Checkbox & Radio

- **Selected** <br>
	Whether the checkbox or radio element is selected or not.