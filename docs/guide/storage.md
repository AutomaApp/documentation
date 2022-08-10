---
title: Storage
---

# Storage
The storage is used to store the data of the tables and variables. The data that is stored here will be **persisted**.

## Tables
To add a [table](/api-reference/table.md) to the storage, click the "Add table" button and then define the name and columns of the table.

![adding storage table](https://res.cloudinary.com/chat-story/image/upload/v1656735869/automa/NVIDIA_Share_ZYqbANNey2_cvmvt1.png)

And to use this table in a workflow, open the workflow table and click the "connect to a storage table" button.

![connecting storage table](https://res.cloudinary.com/chat-story/image/upload/v1656736642/automa/NVIDIA_Share_qWlIzKSYIx_cvxe6w.png)

::: tip Note
Learn more about Table on the [Table page](/api-reference/table.md)
:::

## Variables
You can add a variable from the variables page in the storage or from a workflow. Every time you want to assign or read the value of a variable, the variable name must start with a double dollar sign (`$$`). It's to differentiate between the storage variable and the workflow variable. For example, adding or updating a variable from a block.

![assign storage variable](https://res.cloudinary.com/chat-story/image/upload/v1656738020/automa/NVIDIA_Share_lGV2S0XYJE_y6qs8h.png)

Access the variable in a block.

![access storage variable](https://res.cloudinary.com/chat-story/image/upload/v1656738064/automa/NVIDIA_Share_XTiF5TkhOX_wxfkgd.png)

::: tip Note
Learn more about Variable on the [Variable page](/api-reference/variables.md)
:::

## Credentials
Is used to store credentials. Credentials that are stored here will be encrypted. And you can't view or edit them after you add credentials.

To access these credentials in a workflow, use the `secrets` keyword inside the mustache tag. For example, <code v-pre>{{ secrets@credentialName }}</code>