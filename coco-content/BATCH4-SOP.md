# Use Case Generation SOP (持续更新)

## Overview

- **Batch 1**: Cases #005-034 (30 cases)
- **Batch 2**: Cases #035-064 (30 cases)
- **Batch 3**: Cases #065-104 (40 cases)
- **Batch 4**: Cases #105-204 (100 cases)
- **Batch 5**: Cases #232-#405 (174 cases, merged 2026-02-23)
- **Batch 6+**: Cases #406+ (ongoing)
- **Total**: 400+ cases and growing

## 1. Use Case Content Format (3-Part Structure)

Each case file contains:

### Part 1: Header
```markdown
# Use Case #NNN: [Title]

**Role**: [Role] | **Industry**: [Industries] | **Task**: [Task categories]

---
```

### Part 2: Detailed Introduction

#### EN file structure (`## Detailed Introduction`)

**Pain section** (`**The Pain: [Case Title]**`)
- 2-3 paragraphs of detailed industry context
- Include case title as bold sub-heading
- Specific metrics and dollar amounts (e.g. "$400 per article", "6-10 hours each")
- Describe the structural/systemic problem, not just the symptom

**How COCO Solves It** (`**How COCO Solves It**`)
- Exactly **6 numbered mechanisms**, each with a bold label and 4-6 indented sub-points
- Format: `1. **[Mechanism Name]**: [brief description]\n   - sub-point\n   - sub-point`
- Steps must be COCO-specific (not generic AI), showing concrete workflow

**Measurable Results** (`**Measurable Results**`)
- Exactly **5 data points**, each on its own line, **all bolded**
- Format: `- **[Metric label]**: [Before] → [After] or [X% improvement]`
- Mix time savings, cost reduction, quality improvements, volume increases

**Who Benefits** (`**Who Benefits**`)
- Exactly **4 beneficiary roles**, each with a 1-sentence specific value statement
- Format: `- **[Role Title]**: [specific value they get]`

#### CN file structure (`## 详细介绍`)
Mirror of EN but fully in Chinese:
- `**痛点：[案例标题]**` — 2-3 paragraphs in Chinese
- `**COCO如何解决**` — 6 numbered steps with sub-points in Chinese
- `**可量化的成果**` — 5 bolded data points in Chinese
- `**受益人群**` — 4 roles with descriptions in Chinese

### Part 3: Practical Prompts

#### EN: `## Practical Prompts`
- **3-5 prompts** (aim for 4-5)
- Each prompt has a bold label: `**Prompt N: [Descriptive Title]**`
- Content in fenced code block (triple backtick)
- Copy-paste ready with `[placeholder]` for user-specific values
- Cover different aspects: core task, edge case, scale/batch, analysis, reporting

#### CN: `## 实用提示词`
- Same structure but fully in Chinese
- Prompts translated to Chinese with `[占位符]` instead of `[placeholder]`

## 2. File Storage (三维分类)

Each case generates **6 files** (3 dimensions x 2 languages):

```
coco-content/use-cases/
├── by-role/{role}/en/NNN-{slug}.md       # EN by role
├── by-role/{role}/cn/NNN-{slug}.md       # CN by role
├── by-industry/{industry}/en/NNN-{slug}.md  # EN by industry
├── by-industry/{industry}/cn/NNN-{slug}.md  # CN by industry
├── by-task/{task}/en/NNN-{slug}.md       # EN by task
└── by-task/{task}/cn/NNN-{slug}.md       # CN by task
```

**Rules:**
- **MANDATORY: Every case MUST have BOTH EN and CN versions — all 6 files required, no exceptions**
- CN files contain ONLY Chinese content (中对中)
- EN files contain ONLY English content (英对英)
- Same case number, same slug across all 3 dimensions
- Create new subdirectories as needed

### Existing Role Directories
developer, devops, finance, hr, marketing, operations, pm, sales, support, tech-lead

### Existing Industry Directories
e-commerce, enterprise, finance, media, saas-tech

### Existing Task Directories
analysis, automation, bug-fix, code-review, compliance, content, deployment, documentation, email-management, monitoring, research, scheduling, testing, etc.

## 3. Docs Page Sync Strategy

### Collapsible Format on Docs Pages
Each case on docs pages uses VitePress `:::details` blocks:

```markdown
## N. [Case Title]

> [One-line summary hook]

::: details 🎬 Watch Demo Video / 观看演示视频
<video controls style="...">
  <source src="/videos/en|cn/NNN-slug.mp4" type="video/mp4">
</video>
:::

::: details Pain Point & How COCO Solves It / 痛点与解决方案
[Detailed introduction content]
:::

::: details Results & Who Benefits / 量化结果与受益角色
[Results + beneficiaries]
:::

::: details Practical Prompts / 实用提示词
[3-5 prompts]
:::
```

### Docs Pages Structure
- `docs/use-cases/role/{role-page}.md` - EN role pages
- `docs/zh/use-cases/role/{role-page}.md` - CN role pages
- Same for `/task/` and `/industry/`
- Sidebar config in `docs/.vitepress/config.mjs`

### Sync Timing (CRITICAL)
- Content markdown + video mp4 MUST both be ready before updating docs pages
- Batch 4 content files: generate now
- Batch 4 videos: generate after content reviewed
- Batch 4 docs pages: update ONLY after content + videos both ready
- Stephanie审核 required before any docs update

## 4. Quality Standards

- Realistic industry pain points (not generic)
- Specific metrics and numbers (not vague "saves time")
- COCO-specific solution steps (not generic AI)
- Prompts must be actionable and copy-paste ready
- No duplicate scenarios with existing 100 cases
- Diverse coverage across roles, industries, and tasks

## 5. Workflow

1. **Generate content files** → coco-content/use-cases/ (三维分类, CN+EN)
2. **Stephanie review** → Content quality check
3. **Generate videos** → social-media/videos/ (after content approved)
4. **Update docs pages** → docs/use-cases/ (after content + videos ready)
5. **Branch → PR → Stephanie confirm → Merge** (never push directly to main)

## 5b. Docs Pages Update Checklist (新 Use Case 上线必更新)

每次新增 use case 并 merge 到 main 后，必须更新以下两处：

### A. 主页卡片 (Homepage Cards)
- 文件：`docs/index.md`（EN）和 `docs/zh/index.md`（CN）
- 更新内容：新角色/分类的 use case 数量统计，以及对应卡片描述

### B. 用例库-全部用例一览 (All Use Cases Overview)
- 文件：`docs/use-cases/index.md`（EN）和 `docs/zh/use-cases/index.md`（CN）
- 更新内容：在对应角色/分类的表格或列表中添加新 use case 的条目

### C. 角色/分类详情页 (Role/Category Detail Pages)
- 文件：`docs/use-cases/role/{role}.md` 和 `docs/zh/use-cases/role/{role}.md`
- 更新内容：在对应角色页末尾添加新 use case（collapsible :::details 格式）

**顺序**: A + B + C 更新完毕 → 重新 build VitePress → 部署 preview → Stephanie 确认 → 创建 PR

## 5c. VitePress Preview 已知问题

### 右侧 Outline 侧边栏为空（反复出现）
- **现象**: 页面右侧 "On this page" 目录栏为空白
- **原因**: VitePress 对超长页面（20+ 个 h2 heading）的 outline 渲染存在问题，SSR 输出中 `VPDocOutlineItem` 为空
- **影响**: 不影响内容浏览，但用户体验不佳
- **解决方案**: 对特别长的 role 页面，考虑加 frontmatter `outline: false` 隐藏空的 outline 栏；或拆分页面
- **注意**: 每次 build 后检查 outline 是否正常渲染


## 6. New Industries & Roles for Batch 4

To expand coverage, batch 4 adds cases in:
- **New industries**: healthcare, education, legal, real-estate, logistics, hospitality, manufacturing, consulting, nonprofit, government
- **New roles**: legal, executive/c-suite, data-analyst, designer, qa-engineer, compliance-officer
- **New tasks**: contract-review, onboarding, vendor-management, budget-planning, incident-response, knowledge-management, training, reporting, customer-onboarding, localization
