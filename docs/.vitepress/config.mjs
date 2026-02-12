import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  cleanUrls: true,

  vite: {
    server: {
      allowedHosts: ['zylos100.jinglever.com']
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/coco-icon.png' }],
    ['meta', { name: 'theme-color', content: '#F5C542' }],
    ['meta', { property: 'og:title', content: 'COCO Docs' }],
    ['meta', { property: 'og:description', content: 'AI Digital Employee — Use Cases, Resources & Documentation' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'COCO Docs',
      description: 'AI Digital Employee — Use Cases, Resources & Documentation',
      themeConfig: {
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
      },
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: 'COCO 文档',
      description: 'AI数字员工 — 用例、资源与文档',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '用例', link: '/zh/use-cases/' },
          { text: '社交媒体', link: '/zh/social-media/' },
          { text: '案例研究', link: '/zh/case-studies/' },
          { text: '快速开始', link: '/zh/getting-started/' },
          { text: 'coco.xyz', link: 'https://coco.xyz' },
        ],
        sidebar: {
          '/zh/use-cases/': [
            {
              text: '用例',
              items: [
                { text: '概览', link: '/zh/use-cases/' },
                { text: '用例模板', link: '/zh/use-cases/template' },
              ]
            },
            {
              text: '开发团队',
              collapsed: false,
              items: [
                { text: 'Agent团队30分钟交付MVP', link: '/zh/use-cases/dev-team/001-agent-team-mvp' },
                { text: '竞品情报分析', link: '/zh/use-cases/dev-team/002-competitive-intelligence' },
                { text: '竞品监控自动驾驶', link: '/zh/use-cases/dev-team/003-competitive-intelligence-autopilot' },
              ]
            },
            {
              text: '运营',
              collapsed: false,
              items: [
                { text: '自动报告生成', link: '/zh/use-cases/operations/auto-report-generation' },
                { text: '智能邮件管理', link: '/zh/use-cases/operations/smart-email-management' },
              ]
            },
            {
              text: '市场营销',
              collapsed: true,
              items: [
                { text: '即将推出', link: '/zh/use-cases/marketing/' },
              ]
            },
            {
              text: '产品',
              collapsed: true,
              items: [
                { text: '即将推出', link: '/zh/use-cases/product/' },
              ]
            },
          ],
          '/zh/social-media/': [
            {
              text: '社交媒体',
              items: [
                { text: '概览', link: '/zh/social-media/' },
              ]
            },
            {
              text: '视频脚本',
              collapsed: false,
              items: [
                { text: 'Agent团队MVP', link: '/zh/social-media/video-scripts/agent-team-mvp' },
                { text: '竞品情报', link: '/zh/social-media/video-scripts/competitive-intel' },
                { text: '自动报告', link: '/zh/social-media/video-scripts/auto-report' },
                { text: '智能邮件', link: '/zh/social-media/video-scripts/smart-email' },
              ]
            },
          ],
          '/zh/case-studies/': [
            {
              text: '案例研究',
              items: [
                { text: '概览', link: '/zh/case-studies/' },
              ]
            },
          ],
          '/zh/getting-started/': [
            {
              text: '快速开始',
              items: [
                { text: '概览', link: '/zh/getting-started/' },
              ]
            },
          ],
        },
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        editLink: {
          pattern: 'https://github.com/coco-xyz/coco-materials/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
      },
    },
  },

  themeConfig: {
    logo: '/coco-icon.png',
    siteTitle: 'COCO Docs',

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
