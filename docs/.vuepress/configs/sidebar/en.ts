import { SidebarConfig } from '@vuepress/theme-default';

export const en: SidebarConfig = {
  '/': [
    {
      text: 'Getting started',
      collapsible: true,
      link: '/',
    },
    {
      text: 'Blocks',
      collapsible: true,
      children: [
        '/blocks/README.md',
        '/blocks/execute-workflow.md',
        '/blocks/delay.md',
        '/blocks/export-data.md',
        '/blocks/repeat-task.md',
        '/blocks/webhook.md',
        '/blocks/loop-data.md',
        '/blocks/loop-breakpoint.md',
        '/blocks/blocks-group.md',
        '/blocks/active-tab.md',
        '/blocks/new-tab.md',
        '/blocks/new-window.md',
        '/blocks/proxy.md',
        '/blocks/go-back.md',
        '/blocks/go-forward.md',
        '/blocks/close-tab.md',
        '/blocks/take-screenshot.md',
        '/blocks/event-click.md',
        '/blocks/get-text.md',
      ],
    },
    {
      text: 'API Reference',
      collapsible: true,
      children: [
        '/api-reference/data-columns.md',
        '/api-reference/reference-data.md',
        '/api-reference/global-data.md',
        '/api-reference/blocks.md',
      ],
    },
  ],
  '/blocks': [
    {
      text: 'General',
      collapsible: true,
      children: [
        '/blocks/README.md',
        '/blocks/execute-workflow.md',
        '/blocks/delay.md',
        '/blocks/export-data.md',
        '/blocks/repeat-task.md',
        '/blocks/webhook.md',
        '/blocks/loop-data.md',
        '/blocks/loop-breakpoint.md',
        '/blocks/blocks-group.md',
      ],
    },
    {
      text: 'Browser',
      collapsible: true,
      children: [
        '/blocks/active-tab.md',
        '/blocks/new-tab.md',
        '/blocks/new-window.md',
        '/blocks/proxy.md',
        '/blocks/go-back.md',
        '/blocks/go-forward.md',
        '/blocks/close-tab.md',
        '/blocks/take-screenshot.md',
      ],
    },
    {
      text: 'Web Interaction',
      collapsible: true,
      children: [
        '/blocks/event-click.md',
        '/blocks/get-text.md',
      ],
    },
  ],
}