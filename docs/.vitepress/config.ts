import "dotenv/config";
import { defineConfig } from "vitepress";

const links: { url: string; lastmod: number | undefined }[] = [];

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SEARCH_API_KEY: string;
      SEARCH_APP_ID: string;
      SEARCH_INDEX_NAME: string;
    }
  }
}

const config = defineConfig({
  lang: "en-US",
  title: "Automa Docs",
  description: "Documentation for Automa Browser Extension",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/images/logo.png" }],
    [
      "script",
      {
        src: "https://umami-v2-fawn.vercel.app/script.js",
        async: "",
        defer: "",
        "data-website-id": "fd818e1e-e9aa-42b3-83a3-e233b5765aaa",
      },
    ],
  ],
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/\.md$/, ".html"),
        lastmod: pageData.lastUpdated,
      });
  },
  locales: {
    root: {
      label: "English",
      link: "/",
      lang: "en",
    },
    zh: {
      label: "简体中文",
      link: "/zh/",
      lang: "zh",
      themeConfig: {
        nav: [
          { text: "扩展生成器", link: "/extension-builder/" },
          { text: "参与贡献", link: "/help-translate" },
        ],
        sidebar: {
          "/zh/": [
            {
              text: "快速入门",
              items: [
                { text: "介绍", link: "/zh/" },
                { text: "快速开始", link: "/zh/guide/quick-start" },
              ],
            },
            {
              text: "工作流",
              collapsed: false,
              items: [
                { text: "概述", link: "/zh/workflow/overview" },
                {
                  text: "运行工作流",
                  link: "/zh/workflow/running-a-workflow",
                },
                { text: "模块", link: "/zh/workflow/blocks" },
                { text: "分享工作流", link: "/zh/workflow/sharing-workflow" },
                { text: "全局数据", link: "/zh/workflow/global-data" },
                { text: "表格", link: "/zh/workflow/table" },
                { text: "变量", link: "/zh/workflow/variables" },
                { text: "表格或变量", link: "/zh/workflow/table-or-variable" },
                { text: "参数", link: "/zh/workflow/parameters" },
                { text: "设置", link: "/zh/workflow/settings" },
                { text: "调试模式", link: "/zh/workflow/debug-mode" },
                { text: "元素选择器", link: "/zh/workflow/element-selector" },
                { text: "表达式", link: "/zh/workflow/expressions" },
                { text: "循环", link: "/zh/workflow/looping" },
                { text: "测试模式", link: "/zh/workflow/testing-mode" },
              ],
            },
            {
              text: "模块",
              collapsed: true,
              items: [
                {
                  text: "通用",
                  items: [
                    {
                      text: "触发模块",
                      link: "/zh/blocks/trigger.md",
                    },
                    {
                      text: "执行工作流模块",
                      link: "/zh/blocks/execute-workflow.md",
                    },
                    {
                      text: "延迟模块",
                      link: "/zh/blocks/delay.md",
                    },
                    {
                      text: "导出数据模块",
                      link: "/zh/blocks/export-data.md",
                    },
                    {
                      text: "HTTP 请求模块",
                      link: "/zh/blocks/webhook.md",
                    },
                    {
                      text: "模块组模块",
                      link: "/zh/blocks/blocks-group.md",
                    },
                    {
                      text: "剪贴板模块",
                      link: "/zh/blocks/clipboard.md",
                    },
                    {
                      text: "等待连接模块",
                      link: "/zh/blocks/wait-connections.md",
                    },
                    {
                      text: "通知模块",
                      link: "/zh/blocks/notification.md",
                    },
                    {
                      text: "工作流状态模块",
                      link: "/zh/blocks/workflow-state.md",
                    },
                    {
                      text: "参数提示模块",
                      link: "/zh/blocks/parameter-prompt.md",
                    },
                  ],
                },
                {
                  text: "浏览器",
                  items: [
                    {
                      text: "活动标签模块",
                      link: "/zh/blocks/active-tab.md",
                    },
                    {
                      text: "新标签模块",
                      link: "/zh/blocks/new-tab.md",
                    },
                    {
                      text: "切换标签模块",
                      link: "/zh/blocks/switch-tab.md",
                    },
                    {
                      text: "新窗口模块",
                      link: "/zh/blocks/new-window.md",
                    },
                    {
                      text: "代理模块",
                      link: "/zh/blocks/proxy.md",
                    },
                    {
                      text: "后退模块",
                      link: "/zh/blocks/go-back.md",
                    },
                    {
                      text: "前进模块",
                      link: "/zh/blocks/go-forward.md",
                    },
                    {
                      text: "关闭标签/窗口模块",
                      link: "/zh/blocks/close-tab.md",
                    },
                    {
                      text: "截图模块",
                      link: "/zh/blocks/take-screenshot.md",
                    },
                    {
                      text: "浏览器事件模块",
                      link: "/zh/blocks/browser-event.md",
                    },
                    {
                      text: "处理对话框模块",
                      link: "/zh/blocks/handle-dialog.md",
                    },
                    {
                      text: "处理下载模块",
                      link: "/zh/blocks/handle-download.md",
                    },
                    {
                      text: "重新加载标签模块",
                      link: "/zh/blocks/reload-tab.md",
                    },
                    {
                      text: "获取标签 URL 模块",
                      link: "/zh/blocks/tab-url.md",
                    },
                    {
                      text: "Cookie 模块",
                      link: "/zh/blocks/cookie.md",
                    },
                  ],
                },
                {
                  text: "网页交互",
                  items: [
                    {
                      text: "点击元素模块",
                      link: "/blocks/event-click.md",
                    },
                    {
                      text: "获取文本模块",
                      link: "/blocks/get-text.md",
                    },
                    {
                      text: "滚动元素模块",
                      link: "/blocks/element-scroll.md",
                    },
                    {
                      text: "链接模块",
                      link: "/blocks/link.md",
                    },
                    {
                      text: "属性值模块",
                      link: "/blocks/attribute-value.md",
                    },
                    {
                      text: "表单模块",
                      link: "/blocks/forms.md",
                    },
                    {
                      text: "JavaScript 代码模块",
                      link: "/blocks/javascript-code.md",
                    },
                    {
                      text: "触发事件模块",
                      link: "/blocks/trigger-event.md",
                    },
                    {
                      text: "切换框架模块",
                      link: "/blocks/switch-to.md",
                    },
                    {
                      text: "上传文件模块",
                      link: "/blocks/upload-file.md",
                    },
                    {
                      text: "悬停元素模块",
                      link: "/blocks/hover-element.md",
                    },
                    {
                      text: "保存资源模块",
                      link: "/blocks/save-assets.md",
                    },
                    {
                      text: "按键模块",
                      link: "/blocks/press-key.md",
                    },
                    {
                      text: "创建元素模块",
                      link: "/blocks/create-element.md",
                    },
                  ],
                },
                {
                  text: "控制流",
                  items: [
                    {
                      text: "重复任务模块",
                      link: "/blocks/repeat-task.md",
                    },
                    {
                      text: "条件模块",
                      link: "/blocks/conditions.md",
                    },
                    {
                      text: "元素存在模块",
                      link: "/blocks/element-exists.md",
                    },
                    {
                      text: "循环模块",
                      link: "/blocks/while-loop.md",
                    },
                    {
                      text: "循环数据模块",
                      link: "/blocks/loop-data.md",
                    },
                    {
                      text: "循环元素模块",
                      link: "/blocks/loop-elements.md",
                    },
                    {
                      text: "循环断点模块",
                      link: "/blocks/loop-breakpoint.md",
                    },
                  ],
                },
                {
                  text: "在线服务",
                  items: [
                    {
                      text: "Google Sheets 模块",
                      link: "/blocks/google-sheets.md",
                    },
                    {
                      text: "Google Sheets (GDrive) 模块",
                      link: "/blocks/google-sheets-drive.md",
                    },
                    {
                      text: "Google Drive 模块",
                      link: "/blocks/google-drive.md",
                    },
                  ],
                },
                {
                  text: "数据",
                  items: [
                    {
                      text: "插入数据模块",
                      link: "/blocks/insert-data.md",
                    },
                    {
                      text: "删除数据模块",
                      link: "/blocks/delete-data.md",
                    },
                    {
                      text: "获取日志数据模块",
                      link: "/blocks/log-data.md",
                    },
                    {
                      text: "切片变量模块",
                      link: "/blocks/slice-variable.md",
                    },
                    {
                      text: "增加变量模块",
                      link: "/blocks/increase-variable.md",
                    },
                    {
                      text: "正则变量模块",
                      link: "/blocks/regex-variable.md",
                    },
                    {
                      text: "数据映射模块",
                      link: "/blocks/data-mapping.md",
                    },
                    {
                      text: "排序数据模块",
                      link: "/blocks/sort-data.md",
                    },
                  ],
                },
              ],
            },
            {
              text: "参考",
              collapsed: false,
              items: [
                { text: "存储", link: "/zh/reference/storage" },
                { text: "包", link: "/zh/reference/packages" },
                { text: "条件与判断", link: "/zh/reference/condition-builder" },
                {
                  text: "工作流常见错误",
                  link: "/zh/reference/workflow-common-errors",
                },
                {
                  text: "JavaScript 执行上下文",
                  link: "/zh/reference/javascript-execution-context",
                },
              ],
            },
            {
              text: "集成",
              collapsed: false,
              items: [
                { text: "Google Drive", link: "/zh/integrations/google-drive" },
              ],
            },
          ],
        },
      },
    },
  },
  sitemap: {
    hostname: "https://docs.automa.site/",
    lastmodDateOnly: false,
  },
  themeConfig: {
    nav: [
      {
        text: "Docs for v1.21.x or below",
        link: "https://automa-docs-old.vercel.app/",
      },
      { text: "Extension Builder", link: "/extension-builder/" },
      { text: "Help Translate", link: "/help-translate" },
    ],
    algolia: {
      apiKey: process.env.SEARCH_API_KEY,
      appId: process.env.SEARCH_APP_ID,
      indexName: process.env.SEARCH_INDEX_NAME,
    },
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/" },
            { text: "Quick Start", link: "/guide/quick-start" },
          ],
        },
        {
          text: "Workflow",
          collapsed: false,
          items: [
            { text: "Overview", link: "/workflow/overview" },
            {
              text: "Running a Workflow",
              link: "/workflow/running-a-workflow",
            },
            { text: "Blocks", link: "/workflow/blocks" },
            { text: "Sharing a Workflow", link: "/workflow/sharing-workflow" },
            { text: "Global Data", link: "/workflow/global-data" },
            { text: "Table", link: "/workflow/table" },
            { text: "Variables", link: "/workflow/variables" },
            { text: "Table or Variable", link: "/workflow/table-or-variable" },
            { text: "Parameters", link: "/workflow/parameters" },
            { text: "Settings", link: "/workflow/settings" },
            { text: "Debug Mode", link: "/workflow/debug-mode" },
            { text: "Element Selector", link: "/workflow/element-selector" },
            { text: "Expressions", link: "/workflow/expressions" },
            { text: "Looping", link: "/workflow/looping" },
            { text: "Testing mode", link: "/workflow/testing-mode" },
          ],
        },
        {
          text: "Blocks",
          collapsed: true,
          items: [
            {
              text: "General",
              items: [
                {
                  text: "Trigger Block",
                  link: "/blocks/trigger.md",
                },
                {
                  text: "Execute Workflow Block",
                  link: "/blocks/execute-workflow.md",
                },
                {
                  text: "Delay Block",
                  link: "/blocks/delay.md",
                },
                {
                  text: "Export Data Block",
                  link: "/blocks/export-data.md",
                },
                {
                  text: "HTTP Request Block",
                  link: "/blocks/webhook.md",
                },
                {
                  text: "Blocks Group Block",
                  link: "/blocks/blocks-group.md",
                },
                {
                  text: "Clipboard Block",
                  link: "/blocks/clipboard.md",
                },
                {
                  text: "Wait Connections Block",
                  link: "/blocks/wait-connections.md",
                },
                {
                  text: "Notification Block",
                  link: "/blocks/notification.md",
                },
                {
                  text: "Workflow State Block",
                  link: "/blocks/workflow-state.md",
                },
                {
                  text: "Parameter Prompt Block",
                  link: "/blocks/parameter-prompt.md",
                },
              ],
            },
            {
              text: "Browser",
              items: [
                {
                  text: "Active Tab Block",
                  link: "/blocks/active-tab.md",
                },
                {
                  text: "New Tab Block",
                  link: "/blocks/new-tab.md",
                },
                {
                  text: "Switch Tab Block",
                  link: "/blocks/switch-tab.md",
                },
                {
                  text: "New Window Block",
                  link: "/blocks/new-window.md",
                },
                {
                  text: "Proxy Block",
                  link: "/blocks/proxy.md",
                },
                {
                  text: "Go Back Block",
                  link: "/blocks/go-back.md",
                },
                {
                  text: "Go Forward Block",
                  link: "/blocks/go-forward.md",
                },
                {
                  text: "Close Tab/window Block",
                  link: "/blocks/close-tab.md",
                },
                {
                  text: "Take Screenshot Block",
                  link: "/blocks/take-screenshot.md",
                },
                {
                  text: "Browser Event Block",
                  link: "/blocks/browser-event.md",
                },
                {
                  text: "Handle Dialog Block",
                  link: "/blocks/handle-dialog.md",
                },
                {
                  text: "Handle Download Block",
                  link: "/blocks/handle-download.md",
                },
                {
                  text: "Reload Tab Block",
                  link: "/blocks/reload-tab.md",
                },
                {
                  text: "Get Tab Url Block",
                  link: "/blocks/tab-url.md",
                },
                {
                  text: "Cookie Block",
                  link: "/blocks/cookie.md",
                },
              ],
            },
            {
              text: "Web Interaction",
              items: [
                {
                  text: "Click Element Block",
                  link: "/blocks/event-click.md",
                },
                {
                  text: "Get Text Block",
                  link: "/blocks/get-text.md",
                },
                {
                  text: "Scroll Element Block",
                  link: "/blocks/element-scroll.md",
                },
                {
                  text: "Link Block",
                  link: "/blocks/link.md",
                },
                {
                  text: "Attribute Value Block",
                  link: "/blocks/attribute-value.md",
                },
                {
                  text: "Forms Block",
                  link: "/blocks/forms.md",
                },
                {
                  text: "Javascript Code Block",
                  link: "/blocks/javascript-code.md",
                },
                {
                  text: "Trigger Event Block",
                  link: "/blocks/trigger-event.md",
                },
                {
                  text: "Switch Frame Block",
                  link: "/blocks/switch-to.md",
                },
                {
                  text: "Upload File Block",
                  link: "/blocks/upload-file.md",
                },
                {
                  text: "Hover Element Block",
                  link: "/blocks/hover-element.md",
                },
                {
                  text: "Save Assets Block",
                  link: "/blocks/save-assets.md",
                },
                {
                  text: "Press Key Block",
                  link: "/blocks/press-key.md",
                },
                {
                  text: "Create Element Block",
                  link: "/blocks/create-element.md",
                },
              ],
            },
            {
              text: "Control Flow",
              items: [
                {
                  text: "Repeat Task Block",
                  link: "/blocks/repeat-task.md",
                },
                {
                  text: "Conditions Block",
                  link: "/blocks/conditions.md",
                },
                {
                  text: "Element Exists Block",
                  link: "/blocks/element-exists.md",
                },
                {
                  text: "While Loop Block",
                  link: "/blocks/while-loop.md",
                },
                {
                  text: "Loop Data Block",
                  link: "/blocks/loop-data.md",
                },
                {
                  text: "Loop Elements Block",
                  link: "/blocks/loop-elements.md",
                },
                {
                  text: "Loop Breakpoint Block",
                  link: "/blocks/loop-breakpoint.md",
                },
              ],
            },
            {
              text: "Online Services",
              items: [
                {
                  text: "Google Sheets Block",
                  link: "/blocks/google-sheets.md",
                },
                {
                  text: "Google Sheets (GDrive) Block",
                  link: "/blocks/google-sheets-drive.md",
                },
                {
                  text: "Google Drive Block",
                  link: "/blocks/google-drive.md",
                },
              ],
            },
            {
              text: "Data",
              items: [
                {
                  text: "Insert Data Block",
                  link: "/blocks/insert-data.md",
                },
                {
                  text: "Delete Data Block",
                  link: "/blocks/delete-data.md",
                },
                {
                  text: "Get Log Data Block",
                  link: "/blocks/log-data.md",
                },
                {
                  text: "Slice Variable Block",
                  link: "/blocks/slice-variable.md",
                },
                {
                  text: "Increase Variable Block",
                  link: "/blocks/increase-variable.md",
                },
                {
                  text: "Regex Variable Block",
                  link: "/blocks/regex-variable.md",
                },
                {
                  text: "Data Mapping Block",
                  link: "/blocks/data-mapping.md",
                },
                {
                  text: "Sort Data Block",
                  link: "/blocks/sort-data.md",
                },
              ],
            },
          ],
        },
        {
          text: "Reference",
          collapsed: false,
          items: [
            { text: "Storage", link: "/reference/storage" },
            { text: "Packages", link: "/reference/packages" },
            { text: "Condition Builder", link: "/reference/condition-builder" },
            {
              text: "Workflow Common Errors",
              link: "/reference/workflow-common-errors",
            },
            {
              text: "JavaScript Execution Context",
              link: "/reference/javascript-execution-context",
            },
          ],
        },
        {
          text: "Integrations",
          collapsed: false,
          items: [{ text: "Google Drive", link: "/integrations/google-drive" }],
        },
      ],
      "/extension-builder/": [
        {
          text: "Getting Started",
          items: [
            { text: "Overview & Quick Start", link: "/extension-builder/" },
          ],
        },
        {
          text: "Extension",
          items: [
            { text: "Dashboard", link: "/extension-builder/dashboard" },
            { text: "Workflows", link: "/extension-builder/workflows" },
            { text: "Customize", link: "/extension-builder/customize" },
            { text: "Crash Logs", link: "/extension-builder/crash-logs" },
          ],
        },
        {
          text: "Building Extension",
          items: [
            {
              text: "Global Variables",
              link: "/extension-builder/global-variables",
            },
            {
              text: "Version Control",
              link: "/extension-builder/version-control",
            },
            {
              text: "Installing Extension",
              link: "/extension-builder/installing-extension",
            },
          ],
        },
      ],
    },
    editLink: {
      pattern:
        "https://github.com/automaapp/documentation/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    logo: "/images/logo.png",
    lastUpdatedText: "Updated Date",
    socialLinks: [
      { icon: "github", link: "https://github.com/automaapp/automa" },
      { icon: "discord", link: "https://discord.gg/C6khwwTE84" },
      {
        icon: "youtube",
        link: "https://www.youtube.com/channel/UCL3qU64hW0fsIj2vOayOQUQ",
      },
      { icon: "twitter", link: "https://twitter.com/AutomaApp" },
    ],
  },
});

export default config;
