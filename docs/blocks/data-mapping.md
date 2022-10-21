---
Title: Data Mapping Block
---

# Data Mapping Block

Map data of a variable or table.

- **Data source** <br>
	The source of data to map could be a variable or table.

- **Data map** <br>
	The data map is where you match the source fields with the destinations fields by inputting the dot notation. The source can have multiple destinations. For example, when you have data like below
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
	and have a data map like this.

	![data map](https://res.cloudinary.com/chat-story/image/upload/v1657086347/automa/Screenshot_2022-07-06_134530_pyuvbm.png)

	The data will convert to
	```json
	[
		{
			"email": "phasellus.dolor@aol.org"
			"full_name": "Palmer Porter",
			"address": {
				"street": "2204 Volutpat Rd.",
				"postalZip": "8517",
				"country": "United States"
			},
		},
		{
			"email": "mattis.ornare@outlook.couk",
			"full_name": "Byron Bowers",
			"address": {
				"street": "2741 Dis Rd.",
				"postalZip": "5612",
				"country": "Costa Rica"
			},
		},
		{
			"email": "cras.pellentesque@outlook.edu",
			"full_name": "Joseph Waller",
			"address": {
				"street": "Ap #923-7718 Sed Rd."
				"postalZip": "38-251",
				"country": "Belgium"
			}
		}
	]
	```

- **Assign to variable** <br>
	Whether assign the mapped data into a [variable](../workflow/variables.md) or not.

- **Variable name** <br>
	Name of the variable to assign the mapped data.

- **Insert to table** <br>
	Whether insert the mapped data into the [table](../workflow/table.md) or not.

- **Select column** <br>
	The column where the mapped data will be inserted.