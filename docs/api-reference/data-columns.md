---
title: Data columns
---

# Data Columns

Data columns are used to store scraped data from a website. Data columns are similar to a table in a spreadsheet. But in the data columns, every column is a strict type of data.

For example, this data column has three columns (`name`, `price`, and `url`) with two rows of data.

| `name` | `price` | `url` |
| --- | --- | --- |
| Car | 4000 | https://en.wikipedia.org/wiki/Car |
| Motorcycle | 2000 | https://en.wikipedia.org/wiki/Motorcycle |

## Add column

Open a workflow, and then click the key icon on the top right.

![Data columns](https://res.cloudinary.com/chat-story/image/upload/v1637497865/automa/data-columns_gemxoz.png)

Input the name of the column, and click the add button. Next to the column you have added, you can select the data type. There're four data types you can select `Text`, `Number`, [`Boolean`](https://en.wikipedia.org/wiki/Boolean_data_type), and [`Array`](https://en.wikipedia.org/wiki/Array_data_type)

![Image](https://res.cloudinary.com/chat-story/image/upload/v1637499060/automa/data-columns-modal_n8ncjs.png)

## Insert data

If a block has a "Data columns" selection when you edit it, it means it can insert data into the data columns. For example, like the [get text](/blocks/get-text) block and [attribute value](/blocks/attribute-value) block. The data that the block scraped, later on, will be inserted in the column that you selected.

And if you don't want the data to be inserted into the data columns, you can uncheck the "Save data" checkbox.

![Select column](https://res.cloudinary.com/chat-story/image/upload/v1637668494/automa/data-columns-save-data_skd3yk.png)

## Accessing data

To access the data of data columns from an input of a block, you can use a mustache tag like <code v-pre>{{ dataColumns }}</code>, learn more on [reference data](/api-reference/reference-data.md).
