# #341 — AI Churn Risk Early Warning System

**Role**: Customer Success
**Industry**: SaaS / Tech
**Task**: Monitoring
**Slug**: `ai-churn-risk-early-warning-system`

---

## Introduction

Churn is rarely a surprise — but it almost always feels like one. Post-mortems on churned accounts consistently reveal that the warning signs were present weeks or even months before the customer submitted a cancellation request. Login frequency had dropped by 40%. The executive sponsor had gone quiet on email for six weeks. A support ticket about a "critical" feature had been open for 47 days with no resolution. Three power users had been deactivated, suggesting internal headcount changes. The signals were there. Nobody synthesized them into a coherent alert in time.

The business cost is severe. A SaaS company with $20M ARR and a 12% gross churn rate is losing $2.4M annually — revenue that is far more expensive to replace through new sales than it would have been to retain. Industry benchmarks show that customers who receive a targeted intervention within the first 14 days of entering a churn-risk state are recovered at a 42% rate; after 30 days, that recovery rate falls to 18%. Speed is not just a nice-to-have — it is the primary variable determining whether a save is possible.

The problem CSMs face is data volume. A CSM carrying 40–60 accounts cannot manually monitor 15 behavioral signals per account per week, cross-reference that data against industry benchmarks, weight it against the account's contract value and renewal timeline, and formulate a personalized intervention strategy — all while running their standard cadence of calls and QBRs. Most teams either rely on a lagging health score calculated once a month or trust the CSM's gut instinct, both of which produce detection rates that are far too slow.

COCO transforms this from a reactive firefighting exercise into a proactive monitoring routine. A CSM can paste in a weekly account data snapshot — usage metrics, support ticket volume, stakeholder engagement signals, recent feature adoption rates, and CRM notes — and COCO synthesizes the full picture into a risk-ranked alert with specific intervention recommendations. Critically, COCO explains its reasoning: not just "this account is at risk" but "login frequency fell 38% over three weeks while three integration errors went unresolved, and the renewal is in 67 days — this pattern matches accounts that churned in Q3."

**How COCO solves it — step by step:**

1. **Signal aggregation**: The CSM provides raw account data across multiple dimensions (product usage, support, engagement, financial signals) and COCO structures it into a coherent weekly snapshot.

2. **Risk scoring and ranking**: COCO evaluates each account against a multi-factor risk model, assigns a risk tier (Critical / Elevated / Watch / Healthy), and ranks the portfolio by urgency.

3. **Root cause identification**: For each at-risk account, COCO identifies the primary drivers of risk with specific evidence from the data — not generic categories but specific behavioral patterns.

4. **Intervention playbook**: COCO generates a customized 2-week intervention plan for each Critical or Elevated account, with specific actions, sequencing, and talking points.

5. **Stakeholder communication drafts**: COCO generates the first outreach email or call agenda for each at-risk account, personalized to the detected risk pattern.

6. **Weekly summary for leadership**: COCO produces a one-page portfolio health summary the CSM can share with their VP, showing risk distribution, trend direction, and planned interventions.

**Measurable results:**

- Churn detection lead time: from average 12 days before cancellation → 52 days
- Recovery rate for at-risk accounts receiving timely intervention: 19% → 38%
- CSM time spent on manual data review: reduced by 74%
- Gross churn rate for teams using structured early warning: 12% → 7.4%
- Escalations to VP level that were preventable: reduced by 61%

**Who benefits:**

- **Customer Success Managers**: Know exactly which accounts need attention this week and why — replacing gut instinct with evidence-based prioritization.
- **VP of Customer Success**: Gets a real-time portfolio health view and can allocate CSM capacity before a problem becomes a crisis.
- **Revenue Operations**: Can model churn risk into ARR forecasts with far greater accuracy, improving board-level financial visibility.
- **Customers at risk**: Receive proactive, relevant outreach rather than being ignored until they've already made the decision to leave.

---

## 5 Practical Prompts

**Prompt 1 — Weekly Portfolio Risk Analysis**
```
You are an expert Customer Success analyst. Analyze the following account data for my portfolio of [N] accounts and produce a risk-ranked health report.

For each account, categorize as: Critical (intervention needed within 48 hours) / Elevated (intervention needed this week) / Watch (monitor closely) / Healthy.

For Critical and Elevated accounts, provide:
1. Primary risk drivers with specific evidence
2. Recommended intervention actions (numbered, specific)
3. Draft subject line and opening paragraph for an outreach email

Account data:
[PASTE_ACCOUNT_DATA — include: company name, login frequency trend, DAU/MAU, feature adoption rate, open support tickets, last stakeholder contact date, days to renewal, contract value]
```

**Prompt 2 — Single Account Deep Dive**
```
Perform a deep churn risk analysis for [COMPANY_NAME]. I'll provide all available signals. Give me a risk rating, root cause diagnosis, and a specific 2-week save plan.

Usage data: [LOGIN_FREQUENCY, DAU/MAU, FEATURE_ADOPTION_RATES]
Support data: [OPEN_TICKETS, TICKET_AGE, ESCALATION_HISTORY]
Engagement data: [LAST_EMAIL_RESPONSE, LAST_CALL_DATE, EXECUTIVE_SPONSOR_ACTIVITY]
Financial signals: [CONTRACT_VALUE, RENEWAL_DATE, INVOICE_HISTORY]
CRM notes (last 60 days): [NOTES]

What is the most likely reason this customer would churn? What is the single most impactful action I can take in the next 7 days?
```

**Prompt 3 — Churn Signal Pattern Library**
```
Create a reference library of the 15 most reliable early churn signals for [PRODUCT_TYPE] SaaS customers. For each signal:
- Signal name and description
- How to detect it (what data to monitor)
- Typical lead time before churn (how many days/weeks in advance this signal appears)
- Recommended response action
- Which customer segment or tier this signal is most relevant for

Base this on common patterns in B2B SaaS churn post-mortems.
```

**Prompt 4 — At-Risk Account Intervention Email**
```
Write a re-engagement email for [CONTACT_NAME] at [COMPANY_NAME]. This account is showing churn risk signals: [SPECIFIC_SIGNALS — e.g., "login frequency down 45% over 4 weeks, two power users deactivated"].

The email must:
- NOT sound like a "we noticed you haven't logged in" template
- Reference a specific value outcome they originally signed on to achieve
- Offer something concrete (a 30-minute call, a personalized use case walkthrough, a new feature they haven't tried)
- Be under 150 words, warm but direct
- Include a specific call-to-action with a calendar link placeholder

CSM name: [CSM_NAME]
Original success goal from onboarding: [GOAL]
Upcoming renewal date: [DATE]
```

**Prompt 5 — Monthly Churn Risk Report for Leadership**
```
Generate a monthly churn risk portfolio report for my VP of Customer Success. I manage [N] accounts with a total ARR of $[TOTAL_ARR].

Data:
- Accounts by health tier: Critical=[N], Elevated=[N], Watch=[N], Healthy=[N]
- MoM change in each tier
- Top 3 at-risk accounts (by ARR): [LIST]
- Interventions completed this month: [LIST]
- Outcomes: [SAVES, CHURN_CONFIRMED, STILL_IN_PROGRESS]

Format as a concise executive summary (half a page), followed by a risk register table. Highlight the ARR at risk, trend direction, and recommended leadership actions.
```

---

*Use case #341 — Customer Success / SaaS-Tech / Monitoring*
