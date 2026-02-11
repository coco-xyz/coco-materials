# Use Case #028: AI Onboarding Assistant

**Role**: HR Manager / People Ops / Hiring Manager | **Industry**: Any Industry | **Task**: Employee Onboarding, Day-1 Readiness, 30/60/90 Day Planning, New Hire Experience

---

## Social Media Copy

We surveyed our employees hired in the last year. The #1 complaint wasn't compensation or work-life balance. It was onboarding. "I didn't know what I was supposed to be doing for the first 3 weeks." "It took 5 days to get my laptop, email, and Slack access." "Nobody told me who to talk to about X." "My manager was too busy to meet with me for the first week."

HR was running onboarding manually: a 47-item checklist in a Google Sheet, shared across 8 people (IT, Facilities, HR, Manager, Buddy, Finance, Legal, Security), with no automated reminders. Tasks got missed. New hires fell through cracks. Every onboarding required 12+ hours of HR coordination -- and it still felt broken.

COCO's AI Onboarding Assistant made it seamless:
- Auto-triggers onboarding workflow the moment an offer is accepted
- Coordinates across all 8 teams: IT provisions on day -3, security badge on day -1, desk setup confirmed
- Generates a personalized 30/60/90 day plan for each new hire based on their role, team, and experience level
- Acts as a 24/7 resource for new hires: "Where do I submit expenses?" "Who's my benefits contact?" "How do I set up VPN?"
- Sends automated check-in prompts to managers at day 7, 30, 60, and 90

New hire satisfaction (first 30 days): from 62% to 91%. Time-to-productivity: reduced by 23%. HR coordination time per hire: from 12 hours to 2 hours. Voluntary turnover in first 6 months: down 34%.

---

## Detailed Introduction

**The Pain: Broken Onboarding Costs You Employees Before They Start Contributing**

Research from SHRM shows that organizations with a strong onboarding process improve new hire retention by 82% and productivity by over 70%. Yet only 12% of employees say their company does onboarding well. The gap is enormous and expensive: replacing an employee costs 50-200% of their annual salary, and poor onboarding is a leading cause of early turnover.

The root cause is coordination complexity. Onboarding touches every department: IT (equipment, access), HR (paperwork, benefits), Facilities (desk, badge), Finance (payroll, expenses), Legal (contracts, NDAs), Security (background checks, access levels), the hiring manager (role expectations, projects), and often a buddy or mentor. Orchestrating all of these simultaneously, for multiple new hires, without dropping any balls, is a full-time coordination job that most HR teams do in addition to everything else.

The new hire experience compounds the problem. New employees are anxious, eager to contribute, and deeply sensitive to first impressions. When they spend their first week waiting for equipment, searching for information, and feeling ignored, that initial enthusiasm converts into frustration and second-guessing. The "buyer's remorse" window -- the first 90 days -- is when employees decide whether they made the right choice. A chaotic onboarding experience tells them they didn't.

**How COCO Solves It**

COCO's AI Onboarding Assistant orchestrates the entire onboarding experience from offer acceptance to the 90-day milestone.

1. **Automated Workflow Orchestration**: The moment an offer is accepted, COCO triggers a role-specific onboarding workflow:
   - Assigns tasks to all stakeholders with clear deadlines (IT: provision laptop by day -3, HR: benefits enrollment by day 1, Manager: first 1:1 by day 2)
   - Sends automated reminders for overdue items
   - Escalates missed deadlines to the right manager
   - Tracks completion percentage across all onboarding tasks
   - Handles multiple simultaneous onboardings without confusion

2. **Personalized Onboarding Plans**: Generates role-specific 30/60/90 day plans:
   - **Days 1-30 (Learn)**: Company orientation, tool setup, team introductions, shadow sessions, initial training modules
   - **Days 31-60 (Contribute)**: First project ownership, deeper process understanding, cross-team collaboration starts
   - **Days 61-90 (Own)**: Full responsibility for key deliverables, performance expectations clear, first review
   - Plans are tailored by role (engineer vs. sales vs. marketing), seniority (junior vs. senior), and team norms

3. **New Hire Knowledge Base**: Acts as a 24/7 concierge answering common questions:
   - Company policies (PTO, expense, travel, work-from-home)
   - Tools and systems (how to access, how to use, who to contact for help)
   - Team and organizational structure (who does what, reporting lines)
   - Cultural norms (meeting etiquette, communication preferences, decision-making processes)
   - Benefits and perks (enrollment, deadlines, contacts)

4. **Manager Coaching**: Most managers haven't been trained on onboarding. COCO helps:
   - Prompts managers with check-in reminders at key milestones
   - Suggests conversation topics for 1:1s ("Week 1: Ask about their first impressions and any blockers")
   - Provides onboarding best practices tips ("Set one small win in the first week to build confidence")
   - Flags at-risk situations (new hire hasn't completed training, manager hasn't met with them)

5. **Progress Dashboard**: Real-time visibility for HR and managers:
   - Onboarding completion percentage per new hire
   - Task status across all stakeholders (who's behind?)
   - New hire engagement signals (are they asking questions? completing tasks?)
   - Comparison to benchmarks (is this onboarding on track vs. company average?)

6. **Feedback Collection and Action**: Automated surveys at key milestones:
   - Day 7: "How was your first week? Any blockers?"
   - Day 30: "Do you feel productive? What would help?"
   - Day 60: "Are you clear on expectations? How's the team dynamic?"
   - Day 90: "Would you recommend our company? What would you change about onboarding?"
   - Results aggregated for continuous improvement of the onboarding program

**Measurable Results**

- **New hire satisfaction (30-day)**: From 62% to 91%
- **Time-to-productivity**: Reduced by 23%
- **HR coordination per hire**: From 12 hours to 2 hours
- **Onboarding task completion**: From 78% to 98%
- **First-6-month voluntary turnover**: Down 34%
- **Manager onboarding effort**: Reduced by 40% through structured plans and automation
- **IT provisioning delays**: From 5 days average to 0 days (equipment ready on day 1)

**Who Benefits**

- **New Hires**: Smooth, organized first impression; 24/7 answers to questions; clear expectations from day 1
- **HR/People Ops**: 83% less coordination time; systematic tracking replaces spreadsheet chaos
- **Hiring Managers**: Structured playbook instead of ad-hoc onboarding; prompted for critical check-ins
- **IT/Facilities**: Clear task assignments with deadlines instead of last-minute fire drills
- **Leadership**: Lower early turnover; faster time-to-productivity; better employer brand

---

## Practical Prompts

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

**Prompt 3: Build Cross-Team Onboarding Checklist**
```
Create a comprehensive onboarding checklist that coordinates across all departments.

Company: [name]
Typical new hire departments: [engineering/sales/marketing/etc.]

Build a checklist organized by responsible team and timeline:

**Pre-Day 1 (Day -7 to Day -1)**:
- IT: [equipment, accounts, access]
- HR: [paperwork, benefits enrollment]
- Facilities: [desk, badge, parking]
- Manager: [first-week schedule, buddy assignment]
- Finance: [payroll setup, expense card]

**Day 1**:
- HR: [orientation, company overview]
- IT: [setup assistance]
- Manager: [welcome, team introductions, first 1:1]
- Buddy: [lunch, building tour]

**Week 1**:
- [list key activities and responsible parties]

**Days 8-30**:
- [ongoing training, check-ins, milestones]

**Days 31-90**:
- [performance check-ins, feedback surveys, goal setting]

For each task: responsible person, deadline, dependencies, and verification that it's done.
```

---
