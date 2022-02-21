require('dotenv').config();
import { defineUserConfig } from '@vuepress/cli';
import { path } from '@vuepress/utils';
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import { navbar, sidebar } from './configs';

export default defineUserConfig<DefaultThemeOptions>({
  theme: '@vuepress/theme-default',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
  ],
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
  plugins: [
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: process.env.SEARCH_API_KEY,
        indexName: process.env.SEARCH_INDEX_NAME,
        appId: process.env.SEARCH_APP_ID,
        locales: {
          '/': {
            placeholder: 'Search docs',
            translations: {
              button: {
                buttonText: 'Search docs',
              },
            },
          },
        },
      }
    ]
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