---
title: Javascript Code Block
---

# Javascript Code Block
Execute your javascript code on the website.

## Timeout
Javascript code execution timeout, default to 20000ms (20 seconds). If it reaches the timeout, the workflow will continue to execute the next block.

## JavaScript Code
There're several built-in functions that you can call within the code.

### `automaNextBlock(data)`
To tell the workflow to continue to execute the next block.

Use the `data` parameter to insert data into the data columns. This parameter can take an object or an array of objects data types. And the key of the object must be defined in the [data columns](/api-reference/data-columns.md).

**Example**
```js
automaNextBlock({ title: 'Something', count: 200 });

//or

automaNextBlock([{ title: 'Foo', count: 300 }, { title: 'Bar', count: 200 }])
```
![Data columns](https://res.cloudinary.com/chat-story/image/upload/v1642474574/automa/chrome_7ehs03LPjU_i0ivn2.png)

### `automaRefData(keyword, path)`
Use this function to [reference data](/api-reference/reference-data.md).

### `automaResetTimeout()`
Reset the execution timeout.

## Preload Script
Load a javascript file before executing the javascript code.
- **URL** <br>
	URL of the javascript file.