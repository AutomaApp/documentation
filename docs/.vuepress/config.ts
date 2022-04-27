require('dotenv').config();
import { defineUserConfig } from '@vuepress/cli';
import { path } from '@vuepress/utils';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { navbar, sidebar } from './configs';
import { defaultTheme } from '@vuepress/theme-default';
import { sitemap } from 'vuepress-plugin-sitemap2';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SEARCH_API_KEY: string;
      SEARCH_APP_ID: string;
      SEARCH_INDEX_NAME: string;
    }
  }
}

export default defineUserConfig({
  theme: defaultTheme({
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
  }),
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
  ],
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
  plugins: [
    docsearchPlugin({
      apiKey: process.env.SEARCH_API_KEY,
      appId: process.env.SEARCH_APP_ID,
      indexName: process.env.SEARCH_INDEX_NAME,
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
    }),
    sitemap({
      hostname: 'https://docs.automa.site/',
      changefreq: 'weekly',
    }),
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Automa Docs',
      description: 'Documentation for Automa Chrome Extension',
    },
  },
});