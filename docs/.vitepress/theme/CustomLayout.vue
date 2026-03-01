<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { useRoute, withBase } from 'vitepress'
import CocoHeader from './CocoHeader.vue'
import CocoFooter from './CocoFooter.vue'

const { Layout } = DefaultTheme
const route = useRoute()

function highlightHeroText() {
  setTimeout(() => {
    const textEl = document.querySelector('.VPHero .text')
    if (!textEl) return

    const raw = textEl.textContent
    if (raw && raw.includes('AI')) {
      textEl.innerHTML = raw.replace(/AI/g, '<span class="hero-highlight">AI</span>')
    }
  }, 100)
}

onMounted(() => {
  highlightHeroText()
})
</script>

<template>
  <CocoHeader />
  <Layout>
    <template #home-hero-image>
      <div class="hero-video-container">
        <video
          autoplay
          loop
          muted
          playsinline
          :src="withBase('/videos/coco-bird-wave.mp4')"
        />
      </div>
    </template>
  </Layout>
  <CocoFooter />
</template>

<style>
.hero-highlight {
  color: #E0A020;
  font-weight: 700;
}
.dark .hero-highlight {
  color: #FFD646;
}
</style>
