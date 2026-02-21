# Use Case #273: AI Email Triage and Drafting Assistant

**Role**: Executive / Personal Assistant | **Industry**: Enterprise, Professional Services, Financial Services, Technology | **Task**: Email Management, Executive Communications, Productivity

---

## Detailed Introduction

**The Pain: Executives Spend 2-3 Hours Per Day on Email While Most of It Doesn't Require Their Direct Attention**

Email has become the primary productivity tax on executive time. Studies consistently show that senior executives spend 2.5 to 3 hours per day managing email — reading, sorting, responding, delegating, and archiving. Across a 250-day working year, that is 625 to 750 hours invested in email management. Of that volume, research by McKinsey estimates that only 30 to 35 percent of the emails an executive receives actually require their direct personal response. The remaining 65 to 70 percent fall into categories that could be handled by delegation, template responses, brief acknowledgments, or simply monitoring without response.

The cost is not just time — it is the cognitive switching cost of email interruption. A study from UC Irvine found that the average professional takes 23 minutes to return to a state of focused work after an email interruption. Executives who treat email as a background task that they process throughout the day are operating in a chronic state of divided attention. The highest-value cognitive work — strategy, creative problem-solving, complex decision-making — requires sustained focus that email interruption systematically undermines.

The drafting problem compounds the time cost. When an executive does need to respond personally, the quality and tone of the response matters enormously. A thoughtful reply to a key client, a carefully calibrated response to a board member's concern, a professionally managed difficult message to an internal senior leader — these require more than a few minutes of composition. Executives frequently draft responses under time pressure, under incomplete information, without the right context, and with insufficient attention to the nuance the relationship requires. The result is responses that are shorter than the relationship warrants, that miss the underlying concern being expressed, or that create unnecessary friction.

The delegation problem is the third layer. When an executive identifies an email as something they should not personally handle, the handoff to an EA or team member is itself time-consuming: forwarding with context, explaining what's needed, following up on the outcome. Without a structured system, delegation via email creates a secondary inbox problem — a thread of forwarded emails, with context spread across multiple messages, where it is unclear whether anything was actually done.

**How COCO Solves It**

COCO's AI Email Triage and Drafting Assistant transforms email from a reactive time sink into a structured, manageable workflow that gives executives decision-making control without requiring them to personally process every message.

1. **Intelligent Email Triage and Priority Classification**: COCO analyzes incoming email content and metadata to generate a prioritized triage — surfacing what requires the executive's attention now, what can wait, and what doesn't need direct executive involvement at all.
   - Urgency classification: immediately actionable (decision required, time-sensitive request, executive-only response) vs. monitor (FYI, no response needed) vs. delegate (can be handled at the assistant or team level)
   - Sender relationship context: weights by sender category — board members, key clients, investors, direct reports, vendors, media, unknown parties
   - Topic sensitivity flagging: identifies emails containing legal, PR, financial, or personnel sensitivities that may require careful handling
   - Thread summarization: for long email chains, produces a 3-5 sentence summary of the key issue, current status, and what decision or response is needed now

2. **Draft Response Generation**: For emails that require the executive's direct response, COCO generates a full draft that the executive can review, refine, and send — rather than composing from scratch.
   - Tone calibration: adjusts formality, warmth, and directness based on the executive's relationship with the sender and the content of the message
   - Context integration: incorporates relevant context the executive provides — prior meeting outcomes, relevant company information, relationship history — into the draft
   - Strategic frame: for complex or sensitive messages, identifies the strategic objective of the response and structures the draft to achieve it
   - Alternative drafts: for ambiguous situations, generates 2-3 versions at different tones or stances for the executive to choose from

3. **Delegation Protocol**: COCO transforms informal delegation into a structured workflow that ensures accountability and follow-through.
   - Generates a delegation brief: who should handle this, exactly what action is needed, what tone to use, what outcome to report back
   - Creates follow-up checkpoints: flags when delegated items haven't had a response within defined timeframes
   - Maintains delegation log: tracks what was delegated, to whom, when, and the current status — preventing the "I thought you were handling it" failure mode

4. **Template and Pattern Library**: For recurring email types, COCO builds and refines a library of templates calibrated to the executive's voice and the company's communication standards.
   - Common response patterns: meeting request responses, event invitation declines, introduction facilitation, inquiry acknowledgments, follow-up nudges
   - Voice calibration: learns from the executive's existing email patterns to match tone, sentence structure, and communication style
   - Quick customization: templates are structured with [placeholder] fields for the personalization that makes template responses feel genuine

5. **Weekly Email Analytics**: COCO provides a weekly summary of email patterns to help executives and their assistants identify structural improvements.
   - Volume by sender category and time of day
   - Response time performance vs. targets
   - Topics and senders consuming disproportionate executive attention
   - Recurring email types that could be templated or delegated systematically

**Measurable Results**

- **Daily email management time**: Reduced from 2.5-3 hours to 45-75 minutes through triage, delegation, and draft-first workflows — a 60% time saving
- **Response quality**: Executives report a 40% improvement in the quality and completeness of responses when using AI-drafted first drafts vs. composing under time pressure
- **Delegation follow-through**: Structured delegation protocol reduces dropped delegation items from an average of 23% to under 7%
- **Inbox zero achievement**: Executives using structured triage reach inbox-zero state 4x more frequently than without a triage system
- **Focus protection**: Batch email processing enabled by triage reduces email-driven interruptions by 70%, protecting 90+ minutes of focused work per day

**Who Benefits**

- **C-Suite Executives (CEO, President, Managing Director)**: Regain 90+ minutes of daily focus time previously lost to reactive email processing, while maintaining or improving communication quality
- **Executive Assistants**: Gain a structured system for handling the executive's email on their behalf, with clear triage logic and delegation protocols that don't require constant judgment calls
- **Chiefs of Staff**: Manage complex communication threads involving multiple stakeholders, ensuring nothing falls through the cracks and the executive's attention is directed where it matters most
- **Senior Leaders and VPs**: Tame the email volume that comes with organizational scale, without sacrificing relationship quality in key external and board-level communications

---

## Practical Prompts

**Prompt 1: Inbox Triage and Prioritization**
```
I need help triaging my inbox. Below is a summary of emails I've received today. Please classify each and tell me what to do with it.

My role and context: [your title, company, current top priorities this week]

Emails to triage (paste subjects, senders, and brief summaries or first few lines):
1. From: [sender name / relationship to you] | Subject: [subject line] | Preview: [first line or brief description of content]
2. From: [sender name / relationship to you] | Subject: [subject line] | Preview: [first line or brief description of content]
3. [continue for all emails]

For each email, please:
1. Priority level: [URGENT — respond today] / [IMPORTANT — respond within 48 hours] / [ROUTINE — can batch with low-priority replies] / [MONITOR — no response needed] / [DELEGATE — doesn't need me personally]
2. Recommended action: [respond personally / delegate to X / archive / schedule for later / other]
3. If delegate: who should handle it and what should they do?
4. If respond: what's the core message I need to convey in my reply?

Then give me:
- Top 3 emails requiring my immediate personal attention and why
- Any emails with hidden urgency or sensitivity I should be aware of
```

**Prompt 2: Draft a Response to a Sensitive or Complex Email**
```
I need to draft a response to an email I received. This requires careful thought — please help me craft the right message.

The email I received:
[Paste the full email or describe it in detail]

Sender context:
- Who they are: [name, title, relationship to me — client / board member / investor / team member / media / other]
- Our relationship history: [how long we've known each other, current state of relationship]
- What they likely want from my response: [their underlying ask or concern]

My objectives for this response:
- What I want to achieve: [outcome I want — maintain the relationship / decline gracefully / buy time / commit to action / defuse tension / other]
- Tone I want to strike: [warm but firm / direct / empathetic / professional / collaborative]
- What I want to avoid: [committing to something I can't deliver / escalating tension / sounding dismissive / other]

Relevant context you should weave in:
- [Any relevant facts, prior conversations, or context that should inform this response]

Please draft:
1. A primary response that achieves my objectives
2. An alternative version if the tone needs to be adjusted
3. A note on anything I should be careful about or could be misread in this response
```

**Prompt 3: Decline or Defer an Email Request Gracefully**
```
I've received a request that I need to decline or defer, and I want to do it in a way that preserves the relationship.

The request: [describe what's being asked — speaking at an event / joining a board / scheduling a meeting / providing an introduction / other]
Who's asking: [name, title, organization, relationship to me]
Why I can't or won't do it: [honest reason — too busy / not the right fit / policy / bandwidth / other]

What I want to preserve:
- The relationship: [how important is this relationship long-term?]
- Their goodwill: [do I care if they're disappointed? How much?]
- The door open: [do I want to leave room for future engagement?]

Please draft a response that:
1. Declines clearly — no vague language that leaves them thinking it might still happen
2. Gives a genuine-sounding reason without oversharing or undermining my position
3. Acknowledges the value of what they're doing or the legitimacy of the ask
4. Leaves the relationship in a good place
5. If appropriate, offers an alternative that genuinely helps them (a referral, a different form of support, a future date)
```

**Prompt 4: Draft a Follow-Up or Nudge Email**
```
I need to follow up on something and want the message to be effective without being pushy or creating awkwardness.

What I'm following up on:
- Original request or conversation: [what was asked, discussed, or agreed]
- When the original message was sent: [date]
- What was expected: [a response / a deliverable / a decision / other]
- Current status: [nothing received / partial response / still waiting / other]

Who I'm following up with:
- Name and relationship: [their name, how we know each other]
- Why they may not have responded: [likely reason — busy / deprioritized / unclear on what's needed / other]

My objective in this follow-up:
- I need: [what specific outcome I want from this message]
- Tone target: [warm and gentle / businesslike / slightly more direct than last time / other]
- Consequence if no response: [what happens next — I'll need to escalate / find another path / it's time-sensitive because X]

Please draft a follow-up message that:
1. Reminds them of the context without making them feel bad for not responding
2. States clearly what I need and by when
3. Makes it easy for them to respond quickly
4. Matches the relationship tone appropriately
```

**Prompt 5: Build a Template Response Library for Recurring Email Types**
```
I want to build a set of email templates for the types of messages I send most frequently, so my EA and I can respond faster without losing the personal touch.

My role: [title, company type, industry]
My communication style (describe how you typically write): [formal/casual, direct/warm, brief/detailed]

Recurring email types I send often (check all that apply and add specifics):
1. Meeting request responses — [who usually requests meetings with you: clients / investors / press / job seekers / other]
2. Event/speaking invitation declines — [type of events you're most often invited to]
3. Introduction requests from my network — [who asks you for intros most: founders / job seekers / salespeople / other]
4. Inbound sales/vendor pitches — [how you prefer to handle them]
5. Media/press inquiries — [your standard approach]
6. Follow-up nudges to your own team — [what you typically follow up on]
7. Thank you notes post-meeting — [what types of meetings you send these after]
8. Other: [any other recurring type I send]

For each type I've listed, please create:
1. A template with [PLACEHOLDER] fields for the key personalization points
2. A 2-3 line note on when to use this template vs. when to write personally
3. Tone guidance: how to keep it feeling genuine even when templated
```

---
