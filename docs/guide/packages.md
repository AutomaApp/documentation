---
title: Packages
---

# Packages

Packages (previously called block folders) are used to wrap a block or multiple blocks to make it reusable. For example, when you have blocks for sending an email and want to use them in another workflow, you can make those blocks as a package instead of copying and pasting them. 

## Creating a package

There are two ways to create a package,

### From Workflow Editor
To create a package from a workflow editor, select blocks first. You can select a block by pressing shift and dragging the mouse to the blocks you want to select. Right-click and click the "Set as package" menu.

![Create package](https://res.cloudinary.com/chat-story/image/upload/v1662340152/automa/package-workflow_i2hme2.gif)

### From Package Page
You only need to navigate to the packages page, click the "New package" button, and input the package name and description.

## Editing a Package
To edit a package, go to the packages page and select the package you want to edit. It is the same way how you edit a workflow, except a package doesn't have the table and global data.

### Set Package as Block

When you set the package as a block, it will be treated as a block when using it inside a workflow. And to enable this option, go to the settings tab when editing a package.

![package as block](https://res.cloudinary.com/chat-story/image/upload/v1662341835/automa/package-as-block_xbi00q.gif)

#### Block Inputs & Outputs

To define the inputs and the outputs of the block, you only need to right-click on a block input or output of the package and select if you want to set it as the package block input or output.

![Package block IO](https://res.cloudinary.com/chat-story/image/upload/v1662342419/automa/package-IO_lzpfoz.gif)

And you'll see the inputs and outputs of the package block when using it in a workflow.

![Package block with IO](https://res.cloudinary.com/chat-story/image/upload/v1662342600/automa/chrome_emrfNdNVz0_jgecef.png)

And when you connect a block to one of the package block inputs, Automa will start executing from the block you set as the input in the package.