#!/usr/bin/env node
/**
 * Generate docs use-case pages from coco-content source files.
 * v2: Collapsible sections, per-category numbering, CN titles, clean formatting.
 */

const fs = require('fs');
const path = require('path');

const BASE = '/home/howard/zylos/coco-materials';
const SRC = `${BASE}/coco-content/use-cases`;
const DOCS_EN = `${BASE}/docs/use-cases`;
const DOCS_CN = `${BASE}/docs/zh/use-cases`;

// Chinese title translations
const cnTitles = {
  5: 'AI代码审查', 6: 'AI测试生成', 7: 'AI部署监控',
  8: 'AI API文档编写', 9: 'AI调试助手',
  10: 'AI SEO内容写作', 11: 'AI社媒管理', 12: 'AI广告文案生成',
  13: 'AI简报策展', 14: 'AI竞品文案分析',
  15: 'AI线索调研', 16: 'AI CRM管家', 17: 'AI方案生成',
  18: 'AI跟进邮件', 19: 'AI客户调研简报', 20: 'AI报价计算',
  21: 'AI工单分类', 22: 'AI知识库构建', 23: 'AI多语言客服', 24: 'AI VIP升级管理',
  25: 'AI简历筛选', 26: 'AI职位描述编写', 27: 'AI面试排期', 28: 'AI入职助手',
  29: 'AI费用审计', 30: 'AI财务报告生成', 31: 'AI发票处理',
  32: 'AI会议纪要', 33: 'AI库存预测', 34: 'AI供应商评估',
  35: 'AI代码迁移', 36: 'AI性能分析', 37: 'AI安全扫描', 38: 'AI数据库优化', 39: 'AI依赖管理',
  40: 'AI品牌监测', 41: 'AI达人发现', 42: 'AI营销分析', 43: 'AI内容日历', 44: 'AI用户画像',
  45: 'AI销售预测', 46: 'AI演示定制', 47: 'AI定价优化', 48: 'AI合同分析', 49: 'AI流失预测',
  50: 'AI客服机器人训练', 51: 'AI缺陷排序', 52: 'AI SLA跟踪', 53: 'AI情感分析', 54: 'AI FAQ生成',
  55: 'AI员工脉搏', 56: 'AI培训推荐', 57: 'AI薪酬对标', 58: 'AI绩效评审', 59: 'AI政策更新',
  60: 'AI现金流预测', 61: 'AI合规检查', 62: 'AI流程挖掘', 63: 'AI文档分类', 64: 'AI风险评分',
};

// EN short titles (cleaner than source)
const enTitles = {
  5: 'AI Code Reviewer', 6: 'AI Test Generator', 7: 'AI Deploy Monitor',
  8: 'AI API Doc Writer', 9: 'AI Debug Assistant',
  10: 'AI SEO Content Writer', 11: 'AI Social Media Manager', 12: 'AI Ad Copy Generator',
  13: 'AI Newsletter Curator', 14: 'AI Competitive Copywriter',
  15: 'AI Lead Researcher', 16: 'AI CRM Updater', 17: 'AI Proposal Generator',
  18: 'AI Follow-up Writer', 19: 'AI Client Research Brief', 20: 'AI Quote Calculator',
  21: 'AI Ticket Classifier', 22: 'AI Knowledge Base Builder', 23: 'AI Multi-Language Support', 24: 'AI VIP Escalation',
  25: 'AI Resume Screener', 26: 'AI Job Description Writer', 27: 'AI Interview Scheduler', 28: 'AI Onboarding Assistant',
  29: 'AI Expense Auditor', 30: 'AI Financial Report Generator', 31: 'AI Invoice Processor',
  32: 'AI Meeting Notes', 33: 'AI Inventory Forecaster', 34: 'AI Vendor Evaluator',
  35: 'AI Code Migrator', 36: 'AI Performance Profiler', 37: 'AI Security Scanner', 38: 'AI Database Optimizer', 39: 'AI Dependency Manager',
  40: 'AI Brand Monitor', 41: 'AI Influencer Finder', 42: 'AI Campaign Analyzer', 43: 'AI Content Calendar', 44: 'AI Persona Builder',
  45: 'AI Sales Forecaster', 46: 'AI Demo Personalizer', 47: 'AI Pricing Optimizer', 48: 'AI Contract Analyzer', 49: 'AI Churn Predictor',
  50: 'AI Chatbot Trainer', 51: 'AI Bug Prioritizer', 52: 'AI SLA Tracker', 53: 'AI Sentiment Analyzer', 54: 'AI FAQ Generator',
  55: 'AI Employee Pulse', 56: 'AI Training Recommender', 57: 'AI Comp Benchmarker', 58: 'AI Review Writer', 59: 'AI Policy Updater',
  60: 'AI Cash Flow Forecaster', 61: 'AI Compliance Checker', 62: 'AI Process Miner', 63: 'AI Document Classifier', 64: 'AI Risk Scorer',
};

// CN one-line summaries for each case
const cnSummaries = {
  5: '自动审查每个PR：Bug、安全漏洞、性能问题——15分钟出完整报告。',
  6: '读取源码，30分钟生成包含边界条件的完整测试。覆盖率从34%提升到89%。',
  7: '实时监控每次部署，90秒检测异常，自动回滚。MTTR从47分钟降至2分钟。',
  8: '从代码库自动生成并同步API文档，多语言示例，零偏差。',
  9: '粘贴错误日志，AI从症状追溯到根因，提供可直接应用的修复diff。',
  10: '20分钟产出一篇SEO优化的高质量文章，关键词研究到终稿一站式完成。',
  11: '一次输入，全平台适配发布。每天3小时社媒运营缩减到15分钟。',
  12: '10分钟生成200个A/B变体广告文案，数据驱动迭代优化。',
  13: '自动汇聚行业资讯，5小时/周的人工策展变为30分钟。',
  14: '实时追踪竞品动态，2天调研变为1小时自动化输出。',
  15: '一天调研200个线索，自动从LinkedIn、企查查抓取并打分。',
  16: '通话、邮件、会议自动同步CRM，45分钟/天数据录入变为0。',
  17: '15分钟生成定制化方案书，基于客户需求自动匹配。',
  18: '2分钟生成个性化跟进邮件，基于会议上下文和客户行为。',
  19: '8分钟生成客户会议简报，多源情报汇聚，高管画像深入。',
  20: '10分钟完成复杂报价计算，自动匹配折扣规则和审批流程。',
  21: '工单自动分类路由，5分钟/单变为即时处理。',
  22: '1小时生成50篇知识库文章，从工单和对话自动提取。',
  23: 'AI一键支持15+语言客服，替代5个翻译人员。',
  24: '自动识别VIP客户异常，30%漏检降至0%。',
  25: '2小时筛选500份简历，替代3天人工筛选。',
  26: '10分钟生成无偏见、SEO优化的职位描述。',
  27: '3分钟完成面试排期，自动协调多方日历。',
  28: '新员工3天完成入职，替代传统2周流程。',
  29: '费用报告即时审核，合规自动通过，异常自动标记。',
  30: '3小时生成多源数据对账的财务报告，替代2天人工。',
  31: '30秒处理一张发票：提取、匹配、路由全自动。',
  32: '会议结束即出纪要：转录、摘要、待办分配一步到位。',
  33: '实时库存预测，替代每周手动盘点，减少滞销和缺货。',
  34: '2小时完成供应商评估排名，替代1周人工调研。',
  35: '230万行遗留代码迁移从8年缩短到14个月，缺陷率从23%降至3%。',
  36: '页面加载从4.7秒优化到0.9秒，3周诊断时间变4小时。',
  37: '持续安全扫描，误报率从91%降至8%，修复时间从38天到4天。',
  38: '慢查询从12秒优化到0.3秒，云计算成本降低42%。',
  39: '自动管理1847个依赖，23个CVE全部清零，更新成功率94%。',
  40: '品牌危机发现时间从72小时降至11分钟，覆盖率从10%到97%。',
  41: '达人审核从15小时降至20分钟，投放ROI从0.8倍提升到4.2倍。',
  42: '统一6渠道23个活动的归因分析，ROAS提升37%。',
  43: '内容规划从每周8小时降至45分钟，发布一致性从62%到96%。',
  44: '用户画像创建从6周缩短到2天，细分准确度89%。',
  45: '销售预测误差从40%降至8%，成交预测91%准确。',
  46: '演示准备从4小时降至15分钟，演示转化率从18%提至34%。',
  47: '实时竞品定价监控，响应时间从3周到4小时，用户收入+23%。',
  48: '合同审查从5天降至45分钟，风险检出率从72%提至99%。',
  49: '客户流失预测87%准确，挽回率从12%提至41%。',
  50: '客服机器人解决率从27%提至78%，训练时间从6个月到2周。',
  51: 'Bug分诊从6小时/Sprint降至30分钟，严重Bug修复从14天到3天。',
  52: 'SLA违约从12次/季降至1次/季，罚金从$20万/年降至$1.5万/年。',
  53: '100%处理14000条月度反馈，问题发现从3周到24小时。',
  54: '工单分流+45%，FAQ覆盖从120篇到850+篇，每周节省23小时。',
  55: '员工调查响应率从31%提至82%，离职预测89%准确。',
  56: '培训完成率从23%提至71%，6个月技能差距关闭64%。',
  57: '实时薪酬对标，Offer竞争力从52%提至89%，遗憾离职降35%。',
  58: '绩效评审撰写从40小时降至6小时，可操作反馈从24%提至87%。',
  59: '847份政策文档更新从6周缩短到4天，合规风险降89%。',
  60: '现金流预测准确率从64%提至93%，全年零现金危机。',
  61: '交易合规检查覆盖率从5%到100%，审计准备从6周到3天。',
  62: '流程时间从14天降至4天，返工率从31%降至8%。',
  63: '文档搜索从18分钟降至30秒，错误分类从34%降至3%。',
  64: '风险预测84%准确，每年预防$420万损失。',
};

const enSummaries = {
  5: 'Auto-reviews every PR: bugs, security, performance — full report in 15 minutes.',
  6: 'Reads source code and generates comprehensive tests with edge cases. Coverage: 34% → 89%.',
  7: 'Monitors every deploy in real-time, detects anomalies in 90s, auto-rollbacks. MTTR: 47min → 2min.',
  8: 'Auto-generates and syncs API docs from codebase, multi-language examples, zero drift.',
  9: 'Paste error logs, AI traces from symptom to root cause, provides ready-to-apply fix diffs.',
  10: 'Produces an SEO-optimized article in 20 minutes, from keyword research to final draft.',
  11: 'One input, all platforms. 3 hours/day social media ops reduced to 15 minutes.',
  12: 'Generates 200 A/B ad copy variants in 10 minutes with data-driven optimization.',
  13: 'Auto-curates industry news. 5 hours/week manual curation becomes 30 minutes.',
  14: 'Real-time competitive tracking. 2 days of research becomes 1 hour of automated insights.',
  15: 'Researches 200 leads/day, auto-enriched from LinkedIn, Crunchbase, scored and ready.',
  16: 'Calls, emails, meetings auto-synced to CRM. 45 min/day data entry becomes zero.',
  17: 'Generates customized proposals in 15 minutes, auto-matched to client needs.',
  18: 'Generates personalized follow-up emails in 2 minutes, based on meeting context.',
  19: 'Generates client meeting brief in 8 minutes: multi-source intel, executive profile deep-dive.',
  20: 'Complex quote calculation in 10 minutes, auto-matching discount rules and approval workflows.',
  21: 'Auto-classifies and routes tickets. 5 min/ticket becomes instant.',
  22: 'Generates 50 knowledge base articles in 1 hour, auto-extracted from tickets and conversations.',
  23: 'One AI agent supports 15+ languages, replacing 5 translators.',
  24: 'Auto-detects VIP customer anomalies. 30% missed issues drops to 0%.',
  25: 'Screens 500 resumes in 2 hours, replacing 3 days of manual screening.',
  26: 'Generates bias-free, SEO-optimized job descriptions in 10 minutes.',
  27: 'Schedules interviews in 3 minutes, auto-coordinating multiple calendars.',
  28: 'New hire fully onboarded in 3 days instead of 2 weeks.',
  29: 'Instant expense report audit. Compliant: auto-approved. Anomalies: auto-flagged.',
  30: 'Multi-source financial report in 3 hours, replacing 2 days of manual work.',
  31: 'Processes an invoice in 30 seconds: extract, match, route — fully automated.',
  32: 'Meeting notes ready instantly: transcript, summary, action items assigned.',
  33: 'Real-time inventory forecasting, replacing weekly manual stocktakes.',
  34: 'Vendor evaluation and ranking in 2 hours, replacing 1 week of manual research.',
  35: '2.3M lines legacy code migration: 8 years → 14 months. Defect rate: 23% → 3.1%.',
  36: 'Page load 4.7s → 0.9s. 3-week diagnosis becomes 4 hours. Revenue recovery: $280K/mo.',
  37: 'Continuous security scanning. False positives: 91% → 8%. Fix time: 38 days → 4 days.',
  38: 'Query time 12s → 0.3s. Cloud costs down 42%. DBA tickets: 47 → 6.',
  39: 'Manages 1,847 dependencies. 23 CVEs → 0. Update success rate: 94%.',
  40: 'Brand crisis detection: 72 hours → 11 minutes. Coverage: 10% → 97%.',
  41: 'Influencer vetting: 15 hours → 20 minutes. Campaign ROI: 0.8x → 4.2x.',
  42: 'Unifies 6 channels, 23 campaigns into single attribution. ROAS +37%.',
  43: 'Content planning: 8 hrs/week → 45 min/week. Publishing consistency: 62% → 96%.',
  44: 'Persona creation: 6 weeks → 2 days. Segment accuracy: 89%.',
  45: 'Sales forecast error: 40% → 8%. Deal prediction: 91% accurate.',
  46: 'Demo prep: 4 hours → 15 minutes. Demo-to-close rate: 18% → 34%.',
  47: 'Real-time competitor pricing monitoring. Response: 3 weeks → 4 hours. Revenue/user +23%.',
  48: 'Contract review: 5 days → 45 minutes. Risk detection: 72% → 99%.',
  49: 'Churn prediction: 87% accurate. Save rate: 12% → 41%. NRR +18pts.',
  50: 'Chatbot resolution: 27% → 78%. Training: 6 months → 2 weeks. CSAT: 3.1 → 4.4.',
  51: 'Bug triage: 6 hrs/sprint → 30 min. Critical fix: 14 days → 3 days.',
  52: 'SLA breaches: 12/quarter → 1/quarter. Penalties: $200K/yr → $15K/yr.',
  53: 'Processes 100% of 14K monthly feedback. Issue detection: 3 weeks → 24 hours.',
  54: 'Ticket deflection +45%. FAQ coverage: 120 → 850+ articles. 23 hrs/week saved.',
  55: 'Survey response: 31% → 82%. Turnover prediction: 89% accurate.',
  56: 'Training completion: 23% → 71%. Skill gaps closed: 64% in 6 months.',
  57: 'Real-time comp benchmarking. Offer competitiveness: 52% → 89%. Attrition -35%.',
  58: 'Review writing: 40 hours → 6 hours. Actionable feedback: 24% → 87%.',
  59: '847 policy docs updated: 6 weeks → 4 days. Compliance risk -89%.',
  60: 'Cash flow forecast accuracy: 64% → 93%. Zero cash crises per year.',
  61: 'Transaction compliance: 5% sampled → 100% checked. Audit prep: 6 weeks → 3 days.',
  62: 'Process cycle: 14 days → 4 days. Rework rate: 31% → 8%. Cost -47%.',
  63: 'Document search: 18 min → 30 sec. Misclassification: 34% → 3%.',
  64: 'Risk prediction: 84% accurate. Loss prevention: $4.2M/year saved.',
};

// Find source file for a given case number and language
function findSource(caseNum, lang) {
  const pad = String(caseNum).padStart(3, '0');
  const dirs = ['by-role/developer', 'by-role/devops', 'by-role/marketing',
                'by-role/support', 'by-role/operations', 'by-role/tech-lead', 'by-role/pm',
                'by-role/sales', 'by-role/hr', 'by-role/finance', 'by-role/designer'];
  for (const dir of dirs) {
    const fullDir = path.join(SRC, dir, lang);
    if (!fs.existsSync(fullDir)) continue;
    const files = fs.readdirSync(fullDir).filter(f => f.startsWith(pad + '-'));
    if (files.length > 0) {
      return fs.readFileSync(path.join(fullDir, files[0]), 'utf8');
    }
  }
  const taskDirs = fs.readdirSync(path.join(SRC, 'by-task'));
  for (const td of taskDirs) {
    const fullDir = path.join(SRC, 'by-task', td, lang);
    if (!fs.existsSync(fullDir)) continue;
    const files = fs.readdirSync(fullDir).filter(f => f.startsWith(pad + '-'));
    if (files.length > 0) {
      return fs.readFileSync(path.join(fullDir, files[0]), 'utf8');
    }
  }
  console.error(`WARNING: No source found for case #${pad} (${lang})`);
  return null;
}

/**
 * Parse source file into sections
 */
function parseSections(src, lang) {
  const isEN = lang === 'en';
  const lines = src.split('\n');

  // Extract title from first # line
  let origTitle = '';
  for (const l of lines) {
    if (l.startsWith('# ')) { origTitle = l.replace(/^# /, ''); break; }
  }

  // Find section boundaries
  const painMarkerEN = /^\*\*The Pain:|^\*\*痛点/;
  const solveMarkerEN = /^\*\*How COCO Solves|^\*\*COCO如何解决/;
  const resultsMarkerEN = /^\*\*Measurable Results|^\*\*可量化的结果/;
  const benefitsMarkerEN = /^\*\*Who Benefits|^\*\*受益角色/;
  const promptsMarkerEN = /^## Practical Prompts|^## 实用提示词/;

  let painStart = -1, solveStart = -1, resultsStart = -1, benefitsStart = -1, promptsStart = -1;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (painMarkerEN.test(l)) painStart = i;
    else if (solveMarkerEN.test(l)) solveStart = i;
    else if (resultsMarkerEN.test(l)) resultsStart = i;
    else if (benefitsMarkerEN.test(l)) benefitsStart = i;
    else if (promptsMarkerEN.test(l)) promptsStart = i;
  }

  function extractSection(start, end) {
    if (start < 0) return '';
    const e = end > 0 ? end : lines.length;
    return lines.slice(start, e).join('\n').trim();
  }

  // Pain + Solution combined (up to results)
  const painSolution = extractSection(painStart, resultsStart > 0 ? resultsStart : benefitsStart);

  // Results section
  let results = '';
  if (resultsStart > 0) {
    // Skip the "**Measurable Results**" header line and any intro line
    let rStart = resultsStart + 1;
    // Skip blank lines and intro text
    while (rStart < lines.length && !lines[rStart].startsWith('-') && !lines[rStart].startsWith('|')) rStart++;
    const rEnd = benefitsStart > 0 ? benefitsStart : (promptsStart > 0 ? promptsStart : lines.length);
    results = lines.slice(rStart, rEnd).join('\n').trim();
  }

  // Benefits section
  let benefits = '';
  if (benefitsStart > 0) {
    let bStart = benefitsStart + 1;
    while (bStart < lines.length && !lines[bStart].startsWith('-')) bStart++;
    // Find end: next --- or prompts section
    let bEnd = lines.length;
    for (let i = bStart; i < lines.length; i++) {
      if (lines[i] === '---' || (promptsMarkerEN.test(lines[i]))) { bEnd = i; break; }
    }
    benefits = lines.slice(bStart, bEnd).join('\n').trim();
  }

  // Prompts section
  let prompts = '';
  if (promptsStart > 0) {
    let pStart = promptsStart + 1;
    // Skip blank lines
    while (pStart < lines.length && lines[pStart].trim() === '') pStart++;
    // Collect until end, removing trailing ---
    let pLines = lines.slice(pStart);
    // Remove trailing --- lines
    while (pLines.length > 0 && (pLines[pLines.length-1].trim() === '---' || pLines[pLines.length-1].trim() === '')) {
      pLines.pop();
    }
    prompts = pLines.join('\n').trim();
  }

  return { origTitle, painSolution, results, benefits, prompts };
}

// Video mapping — all 30 EN videos
const videosEN = {
  '005': '/videos/en/005-ai-code-reviewer.mp4',
  '006': '/videos/en/006-ai-test-generator.mp4',
  '007': '/videos/en/007-ai-deploy-monitor.mp4',
  '008': '/videos/en/008-ai-api-doc-writer.mp4',
  '009': '/videos/en/009-ai-debug-assistant.mp4',
  '010': '/videos/en/010-ai-seo-content-writer.mp4',
  '011': '/videos/en/011-ai-social-media-manager.mp4',
  '012': '/videos/en/012-ai-ad-copy-generator.mp4',
  '013': '/videos/en/013-ai-newsletter-curator.mp4',
  '014': '/videos/en/014-ai-competitive-copywriter.mp4',
  '015': '/videos/en/015-ai-lead-researcher.mp4',
  '016': '/videos/en/016-ai-crm-updater.mp4',
  '017': '/videos/en/017-ai-proposal-generator.mp4',
  '018': '/videos/en/018-ai-follow-up-writer.mp4',
  '019': '/videos/en/019-ai-client-research-brief.mp4',
  '020': '/videos/en/020-ai-quote-calculator.mp4',
  '021': '/videos/en/021-ai-ticket-classifier.mp4',
  '022': '/videos/en/022-ai-knowledge-base-builder.mp4',
  '023': '/videos/en/023-ai-multi-language-support.mp4',
  '024': '/videos/en/024-ai-vip-escalation.mp4',
  '025': '/videos/en/025-ai-resume-screener.mp4',
  '026': '/videos/en/026-ai-job-description-writer.mp4',
  '027': '/videos/en/027-ai-interview-scheduler.mp4',
  '028': '/videos/en/028-ai-onboarding-assistant.mp4',
  '029': '/videos/en/029-ai-expense-auditor.mp4',
  '030': '/videos/en/030-ai-financial-report-generator.mp4',
  '031': '/videos/en/031-ai-invoice-processor.mp4',
  '032': '/videos/en/032-ai-meeting-notes.mp4',
  '033': '/videos/en/033-ai-inventory-forecaster.mp4',
  '034': '/videos/en/034-ai-vendor-evaluator.mp4',
  '035': '/videos/en/035-ai-code-migrator.mp4', '036': '/videos/en/036-ai-performance-profiler.mp4',
  '037': '/videos/en/037-ai-security-scanner.mp4', '038': '/videos/en/038-ai-database-optimizer.mp4',
  '039': '/videos/en/039-ai-dependency-manager.mp4', '040': '/videos/en/040-ai-brand-monitor.mp4',
  '041': '/videos/en/041-ai-influencer-finder.mp4', '042': '/videos/en/042-ai-campaign-analyzer.mp4',
  '043': '/videos/en/043-ai-content-calendar.mp4', '044': '/videos/en/044-ai-persona-builder.mp4',
  '045': '/videos/en/045-ai-sales-forecaster.mp4', '046': '/videos/en/046-ai-demo-personalizer.mp4',
  '047': '/videos/en/047-ai-pricing-optimizer.mp4', '048': '/videos/en/048-ai-contract-analyzer.mp4',
  '049': '/videos/en/049-ai-churn-predictor.mp4', '050': '/videos/en/050-ai-chatbot-trainer.mp4',
  '051': '/videos/en/051-ai-bug-prioritizer.mp4', '052': '/videos/en/052-ai-sla-tracker.mp4',
  '053': '/videos/en/053-ai-sentiment-analyzer.mp4', '054': '/videos/en/054-ai-faq-generator.mp4',
  '055': '/videos/en/055-ai-employee-pulse.mp4', '056': '/videos/en/056-ai-training-recommender.mp4',
  '057': '/videos/en/057-ai-comp-benchmarker.mp4', '058': '/videos/en/058-ai-review-writer.mp4',
  '059': '/videos/en/059-ai-policy-updater.mp4', '060': '/videos/en/060-ai-cash-flow-forecaster.mp4',
  '061': '/videos/en/061-ai-compliance-checker.mp4', '062': '/videos/en/062-ai-process-miner.mp4',
  '063': '/videos/en/063-ai-document-classifier.mp4', '064': '/videos/en/064-ai-risk-scorer.mp4',
};
// CN videos: all CN versions available
const videosCN = {
  '005': '/videos/cn/005-ai-code-reviewer.mp4',
  '006': '/videos/cn/006-ai-test-generator.mp4',
  '007': '/videos/cn/007-ai-deploy-monitor.mp4',
  '008': '/videos/cn/008-ai-api-doc-writer.mp4',
  '009': '/videos/cn/009-ai-debug-assistant.mp4',
  '010': '/videos/cn/010-ai-seo-content-writer.mp4',
  '011': '/videos/cn/011-ai-social-media-manager.mp4',
  '012': '/videos/cn/012-ai-ad-copy-generator.mp4',
  '013': '/videos/cn/013-ai-newsletter-curator.mp4',
  '014': '/videos/cn/014-ai-competitive-copywriter.mp4',
  '015': '/videos/cn/015-ai-lead-researcher.mp4',
  '016': '/videos/cn/016-ai-crm-updater.mp4',
  '017': '/videos/cn/017-ai-proposal-generator.mp4',
  '018': '/videos/cn/018-ai-follow-up-writer.mp4',
  '019': '/videos/cn/019-ai-client-research-brief.mp4',
  '020': '/videos/cn/020-ai-quote-calculator.mp4',
  '021': '/videos/cn/021-ai-ticket-classifier.mp4',
  '022': '/videos/cn/022-ai-knowledge-base-builder.mp4',
  '023': '/videos/cn/023-ai-multi-language-support.mp4',
  '024': '/videos/cn/024-ai-vip-escalation.mp4',
  '025': '/videos/cn/025-ai-resume-screener.mp4',
  '026': '/videos/cn/026-ai-job-description-writer.mp4',
  '027': '/videos/cn/027-ai-interview-scheduler.mp4',
  '028': '/videos/cn/028-ai-onboarding-assistant.mp4',
  '029': '/videos/cn/029-ai-expense-auditor.mp4',
  '030': '/videos/cn/030-ai-financial-report-generator.mp4',
  '031': '/videos/cn/031-ai-invoice-processor.mp4',
  '032': '/videos/cn/032-ai-meeting-notes.mp4',
  '033': '/videos/cn/033-ai-inventory-forecaster.mp4',
  '034': '/videos/cn/034-ai-vendor-evaluator.mp4',
  '035': '/videos/cn/035-ai-code-migrator.mp4', '036': '/videos/cn/036-ai-performance-profiler.mp4',
  '037': '/videos/cn/037-ai-security-scanner.mp4', '038': '/videos/cn/038-ai-database-optimizer.mp4',
  '039': '/videos/cn/039-ai-dependency-manager.mp4', '040': '/videos/cn/040-ai-brand-monitor.mp4',
  '041': '/videos/cn/041-ai-influencer-finder.mp4', '042': '/videos/cn/042-ai-campaign-analyzer.mp4',
  '043': '/videos/cn/043-ai-content-calendar.mp4', '044': '/videos/cn/044-ai-persona-builder.mp4',
  '045': '/videos/cn/045-ai-sales-forecaster.mp4', '046': '/videos/cn/046-ai-demo-personalizer.mp4',
  '047': '/videos/cn/047-ai-pricing-optimizer.mp4', '048': '/videos/cn/048-ai-contract-analyzer.mp4',
  '049': '/videos/cn/049-ai-churn-predictor.mp4', '050': '/videos/cn/050-ai-chatbot-trainer.mp4',
  '051': '/videos/cn/051-ai-bug-prioritizer.mp4', '052': '/videos/cn/052-ai-sla-tracker.mp4',
  '053': '/videos/cn/053-ai-sentiment-analyzer.mp4', '054': '/videos/cn/054-ai-faq-generator.mp4',
  '055': '/videos/cn/055-ai-employee-pulse.mp4', '056': '/videos/cn/056-ai-training-recommender.mp4',
  '057': '/videos/cn/057-ai-comp-benchmarker.mp4', '058': '/videos/cn/058-ai-review-writer.mp4',
  '059': '/videos/cn/059-ai-policy-updater.mp4', '060': '/videos/cn/060-ai-cash-flow-forecaster.mp4',
  '061': '/videos/cn/061-ai-compliance-checker.mp4', '062': '/videos/cn/062-ai-process-miner.mp4',
  '063': '/videos/cn/063-ai-document-classifier.mp4', '064': '/videos/cn/064-ai-risk-scorer.mp4',
};

// Role pages
const rolePages = {
  'role/product-dev': {
    title_en: 'Product & Dev', desc_en: 'AI-powered use cases for developers, DevOps, tech leads, and PMs.',
    title_cn: '产品与研发', desc_cn: 'AI驱动的开发者、DevOps工程师、技术负责人和产品经理用例。',
    cases: [5, 6, 7, 8, 9, 35, 36, 37, 38, 39, 51, 53],
  },
  'role/content-marketing': {
    title_en: 'Content & Marketing', desc_en: 'AI-powered use cases for content creators, marketing teams, and brand managers.',
    title_cn: '内容与营销', desc_cn: 'AI驱动的内容创作者、营销团队和品牌经理用例。',
    cases: [10, 11, 12, 13, 14, 40, 41, 42, 43, 44],
  },
  'role/sales': {
    title_en: 'Sales', desc_en: 'AI-powered use cases for SDRs, account executives, and sales leaders.',
    title_cn: '销售', desc_cn: 'AI驱动的SDR、客户经理和销售负责人用例。',
    cases: [15, 16, 17, 18, 19, 20, 45, 46, 47, 48, 49],
  },
  'role/customer-support': {
    title_en: 'Customer Support', desc_en: 'AI-powered use cases for support teams, help desk, and customer success.',
    title_cn: '客服', desc_cn: 'AI驱动的客服团队、帮助台和客户成功用例。',
    cases: [21, 22, 23, 24, 49, 50, 54],
  },
  'role/hr-recruiting': {
    title_en: 'HR & Recruiting', desc_en: 'AI-powered use cases for HR, recruiters, and people operations.',
    title_cn: 'HR与招聘', desc_cn: 'AI驱动的HR团队、招聘人员和人力运营用例。',
    cases: [25, 26, 27, 28, 55, 56, 57, 58],
  },
  'role/finance': {
    title_en: 'Finance', desc_en: 'AI-powered use cases for finance teams, accountants, and analysts.',
    title_cn: '财务', desc_cn: 'AI驱动的财务团队、会计师和财务分析师用例。',
    cases: [29, 30, 31, 60, 61],
  },
  'role/operations': {
    title_en: 'Operations', desc_en: 'AI-powered use cases for operations, procurement, and business management.',
    title_cn: '运营', desc_cn: 'AI驱动的运营经理、采购和通用业务运营用例。',
    cases: [32, 33, 34, 47, 48, 52, 59, 62, 63, 64],
  },
};

const taskPages = {
  'task/writing-content': {
    title_en: 'Writing & Content', desc_en: 'AI use cases for content creation, copywriting, and documentation.',
    title_cn: '写作与内容', desc_cn: 'AI驱动的内容创作、文案写作和文档编写用例。',
    cases: [8, 10, 11, 12, 13, 14, 17, 18, 22, 23, 26, 43, 54, 58, 59],
  },
  'task/data-analysis': {
    title_en: 'Data Analysis', desc_en: 'AI use cases for data analysis, reporting, auditing, and intelligence.',
    title_cn: '数据分析', desc_cn: 'AI驱动的数据分析、报告、审计和财务智能用例。',
    cases: [19, 20, 25, 29, 30, 33, 34, 36, 38, 42, 44, 45, 47, 48, 53, 57, 60, 62, 64],
  },
  'task/process-automation': {
    title_en: 'Process Automation', desc_en: 'AI use cases for workflow automation and operational efficiency.',
    title_cn: '流程自动化', desc_cn: 'AI驱动的工作流自动化、系统集成和运营效率用例。',
    cases: [5, 6, 7, 9, 16, 21, 24, 27, 28, 31, 32, 35, 39, 46, 50, 56, 63],
  },
  'task/research-monitoring': {
    title_en: 'Research & Monitoring', desc_en: 'AI use cases for market research, competitive intelligence, and monitoring.',
    title_cn: '调研与监控', desc_cn: 'AI驱动的市场调研、竞品分析、监控和趋势追踪用例。',
    cases: [13, 14, 15, 19, 24, 29, 33, 34, 37, 40, 41, 49, 51, 52, 55, 61],
  },
};

const industryPages = {
  'industry/technology': {
    title_en: 'Technology / SaaS', desc_en: 'AI use cases for tech companies, SaaS platforms, and dev teams.',
    title_cn: '科技/SaaS', desc_cn: 'AI驱动的科技公司、SaaS平台和软件开发团队用例。',
    cases: [5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 21, 22, 23, 25, 26, 28, 32, 35, 36, 37, 38, 39, 49, 50, 51, 53, 55, 57],
  },
  'industry/ecommerce': {
    title_en: 'E-commerce / Retail', desc_en: 'AI use cases for e-commerce, retail, and online marketplaces.',
    title_cn: '电商/零售', desc_cn: 'AI驱动的电商平台、零售运营和在线市场用例。',
    cases: [10, 11, 12, 14, 20, 21, 23, 24, 31, 33, 40, 41, 42, 43, 44, 47, 50, 54],
  },
  'industry/financial-services': {
    title_en: 'Financial Services', desc_en: 'AI use cases for banking, insurance, and financial institutions.',
    title_cn: '金融服务', desc_cn: 'AI驱动的银行、保险、投资和金融机构用例。',
    cases: [15, 19, 24, 29, 30, 31, 35, 45, 48, 59, 60, 61, 62, 64],
  },
};

function generatePage(pagePath, config, lang, docsBase) {
  const isEN = lang === 'en';
  const title = isEN ? config.title_en : config.title_cn;
  const desc = isEN ? config.desc_en : config.desc_cn;
  const videos = isEN ? videosEN : videosCN;
  const titles = isEN ? enTitles : cnTitles;
  const summaries = isEN ? enSummaries : cnSummaries;

  let content = `# ${title}\n\n${desc}\n\n`;

  let idx = 0;
  for (const caseNum of config.cases) {
    const src = findSource(caseNum, lang);
    if (!src) continue;

    idx++;
    const caseName = titles[caseNum] || `Case ${caseNum}`;
    const summary = summaries[caseNum] || '';
    const sections = parseSections(src, lang);
    const pad = String(caseNum).padStart(3, '0');

    // h2 title: "1. AI代码审查" — shows in right sidebar TOC
    content += `## ${idx}. ${caseName}\n\n`;

    // One-line summary (always visible)
    content += `> ${summary}\n\n`;

    // Video embed — collapsible
    if (videos[pad]) {
      const videoLabel = isEN ? '🎬 Watch Demo Video' : '🎬 观看演示视频';
      content += `::: details ${videoLabel}\n\n`;
      content += `<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">\n`;
      content += `  <source src="${videos[pad]}" type="video/mp4">\n`;
      content += `</video>\n\n`;
      content += `:::\n\n`;
    }

    // Collapsible: Pain point + Solution
    if (sections.painSolution) {
      const detailTitle = isEN ? 'Pain Point & How COCO Solves It' : '痛点与解决方案';
      content += `::: details ${detailTitle}\n\n`;
      content += sections.painSolution + '\n\n';
      content += `:::\n\n`;
    }

    // Collapsible: Results + Benefits
    if (sections.results || sections.benefits) {
      const detailTitle = isEN ? 'Results & Who Benefits' : '量化结果与受益角色';
      content += `::: details ${detailTitle}\n\n`;
      if (sections.results) {
        if (isEN) content += `**Measurable Results**\n\n`;
        else content += `**可量化的结果**\n\n`;
        content += sections.results + '\n\n';
      }
      if (sections.benefits) {
        if (isEN) content += `**Who Benefits**\n\n`;
        else content += `**受益角色**\n\n`;
        content += sections.benefits + '\n\n';
      }
      content += `:::\n\n`;
    }

    // Collapsible: Prompts
    if (sections.prompts) {
      const detailTitle = isEN ? 'Practical Prompts' : '实用提示词';
      content += `::: details ${detailTitle}\n\n`;
      content += sections.prompts + '\n\n';
      content += `:::\n\n`;
    }
  }

  const outPath = path.join(docsBase, pagePath + '.md');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content);
  console.log(`  Written: ${outPath} (${idx} cases)`);
}

console.log('=== Generating Use Case Pages (v2) ===\n');

console.log('--- EN Role Pages ---');
for (const [pg, cfg] of Object.entries(rolePages)) generatePage(pg, cfg, 'en', DOCS_EN);

console.log('\n--- CN Role Pages ---');
for (const [pg, cfg] of Object.entries(rolePages)) generatePage(pg, cfg, 'cn', DOCS_CN);

console.log('\n--- EN Task Pages ---');
for (const [pg, cfg] of Object.entries(taskPages)) generatePage(pg, cfg, 'en', DOCS_EN);

console.log('\n--- CN Task Pages ---');
for (const [pg, cfg] of Object.entries(taskPages)) generatePage(pg, cfg, 'cn', DOCS_CN);

console.log('\n--- EN Industry Pages ---');
for (const [pg, cfg] of Object.entries(industryPages)) generatePage(pg, cfg, 'en', DOCS_EN);

console.log('\n--- CN Industry Pages ---');
for (const [pg, cfg] of Object.entries(industryPages)) generatePage(pg, cfg, 'cn', DOCS_CN);

console.log('\n=== Done! ===');
