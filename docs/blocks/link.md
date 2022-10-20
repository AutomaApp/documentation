---
title: Link Block
---

# Link Block

Open the URL that an [anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) (\<a>) element has.

Because sometimes an anchor element has [`target="_blank"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) attribute which when it clicked using the [Click element block](/blocks/event-click.md), for example, it will open a new tab. And because it opened a new tab, Automa won't execute the next block on that new tab.

So to fix this, you need to use the Link block. It will grab the URL from the anchor element and open it on the same tab.

- **Element selector** <br>
	[Element selector](../workflow/element-selector.md).