---
layout: page
title: "零代码经验上线全栈 App — HxA Team 多 Agent 协作开发猫咪品种识别应用"
description: "一位没有编程经验的业务运营成员，用 COCO HxA Team 多 Agent 框架，在一个晚上独立上线了生产级猫咪品种识别 App：Next.js + TypeScript + Supabase + Vercel，双语界面，AI 视觉分析。AI替代外包开发的真实案例。"
head:
  - - meta
    - property: og:title
      content: "Zero Coding Experience to Production App — HxA Team Multi-Agent Dev Story"
  - - meta
    - property: og:description
      content: "One evening, zero dev experience, production-grade full-stack app. This is what AI teams make possible."
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
  background: linear-gradient(to bottom, #5CC5C5, #B388D9, #FF7B7B, #A8D8B9);
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
.pipeline-card:nth-child(4)::before { background: #A8D8B9; box-shadow: 0 0 0 2px #A8D8B9; }
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
.workflow-block.green { border-left-color: #A8D8B9; }
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

/* Tech table */
.tech-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}
.tech-table th {
  background: rgba(92, 197, 197, 0.1);
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 14px 16px;
  text-align: left;
}
.tech-table td {
  padding: 12px 16px;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}
.tech-table tr:hover td {
  background: var(--vp-c-bg-soft);
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
  .case-hero .hero-tags { gap: 8px; }
  .case-hero .tag { font-size: 11px; padding: 4px 10px; }
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
  .case-section h2 { font-size: 1.4rem; text-align: center; }
  .case-section h3 { font-size: 1.1rem; text-align: center; }
  .case-section p { font-size: 0.95rem; text-align: center; }
  .workflow-section, .workflow-block { text-align: left; }
  .workflow-block { padding: 18px 16px 18px 14px; }
  .case-quote { padding: 24px 20px 24px 36px; }
  .case-cta {
    padding: 40px 16px;
    margin: 32px -16px 0;
    border-radius: 16px;
  }
  .case-cta h2 { font-size: 1.4rem; }
  .tech-table { font-size: 0.85rem; }
  .tech-table th, .tech-table td { padding: 10px 12px; }
  .pipeline-grid { padding-left: 32px; }
  .pipeline-card::before { left: -25px; }
  .pipeline-card { padding: 18px 16px; }
  .pipeline-card h3 { font-size: 1rem; }
  .pipeline-card .card-icon { font-size: 1.5rem; top: 18px; right: 14px; }
  .blog-meta { flex-direction: column; gap: 16px; align-items: flex-start; }
  .blog-related-grid { grid-template-columns: 1fr; }
}

/* CTA block */
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

/* Scroll animations */
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
.pipeline-card:nth-child(4) { transition-delay: 0.45s; }
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
.workflow-block:nth-child(4) { transition-delay: 0.36s; }

/* Premium font */
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
.dark .workflow-block { background: rgba(255, 255, 255, 0.02); }
.dark .pipeline-card { background: rgba(255, 255, 255, 0.03); }

/* Blog meta + related */
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
.blog-related-card-body { padding: 16px 20px; }
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
.dark .blog-related-card { background: rgba(255, 255, 255, 0.02); }

/* Hero stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 32px;
}
.hero-stat { text-align: center; }
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
</style>

<div class="case-hero">
  <div class="hero-text-box">
    <div class="badge">AI 开发 · 零代码经验</div>
    <h1>零代码经验<br/><em>一个晚上上线全栈 App</em></h1>
    <p class="subtitle">业务运营背景的团队成员，用 HxA Team 多 Agent 框架，<br/>60 分钟内完成生产级猫咪品种识别 App。</p>
    <div class="hero-tags">
      <span class="tag">Next.js</span>
      <span class="tag">AI 视觉分析</span>
      <span class="tag">Supabase</span>
      <span class="tag">Vercel 部署</span>
      <span class="tag">双语界面</span>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <span class="stat-num">60min</span>
        <span class="stat-label">从零到上线</span>
      </div>
      <div class="hero-stat">
        <span class="stat-num">0行</span>
        <span class="stat-label">手写代码</span>
      </div>
      <div class="hero-stat">
        <span class="stat-num">生产级</span>
        <span class="stat-label">可访问应用</span>
      </div>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

## 她的想法，<em>AI 的执行</em>

她有个想法：上传一张猫的照片，自动识别品种，同时给出置信度、大概价格区间，顺带一些有趣的品种知识。她想要中英双语界面，因为团队里有英文母语的成员。她没有任何 Web 开发经验——不懂 React，不懂 API，不懂数据库。

这种想法在过去通常有三条路：自己花几个月学开发；找外包，写需求文档，经历设计稿、开发联调、测试的完整周期，花几千块等几周；或者放弃。

她选了第四条路：打开 COCO，描述了自己的想法，然后 HxA Team 开始工作。

一个晚上之后，应用上线了。这是一个有完整 UI、双语切换、AI 视觉分析、Supabase 历史记录的生产级全栈应用，部署在 Vercel 上，有可访问的公开 URL。不是原型，不是 demo，是真实可用的应用。

**应用地址：** [https://cat-breed-identifier-h1ma.vercel.app/](https://cat-breed-identifier-h1ma.vercel.app/)

![Meow Identifier — 猫咪品种识别 App](https://raw.githubusercontent.com/coco-xyz/coco-materials/main/coco-content/testimonials/images/coco-cat-identifier-demo.png)

这个案例之所以重要，不只是因为"AI 帮人写了代码"——而是因为它证明了一件更深刻的事：软件开发能力不再是少数人的专属资产。有判断力、有创意、懂业务的人，现在可以直接把想法变成可运行的软件，无需经过"学会编程"或"找到工程师"这两个传统瓶颈。

</div>

<div class="case-section">

## HxA Team 是如何<em>分工协作的</em>

这个故事里最值得深讲的部分，不是猫咪识别本身，而是 HxA Team 的工作机制。COCO 的 HxA Team 不是一个 AI 在包揽所有事，而是多个专业化模型协同工作——就像真实的开发团队一样分工。

这个设计决策背后有深刻的工程逻辑。不同类型的任务对 AI 能力的要求是不同的：系统架构设计需要全局推理能力和对技术权衡的判断；代码实现需要精确的语法生成和对上下文的高度保真；质量检查需要快速、系统性地发现边界情况和潜在错误。用同一个模型包揽所有任务，要么在架构上过于保守，要么在代码细节上不够精确，要么质检流程拖慢整体速度。HxA Team 的多模型分工解决了这个问题。

**GitHub 项目（HxA Teams 框架）：** [github.com/coco-xyz/hxa-teams](https://github.com/coco-xyz/hxa-teams)

<div class="workflow-section">
  <div class="workflow-block marketing">
    <h4>👤 Product Owner（人类）— 她</h4>
    <ul>
      <li>描述想法：上传猫咪照片，识别品种、置信度、价格区间、有趣知识，支持中英文</li>
      <li>审阅每一轮迭代，给出反馈："按钮再大一点"、"加个中文版的品种介绍"</li>
      <li>全程无需理解任何代码，用自然语言完成所有决策</li>
    </ul>
  </div>
  <div class="workflow-block bd">
    <h4>🧠 Coordinator（Opus）— 架构师</h4>
    <ul>
      <li>负责系统架构和规划：选定技术栈、设计组件结构、确定数据库 Schema</li>
      <li>技术选型：Next.js + TypeScript + Tailwind CSS 4 + LLM 视觉模型 + Supabase + Vercel</li>
      <li>把工作拆解为 4 个执行批次，规划依赖关系和交付顺序</li>
      <li>在整个开发过程中保持架构一致性，协调各角色的输出</li>
    </ul>
  </div>
  <div class="workflow-block sales">
    <h4>💻 Developer（Sonnet）— 工程师</h4>
    <ul>
      <li>负责写代码：组件实现、API 路由、数据库操作、图片处理逻辑</li>
      <li>实现双语切换（EN/ZH）的完整国际化支持</li>
      <li>构建图片上传、预处理、AI 视觉 API 调用的完整管道</li>
      <li>提交 Pull Request，附代码注释，保持真实的开发工作流</li>
    </ul>
  </div>
  <div class="workflow-block green">
    <h4>🔍 QA（Haiku）— 质量保障</h4>
    <ul>
      <li>抓边界情况：非猫咪图片、低分辨率、网络异常、API 超时</li>
      <li>测试上传流程的完整路径，确认错误处理逻辑正确</li>
      <li>验证中英文两种语言下 AI 返回的内容都能正确解析和展示</li>
      <li>最终生产环境验证，确认 Supabase 历史记录功能正常工作</li>
    </ul>
  </div>
</div>

</div>

<div class="case-section">

## 60 分钟执行计划：<em>4 个批次，从零到上线</em>

Coordinator（Opus）在接受任务后的第一件事，是把整个项目分解为 4 个执行批次，每个批次有明确的时间目标、工作内容和交付物。这种批次化执行的方式，让 Product Owner 在每个关键节点都能看到有意义的进展，而不是盲等一个大交付。

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">🚀</div>
    <div class="time-badge">Batch 1 · 0–15 分钟</div>
    <h3>初始化 — 项目脚手架搭建</h3>
    <p>创建 GitHub 仓库，Next.js 项目脚手架初始化，配置 TypeScript 和 Tailwind CSS 4，建立基础目录结构。完成后：一个可以本地启动的空项目。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🤖</div>
    <div class="time-badge">Batch 2 · 15–35 分钟</div>
    <h3>核心功能 — AI 识别管道</h3>
    <p>照片上传组件、图片预处理逻辑、LLM 视觉模型 API 集成、结构化输出解析（品种 + 置信度 + 价格区间 + 知识点）。完成后：产品核心功能可运行，可以上传照片并看到识别结果。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🎨</div>
    <div class="time-badge">Batch 3 · 35–50 分钟</div>
    <h3>UI + 历史记录</h3>
    <p>UI 美化（从功能可用到视觉精良）、EN/ZH 双语切换实现、Supabase 数据库接入、历史记录存储和展示。完成后：完整的用户体验，双语界面，历史可查。</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">✅</div>
    <div class="time-badge">Batch 4 · 50–60 分钟</div>
    <h3>部署上线 — 生产环境</h3>
    <p>Vercel 部署配置、环境变量设置、最终 QA 测试（Haiku 执行）、生产环境验证。完成后：有公开 URL 的可访问应用，生产就绪。</p>
  </div>
</div>

每个批次的完成都经过 PR Review——整个项目提了两个 Pull Request，有代码注释，有合并记录。和真实开发团队的工作流程一模一样，没有走捷径，没有"先跑起来再说"的技术债。这是 HxA Team 与"快速原型工具"的本质区别：它交付的是架构合理、有完整部署流水线的生产应用，而不是可以演示但不能交付的 demo。

</div>

<div class="case-section">

## <em>技术栈</em>拆解

Coordinator（Opus）在架构阶段做出的技术选型，每一项都有充分的理由：

<table class="tech-table">
  <thead>
    <tr>
      <th>技术</th>
      <th>用途</th>
      <th>选型理由</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Next.js + TypeScript</strong></td>
      <td>全栈应用框架</td>
      <td>前后端统一框架，TypeScript 提供类型安全，减少运行时错误</td>
    </tr>
    <tr>
      <td><strong>Tailwind CSS 4</strong></td>
      <td>UI 样式系统</td>
      <td>实用优先，快速迭代 UI，与 AI 代码生成配合效率最高</td>
    </tr>
    <tr>
      <td><strong>LLM 视觉模型</strong></td>
      <td>猫咪品种识别 AI</td>
      <td>多模态大模型直接处理图片，返回结构化的品种分析</td>
    </tr>
    <tr>
      <td><strong>Supabase</strong></td>
      <td>历史记录数据库</td>
      <td>托管 PostgreSQL，配置简单，适合快速开发阶段的持久化需求</td>
    </tr>
    <tr>
      <td><strong>Vercel</strong></td>
      <td>部署托管</td>
      <td>与 Next.js 原生集成，零配置部署，自动 HTTPS 和 CDN</td>
    </tr>
    <tr>
      <td><strong>GitHub PR 工作流</strong></td>
      <td>代码版本管理</td>
      <td>保持真实开发规范，代码可追溯，避免技术债积累</td>
    </tr>
  </tbody>
</table>

这个技术栈的选择体现了 HxA Team 在架构决策上的一个重要原则：选成熟、广泛使用的技术，而不是追新。Next.js 和 Supabase 都是 2024-2026 年前端全栈开发的主流选择，有大量文档和社区支持，AI 在实现细节上的准确性更高。这对于需要快速交付、未来可能需要维护和扩展的项目来说，是比选择最新技术更明智的判断。

</div>

<div class="case-section">

## 为什么这<em>不只是一个有趣的案例</em>

猫咪品种识别本身不是重点。这个案例揭示的是一个更大的变化：软件开发的门槛正在被彻底重构。

过去，"懂技术"和"不懂技术"是两个泾渭分明的阵营。懂技术的人可以把想法变成软件；不懂技术的人需要找懂技术的人，或者放弃。这个边界在 AI Agent 开发框架下开始变得模糊。有产品判断力、有业务理解、有对好用户体验的直觉的人，现在可以通过 AI 数字员工直接将这些判断转化为代码。

这不是说技术工程师的价值消失了。对于复杂系统、高安全要求、大规模架构，专业工程师的深度仍然不可替代。但对于内部工具、数据可视化、效率应用、消费级产品原型——这一大类过去因为"不值得花工程师时间"或"不值得外包"而被搁置的软件需求，现在有了一条新的实现路径。

这位团队成员的案例是一个具体的证明：一个业务背景的人，在一个晚上，独立完成了一个从零到生产上线的全栈应用。如果她可以，你的团队里懂业务的人也可以。

<div class="case-quote">
  <p>我一直在等它到某一步说"这里需要找个开发"。它从来没有。每次我说"我还想要一个功能 X"，它就去做了。</p>
</div>

</div>

<div class="case-section">

<div class="insight-block">
  <h3>不懂技术的人，现在也能交付软件</h3>
  <p>HxA Team 不是一个 AI 在快速写代码——是有规划、有执行、有质检三个角色分工的多 Agent 协作流程，和真实团队的组织方式一样。架构合理、流程规范、可持续维护。这是 AI 带来的真正民主化：软件创造不再是少数人的特权。</p>
</div>

</div>

<div class="case-section">

## 常见问题

### Q: 没有任何编程经验，真的可以用 HxA Team 开发应用吗？

是的，这个案例就是最直接的证明。你需要的是清晰描述你想要什么——功能是什么、用户体验应该是什么感觉、有什么技术偏好或约束——HxA Team 会负责所有的技术实现。你在整个过程中扮演 Product Owner 的角色：描述需求，审阅迭代，给出反馈。不需要读懂任何代码。

### Q: HxA Team 开发的应用质量是否足够好？能用在正式场景中吗？

这个猫咪品种识别 App 本身就部署在 Vercel 上，有公开 URL，是完整的生产部署。技术栈（Next.js + TypeScript + Supabase + Vercel）是业界主流的全栈方案，代码通过 GitHub PR 工作流管理，有代码注释和版本记录。这不是随意拼凑的 demo，是架构合理的生产应用。当然，对于金融级别的安全要求或超大规模系统，建议在 AI 交付的基础上进行专业工程师的额外审查。

### Q: HxA Team 的 Coordinator、Developer、QA 分别对应哪些具体的 AI 模型？

Coordinator 角色使用 Claude Opus（强推理、架构规划能力），Developer 角色使用 Claude Sonnet（高质量代码生成），QA 角色使用 Claude Haiku（高速、系统性测试验证）。这三个角色的模型选择不是固定的，可以根据具体项目需求和成本考量调整。关键是分工机制本身：不同任务用最适合的模型，而不是用同一个模型包揽所有事。

### Q: 从想法到上线，整个过程中我需要做哪些决策？

主要是产品层面的决策：功能范围（想要什么功能）、用户体验方向（应该是什么感觉）、视觉风格（简洁？精致？特定主题？）、语言和内容（单语还是双语，什么语气）。技术层面的决策（技术栈选择、架构设计、数据库 Schema）由 Coordinator 负责，会向你说明选择理由但不需要你有技术背景来评判。

### Q: 如果我之后想增加功能或修改 App，AI 还能帮我维护吗？

是的。这实际上是 COCO AI Agent 的核心优势之一：长期记忆和上下文连续性。AI 记得这个应用是怎么搭建的，用了什么技术栈，有哪些组件依赖关系。当你三个月后想增加一个新功能，你不需要重新解释整个项目背景——AI 还记得。这和找外包开发有本质区别：外包交付后你就独立了，AI 数字员工是持续在线的长期合作者。

### Q: 开发一个类似复杂度的应用，使用 COCO HxA Team 大概花多少时间？

这个案例是 60 分钟，对于有 4 个核心功能模块（上传、AI 分析、双语 UI、历史记录）的全栈 App 来说，这代表了较高的效率。更简单的单功能工具可能在 20-30 分钟内完成；更复杂的产品（多用户、权限系统、第三方 API 集成等）可能需要数小时到一天。决定时间长短的主要因素是需求的清晰度和复杂度，而不是 AI 的速度——AI 通常在等待 Product Owner 的反馈，而不是在等待代码生成。

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
    <h2>把你的想法交给 AI 团队</h2>
    <p>不懂代码也能上线应用——HxA Team 包办架构到部署</p>
    <a href="https://coco.xyz" class="cta-btn">开始试用 COCO</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>更多案例</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="/zh/case-studies/hxa-team">
      <div class="blog-related-card-img">🐙</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">从 1 个 AI 员工到 1 支 AI 团队</div>
        <div class="blog-related-card-desc">7 个 Agent 并行，Kevin 只管方向，20 分钟网站上线。</div>
      </div>
    </a>
    <a class="blog-related-card" href="/zh/case-studies/wishforever">
      <div class="blog-related-card-img">⛓️</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">WishForever — 单人开发 Web3 dApp</div>
        <div class="blog-related-card-desc">1,247 个愿望永久铭刻在以太坊。一个创始人，一个 AI，链上产品。</div>
      </div>
    </a>
    <a class="blog-related-card" href="/zh/case-studies/crm">
      <div class="blog-related-card-img">📊</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">COCO CRM — AI 搭建，AI 运营</div>
        <div class="blog-related-card-desc">AI Agent 从零设计、搭建并每天自动运营的完整 CRM 系统。</div>
      </div>
    </a>
    <a class="blog-related-card" href="/zh/case-studies/social-media">
      <div class="blog-related-card-img">📡</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent 案例研究</div>
        <div class="blog-related-card-title">社媒与 BD 自动化</div>
        <div class="blog-related-card-desc">从一条 prompt 到完整运营模型。AI 扛产量，人管策略。</div>
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
  document.querySelectorAll('.case-section, .workflow-block, .pipeline-card, .case-quote, .insight-block, .case-cta').forEach(el => {
    el.classList.add('animate-on-scroll')
    observer.observe(el)
  })
  document.querySelectorAll('.workflow-block, .pipeline-card').forEach(el => {
    el.classList.remove('animate-on-scroll')
    observer.observe(el)
  })
})
</script>
