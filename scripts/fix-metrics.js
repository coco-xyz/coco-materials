#!/usr/bin/env node
/**
 * fix-metrics.js
 * Updates the last column (metric) of markdown table rows in index files.
 */

const fs = require('fs');
const path = require('path');

const EN_INDEX = path.resolve(__dirname, '../docs/use-cases/index.md');
const ZH_INDEX = path.resolve(__dirname, '../docs/zh/use-cases/index.md');
const EN_JSON  = '/tmp/metrics-extraction.json';
const ZH_JSON  = '/tmp/metrics-extraction-zh.json';

// ── helpers ──────────────────────────────────────────────────────────────────

/**
 * Given a markdown table row string, replace the last pipe-delimited column
 * with `newMetric`.  Returns the updated row, or null if the row can't be parsed.
 *
 * Table format (6 columns):
 *   | number | name | role | industry | task | metric |
 */
function replaceLastColumn(row, newMetric) {
  // Split on '|', drop empty first/last elements that come from leading/trailing '|'
  const parts = row.split('|');
  // parts[0] = '' (before first |), parts[parts.length-1] = '' (after last |)
  // parts[1] = number, parts[2] = name, ..., parts[N-2] = old metric
  if (parts.length < 4) return null;

  // Replace the second-to-last element (last real column) with new value
  parts[parts.length - 2] = ` ${newMetric} `;
  return parts.join('|');
}

/**
 * Replace the metric column for all rows whose row-number matches a key in `metrics`.
 */
function applyMetrics(lines, metrics) {
  let changed = 0;
  const result = lines.map(line => {
    // Match a markdown table data row beginning with | <number> |
    const m = line.match(/^\| *(\d+) \|/);
    if (!m) return line;

    const rowNum = m[1];
    if (!(rowNum in metrics)) return line;

    const updated = replaceLastColumn(line, metrics[rowNum]);
    if (updated === null || updated === line) return line;

    changed++;
    return updated;
  });
  return { lines: result, changed };
}

// ── ZH-specific fixes: rows 382-400 (hardcoded translations) ─────────────────

const ZH_HARDCODED = {
  '382': '会议接受率+28%',
  '383': '合作响应率: 5–10% → 25–30%',
  '384': '手册准确率: 60–70% → 90%+',
  '385': '评估: 3–5h → 结构化报告',
  '386': '特征选择时间减少',
  '387': '可复现性+78%',
  '388': '误报率: 40% → 可控',
  '389': '审计: 2–3周 → 2–3天',
  '390': '可复现性评分+78%',
  '391': '流水线文档自动化',
  '392': '公平性审计+合规文档',
  '393': '查询时间平均-67%',
  '394': '仪表盘用户: 8 → 34/周',
  '395': '决策行动率: 23% → 61%',
  '396': 'MAPE: 28% → 14%',
  '397': '政策合规率: 34% → 71%',
  '398': '部署文档: 8% → 64%完成',
  '399': '预算审批: 52% → 79%',
  '400': '因果误差: 71% → 28%',
};

/**
 * Strip leading full-width colon (：) from the metric column if present.
 */
function stripLeadingColon(lines) {
  let changed = 0;
  const result = lines.map(line => {
    const m = line.match(/^\| *(\d+) \|/);
    if (!m) return line;

    // Find last non-empty pipe segment
    const parts = line.split('|');
    const metricIdx = parts.length - 2;
    const metric = parts[metricIdx];
    if (metric.match(/^ *：/)) {
      parts[metricIdx] = metric.replace(/^ *(：)/, ' ');
      changed++;
      return parts.join('|');
    }
    return line;
  });
  return { lines: result, changed };
}

// ── main ─────────────────────────────────────────────────────────────────────

function main() {
  console.log('Loading JSON metrics…');
  const enMetrics = JSON.parse(fs.readFileSync(EN_JSON, 'utf8'));
  const zhMetrics = JSON.parse(fs.readFileSync(ZH_JSON, 'utf8'));

  console.log(`  EN metrics: ${Object.keys(enMetrics).length} entries`);
  console.log(`  ZH metrics: ${Object.keys(zhMetrics).length} entries`);

  // ── EN index ────────────────────────────────────────────────────────────────
  console.log('\nProcessing EN index…');
  let enLines = fs.readFileSync(EN_INDEX, 'utf8').split('\n');
  const enResult = applyMetrics(enLines, enMetrics);
  enLines = enResult.lines;
  console.log(`  Rows updated: ${enResult.changed}`);

  fs.writeFileSync(EN_INDEX, enLines.join('\n'), 'utf8');
  console.log(`  Written: ${EN_INDEX}`);

  // ── ZH index ────────────────────────────────────────────────────────────────
  console.log('\nProcessing ZH index…');
  let zhLines = fs.readFileSync(ZH_INDEX, 'utf8').split('\n');

  // Step 1: hardcoded translations for rows 382-400
  const hardcoded = applyMetrics(zhLines, ZH_HARDCODED);
  zhLines = hardcoded.lines;
  console.log(`  Hardcoded translations (382-400): ${hardcoded.changed} rows updated`);

  // Step 2: JSON-driven updates for rows 401-898
  const zhResult = applyMetrics(zhLines, zhMetrics);
  zhLines = zhResult.lines;
  console.log(`  JSON metrics (401-898): ${zhResult.changed} rows updated`);

  // Step 3: strip leading full-width colons from metric column
  const colonFix = stripLeadingColon(zhLines);
  zhLines = colonFix.lines;
  console.log(`  Leading-colon fixes: ${colonFix.changed} rows fixed`);

  fs.writeFileSync(ZH_INDEX, zhLines.join('\n'), 'utf8');
  console.log(`  Written: ${ZH_INDEX}`);

  console.log('\nDone.');
}

main();
