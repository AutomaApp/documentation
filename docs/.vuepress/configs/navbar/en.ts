import { NavbarConfig } from '@vuepress/theme-default';

export const en: NavbarConfig = [
  {
    text: 'Getting started',
    link: '/',
  },
  {
    text: 'Blocks',
    link: '/blocks/trigger.md',
  },
  {
    text: 'API Reference',
    link: '/api-reference',
    children: [
      '/api-reference/table',
      '/api-reference/reference-data',
      '/api-reference/global-data.md'
    ],
  },
  {
    text: 'Home',
    link: 'https://www.automa.site/',
  },
  {
    text: 'v0.x docs',
    link: 'https://docs-0x.automa.site/',
  },
];
