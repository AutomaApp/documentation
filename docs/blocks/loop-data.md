---
title: Loop Data Block
---

# Loop Data Block

![Loop example](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/1069pe-en.gif)

You can use this block when you want to do looping through data.

## Loop Through
Select which data that you want to loop, you can select between the [table](../workflow/table.md), numbers, [Google Sheets](./google-sheets.md), elements, [variable](../workflow/variables.md), or custom.

When using the custom data option, make sure you write [array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays) data type with [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) syntax.

**Example**
```json
["one", "two", 3, 4, { "key": "value" }]
```

And when you select the `elements` options, Automa will return an array of selectors of the elements that match the `selector` you inputted. And you can use the loop data block like below.

![Loop elements](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/mgcyq-dr.png)

## Loop ID
ID to identify the loop. Use this Id when you want to access loop data inside [expressions](../workflow/expressions.md) or when using the [Loop Breakpoint](./loop-breakpoint.md) block.

## Max data
Set the limit of data to loop.

<hr />

Also see: [Looping](../workflow/looping.md#using-the-loop-data-or-loop-elements-block)