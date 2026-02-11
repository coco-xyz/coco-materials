# Use Case #028: AI Onboarding Assistant

**Role**: HR Manager / People Ops / Hiring Manager | **Industry**: Any Industry | **Task**: Employee Onboarding, Day-1 Readiness, 30/60/90 Day Planning, New Hire Experience

---

## Part 1: Social Media Copy

### English

We surveyed our employees hired in the last year. The #1 complaint wasn't compensation or work-life balance. It was onboarding. "I didn't know what I was supposed to be doing for the first 3 weeks." "It took 5 days to get my laptop, email, and Slack access." "Nobody told me who to talk to about X." "My manager was too busy to meet with me for the first week."

HR was running onboarding manually: a 47-item checklist in a Google Sheet, shared across 8 people (IT, Facilities, HR, Manager, Buddy, Finance, Legal, Security), with no automated reminders. Tasks got missed. New hires fell through cracks. Every onboarding required 12+ hours of HR coordination -- and it still felt broken.

COCO's AI Onboarding Assistant made it seamless:
- Auto-triggers onboarding workflow the moment an offer is accepted
- Coordinates across all 8 teams: IT provisions on day -3, security badge on day -1, desk setup confirmed
- Generates a personalized 30/60/90 day plan for each new hire based on their role, team, and experience level
- Acts as a 24/7 resource for new hires: "Where do I submit expenses?" "Who's my benefits contact?" "How do I set up VPN?"
- Sends automated check-in prompts to managers at day 7, 30, 60, and 90

New hire satisfaction (first 30 days): from 62% to 91%. Time-to-productivity: reduced by 23%. HR coordination time per hire: from 12 hours to 2 hours. Voluntary turnover in first 6 months: down 34%.

### 中文

我们调查了过去一年入职的员工。排名第一的抱怨不是薪酬或工作生活平衡。是入职体验。"前3周我都不知道自己该做什么。""花了5天才拿到笔记本电脑、邮箱和Slack权限。""没人告诉我关于X该找谁。""我经理第一周忙得没空见我。"

HR在手动运行入职流程：一个Google Sheet里的47项清单，在8个人之间共享（IT、设施、HR、经理、Buddy、财务、法务、安全），没有自动提醒。任务被遗漏。新人从缝隙中掉落。每次入职需要12+小时的HR协调——而且体验仍然感觉是坏的。

COCO的AI Onboarding Assistant使之无缝：
- offer被接受的那一刻自动触发入职工作流
- 协调所有8个团队：IT在入职前3天配置设备、安全门卡在入职前1天就绪、工位确认
- 基于角色、团队和经验级别为每个新人生成个性化的30/60/90天计划
- 充当新人的24/7资源："我在哪提报销？""谁是我的福利对接人？""VPN怎么设置？"
- 在第7、30、60和90天向经理发送自动check-in提醒

新人满意度（前30天）：从62%升至91%。达到生产力的时间：缩短23%。每次入职的HR协调时间：从12小时降至2小时。入职前6个月的主动离职：下降34%。

---

## Part 2: Detailed Introduction

### English

**The Pain: Broken Onboarding Costs You Employees Before They Start Contributing**

Research from SHRM shows that organizations with a strong onboarding process improve new hire retention by 82% and productivity by over 70%. Yet only 12% of employees say their company does onboarding well. The gap is enormous and expensive: replacing an employee costs 50-200% of their annual salary, and poor onboarding is a leading cause of early turnover.

The root cause is coordination complexity. Onboarding touches every department: IT (equipment, access), HR (paperwork, benefits), Facilities (desk, badge), Finance (payroll, expenses), Legal (contracts, NDAs), Security (background checks, access levels), the hiring manager (role expectations, projects), and often a buddy or mentor. Orchestrating all of these simultaneously, for multiple new hires, without dropping any balls, is a full-time coordination job that most HR teams do in addition to everything else.

**How COCO Solves It**

COCO's AI Onboarding Assistant orchestrates the entire onboarding experience from offer acceptance to the 90-day milestone.

1. **Automated Workflow Orchestration**: Triggers and tracks all onboarding tasks across teams, with automated reminders and escalation for overdue items.

2. **Personalized Onboarding Plans**: Generates role-specific 30/60/90 day plans with goals, learning milestones, key meetings, and success metrics.

3. **New Hire Knowledge Base**: Acts as a 24/7 concierge answering common questions about company policies, tools, processes, benefits, and culture.

4. **Manager Coaching**: Prompts managers with onboarding best practices, check-in reminders, and suggested conversation topics for 1:1s.

5. **Progress Tracking**: Dashboard showing onboarding completion, new hire engagement, and flag at-risk situations.

6. **Feedback Collection**: Automated surveys at key milestones to catch issues early.

**Measurable Results**

- **New hire satisfaction (30-day)**: From 62% to 91%
- **Time-to-productivity**: Reduced by 23%
- **HR coordination per hire**: From 12 hours to 2 hours
- **Onboarding task completion**: From 78% to 98%
- **First-6-month voluntary turnover**: Down 34%
- **Manager onboarding effort**: Reduced by 40% through structured plans and automation

---

## Part 3: Practical Prompts

### English

**Prompt 1: Generate 30/60/90 Day Onboarding Plan**
```
Create a 30/60/90 day onboarding plan for a new [role title] joining the [team name] team.

New hire context:
- Experience level: [junior/mid/senior]
- Background: [brief professional background]
- Start date: [date]
- Manager: [name]
- Team size: [X people]
- Key tools they'll use: [list tools/systems]

Generate a structured plan:

**First 30 Days (Learn)**:
- Week 1: Orientation, tool setup, meet the team, understand company context
- Week 2-4: Shadow key processes, complete training, begin small tasks
- 30-day milestone: [specific measurable outcome]

**Days 31-60 (Contribute)**:
- Take ownership of [specific responsibilities]
- Complete [specific projects or deliverables]
- 60-day milestone: [specific measurable outcome]

**Days 61-90 (Own)**:
- Full ownership of [scope]
- Begin [longer-term initiative]
- 90-day milestone: [specific measurable outcome]

Include: key meetings to schedule, people to meet, documents to read, and success metrics for each phase.
```

**Prompt 2: Onboarding FAQ for New Hires**
```
Create a comprehensive FAQ document for new hires at [company name].

Company context:
- Industry: [industry]
- Size: [employees]
- Office setup: [remote/hybrid/office]
- Key tools: [list main tools - Slack, Notion, Jira, etc.]

Generate FAQs organized by category:
1. **Getting Started**: Equipment, accounts, access, first-day logistics
2. **Communication**: How to use [tools], team channels, meeting culture
3. **HR & Benefits**: PTO policy, health insurance, expense reporting, payroll
4. **Culture**: Values, norms, dress code, social events
5. **IT & Security**: VPN, password policies, data handling
6. **Career**: Performance reviews, growth opportunities, learning budget

Write 5-8 Q&As per category. Answers should be friendly, clear, and direct.
```

### 中文

**提示词 1: 生成30/60/90天入职计划**
```
为一位新加入[团队名称]团队的[职位名称]创建30/60/90天入职计划。

新人背景：
- 经验级别：[初级/中级/高级]
- 背景：[简要职业背景]
- 入职日期：[日期]
- 直属经理：[姓名]
- 团队规模：[X人]
- 将使用的核心工具：[列出工具/系统]

生成结构化计划：

**前30天（学习）**：
- 第1周：入职培训、工具配置、认识团队、理解公司背景
- 第2-4周：跟随学习核心流程、完成培训、开始小任务
- 30天里程碑：[具体可衡量成果]

**第31-60天（贡献）**：
- 开始负责[具体职责]
- 完成[具体项目或交付物]
- 60天里程碑：[具体可衡量成果]

**第61-90天（独当一面）**：
- 全面负责[范围]
- 启动[较长期的计划]
- 90天里程碑：[具体可衡量成果]

包含：需要安排的关键会议、需要认识的人、需要阅读的文档、每个阶段的成功指标。
```

**提示词 2: 新人入职FAQ**
```
为[公司名称]的新人创建全面的FAQ文档。

公司背景：
- 行业：[行业]
- 规模：[员工数]
- 办公模式：[远程/混合/办公室]
- 核心工具：[列出主要工具]

按类别生成FAQ：
1. **入门指南**：设备、账号、权限、第一天后勤
2. **沟通**：如何使用[工具]、团队频道、会议文化
3. **HR与福利**：休假政策、社保、报销、薪资
4. **文化**：价值观、规范、着装、社交活动
5. **IT与安全**：VPN、密码策略、数据处理
6. **职业发展**：绩效评估、成长机会、学习预算

每个类别5-8个问答。回答应友好、清晰、直接。
```
