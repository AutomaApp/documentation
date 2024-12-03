---
title: "Extension: Workflows"
---

# Extension: Workflows
This page is where you add, update, or delete the Automa workflows of the extension. If you want to learn how to create an Automa workflow, open [this documententation](../workflow/overview.md).

Every time you add, update, or delete a workflow on this page, the update will automatically be applied to all the users that installed the extension.

## Add a Workflow

To add a workflow to the extension, click the "+ Workflow" button, select whether you want to add the workflow from JSON files or the Automa extensions, and then select which workflows to add.

For the workflow JSON file, you can get it by [exporting a workflow](../workflow/overview.md#export-and-import-a-workflow) from the Automa extension.

![Add a workflow](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/o9z5q-7f.png)

::: tip Note
The "From Automa extension" option only works if you use Automa v1.24.0 or newer.
:::

## Updating a Workflow
You can update the workflow by clicking the update icon on the workflow you want to update. After that, click the "From JSON file" or "From Automa extension"; and select the workflow.

![Updating a workflow](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/o9z5p-4i.png)

## Deleting a Workflow 

To delete a workflow, you can click the delete button on the workflow you want to delete. 

![Deleting a workflow](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/o9z5o-3g.png)

And if you want to delete multiple workflows, click the checkbox beside the workflow, and click the "Delete selected" button.

![Deleting workflows](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/o9z5p-ho.png)

## Invisible
When you enable the invisible checkbox on a workflow, the workflow will not visible on the extension when the user installs it. That means the user can't run the workflow manually (by clicking the run button on the extension).

