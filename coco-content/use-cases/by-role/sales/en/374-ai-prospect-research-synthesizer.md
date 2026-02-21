# Use Case #374: AI Prospect Research Synthesizer

**Role**: Sales Representative / Account Executive | **Industry**: SaaS, B2B Software, Enterprise Tech | **Task**: Research, Pre-Call Preparation, Prospect Intelligence

---
## Detailed Introduction

**The Pain: Pre-Call Research Eats Hours and Still Produces Incomplete Intelligence**

Sales research is a paradox: every rep knows that thorough pre-call preparation directly correlates with meeting quality and win rate, yet it's the activity that consistently gets compressed or skipped when time is scarce. The average B2B sales rep spends 20-30% of their working week on research activities — pulling company information from LinkedIn, reading press releases, checking the prospect's website for recent announcements, reviewing past call notes, and trying to synthesize all of that into a coherent picture of the company's situation and how your product might fit. That's 8-12 hours per week — more than a full working day — spent on an activity that is almost entirely manual, non-standardized, and of wildly variable quality.

The quality problem is as significant as the time problem. When research is done under pressure — ten minutes before a discovery call, while commuting — the output is shallow: job title, company size, a LinkedIn headline skimmed. That information doesn't reveal what actually drives a compelling conversation: the company's strategic initiatives, the pressures their industry is currently facing, who has recently joined or departed in relevant roles, whether they've raised funding that changes their buying posture, or whether their competitor just announced a product that creates urgency. Research that stops at surface-level facts produces calls that feel like interrogations rather than consultations, where the rep asks basic questions the prospect expects the rep to already know.

The inconsistency problem compounds when managing a large territory. When reps are responsible for 50-200 accounts, pre-call research quality varies dramatically based on how important the rep judges the meeting to be, how much time is available, and how the rep's personal research skills compare to their peers. A rep who is strong at commercial analysis may be weak at reading organizational dynamics; a rep who excels at identifying trigger events may miss product-market fit signals. The absence of a systematic research framework means that research quality is as variable as the reps themselves, and managers have no visibility into whether calls are being approached with adequate preparation.

The downstream cost of poor research compounds across the funnel. Discovery calls that begin without genuine insight into the prospect's situation produce generic discovery questions that fail to uncover compelling pain. When reps don't understand the prospect's recent strategic moves, they miss the connection between those moves and the rep's value proposition. When they don't know who else in the buying group is relevant, they fail to suggest multi-threaded engagement early enough. Each of these research failures compounds into lower meeting-to-opportunity conversion, longer sales cycles, and weaker pipeline quality — all traceable back to the 10 minutes of rushed research done before a call that deserved an hour.

**How COCO Solves It**

COCO synthesizes prospect intelligence from structured inputs into a comprehensive, actionable pre-call brief — in minutes rather than hours — with consistent quality regardless of which rep is preparing.

1. **Company Context Synthesis**: COCO assembles a current, relevant company snapshot from provided information.
   - Summarizes company business model, revenue stage, customer profile, and market position
   - Identifies recent strategic priorities based on press releases, job postings, and announcements
   - Calculates estimated company size, growth trajectory, and financial posture based on available signals

2. **Trigger Event Identification**: COCO surfaces recent developments that create urgency or opportunity for your product.
   - Identifies funding rounds, leadership changes, acquisitions, or product launches in the past 90 days
   - Flags industry headwinds or regulatory changes affecting the prospect's sector
   - Highlights competitive dynamics that may create openness to new solutions

3. **Stakeholder Intelligence**: COCO synthesizes available information about key contacts to enable personalized, relevant conversations.
   - Builds mini-profiles for each known contact including tenure, likely priorities, and professional background
   - Identifies mutual connections, shared experiences, or conversation anchors
   - Maps likely relationships and reporting structures within the buying group

4. **Pain Hypothesis Generation**: COCO generates hypotheses about the prospect's likely pain points based on company context and your product's value proposition.
   - Connects company-specific context to the problems your product solves
   - Prioritizes hypotheses by likelihood based on industry patterns and company signals
   - Frames each hypothesis as a discovery question rather than an assumption

5. **Talking Point Recommendations**: COCO generates specific, contextual talking points for the opening and discovery portions of the call.
   - Suggests an opening reference that demonstrates genuine preparation without sounding rehearsed
   - Recommends which product capabilities to emphasize based on inferred priorities
   - Identifies topics to avoid based on known sensitivities or recent negative news

6. **Competitive Context**: COCO surfaces what's known about the prospect's current solutions and competitive alternatives.
   - Identifies tools the company likely uses based on job postings, team descriptions, and public integrations
   - Flags whether known competitors are active in the account
   - Suggests competitive positioning angles relevant to the prospect's likely evaluation criteria

**Measurable Results**

- **Research Time**: Pre-call preparation time drops from an average of 45-60 minutes to 10-15 minutes per meeting while producing more comprehensive intelligence
- **Discovery Call Quality**: Reps using structured pre-call briefs report 34% improvement in discovery-to-opportunity conversion, attributed to more relevant opening and more targeted questioning
- **Meeting-to-Proposal Rate**: Structured prospect intelligence improves the rate at which initial meetings advance to formal evaluation by 28%
- **Ramp Time for New Reps**: New reps using AI-synthesized research briefs reach full research productivity within 4 weeks versus 12 weeks for self-taught research approaches
- **Manager Confidence**: Sales managers report 40% improvement in confidence that reps are entering meetings adequately prepared when structured research briefs are part of the pre-call routine

**Who Benefits**

- **Account Executives**: Reclaim 6-10 hours per week previously spent on manual research, while entering every call with higher-quality intelligence than self-directed research typically produces
- **Sales Development Representatives**: Build meaningful personalization for outreach sequences without spending hours on each prospect, enabling genuine connection at the volume required for SDR roles
- **Sales Managers**: Gain the ability to review rep preparation quality before calls and coach on research interpretation, not just on product knowledge
- **Revenue Operations**: Standardize research quality across the team, enabling fair performance benchmarking and identifying rep skill gaps in intelligence interpretation

---
## Practical Prompts

**Prompt 1: Full Pre-Call Research Brief**
```
Generate a comprehensive pre-call research brief for the following prospect meeting.

My context:
- My company: [your company name]
- Product/service: [brief description]
- Value proposition: [1-2 sentences]
- Meeting type: [discovery / demo / follow-up / executive alignment]
- Meeting duration: [30/45/60 minutes]

Prospect details:
- Company: [prospect company name]
- Industry: [industry]
- Company size: [employees / revenue if known]
- My contact: [name, title]
- Other attendees: [list names and titles if known]
- How we got this meeting: [inbound / outbound / referral / conference]

Known context:
- Recent news or announcements: [paste or describe]
- Previous interactions: [describe any prior touchpoints]
- Reason for meeting / stated interest: [what they said they want to discuss]

Generate:
1. Company snapshot (4-5 bullets on business model, market position, recent trajectory)
2. Trigger events and why they're relevant to our conversation
3. Contact mini-profiles with likely priorities and conversation anchors
4. Top 3 pain hypotheses with evidence and discovery question for each
5. Recommended opening statement (3-4 sentences demonstrating preparation)
6. 5 targeted discovery questions in priority order
7. Topics or sensitivities to avoid
8. Competitive landscape note (what they likely use today)
```

**Prompt 2: Rapid 10-Minute Pre-Call Prep**
```
I have 10 minutes before a call. Give me a rapid pre-call brief.

Prospect: [name], [title] at [company]
Meeting purpose: [what this call is supposed to accomplish]

What I know:
[paste whatever you have — LinkedIn snippet, email thread, website blurb, or just the company name]

Give me:
1. Three things I should know about this company going into this call
2. Two hypotheses about why they might care about [your product/service]
3. One strong opening line that shows I did my homework
4. Three discovery questions to prioritize
5. One red flag or thing to watch for based on what you see
```

**Prompt 3: Account Trigger Event Monitor**
```
I have a list of target accounts I'm prospecting. Review the following recent news and information and identify which accounts have trigger events worth reaching out about this week.

My product: [description and primary value prop]
Target accounts list:
[Account 1 | Industry | Known contact if any]
[Account 2 | Industry | Known contact if any]
[Account 3 | Industry | Known contact if any]
[continue...]

Recent news/signals to analyze:
[paste recent news items, funding announcements, LinkedIn posts, press releases, or job postings]

For each account with a relevant trigger, provide:
1. The trigger event and why it's relevant to our value proposition
2. The urgency level (this week / this month / monitor)
3. A suggested outreach angle — what to say and why now
4. The specific contact to reach out to first
```

**Prompt 4: Executive Meeting Preparation Brief**
```
I'm meeting with a [C-level / VP-level] executive next week. Help me prepare a senior-level brief.

Executive details:
- Name: [name]
- Title: [title] at [company]
- Tenure: [how long in this role]
- Background: [brief career summary if known]
- Meeting context: [how this meeting was set up and what was discussed to get here]

Company context:
- Recent strategic announcements: [describe]
- Financial situation: [public company metrics / funding stage / growth signals]
- Known strategic priorities: [list what you know]

Our proposal context:
- What we're proposing: [describe]
- Expected investment level: [range]
- Key business case: [ROI thesis]

Prepare:
1. Executive's likely strategic priorities and how our solution maps to each
2. What this executive cares about that differs from their operational team
3. Three executive-level talking points (business impact, not features)
4. Anticipated executive objections and recommended responses
5. Suggested agenda for a 45-minute executive meeting
6. How to open the meeting to establish credibility in the first 2 minutes
```

**Prompt 5: Competitive Account Research Brief**
```
I'm entering a competitive evaluation. Help me research the prospect's likely perspective on the competitive landscape.

Prospect company: [company name]
Known competitors in this deal: [list competitors]
Deal stage: [current stage]
Evaluation criteria the prospect mentioned: [list if known]

Based on what's publicly available about this company's tech stack, hiring patterns, and stated priorities, help me understand:

1. What solutions they likely use today in this problem area (based on job postings, integrations, LinkedIn)
2. Why they might be evaluating alternatives now (timing trigger analysis)
3. What their evaluation criteria likely prioritize based on company profile and stated requirements
4. How each known competitor will likely position against us
5. Our strongest differentiators for THIS specific prospect (not generic positioning)
6. The specific proof points and references most likely to resonate with their profile
7. Questions I should ask to surface our competitive advantages without explicitly asking "why us over them?"
```

---
