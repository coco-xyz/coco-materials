# Use Case #032: AI Meeting Notes

**Role**: Project Manager / Team Lead / Executive Assistant / Operations | **Industry**: Any Industry | **Task**: Meeting Transcription, Action Item Extraction, Decision Documentation, Follow-Up Tracking

---

## Social Media Copy

I did an experiment last month. I tracked every meeting across our 40-person team for two weeks. The results: 247 meetings. An estimated 340 action items were discussed. Of those, 127 were written down (in various formats: Slack messages, personal notebooks, Google Docs nobody shared). Of those 127, 71 were followed up on. 56 were forgotten entirely.

That means 79% of action items discussed in meetings never happened. Not because people were lazy -- because nobody had a reliable system for capturing and tracking what was actually decided.

The meeting notes problem is universal. Someone volunteers to "take notes" (usually the most junior person, who should be paying attention instead). Their notes are incomplete. Key decisions are captured as vague summaries. Action items lack owners or deadlines. The notes get posted 2 days later when the context is already fading.

COCO's AI Meeting Notes changed our meeting culture:
- Joins every meeting (Zoom, Google Meet, Teams) and transcribes in real-time
- Generates structured notes within 5 minutes of meeting end: decisions made, action items with owners and deadlines, key discussion points, open questions
- Auto-posts to the right Slack channel and Notion page
- Tracks action items and sends reminders to owners before deadlines
- Generates weekly "decisions and commitments" digest for leadership

Action item completion: from 21% to 84%. "Wait, what did we decide in that meeting?" messages in Slack: down 90%. Nobody takes meeting notes manually anymore -- they actually participate instead.

---

## Detailed Introduction

**The Pain: Meetings Produce Decisions and Action Items That Immediately Vanish**

Professionals spend 31 hours per month in unproductive meetings (Atlassian research). But the bigger problem isn't the time in meetings -- it's the value lost after meetings. Decisions made in meetings aren't documented reliably. Action items aren't tracked. Commitments aren't followed up on. Three days later, people remember the meeting differently, and the whole conversation happens again.

Manual meeting notes are inherently flawed. The note-taker can't fully participate while writing. They capture what they think is important, not what the group decides is important. And notes taken during the meeting are often unstructured and incomplete.

**How COCO Solves It**

COCO's AI Meeting Notes captures everything, structures it, and ensures follow-through.

1. **Real-Time Transcription**: Joins meetings via calendar integration and produces accurate transcripts supporting multiple speakers and languages.

2. **Structured Note Generation**: Within minutes of meeting end, produces:
   - Executive summary (2-3 sentences)
   - Decisions made (with context and rationale)
   - Action items (with owner, deadline, and priority)
   - Key discussion points
   - Open questions and parking lot items

3. **Automated Distribution**: Posts notes to the right channels: Slack, Notion, Confluence, email -- based on meeting type and attendees.

4. **Action Item Tracking**: Assigns action items to individuals, sets reminders, tracks completion, and reports on follow-through rates.

5. **Meeting Analytics**: Provides insights on meeting patterns: frequency, duration, attendee overlap, decision-to-action completion rates.

6. **Searchable Archive**: All meeting notes are indexed and searchable. "What did we decide about pricing in Q1?" returns the exact meeting and decision.

**Measurable Results**

- **Action item completion**: From 21% to 84%
- **Time to distribute notes**: From 2 days to 5 minutes
- **"What did we decide?" questions**: Down 90%
- **Note-taking labor**: Eliminated (freeing participants to engage)
- **Meeting follow-through accountability**: Visible to all stakeholders
- **Institutional knowledge capture**: 100% of meetings documented vs. ~30% previously

---

---

## Practical Prompts

**Prompt 1: Structure Meeting Notes**
```
Convert these raw meeting notes/transcript into structured, actionable meeting documentation.

Meeting: [meeting name/purpose]
Date: [date]
Attendees: [list names and roles]
Duration: [X minutes]

Raw notes/transcript:
[paste unstructured notes or transcript]

Generate structured notes:
1. **Executive Summary** (2-3 sentences: what was the meeting about and what was the outcome)
2. **Decisions Made** (numbered list, each with context)
3. **Action Items** (table format: Item | Owner | Deadline | Priority)
4. **Key Discussion Points** (bullet summary of important topics discussed)
5. **Open Questions** (unresolved items for next meeting)
6. **Next Meeting** (date if scheduled, agenda items)

Format cleanly for posting in [Slack/Notion/email].
```

**Prompt 2: Generate Weekly Decisions Digest**
```
Compile a weekly decisions and commitments digest from these meeting notes.

Meeting notes from this week:
[paste or summarize notes from multiple meetings]

Generate a digest for leadership that includes:
1. **Key Decisions This Week** (decision, meeting where it was made, impact)
2. **Major Action Items** (item, owner, deadline, status)
3. **Risks and Blockers Raised** (issue, responsible team, mitigation)
4. **Upcoming Deadlines** (commitments coming due in the next 2 weeks)
5. **Items Needing Leadership Input** (decisions deferred, escalations)

Keep it scannable -- a busy executive should get the full picture in 2 minutes.
```

---
