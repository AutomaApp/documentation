---
title: Loop Data Block
---

# Loop Data Block

![Loop example](https://res.cloudinary.com/chat-story/image/upload/v1642310619/automa/loop_bd2por.gif)

You can use this block when you want to do looping through data. And for the source of the data, you can select between the [data columns](/api-reference/data-columns), numbers, [google sheets](/blocks/google-sheets), or custom.

When using the custom data option, make sure you write [array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays) data type with [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) syntax.

**Example**
```json
["one", "two", 3, 4, { "key": "value" }]
```

## Loop ID
ID to identify the loop. Use this ID when [referencing data](/api-reference/reference-data) of the current iteration or using the [loop breakpoint](/blocks/loop-breakpoint) block.

## Max data
Set the limit of data to loop.

## Accessing data
After you input the data that you want to loop, data of the current iteration of the loop will be available to the blocks after it. 

And you can access this data by using the mustache tag inside an input of a block, e.g. <code v-pre>{{ loopData@loopId }}</code>. Replace the `loopId` with the id of the loop. If the data is an [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects),
```js
{
  name: 'Foo',
  nested: {
    name: 'Bar'
  }
}
```
to access the value of it you can use <code v-pre>{{ loopData@loopId.path }}</code> syntax where the `path` is the dot notation of the object. For example:

- <code v-pre>{{ loopData@loopId.name }}</code> => `Foo`
- <code v-pre>{{ loopData@loopId.nested.name }}</code> => `Bar`

Read more: [reference data](/api-reference/reference-data.md)

## Breakpoint
To make the loop data block work as intended, you need to add a breakpoint for the loop using the [loop breakpoint block](/blocks/loop-breakpoint.md). With this breakpoint, Automa can know where to start over the loop.
