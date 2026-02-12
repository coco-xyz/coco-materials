# Financial Services

AI use cases for banking, insurance, and financial institutions.

## 1. AI Lead Researcher

> Researches 200 leads/day, auto-enriched from LinkedIn, Crunchbase, scored and ready.

::: details 🎬 Watch Demo Video

<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/015-ai-lead-researcher.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

**The Pain: SDRs Spend More Time Researching Than Selling**

The modern SDR role has a fundamental efficiency problem. Personalized outreach is table stakes -- generic emails get deleted, templated LinkedIn messages get ignored. But genuine personalization requires genuine research: understanding the prospect's company, their role, their pain points, their current tech stack, and their recent activities.

Research from Gartner shows that SDRs spend only 28% of their time actually selling. The rest is consumed by research, data entry, administrative tasks, and navigating tools. For many SDRs, the research phase alone takes 30-60 minutes per prospect -- and they need to reach 50-100 prospects per week to generate enough pipeline.

The second problem is qualification accuracy. Without thorough research, SDRs often pursue prospects who don't fit the ideal customer profile. These conversations waste time for both sides and clog the pipeline with low-quality opportunities that AEs then have to disqualify.

**How COCO Solves It**

COCO's AI Lead Researcher automates the research and qualification process, delivering SDR-ready intelligence in minutes instead of hours.

1. **Automated Multi-Source Research**: Given a prospect name and company, COCO aggregates:
   - **Professional Profile**: Role history, tenure, responsibilities, skills, education
   - **Company Intelligence**: Size, revenue, industry, growth stage, recent news, funding rounds
   - **Tech Stack**: Current tools and technologies (from BuiltWith, job postings, integration pages)
   - **Competitive Context**: Current vendors, recently evaluated alternatives, G2/Capterra reviews
   - **Growth Signals**: Hiring velocity, new office locations, product launches, partnership announcements
   - **Social Activity**: Recent LinkedIn posts, conference appearances, published articles, podcast interviews

2. **ICP Scoring and Qualification**: Before a single minute of human time is spent, COCO:
   - Scores the prospect against your defined Ideal Customer Profile
   - Flags disqualifying factors (wrong industry, too small, already using competitor with long contract)
   - Highlights qualifying signals (recent funding, hiring for relevant roles, technology migration)
   - Assigns a priority tier (Hot / Warm / Cold / Disqualify)

3. **Personalized Prospect Brief**: For qualified prospects, COCO generates a one-page brief:
   - **Company Snapshot**: What they do, how big, what stage, recent momentum
   - **Prospect Profile**: Role, likely priorities, decision-making authority
   - **Pain Point Hypothesis**: Based on role + company stage + industry, what problems they likely face that your product solves
   - **Conversation Starters**: Specific hooks from recent activity (e.g., "You posted about scaling your CS team -- we helped [similar company] automate 40% of ticket volume")
   - **Connection Points**: Mutual connections, shared alma maters, common interests, event co-attendance
   - **Risk Factors**: Potential objections or blockers to flag early

4. **Personalized Outreach Drafts**: COCO generates channel-specific first-touch drafts:
   - **Email**: Subject line + body with specific, non-generic personalization hooks
   - **LinkedIn**: Connection request note + follow-up message
   - **Cold Call Script**: Opening, pain point probe, value prop bridge, meeting request
   - Each draft references specific research findings, not generic flattery

5. **Account Mapping**: For enterprise deals, COCO maps the buying committee:
   - Economic buyer, technical evaluator, end user champion, blocker
   - Recommended approach sequence (who to contact first, who to involve when)
   - Relationship paths through mutual connections

:::

::: details Results & Who Benefits

**Measurable Results**

- **Research time per lead**: From 45 minutes to 3 minutes (93% reduction)
- **Leads researched per SDR per day**: From 8 to 60+ (7.5x increase)
- **Qualified meetings booked per SDR**: +73%
- **Cost per qualified meeting**: -58%
- **Prospect-to-meeting conversion rate**: +41% (better personalization)
- **Pipeline quality (SAL to SQL conversion)**: +35% (better upfront qualification)

**Who Benefits**

- **SDRs/BDRs**: Research at scale without sacrificing personalization quality
- **Sales Managers**: Higher output per rep without increasing headcount
- **AEs**: Receive better-qualified, better-researched meetings from SDRs
- **Revenue Operations**: More accurate pipeline data from better upfront qualification

:::

::: details Practical Prompts

**Prompt 1: Comprehensive Prospect Research Brief**
```
Research this prospect and create a one-page intelligence brief for my outreach.

Prospect: [Name], [Title] at [Company]
LinkedIn URL: [URL]
Company website: [URL]

Research and compile:
1. **Company Overview**: What they do, size, stage, recent news/funding, growth trajectory
2. **Prospect's Background**: Career history, areas of expertise, likely priorities in current role
3. **Tech Stack Hypothesis**: What tools they likely use based on company size, industry, and job postings
4. **Pain Point Hypothesis**: Top 3 problems this person likely faces that [our product] addresses, with reasoning
5. **Conversation Starters**: 3 specific hooks from their recent activity (posts, articles, company announcements)
6. **Connection Points**: Anything we have in common (mutual connections, schools, locations, interests)
7. **ICP Fit Score**: How well they match our ICP: [describe your ICP criteria]
8. **Recommended Approach**: Best channel, timing, and angle for first touch

Our product: [brief description of what you sell and key value props]
```

**Prompt 2: Personalized Outreach Email**
```
Write a personalized cold email to this prospect based on the following research.

Prospect: [Name], [Title] at [Company]
Research findings:
- Company context: [what you know about their company]
- Recent activity: [relevant LinkedIn posts, news, announcements]
- Likely pain point: [your hypothesis]
- Connection point: [anything in common]

Our product: [what we sell]
Our relevant case study: [a similar customer's results]

Email requirements:
- Subject line that gets opened (no clickbait, no "Quick question")
- Opening line that proves you researched them specifically (not a template)
- 2-3 sentences connecting their situation to our value proposition
- Specific, low-friction CTA (not "Let me know if you'd like to chat")
- Total length: under 150 words
- Tone: Peer-to-peer, not salesy. Like a knowledgeable colleague sharing something relevant.

Also generate 2 follow-up emails (for day 3 and day 7) with different angles.
```

**Prompt 3: Account Mapping for Enterprise Deal**
```
Help me map the buying committee for an enterprise deal.

Target company: [Company Name]
Company size: [employees, revenue if known]
Our product: [what we sell]
Deal size: ~$[X]
Sales stage: [early/mid/late]

Known contacts:
1. [Name] - [Title] - [relationship status: cold/warm/champion]
2. [Name] - [Title] - [relationship status]
[...continue for known contacts]

Based on typical buying processes for [our product category] at companies this size, identify:
1. **Economic Buyer**: Who likely signs off on budget? (if not in known contacts, suggest title to find)
2. **Technical Evaluator**: Who will assess the product technically?
3. **End User Champion**: Who would use the product daily and advocate for it?
4. **Potential Blockers**: Who might resist this purchase and why?
5. **Procurement/Legal**: Who handles vendor evaluation and contracts?

For each role, suggest:
- Approach strategy (direct outreach, warm intro, event meeting)
- Key message tailored to their priorities
- Sequence (who to engage first, second, etc.)
```

**Prompt 4: Batch Lead Qualification**
```
Score and prioritize these leads against our ICP. Rate each as Hot / Warm / Cold / Disqualify with reasoning.

Our Ideal Customer Profile:
- Company size: [range]
- Industry: [target industries]
- Tech stack: [relevant technologies]
- Budget indicators: [signals of ability to pay]
- Pain indicators: [signals they have the problem we solve]
- Disqualifiers: [what makes a lead not worth pursuing]

Leads to evaluate:
1. [Name], [Title], [Company], [Company size], [Industry]
2. [Name], [Title], [Company], [Company size], [Industry]
3. [Name], [Title], [Company], [Company size], [Industry]
[...continue for all leads]

For each lead, provide:
- ICP score (1-10)
- Rating (Hot/Warm/Cold/Disqualify)
- Key qualifying signals
- Key risk factors
- Recommended action (immediate outreach / nurture sequence / skip)
- One-line personalization hook if qualified
```

:::

## 2. AI Client Research Brief

> Generates client meeting brief in 8 minutes: multi-source intel, executive profile deep-dive.

::: details 🎬 Watch Demo Video

<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/019-ai-client-research-brief.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

**The Pain: Inadequate Meeting Prep Costs More Than You Realize**

Executive-level sales meetings are the highest-leverage activities in an AE's week. A single well-run meeting with a decision-maker can advance a deal more than a month of lower-level conversations. But these meetings have an unforgiving cost of failure: show up unprepared, and you don't get a second chance.

Adequate preparation for an executive meeting requires understanding the company's financial performance, strategic priorities, recent organizational changes, competitive threats, industry trends, and the specific executive's background and communication style. This research spans multiple sources: SEC filings, earnings call transcripts, press releases, LinkedIn, industry publications, Glassdoor, patent databases, and job posting patterns.

Most AEs cut corners on research not out of laziness, but out of time constraints. With 4-6 meetings per week and deals to progress, spending 3 hours per meeting on research is unsustainable. The result: AEs walk into meetings with surface-level knowledge, miss critical context, and fail to connect their solution to the client's actual strategic priorities.

**How COCO Solves It**

COCO's AI Client Research Brief provides comprehensive, actionable intelligence for every client meeting in minutes.

1. **Multi-Source Intelligence Aggregation**: COCO scans:
   - Financial: Revenue trends, profitability, recent earnings guidance, stock performance
   - Strategic: Announced initiatives, partnerships, acquisitions, reorganizations
   - Leadership: Executive changes, new hires, board appointments, departures
   - Market: Industry trends, competitive threats, regulatory changes affecting them
   - Culture: Glassdoor trends, employer brand changes, workforce restructuring signals
   - Technology: Tech stack, digital transformation progress, vendor relationships

2. **Executive Profile Deep-Dive**: For the specific person you're meeting:
   - Career trajectory and expertise areas
   - Recent public statements, articles, or conference talks
   - Communication style indicators (data-driven, relationship-focused, visionary)
   - Likely priorities based on role, tenure, and company stage
   - Mutual connections for warm conversation starters

3. **Change Detection**: COCO tracks what's changed since your last interaction:
   - New leadership appointments or departures
   - Earnings results or guidance changes
   - New product launches or strategic pivots
   - Competitive moves that affect them
   - Organization restructuring

4. **Actionable Brief Format**: The output is a one-page brief designed for quick consumption:
   - **Company Snapshot**: 3-sentence overview of current state and momentum
   - **What's New Since Last Meeting**: Bullet list of key changes
   - **Their Top Priorities**: What the executive likely cares about most right now
   - **Pain Point Hypotheses**: Where your solution connects to their needs
   - **Conversation Openers**: 3 specific, insightful questions to open with
   - **Landmines to Avoid**: Topics or assumptions that could backfire
   - **Competitive Intel**: Who else they might be talking to and how to position

5. **Meeting-Type Adaptation**: Briefs adjust based on meeting purpose:
   - **First meeting**: More company/person background, relationship-building focus
   - **Technical evaluation**: Architecture context, integration landscape, IT priorities
   - **Executive sponsor meeting**: Strategic alignment, financial metrics, business outcomes
   - **Renewal/expansion**: Account health, usage patterns, ROI achieved, growth opportunities

:::

::: details Results & Who Benefits

**Measurable Results**

- **Meeting prep time**: From 2-3 hours to 8 minutes per meeting (95% reduction)
- **Executive meeting close rate**: +35% improvement
- **Client-reported meeting quality**: "Well-prepared" rating from 64% to 93%
- **Strategic deal advancement**: Deals progress 40% faster when AEs demonstrate deep client knowledge
- **Research coverage**: From 60% of meetings adequately prepped to 100%

**Who Benefits**

- **Account Executives**: Walk into every meeting fully armed with intelligence
- **Client Partners**: Deepen relationships by demonstrating genuine understanding of client's business
- **Sales Leaders**: Consistent, high-quality client engagement across the team
- **Pre-Sales Teams**: Technical conversations grounded in the client's actual architecture and priorities

:::

::: details Practical Prompts

**Prompt 1: Executive Meeting Prep Brief**
```
Create a one-page meeting prep brief for my meeting with a senior executive.

Meeting details:
- Executive: [Name], [Title] at [Company]
- Meeting purpose: [first meeting / follow-up / proposal / renewal]
- My company sells: [brief product description]
- What I already know: [any existing relationship context]
- Last meeting (if any): [date and what was discussed]

Research and compile:
1. **Company Snapshot**: Current financial health, growth trajectory, strategic direction (3-4 sentences)
2. **Recent Developments**: Key news from the last 90 days (funding, launches, leadership changes, earnings)
3. **Executive Profile**: Their background, likely priorities, communication style indicators
4. **Industry Context**: Key trends and challenges affecting their company right now
5. **Pain Point Hypotheses**: 3 specific problems they likely face that our product addresses
6. **Conversation Openers**: 3 insightful questions that demonstrate I've done my homework (not generic questions)
7. **Landmines**: Topics to avoid or handle carefully
8. **Competitive Context**: Who else they might be evaluating and our differentiation

Format this as a scannable one-page brief I can review in 5 minutes before the meeting.
```

**Prompt 2: Account Plan Intelligence**
```
Build a strategic account intelligence package for annual account planning.

Account: [Company Name]
Our current relationship: [existing customer / prospect / former customer]
Current deal value: $[X] / year
Expansion target: $[X]
Account owner: [your name]

Research and compile:
1. **Business Overview**: Revenue, growth rate, market position, key products/services
2. **Strategic Priorities**: Publicly stated goals, transformation initiatives, investment areas
3. **Organization Map**: Key executives and their likely priorities
4. **Technology Landscape**: Known tech stack, recent tech investments, upcoming refresh cycles
5. **Competitive Threats**: What competitors are pressuring them in their market
6. **Expansion Opportunities**: Based on their growth areas, where could our product provide more value?
7. **Risk Factors**: Contract renewal risks, budget pressure signals, sponsor changes
8. **Recommended Strategy**: Top 3 initiatives to grow this account with reasoning
```

**Prompt 3: Industry Trend Briefing for Client Conversations**
```
Create an industry trend briefing I can reference during client conversations to position myself as a knowledgeable advisor.

Industry: [client's industry]
My role: [AE selling {product type}]
Client company profile: [enterprise / mid-market / startup]

Compile:
1. **Top 5 Industry Trends**: What's changing in this industry right now and why it matters
2. **Key Challenges**: The 3 biggest operational challenges companies in this space face
3. **Technology Adoption Trends**: What technologies are being adopted and why
4. **Regulatory Changes**: New or upcoming regulations affecting this industry
5. **Benchmarks**: Key performance metrics and industry averages
6. **Talking Points**: For each trend, one sentence connecting it to what our product does

Make this conversational -- I want to sound informed, not like I'm reading a report.
```

:::

## 3. AI VIP Escalation

> Auto-detects VIP customer anomalies. 30% missed issues drops to 0%.

::: details 🎬 Watch Demo Video

<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/024-ai-vip-escalation.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

**The Pain: Your Support System Can't Tell a $500K Customer from a Free Trial User**

Most support systems treat all customers equally. From a fairness perspective, this seems right. From a business perspective, it's catastrophic. When a $500K enterprise account gets the same 4-hour SLA as a $50/month subscriber, you're making an implicit statement about how much you value that relationship.

Enterprise customers don't just expect faster support -- they expect contextual support. When they contact you, they expect the agent to know their account, their history, their contract terms, and their strategic priorities. Being treated as ticket #4,527 in a faceless queue is, for many enterprise buyers, the beginning of the end.

The churn economics are stark. Losing one enterprise account can equal losing 100+ SMB accounts. And by the time a VP emails your CEO saying "we're evaluating alternatives," the damage is done -- recovery is expensive and uncertain. The support interaction that precipitated that email might have been trivially easy to handle correctly, if only someone had flagged it as important.

**How COCO Solves It**

COCO's AI VIP Escalation creates a smart layer that ensures high-value customers receive treatment proportional to their business importance.

1. **Real-Time Customer Value Recognition**: When a ticket arrives, COCO instantly identifies:
   - Account tier (ARR, contract value, strategic importance)
   - Renewal date proximity (accounts within 90 days of renewal get priority boost)
   - Account health score (NPS, product usage, support history)
   - Contact's role (executive contacts get different treatment than end users)
   - Expansion pipeline (accounts with active upsell opportunities)

2. **Intelligent Escalation Matrix**: COCO applies dynamic escalation rules:
   - **Tier 1 (Enterprise VIP)**: P1-P2 issues go directly to senior agent + immediate CSM notification. P3-P4 go to dedicated enterprise queue with 30-minute SLA.
   - **Tier 2 (Growth accounts)**: P1 gets immediate escalation. P2-P4 get priority queue placement.
   - **Renewal Risk**: Any account within 60 days of renewal gets automatic priority boost regardless of issue severity.
   - **Churn Signal Detection**: Language analysis flags tickets containing churn indicators.

3. **Context-Rich Agent Handoff**: When a VIP ticket is escalated, the agent receives:
   - Account summary (ARR, products, contract dates, key stakeholders)
   - Ticket history (recent issues, resolution patterns, satisfaction scores)
   - Relationship context (CSM notes, last executive meeting, known concerns)
   - Renewal/expansion context (upcoming renewal, active opportunities)
   - Recommended approach (based on account health and contact personality)

4. **Churn Signal Detection**: COCO analyzes ticket content for warning signs:
   - Direct signals: "cancel," "downgrade," "not renewing," "looking at alternatives"
   - Indirect signals: "frustrated," "this keeps happening," "not getting value," "executive team is asking"
   - Pattern signals: Increasing ticket frequency, escalating severity, shorter messages (disengagement)
   - Triggers automatic CSM alert with risk assessment

5. **Proactive Intervention**: Beyond reactive escalation, COCO enables:
   - Weekly VIP account health reports for CSMs
   - Automatic outreach triggers when usage drops below threshold
   - Sentiment trend analysis across all touchpoints
   - Early warning system for accounts showing pre-churn patterns

6. **Executive Communication Handling**: When C-level contacts submit tickets:
   - Immediate routing to most senior available agent
   - CSM and account manager notified within 5 minutes
   - Response drafted with executive-appropriate tone and detail level
   - Follow-up scheduled within 24 hours regardless of resolution

:::

::: details Results & Who Benefits

**Measurable Results**

- **VIP first-response time**: 12 minutes (vs. 2 hours standard)
- **VIP accounts churned due to support**: 0 (previous year: 4 accounts, $1.2M ARR)
- **VIP CSAT**: 94% (vs. 84% overall)
- **Churn signals detected and saved**: 11 at-risk accounts identified and retained ($2.8M ARR)
- **CSM proactive intervention rate**: From 23% to 78% of VIP issues
- **Enterprise renewal rate**: From 89% to 96%

**Who Benefits**

- **Enterprise Customers**: Feel valued and prioritized; issues resolved faster
- **Support Agents**: Clear priority guidance; pre-loaded context for VIP interactions
- **Customer Success Managers**: Early warning on at-risk accounts; data for proactive outreach
- **Revenue Leaders**: Protected enterprise revenue; higher renewal rates

:::

::: details Practical Prompts

**Prompt 1: Build VIP Escalation Rules**
```
Design a VIP escalation framework for our support team.

Our customer tiers:
- Enterprise: $100K+ ARR, [X] accounts
- Mid-Market: $10K-$100K ARR, [X] accounts
- SMB: Under $10K ARR, [X] accounts

Current SLAs:
- P1: [X hours] first response
- P2: [X hours] first response
- P3: [X hours] first response

Design:
1. Escalation matrix: For each customer tier x priority level, define response SLA, agent tier, and notification rules
2. Auto-escalation triggers: Conditions that automatically bump priority
3. Churn signal keywords: Words/phrases that should trigger CSM alerts
4. Executive contact handling: Special rules for C-level contacts
5. Renewal proximity rules: How to adjust priority based on days-to-renewal
6. Metrics to track: KPIs that measure VIP support effectiveness
```

**Prompt 2: Analyze Account Risk from Support Interactions**
```
Analyze these recent support interactions for a key account and assess churn risk.

Account: [Company], $[X] ARR, renewal date: [date]
CSM: [name]
Account health score: [current score]

Recent support tickets (last 90 days):
1. Date: [X] | Issue: [X] | Priority: [X] | Resolution time: [X] | CSAT: [X]
2. Date: [X] | Issue: [X] | Priority: [X] | Resolution time: [X] | CSAT: [X]
[...continue]

Recent support excerpts (customer language):
[paste notable customer messages]

Analyze:
1. Churn risk level (Low/Medium/High/Critical) with reasoning
2. Pattern analysis: Is ticket frequency/severity increasing?
3. Sentiment trend: Is the customer becoming more frustrated over time?
4. Key concerns: What issues keep recurring?
5. Recommended actions for CSM (immediate, this week, this month)
6. Talking points for next CSM check-in call
```

**Prompt 3: Draft VIP Customer Apology and Recovery Email**
```
A VIP customer had a poor support experience. Draft a recovery email from their CSM.

Account: [Company], $[X] ARR
Contact: [Name], [Title]
What happened: [describe the support failure - e.g., long wait time, incorrect resolution, multiple transfers]
Customer's stated frustration: [paste their words if available]
Relationship history: [strong/strained/new]

Write an email that:
1. Acknowledges the specific failure (don't be vague)
2. Takes ownership without excuses
3. Explains what we're doing to fix the root cause (not just this instance)
4. Offers a concrete goodwill gesture appropriate to the relationship tier
5. Provides direct escalation path for future issues
6. Maintains dignity -- apologetic but not groveling

Tone: Senior, professional, genuine. This should sound like it comes from someone who genuinely cares about the relationship, not a PR template.
```

:::

## 4. AI Expense Auditor

> Instant expense report audit. Compliant: auto-approved. Anomalies: auto-flagged.

::: details 🎬 Watch Demo Video

<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/029-ai-expense-auditor.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

**The Pain: Manual Expense Auditing Is Slow, Incomplete, and Expensive**

Expense report auditing is one of those necessary finance functions that everyone knows is broken but nobody fixes. The process is labor-intensive, error-prone, and still misses significant policy violations and fraud. The Association of Certified Fraud Examiners estimates that organizations lose 5% of revenue to fraud, with expense reimbursement fraud being one of the most common types.

Manual auditing has a fundamental sampling problem. When reviewing 1,200 reports takes 160 hours, finance teams resort to sampling -- auditing 20-30% of reports in detail and rubber-stamping the rest. This means 70-80% of expense reports receive minimal scrutiny, creating a known vulnerability that sophisticated bad actors exploit.

The errors aren't just fraud. Honest mistakes are rampant: employees who don't know the policy, receipts that don't match claimed amounts due to currency conversion, duplicate submissions from confusing expense systems, and miscategorized expenses that distort departmental budgets. These errors, individually small, compound into material financial inaccuracies.

**How COCO Solves It**

COCO's AI Expense Auditor provides 100% audit coverage with consistent policy enforcement.

1. **Receipt Processing**: OCR reads receipt images in any format -- paper scans, phone photos, PDF downloads, even screenshots. Extracts vendor name, date, amount, tax, and category. Cross-references against the claimed values. Flags mismatches with the exact discrepancy amount.

2. **Policy Compliance Engine**: Checks every line item against your full expense policy:
   - Meal limits (per person, per event, by meal type)
   - Hotel rate caps (by city tier, season, advance booking)
   - Flight booking windows (advance purchase requirements, class restrictions)
   - Entertainment policies (client presence required, per-event limits, description requirements)
   - Mileage rates (IRS standard vs. company rate, route verification)
   - Per diem rules (domestic vs. international, city-specific rates)
   - Approval thresholds (who needs to approve at each dollar level)

3. **Pattern Detection**: Identifies suspicious patterns across time and across submitters:
   - **Split transactions**: Breaking a $300 dinner into two $150 receipts to stay below the $200 approval limit
   - **Round numbers**: Too many expenses at exactly $50, $100, $75 -- likely estimates rather than actuals
   - **Weekend/holiday anomalies**: Expenses on non-work days without corresponding travel authorization
   - **Vendor frequency**: Same restaurant 15 times in a month raises questions
   - **Threshold gaming**: 8 out of 10 expenses at $49 when the receipt requirement starts at $50
   - **Cross-employee patterns**: Two employees claiming the same dinner on different reports

4. **Risk Scoring**: Each expense report gets a risk score (0-100):
   - **0-20**: Clean, auto-approve
   - **21-50**: Minor issues, auto-approve with notation
   - **51-75**: Review recommended (specific items flagged with policy citations)
   - **76-100**: High risk, mandatory human review with full analysis attached

5. **Smart Routing**: Based on risk score and issue type:
   - Clean reports: Auto-approved, no human touch needed
   - Medium-risk: Flagged items sent to submitter for clarification before approval
   - High-risk: Escalated to finance manager with full analysis, policy citations, and historical context

6. **Reporting and Analytics**: Monthly and quarterly dashboards:
   - Policy compliance rates by department, team, and individual
   - Top violation types and trends over time
   - Estimated cost savings from fraud prevention and error correction
   - Department-level spending patterns and budget impact
   - Recommendations for policy updates based on common edge cases

:::

::: details Results & Who Benefits

**Measurable Results**

- **Policy violation detection**: From 60% to 97%
- **Processing time per report**: From 8 minutes to 12 seconds
- **Finance team time saved**: 150+ hours/month reallocated to strategic work
- **Fraudulent expenses caught**: $180K in first year (previously undetected)
- **Average reimbursement turnaround**: From 8 days to 2 days
- **False positive rate**: Under 5% (minimizing unnecessary human reviews)
- **Policy compliance awareness**: 40% reduction in violations after employees learned every report is audited

**Who Benefits**

- **Finance/AP Teams**: 95% time savings on audit; focus shifts from receipt reading to financial strategy
- **Controllers**: Confidence that every expense is policy-compliant; cleaner audit trails
- **Employees**: Faster reimbursement (2 days vs. 8); clear feedback on policy violations
- **CFO**: Material reduction in fraud risk; better spending visibility; cleaner financials
- **Compliance Officers**: 100% audit coverage satisfies regulatory and internal audit requirements

:::

::: details Practical Prompts

**Prompt 1: Audit Expense Report**
```
Audit this expense report against our company policy.

Our expense policy:
- Meals: Max $75/person for client meals, $25 for individual meals
- Hotels: Max $250/night domestic, $350/night international
- Flights: Must book 14+ days in advance for discount; economy class unless flight >6 hours
- Ground transportation: Uber/Lyft approved; rental car requires pre-approval
- Entertainment: Max $200/event, requires client names in description
- Receipts required for all expenses over $25

Expense report:
[paste expense line items with dates, amounts, categories, descriptions]

For each line item:
1. Policy compliance: Pass / Flag (cite specific policy rule)
2. Receipt match: Verified / Missing / Mismatch
3. Anomaly check: Normal / Suspicious (explain why)
4. Risk score for overall report (0-100)
5. Recommendation: Auto-approve / Human review required / Reject
```

**Prompt 2: Build Expense Fraud Detection Rules**
```
Design fraud detection rules for our expense reimbursement system.

Our company: [size, industry]
Monthly expense reports: ~[X]
Common expense categories: [list]
Current known issues: [describe any known fraud patterns]

Create detection rules for:
1. **Split transaction detection**: Expenses split to stay below approval limits
2. **Round number alerting**: Too many round-number expenses (likely estimates)
3. **Weekend/holiday anomalies**: Expenses on non-work days without travel
4. **Vendor frequency**: Same vendor appearing unusually often
5. **Threshold gaming**: Expenses clustering just below approval thresholds
6. **Ghost employees**: Expense submissions from terminated or non-existent employees
7. **Duplicate submissions**: Same expense claimed twice
8. **Lifestyle mismatch**: Expense patterns inconsistent with role/travel requirements

For each rule: trigger condition, severity level, false positive mitigation, and recommended action.
```

**Prompt 3: Expense Policy Review and Update**
```
Review our current expense policy and recommend updates based on common issues.

Current policy:
[paste your current expense policy]

Common violations and edge cases we've seen:
[describe recurring issues, gray areas, frequently asked questions]

Analyze and provide:
1. **Policy gaps**: What situations aren't covered that should be?
2. **Unclear language**: Which rules are ambiguous or open to interpretation?
3. **Outdated limits**: Which dollar limits need updating for current market rates?
4. **Missing categories**: New expense types (home office, AI tools, wellness) not addressed?
5. **Simplification opportunities**: Rules that could be simplified without increasing risk
6. **Enforcement mechanisms**: How to make the policy self-enforcing through system controls
7. **Communication plan**: How to roll out policy changes so employees actually read them

Provide a revised policy draft with tracked changes and rationale for each update.
```

:::

## 5. AI Financial Report Generator

> Multi-source financial report in 3 hours, replacing 2 days of manual work.

::: details 🎬 Watch Demo Video

<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/030-ai-financial-report-generator.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

**The Pain: FP&A Teams Are Report Factories, Not Strategic Advisors**

FP&A teams exist to provide strategic financial insight. In practice, they spend most of their time assembling reports. McKinsey research shows that finance teams spend 60-70% of their time on data gathering and report preparation, leaving only 30-40% for actual analysis and strategic support. The irony: CFOs consistently rank "strategic business partnering" as FP&A's most important function -- and the one where they most underdeliver.

The monthly close and reporting cycle is the biggest time drain. FP&A analysts pull data from multiple systems (ERP, CRM, HRIS, billing), reconcile discrepancies, calculate variances, build charts, format reports, and write commentary -- the same process, with the same templates, every single month. It's highly skilled work done in a highly repetitive way.

**How COCO Solves It**

COCO's AI Financial Report Generator automates the data assembly, calculation, and narrative generation, freeing FP&A for strategic work.

1. **Automated Data Integration**: Connects to financial systems (ERP, CRM, billing, HRIS) and pulls actuals, budget, and prior-period data automatically.

2. **Report Generation**: Produces standard monthly reports: P&L, balance sheet, cash flow, departmental budgets, revenue analysis, headcount, and KPI dashboards -- all formatted to your templates with accurate calculations.

3. **Intelligent Variance Commentary**: COCO doesn't just calculate "Revenue +12%." It explains why: identifies the drivers (which segments, products, regions contributed), quantifies each driver's impact, and contextualizes against plan assumptions.

4. **Board Deck Assembly**: Generates first-draft board presentations with executive summary, financial highlights, key metrics, risk/opportunity flags, and forward-looking guidance.

5. **Forecast Updates**: Based on actuals-to-date, COCO updates rolling forecasts, highlights tracking vs. plan, and flags items requiring reforecasting.

6. **Anomaly Detection**: Flags unusual patterns in financial data: unexpected account balance changes, budget line items significantly over/under, and trends that deviate from historical patterns.

:::

::: details Results & Who Benefits

**Measurable Results**

- **Report production time**: From 3 days to 4 hours per month-end cycle
- **Financial report errors**: Reduced by 91%
- **FP&A strategic analysis time**: From 15% to 45% of capacity
- **Board deck preparation**: From 2 days to 3 hours
- **Forecast update cycle**: From weekly (5 hours) to daily (automated)
- **Month-end close acceleration**: 2 days faster reporting to leadership

**Who Benefits**

- **FP&A Analysts**: Freed from mechanical report assembly to do the strategic analysis they were hired for
- **CFO/Finance Leadership**: Gets the "so what" behind numbers, not just the numbers; faster decision-making
- **Board Members**: Better-quality board decks with clearer narratives and actionable insights
- **Department Heads**: Receive budget variance explanations faster; can course-correct sooner
- **Auditors**: Consistent, well-documented financial reports reduce audit prep time

:::

::: details Practical Prompts

**Prompt 1: Generate Monthly Financial Summary**
```
Generate a monthly financial summary report with variance analysis.

Actuals this month:
[paste or describe: revenue, COGS, gross margin, operating expenses by department, EBITDA, headcount, key SaaS metrics if applicable]

Budget this month:
[paste budget figures]

Prior year same month:
[paste prior year figures]

Generate:
1. Executive summary (3-4 sentences: how did we do, key drivers, outlook)
2. Revenue analysis (by segment/product/region, with variance explanation)
3. Expense analysis (by department, flag items >10% over/under budget)
4. Profitability walk (bridge from budget to actual, quantifying each driver)
5. Key metrics dashboard (list relevant KPIs with trend arrows)
6. Risk/opportunity flags (what leadership should pay attention to)
7. Forward-looking commentary (implications for quarter/year forecast)

Format as a professional financial report suitable for C-suite review.
```

**Prompt 2: Write Board Deck Financial Section**
```
Draft the financial section of our board deck for [quarter/month].

Financial data:
[paste quarterly financials: revenue, expenses, profitability, cash position, key metrics]

Comparison data:
- vs. Budget: [paste]
- vs. Prior Year: [paste]
- vs. Prior Quarter: [paste]

Board context:
- Key questions the board will likely ask: [list anticipated questions]
- Strategic initiatives to highlight: [list]
- Concerns to address proactively: [list]

Generate:
1. Financial highlights slide (5-6 bullet points, metrics with directional arrows)
2. Revenue deep-dive slide (segmentation, growth drivers, risks)
3. Profitability slide (margin trends, cost structure changes)
4. Cash and runway slide (burn rate, runway, funding needs)
5. Key metrics slide (customer metrics, operational metrics)
6. Forward guidance slide (next quarter outlook with assumptions)

Each slide: headline, 4-6 data points, 2-3 sentence commentary. Board members should grasp each slide in 30 seconds.
```

**Prompt 3: Budget Variance Analysis**
```
Perform a detailed variance analysis for [department/project/company].

Budget:
[paste budget line items with amounts]

Actuals:
[paste actual line items with amounts]

For each line item with >5% variance:
1. Variance amount and percentage
2. Root cause analysis (why did it deviate?)
3. Is this a timing issue (will self-correct) or a permanent variance?
4. Impact on full-year forecast
5. Recommended action (accept / investigate / reforecast)

Also provide:
- Overall budget health assessment
- Top 3 favorable variances (good news with context)
- Top 3 unfavorable variances (bad news with mitigation)
- Recommended reforecast adjustments
```

:::

## 6. AI Invoice Processor

> Processes an invoice in 30 seconds: extract, match, route — fully automated.

::: details 🎬 Watch Demo Video

<video controls style="width: 100%; max-width: 480px; max-height: 400px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/031-ai-invoice-processor.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

**The Pain: AP Is the Most Labor-Intensive Function in Finance**

Accounts payable processing is among the most repetitive, error-prone, and underappreciated functions in any organization. The Institute of Financial Operations estimates that manual invoice processing costs $12-15 per invoice when you factor in labor, errors, late fees, and lost early payment discounts.

For a mid-size company processing 3,000+ invoices monthly, that's $36,000-45,000 per month in processing costs alone. The errors -- duplicate payments, incorrect amounts, wrong GL coding -- add another layer of cost through rework, vendor disputes, and audit findings.

The format problem makes automation seem impossible. Invoices arrive via email (PDF attachments), postal mail (scanned paper), supplier portals (various export formats), and increasingly, photos taken on phones. Each vendor has a different layout, terminology, and numbering system. Traditional template-based OCR breaks the moment it encounters an unfamiliar format.

And the matching problem is worse. A vendor named "Widget Corporation Inc." on the PO might appear as "Widget Corp" or "Widget Corp." or "WidgetCo" on the invoice. Line items may be bundled differently: the PO says "100 units of Product A at $10 each" while the invoice says "Product A -- 50 shipped Jan 5, 50 shipped Jan 12, total $1,000." Same transaction, different representation. Humans handle this intuitively. Rules-based systems fail.

**How COCO Solves It**

COCO's AI Invoice Processor automates the entire AP workflow from receipt to payment.

1. **Intelligent Document Processing**: Reads invoices in any format using advanced OCR and NLP:
   - Extracts vendor name, invoice number, date, line items, quantities, unit prices, tax, and total
   - Handles any layout -- no templates needed for new vendors
   - Reads handwritten notes, stamps, and annotations on paper invoices
   - Processes invoices embedded in email bodies (not just attachments)
   - Handles multi-page invoices and consolidated billing statements

2. **Automated PO Matching**: Fuzzy-matches invoices to purchase orders with intelligence:
   - Handles vendor name variations ("Widget Corp" = "Widget Corporation Inc.")
   - Matches partial deliveries and split shipments to a single PO
   - Reconciles line-item splits (PO says 100 units; invoice says 50+50)
   - Handles pricing variations from contract terms (volume discounts, tiered pricing)
   - Identifies invoices without POs for non-PO workflows (recurring services, utilities)

3. **Three-Way Match**: Compares PO, invoice, and goods receipt at the line-item level:
   - Quantity verification: ordered vs. invoiced vs. received
   - Price verification: agreed price vs. invoiced price
   - Tax calculation: verifies tax amounts against applicable rates
   - Flags specific discrepancies with details: "Line 3: PO price $10.00, Invoice price $10.50, difference $50.00 on 100 units"
   - Tolerance thresholds: auto-approves minor variances within configured limits

4. **GL Account Coding**: Auto-assigns general ledger codes:
   - Based on vendor, expense category, department, and project
   - Learns from historical coding patterns (this vendor always coded to 6100-Marketing)
   - Handles cost center allocation for shared expenses
   - Flags unusual coding for review (same vendor, different GL code than usual)

5. **Approval Routing**: Routes invoices based on configurable rules:
   - Amount thresholds ($0-$5K: auto-approve; $5K-$25K: department head; $25K+: VP)
   - Department and cost center routing
   - Special approval requirements (capital expenses, new vendors, contract changes)
   - Escalation for overdue approvals (reminder at 48h, escalation at 72h)
   - Mobile approval for managers on the go

6. **Payment Optimization**: Schedules payments to maximize value:
   - Captures early payment discounts (2/10 net 30: pay on day 10, save 2%)
   - Maintains cash flow targets (don't pay everything early if cash is tight)
   - Batches payments to reduce transaction costs
   - Prioritizes vendor payments based on relationship importance and terms
   - Forecasts upcoming payment obligations for cash flow planning

:::

::: details Results & Who Benefits

**Measurable Results**

- **Processing time per invoice**: From 14 minutes to 45 seconds (95% reduction)
- **Error rate**: From 8.3% to 0.6%
- **Late payment penalties**: From $23K to under $2K annually
- **Early payment discounts captured**: +$47K/year (previously missed)
- **AP staff time freed**: 75% of processing time reallocated to strategic work
- **Duplicate payment prevention**: 100% detection rate
- **Month-end close**: AP close 2 days faster due to automated reconciliation
- **Vendor satisfaction**: Payment accuracy and timeliness improved vendor relationships

**Who Benefits**

- **AP Clerks**: Freed from data entry to focus on vendor relationships and exception resolution
- **AP Managers**: Full visibility into invoice pipeline; bottlenecks identified automatically
- **Controllers**: Accurate GL coding; cleaner audit trail; faster month-end close
- **CFO**: Optimized cash flow; early payment discounts captured; reduced fraud risk
- **Vendors**: Faster, more accurate payments improve the business relationship
- **Procurement**: Better PO compliance tracking; vendor performance data

:::

::: details Practical Prompts

**Prompt 1: Invoice Data Extraction**
```
Extract structured data from this invoice for entry into our AP system.

Invoice:
[paste invoice text or describe the invoice content]

Extract:
1. Vendor name and address
2. Invoice number and date
3. PO number (if referenced)
4. Line items: description, quantity, unit price, line total
5. Subtotal, tax amount, total due
6. Payment terms
7. Bank/payment details

Format as a structured table ready for system entry. Flag any fields that are ambiguous or missing.
```

**Prompt 2: Invoice Exception Resolution**
```
Help resolve these invoice exceptions from our 3-way match process.

Exception 1:
- PO: [X units at $Y each]
- Invoice: [Z units at $W each]
- Goods receipt: [A units received]
- Discrepancy: [describe]

Exception 2:
[...continue]

For each exception:
1. What's the discrepancy?
2. Most likely cause (pricing error, partial shipment, tax calculation, quantity mismatch)
3. Recommended resolution (pay as invoiced, adjust to PO, request credit memo, partial payment)
4. Communication template for vendor if needed
5. GL adjustment entry if applicable
```

**Prompt 3: AP Process Optimization Analysis**
```
Analyze our accounts payable process for optimization opportunities.

Current process:
- Monthly invoice volume: [X]
- Average processing time per invoice: [X minutes]
- AP team size: [X people]
- Current error rate: [X%]
- Late payment rate: [X%]
- Early payment discounts captured: [X% of available]
- Top 3 bottlenecks: [describe]

Vendor mix:
- Number of active vendors: [X]
- Top 10 vendors by volume: [list]
- Percentage with electronic invoicing: [X%]

Analyze and recommend:
1. **Quick wins**: What can we improve this month with zero investment?
2. **Automation candidates**: Which invoice types/vendors are easiest to automate?
3. **Payment optimization**: How much are we leaving on the table in early payment discounts?
4. **Error reduction**: What's causing our errors and how to fix root causes?
5. **Vendor consolidation**: Should we reduce vendor count to simplify AP?
6. **Technology gaps**: What tools/integrations would deliver the highest ROI?
7. **Staffing model**: Is our AP team right-sized for the volume?

Provide a prioritized 90-day improvement roadmap.
```

:::

