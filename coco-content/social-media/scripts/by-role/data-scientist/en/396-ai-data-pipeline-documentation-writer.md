# #396 — AI Data Pipeline Documentation Writer — Video Script (English)

**Category**: Data Scientist / Documentation
**Metric**: New member pipeline onboarding time: 4.2 days → 1.5 days

---

**Scene 1 (0:00–0:10): Hook**
[Visual]: New data engineer inheriting a critical Airflow pipeline, no documentation, Slack message saying "the original author left last month"
[Voiceover]: "The engineer who built this pipeline left last month. The documentation? Also gone."

---

**Scene 2 (0:10–0:30): The Problem**
[Visual]: New engineer spending 4 days reading DAG code trying to understand a business logic CASE WHEN statement; 3am incident alert, no runbook, wrong fix applied, downstream model poisoned; compliance auditor asking for pipeline documentation, getting a GitHub link
[Voiceover]: "84% of data pipelines have incomplete or missing documentation. Every new team member spends 4+ days reverse-engineering what should take hours. And when incidents hit at 3am, there's no runbook — just guesswork and broken models."

---

**Scene 3 (0:30–0:50): COCO in Action**
[Visual]: Pasting Airflow DAG and dbt SQL into COCO with business context notes; COCO generating: pipeline overview, Mermaid data flow diagram, step-by-step description with business logic, assumptions table, failure modes, and an incident runbook
[Voiceover]: "Paste your pipeline code into COCO and add a few sentences of business context. COCO generates the full documentation: data lineage, business logic explanation, assumptions, known edge cases, and an operational runbook with step-by-step incident procedures."

---

**Scene 4 (0:50–1:00): The Result**
[Visual]: New team member understanding the pipeline in 1.5 days; 3am incident handled in 45 minutes using the runbook; compliance audit documentation ready in 2 hours
[Voiceover]: "Onboarding in 1.5 days. Incidents resolved with a runbook. Try COCO at coco.xyz"
