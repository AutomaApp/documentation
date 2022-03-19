---
title: Javascript Code Block
---

# Javascript Code Block
Execute your javascript code on the website.

## Timeout
Javascript code execution timeout, default to 20000ms (20 seconds). If it reaches the timeout, the workflow will continue to execute the next block.

## JavaScript Code
There're several built-in functions that you can call within the code.

### `automaNextBlock(data, insert?)`
To tell the workflow to continue to execute the next block.

Use the `data` parameter to insert data into the table. This parameter can take an object or an array of objects data types. And the key of the object must be defined in the [table](/api-reference/table.md).

**Examples**
```js
automaNextBlock({ title: 'Something', count: 200 });

//or

automaNextBlock([{ title: 'Foo', count: 300 }, { title: 'Bar', count: 200 }])
```
![table](https://res.cloudinary.com/chat-story/image/upload/v1642474574/automa/chrome_7ehs03LPjU_i0ivn2.png)

`insert` parameter is used to tell the workflow whether to insert the data in the `data` parameter into the table or not. Defaults to `true`.

### `automaSetVariable(name, value)`
Set the value of the workflow variables.

**Examples**
```js
automaSetVariable('name', 'John Doe');

automaSetVariable('prices', [200, 1000, 4000, 900, 200]);

automaSetVariable('profile', { firstName: 'John', lastName: 'Doe' });
```

### `automaRefData(keyword, path)`
Use this function to [reference data](/api-reference/reference-data.md).

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

### `automaResetTimeout()`
Reset the execution timeout.

## Preload Script
Load a javascript file before executing the javascript code.
- **URL** <br>
	URL of the javascript file.