---
title: Workflow Table
---

# Workflow Table

A workflow table is used to store retrieved data from a website. It is similar to a spreadsheet. But in the table, every column is a strict data type.

## Adding Table Column

Before inserting data into the table, you must define a column for the table.

Open a workflow, and click the table icon (<v-remixicon name="riTable2" />) on the top right. Input the name of the column, and click the add button. Next to the column you have added, you can select the column data type.

There're four data types you can select `Text`, `Number`, [`Boolean`](https://en.wikipedia.org/wiki/Boolean_data_type), [`Array`](https://en.wikipedia.org/wiki/Array_data_type), and `Any`.

![Workflow table](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16dibh-p3.png)

## Insert Data
You can insert data to the table by using blocks that are used for extracting data from a website, such as the [Get Text block](../blocks/get-text.md) and [Attribute Value block](../blocks/attribute-value.md). To insert data using that blocks, click the edit button, enable the "Insert to table" option, and select one of the columns.

![Select column](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16dibg-h2.png)

Every time you insert data into the table, the data will get pushed to the end row of the column. For example, when you have filled a table with data like this.

| `title` | `price` | `urls` | `available` |
| --- | --- | --- | --- |
| Car | 4000 | ["https://en.wikipedia.org/wiki/Car"] | true |
| Motorcycle | 2000 | ["https://en.wikipedia.org/wiki/Motorcycle"] | false |

And when the workflow executes a Get Text block. And it inserts the data into the `title` column. The table would be like this.

| `name` | `price` | `urls` | `available` |
| --- | --- | --- | --- |
| Car | 4000 | ["https://en.wikipedia.org/wiki/Car"] | true |
| Motorcycle | 2000 | ["https://en.wikipedia.org/wiki/Motorcycle"] | false |
| Boat | | |

Inside the workflow, the table stored an array of objects.

```json
[
  {
    "name": "Car",
    "price": 4000,
    "urls": ["https://en.wikipedia.org/wiki/Car"],
    "available": true
  },
  {
    "name": "Motorcycle",
    "price": 2000,
    "urls": ["https://en.wikipedia.org/wiki/Motorcycle"],
    "available": false
  },
  {
    "name": "Boat"
  }
]
```

## Export Table Data
Use the [Export Data block](../blocks/export-data.md) to export the table into a file. You can select whether to export the table as "Text", "CSV", or "JSON" file.