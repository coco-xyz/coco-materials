---
layout: page
title: "Social Media & BD Automation — Two Companies, One Breakthrough"
description: "From a single prompt to a complete operations model. AI handles volume, humans handle strategy."
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

/* ===== Premium Font ===== */
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
    <h1>Social Media & BD<br/><em>Two Companies, One Breakthrough</em></h1>
    <p class="subtitle">From a single prompt to a complete operations model.<br/>AI handles volume, humans handle strategy. First to publish wins.</p>
    <div class="hero-tags">
      <span class="tag">KOL Monitoring</span>
      <span class="tag">Content Engine</span>
      <span class="tag">BD Pipeline</span>
      <span class="tag">Scheduled Publishing</span>
      <span class="tag">CRM Management</span>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

## Two Companies, <em>One Pain Point</em>

<div class="company-duo">
  <div class="company-card">
    <div class="card-label compliance">Tech Compliance</div>
    <h3>A Tech Compliance Firm</h3>
    <div class="card-meta">BD & Marketing Lead · One Person Does Everything</div>
    <p>Her work spans KOL monitoring, content production, conference BD, and lead management — a scope that typically requires several dedicated roles. She came to COCO with a specific need.</p>
  </div>
  <div class="company-card">
    <div class="card-label media">Tech Media</div>
    <h3>A Singapore Tech Media Company</h3>
    <div class="card-meta">< 20 Person Team · Massive Content Pressure</div>
    <p>Every day they need to publish industry news, analysis, and original content across multiple social platforms and communities, but the team is stretched thin. 15 people doing the work of 50.</p>
  </div>
</div>

The bottleneck was the same: **more content to produce, more channels to cover, not enough people.**

<div class="video-showcase">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/jFGNry0BohA" title="COCO Social Media Automation Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

</div>

<div class="case-section">

## The Demo That <em>Changed Everything</em>

She sent one message:

<div class="case-quote">
  <p>Find which KOLs on a certain project's follow list have posted news recently — in the last two hours</p>
</div>

COCO scanned **325 followed accounts**, found **4 recent KOL posts** with direct links, including several top-tier accounts (millions of followers) — **completed in minutes**, no manual Twitter scrolling needed.

That single interaction opened up a much bigger conversation.

</div>

<div class="case-section">

## From Prompt to <em>Complete Operations Model</em>

COCO worked with her to design a full suite of workflows covering marketing, BD, and sales operations:

<div class="workflow-section">
  <div class="workflow-block marketing">
    <h4>📡 Marketing</h4>
    <ul>
      <li>24/7 KOL and industry news monitoring, summary push every 2 hours</li>
      <li>Instant alerts when hot topics break</li>
      <li>3 long-form articles per week (research → first draft → revision loop)</li>
      <li>Monthly industry reports auto-generated</li>
      <li>Viral content reverse engineering: analyze what works and extract reusable patterns</li>
    </ul>
  </div>
  <div class="workflow-block bd">
    <h4>🤝 Business Development</h4>
    <ul>
      <li>Conference radar: filter upcoming events by relevance</li>
      <li>Lead scoring: account profiles + recent activity + fit signals</li>
      <li>Pitch deck version control and background tracking</li>
    </ul>
  </div>
  <div class="workflow-block sales">
    <h4>💰 Sales Operations</h4>
    <ul>
      <li>Daily outreach: 10+ new contacts with personalized reasons</li>
      <li>Full-lifecycle CRM management: track lead progress, next actions, follow-up timing</li>
    </ul>
  </div>
</div>

</div>

<div class="case-section">

## Daily <em>SOP</em>

<div class="sop-timeline">
  <div class="sop-item">
    <div class="sop-time">9:00 AM</div>
    <div class="sop-desc">Industry Briefing — overnight events, competitor moves, market sentiment</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">11:00 AM</div>
    <div class="sop-desc">Today's outreach list + approach angles — 10+ new contacts with context and talking points</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">3:00 PM</div>
    <div class="sop-desc">Content topic recommendations based on today's trends — with angle suggestions and reference material</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">Weekly / Monthly</div>
    <div class="sop-desc">Auto-generated review reports — content performance, lead conversion, outreach efficiency</div>
  </div>
</div>

</div>

<div class="case-section">

## The Media Team's <em>Semi-Automated Publishing</em>

After the Singapore tech media team integrated COCO:

- AI digital employees auto-generate **platform-specific content** — Telegram groups, Twitter, Newsletters, each with its own tone
- Scheduled publishing to communities and social media channels
- Content covers news digests, deep analysis, and community engagement

**Result:** Content production to publishing became semi-automated. The team shifted from scrambling to produce content to **focusing on editorial strategy**.

<div class="publish-visual">
  <div class="publish-title">Multi-Platform Scheduled Publishing Flow</div>
  <div class="publish-flow">
    <div class="publish-source">
      <div class="publish-icon">🤖</div>
      <div class="publish-label">COCO AI</div>
      <div class="publish-sub">Content Engine</div>
    </div>
    <div class="publish-arrows">
      <div class="publish-line"></div>
    </div>
    <div class="publish-targets">
      <div class="publish-target tg"><span class="target-icon">✈️</span> Telegram Groups</div>
      <div class="publish-target tw"><span class="target-icon">𝕏</span> Twitter/X</div>
      <div class="publish-target nl"><span class="target-icon">📧</span> Newsletter</div>
      <div class="publish-target dc"><span class="target-icon">💬</span> Discord</div>
    </div>
  </div>
  <div class="publish-tags">
    <span class="pub-tag">News Digests</span>
    <span class="pub-tag">Deep Analysis</span>
    <span class="pub-tag">Community Engagement</span>
    <span class="pub-tag">Scheduled Publishing</span>
  </div>
</div>

</div>

<div class="case-section">

## Capability Assessment

<div class="capability-bar">
  <div class="bar-label">
    <span>Ready to Deploy Now</span>
    <span><strong>60–70%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 65%"></div>
  </div>
  <div class="bar-note">Content generation, KOL monitoring, analysis reports, publishing scheduling — ready to run immediately</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>Unlocked After API Integration</span>
    <span><strong>30–40%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 35%; background: linear-gradient(90deg, #B388D9, #9B6CC4)"></div>
  </div>
  <div class="bar-note">Enabled once clients connect their own Twitter API, CRM systems, and other credentials</div>
</div>

</div>

<div class="case-section">

<div class="case-quote">
  <p>I came in wanting to automate one thing. After our conversation, I walked out with a complete operations model for the entire role. I didn't expect to get a full SOP.</p>
</div>

</div>

<div class="case-section">

<div class="insight-block">
  <h3>Two Cases, One Lesson</h3>
  <p>Whether you're one person running BD and marketing at a compliance firm, or a small media team trying to cover an entire industry, COCO's solution is the same — <strong>AI handles volume, humans handle strategy</strong>. First to publish, first to reach the right people, wins.</p>
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
    <h2>Let AI Take Over Your Content Volume</h2>
    <p>Start with a single message, build a complete operations model</p>
    <a href="https://coco.xyz" class="cta-btn">Try COCO Free</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>More Case Studies</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="/case-studies/email-automation">
      <div class="blog-related-card-img">📧</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">Customer Service Email Automation</div>
        <div class="blog-related-card-desc">Catch real user emails in minutes, filter noise, and draft replies with human review before send.</div>
      </div>
    </a>
    <a class="blog-related-card" href="/case-studies/crm">
      <div class="blog-related-card-img">📊</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">COCO CRM — Built by AI, Run by AI</div>
        <div class="blog-related-card-desc">A complete CRM system designed, built, and operated daily by an AI Agent.</div>
      </div>
    </a>
    <a class="blog-related-card" href="/case-studies/deal-flow-dd">
      <div class="blog-related-card-img">📋</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">AI Due Diligence — 20 Hours to 2</div>
        <div class="blog-related-card-desc">A full DD workflow compressed into a structured AI execution chain with analyst-grade outputs.</div>
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
