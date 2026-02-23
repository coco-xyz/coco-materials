# #393 — AI A/B Test Results Analyzer

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Analysis
**Slug**: `ai-ab-test-results-analyzer`

---

## Introduction

A/B testing is the cornerstone of data-driven product development, yet the gap between running an experiment and correctly interpreting its results is larger than most organizations acknowledge. In a benchmarking study of 50 SaaS companies, only 31% correctly identified a statistically significant result when presented with a realistic A/B test scenario involving multiple metrics, sample size variation by segment, and borderline p-values. The other 69% made at least one consequential error: stopping early when they saw a promising result, ignoring multiple comparison corrections when testing five metrics simultaneously, or misinterpreting a statistically significant but practically negligible effect as a reason to ship.

The most common and costly failure mode is the "peeking problem": a product manager checks the experiment dashboard every morning, sees that conversion rate is up 8% with p=0.04 on day 4, and requests early termination. What they do not realize is that continuous monitoring inflates the Type I error rate — if you check at 14 interim time points and stop when you first hit p<0.05, your actual false positive rate is approximately 40%, not 5%. Shipping based on this result means roughly one in two "wins" is actually noise. At scale, this destroys the integrity of the experimentation program: teams ship features they believe are improvements, product quality degrades, and the root cause is invisible because no individual decision looks wrong in isolation.

Beyond the peeking problem, A/B test analysis requires handling: novelty effects (early lift that disappears after users acclimate), network effects (treatment leakage in social products), seasonality confounding (launching on a Monday vs. Friday), primary metric / guardrail metric tradeoffs, segment heterogeneity (the treatment works for mobile users but hurts desktop), practical significance versus statistical significance, and the decision between frequentist and Bayesian analysis frameworks. Each of these requires both statistical expertise and product context — a combination that leaves most product teams relying on interpretations that are either over-simplified or technically incorrect.

COCO bridges this gap by combining statistical rigor with narrative clarity. The workflow:

1. **Share experiment setup and raw results.** Paste your sample sizes, conversion rates or metric values by variant, test duration, and the metrics you tracked.
2. **Provide business context.** Tell COCO what decision this experiment informs, what the primary success metric is, what guardrail metrics must not regress, and what the minimum detectable effect was in your power calculation.
3. **COCO performs full statistical analysis.** It calculates statistical significance with appropriate corrections, checks for practical significance, identifies segment heterogeneity if you share breakdowns, and flags methodological concerns (underpowering, early stopping, multiple comparisons).
4. **Receive a ship / no-ship recommendation.** COCO translates the statistical analysis into a clear, justified decision recommendation with explicit risk quantification.
5. **Generate stakeholder communication.** COCO writes the experiment summary in the format your team uses — from a detailed technical report to a one-paragraph Slack message for leadership.

Product and data science teams using COCO for experiment analysis report a 55% reduction in incorrect early-termination decisions and a 70% reduction in time spent preparing experiment readouts for stakeholder reviews.

**Who benefits:**

- **Data Scientists** who run A/B tests and need to produce rigorous, clear analyses without spending hours on statistical consulting
- **Product Managers** who need to understand experiment results accurately before making ship decisions
- **Growth Engineers** running high-velocity experimentation programs where speed and accuracy must both be maintained
- **Analytics Managers** who need to ensure statistical quality across dozens of concurrent experiments

---

## Practical Prompts

**Prompt 1 — Full A/B Test Analysis**
```
I ran an A/B test and need a complete statistical analysis and ship recommendation.

Experiment setup:
- Feature being tested: [DESCRIPTION]
- Primary metric: [METRIC, e.g., "7-day retention rate"]
- Guardrail metrics: [LIST, e.g., "session length, revenue per user"]
- Test duration: [N days]
- Randomization unit: [user/session/device]

Results:
Control (n=[N_CONTROL]):
- Primary metric: [VALUE] (e.g., "14.2%")
- Guardrail metric 1: [VALUE]
- Guardrail metric 2: [VALUE]

Treatment (n=[N_TREATMENT]):
- Primary metric: [VALUE]
- Guardrail metric 1: [VALUE]
- Guardrail metric 2: [VALUE]

Pre-experiment power calculation: [minimum detectable effect = X%, power = Y%, alpha = Z%]

Provide: (1) statistical significance test with correct method for this metric type, (2) practical significance assessment, (3) guardrail metric analysis, (4) ship / iterate / kill recommendation with explicit justification, (5) what I should communicate to the product team.
```

**Prompt 2 — Multiple Metric A/B Test with Corrections**
```
My A/B test tracked [N] metrics simultaneously and I need help interpreting the results with appropriate multiple comparison corrections.

Experiment: [DESCRIPTION]
Test duration: [N days], n=[TOTAL_SAMPLE]

Results by metric:
| Metric | Control | Treatment | Raw p-value | Relative change |
|--------|---------|-----------|-------------|-----------------|
| [M1]   | [val]   | [val]     | [p]         | [%]             |
| [M2]   | [val]   | [val]     | [p]         | [%]             |
| [M3]   | [val]   | [val]     | [p]         | [%]             |
[continue]

Primary metric (pre-specified): [METRIC]
Secondary metrics: [LIST]

Apply the appropriate multiple comparison correction (Bonferroni, Benjamini-Hochberg, or other), explain why you chose it, recalculate significance, and give me a final interpretation that correctly accounts for the family-wise error rate.
```

**Prompt 3 — Segment Analysis and Heterogeneous Treatment Effects**
```
My A/B test shows a positive overall result but I suspect the treatment effect varies significantly across user segments. Help me analyze heterogeneous treatment effects.

Overall results: [Control: X%, Treatment: Y%, p=[P]]

Segment breakdown:
Segment: [SEGMENT_1, e.g., "Mobile users"]
- Control n=[N], rate=[RATE]
- Treatment n=[N], rate=[RATE]

Segment: [SEGMENT_2, e.g., "Desktop users"]
- Control n=[N], rate=[RATE]
- Treatment n=[N], rate=[RATE]

Segment: [SEGMENT_3]
- [same format]

Analyze: (1) whether segment differences are statistically meaningful (interaction test), (2) whether I should ship to all users or subset, (3) the multiple comparison risks in segment analysis, (4) what follow-up experiments I should run based on this pattern.
```

**Prompt 4 — Experiment that Was Stopped Early**
```
Our product team stopped an A/B test after [N days] (originally planned for [M days]) when they saw a positive result. I need to assess how much this affects the validity of our conclusion.

Stopping point metrics:
- Primary metric: Control [X%] vs Treatment [Y%], p=[P]
- Days run: [N] out of planned [M]
- Achieved sample: [N] out of planned [N_PLANNED]

How many times did someone check the dashboard before stopping? [N_PEEKS or "unknown"]

Assess: (1) the inflation of false positive rate due to early stopping, (2) the adjusted p-value accounting for sequential testing, (3) whether the result is still trustworthy enough to ship, (4) what process we should put in place to prevent this problem in future experiments.
```

**Prompt 5 — Bayesian A/B Test Analysis**
```
I want a Bayesian analysis of my A/B test results rather than a frequentist p-value approach, because I need to communicate probability of being better rather than reject/fail-to-reject language.

Experiment: [DESCRIPTION]
Metric type: [conversion rate / continuous metric / revenue per user]

Results:
Control: n=[N], conversions=[K] (or mean=[M], std=[S])
Treatment: n=[N], conversions=[K] (or mean=[M], std=[S])

Prior belief: [e.g., "we have no strong prior" / "historical similar tests show ~2% lift" / "we believe treatment is likely beneficial"]

Provide: (1) posterior probability that treatment beats control, (2) expected loss if we ship treatment, (3) 95% credible interval for the true lift, (4) recommendation using a decision-theoretic framework, (5) how to explain this to a non-technical stakeholder in 3 sentences.
```
