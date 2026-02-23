# #392 — AI ML Pipeline Debugging Assistant

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Bug Fix
**Slug**: `ai-ml-pipeline-debugging-assistant`

---

## Introduction

ML pipelines fail in ways that are qualitatively different from ordinary software bugs. A standard software bug produces a clear error message pointing to a specific line of code. An ML pipeline bug might manifest as: training loss that inexplicably stops decreasing after epoch 3, a model that achieves 99% training accuracy but 51% validation accuracy, a batch normalization layer that causes NaN losses only on certain GPUs, or an Airflow DAG that silently corrupts data by joining on the wrong key and produces plausible-looking but completely wrong training data. The failure mode is often ambiguous, the reproduction is often non-deterministic, and the root cause can be anywhere across a stack that includes data preprocessing, feature engineering, model architecture, training loop configuration, hardware, and orchestration.

Diagnosing ML pipeline issues requires simultaneously reasoning about statistics, software engineering, linear algebra, and distributed systems — a combination that even experienced practitioners find challenging. A data scientist debugging a vanishing gradient problem in a PyTorch transformer must simultaneously consider: learning rate schedule, weight initialization scheme, batch size interaction with batch normalization, gradient clipping thresholds, layer normalization placement, mixed precision training interactions, and whether the loss function is numerically stable. Any one of these could be the culprit. Methodical debugging requires a systematic checklist, domain-specific pattern recognition, and the ability to reason about how these variables interact — knowledge that takes years to accumulate.

The cost of debugging delays is measured in GPU-hours and calendar time. A data scientist at a deep learning startup reported spending 11 days tracking down a training instability that turned out to be caused by an incorrectly set `pin_memory=True` flag combined with a custom DataLoader that had a race condition. Another team spent three weeks on a feature store bug where timestamps were being joined with off-by-one-day errors due to timezone handling — producing a model that was consistently using yesterday's features to predict today's outcomes. Debugging ML pipelines at senior level costs approximately $800–1,500 per day in fully-loaded engineer time.

COCO serves as a debugging partner that applies systematic diagnostic frameworks to ML-specific failure modes. The workflow:

1. **Describe the failure symptom precisely.** Paste error messages, loss curves (as text or description), metric trajectories, and any context about when the problem started (after a code change, data update, dependency upgrade, infrastructure migration).
2. **Share your stack configuration.** Include framework versions (PyTorch 2.x, TensorFlow, scikit-learn), hardware (GPU type, multi-GPU setup), orchestration tool (Airflow, Prefect, Kubeflow), and data infrastructure (feature store, data lake format).
3. **COCO generates a ranked diagnostic checklist.** Based on the symptom pattern, it identifies the most likely root cause categories and gives you a structured investigation path — most probable causes first, with specific checks to run for each hypothesis.
4. **Paste intermediate diagnostic outputs.** As you run checks, share what you find — gradient norms, memory profiles, intermediate tensor statistics — and COCO refines its hypothesis.
5. **Receive fix recommendation with implementation.** Once the root cause is identified, COCO provides the corrected code, configuration change, or data pipeline fix with explanation.

Teams using COCO for ML debugging report an average 65% reduction in time-to-resolution for pipeline issues, with the largest gains on complex, multi-system bugs that previously required escalation to senior engineers.

**Who benefits:**

- **Data Scientists** who encounter training failures, metric anomalies, or pipeline errors they cannot immediately diagnose
- **ML Engineers** maintaining production training pipelines who need fast root-cause analysis for incidents
- **Junior ML practitioners** who lack the pattern recognition to identify common ML failure modes like gradient vanishing, data leakage, or preprocessing bugs
- **Research Engineers** implementing novel architectures who need help debugging training instabilities in new model designs

---

## Practical Prompts

**Prompt 1 — Training Loss Anomaly Diagnosis**
```
My [MODEL_TYPE] model training is exhibiting unexpected behavior and I need help diagnosing the root cause.

Framework: [PyTorch/TensorFlow/JAX] version [VERSION]
Hardware: [GPU_TYPE, single/multi-GPU]
Dataset: [DESCRIPTION, size]
Architecture: [BRIEF_DESCRIPTION]

Symptom: [DESCRIBE EXACTLY — e.g., "loss decreases normally for 3 epochs then suddenly spikes to NaN", "training loss decreases but validation loss increases from epoch 1", "loss oscillates violently without converging"]

Loss curve (last 10 epochs):
Train loss: [VALUES]
Val loss: [VALUES]

Optimizer: [TYPE, lr, schedule]
Batch size: [N]
Gradient clipping: [yes/no, threshold if yes]

Recent changes before this started: [LIST_ANY_CHANGES]

Give me a ranked list of most likely root causes with specific diagnostic commands/code to run for each hypothesis.
```

**Prompt 2 — Data Pipeline Bug Investigation**
```
I suspect there's a bug in my data pipeline that's corrupting my training data. The model performance is unexpectedly poor and I've ruled out architecture and hyperparameters.

Pipeline stack: [Airflow/Prefect/dbt/Spark, describe briefly]
Data storage: [BigQuery/S3/Delta Lake/PostgreSQL]
Feature engineering: [Pandas/PySpark/dbt transforms]

Symptoms suggesting data issue:
- [SYMPTOM_1, e.g., "Feature X has much higher importance than makes business sense"]
- [SYMPTOM_2, e.g., "Model performance degrades sharply on data from the last 2 months"]
- [SYMPTOM_3, e.g., "Validation AUC is 0.95 but production AUC is 0.62"]

Pipeline code (most suspicious section):
```python
[PASTE RELEVANT PIPELINE CODE]
```

Walk me through: (1) what data integrity checks I should run, (2) where in this pipeline data corruption most likely occurs, (3) how to add monitoring/assertions to catch this class of bug in the future.
```

**Prompt 3 — PyTorch-Specific Training Bug**
```
I'm debugging a training issue in my PyTorch model. Here's the full context:

Model architecture: [DESCRIBE or paste model definition]
Training loop summary: [DESCRIBE key components]

Error or symptom:
[PASTE EXACT ERROR MESSAGE OR DESCRIBE SYMPTOM]

Stack trace (if applicable):
[PASTE STACK TRACE]

Environment:
- PyTorch version: [VERSION]
- CUDA version: [VERSION]
- Using: [DataParallel/DistributedDataParallel/single GPU]
- Mixed precision: [yes/no, amp.autocast?]
- Gradient checkpointing: [yes/no]

Specific things I've already tried: [LIST]

Diagnose the most likely cause and give me the corrected code.
```

**Prompt 4 — Airflow ML Pipeline DAG Debugging**
```
My Airflow ML training DAG is failing and I need help debugging it.

Airflow version: [VERSION]
DAG structure: [DESCRIBE the task sequence — data extraction → preprocessing → training → evaluation → model registration]

Failure details:
- Which task is failing: [TASK_NAME]
- Error message: [PASTE ERROR]
- Is it failing consistently or intermittently? [ANSWER]
- When did it start failing? [e.g., "after upgrading sklearn from 1.2 to 1.4" / "after changing the data source"]

Relevant task code:
```python
[PASTE FAILING TASK CODE]
```

What are the most likely causes of this specific failure pattern, and what should I check first?
```

**Prompt 5 — Reproducibility and Non-Determinism Debug**
```
My ML experiments are not reproducible — running the same code twice gives different results, making it impossible to compare experiments reliably.

Framework: [FRAMEWORK + VERSION]
Hardware: [GPU_TYPE]

What I've already set:
```python
[PASTE YOUR CURRENT SEED-SETTING CODE]
```

Things I've noticed:
- [e.g., "Results vary by ~2% AUC between identical runs"]
- [e.g., "Only non-deterministic on multi-GPU setup"]
- [e.g., "DataLoader workers seem to be the source"]

Identify all potential sources of non-determinism in my setup (framework ops, DataLoader, data augmentation, distributed training, custom CUDA kernels, etc.) and give me a complete reproducibility checklist with the code to fix each source.
```
