---
title: Trigger block
---

# Trigger block
This is block is the starting point where the workflow will start executing, you can configure how the workflow should be triggered using this block.

### Manually
Manually trigger the workflow by clicking the play (▶️) button.

### Interval
Execute the workflow in intervals, you can define the interval and the delay before executing the workflow in provided input.

### On a specific date
Execute the workflow on a specific date and time.

### On a specific day
Execute the workflow on a specific day and time.

### When visiting a website
Execute workflow when you're visiting a website that matches the URL or the [ReGex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that you inputted.
And when you check the `Use regex` checkbox, the value you inputted will be treated as a [ReGex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

### Keyboard shortcut
Execute the workflow using a keyboard shortcut. You can specify the keyboard shortcut by clicking the record (⏺️) button and pressing the key that you want to use.

And by default, the shortcut doesn't work when the cursor is on an input element, so to prevent this behavior you can checked the "Active while in input" checkbox.

> Note: The keyboard shortcut only works when you're on a website. If the website URL starts with `chrome://` or `chrome-extension://` the keyboard shorcut won't work.