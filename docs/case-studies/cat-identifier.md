---
layout: page
title: "Zero Coding Experience to Production App in 60 Minutes — HxA Team Multi-Agent Dev Story"
description: "A business/ops team member with no coding background used COCO's HxA Team multi-agent framework to independently ship a production cat breed identifier app in one evening: Next.js + TypeScript + Supabase + Vercel, bilingual UI, AI vision analysis. The real case for AI replacing outsourced development."
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
  .case-hero h1 { font-size: 1.5rem; margin-bottom: 12px; text-align: center; }
  .case-hero .subtitle { font-size: 0.9rem; margin-bottom: 20px; line-height: 1.5; }
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
  font-family: 'Playfair Display', Georgia, serif;
}
.case-hero h1 em,
.case-section h2 em {
  font-family: 'Playfair Display', Georgia, serif;
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
    <div class="badge">AI Development · Zero Coding Experience</div>
    <h1>Zero Coding Experience<br/><em>Production App in One Evening</em></h1>
    <p class="subtitle">A business/ops team member used COCO's HxA Team multi-agent framework<br/>to ship a production-grade cat breed identifier app in 60 minutes.</p>
    <div class="hero-tags">
      <span class="tag">Next.js</span>
      <span class="tag">AI Vision</span>
      <span class="tag">Supabase</span>
      <span class="tag">Vercel Deploy</span>
      <span class="tag">Bilingual UI</span>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <span class="stat-num">60min</span>
        <span class="stat-label">Zero to Live</span>
      </div>
      <div class="hero-stat">
        <span class="stat-num">0</span>
        <span class="stat-label">Lines Hand-Written</span>
      </div>
      <div class="hero-stat">
        <span class="stat-num">Production</span>
        <span class="stat-label">Grade App</span>
      </div>
    </div>
  </div>
</div>

<div class="case-body">
<div class="case-section">

## Her Idea. <em>AI's Execution.</em>

She had an idea: upload a photo of a cat, automatically identify the breed, get back a confidence score, a rough price range, and some interesting breed facts. She wanted a bilingual interface — English and Chinese — because the team had native English speakers. She had zero web development experience. No React, no APIs, no databases.

In the past, this kind of idea had three paths: spend months learning to code yourself; hire a freelancer, write a spec, go through the full cycle of design mockups, development, QA, and wait weeks while spending thousands; or give up.

She chose a fourth path: she opened COCO, described her idea, and the HxA Team got to work.

One evening later, the app was live. A production-grade full-stack application with a complete UI, bilingual toggle, AI vision analysis, and Supabase history tracking — deployed on Vercel with a publicly accessible URL. Not a prototype. Not a demo. A real, usable app.

**Live at:** [https://cat-breed-identifier-h1ma.vercel.app/](https://cat-breed-identifier-h1ma.vercel.app/)

![Meow Identifier — Cat Breed Recognition App](https://raw.githubusercontent.com/coco-xyz/coco-materials/main/coco-content/testimonials/images/coco-cat-identifier-demo.png)

What makes this case important isn't just "AI helped someone write code" — it's the deeper proof: software development capability is no longer a specialized asset held by a small group. People with good judgment, creativity, and business understanding can now directly translate those qualities into running software, without going through either of the traditional bottlenecks of "learn to code" or "find an engineer."

</div>

<div class="case-section">

## How the <em>HxA Team Divides the Work</em>

The most important part of this story isn't the cat breed identifier itself — it's the HxA Team's working model. COCO's HxA Team isn't one AI doing everything. It's multiple specialized models working in coordination, the way a real dev team divides responsibility.

There's deep engineering logic behind this design. Different task types demand different AI capabilities: system architecture design needs global reasoning and judgment about technical tradeoffs; code implementation needs precise syntax generation and high-fidelity context retention; quality assurance needs fast, systematic identification of edge cases and potential errors. Using one model for everything means it's either too conservative on architecture, not precise enough on code details, or the QA process slows down the whole pipeline. HxA Team's multi-model division of labor solves that.

**GitHub (HxA Teams Framework):** [github.com/coco-xyz/hxa-teams](https://github.com/coco-xyz/hxa-teams)

<div class="workflow-section">
  <div class="workflow-block marketing">
    <h4>👤 Product Owner (Human) — Her</h4>
    <ul>
      <li>Described the idea: upload a cat photo, identify breed, confidence, price range, and fun facts — in English and Chinese</li>
      <li>Reviewed each iteration and gave feedback: "make the button bigger", "add Chinese breed descriptions"</li>
      <li>Never needed to understand any code — all decisions made in natural language</li>
    </ul>
  </div>
  <div class="workflow-block bd">
    <h4>🧠 Coordinator (Opus) — Architect</h4>
    <ul>
      <li>Handled system architecture and planning: selected the tech stack, designed component structure, defined database schema</li>
      <li>Stack selection: Next.js + TypeScript + Tailwind CSS 4 + LLM vision model + Supabase + Vercel</li>
      <li>Broke work into 4 execution batches, planning dependencies and delivery order</li>
      <li>Maintained architectural consistency throughout development, coordinating outputs across roles</li>
    </ul>
  </div>
  <div class="workflow-block sales">
    <h4>💻 Developer (Sonnet) — Engineer</h4>
    <ul>
      <li>Wrote all the code: component implementation, API routes, database operations, image handling logic</li>
      <li>Built full internationalization support for the EN/ZH bilingual toggle</li>
      <li>Constructed the complete image upload → preprocessing → AI vision API → structured output pipeline</li>
      <li>Submitted Pull Requests with code comments, maintaining a real development workflow throughout</li>
    </ul>
  </div>
  <div class="workflow-block green">
    <h4>🔍 QA (Haiku) — Quality Assurance</h4>
    <ul>
      <li>Caught edge cases: non-cat images, low resolution, network errors, API timeouts</li>
      <li>Tested the complete upload flow path, verified error handling logic was correct</li>
      <li>Confirmed AI responses parsed and displayed correctly in both English and Chinese</li>
      <li>Final production environment verification, confirmed Supabase history tracking worked correctly</li>
    </ul>
  </div>
</div>

</div>

<div class="case-section">

## The 60-Minute Plan: <em>4 Batches, Zero to Live</em>

The Coordinator (Opus) did one thing first upon receiving the task: break the entire project into 4 execution batches, each with a clear time target, defined work scope, and specific deliverable. This batched execution approach lets the Product Owner see meaningful progress at each key milestone — no waiting in the dark for a single big delivery.

<div class="pipeline-grid">
  <div class="pipeline-card">
    <div class="card-icon">🚀</div>
    <div class="time-badge">Batch 1 · 0–15 min</div>
    <h3>Init — Project Scaffold</h3>
    <p>GitHub repo created, Next.js project scaffolded, TypeScript and Tailwind CSS 4 configured, base directory structure established. Deliverable: an empty project that boots locally.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🤖</div>
    <div class="time-badge">Batch 2 · 15–35 min</div>
    <h3>Core — AI Identification Pipeline</h3>
    <p>Photo upload component, image preprocessing logic, LLM vision model API integration, structured output parsing (breed + confidence + price range + facts). Deliverable: the core product working — upload a photo and see results.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">🎨</div>
    <div class="time-badge">Batch 3 · 35–50 min</div>
    <h3>UI + History</h3>
    <p>UI polish (from functionally working to visually refined), EN/ZH bilingual toggle implementation, Supabase database connection, history storage and display. Deliverable: complete user experience, bilingual interface, browsable history.</p>
  </div>
  <div class="pipeline-card">
    <div class="card-icon">✅</div>
    <div class="time-badge">Batch 4 · 50–60 min</div>
    <h3>Deploy — Production Live</h3>
    <p>Vercel deployment configuration, environment variables set up, final QA pass (Haiku executes), production environment verification. Deliverable: publicly accessible app with a live URL, production ready.</p>
  </div>
</div>

Every batch completion went through PR review — two Pull Requests opened across the project, with code comments and merge records. The same workflow a real dev team would run. No shortcuts, no "get it running first, fix it later" technical debt. This is the essential difference between HxA Team and "rapid prototyping tools": it delivers architecture-sound, production-deployed applications with a complete deployment pipeline — not demos that work in a presentation but can't be shipped.

</div>

<div class="case-section">

## <em>Tech Stack</em> Breakdown

Every technology choice the Coordinator (Opus) made at the architecture stage had a clear reason behind it:

<table class="tech-table">
  <thead>
    <tr>
      <th>Technology</th>
      <th>Role</th>
      <th>Why This Choice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Next.js + TypeScript</strong></td>
      <td>Full-stack framework</td>
      <td>Unified frontend/backend framework; TypeScript provides type safety, reducing runtime errors</td>
    </tr>
    <tr>
      <td><strong>Tailwind CSS 4</strong></td>
      <td>UI styling system</td>
      <td>Utility-first approach enables rapid UI iteration; highest efficiency when paired with AI code generation</td>
    </tr>
    <tr>
      <td><strong>LLM Vision Model</strong></td>
      <td>Cat breed identification AI</td>
      <td>Multimodal large model processes images directly, returns structured breed analysis</td>
    </tr>
    <tr>
      <td><strong>Supabase</strong></td>
      <td>History database</td>
      <td>Managed PostgreSQL, simple setup, ideal for persistence needs during rapid development</td>
    </tr>
    <tr>
      <td><strong>Vercel</strong></td>
      <td>Deployment hosting</td>
      <td>Native Next.js integration, zero-config deployment, automatic HTTPS and CDN</td>
    </tr>
    <tr>
      <td><strong>GitHub PR Workflow</strong></td>
      <td>Code version control</td>
      <td>Maintains real development standards: code is traceable, technical debt stays manageable</td>
    </tr>
  </tbody>
</table>

This stack selection reflects an important HxA Team principle in architecture decisions: choose mature, widely-used technologies rather than chasing the newest. Next.js and Supabase are mainstream choices for full-stack frontend development as of 2024–2026, with extensive documentation and community support — which means higher accuracy from AI on implementation details. For projects that need fast delivery and may need maintenance and extension later, this is a wiser call than reaching for the latest shiny tool.

</div>

<div class="case-section">

## Why This Is <em>More Than a Fun Story</em>

Cat breed identification isn't the point. What this case reveals is a bigger shift: the barrier to building software is being fundamentally reconstructed.

For a long time, "technical" and "non-technical" were two cleanly separated camps. Technical people could turn ideas into software. Non-technical people needed to find technical people, or give up. That boundary is starting to blur under AI agent development frameworks. People with good product judgment, business understanding, and intuition for what makes a great user experience can now use AI digital employees to translate that judgment directly into code.

This isn't saying software engineers have lost their value. For complex systems, high security requirements, and large-scale architecture, the depth of professional engineers is still irreplaceable. But for internal tools, data visualization, productivity apps, consumer product prototypes — this entire class of software needs that were previously shelved because they "weren't worth engineering time" or "weren't worth outsourcing" now has a new path to reality.

This team member's case is concrete proof: a business-background person, in one evening, independently completed a full-stack application from zero to production. If she can, so can the business-minded people on your team.

<div class="case-quote">
  <p>"I kept waiting for it to hit a wall and ask me to find a developer. It never did. Every time I said 'I want it to also do X,' it just... did X."</p>
</div>

</div>

<div class="case-section">

<div class="insight-block">
  <h3>Non-Technical People Can Now Ship Software</h3>
  <p>HxA Team isn't one AI rapidly writing code — it's a multi-agent collaboration process with three distinct roles: planning, execution, and quality assurance. The same organizational structure as a real team. Sound architecture, rigorous process, sustainable maintenance. This is the real democratization AI makes possible: software creation is no longer the exclusive domain of a technical few.</p>
</div>

</div>

<div class="case-section">

## FAQ

### Q: Can someone with zero coding experience really build an app with HxA Team?

Yes — this case is the most direct proof. What you need is to clearly describe what you want: what features the app has, what the user experience should feel like, any technical preferences or constraints you have. HxA Team handles all the technical implementation. Your role throughout the process is Product Owner: describe requirements, review iterations, give feedback. No code reading required.

### Q: Is the quality of apps HxA Team builds good enough for real use?

This cat breed identifier app is itself deployed on Vercel with a public URL — a complete production deployment. The tech stack (Next.js + TypeScript + Supabase + Vercel) is the industry-standard full-stack solution, code managed through a GitHub PR workflow with comments and version history. This isn't a hastily thrown-together demo; it's a production app with sound architecture. For financial-grade security requirements or hyper-scale systems, we'd recommend additional review from professional engineers on top of what AI delivers.

### Q: What specific AI models do the Coordinator, Developer, and QA roles use?

The Coordinator role uses Claude Opus (strong reasoning, architecture planning capability). The Developer role uses Claude Sonnet (high-quality code generation). The QA role uses Claude Haiku (fast, systematic test verification). The model selection for these roles isn't fixed — it can be adjusted based on specific project needs and cost considerations. The key is the division-of-labor mechanism itself: using the most appropriate model for each task type rather than one model for everything.

### Q: What decisions do I need to make during the process?

Primarily product-level decisions: feature scope (what the app should do), UX direction (what it should feel like), visual style (minimal? polished? a specific theme?), language and content (single language or bilingual, what tone). Technical decisions — stack selection, architecture design, database schema — are handled by the Coordinator, who will explain the reasoning but doesn't require you to have a technical background to evaluate it.

### Q: If I want to add features or change the app later, can AI help with ongoing maintenance?

Yes. This is actually one of COCO AI Agent's core advantages: long-term memory and context continuity. The AI remembers how this application was built, what tech stack was used, what component dependencies exist. When you want to add a new feature three months from now, you don't need to re-explain the entire project background — the AI still remembers. This is a fundamental difference from hiring freelancers: after a freelance delivery you're on your own; an AI digital employee is a continuously available long-term collaborator.

### Q: How long does it take to build an app of similar complexity with COCO HxA Team?

This case was 60 minutes for a full-stack app with 4 core feature modules (upload, AI analysis, bilingual UI, history tracking) — representing high efficiency. Simpler single-function tools might be done in 20–30 minutes. More complex products (multi-user, permissions systems, third-party API integrations) might take several hours to a day. The primary factor determining duration is the clarity and complexity of requirements, not AI speed — AI is usually waiting for Product Owner feedback, not waiting for code to generate.

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
    <h2>Hand Your Idea to an AI Team</h2>
    <p>No coding required — HxA Team handles architecture through deployment</p>
    <a href="https://coco.xyz" class="cta-btn">Try COCO Free</a>
  </div>
</div>

<div class="blog-related">
  <div class="blog-divider-shell">🐚</div>
  <h3>More Case Studies</h3>
  <div class="blog-related-grid">
    <a class="blog-related-card" href="/case-studies/hxa-team">
      <div class="blog-related-card-img">🐙</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">From 1 AI Employee to 1 AI Team</div>
        <div class="blog-related-card-desc">7 agents running in parallel. Kevin just sets direction. Website live in 20 minutes.</div>
      </div>
    </a>
    <a class="blog-related-card" href="/case-studies/wishforever">
      <div class="blog-related-card-img">⛓️</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">WishForever — Solo Web3 dApp, On-Chain</div>
        <div class="blog-related-card-desc">1,247 wishes permanently inscribed on Ethereum. One founder, one AI, production dApp.</div>
      </div>
    </a>
    <a class="blog-related-card" href="/case-studies/crm">
      <div class="blog-related-card-img">📊</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">COCO CRM — Built by AI, Run by AI</div>
        <div class="blog-related-card-desc">A complete CRM system designed, built, and operated daily by an AI Agent digital employee.</div>
      </div>
    </a>
    <a class="blog-related-card" href="/case-studies/social-media">
      <div class="blog-related-card-img">📱</div>
      <div class="blog-related-card-body">
        <div class="blog-related-card-label">AI Agent Case Study</div>
        <div class="blog-related-card-title">Social Media & BD Automation</div>
        <div class="blog-related-card-desc">From one prompt to a full operating model. AI handles the volume, humans set the strategy.</div>
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
