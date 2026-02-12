# COCO Content Hub

Social media content, use cases, and marketing materials for COCO.xyz.

## Directory Structure

```
coco-content/
├── use-cases/                          # 用例库（3维度 × 中英文）
│   ├── by-role/                        # 按角色分类
│   │   ├── developer/en/               # 开发者（英文）
│   │   ├── developer/cn/               # 开发者（中文）
│   │   ├── marketing/en|cn/            # 营销
│   │   ├── operations/en|cn/           # 运营
│   │   ├── support/en|cn/              # 客服
│   │   └── devops/en|cn/               # DevOps
│   ├── by-industry/                    # 按行业分类
│   │   ├── saas-tech/en|cn/            # SaaS/科技
│   │   ├── enterprise/en|cn/           # 企业服务
│   │   ├── e-commerce/en|cn/           # 电商
│   │   └── finance/en|cn/              # 金融
│   └── by-task/                        # 按任务分类
│       ├── code-review/en|cn/          # 代码审查
│       ├── content/en|cn/              # 内容创作
│       ├── automation/en|cn/           # 自动化
│       ├── analysis/en|cn/             # 数据分析
│       └── .../                        # 更多任务类型
│
├── social-media/
│   ├── drafts/                         # 视频脚本和内容草稿
│   │   ├── by-role/{role}/en|cn/       # 按角色分类的脚本
│   │   ├── by-industry/{ind}/en|cn/    # 按行业分类的脚本
│   │   └── by-task/{task}/en|cn/       # 按任务分类的脚本
│   ├── videos/                         # 视频资源
│   │   ├── by-role/{role}/en|cn/       # 按角色分类的视频
│   │   ├── by-industry/{ind}/en|cn/    # 按行业分类的视频
│   │   └── by-task/{task}/en|cn/       # 按任务分类的视频
│   ├── published/                      # 已发布内容（带日期前缀）
│   │   ├── by-role/{role}/en|cn/
│   │   ├── by-industry/{ind}/en|cn/
│   │   └── by-task/{task}/en|cn/
│   └── scripts/                        # 社媒文案脚本
│       ├── by-role/{role}/en|cn/
│       ├── by-industry/{ind}/en|cn/
│       └── by-task/{task}/en|cn/
│
├── testimonials/                       # 客户评价和引用
│
└── assets/                             # 图片、截图、素材
    ├── screenshots/
    ├── mockups/
    └── logos/
```

## Use Case Taxonomy

We follow a 3-dimensional classification system:

| Dimension | Categories |
|-----------|-----------|
| **Role** | Developer, Tech Lead, DevOps, PM, Designer, Marketing, Support, Operations |
| **Industry** | SaaS/Tech, Finance, E-commerce, Healthcare, Education, Media, Enterprise |
| **Task** | Code Review, Bug Fix, Documentation, Testing, Deployment, Research, Content, Analysis, Automation, Monitoring |

> Each use case appears in all 3 dimensions (e.g., a "Code Review" case also lives under `developer` role and `saas-tech` industry).

## Use Case Format

Each use case follows a **3-part structure**:

### Part 1: Social Media Copy (社媒文案)
- Hook-driven storytelling with real scenarios
- Specific metrics and pain points
- Platform-ready (X/Twitter, LinkedIn, etc.)

### Part 2: Detailed Introduction (详细介绍)
- Problem analysis with industry context
- Step-by-step COCO solution walkthrough
- Quantifiable results (time savings, cost reduction, quality improvement)

### Part 3: Practical Prompts (实用提示词)
- 3-5 ready-to-use prompts for the specific scenario
- Copy-paste ready with placeholders
- Covers different aspects of the use case

## Workflow

1. **Draft** → Write content in `social-media/drafts/` or `use-cases/`
2. **Review** → Confirm in Lark group
3. **Publish** → Move to `social-media/published/` with date prefix
4. **Track** → Update the content log below

## Content Log

| Date | Type | Title | Platform | Status |
|------|------|-------|----------|--------|
| 2026-02-09 | Use Case | Agent Team ships MVP in 30min | X/Twitter | Draft |

## Quick Start

```bash
# Create a new use case
cp use-cases/by-role/developer/en/005-ai-code-reviewer.md use-cases/by-role/{role}/en/NEW-case.md

# Create a new social media post
cp social-media/drafts/by-role/developer/en/005-ai-code-reviewer-video-script.md social-media/drafts/by-role/{role}/en/NEW-script.md
```

## References

- [COCO Landing Page](https://coco.xyz)
- [COCO Dashboard PRD](https://zylos100.jinglever.com/docs/dashboard/v1.5/prd.md)
- [COCO Pricing](https://zylos100.jinglever.com/coco-pricing.md)
