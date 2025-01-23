---
title: Cookie 块
---

# Cookie 块

获取、设置或删除 cookies。

- **获取 cookie** <br>
	- **获取所有 cookies** <br>
		是否检索一个或所有 cookies。
	
	- **URL** <br>
		与要检索的 cookie 关联的 URL。当您启用"获取所有 cookies"时，此字段为可选。

	- **名称** <br>
		要检索的 cookie 的名称。

	- **路径** <br>
		cookie 的路径。

	- **域** <br>
		cookie 必须与之关联的域（可以是此确切域或其子域之一）。

- **设置 cookie** <br>
	- **URL** <br>
		表示与 cookie 关联的请求 URI。此值可能会影响创建的 cookie 的默认域和路径值。

	- **名称** <br>
		cookie 的名称。

	- **路径** <br>
		cookie 的路径。

	- **值** <br>
		cookie 的值。

	- **域** <br>
		表示 cookie 的域。

	- **sameSite** <br>
		指示 cookie 的 SameSite 状态的值。可能的值为 `lax`、`strict`，或者您可以留空。

	- **过期时间** <br>
		表示 cookie 的过期时间，以秒为单位。

- **删除 cookies** <br>
	- **URL** <br>
		表示与 cookie 关联的 URL。

	- **名称** <br>
		要删除的 cookie 的名称。
