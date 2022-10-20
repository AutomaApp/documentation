---
title: Create Element Block
---

# Create Element Block

Create an element and insert it into the page.

- **Element selector** <br>
	The [element selector](../workflow/element-selector.md) of the targeted element.
	
- **Insert element**<br>
	Representing the position relative to the targeted element.
	- **As first child**<br>
		Insert it as the first child of the targeted element.
	
	- **As last child**<br>
		Insert it as the last child of the targeted element.
	
	- **As previous sibling**<br>
		Insert it as the previous sibling of the targeted element.
	
	- **As next sibling**<br>
		Insert it as the next sibling of the targeted element.
	
	- **Replace target element**<br>
		Replace the target element with the element that has been created.

- **HTML**<br>
	The HTML of the element that you want to create

- **CSS**<br>
	The CSS that will be injected into the page

- **JavaScript**<br>
	The JavaScript that will be injected into the page
	- **`automaRefData(keyword, path?)` function**<br>
		Use this function to [reference data](/api-reference/reference-data.md). <br>
		For more detail open the [Javascript Block page](/blocks/javascript-code.html#automarefdata-keyword-path)
	
	- **`automaExecWorkflow(detail)` function**<br>
		Function for executing a workflow. <br>
		The `detail` parameter is where you input the detail of the workflow like the id or `publicId` of the workflow you want to execute. For example,
		```js
		// execute workflow based on its id
		automaExecWorkflow({ id: 'workflow-id' });

		// execute workflow based on its publicId
		automaExecWorkflow({ publicId: 'workflow-public-id' });
		```
		You can also input variables that will be injected into the workflow when it's running.
		```js
		automaExecWorkflow({
			id: 'workflow-id',
			data: {
				variables: {
					varA: 'Variable A value',
					postCode: 1212,
					numbers: [1, 2, 3, 4],
				}
			}
		})
		```
- **Preload script**<br>
	Load scripts or styles before injecting the element.