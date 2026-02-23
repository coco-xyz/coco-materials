# #397 — AI Model Bias and Fairness Auditor — Video Script (English)

**Category**: Data Scientist / Compliance
**Metric**: 60% reduction in fairness audit documentation time

---

**Scene 1 (0:00–0:10): Hook**
[Visual]: Email arriving: "Your loan approval model is under regulatory review for disparate impact on minority applicants" — engineer's face going pale
[Voiceover]: "Your model just triggered a regulatory review for discriminatory impact. Do you have the fairness audit documentation to respond?"

---

**Scene 2 (0:10–0:30): The Problem**
[Visual]: EU AI Act diagram showing high-risk AI requirements; data scientist trying to calculate disparate impact ratio manually, getting confused by demographic parity vs equalized odds; lawyer asking for compliance report and getting a spreadsheet
[Voiceover]: "Fairness is now a legal requirement — EU AI Act, ECOA, NYC Local Law 144. But fairness is also a family of conflicting metrics. Demographic parity, equalized odds, predictive parity — you can't satisfy all three simultaneously. Most teams don't know which one applies to their use case, let alone how to document it for auditors."

---

**Scene 3 (0:30–0:50): COCO in Action**
[Visual]: Pasting confusion matrices by demographic group into COCO with use case context; COCO calculating disparate impact ratios, identifying which metrics are legally relevant for credit decisions, flagging a 0.74 ratio below the four-fifths rule threshold, recommending threshold adjustment as mitigation
[Voiceover]: "Share your model's performance metrics by protected group and your regulatory context. COCO calculates the right fairness metrics, identifies which findings are regulatory concerns, recommends mitigation strategies, and generates compliance-ready audit documentation with the language auditors need."

---

**Scene 4 (0:50–1:00): The Result**
[Visual]: Complete fairness audit report delivered to compliance team, regulatory review resolved with documentation, model cleared for deployment
[Voiceover]: "60% less time on audit documentation. Compliance confidence. Try COCO at coco.xyz"
