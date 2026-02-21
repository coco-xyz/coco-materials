# Use Case #405: AI Causal Inference Advisor

**Role**: Data Scientist / ML Engineer | **Industry**: SaaS, Tech, Enterprise | **Task**: Analysis, Causal Inference, Decision Science

---

## Detailed Introduction

**The Pain: Correlation Mistaken for Causation Drives Costly Decisions**

One of the most expensive and persistent errors in applied data science is the conflation of correlation with causation in business decision-making. The pattern is consistent and predictable: a data analyst observes that customers who adopt feature X have a 40% higher 12-month retention rate than customers who do not. The business conclusion drawn is that expanding adoption of feature X will increase retention. A product investment follows: a team is assigned to improve feature discovery and onboarding for feature X, at a cost of significant engineering and product time. Twelve months later, the retention curve has not moved. The post-mortem eventually surfaces that users who adopted feature X were already high-value, highly-engaged customers — the kind of customers who would have retained regardless of feature X. The feature did not cause their retention; their underlying engagement level caused both their feature adoption and their retention. Fixing the feature discovery did not address the underlying driver, so retention did not improve. This kind of error is not rare — it is the default outcome of correlation-based business analytics applied to decisions that require causal reasoning.

The root of the problem is that observational data — the data most organizations have most of — captures correlations but not causal relationships. When users self-select into treatments (feature adoption, subscription tier upgrades, support ticket submission, participation in webinars), the treatment and control groups differ not only in their treatment status but in all the characteristics that drove their treatment choice. This is selection bias, and it systematically invalidates the comparison between treated and untreated groups. A SaaS company observing that customers who attended webinars have 30% higher expansion revenue than those who did not cannot conclude that webinars cause expansion — customers who attend webinars are already more engaged, have higher product adoption, and are more likely to expand for reasons entirely independent of webinar attendance. The correlation is real; the causal claim is invalid.

The methodological toolkit for causal inference is well-developed in academic econometrics and statistics — randomized controlled trials (A/B testing), difference-in-differences, instrumental variables, regression discontinuity, propensity score matching, and synthetic control methods are all established approaches with known assumptions and failure modes. The challenge is that most data scientists working in industry have limited training in this toolkit, particularly the observational methods. Many practitioners know how to run an A/B test but have not worked through when an A/B test is not possible and which observational method is the appropriate fallback, what assumptions that method requires, and how to test whether those assumptions hold in their specific dataset. The result is that when experimentation is not available, practitioners either default to correlation-based analysis (producing invalid causal claims) or declare that "we can't answer this question rigorously" (abandoning the analysis entirely).

The communication problem is equally significant. Even when a data scientist successfully applies a causal inference method and obtains a valid causal estimate, communicating the finding to business stakeholders requires careful language. Business stakeholders routinely interpret regression outputs, propensity score matching results, and difference-in-differences estimates as causal facts when the underlying assumptions may not hold. They also routinely disregard findings accompanied by "we cannot conclude causality from this data" when a practical business decision must be made. The data scientist must navigate between overstating causal certainty (which drives bad decisions when assumptions fail) and understating findings so much that they provide no decision guidance. This requires judgment about how to calibrate the strength of causal language to the strength of the identification strategy — a skill that combines statistical knowledge with communication craft.

**How COCO Solves It**

COCO serves as a causal inference advisor — helping data scientists and analysts navigate the full causal analysis workflow from identifying the causal question through selecting an identification strategy, interpreting results, and communicating findings with appropriate causal language to business stakeholders.

1. **Causal Question Formulation**: COCO helps translate business questions into precisely defined causal questions — specifying the treatment, the outcome, the population, the counterfactual, and the time horizon before any analysis begins.
   - Identifies when a business question is inherently causal (what would happen if?) versus descriptive (what happened?) and applies appropriate analytical framing
   - Exposes hidden assumptions in the business question that need to be explicit before a valid causal analysis can be designed

2. **Selection Bias and Confounding Identification**: COCO conducts a structured causal identification audit — identifying the confounders, selection mechanisms, and reverse causation paths that threaten validity of a proposed analysis.
   - Uses directed acyclic graph (DAG) reasoning to map the causal structure of the problem and identify backdoor paths that need to be blocked
   - Identifies which variables should be conditioned on, which should not, and why (collider bias, mediation analysis distinctions)

3. **Identification Strategy Selection**: COCO recommends the appropriate causal identification strategy based on the data available, the experimental possibilities, and the assumptions that can be credibly maintained.
   - Covers the full toolkit: randomized experiments (A/B tests, switchback experiments), difference-in-differences, synthetic control, instrumental variables, regression discontinuity, propensity score methods, and causal forests
   - Specifies the core identifying assumptions for each method and provides guidance on how to test or argue for those assumptions in context

4. **Assumption Testing and Sensitivity Analysis**: COCO designs the empirical tests that assess whether the assumptions underlying the chosen identification strategy hold in the data.
   - Designs parallel trends tests for difference-in-differences, placebo tests, balance tests for matching methods, and first-stage F-statistic checks for instrumental variables
   - Recommends Rosenbaum bounds or other sensitivity analyses that quantify how much unmeasured confounding would have to exist to reverse the conclusion

5. **Results Interpretation and Effect Size Communication**: COCO interprets causal effect estimates in business terms — translating average treatment effects, local average treatment effects, and heterogeneous treatment effects into actionable business findings.
   - Distinguishes average treatment effect (ATE), average treatment effect on the treated (ATT), and local average treatment effect (LATE) and explains which is relevant for each business decision
   - Interprets effect heterogeneity to identify which subgroups benefit most from a treatment

6. **Causal vs. Correlational Language for Stakeholders**: COCO drafts communication that precisely calibrates causal language to the strength of the identification strategy — neither overstating certainty nor abandoning the finding.
   - Provides language for findings along a spectrum: "this is a valid causal estimate under these assumptions" through "this is consistent with but does not prove causation" to "this is purely descriptive and should not be used to predict intervention effects"
   - Designs the decision recommendation that follows from the causal finding, accounting for effect size uncertainty

**Measurable Results**

- **Causal analysis error rate**: Proportion of business analyses that make invalid causal claims from observational correlation → 71% baseline (industry-wide estimate) → 28% after causal identification protocol adoption
- **A/B test decision quality**: Rate of post-experiment discoveries that the experiment was confounded by novelty effects, network effects, or SUTVA violations → 34% → 9% after COCO-guided experimental design review
- **Observational study rigor**: Proportion of observational analyses that include formal assumption testing before reporting causal estimates → 8% → 63% after causal inference framework adoption
- **Business decision ROI from data analysis**: Return on investment from business decisions informed by data science analyses → improvements concentrated in cases where causal rather than correlational analyses were used
- **Data science credibility score**: Internal stakeholder trust in data science recommendations → improved 38 points after analysis quality improvement in pilot teams, measured by repeat analysis request rate

**Who Benefits**

- **Data Scientists**: Develop rigorous causal inference skills that transform their analyses from "here is what we observe" to "here is what would happen if we intervene" — dramatically increasing the decision value of their work
- **Product Analysts**: Apply the right identification strategy to product experiment design and post-hoc observational analysis — preventing the feature investment errors that result from treating correlation as causation
- **Growth Analysts**: Use causal frameworks to evaluate marketing and growth intervention effectiveness with appropriate rigor, distinguishing genuine lift from selection effects in channel attribution and cohort analysis
- **Business Leaders and Decision Makers**: Receive clearly calibrated causal findings with explicit assumption statements — enabling better decisions while understanding the confidence level of the causal evidence supporting them

---

## Practical Prompts

**Prompt 1: Causal Question Formulation and DAG Construction**
```
I have a business question I want to answer rigorously. Help me formulate it as a precise causal question and map the causal structure.

Business question (as currently stated): [YOUR CURRENT QUESTION — e.g., "does using our advanced analytics feature increase customer retention?"]
Context:
- What we observe: [DESCRIBE THE CORRELATION OR PATTERN THAT MOTIVATED THE QUESTION]
- Treatment/intervention of interest: [WHAT THE "CAUSE" IS]
- Outcome of interest: [WHAT THE "EFFECT" IS]
- Population: [WHICH CUSTOMERS / USERS / UNITS WE CARE ABOUT]
- Time horizon: [HOW LONG AFTER TREATMENT DO WE MEASURE THE OUTCOME]

Known confounders (variables that might explain both treatment and outcome):
[LIST VARIABLES YOU THINK MIGHT BE CONFOUNDERS]

Help me:
1. Reformulate the question as a precise causal question (using potential outcomes notation or plain language)
2. Identify the counterfactual: what would have happened to treated units had they not received treatment?
3. Construct a directed acyclic graph (DAG) describing the causal structure — list the nodes, edges, and any backdoor paths
4. Identify all confounders, colliders, and mediators in the causal graph
5. Specify what I need to control for and what I must NOT control for to get a valid causal estimate
6. Flag any reverse causation paths (where the outcome might cause the treatment)
```

**Prompt 2: Identification Strategy Selection**
```
I want to estimate a causal effect but I need help choosing the right identification strategy given my data and context.

Causal question: [PRECISELY STATED CAUSAL QUESTION]
Outcome variable: [WHAT YOU ARE MEASURING]
Treatment: [WHAT THE TREATMENT IS]

Data situation:
- Can I run a randomized experiment? [YES / NO / PARTIALLY — explain constraints]
- Sample size available: [APPROXIMATE N FOR TREATED AND CONTROL]
- Time dimension: [DO I HAVE PANEL DATA (REPEATED OBSERVATIONS)? IF SO, HOW MANY PERIODS?]
- Pre-treatment data available: [HOW MANY PERIODS BEFORE TREATMENT?]
- Potential instrumental variables: [IS THERE AN EXTERNAL FACTOR THAT AFFECTS TREATMENT BUT NOT OUTCOME DIRECTLY?]
- Natural experiments available: [ANY DISCONTINUITIES, ROLLOUTS, POLICY CHANGES IN THE DATA?]

For each applicable identification strategy, explain:
1. Whether it is applicable given my data situation
2. The core identifying assumption this method requires
3. How I would test whether that assumption holds in my data
4. The type of causal effect I would estimate (ATE, ATT, LATE, etc.)
5. Known failure modes for this method in settings like mine

Recommend the primary identification strategy and a fallback, and explain what evidence would convince you (and a skeptical reviewer) that the identification is valid.
```

**Prompt 3: A/B Test Design for Causal Validity**
```
I'm designing a randomized experiment and want to ensure it will produce a valid causal estimate.

Experiment context:
- What is being tested: [TREATMENT DESCRIPTION]
- Hypothesis: [WHAT YOU EXPECT TO HAPPEN AND WHY]
- Primary metric: [OUTCOME METRIC]
- Secondary/guardrail metrics: [OTHER METRICS TO MONITOR]
- Randomization unit: [USER / SESSION / ACCOUNT / MARKET / other]
- Expected treatment effect size: [MINIMUM DETECTABLE EFFECT I CARE ABOUT]
- Traffic available: [DAILY USERS OR EVENTS ELIGIBLE FOR EXPERIMENT]

Identify and help me address the following design threats:
1. SUTVA violations: can treatment of one unit affect outcomes of others (network effects, marketplace effects, shared infrastructure)?
2. Novelty effects: will user behavior change simply because the experience is new, creating a temporary effect that reverses?
3. Sample ratio mismatch: what checks should I run during the experiment to detect randomization failures?
4. Multiple testing: if I have multiple primary metrics or plan interim analyses, how do I control Type I error?
5. Interaction effects: are there pre-existing experiments running simultaneously that could contaminate results?
6. External validity: what limitations should I state when generalizing from this experiment's population to the broader user base?

Produce a pre-experiment design review checklist and the statistical power calculation I need to run before launch.
```

**Prompt 4: Difference-in-Differences Analysis Design**
```
I want to use a difference-in-differences approach to estimate a causal effect from observational data. Help me design the analysis.

Setting:
- Treatment: [WHAT HAPPENED — e.g., "we launched a new onboarding flow for users in cohort X"]
- Treatment timing: [WHEN THE TREATMENT OCCURRED]
- Treated group: [WHICH UNITS RECEIVED TREATMENT]
- Control group (proposed): [WHICH UNITS YOU PLAN TO USE AS CONTROLS]
- Outcome: [WHAT YOU ARE MEASURING]
- Pre-treatment periods available: [HOW MANY PERIODS BEFORE TREATMENT]
- Post-treatment periods available: [HOW MANY PERIODS AFTER TREATMENT]

Help me design the DiD analysis covering:
1. Parallel trends assumption: how do I test that the treated and control groups were trending similarly before the treatment? What visual and statistical evidence would support or undermine this?
2. Control group selection: is my proposed control group appropriate? What alternative control groups should I consider?
3. Confounders: what other events happened at the same time as the treatment that could confound my estimate?
4. TWFE model specification: what regression model should I estimate? Should I include unit fixed effects, time fixed effects, or covariates? Why?
5. Clustered standard errors: at what level should I cluster? What happens if I have too few clusters?
6. Placebo tests: what placebo tests should I run to assess the credibility of my estimates?
7. Heterogeneous treatment effects: how do I test whether the effect differs across subgroups?
```

**Prompt 5: Communicating Causal Findings to Business Stakeholders**
```
I've completed a causal analysis and need to communicate the findings to business stakeholders who will use them to make a significant investment decision.

Analysis context:
- Business question answered: [WHAT YOU SET OUT TO ANSWER]
- Method used: [YOUR IDENTIFICATION STRATEGY]
- Key assumption: [THE MAIN IDENTIFYING ASSUMPTION YOUR ANALYSIS RELIES ON]
- Assumption testing: [HOW WELL YOU TESTED THE ASSUMPTION — what you found]
- Causal estimate: [EFFECT SIZE AND CONFIDENCE INTERVAL]
- Sample: [N UNITS, TIME PERIOD]
- Decision being made: [WHAT BUSINESS DECISION WILL FOLLOW FROM THIS ANALYSIS]
- Stakes: [COST OF THE DECISION]

Help me draft communication that:
1. States the finding in business language: what is the estimated effect of the treatment on the outcome, in business units?
2. Calibrates the causal language to match the strength of my identification: am I justified in saying "causes" or should I say "is associated with" or "we estimate that, under the assumption that..."?
3. Explains the key assumption in plain language: what would have to be true for this estimate to be valid?
4. Quantifies the uncertainty: what is the realistic range of the effect, and what range of outcomes should the business plan for?
5. States the recommendation: given this causal evidence, what action is justified? What further evidence would strengthen the recommendation?
6. Addresses the most likely pushback: what will skeptical stakeholders challenge, and how should I respond?
```

---
