---
title: Workflow Common Errors
---

# Workflow Common Errors
Some common errors when running a workflow and how to solve it.

## Can't find an element with "{selector}" selector {#element-not-found}
This error happened because the element selector doesn't match with any elements on the page. For this case, you can check whether the elements exist on the page using the Element Exist block or enable the "Wait for selector" option in the element selector options. 

![Wait for selector option](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/17g8kk-gi.png)

## Can't find a tab with "{pattern}" patterns {#no-match-tab}
The Match Patterns you input don't match with any URLs tab. See how to write match patterns on the [MDN page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#examples).

## Content body is not valid JSON {#invalid-body}
The request body in the [HTTP Request block](/blocks/webhook.md) is not in [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#json_structure).

If you're trying to referencing data inside the body. You can follow [these guidelines](/blocks/webhook.md#referencing-data-inside-body).

## Can't connect to a tab, use "New tab" or "Active tab" block before using the "{name}" block. {#no-tab}
This happened because the block you're trying to use requires an active tab to work. An active tab in this context is a tab where the block will execute. 

To solve this, you can either use a [New Tab block](/blocks/new-tab.md) or an [Active Tab block](/blocks/active-tab.md) before the block you're trying to use.

![no tab](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/17g8kk-x0.png)

## "{url}" is invalid URL {#invalid-active-tab}
This error will occur when the value that you input is not a valid URL. A valid URL must start with `http` or `https` like "https://example.com".