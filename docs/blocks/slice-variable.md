---
Title: Slice Variable Block
---

# Slice Variable Block

Extracts a section of a variable value.

- **Variable name** <br>
	The name of the variable

- **Start index** <br>
	The zero-based index at which to begin extraction.
	If the start index is negative, Automa begins the extraction from the end of the value.

- **End index** <br>
	The index of the first element to exclude.

**Examples**
| Input | Start Index | End Index | Output |
| --- | :---: | :---: | --- |
| `Hello world` | 0 | 5 | `Hello` |
| `Lorem ipsum` | 6 |  | `ipsum` |
| `Foo bar` | -3 | | `bar` |
| `[1, 2, 3, 4]` | 0 | 2 | `[1, 2]` |
| `[1, 2, 3, 4]` | -2 |  | `[3, 4]` |