# #371 — AI Board Meeting Minutes Summarizer

**Role**: Legal
**Industry**: Enterprise
**Task**: Documentation
**Slug**: ai-board-meeting-minutes-summarizer

---

## Introduction

Board meeting minutes are among the most legally significant corporate documents a company produces. They are the official record of the board's exercise of its fiduciary duties — the contemporaneous documentation that directors approved material transactions, received required disclosures, engaged in deliberation, and fulfilled their oversight responsibilities. In litigation, regulatory investigations, M&A due diligence, and SEC enforcement proceedings, minutes are among the first documents reviewed and the most heavily scrutinized. Minutes that are incomplete, inaccurate, or drafted in a way that creates contradictions with other corporate records are a liability, not an asset.

The drafting challenge is real. Board minutes must be precise without being a verbatim transcript, comprehensive without being so detailed that privileged deliberations are unnecessarily exposed, and technically accurate in their description of corporate actions (resolutions must be precisely stated, quorum must be confirmed, voting outcomes correctly recorded). For public companies, minutes must also satisfy SEC disclosure requirements and support the certifications made in proxy statements and annual reports. For companies with audit committees, the minutes of audit committee meetings must adequately document the committee's review and oversight activities to satisfy SOX Section 301 requirements and auditor expectations.

Yet the production of board minutes is frequently under-resourced. Corporate secretaries and in-house attorneys who draft minutes are often working from incomplete notes, audio recordings of variable quality, and slide decks that don't capture verbal discussion. The gap between the board meeting and the distribution of draft minutes is typically 2–4 weeks — too long for matters requiring urgent documentation, and long enough for memories to fade. When minutes are distributed for board review, directors sometimes request substantial revisions that restart the drafting cycle.

COCO accelerates and improves the minutes production process:

1. **Source material ingestion**: The corporate secretary provides the meeting agenda, board materials (slide decks, reports, resolutions for approval), and meeting notes or a recording transcript.
2. **Structured draft**: COCO produces a draft minutes document in proper corporate form — call to order, attendance and quorum confirmation, review of prior minutes, agenda item-by-item summary, resolutions with exact operative language, and adjournment.
3. **Resolution drafting**: COCO drafts precise resolution language for each action item, using correct corporate law formulation and ensuring the resolution scope matches the action actually approved.
4. **Privilege protection**: COCO flags any content in the notes that contains privileged attorney-client communications or protected deliberative content that should not appear in the final minutes, and suggests how to document the action without exposing the underlying deliberation.
5. **Compliance review**: COCO reviews the draft for completeness — confirming that all required disclosures (director conflicts, related party transactions, auditor independence) are documented, and that all agenda items are addressed.
6. **Director review facilitation**: COCO produces a clean draft and a comment-ready version, and when directors provide comments, COCO reconciles conflicting comments and produces a revised draft.

Organizations using this workflow report reducing minutes drafting time from 6–10 hours to 2–3 hours per meeting. Director approval cycles (the time from draft distribution to final approved minutes) shorten from 3–4 weeks to 10–14 days. Minutes quality — measured by the frequency of legal or audit findings related to minutes deficiencies — improves significantly. Companies preparing for IPO or M&A transactions report that COCO-assisted minutes are consistently sufficient to pass due diligence review without supplemental documentation requests.

**Who benefits:**
- **Corporate secretaries and legal assistants** who draft minutes and manage the board approval cycle under time pressure while managing competing priorities.
- **General Counsel and Chief Legal Officers** who are responsible for the quality and completeness of board records and who must defend those records in transactions, litigation, and regulatory reviews.
- **Independent directors and audit committee members** who must be able to confirm, when asked, that the minutes accurately reflect the deliberations and actions they participated in.
- **Outside counsel and investment banks** conducting due diligence who rely on board minutes to verify corporate approvals, conflicts disclosures, and governance processes.

---

## 5 Practical Prompts

**Prompt 1 — Board meeting minutes draft from notes**
```
Draft formal board meeting minutes based on the following meeting materials. The company is [COMPANY NAME], a [CORPORATION TYPE — C-corp / LLC / public company] incorporated in [STATE].

MEETING DATE: [DATE]
MEETING TYPE: [Regular / Special / Annual]
DIRECTORS PRESENT: [LIST NAMES AND TITLES]
DIRECTORS ABSENT: [LIST IF ANY]
OTHERS PRESENT: [CEO, CFO, Outside Counsel, etc.]
QUORUM CONFIRMED: [YES/NO]

AGENDA AND NOTES:
[PASTE AGENDA ITEMS WITH NOTES ON DISCUSSION AND ACTIONS TAKEN]

MATERIALS PRESENTED: [LIST SLIDE DECKS, REPORTS, RESOLUTIONS]

Draft complete minutes in proper corporate form with:
- Precise resolution language for each approved action
- Accurate vote recording
- Appropriate level of deliberation summary (sufficient to show engagement, not so detailed as to expose privilege)
```

**Prompt 2 — Resolution drafting**
```
Draft board resolutions for the following actions approved at our board meeting. Each resolution should be precisely worded, legally sufficient, and ready for inclusion in the meeting minutes.

ACTIONS TO MEMORIALIZE:
1. [DESCRIBE ACTION — e.g., approval of annual budget, authorization of equity grant, approval of acquisition, appointment of officer]
2. [DESCRIBE ACTION]
3. [DESCRIBE ACTION]

For each resolution:
- Use proper "RESOLVED" / "FURTHER RESOLVED" / "WHEREAS" structure
- Include the key terms and conditions of the action
- Authorize the appropriate officers to execute any necessary documents
- State any limitations or conditions on the authorization

COMPANY: [NAME AND STATE OF INCORPORATION]
```

**Prompt 3 — Minutes compliance review**
```
Review the following draft board minutes for completeness and legal adequacy. Flag any deficiencies.

Check for:
1. Quorum confirmation (at least a majority of directors present or represented)
2. Conflict of interest disclosures (did any director with a conflict in an agenda item disclose and recuse?)
3. Related party transaction documentation (approval process followed per company's RPT policy)
4. Accurate vote recording (unanimous vs. majority; any dissents or abstentions properly noted)
5. Required auditor communications (for audit committee minutes — independence confirmation, critical audit matters, management letter items)
6. All agenda items addressed (no items on the agenda without a documented outcome)
7. Any privileged communications that should not appear in the minutes record

DRAFT MINUTES:
[PASTE DRAFT MINUTES]
```

**Prompt 4 — Audit committee minutes**
```
Draft audit committee meeting minutes for the following meeting. The company is [PUBLIC / PRIVATE].

MEETING DATE: [DATE]
COMMITTEE MEMBERS PRESENT: [LIST WITH INDEPENDENCE DESIGNATION: Independent / Non-Independent]
OTHERS PRESENT: [CFO, Controller, External Auditors, Internal Audit, General Counsel]

AGENDA AND NOTES:
[DESCRIBE ITEMS REVIEWED — e.g., quarterly financial statements, internal audit reports, external auditor updates, management letter items, related party transactions, risk assessment, legal and compliance update]

Ensure the minutes document:
1. Financial statement review and approval process
2. External auditor independence confirmation
3. Any critical audit matters or significant accounting judgments discussed
4. Internal audit findings and management responses
5. Legal and compliance matters reported
6. Any executive sessions held (with or without management)
```

**Prompt 5 — Minutes gaps identification for M&A due diligence**
```
We are preparing for a [SALE / INVESTMENT] transaction. Buyers will review our board and committee minutes for the past [3 / 5] years. Review the following minutes index and identify:

1. Required corporate approvals that may be missing (equity issuances, material contracts, officer appointments, related party transactions, significant litigation)
2. Meetings that appear to lack adequate quorum documentation
3. Actions referenced in board materials or resolutions that do not appear in minutes
4. Director conflicts that should have been documented and may not be
5. Any period where no minutes were prepared for required meetings
6. Recommended remediation actions before the data room opens

MINUTES INDEX:
[LIST MEETING DATES, TYPES, AND BRIEF DESCRIPTION OF ACTIONS TAKEN]

CORPORATE HISTORY:
[DESCRIBE KEY EVENTS — EQUITY ROUNDS, ACQUISITIONS, OFFICER CHANGES, SIGNIFICANT CONTRACTS]
```
