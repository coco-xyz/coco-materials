# #393 — AI A/B Test Results Analyzer — Video Script (English)

**Category**: Data Scientist / Analysis
**Metric**: 55% reduction in incorrect early-termination decisions

---

**Scene 1 (0:00–0:10): Hook**
[Visual]: PM messaging data scientist at 9am: "We're at p=0.04, can we ship?" — experiment is only on day 4 of 14
[Voiceover]: "p=0.04 on day 4. Looks significant. But is it really?"

---

**Scene 2 (0:10–0:30): The Problem**
[Visual]: Dashboard showing 8% uplift, team celebrating, then 3 weeks later the feature is rolled back because the lift disappeared; side panel showing that if you peek 14 times your real false positive rate is 40%, not 5%
[Voiceover]: "Early stopping, multiple metrics, no multiple comparison correction — most A/B test analyses have at least one critical flaw. And the result? Teams ship noise as wins, product quality degrades, and nobody knows why."

---

**Scene 3 (0:30–0:50): COCO in Action**
[Visual]: Pasting experiment setup, sample sizes, and metric results into COCO; COCO detecting the early stopping problem, calculating adjusted p-value, running Benjamini-Hochberg correction on 5 metrics, flagging a segment reversal (mobile users hurt by the feature)
[Voiceover]: "Paste your experiment setup and results to COCO. It runs the right statistical tests, corrects for multiple comparisons, catches early-stopping inflation, and finds segment reversals you'd miss in aggregate. Then it gives you a clear ship/no-ship recommendation with the reasoning."

---

**Scene 4 (0:50–1:00): The Result**
[Visual]: Data scientist presenting a rigorous experiment readout in 20 minutes instead of 3 hours, PM saying "this is the clearest experiment analysis we've ever gotten"
[Voiceover]: "Rigorous A/B analysis in minutes. Ship with confidence. Try COCO at coco.xyz"
