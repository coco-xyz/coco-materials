# Use Case #399: AI Business Dashboard Design Advisor

**Role**: Data Scientist / ML Engineer | **Industry**: SaaS, Tech, Enterprise | **Task**: Analysis, Data Visualization, Stakeholder Communication

---

## Detailed Introduction

**The Pain: Dashboards That Nobody Uses**

Data scientists invest significant time building dashboards — in Tableau, Looker, Power BI, Metabase, or custom Streamlit apps — that stakeholders open once and never return to. The root cause is rarely a technical failure. The data is accurate. The queries are optimized. The charts render correctly. The failure is structural: the dashboard was designed to showcase data completeness rather than to answer a specific business question. A typical engineering analytics dashboard will display seventeen metrics simultaneously — build success rate, deployment frequency, MTTR, test coverage, flaky test rate, queue depth, p95 latency, error budget burn rate — because the builder wanted to include everything potentially relevant. A stakeholder who opens this and needs to decide whether to delay a release sees noise, not signal.

This problem compounds over time. When stakeholders stop returning to a dashboard, data teams interpret this as low interest in data-driven decisions rather than as a design failure. They respond by building more dashboards with more metrics, further fragmenting the signal. In organizations with mature BI stacks, it is common to find hundreds of published dashboards with single-digit weekly active users, representing hundreds of engineering hours producing zero decision value. Looker and Tableau both report that more than 60% of published dashboards in typical enterprise deployments are accessed fewer than five times per month.

The structural cause is a misalignment between how data scientists think about dashboards and how stakeholders use them. Data scientists optimize for correctness and coverage: every metric should be present, every dimension should be filterable, every trend should be visible. Stakeholders optimize for decision speed: they want to look at something, understand what action it implies, and move on in under ninety seconds. These two design philosophies produce fundamentally different interfaces. The data scientist's dashboard is a data product. The stakeholder's ideal is a decision accelerator. Without explicit alignment on which questions the dashboard must answer before the first query is written, the finished product will satisfy neither goal.

Dashboard design also suffers from a lack of information hierarchy discipline. Executive audiences need summary-level trend indicators — is this metric moving in the right direction over the right time window? Analyst audiences need drill-down capability — why is the metric moving, and which segment is driving it? Mixing both audiences in a single view produces a dashboard that serves neither. The executive sees too much granularity to form a quick judgment; the analyst lacks the detail needed to diagnose. Most data scientists are aware of this distinction but have no systematic framework for translating it into layout and filter decisions before they start building.

**How COCO Solves It**

COCO functions as a dashboard design advisor and co-architect — helping data scientists define the decision context before any visualization is built, then translating that context into layout, chart type, metric hierarchy, and annotation specifications.

1. **Decision Alignment Framing**: COCO structures the pre-build conversation that most teams skip — forcing explicit answers to what decisions this dashboard must enable, who makes those decisions, and what time horizon they operate on.
   - Generates a dashboard brief template with fields: decision owner, decision frequency, triggering question, acceptable latency, and primary audience
   - Identifies metric conflicts where the same chart is being asked to serve incompatible audiences

2. **KPI Prioritization by Decision Relevance**: COCO helps rank proposed metrics by how directly they inform the target decision, separating primary indicators from supporting context from reference data.
   - Distinguishes lead metrics (predictive, actionable) from lag metrics (confirmatory, archival)
   - Recommends which metrics to surface above the fold versus relegate to drill-down views

3. **Chart Type Selection for Each Data Story**: COCO recommends specific chart types based on the analytical question each metric is answering, not visual preference.
   - Maps data story types (comparison, distribution, composition, trend, correlation, part-to-whole) to appropriate chart types with rationale
   - Flags common mismatches such as using pie charts for time series or bar charts for continuous distributions

4. **Information Hierarchy and Layout Architecture**: COCO structures the visual layout to match the audience's decision workflow — summary at top, context in middle, detail on demand.
   - Produces a wireframe specification (text-based) for dashboard sections with rationale for component placement
   - Recommends progressive disclosure patterns: what is always visible, what requires a click, what lives in a linked drill-down

5. **Annotation and Context Layer Design**: COCO designs the explanatory layer that makes metrics interpretable without the builder present — target lines, benchmark bands, anomaly callouts, and plain-language data labels.
   - Specifies where to add reference lines (target, prior period, industry benchmark)
   - Drafts tooltip and callout text that explains significance, not just value

6. **Dashboard Design Rationale Documentation**: COCO produces a design decision document that explains why each metric was included, why each chart type was chosen, and what question each section answers — creating an artifact that survives team transitions and supports future iterations.
   - Records metric definitions, calculation logic, and refresh cadence in standardized format
   - Documents explicit decisions about what was excluded and why

**Measurable Results**

- **Dashboard adoption rate**: Typical data science dashboard averages 8 unique weekly users → target state 34 unique weekly users after decision-aligned redesign (+325%)
- **Time to insight**: Stakeholder time to answer target question from dashboard open → 4.2 minutes average → under 60 seconds with structured information hierarchy
- **Pre-build alignment time**: Ad-hoc dashboard requests with no brief → structured decision brief completed in 20 minutes with COCO template, preventing misaligned builds
- **Metric sprawl reduction**: Average metrics per dashboard 23 → 7 primary metrics with supporting drill-down, reducing cognitive load by 70%
- **Redesign cycles eliminated**: Dashboard revision requests after initial delivery → reduced from average 3.4 revisions to 1.1 revisions per dashboard when design brief is completed first

**Who Benefits**

- **Data Scientists**: Gain a structured design methodology that replaces guesswork with a replicable framework for building dashboards stakeholders actually use
- **Analytics Engineers**: Use the chart type and metric hierarchy guidance to make dbt exposure and Looker Explore configuration decisions that match the intended analysis patterns
- **BI Developers**: Leverage the information hierarchy and layout specifications to implement dashboards in Tableau, Power BI, or Looker with clear design intent rather than interpreting ambiguous requirements
- **Data Team Leads**: Use the dashboard brief and design rationale document to manage stakeholder expectations, scope dashboard projects accurately, and evaluate dashboard quality beyond technical correctness

---

## Practical Prompts

**Prompt 1: Dashboard Decision Brief**
```
I'm about to build a new business dashboard and want to define the decision context before I start.

Dashboard topic: [WHAT METRIC AREA THIS COVERS — e.g., "product usage and feature adoption"]
Requesting stakeholder: [ROLE — e.g., "VP of Product"]
Tool I'll build in: [Looker / Tableau / Power BI / Metabase / Streamlit / other]
Available data sources: [LIST KEY TABLES OR MODELS]

Help me complete a dashboard decision brief by asking me the right questions, then compiling the answers into a structured brief. The brief must cover:
1. The exact business decisions this dashboard must enable (not "visibility into X" — specific decisions)
2. Who makes each decision and how frequently
3. The triggering question each audience asks when they open the dashboard
4. The acceptable data latency (real-time, daily, weekly)
5. What "good" and "bad" look like for each primary metric
6. What this dashboard explicitly will NOT cover

Use my answers to draft the completed brief and flag any areas where the scope is still ambiguous.
```

**Prompt 2: Metric Prioritization and KPI Selection**
```
I have a list of metrics I'm considering for a dashboard and need help deciding which to prioritize, which to demote to drill-down, and which to cut entirely.

Dashboard purpose: [THE PRIMARY DECISION THIS DASHBOARD SUPPORTS]
Primary audience: [ROLE AND CONTEXT — e.g., "SaaS sales leadership reviewing weekly pipeline health"]
Proposed metrics:
[LIST ALL METRICS YOU ARE CONSIDERING]

For each metric, evaluate:
1. Is this a lead metric (predictive, actionable now) or a lag metric (confirmatory, historical)?
2. Does this metric directly inform the primary decision or only provide supporting context?
3. Would the primary audience know what action to take if this metric were red?
4. Is this metric duplicated or derivable from another metric already on the list?

Produce a prioritized metric list with three tiers:
- Tier 1: Above-the-fold primary indicators (maximum 5)
- Tier 2: Supporting context visible on scroll
- Tier 3: Available in drill-down only
- Cut: Remove from this dashboard (with rationale)
```

**Prompt 3: Chart Type Selection for Each Metric**
```
For the following metrics I need to display on a dashboard, recommend the correct chart type and explain the analytical question each chart is answering.

Audience: [WHO WILL READ THIS — e.g., "executive team, weekly business review"]
Dashboard tool: [TOOL NAME]

Metrics and their data shape:
1. [METRIC NAME]: [describe the data — e.g., "monthly cohort retention rates over 12 months for 6 cohorts"]
2. [METRIC NAME]: [data description]
3. [METRIC NAME]: [data description]
4. [METRIC NAME]: [data description]
5. [METRIC NAME]: [data description]

For each metric:
- Recommend the specific chart type (e.g., heatmap, small multiples line chart, stacked area, bullet chart)
- State the analytical question the chart answers (comparison, distribution, trend, composition, correlation, part-to-whole)
- Explain why this chart type fits better than the most common alternative
- Note any data transformation needed before the chart will read correctly
- Flag any chart types I should avoid for this metric and why
```

**Prompt 4: Information Hierarchy and Layout Design**
```
I need to design the layout structure for my dashboard before I start building. Help me create a wireframe specification.

Dashboard: [NAME AND PURPOSE]
Primary audience: [ROLE]
Secondary audience (if any): [ROLE]
Number of metrics: [N primary + N secondary]
Key interactions needed: [date range picker / segment filter / drill-down / other]

Produce a text-based wireframe specification with:
1. Section breakdown (name each section and its purpose)
2. Component placement logic (what goes above the fold, what requires scrolling)
3. For each section: which metrics belong there and in what chart types
4. Filter placement and scope (which filters affect which sections)
5. Progressive disclosure design: what expands, what links to a separate view
6. Recommended grid dimensions (e.g., "2x2 scorecard row, then full-width trend chart, then 3-column breakdown")
7. Color usage rules for this specific dashboard (what colors communicate positive/negative/neutral)
```

**Prompt 5: Dashboard Design Rationale Document**
```
I've finished building a dashboard and need to document the design decisions for future maintainers and stakeholders.

Dashboard name: [NAME]
Tool: [TOOL]
Primary use case: [WHAT DECISIONS IT SUPPORTS]
Stakeholder: [ROLE]
Refresh cadence: [REAL-TIME / HOURLY / DAILY / WEEKLY]

Metrics included:
[LIST EACH METRIC WITH ITS DATA SOURCE AND CALCULATION]

Generate a Dashboard Design Rationale Document covering:
1. Purpose statement: what business question this dashboard answers
2. Audience and decision context
3. Metric inventory: for each metric — definition, calculation, data source, refresh cadence, owner
4. Design decisions: for each major layout or chart choice — what alternatives were considered and why this approach was chosen
5. Known limitations: what this dashboard does not cover and why
6. Excluded metrics: what was considered but cut, with rationale
7. Maintenance notes: what breaks if the underlying schema changes
8. Iteration history: space to log future changes with date and rationale
```

---
