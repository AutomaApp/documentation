---
title: Adding Workflow
---

# Adding Workflow

Workflow is a sequence of an automated process made up of blocks. The blocks are executed in the order they are connected and always started from the [trigger block](/blocks/trigger.md).

For adding a new workflow, you can follow these steps:

1. Open the dashboard by clicking the home button in the Automa popup.
![Dashboard button](https://res.cloudinary.com/chat-story/image/upload/v1642582384/automa/9D04VZtFgd_gdbojq.png)
2. Click the workflows icon on the sidebar and click the "new workflow" button.
3. Input the name and description of the workflow.

To add a block to the workflow, drag a block on the left side and drop it to the editor.

Click the play button if you want to start executing the workflow. You can set how and when the workflow executes on the [trigger block](/blocks/trigger.md).

## Connecting Block
There're several ways to connect a block to another block:

- **Manually** <br>
By dragging the block output into an input of a block.
::: details Example
![connect block manually](https://res.cloudinary.com/chat-story/image/upload/v1642573241/automa/connect-block-manual_krat5z.gif)
:::

- **Drop to the output** <br>
Drop the block to the output of a block.
::: details Example
![drop to output example](https://res.cloudinary.com/chat-story/image/upload/v1642573402/automa/connect-block-ouput_nn5nx7.gif)
:::

- **Drop to the connection** <br>
Drop the block to the connection of a block.
::: details Example
![drop to connection example](https://res.cloudinary.com/chat-story/image/upload/v1642573908/automa/connect-block-connection_kbon3v.gif)
:::

## Reroute Block Connection
![Reroute example](https://res.cloudinary.com/chat-story/image/upload/v1642575499/automa/chrome_00RH6LDAX0_kjenjv.png)

Reroute the connection of a block by double-clicking at its connection. And double-click at the point to remove the reroute.

<iframe width="100%" height="325" src="https://www.youtube.com/embed/PmejVpMZxVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
