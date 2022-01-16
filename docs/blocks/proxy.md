---
title: Proxy Block
---

# Proxy Block

Set the proxy settings of the browser.

- **Scheme** <br>
	The scheme (protocol) of the proxy server, default to `https`.

- **Port** <br>
	The port of the proxy server. If no port is defined, the port is derived from the scheme.
	| Scheme | Port |
	|---| --- |
	| http | 80 |
	| https | 443 |
	| socks4 | 1080 |
	| socs5 | 1080 |

- **Host** <br>
	The hostname or IP address of the proxy server.

- **Bypass List** <br>
	Excluded websites from being proxied, use comma to separate the URL or the URL pattern. For example, `google.com, *.google.com`. See all the valid URLs or patterns on the [chrome page](https://developer.chrome.com/docs/extensions/reference/proxy/#bypass-list).