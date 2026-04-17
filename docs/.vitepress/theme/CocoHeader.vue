<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const { isDark, lang, theme } = useData()
const route = useRoute()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

// Read nav from VitePress config (single source of truth)
const navItems = computed(() => {
  const configNav = theme.value.nav || []
  return configNav
    .filter(item => item.link && item.text !== 'Get Started' && item.text !== '开始使用')
    .map(item => ({
      text: item.text,
      link: item.link,
      external: typeof item.link === 'string' && item.link.startsWith('http'),
    }))
})

const ctaItem = computed(() => {
  const configNav = theme.value.nav || []
  const cta = configNav.find(item => item.text === 'Get Started' || item.text === '开始使用')
  return cta || { text: lang.value === 'zh-CN' ? '开始使用' : 'Get Started', link: lang.value === 'zh-CN' ? '/zh/getting-started/' : '/getting-started/' }
})

const currentLang = computed(() => lang.value === 'zh-CN' ? '中文' : 'EN')

function toggleDark() {
  isDark.value = !isDark.value
}

function toggleLang() {
  // route.path in browser includes base prefix — strip it first
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const routePath = base && route.path.startsWith(base)
    ? route.path.slice(base.length) || '/'
    : route.path
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
          <a
            v-if="item.external"
            :href="item.link"
            class="nav-link"
            target="_blank"
            rel="noopener"
          >{{ item.text }}</a>
          <a
            v-else
            :href="withBase(item.link)"
            class="nav-link"
          >{{ item.text }}</a>
        </template>
        <!-- CTA Button -->
        <a :href="withBase(ctaItem.link)" class="nav-cta">{{ ctaItem.text }}</a>
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
        <a
          v-if="item.external"
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
          @click="mobileMenuOpen = false"
        >{{ item.text }}</a>
      </template>
      <a :href="withBase(ctaItem.link)" class="mobile-nav-cta" @click="mobileMenuOpen = false">{{ ctaItem.text }}</a>
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

/* Nav CTA Button */
.nav-cta {
  display: inline-flex;
  align-items: center;
  padding: 6px 18px;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #1a1a2e;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
  margin-left: 8px;
  white-space: nowrap;
}
.nav-cta:hover {
  background: var(--vp-c-brand-2);
}

/* Mobile CTA */
.mobile-nav-cta {
  display: block;
  text-align: center;
  padding: 12px 0;
  margin-top: 8px;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #1a1a2e;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
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
