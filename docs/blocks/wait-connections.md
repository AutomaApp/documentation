---
title: Wait Connections Block
---

# Wait Connections Block

Wait for all blocks that connect to this block execution to end before continuing to the next block.

Use this block when you have branched blocks in the workflow.

![wait connections](https://res.cloudinary.com/chat-story/image/upload/v1666248148/automa/chrome_ZJm8cwo6Z5_xeqekg.png)

- **Timeout (milliseconds)** <br>
  Set how long is the block waiting for all the flow to finish executing, defaults to 10000ms (10 seconds). Once it reaches the timeout, the workflow will continue to execute the next block.

## Only Continue a Specific Flow
Whether only to continue a specific flow or not. 

When you have a block branched as in the above image, Automa will create a new "Worker" for every new branch where the job is to execute the blocks on that branch.

![branches](https://res.cloudinary.com/chat-story/image/upload/v1666248463/automa/chrome_gcNslvkyzZ_yqeco7.png)

And when you merge the branch without enabling this option, every worker will execute the same block. And the blocks will execute multiple times.

![specific flow disabled](https://res.cloudinary.com/chat-story/image/upload/v1651038898/automa/not-specific-flow_gsawj3.gif)

To prevent this, enable this option and select a specific flow to continue.

![specific flow enable](https://res.cloudinary.com/chat-story/image/upload/v1651038898/automa/specific-flow_hpfqsb.gif)
