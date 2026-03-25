---
layout: page
title: "AI Agent 驱动的投资尽调自动化 — DD 时间从 20 小时压缩到 2 小时"
description: "COCO AI Agent 实现投资尽职调查全流程自动化：数据室解析、财务建模、风险识别到 IC 备忘录生成。企业AI自动化让分析师从文件搬运工转型为真正的投资决策者，季度处理量提升 3 倍。"
head:
  - - meta
    - property: og:title
      content: "AI-Powered Investment Due Diligence — DD Time Cut from 20 Hours to 2"
  - - meta
    - property: og:description
      content: "From data room to IC memo, fully automated. Analysts focus on decisions, not document handling."
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
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  background: #000;
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

/* DD-specific: result table */
.dd-table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 0.92rem;
}
.dd-table th {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-weight: 600;
  padding: 12px 16px;
  text-align: left;
  border-bottom: 2px solid var(--vp-c-divider);
}
.dd-table td {
  padding: 10px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.dd-table tr:last-child td {
  border-bottom: none;
  font-weight: 700;
  color: var(--vp-c-text-1);
  background: rgba(92, 197, 197, 0.04);
}
.dd-table td:last-child {
  color: #FF7B7B;
  font-weight: 600;
}
.dd-table tr:last-child td:last-child {
  color: #FF7B7B;
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

/* ===== Mobile Responsiveness & Visual Polish ===== */
*, *::before, *::after { box-sizing: border-box; }

/* Prevent horizontal overflow */
.case-body { overflow-x: hidden; }

/* Table scroll wrapper */
.dd-table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 24px 0;
}
.dd-table-wrapper .dd-table { margin: 0; }

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

/* Table zebra striping */
.dd-table tr:nth-child(even) td { background: var(--vp-c-bg-soft); }

/* Company cards equal height */
.company-duo { align-items: stretch; }

/* 480px breakpoint */
@media (max-width: 480px) {
  .case-hero h1 { font-size: 1.4rem; }
  .hero-stats { gap: 16px; }
  .hero-stat .stat-num { font-size: 1.6rem; }
  .case-section { padding: 0 8px; }
  .capability-bar { padding: 14px 12px; }
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
    <div class="badge">金融科技 · AI 尽调</div>
    <h1>AI 驱动的投资尽调<br/><em>DD 时间从 20 小时压缩到 2 小时</em></h1>
    <p class="subtitle">从数据室到 IC 备忘录，全流程自动化。<br/>分析师专注决策，不是搬运文件。</p>
    <div class="hero-tags">
      <span class="tag">数据室解析</span>
      <span class="tag">风险识别</span>
      <span class="tag">财务建模</span>
      <span class="tag">IC 备忘录</span>
      <span class="tag">持续监控</span>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <span class="stat-num">90%</span>
        <span class="stat-label">时间节省</span>
      </div>
      <div class="hero-stat">
        <span class="stat-num">3x</span>
        <span class="stat-label">处理量</span>
      </div>
      <div class="hero-stat">
        <span class="stat-num">+40%</span>
        <span class="stat-label">风险识别率</span>
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
      <span class="po-value">VC / PE 投资机构</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📁</span>
    <div class="po-content">
      <span class="po-label">DD 文件量</span>
      <span class="po-value">500+ 页 / 每个项目</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">⚡</span>
    <div class="po-content">
      <span class="po-label">时间节省</span>
      <span class="po-value">20 小时 → 2 小时</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">🔧</span>
    <div class="po-content">
      <span class="po-label">核心工具</span>
      <span class="po-value">AI Agent + 多模型分析</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📊</span>
    <div class="po-content">
      <span class="po-label">自动化范围</span>
      <span class="po-value">数据室解析 · 财务建模 · IC 备忘录</span>
    </div>
  </div>
  <div class="po-field">
    <span class="po-icon">📈</span>
    <div class="po-content">
      <span class="po-label">季度处理量</span>
      <span class="po-value">提升 3 倍</span>
    </div>
  </div>
</div>

## 传统 DD 的<em>痛点</em>

投资尽职调查（Due Diligence）是 VC/PE 机构在完成每笔交易前必须经历的核心环节。理论上，DD 的目的很简单：在投出真金白银之前，搞清楚这家公司是不是它声称的那样。但在实践中，这件事从来不简单。

一个分析师要在短时间内消化数百页材料——商业计划书、历史财报、竞品分析、法律文件、cap table、用户数据——同时还要应对竞争性的交易节奏。热门项目不等人：竞争对手可能已经提交 term sheet，你的 DD 报告还在整理 Excel。在一个好项目面前，速度往往决定能不能参与，而不只是能不能赢。

在这个背景下，传统 DD 流程的结构性缺陷就变得尤为致命。这不是分析师不努力——是人类处理非结构化信息的速度和广度，存在物理极限。一份商业计划书里的财务数据，需要和附录里的明细表逐一比对；市场规模的声称，需要用第三方数据源交叉验证；cap table 上的数字，需要在多个版本的文件之间互相核实。每一项单独拿出来都不难，但叠加在一起，在时间压力下，漏掉什么几乎是必然的。

COCO AI Agent 的企业自动化方案，把这些可以被结构化的工作全部交给数字员工执行——不是"AI 辅助分析师"，而是 AI 独立完成数据室解析、财务模型提取、风险标记识别的整个流程，让分析师专注于真正需要人类判断的那 20%：该不该投、投多少、条款怎么谈。

某国有银行的真实案例证明了这一点：这位行级负责人需要定期产出贷款融资分析报告。接入 COCO 之前，研究团队需要从多个来源手工收集数据、分析行业格局、梳理财务数据、评估风险，最终写成结构化报告——一份完整报告需要团队 2 到 3 天的工作量。接入 COCO 之后，行长在飞书里直接和 AI 对话，输入报告需要的关键参数，几小时内就能收到涵盖行业格局分析、财务数据综合梳理、风险评估、结构化章节的完整初稿。试用期还没结束，就决定付费，成为 COCO 首位企业金融客户。这不是某家创业公司在玩 AI 噱头——这是一家在严格监管环境下运营的国有金融机构的真实反馈。

传统 DD 流程高度依赖人力，每一个环节都是时间与精力的消耗战。数据室解析、财务模型提取、市场规模验证、竞品格局梳理、风险标记识别、IC 备忘录撰写——这六个步骤叠加在一起，每笔交易往往需要一整个工作周。

<div class="dd-table-wrapper">
<table class="dd-table">
  <thead>
    <tr>
      <th>尽调任务</th>
      <th>手工耗时</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>投资材料阅读与摘要</td><td>3-4 小时</td></tr>
    <tr><td>财务模型提取与验证</td><td>4-6 小时</td></tr>
    <tr><td>市场规模与桌面调研</td><td>3-5 小时</td></tr>
    <tr><td>竞争格局梳理</td><td>3-4 小时</td></tr>
    <tr><td>风险标记识别</td><td>2-3 小时</td></tr>
    <tr><td>IC 备忘录撰写</td><td>4-6 小时</td></tr>
    <tr><td><strong>每笔交易总计</strong></td><td><strong>20-28 小时</strong></td></tr>
  </tbody>
</table>
</div>

<div class="video-showcase">
  <div class="video-container">
    <video controls playsinline src="https://william.coco.site/dd-demo-subtitled-v3.mp4" aria-label="COCO AI 金融尽调演示"></video>
  </div>
</div>

</div>

<div class="case-section">

## 四个<em>核心问题</em>

在 VC/PE 的工作场景中，"慢"不只是效率问题，往往直接决定能否拿到一个好项目。当优秀创始人有多个机构竞争投资时，第一个完成 DD、提交条款的机构往往会赢得交易。这不是偏见，是市场现实。

与此同时，传统 DD 流程固有的四个结构性缺陷，让分析师团队即使足够努力，也很难完全覆盖所有风险点。这四个核心问题不是个人能力问题，而是由人工处理大量非结构化信息这一本质决定的——而这正是 AI Agent 企业自动化可以系统性解决的场景。理解这四个问题，也是理解为什么 AI 驱动的 DD 自动化不是"锦上添花"，而是真实的竞争优势。

<div class="company-duo">
  <div class="company-card">
    <div class="card-label compliance">效率瓶颈</div>
    <h3>太慢</h3>
    <div class="card-meta">每笔交易 3-5 天</div>
    <p>从拿到材料到 IC 汇报，每笔交易至少 3 天，热门项目根本来不及。竞争对手已经 term sheet，你还在整理 Excel。</p>
  </div>
  <div class="company-card">
    <div class="card-label media">时效性差</div>
    <h3>静态快照</h3>
    <div class="card-meta">DD 报告写完就过时</div>
    <p>市场环境、竞品融资、政策变化——这些在 DD 完成后还在发生。报告写完那一刻就已经是历史了。</p>
  </div>
  <div class="company-card">
    <div class="card-label compliance">覆盖率低</div>
    <h3>遗漏风险</h3>
    <div class="card-meta">~60% 风险识别率</div>
    <p>人工阅读难以覆盖所有文件细节。cap table 不一致、收入预测异常、关联交易——这些风险点很容易在疲劳状态下漏掉。</p>
  </div>
  <div class="company-card">
    <div class="card-label media">扩展性差</div>
    <h3>无法扩展</h3>
    <div class="card-meta">雇更多人或降低质量</div>
    <p>想处理更多项目，只有两个选择：扩大团队（成本倍增）或降低每个项目的 DD 质量。两条路都不理想。</p>
  </div>
</div>

</div>

<div class="case-section">

## AI 驱动的<em>DD 流程</em>

COCO AI Agent 的尽调自动化流程将整个 DD 拆解为六个串行阶段：摄取、提取、研究、分析、持续追踪、生成报告。每个阶段的输入输出都经过精确定义，AI 数字员工在每个节点完成特定任务后自动触发下一阶段，不需要分析师手动驱动流程推进。

这套流程设计的核心逻辑是：把 DD 中所有"可以被计算机规则化处理"的工作，和"必须依赖人类判断"的工作彻底分开。上传一个数据室，AI 可以在 3 分钟内完成文档解析和结构化，15 分钟内提取所有核心财务指标，1 小时内完成市场规模交叉验证和竞品格局梳理。这不是 AI 在"辅助"分析师——这是 AI 在完整承担分析师工作中最耗时但最不需要判断力的那一大半。

关键的突破在于"持续追踪"阶段——这是传统 DD 完全没有能力覆盖的部分。一份 DD 报告写完之后，它描述的是一个历史时刻的快照。但投资决策往往有 2-4 周的周期，在这期间，被投公司的竞品可能刚刚完成新一轮融资，核心市场可能出现了重大政策调整，创始人可能已经悄悄招募或失去了一位关键高管。传统 DD 对这些变化是盲目的。COCO AI Agent 通过实时监控和定期推送，让投资团队掌握的信息始终保持最新状态，而不是停留在报告撰写时的那个快照——这是 AI 驱动的 DD 自动化最独特的竞争力之一。

<div class="workflow-section">
  <div class="workflow-block marketing">
    <h4>📥 步骤一：摄取</h4>
    <ul>
      <li>上传材料：PDF、Excel、Notion 均支持</li>
      <li>3 分钟内完成文档解析与结构化</li>
      <li>自动识别财务报表、商业计划书、法律文件类型</li>
    </ul>
  </div>
  <div class="workflow-block bd">
    <h4>📈 步骤二：提取</h4>
    <ul>
      <li>自动提取核心指标：营收、烧钱率、单位经济</li>
      <li>Cap table 结构与稀释分析</li>
      <li>历史财务数据交叉验证与异常标记</li>
    </ul>
  </div>
  <div class="workflow-block sales">
    <h4>🔍 步骤三：研究</h4>
    <ul>
      <li>交叉验证 TAM/SAM 数据与第三方来源</li>
      <li>竞品动态与融资历史自动追踪</li>
      <li>创始人背景核查（LinkedIn、新闻、公开数据）</li>
    </ul>
  </div>
  <div class="workflow-block marketing">
    <h4>⚠️ 步骤四：分析</h4>
    <ul>
      <li>自动标记高风险信号（收入预测异常、cap table 不一致）</li>
      <li>对标同类项目的行业基准数据</li>
      <li>风险矩阵生成：概率 × 影响 × 可缓解性</li>
    </ul>
  </div>
  <div class="workflow-block bd">
    <h4>📡 步骤五：持续追踪</h4>
    <ul>
      <li>实时监控竞品融资动态、政策变化</li>
      <li>团队人员变动预警（LinkedIn 动态）</li>
      <li>投后企业季度指标自动更新</li>
    </ul>
  </div>
  <div class="workflow-block sales">
    <h4>📄 步骤六：生成报告</h4>
    <ul>
      <li>IC 级结构化备忘录：执行摘要、财务分析、风险矩阵</li>
      <li>支持自定义模板（适配不同 LP 或 IC 偏好）</li>
      <li>从材料上传到报告输出，全程 2-3 小时</li>
    </ul>
  </div>
</div>

</div>

<div class="case-section">

## <em>结果数据</em>

这些数据来自 COCO AI Agent 在真实投资机构 DD 场景中的实际运行记录。理解这些数字背后的业务含义，比数字本身更重要。

90% 的时间节省意味着什么？意味着同一个分析师团队，现在可以在同样的时间窗口内处理 3 倍数量的项目。对于一个活跃的早期 VC 来说，这意味着你的有效覆盖范围扩大了 3 倍——你可以看更多项目，花更多时间在真正有意思的项目上做深度判断，而不是被文件搬运工作淹没。

3 倍处理量的提升不依赖扩大团队，而是通过让 AI 数字员工承担文件处理工作来实现。这是企业 AI 自动化最典型的价值创造路径：不是替代人，而是让同样数量的人能够完成更多有意义的工作。对于 VC/PE 机构来说，分析师的稀缺资源是判断力和关系网络，而不是阅读 PDF 的耐心。AI 帮你把前者留给人，把后者交给机器。

尤其值得关注的是风险识别率从约 60% 提升至约 85%。这 25 个百分点的提升，来自 AI 不会疲劳、不会因为时间压力而跳读文件这一本质特性。一份 200 页的数据室，人类分析师在时间压力下可能会跳过附录里的某几张财务明细表；COCO AI Agent 会逐页扫描，在第 187 页发现一个与封面页数字不一致的收入数据，并自动标记为高风险信号。Cap table 不一致、收入预测异常、关联交易——这些在分析师疲劳阅读时容易漏掉的风险点，AI 可以做到系统覆盖、零遗漏。

<div class="capability-bar">
  <div class="bar-label">
    <span>DD 时间：20-28小时 → 2-3小时</span>
    <span><strong>-90%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 90%"></div>
  </div>
  <div class="bar-note">从材料上传到 IC 备忘录，当天完成</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>季度处理量：30-50笔 → 90-150笔</span>
    <span><strong>3x</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 75%; background: linear-gradient(90deg, #B388D9, #9B6CC4)"></div>
  </div>
  <div class="bar-note">同等团队规模，项目处理量三倍增长</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>风险识别率：~60% → ~85%</span>
    <span><strong>+40%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 85%; background: linear-gradient(90deg, #FF7B7B, #FF5096)"></div>
  </div>
  <div class="bar-note">AI 不会疲劳，不会漏读任何一行</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>IC 备忘录：3-5天 → 当天</span>
    <span><strong>-80%</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 80%"></div>
  </div>
  <div class="bar-note">项目委员会再也不用等一周才能看到报告</div>
</div>

<div class="capability-bar">
  <div class="bar-label">
    <span>分析师用于寻源的时间：20% → 60%</span>
    <span><strong>3x</strong></span>
  </div>
  <div class="bar-track">
    <div class="bar-fill" style="width: 60%; background: linear-gradient(90deg, #A8D8B9, #5CC5C5)"></div>
  </div>
  <div class="bar-note">从文件搬运工变成真正的投资判断者</div>
</div>

</div>

<div class="case-section">

<div class="case-quote">
  <p>分析师不应该是文件搬运工。AI 负责数据室，人负责判断。</p>
</div>

</div>

<div class="case-section">

<div class="insight-block">
  <h3>个人 vs 企业</h3>
  <p>个人用 AI 帮你查资料；企业用 AI 让每一笔交易都有一个不知疲倦的分析师全程跟进——从收到材料的那一刻起，就同时在读 PDF、跑模型、查竞品、写备忘录。</p>
</div>

</div>

<div class="case-section">

## 常见问题

### Q: COCO AI Agent 的 DD 自动化能处理哪些类型的材料？

COCO AI Agent 支持 PDF、Excel、Word 文档，以及 Notion 页面等多种格式。数据室中常见的商业计划书、财务报表、法律文件、用户数据报告都可以上传处理。系统会自动识别文件类型并按对应逻辑提取关键信息，无需手动预处理。

### Q: AI 生成的 IC 备忘录质量能达到机构内部的要求吗？

COCO AI Agent 生成的 IC 备忘录包含执行摘要、财务分析、市场规模验证、竞争格局、风险矩阵等标准模块，支持自定义模板以适配不同机构或不同 LP 的偏好。生成的内容是基于实际材料提取的结构化分析，而非模板填充——分析师通常只需要在 AI 框架上补充自己的判断性观点即可完成最终报告。

### Q: 使用 COCO AI Agent 做 DD 自动化，数据安全如何保障？

COCO AI Agent 采用私有化部署架构，尽调材料不会通过公共 AI 服务处理，确保敏感的投资数据和企业信息安全。每个机构的 COCO 实例相互隔离，数据不跨实例共享。具体的数据安全协议和合规要求，可联系 COCO 团队获取详细说明。

### Q: 持续追踪功能具体是怎么运作的？

DD 完成后，COCO AI Agent 会持续监控已投或在审项目的关键信号：竞品融资动态（通过公开信息源）、创始人 LinkedIn 变动、相关政策发布、宏观市场数据更新。当有重要变化时，系统会主动推送预警通知到团队指定渠道（飞书、邮件等），确保投后监控不依赖分析师定期手动查询。

### Q: 一个分析师团队能同时处理多少个 AI 驱动的 DD？

理论上没有并发限制——AI 数字员工可以同时执行多个项目的文件处理任务。实践中的瓶颈往往在于人类分析师审核 AI 输出的时间容量，而非 AI 本身的处理能力。COCO AI 的设计目标是让每位分析师能够同时监管 3-5 个项目的 DD 进程，而不是串行执行。

### Q: COCO AI 的 DD 自动化方案如何收费？

COCO AI Agent 按月订阅计费，不按处理的 DD 数量计费。具体方案请访问 coco.xyz 了解最新定价，或联系 COCO 团队咨询针对投资机构的企业方案。

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
    <h2>让 AI 接管你的数据室</h2>
    <p>专注找下一个好项目，文件的事交给 AI</p>
    <a href="https://coco.xyz" class="cta-btn">开始试用 COCO</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>更多案例</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="./crm">
      <div class="blog-related-card-img">📊</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">COCO CRM — AI 搭建，AI 运营</div>
        <div class="blog-related-card-desc">一套由 AI Agent 从零设计、搭建并每天自动运营的 CRM 系统。</div>
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
