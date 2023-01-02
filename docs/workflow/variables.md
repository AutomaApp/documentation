---
title: Variables
---

# Variables

Variables are used to store a value, and you can access this value throughout the workflow.

For example, you can store the retrieved text by the [Get Text block](../blocks/get-text.md) inside a variable and access that variable in another block.

## Variable Name

You can name the variable to whatever you want. But to make it easier to access the variable inside a mustache tag, don't include space, at (@), and bracket ([]) sign in the variable name.

## Variable Prefix

Automa uses prefixes or symbols in the names of variables or commands to indicate a specific purpose or functionality. For example, the `$$` prefix like `$$variableName` means that the variable is stored on the storage.

### `$$`
The `$$` prefix means to set or access the variable value stored in the [storage](../reference/storage.md).

- **See also: [Storage](../reference/storage.md)**

### `$push:`
When you use the `$push:` as the prefix, Automa will change the variable value data type to an array. If the variable already has value, the value will become the array's first item. And when you assign a value to the variable, instead of replacing the variable value, Automa will push that value into the variable.

Let's say you loop through elements. You want to get the element text using the Get Text block and put the element's text to a variable with `$push:` as the prefix like `$push:texts`; On the first iteration, the `texts` variable value will be `["Text 1"]`; On the second iteration `["Text 2"]`; and so on.