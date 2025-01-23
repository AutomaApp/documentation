---
title: 元素选择器
---

# 元素选择器

元素选择器用于在与页面交互或提取数据时识别页面上的元素。例如，如果您希望工作流使用 [表单模块](../blocks/forms.md) 填写页面上的特定表单输入，它需要知道要填写哪些输入元素。通过使用 `input.form-name` 选择器，它告诉工作流填写具有 `form-name` [类](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) 的 [`<input />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) 元素。

在 Automa 中，您可以使用 [CSS 选择器](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) 或 [XPath 表达式](https://www.w3schools.com/xml/xpath_syntax.asp) 选择元素。

## 模块选择器选项
当您编辑需要元素选择器才能工作的模块时，例如 [点击元素](../blocks/event-click.md) 和 [获取文本模块](../blocks/get-text.md)，您会看到这些选项。

### 多个
选择与选择器匹配的多个元素。默认情况下，Automa 仅选择第一个与选择器匹配的元素。

例如，当使用 `p` 作为选择器的 [获取文本模块](/blocks/get-text.md) 时，Automa 将从所有匹配的元素中获取文本内容，而不是仅从第一个匹配的元素中获取。

### 标记元素
标记已选择的元素。这意味着如果同一模块之前已选择该元素，则不会再次选择。

例如，当您有如下工作流：

![工作流示例](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16sv6t-9g.png)

并且 [获取文本模块](/blocks/get-text.md) 使用 `.text` 作为元素选择器，以及网站的 [DOM 树](https://en.wikipedia.org/wiki/Document_Object_Model)。

```html
<div>
  <p class="text" id="1">文本</p>
  <p class="text" id="2">文本</p>
  <p class="text" id="3">文本</p>
  <p class="text" id="4">文本</p>
</div>
```

当 [获取文本模块](/blocks/get-text.md) 被执行时，它获取与选择器匹配的第一个元素，即 `<p class="text" id="1">文本</p>`，并且由于标记元素选项已启用，它将标记该元素，变为 `<p class="text" id="1" block--block-id>文本</p>`。

```html
<div>
  <p class="text" id="1" block--block-id>文本</p>
  <p class="text" id="2">文本</p>
  <p class="text" id="3">文本</p>
  <p class="text" id="4">文本</p>
</div>
```

当获取文本模块第二次执行时，它将重复相同的操作，但不会选择 `<p class="text" id="1" block--block-id>文本</p>`，而是选择 `<p class="text" id="2">文本</p>` 元素，因为第一个元素已被标记。

### 等待选择器
等待 `selector` 在页面上出现。如果在检查 `selector` 时，`selector` 已存在，则模块立即执行。如果在 `timeout` 文本框中指定的时间内 `selector` 没有出现，工作流将抛出错误。

## 生成选择器
如果您不知道如何编写自己的选择器，可以使用 Automa 元素选择器或模块上的“选择”按钮。

### Automa 元素选择器
在 Automa 仪表板中，点击侧边栏上的 <v-remixicon name="riFocus3Line" /> 按钮，Automa 将在当前页面注入一个元素选择器。您可以点击或按 `Space` 键选择一个元素。它将自动为所选元素生成一个选择器。

![元素选择器](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16sv6u-n6.png)

在编辑模块时，您会找到“选择元素”按钮。当您点击它时，它将把元素选择器注入到当前页面，选择一个元素，然后在元素选择器中点击“选择元素”按钮。

![选择元素按钮](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16sv6u-4q.png)

## 自定义选择器语法
除了支持标准的 [CSS 选择器](https://www.w3.org/TR/selectors-4/) 和 XPath 表达式外，Automa 还支持非标准语法：
- `iframe-selector |> element-selector`：允许选择 [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) 元素内部的元素。例如，`iframe.result |> button.primary-btn`
- `:contains(TEXT)`：根据文本选择元素。例如，`p.description:contains("cat")`
- `shadow-dom-selector >> element-selector`：选择 [shadow DOM](https://web.dev/shadowdom-v1/) 内部的元素。例如，`div.app-container >> h1.title`