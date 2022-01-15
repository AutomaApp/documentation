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
      ],
    },
    {
      text: 'API Reference',
      collapsible: true,
      children: [
        '/api-reference/data-columns.md',
        '/api-reference/reference-data.md',
        '/api-reference/global-data.md',
      ],
    },
  ],
  '/blocks': [
    {
      text: 'General',
      children: [
        '/blocks/README.md',
        '/blocks/execute-workflow.md',
        '/blocks/delay.md',
        '/blocks/export-data.md',
        '/blocks/repeat-task.md',
        '/blocks/webhook.md',
      ],
    }
  ],
}