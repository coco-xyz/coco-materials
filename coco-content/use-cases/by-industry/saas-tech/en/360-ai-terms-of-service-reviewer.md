# #360 — AI Terms of Service Reviewer

**Role**: Legal
**Industry**: SaaS/Tech
**Task**: Compliance
**Slug**: ai-terms-of-service-reviewer

---

## Introduction

SaaS companies live and die by their Terms of Service. For vendors, ToS is the primary legal instrument defining acceptable use, limiting liability, protecting intellectual property, establishing payment terms, and governing dispute resolution. For buyers and enterprise customers, reviewing vendor ToS before procurement sign-off is a mandatory step in vendor risk management — yet most legal teams approach this review with insufficient structure and inconsistent rigor.

The scale of the problem is significant. A typical SaaS company reviewing enterprise software procurements may evaluate 30–60 vendor ToS documents per year. Each ToS ranges from 2,000 to 20,000 words across 15–40 sections. A thorough review by a technology transactions attorney takes 2–5 hours per document. At $400–$700 per hour, that is $24,000–$210,000 in annual legal spend purely on ToS review — before negotiation begins. For startups and mid-market companies without dedicated legal staff, the problem is worse: business owners sign ToS without review, creating unquantified liability.

The key risk areas in vendor ToS are well-understood but frequently missed under deadline pressure: unilateral modification rights that let vendors change terms without notice; liability caps that exclude consequential damages but force customers to accept unlimited data loss liability; IP assignment clauses that grant vendors broad rights over customer data or customer-generated content; mandatory arbitration and class action waiver clauses; auto-renewal terms with inadequate notice periods; and force majeure provisions drafted so broadly they excuse non-performance under routine circumstances.

For SaaS vendors drafting their own ToS, the challenge is different but equally costly: ToS that are too restrictive drive away enterprise customers whose legal teams flag unacceptable terms; ToS that are too permissive create liability exposure; ToS that are out of date relative to product features create false advertising and misrepresentation risk.

COCO addresses both sides of this problem:

1. **ToS ingestion**: The attorney uploads the ToS document and specifies the review perspective (buyer reviewing vendor ToS, or vendor reviewing own ToS for market fit).
2. **Risk categorization**: COCO analyzes every clause against a library of known risk patterns — unilateral modification, unlimited liability, IP assignment, arbitration, auto-renewal traps, data rights — and categorizes each risk as Critical, High, Medium, or Low.
3. **Market benchmarking**: COCO compares key provisions against market standards for the relevant SaaS segment, flagging terms that are outliers and explaining what standard market terms look like.
4. **Negotiation playbook**: For buyer reviews, COCO drafts a negotiation memo identifying which terms to push back on, what alternative language to request, and what minimum acceptable positions look like.
5. **Vendor ToS health check**: For vendor self-reviews, COCO assesses whether the ToS will pass enterprise procurement scrutiny, flags terms that enterprise legal teams routinely reject, and suggests more market-standard alternatives.
6. **Summary report**: COCO produces a one-page decision memo: proceed as-is, proceed with negotiated changes, or escalate/reject.

Teams using this workflow reduce ToS review time from 3 hours to 35 minutes per document, allowing legal teams to process 5× more reviews at the same resource level. Procurement cycle times for software purchases drop by 30–40% when legal review is faster. Enterprise vendors who update their ToS using COCO's market benchmarking report a 25% reduction in legal pushback from prospects during sales cycles.

**Who benefits:**
- **Technology transactions attorneys** who review SaaS, cloud, and software vendor agreements on behalf of enterprise buyers.
- **Procurement and vendor management teams** who need legal risk assessments faster than the attorney queue allows.
- **SaaS founders and product leaders** who need their ToS to pass enterprise procurement review without scaring away customers.
- **Compliance and vendor risk managers** who track ToS compliance status across a portfolio of active vendor relationships.

---

## 5 Practical Prompts

**Prompt 1 — Full ToS risk review (buyer perspective)**
```
Review the following vendor Terms of Service from the perspective of [COMPANY NAME] as the customer/buyer. We are a [COMPANY TYPE] in the [INDUSTRY] sector.

For each section, identify:
- Risk tier: Critical / High / Medium / Low / Acceptable
- Specific language that creates the risk (quote it)
- Plain-English explanation of the risk and its business impact
- Whether this is a market-standard term or an outlier
- Recommended negotiation position or fallback language

Pay special attention to:
- Unilateral modification rights
- Liability caps and exclusions (especially for data loss)
- IP and data rights
- Auto-renewal and termination terms
- Dispute resolution and arbitration clauses
- Force majeure provisions

ToS TEXT:
[PASTE ToS HERE]
```

**Prompt 2 — Vendor ToS self-assessment**
```
I am reviewing our company's Terms of Service from the perspective of an enterprise customer's legal team. Identify:
1. Terms that enterprise legal teams commonly reject or demand modification of
2. Terms that are more restrictive than market standard for [SaaS CATEGORY] vendors
3. Liability provisions that enterprise buyers will find unacceptable
4. IP and data rights provisions that could deter enterprise adoption
5. Specific sections to update to improve enterprise sales conversion

For each issue, suggest market-standard alternative language.

OUR ToS:
[PASTE ToS HERE]
```

**Prompt 3 — Specific clause negotiation prep**
```
I need to negotiate the following clause in a vendor ToS. The vendor is a [VENDOR TYPE] providing [SERVICE] to our company. We are the [BUYER/CUSTOMER].

Prepare a negotiation memo that:
1. Analyzes the clause as written and states what risk it creates for us
2. States our preferred alternative language and why it is more balanced
3. Provides a "walk away" minimum acceptable position
4. Anticipates the vendor's likely objections and drafts counterarguments
5. Suggests whether this is a deal-breaker or a negotiable concession

CLAUSE:
[PASTE CLAUSE HERE]
```

**Prompt 4 — ToS comparison: vendor vs. market standard**
```
Compare the following vendor ToS provisions to market standard terms for [SaaS CATEGORY] agreements. For each provision, state:
1. The vendor's current language (summarized)
2. What market standard looks like for this provision
3. How far the vendor deviates from market standard (Minor / Moderate / Significant)
4. Whether the deviation favors vendor or customer
5. Recommended negotiation approach

ToS PROVISIONS TO COMPARE:
[LIST KEY CLAUSES OR PASTE FULL ToS]
```

**Prompt 5 — ToS update for new product feature**
```
Our SaaS platform has launched the following new feature: [DESCRIBE FEATURE].

Review our existing Terms of Service and:
1. Identify any provisions that now conflict with or fail to cover this new feature
2. Draft new or updated ToS language to address the feature (acceptable use, IP rights, data handling, liability)
3. Flag any provisions where the new feature changes our legal exposure under existing terms
4. Identify any new consents or disclosures we may need to obtain from existing users before they use this feature

EXISTING ToS:
[PASTE ToS]

NEW FEATURE DESCRIPTION:
[DESCRIBE IN DETAIL]
```
