import { defineUserConfig } from '@vuepress/cli';
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import { navbar, sidebar } from './configs';

export default defineUserConfig<DefaultThemeOptions>({
  theme: '@vuepress/theme-default',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Automa Docs',
      description: 'Vue-powered Static Site Generator',
    },
  },
  themeConfig: {
    lastUpdated: true,
    editLink: true,
    contributors: true,
    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
      },
    },
    logo: '/images/logo.png',
    repo: 'kholid060/automa-docs',
  },
});