# #390 — AI Model Evaluation Report Generator — Video Script (English)

**Category**: Data Scientist / Reporting
**Metric**: 4.2 hours → 35 minutes per evaluation report

---

**Scene 1 (0:00–0:10): Hook**
[Visual]: Data scientist staring at a terminal full of scikit-learn metrics, a blank Confluence page open beside it, clock showing 6:47 PM
[Voiceover]: "Your model hit 94% AUC. Now you have to explain what that actually means — to your PM, your compliance team, and your CTO. Good luck."

---

**Scene 2 (0:10–0:30): The Problem**
[Visual]: Slides with a single accuracy number, a Slack thread asking "but what does this mean for our false negative rate?", a data scientist copy-pasting confusion matrix numbers by hand into a doc
[Voiceover]: "Writing a proper model evaluation report takes 4+ hours — metrics, calibration, threshold analysis, business impact, risk flags. Most teams skip half of it. Then the model ships and nobody knows why it fails in production."

---

**Scene 3 (0:30–0:50): COCO in Action**
[Visual]: Pasting classification_report and MLflow metadata into COCO, COCO generating structured sections — executive summary, per-class breakdown, threshold recommendation, risk flags — all in one response
[Voiceover]: "Paste your raw outputs into COCO: sklearn reports, AUC curves, experiment configs. COCO interprets each metric, translates precision-recall into business cost language, flags calibration issues, and writes the full report — executive summary through compliance attestation."

---

**Scene 4 (0:50–1:00): The Result**
[Visual]: Polished model evaluation doc shared in Notion, PM commenting "finally I understand what recall means for us", model review meeting lasting 20 minutes instead of 90
[Voiceover]: "From 4 hours to 35 minutes. Complete reports, every time. Try COCO at coco.xyz"
