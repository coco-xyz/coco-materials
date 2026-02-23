# #396 — AI Data Pipeline Documentation Writer

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Documentation
**Slug**: `ai-data-pipeline-documentation-writer`

---

## Introduction

Data pipelines are the arteries of every machine learning system, and their documentation is consistently the most neglected artifact in the ML development lifecycle. In a survey of 300 data engineering and data science teams, 84% reported that their data pipeline documentation was either incomplete, out-of-date, or non-existent. The consequences are severe and compound over time: when documentation is absent, every new team member who needs to understand the pipeline must reverse-engineer it from code — a process that takes an average of 3-5 days per pipeline and is error-prone because the reverse-engineered understanding often misses subtle business logic embedded in the transforms.

The "documentation debt" phenomenon is particularly acute in ML data pipelines because they are more complex than standard ETL pipelines in several ways. A typical ML feature engineering pipeline involves: raw data extraction with specific temporal cutoffs, multiple join logic steps with point-in-time correctness requirements, a chain of transformations where each step has domain-specific business logic, feature computation with specific aggregation windows, entity resolution and deduplication logic, train/validation/test split logic that must be documented to ensure reproducibility, and feature serving infrastructure that must match training-time computation exactly. Each of these steps represents a potential source of silent failure if the documentation is absent or wrong.

The problem is compounded by the fact that data pipelines are collaborative artifacts: typically built by 3-6 people across data engineering, analytics engineering (dbt), and data science roles. Each contributor understands their piece deeply but the system-level documentation — what flows where, why each transformation exists, what the implicit assumptions are — never gets written down because everyone assumes someone else did it.

COCO acts as a pipeline documentation co-author, generating complete technical documentation from code, schema descriptions, and verbal explanations of business logic. The workflow:

1. **Provide pipeline code or configuration.** Paste your Airflow DAG, dbt model SQL, Python preprocessing scripts, or Spark job code.
2. **Add business context.** Explain what the pipeline produces, who consumes it, and any business rules that are not apparent from the code.
3. **COCO generates structured documentation.** This includes: pipeline overview, data flow diagram (in text/Mermaid format), step-by-step technical description, business logic explanation, dependencies and data sources, known assumptions, failure modes, and runbook for common issues.
4. **Review and correct.** COCO will sometimes misinterpret business logic that isn't clear from code — correct it and COCO will revise the affected sections.
5. **Maintain documentation with changes.** When the pipeline changes, paste the diff and COCO generates the updated documentation sections, making documentation maintenance a 10-minute task rather than a day-long effort.

Teams using COCO for pipeline documentation report that new team member onboarding time to pipeline understanding drops from an average of 4.2 days to 1.5 days. In addition, incident response time for pipeline failures decreases by 40% because runbooks exist that previously didn't.

**Who benefits:**

- **Data Scientists** who built pipelines months ago and need to document them before a team transition or compliance audit
- **Analytics Engineers** who write complex dbt models with intricate business logic that is not self-documenting
- **ML Engineers** maintaining production training pipelines who need documentation that enables other team members to handle incidents
- **Data Engineering Leads** responsible for maintaining documentation standards across a portfolio of pipelines

---

## Practical Prompts

**Prompt 1 — Full Pipeline Documentation from Code**
```
I need complete documentation for a data pipeline. Here is the relevant code:

Pipeline purpose: [WHAT_IT_PRODUCES — e.g., "Computes weekly churn prediction features for all active customers"]
Downstream consumers: [WHO_USES_IT — e.g., "ML training job, feature store for real-time scoring"]

Pipeline code:
```python
[PASTE YOUR AIRFLOW DAG / PYTHON PIPELINE CODE]
```

Schema of input tables:
[PASTE or describe the input tables]

Schema of output tables:
[PASTE or describe the outputs]

Business context not obvious from code:
[e.g., "The 90-day lookback window was chosen because our data team determined that events older than 90 days have no predictive value for churn"]

Generate complete pipeline documentation including: overview, data lineage, step-by-step description with business logic explanation, assumptions, known edge cases, and an operational runbook.
```

**Prompt 2 — dbt Model Documentation**
```
I need to document a dbt model (or model chain) that implements complex business logic.

Model name: [MODEL_NAME]
Model purpose: [WHAT_IT_COMPUTES]
Upstream models / source tables: [LIST]
Downstream models / consumers: [LIST]

SQL code:
```sql
[PASTE YOUR DBT MODEL SQL]
```

Business rules that aren't obvious from the SQL:
[e.g., "The CASE WHEN revenue > 0 filter is necessary because our billing system sometimes records $0 transactions during failed payment retries"]
[e.g., "We join on customer_id rather than user_id because some customers have multiple user accounts"]

Generate: (1) model overview (schema.yml description block), (2) column-level documentation for all output columns, (3) explanation of the key business logic in plain language, (4) data quality tests that should be applied, (5) known limitations or edge cases.
```

**Prompt 3 — ML Feature Store Documentation**
```
I need to document the features in our ML feature store. Here is the context:

Feature group: [FEATURE_GROUP_NAME]
Entity: [e.g., "customer_id"]
Update frequency: [e.g., "daily batch at 2am UTC"]
Source tables: [LIST]

Features:
| Feature name | Data type | Description | Source column | Transformation |
|-------------|-----------|-------------|---------------|----------------|
| [F1]        | [TYPE]    | [DESC]      | [SOURCE]      | [TRANSFORM]    |
| [F2]        | [TYPE]    | [DESC]      | [SOURCE]      | [TRANSFORM]    |
[continue for all features]

Known issues or caveats: [LIST]
Models currently using this feature group: [LIST]

Generate complete feature store documentation including: feature group overview, per-feature technical documentation, data lineage, point-in-time correctness notes, recommended usage guidelines, and changelog template.
```

**Prompt 4 — Pipeline Incident Runbook**
```
I need to create an operational runbook for our [PIPELINE_NAME] data pipeline so that anyone on the team can handle incidents without deep knowledge of the system.

Pipeline overview: [BRIEF_DESCRIPTION]
Technology: [Airflow/Prefect/dbt, data warehouse, etc.]
Schedule: [when it runs]
SLA: [expected completion time]

Most common failure modes (from experience):
1. [FAILURE_TYPE_1]: [what it looks like, what causes it]
2. [FAILURE_TYPE_2]: [what it looks like, what causes it]
3. [FAILURE_TYPE_3]: [what it looks like, what causes it]

Relevant dashboard/monitoring links: [LIST]
Data quality checks that should be verified: [LIST]
Escalation path: [describe who to contact and when]

Write a complete incident runbook with: failure detection procedures, diagnostic decision tree, step-by-step remediation for each failure mode, data quality verification steps, and rollback procedure if the pipeline produces bad data.
```

**Prompt 5 — Documentation Update After Pipeline Change**
```
Our [PIPELINE_NAME] pipeline was updated and the existing documentation needs to be revised. Here is what changed:

Previous behavior: [DESCRIBE]
New behavior: [DESCRIBE]

Code changes (diff or description):
[PASTE DIFF OR DESCRIBE CHANGES]

Existing documentation:
[PASTE RELEVANT SECTIONS OF EXISTING DOCS]

Update the documentation to reflect the changes: (1) identify which sections are now inaccurate, (2) rewrite those sections with the new behavior, (3) add a changelog entry explaining what changed and why, (4) flag any downstream consumers or dependent systems that may be affected by this change and need to be notified.
```
