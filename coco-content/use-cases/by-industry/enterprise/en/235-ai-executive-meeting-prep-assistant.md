# Use Case #235: AI Executive Meeting Prep Assistant

**Role**: Executive Assistant / Chief of Staff / C-Suite Executive | **Industry**: Enterprise, Professional Services, Financial Services, Technology | **Task**: Meeting Preparation, Executive Briefing, Scheduling, Stakeholder Management

---
## Detailed Introduction

**The Pain: Executives Walk Into High-Stakes Meetings Under-Prepared Because Good Prep Takes 3-4 Hours Nobody Has**

The research on meeting preparation is unambiguous: executives who enter high-stakes meetings with current intelligence on attendees, context on the relationship history, a clear sense of what the other party wants and why, and a prepared set of talking points are measurably more effective — they reach decisions faster, build stronger rapport, and leave meetings with clearer next steps. The problem is that thorough preparation for a single significant external meeting — a client QBR, a board member check-in, a partnership discussion with a new counterpart, a key hire interview — takes 3 to 4 hours when done properly. A CEO or VP running 8-12 significant external meetings per week simply cannot invest that time.

What actually happens is a tiered preparation failure. For the most important meetings — board presentations, major client negotiations, high-profile hires — executives carve out prep time and prepare thoroughly. For the middle tier — regular client check-ins, partnership meetings, industry peer calls — preparation is ad hoc and inconsistent. Executives skim a LinkedIn profile in the car on the way to the meeting, check their notes from the last conversation 30 seconds before the call starts, or rely on memory for context that happened 6 months ago. For the lower tier — scheduled check-ins, vendor reviews, internal stakeholder meetings — there is often no preparation at all. The result is meetings where the executive is reactive rather than leading the agenda, relationship context gets lost over time, and opportunities get missed because the executive wasn't positioned to recognize them.

The problem compounds with the executive assistant (EA) or chief of staff role. EAs at high-functioning organizations prepare briefing documents for important meetings — but this is a 1-2 hour task per document, and an EA supporting a full executive schedule can only cover 20-30% of meetings with proper briefing materials. The rest go uncovered. EAs end up spending their finite research time on the most important meetings while dozens of medium-importance meetings happen without adequate context.

**How COCO Solves It**

COCO's AI Executive Meeting Prep Assistant automatically prepares comprehensive briefing packages for every scheduled meeting — synthesizing LinkedIn, company news, CRM history, prior meeting notes, and the executive's stated objectives into a structured pre-meeting brief in minutes.

1. **Automated Attendee Intelligence**: Researches every meeting attendee from available sources and synthesizes a concise profile.
   - LinkedIn: role, tenure, career background, recent activity and posts, mutual connections, education
   - Company context: recent news, funding events, leadership changes, earnings announcements, strategic initiatives
   - CRM history: relationship timeline, prior deal stages, any open opportunities, support interactions
   - Prior meeting notes: key themes from past conversations, commitments made on both sides, unresolved items
   - Social signals: recent publications, conference appearances, public statements that indicate current priorities or concerns

2. **Relationship History Synthesis**: Reconstructs the arc of the executive's relationship with an external counterpart from all available records.
   - Summarizes the relationship timeline: how long have we known this person, how did the relationship originate, what have we worked on together
   - Identifies relationship health signals: frequency and tone of recent interactions, responsiveness, any friction points
   - Flags pending items: commitments made in prior meetings that haven't been followed up on, questions that were raised and never answered
   - Highlights the "last conversation context" so the executive can reference it naturally and demonstrate continuity of attention

3. **Agenda Intelligence and Objective Alignment**: Analyzes the stated meeting agenda against available context to surface likely hidden agendas and unspoken objectives.
   - Infers what the other party likely wants from the meeting based on their current situation (recent company news, career stage, known initiatives)
   - Identifies potential misalignments between the executive's objectives and the likely objectives of the other party
   - Flags any sensitive topics — things that may come up unexpectedly based on recent events — and prepares the executive with context
   - Generates a recommended "frame" for opening the meeting based on the relationship history and current context

4. **Talking Points and Question Preparation**: Generates ready-to-use talking points and strategic questions tailored to the specific meeting.
   - Produces 3-5 key messages the executive wants to land in this meeting, framed for the specific audience
   - Generates 4-6 high-value questions designed to uncover the other party's priorities, concerns, and decision criteria
   - Prepares potential objection responses for foreseeable push-back based on meeting context
   - Includes "relationship strengtheners" — specific observations about the attendee's recent work or achievements that can be referenced naturally

5. **Post-Meeting Capture and Follow-Through**: Enables rapid capture of meeting outcomes and automated follow-up action generation.
   - Structured post-meeting template populated with the pre-meeting context to make note-taking faster
   - Extracts and assigns follow-up actions from meeting notes with owners and due dates
   - Updates the relationship record with new context captured in the meeting
   - Schedules appropriate follow-up contacts based on the meeting outcome

**Measurable Results**

- **Meeting prep time**: Reduced from 45-90 minutes per significant meeting to 8-12 minutes of review — a 6-7x time saving
- **EA briefing document coverage**: EAs using COCO increase coverage from 20-30% of meetings with proper briefing to 85-95% of meetings
- **Post-meeting follow-through rate**: Executives report 67% improvement in follow-up action completion rate when using structured capture vs. unstructured notes
- **Relationship continuity score**: Executives using COCO reference prior conversation context in 78% of repeat meetings vs. 31% without structured prep — measurably improving relationship quality
- **Meeting objective achievement**: Self-reported rate of "achieving my primary objective in this meeting" improves from 54% to 71% when executives have proper pre-meeting briefs

**Who Benefits**

- **C-Suite Executives (CEO, CFO, VP Sales, etc.)**: Enter every meeting — not just the most important ones — with current intelligence and a clear agenda, turning every interaction into a relationship-building opportunity
- **Executive Assistants**: Produce comprehensive briefing packages for the full executive schedule rather than a limited subset, elevating the EA role from logistics coordinator to strategic enabler
- **Chiefs of Staff**: Prepare executives for board meetings, major external relationships, and strategic partnership conversations with the depth of intelligence that used to require a full day's preparation
- **Business Development and Partnership Teams**: Approach every external meeting with the full context of the commercial relationship, competitive intelligence, and strategic objectives aligned

---

## Practical Prompts

**Prompt 1: Pre-Meeting Intelligence Brief**
```
I have an important meeting in [X hours/days] and need a comprehensive briefing package.

Meeting details:
- Meeting type: [client QBR / new business development / board member check-in / partnership discussion / key hire interview / investor update / other]
- Date and duration: [date, start time, duration]
- My role in this meeting: [who I am, what I'm trying to achieve]

Attendees:
1. [Name, Title, Company] — [any notes you have about them]
2. [Name, Title, Company] — [any notes]
[add all attendees]

Context I can provide:
- How we know these people: [relationship history — how long, how we met, prior interactions]
- What I know about their company/situation: [any relevant news, challenges, or context]
- Our prior meeting notes (paste or summarize): [prior conversation content]
- What I want to achieve in this meeting: [my primary objective, secondary objectives]
- Any sensitive topics or concerns: [anything I'm worried about or want to navigate carefully]
- CRM notes / email context (optional): [paste relevant emails or CRM notes]

Please produce:
1. Attendee profiles: key background, recent activity, likely priorities for this meeting
2. Relationship summary: how would you characterize this relationship, what's the most important recent context?
3. Meeting intelligence: what does this person/company likely want from this meeting? Are there hidden agenda items to be aware of?
4. Recommended meeting frame: how should I open this meeting given the context?
5. 5 talking points I should hit — ranked by importance
6. 4 questions I should ask to advance my objectives
7. Any pre-meeting actions I should take before we meet
```

**Prompt 2: Board Member or Investor Pre-Meeting Brief**
```
I'm preparing for a [board meeting / investor check-in / LP update] with [name/organization].

Relationship context:
- Board member/investor: [name, firm, when they joined our board/invested]
- Their background: [relevant context about who they are]
- Our relationship history: [how the relationship has evolved]
- Last interaction: [when, what was discussed, any outstanding items]

Current company context (to share or discuss):
- Our current metrics: [key KPIs — revenue, growth rate, burn, key milestones hit or missed]
- What's going well: [top 2-3 wins]
- What's challenging: [top 1-2 challenges I need to discuss]
- What I need from them: [specific asks — introductions, advice on X, board approval of Y]

Known concerns:
- Topics they've raised before that I should have answers for: [list]
- Any metrics that may prompt questions: [flag anything that's below expectation]

Please produce:
1. A summary of what this stakeholder cares most about and how to frame the conversation for them specifically
2. Recommended agenda sequence: what to cover first, how to sequence the discussion
3. Talking points for the challenging topics — how to present them with context and a forward plan
4. The specific ask prepared as a clear, confident 2-3 sentence request
5. Questions to ask them to make this a two-way relationship conversation, not just a report-out
6. What to avoid or navigate carefully in this meeting
```

**Prompt 3: New Contact Meeting Preparation**
```
I'm meeting someone for the first time and need to prepare to make a strong first impression and advance a specific objective.

Meeting context:
- Who I'm meeting: [name, title, company]
- How this meeting came about: [mutual intro, inbound, outreach, conference, etc.]
- What I know about them: [paste their LinkedIn bio, any context you have]
- Their company: [what the company does, recent news if any]
- My objective for this meeting: [what I want to happen as a result of this conversation]

My context (what they likely already know about me):
- My role and company: [brief description]
- Why this meeting is relevant for them: [from their perspective, what's the value of this conversation?]

Please:
1. Identify 3 things about this person that I should reference naturally to demonstrate I've done my homework and build rapport
2. What do they likely want from this meeting? What's their probable "what's in it for me"?
3. What's the best opening for this conversation — how should I frame why we're talking?
4. 4-5 discovery questions to ask that are open-ended and uncover their priorities and challenges
5. How do I transition from discovery to advancing my objective — what's the right timing and phrasing?
6. What follow-up action should I propose at the end of this meeting to create forward momentum?
```

**Prompt 4: Meeting Follow-Up and Next Steps Capture**
```
I just completed a meeting and need to quickly capture the key outcomes and create a follow-up plan.

Meeting that just happened:
- Who I met with: [names and context]
- What we discussed (rough notes — paste or describe): [your post-meeting notes in any form]
- The key outcome: [what was decided, agreed, or concluded]
- Tone of the meeting: [how did it go — better than expected / as expected / more challenging than expected]

Pre-meeting brief context (if you have it):
- My stated objectives going in: [what I wanted to achieve]
- Prior relationship context: [what was relevant from before the meeting]

Please:
1. Summarize the meeting in 3-5 bullet points: what happened, what was decided
2. Did I achieve my primary objective? If not, what happened and what's the path forward?
3. Extract all action items — mine and theirs — with clear ownership and recommended due dates
4. Draft a follow-up email to send within 24 hours: confirm what was discussed, document commitments, propose next steps
5. What should I update in my relationship notes about this person based on what I learned?
6. Is there anything from this meeting that should change my approach or expectations going forward?
```

**Prompt 5: Weekly Executive Schedule Review and Prioritization**
```
I want to review my upcoming week of meetings and make sure I'm prepared and that my time is allocated to the right priorities.

My upcoming week:
[List your meetings for the week in any format — Monday through Friday, with: meeting title, attendees, duration, stated purpose]

My top priorities this week:
- Priority 1: [what's most important — a deal, a relationship, a decision to get made]
- Priority 2: [second priority]
- Priority 3: [third priority]

Current context:
- Key things happening in my work right now: [brief situation summary]
- Any meetings or relationships I'm particularly concerned about: [flag any]

Please:
1. Assess each meeting: high-value (strategic, must prepare), medium-value (routine, light prep), low-value (may not need me personally or could be async)
2. Identify which meetings I should prepare most thoroughly for and why
3. For the highest-priority 2-3 meetings, outline what prep I should do and what information I need
4. Are there any meetings this week where I'm likely to be asked questions I should anticipate and prepare answers for?
5. Identify any scheduling conflicts or back-to-back meetings where I'll have no recovery time — should any be rescheduled?
6. What's the one meeting this week where strong preparation would have the highest ROI for my priorities?
```

---
