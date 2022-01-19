---
title: Google Sheets Block
---

# Google Sheets Block

Read or write Google Sheets spreadsheet data.

## Access To Spreadsheet
Before using this block, you need to give Automa access to the spreadsheet first. There're two ways that you can give Automa access to the spreadsheet

1. Share the spreadsheet with the public.
2. Share the spreadsheet with the Automa service account.

When you share the spreadsheet with the public, Automa only has read access to it. And if you have a plan to update the cell values of the spreadsheet, you need to share the spreadsheet with the Automa service account. To do that, open the spreadsheet you want to share, click the share button on the top right, and input `service@automa2.iam.gserviceaccount.com`.

![Service account](https://res.cloudinary.com/chat-story/image/upload/v1642067522/automa/chrome_9iHTFjxWEn_lzavjy.png)

## Spreadsheet Id
The Spreadsheet Id contains letters, numbers, hyphens, or underscores. And you can find it in the Google Sheets URL.

<code>
	https://docs.google.com/spreadsheets/d/<mark>10FGdgjWhkFeJ8m-M5WC0zDIMnSqRFuctuZ1CkOr38mY</mark>/edit
</code>

![Spreadsheet Id](https://res.cloudinary.com/chat-story/image/upload/v1641768594/automa/chrome_OuX2wQzOe4_lyd8tv.png)

## Range
The range of the values of the cells that you want to get or update, you can define the cells range by using the [A1 Notation](https://developers.google.com/sheets/api/guides/concepts#expandable-1) like `Sheet1!A1:B2` or [R1C1 notation](https://developers.google.com/sheets/api/guides/concepts#expandable-2) like `Sheet1!R1C1:R2C2`.

## Get Spreadsheet Values
Get the cells values of the spreadsheet.

- **Reference key** <br>
	The key for identifying the google sheets data.

- **Use the first row as keys** <br>
	Use the first row of the spreadsheet as the object key. For example, when you have a spreadsheet like this.

	| name | age |
	| --- | --- |
	| foo | 22 |
	| bar | 23 |

```json
// option disabled
[["name", "age"], ["foo", 22], ["bar", 23]]

// option enabled
[{ "name": "foo", "age": 22 }, { "name": "bar", "age": 23 }]
```

### Accessing Data
To access the spreadsheet values from an input of a block, you can use the mustache tag with the <code v-pre>{{ googleSheets@referenceKey.path }}</code> syntax.

Read more: [reference data](/api-reference/reference-data.md)

## Update Spreadsheet Values
Update the cells values of the spreadsheet.

- **Value input option** <br>
	Determines how input data should be interpreted, default to `RAW`.

	| Value | Description |
	| --- | --- |
	| `RAW` | The values the user has entered will not be parsed and will be stored as-is |
	| `USER_ENTERED` | The values will be parsed as if the user typed them into the UI. Numbers will stay as numbers, but strings may be converted to numbers, dates, etc. following the same rules that are applied when entering text into a cell via the Google Sheets UI. |

	Read more on the [Google developer page](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption)

- **Data from** <br>
	The source of the data for updating the spreadsheet, defaults to [data columns](/api-reference/data-columns.md).
	When using the custom option, the inputted data must be an array of an arrays data type with valid JSON syntax.

	**Example**
	```json
	[["name", "age"], ["foo", 22], ["bar", 23, "text"]]
	```

- **Use keys as the first row** <br>
	Use the columns as the first row on the spreadsheet.