---
layout: page
title: "Manufacturing AI Adoption — From Pain Points to Solutions"
description: "A traditional manufacturing company's AI selection journey: four real problems, four practical solutions. No dodging hard questions, just solving problems."
head:
  - - meta
    - property: og:title
      content: "Manufacturing AI Adoption — From Pain Points to Solutions"
  - - meta
    - property: og:description
      content: "A traditional manufacturing company's AI selection journey: four real problems, four practical solutions."
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

/* ===== Ocean Palette =====
   Primary:   #5CC5C5 (teal/turquoise — water)
   Accent:    #FF7B7B (coral red — crabs/coral)
   Secondary: #B388D9 (lavender — octopus)
   Mint:      #A8D8B9 (soft green — seaweed)
   Warm:      #F5E64D (yellow — from reef text)
===== */

/* ===== Case Study — Premium Landing ===== */
.case-hero {
  position: sticky;
  top: 64px;
  z-index: 5;
  padding: 100px 24px 72px;
  text-align: center;
  background: url('/reef-banner.png') center/cover no-repeat;
  border-radius: 0 0 32px 32px;
  margin: -32px -24px 0;
}
.case-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 40, 60, 0.55) 0%,
    rgba(10, 40, 60, 0.35) 50%,
    rgba(10, 40, 60, 0.15) 100%
  );
  pointer-events: none;
}
.case-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to top, var(--vp-c-bg), transparent);
  pointer-events: none;
}
.case-hero > * {
  position: relative;
  z-index: 1;
}
.case-hero .hero-text-box {
  display: block;
  max-width: 680px;
  margin: 0 auto;
  padding: 0;
  background: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border: none;
}
.case-body {
  position: relative;
  z-index: 10;
  background: var(--vp-c-bg);
  padding-top: 48px;
  margin: 0 -24px;
  padding-left: 24px;
  padding-right: 24px;
}
.case-hero h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  color: #fff;
  margin: 0 0 16px;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.6), 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3);
}
.case-hero h1 em {
  font-style: normal;
  color: #A8E8E8;
  -webkit-text-fill-color: #A8E8E8;
  text-shadow: 0 2px 20px rgba(92, 197, 197, 0.4), 0 1px 4px rgba(0, 0, 0, 0.4);
}
.case-hero .subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #fff;
  max-width: 640px;
  margin: 0 auto 32px;
  line-height: 1.6;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.4);
}
.case-hero .hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}
.case-hero .stat {
  text-align: center;
}
.case-hero .stat-value {
  font-size: 2.4rem;
  font-weight: 800;
  color: #F5E64D;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}
.case-hero .stat-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Section styling */
.case-section {
  max-width: 800px;
  margin: 0 auto 64px;
  padding: 0 24px;
}
.case-section h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}
.case-section h2 em {
  font-style: normal;
  color: #5CC5C5;
}
.case-section p {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
  margin-bottom: 1.2em;
}

/* Pipeline cards — timeline style */
.pipeline-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 32px 0;
  position: relative;
  padding-left: 40px;
}
.pipeline-grid::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #5CC5C5, #B388D9, #FF7B7B);
  border-radius: 2px;
}
.pipeline-card {
  position: relative;
  padding: 24px 28px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  overflow: hidden;
  margin-bottom: 20px;
}
.pipeline-card::before {
  content: '';
  position: absolute;
  left: -33px;
  top: 32px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #5CC5C5;
  border: 3px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px #5CC5C5;
  z-index: 1;
}
.pipeline-card:nth-child(2)::before { background: #B388D9; box-shadow: 0 0 0 2px #B388D9; }
.pipeline-card:nth-child(3)::before { background: #FF7B7B; box-shadow: 0 0 0 2px #FF7B7B; }
.pipeline-card:hover {
  border-color: #5CC5C5;
  transform: translateX(4px);
  box-shadow: 0 8px 32px rgba(92, 197, 197, 0.1);
}
.pipeline-card .time-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  font-family: 'Plus Jakarta Sans', monospace;
  background: rgba(92, 197, 197, 0.1);
  color: #4BA8A8;
  margin-bottom: 10px;
}
.pipeline-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}
.pipeline-card p {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
  margin: 0;
}
.pipeline-card .card-icon {
  position: absolute;
  top: 24px;
  right: 20px;
  font-size: 2rem;
  opacity: 0.12;
}
@media (max-width: 768px) {
  .case-hero {
    position: relative;
    top: auto;
    padding: 56px 20px 40px;
    margin: -16px -16px 0;
    border-radius: 0 0 20px 20px;
  }
  .case-hero h1 {
    font-size: 1.6rem;
    margin-bottom: 12px;
    text-align: center;
  }
  .case-hero .subtitle {
    font-size: 0.9rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  .case-hero .subtitle br { display: none; }
  .case-hero .hero-stats {
    gap: 24px;
  }
  .case-hero .stat-value {
    font-size: 1.8rem;
  }
  .case-hero .stat-label {
    font-size: 11px;
  }
  .case-body {
    margin: 0 -16px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
  }
  .case-section {
    padding: 0 12px;
    margin-bottom: 40px;
    text-align: center;
  }
  .case-section h2 {
    font-size: 1.4rem;
    text-align: center;
  }
  .case-section p {
    font-size: 0.95rem;
  }
  .pipeline-grid {
    text-align: left;
  }
  .arch-table {
    text-align: left;
  }
  .pipeline-grid { padding-left: 32px; }
  .pipeline-card::before { left: -25px; }
  .pipeline-card {
    padding: 18px 16px;
  }
  .pipeline-card h3 {
    font-size: 1rem;
  }
  .pipeline-card .card-icon {
    font-size: 1.5rem;
    top: 18px;
    right: 14px;
  }
  .case-cta {
    padding: 40px 16px;
    margin: 32px -16px 0;
    border-radius: 16px;
  }
  .case-cta h2 {
    font-size: 1.4rem;
  }
  .case-quote {
    padding: 24px 20px 24px 36px;
  }
  .arch-table {
    font-size: 0.85rem;
  }
  .arch-table th, .arch-table td {
    padding: 10px 12px;
  }
  .blog-meta {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  .blog-related-grid {
    grid-template-columns: 1fr;
  }
}

/* Results block */
.results-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 32px 0;
}
@media (max-width: 768px) {
  .results-grid {
    grid-template-columns: 1fr !important;
    gap: 16px;
  }
  .result-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    padding: 24px;
    gap: 16px;
  }
  .result-card::after {
    width: 4px;
    height: 100%;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
    border-radius: 20px 0 0 20px;
  }
  .result-card .result-number {
    font-size: 2rem;
    min-width: 80px;
    flex-shrink: 0;
  }
  .result-card .result-desc {
    margin-top: 0;
  }
}
.result-card {
  text-align: center;
  padding: 36px 24px;
  border-radius: 20px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 24px rgba(92, 197, 197, 0.06);
  position: relative;
  overflow: hidden;
}
.result-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #7DD4D4, #A8D8B9);
  border-radius: 20px 20px 0 0;
}
.result-card:nth-child(2)::after {
  background: linear-gradient(90deg, #B388D9, #D4A8E8);
}
.result-card:nth-child(3)::after {
  background: linear-gradient(90deg, #FF7B7B, #FFB3B3);
}
.result-card .result-number {
  font-size: 2.6rem;
  font-weight: 800;
  color: #3BA8A8;
  line-height: 1.1;
  font-family: 'Playfair Display', Georgia, serif;
}
.result-card:nth-child(2) .result-number { color: #9B6CC4; }
.result-card:nth-child(3) .result-number { color: #E86060; }
.result-card .result-desc {
  font-size: 0.92rem;
  color: var(--vp-c-text-2);
  margin-top: 12px;
  line-height: 1.5;
}

/* Quote block */
.case-quote {
  position: relative;
  padding: 32px 32px 32px 48px;
  margin: 40px 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(92, 197, 197, 0.06), rgba(179, 136, 217, 0.04));
  border-left: 4px solid #5CC5C5;
}
.case-quote::before {
  content: '\201C';
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 3rem;
  color: #5CC5C5;
  opacity: 0.4;
  line-height: 1;
  font-family: Georgia, serif;
}
.case-quote p {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.7;
  color: var(--vp-c-text-1);
  margin: 0;
}

/* CRM architecture table */
.arch-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}
.arch-table th {
  background: rgba(92, 197, 197, 0.1);
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 14px 16px;
  text-align: left;
}
.arch-table td {
  padding: 12px 16px;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}
.arch-table tr:hover td {
  background: var(--vp-c-bg-soft);
}

/* Architecture visualization */
.arch-visual {
  margin: 32px 0;
  padding: 32px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #1a3a4a, #1e4d5e);
  text-align: center;
  color: #fff;
}
.arch-visual-title {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
}
.arch-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.arch-node {
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  min-width: 100px;
}
.arch-node.input { background: rgba(179, 136, 217, 0.2); }
.arch-node.core { background: rgba(92, 197, 197, 0.2); border-color: rgba(92, 197, 197, 0.4); }
.arch-node.output { background: rgba(168, 216, 185, 0.2); }
.arch-node-icon { font-size: 1.6rem; margin-bottom: 6px; }
.arch-node-label { font-size: 0.85rem; font-weight: 600; }
.arch-arrow {
  width: 32px;
  height: 2px;
  background: linear-gradient(90deg, rgba(92, 197, 197, 0.3), #5CC5C5);
  position: relative;
}
.arch-arrow::after {
  content: '';
  position: absolute;
  right: -4px;
  top: -4px;
  width: 0;
  height: 0;
  border-left: 8px solid #5CC5C5;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.arch-sheets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}
.arch-sheet {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 500;
  background: rgba(92, 197, 197, 0.12);
  color: #7DD4D4;
  border: 1px solid rgba(92, 197, 197, 0.2);
}
.arch-outputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.arch-out {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.6);
}
@media (max-width: 640px) {
  .arch-flow { flex-direction: column; }
  .arch-arrow { width: 2px; height: 20px; background: linear-gradient(to bottom, rgba(92, 197, 197, 0.3), #5CC5C5); }
  .arch-arrow::after { right: auto; top: auto; bottom: -4px; left: -4px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 8px solid #5CC5C5; border-bottom: none; }
}

/* CTA block */
.video-showcase {
  margin: 32px auto 0;
  max-width: 800px;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

.case-cta {
  text-align: center;
  padding: 64px 24px;
  margin: 48px -24px 0;
  background: url('/otter-banner.png') center/cover no-repeat;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
}
.case-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(10, 30, 40, 0.45);
}
.case-cta > * {
  position: relative;
  z-index: 1;
}
.case-cta h2 {
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 12px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.case-cta p {
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 28px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
.case-cta .cta-btn {
  display: inline-block;
  padding: 14px 36px;
  border-radius: 999px;
  background: #5CC5C5;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;
}
.case-cta .cta-btn:hover {
  background: #4BA8A8;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(92, 197, 197, 0.3);
}

/* ===== Scroll Animations ===== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-on-scroll {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
.pipeline-card {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.pipeline-card.visible {
  opacity: 1;
  transform: translateX(0);
}
.pipeline-card:nth-child(2) { transition-delay: 0.15s; }
.pipeline-card:nth-child(3) { transition-delay: 0.3s; }
.result-card {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.result-card.visible {
  opacity: 1;
  transform: scale(1);
}
.result-card:nth-child(2) { transition-delay: 0.12s; }
.result-card:nth-child(3) { transition-delay: 0.24s; }

/* ===== Premium Handwritten Font ===== */
.case-hero h1,
.case-section h2 {
  font-family: 'Playfair Display', Georgia, 'Noto Serif SC', serif;
}
.case-hero h1 em,
.case-section h2 em {
  font-family: 'Playfair Display', Georgia, 'Noto Serif SC', serif;
  font-style: italic;
}

/* Dark mode fine-tuning */
.dark .pipeline-card {
  background: rgba(255, 255, 255, 0.03);
}
.dark .result-card {
  background: rgba(255, 255, 255, 0.02);
}

/* ===== NEW: Blog meta + Related posts ===== */
.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 24px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.88rem;
  color: var(--vp-c-text-3);
}
.blog-meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.blog-meta-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
}
.blog-meta-value {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.blog-related {
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
  border-top: 1px solid var(--vp-c-divider);
  position: relative;
}
.blog-divider-shell {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.6rem;
  background: var(--vp-c-bg);
  padding: 0 12px;
  line-height: 1;
}
.blog-related h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 24px;
  text-align: center;
}
.blog-related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.blog-related-card {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  transition: all 0.2s;
  background: var(--vp-c-bg);
}
.blog-related-card:hover {
  border-color: #5CC5C5;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(92, 197, 197, 0.1);
}
.blog-related-card-img {
  height: 160px;
  background: linear-gradient(135deg, #1a3a4a, #1e4d5e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2.5rem;
  position: relative;
  overflow: hidden;
}
.blog-related-card-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/reef-banner.png') center/cover no-repeat;
  opacity: 0.3;
}
.blog-related-card-body {
  padding: 16px 20px;
}
.blog-related-card-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5CC5C5;
  margin-bottom: 6px;
}
.blog-related-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  margin: 0;
}
.blog-related-card-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-top: 6px;
  line-height: 1.5;
}
.dark .blog-related-card {
  background: rgba(255, 255, 255, 0.02);
}

/* ===== Mobile Responsiveness & Visual Polish ===== */
*, *::before, *::after { box-sizing: border-box; }

/* Prevent horizontal overflow */
.case-body { overflow-x: hidden; }

/* Table scroll wrapper */
.arch-table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 24px 0;
}
.arch-table-wrapper .arch-table { margin: 0; }

/* Better word breaking */
.case-hero h1, .case-section h2 {
  word-break: break-word;
  hyphens: auto;
}

/* Section max-width for readability */
.case-section { max-width: 720px; }

/* Section heading accent */
.case-section h2 {
  border-left: 4px solid #5CC5C5;
  padding-left: 16px;
}

/* Anchor nav scroll offset */
.case-section h2 { scroll-margin-top: 80px; }

/* Result cards equal height */
.results-grid { align-items: stretch; }

/* Table zebra striping */
.arch-table tr:nth-child(even) td { background: var(--vp-c-bg-soft); }

/* Pipeline card left-border accent matching dot color */
.pipeline-card { border-left: 3px solid #5CC5C5; }
.pipeline-card:nth-child(2) { border-left-color: #B388D9; }
.pipeline-card:nth-child(3) { border-left-color: #FF7B7B; }

/* 480px breakpoint */
@media (max-width: 480px) {
  .case-hero h1 { font-size: 1.4rem; }
  .case-hero .hero-stats { gap: 16px; }
  .case-hero .stat-value { font-size: 1.6rem; }
  .pipeline-grid { padding-left: 24px; }
  .pipeline-card::before { left: -17px; }
  .case-section { padding: 0 8px; }
  .results-grid { gap: 12px; }
}

/* ===== Project Overview Card ===== */
.project-overview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 0 0 40px;
  padding: 20px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-align: left;
}
.po-field {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}
.po-icon { font-size: 1.3rem; flex-shrink: 0; line-height: 1.4; }
.po-content { display: flex; flex-direction: column; min-width: 0; }
.po-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--vp-c-text-3);
  margin-bottom: 4px;
}
.po-value {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  word-break: break-word;
}
/* FAQ spacing — space between each Q&A pair */
.case-section h3 {
  margin-top: 2.5em;
  margin-bottom: 0.4em;
}
.case-section h3:first-child { margin-top: 0; }

@media (max-width: 640px) {
  .project-overview { grid-template-columns: 1fr; padding: 14px; gap: 8px; }
  .po-field { padding: 10px 12px; }
}
</style>

<div class="case-hero">
  <div class="hero-text-box">
    <h1>Manufacturing AI Adoption<br/><em>From Pain Points to Solutions</em></h1>
    <p class="subtitle">A traditional manufacturer's AI selection journey: four real problems, four practical solutions.<br/>No dodging hard questions, just solving problems.</p>
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-value">4</div>
        <div class="stat-label">Real Problems</div>
      </div>
      <div class="stat">
        <div class="stat-value">4</div>
        <div class="stat-label">Practical Solutions</div>
      </div>
      <div class="stat">
        <div class="stat-value">3</div>
        <div class="stat-label">Month Evaluation</div>
      </div>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

<div class="project-overview">
  <div class="po-field">
    <span class="po-icon">🏭</span>
    <div class="po-content">
      <span class="po-label">Industry</span>
      <span class="po-value">Traditional Manufacturing (Paper)</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🏢</span>
    <div class="po-content">
      <span class="po-label">Company Size</span>
      <span class="po-value">Large group, multi-department</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🖥️</span>
    <div class="po-content">
      <span class="po-label">Existing Systems</span>
      <span class="po-value">Yonyou ERP (legacy version)</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📋</span>
    <div class="po-content">
      <span class="po-label">Evaluation Stage</span>
      <span class="po-value">Selection & testing (2026 Q2)</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🎯</span>
    <div class="po-content">
      <span class="po-label">Core Objective</span>
      <span class="po-value">From 10% automation to full office workflow coverage</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🤝</span>
    <div class="po-content">
      <span class="po-label">Engagement Model</span>
      <span class="po-value">3-month evaluation → pilot departments → full rollout</span>
    </div>
  </div>
</div>

## Background: <em>First Mover in the Industry</em>

This is a large paper manufacturing conglomerate running a legacy Yonyou ERP system for their core business processes. The CEO's vision was crystal clear -- not satisfied with AI replacing just 10% of repetitive work, the goal was to automate the vast majority of daily office operations.

Among their industry peers, they are the first mover. Fellow paper manufacturers are closely watching their results -- the industry has a culture of sharing experiences, and once someone blazes a trail, others follow.

Their selection criteria were equally pragmatic: the product must be mature or near-mature, and once chosen, it would be adopted long-term. They had no appetite for the risks that come with early-stage startup products. They weren't looking for a "demo toy" -- they needed a "production-ready tool."

The value of this case study lies not in showcasing a perfect success story, but in honestly documenting every specific problem a manufacturing enterprise encounters during AI selection -- and how COCO responded.

</div>

<div class="case-section">

## Four Real Problems, <em>Four Practical Solutions</em>

Throughout the evaluation period, the customer raised four core issues. None were theoretical -- each was a real obstacle encountered during actual operations. These problems represent universal challenges that manufacturing enterprises inevitably face during AI adoption.

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">📄</div>
    <div class="time-badge">Problem 1</div>
    <h3>Inaccurate OCR Document Recognition</h3>
    <p>The customer tested AI with 10 photos of delivery notes, asking it to extract data into Excel. Despite clear photos, general-purpose AI produced inaccurate results that recurred after correction. <strong>COCO's approach:</strong> General AI isn't suited for specialized image recognition. Dedicated OCR tools/Skills are needed. The product roadmap already includes document-specific recognition Skills. Short-term solution: integrate professional image recognition toolchains for significantly improved accuracy.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🌐</div>
    <div class="time-badge">Problem 2</div>
    <h3>Browser Automation Timeout (Banking Sites)</h3>
    <p>The company needed to log into banking websites that require token/OTP verification, but AI-driven browser operations were too slow -- tokens expired before they could be used. The fundamental issue: websites are designed for humans, not AI. <strong>COCO's approach:</strong> Prioritize API/CLI over browser simulation; use remote desktop assistance (Browser Explorer plugin) for initial login, then maintain the session; pursue a dual strategy -- improve tooling while pushing for API-based banking interfaces.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">📱</div>
    <div class="time-badge">Problem 3</div>
    <h3>Automatic OTP Forwarding</h3>
    <p>The company phone receives OTP codes that must be manually forwarded to the Agent each time -- a tedious workflow bottleneck. <strong>COCO's approach:</strong> Develop a lightweight Android APK installed on the company phone to intercept SMS messages and automatically forward verification codes to the Agent. With clear requirements, the Agent can even build this APK itself.</p>
  </div>
</div>

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">🔒</div>
    <div class="time-badge">Problem 4</div>
    <h3>Data Security & Information Isolation</h3>
    <p>The customer was concerned about AI handling ERP data securely. <strong>COCO's three-layer approach:</strong> Layer 1 -- ISO/SOC2 certification with end-to-end encryption; Layer 2 -- Agent information isolation best practices including personal/business separation, internal/external separation, and inter-department isolation; Layer 3 -- data stays in systems, not in the Agent, with query-only permissions and auditable access control. We were candid: hard isolation remains an industry-wide challenge that even Anthropic/OpenAI haven't fully solved -- we offer current best practices.</p>
  </div>
</div>

</div>

<div class="case-section">

## Bonus: <em>The Skill Memory Problem</em>

The customer also raised a practical pain point: they taught the AI a skill, but it forgot by the next day.

This is a real and widespread issue. The current solution involves visual storage (Git/Lark docs) to categorize and record Skills for precise retrieval. The next version of the Workspace product will productize these best practices -- letting users directly see what their Agent knows, what it has learned, and which Skill to use when, eliminating the need to re-teach every time.

<div class="case-quote">
  <p>We're not looking for a demo toy. We need a production-ready tool. Our industry peers are all watching our results -- once we blaze a trail, others will follow.</p>
</div>

</div>

<div class="case-section">

## Why This Case Study <em>Matters</em>

This is not a success showcase. It is a complete record of a real vendor selection conversation.

Every problem documented here is a universal challenge that manufacturing enterprises will inevitably face during AI adoption: OCR accuracy, browser automation limitations, authentication workflow gaps, and data security trust thresholds. These problems don't disappear by being avoided -- they are overcome only by being confronted directly.

COCO's approach: don't dodge technical limitations, provide pragmatic solutions, and commit to product iteration timelines. No empty promises about what can't be done yet; clear pathways for what can be achieved.

What makes this particularly noteworthy is the potential industry benchmark effect -- the paper manufacturing sector has a tradition of sharing experiences among peers. The customer's industry contacts are closely watching this experiment. If validated, this isn't just one company's story -- it becomes the starting point for AI adoption across the entire industry.

<div class="results-grid">
  <div class="result-card">
    <div class="result-number">4</div>
    <div class="result-desc">Real Problems<br/><small>From actual operations</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">4</div>
    <div class="result-desc">Practical Solutions<br/><small>Actionable & pragmatic</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">3 mo</div>
    <div class="result-desc">Evaluation Period<br/><small>Pilot → full rollout</small></div>
  </div>
</div>

</div>

<div class="case-section">

## COCO's <em>Competitive Differentiation</em>

During the selection meeting, the COCO team outlined four core competitive advantages:

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">🧠</div>
    <div class="time-badge">Advantage 1</div>
    <h3>Proprietary AI Operating System</h3>
    <p>COCO has its own AI operating system -- not a wrapper around third-party models. If another provider's model goes offline, COCO keeps running. This is system-level risk resilience.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🌏</div>
    <div class="time-badge">Advantage 2</div>
    <h3>Singapore-Based, Best Global Models</h3>
    <p>As a Singapore company, COCO can select the best AI models globally without being restricted to a single region. Whether Claude, GPT, or emerging models -- customers always get the optimal choice.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🚀</div>
    <div class="time-badge">Advantage 3</div>
    <h3>Enterprise Collaboration Suite Leading the Market</h3>
    <p>The next version of COCO's enterprise collaboration experience will be 1-2 months ahead of the industry. COCO isn't just an AI tool -- it's a complete system built for enterprise collaboration.</p>
  </div>
</div>

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">📊</div>
    <div class="time-badge">Advantage 4</div>
    <h3>Growing Vertical Industry Case Library</h3>
    <p>COCO continues to accumulate real-world deployment cases across industries. Reference case: Width (a KYC SaaS company) -- their non-technical CEO rebuilt an integrated CRM + Zendesk + DocuSign system in just 3-4 days, proving that non-technical users can build complex systems with COCO.</p>
  </div>
</div>

</div>

<div class="case-section">

## Frequently Asked Questions

### Q: What level of image recognition accuracy can be achieved?

It depends on the document type and image quality. General-purpose AI has limitations for specialized document recognition, but accuracy improves significantly with dedicated OCR tools. COCO's product roadmap includes purpose-built recognition Skills for various document types (delivery notes, invoices, bills of lading), with continuous optimization.

### Q: Can COCO integrate with existing ERP systems?

Yes. One of AI Agent's core capabilities is acting as a "glue layer" between systems -- it can connect to existing systems via APIs, database connections, or browser automation. The Width case study demonstrates this: a non-technical CEO completed a CRM + Zendesk + DocuSign integration in 3-4 days. Legacy ERP systems like Yonyou can be integrated through similar approaches.

### Q: How is data security ensured?

COCO provides three layers of security: ISO/SOC2 certification with end-to-end encryption; Agent information isolation best practices (personal/business separation, internal/external separation, inter-department isolation); and access control with query-only permissions (data stays in systems, not in the Agent, with auditable retention policies). We are transparent that hard isolation remains an industry-wide challenge -- COCO offers current best-practice solutions.

### Q: Will the Agent forget previously learned skills?

In the current version, Skill persistence is managed through visual storage (Git/Lark docs). The upcoming Workspace product will productize these best practices -- users will be able to directly see their Agent's Skills, when they're used, and how to manage them, fully solving the "taught today, forgotten tomorrow" problem.

### Q: How long does it take from testing to full deployment?

We recommend a phased approach: 3-month evaluation period (validate core scenarios) → pilot departments (select 1-2 departments best suited for automation) → gradual expansion company-wide. This approach minimizes risk, with clear validation metrics at each stage.

### Q: What advantages does COCO have over domestic AI products (like Kimi, Coze)?

Three core differentiators: First, COCO has a proprietary AI operating system rather than being a wrapper, making it independent of any single model provider and more resilient to disruption. Second, as a Singapore company, COCO can access the best global models without regional restrictions. Third, COCO focuses on deep enterprise collaboration -- it's not just a conversational AI, but a complete enterprise solution capable of designing, building, and operating full business systems.

</div>

<div class="blog-meta">
  <div class="blog-meta-item">
    <span class="blog-meta-label">Written by</span>
    <span class="blog-meta-value">COCO Team</span>
  </div>
  <div class="blog-meta-item">
    <span class="blog-meta-label">Published on</span>
    <span class="blog-meta-value">April 2026</span>
  </div>
</div>

<div class="case-section">
  <div class="case-cta">
    <h2>Bring AI to Your Factory Floor</h2>
    <p>Start with a real problem, find the right solution</p>
    <a href="https://coco.xyz" class="cta-btn">Try COCO Today</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>More Case Studies</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="./crm">
      <div class="blog-related-card-img">🤖</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">COCO CRM — Built by AI, Run by AI</div>
        <div class="blog-related-card-desc">An AI Agent designed a complete CRM in one evening, then runs it daily -- zero manual intervention.</div>
      </div>
    </a>
    <a class="blog-related-card" href="./social-media">
      <div class="blog-related-card-img">📱</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">Social Media & BD Automation</div>
        <div class="blog-related-card-desc">From content publishing to business development, one AI Agent replaces an entire operations team's workflow.</div>
      </div>
    </a>
  </div>
</div>

</div>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  document.querySelectorAll('.case-section, .pipeline-card, .result-card, .arch-visual, .case-quote, .case-cta').forEach(el => {
    el.classList.add('animate-on-scroll')
    observer.observe(el)
  })
  document.querySelectorAll('.pipeline-card').forEach(el => {
    el.classList.remove('animate-on-scroll')
    observer.observe(el)
  })
  document.querySelectorAll('.result-card').forEach(el => {
    el.classList.remove('animate-on-scroll')
    observer.observe(el)
  })
})
</script>