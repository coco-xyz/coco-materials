<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { isDark, lang } = useData()

const isZh = computed(() => lang.value === 'zh-CN')

const columns = computed(() => {
  if (isZh.value) {
    return [
      {
        title: '产品',
        links: [
          { text: 'Agent Cloud', href: 'https://coco.xyz' },
          { text: '定价', href: 'https://coco.xyz/#pricing' },
          { text: 'Labs', href: 'https://labs.coco.xyz' },
        ],
      },
      {
        title: '用例',
        links: [
          { text: '按角色', href: withBase('/zh/use-cases/#按角色浏览') },
          { text: '按任务', href: withBase('/zh/use-cases/#按任务浏览') },
          { text: '按行业', href: withBase('/zh/use-cases/#按行业浏览') },
        ],
      },
      {
        title: '资源',
        links: [
          { text: '文档', href: withBase('/zh/') },
          { text: 'GitHub', href: 'https://github.com/coco-xyz' },
        ],
      },
      {
        title: '公司',
        links: [
          { text: '联系我们', href: 'mailto:hi@coco.xyz' },
        ],
      },
    ]
  }
  return [
    {
      title: 'Products',
      links: [
        { text: 'Agent Cloud', href: 'https://coco.xyz' },
        { text: 'Pricing', href: 'https://coco.xyz/#pricing' },
        { text: 'Labs', href: 'https://labs.coco.xyz' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { text: 'Role', href: withBase('/use-cases/#browse-by-role') },
        { text: 'Task', href: withBase('/use-cases/#browse-by-task') },
        { text: 'Industry', href: withBase('/use-cases/#browse-by-industry') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Docs', href: withBase('/') },
        { text: 'GitHub', href: 'https://github.com/coco-xyz' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Contact', href: 'mailto:hi@coco.xyz' },
      ],
    },
  ]
})

const year = new Date().getFullYear()
</script>

<template>
  <footer class="coco-footer">
    <div class="footer-inner">
      <!-- Top section: logo + columns -->
      <div class="footer-top">
        <!-- Brand -->
        <div class="footer-brand">
          <a :href="withBase(isZh ? '/zh/' : '/')" class="footer-logo-link">
            <img
              :src="withBase(isDark ? '/coco-logo-yellow.png' : '/coco-logo-black.png')"
              alt="COCO"
              class="footer-logo"
            />
          </a>
          <p class="footer-tagline">{{ isZh ? 'AI Teams 平台' : 'AI Teams Platform' }}</p>
        </div>

        <!-- Link columns -->
        <div class="footer-columns">
          <div v-for="col in columns" :key="col.title" class="footer-column">
            <h4 class="column-title">{{ col.title }}</h4>
            <ul class="column-links">
              <li v-for="link in col.links" :key="link.text">
                <a
                  :href="link.href"
                  class="column-link"
                  :target="link.href.startsWith('http') ? '_blank' : undefined"
                  :rel="link.href.startsWith('http') ? 'noopener' : undefined"
                >{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom section: social + copyright -->
      <div class="footer-bottom">
        <div class="social-links">
          <!-- GitHub -->
          <a href="https://github.com/coco-xyz" target="_blank" rel="noopener" class="social-link" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <!-- X/Twitter -->
          <a href="https://x.com/CocoAIxyz" target="_blank" rel="noopener" class="social-link" title="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        <p class="copyright">&copy; {{ year }} COCO. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.coco-footer {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  margin-top: 64px;
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 24px 32px;
}
.footer-top {
  display: flex;
  gap: 64px;
  margin-bottom: 40px;
}
.footer-brand {
  flex-shrink: 0;
  min-width: 160px;
}
.footer-logo-link {
  display: inline-block;
}
.footer-logo {
  height: 28px;
  width: auto;
}
.footer-tagline {
  margin-top: 12px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.footer-columns {
  display: flex;
  flex: 1;
  gap: 48px;
}
.footer-column {
  flex: 1;
  min-width: 0;
}
.column-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.column-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.column-link {
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}
.column-link:hover {
  color: var(--vp-c-brand-1);
}
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
.social-links {
  display: flex;
  gap: 12px;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--vp-c-text-2);
  transition: color 0.2s, background 0.2s;
}
.social-link:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-default-soft);
}
.copyright {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 32px;
  }
  .footer-columns {
    flex-wrap: wrap;
    gap: 24px;
  }
  .footer-column {
    flex: none;
    width: calc(50% - 12px);
  }
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
