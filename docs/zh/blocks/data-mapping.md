---
title: 数据映射块
---

# 数据映射块

映射变量或表格的数据。

- **数据源** <br>
	要映射的数据源可以是变量或表格。

- **数据映射** <br>
	数据映射是您通过输入点表示法将源字段与目标字段匹配的地方。源可以有多个目标。例如，当您有如下数据时：
	```json
	[
		{
			"address": "2204 Volutpat Rd.",
			"name": "Palmer Porter",
			"phone": "(251) 595-5203",
			"email": "phasellus.dolor@aol.org",
			"postalZip": "8517",
			"country": "United States"
		},
		{
			"address": "2741 Dis Rd.",
			"name": "Byron Bowers",
			"phone": "(563) 717-9312",
			"email": "mattis.ornare@outlook.couk",
			"postalZip": "5612",
			"country": "Costa Rica"
		},
		{
			"address": "Ap #923-7718 Sed Rd.",
			"name": "Joseph Waller",
			"phone": "1-897-102-6811",
			"email": "cras.pellentesque@outlook.edu",
			"postalZip": "38-251",
			"country": "Belgium"
		}
	]
	```
	并且有如下数据映射。

	![数据映射](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/mqzsy-cv.png)

	数据将转换为：
	```json
	[
		{
			"email": "phasellus.dolor@aol.org",
			"full_name": "Palmer Porter",
			"address": {
				"street": "2204 Volutpat Rd.",
				"postalZip": "8517",
				"country": "United States"
			}
		},
		{
			"email": "mattis.ornare@outlook.couk",
			"full_name": "Byron Bowers",
			"address": {
				"street": "2741 Dis Rd.",
				"postalZip": "5612",
				"country": "Costa Rica"
			}
		},
		{
			"email": "cras.pellentesque@outlook.edu",
			"full_name": "Joseph Waller",
			"address": {
				"street": "Ap #923-7718 Sed Rd.",
				"postalZip": "38-251",
				"country": "Belgium"
			}
		}
	]
	```

- **分配给变量** <br>
	是否将映射的数据分配到 [变量](../workflow/variables.md) 中。

- **变量名称** <br>
	要分配映射数据的变量名称。

- **插入到表格** <br>
	是否将映射的数据插入到 [表格](../workflow/table.md) 中。

- **选择列** <br>
	映射数据将插入的列。