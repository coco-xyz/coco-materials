#!/usr/bin/env node
/**
 * Generate zh VitePress pages for batch5 cases (#232-#405)
 * Reads CN source files and appends to docs/zh/use-cases/role/*.md
 */

const fs = require('fs');
const path = require('path');

const BASE = '/home/op/zylos/workspace/coco-materials';
const SRC = `${BASE}/coco-content/use-cases`;
const DOCS_ZH = `${BASE}/docs/zh/use-cases`;

// Mapping: zh role page → batch5 CN source files
const roleConfigs = {
  'role/pm': {
    page: `${DOCS_ZH}/role/pm.md`,
    srcDirs: [`${SRC}/by-role/pm/cn`],
    batchNums: [232, 237, 238, 239, 240, 241, 242, 243, 245, 246, 247, 248],
  },
  'role/dev': {
    page: `${DOCS_ZH}/role/dev.md`,
    srcDirs: [`${SRC}/by-role/developer/cn`],
    batchNums: [233, 249, 250, 251, 252, 253, 254],
    // 255-260 have no CN files
  },
  'role/finance': {
    page: `${DOCS_ZH}/role/finance.md`,
    srcDirs: [`${SRC}/by-role/finance/cn`],
    batchNums: [234, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271],
  },
  'role/executive': {
    page: `${DOCS_ZH}/role/executive.md`,
    srcDirs: [`${SRC}/by-role/executive/cn`],
    batchNums: [235, 272, 273, 274, 275, 276, 277, 280, 281, 282],
    // 278, 279 have no CN files
  },
  'role/content-marketing': {
    page: `${DOCS_ZH}/role/content-marketing.md`,
    srcDirs: [`${SRC}/by-role/marketing/cn`],
    batchNums: [236, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293],
  },
  'role/data-analyst': {
    page: `${DOCS_ZH}/role/data-analyst.md`,
    srcDirs: [
      `${SRC}/by-role/researcher/cn`,
      `${SRC}/by-role/data-analyst/cn`,
      `${SRC}/by-role/data-scientist/cn`,
    ],
    batchNums: [294, 295, 296, 297, 298, 299, 300, 303, 304, 305,
                390, 391, 392, 393, 394, 395, 396, 397, 398, 399,
                400, 401, 402, 403, 404, 405],
    // 301, 302 have no CN files
  },
  'role/operations': {
    page: `${DOCS_ZH}/role/operations.md`,
    srcDirs: [`${SRC}/by-role/operations/cn`],
    batchNums: [306, 307, 308, 309, 310, 311, 312, 313, 314, 315,
                316, 317, 318, 319, 320, 321, 322],
  },
  'role/hr-recruiting': {
    page: `${DOCS_ZH}/role/hr-recruiting.md`,
    srcDirs: [`${SRC}/by-role/hr/cn`],
    batchNums: [323, 324, 325, 326, 327, 328, 329, 330, 331, 332,
                333, 334, 335, 336, 337, 338, 339],
  },
  'role/customer-support': {
    page: `${DOCS_ZH}/role/customer-support.md`,
    srcDirs: [`${SRC}/by-role/customer-success/cn`],
    batchNums: [340, 341, 342, 343, 344, 345, 346, 347, 348, 349,
                350, 351, 352, 353, 354, 355, 356],
  },
  'role/legal': {
    page: `${DOCS_ZH}/role/legal.md`,
    srcDirs: [`${SRC}/by-role/legal/cn`],
    batchNums: [357, 358, 359, 360, 361, 362, 363, 364],
    // 365-372 have no CN files
  },
  'role/sales': {
    page: `${DOCS_ZH}/role/sales.md`,
    srcDirs: [`${SRC}/by-role/sales/cn`],
    batchNums: [373, 374, 375, 376, 377, 378, 379, 380, 381, 382,
                383, 384, 385, 386, 387, 388, 389],
  },
};

/**
 * Find CN source file for a case number
 */
function findSourceFile(caseNum, srcDirs) {
  const pad = String(caseNum).padStart(3, '0');
  for (const dir of srcDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.startsWith(pad + '-'));
    if (files.length > 0) {
      return fs.readFileSync(path.join(dir, files[0]), 'utf8');
    }
  }
  return null;
}

// Tool name suffixes used in Chinese AI tool names
const CN_TOOL_SUFFIXES = [
  '优化器', '验证器', '生成器', '分析器', '分析师', '追踪器', '监控器', '构建器',
  '识别器', '处理器', '审查器', '编写器', '规划器', '规划师', '检测器', '预测器',
  '执行器', '协调器', '评分器', '聚合器', '路由器', '审计员', '策略师', '叙事师',
  '助手', '助理', '顾问', '引擎', '系统', '工具', '平台',
  '考古学家', '侦探', '审计师', '设计师', '培训师', '分诊师',
  '写作助手', '创建器', '整合器', '收集器', '映射器', '提取器',
  '清理器', '评估器', '报告器', '监测器', '告警器', '检索器',
  '测试器', '编排器', '诊断器', '学习器', '归因器', '分类器',
];

/**
 * Extract CN tool name from "COCO的AI..." or "COCO 的 AI ..." line
 */
function extractCNToolName(line) {
  // Remove "COCO的" or "COCO 的 " prefix
  const cleaned = line.replace(/^COCO\s*的\s*/, '');
  // cleaned now starts with "AI..."
  // Try to match tool name ending with known suffix
  for (const suffix of CN_TOOL_SUFFIXES) {
    const idx = cleaned.indexOf(suffix);
    if (idx > 0) {
      const candidate = cleaned.substring(0, idx + suffix.length).trim();
      if (candidate.startsWith('AI') && candidate.length <= 35) {
        return candidate;
      }
    }
  }
  // Fallback: take up to first punctuation/verb
  const m = cleaned.match(/^(AI[\u4e00-\u9fa5A-Za-z\s]{2,25}?)(?=[，。将对以通帮可把为使旨从自动整读是直通充当分参完])/);
  if (m) return m[1].trim();
  // Last fallback: first 15 chars
  const m2 = cleaned.match(/^(AI[\u4e00-\u9fa5A-Za-z\s]{2,15})/);
  if (m2) return m2[1].trim();
  return '';
}

/**
 * Extract CN title from source file
 * Handles: "# Use Case #NNN: EN Name", "# 用例 #NNN：CN名称",
 *           "# #NNN — CN名称", "# 使用案例 #NNN：CN名称"
 */
function extractTitle(src) {
  const lines = src.split('\n');
  let rawTitle = '';

  for (const l of lines) {
    if (!l.startsWith('# ')) continue;
    rawTitle = l.replace(/^# /, '').trim();
    // Strip various case number prefixes
    rawTitle = rawTitle.replace(/^Use\s+Case\s+#\d+:\s*/i, '');          // "Use Case #NNN: "
    rawTitle = rawTitle.replace(/^用例\s*#\d+[：:]\s*/, '');               // "用例 #NNN："
    rawTitle = rawTitle.replace(/^使用案例\s*#\d+[：:]\s*/, '');           // "使用案例 #NNN："
    rawTitle = rawTitle.replace(/^#\d+\s*[—\-–]+\s*/, '');               // "#NNN — "
    rawTitle = rawTitle.trim();
    break;
  }

  // If title has Chinese characters, use it as-is
  if (/[\u4e00-\u9fa5]/.test(rawTitle)) return rawTitle;

  // Title is English — find CN tool name from "COCO的AI..." or "COCO 的 AI ..." line
  for (const l of lines) {
    if (/^COCO\s*的\s*AI/.test(l)) {
      const name = extractCNToolName(l);
      if (name) return name;
    }
  }

  // Last resort: return whatever we have
  return rawTitle || 'AI工具';
}

/**
 * Extract one-line summary: use the "COCO的AI..." or "COCO 的 AI ..." overview sentence
 */
function extractSummary(src) {
  const lines = src.split('\n');

  // Find the COCO解决 overview line (the sentence summarizing what the tool does)
  // It appears right after "**COCO如何解决**"
  let inSolve = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^\*\*COCO如何解决/.test(lines[i])) {
      inSolve = true;
      continue;
    }
    if (inSolve) {
      const l = lines[i].trim();
      if (l === '' || l === '---') continue;
      if (l.startsWith('1. ') || l.startsWith('**') || l.startsWith('#')) break;
      if (l.length > 10) {
        // Take the full sentence up to first 。
        const dotAt = l.indexOf('。');
        if (dotAt > 20) return l.substring(0, dotAt + 1);
        if (l.length <= 200) return l;
        return l.substring(0, 150) + '……';
      }
    }
  }

  // Fallback: first results bullet (strip bold metric name)
  let inResults = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^\*\*可量化的结果/.test(lines[i])) { inResults = true; continue; }
    if (inResults && lines[i].startsWith('- ')) {
      return lines[i].replace(/^-\s*\*\*[^*]+\*\*[：:]\s*/, '').replace(/^-\s*/, '').trim();
    }
    if (inResults && /^\*\*受益角色/.test(lines[i])) break;
  }

  return '';
}

/**
 * Parse sections from CN source file
 * Returns: { title, summary, painSolution, results, benefits, prompts }
 */
function parseCNFile(src) {
  const lines = src.split('\n');

  const painMarker = /^\*\*痛点[：:]/;
  const solveMarker = /^\*\*COCO如何解决/;
  const resultsMarker = /^\*\*可量化的结果|^\*\*可衡量的成果/;
  const benefitsMarker = /^\*\*受益角色|^\*\*谁能受益/;
  const promptsMarker = /^## 实用提示词/;

  let painStart = -1, solveStart = -1, resultsStart = -1, benefitsStart = -1, promptsStart = -1;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (painMarker.test(l) && painStart < 0) painStart = i;
    else if (solveMarker.test(l)) solveStart = i;
    else if (resultsMarker.test(l)) resultsStart = i;
    else if (benefitsMarker.test(l)) benefitsStart = i;
    else if (promptsMarker.test(l)) promptsStart = i;
  }

  function extractSection(start, end) {
    if (start < 0) return '';
    const e = end > 0 ? end : lines.length;
    return lines.slice(start, e).join('\n').trim();
  }

  // Pain + Solution combined (from pain start to results start)
  const painSolution = extractSection(
    painStart,
    resultsStart > 0 ? resultsStart : (benefitsStart > 0 ? benefitsStart : promptsStart)
  );

  // Results section (skip header line, collect bullets)
  let results = '';
  if (resultsStart > 0) {
    let rStart = resultsStart + 1;
    while (rStart < lines.length && !lines[rStart].startsWith('-') && !lines[rStart].startsWith('|')) rStart++;
    const rEnd = benefitsStart > 0 ? benefitsStart : (promptsStart > 0 ? promptsStart : lines.length);
    results = lines.slice(rStart, rEnd).join('\n').trim();
  }

  // Benefits section
  let benefits = '';
  if (benefitsStart > 0) {
    let bStart = benefitsStart + 1;
    while (bStart < lines.length && !lines[bStart].startsWith('-')) bStart++;
    let bEnd = lines.length;
    for (let i = bStart; i < lines.length; i++) {
      if (lines[i] === '---' || promptsMarker.test(lines[i])) { bEnd = i; break; }
    }
    benefits = lines.slice(bStart, bEnd).join('\n').trim();
  }

  // Prompts section
  let prompts = '';
  if (promptsStart > 0) {
    let pStart = promptsStart + 1;
    while (pStart < lines.length && lines[pStart].trim() === '') pStart++;
    let pLines = lines.slice(pStart);
    while (pLines.length > 0 && (pLines[pLines.length - 1].trim() === '---' || pLines[pLines.length - 1].trim() === '')) {
      pLines.pop();
    }
    prompts = pLines.join('\n').trim();
  }

  const title = extractTitle(src);
  const summary = extractSummary(src);

  return { title, summary, painSolution, results, benefits, prompts };
}

/**
 * Format a single case entry for zh VitePress page
 */
function formatCaseEntry(idx, sections) {
  const { title, summary, painSolution, results, benefits, prompts } = sections;

  let content = `## ${idx}. ${title}\n\n`;

  if (summary) {
    content += `> ${summary}\n\n`;
  }

  if (painSolution) {
    content += `::: details 痛点与解决方案\n\n`;
    content += painSolution + '\n\n';
    content += `:::\n\n`;
  }

  if (results || benefits) {
    content += `::: details 量化结果与受益角色\n\n`;
    if (results) {
      content += `**可量化的结果**\n\n`;
      content += results + '\n\n';
    }
    if (benefits) {
      content += `**受益角色**\n\n`;
      content += benefits + '\n\n';
    }
    content += `:::\n\n`;
  }

  if (prompts) {
    content += `::: details 💡 实用提示词\n\n`;
    content += prompts + '\n\n';
    content += `:::\n\n`;
  }

  return content;
}

/**
 * Get current case count from zh page
 */
function getCurrentCaseCount(pagePath) {
  const content = fs.readFileSync(pagePath, 'utf8');
  const matches = content.match(/^## \d+\./gm);
  return matches ? matches.length : 0;
}

/**
 * Process a role page
 */
function processRolePage(roleKey, config) {
  console.log(`\n=== Processing ${roleKey} ===`);

  const currentCount = getCurrentCaseCount(config.page);
  console.log(`  Current cases: ${currentCount}`);

  let appendContent = '';
  let addedCount = 0;
  let skippedCount = 0;
  let idx = currentCount + 1;

  for (const caseNum of config.batchNums) {
    const src = findSourceFile(caseNum, config.srcDirs);
    if (!src) {
      console.log(`  SKIP #${caseNum}: no CN file found`);
      skippedCount++;
      continue;
    }

    const sections = parseCNFile(src);
    if (!sections.title) {
      console.log(`  SKIP #${caseNum}: could not extract title`);
      skippedCount++;
      continue;
    }

    console.log(`  Adding #${caseNum}: ${sections.title}`);
    appendContent += formatCaseEntry(idx, sections);
    idx++;
    addedCount++;
  }

  if (addedCount > 0) {
    fs.appendFileSync(config.page, appendContent);
    console.log(`  Done: added ${addedCount} cases (skipped ${skippedCount})`);
  } else {
    console.log(`  Nothing to add (skipped ${skippedCount})`);
  }
}

// Main
console.log('=== Generating zh Batch5 Use Case Pages ===\n');

for (const [roleKey, config] of Object.entries(roleConfigs)) {
  if (!fs.existsSync(config.page)) {
    console.log(`SKIP ${roleKey}: page not found at ${config.page}`);
    continue;
  }
  processRolePage(roleKey, config);
}

console.log('\n=== Done! ===');
