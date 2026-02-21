# Use Case #278: AI Research Briefing Generator

**Role**: Executive / Personal Assistant | **Industry**: Enterprise, Professional Services, Financial Services, Technology | **Task**: Research, Executive Briefing, Intelligence

---

## Detailed Introduction

**The Pain: Executives Need Sharp, Current Intelligence on Fast-Moving Topics But Cannot Invest 3-5 Hours in Original Research for Every Decision That Requires It**

Information is the raw material of executive decision-making. A CEO considering a market entry needs to understand the competitive landscape, regulatory environment, growth trends, key players, and barriers to entry. A CFO evaluating a potential acquisition needs a rapid financial and operational assessment of a target company. A CHRO designing a talent strategy needs current data on labor market trends, salary benchmarks, and emerging workforce practices. A board member preparing for an audit committee meeting needs to understand the current state of the company's industry risk landscape. All of these needs have one thing in common: they require synthesized, current intelligence — and they all compete for time that is already fully committed.

The research problem for executives is not access — it is synthesis. Executives have access to more information than any previous generation of business leaders: industry reports, analyst research, news databases, academic literature, company filings, social media signals, expert networks. The bottleneck is not finding information; it is processing the volume of available information into a concise, actionable briefing that gives the executive what they need to know without requiring them to read 200 pages of source material. A thorough research briefing on a moderately complex topic — one that would genuinely inform a strategic decision — takes an analyst 3 to 5 hours to produce at high quality. Most executives receive either no briefing at all (they make the decision on intuition and partial information), a superficial briefing (a few Google searches compiled into a document), or an over-long briefing (a 40-page report that the executive reads the executive summary of at 2 AM before a board meeting).

The currency problem compounds the synthesis problem. Business intelligence has a short shelf life. Market dynamics, competitive moves, regulatory changes, and economic conditions evolve continuously. A briefing that was accurate four months ago may be meaningfully out of date today. Executives who are informed primarily by research produced in their organization's last planning cycle are operating on stale intelligence in a fast-moving environment — and the gap between their mental model and current reality grows wider each month without a disciplined intelligence refresh.

The personalization problem is the third layer. Generic industry reports, however comprehensive, are not calibrated to the executive's specific question, their organization's particular competitive position, or the decision they are actually trying to make. The executive who needs to know whether to open a manufacturing facility in Malaysia needs research focused on that specific decision — cost structures for the specific product type, labor market conditions in the specific region, regulatory requirements for the specific industry. General "manufacturing in Southeast Asia" research gets them partway there; it takes additional synthesis and customization to produce genuinely decision-relevant intelligence.

**How COCO Solves It**

COCO's AI Research Briefing Generator transforms the research process from a multi-hour analyst task into a 30-45 minute structured workflow that produces tailored, decision-ready intelligence briefings on any topic the executive needs to understand.

1. **Scoped Research Request**: COCO starts with a structured intake that turns a vague research need into a precisely scoped intelligence request.
   - Decision context: what decision is this research intended to inform? Who will use it and how?
   - Scope definition: what exactly needs to be covered, and what is explicitly out of scope?
   - Time horizon: is the executive interested in historical context, current state, or forward-looking forecasts?
   - Source preferences: what types of sources carry the most credibility for this audience (analyst firms, academic research, regulatory filings, industry associations, news)?
   - Depth vs. speed trade-off: is this needed by end of day (rapid brief) or does the executive have 48 hours for a deeper dive?

2. **Structured Briefing Production**: COCO produces briefings in a consistent format designed for executive consumption — not academic depth, but decision-relevant clarity.
   - Executive summary (1 page): the 3-5 things the executive most needs to know, stated plainly
   - Key findings section: organized by the questions the research was designed to answer, not by source or methodology
   - Implications section: what do these findings mean for the decision being considered? COCO makes the connection explicit rather than leaving interpretation to the reader
   - Data and evidence appendix: sources, key statistics, and supporting evidence for executive readers who want to go deeper
   - Confidence assessment: for each major finding, an honest assessment of how strong the evidence is and where uncertainty remains

3. **Competitive Intelligence Briefings**: For research specifically about competitors, markets, or counterparties, COCO applies a structured intelligence framework.
   - Competitor profile: capabilities, strategy, recent moves, financial health, leadership, customer perception
   - Market landscape: size, growth trajectory, key players and market share, value chain structure, emerging threats
   - Counterparty intelligence: for M&A, partnerships, or negotiations — the target's objectives, constraints, alternatives, and decision-making dynamics
   - Intelligence gaps: what the executive would want to know that the available research doesn't reveal

4. **Regulatory and Policy Intelligence**: For decisions with compliance or regulatory dimensions, COCO synthesizes the current regulatory landscape.
   - Current rules: what is required, who enforces it, what are the consequences of non-compliance
   - Recent changes: what has changed in the last 12-24 months and what is pending
   - Jurisdictional variation: for multi-market decisions, how requirements differ by geography
   - Regulatory risk assessment: where is regulatory risk elevated and what is the early warning signal to watch

5. **Research Maintenance and Refresh**: Intelligence needs to be kept current, not just produced once.
   - Briefing update prompts: for topics where the executive has an ongoing need (a market they're entering, a competitor they're tracking), COCO generates a lightweight monthly refresh
   - Change alert system: monitors for significant developments that would materially change the conclusions of a prior briefing
   - Annual deep refresh: once per year, a full refresh of standing intelligence on the organization's most important external factors

**Measurable Results**

- **Research turnaround time**: Comprehensive briefings produced in 30-45 minutes with COCO vs. 3-5 hours with traditional analyst research workflow — a 6x efficiency gain
- **Decision confidence**: Executives with structured pre-decision research briefings report 38% higher confidence in their decisions and 29% higher satisfaction with decision quality six months later
- **Intelligence currency**: Organizations using COCO for research briefings refresh key intelligence on strategic topics 4x more frequently than those relying on annual planning cycle research
- **Briefing utilization**: Tailored, scoped briefings are read and used by executives 3x more frequently than generic industry reports — because they answer the question the executive actually has
- **Research cost reduction**: Organizations report a 40-60% reduction in external research costs (analyst subscriptions, advisory fees) when augmented with AI-generated synthesis

**Who Benefits**

- **C-Suite Executives (CEO, CFO, Chief Strategy Officer)**: Make major strategic decisions with current, tailored intelligence rather than intuition and outdated research — without adding 5 hours of research time to an already full schedule
- **Executive Assistants and Chiefs of Staff**: Produce professional-quality research briefings for the executive on any topic in a fraction of the time previously required — elevating the role from logistics support to intelligence function
- **Board Members**: Arrive at board meetings with independently synthesized intelligence on the topics under discussion, not just the materials management has prepared
- **Business Development and M&A Teams**: Generate rapid competitive and market intelligence to support deal evaluation, partnership assessment, and market entry decisions

---

## Practical Prompts

**Prompt 1: Rapid Research Brief on Any Topic**
```
I need a research brief on a topic for an upcoming decision. Please produce a concise, decision-ready summary.

The decision I'm informing: [what decision will this research support?]
Deadline for the brief: [when do you need it]
Depth needed: [rapid brief — key points in 1 page / standard brief — 3-5 pages / deep dive — full analysis]

Topic to research: [describe what you need to know]

Specific questions to answer:
1. [Question 1 — the most important thing you need to know]
2. [Question 2]
3. [Question 3]
4. [Question 4 if relevant]

What I already know (so you don't repeat it):
[brief description of your current knowledge on this topic]

Audience for this brief: [myself only / will share with leadership team / will share with board]

Sources I trust most for this topic: [analyst firms / academic research / news / regulatory filings / industry associations / any source is fine]

Please produce:
1. Executive summary: the 3 most important things to know, in plain language
2. Answers to each of my specific questions with supporting evidence
3. Key implications: what does this mean for my decision?
4. What I still don't know: where are the gaps in available information?
5. Confidence level: how solid is this research — where should I seek additional validation?
```

**Prompt 2: Competitor Intelligence Brief**
```
I need an intelligence brief on a competitor (or potential competitor) to inform a strategic decision.

The competitor: [company name, brief description of what they do]
Why I'm researching them now: [what triggered this — new competitive move / entering our market / we're considering entering theirs / M&A interest / other]
My decision context: [what I'm trying to decide based on this research]

What I want to understand:
1. Strategic position: what is their strategy and how is it evolving?
2. Financial health: are they growing, stressed, or stable? Any indicators of their financial situation?
3. Recent moves: what have they done in the last 12 months that matters?
4. Capabilities: what are they genuinely good at, and where are they weak?
5. Customer perception: how do their customers view them vs. how they view us?
6. Leadership: who's leading, what's their background, and how does that shape their strategic bets?
7. Vulnerabilities: where are they exposed that we could exploit, or that makes them riskier than they appear?

Please structure the brief as:
1. Competitor snapshot (1 paragraph: who they are today)
2. Findings on each of my specific questions
3. Competitive implications: how should what we've learned change our strategy or approach?
4. Intelligence gaps: what would I want to know that isn't available from public sources?
```

**Prompt 3: Market Entry or Expansion Research Brief**
```
I'm evaluating whether to enter a new market or expand into a new geography and need a research brief to inform the decision.

Market being considered: [specific market segment, geography, or customer type]
Our current position: [what we do today, what would be new about this move]
Key decision to make: [enter now / wait / enter via partnership / enter via acquisition / don't enter]
Timeline for decision: [when we need to decide]

Research I need:
1. Market size and growth: how large is this market and what is the growth trajectory?
2. Competitive landscape: who are the key players, what are their positions, how contested is the market?
3. Customer intelligence: who are the target customers, what do they value, what are their current pain points?
4. Barriers to entry: what makes this market hard to enter, and how do we stack up against those barriers?
5. Regulatory environment: what rules govern this market, what's changing, and what are the compliance requirements?
6. Unit economics: what are the typical cost structures, margin profiles, and customer acquisition dynamics?
7. Best entry strategy: how have successful entrants typically gone to market — organic / partnership / acquisition?

Please:
1. Summarize each research area with key findings and evidence
2. Recommend whether to enter based on what the research reveals, with clear reasoning
3. If recommending entry: identify the 2-3 highest-risk assumptions we're making that need validation before committing
4. If recommending against: what conditions would change your recommendation?
5. What's the most important thing to learn in the next 60 days to reduce uncertainty on this decision?
```

**Prompt 4: Pre-Board Meeting Research and Intelligence Prep**
```
I'm preparing for a board meeting and need research briefings on several topics that may come up. Help me get current and prepared.

Board meeting context:
- Company stage: [early stage / growth / mature / restructuring]
- Key agenda items: [list the main topics for the meeting]
- Topics where I need to be current on external context: [industry trends / regulatory developments / competitive landscape / economic conditions / other]
- Board composition: [types of board members — investors / independent directors / industry experts — so I can calibrate the level of sophistication needed]

For each external topic, I need:
[Topic 1]: [what you need to know and why it's relevant to the board conversation]
[Topic 2]: [same]
[Topic 3]: [same]

Questions I'm expecting the board to ask that require research:
1. [Expected question 1]
2. [Expected question 2]
3. [Expected question 3]

Please produce:
1. For each topic: a 1-paragraph summary of the current state, key recent developments, and what it means for our company
2. For each expected question: a research-backed, 3-4 sentence answer I can deliver confidently
3. Any relevant external data points that would strengthen the narrative we're presenting at this meeting
4. Early warning indicators I should mention to demonstrate proactive monitoring of key risks
```

**Prompt 5: Economic and Macro Research Brief for Strategic Planning**
```
I'm preparing for our annual strategic planning process and need a research brief on the macroeconomic and industry environment that will shape the next 1-3 years.

Our company context:
- Industry: [your industry]
- Geography of operations: [primary markets]
- Key inputs: [what external factors most directly affect your business — interest rates, labor costs, commodity prices, consumer sentiment, regulatory environment, technology trends, etc.]
- Biggest macro vulnerabilities: [what economic or external factors could most disrupt your business]

Research I need:
1. Economic outlook: what are the primary economic scenarios for the next 12-18 months and how are forecasters weighting them?
2. Industry-specific trends: what are the 3-4 most significant trends reshaping our industry over the next 2-3 years?
3. Labor market: what does the labor market look like for our talent categories — availability, compensation trends, retention challenges?
4. Technology disruption: what technology developments are most likely to change the competitive dynamics of our industry?
5. Regulatory outlook: what regulatory changes are likely in our industry over the planning horizon?
6. Geopolitical factors: what global political and trade dynamics are most relevant to our business?

Please produce:
1. A macro briefing organized by each research area with key findings
2. Scenario framing: what are the 2-3 most important scenarios we should plan for and what are their drivers?
3. Implications for our strategy: how does this external environment shape what we should prioritize?
4. Key assumptions our plan should make explicit — and the monitoring signals that would tell us if we're wrong
```

---
