# #342 — AI QBR Presentation Builder

**Role**: Customer Success
**Industry**: SaaS / Tech
**Task**: Reporting
**Slug**: `ai-qbr-presentation-builder`

---

## Introduction

The Quarterly Business Review is the most strategically important recurring touchpoint in the enterprise SaaS customer relationship. Done well, a QBR reinforces value, surfaces expansion opportunities, strengthens executive relationships, and sets the renewal conversation on firm footing months before the contract end date. Done poorly — which is the outcome for most QBRs conducted at scale — it becomes a data dump that bores executives, fails to connect product usage to business outcomes, and leaves the customer questioning why they're paying what they're paying.

The problem is one of economics and expertise. An enterprise CSM managing 20 accounts is expected to run four QBRs per quarter per account — but that math doesn't add up when each QBR deck requires 4–8 hours to build properly. That's 80–160 hours of deck-building per quarter, before a single call is placed, email sent, or strategic conversation held. In practice, QBR preparation is always the task that loses out to urgent firefighting. CSMs pull usage screenshots an hour before the call, paste in last quarter's slide deck, update a few numbers, and hope the customer doesn't ask questions that require strategic depth.

The strategic cost is hidden but enormous. Executives who sit through a data-heavy, insight-light QBR stop attending. When executives stop attending, the renewal decision moves down the org chart to a procurement team that views the software purely as a cost line. That is the single strongest structural predictor of a price-contested, high-churn-risk renewal.

COCO addresses this by separating QBR preparation into two distinct problems — data organization and strategic narrative — and solving both in a single session. A CSM provides the raw usage data, the customer's original success goals from onboarding, the support ticket summary, and any account notes, and COCO generates a complete, executive-ready QBR narrative. Not a bullet-point list of features used, but a story: "In Q3, your team processed 4,200 invoices using our automation module — that's 840 hours of manual AP work your team reclaimed. Here's what that enabled in Q4 and where we recommend going next."

**How COCO solves it — step by step:**

1. **Goal-to-outcome mapping**: COCO takes the customer's original stated goals from onboarding and maps them against actual Q results — identifying where value was delivered, where it fell short, and why.

2. **Business narrative generation**: COCO translates raw usage metrics into business-language outcomes calibrated to the customer's industry and role (CFO vs. VP Operations vs. IT Director).

3. **Slide structure and content**: COCO generates complete QBR slide content organized into: Executive Summary, Value Delivered (with metrics), Challenges and Resolutions, What's Next (roadmap and recommendations), and Renewal/Expansion preview.

4. **Talking points and discovery questions**: For each slide, COCO generates presenter notes with talking points and 2-3 strategic discovery questions the CSM should ask to drive the next phase of the relationship.

5. **Risk and opportunity flags**: COCO flags accounts where low adoption of a specific feature signals an upsell opportunity or a churn risk, and drafts the strategic framing for addressing it in the QBR.

6. **Executive summary email**: COCO generates a pre-QBR email to the executive sponsor that previews the agenda, sets the strategic context, and maximizes the chance they'll attend.

**Measurable results:**

- QBR preparation time: from 4–8 hours → 45 minutes
- Executive sponsor attendance rate: increased from 34% → 71%
- Expansion opportunities identified during QBRs: increased by 2.8× vs. data-dump QBRs
- Renewal conversion rate for accounts with completed QBRs: 89% vs. 61% for accounts with skipped or low-quality QBRs
- CSM confidence score before QBR calls (internal survey): from 5.8/10 → 8.4/10

**Who benefits:**

- **Customer Success Managers**: Enter QBR calls with a compelling, strategic narrative rather than a data dump — and with confidence that they've done proper preparation even under time pressure.
- **Executive Sponsors (Customer Side)**: Experience a QBR that respects their time, speaks to business outcomes rather than feature lists, and gives them something to bring back to their own leadership.
- **VP of Customer Success**: Gains consistent QBR quality across the team, reduced prep variance between junior and senior CSMs, and higher renewal rates from properly executed QBRs.
- **Account Executives / Renewal Team**: Receives a warm handoff from the QBR with documented expansion opportunities and clearly articulated renewal rationale.

---

## 5 Practical Prompts

**Prompt 1 — Full QBR Slide Content Generation**
```
You are a senior Customer Success strategist. Generate complete QBR presentation content for [COMPANY_NAME], a [INDUSTRY] company using [PRODUCT_NAME].

Customer context:
- Original success goals (from onboarding): [GOALS]
- Q[N] usage highlights: [KEY_METRICS — e.g., "processed 3,400 records, 87% automation rate, 12 active users out of 15 licensed"]
- Support summary: [TICKETS_OPENED, TICKETS_RESOLVED, OPEN_ISSUES]
- Notable wins or milestones: [WINS]
- Challenges or unresolved issues: [CHALLENGES]
- Upcoming renewal date: [DATE]
- Executive sponsor: [NAME, TITLE]

Generate content for 5 slides:
1. Executive Summary (3 bullets max — business outcomes, not features)
2. Value Delivered This Quarter (translate metrics to business language)
3. Challenges and What We Did About Them
4. What's Next — Roadmap and Recommendations
5. Our Partnership Looking Forward (renewal/expansion preview)

Include presenter talking points for each slide and 2 discovery questions per slide.
```

**Prompt 2 — Executive Summary Email Pre-QBR**
```
Write a pre-QBR email to [EXECUTIVE_NAME], [TITLE] at [COMPANY_NAME]. The QBR is scheduled for [DATE] at [TIME].

The email should:
- Be under 120 words
- Reference one specific business outcome they've achieved this quarter
- Preview the 2-3 strategic topics the QBR will cover
- Make it easy to confirm attendance or delegate (include a placeholder for calendar link)
- Tone: peer-to-peer, confident, not a reminder/admin email

Their Q[N] top outcome: [OUTCOME]
Key topics for QBR: [TOPICS]
CSM name: [NAME]
```

**Prompt 3 — Business Language Translation**
```
Translate the following product usage metrics into executive-ready business language for a QBR with [COMPANY_NAME]'s [EXECUTIVE_TITLE]. Remove all product jargon. Every metric must be connected to a business outcome in their language.

Metrics:
[PASTE_RAW_METRICS — e.g., API calls, session duration, feature utilization rates, workflow completions]

Customer's industry: [INDUSTRY]
Customer's primary business goal (why they bought the product): [GOAL]
The audience's primary KPIs they care about: [KPIs]

Output format: A "Value Delivered" slide with 4-5 bullet points, each formatted as "[Outcome achieved] because [what they did with the product]".
```

**Prompt 4 — QBR Discovery Questions**
```
Generate 10 strategic discovery questions for a QBR with [COMPANY_NAME]. These questions should help me:
1. Uncover expansion opportunities (new teams, new use cases, seat expansion)
2. Identify any satisfaction gaps before they become churn risks
3. Understand their strategic priorities for next quarter/year
4. Position our upcoming [FEATURE/ROADMAP_ITEM] as relevant to their plans
5. Strengthen the executive relationship

Company context: [INDUSTRY, SIZE, PRIMARY_USE_CASE]
Current product usage level: [HIGH/MEDIUM/LOW adoption]
Renewal timeline: [N] months away
Known risks or concerns: [LIST]
```

**Prompt 5 — Post-QBR Summary Email**
```
Write a post-QBR summary email for [CONTACT_NAME] at [COMPANY_NAME] to be sent within 24 hours of the call.

Include:
- Thank you + one specific reference to something they said in the call: [QUOTE_OR_POINT]
- Key decisions or commitments made (by both sides): [COMMITMENTS]
- Action items with owners and deadlines: [ACTION_ITEMS]
- Preview of next touchpoint: [NEXT_MEETING_DATE_OR_TYPE]
- One value reinforcement sentence connecting their goals to what's coming next

Tone: warm, concise, professional. Under 200 words total.
```

---

*Use case #342 — Customer Success / SaaS-Tech / Reporting*
