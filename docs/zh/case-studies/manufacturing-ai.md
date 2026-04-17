---
layout: page
title: "制造业 AI 落地实录 — 从痛点到方案"
description: "一家传统制造企业的 AI 选型之路：四个真实问题，四套落地方案。不回避难题，只解决问题。制造业企业 AI 自动化的完整选型记录。"
head:
  - - meta
    - property: og:title
      content: "制造业 AI 落地实录 — 从痛点到方案"
  - - meta
    - property: og:description
      content: "一家传统制造企业的 AI 选型之路：四个真实问题，四套落地方案。不回避难题，只解决问题。"
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
  overflow: hidden;
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
    <h1>制造业 AI 落地实录<br/><em>从痛点到方案</em></h1>
    <p class="subtitle">一家传统制造企业的 AI 选型之路：四个真实问题，四套落地方案。<br/>不回避难题，只解决问题。</p>
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-value">4</div>
        <div class="stat-label">个典型问题</div>
      </div>
      <div class="stat">
        <div class="stat-value">4</div>
        <div class="stat-label">套落地方案</div>
      </div>
      <div class="stat">
        <div class="stat-value">3</div>
        <div class="stat-label">个月选型周期</div>
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
      <span class="po-label">行业</span>
      <span class="po-value">传统制造业（造纸）</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🏢</span>
    <div class="po-content">
      <span class="po-label">企业规模</span>
      <span class="po-value">大型集团，多部门协同</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🖥️</span>
    <div class="po-content">
      <span class="po-label">现有系统</span>
      <span class="po-value">用友 ERP（传统版本）</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📋</span>
    <div class="po-content">
      <span class="po-label">评估阶段</span>
      <span class="po-value">选型测试期（2026 Q2）</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🎯</span>
    <div class="po-content">
      <span class="po-label">核心诉求</span>
      <span class="po-value">从 10% 替代到绝大部分办公工作自动化</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🤝</span>
    <div class="po-content">
      <span class="po-label">合作模式</span>
      <span class="po-value">3 个月选型 → 首批部门部署 → 全面推广</span>
    </div>
  </div>
</div>

## 背景：<em>第一个吃螃蟹的人</em>

这是一家传统造纸行业的大型制造集团，内部使用用友老版 ERP 系统管理核心业务流程。老板的目标非常清晰——不满足于 AI 仅仅替代 10% 的重复性工作，而是要替代绝大部分办公室员工的日常工作。

在同行中，他们是第一个吃螃蟹的人。朋友圈里的造纸同行们都在关注他们的尝试结果——这个行业有一个特点，大家愿意互相分享经验，一旦有人趟出来一条路，后面的人会跟上。

选型要求也很务实：产品要足够成熟或半成熟，一旦选定就长期使用，不愿意踩初创产品的坑。他们不是在找一个"能演示的玩具"，而是在找一个"能上生产线的工具"。

这次对话的价值不在于展示一个完美的成功案例，而在于真实记录了制造业企业在 AI 选型过程中遇到的每一个具体问题——以及 COCO 是如何回应的。

</div>

<div class="case-section">

## 四个真实问题与 <em>四套落地方案</em>

在整个选型测试期，客户提出了四个核心问题。每一个都不是理论问题，而是在实际操作中遇到的真实障碍。这些问题也是制造业企业在 AI 落地过程中必然遇到的共性挑战。

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">📄</div>
    <div class="time-badge">问题 1</div>
    <h3>OCR 单据识别不准</h3>
    <p>客户拿 10 张八号单（delivery notes）的照片让 AI 提取数据到 Excel。照片清晰，但通用 AI 裸跑识别仍有偏差，纠正后问题复现。<strong>COCO 方案：</strong>通用 AI 不适合专业图像识别场景，需要配置专业 OCR 工具/Skill。产品路线图已包含单据识别专用 Skill。短期方案：接入更专业的图像识别工具链，显著提升准确率。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🌐</div>
    <div class="time-badge">问题 2</div>
    <h3>浏览器操作超时（银行网站）</h3>
    <p>需要登录银行网站执行操作，银行需要 token/OTP 验证，但 AI 操作浏览器太慢，token 还没用就过期了。本质问题：网站是为人类设计的，不是为 AI 设计的。<strong>COCO 方案：</strong>优先使用 API/命令行而非模拟浏览器操作；首次登录用远程桌面辅助（Browser Explorer 插件），登录一次后免登；双向推进——工具端持续改进 + 推动网站端 API 化。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">📱</div>
    <div class="time-badge">问题 3</div>
    <h3>OTP 验证码自动转发</h3>
    <p>公司手机收到 OTP 验证码，每次都要手动发给 Agent，流程繁琐。<strong>COCO 方案：</strong>开发轻量 Android APK 安装到公司手机，接管短信权限，收到验证码后自动转发给 Agent。需求描述清楚后，Agent 甚至可以直接开发出这个 APK。</p>
  </div>
</div>

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">🔒</div>
    <div class="time-badge">问题 4</div>
    <h3>数据安全与信息隔离</h3>
    <p>客户担心 AI 处理 ERP 数据的安全性。<strong>COCO 方案三层防护：</strong>第一层——ISO/SOC2 认证自证清白，全程加密传输；第二层——Agent 信息隔离最佳实践，公私分离、内外分离、部门间隔离；第三层——信息存系统不存 Agent 身上，Agent 只有查询权限，留存需授权且可审计。坦诚说：硬隔离是业界难题，目前只有最佳实践，包括 Anthropic/OpenAI 也没完全解决。</p>
  </div>
</div>

</div>

<div class="case-section">

## Bonus：<em>Skill 记忆问题</em>

客户还提出了一个 Agent 使用中的痛点：教会 AI 一个 Skill，隔天就忘了。

这是一个真实且普遍的问题。目前的方案是：用可视化存储（Git/飞书），分门别类记录 Skill，实现精准调用。下一版 Workspace 产品将把这些最佳实践产品化——让用户直接看到 Agent 会什么、学了什么、什么时候用什么 Skill，而不是每次都要重新教。

<div class="case-quote">
  <p>我们不是在找一个能演示的玩具，是在找一个能上生产线的工具。同行朋友们都在看我们的结果——我们趟出来的路，后面的人会跟上。</p>
</div>

</div>

<div class="case-section">

## 为什么这个案例 <em>重要</em>

这不是一个展示成功的案例。这是一段真实选型对话的完整记录。

每个问题都是制造业企业在 AI 落地过程中必然遇到的共性挑战：OCR 精度、浏览器自动化的局限、验证码流程的断点、数据安全的信任门槛。这些问题不会因为回避而消失，只会因为正面解决而被克服。

COCO 的回应方式是：不回避技术局限，给出务实方案，承诺产品迭代路线。对于做不到的事情不打包票，对于能做到的事情给出明确路径。

更值得关注的是潜在的行业标杆效应——造纸行业有互相分享经验的传统，客户的同行都在关注这次尝试的结果。一旦验证成功，这不是一家公司的故事，而是整个行业 AI 落地的起点。

<div class="results-grid">
  <div class="result-card">
    <div class="result-number">4</div>
    <div class="result-desc">个真实问题<br/><small>来自实际操作场景</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">4</div>
    <div class="result-desc">套落地方案<br/><small>务实可执行</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">3 个月</div>
    <div class="result-desc">选型周期<br/><small>首批部门 → 全面推广</small></div>
  </div>
</div>

</div>

<div class="case-section">

## COCO 的 <em>差异化竞争力</em>

在选型会上，COCO 团队总结了四个核心竞争力：

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">🧠</div>
    <div class="time-badge">竞争力 1</div>
    <h3>自有 AI 操作系统，非套壳</h3>
    <p>COCO 拥有自研的 AI 操作系统，不依赖单一模型提供商。别人的模型下线不影响 COCO 运行——系统层面的抗风险能力。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🌏</div>
    <div class="time-badge">竞争力 2</div>
    <h3>新加坡企业，全球最优模型</h3>
    <p>作为新加坡企业，COCO 可以选择全球最优的 AI 模型，不受单一地域限制。无论 Claude、GPT 还是其他新兴模型，始终为客户接入最佳选择。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🚀</div>
    <div class="time-badge">竞争力 3</div>
    <h3>企业协作套件持续领先</h3>
    <p>下一版本的企业协作体验将领先业界 1-2 个月。COCO 不只是 AI 工具，更是一套为企业协作而生的完整系统。</p>
  </div>
</div>

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">📊</div>
    <div class="time-badge">竞争力 4</div>
    <h3>垂直行业案例持续积累</h3>
    <p>COCO 持续在各行业积累落地案例。参考案例：Width（KYC SaaS 公司）的非技术 CEO 用 3-4 天重建了 CRM + Zendesk + DocuSign 一体化系统——证明非技术人员也能用 COCO 完成复杂系统搭建。</p>
  </div>
</div>

</div>

<div class="case-section">

## 常见问题

### Q: 图像识别准确率能达到多少？

取决于文档类型和图像质量。通用 AI 裸跑在专业单据识别上存在局限，但配置专业 OCR 工具后准确率会显著提升。COCO 的产品路线图已包含针对不同单据类型（如八号单、发票、提货单）的专用识别 Skill，持续优化中。

### Q: 能否对接现有 ERP 系统？

可以。AI Agent 的核心能力之一就是充当系统间的"粘合剂"——它可以通过 API、数据库连接或浏览器操作与已有系统对接。Width 案例证明：一位非技术背景的 CEO 用 3-4 天就完成了 CRM + Zendesk + DocuSign 的一体化系统搭建。用友 ERP 同样可以通过类似方式接入。

### Q: 数据安全如何保障？

COCO 提供三层安全保障：ISO/SOC2 认证 + 全程加密传输、Agent 信息隔离最佳实践（公私分离、内外分离、部门间隔离）、以及查询权限控制（信息存系统不存 Agent，留存需授权且可审计）。我们坦诚地说，硬隔离是业界共同的难题，COCO 提供的是当前最佳实践方案。

### Q: Agent 会忘记之前学到的技能吗？

当前版本中，Skill 的持久化需要通过可视化存储（Git/飞书）来管理。下一版 Workspace 产品将把这些最佳实践产品化——用户可以直接看到 Agent 拥有哪些 Skill、何时调用、如何管理，彻底解决"教了就忘"的问题。

### Q: 从测试到全面部署需要多长时间？

建议采用分阶段推进策略：3 个月选型测试期（验证核心场景）→ 首批部门试点（选择 1-2 个最适合自动化的部门）→ 逐步推广至全公司。这种方式风险最低，每个阶段都有明确的验证指标。

### Q: COCO 与国内 AI 产品（如 Kimi、扣子）相比有什么优势？

核心差异有三点：第一，COCO 拥有自研 AI 操作系统而非套壳，不依赖单一模型提供商，抗风险能力更强；第二，作为新加坡企业可选用全球最优模型，不受地域限制；第三，COCO 专注企业协作深度——不只是对话式 AI，更是一套能设计、搭建、运营完整业务系统的企业级解决方案。

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
    <h2>让 AI 走进你的工厂</h2>
    <p>从一个真实问题开始，找到属于你的落地方案</p>
    <a href="https://coco.xyz" class="cta-btn">开始试用 COCO</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>更多案例</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="./crm">
      <div class="blog-related-card-img">🤖</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">COCO CRM — 由 AI 搭建，由 AI 运营</div>
        <div class="blog-related-card-desc">一个 AI Agent 用一个晚上设计了完整 CRM，然后每天自动运营——零人工介入。</div>
      </div>
    </a>
    <a class="blog-related-card" href="./social-media">
      <div class="blog-related-card-img">📱</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">社媒与 BD 自动化：AI 全流程运营</div>
        <div class="blog-related-card-desc">从内容发布到商务拓展，一个 AI Agent 替代整个运营团队的工作流。</div>
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