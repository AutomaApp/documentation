---
title: Switch Tab Block
---

# Switch Tab Block

Switch between tab


## Find Tab by

### Match Pattern
URL pattern of the tab. For example, `https://google.com/*` Automa will switch into a tab that has a `google.com` domain.
You can see more examples of the match pattern on the [MDN Page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#examples).

#### Create If No Match
If there's no URL of the tab that matches the patterns, Automa will create a new tab based on the inputted URL.

### Next Tab
Switch to the next tab of the active tab

### Previous Tab
Switch to the previous tab of the active tab

### Tab Index
Switch to tab based on its index position. For example, there are 4 tabs in a browser window (Google, GitHub, Chess, and Microsoft), 

![tabs](https://res.cloudinary.com/chat-story/image/upload/v1657083615/automa/tabs_ctqmdm.png)

to switch to the Google tab you can input `0`, to the GitHub tab input `1`, and so on.

## Active Tab
Whether the tab should become the active tab in the window.
