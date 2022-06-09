---
title: Creating Workflow
---

# Creating Workflow

Workflow is a sequence of an automated process made up of blocks. The blocks are executed in the order they are connected and always started from the [trigger block](/blocks/trigger.md).

There are two ways to create a workflow:
1. Recording
2. Manually

## Recording a Workflow
<br />
<iframe width="560" height="315" src="https://www.youtube.com/embed/mubwJBVOTa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The fastest and easiest way to create a workflow is by recording it. Automa will record your actions like clicking, inputting, and navigating the tab. And build a workflow based on that.

To start recording, open the popup, click the record workflow button ⏺️, and input the name for the workflow.

![Record workflow step](https://res.cloudinary.com/chat-story/image/upload/v1645325160/automa/Record_workflow_step_s0s6ty.png)

And to stop the recording, open the popup again, and click the stop button ⏹️.

## Manually
<br />
<iframe width="560" height="315" src="https://www.youtube.com/embed/NmRCgLtsPnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For creating a workflow manually,

1. Open the dashboard by clicking the home button in the popup.
![Dashboard button](https://res.cloudinary.com/chat-story/image/upload/v1642582384/automa/9D04VZtFgd_gdbojq.png)
2. Click the workflows icon on the sidebar and click the "new workflow" button.
3. Input the name and description of the workflow.

To add a block to the workflow, drag a block on the left side and drop it to the editor.

Click the play button if you want to start executing the workflow. You can set how and when the workflow executes on the [trigger block](/blocks/trigger.md).

### Connecting Block
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

### Reroute Block Connection
![Reroute example](https://res.cloudinary.com/chat-story/image/upload/v1642575499/automa/chrome_00RH6LDAX0_kjenjv.png)

Reroute the connection of a block by double-clicking at its connection. And double-click at the point to remove the reroute.
