<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const { isDark, lang } = useData()
const route = useRoute()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = computed(() => {
  const isZh = lang.value === 'zh-CN'
  return [
    { text: isZh ? '用例' : 'Use Cases', link: isZh ? '/zh/use-cases/' : '/use-cases/' },
    { text: isZh ? '定价' : 'Pricing', link: 'https://coco.xyz/#pricing', external: true },
    {
      text: isZh ? '文档' : 'Docs',
      link: isZh ? '/zh/' : '/',
      active: true,
      dropdown: true,
      sections: [
        {
          title: isZh ? '案例研究' : 'Case Studies',
          items: [
            { icon: '📊', text: isZh ? 'COCO CRM' : 'COCO CRM', desc: isZh ? 'AI 搭建，AI 运营' : 'Built by AI, Run by AI', link: isZh ? '/zh/case-studies/crm' : '/case-studies/crm' },
            { icon: '📱', text: isZh ? '社媒自动化' : 'Social Media & BD', desc: isZh ? '两家公司，同一个突破' : 'Two Companies, One Breakthrough', link: isZh ? '/zh/case-studies/social-media' : '/case-studies/social-media' },
          ]
        },
      ]
    },
  ]
})

const currentLang = computed(() => lang.value === 'zh-CN' ? '中文' : 'EN')

function toggleDark() {
  isDark.value = !isDark.value
}

function toggleLang() {
  const routePath = route.path
  // Preserve hash and query from current URL
  const { search, hash } = window.location
  let newPath
  if (lang.value === 'zh-CN') {
    newPath = routePath.replace(/^\/zh(\/|$)/, '/') || '/'
  } else {
    newPath = '/zh' + (routePath.startsWith('/') ? routePath : '/' + routePath)
  }
  window.location.href = withBase(newPath) + search + hash
}

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="coco-header" :class="{ scrolled }">
    <div class="header-inner">
      <!-- Logo -->
      <a :href="withBase(lang === 'zh-CN' ? '/zh/' : '/')" class="logo-link">
        <img
          :src="withBase(isDark ? '/coco-logo-yellow.png' : '/coco-logo-black.png')"
          alt="COCO"
          class="logo-img"
        />
      </a>

      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <template v-for="item in navItems" :key="item.text">
          <!-- Dropdown nav item -->
          <div v-if="item.dropdown" class="nav-dropdown">
            <a :href="withBase(item.link)" class="nav-link dropdown-trigger" :class="{ active: item.active }">
              {{ item.text }}
              <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="mega-menu">
              <div class="mega-menu-inner">
                <div v-for="section in item.sections" :key="section.title" class="mega-section">
                  <div class="mega-section-title">{{ section.title }}</div>
                  <div class="mega-section-grid">
                    <a
                      v-for="child in section.items"
                      :key="child.text"
                      :href="child.external ? child.link : withBase(child.link)"
                      :target="child.external ? '_blank' : undefined"
                      :rel="child.external ? 'noopener' : undefined"
                      class="mega-item"
                    >
                      <span class="mega-item-icon">{{ child.icon }}</span>
                      <span class="mega-item-text">{{ child.text }}</span>
                      <span class="mega-item-desc">{{ child.desc }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Regular nav items -->
          <a
            v-else-if="item.external"
            :href="item.link"
            class="nav-link"
            target="_blank"
            rel="noopener"
          >{{ item.text }}</a>
          <a
            v-else
            :href="withBase(item.link)"
            class="nav-link"
            :class="{ active: item.active }"
          >{{ item.text }}</a>
        </template>
      </nav>

      <!-- Controls -->
      <div class="header-controls">
        <!-- Language Switch -->
        <button class="control-pill" @click="toggleLang" :title="lang === 'zh-CN' ? 'Switch to English' : '切换中文'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span>{{ currentLang }}</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button class="control-pill dark-toggle" @click="toggleDark" :title="isDark ? 'Light mode' : 'Dark mode'" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <span class="toggle-track">
            <span class="toggle-thumb" :class="{ dark: isDark }">
              <!-- Sun -->
              <svg v-if="!isDark" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <!-- Moon -->
              <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </span>
          </span>
        </button>

        <!-- Mobile menu button -->
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle navigation menu" :aria-expanded="mobileMenuOpen">
          <svg v-if="!mobileMenuOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" v-if="mobileMenuOpen">
      <template v-for="item in navItems" :key="item.text">
        <!-- Mobile dropdown -->
        <template v-if="item.dropdown">
          <div class="mobile-nav-label">{{ item.text }}</div>
          <template v-for="section in item.sections" :key="section.title">
            <template v-for="child in section.items" :key="child.text">
              <a
                v-if="child.external"
                :href="child.link"
                class="mobile-nav-link mobile-nav-child"
                target="_blank"
                rel="noopener"
                @click="mobileMenuOpen = false"
              >{{ child.icon }} {{ child.text }}</a>
              <a
                v-else
                :href="withBase(child.link)"
                class="mobile-nav-link mobile-nav-child"
                @click="mobileMenuOpen = false"
              >{{ child.icon }} {{ child.text }}</a>
            </template>
          </template>
        </template>
        <!-- Regular mobile items -->
        <a
          v-else-if="item.external"
          :href="item.link"
          class="mobile-nav-link"
          target="_blank"
          rel="noopener"
          @click="mobileMenuOpen = false"
        >{{ item.text }}</a>
        <a
          v-else
          :href="withBase(item.link)"
          class="mobile-nav-link"
          :class="{ active: item.active }"
          @click="mobileMenuOpen = false"
        >{{ item.text }}</a>
      </template>
    </div>
  </header>
</template>

<style scoped>
.coco-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  height: 64px;
  background: var(--vp-c-bg);
  transition: box-shadow 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}
.coco-header.scrolled {
  border-bottom-color: var(--vp-c-divider);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}
.dark .coco-header.scrolled {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
}
.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 32px;
}
.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.logo-img {
  height: 28px;
  width: auto;
}
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}
.nav-link {
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.nav-link:hover {
  background: var(--vp-c-default-soft);
}
.nav-link.active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
.header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.control-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.control-pill:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}
.dark-toggle {
  padding: 4px;
  border: none;
  background: none;
}
.toggle-track {
  display: flex;
  align-items: center;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 2px;
  transition: background 0.3s;
}
.dark .toggle-track {
  background: #2a2a3a;
}
.toggle-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s;
  color: #f59e0b;
}
.toggle-thumb.dark {
  transform: translateX(20px);
  background: #374151;
  color: #fbbf24;
}
.mobile-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  background: none;
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 8px 24px 16px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}
.mobile-nav-link {
  padding: 10px 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider);
}
.mobile-nav-link.active {
  color: var(--vp-c-brand-1);
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}
.dropdown-trigger {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dropdown-arrow {
  transition: transform 0.25s ease;
}
.nav-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

/* Mega Menu */
.mega-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 420px;
  z-index: 50;
  padding-top: 8px;
}
.nav-dropdown:hover .mega-menu,
.mega-menu:hover {
  display: block;
}
.mega-menu-inner {
  background: linear-gradient(135deg, #1a3a4a, #1e4d5e);
  border-radius: 16px;
  padding: 24px 28px;
  box-shadow: 0 16px 48px rgba(92, 197, 197, 0.15), 0 0 0 1px rgba(92, 197, 197, 0.1);
}
.mega-section {
  margin-bottom: 20px;
}
.mega-section:last-child {
  margin-bottom: 0;
}
.mega-section-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 12px;
  padding-left: 4px;
}
.mega-section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 4px;
}
.mega-item {
  display: flex;
  flex-direction: column;
  padding: 12px 14px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.15s;
}
.mega-item:hover {
  background: rgba(92, 197, 197, 0.12);
}
.mega-item-icon {
  font-size: 1.4rem;
  margin-bottom: 6px;
}
.mega-item-text {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
}
.mega-item-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 1.4;
}

/* Mobile dropdown */
.mobile-nav-label {
  padding: 10px 0 4px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
  border-bottom: none;
}
.mobile-nav-child {
  padding-left: 12px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .mobile-menu-btn {
    display: flex;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
