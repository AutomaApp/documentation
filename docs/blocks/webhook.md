---
title: HTTP Request Block
---

# HTTP Request Block

Make an HTTP Request.

- **Method**	<br>
	Request's method (`GET`, `POST`, etc.)

- **URL** <br>
	URL of the request.

- **Content type** <br>
	[`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) header for the request

- **Headers** <br>
	[Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) for the request

- **Body** <br>
	Payload for the request

- **Fallback** <br>
	Execute when failed or error making an HTTP request.

## Response
Handle the response of the request.

- **Response type** <br>
	Type of the response, defaults to `JSON`.

- **Data path** <br>
	The dot notation to the data of the response. For example, when the response is returning these data:
	```json
	{
		"status": 200,
		"data": {
			"name": "Prices",
			"values": [
				{ "id": 1, "value": 4000 },
				{ "id": 2, "value": 24000 }
			]
		}
	}
	```
	To get the `values` array, write `data.values` as the path. And to get the first value of the `values` array, write `data.values.0`.

- **Assign to variable** <br>
	Whether assign the value into a [variable](/api-reference/variables.md) or not.

- **Variable name** <br>
	Name of the variable to assign the value.

- **Insert to table** <br>
	Whether insert the value into the [table](/api-reference/table.md) or not.

- **Select column** <br>
	The column where the value will be inserted.