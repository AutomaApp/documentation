---
title: Cookie Block
---

# Cookie Block

Get, set, or remove cookies.

- **Get cookie** <br>
	- **Get all cookies** <br>
		Whether to retrieve one or all cookies.
	
	- **URL** <br>
		The URL with which the cookie to retrieve is associated. This field is optional when you enable the "Get all cookies"

	- **Name** <br>
		The name of the cookies to retrieve

	- **Path** <br>
		The path of the cookies

	- **Domain** <br>
		Domain that cookies must be associated with (either with this exact domain or one of its subdomains)

- **Set cookie** <br>
	- **URL** <br>
		Representing the request-URI to associate with the cookie. This value can affect the default domain and path values of the created cookie.

	- **Name** <br>
		The name of the cookie

	- **Path** <br>
		The path of the cookies

	- **Value** <br>
		The Value of the cookies

	- **Domain** <br>
		Representing the domain of the cookie

	- **sameSite** <br>
		Value that indicates the SameSite state of the cookie. Possible values `lax`, `strict`, or you can leave it blank.

	- **expirationDate** <br>
		Represents the expiration date of the cookie as the number of seconds

- **Remove cookies** <br>
	- **URL** <br>
		Representing the URL associated with the cookie

	- **Name** <br>
		Name of the cookies to remove
