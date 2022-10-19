---
title: Element Selector
---

# Element Selector

The element selector is used to identify the elements on the page when interacting or extracting data from the page.
For example, if you want the workflow to fill a specific form input on the page using the [Forms block](../blocks/forms.md), it needs to know which input elements to fill up. With the `input.form-name` selector, it tells the workflow to fill an [`<input />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element with `form-name` [classes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class).

In Automa, you can select an element using the [CSS Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) or [XPath expression](https://www.w3schools.com/xml/xpath_syntax.asp).

## Block Selector Options
You'll find these options when editing a block that requires an element selector to work, such as the [Click Element](../blocks/event-click.md) and the [Get Text block](../blocks/get-text.md).

### Multiple
Select multiple elements that match the selector. By default, Automa only selects the first element that matches the Selector.

For example, when using the [Get Text block](/blocks/get-text.md) with `p` as the selector. Instead of retrieving text content from the first element that matches the selector, Automa will retrieve all the text content from the matches elements.

### Mark Element
Mark the element that has been selected. Meaning that the element will not be selected if it has been selected before by the same block. 

For example, when you have a workflow like this

![Workflow example](https://res.cloudinary.com/chat-story/image/upload/v1642405439/automa/B2cPsIplxO_m06lfr.png)

and the [Get Text block](/blocks/get-text.md) using `.text` as the element selector, and the website [DOM tree](https://en.wikipedia.org/wiki/Document_Object_Model).

```html
<div>
  <p class="text" id="1">Text</p>
  <p class="text" id="2">Text</p>
  <p class="text" id="3">Text</p>
  <p class="text" id="4">Text</p>
</div>
```
When the [Get Text block](/blocks/get-text.md) is being executed, it gets the first element that matches the selector which is `<p class="text" id="1">Text</p>` and because the mark element option is enabled, it will mark the element and look like this `<p class="text" id="1" block--block-id>Text</p>`.

```html
<div>
  <p class="text" id="1" block--block-id>Text</p>
  <p class="text" id="2">Text</p>
  <p class="text" id="3">Text</p>
  <p class="text" id="4">Text</p>
</div>
```
When the Get text block is executed for the second time, It will do the same thing all over but instead of selecting the `<p class="text" id="1" block--block-id>Text</p>` it will select the `<p class="text" id="2">Text</p>` element because the first element has been marked.

### Wait For Selector
Wait for the `selector` to appear on the page.  If at the moment of checking the `selector` and the `selector` already exists, the block immediately gets executed.  If the `selector` doesn't appear after the given time in the `timeout` text field, the workflow will throw an error.

## Generating Selector
If you don't know how to write your own selector, you can use the Automa Element Selector or the "Select" button on the block.
Automa Element Selector

In the Automa Dashboard, click the <v-remixicon name="riFocus3Line" /> button on the sidebar, And Automa will inject an element picker into the current page. You can click or press the `Space` key to select an element. It will automatically generate a selector for the selected element. 

![Element picker](https://res.cloudinary.com/chat-story/image/upload/v1666151274/automa/chrome_Kd5yzW80tf_sq2oxp.png)

And you'll find the "Select an element" button when editing a block. When you click it, it will inject the element picker to the current page, select an element, and click the "Select element" button in the element picker.

![Select an element button](https://res.cloudinary.com/chat-story/image/upload/v1666151714/automa/chrome_xQ16a4tU8v_etyuxh.png)