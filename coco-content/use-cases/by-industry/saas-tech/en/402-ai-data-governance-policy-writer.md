# Use Case #402: AI Data Governance Policy Writer

**Role**: Data Scientist / ML Engineer | **Industry**: SaaS, Tech, Enterprise | **Task**: Compliance, Data Governance, Policy Development

---

## Detailed Introduction

**The Pain: Policies That Practitioners Ignore**

Data governance policy in most organizations is produced by one of two failure modes. In the first, legal and compliance teams write policies without meaningful technical input — producing documents that accurately describe regulatory requirements but specify technically impossible controls, omit the operational detail practitioners need to implement them, or use regulatory language that is so abstract as to be uninterpretable in the context of an actual data pipeline. A policy that says "personally identifiable information must be encrypted at rest and in transit" provides zero guidance for a data engineer deciding whether to hash user IDs in a dbt transformation, whether to apply column-level encryption in Snowflake, whether to strip PII from model training datasets or to retain it under a data use agreement, or what to do with log files that incidentally capture user behavior. The gap between the policy statement and the required implementation decision is so wide that practitioners fill it with their own judgment — which varies by individual, is rarely documented, and produces the inconsistent practices that auditors flag during reviews.

In the second failure mode, data teams write their own de facto policies — through practices that accumulate over time but are never codified. A senior data scientist develops a pattern for anonymizing training data; it becomes the team's informal standard. A data engineer sets retention schedules for raw event logs based on storage cost considerations rather than policy. Access controls for sensitive tables in the data warehouse are granted on an ad-hoc basis, with permission sets that were never reviewed for least-privilege compliance. These informal practices produce teams that believe they have good data hygiene because the senior people on the team do things the right way, when in reality there is no enforceable standard, no audit trail, and no mechanism for onboarding new engineers to consistent practices.

The specific domain of machine learning creates governance challenges that neither traditional legal/compliance teams nor most data governance frameworks are designed to handle. Training data governance is fundamentally different from operational data governance: training data that is properly anonymized for operational use may still expose PII through model outputs (membership inference attacks, attribute inference), which means the policy framework for production data cannot be simply extended to cover ML. Similarly, model versioning and lineage requirements for regulated industries (financial services, healthcare, insurance) go far beyond what general data governance frameworks specify — model cards, training data provenance, feature definitions, and performance monitoring documentation are all governance artifacts that have no standard template in most organizations and no clear policy owner.

The regulatory landscape is also becoming more demanding. GDPR Article 22 restrictions on automated decision-making, CCPA requirements for data deletion that extend to training data, the EU AI Act's requirements for high-risk AI system documentation, and sector-specific regulations (SR 11-7 model risk management guidance for financial institutions, HIPAA safe harbor requirements for de-identified health data) all create compliance obligations that sit at the intersection of data law and ML practice. Very few organizations have governance policies that address this intersection — leaving data scientists and ML engineers making individual compliance decisions without organizational guidance and without understanding the legal exposure those decisions create.

**How COCO Solves It**

COCO bridges the gap between legal requirements and technical implementation — drafting data governance policies in precise, actionable language that both legal reviewers and engineering practitioners can understand, implement, and verify.

1. **Data Classification Policy Drafting**: COCO writes data classification frameworks that define sensitivity tiers with precise, enumerable criteria — enabling data engineers and scientists to correctly classify new data assets without requiring a compliance review for each decision.
   - Defines classification tiers (public, internal, confidential, restricted) with concrete examples relevant to the organization's data types
   - Specifies the governance controls that apply at each tier: encryption requirements, access control standards, retention limits, and approved processing locations

2. **PII Handling Policy for ML Pipelines**: COCO drafts PII-specific governance rules that address the complete ML lifecycle — from data ingestion through feature engineering, training data construction, model training, inference logging, and model retirement.
   - Covers technical controls: tokenization, k-anonymity, differential privacy, data use agreements, and conditions under which each approach is and is not sufficient
   - Addresses ML-specific risks: training data re-identification risk, model inversion attacks, and downstream inference logging that re-creates PII from outputs

3. **Access Control Policy Design**: COCO designs role-based access control (RBAC) and attribute-based access control (ABAC) policies for data environments — specifying who can access what data under what conditions, with approval workflows and periodic review requirements.
   - Defines access tiers for data warehouse environments (Snowflake, BigQuery, Databricks) with specific row-level security and column masking guidance
   - Specifies break-glass procedures for emergency access scenarios and audit trail requirements

4. **Data Retention and Deletion Policy**: COCO drafts retention schedules that balance regulatory minimums, business value, and storage economics — with specific, implementable deletion procedures that address training data, model artifacts, and inference logs.
   - Covers the operational complexity of deletion in columnar warehouses, partitioned tables, and ML feature stores
   - Addresses GDPR/CCPA right-to-erasure requirements in the context of training data and derived model outputs

5. **ML Model Governance Policy**: COCO writes model governance frameworks that define development, review, approval, deployment, monitoring, and retirement procedures for ML models — particularly for regulated use cases.
   - Covers model risk tiers, approval gates, documentation requirements at each gate, and the conditions triggering model review or retirement
   - Aligns with SR 11-7 model risk management guidance for financial services or equivalent sector-specific frameworks

6. **Audit Trail and Documentation Requirements**: COCO specifies the minimum audit trail and documentation standards for data processing activities — defining what must be logged, retained, and made available for regulatory review.
   - Defines lineage documentation requirements for data pipelines using modern orchestration tools (Airflow, dbt, Prefect)
   - Specifies model documentation artifacts required at each lifecycle stage: model cards, data sheets, performance benchmarks, and bias assessments

**Measurable Results**

- **Policy compliance rate**: Proportion of data engineers and scientists correctly applying data classification to new assets without compliance review → baseline 34% → 71% after implementable policy deployment
- **Audit finding reduction**: Critical data governance findings per internal audit cycle → average 8.3 findings → 2.1 findings after policy refresh with technical implementation guidance
- **Access control hygiene**: Overprivileged data warehouse access grants (users with access to more data than their role requires) → 67% of accounts → 19% after RBAC policy implementation
- **PII incident reduction**: Unintentional PII exposure incidents in ML pipelines per quarter → 2.4 incidents → 0.4 incidents after ML-specific PII handling policy deployment
- **Governance documentation coverage**: ML models in production with complete governance documentation → 8% baseline → 61% after model governance policy with mandatory artifacts

**Who Benefits**

- **Data Scientists**: Receive clear, implementable guidance for PII handling, training data governance, and model documentation — replacing individual judgment with enforceable organizational standards
- **Data Engineers**: Use access control and retention policies that specify exactly what controls to implement in their pipeline tools, eliminating the ambiguity that produces inconsistent practice
- **Chief Data Officers**: Use COCO-drafted policies as the foundation for formal governance frameworks that satisfy board-level risk requirements and pass regulatory reviews
- **Legal and Compliance Teams**: Gain technically credible policy documents that they can validate for regulatory alignment without writing technical implementation specifications themselves

---

## Practical Prompts

**Prompt 1: Data Classification Framework**
```
Help me draft a practical data classification policy for my organization's data environment.

Organization context:
- Industry: [INDUSTRY — e.g., "B2B SaaS, healthcare tech"]
- Key regulations we must comply with: [GDPR / CCPA / HIPAA / SOC 2 / other]
- Primary data systems: [DATA WAREHOUSE / DATABASES / CLOUD STORAGE — e.g., "Snowflake, S3, PostgreSQL"]
- Types of sensitive data we handle: [e.g., "customer PII, financial transaction data, health records, behavioral event logs"]
- Team size and technical sophistication: [e.g., "25 engineers, mix of senior and junior"]

Draft a data classification policy with:
1. Classification tiers (suggest appropriate tiers for our context) with plain-language definitions
2. For each tier: concrete examples from our specific data types so engineers can self-classify new assets
3. Required controls at each tier: encryption standard, access control approach, approved storage locations, retention limit
4. Classification decision tree: a flowchart-style guide practitioners can use to classify a new dataset in under 2 minutes
5. Governance requirements: who approves tier assignments, how conflicts are resolved, how tier changes are handled
6. Implementation notes for our specific platforms (Snowflake, S3, PostgreSQL)
```

**Prompt 2: PII Handling Policy for ML Pipelines**
```
I need a policy governing how PII is handled throughout our machine learning lifecycle — from raw data through training, inference, and model retirement.

Organization context:
- Types of PII we process: [e.g., "user email, behavioral event logs with user IDs, support conversation transcripts"]
- ML use cases involving PII: [e.g., "churn prediction, content recommendations, customer segmentation"]
- Applicable regulations: [GDPR / CCPA / HIPAA / other]
- Current practices (describe what you actually do today): [CURRENT HANDLING APPROACH]
- Gaps or risks you're aware of: [KNOWN ISSUES]

Draft a PII handling policy for ML pipelines covering:
1. Permitted uses of PII in ML (with conditions and approval requirements)
2. Required de-identification approach by PII type and ML use case (tokenization, pseudonymization, k-anonymity, differential privacy — with technical specifications for each)
3. Training data governance: what PII can appear in training sets, what must be removed, how to document training data composition
4. Inference logging: what PII can appear in model input/output logs and for how long
5. Re-identification risk assessment: requirements for evaluating whether anonymized training data can be re-identified from model outputs
6. Deletion procedures: how to handle right-to-erasure requests when PII is embedded in training data or model weights
7. Policy violations: what constitutes a violation, reporting procedures, and remediation requirements
```

**Prompt 3: Data Access Control Policy**
```
Help me write a data access control policy for our data warehouse and analytics environments.

Environment:
- Primary data platform: [Snowflake / BigQuery / Databricks / Redshift / other]
- Secondary systems: [LIST ANY OTHER SYSTEMS WITH SENSITIVE DATA]
- Approximate number of data users: [N]
- Key roles that access data: [LIST ROLES — e.g., "data scientists, analysts, engineers, finance team, executive dashboards"]
- Current state: [DESCRIBE HOW ACCESS IS CURRENTLY MANAGED — ad hoc, any existing RBAC?]
- Sensitive data types requiring special controls: [PII, financial, health, other]

Draft an access control policy covering:
1. Role definitions: define access tiers (e.g., analyst read-only, data scientist broad read, engineer read-write, admin) with specific data access scope per tier
2. Access provisioning process: how access is requested, approved, and provisioned (approval chain, SLA, documentation requirements)
3. Least-privilege requirements: how to scope access to minimum necessary data, with periodic review requirements
4. Column-level and row-level security: specific controls for sensitive columns (PII masking, row filters by data sensitivity or user region)
5. Access review cadence: how often access rights are reviewed and who is responsible
6. Emergency (break-glass) access: procedure for emergency access to restricted data with automatic audit trail requirements
7. Offboarding: access revocation requirements and timeline when employees leave or change roles
```

**Prompt 4: ML Model Governance Policy**
```
Help me draft an ML model governance policy that defines how models are developed, reviewed, approved, deployed, monitored, and retired in our organization.

Organization context:
- Industry: [INDUSTRY]
- Regulatory context: [ANY MODEL RISK REGULATIONS — e.g., "SR 11-7 for banking, EU AI Act, HIPAA for healthcare models"]
- Model types we deploy: [e.g., "churn prediction, fraud detection, content ranking, NLP classifiers"]
- Current governance gaps: [WHAT YOU KNOW IS MISSING]
- Team structure: [WHO BUILDS MODELS, WHO APPROVES, WHO MONITORS]

Draft a model governance policy covering:
1. Model risk tiering: criteria for classifying models as low, medium, or high risk (based on decision impact, automation level, affected population)
2. Development requirements by risk tier: documentation, testing, and validation requirements before models can be submitted for review
3. Model review and approval process: who reviews, what they evaluate, approval criteria, escalation for disagreements
4. Required documentation artifacts: model card template, training data datasheet, performance benchmark report, bias assessment
5. Deployment gates: what must be completed before a model can be deployed to production
6. Monitoring requirements: performance monitoring, data drift detection, and alert thresholds by risk tier
7. Model retirement: conditions that trigger model retirement, documentation requirements, and data deletion procedures for retired models
```

**Prompt 5: Data Retention and Deletion Policy**
```
Help me draft a data retention and deletion policy that is both legally compliant and technically implementable in our data infrastructure.

Organization context:
- Applicable regulations: [GDPR / CCPA / HIPAA / sector-specific / other]
- Key data types and their current retention practices: [LIST DATA TYPES AND CURRENT RETENTION — e.g., "raw event logs: kept indefinitely, customer PII: kept until account deletion"]
- Data infrastructure: [DATA WAREHOUSE, BLOB STORAGE, DATABASES — e.g., "BigQuery, GCS, PostgreSQL, Kafka"]
- ML artifacts to govern: [TRAINING DATASETS, MODEL WEIGHTS, FEATURE STORES, INFERENCE LOGS]
- Known compliance gaps: [ISSUES YOU KNOW EXIST]

Draft a retention and deletion policy covering:
1. Retention schedules by data type: specify minimum and maximum retention periods for each data category with the business or legal justification
2. Retention implementation: how to implement retention schedules in our specific infrastructure (partition-based deletion in BigQuery, lifecycle policies in GCS, TTL in databases)
3. Right-to-erasure procedures: step-by-step procedure for processing deletion requests, including how to identify all locations where a user's data may exist
4. ML data deletion complexity: how to handle deletion requests for data used in model training (options: retraining without deleted data, model retirement, documented exceptions with legal basis)
5. Audit trail requirements: what deletion events must be logged, retained, and be available for regulatory review
6. Retention policy enforcement: how to detect and remediate retention policy violations (data older than policy allows)
7. Policy review cadence: how often retention schedules are reviewed and updated as regulations change
```

---
