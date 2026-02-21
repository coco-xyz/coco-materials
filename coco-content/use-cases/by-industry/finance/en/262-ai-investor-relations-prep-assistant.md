# Use Case #262: AI Investor Relations Prep Assistant

**Role**: Finance Professional | **Industry**: Finance, SaaS, Manufacturing, Retail, Healthcare, Biotechnology | **Task**: Reporting, Investor Relations, Executive Communications

---
## Detailed Introduction

**The Pain: IR Teams and CFOs Spend 40-60 Hours Per Quarter Preparing for Earnings Calls and Investor Meetings — and Still Get Blindsided by Analyst Questions**

Investor relations is one of the highest-stakes communication functions in a public company — and one of the most time-intensive to prepare for. A typical quarterly earnings cycle requires the CFO and IR team to produce an earnings press release, a supplemental financial data package, a CEO/CFO script for the earnings call, a comprehensive Q&A preparation document, investor presentation slides, and individualized preparation for analyst meetings that may run for two to three weeks following the call. The total time investment across the IR team and finance leadership routinely exceeds 40-60 person-hours per quarter, not counting the management time consumed in review cycles.

The Q&A preparation problem is particularly acute. Analysts covering a stock know the company's business model, competitive dynamics, and financial history deeply. They prepare targeted questions designed to probe management credibility, surface strategic inconsistencies, and stress-test financial guidance. A CFO who cannot give a crisp, coherent answer to a question about gross margin trajectory under different revenue mix scenarios — or who gives a different answer than they gave to the same question six months ago — damages investor confidence in ways that persist for quarters.

Yet Q&A prep at most companies is ad hoc and incomplete. The IR team collects potential questions from internal stakeholders, adds a few "usual suspects" from prior calls, and drafts answers — but the process rarely captures the full universe of questions an informed analyst might ask, rarely incorporates the context of how peer companies answered similar questions on their recent calls, and almost never systematically checks whether the draft answer is consistent with prior guidance and disclosures. The result is that IR teams walk into earnings calls with a 50-question prep document that covers 60% of what gets asked, and management has to improvise answers to the rest.

For pre-IPO and growth-stage companies preparing for institutional investor meetings and roadshows, the challenge is equally demanding but structurally different: the narrative must be compelling and consistent across dozens of meetings with investors who have very different investment theses, levels of familiarity with the company, and questions about valuation and risk.

**How COCO Solves It**

COCO's AI Investor Relations Prep Assistant accelerates every phase of quarterly IR preparation — from message development through Q&A anticipation — while ensuring consistency and quality that manual processes cannot reliably deliver.

1. **Earnings Narrative Development and Message Refinement**: COCO takes your draft earnings narrative — key financial results, operational highlights, guidance — and stress-tests it for logical consistency, specificity, and alignment with what investors care most about. It identifies places where claims are vague ("strong growth") without quantification, where guidance language may be more or less committal than management intends, and where the narrative creates potential credibility gaps with prior disclosures.

2. **Comprehensive Q&A Anticipation**: Given your financial results, guidance, competitive context, and prior call transcripts, COCO generates a comprehensive set of probable analyst questions — not just the obvious ones, but the adversarial, wedge-framing, and multi-part questions that experienced IR teams know to expect. Each question comes with a draft answer structured using the proven "answer-evidence-implication" framework, plus a flag for any answer that requires legal review or careful disclosure language.

3. **Competitive Call and Disclosure Analysis**: COCO analyzes recent earnings call transcripts and investor presentations from comparable companies to surface the questions and themes that analysts are currently pressing across the sector. If three peer companies faced aggressive questions about AI cost exposure or supply chain normalization in their recent calls, COCO flags those themes as high-probability topics for your call and pre-drafts answers in the context of your company's specific situation.

4. **Consistency Checking Against Prior Guidance**: COCO compares draft Q&A answers and forward guidance language against your previous quarterly transcripts and press releases to identify any inconsistencies — places where the current draft says something different from what management said last quarter. This catches guidance drift before it becomes a credibility problem on the call.

5. **Investor Meeting Preparation by Audience**: For roadshows and institutional investor meetings, COCO generates meeting-specific preparation packages tailored to each investor's known investment style, portfolio thesis, and areas of likely inquiry. A long-only growth investor and a hedge fund with a short position will ask very different questions — COCO prepares management for both.

6. **Post-Call Analysis and Learning**: After the earnings call, COCO analyzes the actual transcript against the preparation materials — which questions were not anticipated, which answers deviated from the script, where management appeared uncertain. This creates a systematic improvement loop for the next quarter.

**Measurable Results**

- **Q&A preparation coverage**: COCO-prepared Q&A documents cover 87-92% of actual analyst questions asked on earnings calls (measured against post-call transcript analysis), vs. a typical manual prep coverage rate of 55-65%
- **Earnings prep time**: Reduced from 40-60 hours to 18-25 hours per quarter for the IR team — a 50-55% time reduction
- **First-pass Q&A answer quality**: 81% of COCO-generated draft answers are accepted by IR teams with minor edits, vs. 45-50% for internally drafted answers
- **Guidance consistency errors**: IR teams using COCO's consistency checking eliminate an average of 3-5 inadvertent guidance inconsistencies per quarter that would otherwise appear in prepared remarks or Q&A
- **Analyst surprise incidents**: Companies using COCO report 40% fewer "unexpected question" moments where management had to improvise without preparation

**Who Benefits**

- **CFOs**: Walk into earnings calls with comprehensive, rigorously consistent preparation — and the confidence that comes from having anticipated 90%+ of likely analyst questions
- **IR Teams**: Spend less time on low-value Q&A drafting and more time on investor relationship strategy and institutional outreach
- **CEOs**: Receive a concise, well-synthesized briefing for earnings calls and investor meetings rather than having to absorb 60-page prep books
- **Legal and Compliance Teams**: Benefit from COCO's disclosure consistency checking, which reduces the risk of inadvertent forward-looking statement problems or guidance inconsistencies

---

## Practical Prompts

**Prompt 1: Earnings Call Q&A Preparation**
```
I need to prepare a comprehensive Q&A document for our upcoming earnings call covering [quarter and year].

Financial results summary:
- Revenue: [$actual] vs. [$guidance/consensus] — [above/below/in line]
- Gross margin: [%] vs. [prior quarter %] and [prior year %]
- EBITDA/Operating income: [$actual] vs. [$guidance]
- EPS: [$actual] vs. [$estimate]
- Key metric #1 (e.g., ARR / same-store sales / units shipped): [actual vs. prior period]
- Key metric #2: [actual vs. prior period]
- Q[X+1] guidance: [revenue and key metrics]
- Full year guidance: [any updates]

Narrative context:
- Biggest positive surprises vs. expectations: [describe]
- Areas of underperformance or concern: [describe]
- Key strategic developments this quarter: [describe]
- Competitive landscape developments: [describe]
- Prior guidance you need to reconcile: [what you said last quarter and how this quarter's results relate]

Please:
1. Generate 40-50 probable analyst questions organized by category: results quality, guidance credibility, competitive positioning, unit economics, balance sheet/capital allocation, and macro/sector risks
2. Draft an answer for each question using the answer-evidence-implication framework (direct answer, supporting data point, forward implication)
3. Flag any questions where the answer requires careful legal/disclosure language
4. Identify 5-8 "hardest questions" where management needs to be especially well-prepared
5. Check my guidance language for inadvertent commitments or ambiguities I should resolve
6. Recommend 3 proactive messages to embed in prepared remarks to preempt the most likely concerns
```

**Prompt 2: Earnings Press Release and Script Review**
```
Please review our draft earnings press release and CFO prepared remarks script for the upcoming call.

Draft press release:
[Paste full draft press release]

Draft CFO script (key sections):
[Paste financial review section and guidance section]

Prior quarter press release and script (for consistency check):
[Paste or summarize prior quarter key language — guidance given, metrics disclosed, narrative framing]

Please:
1. Check for logical consistency: does every claim flow from the data presented? Are there unsupported assertions?
2. Check for vague language that analysts will push back on: identify and recommend quantification
3. Compare guidance language to prior quarter: flag any inconsistencies in tone, commitment level, or metric definition
4. Identify any disclosure that could be read as more/less optimistic than management intends
5. Recommend 2-3 places to add specificity that would improve the narrative's credibility
6. Review the guidance section: is the range tight enough to be credible, wide enough to be achievable?
7. Flag any language that legal should review before publication
```

**Prompt 3: Sector Competitive Earnings Analysis**
```
I need to understand what questions analysts are pressing in our sector based on peer earnings calls and prepare our own narrative accordingly.

Our company:
- Sector/industry: [describe]
- Business model: [describe]
- Size: [revenue range]
- Key metrics investors track: [list]

Peer companies' recent earnings:
[Paste or summarize themes from 3-5 competitor/peer earnings calls — what did analysts ask about, what issues were raised, what guidance language was used]

Known sector macro themes:
- [Any relevant macro issues: tariffs, interest rates, labor market, AI disruption, etc.]

Please:
1. Identify the top 5-7 sector-wide themes that analysts are currently pressing based on peer call analysis
2. For each theme, assess how it applies to our company: high relevance / moderate / low
3. For the high-relevance themes, draft how we should address them in our prepared remarks or Q&A
4. Identify any sector narrative that our peers are using successfully that we could incorporate
5. Flag any areas where our narrative might appear inconsistent with sector trends (potential credibility risk)
6. Recommend specific language or data points we should prepare to address the most pressing sector questions
```

**Prompt 4: Investor Meeting Prep by Audience**
```
I need to prepare for a series of investor meetings following our earnings call.

Our earnings results and narrative: [paste earnings summary or key messages]

Investor meetings scheduled:
[For each investor, provide: Name/fund, Known investment style (long-only growth / value / hedge fund / index), Size of position if any, Last time we met with them, Any known concerns or previous questions from this investor]

Please for each investor:
1. Identify the 5-8 questions this specific investor is most likely to ask based on their investment style and prior interactions
2. Tailor the key messages I should emphasize for this investor's thesis
3. Note any topics I should be especially careful about with this investor (sensitivities, prior commitments, position risk)
4. Suggest an opening framing of our results that is most compelling for this investor's perspective
5. Identify any data or supplemental information I should have ready for this specific meeting
```

**Prompt 5: Post-Earnings Call Debrief and Improvement Plan**
```
Our earnings call for [quarter] has completed. I want to analyze performance and improve for next quarter.

Actual call transcript:
[Paste full earnings call transcript or key Q&A sections]

Our preparation document (what we anticipated):
[Paste Q&A prep document used for the call]

Please:
1. Identify all questions asked on the call that were NOT in our preparation document — the gaps
2. For each gap question, assess: should we have anticipated this? What signal did we miss?
3. Identify any questions where management's actual answer differed materially from our prepared answer — flag these for narrative consistency review
4. Rate management's answers on the top 10 most important questions: clear and credible / adequate / problematic
5. Identify 2-3 moments where management appeared uncertain or gave an answer that may concern investors — and draft a better response for next quarter
6. Produce a prioritized "preparation improvement" list for Q[X+1]: specific topics to prepare more deeply, new question categories to add, prior guidance to reconcile proactively
```

---
