import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'COCO Docs',
  description: 'AI Digital Employee — Use Cases, Resources & Documentation',
  lang: 'en-US',
  base: '/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/coco-icon.png' }],
    ['meta', { name: 'theme-color', content: '#F5C542' }],
    ['meta', { property: 'og:title', content: 'COCO Docs' }],
    ['meta', { property: 'og:description', content: 'AI Digital Employee — Use Cases, Resources & Documentation' }],
  ],

  themeConfig: {
    logo: '/coco-icon.png',
    siteTitle: 'COCO Docs',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Use Cases', link: '/use-cases/' },
      { text: 'Social Media', link: '/social-media/' },
      { text: 'Case Studies', link: '/case-studies/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'coco.xyz', link: 'https://coco.xyz' },
    ],

    sidebar: {
      '/use-cases/': [
        {
          text: 'Use Cases',
          items: [
            { text: 'Overview', link: '/use-cases/' },
            { text: 'Use Case Template', link: '/use-cases/template' },
          ]
        },
        {
          text: 'Dev Team',
          collapsed: false,
          items: [
            { text: 'Agent Team Ships MVP', link: '/use-cases/dev-team/001-agent-team-mvp' },
            { text: 'Competitive Intelligence', link: '/use-cases/dev-team/002-competitive-intelligence' },
            { text: 'CI Autopilot', link: '/use-cases/dev-team/003-competitive-intelligence-autopilot' },
          ]
        },
        {
          text: 'Operations',
          collapsed: false,
          items: [
            { text: 'Auto Report Generation', link: '/use-cases/operations/auto-report-generation' },
            { text: 'Smart Email Management', link: '/use-cases/operations/smart-email-management' },
          ]
        },
        {
          text: 'Marketing',
          collapsed: true,
          items: [
            { text: 'Coming Soon', link: '/use-cases/marketing/' },
          ]
        },
        {
          text: 'Product',
          collapsed: true,
          items: [
            { text: 'Coming Soon', link: '/use-cases/product/' },
          ]
        },
      ],
      '/social-media/': [
        {
          text: 'Social Media',
          items: [
            { text: 'Overview', link: '/social-media/' },
          ]
        },
        {
          text: 'Video Scripts',
          collapsed: false,
          items: [
            { text: 'Agent Team MVP', link: '/social-media/video-scripts/agent-team-mvp' },
            { text: 'Competitive Intel', link: '/social-media/video-scripts/competitive-intel' },
            { text: 'Auto Report', link: '/social-media/video-scripts/auto-report' },
            { text: 'Smart Email', link: '/social-media/video-scripts/smart-email' },
          ]
        },
      ],
      '/case-studies/': [
        {
          text: 'Case Studies',
          items: [
            { text: 'Overview', link: '/case-studies/' },
          ]
        },
      ],
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/getting-started/' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coco-xyz/coco-materials' },
      { icon: 'x', link: 'https://x.com/CocoAIxyz' },
    ],

    footer: {
      message: 'AI Digital Employee Platform',
      copyright: '© 2026 COCO. All rights reserved.',
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/coco-xyz/coco-materials/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  }
})
