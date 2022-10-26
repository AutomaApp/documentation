---
title: Execute Workflow Block
---

# Execute Workflow Block

Execute another workflow.

## Select Workflow
Select the workflow to execute.

## Global Data
Overwrite the [Global Data](../workflow/global-data.md) of the selected workflow.

## Execute Id
An id to identify when you want to access the executed workflow inside [expressions](../workflow/expressions.md). The executed workflow will return its [table](../workflow/table.md) and [variables](../workflow/variables.md). For example, 
```
{{ workflow.executeId.table }}
``` 
Replace the `executeId` with the on you inputted.

##  Insert All Current Workflow Variables
Insert all variables of the current workflow into the workflow that will be executed.

## Insert Current Workflow Variables
Insert specific variables of the current workflow into the workflow that will be executed. Use commas to separate the variable name