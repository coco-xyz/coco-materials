# Use Case #253: AI Incident Post-Mortem Writer

**Role**: Developer | **Industry**: SaaS, Enterprise Software, Fintech, Healthcare IT | **Task**: Documentation, Incident Management, Process Improvement

---
## Detailed Introduction

**The Pain: Engineering Teams Learn Nothing from Incidents They Don't Have Time to Properly Document**

Post-mortems are the mechanism by which engineering organizations convert the expensive tuition of production incidents into institutional learning. The theory is simple: when something breaks, you document what happened, why it happened, and what you're doing to prevent it from happening again. The practice is considerably less simple.

The aftermath of a production incident is one of the least conducive environments for careful analytical writing. The team has just spent 4-8 hours under intense pressure, often sleep-deprived, making rapid decisions with incomplete information. The post-incident period is dominated by immediate remediation: ensuring the system is truly stable, communicating with affected customers, catching up on work that fell behind during the incident. In this environment, writing a thorough, accurate, politically nuanced post-mortem document competes with everything else — and it typically loses.

The result is that post-mortems, when they get written at all, fall into predictable failure modes. The most common is superficiality: a timeline that lists what commands were run rather than why decisions were made, a root cause analysis that stops at "the database query was slow" rather than asking why the slow query wasn't caught in testing, why there was no query timeout, why the alert threshold was set high enough that the degradation wasn't caught earlier. Superficial post-mortems produce superficial action items: "add more monitoring" or "improve testing" without the specific, measurable, owned action items that would actually prevent recurrence.

The second failure mode is delay-induced inaccuracy. Human memory of high-stress events degrades rapidly and reconstructively — within 48-72 hours of an incident, team members' recollections of the sequence of events, the decisions made, and the reasoning behind them have already diverged significantly from what actually happened. Post-mortems written a week later are partially reconstructed from memory with gaps filled by inference, and the inferences are often wrong. Timeline inaccuracies lead to incorrect root cause conclusions, which lead to action items that address the wrong problem.

The third failure mode is blameful framing. Despite the widespread adoption of blameless post-mortem culture in theory, post-mortems written without facilitation or structure often drift toward implicit or explicit assignment of blame — "the engineer who deployed the change" becomes the focus rather than the systemic conditions that made the deployment risky. Blameful post-mortems discourage future transparency and erode the psychological safety that makes honest incident reporting possible.

**How COCO Solves It**

COCO's AI Incident Post-Mortem Writer transforms raw incident data — timelines, logs, Slack threads, runbook steps, monitoring data — into structured, blameless, analytically rigorous post-mortem documents.

1. **Timeline Reconstruction and Structuring**: Builds an accurate incident timeline from fragmented sources.
   - Ingests Slack/Teams/Discord thread exports, PagerDuty/OpsGenie alert logs, deployment records, and monitoring dashboards data
   - Reconstructs a coherent chronological timeline from overlapping, contradictory, or fragmented sources
   - Distinguishes between when events occurred (objective) and when they were noticed (subjective), a critical distinction for understanding detection failures
   - Formats the timeline with the precision level appropriate to incident type: minute-level for fast-moving incidents, hour-level for slow degradation events

2. **Root Cause Analysis Facilitation**: Drives toward true root causes through structured reasoning.
   - Applies the "5 Whys" methodology systematically to surface systemic causes rather than stopping at proximate causes
   - Identifies multiple contributing factors rather than collapsing to a single "root cause" when incidents have complex etiology
   - Distinguishes contributing causes (which made the incident possible) from triggering causes (which made it happen when it did)
   - Identifies systemic factors: gaps in testing, monitoring, alerting, deployment process, documentation, or organizational communication

3. **Blameless Framing**: Ensures the document focuses on systems and processes rather than individuals.
   - Rewrites blame-attributing language to systems-focused language ("the deployment script lacked rollback validation" vs. "the developer didn't validate the deployment")
   - Identifies when post-mortem language could be perceived as assigning blame even without intent
   - Frames human decisions in the context of the information available at the time: "Given the monitoring dashboards available at 14:32, the on-call engineer had no signal indicating..."

4. **Impact Quantification**: Translates the incident into business impact terms.
   - Calculates total downtime, degraded service time, and estimated user impact from provided data
   - Converts technical impact to business impact: API error rates to estimated failed transactions, latency increases to estimated conversion rate impact
   - Documents SLA/SLO status: whether commitments were breached and by how much

5. **Action Item Generation**: Produces specific, measurable, owned action items.
   - Generates action items at the correct specificity level: not "improve monitoring" but "add alerting for database connection pool utilization exceeding 80%, owned by [team], due [date]"
   - Categorizes action items by type: immediate remediation, short-term hardening, long-term systemic improvement
   - Links each action item to the specific contributing factor it addresses
   - Suggests realistic timelines and owners based on the nature of each action item

6. **Communication Templates**: Generates customer-facing communications consistent with the internal post-mortem.
   - Produces status page incident summaries in appropriate plain-English tone
   - Generates customer notification emails for different severity tiers
   - Creates executive summary versions of the post-mortem for leadership reporting

**Measurable Results**

- **Post-mortem completion rate**: Teams using COCO complete post-mortems within 48 hours of incident resolution in 84% of cases vs. 31% without COCO
- **Post-mortem quality score**: COCO-assisted post-mortems score 7.8/10 on structured quality rubrics vs. 4.2/10 for unassisted post-mortems
- **Action item closure rate**: Specific, COCO-generated action items are closed within their target timeframes in 67% of cases vs. 29% for vague unassisted action items
- **Time to write**: Post-mortem writing time reduced from 3-5 hours to 60-90 minutes with COCO assistance
- **Repeat incident rate**: Teams with consistent, high-quality post-mortem practices enabled by COCO report 41% fewer repeat incidents of the same class within 12 months

**Who Benefits**

- **On-Call Engineers and SREs**: Complete post-mortems faster and with higher quality during the already-demanding incident recovery period
- **Engineering Managers**: Ensure every significant incident produces actionable organizational learning rather than being absorbed as unmemorable overhead
- **Tech Leads**: Maintain team psychological safety with consistently blameless post-mortem framing, even when writing under emotional pressure
- **Customer Success and Account Management**: Receive accurate, appropriately-toned customer-facing communications without needing to translate from engineer-written internal reports

---
## Practical Prompts

**Prompt 1: Full Incident Post-Mortem Generation**
```
Help me write a complete post-mortem for a production incident.

Incident summary:
- What broke: [describe the failure — which service, what behavior]
- Severity: [P1/P2/P3 or your severity classification]
- Duration: [start time → resolution time, with timezone]
- Customer impact: [number of affected users, error rate, degradation description]

Raw incident data (paste what you have):

Slack/communication thread excerpts:
[paste key messages with timestamps]

Alert timeline (from PagerDuty/OpsGenie/etc.):
[paste alert history]

Actions taken during the incident:
[paste runbook steps, commands run, or describe actions in sequence]

Monitoring data summary:
[describe what your dashboards showed — error rates, latency graphs, etc.]

What was ultimately done to resolve:
[describe the resolution]

Please produce:
1. Executive summary (3-5 sentences for non-technical stakeholders)
2. Impact summary (user impact, revenue impact if known, SLO status)
3. Accurate timeline with proper attribution
4. Root cause analysis using 5-Why methodology
5. Contributing factors (beyond the root cause)
6. What went well (detection, response, communication)
7. What could have gone better (honest assessment)
8. Action items: specific, measurable, with suggested owners and target dates
```

**Prompt 2: Root Cause Analysis Deep Dive**
```
I have a draft post-mortem but the root cause analysis section feels shallow. Help me go deeper.

Incident: [brief description]
My current root cause statement: [paste your current RCA section]

Additional context:
- The proximate cause (what directly triggered the failure): [describe]
- What was the underlying condition that made the failure possible: [describe what you know]
- Was this a first occurrence of this failure mode? [yes/no, and if no, when did it occur before?]
- What processes or safeguards should have prevented this? [describe the gaps]

Please:
1. Apply 5-Why analysis to my proximate cause — take me at least 4-5 levels deeper
2. Identify what the true systemic root cause appears to be
3. Identify contributing factors that made the root cause exploitable (testing gap? monitoring gap? process gap?)
4. Reframe my current RCA in more precise, analytical language
5. What additional questions should I investigate to confirm the root cause analysis?
6. Based on the root cause, what systemic changes would prevent this entire class of failure?
```

**Prompt 3: Action Items Review and Sharpening**
```
My post-mortem has action items that feel too vague. Help me make them specific, measurable, and realistic.

Current action items:
[paste your current action items list]

Context:
- Team size: [number of engineers who might own action items]
- Current sprint workload: [approximate percentage of capacity available for reliability work]
- Incident severity: [P1/P2/P3 — affects urgency expectations]
- Existing monitoring/tooling stack: [describe what you already have]

For each action item, please:
1. Evaluate whether it's specific enough to unambiguously verify as "done"
2. Rewrite vague items into specific, testable action items
3. Suggest an appropriate owner role (not person, but role: "SRE", "backend team", "platform team")
4. Recommend a realistic target date given incident severity
5. Classify as: Immediate (this week) / Short-term (this month) / Long-term (this quarter)
6. Flag any action items that seem to address symptoms rather than root causes and suggest replacements
```

**Prompt 4: Customer Communication Draft**
```
Write customer-facing communications for this incident.

Incident summary:
- What happened: [plain English description of the failure]
- When: [start time → resolution time]
- Which services/features were affected: [list]
- Customer impact: [what customers experienced — errors, slowness, data unavailability, etc.]
- Root cause (high level): [one sentence, avoid technical jargon]
- What was done to fix it: [brief description]
- Prevention measures: [what you're doing so this doesn't happen again]

Affected customer segments:
- Premium/enterprise customers: [yes/no]
- API integrators: [yes/no]
- Free tier users: [yes/no]

Please draft:
1. Status page incident update (during incident): brief, factual, no speculation
2. Status page resolution update: confirmation of resolution, brief root cause, next steps
3. Customer notification email for significantly impacted customers (if applicable)
4. Executive-level summary for your own leadership (2-3 paragraphs, business impact focused)

Tone guidance: professional, empathetic, factual — never defensive or dismissive of impact.
```

**Prompt 5: Post-Mortem Quality Review**
```
Please review this post-mortem draft and give me specific feedback to improve it.

Post-mortem draft:
[paste your draft post-mortem document]

Questions I want you to evaluate:
1. Is the timeline accurate and complete? Are there apparent gaps or inconsistencies?
2. Does the root cause analysis reach the true systemic cause or stop at a proximate cause?
3. Is the language blameless? Flag any specific phrases that assign blame to individuals
4. Are the action items specific enough? Which ones need to be more concrete?
5. Is the impact section complete? What metrics or business impact might be missing?
6. What's the overall quality of this post-mortem (1-10) and why?
7. What are the 3 most important improvements to make before this is shared with the team?
```

---
