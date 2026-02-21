# #365 — AI Corporate Policy Drafter

**Role**: Legal
**Industry**: Enterprise
**Task**: Documentation
**Slug**: ai-corporate-policy-drafter

---

## Introduction

Every enterprise requires a comprehensive library of corporate policies — governing employee conduct, data handling, financial controls, conflicts of interest, acceptable use of technology, travel and expenses, anti-bribery and corruption, securities trading, and dozens of other operational domains. These policies are not optional: many are legally required (FCPA, SOX, HIPAA, GDPR, employment law), many are required by insurance carriers (cyber liability policies typically require specific documented information security policies), and nearly all are required to demonstrate organizational due diligence in regulatory investigations or litigation.

Despite their importance, corporate policies are frequently out of date, inconsistently drafted, poorly organized, and inaccessible to the employees they govern. A 2022 audit of Fortune 500 companies found that 68% had at least one major corporate policy that had not been reviewed or updated in over three years. Policy gaps discovered during M&A due diligence are among the most common causes of price reductions in enterprise acquisitions. Regulatory enforcement actions in the FCPA, AML, and employment law contexts routinely cite absent or inadequate corporate policies as aggravating factors that increase penalties.

The drafting problem is structural. Policy drafting is slow: a thorough anti-bribery and corruption policy, properly tailored to a company's industry, geographic footprint, and regulatory exposure, requires 15–25 attorney hours to draft from scratch. A code of conduct comprehensive enough for a public company may take 40–60 hours. Most in-house teams lack the bandwidth to draft policies proactively — they write them reactively, after an incident or audit finding identifies the gap. By that point, the policy is needed immediately, under time pressure, often without the research time needed to make it genuinely effective.

COCO transforms corporate policy drafting from a reactive, bandwidth-constrained exercise into a proactive, systematic program:

1. **Policy needs assessment**: COCO analyzes the company's profile — industry, size, geography, regulatory exposure, recent audit findings — and generates a prioritized list of policies needed, flagging critical gaps.
2. **Policy scoping**: For each policy, COCO generates a policy framework — scope, key requirements, enforcement mechanism — based on the company's specific context and applicable legal standards.
3. **Drafting**: COCO drafts the full policy in clear, plain-language format, structured with a purpose statement, scope definition, definitions, policy requirements, responsibilities, enforcement consequences, and a review schedule.
4. **Regulatory alignment**: COCO checks the draft policy against the applicable legal and regulatory standards it is designed to address and flags any gaps.
5. **Employee readability review**: COCO reviews the draft for readability and ensures policy language is clear to a non-lawyer employee audience, suggesting simplified language for complex provisions.
6. **Policy suite consistency**: COCO checks for conflicts or gaps between the new policy and existing policies in the corporate library, ensuring the full policy suite is internally consistent.

Organizations using this workflow reduce policy drafting time by 65–80% per policy. Policy review cycles — updating existing policies as laws change — drop from 4–6 weeks to 3–5 days. Companies that implement systematic, COCO-assisted policy programs report stronger audit outcomes, fewer employee conduct incidents (because policies are clearer and better communicated), and higher insurance carrier satisfaction scores in cyber and D&O coverage reviews.

**Who benefits:**
- **In-house legal and compliance counsel** who own the corporate policy library and must balance policy drafting with a full advisory and transactional workload.
- **HR and People Operations leaders** who need employment-related policies (harassment, accommodation, leave, performance management) that are legally current and operationally practical.
- **Chief Compliance Officers** who are responsible for demonstrating to regulators and auditors that the organization has adequate written policies covering all required domains.
- **Board Audit Committees** who oversee the adequacy of the company's internal controls and governance frameworks, including the corporate policy library.

---

## 5 Practical Prompts

**Prompt 1 — Corporate policy draft**
```
Draft a corporate policy on [POLICY TOPIC] for [COMPANY NAME], a [COMPANY TYPE] with [NUMBER] employees operating in [JURISDICTIONS].

Policy requirements:
- Regulatory drivers: [LIST: e.g., FCPA, SOX Section 301, state employment law, GDPR Article 32]
- Key prohibited behaviors or required behaviors to address: [LIST]
- Employees in scope: [ALL EMPLOYEES / SPECIFIC CATEGORIES]
- Enforcement mechanism: [DESCRIBE]
- Review cycle: [ANNUAL / BI-ANNUAL]

Format the policy with:
1. Purpose and Scope
2. Definitions
3. Policy Requirements (numbered, specific, action-oriented)
4. Roles and Responsibilities
5. Reporting and Escalation
6. Consequences of Violation
7. Related Policies and Documents
8. Review and Approval Information

Language: Clear, plain English appropriate for non-lawyer employees. Reading level: Grade 10-12.
```

**Prompt 2 — Policy gap assessment**
```
Review our existing corporate policy library and identify gaps relative to:
1. Legal requirements applicable to a [COMPANY TYPE] in [JURISDICTIONS]
2. Industry best practices for [INDUSTRY]
3. Requirements of our [INSURANCE CARRIER / REGULATORY BODY / AUDIT COMMITTEE]
4. Policies that exist but have not been updated in [X] years and likely need revision
5. Areas where we have incidents or employee conduct issues that a policy could address

EXISTING POLICY LIST:
[LIST CURRENT POLICIES WITH LAST REVIEW DATES]

COMPANY PROFILE:
[DESCRIBE COMPANY — INDUSTRY, SIZE, GEOGRAPHY, RECENT INCIDENTS OR AUDIT FINDINGS]
```

**Prompt 3 — Policy update for regulatory change**
```
A recent change in [LAW/REGULATION] requires us to update our [EXISTING POLICY NAME].

Specifically, the legal change requires: [DESCRIBE NEW LEGAL REQUIREMENT].

Review our current policy and:
1. Identify every provision that must change to comply with the new requirement
2. Draft the updated language for each affected provision
3. Identify any new provisions that must be added
4. Flag any consequences for violation that must be updated
5. Draft an employee communication explaining what changed and why

CURRENT POLICY:
[PASTE CURRENT POLICY TEXT]

LEGAL CHANGE:
[DESCRIBE OR PASTE RELEVANT REGULATORY TEXT]
```

**Prompt 4 — Anti-bribery and corruption policy (FCPA/UK Bribery Act)**
```
Draft a comprehensive Anti-Bribery and Corruption Policy for [COMPANY NAME], a [COMPANY TYPE] with operations in [COUNTRIES].

The policy must address:
1. Prohibition on bribery of government officials (FCPA) and private parties (UK Bribery Act)
2. Gifts, entertainment, and hospitality — permitted limits and approval process
3. Third-party intermediaries — due diligence requirements and contractual safeguards
4. Facilitation payments — company policy and exceptions (if any)
5. Political contributions and charitable donations — restrictions and approval process
6. Reporting obligations — how to report suspected violations
7. Anti-retaliation protection for reporters
8. Consequences of violation
9. Training requirements

Include specific dollar thresholds for gifts and entertainment appropriate for [INDUSTRY/GEOGRAPHY].
```

**Prompt 5 — Policy readability and effectiveness review**
```
Review the following corporate policy for clarity, completeness, and practical effectiveness:

1. Identify language that is too legalistic or unclear for non-lawyer employees
2. Identify provisions that are so vague they would not guide employee behavior in real situations
3. Identify provisions that create compliance burdens disproportionate to the underlying risk
4. Suggest concrete examples or scenarios to add that would help employees understand expectations
5. Assess whether the escalation and reporting procedures are clear and actionable
6. Rate overall policy effectiveness: Strong / Adequate / Needs Significant Revision

POLICY:
[PASTE POLICY TEXT]
```
