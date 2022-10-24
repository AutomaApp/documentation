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

![Add parameter](https://res.cloudinary.com/chat-story/image/upload/v1666079866/automa/chrome_1VtcrxMGH7_d7puxa.png)

When you run the workflow, there will be a popup where you input the value for the parameter.

![Input parameter](https://res.cloudinary.com/chat-story/image/upload/v1666080277/automa/chrome_7p2d3nvu9w_funwit.png)

These parameters will be inserted as [variables](./variables.md) in the workflow, and the variable name the same as the parameter name. For example, you can access the value of the `keyword` parameter like <code v-pre>{{ variables.keyword }}</code>
