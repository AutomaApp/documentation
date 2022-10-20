import { defineConfig } from 'vitepress';

const config = defineConfig({
  lang: 'en-US',
  title: 'Automa Docs',
  description: 'Documentation for Automa Browser Extension',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' }]
  ],
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Quick Start', link: '/guide/quick-start' }
        ]
      },
      {
        text: 'Workflow',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/workflow/overview' },
          { text: 'Running a Workflow', link: '/workflow/running-a-workflow' },
          { text: 'Blocks', link: '/workflow/blocks' },
          { text: 'Sharing a Workflow', link: '/workflow/sharing-workflow' },
          { text: 'Global Data', link: '/workflow/global-data' },
          { text: 'Table', link: '/workflow/table' },
          { text: 'Variables', link: '/workflow/variables' },
          { text: 'Table or Variable', link: '/workflow/table-or-variable' },
          { text: 'Parameters', link: '/workflow/parameters' },
          { text: 'Settings', link: '/workflow/settings' },
          { text: 'Debug Mode', link: '/workflow/debug-mode' },
          { text: 'Element Selector', link: '/workflow/element-selector' },
          { text: 'Expressions', link: '/workflow/expressions' },
        ]
      },
      {
        text: 'Blocks',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: "General",
            items: [
              {
                text: "Trigger Block",
                link: "/blocks/trigger.md"
              },
              {
                text: "Execute Workflow Block",
                link: "/blocks/execute-workflow.md"
              },
              {
                text: "Delay Block",
                link: "/blocks/delay.md"
              },
              {
                text: "Export Data Block",
                link: "/blocks/export-data.md"
              },
              {
                text: "HTTP Request Block",
                link: "/blocks/webhook.md"
              },
              {
                text: "Blocks Group Block",
                link: "/blocks/blocks-group.md"
              },
              {
                text: "Clipboard Block",
                link: "/blocks/clipboard.md"
              },
              {
                text: "Wait Connections Block",
                link: "/blocks/wait-connections.md"
              },
              {
                text: "Notification Block",
                link: "/blocks/notification.md"
              },
              {
                text: "Workflow State Block",
                link: "/blocks/workflow-state.md"
              },
              {
                text: "Parameter Prompt Block",
                link: "/blocks/parameter-prompt.md"
              }
            ]
          },
          {
            text: "Browser",
            items: [
              {
                text: "Active Tab Block",
                link: "/blocks/active-tab.md"
              },
              {
                text: "New Tab Block",
                link: "/blocks/new-tab.md"
              },
              {
                text: "Switch Tab Block",
                link: "/blocks/switch-tab.md"
              },
              {
                text: "New Window Block",
                link: "/blocks/new-window.md"
              },
              {
                text: "Proxy Block",
                link: "/blocks/proxy.md"
              },
              {
                text: "Go Back Block",
                link: "/blocks/go-back.md"
              },
              {
                text: "Go Forward Block",
                link: "/blocks/go-forward.md"
              },
              {
                text: "Close Tab/window Block",
                link: "/blocks/close-tab.md"
              },
              {
                text: "Take Screenshot Block",
                link: "/blocks/take-screenshot.md"
              },
              {
                text: "Browser Event Block",
                link: "/blocks/browser-event.md"
              },
              {
                text: "Handle Dialog Block",
                link: "/blocks/handle-dialog.md"
              },
              {
                text: "Handle Download Block",
                link: "/blocks/handle-download.md"
              },
              {
                text: "Reload Tab Block",
                link: "/blocks/reload-tab.md"
              },
              {
                text: "Get Tab Url Block",
                link: "/blocks/tab-url.md"
              },
              {
                text: "Cookie Block",
                link: "/blocks/cookie.md"
              }
            ]
          },
          {
            text: "Web Interaction",
            items: [
              {
                text: "Click Element Block",
                link: "/blocks/event-click.md"
              },
              {
                text: "Get Text Block",
                link: "/blocks/get-text.md"
              },
              {
                text: "Scroll Element Block",
                link: "/blocks/element-scroll.md"
              },
              {
                text: "Link Block",
                link: "/blocks/link.md"
              },
              {
                text: "Attribute Value Block",
                link: "/blocks/attribute-value.md"
              },
              {
                text: "Forms Block",
                link: "/blocks/forms.md"
              },
              {
                text: "Javascript Code Block",
                link: "/blocks/javascript-code.md"
              },
              {
                text: "Trigger Event Block",
                link: "/blocks/trigger-event.md"
              },
              {
                text: "Switch Frame Block",
                link: "/blocks/switch-to.md"
              },
              {
                text: "Upload File Block",
                link: "/blocks/upload-file.md"
              },
              {
                text: "Hover Element Block",
                link: "/blocks/hover-element.md"
              },
              {
                text: "Save Assets Block",
                link: "/blocks/save-assets.md"
              },
              {
                text: "Press Key Block",
                link: "/blocks/press-key.md"
              },
              {
                text: "Create Element Block",
                link: "/blocks/create-element.md"
              }
            ]
          },
          {
            text: "Control Flow",
            items: [
              {
                text: "Repeat Task Block",
                link: "/blocks/repeat-task.md"
              },
              {
                text: "Conditions Block",
                link: "/blocks/conditions.md"
              },
              {
                text: "Element Exists Block",
                link: "/blocks/element-exists.md"
              },
              {
                text: "While Loop Block",
                link: "/blocks/while-loop.md"
              },
              {
                text: "Loop Data Block",
                link: "/blocks/loop-data.md"
              },
              {
                text: "Loop Elements Block",
                link: "/blocks/loop-elements.md"
              },
              {
                text: "Loop Breakpoint Block",
                link: "/blocks/loop-breakpoint.md"
              }
            ]
          },
          {
            text: "Online Services",
            items: [
              {
                text: "Google Sheets Block",
                link: "/blocks/google-sheets.md"
              }
            ]
          },
          {
            text: "Data",
            items: [
              {
                text: "Insert Data Block",
                link: "/blocks/insert-data.md"
              },
              {
                text: "Delete Data Block",
                link: "/blocks/delete-data.md"
              },
              {
                text: "Get Log Data Block",
                link: "/blocks/log-data.md"
              },
              {
                text: "Slice Variable Block",
                link: "/blocks/slice-variable.md"
              },
              {
                text: "Increase Variable Block",
                link: "/blocks/increase-variable.md"
              },
              {
                text: "Regex Variable Block",
                link: "/blocks/regex-variable.md"
              },
              {
                text: "Data Mapping Block",
                link: "/blocks/data-mapping.md"
              },
              {
                text: "Sort Data Block",
                link: "/blocks/sort-data.md"
              }
            ]
          }
        ]
      },
      {
        text: 'Reference',
        collapsible: true,
        items: [
          { text: 'Storage', link: '/reference/storage' },
          { text: 'Packages', link: '/reference/packages' },
          { text: 'JavaScript Execution Context', link: '/reference/javascript-execution-context' }
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/automaapp/documentation/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    logo: '/images/logo.png',
    lastUpdatedText: 'Updated Date',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/automaapp/automa' },
      { icon: 'discord', link: 'https://discord.gg/C6khwwTE84' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCL3qU64hW0fsIj2vOayOQUQ' },
      { icon: 'twitter', link: 'https://twitter.com/AutomaApp' },
    ],
  },
});

export default config