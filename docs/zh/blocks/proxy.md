---
title: 代理块
---

# 代理块

设置浏览器的代理设置。

- **协议** <br>
	代理服务器的协议，默认为 `https`。

- **端口** <br>
	代理服务器的端口。如果未定义端口，则从协议中派生端口。
	| 协议 | 端口 |
	|---| --- |
	| http | 80 |
	| https | 443 |
	| socks4 | 1080 |
	| socks5 | 1080 |

- **主机** <br>
	代理服务器的主机名或 IP 地址。

- **绕过列表** <br>
	排除不通过代理的网站，使用逗号分隔 URL 或 URL 模式。例如，`google.com, *.google.com`。有关所有有效 URL 或模式，请参见 [chrome 页面](https://developer.chrome.com/docs/extensions/reference/proxy/#bypass-list)。