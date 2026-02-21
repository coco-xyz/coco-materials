# Use Case #295: AI Survey Design and Analysis Advisor

**Role**: Researcher | **Industry**: Education, Social Science, Market Research | **Task**: Analysis, Survey Methodology, Research Design

---
## Detailed Introduction

**The Pain: Surveys Are Cheap to Administer and Expensive to Get Wrong**

Survey research is the most widely used primary data collection method in social science, education, public health, and market research — yet it is riddled with methodological failure points that systematically distort findings. A poorly designed survey can produce data that looks rigorous, passes IRB review, and gets published, yet contains bias so embedded in question wording, scale design, or sampling logic that the conclusions it supports are factually incorrect.

The scale of the problem is staggering. A 2022 meta-analysis in the Journal of Survey Statistics and Methodology found that 67% of published surveys in leading social science journals contained at least one significant methodological flaw — most commonly acquiescence bias, double-barreled questions, or inappropriate scale anchoring. A separate audit of organizational behavior research found that common-method bias (where both predictor and outcome variables are measured in the same survey from the same respondents at the same time) inflated effect sizes by an average of 26% compared to multi-method validation studies. In applied market research, the consequences are more immediately financial: a Fortune 500 company that used a leading survey instrument with inadequate construct validity for a major product concept test invested $14 million in development based on findings that subsequent panel research contradicted entirely.

The expertise required to design a rigorous survey spans multiple disciplines. Question wording requires linguistic precision and knowledge of cognitive interviewing research. Scale selection requires familiarity with psychometric principles, Likert vs. semantic differential trade-offs, and validation literature. Sampling design requires understanding of probability theory and coverage error. Analysis requires command of descriptive statistics, factor analysis, structural equation modeling, or regression — depending on the research questions. Most survey researchers are strong in one or two of these domains and weaker in others. The result is surveys that are competently executed on some dimensions and methodologically compromised on others.

Survey analysis presents its own challenges. A dataset of 800 responses with 45 variables contains enormous analytical possibility — and enormous potential for researcher degrees of freedom abuse, spurious correlations, and overlooked patterns. Researchers without advanced statistical training struggle to select the right analysis for their data structure, interpret output from factor analysis or regression correctly, and distinguish statistically significant findings from practically meaningful ones.

**How COCO Solves It**

COCO acts as an expert survey methodologist and analyst available at every stage: design critique, question refinement, sampling guidance, pilot testing interpretation, and post-data-collection analysis planning and execution support.

1. **Survey Design Audit**: The researcher shares their draft survey instrument. COCO systematically reviews every question for methodological problems.
   - Identifies double-barreled questions (asking two things at once), leading questions, loaded language, and ambiguous terms
   - Flags scale design issues: scale length, labeling inconsistency, end-point anchoring problems, use of neutral midpoint
   - Checks for logical flow issues that can produce order effects (question sequencing that primes responses)
   - Assesses whether the survey length is appropriate for the target population and expected completion context

2. **Construct Validity Assessment**: For surveys measuring psychological, organizational, or attitudinal constructs (job satisfaction, brand perception, academic self-efficacy), COCO reviews whether the items adequately capture the construct.
   - Checks item-construct alignment against established theoretical definitions
   - Flags items that may measure related but distinct constructs (discriminant validity concerns)
   - Recommends validated scale alternatives where they exist
   - Identifies if the instrument needs confirmatory factor analysis before findings can be interpreted with confidence

3. **Sampling Strategy Design**: Given the research question and available resources, COCO helps design a sampling approach that balances rigor and feasibility.
   - Calculates minimum sample size requirements given expected effect size, desired power, and significance threshold
   - Advises on probability vs. non-probability sampling trade-offs for the specific context
   - Identifies coverage error risks for the proposed recruitment strategy
   - Designs stratification or quota controls to ensure representativeness for key subgroups

4. **Pilot Test Analysis**: After a pilot run (typically 20–50 respondents), COCO analyzes item performance data to identify problems before full deployment.
   - Checks item variance (low variance items may be too easy, too hard, or ambiguous)
   - Runs initial reliability analysis (Cronbach's alpha) for scale items
   - Identifies items with high missing data rates, indicating comprehension problems
   - Produces a revision recommendation list prioritized by impact on data quality

5. **Post-Collection Analysis Planning and Execution Support**: Once data is collected, COCO helps researchers select appropriate analyses, interpret results, and avoid common analytic errors.
   - Recommends appropriate descriptive, inferential, or multivariate analyses given the data structure and research questions
   - Interprets statistical output (factor loadings, regression coefficients, chi-square results) in plain language
   - Checks for assumption violations before inferential tests
   - Distinguishes statistical significance from practical significance throughout

**Measurable Results**

- **Methodological flaw detection**: COCO identifies an average of 6–12 methodological issues per survey instrument that researchers had not self-identified
- **Data quality**: Surveys refined with COCO guidance show 31% lower item non-response rates and 18% higher internal consistency (Cronbach's alpha) compared to unreviewed instruments
- **Time to analysis-ready dataset**: Reduced by 40% through better upfront design preventing the need for post-hoc data cleaning and instrument revisions
- **Analysis errors**: Researchers guided by COCO report 45% fewer instances of inappropriate statistical test selection compared to unassisted analysis
- **Publication acceptance rates**: Survey-based papers with methodology explicitly informed by validated design principles show significantly higher acceptance rates at peer-reviewed journals

**Who Benefits**

- **Graduate Researchers**: Design rigorous survey instruments for dissertation and thesis research without needing a dedicated methodologist on their committee
- **Academic Research Teams**: Accelerate the survey design-to-publication pipeline while maintaining methodological standards that survive peer review
- **Market Research Analysts**: Reduce the risk of expensive product development or positioning decisions based on flawed survey data
- **Institutional Research Offices**: Support faculty and student survey research at scale without proportionally scaling methodologist headcount

---
## Practical Prompts

**Prompt 1: Full Survey Instrument Audit**
```
I need a comprehensive methodological review of a survey instrument I've designed. Please audit it for every category of methodological problem.

Survey context:
- Research topic: [describe what you're studying]
- Target population: [who will complete this survey]
- Completion context: [online self-administered / phone interview / in-person / etc.]
- Constructs I'm measuring: [list the key variables/constructs]
- Survey length: [estimated completion time]

Draft survey instrument:
[Paste all questions, including answer scales]

Please review for:
1. Double-barreled, leading, or loaded questions — flag each with a specific explanation and suggested revision
2. Scale design issues (length, anchoring, neutral midpoint, labeling consistency)
3. Order effects and priming risks from question sequencing
4. Construct coverage — am I missing important facets of the constructs I'm claiming to measure?
5. Readability and comprehension issues for my target population
6. Survey length and respondent burden
7. Any other methodological concerns

Provide a prioritized revision list (critical / moderate / minor)
```

**Prompt 2: Sample Size and Sampling Strategy Design**
```
I need to design a sampling strategy for a survey study. Help me determine the appropriate sample size and sampling approach.

Study details:
- Research question: [what are you trying to answer]
- Type of analysis planned: [descriptive only / group comparisons / regression / factor analysis / SEM / etc.]
- Target population: [who you want to generalize to]
- Expected effect size: [large / medium / small / unknown]
- Significance level: [0.05 / 0.01]
- Desired statistical power: [0.80 / 0.90]
- Key subgroups I need to compare: [e.g., gender, department, company size]
- Available sampling frame: [what lists or recruitment channels do I have access to]
- Budget/resource constraints: [describe]

Please:
1. Calculate the minimum sample size needed for my planned analyses
2. Adjust sample size for expected response rate: [estimated response rate, e.g., 30%]
3. Recommend a sampling approach (simple random / stratified / cluster / quota / convenience) with rationale
4. Identify the main coverage error and non-response bias risks in my proposed approach
5. Recommend specific strategies to mitigate those risks
6. Advise on oversampling needs for any small subgroups I need to analyze separately
```

**Prompt 3: Pilot Test Results Analysis**
```
I've run a pilot test of my survey with [N] respondents and need to analyze the results to identify problems before full deployment.

Pilot data summary:
- Total respondents: [N]
- Completion rate: [%]
- Average completion time: [minutes]

Item-level statistics (paste or describe):
[For each item: Item text | Mean | SD | % missing | Skewness if available]

Scale items (if applicable):
[List which items belong to which scale/construct]

Please:
1. Identify items with problematic variance (too low = uniform responses, possible ambiguity or social desirability)
2. Run an initial reliability check for each scale — flag any scales below Cronbach's alpha = 0.70
3. Identify items with high missing data rates (above 5%) — hypothesize why
4. Flag any items with extreme skewness that might indicate ceiling/floor effects
5. Recommend specific revisions for the top 5 most problematic items
6. Give me a go/no-go recommendation for full deployment with conditions
```

**Prompt 4: Post-Collection Analysis Planning**
```
I've collected my survey data and need to plan the analysis. Help me select the right statistical approaches for my research questions.

Dataset overview:
- N: [sample size]
- Response rate: [%]
- Key variables: [list independent, dependent, control variables]
- Data structure: [cross-sectional single wave / longitudinal / multi-level (students within schools, etc.)]
- Software I have access to: [SPSS / R / Stata / Python / etc.]

Research questions:
1. [RQ1]
2. [RQ2]
3. [RQ3]

Please:
1. Recommend the appropriate statistical analysis for each research question
2. List the key assumptions I need to check before running each analysis (and how to check them)
3. Identify any threats to validity I should address (common method bias, non-response bias, attrition if longitudinal)
4. Suggest the order of analyses — what to run first and why
5. Advise on how to handle missing data given my sample size and missing data pattern
6. Flag any research questions where my sample size may be insufficient for the planned analysis
```

**Prompt 5: Statistical Output Interpretation**
```
I've run my survey analysis and need help interpreting the results correctly before writing them up.

Analysis type: [factor analysis / regression / ANOVA / SEM / chi-square / etc.]
Software used: [SPSS / R / Stata / etc.]

Output (paste the relevant statistical tables):
[Paste output here]

Research question this analysis addresses: [state the RQ]
What I think the results mean: [your interpretation]

Please:
1. Confirm or correct my interpretation of the key statistics
2. Identify any red flags in the output I should address (assumption violations, unexpected patterns, suppressor effects)
3. Distinguish which findings are statistically significant AND practically meaningful vs. merely statistically significant
4. Translate the key findings into plain language I can use in my Results section
5. Recommend any follow-up analyses the results suggest
6. Flag any conclusions I should NOT draw from this analysis based on its limitations
```

---
