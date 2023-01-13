---
title: Condition Builder
---

# Condition Builder
Condition builders allow you to construct condition statements within your workflow. It can be used to control the flow using the Conditions or While Loop block.
You can add a condition button by clicking the "Add condition" button.

## Value

### Value
For the value you want to compare, you can write [expressions](../workflow/expressions.md) inside the text field.

#### Value prefix
This prefix is a convention used to indicate the data type of a value. It can be used to convert a value to the corresponding data type. For example, the "string::" prefix can be used to convert a value to a string type, and "number::" can be used to convert a value to a numeric type.

![Prefix example](https://res.cloudinary.com/chat-story/image/upload/v1673597971/automa/NVIDIA_Share_eyqm3SIAKx_kiot08.png)

Available prefix:
- `string::`: convert the value to a string.
- `json::`: convert the value to a JSON.
- `number::`: convert the value to a number.
- `boolean::`: convert the value to a boolean.

### Code
JavaScript expressions.

### Data Exists
Check if workflow data (variables, table, etc) exists. For example, check `name` variable `variables.name` or `variables@name`

## Element
- [Element Selector](../workflow/element-selector.md): The CSS selector or XPath of the element

### Element Text
Retrieve the text element

### Element Exists
### Element Not Exists
### Element Visible
### Element Visible in Screen
### Element Hidden in Screen
### Element Attribute Value