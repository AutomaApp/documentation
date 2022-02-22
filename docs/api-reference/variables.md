---
title: Variables
---

# Variables

Variables are used to store a value, and you can access this value throughout the workflow by using the mustache tag <code v-pre>{{}}</code>.

For example, you can store text that has been retrieved by the [get text block](/blocks/get-text.md) inside a variable.

## Variable Name

You can name the variable to whatever you want. But to make it easier to access the variable inside a mustache tag, don't include space, at (@), and bracket ([]) sign in the variable name.

## Access Variable Value

You can access the value of a variable by using the mustache tag and using `variables` as the keyword, e.g. <code v-pre>{{ variables@variableName }}</code>. Replace the `variableName` with the name of the variable.

See more: [Reference data](/api-reference/reference-data.md)