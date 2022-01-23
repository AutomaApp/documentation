---
title: Browser Event Block
---

# Browser Event Block

Wait for the selected event to be triggered before executing the next block.

- **Timeout (milliseconds)** <br>
	Set how long is the workflow waiting for the selected event to be triggered, defaults to 10000ms (10 seconds). Once it reaches the timeout, the workflow will continue to execute the block.

- **Events** <br>
	An event that you want the workflow to wait for.
	
	- **Tab closed** <br>
	Wait for a tab to be closed.

	- **Tab loaded** <br>
	Wait for the active tab or tab that the URL matches the [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#examples) to be loaded.

	- **Tab/Window created** <br>
	Wait for a tab or window to be created.

		- **Filter** <br>
			Filter the URL of the newly created tab/window. If the URL matches the URL or Regex you inputted, the workflow will continue to execute the blocks.

		- **Active tab** <br>
			Set the created tab/window as the active tab.

	- **Window closed** <br>
	Wait for a window to be closed.
