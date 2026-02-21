# #394 — AI Data Quality Audit Advisor

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Analysis
**Slug**: `ai-data-quality-audit-advisor`

---

## Introduction

Data quality issues are the leading cause of failed machine learning deployments, yet most teams discover them after the model is already in production. A 2024 survey of ML engineers across 200 companies found that 73% had experienced a production incident caused by data quality degradation — and of those, 61% said the issue had been present in their training data for weeks or months before anyone detected it. The cost of this delayed discovery is severe: the average time from data quality incident to detected model degradation in production is 47 days, during which the model silently makes worse decisions at scale.

The challenge is that data quality in ML contexts is fundamentally more complex than in traditional data warehousing. A traditional data quality check verifies that values fall within expected ranges, that foreign keys are valid, and that null rates are acceptable. ML data quality adds several additional dimensions: label quality (are the targets correct?), feature-target leakage (do any features contain information from the future?), distribution shift between train and inference (did the population change?), representation bias (are important subgroups systematically underrepresented?), staleness (are features computed correctly at the point-in-time of prediction?), and schema drift (has an upstream system changed the format or semantics of a column without notice?).

Data scientists at high-growth SaaS companies routinely inherit datasets they did not build, with undocumented transformations, ambiguous column names, and no history of when or how the data was originally cleaned. A data scientist joining a team might receive a 200-column training dataset with a Slack message that says "this is what we used for the last model, you should be able to work with it." Auditing this dataset to understand its quality, its limitations, and its fitness for a new modeling task could take two to three weeks of careful investigation — which in practice gets compressed to two to three days, resulting in models built on a foundation of unexamined assumptions.

COCO acts as a systematic data quality audit guide, helping data scientists conduct thorough audits faster and document their findings in a format that travels with the dataset. The workflow:

1. **Describe the dataset and its intended use.** Share the schema, data source, collection methodology, target variable, and the prediction task you intend to solve.
2. **Share sample outputs from initial profiling.** Paste outputs from pandas-profiling, Great Expectations, or even simple `.describe()` and `.value_counts()` results.
3. **COCO generates a structured audit checklist.** Customized to your dataset type and ML task, covering: completeness, consistency, timeliness, leakage risk, label quality, distribution properties, and bias indicators.
4. **Run the audit and share findings.** As you work through the checklist, share what you find. COCO helps interpret ambiguous findings ("this null rate of 23% — is it meaningful or expected?") and escalates concerns that require investigation.
5. **Generate the data quality report.** COCO produces a structured report documenting findings, severity ratings, recommended mitigations, and a fitness-for-use assessment.

Teams using COCO for data quality audits report catching an average of 3.7 critical issues per dataset that would have otherwise made it into model training. In regulated industries, the structured audit documentation produced by COCO has directly satisfied compliance requirements for model governance.

**Who benefits:**

- **Data Scientists** who inherit datasets from other teams and need to understand their quality before building models
- **ML Engineers** building automated data validation pipelines who need a reference for what to check
- **Analytics Engineers** responsible for the quality of data flowing through dbt pipelines into ML feature stores
- **Chief Data Officers** and data governance teams who need systematic quality documentation for compliance and audit purposes

---

## Practical Prompts

**Prompt 1 — Comprehensive Data Quality Audit Checklist**
```
I need to audit a dataset for ML modeling fitness. Here is the context:

Dataset description: [WHAT_THE_DATA_REPRESENTS]
Data source: [WHERE_IT_COMES_FROM — e.g., "CRM events table in BigQuery", "API logs in S3"]
Intended ML task: [WHAT_I'M_BUILDING — e.g., "binary churn classifier"]
Prediction grain: [e.g., "one prediction per customer per month"]
Target variable: [TARGET, how it was defined]

Schema (most important columns):
- [COLUMN]: [TYPE], [DESCRIPTION], null rate: [%]
- [COLUMN]: [TYPE], [DESCRIPTION], null rate: [%]
[continue]

Initial profiling summary:
[PASTE pandas-profiling summary or .describe() output]

Generate a structured data quality audit checklist covering: completeness, validity, consistency, timeliness, uniqueness, leakage risk, label quality, and distribution health. For each dimension, give me specific checks to run and warning signs to look for.
```

**Prompt 2 — Null Value and Missing Data Analysis**
```
I have significant missing data in my ML training dataset and need help understanding whether and how to handle it.

Dataset: [DESCRIPTION], n=[N_ROWS] rows, [N_FEATURES] features
ML task: [TASK]

Missing data profile:
| Feature | Missing % | Missing pattern | Notes |
|---------|-----------|-----------------|-------|
| [F1]    | [%]       | [random/systematic/by-segment] | [notes] |
| [F2]    | [%]       | [pattern] | [notes] |
[continue for features with >5% missing]

Correlation between missingness: [do missing values co-occur? describe if known]

Analyze: (1) whether each feature's missingness is MCAR/MAR/MNAR and why it matters, (2) imputation strategy recommendations per feature, (3) whether any missing data pattern reveals a data collection bug I should fix at source, (4) how to create missingness indicator features, (5) how to validate my imputation doesn't introduce bias into the model.
```

**Prompt 3 — Distribution Shift Detection**
```
I want to check whether my training data distribution differs significantly from the population my model will serve in production.

Training data:
- Time period: [DATE_RANGE]
- Source: [DESCRIPTION]
- n=[N_ROWS]

Production inference population (what I know about it):
- Time period: [DATE_RANGE]
- Source: [DESCRIPTION]
- n=[N_ROWS or "unknown"]

Features where I suspect drift:
[LIST FEATURES WITH KNOWN OR SUSPECTED DISTRIBUTION DIFFERENCES]

Available data for comparison:
[PASTE statistical summaries, histograms, or value distribution for key features from both datasets]

For each feature: (1) quantify the distribution shift (KL divergence, PSI, or Kolmogorov-Smirnov as appropriate), (2) assess whether the shift is large enough to harm model performance, (3) recommend mitigation (reweighting, recollection, or architecture change), (4) prioritize which shifts are most critical to address before deployment.
```

**Prompt 4 — Label Quality Assessment**
```
I'm worried about the quality of my training labels and need to assess how much label noise exists and what to do about it.

Target variable: [TARGET_DESCRIPTION]
How labels were generated: [PROCESS — e.g., "human annotators", "proxy event (subscription cancellation)", "rule-based from CRM status"]
Known label generation issues: [ANY ISSUES YOU SUSPECT — e.g., "some cancellations are auto-renew failures, not true churn"]

Dataset: n=[N_ROWS], positive rate: [%]

Evidence of label quality issues:
[DESCRIBE ANY ANOMALIES — e.g., "feature X is highly predictive but shouldn't logically be", "model confidence is very high but business doesn't believe the predictions"]

Assess: (1) the likely label noise rate and its impact on model quality, (2) methods to detect and clean label noise (confident learning, cross-validation disagreement, etc.), (3) whether the label definition itself needs to be changed, (4) how to quantify the ceiling performance loss from irreducible label noise.
```

**Prompt 5 — Data Quality Report Generation**
```
I've completed a data quality audit on our [DATASET_NAME] dataset and need to document my findings in a structured report.

Audit findings:

Critical issues (must fix before training):
1. [ISSUE_DESCRIPTION, severity, affected rows/features, root cause]
2. [ISSUE_DESCRIPTION]

Moderate issues (should fix, minor impact if not):
1. [ISSUE_DESCRIPTION]
2. [ISSUE_DESCRIPTION]

Minor issues (log and monitor):
1. [ISSUE_DESCRIPTION]

Dataset strengths:
- [POSITIVE_FINDING_1]
- [POSITIVE_FINDING_2]

Fitness-for-use assessment: [YOUR OVERALL ASSESSMENT]

Generate a formal data quality report suitable for: (1) the data engineering team who needs to fix the source issues, (2) the ML team lead who needs to decide whether to proceed, (3) a compliance or audit record. Include severity ratings, recommended remediation actions, and a go/no-go recommendation for model training.
```
