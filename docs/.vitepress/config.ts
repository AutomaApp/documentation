import { defineConfig } from 'vitepress';

const config = defineConfig({
  lang: 'en-US',
  title: 'Automa Docs',
  description: 'Documentation for Automa Browser Extension',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Blocks', link: '/block/trigger' },
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
          { text: 'Overview', link: '/workflow/overview' },
          { text: 'Blocks', link: '/workflow/blocks' },
          { text: 'Sharing a Workflow', link: '/workflow/sharing-workflow' },
          { text: 'Global Data', link: '/workflow/global-data' },
          { text: 'Table', link: '/workflow/table' },
          { text: 'Variables', link: '/workflow/variables' },
          { text: 'Table or Variable', link: '/workflow/table-or-variable' },
          { text: 'Parameters', link: '/workflow/parameters' },
          { text: 'Settings', link: '/workflow/settings' },
          { text: 'Debug Mode', link: '/workflow/debug-mode' },
          { text: 'Element Selector', link: '/workflow/element-selector' },
        ]
      },
      {
        text: 'Blocks',
        collapsible: true,
        items: [
          { 
            text: 'General', 
            items: [
              { text: 'Trigger Block', link: '/block/trigger' }
            ] 
          }
        ],
      },
      {
        text: 'References',
        collapsible: true,
        items: [
          { text: 'Storage', link: '/reference/storage' }
        ],
      },
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