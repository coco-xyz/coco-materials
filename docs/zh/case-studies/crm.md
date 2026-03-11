---
layout: page
title: "COCO CRM — AI 搭建，AI 运营"
description: "一套由 AI Agent 从零设计、搭建并每天自动运营的 CRM 系统。不是辅助工具，是真正的数字员工。"
head:
  - - meta
    - property: og:title
      content: "COCO CRM — Built by AI, Run by AI"
  - - meta
    - property: og:description
      content: "A complete CRM system designed, built, and operated daily by an AI Agent."
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
    text-align: center;
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
</style>

<div class="case-hero">
  <div class="hero-text-box">
    <h1>COCO CRM<br/><em>由 AI 搭建，由 AI 运营</em></h1>
    <p class="subtitle">一个 AI Agent 用一个晚上设计了 7 张表的完整 CRM，<br/>然后每天自动运营——巡检、对账、报告，零人工介入。</p>
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-value">7</div>
        <div class="stat-label">飞书表格</div>
      </div>
      <div class="stat">
        <div class="stat-value">33%</div>
        <div class="stat-label">转化率</div>
      </div>
      <div class="stat">
        <div class="stat-value">0</div>
        <div class="stat-label">人工录入</div>
      </div>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

## 背景：<em>用自己的产品运营自己</em>

COCO 团队需要追踪从注册到试用到付费的完整销售流程。传统做法是：买一个 SaaS CRM、花几周配置、再安排人每天维护。

他们选了另一条路——让 AI Agent **Zylos** 直接设计并搭建整套系统。

从需求描述到 7 张飞书多维表格全部就位：**一个晚上**。

<div class="video-showcase">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/u7o-1GCO89E" title="COCO CRM 自动化演示" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

</div>

<div class="case-section">

## 每天自动运转的 <em>三条流水线</em>

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">🔍</div>
    <div class="time-badge">每天 10:00 AM</div>
    <h3>试用到期巡检</h3>
    <p>系统扫描所有用户的试用状态，按紧急程度分类——今天到期、本周到期、已过期——生成优先级跟进名单，直接发到团队飞书群。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">💳</div>
    <div class="time-badge">每 30 分钟</div>
    <h3>支付实时监控</h3>
    <p>Stripe 支付通知到达，Zylos 自动核对 CRM，更新付费用户表（支持 USD/SGD 多币种），全程零人工录入——付款瞬间数据就更新了。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">📊</div>
    <div class="time-badge">每月 1 日 8:30 AM</div>
    <h3>月度状态看板</h3>
    <p>每个月初自动重建一张按颜色区分状态的看板，把每位用户的当前状态整理清楚，让团队带着最新全貌开启新的一个月。</p>
  </div>
</div>

没人要打开表格手动查数据。Briefing 自动找上门。

</div>

<div class="case-section">

## CRM 架构

<table class="arch-table">
  <thead>
    <tr>
      <th>表格</th>
      <th>用途</th>
      <th>更新方式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>用户名单</strong></td>
      <td>全量客户档案 — 状态、套餐、到期时间</td>
      <td>实时自动</td>
    </tr>
    <tr>
      <td><strong>已付费用户</strong></td>
      <td>去重后的付费用户 + Stripe 交叉验证</td>
      <td>支付时自动</td>
    </tr>
    <tr>
      <td><strong>月度日历</strong></td>
      <td>按日期的状态色板看板</td>
      <td>每月初重建</td>
    </tr>
    <tr>
      <td><strong>SOP</strong></td>
      <td>标准运营流程文档</td>
      <td>按需更新</td>
    </tr>
    <tr>
      <td><strong>客户FAQ</strong></td>
      <td>常见问题知识库</td>
      <td>积累式增长</td>
    </tr>
    <tr>
      <td><strong>Zylos 实例</strong></td>
      <td>用户实例的技术状态追踪</td>
      <td>事件驱动</td>
    </tr>
    <tr>
      <td><strong>潜在客户池</strong></td>
      <td>线索管理与跟进计划</td>
      <td>持续更新</td>
    </tr>
  </tbody>
</table>

</div>

<div class="case-section">

<div class="arch-visual">
  <div class="arch-visual-title">CRM 系统架构</div>
  <div class="arch-flow">
    <div class="arch-node input">
      <div class="arch-node-icon">💳</div>
      <div class="arch-node-label">Stripe 支付</div>
    </div>
    <div class="arch-arrow"></div>
    <div class="arch-node core">
      <div class="arch-node-icon">🤖</div>
      <div class="arch-node-label">Zylos Agent</div>
    </div>
    <div class="arch-arrow"></div>
    <div class="arch-node output">
      <div class="arch-node-icon">📊</div>
      <div class="arch-node-label">飞书 CRM</div>
    </div>
  </div>
  <div class="arch-sheets">
    <span class="arch-sheet">用户名单</span>
    <span class="arch-sheet">已付费用户</span>
    <span class="arch-sheet">月度日历</span>
    <span class="arch-sheet">SOP</span>
    <span class="arch-sheet">客户FAQ</span>
    <span class="arch-sheet">Zylos实例</span>
    <span class="arch-sheet">潜在客户池</span>
  </div>
  <div class="arch-outputs">
    <span class="arch-out">📋 每日巡检报告</span>
    <span class="arch-out">💰 实时支付同步</span>
    <span class="arch-out">📅 月度看板重建</span>
  </div>
</div>

</div>

<div class="case-section">

## 结果

<div class="results-grid">
  <div class="result-card">
    <div class="result-number">33%</div>
    <div class="result-desc">试用转化率<br/><small>SaaS 行业平均约 10%</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">100%</div>
    <div class="result-desc">自动化录入<br/><small>从支付到 CRM 更新</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">0 分钟</div>
    <div class="result-desc">每日人工维护<br/><small>AI 全自动运营</small></div>
  </div>
</div>

从支付通知到 CRM 更新，到团队通知，到跟进名单生成——整条链路 AI 自动完成。

</div>

<div class="case-section">

<div class="case-quote">
  <p>我们没有「搭」CRM，我们只是描述了自己需要什么，第二天它就在那了。奇怪的是它比我们本来打算买的那个工具还好用。</p>
</div>

</div>

<div class="case-section">

## 为什么这个案例重要

COCO 团队用 COCO 做的，不是把原有工作加速一点点——而是让原本**根本不会存在**的运营流水线跑起来了，因为用传统方式搭需要几周时间和真金白银。

这是一个简单的验证：**如果 AI 连自己公司的 CRM 都能从零搭建并持续运营，它也能为你做同样的事。**

</div>

<div class="blog-meta">
  <div class="blog-meta-item">
    <span class="blog-meta-label">Written by</span>
    <span class="blog-meta-value">COCO Team</span>
  </div>
  <div class="blog-meta-item">
    <span class="blog-meta-label">Published on</span>
    <span class="blog-meta-value">March 2026</span>
  </div>
</div>

<div class="case-section">
  <div class="case-cta">
    <h2>让 AI 帮你搭建运营系统</h2>
    <p>像 COCO 一样，从一个需求描述开始</p>
    <a href="https://coco.xyz" class="cta-btn">开始试用 COCO</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>更多案例</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="/zh/case-studies/social-media">
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
