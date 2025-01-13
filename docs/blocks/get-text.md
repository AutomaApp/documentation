---
title: Get Text Block
---

# Get Text Block

Retrieve the text content of an element.

- **Element selector** <br>
	[Element selector](../workflow/element-selector.md).

- **Regex** <br>
	Matching the retrieved text against the regex

- **Assign to variable** <br>
	Whether assign the text into a [variable](../workflow/variables.md) or not.

- **Variable name** <br>
	Name of the variable to assign the text.

- **Insert to table** <br>
	Whether insert the text into the [table](../workflow/table.md) or not.

- **Select column** <br>
	The column where the text will be inserted.

- **Text prefix** <br>
	Add a prefix to the retrieved text.

- **Text suffix** <br>
	Add a suffix to the retrieved text.

- **Add extra row** <br>
	Insert an extra row into [table](../workflow/table.md).

- **Include HTML tags** <br />
	Includes the HTML tags of the element itself and all its child elements.
	When you need to get the complete content including HTML tags.
  - Returns the complete HTML string of the element
  ```html
  <!-- for example -->
  <div class="test">Hello <span style="display:none">hidden</span> world!</div>
  ```

  return `<div class="test">Hello <span style="display:none">hidden</span> world!</div>`

- **Use `textContent`** <br />
	Retrieve all the text from the element even if the text is not visible on the screen.
	When you need to get all raw text content, regardless of style and visibility.
	- Returns the text content of the node and all its descendants
  - Returns text from all elements, including `<script>` and `<style>` elements
  - Returns text from hidden elements
  - Ignores styles and returns raw text
  
  return `Hello hidden world!`


If you do not select either option (which is also the default behavior), it will return as in the example above: `Hello world`

When you only need to get the text content is visible.


<!--@include: ../parts/blocks-interaction-note.md-->
