---
title: Reference Data
---

# Reference Data
Add dynamic data inside an input of a block, like in the element selector or the form value input. 

## Accessing Data
Automa uses the mustache tag (<code v-pre>{{ mustache }}</code>) syntax to know which input is dynamic or not.
Inside the mustache tag, you can either write the keyword of data you want to get from or a function, for example <code v-pre>{{ keyword }}</code>.

There're several sources of data that you can use:

| keyword | description |
| --- | --- |
| `table` | Get data from the [table](./table.md) |
| `variables` | Get data from the [variables](./variables.md) |
| `loopData` | Get the current iteration data from the [loop data](/blocks/loop-data.html#accessing-data) block |
| `prevBlockData` | Get the data of the previous block |
| `globalData` | Get the global data of the workflow |
| `googleSheets` | Get the [google sheets](/blocks/google-sheets.md) data |
| `activeTabUrl` | Get the active tab url |
| `workflow` | Get the data ([table](/api-reference/table.md), [global data](/api-reference/global-data.md), and [google sheets](/blocks/google-sheets.md)) of the workflow that have been execute by the [execute workflow block](/blocks/execute-workflow.md) |

You can replace the `keyword` with one of the above data sources, like <code v-pre>{{ globalData }}</code> or <code v-pre>{{ table }}</code>.
The mustache tag will be replaced with the data from the keyword that you specify.

But, what if I have an object or array data type and want to get the specific property or index of the object or array? To do that, use the <code v-pre>{{ keyword@path }}</code> syntax and replace the `path` with the dot notation of the object or array. For example, when you input [global data](/api-reference/global-data.md) as an object:

```json
{
  "firstname": "Amina",
  "lastname": "Ferry",
  "phone": 2347613906692,
  "gender": "female",
  "hobbies": ["cooking", "hiking", "camping"],
  "address": {
    "street": "540 Harris Track Suite 904",
    "streetName": "Edd Alley",
    "buildingNumber": "1135",
    "city": "North Kayleigh",
    "zipcode": "75882-2791",
    "country": "Guadeloupe"
  }
}
```
- Get value of the `firstName` property. <br>
  syntax: <code v-pre>{{ globalData@firstName }}</code> <br>
  output: `Amina`

- Get value of the `phone` property. <br>
  syntax: <code v-pre>{{ globalData@phone }}</code> <br>
  output: `2347613906692`

- Get the value of the `street` property of the `address` object.<br>
  syntax: <code v-pre>{{ globalData@adress.street }}</code> <br>
  output: `540 Harris Track Suite 904`

- Get the `hobbies` values.<br>
  syntax: <code v-pre>{{ globalData@hobbies }}</code> <br>
  output: `["cooking", "hiking", "camping"]`

- Get the first index value of the `hobbies` array.<br>
  syntax: <code v-pre>{{ globalData@hobbies.0 }}</code> <br>
  output: `cooking`

- Get the second index value of the `hobbies` array.<br>
  syntax: <code v-pre>{{ globalData@hobbies.1 }}</code> <br>
  output: `hiking`

## Functions
Inside the mustache tag, you also can call a built-in function that Automa has provided. Function name always starts with a dollar sign ($), for example <code v-pre>{{ $func() }}</code>. And here are some of the functions that available inside the mustache tag.

### `$date(date, dateFormat?)`
Get or format a date. This function takes two parameters, which the second parameter is optional. 

If you want to format the current date, you can directly pass the `dateFormat` as the first parameter, like <code v-pre>{{ $date('DD-MMMM-YYYY') }}</code>, and the output would be `14-January-2022`. See all the available date formats on the [day.js page](https://day.js.org/docs/en/display/format#list-of-all-available-formats).

And for the `date` parameter, see the valid date format on the [MDN page](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#examples).

**Examples**
```js
$date('DD MMMM YYYY') // 14 January 2022
$date('DD-MM-YYYY, hh:mm A')  // 14-01-2022, 02:24 PM
$date('relative') // A few seconds ago
$date('timestamp') // 1651118110948

$date('2005-06-07', 'DD MMMM YYYY') // 07 June 2005
$date('1977-04-01T14:00:30', 'DD-MM-YYYY, hh:mm A')  // 01-04-1977, 02:00 PM
$date('14 January 2021', 'relative') // A year ago
$date('14 January 2021', 'timestamp') // 1610553600000
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
## Referencing Data Inside Mustache Tag
By using the square bracket(`[]`), you can reference other data inside a mustache tag. For example, to format date based on the [global data](/api-reference/global-data.md) value <code v-pre>{{ $date([globalData]) }}</code>. Or if you want to get the table row based on the index of a loop <code v-pre>{{ table@[loopData@loopId.$index].path }}</code>.