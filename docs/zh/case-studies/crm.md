---
layout: page
title: "COCO CRM — AI Agent 企业自动化搭建与运营的 CRM 系统"
description: "一套由 COCO AI Agent 从零设计、搭建并每天自动运营的 CRM 系统。企业AI自动化的真实案例：数字员工替代人工录入，试用转化率达 33%，每日维护零人工介入。"
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

<div class="project-overview">
  <div class="po-field">
    <span class="po-icon">🏢</span>
    <div class="po-content">
      <span class="po-label">行业</span>
      <span class="po-value">SaaS / 早期创业</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">👥</span>
    <div class="po-content">
      <span class="po-label">团队规模</span>
      <span class="po-value">5 人内部团队</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">⚡</span>
    <div class="po-content">
      <span class="po-label">搭建时间</span>
      <span class="po-value">1 个晚上</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🔧</span>
    <div class="po-content">
      <span class="po-label">核心工具</span>
      <span class="po-value">飞书多维表格 + Stripe</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📊</span>
    <div class="po-content">
      <span class="po-label">自动化范围</span>
      <span class="po-value">试用巡检 · 支付同步 · 月度看板</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📈</span>
    <div class="po-content">
      <span class="po-label">转化率</span>
      <span class="po-value">33%（行业均值 3 倍）</span>
    </div>
  </div>
</div>

## 背景：<em>用自己的产品运营自己</em>

COCO 团队需要追踪从注册到试用到付费的完整销售流程。他们手头有 27 位试用和付费客户，需要记录每个人的状态、套餐、到期时间，同时追踪每天的支付情况，并且在试用快到期的时候主动跟进。传统做法是：买一个 SaaS CRM、花几周配置、再安排人每天维护。

他们选了另一条路——让 AI Agent **Zylos** 直接设计并搭建整套系统。

从需求描述到 7 张飞书多维表格全部就位：**一个晚上**。

对于大多数早期创业公司来说，CRM 是一件长期拖延的项目——Salesforce 和 HubSpot 太贵，用 Excel 手动管理太容易出错，找外包定制开发太耗时间。这不是创始人不想要好的 CRM，是传统方式的成本结构对早期团队根本不友好。COCO 的解法是彻底绕开这个三角困境：把 CRM 的设计、搭建、维护权全部交给 AI Agent 数字员工来执行。这不是"AI 辅助"，而是真正的企业 AI 自动化——AI 是 CRM 的设计者，也是每天 0 成本运营它的维护者。

这个案例之所以特别，在于它是 COCO 在用自己的产品运营自己的公司。Zylos 同时扮演两个角色：既是 COCO 的 AI Agent 产品，也是 COCO 内部运营的数字员工。这种"dogfooding"有独特的证明价值——如果 AI 能在信任门槛最高的地方（自己公司的核心业务数据）跑起来，它就能在你的组织里跑起来。这不是展示给别人看的演示案例，这是 COCO 每天真实依赖的生产系统。

最终结果说明了一切：27 人试用，9 人付费，转化率 33%，约为 SaaS 行业平均水平的三倍。这个数字背后，有一部分原因直接来自 CRM 系统的自动化运营——每天早上 10 点精准推送的试用到期提醒，确保了跟进动作不会因为繁忙被忘记；实时的 Stripe 支付同步，确保了付款用户立刻得到对应的服务激活。

<div class="video-showcase">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/u7o-1GCO89E" title="COCO CRM 自动化演示" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

</div>

<div class="case-section">

## 每天自动运转的 <em>三条流水线</em>

企业 AI 自动化的价值，不是执行某个单一任务，而是把原本需要每天人工重复执行的整套流程转化为可靠运行的自动化管道。COCO 的 CRM 数字员工工作流由三条并行流水线构成：每日试用巡检、实时支付同步、月度看板重建。

想象这套系统不存在时的日常：每天早上，有人需要打开飞书表格，逐个检查 27 个用户的试用状态，手动标记今天到期的是谁，写一封"今日跟进名单"发到群里。每当 Stripe 收到支付通知，有人需要登录后台确认，然后手动在表格里把对应用户从"试用"改为"付费"，再更新相关字段。每个月初，有人需要重新整理一份状态看板，确保团队在新的一个月开始时对用户全貌有清晰认知。这三件事单独拿出来任何一件都不难，但加在一起，每天需要的不止是时间，更需要专注力——而这对早期团队来说是最稀缺的资源。

COCO AI 用调度任务（Scheduled Tasks）完全替代了这些人工操作。每条流水线的触发时间、执行逻辑、通知格式都经过精心设计，让团队始终掌握最新状态而无需任何主动查询。这是自动化与人工最本质的区别：自动化系统不会因为今天特别忙而跳过检查，不会因为周末而延误更新，不会因为分心而漏掉一个今天到期的关键用户。

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

这套 CRM 系统由 7 张飞书多维表格构成，每张表格有清晰的职责边界。从用户全量档案、去重付费用户、月度日历看板，到 SOP 操作手册、客户 FAQ 知识库、实例技术状态追踪、潜在客户池——整个 CRM 不是随机拼凑，而是经过系统架构设计、由 AI Agent Zylos 在一晚上从零完成的企业级数据管理体系。

与市面上现成的 SaaS CRM 相比，这套方案的核心优势在于它是完全贴合 COCO 业务场景定制的：表格结构、更新逻辑、通知规则都与实际运营流程完美对应。每一次 Stripe 支付触发的自动录入，每一次试用到期的自动提醒，都在无需人工干预的情况下精准执行。这正是企业 AI 自动化与传统 CRM 工具最本质的区别。

<div class="arch-table-wrapper">
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

试用转化率 33% 是 SaaS 行业平均水平的三倍以上——这并非偶然。当团队每天早上 10 点收到精准的试用到期巡检报告，知道今天谁要跟进、谁已经过期、谁在关键节点，跟进效率自然提升。COCO AI 数字员工的价值不只是节省了手动录入的时间，更重要的是它把"信息延迟"这个隐形成本彻底消除了。

100% 自动化录入意味着从 Stripe 收到支付通知的那一刻起，CRM 就已经更新完毕。没有"等一下我待会儿录"，没有漏录，没有数据不一致。对于一个快速增长的 SaaS 团队来说，实时准确的客户数据是所有决策的基础——而这个基础现在由 AI 数字员工 7×24 小时自动维护。

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

在企业 AI 自动化的实践中，CRM 往往是最直接的切入点，原因在于它覆盖销售、客户成功、运营多个职能，日常工作中充满重复性的数据录入和状态更新。每一次用户状态变化、每一笔支付到账、每一个试用到期节点，都需要有人注意到并采取行动。传统的解法是雇人来做，或者购买昂贵的自动化工具。COCO AI 的解法是直接用 AI Agent 数字员工把这条链路端到端承包。

更重要的是，这套系统揭示了 AI 驱动的 CRM 与传统 CRM 的根本区别：传统 CRM 是数据库，等着人去更新；AI 驱动的 CRM 是一个会自己跑的数字员工，主动监控状态、主动执行更新、主动推送提醒。这不是同一件事的两个版本，这是两种完全不同的运营哲学。

对于资源有限的创业公司和中小企业而言，这是企业 AI 自动化能带来的最实际的业务价值：不需要投入大量前期成本搭建一套复杂系统，只需要描述你的业务需求，AI 帮你设计、搭建、运营——整套系统可以在一个晚上从零到上线。

</div>

<div class="case-section">

## 常见问题

### Q: COCO AI Agent 搭建 CRM 系统需要多长时间？

从提出需求到 7 张飞书多维表格全部就位，COCO 团队的 AI Agent Zylos 花了一个晚上完成整套 CRM 系统的设计与搭建。对比传统方式（购买 SaaS CRM 需要数周配置），企业 AI 自动化在初始搭建速度上有数量级的优势。

### Q: 这套 CRM 自动化系统每天需要人工介入吗？

几乎不需要。三条自动化流水线（试用巡检、支付同步、月度看板）全部由调度任务驱动，自动执行。人工的参与仅限于审核通知后的业务决策，例如决定是否跟进某个到期用户——而不是数据录入或状态维护本身。

### Q: AI 数字员工如何保证 CRM 数据的准确性？

COCO AI Agent 通过与 Stripe 支付数据进行交叉验证来确保数据准确性。每当 Stripe 支付通知到达，Zylos 会自动核对 CRM 现有记录，检查邮箱和员工 ID 是否已存在，防止重复录入。SOP 中明确规定了企业订阅与个人订阅的识别规则，进一步提高数据质量。

### Q: 这套方案适合哪些类型的企业？

任何依赖订阅制收入模式的 SaaS 公司都高度适用。特别是处于快速增长阶段、用户规模在数十到数百之间、运营团队人手有限的创业公司——这正是传统 CRM 工具性价比最低、但手动管理压力又最大的阶段。COCO AI 企业自动化可以以极低的成本填补这一运营空白。

### Q: COCO AI 的 CRM 自动化与市面上现成 CRM 工具（如 Salesforce、HubSpot）相比有什么优劣势？

优势在于完全定制化、成本极低、与现有工具（飞书）深度集成。现成 CRM 的优势在于功能更完整、有客户支持。选择取决于业务阶段：早期团队用 COCO AI 数字员工搭建轻量 CRM 是性价比最高的方案；当业务规模到一定体量后，两者也可以并存——用 COCO AI Agent 处理日常自动化任务，用专业 CRM 管理复杂销售流程。

### Q: 如何让 COCO AI Agent 自动运营我们公司的 CRM？

只需访问 coco.xyz 注册试用，向 AI Agent 描述你的业务需求和现有数据结构，它会帮你设计表格架构、搭建自动化流程、配置触发规则。整个过程不需要编程背景，也不需要 CRM 专业知识——用自然语言描述你想要什么即可。

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
