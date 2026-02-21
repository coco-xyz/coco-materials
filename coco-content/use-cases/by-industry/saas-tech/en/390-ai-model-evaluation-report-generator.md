# #390 — AI Model Evaluation Report Generator

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Reporting
**Slug**: `ai-model-evaluation-report-generator`

---

## Introduction

Model evaluation is one of the most consequential steps in the machine learning lifecycle, yet it is consistently one of the most poorly documented. A data scientist at a mid-size SaaS company might spend two to three weeks training a gradient-boosted classifier, tuning hyperparameters with Optuna, and running cross-validation across five folds — then spend only forty-five minutes writing a summary slide deck that flattens all that rigor into a single accuracy number. Stakeholders approve or reject the model based on that number, without understanding confidence intervals, threshold sensitivity, class imbalance effects, or the business cost of false negatives versus false positives.

This is not laziness. Generating a thorough, well-structured evaluation report is genuinely time-consuming. A complete report should cover: overall performance metrics (accuracy, precision, recall, F1, AUC-ROC, log loss), per-class breakdown, confusion matrix interpretation, calibration analysis, feature importance ranking, comparison against baseline or previous model version, data distribution shift analysis between train and test sets, sensitivity analysis across decision thresholds, and business-impact translation of each metric. Writing this from scratch after an exhausting training cycle takes three to five hours for an experienced practitioner — and the resulting document is often inconsistent in format from project to project, making cross-team comparison nearly impossible.

The downstream consequences are real: models get deployed without clear performance contracts, incidents occur when the model encounters out-of-distribution data that was never discussed, and leadership makes budget decisions based on misleading summaries. In one study of ML teams at enterprise software companies, 68% reported that their model documentation was insufficient for post-deployment debugging, and 54% said they had deployed a model they later realized they did not fully understand at the time.

COCO solves this by acting as a structured evaluation co-author. When you paste your metrics, confusion matrix, and experiment configuration into COCO, it does not just reformat your numbers — it interprets them, contextualizes them against industry benchmarks, flags potential risks, and generates a full narrative report in the format appropriate for your audience (technical review, executive summary, or compliance audit). The process works in four clear steps:

1. **Dump your raw outputs.** Paste scikit-learn's `classification_report`, your MLflow run metadata, validation loss curves, and any threshold sweep results directly into the COCO prompt.
2. **Specify your audience and context.** Tell COCO whether the report is for an internal model review meeting, an executive product decision, a compliance audit, or external publication. Each audience requires a different framing.
3. **COCO drafts the full structured report.** It generates sections including executive summary, methodology recap, metric-by-metric analysis with business interpretation, risk flags, recommended next steps, and a comparison table if you provide previous-version metrics.
4. **Iterate on specific sections.** If your precision-recall tradeoff needs more explanation, or you want the feature importance section rewritten for a non-technical audience, ask COCO to revise that section while keeping the rest intact.
5. **Export and share.** The final report is clean Markdown or structured prose that drops directly into Notion, Confluence, or a Google Doc without reformatting.

Teams using this workflow report cutting evaluation report writing time from an average of 4.2 hours to 35 minutes — an 86% reduction. More importantly, the reports are more complete: COCO consistently includes calibration analysis and threshold sensitivity sections that engineers routinely skip when writing manually, because they are tedious to explain in prose but critical for production use.

**Who benefits:**

- **Data Scientists** who need to produce thorough evaluation documentation without sacrificing research time
- **ML Team Leads** who need consistent, comparable reports across all model projects for portfolio-level review
- **Product Managers** who need to understand model performance in business terms before approving deployment
- **Compliance and Risk Officers** in regulated industries (fintech, healthtech) who need documented evidence that model performance was rigorously evaluated before go-live

---

## Practical Prompts

**Prompt 1 — Full Evaluation Report from Classification Metrics**
```
I trained a binary classification model using XGBoost to predict customer churn. Here are my evaluation results on the held-out test set (n=[TEST_SET_SIZE] samples, [POSITIVE_CLASS_RATE]% positive class rate):

Classification report:
[PASTE SKLEARN CLASSIFICATION_REPORT OUTPUT]

AUC-ROC: [VALUE]
Log loss: [VALUE]
Brier score: [VALUE]

Confusion matrix:
[PASTE CONFUSION MATRIX]

The business context: a false negative (predicting a churner as retained) costs us $[FN_COST] in lost revenue. A false positive (predicting a retained customer as churner) costs $[FP_COST] in unnecessary retention spend.

Generate a complete model evaluation report with: (1) executive summary in plain language, (2) metric-by-metric analysis with business interpretation, (3) optimal decision threshold recommendation based on business costs, (4) risk flags and limitations, (5) recommended next steps before deployment.
```

**Prompt 2 — Multi-Model Comparison Report**
```
I ran three model experiments for our [PREDICTION_TARGET] prediction task and need a comparative evaluation report for our model review meeting.

Model A ([MODEL_A_NAME], [HYPERPARAMS]):
- Validation metrics: [METRICS]
- Training time: [TIME], Inference latency p95: [LATENCY]

Model B ([MODEL_B_NAME], [HYPERPARAMS]):
- Validation metrics: [METRICS]
- Training time: [TIME], Inference latency p95: [LATENCY]

Model C ([MODEL_C_NAME], [HYPERPARAMS]):
- Validation metrics: [METRICS]
- Training time: [TIME], Inference latency p95: [LATENCY]

Production constraints: max inference latency [MAX_LATENCY]ms, max memory [MAX_MEMORY]MB.

Write a structured comparison report that recommends one model, justifies the recommendation against the alternatives, and addresses the latency-accuracy tradeoff explicitly.
```

**Prompt 3 — Regression Model Evaluation Report**
```
I built a regression model ([MODEL_TYPE]) to predict [TARGET_VARIABLE] for [USE_CASE]. Evaluation on test set:

RMSE: [VALUE]
MAE: [VALUE]
MAPE: [VALUE]%
R²: [VALUE]
Max error: [VALUE]
Residuals: [describe pattern or paste residual stats]

The model will be used to [DOWNSTREAM_USE, e.g., "set pricing" / "forecast inventory"]. A prediction error above [THRESHOLD] leads to [BUSINESS_CONSEQUENCE].

Generate an evaluation report that: explains each metric in plain language, interprets the residual pattern, identifies where the model fails (high-error segments), and gives a go/no-go recommendation for production deployment with conditions.
```

**Prompt 4 — Evaluation Report for Executive Audience**
```
I need to present our [MODEL_NAME] model evaluation results to [AUDIENCE, e.g., "the VP of Product and CFO"] who have limited ML background. The model [WHAT_IT_DOES].

Key metrics:
[PASTE METRICS]

Previous model version (baseline) metrics:
[PASTE BASELINE METRICS]

Rewrite these evaluation results as a 1-page executive summary that: leads with business impact rather than technical metrics, translates precision/recall into business outcomes, clearly states what improved vs. the previous version, and ends with a clear deployment recommendation. Avoid jargon — if you must use a technical term, define it in one sentence.
```

**Prompt 5 — Model Evaluation for Compliance Audit**
```
We are preparing a model evaluation dossier for a [REGULATORY_FRAMEWORK, e.g., "SOC 2" / "EU AI Act" / "SR 11-7"] compliance review. The model [WHAT_IT_DOES] and is used in [REGULATED_CONTEXT].

Technical evaluation results:
[PASTE ALL METRICS]

Training data: [DATA_DESCRIPTION, size, time range, source]
Test data: [DATA_DESCRIPTION]
Known limitations: [LIST_LIMITATIONS]

Generate a compliance-ready model evaluation section that documents: model purpose and scope, evaluation methodology and independence of test set, performance metrics with confidence intervals, identified limitations and mitigations, and attestation language suitable for audit review.
```
