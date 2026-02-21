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
        outline: { level: [2, 3] },
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
                { text: 'Important Notes', link: '/getting-started/tips' },
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
                { text: 'Product Manager', link: '/use-cases/role/product' },
                { text: 'Developer / Engineering', link: '/use-cases/role/dev' },
                { text: 'Operations', link: '/use-cases/role/operations' },
                { text: 'Finance', link: '/use-cases/role/finance' },
                { text: 'Content / Marketing', link: '/use-cases/role/content-marketing' },
                { text: 'Customer Support', link: '/use-cases/role/customer-support' },
                { text: 'HR / Recruiting', link: '/use-cases/role/hr-recruiting' },
                { text: 'Sales', link: '/use-cases/role/sales' },
                { text: 'Legal', link: '/use-cases/role/legal' },
                { text: 'Executive', link: '/use-cases/role/executive' },
                { text: 'Data Analyst', link: '/use-cases/role/data-analyst' },
                { text: 'DevOps', link: '/use-cases/role/devops' },
                { text: 'Project Manager', link: '/use-cases/role/pm' },
                { text: 'QA Engineer', link: '/use-cases/role/qa-engineer' },
                { text: 'Compliance Officer', link: '/use-cases/role/compliance-officer' },
                { text: 'Consultant', link: '/use-cases/role/consultant' },
                { text: 'Logistics Manager', link: '/use-cases/role/logistics-manager' },
                { text: 'Procurement', link: '/use-cases/role/procurement' },
                { text: 'Trainer', link: '/use-cases/role/trainer' },
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
                { text: 'Healthcare', link: '/use-cases/industry/healthcare' },
                { text: 'Education', link: '/use-cases/industry/education' },
                { text: 'Enterprise', link: '/use-cases/industry/enterprise' },
                { text: 'Manufacturing', link: '/use-cases/industry/manufacturing' },
                { text: 'Logistics', link: '/use-cases/industry/logistics' },
                { text: 'Energy', link: '/use-cases/industry/energy' },
                { text: 'Government', link: '/use-cases/industry/government' },
                { text: 'Real Estate', link: '/use-cases/industry/real-estate' },
                { text: 'Insurance', link: '/use-cases/industry/insurance' },
                { text: 'Automotive', link: '/use-cases/industry/automotive' },
                { text: 'Agriculture', link: '/use-cases/industry/agriculture' },
                { text: 'Consulting', link: '/use-cases/industry/consulting' },
                { text: 'Hospitality', link: '/use-cases/industry/hospitality' },
                { text: 'Media & Entertainment', link: '/use-cases/industry/media-entertainment' },
                { text: 'Nonprofit', link: '/use-cases/industry/nonprofit' },
                { text: 'Telecom', link: '/use-cases/industry/telecom' },
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
                { text: '注意事项', link: '/zh/getting-started/tips' },
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
                { text: '产品经理', link: '/zh/use-cases/role/product' },
                { text: '研发工程', link: '/zh/use-cases/role/dev' },
                { text: '运营', link: '/zh/use-cases/role/operations' },
                { text: '财务', link: '/zh/use-cases/role/finance' },
                { text: '内容/营销', link: '/zh/use-cases/role/content-marketing' },
                { text: '客服', link: '/zh/use-cases/role/customer-support' },
                { text: 'HR/招聘', link: '/zh/use-cases/role/hr-recruiting' },
                { text: '销售', link: '/zh/use-cases/role/sales' },
                { text: '法律', link: '/zh/use-cases/role/legal' },
                { text: '高管', link: '/zh/use-cases/role/executive' },
                { text: '数据分析师', link: '/zh/use-cases/role/data-analyst' },
                { text: 'DevOps运维', link: '/zh/use-cases/role/devops' },
                { text: '项目经理', link: '/zh/use-cases/role/pm' },
                { text: 'QA工程师', link: '/zh/use-cases/role/qa-engineer' },
                { text: '合规官', link: '/zh/use-cases/role/compliance-officer' },
                { text: '咨询顾问', link: '/zh/use-cases/role/consultant' },
                { text: '物流经理', link: '/zh/use-cases/role/logistics-manager' },
                { text: '采购', link: '/zh/use-cases/role/procurement' },
                { text: '培训师', link: '/zh/use-cases/role/trainer' },
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
                { text: '医疗健康', link: '/zh/use-cases/industry/healthcare' },
                { text: '教育', link: '/zh/use-cases/industry/education' },
                { text: '企业通用', link: '/zh/use-cases/industry/enterprise' },
                { text: '制造业', link: '/zh/use-cases/industry/manufacturing' },
                { text: '物流', link: '/zh/use-cases/industry/logistics' },
                { text: '能源', link: '/zh/use-cases/industry/energy' },
                { text: '政府', link: '/zh/use-cases/industry/government' },
                { text: '房地产', link: '/zh/use-cases/industry/real-estate' },
                { text: '保险', link: '/zh/use-cases/industry/insurance' },
                { text: '汽车', link: '/zh/use-cases/industry/automotive' },
                { text: '农业', link: '/zh/use-cases/industry/agriculture' },
                { text: '咨询', link: '/zh/use-cases/industry/consulting' },
                { text: '酒店餐饮', link: '/zh/use-cases/industry/hospitality' },
                { text: '媒体娱乐', link: '/zh/use-cases/industry/media-entertainment' },
                { text: '非营利', link: '/zh/use-cases/industry/nonprofit' },
                { text: '电信', link: '/zh/use-cases/industry/telecom' },
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
        outline: { level: [2, 3], label: '本页目录' },
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
    logo: '/coco-logo-black.png',
    siteTitle: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coco-xyz' },
      { icon: 'x', link: 'https://x.com/CocoAIxyz' },
    ],

    footer: {
      message: '<a href="https://github.com/coco-xyz" target="_blank">COCO GitHub</a> · <a href="https://github.com/zylos-ai" target="_blank">Zylos GitHub</a> · AI Digital Employee Platform',
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
