---
title: JavaScript 代码块
---

# JavaScript 代码块
在网站上执行您的 JavaScript 代码。

## 超时
JavaScript 代码执行超时，默认为 20000 毫秒（20 秒）。如果达到超时，工作流将继续执行下一个块。

## 每次新建标签时执行
每当 Automa 创建新标签或切换标签时，将执行 JavaScript 代码。当启用此选项时，JavaScript 代码块不再需要活动标签来工作，内置函数如 `automaRefData`、`automaNextBlock` 等将不可用。例如：

![每次新建标签时执行](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/18ft25-8p.png)

## 执行上下文
参考: [JavaScript 执行上下文](../reference/javascript-execution-context.md)

## JavaScript 代码
在代码中可以调用几个内置函数。

### `automaNextBlock(data, insert?)`
```ts
automaNextBlock(
	data?: Object | Object[], 
	insert?: boolean | { insert?: boolean; nextBlockId?: string; replaceTable?: boolean }
): void;
```

告诉工作流继续执行下一个块。

使用 `data` 参数将数据插入到表格中。此参数可以接受对象或对象数组数据类型。对象的键必须在 [表格](../workflow/table.md) 中定义。

`insert` 参数用于控制是否将 `data` 参数中的数据插入到表格中，默认为 `true`。或者，您可以传递一个包含两个可选属性的对象：
- `insert`: 是否将数据插入到表格中。
- `nextBlockId`: 一个字符串，指定要导航到的下一个块的 ID。
- `replaceTable`: 用第一个参数传递的值替换工作流表格的值。

**示例**
```js
automaNextBlock({ title: 'Something', count: 200 });

// 或

automaNextBlock([{ title: 'Foo', count: 300 }, { title: 'Bar', count: 200 }])

// 继续执行到特定块
automaNextBlock({ title: 'Hello' }, { nextBlockId: '4dxcxa3' })
```
![表格](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/18ft24-g3.png)

### `automaSetVariable(name, value)`
设置工作流变量的值。

**示例**
```js
automaSetVariable('name', 'John Doe');

automaSetVariable('prices', [200, 1000, 4000, 900, 200]);

automaSetVariable('profile', { firstName: 'John', lastName: 'Doe' });
```

### `automaRefData(keyword, path)`
使用此函数访问工作流数据，如表格、变量等。

阅读更多: [表达式](../workflow/expressions.md)

**示例**
```js
// 获取表格的第一行
const firstRow = automaRefData('table', '0');

// 获取表格的最后一行
const firstRow = automaRefData('table', '$last');

// 获取表格第一行的 "name" 列
const firstRow = automaRefData('table', '0.name');

// 获取工作流的全局数据
const globalData = automaRefData('globalData');

// 获取循环数据块的迭代数据
const data = automaRefData('loopData', 'loopId');

// 获取 "text" 变量的值
const value = automaRefData('variables', 'text');
```

### `automaFetch(type, resource)`

在扩展后台发起 HTTP 请求，以避免 CORS 问题。

- `type`: 请求的响应类型。可能的值为 `text` 和 `json`；
- `resource`: 您希望获取的资源。

**示例**
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
重置执行超时。

## 预加载脚本
在执行 JavaScript 代码之前加载 JavaScript 文件。
- **URL** <br>
	JavaScript 文件的 URL。