import { NavbarConfig } from '@vuepress/theme-default';

export const en: NavbarConfig = [
  {
    text: 'Getting started',
    link: '/',
  },
  {
    text: 'Blocks',
    link: '/blocks/',
  },
  {
    text: 'API Reference',
    link: '/api-reference',
    children: [
      '/api-reference/data-columns',
      '/api-reference/reference-data',
      '/api-reference/global-data.md',
    ],
  }
];
