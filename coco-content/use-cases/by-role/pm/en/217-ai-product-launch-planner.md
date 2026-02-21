# Use Case #217: AI Product Launch Planner

**Role**: Product Manager / GTM Lead | **Industry**: SaaS, Consumer Tech, Enterprise Software, Mobile Apps | **Task**: Product Launch Planning, Cross-Functional Coordination, Launch Risk Management

---
## Detailed Introduction

**The Pain: "Ready to Launch" Means Something Different to Every Team at the Table**

A product launch is an organizational coordination problem disguised as a product milestone. When a PM declares "we're launching in three weeks," engineering thinks that means the code is merged. Marketing thinks it means campaigns are live. Sales thinks it means they have a demo-ready deck and pricing approved. CS thinks it means help documentation exists and their team has been trained. Legal thinks it means privacy policy has been updated and reviewed. In reality, on launch day, some subset of those things is true and a different subset is not — and nobody found out until 48 hours before.

Missed launch tasks are not about carelessness. They are about coordination complexity. A moderately complex product launch involves 50 to 80 discrete tasks across 6 to 8 functions, with dependencies that are not obvious until something breaks. The "send launch email" task depends on the "finalize pricing" task, which depends on the "legal approval of pricing page" task, which nobody put on the plan. The "enable feature flag for all users" task has a dependency on "CS training complete" that engineering didn't know about. These invisible dependencies are why launches slip, why teams scramble at midnight before launch day, and why post-launch retrospectives reliably surface the same categories of miss: communications not coordinated, documentation not ready, sales not enabled, edge cases not thought through.

The downstream impact of a poor launch is real and lasting. A product that launches with a confusing initial experience establishes a negative first impression that is hard to reverse. A feature that launches without sales enablement gets ignored in the sales motion for two quarters. A launch with uncoordinated messaging sends different value propositions to different audiences, creating market confusion that takes months to correct.

**How COCO Solves It**

COCO's AI Product Launch Planner generates comprehensive, dependency-mapped launch plans with cross-functional task ownership, timeline management, and proactive risk identification.

1. **Launch Scope and Complexity Assessment**: Evaluates the scope of the launch to determine the appropriate planning depth and timeline.
   - Classifies launch tier: Tier 1 (major product launch, broad market release), Tier 2 (significant feature launch), Tier 3 (incremental improvement or targeted release)
   - For each tier, generates the appropriate task list template, timeline expectations, and required stakeholder involvement
   - Identifies scope creep risks: elements being discussed that would push the launch to a higher tier without equivalent timeline extension

2. **Cross-Functional Task Generation**: Creates a comprehensive, role-assigned task list covering all launch functions.
   - Engineering: feature flag strategy, rollback plan, monitoring setup, load testing, data migration validation
   - Product: launch criteria definition, release notes, in-app communication design, beta program wrap-up
   - Marketing: positioning, messaging, content calendar, campaign setup, PR coordination, analyst briefings
   - Sales: pricing finalization, deal desk process, battlecard updates, demo environment, sales training
   - Customer Success: help documentation, CS training, customer communication plan, high-touch customer briefings
   - Legal/Compliance: privacy review, terms of service updates, regulatory notifications
   - Data/Analytics: tracking implementation, dashboard setup, success metric definitions

3. **Dependency Mapping**: Identifies the task dependencies that determine the critical path.
   - Builds a dependency graph showing which tasks block others
   - Identifies the launch critical path — the chain of tasks that, if any slip, will delay the launch date
   - Flags "hidden" dependencies: tasks that teams don't realize are connected until there's a problem

4. **Risk Register and Contingency Planning**: Identifies the most likely launch risks and pre-builds mitigation strategies.
   - Common launch risks: legal approval delay, external vendor delay, scope change mid-preparation, key person unavailability
   - For each risk: probability, impact, early warning signal, contingency plan
   - Generates a "launch go/no-go criteria" list — the minimum conditions that must be true to proceed on the planned date

5. **Stakeholder Communication Plan**: Creates a communications schedule for internal and external launch communications.
   - Internal: team briefings, leadership updates, cross-functional sync cadence
   - External: customer announcement timing, PR embargo lift, sales communication, partner notifications
   - Generates draft communications for key launch messages (announcement email, in-app notification, sales talking points)

6. **Post-Launch Monitoring Plan**: Defines the first 72-hour and 30-day monitoring protocol to catch and respond to launch issues.
   - Day 0-3: real-time KPI monitoring checkpoints, rollback decision criteria, on-call rotation
   - Week 1-2: adoption tracking, support ticket triage, customer feedback loops
   - Day 30: launch retrospective framework and success metrics review

**Measurable Results**

- **Launch task completion rate**: Increases from ~70% on launch day to 92%+ with structured planning
- **Launch timeline slippage**: Reduced by 45% — teams that use structured dependency mapping have fewer last-minute delays
- **Cross-functional alignment**: Average 35% reduction in "we didn't know you needed that from us" incidents across functions
- **Day-1 support ticket volume**: Reduced by 30% through better CS training and documentation readiness
- **Post-launch rollback events**: Reduced by 50% through pre-launch go/no-go criteria and monitoring setup
- **PM time on launch coordination**: Reduced from ~30% of PM bandwidth to ~15% with structured planning support

**Who Benefits**

- **Product Managers**: Coordinate launches with confidence — every dependency is mapped, every owner is assigned, every risk has a contingency
- **Marketing Teams**: Receive clear timelines and asset requirements with enough lead time to produce quality content — not "we launch Thursday, we need copy by Wednesday"
- **Sales Teams**: Have demo environments, pricing, and battlecards ready before the launch conversation starts — not scrambling to enable post-launch
- **Engineering Teams**: Have a clear rollout strategy, monitoring plan, and rollback criteria — reducing the stress and improvisation of launch day

---

## Practical Prompts

**Prompt 1: Full Product Launch Plan Generation**
```
I need to build a comprehensive launch plan for [product/feature name] at [company name].

Launch details:
- What we're launching: [describe the feature or product — 2-4 sentences]
- Target launch date: [date]
- Today's date: [date]
- Launch scope: [which user segments / regions / platforms are in scope for this launch]
- Launch type: [GA for all users / beta to specific segments / phased rollout / etc.]

Teams involved:
- Engineering: [lead contact name]
- Marketing: [lead contact name]
- Sales: [lead contact name]
- Customer Success: [lead contact name]
- Legal: [lead contact name]
- Data/Analytics: [lead contact name]

Key constraints and context:
- What's already done: [list any launch tasks already completed]
- Known risks or concerns: [e.g., "legal review is always a bottleneck," "pricing not finalized"]
- External dependencies: [any third-party timelines we depend on]
- Any past launch issues to avoid: [e.g., "last launch we didn't train CS in time"]

Please generate:
1. A complete task list by function with owners, due dates (relative to launch date), and dependencies
2. The critical path — which tasks determine whether we launch on time?
3. A risk register with mitigation steps for the top 5 risks
4. A go/no-go checklist for launch day
5. A stakeholder communication schedule (internal and external)
```

**Prompt 2: Launch Readiness Assessment**
```
We're [X days] from our planned launch date for [feature name] and I want to assess our launch readiness.

Current status by function (complete this for each):

Engineering:
- Feature code complete: [yes/no]
- Feature flag ready: [yes/no]
- Monitoring and alerting set up: [yes/no]
- Rollback plan documented: [yes/no]
- Load tested: [yes/no]

Marketing:
- Messaging/positioning approved: [yes/no]
- Launch blog/PR: [status]
- Email campaign: [status]
- In-app communication: [status]

Sales:
- Pricing approved: [yes/no]
- Sales training completed: [yes/no]
- Demo environment updated: [yes/no]
- Battlecard/one-pager ready: [yes/no]

Customer Success:
- Help documentation live: [yes/no]
- CS team trained: [yes/no]
- Customer pre-notification sent: [yes/no — relevant if major change]

Legal:
- Privacy/TOS review complete: [yes/no]
- Regulatory notifications sent: [yes/no — if applicable]

Please:
1. Give me an overall launch readiness score (0-100%) and confidence level
2. Identify the 3 most critical gaps that could block or damage the launch
3. For each critical gap: what's needed, who needs to do it, and is there enough time?
4. Provide a go/no-go recommendation with rationale
5. If there are gaps, recommend what to defer to post-launch vs. what must be completed before launch
```

**Prompt 3: Launch Retrospective and Post-Mortem**
```
We launched [feature/product name] on [date] and I want to run a launch retrospective to capture lessons.

Launch outcome data:
- Launch completed on time: [yes/no — if no, how late?]
- Day-1 issues encountered: [list any incidents, bugs, or customer complaints]
- Support ticket volume Day 0-7: [X tickets vs. expected Y]
- Feature adoption at Day 7: [X% vs. expected Y%]
- Any rollbacks or hotfixes required: [describe]
- Stakeholder feedback (internal): [any feedback from marketing, sales, CS, engineering]

Launch plan vs. reality:
- Tasks that slipped or were incomplete at launch: [list]
- Dependencies that were missed in planning: [list]
- Surprises that weren't on the risk register: [list]
- What went better than planned: [list]

Please analyze and deliver:
1. Root cause analysis for the top 3 things that didn't go as planned
2. Patterns: are there recurring launch failure modes we should systematically fix?
3. Process improvements for the next launch — specific and actionable, not generic
4. A launch readiness checklist update based on gaps discovered in this launch
5. A 3-sentence executive summary of the launch outcome suitable for sharing with leadership
```

---
