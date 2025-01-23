---
title: 保存资源
---

# 保存资源
从元素或 URL 保存文件（图像、视频、音频或其他资源）。

- **类型** <br>
	获取文件的来源，可以是 URL 或媒体元素，如 [图像](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)、[音频](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) 或 [视频](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)。

- **URL** <br>
	文件的 URL。例如，`https://example.com/image.png`

- **元素选择器** <br>
	[元素选择器](../workflow/element-selector.md)。

- **文件名** <br>
	文件的名称。如果您不想重命名文件，请将输入留空。

- **冲突处理** <br>
	指定如果文件名称与现有文件冲突时该怎么办。
	- `"uniquify"` <br>
		浏览器将修改文件名以使其唯一。
	
	- `"overwrite"` <br>
		浏览器将用新下载的文件覆盖旧文件。
	
	- `"prompt"` <br>
		浏览器将提示用户，询问他们选择是唯一化还是覆盖。

- **保存下载 ID** <br />
	将下载文件的下载 ID 保存到变量或工作流表中。它将返回一个整数数组。
	
	如果您想获取下载文件的路径，可以将此下载 ID 传递给 [处理下载块](./handle-download.md)。

<!--@include: ../parts/blocks-interaction-note.md-->