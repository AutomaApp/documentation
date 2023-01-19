---
title: Google Sheets (GDrive)
---

# Google Sheets (GDrive)

The Google Sheets (GDrive) block serves the same purpose as the [Google Sheets block](./google-sheets.md). The differences are that this block requires you to [connect Google Drive](../integrations/google-drive.md) to your Automa account before you can use it, and it has another feature, like creating a spreadsheet.

So, to view the documentation on how to get, update, or clear values in a Google Sheet, open the [Google Sheets block page](./google-sheets.md).

## Connect a Spreadsheet

To get, update, or clear values in a Google Sheet, you need to connect a spreadsheet by clicking the 'Connect' button next to the sheet selection. Then, select the spreadsheet file.

![Connect spreadsheet](https://res.cloudinary.com/chat-story/image/upload/v1674112697/automa/Frame_3_2_h8miwx.png)

## Create a Spreadsheet
You can use it to create a spreadsheet.

- **Assign to variable** <br>
	Whether assign the created spreadsheet id into a [variable](../workflow/variables.md) or not.

- **Variable name** <br>
	Name of the variable to assign the created spreadsheet id.

- **Insert to table** <br>
	Whether insert the created spreadsheet id into the [table](../workflow/table.md) or not.

- **Select column** <br>
	The column where the created spreadsheet id will be inserted.

## When to Use it?
You can use this block when your workflow requires an intensive updating of a spreadsheet in a short period. For example, update a row on each iteration of [a loop](../workflow/looping.md).