# #394 — AI Data Quality Audit Advisor — Video Script (English)

**Category**: Data Scientist / Analysis
**Metric**: Average 3.7 critical data issues caught per dataset before model training

---

**Scene 1 (0:00–0:10): Hook**
[Visual]: Data scientist receiving a Slack message with a link to a 200-column dataset: "This is what we used for the last model, you should be fine"
[Voiceover]: "200 columns. No documentation. No data dictionary. And you're supposed to build a production model on this."

---

**Scene 2 (0:10–0:30): The Problem**
[Visual]: Model performing great in cross-validation, then degrading 30 AUC points in production; engineer discovering that a timestamp join had off-by-one errors for months; another team finding a label definition changed 6 months ago and nobody told the data team
[Voiceover]: "73% of ML production incidents trace back to data quality issues that were present in training data for weeks. You can't catch what you don't check — and without a systematic audit framework, most teams miss 3-5 critical issues per dataset."

---

**Scene 3 (0:30–0:50): COCO in Action**
[Visual]: Pasting dataset schema and pandas-profiling output into COCO, receiving a structured audit checklist — completeness, leakage risk, label quality, distribution health — then COCO flagging a suspicious null pattern that indicates a data collection bug
[Voiceover]: "Describe your dataset and paste your profiling output to COCO. It generates a custom audit checklist for your specific ML task — covering leakage risk, label quality, distribution shift, and bias indicators. Work through it systematically, share your findings, and COCO helps you interpret the ambiguous ones."

---

**Scene 4 (0:50–1:00): The Result**
[Visual]: Structured data quality report shared with engineering team, 3 critical bugs fixed before model training starts, compliance officer approving the audit documentation
[Voiceover]: "3.7 critical issues caught per dataset on average. Clean data, trustworthy models. Try COCO at coco.xyz"
