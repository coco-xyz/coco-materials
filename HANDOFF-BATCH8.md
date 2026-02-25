# Batch8 Handoff: zylos100 → zylos-stephanie

## Repo & Branch
- **Repo:** `coco-xyz/coco-materials`
- **Branch:** `batch8-800-to-900` (已push到remote)
- **Main branch:** 800 cases (PR#26 merged)
- **Branch上当前:** 894 EN / 816 zh

---

## 任务一：剩余 EN cases（31个）

### 文件位置
所有EN文件在 `docs/use-cases/role/<role>.md`

### 需要生成的：

| Role | 当前 | 目标 | 需新增 | 起始编号 |
|------|------|------|--------|----------|
| qa-engineer | 12 | 20 | 8 | #13 |
| researcher | 9 | 20 | 11 | #10 |
| devops | 11 | 23 | 12 | #12 |

### 建议 case titles

**qa-engineer #13-#20:**
13. AI Bug Report Triage and Deduplication Agent
14. AI Visual UI Regression Detector
15. AI Database Migration Testing Advisor
16. AI Mobile App Crash Log Analyzer
17. AI Compliance Audit Test Generator
18. AI Microservices Integration Test Orchestrator
19. AI Performance Bottleneck Root Cause Analyzer
20. AI Test Environment Provisioning Advisor

**researcher #10-#20:**
10. AI Research Grant Proposal Reviewer
11. AI Bibliometric Analysis and Citation Mapping Agent
12. AI Qualitative Data Coding Assistant
13. AI Lab Experiment Protocol Optimizer
14. AI Research Ethics and IRB Compliance Checker
15. AI Cross-Disciplinary Research Gap Identifier
16. AI Dataset Quality Auditor
17. AI Research Reproducibility Validator
18. AI Competitive Research Intelligence Monitor
19. AI Thesis and Dissertation Structure Advisor
20. AI Research Collaboration Network Analyzer

**devops #12-#23:**
12. AI Container Image Vulnerability Scanner
13. AI CI/CD Pipeline Failure Predictor
14. AI Service Mesh Traffic Analyzer
15. AI Log Aggregation and Anomaly Classifier
16. AI Infrastructure Drift Detector
17. AI Disaster Recovery Plan Validator
18. AI Cloud Resource Tagging Compliance Agent
19. AI SLA Monitoring and Alert Tuning Advisor
20. AI Secrets Rotation and Vault Manager
21. AI Multi-Cloud Cost Arbitrage Optimizer
22. AI Canary Deployment Impact Analyzer
23. AI Capacity Forecasting and Auto-Scaling Advisor

---

## 任务二：zh 翻译（当前差78个 + 新EN的31个 = 共109个）

### 文件位置
- EN: `docs/use-cases/role/<role>.md`
- zh: `docs/zh/use-cases/role/<role>.md`

### 各角色差距：

| Role | EN | zh | 需翻译 |
|------|----|----|--------|
| customer-success | 20 | 7 | 13 |
| tech-lead | 20 | 7 | 13 |
| designer | 20 | 5 | 15 |
| data-scientist | 20 | 8 | 12 |
| writer | 20 | 8 | 12 |
| qa-engineer | 12→20 | 8 | 4→12 |
| ai-product-manager | 49 | 40 | 9 |
| researcher | 9→20 | 9 | 0→11 |
| devops | 11→23 | 11 | 0→12 |
| **Total** | | | **78 + 31 = 109** |

---

## 任务三：完成后的收尾工作

1. **更新 index 表** — `docs/use-cases/index.md` 的角色统计表
2. **更新首页数字** — `docs/index.md` 的 case 总数（目标 900+）
3. **Build preview** — `npm run docs:build` 验证无报错
4. **合并到 main** — 直接 `git merge` 或创建 PR

---

## 格式要求（严格遵守）

### EN case 格式
```markdown
## N. AI [Case Title]

> Organizations operating in [Industry] face mounting pressure to deliver results with constrained resources

::: details Pain Point & How COCO Solves It

**The Pain: [Case Title]**

[3段落, 每段4-6句]

**How COCO Solves It**

1. **[机制名]**: COCO [动词] [描述]:
   - [5个子bullet, 每个以动词开头]
[共6个机制, 每个5个子bullet]

:::

::: details Results & Who Benefits

**Measurable Results**

- **[指标]**: [改善前] to **[改善后]** ([百分比])
[共5个指标]

**Who Benefits**

- **[角色1]**: [2句受益描述]
[共4个角色]

:::

::: details 💡 Practical Prompts

**Prompt 1: [标题]**
```
[10-15行提示词模板, 用[placeholder]占位]
```
[共5个prompt]

:::
```

### zh 翻译格式
```markdown
## N. AI [保留英文标题]

> [中文引言]

::: details 痛点与解决方案

**痛点：[中文标题]**

[3段中文]

**COCO 如何解决**

[6个机制, 每个5个子bullet, 全中文]

:::

::: details 量化结果与受益角色

**可量化成果**

[5个指标, 中文描述但数字/百分比保留]

**受益角色**

[4个角色, 中文]

:::

::: details 💡 实用提示词

[5个prompt模板, 中文但占位符保留英文方括号格式]

:::
```

### 关键格式规则
- 用 VitePress `::: details` 语法，**不要用** HTML `<details>` 标签
- 三个折叠面板标题固定：
  - EN: "Pain Point & How COCO Solves It" / "Results & Who Benefits" / "💡 Practical Prompts"
  - zh: "痛点与解决方案" / "量化结果与受益角色" / "💡 实用提示词"
- 每批写完立刻 commit，防止数据丢失

---

## Git 操作提示
- Branch: `batch8-800-to-900`（已在remote）
- 直接 push 到 main 也可以（SSH key有权限）
- commit message 格式: `feat: add N <role> cases (#X-#Y), total now Z`
