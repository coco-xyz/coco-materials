# Use Case #400: AI Stakeholder Data Report Generator

**Role**: Data Scientist / ML Engineer | **Industry**: SaaS, Tech, Enterprise | **Task**: Reporting, Stakeholder Communication, Data Storytelling

---

## Detailed Introduction

**The Pain: Analysis That Never Drives Action**

Data scientists are trained to extract truth from data — to select the right statistical test, control for confounders, validate assumptions, and report findings with appropriate uncertainty. They are not typically trained to translate those findings into narratives that drive organizational decisions. The result is a persistent gap: technically rigorous analysis that produces no change in behavior because the audience cannot map the findings to an action they should take. A data scientist reports that "the treatment group showed a statistically significant lift of 3.2% in 30-day retention with a p-value of 0.023 and a 95% confidence interval of [1.1%, 5.3%]." A VP of Product reads this and thinks: "Is 3.2% good? Should I launch this feature? What's the risk if I don't?" The data scientist answered the statistical question correctly and failed the communication question entirely.

This gap is structural. Business reports require a different architecture than analytical notebooks. A data science analysis typically follows the shape of the investigation: hypothesis, data, methodology, results, caveats. An executive report follows the shape of a decision: what is the situation, what does it mean for us, what are the options, what do you recommend? These structures are almost exactly inverted. The analytical structure builds to the conclusion; the decision structure leads with the conclusion. Data scientists who have spent years writing analytical narratives bottom-up find it cognitively unnatural to flip to the top-down decision structure that executive audiences require — and most receive no training in how to do it.

The problem compounds when visualizations are involved. The same failure mode appears: data scientists choose the visualizations that are most analytically complete rather than those that are most communicatively efficient. A full correlation matrix, a violin plot showing the full distribution, a multi-panel comparison of seven segments — these are appropriate for peer analytical review and incomprehensible to an executive scanning the report for thirty seconds before moving to the next agenda item. Choosing the right visualization for a non-technical audience is a distinct skill from choosing the right visualization for analytical accuracy. Most data science training develops only the latter.

The downstream cost is significant. When insights fail to drive action, data science investment is perceived as low value. Teams respond by hiring more data scientists rather than improving communication quality, creating a cycle where more technically excellent analysis is produced and ignored. Executive stakeholders — having repeatedly received reports they couldn't act on — stop requesting analysis and revert to gut-based decisions. The data team, cut off from decision feedback loops, has no way to calibrate which analyses are actually valuable, and continues optimizing for analytical rigor rather than decision impact.

**How COCO Solves It**

COCO acts as a data storytelling partner — helping data scientists translate technical findings into executive-ready reports that lead with the business implication, contextualize findings against benchmarks, and structure the narrative around actionable conclusions rather than methodological sequence.

1. **Executive Summary Structure**: COCO rewrites analytical findings into the top-down executive communication structure — leading with the key finding, its business implication, and the recommended action before any supporting evidence.
   - Applies the "BLUF" (Bottom Line Up Front) framework standard in executive communication
   - Drafts the opening paragraph that should appear on slide one or page one of any stakeholder report

2. **"So What" Commentary Generation**: COCO converts raw data findings into business-language commentary that explains what the number means for the organization, not just what the number is.
   - Translates "conversion rate dropped 1.8 percentage points" into "at current traffic levels, this decline costs approximately $340K in monthly revenue and will accelerate if the pricing change rolls out as planned"
   - Identifies the business implication of each finding and drafts the connecting narrative

3. **Benchmark Contextualization**: COCO helps frame metrics against relevant reference points — prior period performance, internal targets, industry benchmarks — so readers know whether a number represents a problem or normal variation.
   - Identifies which context frames are available and most useful for each metric
   - Drafts comparison language that makes magnitude meaningful without overstating or understating

4. **Visualization Selection for Non-Technical Audiences**: COCO recommends the specific chart types and design choices that communicate most efficiently to business readers — not the charts most appropriate for analytical precision.
   - Recommends simplification: single-line charts over multi-series, bar charts over scatter plots, headline numbers over distributions
   - Specifies annotation strategy: what labels, callouts, and reference lines make the chart self-explanatory

5. **Narrative Structure and Section Sequencing**: COCO designs the full report structure — section order, section titles, transition logic — so the document flows as a coherent argument rather than a data dump.
   - Produces a report outline with proposed section titles, key point per section, and supporting evidence per point
   - Identifies where caveats and methodology belong (usually an appendix, not the executive summary)

6. **Confidence Calibration for Non-Technical Audiences**: COCO translates statistical uncertainty language into business-appropriate confidence expressions without losing the epistemic honesty.
   - Rewrites "statistically significant at p=0.05 with wide confidence intervals" as "we are confident in the direction of this effect; the precise magnitude may vary by 20-30% depending on conditions"
   - Identifies when a finding is strong enough to recommend action versus when to recommend further investigation

**Measurable Results**

- **Report action rate**: Percentage of data reports that result in an explicit stakeholder decision → baseline 23% → 61% after applying structured narrative frameworks (+165%)
- **Report revision cycles**: Average executive report revisions requested after initial delivery → 2.8 → 0.9 with COCO-structured narrative
- **Report production time**: Time from analysis completion to stakeholder-ready document → 4.5 hours average → 1.8 hours with COCO drafting assistance
- **Stakeholder comprehension**: Ability of non-technical executives to correctly state the report's recommendation when asked → 38% unaided → 79% with COCO-structured reports
- **Data team perceived value**: Internal NPS score for data team deliverables → improved 31 points after 6 months of report quality improvements in pilot teams

**Who Benefits**

- **Data Scientists**: Develop executive communication skills systematically rather than through trial and error, and produce reports that generate feedback loops and advance their influence
- **Analytics Leads**: Use structured report templates to establish a team-wide communication standard, reducing the variance in report quality across team members
- **Product Analysts**: Translate product analytics findings into product decision documents that Product Managers and executives can act on without follow-up clarification calls
- **Business Intelligence Teams**: Produce narrative commentary layers for BI dashboards and automated reports that make regular reporting genuinely actionable rather than a compliance exercise

---

## Practical Prompts

**Prompt 1: Executive Summary Conversion**
```
I've completed a data analysis and need to rewrite the findings as an executive summary for [AUDIENCE — e.g., "C-suite leadership team"].

The audience context:
- Who they are: [ROLES]
- What decision they need to make: [SPECIFIC DECISION]
- How much time they'll spend reading: [e.g., "2 minutes maximum"]
- Their technical comfort level: [low / medium — comfortable with percentages and trends]

My analytical findings (paste your technical summary):
[PASTE YOUR ANALYTICAL FINDINGS, STATS, KEY RESULTS]

Rewrite this as an executive summary following these rules:
1. Lead with the single most important finding in one sentence
2. State the business implication of that finding immediately (not the methodology)
3. Present supporting evidence in order of decision relevance, not analytical sequence
4. Frame each data point with a "so what" — what should the reader think or do differently because of this number?
5. Put all methodology, caveats, and technical details in an appendix section at the end
6. Maximum 250 words for the executive summary body
7. End with a clear recommendation or explicit "no recommendation" with reason
```

**Prompt 2: "So What" Commentary for Data Findings**
```
I have a set of data findings that I need to translate into business-language commentary. The commentary should explain the significance and implication of each finding, not just restate the number.

Business context: [COMPANY TYPE, STAGE, CURRENT STRATEGIC PRIORITY]
Audience: [ROLE — e.g., "VP of Growth"]
Decision context: [WHAT DECISION THIS ANALYSIS INFORMS]

Findings to translate:
1. [METRIC]: [VALUE] — [TIME PERIOD / COMPARISON]
2. [METRIC]: [VALUE] — [TIME PERIOD / COMPARISON]
3. [METRIC]: [VALUE] — [TIME PERIOD / COMPARISON]
4. [METRIC]: [VALUE] — [TIME PERIOD / COMPARISON]
5. [METRIC]: [VALUE] — [TIME PERIOD / COMPARISON]

For each finding, write:
- A one-sentence "so what" in business language (not data language)
- The implied action or implication for the audience's decision
- The urgency framing: is this a "watch and monitor," "act now," or "investigate further" situation?
- Any important caveat a business reader needs to interpret this correctly (in plain language)

Avoid statistical jargon. Write as if explaining to an intelligent non-technical colleague.
```

**Prompt 3: Full Report Structure and Narrative Design**
```
I need to structure a data report for a [FREQUENCY — e.g., "monthly"] stakeholder presentation. Help me design the full report narrative architecture before I start writing.

Report purpose: [WHAT BUSINESS QUESTION THIS ANSWERS]
Primary audience: [ROLE AND LEVEL]
Key findings available (briefly): [LIST YOUR 4-6 KEY FINDINGS]
Recommended action (if any): [YOUR RECOMMENDATION OR "TBD"]
Data freshness: [AS OF DATE]
Report format: [SLIDE DECK / WRITTEN DOCUMENT / DASHBOARD NARRATIVE]

Design a full report structure with:
1. Recommended section order with title for each section
2. The key point each section should communicate (one sentence per section)
3. Supporting evidence to include per section (which metrics, charts, or comparisons)
4. Transition logic between sections (how each section sets up the next)
5. What belongs in the main body vs. appendix
6. Proposed slide or page count allocation per section
7. Opening hook: draft the first two sentences of the report that will make the audience want to keep reading
```

**Prompt 4: Benchmark Contextualization and Comparison Framing**
```
I have a set of metrics I need to present in context so the audience understands whether the numbers represent good, acceptable, or poor performance.

Audience: [ROLE]
Industry: [INDUSTRY]
Company stage: [STAGE — e.g., "Series B SaaS, $8M ARR"]
Metrics to contextualize:
1. [METRIC NAME]: [CURRENT VALUE]
2. [METRIC NAME]: [CURRENT VALUE]
3. [METRIC NAME]: [CURRENT VALUE]
4. [METRIC NAME]: [CURRENT VALUE]

Available comparison points (check what you have):
- [ ] Prior period value: [YES/NO — provide values if yes]
- [ ] Internal target: [YES/NO — provide if yes]
- [ ] Industry benchmark: [YES/NO — provide source if available]
- [ ] Best-in-class benchmark: [YES/NO]

For each metric:
1. Recommend the most useful comparison frame (prior period, target, benchmark, or combination)
2. Draft the comparison sentence in business language
3. Assess the performance signal: ahead / on track / watch zone / action required
4. Suggest visualization approach that makes the comparison immediately legible
5. Flag any comparisons I should avoid because they would be misleading
```

**Prompt 5: Uncertainty Communication for Non-Technical Audiences**
```
My analysis contains statistical uncertainty that I need to communicate honestly to a non-technical audience without either overstating confidence or losing them in statistical caveats.

Audience: [ROLE — e.g., "CFO considering a $500K investment decision"]
Finding: [DESCRIBE YOUR KEY FINDING WITH THE UNCERTAINTY]
Statistical details (for my reference):
- Test used: [e.g., "two-sample t-test / chi-square / regression"]
- Sample size: [N]
- Confidence level: [95% / 90%]
- Confidence interval or effect size: [RANGE]
- p-value (if applicable): [VALUE]
- Key assumption violations or data quality issues: [LIST ANY]

Help me:
1. Translate the statistical confidence into a plain-language confidence statement the audience can act on
2. Express the range of plausible outcomes in business terms (not confidence intervals)
3. Recommend the appropriate action framing given this level of certainty: "confident enough to act," "act and monitor closely," "gather more data first," or "do not use this analysis for this decision"
4. Draft one paragraph of uncertainty disclosure that is honest without being paralyzing
5. Identify the one caveat the audience absolutely must understand before using this finding — stated in their language
```

---
