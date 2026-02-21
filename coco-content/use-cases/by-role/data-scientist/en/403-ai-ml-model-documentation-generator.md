# Use Case #403: AI ML Model Documentation Generator

**Role**: Data Scientist / ML Engineer | **Industry**: SaaS, Tech, Enterprise | **Task**: Documentation, Model Governance, Knowledge Management

---

## Detailed Introduction

**The Pain: Documentation That Never Gets Written**

ML model documentation occupies a position in the data science workflow that everyone agrees is important and almost no one prioritizes. The pattern is consistent across organizations: the data scientist who built the model knows everything about it — the training data characteristics, the feature engineering decisions, the hyperparameter choices, the performance trade-offs that led to the final configuration, the known edge cases where the model fails, the deployment assumptions that must hold for the predictions to be valid. This knowledge lives entirely in one person's head. When that person leaves, moves to another team, or simply gets reassigned, the model becomes a black box that runs in production without anyone understanding how to evaluate its behavior, how to retrain it correctly, or how to identify when it has degraded.

The documentation that does exist is almost always incomplete. A README file in the model repository might record the training command and the final evaluation metric. A JIRA ticket might contain the original requirements. A Confluence page might have a high-level description written for non-technical stakeholders. What is systematically absent: the training data schema and the time period it covers, the feature definitions and their calculation logic, the data quality checks applied before training, the subgroup performance breakdown by protected characteristics, the known model failure modes and the input conditions that trigger them, the monitoring thresholds that should trigger retraining, and the deployment assumptions that the serving infrastructure must maintain. Each of these is a routine operational question that any engineer or data scientist taking over model maintenance would need to answer — and without documentation, they answer it by reading code, which is slow, error-prone, and impossible when the training pipeline has changed since the model was originally built.

The documentation deficit creates specific, measurable harm when it reaches review processes. Regulatory audits for financial institutions under SR 11-7, model reviews required by enterprise risk functions, fairness reviews mandated by internal AI ethics policies, and vendor assessments conducted by enterprise customers all require model documentation that most data science teams cannot produce from existing records. The response is reactive: documentation gets hastily assembled from code, meeting notes, and Slack conversations when an audit is scheduled, rather than maintained as a living artifact of the model lifecycle. This reactive documentation is typically incomplete, inconsistently formatted, and does not reflect the model's current state — it reflects the documentation author's best recollection under time pressure.

The root cause is not a lack of awareness that documentation matters. Data scientists know it matters. The root cause is that writing good model documentation requires translating technical decisions into structured prose under delivery pressure, and there is no tool, template, or workflow that makes this fast enough to do before moving to the next project. A comprehensive model card for a production ML model involves answering 40-60 structured questions about training data, feature engineering, model architecture, evaluation methodology, fairness analysis, deployment requirements, and monitoring specifications. Writing this from scratch under any time constraint is a significant undertaking that consistently loses to the next model training run.

**How COCO Solves It**

COCO accelerates model documentation by acting as an expert documentation partner — prompting data scientists with the right questions, assembling answers into structured documentation artifacts, and translating technical implementation details into prose that serves both technical and non-technical readers.

1. **Model Card Generation**: COCO generates comprehensive model cards following the Mitchell et al. (2019) model card framework and the Hugging Face model card standard — covering model details, intended uses, factors affecting performance, evaluation results, and ethical considerations.
   - Prompts the data scientist to provide training data, feature, and evaluation information in structured form, then assembles the narrative documentation
   - Generates both a full technical model card and an executive-level summary suitable for stakeholder review

2. **Training Data Documentation (Datasheets)**: COCO generates training data documentation following the Gebru et al. (2018) datasheets for datasets framework — covering data collection, composition, pre-processing, uses, distribution, and maintenance.
   - Documents training data schema, time coverage, known biases and limitations, and the conditions under which the training set may not be representative
   - Specifies data quality filters applied before training and the proportion of records removed by each filter

3. **Feature Definition Catalog**: COCO produces feature documentation that defines each input feature — its business meaning, calculation logic, data source, refresh cadence, expected value range, and known data quality issues — in a format that supports both model auditing and feature reuse.
   - Identifies which features may encode protected characteristics (proxy discrimination risk)
   - Documents feature importance rankings and the business interpretation of top features

4. **Subgroup Performance Analysis Documentation**: COCO structures the documentation of model performance disaggregated by relevant subgroups — ensuring that performance differences across demographic or behavioral segments are documented, not just aggregate metrics.
   - Templates subgroup analysis results in a standardized format covering precision, recall, and false positive/negative rates by subgroup
   - Generates plain-language interpretation of performance disparities and their operational implications

5. **Deployment and Infrastructure Requirements**: COCO documents the serving requirements that must be maintained for the model to produce valid predictions — covering feature serving latency requirements, infrastructure dependencies, model versioning, and rollback procedures.
   - Specifies which production signals the model depends on and what degradation triggers a rollback
   - Documents A/B testing and shadow deployment procedures required before full production cutover

6. **Monitoring Specifications and Alerting Design**: COCO generates monitoring documentation that specifies what metrics to track, what alert thresholds indicate degradation, and what remediation actions to take for each alert type.
   - Defines data drift detection methodology, model performance monitoring cadence, and the retraining trigger conditions
   - Documents the oncall runbook for model-related production alerts

**Measurable Results**

- **Documentation completeness at model deployment**: Proportion of production models with complete documentation (model card, feature catalog, monitoring spec) at the time of deployment → 8% baseline → 64% after COCO-assisted documentation workflow adoption
- **Time to complete model card**: Hours required to produce a complete model card per model → 12 hours average → 2.8 hours with COCO's structured prompting and draft generation
- **Audit readiness**: Time required to assemble documentation package for regulatory review → 3-4 weeks of reactive assembly → available on-demand for COCO-documented models
- **Model handoff incidents**: Production incidents attributable to knowledge gaps during model handoff → 3.2 incidents per quarter → 0.7 incidents per quarter after documentation standard adoption
- **Feature reuse rate**: Proportion of features built for one model subsequently reused in another model → 11% → 34% after feature catalog documentation enables discovery

**Who Benefits**

- **Data Scientists**: Complete model documentation in hours rather than days, and create artifacts that protect their work from being misused or misunderstood when they hand off
- **ML Engineers**: Use deployment and monitoring specifications that make serving infrastructure decisions concrete and verifiable, rather than inferred from training code
- **AI Ethics and Fairness Reviewers**: Access subgroup performance analysis documentation and feature proxy analysis in standardized formats that enable systematic fairness review
- **Risk and Compliance Teams**: Receive model documentation packages that satisfy SR 11-7 model risk management requirements, EU AI Act documentation obligations, or enterprise AI governance policy requirements without requiring data scientists to understand regulatory terminology

---

## Practical Prompts

**Prompt 1: Complete Model Card Generation**
```
Help me generate a comprehensive model card for a machine learning model I've built.

Model basics:
- Model name and version: [NAME v.X.X]
- Model type: [ALGORITHM / ARCHITECTURE — e.g., "XGBoost binary classifier", "fine-tuned BERT"]
- Task: [WHAT THE MODEL DOES — e.g., "predicts 30-day churn probability for SaaS customers"]
- Primary stakeholders: [WHO USES MODEL OUTPUTS]
- Deployment context: [WHERE AND HOW THE MODEL IS DEPLOYED]

Training data:
- Source: [DATA SOURCES]
- Time period covered: [DATE RANGE]
- Number of training examples: [N]
- Label definition: [HOW THE TARGET WAS DEFINED]
- Known limitations or biases in training data: [DESCRIBE]

Model performance (provide your evaluation results):
- Overall metrics: [PRECISION, RECALL, F1, AUC, etc.]
- Subgroup performance: [PERFORMANCE BY SEGMENT IF AVAILABLE]
- Baseline comparison: [WHAT IS THE MODEL BEATING]

Generate a complete model card covering:
1. Model details (architecture, training approach, hyperparameters)
2. Intended use and out-of-scope uses
3. Training data summary and limitations
4. Evaluation results with subgroup breakdown
5. Ethical considerations and known risks
6. Caveats and recommendations for appropriate use
7. An executive summary (non-technical, max 200 words)
```

**Prompt 2: Training Data Datasheet**
```
Generate a training data documentation datasheet for the dataset used to train my ML model.

Dataset basics:
- Dataset name: [NAME]
- What it represents: [WHAT EACH ROW IS — e.g., "one row per customer-month, representing a customer's state at the start of each month"]
- Size: [N rows, N columns, date range covered]
- Source systems: [WHERE THE DATA CAME FROM]
- How it was constructed: [JOINS, AGGREGATIONS, FILTERS APPLIED]

Data characteristics:
- Label source: [HOW THE LABELS WERE GENERATED]
- Known class imbalance: [RATIO OF POSITIVE TO NEGATIVE EXAMPLES]
- Data quality issues discovered: [NULLS, DUPLICATES, INCONSISTENCIES FOUND AND HOW HANDLED]
- Filters applied before training: [WHICH RECORDS WERE EXCLUDED AND WHY]
- Potential biases: [POPULATIONS OR TIME PERIODS OVER- OR UNDER-REPRESENTED]

Generate a datasheet covering:
1. Motivation (why was this dataset created, who funded/created it)
2. Composition (what does it contain, how was it collected)
3. Collection process (sampling methodology, time period)
4. Pre-processing and cleaning (what transformations were applied)
5. Uses (what is it appropriate for, what should it NOT be used for)
6. Distribution (how it can be accessed, access controls)
7. Maintenance (how it is kept up to date, who is responsible)
```

**Prompt 3: Feature Definition Catalog**
```
Generate a feature definition catalog for the features used in my ML model.

Model: [MODEL NAME]
Feature list (provide as much detail as you have):
For each feature, provide: name, description, data source, calculation, expected range, and any known issues.

Feature 1:
- Name: [FEATURE_NAME]
- Business meaning: [WHAT IT REPRESENTS]
- Calculation: [HOW IT IS COMPUTED — SQL/formula]
- Source table/field: [SOURCE]
- Expected value range: [MIN, MAX, DISTRIBUTION]
- Null rate in training data: [%]
- Known data quality issues: [ANY ISSUES]

[Repeat for each feature]

For each feature, document:
1. Standardized definition (business description + technical specification)
2. Feature type (numeric, categorical, binary, embedding, etc.)
3. Potential for proxy discrimination (does this feature correlate with protected characteristics?)
4. Feature importance ranking and interpretation
5. Known failure modes (conditions where this feature becomes unreliable or invalid)
6. Refresh cadence and serving latency requirements for production
7. Dependencies (other features or upstream data assets this feature depends on)
```

**Prompt 4: Monitoring Specification and Runbook**
```
Generate a model monitoring specification and operational runbook for my production ML model.

Model: [MODEL NAME AND VERSION]
Deployment: [WHERE THE MODEL RUNS — batch scoring / real-time API / etc.]
Prediction target: [WHAT THE MODEL OUTPUTS AND HOW IT IS USED]
Business impact of model failure: [WHAT BREAKS IF THE MODEL STOPS WORKING OR DEGRADES]

Current monitoring setup (if any): [WHAT YOU ARE ALREADY MONITORING]
Retraining cadence: [HOW OFTEN YOU CURRENTLY RETRAIN]
Data refresh cadence: [HOW OFTEN INPUT FEATURES ARE UPDATED]

Generate a monitoring specification covering:
1. Performance metrics to track: which metrics, measurement frequency, and data requirements for each
2. Data drift monitoring: which input features to monitor for distribution shift, detection method (PSI, KS test, etc.), and alert thresholds
3. Label drift monitoring: how to monitor prediction distribution shift when ground truth labels are delayed
4. Alert thresholds: for each monitored metric, define warning threshold (investigate), critical threshold (escalate), and emergency threshold (rollback)
5. Oncall runbook: for each alert type — investigation steps, remediation options (retrain, rollback, feature refresh), and escalation path
6. Retraining trigger conditions: explicit criteria that require model retraining (not just calendar-based)
7. Shadow deployment and A/B testing procedures for model updates
```

**Prompt 5: Subgroup Performance Analysis Documentation**
```
Help me document the fairness and subgroup performance analysis for my ML model in a format suitable for internal AI ethics review and external regulatory audit.

Model: [MODEL NAME]
Model use case: [HOW OUTPUTS ARE USED AND WHAT DECISIONS THEY INFLUENCE]
Potentially sensitive attributes in data: [LIST — e.g., "age, gender, geography, account type"]
Business decision influenced by model: [WHAT ACTION IS TAKEN BASED ON MODEL SCORE]

Performance results I have (provide what you've measured):
- Overall: [PRECISION / RECALL / F1 / AUC]
- Subgroup 1 [DESCRIBE GROUP]: [METRICS]
- Subgroup 2 [DESCRIBE GROUP]: [METRICS]
- [Continue for each subgroup analyzed]

Generate a subgroup performance documentation package covering:
1. Analysis methodology: which groups were analyzed, why these groups were chosen, and what metrics were used
2. Results table: standardized format showing each subgroup's performance across all metrics
3. Disparate impact analysis: for each metric, flag subgroups where performance differs from overall by more than [X%] threshold
4. Root cause analysis: for each significant disparity, what are the plausible causes (training data representation, feature proxy effects, label bias)?
5. Risk assessment: what is the business and ethical risk of each identified disparity if the model is deployed?
6. Mitigation options: what approaches (reweighting, threshold adjustment, additional data collection) could reduce each disparity?
7. Monitoring recommendations: which subgroup metrics should be tracked in production monitoring?
```

---
