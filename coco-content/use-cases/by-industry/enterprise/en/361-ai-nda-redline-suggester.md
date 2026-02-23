# #361 — AI NDA Redline Suggester

**Role**: Legal
**Industry**: Enterprise
**Task**: Compliance
**Slug**: ai-nda-redline-suggester

---

## Introduction

Non-Disclosure Agreements are the most frequently negotiated contracts in business. A mid-sized enterprise may execute 200–500 NDAs per year — covering potential partnerships, vendor evaluations, M&A discussions, customer pilots, and employee separations. Despite their ubiquity, NDA negotiation consumes a disproportionate share of in-house legal capacity. A survey by the Association of Corporate Counsel found that NDA review and negotiation ranks among the top three time consumers for in-house legal teams, yet most legal leaders consider it a low-value activity that distracts from strategic work.

The core tension in NDA negotiation is well-documented: the party presenting their standard NDA drafts it to favor their position (broader definition of confidential information, unilateral obligations, perpetual term, broad non-solicitation clauses); the receiving party wants to limit scope, ensure mutuality, cap the term, and exclude pre-existing knowledge. This is a known, patterned negotiation — the same 15–20 issues arise in nearly every NDA. Yet legal teams address it repeatedly from scratch, spending 45–90 minutes per NDA on what is essentially a pattern-matching exercise against known negotiating positions.

The cost compounds when NDAs are presented under time pressure. A sales team waiting for legal to clear an NDA before a customer pilot can begin may lose 5–10 business days — enough to cause deal momentum to stall. A business development team unable to quickly red-line a potential partner's NDA may appear unresponsive in a competitive situation.

COCO transforms NDA redlining from a labor-intensive review into a rapid, policy-consistent workflow:

1. **NDA upload and party identification**: The attorney uploads the counterparty's NDA and specifies the parties' roles (discloser, recipient, mutual) and the business context (partnership discussion, M&A due diligence, vendor evaluation).
2. **Policy application**: COCO applies the company's standard NDA playbook — preferred definition of confidential information, required exclusions, maximum term, required return/destruction provisions, preferred governing law, and any non-negotiable positions.
3. **Issue spotting**: COCO identifies every clause that deviates from the company's policy or falls outside market norms, with a risk assessment for each deviation.
4. **Redline generation**: COCO generates a fully redlined version of the NDA with the company's preferred language substituted, using standard legal markup conventions (deletions struck, additions underlined).
5. **Negotiation notes**: COCO produces a brief negotiation memo for each change, explaining why the redline was made and what minimum acceptable alternative the company will accept if the counterparty pushes back.
6. **Escalation flagging**: COCO identifies any provisions that require senior attorney or business decision-maker review before the redline is sent.

Organizations using this workflow report reducing NDA turnaround time from 2–3 business days to 4–6 hours. Legal teams processing 400 NDAs per year save an estimated 300–600 attorney hours annually. Sales teams report higher deal velocity because legal review no longer creates a bottleneck at the top-of-funnel stage. NDA risk consistency — measured by whether accepted NDAs contain known risk provisions — improves dramatically because policy is applied mechanically rather than from memory.

**Who benefits:**
- **In-house attorneys and paralegals** who handle high-volume NDA review and need to process more agreements faster without sacrificing policy compliance.
- **Business development and sales leaders** who need faster legal clearance to advance partnership and customer conversations.
- **Legal operations managers** who track NDA cycle times and seek to reduce time-to-execution as a legal efficiency metric.
- **M&A and corporate development teams** who need to process target NDAs quickly and consistently during active deal pipelines.

---

## 5 Practical Prompts

**Prompt 1 — Full NDA redline**
```
Review and redline the following NDA from the perspective of [COMPANY NAME]. We are the [DISCLOSING PARTY / RECEIVING PARTY / BOTH (MUTUAL)].

Business context: [DESCRIBE: e.g., vendor evaluation, partnership discussion, M&A due diligence]

Our standard positions:
- Confidential information definition: [PREFERRED SCOPE]
- Required exclusions: [e.g., publicly available, independently developed, received from third parties without restriction]
- Term: [PREFERRED TERM, e.g., 2 years from disclosure]
- Obligations on termination: [return or destroy within X days]
- Governing law: [JURISDICTION]
- Non-solicitation: [ACCEPT/REJECT/PREFERRED SCOPE]
- Permitted disclosures to employees/advisors: [PREFERRED LANGUAGE]

For each change:
- State what was changed and why
- Mark with standard redline notation (strikethrough for deletions, underline for additions)
- Note if this is a "must have" or "preferred but negotiable" change

NDA TEXT:
[PASTE NDA HERE]
```

**Prompt 2 — NDA issue spotter**
```
Review the following NDA and identify every provision that:
1. Imposes obligations beyond market standard for [MUTUAL/ONE-WAY] NDAs
2. Could create unintended obligations for us based on our business model ([DESCRIBE BUSINESS])
3. Has ambiguous language that could be interpreted against our interests
4. Conflicts with any of our existing legal obligations (e.g., public company disclosure requirements, regulatory reporting)
5. Contains unusual or non-standard provisions we should flag before signing

For each issue, provide: section reference, the problematic language, the risk, and a recommended fix.

NDA:
[PASTE NDA HERE]
```

**Prompt 3 — Counterparty pushback response**
```
We sent a redlined NDA to [COUNTERPARTY]. They have pushed back on the following changes we requested. For each pushback, advise:
1. Whether their counterproposal is within market norms
2. Whether we should accept, counter, or hold our position
3. If we should counter, draft the counter-proposal language
4. The business risk of accepting their position vs. our position
5. Whether this issue warrants escalation to a business decision-maker

OUR ORIGINAL REDLINE:
[DESCRIBE CHANGES WE REQUESTED]

THEIR RESPONSE:
[PASTE THEIR COUNTERPROPOSAL OR DESCRIBE THEIR PUSHBACK]
```

**Prompt 4 — NDA term and scope analysis**
```
Analyze the following NDA provisions specifically for scope and term risk:

1. Definition of "Confidential Information" — is it too broad, too narrow, or appropriately scoped for [BUSINESS CONTEXT]?
2. Exclusions — are the standard exclusions (public domain, independently developed, third-party disclosed, required by law) present and properly drafted?
3. Term — how long does the confidentiality obligation last, and is this appropriate for the type of information being shared?
4. Residuals clause — is there a residuals provision that undermines the confidentiality obligation?
5. Non-compete or non-solicitation provisions — do these go beyond what is necessary for the stated purpose?

NDA:
[PASTE NDA HERE]
```

**Prompt 5 — NDA policy compliance check**
```
We are reviewing whether to sign the following NDA as presented, without negotiation, because [REASON: e.g., counterparty is a large enterprise and will not negotiate / time pressure].

Assess whether signing this NDA as-is falls within our acceptable risk tolerance by checking:
1. Are any of our non-negotiable policy positions violated? [LIST NON-NEGOTIABLES]
2. What is the worst-case legal exposure if we sign as-is?
3. Are there any provisions that could interfere with our existing business operations?
4. Recommended decision: Sign as-is / Sign with understood risk / Do not sign

NDA:
[PASTE NDA HERE]
```
