---
title: HTTP 请求块
---

# HTTP 请求块

发起一个 HTTP 请求。

- **方法** <br>
	请求的方法（`GET`、`POST` 等）。

- **URL** <br>
	请求的 URL。

- **内容类型** <br>
	请求的 [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) 头。

- **头部** <br>
	请求的 [头部](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)。

- **主体** <br>
	请求的有效负载。

- **回退** <br>
	在发起 HTTP 请求失败或出错时执行。

## 响应
处理请求的响应。

- **响应类型** <br>
	响应的类型，默认为 `JSON`。

- **数据路径** <br>
	响应数据的点表示法。例如，当响应返回以下数据时：
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
	要获取 `values` 数组，请写 `data.values` 作为路径。要获取 `values` 数组的第一个值，请写 `data.values.0`。

	::: info
	如果您想获取所有 HTTP 响应，如 `status`、`statusText`、`data` 等，请输入 `$response`。
	:::

- **分配给变量** <br>
	是否将值分配到 [变量](../workflow/variables.md) 中。

- **变量名称** <br>
	要分配值的变量名称。

- **插入到表格** <br>
	是否将值插入到 [表格](../workflow/table.md) 中。

- **选择列** <br>
	值将插入的列。

## 表单数据
当使用 `multipart/form-data` 作为头部时，请求主体将作为 [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) 发送。因此，您在编写主体时必须遵循以下格式：

```json
[
	["name", "value"],
	["name 2", "value 2"]
]
```

在值字段中，您可以写下您本地计算机上文件的绝对路径或您想要上传的文件的 URL。例如，
```json
[
	["audio", "C:\\Downloads\\files\\music.mp3"],
	["image", "https://example.com/image.png"]
]
```

## 在主体中编写表达式
在主体中编写 [表达式](../workflow/expressions.md) 以访问数据，如 [变量](../workflow/variables.md)、[表格](../workflow/table.md) 等，可能会有点棘手，因为最终结果必须是有效的 JSON。为了防止"内容主体不是有效 JSON"错误，请遵循以下规则：

- **字符串值** <br />
如果您引用的数据的值是字符串，您必须将大括号标签包裹在双引号（"）中。例如，
```json
{
	"name": "{{variables.name}}",
	"email": "{{variables.email}}"
}
```

- **多行字符串值** <br />
如果您引用的数据的值是字符串并且包含换行符，您必须在写入数据关键字之前添加感叹号（!）。例如，
```json
{
	"longText": {{!variables.article}}
}
```
::: info
使用 [JavaScript 表达式](../workflow/expressions.md#javascript-expressions) 时不需要这样做。
:::

- **其他** <br />
如果您引用的数据的值是对象、数组等，您可以直接在主体中写入大括号标签。例如，
```json
{
	"profile": {{variables.userProfile}}, // { name: 'John Doe', email: 'john@example.com' }
	"stats": {{variables.stats}} // [10, 200, 87, 21]
}
```
如果您使用 [JavaScript 表达式](../workflow/expressions.md#javascript-expressions)，则需要将表达式包裹在 [`$stringify`](../workflow/expressions.md#stringifyvalue) 函数中。

```json
{
	"profile": {{$stringify(variables.userProfile)}},
	"stats": {{$stringify(variables.stats)}}
}
```