# Use Case #029: AI Expense Auditor

**Role**: Finance Manager / Controller / Compliance Officer | **Industry**: Any Enterprise, Professional Services, Consulting, Government | **Task**: Expense Report Auditing, Policy Compliance, Fraud Detection, Reimbursement Processing

---

## Part 1: Social Media Copy

### English

Our finance team manually reviewed 1,200 expense reports per month. Each review: open the report, check receipt images, verify amounts match, check against expense policy (is this meal within the $75 limit? is this hotel in the approved rate range? was this flight booked 14+ days in advance?), flag exceptions, email the submitter for clarification, wait for response, re-review. Average time per report: 8 minutes. That's 160 hours/month. Two full-time employees doing nothing but reading receipts.

Despite all that effort, our audit caught only about 60% of policy violations. The ones that slipped through? A senior director systematically claiming personal Uber rides as client entertainment -- $14,000 over 8 months. Discovered accidentally during a random deep audit, not through our regular process.

COCO's AI Expense Auditor reviews every report in seconds:
- Reads receipt images (OCR), extracts amounts, matches to claimed values
- Checks every line item against company expense policy -- every rule, every limit, every exception
- Detects patterns: same vendor appearing too frequently, round-number expenses (often estimates, not actuals), expenses just below approval thresholds
- Flags anomalies with specific policy citations and risk scores
- Auto-approves clean reports, routes exceptions to human reviewer with full context

Audit coverage: from 60% violation detection to 97%. Processing time per report: from 8 minutes to 12 seconds. That $14K personal Uber scheme? Would have been flagged in month one. Finance team now focuses on strategic analysis, not receipt reading.

### 中文

我们的财务团队每月手动审核1200份报销单。每次审核：打开报告、检查收据图片、验证金额是否匹配、对照费用政策检查（这顿饭是否在75美元限额内？这家酒店是否在批准的费率范围内？这趟航班是否提前14天以上预订？）、标记例外、发邮件给提交人要求澄清、等待回复、重新审核。每份报告平均时间：8分钟。每月160小时。两个全职员工除了看收据什么都不做。

尽管付出了这么多努力，我们的审计只发现了约60%的政策违规。溜掉的那些？一个高级总监系统性地将个人Uber行程报为客户招待——8个月里14000美元。是在一次随机深度审计中偶然发现的，而非通过我们的常规流程。

COCO的AI Expense Auditor在几秒内审核每份报告：
- 读取收据图片（OCR），提取金额，与申报值匹配
- 对照公司费用政策检查每个明细项——每条规则、每个限额、每个例外
- 检测模式：同一供应商出现频率过高、整数金额（通常是估算而非实际）、刚好低于审批阈值的费用
- 用具体的政策引用和风险评分标记异常
- 自动批准干净的报告，将例外路由给人工审核员并附完整上下文

审计覆盖率：违规检测从60%升至97%。每份报告处理时间：从8分钟降至12秒。那个14000美元的个人Uber骗报？会在第一个月就被标记。财务团队现在专注于战略分析，而非看收据。

---

## Part 2: Detailed Introduction

### English

**The Pain: Manual Expense Auditing Is Slow, Incomplete, and Expensive**

Expense report auditing is one of those necessary finance functions that everyone knows is broken but nobody fixes. The process is labor-intensive, error-prone, and still misses significant policy violations and fraud. The Association of Certified Fraud Examiners estimates that organizations lose 5% of revenue to fraud, with expense reimbursement fraud being one of the most common types.

Manual auditing has a fundamental sampling problem. When reviewing 1,200 reports takes 160 hours, finance teams resort to sampling -- auditing 20-30% of reports in detail and rubber-stamping the rest. This means 70-80% of expense reports receive minimal scrutiny, creating a known vulnerability that sophisticated bad actors exploit.

**How COCO Solves It**

COCO's AI Expense Auditor provides 100% audit coverage with consistent policy enforcement.

1. **Receipt Processing**: OCR reads receipt images, extracts vendor, date, amount, and category. Matches against claimed values. Flags mismatches.

2. **Policy Compliance Engine**: Checks every line item against your full expense policy: meal limits, hotel rate caps, flight booking windows, entertainment policies, mileage rates, per diem rules, and approval thresholds.

3. **Pattern Detection**: Identifies suspicious patterns across time: split transactions to avoid limits, round numbers, weekend expenses without travel justification, repeat vendor anomalies, and expenses clustering just below approval thresholds.

4. **Risk Scoring**: Each expense report gets a risk score (0-100) based on number of flagged items, severity, submitter history, and pattern analysis.

5. **Smart Routing**: Clean reports auto-approved. Medium-risk reports flagged with specific items for human review. High-risk reports escalated with full analysis.

6. **Reporting and Analytics**: Monthly summaries of policy compliance rates, top violation types, department-level spending patterns, and fraud risk trends.

**Measurable Results**

- **Policy violation detection**: From 60% to 97%
- **Processing time per report**: From 8 minutes to 12 seconds
- **Finance team time saved**: 150+ hours/month
- **Fraudulent expenses caught**: $180K in first year (previously undetected)
- **Average reimbursement turnaround**: From 8 days to 2 days
- **False positive rate**: Under 5% (minimizing unnecessary human reviews)

---

## Part 3: Practical Prompts

### English

**Prompt 1: Audit Expense Report**
```
Audit this expense report against our company policy.

Our expense policy:
- Meals: Max $75/person for client meals, $25 for individual meals
- Hotels: Max $250/night domestic, $350/night international
- Flights: Must book 14+ days in advance for discount; economy class unless flight >6 hours
- Ground transportation: Uber/Lyft approved; rental car requires pre-approval
- Entertainment: Max $200/event, requires client names in description
- Receipts required for all expenses over $25

Expense report:
[paste expense line items with dates, amounts, categories, descriptions]

For each line item:
1. Policy compliance: Pass / Flag (cite specific policy rule)
2. Receipt match: Verified / Missing / Mismatch
3. Anomaly check: Normal / Suspicious (explain why)
4. Risk score for overall report (0-100)
5. Recommendation: Auto-approve / Human review required / Reject
```

**Prompt 2: Build Expense Fraud Detection Rules**
```
Design fraud detection rules for our expense reimbursement system.

Our company: [size, industry]
Monthly expense reports: ~[X]
Common expense categories: [list]
Current known issues: [describe any known fraud patterns]

Create detection rules for:
1. **Split transaction detection**: Expenses split to stay below approval limits
2. **Round number alerting**: Too many round-number expenses (likely estimates)
3. **Weekend/holiday anomalies**: Expenses on non-work days without travel
4. **Vendor frequency**: Same vendor appearing unusually often
5. **Threshold gaming**: Expenses clustering just below approval thresholds
6. **Ghost employees**: Expense submissions from terminated or non-existent employees
7. **Duplicate submissions**: Same expense claimed twice
8. **Lifestyle mismatch**: Expense patterns inconsistent with role/travel requirements

For each rule: trigger condition, severity level, false positive mitigation, and recommended action.
```

### 中文

**提示词 1: 审核报销单**
```
按我们的公司政策审核这份报销单。

公司费用政策：
- 餐饮：客户餐最高75美元/人，个人餐最高25美元
- 酒店：国内最高250美元/晚，国际最高350美元/晚
- 机票：必须提前14天以上预订以获取折扣；除非飞行超过6小时否则经济舱
- 地面交通：Uber/Lyft批准使用；租车需预先审批
- 招待：每次活动最高200美元，描述中需要客户姓名
- 25美元以上的所有费用需要收据

报销单：
[粘贴费用明细行，包括日期、金额、类别、描述]

对每个明细行：
1. 政策合规：通过/标记（引用具体政策规则）
2. 收据匹配：已验证/缺失/不匹配
3. 异常检查：正常/可疑（解释原因）
4. 整体报告风险评分（0-100）
5. 建议：自动批准/需人工审核/拒绝
```

**提示词 2: 构建费用欺诈检测规则**
```
为我们的报销系统设计欺诈检测规则。

我们公司：[规模、行业]
月度报销单：约[X]份
常见费用类别：[列出]
当前已知问题：[描述已知的欺诈模式]

创建检测规则：
1. **拆分交易检测**：拆分费用以保持在审批限额以下
2. **整数金额警报**：过多整数金额费用（可能是估算）
3. **周末/假日异常**：非工作日的费用但无出差记录
4. **供应商频率**：同一供应商出现异常频繁
5. **阈值博弈**：费用集中在审批阈值以下
6. **幽灵员工**：已离职或不存在的员工提交的报销
7. **重复提交**：同一费用申报两次
8. **生活方式不匹配**：费用模式与角色/出差需求不一致

每条规则：触发条件、严重级别、降低误报的方法、建议操作。
```
