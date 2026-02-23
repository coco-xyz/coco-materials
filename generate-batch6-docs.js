#!/usr/bin/env node
/**
 * generate-batch6-docs.js
 * Appends batch6 use cases (#407-#605) to VitePress role docs pages.
 * EN and CN both updated.
 */

const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname);
const BY_ROLE = path.join(BASE, 'coco-content/use-cases/by-role');
const DOCS_EN = path.join(BASE, 'docs/use-cases/role');
const DOCS_CN = path.join(BASE, 'docs/zh/use-cases/role');

// Role -> docs page filename mapping
const ROLE_MAP = {
  marketing: 'content-marketing',
  developer: 'dev',
  support: 'customer-support',
  hr: 'hr-recruiting',
};

// Human-readable role names for new page creation (EN)
const ROLE_TITLE_EN = {
  'customer-success': 'Customer Success Manager',
  'data-scientist': 'Data Scientist',
  designer: 'Designer',
  researcher: 'Researcher',
  'tech-lead': 'Tech Lead',
  writer: 'Writer',
};

// Human-readable role names for new page creation (CN)
const ROLE_TITLE_CN = {
  'customer-success': '客户成功经理',
  'data-scientist': '数据科学家',
  designer: '设计师',
  researcher: '研究员',
  'tech-lead': '技术负责人',
  writer: '内容创作者',
};

function getDocPageName(role) {
  return ROLE_MAP[role] || role;
}

/**
 * Parse an EN source file.
 * Returns { caseNum, slug, title, hook, detailedIntro, practicalPrompts }
 */
function parseEnFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  // Extract case number and slug from filename
  const basename = path.basename(filePath, '.md');
  const caseNum = parseInt(basename.split('-')[0], 10);
  const slug = basename;

  // Title from H1
  const titleLine = lines.find(l => l.startsWith('# Use Case #'));
  const title = titleLine ? titleLine.replace(/^# Use Case #\d+:\s*/, '').trim() : basename;

  // Hook: first sentence of The Pain paragraph (after **The Pain:...** line)
  let hook = '';
  let inPain = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('**The Pain:') || line.startsWith('**The Pain —')) {
      inPain = true;
      continue;
    }
    if (inPain && line.trim() !== '') {
      // First non-empty line after Pain header
      const sentence = line.trim().split(/(?<=[.!?])\s+/)[0];
      hook = sentence.replace(/\.$/, '').trim();
      break;
    }
  }

  // Extract ## Detailed Introduction section
  let detailedIntro = '';
  let inDetailedIntro = false;
  let detailedLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^## Detailed Introduction\s*$/)) {
      inDetailedIntro = true;
      continue;
    }
    if (inDetailedIntro) {
      if (line.match(/^## /)) {
        break; // next section
      }
      detailedLines.push(line);
    }
  }
  // Remove leading/trailing blank lines
  while (detailedLines.length && detailedLines[0].trim() === '') detailedLines.shift();
  while (detailedLines.length && detailedLines[detailedLines.length - 1].trim() === '') detailedLines.pop();
  // Remove trailing --- separator if present
  if (detailedLines.length && detailedLines[detailedLines.length - 1].trim() === '---') detailedLines.pop();
  while (detailedLines.length && detailedLines[detailedLines.length - 1].trim() === '') detailedLines.pop();
  detailedIntro = detailedLines.join('\n');

  // Extract ## Practical Prompts section
  let practicalPrompts = '';
  let inPrompts = false;
  let promptLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^## Practical Prompts\s*$/)) {
      inPrompts = true;
      continue;
    }
    if (inPrompts) {
      if (line.match(/^## /)) {
        break;
      }
      promptLines.push(line);
    }
  }
  while (promptLines.length && promptLines[0].trim() === '') promptLines.shift();
  while (promptLines.length && promptLines[promptLines.length - 1].trim() === '') promptLines.pop();
  practicalPrompts = promptLines.join('\n');

  return { caseNum, slug, title, hook, detailedIntro, practicalPrompts };
}

/**
 * Parse a CN source file.
 * Returns { caseNum, slug, title, hook, detailedIntro, practicalPrompts }
 */
function parseCnFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const basename = path.basename(filePath, '.md');
  const caseNum = parseInt(basename.split('-')[0], 10);
  const slug = basename;

  // Title from H1
  const titleLine = lines.find(l => l.startsWith('# Use Case #'));
  const title = titleLine ? titleLine.replace(/^# Use Case #\d+:\s*/, '').trim() : basename;

  // Hook: first sentence after 痛点 line
  let hook = '';
  let inPain = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('**痛点：') || line.startsWith('**痛点:') || line.startsWith('**痛点—') || line.startsWith('**痛点 —')) {
      inPain = true;
      continue;
    }
    if (inPain && line.trim() !== '') {
      const sentence = line.trim().split(/(?<=[。！？])/)[0];
      hook = sentence.replace(/。$/, '').trim();
      break;
    }
  }

  // Extract ## 详细介绍 section
  let detailedLines = [];
  let inDetailedIntro = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^## 详细介绍\s*$/)) {
      inDetailedIntro = true;
      continue;
    }
    if (inDetailedIntro) {
      if (line.match(/^## /)) {
        break;
      }
      detailedLines.push(line);
    }
  }
  while (detailedLines.length && detailedLines[0].trim() === '') detailedLines.shift();
  while (detailedLines.length && detailedLines[detailedLines.length - 1].trim() === '') detailedLines.pop();
  if (detailedLines.length && detailedLines[detailedLines.length - 1].trim() === '---') detailedLines.pop();
  while (detailedLines.length && detailedLines[detailedLines.length - 1].trim() === '') detailedLines.pop();
  const detailedIntro = detailedLines.join('\n');

  // Extract ## 实用提示词 section
  let promptLines = [];
  let inPrompts = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^## 实用提示词\s*$/)) {
      inPrompts = true;
      continue;
    }
    if (inPrompts) {
      if (line.match(/^## /)) {
        break;
      }
      promptLines.push(line);
    }
  }
  while (promptLines.length && promptLines[0].trim() === '') promptLines.shift();
  while (promptLines.length && promptLines[promptLines.length - 1].trim() === '') promptLines.pop();
  const practicalPrompts = promptLines.join('\n');

  return { caseNum, slug, title, hook, detailedIntro, practicalPrompts };
}

/**
 * Count existing ## N. headings in a docs page to find the last case number.
 */
function getLastCaseNum(docPath) {
  if (!fs.existsSync(docPath)) return 0;
  const content = fs.readFileSync(docPath, 'utf8');
  const matches = [...content.matchAll(/^## (\d+)\./mg)];
  if (matches.length === 0) return 0;
  return Math.max(...matches.map(m => parseInt(m[1], 10)));
}

/**
 * Build VitePress collapsible block for one EN case.
 */
function buildEnBlock(n, parsed) {
  const { caseNum, slug, title, hook, detailedIntro, practicalPrompts } = parsed;
  const numStr = String(caseNum).padStart(3, '0');
  return `
## ${n}. ${title}

> ${hook}

::: details 🎬 Watch Demo Video

<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/${numStr}-${slug.replace(/^\d+-/, '')}.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

${detailedIntro}

:::

::: details 💡 Practical Prompts

${practicalPrompts}

:::
`;
}

/**
 * Build VitePress collapsible block for one CN case.
 */
function buildCnBlock(n, parsed) {
  const { caseNum, slug, title, hook, detailedIntro, practicalPrompts } = parsed;
  const numStr = String(caseNum).padStart(3, '0');
  return `
## ${n}. ${title}

> ${hook}

::: details 🎬 观看演示视频

<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/cn/${numStr}-${slug.replace(/^\d+-/, '')}.mp4" type="video/mp4">
</video>

:::

::: details 痛点与解决方案

${detailedIntro}

:::

::: details 💡 实用提示词

${practicalPrompts}

:::
`;
}

/**
 * Create a new EN docs role page.
 */
function createEnPage(docPath, role) {
  const title = ROLE_TITLE_EN[role] || role.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const content = `# ${title}\n\nAI-powered use cases for ${title.toLowerCase()} professionals.\n`;
  fs.writeFileSync(docPath, content, 'utf8');
  console.log(`  Created new EN page: ${docPath}`);
}

/**
 * Create a new CN docs role page.
 */
function createCnPage(docPath, role) {
  const title = ROLE_TITLE_CN[role] || role.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const content = `# ${title}\n\nAI驱动的${title}专业人员用例。\n`;
  fs.writeFileSync(docPath, content, 'utf8');
  console.log(`  Created new CN page: ${docPath}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

const roles = fs.readdirSync(BY_ROLE).filter(r => {
  const stat = fs.statSync(path.join(BY_ROLE, r));
  return stat.isDirectory();
});

let totalRolesUpdated = 0;
let totalCasesAdded = 0;

for (const role of roles.sort()) {
  const enDir = path.join(BY_ROLE, role, 'en');
  const cnDir = path.join(BY_ROLE, role, 'cn');

  if (!fs.existsSync(enDir)) continue;

  // Find batch6 EN files (407-605)
  const enFiles = fs.readdirSync(enDir)
    .filter(f => f.match(/^[456]\d{2}-.*\.md$/))
    .filter(f => {
      const num = parseInt(f.split('-')[0], 10);
      return num >= 407 && num <= 605;
    })
    .sort();

  if (enFiles.length === 0) continue;

  const docPageName = getDocPageName(role);
  const enDocPath = path.join(DOCS_EN, `${docPageName}.md`);
  const cnDocPath = path.join(DOCS_CN, `${docPageName}.md`);

  // Ensure docs pages exist
  if (!fs.existsSync(enDocPath)) createEnPage(enDocPath, role);
  if (!fs.existsSync(cnDocPath)) createCnPage(cnDocPath, role);

  let enCounter = getLastCaseNum(enDocPath);
  let cnCounter = getLastCaseNum(cnDocPath);

  let enAppend = '';
  let cnAppend = '';
  let casesForRole = 0;

  for (const enFile of enFiles) {
    const enFilePath = path.join(enDir, enFile);
    const cnFilePath = path.join(cnDir, enFile);

    // Parse EN
    let enParsed;
    try {
      enParsed = parseEnFile(enFilePath);
    } catch (e) {
      console.error(`  ERROR parsing EN file ${enFilePath}: ${e.message}`);
      continue;
    }

    enCounter++;
    enAppend += buildEnBlock(enCounter, enParsed);

    // Parse CN (use same filename)
    if (fs.existsSync(cnFilePath)) {
      let cnParsed;
      try {
        cnParsed = parseCnFile(cnFilePath);
      } catch (e) {
        console.error(`  ERROR parsing CN file ${cnFilePath}: ${e.message}`);
        // Still increment counter
        cnCounter++;
        continue;
      }
      cnCounter++;
      cnAppend += buildCnBlock(cnCounter, cnParsed);
    } else {
      console.warn(`  WARN: CN file missing for ${enFile} in role ${role}`);
      cnCounter++;
    }

    casesForRole++;
  }

  if (casesForRole > 0) {
    // Append to EN doc
    fs.appendFileSync(enDocPath, enAppend, 'utf8');
    // Append to CN doc
    if (cnAppend) fs.appendFileSync(cnDocPath, cnAppend, 'utf8');

    console.log(`  [${role}] -> ${docPageName}.md: +${casesForRole} cases (EN #${getLastCaseNum(enDocPath) - casesForRole + 1}–${getLastCaseNum(enDocPath)})`);
    totalRolesUpdated++;
    totalCasesAdded += casesForRole;
  }
}

console.log(`\nDone! Updated ${totalRolesUpdated} role pages, added ${totalCasesAdded} cases total.`);

// ── Update index pages ────────────────────────────────────────────────────────

console.log('\nUpdating index pages...');

// Count cases per role page (for index update reporting)
for (const lang of ['en', 'cn']) {
  const docsDir = lang === 'en' ? DOCS_EN : DOCS_CN;
  const indexPath = lang === 'en'
    ? path.join(BASE, 'docs/use-cases/index.md')
    : path.join(BASE, 'docs/zh/use-cases/index.md');

  if (!fs.existsSync(indexPath)) {
    console.warn(`  WARN: index not found: ${indexPath}`);
    continue;
  }

  let indexContent = fs.readFileSync(indexPath, 'utf8');

  // Update case counts for each role that has a docs page
  const roleFiles = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
  let updatedCount = 0;

  for (const roleFile of roleFiles) {
    const rolePage = roleFile.replace('.md', '');
    const docPath = path.join(docsDir, roleFile);
    const caseCount = getLastCaseNum(docPath);
    if (caseCount === 0) continue;

    // Try to update count in index — match patterns like "| 46 |" or "| 46 cases |" etc.
    // The index uses format: | [Role Name](/use-cases/role/page) | N | ...
    const linkPattern = new RegExp(
      `(\\[.*?\\]\\(/(?:zh/)?use-cases/role/${escapeRegex(rolePage)}\\))\\s*\\|\\s*(\\d+)\\s*\\|`,
      'g'
    );
    const newContent = indexContent.replace(linkPattern, (match, link, oldNum) => {
      if (parseInt(oldNum, 10) !== caseCount) {
        updatedCount++;
        return `${link} | ${caseCount} |`;
      }
      return match;
    });
    indexContent = newContent;
  }

  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log(`  Updated ${lang} index (${updatedCount} count changes)`);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

console.log('\nAll done!');
