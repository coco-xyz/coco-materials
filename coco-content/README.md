# COCO Content Hub

Social media content, use cases, and marketing materials for COCO.xyz.

## Directory Structure

```
coco-content/
├── use-cases/              # Systematic use case library
│   ├── dev-team/           # R&D / Engineering team cases
│   ├── product/            # Product management cases
│   ├── marketing/          # Marketing & growth cases
│   ├── operations/         # Operations & support cases
│   └── _template.md        # Standard use case template
│
├── social-media/
│   ├── drafts/             # Work-in-progress posts
│   ├── published/          # Published posts (with dates)
│   └── templates/          # Reusable post templates
│
├── testimonials/           # Client testimonials & quotes
│
└── assets/                 # Images, screenshots, mockups
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

## Workflow

1. **Draft** → Write content in `social-media/drafts/` or `use-cases/`
2. **Review** → Confirm in COCO.xyz Lark group
3. **Publish** → Move to `social-media/published/` with date prefix
4. **Track** → Update the content log below

## Content Log

| Date | Type | Title | Platform | Status |
|------|------|-------|----------|--------|
| 2026-02-09 | Use Case | Agent Team ships MVP in 30min | X/Twitter | Draft |

## Quick Start

```bash
# Create a new use case
cp use-cases/_template.md use-cases/dev-team/my-new-case.md

# Create a new social media post
cp social-media/templates/x-post.md social-media/drafts/YYYY-MM-DD-topic.md
```

## References

- [Use Case Framework v1.0](https://zylos100.jinglever.com/coco-use-case-framework.md)
- [Landing Page PRD v1.1](https://zylos100.jinglever.com/docs/landing-page/v1.1/prd.md)
