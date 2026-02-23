# #363 — AI IP Portfolio Analyzer

**Role**: Legal
**Industry**: SaaS/Tech
**Task**: Analysis
**Slug**: ai-ip-portfolio-analyzer

---

## Introduction

For technology companies, intellectual property is often the most valuable asset on the balance sheet — yet it is frequently the least systematically managed. A SaaS company that has been operating for 5–10 years may have accumulated patents (granted and pending), trademarks (registered and common law), copyrights in source code and marketing materials, trade secrets in algorithms and customer data, and open source obligations — all tracked in disparate systems or, in many cases, in spreadsheets maintained by individuals who have since left the company.

The consequences of poor IP portfolio management are severe and immediate. A patent that lapses for non-payment of maintenance fees is lost permanently. A trademark that is not defended against infringers can become unenforceable through abandonment. Open source license obligations that are not honored expose companies to significant litigation risk — multiple companies have faced GPL enforcement actions resulting in product injunctions and six-figure settlements. M&A transactions frequently surface IP defects that reduce deal value by 10–30% or kill deals outright: a patent that was assumed to cover a core product feature that it does not actually cover, a key source code repository containing GPL-licensed code without proper license tracking, a trademark registered in the wrong entity name.

The challenge is not just tracking — it is strategic prioritization. A company with 150 patent assets cannot afford to prosecute all of them with equal vigor. Decisions about which patents to maintain, which to abandon, which to license, which to assert, and which to sell require analysis of claim scope, competitive relevance, citation strength, licensing revenue potential, and litigation risk — analysis that takes experienced IP counsel many hours per asset to perform at any depth.

COCO transforms IP portfolio management from a reactive, fragmented process into a proactive, intelligence-driven workflow:

1. **Portfolio ingestion**: The IP team uploads the portfolio data — patent numbers, status, maintenance fee due dates, trademark registrations, copyright registrations, open source component inventories, license agreements.
2. **Risk flagging**: COCO identifies immediate risks — patents approaching maintenance fee deadlines, trademark registrations in jurisdictions where the company has not filed, open source components with license obligations that may not be honored.
3. **Claim scope analysis**: For patent assets, COCO analyzes claim language to assess the breadth of protection and identifies whether key products or features appear to be covered by each patent.
4. **Competitive mapping**: Given a list of competitor products or publicly known competitor patents, COCO assesses potential infringement risks (freedom-to-operate gaps) and potential licensing or assertion opportunities.
5. **Portfolio rationalization**: COCO generates a tiered recommendation: assets to maintain and actively prosecute, assets to maintain for defensive value, assets to license, and assets to abandon to reduce costs.
6. **M&A readiness report**: COCO produces an IP due diligence readiness assessment identifying gaps that would surface in a buyer's due diligence review and recommending remediation steps before a sale process begins.

Technology companies using this workflow report reducing annual IP maintenance costs by 15–25% through systematic abandonment of non-strategic assets. IP due diligence preparation time for M&A transactions drops from 6–8 weeks to 2–3 weeks. Open source compliance gaps that would have been discovered by acquirers or through litigation are identified and remediated proactively, preserving deal value.

**Who benefits:**
- **IP counsel and patent attorneys** who manage large patent portfolios and need to make strategic prosecution and maintenance decisions with limited budget.
- **Chief Legal Officers and General Counsel** who must provide board-level visibility into IP portfolio health and risk.
- **M&A and corporate development teams** who need to assess IP portfolio quality quickly in both sell-side and buy-side transactions.
- **Engineering and product leaders** who need to understand open source obligations before shipping and to ensure freedom to operate in competitive markets.

---

## 5 Practical Prompts

**Prompt 1 — IP portfolio health assessment**
```
Analyze our IP portfolio and produce a health assessment. Portfolio data below.

For each asset category, identify:
1. Assets at immediate risk (expiring, lapsing, contested)
2. Coverage gaps (key products or markets without IP protection)
3. License compliance obligations not currently documented
4. Recommended immediate actions with priority: Critical / High / Medium / Low

PATENT PORTFOLIO: [LIST WITH STATUS, MAINTENANCE DATES, ASSIGNEE]
TRADEMARK PORTFOLIO: [LIST WITH JURISDICTIONS, RENEWAL DATES]
KEY SOFTWARE COMPONENTS: [LIST WITH OPEN SOURCE LICENSES]
KEY LICENSE AGREEMENTS (INBOUND/OUTBOUND): [DESCRIBE]

OUR KEY PRODUCTS/FEATURES: [LIST]
OUR KEY MARKETS: [LIST JURISDICTIONS]
```

**Prompt 2 — Patent claim scope analysis**
```
Analyze the following patent claims and assess:
1. The scope of protection each independent claim provides (broad, moderate, narrow)
2. Whether our product [PRODUCT DESCRIPTION] appears to fall within the scope of each claim
3. Whether any competitor product [COMPETITOR PRODUCT DESCRIPTION] appears to infringe these claims
4. Claim construction risks — language that could be interpreted narrowly by a court
5. Recommended prosecution strategy: maintain as-is / file continuation / broaden claims / abandon

PATENT NUMBER: [NUMBER]
INDEPENDENT CLAIMS: [PASTE CLAIMS]
OUR PRODUCT DESCRIPTION: [DESCRIBE KEY FEATURES]
```

**Prompt 3 — Open source license compliance audit**
```
Our software product uses the following open source components. For each component:
1. Identify the license type (MIT, Apache 2.0, GPL v2, GPL v3, LGPL, AGPL, etc.)
2. State the key obligations that license imposes on us
3. Assess whether our current distribution method triggers copyleft obligations
4. Identify any license incompatibilities between components we are using together
5. Flag any components where we may be out of compliance and recommend remediation

OPEN SOURCE COMPONENTS:
[LIST COMPONENTS WITH VERSION NUMBERS AND LICENSE IDENTIFIERS]

OUR DISTRIBUTION METHOD:
[DESCRIBE: e.g., SaaS (no distribution), binary distribution, source distribution]
```

**Prompt 4 — Freedom-to-operate risk assessment**
```
We are planning to launch the following new product feature: [DESCRIBE FEATURE IN TECHNICAL DETAIL].

Conduct a preliminary freedom-to-operate risk assessment:
1. Identify the key technical concepts and methods our feature employs
2. List the patent classification codes (CPC/IPC) most relevant to this technology
3. Identify any publicly known patents held by competitors [LIST COMPETITORS] that could be relevant
4. Assess the risk level: High / Medium / Low, with reasoning
5. Recommend whether a formal FTO opinion from patent counsel is warranted
6. Suggest design-around options if risk is High

FEATURE DESCRIPTION:
[DETAILED TECHNICAL DESCRIPTION]
KNOWN COMPETITOR PATENTS (if any):
[LIST]
```

**Prompt 5 — M&A IP due diligence readiness**
```
We are preparing for a potential [SALE / ACQUISITION / INVESTMENT] transaction. Conduct an IP due diligence readiness assessment:

1. Chain of title — identify any gaps in assignment or work-for-hire documentation for our key IP assets
2. Employee/contractor IP agreements — flag any employees or contractors who may have created IP without proper assignment agreements
3. Third-party IP — identify any third-party IP embedded in our products that requires licenses we may not have
4. Open source risk — summarize our open source compliance posture and any known gaps
5. Encumbrances — are any IP assets pledged as security, subject to liens, or covered by exclusivity licenses?
6. Jurisdiction gaps — are key trademarks registered in all jurisdictions where we operate commercially?
7. Priority remediation list — the 5 items that, if unaddressed, are most likely to reduce deal value or kill a transaction

OUR BUSINESS: [DESCRIBE PRODUCTS, MARKETS, KEY IP ASSETS]
```
