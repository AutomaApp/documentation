---
title: Javascript Code Block
---

# Javascript Code Block
Execute your javascript code on the website.

## Timeout
Javascript code execution timeout, default to 20000ms (20 seconds). If it reaches the timeout, the workflow will continue to execute the next block.

## Execute Every New Tab
This will execute the javascript code every time Automa creates a new tab or switches a tab. When this option is enabled, the javascript code block no longer requires an active tab to work and built-in functions like `automaRefData`, `automaNextBlock`, etc; will not be available. For example

![execute every new tab](https://res.cloudinary.com/chat-story/image/upload/v1651031286/automa/chrome_b0wdnqRYv1_vknvhm.png)

## Execution Context
Refer to: [Javascript Execution Context](../reference/javascript-execution-context.md)

## JavaScript Code
There're several built-in functions that you can call within the code.

### `automaNextBlock(data, insert?)`
To tell the workflow to continue to execute the next block.

Use the `data` parameter to insert data into the table. This parameter can take an object or an array of objects data types. And the key of the object must be defined in the [table](../workflow/table.md).

The `insert` parameter is used to control whether to insert the data in the `data` parameter into the table, defaults to `true`. Alternatively, you can pass an object that contains two optional properties:
- `insert`: whether insert data into the table.
- `nextBlockId`: A string that specifies the ID of the next block to navigate to.

**Examples**
```js
automaNextBlock({ title: 'Something', count: 200 });

//or

automaNextBlock([{ title: 'Foo', count: 300 }, { title: 'Bar', count: 200 }])

// Continue execution to a specific block
automaNextBlock({ title: 'Hello' }, { nextBlockId: '4dxcxa3' })
```
![table](https://res.cloudinary.com/chat-story/image/upload/v1642474574/automa/chrome_7ehs03LPjU_i0ivn2.png)

### `automaSetVariable(name, value)`
Set the value of the workflow variables.

**Examples**
```js
automaSetVariable('name', 'John Doe');

automaSetVariable('prices', [200, 1000, 4000, 900, 200]);

automaSetVariable('profile', { firstName: 'John', lastName: 'Doe' });
```

### `automaRefData(keyword, path)`
Use this function to access workflow data like the table, variables, etc.

Read more: [Expressions](../workflow/expressions.md)

**Examples**
```js
// Get the first row of the table
const firstRow = automaRefData('table', '0');

// Get the last row of the table
const firstRow = automaRefData('table', '$last');

// Get the "name" column on the first row of the table
const firstRow = automaRefData('table', '0.name');

// Get the global data of the workflow
const globalData = automaRefData('globalData');

// Get the iteration data of the loop data block
const data = automaRefData('loopData', 'loopId');

// Get the value of the "text" variable
const value = automaRefData('variables', 'text');
```

### `automaFetch(type, resource)`

Make an HTTP Request in the extension background, using it to avoid CORS.

- `type`: Response type of the request. Possible values `text` & `json`;
- `resource`: The resource that you wish to fetch

**Examples**
```js
automaFetch('json', { url: 'https://api.example.com'}).then((result) => {
	console.log(result);
})

automaFetch('json', {
	url: 'https://api.example.com',
	method: 'POST',
	body: JSON.stringify({
		title: 'Hello world',
	}),
})
```

### `automaResetTimeout()`
Reset the execution timeout.

## Preload Script
Load a javascript file before executing the javascript code.
- **URL** <br>
	URL of the javascript file.