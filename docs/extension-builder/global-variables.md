---
title: Global Variables
---

# Global Variables

Here are some global variables you can use when writing a custom script for the extension

## `$helper.getWorkflows`
`$helper.getWorkflows(workflowId?: string): Promise<Workflow | undefined>`

Get a specific workflow or all the workflows of the extension.

**Parameters:**
- `workflowId`: the id of the workflow

**Examples**
```js
// Get all workflows
$helper.getWorkflows().then((workflows) => {
  console.log(workflows);
});

// Get a specific workflow
$helper.getWorkflows('workflow-id').then((workflow) => {
  console.log(workflow);
});
```

## `$helper.executeWorkflow`
`$helper.executeWorkflow(workflowData: Workflow | string, options?: Options): void`

To execute a workflow.

**Parameters:**
- `workflowData`: the workflow data or the id of the workflow to execute
- `options`: the options for the workflow execution

**Examples**
```js
(async () => {
  // Using workflow id
  $helper.executeWorkflow('workflow-id');

  // Using workflow object
  const workflow = await $helper.getWorkflow('workflow-id');
  $helper.executeWorkflow(workflow);

  // Passing variables and global data options for the workflow
  const globalData = [{ key: 'value', name: 'John Doe' }];
  const variables = { variableName: 'Variable value', number: 10 };
  $helper.executeWorkflow('workflow-id', {
    data: {
      variables,
      globalData,
    }
  });
})()
```

## `$helper.storage`

Access the storage of the extension. Storage in this context is the [storage feature](../reference/storage.md) in Automa Extension. But currently, only [storage variables](../reference/storage.md#variables) are supported. Automa is using [dexie.js](https://dexie.org/) to manage the variables.

**Examples**
```js
(async () => {
  // Get all variables
  const variables = await $helper.storage.variables.toArray();

  // Get a specific variable
  const urlVariable = await $helper.storage.variables.where({ name: 'url' }).first();

  // Add a variable
  await $helper.storage.variables.put({
    name: 'Variable name',
    value: 'variable value',
  });

  // Update a variable
  const variable = await $helper.storage.variables.where({ name: 'url' }).first();
  await $helper.storage.variables.update(variable.id, {
    value: 'new variable value',
  });

  // Delete a variable 
  $helper.storage.variables.where({ name: 'url' }).delete();

  // Delete all variables
  $helper.storage.variables.clear();
})();
```

## `chrome`

To access the browser API. See all the available APIs on [Chrome Developer documentation](https://developer.chrome.com/docs/extensions/reference/)

**Examples**
```js
(async () => {
  // Get all tabs
  const tabs = await chrome.tabs.query({});

  // Get the current active tab
  const tab = await chrome.tabs.query({ active: true, currentWindow: true });
})();
```