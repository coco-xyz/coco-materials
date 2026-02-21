# Use Case #311: AI Business Continuity Plan Writer

**Role**: Operations Manager | **Industry**: Enterprise | **Task**: Documentation

---

## Detailed Introduction

Business continuity planning (BCP) is one of the most universally recognized organizational priorities and one of the most consistently underdeveloped. The reason is straightforward: writing a comprehensive, actionable business continuity plan is an enormous undertaking that requires synthesizing input from every department, mapping complex interdependencies, designing detailed recovery procedures for dozens of scenarios, and keeping the resulting document alive and current through constant organizational change. For most organizations, BCP exists somewhere on a spectrum between "we have a document from three years ago that nobody has read" and "we have a plan for the most obvious scenarios but significant gaps everywhere else."

The consequences of inadequate business continuity planning are catastrophic when realized. A 2023 IBM study found that the average cost of a business disruption (across all sizes) is $1.4 million per day. Organizations without tested BCPs take 30-50% longer to recover from disruptions than those with mature, exercised plans. Regulatory requirements — PCI DSS, ISO 22301, SOC 2, and sector-specific standards — mandate documented and tested BCPs, meaning inadequate planning carries both operational and compliance risk.

The operational challenge for the operations manager is not understanding that BCP is important — it is finding the structured time, templates, and expertise to build one that is genuinely useful rather than a compliance checkbox exercise.

COCO accelerates BCP development by acting as a structured planning co-author that guides the operations team through the complete BCP methodology, drafts each component, and maintains the document's currency over time.

**How COCO solves it:**

1. **Business Impact Analysis (BIA) Support**: COCO guides the operations manager through a structured BIA process — identifying critical business functions, mapping dependencies (systems, people, suppliers, facilities), and establishing Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) for each function. COCO produces the BIA documentation in a format suitable for leadership review and regulatory audit.

2. **Scenario Library Development**: COCO helps the operations team build a comprehensive scenario library covering the full threat landscape — cyber attacks, natural disasters, key person loss, supply chain failures, facility loss, technology failures, and public health events. For each scenario, COCO applies the BIA data to model the specific impact on the organization's critical functions.

3. **Recovery Procedure Writing**: For each prioritized recovery scenario, COCO drafts detailed recovery procedures with step-by-step actions, role assignments, communication templates, escalation paths, and decision trees for common complications. The procedures are written to be executable under stress, by people who may not be the primary owners of a given system or function.

4. **Communication Template Library**: COCO creates a complete library of pre-written communication templates for each scenario — internal staff notifications, customer communications, regulatory notifications, media statements, and supplier communications — that only require situational details to be inserted during an actual event.

5. **Testing and Exercise Design**: COCO designs tabletop exercise scenarios and facilitator guides for BCP testing sessions, enabling the organization to exercise the plan without hiring external consultants for each exercise cycle.

6. **Plan Maintenance Scheduling**: COCO produces a maintenance schedule and review checklist for the BCP, flagging which sections should be reviewed after specific types of organizational change (acquisitions, technology changes, key personnel moves) and which require regular review regardless.

**Measurable Results:**

Organizations with mature BCPs recover from disruptions 30-50% faster than those without. Operations teams using AI-assisted BCP development complete their initial plans in 6-8 weeks rather than 6-12 months. BCP testing frequencies increase when exercise design is simplified — organizations that test quarterly rather than annually identify and resolve 60% more plan gaps before real events occur. Regulatory audit preparation time for BCP-related documentation decreases by 50% when documentation is built in audit-ready format from the start.

**Who Benefits:**

- **Operations Managers** produce comprehensive BCPs without dedicated BCP expertise or external consultants, and keep them current without heroic ongoing effort.
- **IT and Security Teams** receive clear, aligned recovery procedures for their systems that integrate with the broader organizational BCP rather than existing in isolation.
- **Executive Leadership** have tested, documented business continuity capability to present to boards, auditors, and enterprise clients who require demonstrated resilience.
- **All Employees** benefit from knowing that clear procedures exist for crisis situations, reducing confusion and enabling faster, more organized response when disruptions occur.

---

## Practical Prompts

**Prompt 1 — Business Impact Analysis**
```
Help me conduct a Business Impact Analysis for our [COMPANY TYPE / INDUSTRY] with [NUMBER] employees. Our critical business functions include: [LIST 5-10 FUNCTIONS]. For each function, help me identify: (1) Dependencies (systems, key staff, vendors, facilities), (2) Impact of disruption at 24 hours, 72 hours, 1 week, and 1 month, (3) Appropriate Recovery Time Objective (RTO) and Recovery Point Objective (RPO), (4) Minimum viable staffing required. Format the output as a BIA table.
```

**Prompt 2 — Recovery Procedure for a Specific Scenario**
```
Write a detailed business continuity recovery procedure for the following scenario: [SCENARIO — e.g., primary data center is unavailable for 72+ hours]. Our critical systems: [LIST SYSTEMS]. Our secondary site / cloud backup: [DESCRIBE SETUP]. Key roles involved: [LIST ROLES]. Write step-by-step recovery actions for the first 4 hours, 4-24 hours, and 24-72 hours. Include: decision owner for each step, communication checkpoints, and rollback criteria if the recovery fails.
```

**Prompt 3 — Crisis Communication Template Pack**
```
Create a communication template pack for the following business continuity scenario: [SCENARIO]. Templates needed: (1) Internal staff notification (Hour 1), (2) Customer notification (initial, then update at 24 hours), (3) Regulatory notification (if required under [REGULATION]), (4) Supplier notification, (5) Media holding statement. Each template should have [PLACEHOLDER] fields for situational details and a pre-approved body that does not require legal review before sending.
```

**Prompt 4 — Tabletop Exercise Design**
```
Design a [2-hour / half-day] tabletop exercise for our business continuity plan. Scenario to test: [SCENARIO]. Participants: [LIST ROLES]. Create: (1) Exercise timeline with inject events (things that happen during the exercise to test decision-making), (2) Facilitator guide with discussion questions for each phase, (3) Evaluation criteria for assessing the team's response, (4) Post-exercise debrief template to capture gaps and action items.
```

**Prompt 5 — BCP Gap Assessment**
```
Here is our current business continuity plan: [PASTE BCP OR DESCRIBE CURRENT STATE]. We need to meet [ISO 22301 / SOC 2 / PCI DSS / other standard] requirements. Assess the plan against the standard and provide: (1) A gap analysis of missing or inadequate sections, (2) Priority ranking of gaps by compliance and operational risk, (3) Specific content we need to add for each gap, (4) Estimated effort to close each gap.
```

---
