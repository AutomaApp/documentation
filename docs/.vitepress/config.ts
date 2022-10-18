import { defineConfig } from 'vitepress';

const config = defineConfig({
  lang: 'en-US',
  title: 'Automa Docs',
  description: 'Documentation for Automa Browser Extension',
  themeConfig: {
    nav: [
      { text: 'Halo', link: '/' }
    ],
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
          { text: 'Introduction', link: '/workflow/introduction' },
          { text: 'Sharing a workflow', link: '/workflow/sharing-workflow' },
          { text: 'Host a workflow', link: '/workflow/host-workflow' },
          { text: 'Workflow table', link: '/workflow/workflow-table' },
          { text: 'Workflow parameters', link: '/workflow/workflow-parameters' },
          { text: 'Workflow settings', link: '/workflow/workflow-settings' },
          { text: 'Editor UI', link: '/workflow/editor-ui' },
          { text: 'Debug mode', link: '/workflow/debug-mode' },
          { text: 'Element selector', link: '/workflow/element-selector' },
        ]
      }
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