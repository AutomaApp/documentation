---
title: Conditions Block
---

# Conditions Block

Add conditional logic to the workflow.

When this block is being executed, it will check the condition from the top and compare the inputted value. And if the condition matches, the block that connects to it will be executed. And if there's no match, it will execute the block that connects with the `fallback` output.

| symbol | description |
| --- | --- |
| `==` | equals |
| `!==` | not equals |
| `>` | greater than |
| `≥` | greater than or equal to |
| `<` | less than |
| `≤` | less than or equal to |
| `()` | contains |


For example, to check if the retrieved text from the [get text block](/blocks/get-text.md) contains a certain word. In the first input, write <code v-pre>{{ prevBlockData }}</code> where the `prevBlockData` keyword will take the previous block data as its value, read more on the [reference data](/api-reference/reference-data.md) page. And in the second input, write the word you want to check.

![Conditional example](https://res.cloudinary.com/chat-story/image/upload/v1642560991/automa/chrome_68A2yb9gM9_mdzvg5.png)

If the retrieved text contains the word "foo", it will open the GitHub website. And if the condition doesn't match, it will continue to check the next condition. And if all the above condition doesn't match, it will execute the click element block.