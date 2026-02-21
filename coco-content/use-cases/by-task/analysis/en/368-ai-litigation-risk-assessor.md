# #368 — AI Litigation Risk Assessor

**Role**: Legal
**Industry**: Enterprise
**Task**: Analysis
**Slug**: ai-litigation-risk-assessor

---

## Introduction

Litigation is one of the most significant and least predictable costs an enterprise faces. U.S. businesses spend over $300 billion per year on litigation, and the average large corporation has 556 pending legal matters at any given time, according to ACC research. Yet most enterprise litigation risk management is reactive and inconsistent: disputes are managed individually, legal reserves are set based on individual attorney judgment without systematic methodology, and early case assessment — the analysis that would allow informed decisions about settlement vs. litigation — is performed too slowly and at too high a cost to be genuinely useful.

The core problem in litigation risk management is information asymmetry and judgment inconsistency. Early case assessment requires synthesizing facts, legal standards, procedural posture, venue-specific tendencies, judge-specific tendencies, damages analysis, and litigation cost projections — and distilling all of this into a reliable probability estimate and reserve recommendation. This analysis is traditionally performed by outside counsel who bill $500–$1,500 per hour for the work, creating a perverse incentive: the more uncertain the case, the more analysis is needed, the more it costs — at the moment when the company is most motivated to delay spending.

The reserve-setting problem has significant financial reporting consequences. Inadequate legal reserves require catch-up charges that surprise investors. Over-reserved cases tie up capital that could be deployed elsewhere. Companies that consistently mis-reserve litigation exposure face scrutiny from auditors, investors, and occasionally from the SEC on materiality disclosure grounds.

COCO provides a structured, consistent litigation risk assessment framework that brings analytical discipline to early case evaluation:

1. **Case intake**: The attorney provides the case facts, the legal claims asserted (or anticipated), the jurisdiction, and available discovery information.
2. **Legal standards analysis**: COCO analyzes the applicable legal standards for each claim — elements, defenses, burden of proof, damages methodology.
3. **Liability assessment**: COCO assesses the strength of plaintiff's claims and available defenses, producing a liability probability range with supporting reasoning.
4. **Damages analysis**: COCO analyzes the damages theories and calculates a range of potential damages outcomes (best case, expected case, worst case) with supporting methodology.
5. **Litigation cost projection**: COCO projects total litigation costs through trial, organized by phase (discovery, motions, trial) with milestone costs.
6. **Settlement analysis**: COCO calculates the settlement value range consistent with the expected value of litigation, identifies optimal settlement timing, and drafts a settlement strategy memo.

Legal departments using this workflow report improving reserve accuracy (measured by variance between reserve and ultimate case outcome) by 35–45%. Early case assessment cycle time drops from 6–8 weeks to 2 weeks. Settlement rates at rational values increase because better-informed early case assessment allows legal teams to make settlement recommendations with confidence rather than deferring decisions indefinitely. Outside counsel fees on early case assessment drop by 40% because COCO handles the analytical framework, leaving outside counsel to provide specialized judgment.

**Who benefits:**
- **In-house litigation counsel** who manage the company's litigation portfolio and must set reserves, make settlement decisions, and brief leadership on case risk.
- **General Counsel and Chief Legal Officers** who must provide accurate litigation reserve information for financial reporting and manage litigation budget predictability.
- **CFOs and audit committees** who require defensible, methodology-based litigation reserve estimates for financial statement purposes.
- **Outside litigation counsel** who can use COCO's structured assessment framework to deliver better, faster early case assessments to their clients.

---

## 5 Practical Prompts

**Prompt 1 — Early case assessment**
```
Conduct an early case assessment for the following dispute. We are the [PLAINTIFF / DEFENDANT].

CASE SUMMARY:
[DESCRIBE THE FACTS — WHO DID WHAT TO WHOM, WHEN, IN WHAT CONTEXT]

CLAIMS ASSERTED:
[LIST THE LEGAL CLAIMS — e.g., breach of contract, negligence, fraud, employment discrimination]

JURISDICTION:
[STATE / FEDERAL COURT, DISTRICT]

KNOWN EVIDENCE:
[DESCRIBE AVAILABLE EVIDENCE FOR AND AGAINST US]

Produce:
1. Analysis of each claim — elements, our position on each element, strength assessment
2. Available defenses and their likelihood of success
3. Liability probability: [X%] chance of liability finding
4. Damages range: Best case / Expected case / Worst case with methodology
5. Litigation cost estimate through trial
6. Settlement value range and recommended strategy
7. Key decision points and recommended case strategy
```

**Prompt 2 — Contract dispute risk analysis**
```
We have a contract dispute with [COUNTERPARTY]. Analyze our legal position.

CONTRACT IN DISPUTE: [DESCRIBE CONTRACT TYPE AND KEY TERMS]
ALLEGED BREACH: [DESCRIBE WHAT IS ALLEGED — WHAT WE DID OR FAILED TO DO]
OUR POSITION: [DESCRIBE OUR RESPONSE AND FACTUAL DEFENSE]
COUNTERPARTY'S CLAIMED DAMAGES: [AMOUNT AND BASIS]
JURISDICTION / GOVERNING LAW: [STATE]

Analysis needed:
1. Does the counterparty's allegation state a viable breach of contract claim under [JURISDICTION] law?
2. What are our best defenses (performance, waiver, mitigation failure, force majeure, etc.)?
3. If liability is found, what damages are likely recoverable?
4. What is the realistic settlement range?
5. Should we consider a counter-claim? If so, for what?
```

**Prompt 3 — Employment litigation risk assessment**
```
A former employee has filed [OR: threatened] the following employment claim against us: [DESCRIBE CLAIM — discrimination, wrongful termination, harassment, FLSA, etc.].

Employee profile: [ROLE, TENURE, CIRCUMSTANCES OF SEPARATION]
Facts relevant to the claim: [DESCRIBE FROM OUR PERSPECTIVE]
Our HR documentation: [DESCRIBE WHAT DOCUMENTATION EXISTS — PIPs, warnings, termination letter, etc.]
Jurisdiction: [STATE / FEDERAL]

Assess:
1. The legal standard for this type of claim and whether the employee can survive a motion to dismiss
2. Our strongest factual and legal defenses
3. Any documentation gaps that weaken our position
4. Potential damages exposure (back pay, front pay, emotional distress, punitive, attorney fees)
5. Litigation cost estimate and settlement recommendation
6. Whether our HR practices should be reviewed or updated to prevent similar claims
```

**Prompt 4 — Litigation reserve methodology**
```
We need to set a litigation reserve for the following case for financial reporting purposes. Apply an expected value methodology.

CASE: [DESCRIBE]
CURRENT PROCEDURAL STATUS: [DISCOVERY / MOTIONS / TRIAL / APPEAL]
OUR COUNSEL'S LIABILITY ASSESSMENT: [DESCRIBE]
POTENTIAL DAMAGES: [RANGE COUNSEL HAS PROVIDED]
LITIGATION COST TO COMPLETION: [ESTIMATE]

Produce:
1. An expected value calculation using probability-weighted outcomes
2. A range recommendation (minimum accrual and maximum reasonably possible loss for disclosure purposes)
3. The assumptions underlying the calculation
4. Factors that could move the reserve up or down materially
5. A draft reserve memo suitable for audit committee review

ACCOUNTING STANDARD: [ASC 450 / IFRS IAS 37]
```

**Prompt 5 — Mass litigation / class action risk assessment**
```
We have received [OR: become aware of the threat of] a class action or mass litigation claim involving [DESCRIBE CLAIM AND AFFECTED POPULATION].

Assess:
1. Class certification risk — does the claim appear certifiable as a class? (Numerosity, commonality, typicality, adequacy)
2. Substantive claim strength on the merits
3. Aggregate damages exposure if the class is certified (calculate based on [CLAIM TYPE] damages methodology and estimated class size)
4. Litigation cost projection for a class action through certification and trial
5. Settlement strategy — typical settlement ranges as a percentage of claimed damages for similar class actions in [INDUSTRY/CLAIM TYPE]
6. Regulatory notification obligations triggered by this claim

CLAIM DESCRIPTION: [DESCRIBE]
ESTIMATED CLASS SIZE: [NUMBER]
JURISDICTIONS INVOLVED: [LIST]
```
