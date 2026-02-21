# #395 — AI ML Experiment Tracker

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Monitoring
**Slug**: `ai-ml-experiment-tracker`

---

## Introduction

The reproducibility crisis in machine learning is not primarily a technical problem — it is a documentation problem. MLflow, Weights & Biases, and Neptune all provide excellent infrastructure for logging metrics, parameters, and artifacts. Yet in practice, data scientists consistently underutilize these tools: experiments are run with missing parameter logging, hypothesis rationale is never written down, and the decision to stop a line of experimentation is never explained. When a new team member joins six months later and asks "why did we try random forest but then abandon it?", nobody can answer.

The deeper problem is that experiment tracking requires both logging what you did and documenting why you did it — the experimental narrative. MLflow tracks that you ran 47 experiments with specific hyperparameters and achieved a peak AUC of 0.847. It cannot tell you that experiments 23-31 were exploring whether SMOTE oversampling helped with class imbalance (it didn't), that experiments 32-40 were testing LightGBM vs. XGBoost with the same feature set (LightGBM was faster at similar performance), or that the decision to switch from AUC to F1 as the primary metric at experiment 35 was driven by a product conversation about precision-recall tradeoffs. This narrative is what transforms a list of runs into institutional knowledge.

Without this narrative, several costly situations arise. First, researchers repeat experiments that were already run, wasting compute resources — a 2023 survey found ML teams repeat 23% of their experiments due to poor tracking. Second, when a model fails in production, the inability to reconstruct the exact experimental context makes root cause analysis nearly impossible. Third, when regulators or auditors ask "how did you select this model?", teams cannot provide a coherent account of the decision-making process.

COCO acts as the experimental narrative layer on top of your MLflow or W&B infrastructure. The workflow:

1. **Log experiments as normal in your tracking tool.** COCO complements, not replaces, your existing tracking infrastructure.
2. **Summarize your experimental session to COCO.** At the end of a working session or experimentation block, describe what you tried, what the results were, and what you're confused about or planning next.
3. **COCO generates a structured experiment log entry.** It formats your narrative into a reproducible experiment summary: hypothesis stated, experiments run (with run IDs), results, conclusions drawn, next steps planned.
4. **COCO synthesizes across sessions.** When you share multiple session logs, it identifies patterns — which approaches are converging, which are exhausted, where diminishing returns have set in — and generates an experiment summary report.
5. **Receive experiment review advice.** COCO identifies experiments that should be run based on what's been tried, suggests a priority order for remaining investigation, and flags if your current approach seems to be missing an important baseline.

Teams using COCO alongside MLflow report a 78% improvement in experiment reproducibility scores (measured by whether team members could reconstruct experimental decisions from documentation alone) and a 45% reduction in repeated experiments.

**Who benefits:**

- **Data Scientists** who run extensive experimentation but struggle to maintain clear, reproducible narrative documentation of their process
- **Research Teams** at ML-first companies where experiment hygiene directly affects research velocity and institutional knowledge
- **ML Team Leads** who need to review and understand the experimental process behind a model before approving it for production
- **New Team Members** who need to quickly understand the experimental history of a model they are inheriting

---

## Practical Prompts

**Prompt 1 — End-of-Day Experiment Log Entry**
```
I need to write a structured experiment log entry for today's work. Here's a brain dump of what I did:

Project: [PROJECT_NAME]
Model goal: [WHAT_I'M_TRYING_TO_BUILD]
MLflow experiment ID / W&B project: [ID_OR_NAME]

Today's work:
[FREE-FORM DESCRIPTION OF WHAT YOU TRIED — e.g., "Tested SMOTE vs no oversampling, tried learning rates 1e-3 and 1e-4, attempted feature engineering with lag-7 and lag-30 features, found that the lag features caused overfitting"]

Best run metrics today: [PASTE RUN_ID AND METRICS]
Most interesting finding: [DESCRIBE]
What didn't work: [DESCRIBE]
Open questions: [LIST]
Plan for tomorrow: [DESCRIBE]

Format this as a structured experiment log entry with: hypothesis, experiments run (with run IDs), observations, conclusions, and next steps.
```

**Prompt 2 — Experiment Phase Summary**
```
I've completed a phase of experimentation and need to summarize what was learned. Here are my session logs from the past [N weeks]:

[PASTE OR DESCRIBE SESSION_LOG_1]
[PASTE OR DESCRIBE SESSION_LOG_2]
[etc.]

Or: here are the top 20 MLflow runs from this phase:
| Run ID | Model | Key hyperparams | Val AUC | Notes |
|--------|-------|-----------------|---------|-------|
[PASTE TABLE]

Synthesize: (1) what approaches were explored, (2) what the key findings were for each, (3) what can be considered closed/exhausted, (4) what remains to be explored, (5) what the current best approach is and why, (6) a recommended next experimental phase plan.
```

**Prompt 3 — Experiment Design for Next Phase**
```
I've been running experiments for [N weeks] on [PROJECT] and I'm not sure what to try next. Current state:

Best model so far: [MODEL_TYPE, AUC=[VALUE]]
Target performance: [TARGET_AUC or other metric]
Performance gap: [CURRENT - TARGET]

What I've already tried (and found):
1. [APPROACH_1]: [result and conclusion]
2. [APPROACH_2]: [result and conclusion]
3. [APPROACH_3]: [result and conclusion]

Resources available: [GPU hours, data volume, team size]
Deadline: [DATE]

Based on this experimental history, suggest: (1) the 3 highest-priority experiments to run next, (2) experiments that would be low-ROI given what's been tried, (3) whether I should pivot to a fundamentally different approach, (4) how to prioritize given the deadline.
```

**Prompt 4 — Model Selection Decision Documentation**
```
I need to document the model selection decision for our [PROJECT] model in a format that explains the rationale to stakeholders and future team members.

Experiments considered: [N total experiments over N weeks]
Finalists:
- Model A: [DESCRIPTION], AUC=[VAL], F1=[VAL], latency=[VAL]ms
- Model B: [DESCRIPTION], AUC=[VAL], F1=[VAL], latency=[VAL]ms
- Model C: [DESCRIPTION], AUC=[VAL], F1=[VAL], latency=[VAL]ms

Selection criteria applied:
1. [CRITERION_1, weight]
2. [CRITERION_2, weight]
3. [CRITERION_3, weight]

Selected model: [MODEL]
Key tradeoffs accepted: [DESCRIBE]

Write a model selection decision document that: explains the evaluation criteria and why they were chosen, compares finalists transparently, states the decision and its rationale, acknowledges tradeoffs, and could serve as an audit trail for future review.
```

**Prompt 5 — Reproducing a Past Experiment**
```
I need to reproduce and understand an experiment that was run [N months ago] by [ORIGINAL_AUTHOR / "a previous team member"]. The available documentation is incomplete.

What I have:
- MLflow run ID: [RUN_ID]
- Logged parameters: [PASTE MLflow params]
- Logged metrics: [PASTE metrics]
- Git commit hash (if available): [HASH]
- Any notes: [PASTE notes if they exist]

What's missing or unclear:
- [GAP_1, e.g., "the training data version is not documented"]
- [GAP_2, e.g., "it's unclear whether feature engineering was applied before or after the train/test split"]
- [GAP_3]

Help me: (1) reconstruct the most likely experimental setup from the available evidence, (2) identify what questions I need to answer to fully reproduce this run, (3) list the checks I should run to verify my reproduction matches the original, (4) write documentation for this experiment that prevents this ambiguity in the future.
```
