#!/usr/bin/env node
/**
 * Generate zh VitePress index entries for cases #227-#400
 * Handles: standard _N-title anchors, custom {#use-case-NNN} anchors,
 * section offset for data-analyst (EN sections 22-23 have no CN equivalent).
 */

const fs = require('fs');
const path = require('path');

const BASE = '/home/op/zylos/workspace/coco-materials';
const EN_INDEX = `${BASE}/docs/use-cases/index.md`;
const ZH_INDEX = `${BASE}/docs/zh/use-cases/index.md`;
const DOCS_EN = `${BASE}/docs/use-cases`;
const DOCS_ZH = `${BASE}/docs/zh/use-cases`;

// Role mapping: EN short name → Chinese display
const roleMap = {
  'PM': '产品经理',
  'Dev': '研发工程',
  'Finance': '财务',
  'Executive': '高管',
  'Marketing': '内容/营销',
  'Data Science': '数据分析师',
  'Research': '数据分析师',  // Research maps to data-analyst page
  'Data Analyst': '数据分析师',
  'Operations': '运营',
  'HR': 'HR/招聘',
  'Customer Support': '客服',
  'Legal': '法律',
  'Sales': '销售',
  'DevOps': 'DevOps运维',
};

// Task type mapping: EN → Chinese
const taskMap = {
  'Analysis': '数据分析',
  'Research': '调研与监控',
  'Automation': '流程自动化',
  'Writing': '文案写作',
  'Strategy': '策略规划',
  'Communication': '沟通协作',
  'Planning': '规划管理',
  'Monitoring': '调研与监控',
  'Compliance': '合规管理',
};

// Industry mapping: EN → Chinese
const industryMap = {
  'SaaS/B2B': 'SaaS/B2B',
  'Enterprise': '企业级',
  'SaaS/Enterprise': '科技/SaaS',
  'Enterprise/SaaS': '科技/SaaS',
  'SaaS/Fintech': '科技/SaaS',
  'SaaS/E-commerce': '科技/SaaS',
  'SaaS/Platform': '科技/SaaS',
  'SaaS/Media': '科技/媒体',
  'SaaS/Tech': '科技/SaaS',
  'SaaS/Consulting': '科技/咨询',
  'Manufacturing/Retail': '制造/零售',
  'Finance/SaaS': '金融/SaaS',
  'Finance/Banking': '金融/银行',
  'Finance/Enterprise': '金融/企业',
  'Finance/Fintech': '金融/科技',
  'Finance': '金融',
  'Healthcare/SaaS': '医疗/SaaS',
  'Healthcare/Enterprise': '医疗/企业',
  'Healthcare': '医疗',
  'Retail/E-commerce': '零售/电商',
  'SaaS/Agriculture': '科技/农业',
  'SaaS/Media/Entertainment': '科技/媒体',
  'Entertainment/SaaS': '娱乐/SaaS',
  'Legal/Enterprise': '法律/企业',
  'Legal/Finance': '法律/金融',
  'Legal': '法律/企业',
  'HR/Enterprise': '人力/企业',
  'HR/SaaS': '人力/SaaS',
  'SaaS/HR': '人力/SaaS',
  'Operations/SaaS': '运营/SaaS',
  'Logistics/E-commerce': '物流/电商',
  'Energy/Utilities': '能源/公用',
  'Real Estate/Finance': '地产/金融',
  'Real Estate': '房地产',
  'Insurance': '保险',
  'Technology': '科技',
  'SaaS': '科技/SaaS',
  'B2B SaaS': 'B2B SaaS',
  'Academia': '学术',
  'Academia/UX': '学术/UX',
  'Education': '教育',
  'Government': '政务',
  'Nonprofit': '非营利',
  'Agriculture': '农业',
  'Media & Entertainment': '媒体/娱乐',
  'Telecom': '电信',
  'Biotech': '生物科技',
  'SaaS/Biotech': '科技/生物',
};

// Build custom anchor map for an EN role page: {use-case-NNN → section_number}
function buildCustomAnchorMap(rolePage) {
  const filePath = path.join(DOCS_EN, rolePage + '.md');
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const map = {};
  for (const line of content.split('\n')) {
    const m = line.match(/^## (\d+)\.\s+.+\{#(use-case-\d+)\}/);
    if (m) map[m[2]] = parseInt(m[1]);
  }
  return map;
}

// Load zh role page sections: sectionNum → { title, summary }
function loadZhSections(rolePage) {
  const filePath = path.join(DOCS_ZH, rolePage + '.md');
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const sections = {};
  let cur = null;
  for (const line of content.split('\n')) {
    const hm = line.match(/^## (\d+)\.\s+(.+)/);
    if (hm) {
      cur = { num: parseInt(hm[1]), title: hm[2].trim(), summary: '' };
      sections[cur.num] = cur;
    } else if (cur && line.startsWith('> ') && !cur.summary) {
      cur.summary = line.slice(2).trim();
    }
  }
  return sections;
}

// Build VitePress anchor from section number and Chinese title
function buildZhAnchor(sectionNum, title) {
  // VitePress: lowercase, spaces→hyphens, strip punct except Chinese chars and common chars
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\u4e00-\u9fff\u3000-\u303f\-]/g, '');
  return `_${sectionNum}-${slug}`;
}

// Cache
const zhSectionsCache = {};
const customAnchorCache = {};

function getZhSections(rolePage) {
  if (!zhSectionsCache[rolePage]) zhSectionsCache[rolePage] = loadZhSections(rolePage);
  return zhSectionsCache[rolePage];
}

function getCustomAnchorMap(rolePage) {
  if (!customAnchorCache[rolePage]) customAnchorCache[rolePage] = buildCustomAnchorMap(rolePage);
  return customAnchorCache[rolePage];
}

// Section offset table: some EN sections have no CN equivalent, causing zh section numbers to shift.
// Format: { rolePage: { skipSections: [N,...], adjustAbove: N, adjustBy: -N } }
const sectionOffsets = {
  'role/pm': {
    // EN section 11 (AI Beta Test Coordinator, case 239) has no CN file
    skipSections: [11],
    adjustAbove: 12, adjustBy: -1,
  },
  'role/executive': {
    // EN sections 12 (Research Briefing Generator, case 273) and 13 (Delegation Workflow Designer, case 274) missing
    skipSections: [12, 13],
    adjustAbove: 14, adjustBy: -2,
  },
  'role/data-analyst': {
    // EN sections 22 (Grant Proposal Writer, case 296) and 23 (Patent Landscape Analyzer, case 297) missing
    skipSections: [22, 23],
    adjustAbove: 24, adjustBy: -2,
  },
};

function adjustZhSection(rolePage, enSection) {
  const offsets = sectionOffsets[rolePage];
  if (!offsets) return { skip: false, zhSection: enSection };
  if (offsets.skipSections.includes(enSection)) return { skip: true, zhSection: null };
  if (enSection >= offsets.adjustAbove) return { skip: false, zhSection: enSection + offsets.adjustBy };
  return { skip: false, zhSection: enSection };
}

// Parse EN index rows for cases 227-400
function parseEnRows() {
  const content = fs.readFileSync(EN_INDEX, 'utf8');
  const rows = [];
  for (const line of content.split('\n')) {
    const m = line.match(/^\|\s*(\d+)\s*\|\s*\[([^\]]+)\]\(([^)]+)\)\s*\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|/);
    if (!m) continue;
    const caseNum = parseInt(m[1]);
    if (caseNum < 227 || caseNum > 400) continue;

    const title = m[2].trim();
    const link = m[3].trim(); // e.g. /use-cases/role/pm#_3-... or /use-cases/role/cs#use-case-340
    const role = m[4].trim();
    const industry = m[5].trim();
    const task = m[6].trim();
    const value = m[7].trim();

    // Extract role page path and anchor from EN link
    // Two formats: /use-cases/role/pm#_3-title  OR  /use-cases/role/cs#use-case-340
    const standardM = link.match(/\/use-cases\/(role\/[^#]+)#_(\d+)-/);
    const customM = link.match(/\/use-cases\/(role\/[^#]+)#(use-case-\d+)/);

    let rolePage = null, enSection = null, customAnchor = null;
    if (standardM) {
      rolePage = standardM[1];
      enSection = parseInt(standardM[2]);
    } else if (customM) {
      rolePage = customM[1];
      customAnchor = customM[2];
    }

    rows.push({ caseNum, title, link, role, industry, task, value, rolePage, enSection, customAnchor });
  }
  return rows;
}

function mapRole(en) { return roleMap[en] || en; }
function mapIndustry(en) { return industryMap[en] || en; }
function mapTask(en) { return taskMap[en] || en; }

function main() {
  const enRows = parseEnRows();
  console.log(`Parsed ${enRows.length} EN rows (cases 227-400)`);

  const zhRows = [];
  const skipped = [];

  for (const row of enRows) {
    if (!row.rolePage) {
      skipped.push(`#${row.caseNum}: no rolePage (link: ${row.link})`);
      continue;
    }

    let enSection = row.enSection;

    // Resolve custom anchor → section number
    if (!enSection && row.customAnchor) {
      const caMap = getCustomAnchorMap(row.rolePage);
      enSection = caMap[row.customAnchor];
      if (!enSection) {
        skipped.push(`#${row.caseNum}: custom anchor ${row.customAnchor} not found in ${row.rolePage}`);
        continue;
      }
    }

    if (!enSection) {
      skipped.push(`#${row.caseNum}: no section number`);
      continue;
    }

    // Adjust zh section number for roles with missing CN translations
    const { skip, zhSection: adjustedSection } = adjustZhSection(row.rolePage, enSection);
    if (skip) {
      skipped.push(`#${row.caseNum}: EN ${row.rolePage} section ${enSection} has no zh equivalent`);
      continue;
    }
    let zhSection = adjustedSection;

    const zhSections = getZhSections(row.rolePage);
    const zhSec = zhSections[zhSection];

    if (!zhSec) {
      skipped.push(`#${row.caseNum}: zh section ${zhSection} not found in ${row.rolePage} (EN section ${enSection})`);
      continue;
    }

    const zhTitle = zhSec.title;
    const anchor = buildZhAnchor(zhSection, zhTitle);
    const zhLink = `/zh/use-cases/${row.rolePage}#${anchor}`;

    // Value stat: use EN value (concise, accurate)
    const zhValue = row.value;

    const zhRole = mapRole(row.role);
    const zhIndustry = mapIndustry(row.industry);
    const zhTask = mapTask(row.task);

    zhRows.push(`| ${row.caseNum} | [${zhTitle}](${zhLink}) | ${zhRole} | ${zhIndustry} | ${zhTask} | ${zhValue} |`);
  }

  console.log(`Generated ${zhRows.length} zh rows`);
  if (skipped.length > 0) {
    console.log(`\nSkipped ${skipped.length}:`);
    skipped.forEach(s => console.log(`  - ${s}`));
  }

  // Append to zh index
  const zhIndex = fs.readFileSync(ZH_INDEX, 'utf8');
  const newContent = zhIndex.trimEnd() + '\n' + zhRows.join('\n') + '\n';
  fs.writeFileSync(ZH_INDEX, newContent);
  console.log(`\nAppended ${zhRows.length} rows to zh index.`);
}

main();
