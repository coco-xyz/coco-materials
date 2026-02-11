# Use Case #032: AI Meeting Notes

**Role**: Project Manager / Team Lead / Executive Assistant / Operations | **Industry**: Any Industry | **Task**: Meeting Transcription, Action Item Extraction, Decision Documentation, Follow-Up Tracking

---

## Part 1: Social Media Copy

### English

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

### 中文

上个月我做了一个实验。我追踪了40人团队两周内的每场会议。结果：247场会议。估计讨论了340个行动项。其中127个被记录了（以各种格式：Slack消息、个人笔记本、没人分享的Google Docs）。这127个中有71个被跟进了。56个完全被遗忘了。

这意味着79%在会议中讨论的行动项从未发生。不是因为人们懒——因为没人有一个可靠的系统来捕获和跟踪真正决定了什么。

会议笔记问题是普遍的。有人自愿"做笔记"（通常是最初级的人，而他们应该在认真听而非记录）。笔记不完整。关键决策被记为模糊的摘要。行动项没有负责人或截止日期。笔记2天后才发出，那时上下文已经模糊了。

COCO的AI Meeting Notes改变了我们的会议文化：
- 加入每场会议（Zoom、Google Meet、Teams）实时转录
- 会议结束后5分钟内生成结构化笔记：做出的决策、带负责人和截止日期的行动项、关键讨论要点、待解决问题
- 自动发布到正确的Slack频道和Notion页面
- 跟踪行动项并在截止日期前向负责人发送提醒
- 为领导层生成每周"决策和承诺"摘要

行动项完成率：从21%升至84%。Slack中"等等，那个会议我们决定了什么？"的消息：下降90%。再也没人手动做会议笔记了——他们终于在真正参与了。

---

## Part 2: Detailed Introduction

### English

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

## Part 3: Practical Prompts

### English

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

### 中文

**提示词 1: 结构化会议笔记**
```
将这些原始会议笔记/记录转换为结构化的、可操作的会议文档。

会议：[会议名称/目的]
日期：[日期]
参会人：[列出姓名和角色]
时长：[X分钟]

原始笔记/记录：
[粘贴非结构化笔记或记录]

生成结构化笔记：
1. **执行摘要**（2-3句话：会议关于什么，结果是什么）
2. **做出的决策**（编号列表，每个附背景）
3. **行动项**（表格格式：项目 | 负责人 | 截止日期 | 优先级）
4. **关键讨论要点**（讨论的重要主题要点摘要）
5. **待解决问题**（下次会议的未解决事项）
6. **下次会议**（如已安排的日期，议程项目）

格式化为可发布到[Slack/Notion/邮件]的清晰文档。
```

**提示词 2: 生成每周决策摘要**
```
从这些会议笔记中汇编每周决策和承诺摘要。

本周会议笔记：
[粘贴或总结多场会议的笔记]

为领导层生成摘要包括：
1. **本周关键决策**（决策、在哪场会议做出的、影响）
2. **主要行动项**（项目、负责人、截止日期、状态）
3. **提出的风险和阻碍**（问题、负责团队、缓解措施）
4. **即将到来的截止日期**（未来2周到期的承诺）
5. **需要领导层输入的事项**（推迟的决策、升级事项）

保持可快速扫读——忙碌的高管应该在2分钟内获得全貌。
```
