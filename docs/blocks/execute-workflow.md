---
title: Execute Workflow Block
---

# Execute Workflow Block

Execute another workflow.

## Global data
Overwrite the [global data](/api-reference/global-data.md) of the selected workflow.

## Execute Id
An Id to identify when [referencing](/api-reference/reference-data.md) the workflow data.

## Accessing Workflow Data
After the execute workflow block is executed, you can access the workflow data like global data, table, and google sheets using the mustache tag. For example, to access the table data <code v-pre>{{ workflow@executeId.table }}</code> or google sheets data <code v-pre>{{ workflow@executeId.googleSheets }}</code>.

Read more: [Reference Data](/api-reference/reference-data.md)