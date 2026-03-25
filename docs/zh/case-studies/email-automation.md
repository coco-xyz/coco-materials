---
layout: page
title: "客服邮件自动化 — COCO AI Agent 企业邮件管理自动化实战"
description: "COCO AI Agent 实现客服邮件全流程自动化：每 10 分钟扫描收件箱，AI 智能分类过滤噪声，真实用户邮件秒级提醒，自动起草回复草稿，强制人工审核把关。企业AI自动化的人机协作典范。"
head:
  - - meta
    - property: og:title
      content: "Customer Email Automation — AI Watches the Inbox, You Make the Calls"
  - - meta
    - property: og:description
      content: "Scans every 10 minutes, instant alerts for real user emails, full draft-to-send workflow managed by AI."
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
  margin-bottom: 1.2em;
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

/* ===== Mobile Responsiveness & Visual Polish ===== */
*, *::before, *::after { box-sizing: border-box; }

/* Prevent horizontal overflow */
.case-body { overflow-x: hidden; }

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

/* 480px breakpoint */
@media (max-width: 480px) {
  .case-hero h1 { font-size: 1.4rem; }
  .hero-stats { gap: 16px; }
  .hero-stat .stat-num { font-size: 1.6rem; }
  .case-section { padding: 0 8px; }
  .capability-bar { padding: 14px 12px; }
  .sop-timeline { padding-left: 24px; }
}

/* Hero stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 32px;
}
.hero-stat {
  text-align: center;
}
.hero-stat .stat-num {
  font-size: 2rem;
  font-weight: 800;
  color: #5CC5C5;
  display: block;
  line-height: 1.1;
}
.hero-stat .stat-label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.65);
  margin-top: 4px;
  display: block;
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
    <div class="badge">客户服务 · 邮件自动化</div>
    <h1>客服邮件自动化<br/><em>AI 守着收件箱，你只管拍板</em></h1>
    <p class="subtitle">每 10 分钟扫描一次，真实用户邮件秒级提醒。<br/>草稿到发送，全流程托管。</p>
    <div class="hero-tags">
      <span class="tag">邮件监控</span>
      <span class="tag">AI 分类</span>
      <span class="tag">客户服务</span>
      <span class="tag">自动提醒</span>
      <span class="tag">全流程托管</span>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <span class="stat-num">10min</span>
        <span class="stat-label">扫描周期</span>
      </div>
      <div class="hero-stat">
        <span class="stat-num">0</span>
        <span class="stat-label">漏掉的用户邮件</span>
      </div>
      <div class="hero-stat">
        <span class="stat-num">100%</span>
        <span class="stat-label">人工审核把关</span>
      </div>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

<div class="insight-block">
  <h3>演示视频</h3>
  <p>Support Inbox Demo</p>
  <video controls style="width:100%;max-width:720px;border-radius:12px;margin-top:12px;">
    <source src="https://william.coco.site/support-inbox-demo-final-v3-bgm-only.mp4" type="video/mp4" />
  </video>
</div>

</div>

<div class="case-section">

<div class="project-overview">
  <div class="po-field">
    <span class="po-icon">🏢</span>
    <div class="po-content">
      <span class="po-label">行业</span>
      <span class="po-value">SaaS 创业公司</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📧</span>
    <div class="po-content">
      <span class="po-label">监控频率</span>
      <span class="po-value">每 10 分钟</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">⚡</span>
    <div class="po-content">
      <span class="po-label">漏掉用户邮件</span>
      <span class="po-value">0 封</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🔧</span>
    <div class="po-content">
      <span class="po-label">核心工具</span>
      <span class="po-value">Gmail + Lark Bot</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📊</span>
    <div class="po-content">
      <span class="po-label">自动化范围</span>
      <span class="po-value">分类 · 提醒 · 起草 · 发送</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🛡️</span>
    <div class="po-content">
      <span class="po-label">人工把关</span>
      <span class="po-value">100% 回复需人工确认</span>
    </div>
  </div>
</div>

## 一封邮件的<em>旅程</em>

从用户发送邮件，到 COCO 完成回复——整个过程自动化，但每一封回复都经过人工确认。

想象一个典型的早期 SaaS 团队的早晨：创始人打开收件箱，看到 47 封未读邮件。其中 40 封是营销邮件、系统通知、订阅确认；3 封是真正需要回复的用户问题；4 封介于两者之间不确定要不要处理。光是完成这个分类，就需要花 15 到 20 分钟——而这只是处理邮件的第一步。然后还需要起草回复，确认措辞，权衡语气是否合适，再发送。整个过程加起来，每天轻松超过 1 小时。

这不是一个特别大的问题，但它是一个每天都会发生的稳定消耗。对于一个需要把注意力放在产品和增长上的创始人来说，每天 1 小时的邮件管理不只是时间成本，更是注意力中断——你刚刚进入深度工作状态，突然被一封系统通知打断，然后花 10 分钟重新找回节奏。COCO AI Agent 的客服邮件自动化方案，把这整条流水线变成了一套可靠运行的企业 AI 自动化系统。

这套系统的核心设计哲学有两层：第一层是彻底消除噪声——让 AI 负责分类和过滤，让负责人的注意力只被真正需要处理的邮件打扰。第二层是保持人的最终控制权——AI 可以分类、可以起草、可以发提醒，但永远不能在没有明确授权的情况下代表公司发出任何一封邮件。这不是技术限制，而是有意为之的设计选择：客服邮件代表公司形象，每一封发出去的回复都必须是负责任的，必须经过有决策权的人确认。

<div class="sop-timeline">
  <div class="sop-item">
    <div class="sop-time">T+0</div>
    <div class="sop-desc">用户邮件进入 service@coco.xyz 收件箱。</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">T+10min</div>
    <div class="sop-desc">AI 自动扫描收件箱（每 10 分钟一次，7×24 小时不间断）。</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">T+11min</div>
    <div class="sop-desc">AI 分类判断：真实用户邮件 vs. 营销邮件 / 系统通知。营销内容自动过滤，不打扰。</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">T+12min</div>
    <div class="sop-desc">真实用户邮件 → 立即通过飞书 DM 通知 Stephanie，附摘要：发件人、主题、日期、内容概览。</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">T+15min</div>
    <div class="sop-desc">AI 根据邮件内容起草回复，附建议措辞，供 Stephanie 参考或直接使用。</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">Stephanie 确认</div>
    <div class="sop-desc">Stephanie 确认草稿（"可以"/"发吧"）。AI 永远不会在未经确认的情况下擅自发送。</div>
  </div>
  <div class="sop-item">
    <div class="sop-time">发送完成</div>
    <div class="sop-desc">AI 发送邮件，并向 Stephanie 确认发送结果（收件人、主题）。</div>
  </div>
</div>

</div>

<div class="case-section">

## 关键<em>设计原则</em>

这套客服邮件自动化系统的四个设计原则，是 COCO 在实际运营中反复验证的企业 AI 自动化最佳实践。每一个原则背后都有明确的业务逻辑：全自动监控确保响应速度、AI 分类减少噪声干扰、人工审核保障回复质量、双语支持覆盖国际用户场景。

<div class="workflow-section">
  <div class="workflow-block marketing">
    <h4>⏰ 全自动监控，永不漏件</h4>
    <ul>
      <li>10 分钟扫描周期，7×24 小时不间断运行</li>
      <li>不管是凌晨还是节假日，用户邮件到达即触发通知</li>
      <li>无需人工盯着收件箱，彻底解放注意力</li>
    </ul>
  </div>
  <div class="workflow-block bd">
    <h4>🔍 AI 分类，过滤噪声</h4>
    <ul>
      <li>营销邮件、系统通知、自动回执——全部自动过滤</li>
      <li>只有真实用户邮件才会触发通知，不打扰 Stephanie</li>
      <li>分类准确率持续优化，误报率极低</li>
    </ul>
  </div>
  <div class="workflow-block sales">
    <h4>🔒 人工审核，强制关卡</h4>
    <ul>
      <li>任何回复都必须经过 Stephanie 明确确认才能发出</li>
      <li>AI 草稿，人拍板——永远不会擅自发送</li>
      <li>确认方式极简：一个字"可以"即生效</li>
    </ul>
  </div>
  <div class="workflow-block marketing">
    <h4>🌐 双语支持，语言自动匹配</h4>
    <ul>
      <li>邮件语言自动识别，中文用户中文回，英文用户英文回</li>
      <li>双语优先策略：适合国际客户的沟通场景</li>
      <li>语气和风格与品牌保持一致</li>
    </ul>
  </div>
</div>

</div>

<div class="case-section">

## <em>实际运行</em>数据

自 2026 年 3 月上线以来，系统稳定运行。以下数据来自 COCO 自身客服邮件自动化系统的真实运行记录——这同样是一个"用自己的产品运营自己"的企业 AI 自动化实践案例。和 CRM 自动化案例一样，这不是演示场景，是 COCO 团队每天真实依赖的生产系统。

100% 用户邮件响应率意味着什么？在一个邮件量不大的早期产品阶段，每一封真实用户邮件都可能来自一个潜在的付费用户、一个正在考虑续订的试用者、或者一个遇到问题可能流失的现有客户。漏掉任何一封都是在损害可能的收入或用户关系。有了 COCO AI Agent，不管是凌晨 3 点还是周六下午，系统都在 10 分钟内扫描并在 15 分钟内发出提醒——这意味着没有任何一封真实用户邮件会在超过 15 分钟的情况下处于"未被注意到"的状态。这对早期 SaaS 产品的用户体验有直接影响——快速响应是建立用户信任的核心信号之一，而在竞争中，第一个关注用户问题的公司往往比第三个更容易赢得信任。

<div class="capability-bar">
  <div class="bar-label">
    <span>用户邮件响应率</span>
    <span><strong>100%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 100%"></div>
  </div>
  <div class="bar-note">没有一封真实用户邮件被漏掉或延迟超过 15 分钟</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>AI 分类准确率</span>
    <span><strong>~95%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 95%; background: linear-gradient(90deg, #B388D9, #9B6CC4)"></div>
  </div>
  <div class="bar-note">营销邮件过滤准确，真实用户邮件几乎零误报</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>草稿采用率</span>
    <span><strong>~80%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 80%; background: linear-gradient(90deg, #A8D8B9, #5CC5C5)"></div>
  </div>
  <div class="bar-note">约 80% 的 AI 草稿可直接使用或只需微调</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>Stephanie 处理每封邮件的时间</span>
    <span><strong>&lt; 2 分钟</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 85%; background: linear-gradient(90deg, #FF7B7B, #FF5096)"></div>
  </div>
  <div class="bar-note">从接收通知到确认发送，全程不超过 2 分钟</div>
</div>

</div>

<div class="case-section">

<div class="case-quote">
  <p>从不让 AI 在没有我确认的情况下发邮件。但也从不需要我自己盯着收件箱。</p>
</div>

</div>

<div class="case-section">

<div class="insight-block">
  <h3>邮件自动化的正确姿势</h3>
  <p>客服邮件自动化不是让 AI 替你回邮件，是让 AI 帮你不漏掉任何一封重要邮件，同时保持每一封回复都是你认可的质量。AI 负责监控和起草，人负责判断和拍板——这才是人机协作的正确分工。</p>
</div>

</div>

<div class="case-section">

## 常见问题

### Q: COCO AI Agent 的邮件监控系统支持哪些邮件服务商？

目前 COCO AI Agent 支持 Gmail/Google Workspace（通过 IMAP 协议连接），覆盖绝大多数使用 Google 邮件服务的企业和创业公司。理论上支持任何标准 IMAP 邮件服务器，具体接入配置可与 COCO 团队确认。

### Q: AI 如何判断一封邮件是"真实用户邮件"还是"营销邮件"？

COCO AI Agent 使用大语言模型对邮件内容进行智能分类，综合分析发件人地址特征、邮件主题、正文内容模式（是否包含退订链接、是否为批量发送模板等）来做出分类判断。在实际运行中分类准确率约 95%，误报率极低——即营销邮件被误判为真实用户邮件的情况非常罕见，不会造成不必要的打扰。

### Q: AI 起草的回复草稿质量如何？能直接使用吗？

约 80% 的 AI 草稿可以直接使用或只需微调。COCO AI Agent 会根据原始邮件的语言、语气、问题类型，结合品牌语气指南生成草稿。对于常见的用户问题（功能咨询、账单问题、技术支持），草稿质量通常较高；对于复杂的边缘情况，草稿会提供基础框架，需要人工补充具体细节。

### Q: 如果我在深夜或周末，AI 还会发送提醒吗？

是的。AI 监控系统 7×24 小时不间断运行，所有时段的真实用户邮件都会触发飞书 DM 提醒。但实际的发送决定完全由你控制——如果你当时不方便处理，邮件不会自动发送，等你方便时确认即可。这套系统的设计保证了"永不漏件"，同时也保证了"永不擅自发送"。

### Q: 除了客服邮件，COCO AI Agent 还能自动化哪些邮件场景？

COCO AI Agent 可以扩展到多种企业邮件自动化场景：销售跟进邮件监控与草稿生成、合作伙伴邮件分类与提醒、用户反馈邮件归档与分析、Newsletter 订阅者管理等。核心能力（监控→分类→提醒→起草→人工确认→发送）是通用的，不同场景只需调整分类规则和回复模板。

### Q: 如何开始配置 COCO AI Agent 的客服邮件自动化？

访问 coco.xyz 注册试用，提供你的邮件服务器凭证（IMAP 地址、账号、App Password）、通知渠道（飞书账号）、品牌语气指南，以及真实用户邮件的识别标准。整个配置过程通过与 COCO AI Agent 的自然语言对话完成，通常在 30 分钟内可以完成初始配置并开始试运行。

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
    <h2>让 AI 守住你的收件箱</h2>
    <p>用户邮件一封不漏，回复质量你来把关</p>
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
        <div class="blog-related-card-title">社媒与 BD 自动化</div>
        <div class="blog-related-card-desc">从一条 prompt 到完整运营模型。AI 扛产量，人管策略。</div>
      </div>
    </a>
    <a class="blog-related-card" href="./crm">
      <div class="blog-related-card-img">📊</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">COCO CRM — AI 搭建，AI 运营</div>
        <div class="blog-related-card-desc">一套由 AI Agent 从零设计、搭建并每天自动运营的 CRM 系统。</div>
      </div>
    </a>
    <a class="blog-related-card" href="./deal-flow-dd">
      <div class="blog-related-card-img">📈</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">AI 驱动的投资尽调</div>
        <div class="blog-related-card-desc">DD 时间从 20 小时压缩到 2 小时，风险识别率提升 40%。</div>
      </div>
    </a>
    <a class="blog-related-card" href="./">
      <div class="blog-related-card-img">✨</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">能力展示</div>
        <div class="blog-related-card-desc">继续查看运营、CRM、调研、内容等更多核心场景的实战基准。</div>
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
