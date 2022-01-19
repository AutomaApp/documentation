import { defineUserConfig } from '@vuepress/cli';
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import { navbar, sidebar } from './configs';

export default defineUserConfig<DefaultThemeOptions>({
  theme: '@vuepress/theme-default',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['script', { async: true, defer: true, 'data-website-id': '2dc09142-98bd-4108-a8c4-99274563e6ef', src: 'https://analytics-three-steel.vercel.app/umami.js' }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Automa Docs',
      description: 'Documentation for Automa Chrome Extension',
    },
  },
  themeConfig: {
    docsDir: 'docs',
    themePlugins: {
      mediumZoom: true,
    },
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