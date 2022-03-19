---
title: Handle Download
---

# Handle Download

Handle downloaded file.

- **Timeout** <br>
	Set how long is the workflow waiting for the downloaded file to complete, defaults to 20000ms (20 seconds). Once it reaches the timeout, the workflow will continue to execute the block.

- **File name** <br>
	The filename of the downloaded file. If you don't want to rename the downloaded file leave the input blank..

- **On conflict** <br>
	Specifies what to do if the name of a downloaded file conflict with an existing file.
	- `"uniquify"` <br>
		The browser will modify the filename to make it unique.
	
	- `"overwrite"` <br>
		The browser will overwrite the old file with the newly-downloaded file.
	
	- `"prompt"` <br>
		The browser will prompt the user, asking them to choose whether to uniquify or overwrite.

- **Wait for the file to be downloaded** <br>
	Wait for the file to be downloaded before continuing to the next block.

- **Assign to variable** <br>
	Whether assign the file path of the downloaded file into a [variable](/api-reference/variables.md) or not.

- **Variable name** <br>
	Name of the variable to assign the file path.

- **Insert to table** <br>
	Whether insert the file path into the [table](/api-reference/table.md) or not.

- **Select column** <br>
	The column where the file path will be inserted.