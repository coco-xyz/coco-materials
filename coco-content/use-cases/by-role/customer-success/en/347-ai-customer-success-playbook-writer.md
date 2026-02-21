# #347 — AI Customer Success Playbook Writer

**Role**: Customer Success
**Industry**: SaaS / Tech
**Task**: Documentation
**Slug**: `ai-customer-success-playbook-writer`

---

## Introduction

Every high-performing Customer Success team operates from a shared set of playbooks: documented protocols that tell a CSM exactly what to do when a customer hits a specific situation — whether that's a QBR, a renewal conversation, an at-risk escalation, or an executive sponsor change. These playbooks are the intellectual capital of the CS organization. They encode the team's best practices, hard-won lessons, and strategic frameworks in a reusable format that raises the floor for every CSM, regardless of experience level.

The problem is that most CS teams don't have these playbooks written down — or if they do, the documentation is incomplete, outdated, or exists in someone's head in the form of "this is how we've always done it." When a new CSM joins, they go through a 90-day ramp period where they shadow senior colleagues, absorb implicit knowledge through observation, and slowly develop their own version of the playbook — which may or may not match what the team considers best practice. This is expensive: a 90-day ramp is 90 days of suboptimal customer coverage, and for a company with aggressive growth targets, it means customers in the first three months are consistently getting a worse experience than those managed by tenured CSMs.

The second problem is playbook debt. Even teams with playbooks don't update them. A playbook written 18 months ago doesn't account for product changes, new competitor dynamics, evolving customer expectations, or the lessons learned from the last 20 churn post-mortems. Stale playbooks give CSMs false confidence: they follow the documented process and get poor results, and then don't know whether to blame the playbook or their own execution.

COCO solves both problems. It helps CS teams generate comprehensive, structured playbooks from scratch by combining the team's institutional knowledge (expressed as notes, call recordings summaries, or verbal descriptions) with CS best practices — and then helps them update those playbooks regularly by incorporating new lessons as they're learned.

**How COCO solves it — step by step:**

1. **Situation scoping**: The CS leader or CSM defines the specific situation the playbook should address (e.g., "executive sponsor change at a Tier 1 account," "customer who hasn't logged in for 30 days," "renewal conversation with a Detractor").

2. **Playbook structure generation**: COCO generates the full playbook structure — situation trigger, immediate actions, stakeholder mapping, communication templates, escalation paths, success criteria, and common failure modes.

3. **Action sequence drafting**: COCO writes out every step in the playbook as a specific, actionable instruction — not a vague guideline but a concrete "do this, then this, using this template."

4. **Template and script embedding**: COCO generates embedded templates (emails, call scripts, internal escalation messages) that plug directly into the playbook steps.

5. **Failure mode documentation**: COCO identifies the top 3 ways this playbook commonly fails to produce the desired outcome and includes mitigation instructions for each.

6. **Review and update protocol**: COCO generates a suggested review cadence and a set of trigger events that should prompt a playbook revision (e.g., "review after every churn in this segment").

**Measurable results:**

- New CSM ramp time to full productivity: from 11 weeks → 6 weeks
- Playbook coverage (documented situations / total known situations): from 28% → 91%
- CSM outcome consistency across experience levels: junior/senior performance gap reduced by 54%
- Time to create a comprehensive new playbook: from 12+ hours → 90 minutes
- Churn in segments with documented vs. undocumented playbooks: 9.1% vs. 18.3%

**Who benefits:**

- **New CSMs**: Get up to speed faster with clear, actionable playbooks rather than relying on tribal knowledge and shadowing.
- **Experienced CSMs**: Spend less time answering "what do I do when..." questions and more time doing high-leverage work.
- **VP of Customer Success**: Builds a scalable, auditable CS operation where quality doesn't depend on headcount seniority — and can confidently hire to scale.
- **Customers**: Experience consistent, high-quality engagement regardless of whether they're assigned a 2-year or 2-month CSM.

---

## 5 Practical Prompts

**Prompt 1 — Full Playbook Generation**
```
Write a comprehensive Customer Success playbook for the following situation:

Situation: [SITUATION — e.g., "Executive sponsor leaves or is replaced at a Tier 1 enterprise account"]
Customer segment this applies to: [SEGMENT — e.g., Enterprise, $50K+ ARR]
Typical timeline: [HOW_MUCH_TIME_CSM_HAS_TO_ACT]
Key risks if handled poorly: [RISKS]
Resources available to CSM: [RESOURCES — e.g., executive escalation access, gift budget, legal contact]

Playbook must include:
1. Trigger definition (exactly when this playbook activates)
2. Immediate actions (first 48 hours)
3. Week 1 actions
4. Week 2–4 actions
5. Key stakeholder communication templates (3 minimum)
6. Escalation path and criteria
7. Success definition (what does "handled well" look like at 60 days?)
8. Top 3 failure modes and how to avoid them
```

**Prompt 2 — Renewal Playbook**
```
Create a 90-day renewal playbook for [CUSTOMER_SEGMENT] accounts with renewal values of $[RANGE]. Include:

- Day 90: Trigger and internal review
- Day 60: First executive outreach
- Day 45: Formal renewal conversation
- Day 30: Proposal and negotiation phase
- Day 14: Final close activities
- Day 0 and after: Renewal confirmation and next-year goal setting

For each phase, include: CSM actions, stakeholder communications (with template), common obstacles, and escalation criteria. Also include: how to handle a price objection, how to handle a competitor evaluation, and how to handle an unresponsive champion.
```

**Prompt 3 — Playbook Update and Gap Analysis**
```
Review the following existing CS playbook for [SITUATION] and:
1. Identify steps that are outdated or no longer aligned with current product capabilities
2. Identify missing steps based on common failure patterns
3. Identify language or templates that should be refreshed
4. Suggest 3 improvements based on current CS best practices

Current playbook:
[PASTE_EXISTING_PLAYBOOK]

Recent lessons learned (from churn post-mortems or team retros):
[PASTE_LESSONS]

Product changes in the last 6 months relevant to this playbook:
[LIST]
```

**Prompt 4 — Quick-Reference Playbook Card**
```
Convert the following comprehensive CS playbook into a one-page quick-reference card that a CSM can use in real-time during a call or meeting. Include only: trigger, first 3 actions, key talking points, and the single most important thing NOT to do.

Full playbook:
[PASTE_PLAYBOOK]

Format as a structured card that fits on one screen without scrolling.
```

**Prompt 5 — Playbook Library Index**
```
We need to build a comprehensive CS playbook library. Based on the following account portfolio profile and historical churn data, identify the 15 playbooks we should prioritize building first.

Portfolio profile:
- Total accounts: [N]
- Segments: [LIST]
- Primary industries served: [LIST]
- Common churn reasons (from post-mortems): [LIST]
- Current documented playbooks: [LIST]

For each recommended playbook:
- Playbook name and situation it covers
- Priority level (P1/P2/P3)
- Estimated time to build with COCO
- Expected impact on retention if implemented
```

---

*Use case #347 — Customer Success / SaaS-Tech / Documentation*
