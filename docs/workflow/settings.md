---
title: Workflow Settings
---

# Workflow Settings

It's possible to set custom settings on each workflow from the **workflow > settings** menu.

![workflow settings](https://res.cloudinary.com/chat-story/image/upload/v1666082112/automa/chrome_K7BmBkZ2gZ_o7k6fi.png)

The workflow settings have three sections.

## 1. General

It contains the following settings:
- **On workflow error**: Select what to do when an error occurs on the workflow.
- **Workflow execution**: Whether to run the workflow in the popup dashboard or in the background.
- **Workflow notification**: Toggle whether to show a notification when the workflow execution end.
- [**Debug mode**](./debug-mode.md): Execute the workflow using the Chrome DevTools Protocol
- **Autocomplete**: Enable autocomplete in the input of a block
- **Reuse the last workflow state**: Use the state data (table, variables, and global data) from the last execution.
- **Save workflow log**: Save the logs of the workflow.
- **Show executed block on the web page**: Show the block that workflow currently executes on the webpage. This setting only shows blocks in the "Web interaction" category, like the Click Element and the Forms block.
- **Workflow public Id**: The public id of the workflow, you can use this public id when executing workflow using Javascript CustomEvent.

### Workflow Execution
Some features that will not available and advantages when selecting "popup" or "background" when running the workflow:

| Name/Features | `Popup` | `Background` |
| --- | :---: | :---: |
| Max running time | No limit | ~5 Minutes |
| Required popup window | ✅ | ❌ |
| [JS Background Execution](../reference/javascript-execution-context.md#background) | ✅ | ❌ |
| [JavaScript Expression](./expressions.md#javascript-expressions) | ✅ | ❌ |
| [Clipboard Block](../blocks/clipboard.md) | ✅ | ❌ |


## 2. Table

It contains the following settings:

- **Insert into the default column**: Insert data to the default column if there's no column selected in the block or when the column doesn't exist.
- **Default column name**: The name of the default column

## 3. Blocks

It contains the following settings:

- **Block delay**: Add delay before executing each of the blocks
- **Tab load timeout**: Maximum time to load tab in milliseconds