# Use Case #211: AI Enterprise Onboarding Playbook Builder

**Role**: Product Manager / Customer Success Lead | **Industry**: B2B SaaS, Enterprise Software, HR Tech, FinTech | **Task**: Enterprise Onboarding Design, Customer Implementation Planning, Playbook Creation

---
## Detailed Introduction

**The Pain: Every Enterprise Customer Feels Like the First — Because There's No Playbook**

Enterprise onboarding is where deals go to die silently. A six-figure contract is signed, the customer is handed off from sales to CS, and then the real work begins — and often immediately falls apart. The customer has different technical requirements than what was scoped. Their admin team needs configuration help their CSM has never done before. Their IT security team has compliance questions nobody documented answers to. Their end users speak three languages. Every enterprise customer arrives with a unique combination of complexity, and the team improvises its way through implementation — which takes 3 to 5 times longer than it should, frustrates the customer, and delays time-to-value by months.

The root problem is the absence of structured, segment-tailored onboarding playbooks. Most companies have a generic onboarding doc that was written for a mid-market customer two years ago. It does not account for the difference between a 500-person retail company and a 5,000-person financial institution. It assumes the customer has a dedicated IT team. It was last updated before three major product changes. CSMs adapt it on the fly, introducing inconsistency and knowledge silos. When a CSM leaves, their customer-specific institutional knowledge walks out with them.

The downstream effects are severe: enterprise onboarding that drags on past 90 days correlates with 40% higher year-one churn. Customers who don't reach first value milestone within 30 days are 3x more likely to reduce their contract at renewal. The product works — the onboarding doesn't.

**How COCO Solves It**

COCO's AI Enterprise Onboarding Playbook Builder creates tailored, step-by-step onboarding workflows calibrated to enterprise client characteristics, product complexity, and implementation risk.

1. **Client Segment Profiling**: Analyzes customer profile data to determine the appropriate onboarding track before day one.
   - Segments customers by complexity factors: company size, technical maturity, integration requirements, regulatory environment, user count
   - Maps each segment to a base playbook tier (Standard, Complex, Regulated, Multi-Entity)
   - Flags customers with elevated risk indicators (first in vertical, unusual tech stack, aggressive go-live deadline)

2. **Phase-by-Phase Workflow Generation**: Creates detailed implementation workflows with sequenced milestones, task owners, and success criteria for each phase.
   - Generates a Week 1 / Week 2-4 / Month 2-3 / Go-Live / Post-Go-Live phase structure tailored to segment
   - For each phase: defines deliverables, who owns them, dependencies, and what blocks progress
   - Builds in customer-side task accountability — not just vendor-side actions

3. **Technical Integration Checklist Builder**: Produces a comprehensive technical onboarding checklist customized to the customer's integration requirements.
   - Pulls relevant integration playbook sections based on which systems the customer connects to (CRM, SSO provider, data warehouse, ERP)
   - Includes pre-implementation readiness questions for the customer's IT team
   - Defines go/no-go technical criteria that must be met before go-live

4. **Stakeholder Communication Templates**: Generates customer-facing communication materials for each onboarding milestone.
   - Kickoff meeting agendas with role-specific talking points
   - Weekly status update templates pre-populated with phase-relevant sections
   - Escalation communication templates for when timelines slip or blockers arise

5. **Risk Register and Mitigation Paths**: Identifies the most common onboarding failure modes for the customer's profile and pre-builds mitigation workflows.
   - Common failure modes: IT security holds, champion turnover, unclear internal ownership, data migration delays
   - For each risk: early warning indicators, mitigation steps, escalation triggers
   - Generates a "yellow flag" checklist — signals that onboarding is at risk before it becomes a crisis

6. **Playbook Versioning and Feedback Loop**: Creates a structured format for continuous playbook improvement based on onboarding outcomes.
   - Tracks which playbook steps were skipped, modified, or added during live implementations
   - Generates a post-onboarding retrospective framework for capturing lessons learned
   - Identifies the 3-5 most common customizations so they can be folded into the base playbook

**Measurable Results**

- **Average onboarding duration**: Reduced by 30-40% in the first quarter after playbook implementation
- **Time-to-first-value milestone**: Accelerated from 60+ days to under 30 days for standard segment customers
- **CSM ramp time for new hires**: Reduced from 10 weeks to 5 weeks with documented playbooks
- **Customer satisfaction at onboarding completion**: NPS improvement of 20-30 points
- **Year-one churn correlation**: Customers using structured playbooks show 28% lower churn rate at 12 months
- **Escalations during onboarding**: Reduced by 45% due to proactive risk identification

**Who Benefits**

- **Product Managers**: Design scalable onboarding experiences as a product — not as ad hoc CS improvisation — and close the loop between product capabilities and customer success
- **Customer Success Managers**: Start every enterprise engagement with a clear playbook rather than blank-page improvisation, reducing stress and improving consistency
- **Sales Teams**: Use playbook summaries to set accurate implementation timeline expectations during the sales cycle — reducing post-sale disappointment
- **Customer Implementation Teams (Customer-Side)**: Receive clear task assignments and success criteria from day one — eliminating the "what do we do next?" confusion

---

## Practical Prompts

**Prompt 1: Tailored Enterprise Onboarding Playbook Creation**
```
I need to build an onboarding playbook for a new enterprise customer at [company name].

Customer profile:
- Company: [company name]
- Industry: [industry — e.g., financial services, healthcare, retail]
- Company size: [employee count / number of end users who will use the product]
- Technical environment: [key systems — SSO provider, CRM, data warehouse, ERP]
- Go-live deadline: [target date]
- Key contacts: [executive sponsor, technical lead, project manager on their side]
- Contract scope: [what they've purchased — modules, user count, integrations]
- Special requirements: [any regulatory, security, or customization requirements]

Please build a phased onboarding playbook with:
1. Pre-kickoff preparation checklist (what we need before the first meeting)
2. Kickoff week agenda and deliverables
3. Phase 2 (weeks 2-4): technical setup, integration, and configuration milestones
4. Phase 3 (month 2): user training and adoption ramp
5. Go-live readiness criteria and go/no-go checklist
6. Post go-live stabilization plan (weeks 1-4 after go-live)
7. Risk register with early warning indicators and mitigation steps
For each phase: tasks, owners (vendor vs. customer), success criteria, and dependencies.
```

**Prompt 2: Onboarding Risk Assessment for In-Flight Customer**
```
I have an enterprise customer onboarding that is showing early warning signs of going off track.

Customer context:
- Onboarding started: [X weeks ago]
- Planned go-live: [date — now at risk]
- Current phase: [what phase they're in]
- What's been completed: [list completed milestones]
- What's blocked or delayed: [describe the current blockers]
- Customer behavior signals: [e.g., "executive sponsor went quiet," "IT team keeps raising new security questions," "training sessions had <50% attendance"]

Please analyze this situation and provide:
1. Risk assessment: is this onboarding at low / medium / high risk of churn or significant delay?
2. The most likely failure mode based on the signals described
3. Immediate recovery actions for the next 2 weeks
4. A revised timeline with realistic milestones given current progress
5. An escalation recommendation: should I involve leadership, and if so, who and how?
6. Draft talking points for the next customer call that acknowledges the situation without damaging confidence
```

**Prompt 3: Onboarding Segment Playbook for a New Vertical**
```
We're entering a new vertical — [industry, e.g., healthcare, manufacturing, government] — and need to build a specialized onboarding playbook for this segment.

What we know about this vertical's onboarding characteristics:
- Regulatory environment: [describe compliance requirements — e.g., HIPAA, SOC 2, FedRAMP]
- Typical IT setup: [describe common tech stack or constraints]
- Decision-making structure: [e.g., "committee-driven, long approval cycles"]
- Common objections or blockers during onboarding: [list what we've seen or heard]
- Differences from our standard playbook: [what we know won't work from our existing approach]

We have [X] customers in this vertical so far. Their onboarding outcomes: [describe results — timing, issues, satisfaction]

Please create:
1. A vertical-specific onboarding playbook covering the same phases as our standard playbook but adapted for this vertical's unique requirements
2. A list of new pre-implementation discovery questions specific to this vertical
3. A compliance and security checklist section not in our standard playbook
4. Recommended changes to our standard communication templates for this audience
5. The 3-5 most important differences from our standard playbook and the rationale for each
```

---
