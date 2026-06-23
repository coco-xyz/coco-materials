---
layout: page
title: "新加坡某建材经销商 × COCO AI — 从漏单到智能报价 | COCO"
description: "日均 200+ WhatsApp 消息、每天 30 张人工发票上限、动辄数千新元的 QS 外包费——新加坡建材经销商如何用 COCO AI 实现近零漏单、发票效率倍增、工程量清单从 1 周压缩到数小时。"
head:
  - - meta
    - property: og:title
      content: "新加坡某建材经销商 × COCO AI — 从漏单到智能报价"
  - - meta
    - property: og:description
      content: "日均 200+ WhatsApp 消息、每天 30 张人工发票上限、动辄数千新元的 QS 外包费——新加坡建材经销商如何用 COCO AI 实现近零漏单、发票效率倍增、工程量清单从 1 周压缩到数小时。"
  - - meta
    - property: og:image
      content: "https://docs.icoco.ai/coco-logo-black.png"
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
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Noto Sans SC', sans-serif;
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
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Noto Sans SC', sans-serif;
  font-size: 2.6rem;
  font-weight: 800;
  color: #3BA8A8;
  line-height: 1.1;
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

/* ===== Premium Handwritten Font (import at top of style block) ===== */
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
    <h1>新加坡建材经销商<br/><em>从漏单到智能报价</em></h1>
    <p class="subtitle">每天 200+ 条 WhatsApp 消息淹没团队，人工发票每天上限 30 张，<br/>QS 报价要等一周——COCO AI 让这三个问题同时消失。</p>
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-value">~0</div>
        <div class="stat-label">漏单</div>
      </div>
      <div class="stat">
        <div class="stat-value">N倍</div>
        <div class="stat-label">发票效率</div>
      </div>
      <div class="stat">
        <div class="stat-value">数小时</div>
        <div class="stat-label">原需1周</div>
      </div>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

## 背景：<em>一家增长中的经销商的运营瓶颈</em>

该公司是新加坡本地建材经销商，主要服务建筑承包商和工程公司，产品涵盖结构建材、装修材料和特种建材等多个品类。客户沟通以 WhatsApp 和企业微信为主，业务高峰期每日需处理大量询价、报价、下单及发票请求。

公司正处于许多中型经销商都会面临的关键转折点：业务在增长，但支撑业务运转的后台运营能力并未同步扩展。每一段新的承包商合作关系都意味着更多消息需要分拣、更多发票需要处理、更多工程量需要估算。团队每天把大量时间花在数据录入和消息监控上，而非真正创造价值的客户关系维护和订单跟进。

让情况尤为紧迫的是新加坡建材供应市场的竞争逻辑。在建材行业，速度就是差异化竞争力。承包商通常会同时向三四家经销商发送询价，第一个给出准确报价的几乎总能拿到订单。响应速度落后不仅意味着效率低下——更直接等于丢失收入。

</div>

<div class="case-section">

## 挑战：<em>三重瓶颈相互叠加</em>

该经销商面临三个相互关联的运营瓶颈，它们彼此强化，形成了一个持续丢失商机、成本不断攀升的恶性循环。

首先，**消息积压**已经到了不可控的程度。每天 200+ 条 WhatsApp 消息涌入——询价、确认订单、物流跟踪、售后咨询——团队永远处于追赶状态。人工逐条审阅意味着消息可能被搁置数小时不回复，而每一条被漏掉的询价都直接流向了响应更快的竞争对手。

其次，**发票处理**撞上了硬性天花板。人工录入将日处理量限制在大约 30 张，无论需求多大都无法突破。旺季时积压会持续数天，延误客户回款周期，给现金流带来压力。即使安排加班也无法实质性改善，因为瓶颈在于人工流程本身。

第三，**工程量清单（QS）外包流程**既昂贵又缓慢。每次估算都需要聘请外部工料测量师，费用 SGD 3,000 至 5,000，交付周期 5 到 7 个工作日。对于一家靠快速报价赢单的企业来说，等一周才能拿到成本估算在竞争上是完全不可接受的。

</div>

<div class="case-section">

## 解决方案：<em>一体化 AI 能力层</em>

COCO 为该经销商搭建了覆盖前端客户沟通、发票处理和工程量估算三个核心场景的一体化 AI 能力层。不是部署三个独立的点状解决方案，而是交付一个跨三条工作流共享上下文的统一 AI 系统。

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">💬</div>
    <div class="time-badge">实时监控</div>
    <h3>WhatsApp + 企业微信意图识别</h3>
    <p>AI 实时监听 WhatsApp 和企业微信的客户消息，自动识别每条消息的意图：询价、下单、催单或售后。标准化查询——库存、报价、交货期——由 AI 在数秒内直接回复。复杂需求则自动标记并附完整上下文推送给对应业务人员。每一条消息都有响应，近乎消除漏单。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🧾</div>
    <div class="time-badge">OCR 自动化</div>
    <h3>发票处理的机器速度</h3>
    <p>客户发来的发票图片或 PDF 经 AI OCR 自动识别，提取关键字段：品名、数量、单价、总额。结构化数据直接进入下游系统。单张发票处理时间从人工的约 10 分钟缩短至秒级，日处理量不再有上限。旺季积压成为过去式。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">📐</div>
    <div class="time-badge">多模态分析</div>
    <h3>AI 驱动的工程量估算</h3>
    <p>客户上传工程图纸、现场照片或文字描述，AI 基于多模态理解自动完成建材用量估算和初步成本报价。完全取代原有的 QS 外包流程——既消除了每次数千新元的费用，又消除了让公司在竞争中处于劣势的一周等待时间。</p>
  </div>
</div>

三项能力作为一个统一系统协同运作。一条 WhatsApp 询价可以触发自动工程量估算，估算结果直接生成发票——全程无需人工在系统或人员之间手动交接。

</div>

<div class="case-section">

## 成果

三个运营维度的效果立竿见影且可量化：消息响应时间从数小时缩短到秒级，发票处理量突破日处理上限，工程量清单交付周期从一个工作周压缩到数小时。

数字之外更深层的变化在于团队的工作方式发生了质变。AI 承接了高频重复的事务性工作后，运营团队得以将精力集中在复杂项目跟进、客户关系维护和战略客户管理上——这些才是真正驱动利润和长期增长的工作。

<div class="results-grid">
  <div class="result-card">
    <div class="result-number">~0</div>
    <div class="result-desc">漏单<br/><small>每一条 WhatsApp 询价均被捕获并响应</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">N倍</div>
    <div class="result-desc">发票处理效率<br/><small>日处理上限彻底打破，旺季不再积压</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">数小时</div>
    <div class="result-desc">QS 交付周期<br/><small>原需 5-7 个工作日，单次节省 SGD 3-5K</small></div>
  </div>
</div>

仅消除 QS 外包一项的年化节省就代表了可观的回报，但更大的业务影响来自那些不再流失给更快竞争对手的订单。

</div>

<div class="case-section">

<div class="case-quote">
  <p>建材行业的竞争很简单：谁先报价，谁先拿单。AI 让我们的报价速度从行业末尾变成了行业前列。</p>
</div>

</div>

<div class="case-section">
  <div class="case-cta">
    <h2>让 AI 改变您的运营方式</h2>
    <p>从消息分拣到智能报价——从一次对话开始</p>
    <a href="https://icoco.ai" class="cta-btn">开始使用 COCO</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>更多客户案例</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="/zh/case-studies/shipping-group">
      <div class="blog-related-card-img">🚢</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例</div>
        <div class="blog-related-card-title">头部集装箱海运集团 — AI 协作网络</div>
        <div class="blog-related-card-desc">10+ AI 员工，零可见性。COCO Workspace 如何打破黑盒，将孤立的 Agent 变成协同网络。</div>
      </div>
    </a>
    <a class="blog-related-card" href="/zh/case-studies/tea-brand-franchise">
      <div class="blog-related-card-img">🍵</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例</div>
        <div class="blog-related-card-title">头部茶饮品牌 — 全球连锁加盟智能化</div>
        <div class="blog-related-card-desc">AI 驱动的全球加盟运营——从门店审计到供应链协调，覆盖数百家门店。</div>
      </div>
    </a>
    <a class="blog-related-card" href="/zh/case-studies/game-studio">
      <div class="blog-related-card-img">🎮</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例</div>
        <div class="blog-related-card-title">游戏工作室 — AI 原生组织实验</div>
        <div class="blog-related-card-desc">10 人独立工作室的 AI 原生实践，将 AI 员工嵌入游戏开发的每一个环节。</div>
      </div>
    </a>
    <a class="blog-related-card" href="/zh/case-studies/fmcg-collaboration">
      <div class="blog-related-card-img">🛒</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例</div>
        <div class="blog-related-card-title">顶级快消品公司 — 跨市场协作自动化</div>
        <div class="blog-related-card-desc">头部快消企业如何通过 AI 驱动的协调能力实现跨市场协作自动化。</div>
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
  // Pipeline cards get their own animation class
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
