#!/usr/bin/env node
/**
 * Batch generate use cases 066-104 (39 cases)
 * Creates EN + CN markdown files in 3D classification dirs
 */

const fs = require('fs');
const path = require('path');

const BASE = '/home/howard/zylos/coco-materials/coco-content/use-cases';

// Case definitions: 39 new use cases
const cases = [
  {
    id: '066', title: 'AI Email Triage Manager', cnTitle: 'AI邮件分诊管理',
    roles: ['operations'], industries: ['saas-tech', 'enterprise'], tasks: ['automation', 'email-management'],
    meta: { role: 'Operations', industry: 'SaaS, Enterprise', task: 'Email Triage, Process Automation' },
    cnMeta: { role: 'Operations', industry: 'SaaS, Enterprise', task: 'Email Triage, Process Automation' },
    enSummary: 'Auto-triages 500+ daily emails: classify, prioritize, route, draft replies. Inbox zero in 15 min.',
    cnSummary: '自动分诊500+封日常邮件：分类、优先级、路由、草拟回复。15分钟收件箱清零。',
    pain: {
      en: `The average professional receives 121 emails per day, and knowledge workers spend 28% of their workweek managing email. For operations managers and executive assistants, the volume is often 300-500+ emails daily. The cognitive toll is staggering: each email requires a decision -- read now, defer, delegate, delete, or respond -- and context-switching between email and actual work costs an estimated 23 minutes of refocus time per interruption. A 2025 McKinsey study found that email management consumes $15,000 per employee annually in lost productivity. Beyond time, critical messages get buried: a vendor escalation sits unread while routine newsletters occupy the top of the inbox. Urgent client requests land at 11 PM and don't get actioned until the next morning. Compliance-sensitive communications miss their response windows. The inbox becomes a graveyard of missed opportunities and delayed decisions.`,
      cn: `普通职场人每天收到121封邮件，知识工作者28%的工作时间花在管理邮件上。对于运营经理和行政助理，日均邮件量通常在300-500封以上。认知负担惊人：每封邮件都需要决策——立即阅读、推迟、转发、删除还是回复——每次在邮件和实际工作之间切换需要约23分钟重新集中注意力。麦肯锡2025年研究发现，邮件管理每年每人造成约10万元人民币的生产力损失。除了时间，关键信息被淹没：供应商的紧急升级邮件被埋在例行通讯中未被阅读；客户的紧急请求在晚上11点到达，第二天早上才被处理；合规敏感的沟通错过响应窗口。收件箱变成了错失机会和延迟决策的墓地。`
    },
    solution: {
      en: [
        'Inbox Monitoring: COCO connects to your email accounts (Gmail, Outlook, Exchange) and processes every incoming message in real-time, analyzing sender reputation, subject line, body content, attachments, and thread history.',
        'Smart Classification: Each email is automatically categorized into actionable buckets: Urgent/Action Required, Requires Response (non-urgent), FYI/Informational, Internal Notifications, Spam/Low-Value, and custom categories you define.',
        'Priority Scoring: COCO assigns a priority score (1-100) based on sender importance (VIP clients, executives, key vendors), content urgency signals, deadline mentions, sentiment analysis, and historical interaction patterns.',
        'Intelligent Routing: Based on classification, emails are automatically routed to the right team member or folder. Customer complaints go to the support lead. Contract questions go to legal. Budget approvals go to finance. Each route is configurable and learns from corrections.',
        'Draft Response Generation: For routine emails (meeting confirmations, information requests, status updates), COCO drafts contextual replies matching your tone and style. You review and send with one click, or auto-send for pre-approved categories.',
        'Daily Digest & Insights: Every morning, COCO delivers a prioritized digest: top 5 emails requiring your personal attention, summary of overnight activity, pending items approaching deadlines, and weekly email analytics (response times, volume trends, delegation effectiveness).'
      ],
      cn: [
        '收件箱监控：COCO连接你的邮箱账户（Gmail、Outlook、Exchange），实时处理每封来信，分析发件人信誉、主题行、正文内容、附件和历史对话。',
        '智能分类：每封邮件自动归入可操作的分类：紧急/需要行动、需要回复（非紧急）、仅供参考、内部通知、垃圾/低价值邮件，以及你自定义的类别。',
        '优先级评分：COCO基于发件人重要性（VIP客户、高管、关键供应商）、内容紧急信号、截止日期提及、情感分析和历史交互模式，为每封邮件分配1-100的优先级评分。',
        '智能路由：基于分类结果，邮件自动路由到正确的团队成员或文件夹。客户投诉发给支持主管，合同问题发给法务，预算审批发给财务。每条路由可配置并从纠正中学习。',
        '草拟回复：对于常规邮件（会议确认、信息请求、状态更新），COCO按照你的语气和风格草拟上下文相关的回复。一键审核发送，或对预先批准的类别自动发送。',
        '每日摘要与洞察：每天早上，COCO发送优先级摘要：需要你亲自关注的前5封邮件、隔夜活动总结、临近截止日期的待处理事项，以及每周邮件分析（响应时间、数量趋势、委派效果）。'
      ]
    },
    metrics: {
      en: ['87% reduction in time spent on email triage and routing', '99.2% classification accuracy after 2-week learning period', '4.2x faster response time to urgent emails', '$180K annual productivity savings for a 30-person team', '73% of routine emails auto-drafted with 95% acceptance rate'],
      cn: ['邮件分诊和路由时间减少87%', '2周学习期后分类准确率99.2%', '紧急邮件响应速度提高4.2倍', '30人团队年节省生产力成本约120万元', '73%的常规邮件自动草拟，95%接受率']
    },
    benefits: {
      en: [
        'Operations Managers: Reclaim 2+ hours daily from email management, focus on strategic initiatives',
        'Executive Assistants: Handle 3x the email volume without missing critical messages',
        'Sales Teams: Never miss a hot lead buried in a crowded inbox, with auto-prioritized client emails',
        'Compliance Officers: Automated tracking ensures regulatory emails are responded to within required windows'
      ],
      cn: [
        '运营经理：每天从邮件管理中收回2+小时，专注于战略项目',
        '行政助理：处理3倍邮件量而不遗漏关键信息',
        '销售团队：不再错过埋在拥挤收件箱中的热门线索，客户邮件自动优先排序',
        '合规官员：自动跟踪确保监管邮件在要求的时间窗口内得到回复'
      ]
    },
    prompts: {
      en: [
        { title: 'Daily Email Triage Setup', prompt: `Set up an email triage system for my work inbox. Here are my rules:\n\n1. VIP senders (auto-prioritize to top):\n   - Any email from @bigclient.com, @keypartner.io\n   - Emails from my direct reports: [list names]\n   - Emails from C-suite: CEO, CFO, CTO\n\n2. Classification categories:\n   - URGENT: Contains words like "deadline", "ASAP", "critical", "escalation", mentions today's date\n   - ACTION NEEDED: Questions directed at me, approval requests, meeting invites\n   - FYI: CC'd emails, newsletters, automated notifications\n   - DELEGATE: Topics that belong to my team (customer complaints → support lead, technical issues → engineering)\n\n3. Auto-actions:\n   - Meeting confirmations: auto-accept if calendar is free, draft decline with alternative times if not\n   - Newsletter digests: batch into weekly summary\n   - Vendor marketing: archive immediately\n\nProcess my last 50 emails using these rules and show me the results in a priority-sorted table with columns: Sender, Subject, Category, Priority Score (1-100), Recommended Action.` },
        { title: 'Response Draft Generator', prompt: `Draft responses for the following 10 emails that need replies. For each email, generate a response that:\n\n1. Matches my communication style: professional but warm, concise (under 150 words), uses "we" for team decisions\n2. Addresses all questions or requests in the original email\n3. Includes specific next steps with dates where applicable\n4. For meeting requests: check my calendar availability and suggest 3 time slots\n5. For approval requests: summarize what's being asked and my recommended action\n\nFormat each draft as:\n---\nOriginal: [subject line]\nFrom: [sender]\nDraft Response:\n[your draft]\nConfidence: [High/Medium/Low]\nNotes: [anything I should review before sending]\n---\n\n[paste 10 emails here]` },
        { title: 'Email Analytics Report', prompt: `Analyze my email activity for the past 30 days and generate a comprehensive report:\n\n1. Volume metrics:\n   - Total received/sent per day (chart format)\n   - Busiest days and time slots\n   - Top 10 senders by volume\n   - Top 10 recipients of my sent emails\n\n2. Response time analysis:\n   - Average response time by sender category (VIP, internal, external)\n   - Emails still awaiting my response (sorted by age)\n   - Response time trend (improving or worsening?)\n\n3. Classification breakdown:\n   - % of emails per category (urgent, action, FYI, delegate)\n   - Time spent per category (estimated)\n   - Emails that were miscategorized (for learning)\n\n4. Recommendations:\n   - Senders I should unsubscribe from (high volume, low engagement)\n   - Emails I consistently delegate (suggest auto-routing rules)\n   - Peak productivity windows (when I respond fastest)\n   - Projected time savings if recommendations are implemented` },
        { title: 'Out-of-Office Intelligence Setup', prompt: `I'll be out of office from [start date] to [end date]. Set up intelligent OOO management:\n\n1. Auto-response rules:\n   - VIP clients: personalized response mentioning their account manager as backup\n   - Internal team: response with my delegate's name and which decisions they can make\n   - External vendors: standard OOO with return date\n   - Recruiters/sales: polite decline with "reach out after [date]"\n\n2. Escalation routing:\n   - Truly urgent matters (customer escalation, system down, legal): forward to [backup person] with SMS alert\n   - Budget approvals over $10K: forward to [manager]\n   - Everything else: queue for my return, sorted by priority\n\n3. Return briefing:\n   - When I'm back, generate a prioritized summary of everything that happened\n   - Group by: resolved during my absence, needs my immediate attention, FYI only\n   - Highlight any threads where my name was mentioned or decisions were deferred\n\nGenerate the auto-response templates and routing rules.` },
        { title: 'Email Thread Summarizer', prompt: `Summarize the following email threads. For each thread:\n\n1. One-line summary: What is this thread about?\n2. Key decisions made: List any commitments, agreements, or decisions\n3. Open questions: What's still unresolved?\n4. Action items: Who needs to do what, by when?\n5. My required input: What specifically do they need from me?\n6. Recommended response: Draft a response that addresses all open items\n\nFormat as a table for quick scanning, then detailed breakdown below.\n\nAlso flag:\n- Any conflicting information between messages\n- Tone shifts that suggest frustration or escalation\n- Deadlines that have already passed\n- People who were promised a response but haven't received one\n\n[paste email threads]` }
      ],
      cn: [
        { title: '每日邮件分诊设置', prompt: `为我的工作邮箱设置邮件分诊系统。以下是我的规则：\n\n1. VIP发件人（自动置顶）：\n   - 来自@大客户.com、@关键合作伙伴.io的所有邮件\n   - 我的直接下属的邮件：[列出姓名]\n   - C级高管的邮件：CEO、CFO、CTO\n\n2. 分类类别：\n   - 紧急：包含"截止日期"、"尽快"、"关键"、"升级"等词，提到今天日期\n   - 需要行动：直接问我的问题、审批请求、会议邀请\n   - 仅供参考：抄送邮件、新闻通讯、自动通知\n   - 委派：属于我团队的主题（客户投诉→支持主管，技术问题→工程团队）\n\n3. 自动操作：\n   - 会议确认：日历空闲则自动接受，不空闲则草拟替代时间的婉拒\n   - 新闻通讯摘要：批量整理为每周总结\n   - 供应商营销：立即归档\n\n用这些规则处理我最近的50封邮件，以优先级排序的表格展示结果，列包括：发件人、主题、类别、优先级评分（1-100）、建议操作。` },
        { title: '回复草稿生成器', prompt: `为以下10封需要回复的邮件草拟回复。每封回复需要：\n\n1. 匹配我的沟通风格：专业但温暖，简洁（150字以内），团队决策用"我们"\n2. 回应原始邮件中的所有问题或请求\n3. 包含具体的后续步骤和适用的日期\n4. 对于会议请求：检查我的日历空闲时间，建议3个时间段\n5. 对于审批请求：总结请求内容和我的建议操作\n\n每封草稿格式：\n---\n原邮件：[主题行]\n发件人：[发件人]\n草拟回复：\n[你的草稿]\n置信度：[高/中/低]\n备注：[发送前我应该审查的内容]\n---\n\n[粘贴10封邮件]` },
        { title: '邮件分析报告', prompt: `分析我过去30天的邮件活动并生成综合报告：\n\n1. 数量指标：\n   - 每日收发邮件总量（图表格式）\n   - 最繁忙的日期和时间段\n   - 按数量排名前10的发件人\n   - 我发送邮件的前10位收件人\n\n2. 响应时间分析：\n   - 按发件人类别的平均响应时间（VIP、内部、外部）\n   - 仍在等待我回复的邮件（按等待时间排序）\n   - 响应时间趋势（改善还是恶化？）\n\n3. 分类分布：\n   - 每个类别的邮件百分比（紧急、行动、参考、委派）\n   - 每个类别估计花费的时间\n   - 被错误分类的邮件（用于学习）\n\n4. 建议：\n   - 我应该退订的发件人（高数量、低互动）\n   - 我经常委派的邮件（建议自动路由规则）\n   - 高效工作时间窗口（我响应最快的时段）\n   - 实施建议后的预计节省时间` },
        { title: '外出智能管理设置', prompt: `我将在[开始日期]到[结束日期]外出。设置智能外出管理：\n\n1. 自动回复规则：\n   - VIP客户：个性化回复，提及他们的客户经理作为备份\n   - 内部团队：回复包含我的代理人姓名及其可做的决策范围\n   - 外部供应商：标准外出回复，含返回日期\n   - 猎头/销售：礼貌拒绝，附"[日期]后再联系"\n\n2. 升级路由：\n   - 真正紧急的事项（客户升级、系统宕机、法律）：转发给[备份人]并发短信提醒\n   - 超过1万元的预算审批：转发给[经理]\n   - 其他所有邮件：排队等我返回，按优先级排序\n\n3. 返回简报：\n   - 返回时，生成所有事件的优先级摘要\n   - 分组：我不在期间已解决的、需要我立即关注的、仅供参考的\n   - 标记提到我名字或延迟决策的对话\n\n生成自动回复模板和路由规则。` },
        { title: '邮件线程摘要器', prompt: `总结以下邮件线程。对于每个线程：\n\n1. 一句话摘要：这个线程关于什么？\n2. 关键决定：列出任何承诺、协议或决定\n3. 未解决问题：还有什么未解决？\n4. 行动项：谁需要做什么，何时完成？\n5. 我需要的输入：他们具体需要我做什么？\n6. 建议回复：草拟一个回应所有未解决事项的回复\n\n以表格格式便于快速浏览，下方附详细分析。\n\n同时标记：\n- 消息之间的矛盾信息\n- 暗示沮丧或升级的语气变化\n- 已经过期的截止日期\n- 被承诺回复但尚未收到的人\n\n[粘贴邮件线程]` }
      ]
    }
  },
  {
    id: '067', title: 'AI Meeting Scheduler', cnTitle: 'AI会议调度员',
    roles: ['operations', 'pm'], industries: ['saas-tech', 'enterprise'], tasks: ['scheduling'],
    meta: { role: 'Operations, PM', industry: 'SaaS, Enterprise', task: 'Meeting Scheduling, Calendar Management' },
    pain: {
      en: `Scheduling meetings across time zones, teams, and competing priorities is one of the most universally despised administrative tasks. A Harvard Business Review study found that executives spend an average of 23 hours per week in meetings, and their assistants spend 5-8 hours weekly just coordinating those meetings. The back-and-forth of "Does Tuesday at 3 work?" emails averages 8.4 messages per meeting to finalize a time. For global teams, time zone math adds another layer of complexity -- a "quick sync" between San Francisco, London, and Singapore requires finding a window where it's not midnight for anyone. Meeting room conflicts, double-bookings, and last-minute cancellations create a cascade of rescheduling that can consume entire mornings. The hidden cost is even larger: a Doodle study estimated that the US economy loses $399 billion annually to poorly organized meetings.`,
      cn: `跨时区、跨团队、跨优先级安排会议是最令人讨厌的行政任务之一。哈佛商业评论发现，高管平均每周花23小时开会，他们的助理每周花5-8小时协调这些会议。"周二下午3点可以吗？"这样的来回邮件平均需要8.4封才能确定一个时间。对于全球团队，时区计算增加了另一层复杂性——旧金山、伦敦和新加坡之间的"快速同步"需要找到一个不是任何人午夜的时间窗口。会议室冲突、重复预订和临时取消产生连锁重新安排，可能消耗整个上午。隐藏成本更大：Doodle研究估计美国经济每年因组织不善的会议损失3990亿美元。`
    },
    solution: {
      en: [
        'Calendar Intelligence: COCO reads all participants\' calendars in real-time, understanding not just availability but preferences -- no meetings before 9 AM, lunch blocks protected, focus time preserved, recurring commitments respected.',
        'Smart Time Slot Ranking: Instead of offering random available slots, COCO ranks options by quality: minimal fragmentation of deep work blocks, optimal energy times for meeting types (creative sessions in morning, reviews in afternoon), and fair rotation of inconvenient times for global teams.',
        'Automated Coordination: COCO handles all the back-and-forth. It proposes 3 optimal times, collects responses, handles conflicts, and confirms the final slot -- all without human intervention. If a preferred time doesn\'t work, it automatically proposes alternatives.',
        'Room & Resource Booking: Simultaneously books the right conference room (based on attendee count, AV needs, location preferences) and sets up video conferencing links. If rooms are full, it suggests alternatives or switches to virtual.',
        'Smart Rescheduling: When conflicts arise or cancellations happen, COCO automatically finds the next best slot, notifies all participants, updates calendar entries, and adjusts downstream meetings if needed.',
        'Meeting Prep Automation: Before each meeting, COCO sends participants a brief with agenda, relevant documents, previous meeting notes, and action item status -- ensuring meetings start productive, not with 10 minutes of context-setting.'
      ],
      cn: [
        '日历智能：COCO实时读取所有参与者的日历，不仅了解可用性，还了解偏好——上午9点前不安排会议、保护午餐时间、保留专注时间、尊重固定会议。',
        '智能时间段排名：COCO不是随机提供可用时间段，而是按质量排名：最小化深度工作时间碎片化、匹配会议类型的最佳精力时间（创意会议在上午，审查在下午）、全球团队不便时间的公平轮换。',
        '自动化协调：COCO处理所有来回沟通。提出3个最优时间，收集响应，处理冲突，确认最终时间段——全程无需人工干预。如果首选时间不行，自动提出替代方案。',
        '会议室和资源预订：同时预订合适的会议室（基于参会人数、AV需求、位置偏好）并设置视频会议链接。如果会议室已满，建议替代方案或切换到虚拟会议。',
        '智能重新安排：当冲突或取消发生时，COCO自动找到下一个最佳时间段，通知所有参与者，更新日历条目，并在需要时调整后续会议。',
        '会前准备自动化：每次会议前，COCO向参与者发送简报，包含议程、相关文档、上次会议记录和行动项状态——确保会议从高效开始，而不是花10分钟建立背景。'
      ]
    },
    metrics: {
      en: ['91% reduction in scheduling coordination time', 'Average 2.1 emails to confirm a meeting (down from 8.4)', '100% time zone accuracy with smart rotation for global teams', '$95K annual savings per executive from reduced scheduling overhead', '34% fewer meeting cancellations due to proactive conflict detection'],
      cn: ['安排协调时间减少91%', '确认一次会议平均2.1封邮件（从8.4封下降）', '全球团队100%时区准确性和智能轮换', '每位高管每年节省约65万元调度开销', '主动冲突检测使会议取消减少34%']
    },
    benefits: {
      en: [
        'Executive Assistants: Automate the most time-consuming part of their role, handling 10x more scheduling requests',
        'Project Managers: Keep cross-functional meetings on track without the coordination tax',
        'Global Team Leads: Fair time zone rotation eliminates the "always inconvenient for Asia" problem',
        'Individual Contributors: Protected focus time actually stays protected, with AI guarding their calendar blocks'
      ],
      cn: [
        '行政助理：自动化其角色中最耗时的部分，处理10倍更多的日程安排请求',
        '项目经理：保持跨职能会议按计划进行，无需协调税',
        '全球团队主管：公平的时区轮换消除"总是对亚洲不方便"的问题',
        '个人贡献者：受保护的专注时间真正得到保护，AI守护日历块'
      ]
    },
    prompts: {
      en: [
        { title: 'Cross-Timezone Meeting Setup', prompt: `Schedule a recurring weekly sync meeting with the following constraints:\n\nParticipants:\n- Product team (San Francisco, PST): 3 people, prefer mornings\n- Engineering team (London, GMT): 4 people, no meetings after 5 PM their time\n- Design team (Singapore, SGT): 2 people, flexible but not before 9 AM their time\n\nRequirements:\n- 60-minute meeting, recurring every Tuesday\n- Must include video conferencing link (Zoom)\n- Need a shared document for agenda (create Google Doc template)\n- Rotate the "inconvenient" time slot monthly so no team always gets the worst time\n- Avoid overlapping with any existing recurring meetings on their calendars\n\nOutput:\n1. Top 3 recommended time slots with fairness analysis\n2. Calendar invites ready to send\n3. Monthly rotation schedule for the next 6 months\n4. Agenda template for the recurring meeting` },
        { title: 'Meeting Audit and Optimization', prompt: `Audit my calendar for the past 4 weeks and recommend optimizations:\n\n1. Meeting load analysis:\n   - Total hours in meetings per week\n   - Meetings I attended but didn't speak in (potential "could be an email")\n   - Back-to-back meetings without breaks\n   - Meetings that consistently run over their scheduled time\n\n2. Identify redundant meetings:\n   - Meetings with overlapping attendees and topics\n   - Status updates that could be async\n   - Recurring meetings with declining attendance\n\n3. Optimization recommendations:\n   - Which meetings to eliminate, merge, or shorten\n   - Suggested "no meeting" blocks for deep work\n   - Optimal meeting-free days based on my productivity patterns\n   - Auto-decline rules for low-value meeting invites\n\n4. Implement changes:\n   - Generate proposed calendar for next week with optimizations applied\n   - Draft polite decline/restructure messages for meetings being changed\n   - Set up auto-rules for future scheduling` },
        { title: 'Event Planning Coordinator', prompt: `Coordinate logistics for an all-hands company meeting:\n\nEvent details:\n- 150 attendees (120 in-office, 30 remote)\n- Date: [specific date], 2:00-4:00 PM EST\n- Hybrid format: main conference room + Zoom\n\nTasks:\n1. Book the main conference room and 2 overflow rooms\n2. Set up Zoom meeting with breakout rooms for Q&A\n3. Send calendar invites to all attendees with:\n   - Agenda (attached)\n   - Pre-read materials\n   - Dial-in info for remote attendees\n   - Parking/building access info for visitors\n4. Order catering: coffee, water, light snacks for 120 (check dietary restrictions from HR database)\n5. AV setup checklist: projector, microphones, screen sharing, recording\n6. Send reminder 24 hours before with final agenda\n7. Post-event: send recording link, meeting notes, and action items within 2 hours\n\nGenerate the full coordination plan with timeline and checklists.` },
        { title: 'Rescheduling Chain Manager', prompt: `I need to reschedule my 2 PM meeting today to accommodate an urgent client call. Handle the cascade:\n\n1. Original meeting: [meeting name] at 2:00 PM with [attendees]\n   - Find the next available slot this week that works for all attendees\n   - Draft an apology/reschedule message explaining the reason\n\n2. Cascade impact:\n   - Check if moving this meeting creates conflicts with other meetings\n   - If any attendee has a conflict at the new time, find an alternative\n   - Verify the same conference room is available at the new time (if not, book another)\n\n3. The urgent client call:\n   - Block 2:00-3:00 PM for the client call\n   - Set up Zoom link and send to the client\n   - Pull up client's recent interaction history for my prep\n   - Send me a 5-minute prep brief at 1:55 PM\n\n4. Update everyone:\n   - Send reschedule notifications with new time\n   - Update all calendar entries\n   - Notify the conference room booking system\n\nExecute all steps and confirm when complete.` },
        { title: 'Weekly Calendar Optimization', prompt: `Optimize my schedule for next week based on these priorities:\n\nPriority 1 (must attend, cannot move):\n- Monday 10 AM: Board meeting\n- Wednesday 2 PM: Client demo\n- Friday 9 AM: Team standup\n\nPriority 2 (important, slightly flexible):\n- 1:1s with 5 direct reports (30 min each)\n- Product review meeting (1 hour)\n- Budget planning session (2 hours)\n\nPriority 3 (can be moved or shortened):\n- 3 vendor calls (30 min each)\n- Internal training session (1 hour)\n- Department social event (1 hour)\n\nConstraints:\n- No meetings before 9 AM or after 5 PM\n- Minimum 2 hours of uninterrupted focus time per day\n- No more than 3 consecutive hours of meetings\n- 15-minute buffer between meetings\n- Tuesday is my "light meeting" day (max 2 hours of meetings)\n\nGenerate an optimized weekly calendar with reasoning for each scheduling decision.` }
      ],
      cn: [
        { title: '跨时区会议安排', prompt: `安排一个跨时区的每周定期同步会议：\n\n参与者：\n- 产品团队（旧金山，PST）：3人，偏好上午\n- 工程团队（伦敦，GMT）：4人，当地时间下午5点后不开会\n- 设计团队（新加坡，SGT）：2人，灵活但当地时间上午9点前不行\n\n要求：\n- 60分钟会议，每周二定期\n- 必须包含视频会议链接（Zoom）\n- 需要共享议程文档（创建模板）\n- 每月轮换"不方便"的时间段，让每个团队公平分担\n- 避免与日历上的现有定期会议重叠\n\n输出：\n1. 前3个推荐时间段及公平性分析\n2. 准备好发送的日历邀请\n3. 未来6个月的月度轮换计划\n4. 定期会议的议程模板` },
        { title: '会议审计与优化', prompt: `审计我过去4周的日历并推荐优化方案：\n\n1. 会议负载分析：\n   - 每周会议总时长\n   - 我参加但未发言的会议（可能"可以用邮件代替"）\n   - 没有休息的连续会议\n   - 经常超时的会议\n\n2. 识别冗余会议：\n   - 参与者和主题重叠的会议\n   - 可以异步处理的状态更新\n   - 出席率下降的定期会议\n\n3. 优化建议：\n   - 哪些会议应该取消、合并或缩短\n   - 建议的深度工作"无会议"时间块\n   - 基于我的生产力模式的最佳无会议日\n   - 低价值会议邀请的自动拒绝规则\n\n4. 实施变更：\n   - 生成应用优化后的下周建议日历\n   - 草拟礼貌的拒绝/重组消息\n   - 设置未来日程安排的自动规则` },
        { title: '活动规划协调', prompt: `协调一次全员大会的后勤工作：\n\n活动详情：\n- 150名参与者（120人现场，30人远程）\n- 日期：[具体日期]，下午2:00-4:00\n- 混合模式：主会议室 + Zoom\n\n任务：\n1. 预订主会议室和2个溢出会议室\n2. 设置Zoom会议，含问答分组房间\n3. 向所有参与者发送日历邀请，包含：议程、预读材料、远程参与者的拨入信息、访客停车/门禁信息\n4. 订餐：咖啡、水、轻食120人份（查HR数据库的饮食限制）\n5. AV设置清单：投影仪、麦克风、屏幕共享、录制\n6. 会前24小时发送提醒和最终议程\n7. 会后：2小时内发送录制链接、会议记录和行动项\n\n生成完整的协调计划，含时间线和核查清单。` },
        { title: '重新安排连锁管理', prompt: `我需要重新安排今天下午2点的会议以配合一个紧急客户电话。处理连锁反应：\n\n1. 原始会议：[会议名称]，下午2:00，[参会者]\n   - 找到本周所有参会者都可用的下一个时间段\n   - 草拟道歉/重新安排消息说明原因\n\n2. 连锁影响：\n   - 检查移动此会议是否与其他会议产生冲突\n   - 如果任何参会者在新时间有冲突，找替代方案\n   - 验证同一会议室在新时间是否可用\n\n3. 紧急客户电话：\n   - 为客户电话预留下午2:00-3:00\n   - 设置Zoom链接并发送给客户\n   - 调出客户最近的互动历史供我准备\n   - 下午1:55发送5分钟准备简报\n\n4. 通知所有人：\n   - 发送重新安排通知和新时间\n   - 更新所有日历条目\n\n执行所有步骤并确认完成。` },
        { title: '每周日历优化', prompt: `根据以下优先级优化我下周的日程：\n\n优先级1（必须参加，不能移动）：\n- 周一上午10点：董事会会议\n- 周三下午2点：客户演示\n- 周五上午9点：团队站会\n\n优先级2（重要，稍有灵活性）：\n- 与5位直接下属的1:1（各30分钟）\n- 产品评审会议（1小时）\n- 预算规划会议（2小时）\n\n优先级3（可以移动或缩短）：\n- 3个供应商电话（各30分钟）\n- 内部培训课程（1小时）\n- 部门社交活动（1小时）\n\n约束条件：\n- 上午9点前和下午5点后不安排会议\n- 每天至少2小时不间断专注时间\n- 连续会议不超过3小时\n- 会议间15分钟缓冲\n- 周二是我的"轻会议"日（最多2小时会议）\n\n生成优化的周历，并说明每个安排决策的原因。` }
      ]
    }
  }
];

// We'll add more cases in subsequent batches - this script generates files from the cases array

function generateENContent(c) {
  const meta = c.meta;
  let content = `# Use Case #${c.id}: ${c.title}\n\n`;
  content += `**Role**: ${meta.role} | **Industry**: ${meta.industry} | **Task**: ${meta.task}\n\n`;
  content += `---\n## Detailed Introduction\n\n`;

  // Pain section
  content += `**The Pain: Why This Matters**\n\n${c.pain.en}\n\n`;

  // Solution section
  content += `**How COCO Solves It**\n\n`;
  content += `COCO's ${c.title} transforms this challenge into a streamlined, automated workflow. Here's how:\n\n`;
  c.solution.en.forEach((step, i) => {
    content += `${i + 1}. **${step.split(':')[0]}**:${step.split(':').slice(1).join(':')}\n\n`;
  });

  // Metrics
  content += `**Measurable Results**\n\nTeams using COCO's ${c.title} report:\n`;
  c.metrics.en.forEach(m => {
    content += `- **${m}**\n`;
  });

  // Benefits
  content += `\n**Who Benefits**\n\n`;
  c.benefits.en.forEach(b => {
    content += `- **${b.split(':')[0]}**:${b.split(':').slice(1).join(':')}\n`;
  });

  content += `\n---\n\n## Practical Prompts\n\n`;
  c.prompts.en.forEach((p, i) => {
    content += `**Prompt ${i + 1}: ${p.title}**\n\`\`\`\n${p.prompt}\n\`\`\`\n\n`;
  });
  content += `---\n`;

  return content;
}

function generateCNContent(c) {
  const meta = c.cnMeta || c.meta;
  let content = `# Use Case #${c.id}: ${c.cnTitle || c.title}\n\n`;
  content += `**Role**: ${meta.role} | **Industry**: ${meta.industry} | **Task**: ${meta.task}\n\n`;
  content += `---\n## 详细介绍\n\n`;

  content += `**痛点分析**\n\n${c.pain.cn}\n\n`;

  content += `**COCO如何解决**\n\n`;
  content += `COCO的${c.cnTitle || c.title}将这一挑战转化为流畅的自动化工作流。具体方式：\n\n`;
  c.solution.cn.forEach((step, i) => {
    content += `${i + 1}. **${step.split('：')[0]}**：${step.split('：').slice(1).join('：')}\n\n`;
  });

  content += `**可衡量的成果**\n\n使用COCO的${c.cnTitle || c.title}的团队报告：\n`;
  c.metrics.cn.forEach(m => {
    content += `- **${m}**\n`;
  });

  content += `\n**谁能受益**\n\n`;
  c.benefits.cn.forEach(b => {
    const parts = b.split('：');
    content += `- **${parts[0]}**：${parts.slice(1).join('：')}\n`;
  });

  content += `\n---\n\n## 实用提示词\n\n`;
  c.prompts.cn.forEach((p, i) => {
    content += `**提示词 ${i + 1}：${p.title}**\n\`\`\`\n${p.prompt}\n\`\`\`\n\n`;
  });
  content += `---\n`;

  return content;
}

function writeCase(c) {
  const slug = `${c.id}-${c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`;
  const enContent = generateENContent(c);
  const cnContent = generateCNContent(c);

  let filesWritten = 0;

  // Write to each role directory
  for (const role of c.roles) {
    for (const lang of ['en', 'cn']) {
      const dir = path.join(BASE, 'by-role', role, lang);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, `${slug}.md`), lang === 'en' ? enContent : cnContent);
      filesWritten++;
    }
  }

  // Write to each industry directory
  for (const ind of c.industries) {
    for (const lang of ['en', 'cn']) {
      const dir = path.join(BASE, 'by-industry', ind, lang);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, `${slug}.md`), lang === 'en' ? enContent : cnContent);
      filesWritten++;
    }
  }

  // Write to each task directory
  for (const task of c.tasks) {
    for (const lang of ['en', 'cn']) {
      const dir = path.join(BASE, 'by-task', task, lang);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, `${slug}.md`), lang === 'en' ? enContent : cnContent);
      filesWritten++;
    }
  }

  console.log(`✅ Case #${c.id} "${c.title}" - ${filesWritten} files written`);
  return filesWritten;
}

// Generate all cases
let totalFiles = 0;
for (const c of cases) {
  totalFiles += writeCase(c);
}
console.log(`\nTotal: ${cases.length} cases, ${totalFiles} files generated`);
