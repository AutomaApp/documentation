---
title: JavaScript Execution Context
---

# JavaScript Execution Context
Execution context means the environment where the JavaScript code will execute.
In Automa, there are two environments you can choose from, Active Tab and Background.

## Active Tab

The workflow will inject the JavaScript code into the active tab of the workflow. Select this environment when you want to do DOM manipulation or when you want to get the attribute or text from an element.
But for some websites, it's not allowed to inject JS code. It's because they have Content Security Policy (CSP) which makes can't inject third-party code. To check if third-party code is allowed, you can open the Chrome Dev Tools by pressing `ctrl+shift+i`; in the `console` tab paste the below code:
```js
const script = document.createElement('script');
script.textContent = 'alert("Hello world!")';
document.body.appendChild(script);
```

If you see the `Refused to execute inline script because it violates the following Content Security Policy directive...` error, it means third-party code is to be injected.

![CSP Error](https://res.cloudinary.com/chat-story/image/upload/v1666334108/automa/chrome_hIZ8wpD5CC_dh5nfw.png)

## Background

The workflow executes your JS code inside a sandbox. If your code doesn't do anything related to DOM, select this environment as the execution context. And it doesn't require an active tab to work.

And if you want to do debugging, for example using the `console.log` method. You can find the output by opening the Chrome Devtools on the Automa dashboard.