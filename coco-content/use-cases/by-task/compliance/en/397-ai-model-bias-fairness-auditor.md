# #397 — AI Model Bias and Fairness Auditor

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Compliance
**Slug**: `ai-model-bias-fairness-auditor`

---

## Introduction

Model bias and fairness have moved from academic concern to regulatory requirement. In 2024, the EU AI Act established mandatory bias assessment requirements for high-risk AI systems. The US Equal Credit Opportunity Act's algorithmic fairness provisions are being actively enforced by the CFPB. New York City's Local Law 144 requires employers to conduct annual bias audits on automated employment decision tools. Financial institutions face SR 11-7 model risk management guidance that increasingly interprets model risk to include fairness risk. For data scientists working on models that affect people — credit decisions, hiring tools, healthcare triage, content moderation, pricing — bias auditing is no longer optional.

The technical challenge is that fairness is not a single metric — it is a family of potentially conflicting mathematical properties. Demographic parity (equal positive prediction rates across groups) is mathematically incompatible with equalized odds (equal true positive and false positive rates across groups) when base rates differ. Statistical parity distance, disparate impact ratio, equal opportunity difference, predictive parity, and calibration within groups all measure different aspects of fairness, and no model can simultaneously satisfy all of them. This means every fairness analysis requires deliberate decisions about which fairness criterion is appropriate for the specific use case, with explicit justification — a decision that is simultaneously technical, legal, and ethical.

Most data scientists lack formal training in algorithmic fairness. They understand the statistical concepts but struggle to: select the right fairness metric for their use case, interpret what a disparate impact ratio of 0.74 actually means in legal terms, communicate fairness findings to legal and compliance teams in the language those teams need, document the mitigation steps they took in a format that satisfies auditors, or understand when to escalate to legal counsel. The result is that many ML teams perform ad hoc fairness checks that would not survive scrutiny under regulatory review.

COCO acts as a fairness audit advisor, combining technical fairness analysis with compliance-ready documentation. The workflow:

1. **Describe your model and protected attributes.** Specify the model's use case, the protected characteristics relevant to your jurisdiction (race, sex, age, national origin), and the sample sizes in each group.
2. **Share performance metrics by group.** Paste confusion matrices, positive prediction rates, and accuracy metrics broken down by protected attribute.
3. **COCO analyzes fairness across multiple criteria.** It calculates disparate impact ratio, statistical parity difference, equalized odds difference, and calibration by group — and explains what each means in the context of your use case.
4. **Receive compliance-oriented interpretation.** COCO maps your technical findings to relevant regulatory standards and explains which findings would constitute concerns under ECOA, the EU AI Act, or other applicable frameworks.
5. **Generate audit documentation.** COCO produces compliance-ready fairness audit documentation that details methodology, findings, identified disparities, mitigation steps taken, and residual risk assessment.

Organizations using COCO for fairness auditing report a 60% reduction in time needed to prepare fairness audit documentation, and significantly higher compliance team confidence in the rigor of the analysis.

**Who benefits:**

- **Data Scientists** building models in regulated domains (credit, hiring, healthcare, housing) who need to perform and document rigorous fairness audits
- **ML Team Leads** who need to ensure their team's models meet fairness standards before deployment in high-risk use cases
- **Compliance and Legal Teams** who need technical fairness analysis translated into regulatory language they can act on
- **Chief AI Officers** and AI governance teams building enterprise-wide responsible AI programs

---

## Practical Prompts

**Prompt 1 — Comprehensive Fairness Audit**
```
I need to conduct a bias and fairness audit on a binary classification model. Here is the context:

Model use case: [DESCRIPTION — e.g., "loan approval model", "hiring screening tool", "insurance pricing model"]
Regulatory context: [APPLICABLE REGULATIONS — e.g., "ECOA / Fair Housing Act", "EU AI Act", "NYC Local Law 144"]
Protected attributes being analyzed: [LIST — e.g., "race, sex, age, national origin"]

Model performance by group:
[For each protected attribute and its values, provide:]
Group: [e.g., "Race: White"]
- n=[N], positive prediction rate=[%], TPR=[%], FPR=[%], precision=[%]

Group: [e.g., "Race: Black"]
- n=[N], positive prediction rate=[%], TPR=[%], FPR=[%], precision=[%]

[Continue for all groups]

Perform a complete fairness audit: (1) calculate disparate impact ratio, statistical parity difference, equalized odds difference, and calibration by group, (2) identify which findings rise to the level of regulatory concern under the applicable frameworks, (3) explain which fairness criteria are most relevant for this use case and why, (4) recommend mitigation approaches for identified disparities.
```

**Prompt 2 — Fairness Metric Selection**
```
I'm building a [MODEL_TYPE] for [USE_CASE] and I need guidance on which fairness metrics I should prioritize, because different metrics give contradictory signals.

Context:
- The model predicts: [TARGET — e.g., "probability of loan default"]
- Positive outcome means: [e.g., "loan approval"]
- Base rates differ across groups: [e.g., "historical default rate is 8% for Group A and 14% for Group B"]
- Stakes of false positives: [DESCRIBE — e.g., "denied loan to creditworthy person"]
- Stakes of false negatives: [DESCRIBE — e.g., "approved loan that defaults, financial loss"]
- Regulatory framework: [APPLICABLE]

Explain: (1) why different fairness metrics give conflicting signals in my case, (2) which criteria are legally most relevant for my use case, (3) which criteria I should use as primary vs. secondary, (4) how to communicate the inherent fairness tensions to stakeholders, (5) what documentation I need to justify my metric selection to auditors.
```

**Prompt 3 — Bias Mitigation Strategy**
```
My fairness audit found the following disparities in my [MODEL_TYPE] for [USE_CASE]:

Disparate impact ratio (positive outcome rate ratio): [VALUE] — [interpretation, e.g., "below the 0.80 four-fifths rule threshold"]
Equalized odds difference: [VALUE]
Most affected group: [GROUP_NAME] vs. reference group [REFERENCE_GROUP]

Current model: [brief description of algorithm and features]
Constraints: [any constraints on mitigation — e.g., "cannot use protected attributes as features", "must maintain AUC above 0.78", "must not increase false negative rate for majority group"]

Recommend a bias mitigation strategy: (1) pre-processing options (data reweighting, resampling, removing proxy features), (2) in-processing options (fairness constraints in the loss function), (3) post-processing options (threshold adjustment by group), (4) the tradeoffs between each option, (5) how to document the mitigation in a way that satisfies regulators.
```

**Prompt 4 — Proxy Feature Detection**
```
I want to identify potential proxy variables in my model — features that may act as proxies for protected attributes even though the protected attributes themselves are excluded.

Protected attributes (excluded from model): [LIST — e.g., "race, national origin, religion"]
Features included in model: [LIST ALL FEATURES WITH DESCRIPTIONS]
Model type: [ALGORITHM]
Use case: [DESCRIPTION]
Geographic data included: [yes/no]

Analyze: (1) which of my features could act as proxies for each protected attribute and why, (2) how to test whether proxy relationships are actually causing disparate impact (correlation analysis, permutation tests), (3) which features I should consider removing or transforming, (4) how to document proxy risk even for features I decide to keep.
```

**Prompt 5 — Fairness Audit Report for Regulatory Submission**
```
I need to produce a formal fairness audit report for [REGULATORY_PURPOSE — e.g., "NYC Local Law 144 compliance", "EU AI Act conformity assessment", "internal model risk committee"].

Model overview:
- Name: [MODEL_NAME]
- Purpose: [WHAT_IT_DOES]
- Deployment context: [WHERE/HOW IT'S USED]
- Affected population: [WHO_IS_AFFECTED]

Audit methodology:
- Data used: [DESCRIPTION]
- Metrics calculated: [LIST]
- Statistical methods: [DESCRIPTION]

Findings:
[PASTE YOUR FAIRNESS ANALYSIS RESULTS]

Mitigation steps taken:
[LIST WHAT YOU DID]

Residual disparities after mitigation:
[DESCRIBE REMAINING GAPS]

Generate a formal fairness audit report suitable for [REGULATORY_PURPOSE] that includes: executive summary, model description, audit methodology, findings by protected characteristic, mitigation actions taken, residual risk assessment, and attestation language.
```
