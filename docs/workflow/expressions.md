---
title: Expressions
---

# Expressions
This feature allows you to set a dynamic value for a block based on data from:
| name | description |
| --- | --- |
| `table` | Get data from the [Table](./table.md) |
| `variables` | Get data from the [Variables](./variables.md) |
| `loopData` | Get the current iteration data of the [Loop Data](/blocks/loop-data.html#accessing-data) block |
| `prevBlockData` | Get the data of the previous block |
| `globalData` | Get the global data of the workflow |
| `googleSheets` | Get the [Google Sheets](/blocks/google-sheets.md) data |
| `activeTabUrl` | Get the active tab url |
| `workflow` | Get the data ([Table](./table.md), [Global Data](./global-data.md), and [Google Sheets](/blocks/google-sheets.md)) of the workflow that have been execute by the [Execute Workflow block](/blocks/execute-workflow.md) |

Automa uses mustache templating and extends it with data from above and functions.

## Writing Expression

To write an expression, you must follow this format "<code v-pre>{{ keyword }}</code>"; and replace the `keyword` with one of the above data sources. It allows Automa to differentiate between static and dynamic data.

Let's say you have a variable inside the workflow, and the variable name is `socials`; its value is an array of objects. You want to send this variable to an API using the [HTTP Request block](../blocks/webhook.md).

```json
[
  { "name": "GitHub", "url": "https://github.com/AutomaApp" },
  { "name": "Twitter", "url": "https://twitter.com/AutomaApp" },
  { "name": "Discord", "url": "https://discord.gg/C6khwwTE84" }
]
```

You can use the following expression inside the [HTTP Request block](../blocks/webhook.md) body:
```
{{variables.socials}}
```
![HTTP Request block body](https://res.cloudinary.com/chat-story/image/upload/v1666171308/automa/chrome_FbRbTGuOXy_j8frph.png)

But what if you want to use the `url` property on the first element of the array as a value inside the [New Tab block](../blocks/new-tab.md) URL? For that, use the following expression:
```
{{variables.socials.0.url}}
```
![New tab block URL](https://res.cloudinary.com/chat-story/image/upload/v1666232856/automa/chrome_8d0k1lZqUn_lxnycp.png)

`0` on that expression means the first element of the array. And if you want to get the second element of the array, replace it with `1`. `2` for the third element; `3` for the fourth element; and so on.

### Access Another Data Inside the Expressions

To access other data inside the expression, you must wrap the expression for accessing the data with a bracket (`[]`). For example, when you want to increment a variable using the [`$increment`](#incrementvalue-incrementby) function or get the table row based on the current index of the loop. You can write the expressions like:
```
{{$increment([variables@variableName]}}

{{table.[loopData@loopId.$index].columnName}}
```

## Functions

All built-in functions always start with the prefix `$`; for example, `$funcName(param)`; And here are reference list of available functions in Automa.


### `$date(date, dateFormat?)`
Get or format a date. This function takes two parameters, which the second parameter is optional.

If you want to format the current date, you can directly pass the `dateFormat` as the first parameter, like <code v-pre>{{ $date('DD-MMMM-YYYY') }}</code>, and the output would be `14-January-2022`. See all the available date formats on the [day.js page](https://day.js.org/docs/en/display/format#list-of-all-available-formats).

And for the `date` parameter, see the valid date format on the [MDN page](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#examples).

**Examples**
```js
$date("DD MMMM YYYY") // 14 January 2022
$date("DD-MM-YYYY, hh:mm A")  // 14-01-2022, 02:24 PM
$date("relative") // A few seconds ago
$date("timestamp") // 1651118110948

$date("2005-06-07", "DD MMMM YYYY") // 07 June 2005
$date("1977-04-01T14:00:30", "DD-MM-YYYY, hh:mm A")  // 01-04-1977, 02:00 PM
$date("14 January 2021", "relative") // A year ago
$date("14 January 2021", "timestamp") // 1610553600000
```

### `$randint(min?, max?)`

Generate a random number. You can change the range of the random number by inputting the `min` and `max` parameters.

**Examples**
```js
$randint() // 30
$randint() // 14

$randint(0, 10) // 4
$randint(0, 10) // 7
```

### `$getLength(str)`

Get the length of a string or array.

**Examples**
```js
// Get the length of a string
$getLength("testing") // 7

// Get tabel length
$getLength([table]) // 14

// Get the length of the "text" column on the second row
$getLength([table@1.text]) // 5
```

### `$randData(expression)`
A function to generate random data, you only need to pass an expression to its parameter. For example, `$randData("?l")` will generate a random lowercase letter like `a`. Supported expression:

- `?l`: lowercase
- `?u`: uppercase
- `?d`: digit
- `?f`: uppercase + lowercase
- `?s`: symbol
- `?m`: uppercase + digit
- `?n`: lowercase + digit
- `?a`: any

You can also combine these expressions like `$randData("?u?l?l?l?l?d?d@gmail.com")` which will generate `Apond89@gmail.com`.

**Examples**
```js
$randData("?d?d") // 89

$randData("?l?l?l?d?d@gmail.com") // wal29@gmail.com

$randData("?d?u?s?l?l?s?a?m") // 4C%ee^MF9
```

### `$multiply(value, multiplyBy)`
Is used to multiply a value.

**Examples**
```js
$multiply(5, 2) // 10

// Multiply a variable
$multiply([variables@variableName], 0.3) //20.7
```

### `$increment(value, incrementBy)`
Is used to increment a value.

**Examples**
```js
$increment(10, 2) // 12

$increment(72, 2) // 74
```

### `$divide(value, incrementBy)`
Is used to divide a value.

**Examples**
```js
$divide(22, 7) // 3.142857142857143

$divide(10, 2) // 5
```

### `$subtract(value, incrementBy)`
Is used to subtract a value.

**Examples**
```js
$subtract(80, 7) // 73

$subtract(11, 2) // 9
```

### `$replace(value, search, replace)`
Is used to replace a string search from value to be replace string.

**Examples**
```js
$replace("hello world!", "world", "everyone") // hello everyone!

$replace("hello world!", "hello", "hi") // hi world!
```

### `$toLowerCase(value)`
Is used to lowercase a value.

**Examples**
```js
$toLowerCase("HELLO WORLD!") // hello world!

$toLowerCase("hELLO wORLD!") // hello world!
```

### `$toUpperCase(value)`
Is used to uppercase a value.

**Examples**
```js
$toUpperCase("hello world!") // HELLO WORLD!

$toUpperCase("hELLO wORLD!") // HELLO WORLD!
```

### `$modulo(num, divisor)`
Returns the remainder or signed remainder of a division.

**Examples**
```js
$modulo(13, 5) // 3

$modulo(-13, 5) // -3

$modulo(4, 2) // 0

$modulo(-4, 2) // -0
```

## Examples

This section provides more examples of how to write expressions. And the data structure of the source data.

### [Table](./table.md)
The table is stored as an array of objects with the table column as the object key.

```json
[
  { "color": "blue", "value": "#00f" },
  { "color": "cyan", "value": "#0ff" },
  { "color": "magenta", "value": "#f0f" },
  { "color": "yellow", "value": "#ff0" },
  { "color": "black", "value": "#000" }
]
```
- Get the first row of the table. <br>
  expression: <code v-pre>{{ table.0 }}</code> <br>
  output: `{ "color": "blue", "value": "#00f" }`

- Get the second row of the table. <br>
  expression: <code v-pre>{{ table.1 }}</code> <br>
  output: `{ "color": "cyan", "value": "#0ff" }`

- Get the last row of the table. <br>
  expression: <code v-pre>{{ table.$last }}</code> <br>
  output: `{ "color": "black", "value": "#000" }`

- Get value of the `color` column on the first row of the table. <br>
  expression: <code v-pre>{{ table.0.color }}</code> <br>
  output: `blue`

- Get value of the `value` column on the first row of the table. <br>
  expression: <code v-pre>{{ table.0.value }}</code> <br>
  output: `#00f`

### [Variables](./variables.md)
The variables is stored as an object with the variable name as the object key.
```json
{
  "url": "https://automa.site",
  "numbers": [100, 500, 300, 200, 400]
}
```
- Get value of the `url` variable. <br>
  expression: <code v-pre>{{ variables.url }}</code> <br>
  output: `https://automa.site`

- Get value of the `numbers` variable. <br>
  expression: <code v-pre>{{ variables.numbers }}</code> <br>
  output: `[100, 500, 300, 200, 400]`

- Get the first number of the `numbers` variable. <br>
  expression: <code v-pre>{{ variables.numbers.0 }}</code> <br>
  output: `100`
