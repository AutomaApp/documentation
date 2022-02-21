---
title: Table
---

# Table

Table or in the previous version known as `Data columns` is used to store scraped data from a website. Table is similar to a spreadsheet. But in the table, every column is a strict type of data.


## Add Column

Open a workflow, and click the table icon (<svg style="vertical-align: bottom;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 10v4h6v-4h-6zm-2 0H5v4h6v-4zm2 9h6v-3h-6v3zm-2 0v-3H5v3h6zm2-14v3h6V5h-6zm-2 0H5v3h6V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>) on the top right. Input the name of the column, and click the add button. Next to the column you have added, you can select the data type of the column.

There're four data types you can select `Text`, `Number`, [`Boolean`](https://en.wikipedia.org/wiki/Boolean_data_type), and [`Array`](https://en.wikipedia.org/wiki/Array_data_type)

![Table](https://res.cloudinary.com/chat-story/image/upload/v1645413122/automa/Add_column_tmxv07.png)

## Insert Data

If a block has the "Insert to table" checkbox when you edit it, it means the block can insert data into the table. You can find this checkbox in a block like the [get text](/blocks/get-text.md) block and [attribute value](/blocks/attribute-value.md) block. 

The data that the block scraped, later on, will be inserted in the column that you selected. The data that gets inserted into the table is getting push to the end row of the column. For example, when using the get text block and the `name` column is selected, 
before the block is executed:

| `name` | `price` | `url` |
| --- | --- | --- |
| Car | 4000 | https://en.wikipedia.org/wiki/Car |
| Motorcycle | 2000 | https://en.wikipedia.org/wiki/Motorcycle |

After the block is executed:
| `name` | `price` | `url` |
| --- | --- | --- |
| Car | 4000 | https://en.wikipedia.org/wiki/Car |
| Motorcycle | 2000 | https://en.wikipedia.org/wiki/Motorcycle |
| Boat | | |

And if you don't want the data to be inserted into the table, you can uncheck the "Insert to table" checkbox.

![Select column](https://res.cloudinary.com/chat-story/image/upload/v1645414047/automa/chrome_SNejeJp6ml_xdlwro.png)

## Accessing Table Data

Inside the workflow, the table is store as an array of object.

```json
[
  { "name": "Car", "price": 4000, "url": "https://en.wikipedia.org/wiki/Car" },
  { "name": "Motorcycle", "price": 2000, "url": "https://en.wikipedia.org/wiki/Motorcycle" }
]
```

To access the row of table from an input of a block, you can use a mustache tag like <code v-pre>{{ table }}</code>, you can see more examples on [reference data](/api-reference/reference-data.md).

When you write <code v-pre>{{ table }}</code> in an input of a block, the mustache tag will be replaced with all the data from the [table](./table.md).

To get specific row or column of the table, you can write a mustache tag with <code v-pre>{{ table@path }}</code> syntax, the `path` is where you write the dot notation of the data. For example, table have data like these:

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
- To get the first row or index of the table. <br>
  syntax: <code v-pre>{{ table@0 }}</code> <br>
  output: `{ "name": "Car", "price": 4000, "url": "https://en.wikipedia.org/wiki/Car" }`

- Get the second row of the table. <br>
  syntax: <code v-pre>{{ table@1 }}</code> <br>
  output: `{ "name": "Motorcycle", "price": 2000, "url": "https://en.wikipedia.org/wiki/Motorcycle" }`

- Get the `name` column from the first row. <br>
  syntax: <code v-pre>{{ table@0.name }}</code> <br>
  output: `Car`

- Get the `price` column from the second row. <br>
  syntax: <code v-pre>{{ table@1.price }}</code> <br>
  output:  `2000`

This syntax also can be applied to the other keyword like the `globalData` if the data type is array or object.

![Example](https://res.cloudinary.com/chat-story/image/upload/v1642296980/automa/chrome_oTSux12om5_mefqcs.png)

