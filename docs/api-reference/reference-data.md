---
title: Reference data
---

# Reference data
Add dynamic data inside an input of a block, like in the element selector or the form value input. 

Automa uses the mustache tag (<code v-pre>{{ mustache }}</code>) syntax to know which input is dynamic or not.
Inside the mustache tag, you can either write the keyword of data you want to get from or a function, for example <code v-pre>{{ globalData }}</code> to get the global data of the workflow.

## Accessing data
There're several sources of data that you can use:

| keyword | description |
| --- | --- |
| `dataColumns` | Get data from the [data columns](./data-columns.md) |
| `loopData` | Get the current iteration data from the [loop data](/blocks/loop-data.html#accessing-data) block |
| `prevBlockData` | Get the data of the previous block |
| `globalData` | Get the global data of the workflow |
| `googleSheets` | Get the [google sheets](/blocks/google-sheets.md) data |
| `activeTabUrl` | Get the currently active tab url |

When you write <code v-pre>{{ dataColumns }}</code> in an input of a block, the mustache tag will be replaced with all the data from the [data columns](./data-columns.md).

To get specific row or column of the data columns, you can write a mustache tag with <code v-pre>{{ dataColumns@path }}</code> syntax, the `path` is where you write the dot notation of the data. For example, data columns have data like these:

| `name` | `price` | `url` |
| --- | --- | --- |
| Car | 4000 | https://en.wikipedia.org/wiki/Car |
| Motorcycle | 2000 | https://en.wikipedia.org/wiki/Motorcycle |

When it converts to JSON, it'll be an array of objects like these.

```json
[
  { "name": "Car", "price": 4000, "url": "https://en.wikipedia.org/wiki/Car" },
  { "name": "Motorcycle", "price": 2000, "url": "https://en.wikipedia.org/wiki/Motorcycle" }
]
```
- To get the first row or index of the data columns. <br>
  syntax: <code v-pre>{{ dataColumns@0 }}</code> <br>
  output: `{ "name": "Car", "price": 4000, "url": "https://en.wikipedia.org/wiki/Car" }`

- Get the second row of the data columns. <br>
  syntax: <code v-pre>{{ dataColumns@1 }}</code> <br>
  output: `{ "name": "Motorcycle", "price": 2000, "url": "https://en.wikipedia.org/wiki/Motorcycle" }`

- Get the `name` column from the first row. <br>
  syntax: <code v-pre>{{ dataColumns@0.name }}</code> <br>
  output: `Car`

- Get the `price` column from the second row. <br>
  syntax: <code v-pre>{{ dataColumns@1.price }}</code> <br>
  output:  `2000`

This syntax also can be applied to the other keyword like the `globalData` if the data type is array or object.

![Example](https://res.cloudinary.com/chat-story/image/upload/v1642296980/automa/chrome_oTSux12om5_mefqcs.png)

## Functions
Inside the mustache tag, you also can call a built-in function that Automa has provided. Function name always starts with a dollar sign ($), for example <code v-pre>{{ $func() }}</code>. And here are some of the functions that available inside the mustache tag.

### `$date(date, dateFormat?)`
Get or format a date. This function takes two parameters, which the second parameter is optional. 

If you want to format the current date, you can directly pass the `dateFormat` as the first parameter, like <code v-pre>{{ $date('DD-MMMM-YYYY') }}</code>, and the output would be `14-January-2022`. See all the available date formats on the [day.js page](https://day.js.org/docs/en/display/format#list-of-all-available-formats).

And for the `date` parameter, see the valid date format on the [MDN page](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#examples).

**Examples**
```js:no-v-pre
$date('DD MMMM YYYY') // 14 January 2022
$date('DD-MM-YYYY, hh:mm A')  // 14-01-2022, 02:24 PM
$date('relative') // A few seconds ago

$date('2005-06-07', 'DD MMMM YYYY') // 07 June 2005
$date('1977-04-01T14:00:30', 'DD-MM-YYYY, hh:mm A')  // 01-04-1977, 02:00 PM
$date('14 January 2021', 'relative') // A year ago
```

### `$randint(min, max)`

Generate a random number. You can change the range of the random number by inputting the `min` and `max` parameters.

**Examples**
```js
$randint() // 30
$randint() // 14

$randint(0, 10) // 4
$randint(0, 10) // 7
```