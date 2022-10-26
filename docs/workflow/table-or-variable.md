---
title: Table or Variable
---

# Table or Variable

Table and variables have the same functionality are to store information or value from the page. But these two have some differences.

## 1. Data Type
Every column of the table is a strict type of data. For example, when you retrieve a text and want to insert it to the `price` column which has the `number` data type, that text will be converted to a number before being inserted. In variables, it doesn't associate with any data types, meaning that you can store `text`, `number`, `object`, or `array` in it.

## 2. Inserting Value
Whenever inserting a value to the table, the value will get pushed to the end row of the selected column. For example, before inserting value:

| `name` | `price` |
| --- | --- |
| t shirt | 1000 |
| pants | 2000 |

After inserting value:

| `name` | `price` |
| --- | --- |
| t shirt | 1000 |
| pants | 2000 |
| | 5000 |

But in the variables, the variable value will get overwritten with the new value.