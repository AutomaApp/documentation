import { SidebarConfig } from '@vuepress/theme-default';

export const en: SidebarConfig = {
  '/': [
    {
      text: 'Getting started',
      link: '/',
    },
    {
      text: 'Blocks',
      link: '/blocks',
    },
    {
      text: 'API Reference',
      link: '/api-reference/'
    },
  ],
  '/blocks': [
    {
      text: 'General',
      children: [
        '/blocks/README.md',
        '/blocks/execute-workflow.md',
      ],
    }
  ],
  '/api-reference': [
    {
      text: 'API Reference',
      children: [
        '/api-reference/reference-data.md',
        '/api-reference/data-columns.md',
      ],
    },
  ],
}