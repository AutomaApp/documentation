---
title: Looping
---

# Looping

Looping allows you to perform the same actions repeatedly and only stops after it loops all the items.

Looping is helpful when you want to process multiple similar items, for example filling forms where the value is from a Google Sheets. There are several ways to do looping in Automa:

1. Use the [Loop Data block](../blocks/loop-data.md) to loop through a [variable](./variables.md), [table](./table.md), [google sheets](../blocks/google-sheets.md) or custom JSON Array.
2. Use the [Loop Elements](../blocks/loop-elements.md) block to loop through elements on the page.
3. Use the [Repeat Task block](../blocks/repeat-task.md) for repeatedly doing actions a specified number of times.

## Using the Loop Data or Loop Elements Block

When using the [Loop Data](../blocks/log-data.md) or [Loop Elements block](../blocks/loop-elements.md), the [Loop Breakpoint](../blocks/loop-breakpoint.md) must include in the workflow. The Loop Breakpoint is for telling the workflow where the scope of the loop is. And inside the Loop Breakpoint, you also must input the Loop id of the loop block.

![Loop with breakpoint](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16ydun-cy.png)

The above workflow will repeatedly execute the Forms and the Get Text block based on the numbers of the items. And after it loops all the items, the workflow will continue to the Export Data block.

And when you're not defining the loop scope using the Loop Breakpoint block, the looping will not work.

![Loop without breakpoint](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16ydun-y8.png)

The above will execute the Forms and the Get Text block once and then continue to the Export Data block.

### Access Loop Item
You can use [expressions](./expressions.md) to access data from the current loop iteration inside the loop scope. For example, <code v-pre>{{loopData.loopId}}</code>; replace the `loopId` with the Loop id you inputted inside the Loop Data or Loop Element block.

![Access loop item](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16yduo-ib.png)

The <code v-pre>{{loopData.loopId}}</code> expression will return:
```json
{
  "data": ...,
  "$index": 1
}
```
So if you want to access the index of the loop, you can use [expressions](./expressions.md) like <code v-pre>{{loopData.loopId.$index}}</code>; And to get the loop value, you don't need to write the `data` property like <code v-pre>{{loopData.loopId.data}}</code>; Automa will automatically assign it to the expressions. But if you use [JavaScript expressions](./expressions.md#javascript-expressions), you must include the `data` property <code v-pre>!!{{loopData.loopId.data}}</code>

## Using the Repeat Task Block

Using the [Repeat Task block](../blocks/repeat-task.md) is the easiest way to do looping. You only need to define how many times to repeat the actions and where to start to repeat them.

![Repeat task](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16yduo-q7.png)

The above will start to repeat to execute from the Click Element block, and after it executes three times. The workflow will continue to the New Tab block.
