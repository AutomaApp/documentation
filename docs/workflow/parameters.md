---
title: Workflow Parameters
---

# Workflow Parameters
Define a parameter for the workflow.
Let's say you have a workflow to automate the search of a keyword in several search engines, and the keyword is different on each run. Instead of opening the dashboard, edit the workflow, and change the keyword in the Forms block. You can add a parameter where you can input the keyword every time you run the workflow.

## Add a Parameter

To add a parameter to the workflow, you need to:

1. Open the workflow
2. Click the edit button on the Trigger block
3. Click the "Parameters" button
4. Click the "Add parameter" button

You can rename the parameter, select the parameter type, or input the default value. 

![Add parameter](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16iwo6-ow.png)

When you run the workflow, there will be a popup where you input the value for the parameter.

![Input parameter](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16iwo7-l6.png)

These parameters will be inserted as [variables](./variables.md) in the workflow, and the variable name the same as the parameter name. For example, you can access the value of the `keyword` parameter like <code v-pre>{{ variables.keyword }}</code>
