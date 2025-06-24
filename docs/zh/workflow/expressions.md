---
title: 表达式
---

# 表达式

::: tip 注意
如果您使用的是 v1.21.x 或更早版本，<code v-pre>{{ keyword@path }}</code> 语法在 v1.22.x 中仍然支持。
:::

此功能允许您根据以下数据为模块设置动态值：
| 名称 | 描述 | 访问项 |
| --- | --- | --- |
| `table` | 从 [表格](./table.md) 获取数据 | `table` |
| `variables` | 从 [变量](./variables.md) 获取数据 | `variables.<variableName>` |
| `loopData` | 获取 [循环数据](/blocks/loop-data.html#accessing-data) 模块的当前迭代数据 | `loopData.<loopId>` |
| `prevBlockData` | 获取上一个模块的数据 | `prevBlockData` |
| `globalData` | 获取工作流的全局数据 | `globalData` |
| `googleSheets` | 获取 [Google Sheets](/blocks/google-sheets.md) 数据 | `googleSheets.<referenceKey>` |
| `activeTabUrl` | 获取活动标签的 URL | `activeTabUrl` |
| `workflow` | 获取由 [执行工作流模块](/blocks/execute-workflow.md) 执行的工作流的数据（包括 [表格](./table.md) 和 [变量](./variables.md)） | `workflow.<executeId>` |

Automa 使用 Mustache 模板，并扩展了上述数据和函数。

## 编写表达式

要编写表达式，您必须遵循此格式 "<code v-pre>{{ keyword }}</code>"；并将 `keyword` 替换为上述数据源之一。这使 Automa 能够区分静态数据和动态数据。

假设您在工作流中有一个变量，变量名为 `socials`，其值是一个对象数组。您希望使用 [HTTP 请求模块](../blocks/webhook.md) 将此变量发送到 API。

```json
[
  { "name": "GitHub", "url": "https://github.com/AutomaApp" },
  { "name": "Twitter", "url": "https://twitter.com/AutomaApp" },
  { "name": "Discord", "url": "https://discord.gg/C6khwwTE84" }
]
```

您可以在 [HTTP 请求模块](../blocks/webhook.md) 的主体中使用以下表达式：
```
{{variables.socials}}
```
![HTTP 请求模块主体](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16vk9t-o6.png)

但如果您想在 [新标签模块](../blocks/new-tab.md) 的 URL 中使用数组第一个元素的 `url` 属性作为值呢？为此，请使用以下表达式：
```
{{variables.socials.0.url}}
```
![新标签模块 URL](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16vk9s-zz.png)

该表达式中的 `0` 表示数组的第一个元素。如果您想获取数组的第二个元素，请将其替换为 `1`。第三个元素用 `2`，第四个元素用 `3`，依此类推。

### 访问表达式中的其他数据

要在表达式中访问其他数据，您必须用括号（`[]`）包裹访问数据的表达式。例如，当您想使用 [`$increment`](#incrementvalue-incrementby) 函数递增一个变量或根据循环的当前索引获取表格行时，可以这样编写表达式：
```
{{$increment([variables.variableName])}}

{{table.[loopData.loopId.$index].columnName}}
```

## 函数

所有内置函数都以 `$` 前缀开头；例如，`$funcName(param)`；以下是 Automa 中可用函数的参考列表。

### `$date(date, dateFormat?)`
获取或格式化日期。此函数接受两个参数，第二个参数是可选的。

如果您想格式化当前日期，可以直接将 `dateFormat` 作为第一个参数传递，例如 <code v-pre>{{ $date('DD-MMMM-YYYY') }}</code>，输出将为 `14-January-2022`。有关所有可用日期格式，请参见 [day.js 页面](https://day.js.org/docs/en/display/format#list-of-all-available-formats)。

对于 `date` 参数，请参见有效日期格式的 [MDN 页面](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#examples)。

**示例**
```js
$date("DD MMMM YYYY") // 14 January 2022
$date("DD-MM-YYYY, hh:mm A")  // 14-01-2022, 02:24 PM
$date("relative") // 几秒钟前
$date("timestamp") // 1651118110948

$date("2005-06-07", "DD MMMM YYYY") // 07 June 2005
$date("1977-04-01T14:00:30", "DD-MM-YYYY, hh:mm A")  // 01-04-1977, 02:00 PM
$date("14 January 2021", "relative") // 一年前
$date("14 January 2021", "timestamp") // 1610553600000
```

### `$randint(min?, max?)`

生成一个随机数。您可以通过输入 `min` 和 `max` 参数来更改随机数的范围。

**示例**
```js
$randint() // 30
$randint() // 14

$randint(0, 10) // 4
$randint(0, 10) // 7
```

### `$getLength(str)`

获取字符串或数组的长度。

**示例**
```js
// 获取字符串的长度
$getLength("testing") // 7

// 获取表格的长度
$getLength([table]) // 14

// 获取第二行的 "text" 列的长度
$getLength([table.1.text]) // 5
```

### `$randData(expression)`
生成随机数据的函数，您只需将表达式传递给其参数。例如，`$randData("?l")` 将生成一个随机小写字母，如 `a`。支持的表达式：

- `?l`: 小写字母
- `?u`: 大写字母
- `?d`: 数字
- `?f`: 大写 + 小写
- `?s`: 符号
- `?m`: 大写 + 数字
- `?n`: 小写 + 数字
- `?a`: 任意字符

您还可以组合这些表达式，例如 `$randData("?u?l?l?l?l?d?d@gmail.com")` 将生成 `Apond89@gmail.com`。

**示例**
```js
$randData("?d?d") // 89

$randData("?l?l?l?d?d@gmail.com") // wal29@gmail.com

$randData("?d?u?s?l?l?s?a?m") // 4C%ee^MF9
```

### `$multiply(value, multiplyBy)`
用于乘以一个值。

**示例**
```js
$multiply(5, 2) // 10

// 乘以一个变量
$multiply([variables.variableName], 0.3) // 20.7
```

### `$increment(value, incrementBy)`
用于递增一个值。

**示例**
```js
$increment(10, 2) // 12

$increment(72, 2) // 74
```

### `$divide(value, incrementBy)`
用于除以一个值。

**示例**
```js
$divide(22, 7) // 3.142857142857143

$divide(10, 2) // 5
```

### `$subtract(value, incrementBy)`
用于减去一个值。

**示例**
```js
$subtract(80, 7) // 73

$subtract(11, 2) // 9
```

### `$replace(value, search, replace)`
用于将值中的字符串搜索替换为替换字符串。

**示例**
```js
$replace("hello world!", "world", "everyone") // hello everyone!

$replace("hello world!", "hello", "hi") // hi world!
```

### `$replaceAll(value, search, replace)`
用于替换值中所有匹配的字符串搜索为替换字符串。

**示例**
```js
$replace("hello world!", "o", "0") // hell0 w0rld

$replace("The temperature is 25 degrees today", " ", "") // Thetemperatureis25degreestoday
```

### `$toLowerCase(value)`
用于将值转换为小写。

**示例**
```js
$toLowerCase("HELLO WORLD!") // hello world!

$toLowerCase("hELLO wORLD!") // hello world!
```

### `$toUpperCase(value)`
用于将值转换为大写。

**示例**
```js
$toUpperCase("hello world!") // HELLO WORLD!

$toUpperCase("hELLO wORLD!") // HELLO WORLD!
```

### `$modulo(num, divisor)`
返回除法的余数或带符号余数。

**示例**
```js
$modulo(13, 5) // 3

$modulo(-13, 5) // -3

$modulo(4, 2) // 0

$modulo(-4, 2) // -0
```

### `$filter(data, syntax)`
过滤/查询 JavaScript 对象。Automa 使用 [JSONPath](https://github.com/dchester/jsonpath) 库进行查询。

- `data`: 要查询的 JavaScript 对象
- `syntax`: [JSONPath 语法](https://github.com/dchester/jsonpath#jsonpath-syntax)

**示例**

查询 `colors` 变量，值为：
```json
[
	{ "color": "red", "value": "#f00" },
	{ "color": "green", "value": "#0f0" },
	{ "color": "blue", "value": "#00f" },
	{ "color": "cyan", "value": "#0ff" },
	{ "color": "magenta", "value": "#f0f" },
	{ "color": "yellow", "value": "#ff0" },
	{ "color": "black", "value": "#000" }
]
```
```js
{{ $filter([variables.colors], "$..color") }}
// ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black']

{{ $filter([variables.colors], "$..value") }}
// ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0', '#000']
```

使用 [JS 表达式](#javascript-expressions)

```js
!!{{ $filter(variables.colors, "$..color") }}
// ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black']

!!{{ $filter(variables.colors, "$..value") }}
// ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0', '#000']
```

### `$stringify(value)`
将 JavaScript 值转换为 JSON 字符串。

## 示例

本节提供了如何编写表达式的更多示例，以及源数据的数据结构。

### [表格](./table.md)
表格存储为对象数组，表格列作为对象键。

```json
[
  { "color": "blue", "value": "#00f" },
  { "color": "cyan", "value": "#0ff" },
  { "color": "magenta", "value": "#f0f" },
  { "color": "yellow", "value": "#ff0" },
  { "color": "black", "value": "#000" }
]
```
- 获取表格的第一行。 <br>
  表达式: <code v-pre>{{ table.0 }}</code> <br>
  输出: `{ "color": "blue", "value": "#00f" }`

- 获取表格的第二行。 <br>
  表达式: <code v-pre>{{ table.1 }}</code> <br>
  输出: `{ "color": "cyan", "value": "#0ff" }`

- 获取表格的最后一行。 <br>
  表达式: <code v-pre>{{ table.$last }}</code> <br>
  输出: `{ "color": "black", "value": "#000" }`

- 获取表格第一行的 `color` 列的值。 <br>
  表达式: <code v-pre>{{ table.0.color }}</code> <br>
  输出: `blue`

- 获取表格第一行的 `value` 列的值。 <br>
  表达式: <code v-pre>{{ table.0.value }}</code> <br>
  输出: `#00f`

### [变量](./variables.md)
变量存储为对象，变量名作为对象键。
```json
{
  "url": "https://extension.automa.site",
  "numbers": [100, 500, 300, 200, 400]
}
```
- 获取 `url` 变量的值。 <br>
  表达式: <code v-pre>{{ variables.url }}</code> <br>
  输出: `https://extension.automa.site`

- 获取 `numbers` 变量的值。 <br>
  表达式: <code v-pre>{{ variables.numbers }}</code> <br>
  输出: `[100, 500, 300, 200, 400]`

- 获取 `numbers` 变量的第一个数字。 <br>
  表达式: <code v-pre>{{ variables.numbers.0 }}</code> <br>
  输出: `100`

## JavaScript 表达式

::: tip 注意
仅在基于 Chromium 的浏览器中支持
:::

Automa 还支持在表达式中使用 JavaScript，但要编写 JavaScript，您必须在模块的文本字段的第一个值前添加 `!!` 字符。例如，从 <code v-pre>The number is: {{variables.number}}</code> 到 <code v-pre>!!The number is: {{variables.number}}</code>。

![JS 表达式](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16vjb0-5t.png)

您可以像使用 JavaScript 函数一样使用内置函数。

**示例**

- 使用内置函数
```js
{{$getLength(table)}} // 10

{{$randData("?d?d")}} // 89
```
- 获取最后一行表格
```js
{{table[table.length - 1].columnName}}
```

- 获取当前时间戳
```js
{{Date.now()}} // 1666237704022
```
- 访问循环数据和索引
```js
// 循环数据
{{loopData.loopId.data}}

// 循环索引
{{loopData.loopId.$index}}
```