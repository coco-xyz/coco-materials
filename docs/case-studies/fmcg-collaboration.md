---
layout: page
title: "Top FMCG Company × COCO AI — Cross-Market Collaboration Automation | COCO"
description: "How a top FMCG company operating across 10+ Southeast Asian markets used COCO AI inside Lark to auto-dispatch tasks from 5–6 chat groups, enable real-time multilingual coordination, and pass a rigorous three-department security review with private GCP Singapore deployment."
head:
  - - meta
    - property: og:title
      content: "Top FMCG Company × COCO AI — Cross-Market Collaboration Automation"
  - - meta
    - property: og:description
      content: "How a top FMCG company operating across 10+ Southeast Asian markets used COCO AI inside Lark to auto-dispatch tasks from 5–6 chat groups, enable real-time multilingual coordination, and pass a rigorous three-department security review with private GCP Singapore deployment."
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
    <h1>Top FMCG Company<br/><em>Cross-Market Collaboration, Automated</em></h1>
    <p class="subtitle">5-6 Lark groups, 10+ Southeast Asian markets, multilingual chaos.<br/>COCO AI took over the coordination layer so critical tasks no longer sink into the message stream.</p>
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-value">10+</div>
        <div class="stat-label">Markets</div>
      </div>
      <div class="stat">
        <div class="stat-value">5-6</div>
        <div class="stat-label">Lark Groups</div>
      </div>
      <div class="stat">
        <div class="stat-value">3-Dept</div>
        <div class="stat-label">Security Review</div>
      </div>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

## Background: <em>A Global Giant's Regional Challenge</em>

This company is the Southeast Asian regional operating entity of a global top-tier FMCG group, with business operations spanning more than 10 markets across the region. Teams across Thailand, Vietnam, Malaysia, Indonesia, the Philippines, and beyond all rely on Lark as their primary collaboration platform. The sheer diversity of local languages, time zones, and business rhythms across these markets had long made cross-team promotional coordination one of the most persistent bottlenecks for operational efficiency.

Promotional campaigns in the FMCG world are time-sensitive by nature. A product launch in Bangkok requires coordinated pricing approvals from regional HQ, localized marketing assets from the creative team in Kuala Lumpur, and compliance sign-off from the legal team in Singapore — all happening simultaneously across different Lark groups and in different languages. Under the old model, a single campaign approval could involve dozens of manual message forwards, @-mentions that went unnoticed, and follow-up threads that diverged across groups without any unified tracking.

The company had explored off-the-shelf workflow tools, but none could satisfy the intersection of three hard requirements: deep Lark integration (their non-negotiable platform), real-time multilingual support, and enterprise-grade data sovereignty compliance. They needed a solution that lived inside Lark, understood multiple languages natively, and could be privately deployed to meet the group's global security standards.

</div>

<div class="case-section">

## Solution: <em>AI Employee Inside Lark</em>

COCO deployed an AI employee directly inside the company's Lark workspace, with a **private deployment on GCP Singapore** to satisfy data sovereignty requirements — successfully passing a joint security review by three departments (IT Security, Legal, and Data Governance). The solution operates as three interconnected capabilities that transform the company's cross-market coordination from a manual relay race into an automated, intelligent dispatch system.

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">🎯</div>
    <div class="time-badge">Real-Time Monitoring</div>
    <h3>Intent Recognition & Task Dispatch</h3>
    <p>The AI monitors messages across multiple Lark groups in real time, automatically detecting approval requests, task instructions, information queries, and other structured intents. Identified tasks are extracted, structured, and routed to the appropriate owner or team — no manual forwarding required. Critical items that would previously have been buried under hundreds of daily messages are now surfaced and assigned within seconds.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🌏</div>
    <div class="time-badge">Multilingual</div>
    <h3>Real-Time Multilingual Translation</h3>
    <p>Messages are translated in real time across Mandarin, English, Thai, Bahasa Malay, Vietnamese, and other major Southeast Asian languages. All team members receive communications in a consistent language format, eliminating execution errors caused by translation ambiguity. A Thai market manager can write in Thai, and the Singapore HQ team reads it in English — instantly, without any human translator in the loop.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">📋</div>
    <div class="time-badge">Automated Workflow</div>
    <h3>Promotional Approval Flow Automation</h3>
    <p>Standardized approval workflows trigger automatically when the AI detects a promotion-related request, including notifications to approvers, deadline reminders, escalation alerts, and archiving of completed approvals. The full process is completed within Lark — no context switching to external systems required. What used to take days of manual follow-up now flows through a predictable, auditable pipeline.</p>
  </div>
</div>

</div>

<div class="case-section">

## Results

The impact of COCO AI's deployment was felt almost immediately across the organization. The AI auto-dispatch system replaced the previous manual group-relay coordination model, delivering a transformative improvement in coordination efficiency. Tasks that once required multiple forwards and manual tracking across 5-6 groups are now automatically identified, structured, and routed to the right person — reducing coordination overhead by an order of magnitude.

The deployment cleared a **three-department joint security review**, satisfying all enterprise compliance requirements including data residency in Singapore, encryption standards, and access control policies. This was not a rubber-stamp process — it involved months of rigorous evaluation by IT Security, Legal, and Data Governance teams, setting a precedent for AI adoption across the broader global organization.

Cross-market information accuracy improved substantially, reducing rework caused by miscommunication and translation errors. Teams that previously operated in language silos now collaborate seamlessly, with the AI ensuring every message is understood correctly regardless of the sender's language. Critical approval tasks are no longer lost in message streams — every workflow is traceable, nudgeable, and closed-loop.

<div class="results-grid">
  <div class="result-card">
    <div class="result-number">10+</div>
    <div class="result-desc">Markets Unified<br/><small>Seamless cross-market coordination</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">3-Dept</div>
    <div class="result-desc">Security Clearance<br/><small>IT, Legal & Data Governance approved</small></div>
  </div>
  <div class="result-card">
    <div class="result-number">0</div>
    <div class="result-desc">Lost Approval Tasks<br/><small>Every workflow traceable & closed-loop</small></div>
  </div>
</div>

</div>

<div class="case-section">

<div class="case-quote">
  <p>For large enterprises, the biggest barrier to AI adoption isn't the technology — it's compliance. Private deployment that slots seamlessly into existing tools is the only path that actually lands.</p>
</div>

</div>

<div class="case-section">

## Why This Case Matters

This case represents a critical proof point for enterprise AI adoption in highly regulated, multi-market environments. The FMCG industry operates at a pace where hours of coordination delay can mean missed shelf windows and lost revenue. By embedding AI directly into the company's existing Lark infrastructure — rather than asking teams to adopt yet another tool — COCO eliminated the adoption barrier that kills most enterprise AI initiatives before they start.

What makes this deployment particularly significant is the security validation. For global enterprises, passing a three-department security review is often the hardest milestone in any technology adoption. COCO's private GCP Singapore deployment model proved that enterprise-grade AI automation doesn't have to compromise on data sovereignty or compliance — it can meet the most stringent standards while still delivering the speed and flexibility that operations teams need. This precedent opens the door for AI-driven coordination across the company's global operations, not just Southeast Asia.

</div>

<div class="case-section">
  <div class="case-cta">
    <h2>Bring AI to Your Enterprise Collaboration</h2>
    <p>Like this FMCG leader, start with the tools your team already uses</p>
    <a href="https://icoco.ai" class="cta-btn">开始使用 COCO</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>More Case Studies</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="/case-studies/tea-brand-franchise">
      <div class="blog-related-card-img">🍵</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">Tea Chain Franchise Intelligence at Scale</div>
        <div class="blog-related-card-desc">~60,000 stores, 7x24 multilingual coverage, 60-80% auto-reply rate for franchise inquiries across Southeast Asia.</div>
      </div>
    </a>
    <a class="blog-related-card" href="/case-studies/shipping-group">
      <div class="blog-related-card-img">🚢</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">Shipping Group Operations Automation</div>
        <div class="blog-related-card-desc">AI-powered logistics coordination and documentation processing for a major shipping enterprise.</div>
      </div>
    </a>
    <a class="blog-related-card" href="/case-studies/regtech-company">
      <div class="blog-related-card-img">⚖️</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">RegTech Compliance Automation</div>
        <div class="blog-related-card-desc">Automated regulatory monitoring and compliance reporting for a fast-growing RegTech company.</div>
      </div>
    </a>
    <a class="blog-related-card" href="/case-studies/building-materials">
      <div class="blog-related-card-img">🏗️</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">Singapore Building Materials Dealer — From Missed Orders to Smart Quoting</div>
        <div class="blog-related-card-desc">200+ daily messages, invoice bottlenecks, week-long QS quoting — AI solved all three in one deployment.</div>
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
