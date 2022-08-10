---
title: Trigger Block
---

# Trigger Block
This is block is the starting point where the workflow will start executing, you can configure how the workflow should be triggered using this block.

## Trigger Type
### Manually
Manually trigger the workflow by clicking the play (▶️) button.

### Interval
Execute the workflow in intervals, you can define the interval and the delay before executing the workflow in provided input.

### On a specific date
Execute the workflow on a specific date and time.

### On a specific day
Execute the workflow on a specific day and time.

### On browser startup
Execute the workflow when a profile that has this extension installed first starts up.

### Context menu
Execute a workflow via the context menu (right-clicking). When a workflow is executed via the context menu, there are several variables will be injected to it:

- `$ctxElSelector`: The selector of the element where you right click
- `$ctxTextSelection`: The selected text
- `$ctxMediaUrl`: The source URL of a media element (image, video, or audio)
- `$ctxLink`: The URL if you right-click on a link

But to use this trigger, you must grant Automa to use the `contextMenu` permission. This trigger has two options

- The workflow name in the context menu
- `Will appear in` which you can use to set when the workflow appears in the context menu. If none of these options is selected, it will appear every time the 
context menu is displayed.

### When visiting a website
Execute workflow when you're visiting a website that matches the URL or the [ReGex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that you inputted.
And when you check the `Use regex` checkbox, the value you inputted will be treated as a [ReGex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

### Keyboard shortcut
Execute the workflow using a keyboard shortcut. You can specify the keyboard shortcut by clicking the record (⏺️) button and pressing the key that you want to use.

And by default, the shortcut doesn't work when the cursor is on an input element, so to prevent this behavior you can checked the "Active while in input" checkbox.

::: tip Note
The keyboard shortcut only works when you're on a website. If the website URL starts with `chrome://` or `chrome-extension://` the keyboard shorcut won't work.
:::

## Parameters
The parameters of the workflow. These parameters will be inserted as variables when the workflow starts executing. For example, you have three parameters `URL`, `query`, and `id`. 

<img src="https://res.cloudinary.com/chat-story/image/upload/v1660101358/automa/NVIDIA_Share_VegY3DQG3E_un2glj.png" alt="Parameters" />

You can access those parameters using the mustache tag with `variables` as the keyword like <code v-pre>{{variables@URL}}</code> or <code v-pre>{{variables@id}}</code>