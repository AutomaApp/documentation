---
title: Global data
---

# Global data

You can use global data to define a global variable where you can access it in an input of a block using the mustache tag (<code v-pre>{{}}</code>).

For example, when you have multiple new tab blocks wherein the URL input has the same domain e.g. "http://dribbble.com". Instead of editing the block one by one to change the URL domain, you can define the URL domain in the global data editor, and in the URL input, you can write <code v-pre>{{ globalData }}</code>. 

![URL Input](https://res.cloudinary.com/chat-story/image/upload/v1642160825/automa/chrome_d3PsYXgOKK_weyqwy.png)

And inside the global editor, you can write plain text or JSON.

See more: [reference data](/api-reference/reference-data.html).
