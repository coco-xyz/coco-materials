# #367 — AI Due Diligence Checklist Generator

**Role**: Legal
**Industry**: Enterprise
**Task**: Analysis
**Slug**: ai-due-diligence-checklist-generator

---

## Introduction

Due diligence is the cornerstone of every significant business transaction — mergers and acquisitions, private equity investments, joint ventures, major vendor relationships, and strategic partnerships. The quality of due diligence directly determines the quality of deal execution: comprehensive due diligence surfaces risks before they become post-closing problems; incomplete due diligence leaves acquirers holding liabilities they did not price, investors funding companies with defects they did not know about, and partners exposed to counterparty risks they failed to assess.

The scale of due diligence in a typical M&A transaction is significant. A mid-market acquisition ($50M–$500M deal value) typically involves reviewing 500–2,000 documents across 12–18 due diligence work streams: corporate/legal, financial, tax, intellectual property, technology/cybersecurity, human resources, environmental, regulatory/compliance, contracts, litigation, real estate, and insurance. Each work stream generates its own checklist, and the aggregate checklist for a complex deal can exceed 500 line items. Managing this across a multidisciplinary team — in-house attorneys, investment bankers, tax advisors, technical consultants — while maintaining version control, tracking completion status, and escalating open issues to decision-makers is a logistical challenge that consumes enormous senior attorney time.

The customization problem is equally significant. Generic due diligence checklists — readily available from templates — are better than nothing but miss the deal-specific risks that matter most. A software company acquisition requires IP chain-of-title review and open source license analysis that does not appear in a generic M&A checklist. A healthcare company acquisition requires deep HIPAA compliance, Medicare/Medicaid billing practice, and Certificate of Need analysis. A financial services acquisition requires regulatory capital, licensing, and Bank Secrecy Act compliance review. A cross-border transaction requires analysis of foreign investment approval requirements (CFIUS, FIRB, EU FDI regimes) that a domestic template will not cover. Generic checklists applied without customization miss these deal-specific risks consistently.

COCO generates customized, comprehensive, deal-specific due diligence checklists and manages the tracking workflow:

1. **Deal profiling**: The attorney inputs the deal parameters — transaction type, buyer and target profiles, industry, geography, approximate deal value, known areas of complexity or risk.
2. **Checklist generation**: COCO generates a fully customized due diligence checklist organized by work stream, with each item tailored to the specific deal type and industry context.
3. **Priority tiering**: COCO classifies each item as Critical (deal-breaker if deficient), High (significant price or structure impact), Medium (standard review), or Low (administrative confirmation).
4. **Document request list**: COCO generates a parallel document request list — the specific documents needed to complete each checklist item — ready to send to the target's data room administrator.
5. **Completion tracking**: As the team marks items complete, COCO analyzes open items, identifies interdependencies, and flags issues that need to be resolved before closing.
6. **Issues memo**: COCO synthesizes all flagged issues into a structured issues memo organized by severity, with recommended deal adjustments (price reduction, escrow, indemnification, representation and warranty insurance coverage).

Deal teams using this workflow report reducing due diligence checklist preparation time from 3–5 days to 4–6 hours. Completeness of due diligence coverage improves because COCO systematically applies industry-specific requirements that are frequently missed in manually prepared checklists. Post-closing dispute rates decline by 20–30% in transactions where COCO-assisted due diligence was performed, because more risk is identified and addressed before signing.

**Who benefits:**
- **M&A attorneys and transaction counsel** who manage due diligence processes and need to build comprehensive, deal-specific work plans quickly.
- **Corporate development teams** who run the internal due diligence process and coordinate external advisors across multiple work streams simultaneously.
- **Private equity and venture capital investment teams** who perform due diligence on multiple deals simultaneously and need consistent, auditable processes.
- **Board and audit committee members** who require confidence that management's due diligence process was systematic and comprehensive before approving a transaction.

---

## 5 Practical Prompts

**Prompt 1 — Custom M&A due diligence checklist**
```
Generate a comprehensive due diligence checklist for the following transaction:

Transaction type: [ACQUISITION / MERGER / ASSET PURCHASE / INVESTMENT / JV]
Buyer/Investor: [DESCRIBE — TYPE, INDUSTRY, STRATEGIC RATIONALE]
Target company: [DESCRIBE — INDUSTRY, BUSINESS MODEL, SIZE, GEOGRAPHY]
Deal value (approximate): [RANGE]
Known risk areas: [LIST ANY KNOWN ISSUES OR COMPLEXITY — e.g., pending litigation, international operations, government contracts, union workforce]
Applicable foreign investment review: [CFIUS / NONE / OTHER]

Organize the checklist by work stream (Corporate/Legal, Financial, Tax, IP, Technology/Cybersecurity, HR/Benefits, Environmental, Regulatory/Compliance, Contracts, Litigation, Real Estate, Insurance). For each item:
- State the specific diligence question or document to review
- Assign a priority: Critical / High / Medium / Low
- Note which advisor is typically responsible (legal, financial, tax, technical, etc.)
```

**Prompt 2 — Industry-specific due diligence add-ons**
```
We are conducting due diligence on a target company in the [INDUSTRY] sector. In addition to standard M&A due diligence, generate industry-specific due diligence items that are critical for [INDUSTRY] targets but would not appear on a generic M&A checklist.

Focus on:
- Regulatory licensing and compliance requirements specific to [INDUSTRY]
- Industry-specific liability exposures (product liability, professional liability, environmental, etc.)
- Industry-specific revenue recognition or billing practices that require scrutiny
- Industry-specific workforce or union considerations
- Industry-specific technology or IP considerations
- Any pending or anticipated regulatory changes in [INDUSTRY] that could affect deal value

TARGET PROFILE:
[DESCRIBE TARGET'S SPECIFIC BUSINESS ACTIVITIES]
```

**Prompt 3 — Document request list from checklist**
```
Based on the following due diligence checklist, generate a comprehensive document request list to send to the target company.

For each checklist item, specify:
1. The exact document(s) needed (be specific — "all MSAs with customers over $100K ARR" not "customer contracts")
2. The time period to be covered (e.g., last 3 fiscal years, all active, last 5 years)
3. The format requested (executed originals, unexecuted drafts, amendments)
4. The data room folder where this should be organized

Group the document requests into logical categories and number them for tracking.

CHECKLIST:
[PASTE CHECKLIST ITEMS]
```

**Prompt 4 — Due diligence issues memo**
```
We have completed due diligence on [TARGET COMPANY]. The following issues were identified. Produce a due diligence issues memo that:

1. Categorizes issues by severity: Critical (deal-breaker or major price impact) / High / Medium / Low
2. For each Critical and High issue, states: what was found, why it matters, and recommended deal response (price reduction, escrow, specific indemnification, rep and warranty coverage, walk away)
3. For Medium issues, recommends closing condition or post-closing obligation
4. Produces an executive summary (1 page) for the deal decision-maker

ISSUES IDENTIFIED:
[LIST ISSUES WITH DESCRIPTIONS]

DEAL CONTEXT:
[DEAL TYPE, VALUE, STRATEGIC RATIONALE]
```

**Prompt 5 — Vendor / third-party due diligence checklist**
```
Generate a due diligence checklist for evaluating [VENDOR TYPE] as a critical vendor/partner. This is not an M&A transaction but a vendor risk assessment for a [DESCRIBE RELATIONSHIP: e.g., cloud infrastructure provider, payment processor, key professional services firm].

The checklist should cover:
1. Financial stability and business continuity
2. Data security and privacy compliance (SOC 2, ISO 27001, relevant certifications)
3. Regulatory compliance in our industry
4. Contractual terms and SLA adequacy
5. Concentration risk (single points of failure)
6. Sub-processor and subcontractor risks
7. Incident response and breach notification capabilities
8. Exit strategy and data portability

VENDOR TYPE: [DESCRIBE]
DATA/SYSTEMS ACCESS LEVEL: [DESCRIBE WHAT DATA OR SYSTEMS THIS VENDOR WILL ACCESS]
REGULATORY ENVIRONMENT: [LIST APPLICABLE REGULATIONS]
```
