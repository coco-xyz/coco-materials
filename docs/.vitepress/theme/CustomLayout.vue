<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()

function highlightHeroText() {
  // Find the hero text element and highlight "AI" in gold
  setTimeout(() => {
    const textEl = document.querySelector('.VPHero .text')
    if (!textEl) return

    const raw = textEl.textContent
    // Highlight "AI" keyword in warm gold
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
  <Layout />
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
