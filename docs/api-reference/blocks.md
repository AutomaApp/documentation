---
title: Blocks
---

## Element Selector
Most of the blocks in the web interaction category required an element selector to work. In Automa, you can select an element using the CSS Selector or XPath.

### XPath
Select element using [XPath expression](https://www.w3schools.com/xml/xpath_syntax.asp).

### CSS Selector
There four most common CSS selectors are used:

- **Type selector** <br>
	Select an element by its node name. For example, `input` will match with the \<input> element

- **Class selector** <br>
	Select an element by its `class` attribute. For example, `.text` will match with any elements that has "text" class.

- **ID selector** <br>
	Select an element based on the value of its `id` attribute. For example, `#title` will match with an element that has "title" ID.

- **Attribute selector** <br>
	Selects all elements that have the given attribute. For example, `[value]` will match with any element that have the "value" attribute.

Read more about CSS Selector on the [MDN Page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).

### Multiple
Select multiple elements that match the CSS Selector. By default, Automa only selects the first element that matches the CSS Selector.

For example, when using the [get text block](/blocks/get-text.md) with `p` as the selector. Instead of retrieving text content from the first element that matches the selector, Automa will retrieve all the text content from the matches elements.

### Mark Element
Mark the element that has been selected. Meaning that the element will not be selected if it has been selected before by the same block. 

For example, when you have a workflow like this

![Workflow example](https://res.cloudinary.com/chat-story/image/upload/v1642405439/automa/B2cPsIplxO_m06lfr.png)

and the [Get text block](/blocks/get-text.md) using `.text` as the element selector, and the website [DOM tree](https://en.wikipedia.org/wiki/Document_Object_Model).

```html
<div>
  <p class="text" id="1">Text</p>
  <p class="text" id="2">Text</p>
  <p class="text" id="3">Text</p>
  <p class="text" id="4">Text</p>
</div>
```
When the [Get text block](/blocks/get-text.md) is being executed, it gets the first element that matches the selector which is `<p class="text" id="1">Text</p>` and because the mark element option is enabled it will mark the element and look like this `<p class="text" id="1" block--block-id>Text</p>`.

```html
<div>
  <p class="text" id="1" block--block-id>Text</p>
  <p class="text" id="2">Text</p>
  <p class="text" id="3">Text</p>
  <p class="text" id="4">Text</p>
</div>
```
When the Get text block is executed for the second time, It will do the same thing all over but instead of selecting the `<p class="text" id="1" block--block-id>Text</p>` it will select the `<p class="text" id="2">Text</p>` element because the first element has been marked.
