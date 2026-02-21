# #370 — AI Data Processing Agreement Generator

**Role**: Legal
**Industry**: SaaS/Tech
**Task**: Compliance
**Slug**: ai-data-processing-agreement-generator

---

## Introduction

Data Processing Agreements are among the most frequently required yet least understood compliance documents in the modern enterprise stack. Under GDPR Article 28, every time a data controller (the company that determines what personal data is collected and why) shares personal data with a data processor (a vendor that processes data on the controller's behalf), a compliant DPA must be in place before processing begins. China's PIPL imposes similar requirements for data processors. California's CPRA introduced data processing contract requirements for service providers. The result is that any SaaS company with EU, Chinese, or California users faces a legal obligation to have DPAs in place with every vendor that handles personal data on their behalf — a number that, for a typical enterprise SaaS company, ranges from dozens to hundreds.

The execution gap is significant. A 2023 IAPP survey found that 41% of companies subject to GDPR still lack DPAs with all applicable vendors. The reasons are structural: negotiating a DPA from scratch is time-consuming (2–4 hours per agreement for a qualified privacy attorney), counterparties often present their own DPA forms (which require review and often negotiation), and many vendors have no DPA template at all (requiring the controller to draft one). For SaaS vendors on the other side of the relationship, being unprepared to present a GDPR-compliant DPA during enterprise sales cycles is a sales-cycle killer: enterprise procurement teams routinely require DPA execution as a condition of purchase, and an unprepared vendor may lose a deal or delay closing by weeks.

The content problem compounds the execution gap. A compliant DPA under GDPR Article 28 must contain specific mandatory provisions: subject matter, duration, nature and purpose of processing, type of personal data, categories of data subjects, obligations and rights of the controller, and provisions governing sub-processors, security measures, data subject rights assistance, breach notification, deletion or return of data on termination, and audit rights. Many DPAs in commercial circulation fail to include all required elements — creating false compliance comfort while leaving the controller exposed to regulatory findings.

COCO generates fully compliant, customized DPAs for both sides of the relationship:

1. **Relationship mapping**: The privacy team identifies the parties' roles (controller, processor, or sub-processor), the personal data involved, the processing activities, and the applicable laws.
2. **DPA generation**: COCO drafts a complete, GDPR Article 28-compliant (and PIPL/CPRA-compliant where applicable) DPA with all mandatory provisions properly populated.
3. **Standard Contractual Clauses integration**: For cross-border transfers, COCO identifies whether SCCs are needed (EU-to-third-country transfers) and integrates the correct module of the 2021 EU SCCs into the DPA.
4. **Counterparty DPA review**: When a vendor presents their own DPA, COCO reviews it for compliance gaps, flags mandatory provisions that are absent or deficient, and drafts requested amendments.
5. **Sub-processor provisions**: COCO drafts compliant sub-processor provisions, generates a sub-processor list schedule, and produces a sub-processor change notification template.
6. **DPA tracker**: COCO generates a prioritized vendor DPA execution tracker, identifying vendors who require DPAs and tracking execution status.

Privacy and legal teams using this workflow reduce DPA drafting and review time from 3 hours to 30–45 minutes per agreement. DPA completeness rates (agreements that contain all GDPR Article 28 mandatory provisions) improve from 60–70% to 98%+. SaaS vendors who have COCO-generated DPAs ready to send during sales cycles close enterprise deals 20–35% faster, because the DPA bottleneck is eliminated before it occurs.

**Who benefits:**
- **Privacy counsel and Data Protection Officers** who must execute DPAs with all applicable vendors and ensure the agreements are substantively compliant.
- **SaaS vendors and startup founders** who need enterprise-grade DPA documentation to close deals with enterprise customers without waiting for a privacy attorney.
- **Procurement and vendor management teams** who onboard new vendors and must ensure DPA execution before data processing begins.
- **Enterprise sales and solutions teams** who lose deals or experience delays when they cannot immediately present compliant DPA documentation during customer security reviews.

---

## 5 Practical Prompts

**Prompt 1 — Generate a GDPR-compliant DPA (controller to processor)**
```
Draft a Data Processing Agreement between:
- Controller: [COMPANY NAME] ("[CONTROLLER SHORT NAME]")
- Processor: [VENDOR NAME] ("[PROCESSOR SHORT NAME]")

Processing details:
- Subject matter: [DESCRIBE THE SERVICE THE PROCESSOR IS PROVIDING]
- Duration: [TERM OF THE MAIN SERVICE AGREEMENT]
- Nature and purpose of processing: [DESCRIBE]
- Types of personal data: [LIST — e.g., contact data, financial data, health data, children's data]
- Categories of data subjects: [LIST — e.g., customers, employees, end users]
- Controller obligations: [DESCRIBE]

Additional requirements:
- Sub-processors: [LIST KNOWN SUB-PROCESSORS OR STATE "Schedule to be provided"]
- Security measures: [DESCRIBE OR STATE "As specified in Schedule [X]"]
- Cross-border transfer mechanism needed: [YES (EU SCCs Module 2) / NO]
- Governing law: [JURISDICTION]

Produce a complete DPA that complies with GDPR Article 28, with all required provisions and schedules.
```

**Prompt 2 — Review counterparty's DPA for GDPR compliance**
```
Review the following DPA presented by [VENDOR NAME] for GDPR Article 28 compliance.

Identify:
1. Any mandatory GDPR Article 28(3) provisions that are absent or deficient
2. Any provisions that are inappropriate, one-sided, or create risk for us as Controller
3. The sub-processor provisions — are they compliant with GDPR Article 28(2)?
4. Cross-border transfer provisions — are they sufficient for our transfer scenario?
5. Security provisions — are they substantive or vague?
6. Audit rights — are they practical (we can actually exercise them)?
7. Breach notification timelines — do they meet GDPR Article 33 requirements?

For each gap or issue, draft the specific amendment language we should request.

DPA TEXT:
[PASTE DPA HERE]
```

**Prompt 3 — Standard Contractual Clauses integration**
```
We are transferring personal data from [EU ENTITY] to [NON-EU ENTITY/VENDOR] located in [COUNTRY].

Determine:
1. Whether Standard Contractual Clauses are required for this transfer
2. Which module of the 2021 EU SCCs applies (Module 1: C2C, Module 2: C2P, Module 3: P2P, Module 4: P2C)
3. Which optional clauses we should select and why
4. Any supplementary measures needed for the transfer (encryption, pseudonymization, etc.) given [COUNTRY]'s adequacy status
5. How the SCCs should be incorporated into our DPA or main agreement

TRANSFER SCENARIO:
[DESCRIBE DATA TYPES, PURPOSE, SENDING ENTITY ROLE, RECEIVING ENTITY ROLE]
```

**Prompt 4 — Sub-processor management framework**
```
As a SaaS data processor, we use sub-processors to deliver our service. Draft:

1. The sub-processor provisions to include in our DPA with customers, covering:
   - Prior written consent requirement (general authorization approach)
   - Notification process for sub-processor changes (template notice)
   - Obligations we must flow down to sub-processors
   - Liability for sub-processor failures

2. Our initial sub-processor list schedule, formatted for our DPA, covering:
   [LIST OUR KEY SUB-PROCESSORS WITH: Name, Location, Role, Data Types Processed]

3. A template sub-processor change notification email to send to customers when we add or replace a sub-processor

4. The sub-processor agreement terms we must include in our own agreements with each sub-processor
```

**Prompt 5 — PIPL / CPRA data processing contract requirements**
```
We need data processing contracts that comply with both China's PIPL and California's CPRA (in addition to GDPR) for our global vendor relationships.

For each law, identify:
1. The specific statutory requirements for data processing contracts (cite the relevant articles)
2. How these requirements differ from GDPR Article 28 requirements
3. Any provisions that are required under PIPL or CPRA that are not required under GDPR
4. Whether a single combined DPA can satisfy all three laws, or whether separate agreements are needed
5. Draft the PIPL-specific and CPRA-specific addendum provisions we should add to our standard GDPR DPA

COMPANY PROFILE:
[DESCRIBE — EU operations, China operations, California users]
VENDOR RELATIONSHIP:
[DESCRIBE THE PROCESSING RELATIONSHIP]
```
