---
title: Blocks
---

# Blocks
There are six categories of blocks in Automa:
- **General**: Perform a general action in the workflow, like making an HTTP request or executing another workflow.
- **Browser**: To control the browser.
- **Web Interaction**: To interact with the active tab of the workflow. Before using blocks in this category, you need to use a [New Tab](../blocks/new-tab.md) or [Active Tab](../blocks/active-tab.md) block.
- **Control Flow**: Add logic to the workflow.
- **Online Services**: Services that integrate with Automa.
- **Data**: Modify or manipulate workflow variables or tables.

## Block Settings
The blocks come with a menu and settings that can be configured.

### Menu
To find the block menu, hover your mouse over a block in the editor canvas, and it will appear on top of the block.

- **Delete**: delete the block
- **Block settings**: open the current block settings
- **Move block to group blocks**: move the block to the Group blocks by dragging this icon.
- **Enable/disable block**: toggle deactivate block
- **Run**: run the workflow from the current block
- **Edit**: access the block properties, or you can double-click on the block.

You also right-click at the block to find more menus.

![Block menu](https://res.cloudinary.com/chat-story/image/upload/v1666161166/automa/block-menu_lq1vig.gif)

### Settings
The Block settings allow you to configure the block execution, error handling, and looks.

- **General**
  - [**Debug mode**](./debug-mode.md): use CSP to execute the block. This option is only available for some blocks like the Click Element block and Forms Block.
- **On error**
  - **Enable**: Enable the error handler for the block
  - **Retry action**: retry the block execution if an error occurs on the block
  - **Throw error**: if selected, the block will throw an error
  - **Continue flow**: if selected, the workflow execution will continue
  - **Execute fallback**: if selected, the workflow will continue to the block that connects to the fallback output
  - **Insert data**: insert data into the [table](./table.md) or [variable](./variables.md)
- **Lines**
  - **Select line**: select the block connection to customize
  - **Line label**: add label for the connection
  - **Animated**: animate the connection
  - **Line color**: change the color of the connection

![Block settings](https://res.cloudinary.com/chat-story/image/upload/v1666162997/automa/block-settings_ppatjo.gif)

## Selecting Blocks
To select blocks, you can either press the `ctrl` key => click the block or `shift` key => drag the cursor.

![Selecting blocks](https://res.cloudinary.com/chat-story/image/upload/v1666163436/automa/selecting-blocks_vecdy3.gif)

## Connecting Blocks
There are several ways to connect a block to another block:

- **Manually**: dragging the block output into an input of a block.
::: details Example
![connect block manually](https://res.cloudinary.com/chat-story/image/upload/v1662968420/automa/connect-block_advdve.gif)
:::

- **Drop a block into a block output**: drop the block to the output of a block. 
::: details Example
![drop to output example](https://res.cloudinary.com/chat-story/image/upload/v1642573402/automa/connect-block-ouput_nn5nx7.gif)
:::

- **Clicking the block output and input** <br>
::: details Example
![Clicking the block output and input example](https://res.cloudinary.com/chat-story/image/upload/v1662968420/automa/connect-block2_slxrpv.gif)
:::

- **Drop a block into another block** <br>
::: details Example
![drop to another block example](https://res.cloudinary.com/chat-story/image/upload/v1656734189/automa/drop_in_a_block_zzrtaw.gif)
:::