# Batch 4 Use Case Generation SOP

## Overview

- **Batch 4**: Cases #105-204 (100 cases)
- **Previous batches**: Batch 1 (#005-034, 30 cases), Batch 2 (#035-064, 30 cases), Batch 3 (#065-104, 40 cases)
- **Total after batch 4**: 200 cases

## 1. Use Case Content Format (3-Part Structure)

Each case file contains:

### Part 1: Header
```markdown
# Use Case #NNN: [Title]

**Role**: [Role] | **Industry**: [Industries] | **Task**: [Task categories]

---
```

### Part 2: Detailed Introduction
- **Pain point description**: Real industry context, specific metrics
- **How COCO solves it**: Step-by-step workflow (4-6 steps)
- **Measurable results**: Quantified improvements (time, cost, quality)
- **Who benefits**: 3-4 beneficiary roles with specific value

### Part 3: Practical Prompts
- 3-5 ready-to-use prompts
- Copy-paste ready with `[placeholders]`
- Covers different aspects of the use case

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

## 6. New Industries & Roles for Batch 4

To expand coverage, batch 4 adds cases in:
- **New industries**: healthcare, education, legal, real-estate, logistics, hospitality, manufacturing, consulting, nonprofit, government
- **New roles**: legal, executive/c-suite, data-analyst, designer, qa-engineer, compliance-officer
- **New tasks**: contract-review, onboarding, vendor-management, budget-planning, incident-response, knowledge-management, training, reporting, customer-onboarding, localization
