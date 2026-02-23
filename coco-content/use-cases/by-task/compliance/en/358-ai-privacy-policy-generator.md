# #358 — AI Privacy Policy Generator

**Role**: Legal
**Industry**: SaaS/Tech
**Task**: Compliance
**Slug**: ai-privacy-policy-generator

---

## Introduction

Every software product that collects, stores, or processes personal data requires a privacy policy — and in most jurisdictions that policy must be not just present but accurate, current, and written in language that real users can understand. For SaaS companies, this requirement multiplies: a single platform may collect data under GDPR (EU users), CCPA/CPRA (California users), PIPEDA (Canadian users), PDPA (Singapore/Thailand users), and a growing list of US state privacy laws passed since 2022. Each framework imposes different disclosure obligations, different definitions of "personal data," different user rights, and different retention requirements.

The result is a document that most legal teams dread writing. A privacy policy that genuinely covers a modern SaaS application — cloud storage, analytics integrations, third-party cookies, advertising pixels, AI-model training data use, data broker relationships — can run to 4,000–8,000 words across 20+ sections. Drafting one from scratch takes a junior attorney 12–20 hours; reviewing and updating an existing policy as the product changes takes 4–8 hours per update cycle. SaaS companies that ship features quarterly may need to update their privacy policy 4–6 times per year, consuming 16–48 attorney hours annually just for policy maintenance.

The deeper risk is inaccuracy. A policy that describes data practices that do not match actual product behavior is worse than no policy at all — it creates affirmative misrepresentation exposure to regulators. The FTC has brought enforcement actions against companies whose privacy policies overstated their data protection practices. GDPR supervisory authorities have issued fines of €10 million–€746 million for policy deficiencies. In the SaaS market, a credible, accurate privacy policy is also a sales asset: enterprise procurement teams routinely reject vendors during security reviews for inadequate or outdated privacy documentation.

COCO addresses all three dimensions — completeness, accuracy, and maintenance — through a structured generation workflow:

1. **Data mapping intake**: The attorney or product manager answers a structured questionnaire about the application's data practices — what personal data is collected, from which user categories, via which technical means, for which purposes, shared with which third parties, retained for how long, and processed in which countries.
2. **Jurisdiction selection**: COCO identifies which privacy regimes apply based on the company's user geography and generates the appropriate required disclosures for each applicable law.
3. **Plain-language drafting**: COCO drafts the full privacy policy in plain, readable English (readability target: Flesch-Kincaid Grade 8–10), structured with a user-friendly summary at the top and detailed legal language in the sections below.
4. **Gap analysis**: COCO compares the draft against the company's actual stated data practices and flags any inconsistencies or missing disclosures that could create regulatory exposure.
5. **Update workflow**: When the product team ships a new feature that changes data practices, the attorney inputs a brief change description and COCO generates a redlined update to the existing policy, with a changelog note.
6. **Multi-language output**: COCO produces equivalent translations for key markets (EU, LATAM, APAC) with jurisdiction-specific adjustments, reducing translation and localization time by 60%.

Teams using this workflow report reducing initial privacy policy drafting time from 15 hours to 2–3 hours, and update cycles from 6 hours to under 1 hour. Regulatory audit preparation time drops by 40% because the policy is continuously aligned with actual data practices. Enterprise sales cycles that previously stalled on privacy documentation are resolved in days rather than weeks.

**Who benefits:**
- **In-house legal and privacy counsel** responsible for maintaining accurate, multi-jurisdictional privacy documentation.
- **Product and engineering managers** who need to understand privacy implications of new features before shipping.
- **Chief Privacy Officers and DPOs** who must demonstrate regulatory compliance to supervisory authorities and enterprise customers.
- **Sales and solutions engineering teams** who lose deals when privacy documentation is inadequate during procurement reviews.

---

## 5 Practical Prompts

**Prompt 1 — Full privacy policy generation**
```
Generate a comprehensive privacy policy for [COMPANY NAME], a [PRODUCT DESCRIPTION] SaaS platform.

Data practices:
- Personal data collected: [LIST: e.g., email, name, usage data, payment info, IP address]
- Collection methods: [LIST: e.g., account registration, cookies, API integrations, third-party SSO]
- Purposes: [LIST: e.g., service delivery, analytics, marketing, product improvement]
- Third parties: [LIST: e.g., Stripe for payments, AWS for hosting, HubSpot for CRM, Google Analytics]
- Data retention: [e.g., account data retained for 3 years after account closure]
- International transfers: [e.g., data processed in US, EU, Singapore]
- User rights: [e.g., access, deletion, portability, opt-out of marketing]

Applicable jurisdictions: [GDPR / CCPA / PIPEDA / other]

Format: Plain English, Flesch-Kincaid Grade 8-10, with a plain-language summary at the top and detailed sections below. Include a "Last Updated" date field.
```

**Prompt 2 — Privacy policy gap analysis**
```
Review the following privacy policy against our actual data practices and identify:
1. Any data practices we perform that are not disclosed in the policy
2. Any disclosures in the policy that no longer match our actual practices
3. Required disclosures under [GDPR / CCPA / other applicable law] that are missing
4. Language that is too vague to satisfy regulatory specificity requirements
5. Recommended additions or corrections for each gap found

OUR ACTUAL DATA PRACTICES:
[DESCRIBE CURRENT PRACTICES]

CURRENT PRIVACY POLICY:
[PASTE POLICY TEXT]
```

**Prompt 3 — Feature change policy update**
```
Our SaaS platform is adding the following new feature: [DESCRIBE FEATURE].

This feature changes our data practices as follows:
- New data collected: [LIST]
- New purposes: [LIST]
- New third-party sharing: [LIST]
- Retention changes: [DESCRIBE]

Review our existing privacy policy below and:
1. Identify which sections need to be updated
2. Draft the updated language for each affected section
3. Draft a "What's Changed" summary for user notification
4. Flag any changes that require prior user consent under GDPR or CCPA

EXISTING POLICY:
[PASTE EXISTING POLICY]
```

**Prompt 4 — CCPA-specific disclosures**
```
Draft the California-specific sections of our privacy policy to comply with CCPA/CPRA. Include:
1. Categories of personal information collected (using CCPA statutory categories)
2. Business or commercial purposes for collection
3. Categories of third parties with whom we share personal information
4. Consumer rights notice (right to know, delete, correct, opt-out, non-discrimination)
5. "Do Not Sell or Share My Personal Information" opt-out mechanism description
6. Sensitive personal information disclosures (if applicable)
7. Shine the Light disclosure for California residents

Our data practices: [DESCRIBE]
```

**Prompt 5 — Privacy policy readability review**
```
Review the following privacy policy for readability and user-friendliness:
1. Calculate approximate reading level (target: Grade 8-10)
2. Identify sections that use excessive legal jargon and rewrite in plain English
3. Suggest a simplified summary (150-200 words) for the top of the page that covers the key points most users care about
4. Recommend a better structure or table of contents if the current organization is confusing
5. Flag any "dark pattern" language that obscures user rights or data practices

PRIVACY POLICY:
[PASTE POLICY TEXT]
```
