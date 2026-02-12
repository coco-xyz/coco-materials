import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,

  vite: {
    server: {
      allowedHosts: ['zylos100.jinglever.com']
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/coco-icon.png' }],
    ['meta', { name: 'theme-color', content: '#FFD646' }],
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
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Use Cases', link: '/use-cases/' },
          { text: 'Case Studies', link: '/case-studies/' },
          { text: 'Social Media', link: '/social-media/' },
          { text: 'coco.xyz', link: 'https://coco.xyz' },
        ],
        sidebar: {
          '/getting-started/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Overview', link: '/getting-started/' },
                { text: 'Registration & Payment', link: '/getting-started/registration-payment' },
                { text: 'Channel Deployment', link: '/getting-started/channel-deployment' },
                { text: 'First-Time Tutorial', link: '/getting-started/first-time-tutorial' },
              ]
            },
          ],
          '/use-cases/': [
            {
              text: 'Use Cases',
              items: [
                { text: 'Overview', link: '/use-cases/' },
              ]
            },
            {
              text: 'By Role',
              collapsed: false,
              items: [
                { text: 'Product / Dev', link: '/use-cases/role/product-dev' },
                { text: 'Operations', link: '/use-cases/role/operations' },
                { text: 'Finance', link: '/use-cases/role/finance' },
                { text: 'Content / Marketing', link: '/use-cases/role/content-marketing' },
                { text: 'Customer Support', link: '/use-cases/role/customer-support' },
                { text: 'HR / Recruiting', link: '/use-cases/role/hr-recruiting' },
                { text: 'Sales', link: '/use-cases/role/sales' },
              ]
            },
            {
              text: 'By Task',
              collapsed: false,
              items: [
                { text: 'Writing & Content', link: '/use-cases/task/writing-content' },
                { text: 'Data Analysis', link: '/use-cases/task/data-analysis' },
                { text: 'Process Automation', link: '/use-cases/task/process-automation' },
                { text: 'Research & Monitoring', link: '/use-cases/task/research-monitoring' },
              ]
            },
            {
              text: 'By Industry',
              collapsed: true,
              items: [
                { text: 'Technology / SaaS', link: '/use-cases/industry/technology' },
                { text: 'E-commerce / Retail', link: '/use-cases/industry/ecommerce' },
                { text: 'Financial Services', link: '/use-cases/industry/financial-services' },
              ]
            },
          ],
          '/social-media/': [
            {
              text: 'Social Media',
              items: [
                { text: 'Channels', link: '/social-media/' },
              ]
            },
          ],
          '/case-studies/': [
            {
              text: 'Case Studies',
              items: [
                { text: 'Capability Showcase', link: '/case-studies/' },
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
          { text: '快速开始', link: '/zh/getting-started/' },
          { text: '用例库', link: '/zh/use-cases/' },
          { text: '案例研究', link: '/zh/case-studies/' },
          { text: '社交媒体', link: '/zh/social-media/' },
          { text: 'coco.xyz', link: 'https://coco.xyz' },
        ],
        sidebar: {
          '/zh/getting-started/': [
            {
              text: '快速开始',
              items: [
                { text: '概览', link: '/zh/getting-started/' },
                { text: '注册与支付', link: '/zh/getting-started/registration-payment' },
                { text: '渠道部署指南', link: '/zh/getting-started/channel-deployment' },
                { text: '首次使用教程', link: '/zh/getting-started/first-time-tutorial' },
              ]
            },
          ],
          '/zh/use-cases/': [
            {
              text: '用例库',
              items: [
                { text: '概览', link: '/zh/use-cases/' },
              ]
            },
            {
              text: '按角色',
              collapsed: false,
              items: [
                { text: '产品/研发', link: '/zh/use-cases/role/product-dev' },
                { text: '运营', link: '/zh/use-cases/role/operations' },
                { text: '财务', link: '/zh/use-cases/role/finance' },
                { text: '内容/营销', link: '/zh/use-cases/role/content-marketing' },
                { text: '客服', link: '/zh/use-cases/role/customer-support' },
                { text: 'HR/招聘', link: '/zh/use-cases/role/hr-recruiting' },
                { text: '销售', link: '/zh/use-cases/role/sales' },
              ]
            },
            {
              text: '按任务',
              collapsed: false,
              items: [
                { text: '写作与内容', link: '/zh/use-cases/task/writing-content' },
                { text: '数据分析', link: '/zh/use-cases/task/data-analysis' },
                { text: '流程自动化', link: '/zh/use-cases/task/process-automation' },
                { text: '调研与监控', link: '/zh/use-cases/task/research-monitoring' },
              ]
            },
            {
              text: '按行业',
              collapsed: true,
              items: [
                { text: '科技/SaaS', link: '/zh/use-cases/industry/technology' },
                { text: '电商/零售', link: '/zh/use-cases/industry/ecommerce' },
                { text: '金融服务', link: '/zh/use-cases/industry/financial-services' },
              ]
            },
          ],
          '/zh/social-media/': [
            {
              text: '社交媒体',
              items: [
                { text: '渠道', link: '/zh/social-media/' },
              ]
            },
          ],
          '/zh/case-studies/': [
            {
              text: '案例研究',
              items: [
                { text: '能力展示', link: '/zh/case-studies/' },
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
