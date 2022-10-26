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
	Whether assign the value into a [variable](../workflow/variables.md) or not.

- **Variable name** <br>
	Name of the variable to assign the value.

- **Insert to table** <br>
	Whether insert the value into the [table](../workflow/table.md) or not.

- **Select column** <br>
	The column where the value will be inserted.

## Form Data
When using the `multipart/form-data` as the header, the request body will be sent as [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData). And because of that, you must follow the below format when writing the body

```json
[
	["name", "value"],
	["name 2", "value 2"]
]
```

## Writing Expression Inside the Body
When writing [expressions](../workflow/expressions.md) inside the body to access data like [variables](../workflow/variables.md), [table](../workflow/table.md), etc, is a bit tricky because the end result of it must be a valid JSON.. And to prevent the "Content body is not valid JSON" error, follow these rules:

- **String value** <br />
If the value of the data you reference is a string, you must wrap the mustache tag inside a double-quote ("). For example,
```json
{
	"name": "{{variables.name}}",
	"email": "{{variables.email}}"
}
```

- **Multiline string value** <br />
If the value of the data you reference is a string and has a new line in it, you must add an exclamation mark(!) before writing the keyword of the data. For example,
```json
{
	"longText": {{!variables.article}}
}
```
::: info
This is not required when using [JavaScript Expressions](../workflow/expressions.md#javascript-expressions).
:::

- **Other** <br />
If the value of the data you reference is object, array, etc, you can directly write the mustache tag inside the body. For example,
```json
{
	"profile": {{variables.userProfile}}, // { name: 'John Doe', email: 'john@example.com' }
	"stats": {{variables.stats}} // [10, 200, 87, 21]
}
```
If you're [JavaScript Expressions](../workflow/expressions.md#javascript-expressions), you need to wrap the expression inside the [`$stringify`](../workflow/expressions.md#stringifyvalue) function.

```json
{
	"profile": {{$stringify(variables.userProfile)}},
	"stats": {{$stringify(variables.stats)}}
}
```