---
layout: page
title: "社媒与 BD 自动化 — 两家公司，同一个突破"
description: "从一条 prompt 到完整运营模型。AI 扛产量，人管策略。"
head:
  - - meta
    - property: og:title
      content: "Social Media & BD Automation — Two Companies, One Breakthrough"
  - - meta
    - property: og:description
      content: "From a single prompt to a complete operations model. AI handles volume, humans handle strategy."
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

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
.case-hero .badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(92, 197, 197, 0.15);
  color: #5CC5C5;
  border: 1px solid rgba(92, 197, 197, 0.3);
  margin-bottom: 24px;
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
.case-hero .hero-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.case-hero .tag {
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
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
.case-section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 40px 0 12px;
  color: var(--vp-c-text-1);
}
.case-section p {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

/* Company cards */
.company-duo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin: 32px 0;
}
.company-card {
  padding: 32px 28px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}
.company-card:hover {
  border-color: #5CC5C5;
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(92, 197, 197, 0.08);
}
.company-card .card-label {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 16px;
}
.company-card .card-label.compliance {
  background: rgba(179, 136, 217, 0.12);
  color: #B388D9;
}
.company-card .card-label.media {
  background: rgba(168, 216, 185, 0.12);
  color: #A8D8B9;
}
.company-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}
.company-card .card-meta {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-bottom: 16px;
}
.company-card p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Workflow blocks */
.workflow-section {
  margin: 40px 0;
}
.workflow-block {
  position: relative;
  padding: 24px 24px 24px 20px;
  margin: 16px 0;
  border-radius: 12px;
  border-left: 4px solid;
  background: var(--vp-c-bg-soft);
}
.workflow-block.marketing { border-left-color: #5CC5C5; }
.workflow-block.bd { border-left-color: #B388D9; }
.workflow-block.sales { border-left-color: #FF7B7B; }
.workflow-block.sop { border-left-color: #FF7B7B; }
.workflow-block h4 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: var(--vp-c-text-1);
}
.workflow-block ul {
  margin: 0;
  padding-left: 20px;
}
.workflow-block li {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin-bottom: 4px;
}

/* Daily SOP timeline */
.sop-timeline {
  position: relative;
  padding-left: 32px;
  margin: 32px 0;
}
.sop-timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, #F5C542, #FF5096);
  border-radius: 1px;
}
.sop-item {
  position: relative;
  padding: 12px 0;
}
.sop-item::before {
  content: '';
  position: absolute;
  left: -27px;
  top: 18px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5CC5C5;
  border: 2px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px #5CC5C5;
}
.sop-item .sop-time {
  font-size: 0.85rem;
  font-weight: 700;
  color: #5CC5C5;
  font-family: 'Plus Jakarta Sans', monospace;
}
.sop-item .sop-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-top: 2px;
}

/* Progress bar */
.capability-bar {
  margin: 32px 0;
  padding: 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.capability-bar .bar-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}
.capability-bar .bar-track {
  height: 12px;
  border-radius: 6px;
  background: var(--vp-c-divider);
  overflow: hidden;
}
.capability-bar .bar-fill {
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(90deg, #5CC5C5, #A8D8B9);
  transition: width 1s ease;
}
.capability-bar .bar-note {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  margin-top: 8px;
}

/* Quote block */
.case-quote {
  position: relative;
  padding: 32px 32px 32px 48px;
  margin: 40px 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(92, 197, 197, 0.06), rgba(179, 136, 217, 0.04));
  border-left: 4px solid #F5C542;
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

/* Insight block */
.insight-block {
  padding: 28px 24px;
  margin: 40px 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(179, 136, 217, 0.06), rgba(168, 216, 185, 0.04));
  border: 1px solid var(--vp-c-divider);
}
.insight-block h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
}
.insight-block p {
  font-size: 0.98rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Publish visual */
.publish-visual {
  margin: 32px 0;
  padding: 32px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(26, 58, 74, 0.95), rgba(30, 77, 94, 0.95));
  text-align: center;
  color: #fff;
}
.publish-title {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
}
.publish-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.publish-source {
  padding: 16px 24px;
  border-radius: 14px;
  background: rgba(92, 197, 197, 0.15);
  border: 1px solid rgba(92, 197, 197, 0.3);
}
.publish-icon { font-size: 1.8rem; margin-bottom: 4px; }
.publish-label { font-size: 0.95rem; font-weight: 700; }
.publish-sub { font-size: 0.75rem; color: rgba(255, 255, 255, 0.5); }
.publish-arrows {
  display: flex;
  align-items: center;
}
.publish-line {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #F5C542, rgba(179, 136, 217, 0.6));
  position: relative;
}
.publish-line::after {
  content: '';
  position: absolute;
  right: -4px;
  top: -4px;
  width: 0;
  height: 0;
  border-left: 8px solid rgba(179, 136, 217, 0.6);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.publish-targets {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.publish-target {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-align: left;
}
.publish-target.tg { background: rgba(0, 136, 204, 0.15); }
.publish-target.tw { background: rgba(255, 255, 255, 0.06); }
.publish-target.nl { background: rgba(179, 136, 217, 0.15); }
.publish-target.dc { background: rgba(88, 101, 242, 0.15); }
.target-icon { margin-right: 6px; }
.publish-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.pub-tag {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 500;
  background: rgba(179, 136, 217, 0.1);
  color: rgba(168, 216, 185, 0.9);
  border: 1px solid rgba(179, 136, 217, 0.2);
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
    font-size: 1.5rem;
    margin-bottom: 12px;
    text-align: center;
  }
  .case-hero .subtitle {
    font-size: 0.9rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  .case-hero .subtitle br { display: none; }
  .case-hero .hero-tags {
    gap: 8px;
  }
  .case-hero .tag {
    font-size: 11px;
    padding: 4px 10px;
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
  .case-section h3 {
    font-size: 1.1rem;
    text-align: center;
  }
  .case-section p {
    font-size: 0.95rem;
    text-align: center;
  }
  .workflow-section, .workflow-block, .sop-timeline {
    text-align: left;
  }
  .company-duo {
    grid-template-columns: 1fr;
  }
  .company-card {
    padding: 24px 20px;
  }
  .workflow-block {
    padding: 18px 16px 18px 14px;
  }
  .sop-timeline {
    padding-left: 28px;
  }
  .case-quote {
    padding: 24px 20px 24px 36px;
  }
  .publish-flow { flex-direction: column; }
  .publish-line { width: 2px; height: 20px; background: linear-gradient(to bottom, #F5C542, rgba(179, 136, 217, 0.6)); }
  .publish-line::after { right: auto; top: auto; bottom: -4px; left: -4px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 8px solid rgba(179, 136, 217, 0.6); border-bottom: none; }
  .case-cta {
    padding: 40px 16px;
    margin: 32px -16px 0;
    border-radius: 16px;
  }
  .case-cta h2 {
    font-size: 1.4rem;
  }
  .capability-bar {
    padding: 18px 16px;
  }
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
  background: rgba(10, 22, 40, 0.55);
}
.case-cta > * {
  position: relative;
  z-index: 1;
}
.case-cta h2 {
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 12px;
}
.case-cta p {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 28px;
}
.case-cta .cta-btn {
  display: inline-block;
  padding: 14px 36px;
  border-radius: 999px;
  background: #5CC5C5;
  color: #1a1a1a;
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
.animate-on-scroll {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
.company-card {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.company-card.visible {
  opacity: 1;
  transform: translateY(0);
}
.company-card:nth-child(2) { transition-delay: 0.15s; }
.workflow-block {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.workflow-block.visible {
  opacity: 1;
  transform: translateX(0);
}
.workflow-block:nth-child(2) { transition-delay: 0.12s; }
.workflow-block:nth-child(3) { transition-delay: 0.24s; }
.sop-item {
  opacity: 0;
  transform: translateX(-16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.sop-item.visible {
  opacity: 1;
  transform: translateX(0);
}
.sop-item:nth-child(2) { transition-delay: 0.1s; }
.sop-item:nth-child(3) { transition-delay: 0.2s; }
.sop-item:nth-child(4) { transition-delay: 0.3s; }

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

/* Dark mode */
.dark .company-card {
  background: rgba(255, 255, 255, 0.03);
}
.dark .workflow-block {
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
@media (max-width: 768px) {
  .blog-meta {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  .blog-related-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="case-hero">
  <div class="hero-text-box">
    <h1>社媒与 BD 自动化<br/><em>两家公司，同一个突破</em></h1>
    <p class="subtitle">从一条 prompt 到完整运营模型。<br/>AI 扛产量，人管策略。谁先发布、谁先触达，谁就赢。</p>
    <div class="hero-tags">
      <span class="tag">KOL 监控</span>
      <span class="tag">内容引擎</span>
      <span class="tag">BD 流水线</span>
      <span class="tag">定时发布</span>
      <span class="tag">CRM 管理</span>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

## 两家公司，<em>同一个痛点</em>

<div class="company-duo">
  <div class="company-card">
    <div class="card-label compliance">科技合规</div>
    <h3>某科技合规公司</h3>
    <div class="card-meta">BD 和市场负责人 · 一人扛全部</div>
    <p>工作覆盖 KOL 监控、内容生产、会议 BD、线索管理——这个范围通常需要好几个专岗。她带着一个具体需求来找 COCO。</p>
  </div>
  <div class="company-card">
    <div class="card-label media">科技媒体</div>
    <h3>某新加坡科技媒体</h3>
    <div class="card-meta">< 20 人团队 · 内容压力巨大</div>
    <p>每天需要在多个社交平台和社群发布行业资讯、分析评论和原创内容，但团队人手有限。15 人要干出 50 人的活。</p>
  </div>
</div>

瓶颈是一样的：**更多内容要出、更多渠道要覆盖、人不够用。**

<div class="video-showcase">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/jFGNry0BohA" title="COCO 社媒自动化演示" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

</div>

<div class="case-section">

## 那个 <em>改变一切</em> 的 Demo

她发了一条消息：

<div class="case-quote">
  <p>找一下某项目关注列表里有哪些 KOL 最近发了新闻，最近两小时的</p>
</div>

COCO 扫描了 **325 个关注账号**，找出 **4 条近期 KOL 推文**，附带直链，结果里包括多个头部账号（百万级粉丝）——**几分钟内完成**，不需要人工刷 Twitter。

这一个交互打开了一场更大的对话。

</div>

<div class="case-section">

## 从 prompt 到 <em>完整运营模型</em>

COCO 和她一起设计了覆盖市场、BD、销售运营的全套工作流：

<div class="workflow-section">
  <div class="workflow-block marketing">
    <h4>📡 市场方向</h4>
    <ul>
      <li>7×24 小时 KOL 和行业新闻监控，每 2 小时推送摘要</li>
      <li>热点爆发时即时预警</li>
      <li>每周 3 篇长文（调研 → 初稿 → 修改闭环）</li>
      <li>每月行业报告自动生成</li>
      <li>爆款内容反向拆解：分析为什么火，提炼规律复用</li>
    </ul>
  </div>
  <div class="workflow-block bd">
    <h4>🤝 BD 方向</h4>
    <ul>
      <li>会议雷达：按相关性筛选近期重要会议</li>
      <li>线索打分：账号画像 + 近期动态 + 契合度信号</li>
      <li>Pitch Deck 版本管理和背景跟踪</li>
    </ul>
  </div>
  <div class="workflow-block sales">
    <h4>💰 销售运营</h4>
    <ul>
      <li>每日开拓：10+ 新联系人，附上联系理由</li>
      <li>CRM 全生命周期管理：追踪线索进展、下一步动作、跟进时机</li>
    </ul>
  </div>
</div>

</div>

<div class="case-section">

## 每日 <em>SOP</em>

<div class="sop-timeline">
  <div class="sop-item">
    <div class="sop-time">9:00 AM</div>
    <div class="sop-desc">行业快讯 Briefing — 过夜大事件、竞品动态、市场情绪</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">11:00 AM</div>
    <div class="sop-desc">今日开拓名单 + 切入角度 — 10+ 新联系人，理由和话术</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">3:00 PM</div>
    <div class="sop-desc">基于今天热点的内容选题推荐 — 附带角度建议和参考素材</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">每周/每月</div>
    <div class="sop-desc">自动生成复盘报告 — 内容表现、线索转化、开拓效率</div>
  </div>
</div>

</div>

<div class="case-section">

## 媒体团队的 <em>半自动化发布</em>

新加坡的科技媒体小团队接入 COCO 后：

- AI 数字员工自动生成**符合各平台调性**的内容——Telegram 群、Twitter、Newsletter 各不相同
- 定时发布到社群和社交媒体渠道
- 内容覆盖快讯摘要、深度分析、社区互动话术

**结果：** 从内容生产到发布实现半自动化。团队从疲于奔命赶内容，变成**专注编辑策略**。

<div class="publish-visual">
  <div class="publish-title">多平台定时发布流</div>
  <div class="publish-flow">
    <div class="publish-source">
      <div class="publish-icon">🤖</div>
      <div class="publish-label">COCO AI</div>
      <div class="publish-sub">内容引擎</div>
    </div>
    <div class="publish-arrows">
      <div class="publish-line"></div>
    </div>
    <div class="publish-targets">
      <div class="publish-target tg"><span class="target-icon">✈️</span> Telegram 群</div>
      <div class="publish-target tw"><span class="target-icon">𝕏</span> Twitter/X</div>
      <div class="publish-target nl"><span class="target-icon">📧</span> Newsletter</div>
      <div class="publish-target dc"><span class="target-icon">💬</span> Discord</div>
    </div>
  </div>
  <div class="publish-tags">
    <span class="pub-tag">快讯摘要</span>
    <span class="pub-tag">深度分析</span>
    <span class="pub-tag">社区互动</span>
    <span class="pub-tag">定时发布</span>
  </div>
</div>

</div>

<div class="case-section">

## 能力落地评估

<div class="capability-bar">
  <div class="bar-label">
    <span>可立即落地</span>
    <span><strong>60–70%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 65%"></div>
  </div>
  <div class="bar-note">内容生成、KOL 监控、分析报告、发布调度——马上跑起来</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>接入 API 后解锁</span>
    <span><strong>30–40%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 35%; background: linear-gradient(90deg, #B388D9, #9B6CC4)"></div>
  </div>
  <div class="bar-note">客户接入自己的 Twitter API、CRM 系统等凭证后即可启用</div>
</div>

</div>

<div class="case-section">

<div class="case-quote">
  <p>我来的时候只想自动化一件事。聊完之后，我带走了整个岗位的完整运营模型。我没想到能拿到一份 SOP。</p>
</div>

</div>

<div class="case-section">

<div class="insight-block">
  <h3>两个案例放在一起看</h3>
  <p>无论你是合规公司里一个人扛起 BD 和市场的负责人，还是小媒体团队想覆盖整个行业，COCO 的解法是一样的——<strong>AI 扛产量，人管策略</strong>。谁先发布、谁先触达对的人，谁就赢。</p>
</div>

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
    <h2>让 AI 接管你的内容产量</h2>
    <p>从一条消息开始，构建完整运营模型</p>
    <a href="https://coco.xyz" class="cta-btn">开始试用 COCO</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>更多案例</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="/zh/case-studies/crm">
      <div class="blog-related-card-img">📊</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">COCO CRM — AI 搭建，AI 运营</div>
        <div class="blog-related-card-desc">一套由 AI Agent 从零设计、搭建并每天自动运营的 CRM 系统。</div>
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
  document.querySelectorAll('.case-section, .company-card, .workflow-block, .sop-item, .publish-visual, .capability-bar, .case-quote, .insight-block, .case-cta').forEach(el => {
    el.classList.add('animate-on-scroll')
    observer.observe(el)
  })
  // Cards and blocks get their own animation
  document.querySelectorAll('.company-card, .workflow-block, .sop-item').forEach(el => {
    el.classList.remove('animate-on-scroll')
    observer.observe(el)
  })
})
</script>
