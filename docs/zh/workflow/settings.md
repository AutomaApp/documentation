---
title: 工作流设置
---

# 工作流设置

可以通过 **工作流 > 设置** 菜单为每个工作流设置自定义选项。

![工作流设置](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16kj8w-0k.png)

工作流设置分为三个部分。

## 1. 一般设置

包含以下设置：
- **工作流错误时**：选择在工作流发生错误时的处理方式。
- **工作流执行**：选择在弹窗仪表板中运行工作流还是在后台运行。
- **工作流通知**：切换是否在工作流执行结束时显示通知。
- [**调试模式**](./debug-mode.md)：使用 Chrome DevTools 协议执行工作流。
- **自动完成**：在块的输入中启用自动完成。
- **重用上次工作流状态**：使用上次执行的状态数据（表格、变量和全局数据）。
- **保存工作流日志**：保存工作流的日志。
- **在网页上显示执行的块**：在网页上显示当前执行的工作流块。此设置仅显示“网页交互”类别中的块，例如点击元素和表单块。
- **工作流公共 ID**：工作流的公共 ID，你可以在使用 JavaScript CustomEvent 执行工作流时使用此公共 ID。

### 工作流执行
选择“弹窗”或“后台”运行工作流时，一些功能将不可用，且各自的优缺点如下：

| 名称/功能 | `弹窗` | `后台` |
| --- | :---: | :---: |
| 最大运行时间 | 无限制 | ~5分钟 |
| 需要弹窗 | ✅ | ❌ |
| [JS 后台执行](../reference/javascript-execution-context.md#background) | ✅ | ❌ |
| [JavaScript 表达式](./expressions.md#javascript-expressions) | ✅ | ❌ |
| [剪贴板块](../blocks/clipboard.md) | ✅ | ❌ |

## 2. 表格

包含以下设置：

- **插入到默认列**：如果在块中没有选择列或列不存在，则将数据插入到默认列。
- **默认列名称**：默认列的名称。

## 3. 块

包含以下设置：

- **块延迟**：在执行每个块之前添加延迟。
- **标签加载超时**：加载标签的最大时间（以毫秒为单位）。

## 4. 工作流事件

工作流事件允许你在工作流中发生事件时执行操作。

### 可用事件
- **完成（成功）**：当工作流成功执行完毕时触发。
- **完成（失败）**：当工作流执行失败时触发。

### 可用操作
- **HTTP 请求**：发送 HTTP 请求。
- **执行 JS 代码**：执行 JavaScript 代码。

### 可用数据

你可以使用 `workflow` 关键字在表达式中访问工作流日志、状态、错误信息等，或在操作中使用 `automaRefData` 函数。

**数据类型**
```ts
interface Workflow {
  status: "success" | "error";
  logs:
    | {
        type: "error" | "success";
        description: string;
        name: string;
        blockId: string;
        timestamp: number;
        activeTabUrl: string;
        duration: number;
        id: number;
      }[]
    | null;
  errorMessage: string | null;
}
```

**示例**
```js
// 表达式
{{ workflow.logs }}

// automaRefData
console.log(automaRefData('workflow', 'logs'))
console.log(automaRefData('workflow', 'status'))
```

![工作流数据](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/03/ohxkf-et.png)