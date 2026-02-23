# Use Case #401: AI Time Series Forecasting Assistant

**Role**: Data Scientist / ML Engineer | **Industry**: SaaS, Tech, Enterprise | **Task**: Analysis, Forecasting, Predictive Modeling

---

## Detailed Introduction

**The Pain: Naive Forecasts That Miss Critical Patterns**

Time series forecasting is one of the most technically demanding domains in applied data science, and it is also one of the most commonly attempted without adequate expertise. A generalist data scientist assigned to build a revenue forecast for the first time will typically reach for a linear regression or a simple moving average — not because these are wrong in principle, but because the decision of when they are and are not appropriate requires understanding stationarity, autocorrelation structure, seasonality decomposition, and the distinction between trend extrapolation and structural forecasting. The gap between "I can fit a line to this data" and "I understand what this time series is actually doing" is enormous, and the consequences of that gap compound forward in time: a model that ignores a weekly seasonal pattern produces errors that are not random — they are systematic and predictable, which means the model is confidently wrong in the same direction every week.

The diagnostic phase alone requires expertise that many practitioners lack. Before selecting a forecasting model, a data scientist should test for stationarity (ADF test, KPSS test), inspect autocorrelation and partial autocorrelation functions (ACF/PACF plots), decompose the series into trend, seasonality, and residual components (classical decomposition or STL), check for structural breaks, and assess whether the series has sufficient history at the required frequency. In practice, most teams skip some or all of these steps and proceed directly to model fitting — arriving at an ARIMA model without having verified the model's assumptions, or using Prophet without understanding that its default seasonality settings assume certain data characteristics that may not hold.

Model selection is a separate challenge. The landscape of time series models spans classical methods (ARIMA, SARIMA, Holt-Winters exponential smoothing), modern probabilistic frameworks (Prophet, NeuralProphet), gradient boosted regressors with lag features (LightGBM, XGBoost with time-based features), and deep learning approaches (LSTM, Temporal Fusion Transformer). Each has appropriate use cases defined by data characteristics: series length, seasonality strength, whether external regressors are available, whether the forecast horizon is short or long, and whether interpretability or accuracy is the primary objective. A model that is state-of-the-art for one configuration can be significantly worse than a simple exponential smoothing model for another. Without a systematic framework for matching data characteristics to model families, model selection becomes trial and error.

Forecast evaluation and communication present a final layer of difficulty. Mean Absolute Percentage Error (MAPE) is the most widely reported forecasting metric and also one of the most misleading — it is undefined when actuals are zero, heavily penalizes large actuals, and cannot be compared across series with different scales. Confidence intervals are routinely omitted from business forecasts because data scientists are uncertain how to generate them properly (especially for models like ARIMA where interval calculation assumptions often fail) or because stakeholders don't know how to use them. The result is that business users receive point forecasts presented with false precision, use them as certainties, and then attribute forecast failures to "bad data" rather than to inherent uncertainty they were never informed about.

**How COCO Solves It**

COCO serves as a time series forecasting advisor — guiding data scientists through the full forecasting workflow from exploratory diagnosis through model selection, evaluation design, and stakeholder communication of forecast uncertainty.

1. **Time Series Diagnostic Guidance**: COCO walks through the pre-modeling diagnostic checklist systematically — identifying which tests to run and how to interpret their outputs to characterize the series before model selection begins.
   - Interprets ACF/PACF plots and stationarity test results to identify AR, MA, and differencing orders
   - Identifies seasonality periods, multiple seasonality layers (e.g., weekly + annual), and structural breaks that require special handling

2. **Model Selection Based on Data Properties**: COCO maps the characteristics of a specific time series to the appropriate model family using a structured decision framework rather than convention.
   - Covers ARIMA/SARIMA, Holt-Winters, Prophet, LightGBM with lag features, LSTM, and Temporal Fusion Transformer with selection criteria for each
   - Recommends baseline models (naive seasonal, seasonal average) that should be beaten before concluding a complex model adds value

3. **Forecast Output Interpretation**: COCO explains what forecast outputs mean — including trend components, seasonal components, residuals, and the sources of uncertainty — in terms that support both model debugging and business communication.
   - Translates model coefficients and component estimates into natural-language descriptions of what the model believes the series is doing
   - Identifies when residual patterns indicate model misspecification (systematic patterns remaining in residuals)

4. **Confidence Interval and Uncertainty Range Design**: COCO guides proper uncertainty quantification — including when and how to generate prediction intervals, how to communicate them to non-technical audiences, and which approaches are appropriate for which model types.
   - Distinguishes prediction intervals (for individual future observations) from confidence intervals (for the mean forecast)
   - Recommends scenario-based uncertainty framing (optimistic/base/pessimistic) when formal intervals are too technical for the audience

5. **Forecast Evaluation Protocol Design**: COCO designs evaluation frameworks that catch model failures before they propagate to business decisions — covering metric selection, cross-validation design for time series, and backtesting approaches.
   - Recommends time-series-appropriate cross-validation (walk-forward validation / expanding window) over naive k-fold which breaks temporal ordering
   - Selects evaluation metrics appropriate to the distribution and scale of the series (MAE, RMSE, MASE, sMAPE, Pinball loss for quantile forecasts)

6. **Business Communication of Forecast Uncertainty**: COCO translates technical forecast outputs into stakeholder-ready language that conveys appropriate confidence without creating false precision or triggering decision paralysis.
   - Drafts forecast narrative that quantifies uncertainty in business terms (revenue range, unit range) rather than statistical terms
   - Designs forecast update cadence recommendations based on how quickly the series' behavior tends to change

**Measurable Results**

- **Forecast accuracy**: Median MAPE for first-attempt forecasts by generalist data scientists → 28% → 14% after applying structured diagnostic and model selection protocol (+50% accuracy improvement)
- **Model selection time**: Hours spent evaluating model options without systematic framework → 12 hours average → 3 hours with structured selection protocol
- **Residual autocorrelation**: Proportion of shipped models with statistically significant autocorrelation remaining in residuals (indicating model misspecification) → 61% → 18% after diagnostic-first approach
- **Forecast confidence interval coverage**: Proportion of business forecasts that include validated uncertainty ranges → 12% baseline → 67% after COCO-guided evaluation protocol adoption
- **Stakeholder forecast adoption**: Percentage of submitted forecasts incorporated into planning models by finance/operations teams → 44% → 78% after improved uncertainty communication

**Who Benefits**

- **Generalist Data Scientists**: Gain a structured methodology for time series problems that prevents the most common diagnostic and model selection errors without requiring deep specialization
- **Applied ML Engineers**: Use the evaluation protocol design guidance to build more robust backtesting frameworks and catch model failures in staging rather than production
- **Business Intelligence Analysts**: Leverage COCO's uncertainty communication frameworks to present forecast ranges to business stakeholders in formats that drive better planning decisions
- **Data Science Managers**: Use the model selection framework as a code review and design review checklist for time series projects submitted by team members

---

## Practical Prompts

**Prompt 1: Time Series Diagnostic Assessment**
```
I have a time series dataset I need to forecast. Before selecting a model, help me run a complete diagnostic assessment.

Series description: [WHAT IS BEING MEASURED — e.g., "daily active users on a SaaS product"]
Frequency: [HOURLY / DAILY / WEEKLY / MONTHLY]
History length: [N observations, date range]
Forecast horizon: [HOW FAR AHEAD I NEED TO FORECAST]
Primary use: [WHAT DECISIONS THIS FORECAST DRIVES]

Diagnostic results I have so far (paste what you have — skip what you haven't run yet):
- ADF stationarity test: [TEST STATISTIC, P-VALUE, CONCLUSION]
- KPSS test: [RESULT]
- ACF/PACF: [DESCRIBE WHAT YOU SEE — e.g., "ACF decays slowly, PACF cuts off at lag 2"]
- Seasonal decomposition: [DESCRIBE TREND, SEASONALITY, RESIDUAL CHARACTERISTICS]
- Known structural breaks: [DATE AND CAUSE IF KNOWN]

Based on this, help me:
1. Identify whether the series is stationary and what transformations (differencing, log) are needed
2. Characterize the autocorrelation structure (AR, MA, or mixed; seasonal vs. non-seasonal)
3. Identify seasonality periods present (weekly, monthly, annual, or multiple)
4. Flag any structural breaks that require special handling
5. Recommend the next diagnostic steps I haven't completed yet
6. Produce a summary characterization of this series that will guide model selection
```

**Prompt 2: Model Selection for My Time Series**
```
Based on my time series characteristics, help me select the right forecasting model.

Series characteristics:
- Type: [WHAT IS MEASURED]
- Frequency: [DAILY / WEEKLY / MONTHLY]
- Length: [N observations]
- Forecast horizon: [SHORT: 1-7 periods / MEDIUM: 8-30 / LONG: 30+]
- Seasonality: [NONE / SINGLE / MULTIPLE — describe periods]
- Trend: [NONE / LINEAR / NONLINEAR / STRUCTURAL CHANGES]
- External regressors available: [YES/NO — list if yes]
- Interpretability requirement: [HIGH: must explain to business / LOW: black box OK]
- Computational constraints: [REAL-TIME INFERENCE NEEDED? RETRAINING FREQUENCY?]
- Historical forecast accuracy requirement: [TARGET MAPE / MASE / OTHER]

For each of the following model families, evaluate fit for my series:
1. ARIMA/SARIMA — pros, cons, recommended ARIMA order based on my ACF/PACF
2. Holt-Winters exponential smoothing — pros, cons, which variant (additive/multiplicative)
3. Facebook Prophet — pros, cons, configuration considerations
4. LightGBM/XGBoost with lag features — pros, cons, feature engineering approach
5. LSTM or Temporal Fusion Transformer — pros, cons, data volume requirements

Recommend my primary model, a simpler backup model, and a baseline model I must beat to justify complexity.
```

**Prompt 3: Evaluation Protocol Design for Time Series**
```
I need to design a rigorous backtesting and evaluation framework for my time series forecasting model before I declare it production-ready.

Series: [DESCRIPTION]
Model I'm evaluating: [MODEL NAME]
Forecast horizon: [N periods]
Retraining cadence (planned): [HOW OFTEN MODEL WILL BE RETRAINED]
Minimum history available: [N observations]

Design my evaluation protocol covering:
1. Cross-validation approach: walk-forward validation design (how many folds, minimum training window size, gap between train and test if needed for leakage prevention)
2. Metric selection: recommend the right accuracy metrics for my series type and why (explain why MAPE may or may not be appropriate here)
3. Baseline models I must beat: define the specific naive baselines appropriate for my series
4. Residual diagnostics to check after model fitting: list the tests with pass/fail criteria
5. Confidence interval coverage testing: how to validate that my 80% prediction intervals actually contain 80% of actuals
6. Failure mode detection: what patterns in my evaluation results would indicate the model is not suitable for production
7. Decision criteria: what evaluation thresholds would make me confident to deploy this model?
```

**Prompt 4: Forecast Uncertainty Communication for Stakeholders**
```
I have a completed time series forecast I need to present to a non-technical business audience. Help me communicate the forecast and its uncertainty in a way that enables confident planning without creating false precision.

Forecast context: [WHAT IS BEING FORECASTED AND WHY]
Audience: [ROLE — e.g., "Finance team building annual plan"]
Point forecast: [VALUE OR RANGE]
Prediction interval (80% or 95%): [LOWER, UPPER]
Known risks that could invalidate the forecast: [LIST]
Model accuracy on historical backtests: [MAPE OR OTHER METRIC]

Help me:
1. Convert the statistical prediction interval into a scenario-based range (optimistic / base / pessimistic) with business-language descriptions of what would drive each scenario
2. Draft a one-paragraph forecast summary for the business audience that states the point forecast, the realistic range, and the primary uncertainty driver
3. Communicate what the historical accuracy means in practical terms (e.g., "in backtesting, this model's 12-month forecasts were within X% of actual in 8 of 10 periods")
4. Identify the top 3 assumptions embedded in this forecast that the business team should validate
5. Recommend a forecast update cadence and trigger conditions (e.g., "refresh monthly, or immediately if [LEADING INDICATOR] moves more than X%")
```

**Prompt 5: Forecast Failure Diagnosis**
```
My time series model is producing forecasts that are clearly wrong, and I need to diagnose the root cause.

Series: [DESCRIPTION]
Model: [MODEL NAME AND CONFIGURATION]
Observed failure: [DESCRIBE THE FAILURE — e.g., "consistently undershooting actuals by 15-20% in the last 3 months" or "correctly predicting direction but magnitude is way off"]
Recent changes to the series or business context: [ANY KNOWN CHANGES — new marketing campaigns, product changes, macro events]

Diagnostic questions to help me:
1. Residual pattern analysis: what residual patterns (systematic under/over-prediction, seasonality in residuals, heteroscedasticity) correspond to what model failure modes?
2. Data distribution shift: how do I test whether the series' statistical properties have changed since training (concept drift detection)?
3. Seasonality failure modes: what causes a model that handled seasonality correctly before to start missing it?
4. External regressor failures: if I'm using external features, how do I diagnose whether a feature has become stale, lagged incorrectly, or lost predictive power?
5. Model retraining diagnosis: should I retrain on recent data only, retrain on all data, or change the model entirely — and what evidence would distinguish these choices?

Produce a diagnostic checklist I can work through systematically to identify the root cause.
```

---
