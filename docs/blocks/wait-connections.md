---
title: Wait Connections Block
---

# Wait Connections Block
Wait for all connections/flow before continuing to the next block.

![wait connections](https://res.cloudinary.com/chat-story/image/upload/v1651037697/automa/PnPKJWVWjJ_p7chf1.png)

This block will wait for all the flow to finish executing, before continuing to the [new tab](blocks/new-tab.md) block.

- **Timeout (milliseconds)** <br>
  Set how long is the block waiting for all the flow to finish executing, defaults to 10000ms (10 seconds). Once it reaches the timeout, the workflow will continue to execute the next block.

- **Only continue a specific flow** <br>
	Whether only continue a specific flow or not. For example, <br>
	::: details When disabled
	![specific flow disabled](https://res.cloudinary.com/chat-story/image/upload/v1651038898/automa/not-specific-flow_gsawj3.gif)
	:::
	::: details When enabled
	![specific flow enable](https://res.cloudinary.com/chat-story/image/upload/v1651038898/automa/specific-flow_hpfqsb.gif)
	:::