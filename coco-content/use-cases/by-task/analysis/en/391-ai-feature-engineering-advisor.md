# #391 — AI Feature Engineering Advisor

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Analysis
**Slug**: `ai-feature-engineering-advisor`

---

## Introduction

Feature engineering remains the single highest-leverage activity in applied machine learning, yet it is also the most poorly systematized. In a survey of Kaggle grandmasters and industry ML practitioners, 82% cited feature engineering as the phase where they felt most dependent on intuition and domain expertise rather than systematic methodology. A data scientist working on a customer lifetime value model might spend three weeks iterating on raw features before discovering that a simple ratio — revenue in the last 30 days divided by revenue in the last 90 days — captures recency decay better than either raw variable alone. That discovery came from experience, not process.

The cost of poor feature engineering is invisible but enormous. A team at a B2B SaaS company building a lead scoring model spent six weeks on model architecture (trying LightGBM, XGBoost, neural networks) before a consulting engagement revealed that their core problem was feature representation: they were using raw CRM event counts without any temporal windowing, causing severe data leakage from future events. The model had 0.91 AUC in cross-validation and 0.61 AUC in production — a 30-point collapse that could have been caught in the feature engineering phase. Teams routinely ship models that underperform not because the algorithm is wrong but because the signal is weak or leaky.

Feature engineering advice is also notoriously context-dependent. What works for click-stream data in an e-commerce context is irrelevant for healthcare time-series or financial transaction fraud. Books and courses teach general techniques (polynomial features, interaction terms, target encoding) but cannot give practitioners real-time, context-specific guidance on their actual dataset and prediction target. Senior engineers carry this knowledge in their heads; junior engineers on their teams are left to rediscover it through trial and error, often across months of experiment cycles.

COCO acts as a senior feature engineering advisor, available for every dataset and task. The workflow:

1. **Describe your dataset and prediction task.** Provide your data schema, feature types (categorical, continuous, temporal, text), target variable, and training time horizon. The more context you give, the more targeted the advice.
2. **Share your current feature set and baseline.** Paste your existing feature list, current model performance, and any feature importance scores from an initial run. COCO uses this to identify gaps, not rebuild from scratch.
3. **COCO generates targeted feature proposals.** It suggests concrete new features with implementation guidance — specific pandas or SQL transformations — grouped by expected impact category (recency/frequency/monetary patterns, interaction features, domain-specific aggregations, leakage-risk items to remove).
4. **Receive leakage audit.** COCO proactively identifies any features in your current set that carry temporal leakage risk given your prediction horizon.
5. **Iterate on specific feature families.** Ask for deeper advice on embedding categorical variables with high cardinality, creating lag features for time series, or building graph-based features from user-user interaction data.

Data science teams using COCO for feature engineering advice report a 40% reduction in the number of experiment iterations needed to reach target model performance. The leakage audit alone has prevented production incidents for teams that previously only caught leakage after deployment. Junior data scientists report moving from "I don't know what else to try" to productive experimentation within a single conversation.

**Who benefits:**

- **Data Scientists** facing plateaued model performance who need systematic feature ideation beyond their current domain knowledge
- **Junior ML Engineers** who lack senior mentorship and need real-time guidance on feature engineering best practices
- **ML Team Leads** who want to standardize feature engineering review before models advance to deployment
- **Analytics Engineers** building feature stores who need to reason about which features are worth materializing at scale

---

## Practical Prompts

**Prompt 1 — Feature Engineering for Classification Task**
```
I'm building a [CLASSIFICATION_TASK, e.g., "churn prediction"] model. My dataset has the following schema:

Table: [TABLE_NAME]
- [COLUMN_1]: [TYPE, description]
- [COLUMN_2]: [TYPE, description]
- [COLUMN_3]: [TYPE, description]
[continue for all relevant columns]

Prediction target: [TARGET_VARIABLE] (binary: [CLASS_0] vs [CLASS_1])
Observation grain: one row per [ENTITY] per [TIME_PERIOD]
Prediction horizon: predicting [TARGET] [X] days in advance
Training data spans: [DATE_RANGE]

Current baseline features: [LIST_CURRENT_FEATURES]
Current model AUC: [VALUE]

Suggest 15-20 new features I should engineer, with: (1) feature name, (2) business intuition behind it, (3) exact pandas/SQL implementation, (4) expected signal direction, (5) any leakage risk to watch for.
```

**Prompt 2 — Temporal Feature Engineering for Time Series**
```
I'm building a [FORECASTING_TASK] model using [FRAMEWORK, e.g., "LightGBM with lag features" / "Prophet" / "N-BEATS"]. My time series data:

Entity: [WHAT_IS_BEING_FORECASTED, e.g., "SKU-level daily sales"]
Granularity: [DAILY/WEEKLY/HOURLY]
History available: [N months/years]
Known future features (exogenous): [LIST]
Forecast horizon: [N periods]

Current lag features: [LIST_CURRENT_LAGS]
Current rolling features: [LIST_CURRENT_ROLLING_FEATURES]

Advise on: (1) which additional lag orders to include and why, (2) rolling window statistics I'm missing, (3) calendar/seasonality features appropriate for this domain, (4) how to handle the feature engineering for short-history entities, (5) how to prevent leakage with a expanding-window cross-validation setup.
```

**Prompt 3 — High-Cardinality Categorical Feature Encoding**
```
I have the following high-cardinality categorical features in my [PREDICTION_TASK] dataset:

Feature: [FEATURE_NAME_1]
- Cardinality: [N unique values]
- Distribution: [uniform / long-tailed / other]
- Relationship to target: [what you know or suspect]

Feature: [FEATURE_NAME_2]
- Cardinality: [N unique values]
- Distribution: [uniform / long-tailed / other]

My model is [MODEL_TYPE, e.g., "XGBoost" / "logistic regression" / "neural network"].
Training set size: [N rows]

For each feature, recommend: (1) the best encoding strategy (target encoding, frequency encoding, entity embeddings, hashing, etc.), (2) implementation in pandas/scikit-learn/category_encoders, (3) cross-validation precautions to prevent target encoding leakage, (4) whether to keep it as-is or derive a simpler proxy.
```

**Prompt 4 — Feature Leakage Audit**
```
Please audit the following feature list for temporal leakage risks. My model setup:

Prediction task: [TASK]
Prediction time: features are computed as of date T, predicting [TARGET] at T+[HORIZON]
Training cutoff logic: [describe your train/test split approach]

Feature list:
[PASTE FULL FEATURE LIST WITH DESCRIPTIONS]

For each feature, classify: (1) Safe — available at prediction time without leakage, (2) At Risk — may contain leakage depending on implementation details, (3) Leaky — definitionally contains future information. For At Risk and Leaky features, explain the leakage mechanism and propose a corrected version.
```

**Prompt 5 — Feature Selection and Dimensionality Reduction**
```
I have [N] features in my [TASK] model and want to reduce dimensionality before final training. Current situation:

Model type: [MODEL_TYPE]
Feature count: [N]
Training rows: [N_ROWS]
Current performance: [METRICS]

Feature importance from initial run:
[PASTE FEATURE_IMPORTANCE OUTPUT — can be from scikit-learn, SHAP, or LightGBM]

Known collinear feature groups:
[LIST_ANY_GROUPS_YOU_SUSPECT]

Recommend a feature selection strategy: (1) which features to drop based on importance and redundancy, (2) whether to use SHAP, permutation importance, or mutual information for selection, (3) how to handle correlated feature groups without arbitrarily dropping one, (4) whether PCA or other dimensionality reduction is appropriate here, (5) how to validate that dropping features doesn't hurt out-of-sample performance.
```
