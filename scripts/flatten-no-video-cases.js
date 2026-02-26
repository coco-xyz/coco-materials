#!/usr/bin/env node
/**
 * flatten-no-video-cases.js
 *
 * For each use-case markdown file, finds cases (## N. ...) that do NOT have
 * a "🎬 Watch Demo Video" / "🎬 观看演示视频" accordion block and converts
 * their "::: details TITLE" wrappers to flat "**TITLE**" headings.
 *
 * Cases that DO have a video accordion keep ALL their ::: details blocks.
 */

const fs = require('fs');
const path = require('path');

const EN_DIR = path.join(__dirname, '../docs/use-cases/role');
const ZH_DIR = path.join(__dirname, '../docs/zh/use-cases/role');

const VIDEO_MARKERS = [
  '🎬 Watch Demo Video',
  '🎬 观看演示视频',
];

/**
 * Split content into "before first case" header and individual case blocks.
 * Each case starts at a "## N." heading and runs until the next such heading (or EOF).
 * Returns: { header: string, cases: Array<{ heading: string, body: string }> }
 */
function splitIntoCases(content) {
  // Match "## 1.", "## 2.", … (any level-2 heading with a number prefix)
  const casePattern = /^(## \d+\..*)$/m;
  const parts = content.split(/(^## \d+\..*$)/m);
  // parts: [header, heading1, body1, heading2, body2, ...]

  const header = parts[0];
  const cases = [];
  for (let i = 1; i < parts.length; i += 2) {
    cases.push({
      heading: parts[i],
      body: parts[i + 1] || '',
    });
  }
  return { header, cases };
}

/**
 * Check whether a case body contains a video demo accordion.
 */
function hasVideoAccordion(body) {
  for (const marker of VIDEO_MARKERS) {
    if (body.includes(marker)) return true;
  }
  return false;
}

/**
 * Convert "::: details TITLE\n...\n:::" blocks to "**TITLE**\n...\n" in a case body.
 * Only called on cases that do NOT have a video accordion.
 */
function flattenDetailsBlocks(body) {
  // Match a ::: details block:
  //   - starts with "::: details " (the title follows on same line)
  //   - ends with a lone ":::" on its own line
  // We handle this line by line to avoid regex multiline complexity.

  const lines = body.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Detect opening of a ::: details block
    if (/^::: details (.+)$/.test(line)) {
      const title = line.replace(/^::: details /, '').trim();
      // Emit the title as a bold heading (blank line before for spacing)
      result.push(`**${title}**`);
      i++;
      // Skip the blank line immediately after the opening fence (if present)
      // We keep interior content as-is, just remove the closing :::
      while (i < lines.length) {
        if (lines[i].trimEnd() === ':::') {
          // Closing fence — skip it; also trim any trailing blank line it may leave
          i++;
          break;
        }
        result.push(lines[i]);
        i++;
      }
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join('\n');
}

/**
 * Process a single markdown file.
 */
function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  const { header, cases } = splitIntoCases(original);

  let changed = false;
  const processedCases = cases.map(({ heading, body }) => {
    if (hasVideoAccordion(body)) {
      // Keep as-is
      return heading + body;
    }
    const flatBody = flattenDetailsBlocks(body);
    if (flatBody !== body) changed = true;
    return heading + flatBody;
  });

  if (!changed) {
    console.log(`  [skip]    ${path.basename(filePath)} — no changes needed`);
    return;
  }

  const output = header + processedCases.join('');
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`  [updated] ${path.basename(filePath)}`);
}

/**
 * Process all .md files in a directory.
 */
function processDir(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  console.log(`\nProcessing ${files.length} files in ${dir}`);
  for (const file of files) {
    processFile(path.join(dir, file));
  }
}

// Main
processDir(EN_DIR);
processDir(ZH_DIR);
console.log('\nDone.');
