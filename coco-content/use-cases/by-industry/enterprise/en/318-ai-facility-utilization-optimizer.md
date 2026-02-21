# Use Case #318: AI Facility Utilization Optimizer

**Role**: Operations Manager | **Industry**: Enterprise, Manufacturing, Logistics, Retail | **Task**: Scheduling, Space Analysis, Planning

---

## Detailed Introduction

**The Pain: Facility Space Is Wasted or Overwhelmed Because Decisions Are Made Without Data**

Corporate real estate and facility management is one of the largest fixed cost categories in enterprise operations — often second only to personnel — yet most organizations make space planning decisions based on intuition, historical precedent, and anecdotal complaints rather than actual utilization data. A company paying $85 per square foot annually for Class A office space in a major city might be sitting on 30% to 40% of that space that is routinely underused, while simultaneously seeing employees unable to find meeting rooms during peak hours or floor plans that create daily friction for teams that need to collaborate. The financial waste is enormous, but the visibility to act on it simply does not exist in most operations organizations.

The data problem is more complex than it appears. Organizations typically have fragments of utilization information scattered across disconnected systems: badge access logs in the security platform, room booking data in the calendar system, Wi-Fi connection counts from the network team, cleaning and maintenance logs from facilities, and periodic headcount surveys from HR. None of these systems talk to each other, and the operations or facilities manager who wants to understand whether the third floor is actually being used as planned must manually pull reports from each system, reconcile inconsistent time granularities and definitions, and produce a spreadsheet that is already stale by the time it reaches a decision-maker. The analytical burden is so high that most organizations simply do not do it, deferring space planning to lease renewal cycles when the decisions have already been forced by contract deadlines.

Space planning decisions carry compounding consequences that extend well beyond the immediate cost of underutilized square footage. An incorrect decision to consolidate floors that are actually fully utilized at different peak times — a pattern invisible to anyone looking at average occupancy — can destroy the collaborative dynamics of high-performing teams, trigger attrition, and require expensive reconfigurations within eighteen months. Conversely, continuing to lease space that genuinely is underused represents a direct drain on operating budgets that could fund headcount, technology, or growth initiatives. Space decisions made without occupancy analysis are essentially guesses dressed up as strategic planning, and they are expensive guesses.

Sustainability and hybrid work complexity are raising the stakes further. Organizations with hybrid work policies face occupancy patterns that fluctuate dramatically by day of week, team, and season — patterns that make Monday-Friday average occupancy figures actively misleading as a planning input. A floor that averages 55% occupancy across the week may hit 95% on Tuesday and Wednesday while dropping to 20% on Friday. Planning to the average in this environment means the facility is simultaneously too small and too large, depending on the day. Managing this complexity without analytical support is not feasible at the scale and pace that modern operations require.

**How COCO Solves It**

COCO brings analytical structure to facility utilization by helping operations and facilities teams process disparate occupancy data, identify patterns, model scenarios, and generate evidence-based recommendations that support space planning decisions.

1. **Occupancy Data Analysis**: COCO processes raw utilization data from multiple sources — badge systems, room booking logs, Wi-Fi counts, survey results — and synthesizes a coherent utilization picture.
   - Calculates peak, average, and off-peak utilization by floor, zone, and room type
   - Identifies utilization patterns by day of week, time of day, team, and season

2. **Underutilization and Overcrowding Identification**: COCO flags specific spaces that consistently underperform or exceed capacity thresholds.
   - Produces ranked lists of chronically underused spaces with utilization rates and cost implications
   - Identifies bottleneck spaces where demand consistently exceeds availability

3. **Space Reconfiguration Scenario Modeling**: COCO helps model what-if scenarios for space changes before commitments are made.
   - Compares current layout against alternative configurations using utilization data
   - Estimates cost impact, capacity impact, and trade-offs for each scenario

4. **Demand Forecasting Support**: COCO helps project future space requirements based on hiring plans, team growth, and hybrid policy parameters.
   - Models headcount growth scenarios against current and planned space capacity
   - Flags lease expiry timing against projected demand to identify decision windows

5. **Planning Recommendation Generation**: COCO translates data analysis into actionable facility planning recommendations with supporting rationale.
   - Generates recommendations formatted for presentation to real estate, finance, and leadership
   - Produces data-backed narratives explaining the case for each recommendation

6. **Booking and Utilization Communication**: COCO helps communicate space policies, utilization insights, and booking guidance to employees and teams.
   - Drafts space policy updates and usage guidance communications
   - Generates floor-level utilization reports for department heads to encourage behavior change

**Measurable Results**

- **Real Estate Cost Reduction**: Organizations identifying and acting on underutilization commonly achieve 15-25% reduction in facility cost over 2-3 year planning cycles
- **Space Planning Cycle Time**: From 6-8 week manual analysis cycles → 1-2 weeks with COCO-supported data processing
- **Peak Overcrowding Incidents**: Reduced by 30-45% through better distribution and booking management informed by pattern analysis
- **Decision Confidence**: Facility decisions supported by actual utilization data versus intuition-based estimates significantly reduce reconfiguration reversals within 18 months
- **Analyst Time Recovered**: 8-15 hours per planning cycle recaptured from manual data reconciliation across disconnected systems

**Who Benefits**

- **Operations Manager**: Can make facility investment and consolidation decisions with data confidence rather than relying on anecdotal feedback from vocal stakeholders
- **Facilities Manager**: Gains a systematic view of how space is actually being used versus how it was designed to be used, enabling proactive management
- **Finance Leadership**: Receives structured analysis supporting real estate cost decisions with ROI framing rather than intuition-based requests
- **HR and People Teams**: Understands whether physical space design supports the collaboration and culture goals of hybrid work policies, enabling evidence-based workspace policy decisions

---

## Practical Prompts

**Prompt 1: Analyze Occupancy Data and Produce Utilization Summary**
```
Analyze the following facility occupancy data and produce a comprehensive utilization summary. I need to understand how our space is actually being used versus how it was planned.

Facility data:
- Total leasable area: [SQUARE FOOTAGE] sq ft
- Number of floors/zones: [BREAKDOWN]
- Planned occupancy capacity: [HEADCOUNT OR DESKS]
- Data period: [DATE RANGE]

Available data inputs (provide what you have):
- Badge entry/exit counts by floor: [DATA OR SUMMARY]
- Room booking utilization rates: [DATA OR SUMMARY]
- Wi-Fi device counts by zone: [DATA OR SUMMARY]
- Average headcount by floor from HR: [DATA]

Output:
1. Overall facility utilization rate with trend vs prior period
2. Utilization breakdown by floor/zone with rates and capacity figures
3. Peak utilization analysis: highest and lowest usage days/times
4. Top 5 underutilized spaces with utilization rate and annual cost estimate
5. Top 3 overcrowded or high-demand spaces with demand-vs-capacity gap
6. Key patterns and anomalies worth investigating
```

**Prompt 2: Model Space Reconfiguration Scenarios**
```
Help me model and compare space reconfiguration scenarios for our facility based on current utilization data and projected needs.

Current state:
- Total space: [SQUARE FOOTAGE]
- Current layout: [DESCRIBE: open plan, private offices, mix, etc.]
- Average utilization: [PERCENTAGE]
- Peak day utilization: [PERCENTAGE]
- Current annual cost: [$AMOUNT at $X/sq ft]

Business context:
- Hybrid policy: [DESCRIBE POLICY, e.g., 3 days/week in office]
- Headcount plan: [CURRENT AND 12/24-MONTH PROJECTIONS]
- Key team collaboration needs: [DESCRIBE]

Scenarios to model:
1. [SCENARIO A: e.g., consolidate to 2 floors from 3]
2. [SCENARIO B: e.g., shift to hoteling/hot desking model]
3. [SCENARIO C: e.g., sublease portion of space]

For each scenario, provide:
1. Estimated capacity and utilization rate
2. Annual cost delta vs current state
3. Key risks and trade-offs
4. Implementation complexity estimate (Low/Medium/High)
5. Recommendation on feasibility given our context
```

**Prompt 3: Generate Facility Utilization Report for Leadership**
```
Generate a facility utilization report for presentation to [AUDIENCE: e.g., CFO, Real Estate Committee, Executive Team]. The report should make the case for [DECISION OR RECOMMENDATION] based on our occupancy analysis.

Key findings to incorporate:
- Current utilization rate: [RATE]
- Peak vs average utilization gap: [DATA]
- Cost of underutilized space: [$AMOUNT annually]
- Comparable benchmark: [INDUSTRY BENCHMARK IF AVAILABLE]
- Recommended action: [WHAT YOU WANT TO DO]
- Estimated benefit: [COST SAVINGS OR OTHER OUTCOME]

Generate a report including:
1. Executive summary (one page equivalent, 5-7 bullet points)
2. Current state analysis with key metrics
3. Problem statement: what the data shows and why it matters
4. Recommended action with supporting rationale
5. Financial impact summary: cost, savings, payback period
6. Implementation timeline and key milestones
7. Risks and mitigation approaches
8. Decision requested from leadership
```

**Prompt 4: Forecast Future Space Requirements**
```
Help me forecast our facility space requirements over the next [12/24/36] months based on our current situation and growth plans.

Current baseline:
- Current headcount: [NUMBER]
- Current space: [SQUARE FOOTAGE]
- Current utilization: [PERCENTAGE at peak / PERCENTAGE average]
- Hybrid policy: [DESCRIBE — days/week in office, any flexibility]
- Space per person (current): [SQ FT]

Growth assumptions:
- Planned headcount growth: [% or absolute number over planning period]
- Anticipated hybrid policy changes: [IF ANY]
- Any planned team consolidations or separations: [DESCRIBE]

Lease context:
- Lease expiry dates: [DATES FOR EACH LOCATION IF MULTIPLE]
- Break clause dates: [IF APPLICABLE]
- Current rent rate: [$X per sq ft]

Output:
1. Space demand forecast by quarter for the planning period
2. Projected utilization rate under current lease vs demand
3. Identification of lease decision windows (when to act to avoid over/undercommitment)
4. Recommended space target range with assumptions
5. Sensitivity analysis: what changes if hybrid attendance is 20% higher or lower than planned
```

**Prompt 5: Draft Employee Space Usage Communication**
```
Draft a communication to employees explaining our updated space utilization approach and any changes to how they should book or use office space.

Context:
- What is changing: [DESCRIBE CHANGE — e.g., shifting to hoteling, consolidating floors, new booking system]
- Reason for the change: [BRIEF EXPLANATION employees should hear]
- Effective date: [DATE]
- Impact on employees: [WHAT THEY NEED TO DO DIFFERENTLY]
- Booking process: [HOW TO BOOK SPACE UNDER NEW APPROACH]
- Who to contact with questions: [CONTACT/TEAM]

Draft:
1. Email announcement (300-400 words): clear, positive framing, practical guidance
2. FAQ section (8-10 questions employees are likely to ask with concise answers)
3. One-paragraph manager talking points for team leads to use in team meetings
4. Suggested subject line options (3 variations)
```

---
