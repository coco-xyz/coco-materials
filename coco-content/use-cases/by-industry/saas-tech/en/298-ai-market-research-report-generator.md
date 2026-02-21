# Use Case #298: AI Market Research Report Generator

**Role**: Researcher | **Industry**: SaaS, Technology, Consulting, Market Research | **Task**: Research, Market Analysis, Strategic Intelligence

---
## Detailed Introduction

**The Pain: Market Research Reports Take Weeks to Produce and Are Outdated Before They're Finished**

Market research is the intelligence foundation of strategic decision-making — yet the process for producing it is so slow, expensive, and manual that most organizations either outsource it to agencies (at costs ranging from $15,000 to $150,000 per report) or conduct it with insufficient rigor internally. The result is a strategic planning cycle that runs on either expensive third-party intelligence that arrives months after the question was asked, or internal research that is faster but methodologically thin.

The operational bottleneck is the synthesis problem. A comprehensive market research report requires assembling evidence from multiple streams: industry databases (Statista, IBISWorld, Euromonitor), primary research (customer interviews, surveys, focus groups), competitive intelligence (product teardowns, pricing analysis, positioning review), regulatory and macroeconomic context, and analyst coverage. Each stream is gathered differently, formatted differently, and requires different expertise to interpret. The average market research analyst spends 60–70% of their time in the gathering and formatting stages — downloading reports, cleaning data, standardizing formats — rather than in the analysis and synthesis stage where their actual value lies.

Speed creates another critical problem: by the time a multi-week research project is complete, the market conditions it analyzed have shifted. A SaaS company commissions a competitive landscape analysis in January for Q2 strategic planning. The research takes 8 weeks. By the time the report lands in April, two of the analyzed competitors have launched major product updates, one has been acquired, and the pricing landscape has shifted. The executives reading the report are making Q2 decisions on January market data.

For smaller organizations and early-stage companies, the economics of this approach are simply prohibitive. A startup assessing product-market fit in a new vertical cannot commission a $45,000 Forrester report. An internal researcher without budget for premium data access cannot build a rigorous competitive landscape from public sources in under a month using manual methods. This creates a systematic intelligence disadvantage for companies that most need to understand their markets.

**How COCO Solves It**

COCO acts as a market research synthesis and report generation engine — taking inputs from multiple sources and producing structured, decision-ready market intelligence in a fraction of the time a manual process requires.

1. **Research Framework Design**: Before any data gathering begins, COCO designs a research framework appropriate for the strategic question — defining what needs to be learned, what sources are most relevant, and how findings will map to specific decisions.
   - Translates a business question ("should we enter the mid-market HR tech segment?") into a structured research plan with specific information requirements
   - Identifies the 5–8 key questions the research must answer to support the decision
   - Maps each question to the most appropriate research method and source type

2. **Competitive Landscape Synthesis**: Given input from multiple competitive intelligence sources (product pages, pricing pages, review sites like G2 and Capterra, press releases, job postings, LinkedIn analysis), COCO synthesizes a structured competitive map.
   - Produces a competitive positioning matrix across key dimensions (pricing tier, target segment, core features, differentiation claims)
   - Identifies competitive white space — segments or needs that incumbents are not adequately serving
   - Tracks competitive momentum: which players are investing, hiring, acquiring, and building in which directions

3. **Customer Segment Intelligence**: From primary research inputs (interview transcripts, survey data, customer reviews), COCO structures customer segment profiles with the precision needed for product and go-to-market decisions.
   - Identifies distinct customer segments by need, not just by demographic profile
   - Maps each segment's jobs-to-be-done, current solutions, unmet needs, and switching triggers
   - Produces willingness-to-pay signals from available data (review sentiment, pricing sensitivity indicators)

4. **Market Sizing and Opportunity Assessment**: COCO guides researchers through rigorous bottom-up or top-down market sizing, flagging assumptions and producing sensitivity analysis.
   - Structures TAM/SAM/SOM estimates with explicit assumptions and data sources
   - Flags where assumptions are uncertain and models sensitivity to assumption changes
   - Contextualizes market size estimates against comparable market benchmarks

5. **Report Structure and Narrative Generation**: COCO produces a structured report with executive summary, section narratives, and decision recommendations — not just a collection of data tables.
   - Follows a consistent report architecture: executive summary → market context → competitive landscape → customer intelligence → opportunity assessment → strategic recommendations
   - Writes section narratives that integrate quantitative and qualitative evidence into coherent arguments
   - Produces an executive summary of 1–2 pages structured as: situation → key findings → implications → recommendations

**Measurable Results**

- **Report production time**: Reduced from 6–10 weeks (agency-produced) or 3–5 weeks (internal manual) to 1–2 weeks with COCO synthesis support
- **Cost reduction**: Internal market research production costs reduced by 65–80% vs. agency outsourcing for comparable research scope
- **Source coverage**: COCO-supported research processes 2–3x more evidence sources than manual single-analyst research within the same timeframe
- **Decision relevance**: Research structured around explicit decision frameworks produces 40% higher rates of stakeholder self-reported "actionability" compared to general market surveys
- **Update cycles**: Competitive intelligence maintained with COCO can be refreshed quarterly vs. annually for agency-produced research, dramatically improving timeliness

**Who Benefits**

- **Market Research Analysts**: Shift from 70% data gathering / 30% analysis to 30% gathering / 70% analysis — doing the work that actually develops their strategic judgment
- **Strategy and Corporate Development Teams**: Produce M&A due diligence market assessments, new market entry analyses, and competitive intelligence faster and at lower cost
- **Product Managers**: Generate market context for new product proposals without waiting months for formal research projects
- **Founders and Early-Stage Companies**: Access research-quality market intelligence without the budget for agency research or premium market data subscriptions

---
## Practical Prompts

**Prompt 1: Full Market Research Project Design**
```
I need to design a market research project to answer a strategic business question. Help me build a rigorous research plan.

Strategic question: [e.g., "Should we expand our product into the healthcare vertical?" / "Is there a defensible market position in the mid-market HR tech segment for a company with our profile?"]

Decision context:
- Who will use these findings: [describe decision-makers and their role]
- Timeline: [when is the decision being made]
- Budget/resources for research: [what primary research can we do — interviews, surveys, etc.]
- What we already know: [summarize existing knowledge]
- What we don't know that's critical: [describe knowledge gaps]

Please:
1. Break the strategic question into 6–8 specific research sub-questions
2. For each sub-question, identify the most appropriate research method and data source
3. Recommend a sequencing of the research activities (what to do first, why)
4. Identify the minimum viable research scope — if resources are constrained, what absolutely must be done?
5. Design a reporting structure: what sections should the final report have and what question does each answer?
6. Flag the 2–3 highest-risk assumptions we're making that the research must stress-test
```

**Prompt 2: Competitive Landscape Analysis from Public Sources**
```
I need to produce a competitive landscape analysis for [market/category] using available public intelligence. I'm providing a set of competitor profiles.

Market I'm analyzing: [describe — what is the product category, who are the buyers, what geography]

Competitor data (for each competitor, provide what you have):
- Company name:
- Founded / funding / revenue (if known):
- Target customer segment:
- Core product description:
- Pricing (if public):
- Key differentiators (from their marketing/positioning):
- G2/Capterra rating and key review themes (paste if available):
- Recent news / product launches / hirings:

Please produce:
1. A competitive positioning matrix comparing all players across [pricing tier / target segment / key features / differentiation approach]
2. Identification of 2–3 competitive white spaces — segments or needs not well-served by current players
3. An assessment of competitive momentum: who is investing most aggressively and in what direction
4. A market map showing how players cluster (e.g., enterprise vs. SMB, all-in-one vs. point solution)
5. Strategic implications for a new entrant or for our positioning decisions
```

**Prompt 3: Customer Segment Research Synthesis**
```
I've conducted [N] customer interviews and collected [N] customer reviews/survey responses. Help me synthesize these into structured segment intelligence.

Research context:
- The market I'm researching: [describe]
- The product/solution context: [what are customers evaluating or using]
- Interview/review data (paste or describe):
[Paste interview notes or key themes from reviews]

Please:
1. Identify 3–4 distinct customer segments based on needs and behaviors (not just demographics)
2. For each segment, produce a profile covering:
   - Primary job-to-be-done
   - Current solution and what they dislike about it
   - Unmet needs or underserved requirements
   - Key purchase decision factors
   - Willingness-to-pay signals (what they've said about value and pricing)
   - Switching triggers (what would make them switch from their current solution)
3. Rank segments by attractiveness as target customers for [our product/a new entrant]
4. Identify which segment has the clearest problem-solution fit signal
5. Recommend 3 product or positioning changes that would significantly increase appeal to the highest-priority segment
```

**Prompt 4: Market Sizing — Bottom-Up TAM/SAM/SOM**
```
Help me build a rigorous bottom-up market size estimate for [market]. I want to avoid the top-down percentage-of-billion-dollar-market approach and instead build from actual customer economics.

Market definition:
- What product/service are we sizing: [describe]
- Geographic scope: [describe]
- Customer profile we're targeting: [describe]

Data I have:
- Estimated number of potential customers: [source and confidence level]
- Average contract value / transaction size: [data or estimate]
- Purchase frequency: [annual / per project / monthly SaaS / etc.]
- Any existing market size estimates I've seen: [cite and describe methodology]

Please:
1. Build a bottom-up market size calculation with explicit arithmetic
2. Show TAM (total addressable market) → SAM (serviceable addressable market) → SOM (serviceable obtainable market)
3. Make all assumptions explicit with confidence ratings (high / medium / low)
4. Run a sensitivity analysis: what happens to the SOM estimate if key assumptions are +/- 30%?
5. Identify the 2–3 assumptions with the highest impact on the estimate that need the most validation
6. Compare our bottom-up estimate to any top-down estimates in the industry — explain any significant differences
```

**Prompt 5: Executive Market Research Report Draft**
```
I've completed my market research and have assembled findings across multiple areas. Help me structure and draft a final executive market research report.

Report context:
- Strategic question this report answers: [state the question]
- Audience: [describe — board / executive team / investors / product team / etc.]
- Decision this will inform: [describe the specific decision]
- Required length: [e.g., 10-page executive report / 3-page one-pager / 20-slide deck]

Research findings (describe or paste your key findings from each area):
- Market size and growth: [findings]
- Customer intelligence: [findings]
- Competitive landscape: [findings]
- Macro/regulatory context: [findings]
- Key risks and uncertainties: [findings]

Please:
1. Draft an executive summary (max 300 words): situation → key findings → strategic implications → recommendation
2. Design the report structure with section titles and 1-sentence scope descriptions
3. Write the introduction section establishing market context and why this analysis matters now
4. Draft the strategic recommendations section — turn findings into specific, actionable recommendations
5. Identify any major findings gaps I should flag as limitations before distributing the report
```

---
