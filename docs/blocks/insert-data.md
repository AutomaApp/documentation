---
title: Insert Data Block
---

# Insert Data Block

Insert additional data into the [table](../workflow/table.md) or [variables](../workflow/variables.md)

## Import file
Insert the file content into a variable or the column of the table. To use this feature, you must allow Automa to access the file URLs, to do it

1. Go to `chrome://extensions`
2. Find Automa extension and click the **"Details"** button
3. Scroll down and enable the **"Allow access to file URLs"** option

Inside the value text field, you can either input the absolute path of the file or the URL of the file. For example,

- Absolute Path
	- Windows: `C:\Users\Public\Documents\testing.docx`
	- MacOS: `/Users/Josh/Desktop/docs.pdf`
- URL
	- `https://example.com/files/document.pdf`
	- `https://example.com/words.txt`

![import file content](https://res.cloudinary.com/chat-story/image/upload/v1662970548/automa/insner_2_mrslmt.png)

## Inserting Multiple Table Rows
To insert multiple table rows into a column, separate each value with a double vertical bar (`||`). For example:

```
value 1 || value 2 || value 3
```
![multiple rows](https://res.cloudinary.com/chat-story/image/upload/v1693202468/automa/fieqmvqf5kb5seudggp4.png)