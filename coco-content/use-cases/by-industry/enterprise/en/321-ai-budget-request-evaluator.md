# Use Case #321: AI Budget Request Evaluator

**Role**: Operations Manager | **Industry**: Enterprise, Manufacturing, Logistics, Retail | **Task**: Analysis, Budget Management, Documentation

---

## Detailed Introduction

**The Pain: Budget Request Evaluation Is Inconsistent, Biased, and Chronically Bottlenecked**

Budget request evaluation is one of the most consequential and least disciplined processes in enterprise operations. Twice a year — and increasingly on an ongoing basis as rolling budgets become standard — operations managers must evaluate dozens of capital expenditure and operating expense requests, decide which ones merit approval, and justify those decisions to finance and executive leadership. The process sounds structured, but in practice it is deeply inconsistent: requests submitted by skilled writers with strong internal relationships fare better than equally meritorious requests from departments with weaker sponsorship. Requests framed around familiar pain points get approved faster than genuinely higher-value requests addressing novel problems. The evaluation process is shaped more by cognitive biases, political dynamics, and the quality of the submission document than by the underlying financial merit of the request.

The structural problem is the absence of standardized evaluation frameworks at the point of submission. Most organizations have ROI requirements and approval thresholds written into policy documents, but those requirements are loosely applied. A capital request for $250,000 of manufacturing equipment might be submitted as a two-paragraph email with a vendor quote attached; an operating expense request for new software might include a 20-page business case with sensitivity analysis. Both will be evaluated by the same operations manager, who now has to mentally normalize wildly inconsistent submissions against each other while managing their regular operational workload. The result is that evaluation quality degrades under volume pressure — managers approve requests with good political backing when they lack the time to scrutinize incomplete justifications, and defer genuinely valuable requests that would benefit from more structured analysis.

Incomplete justification elements are endemic and invisible to the requestor. A department requesting a new logistics management system may include a compelling description of current-state pain points and a clear statement of expected benefits — but omit the implementation cost, training time, change management requirements, and integration complexity that would double the true cost of the initiative. An operations manager evaluating this request without a structured checklist will either miss these omissions or spend significant time hunting for missing information through follow-up conversations. Neither outcome is good: approving an undercosted project creates budget overruns; delaying for more information slows the evaluation cycle for all requests in the queue. Industry analysis suggests that 30% to 50% of capital project overruns trace back to undercosted original requests that were evaluated without complete information.

The downstream impact on approval committees is underappreciated. Executive and finance committees that review capital allocations are themselves time-constrained, and the quality of their decisions depends entirely on the quality of the analysis submitted to them. When operations managers submit a mix of well-analyzed and thinly-supported requests to an approval committee, the committee's time is consumed distinguishing between them rather than making allocation decisions. The best committees compensate by demanding detailed pre-read materials and follow-up sessions; the typical committee approves politically backed requests and defers the rest, producing capital allocation patterns that are only loosely connected to strategic value.

**How COCO Solves It**

COCO brings consistency and analytical rigor to budget request evaluation by helping operations managers apply standardized frameworks, identify missing justification elements, calculate comparative ROI, and generate evaluation summaries that support better approval decisions.

1. **Structured Evaluation Framework Application**: COCO applies a consistent evaluation framework to each budget request, assessing the same dimensions regardless of how the request was originally submitted.
   - Scores requests across standard dimensions: strategic alignment, financial return, implementation risk, urgency, and alternatives considered
   - Generates a standardized evaluation scorecard that enables apples-to-apples comparison across requests

2. **Missing Justification Element Identification**: COCO identifies gaps in budget request submissions — missing cost elements, unsubstantiated benefit claims, absent risk assessments.
   - Produces a completeness checklist flagging missing required elements with specific questions to send to the requestor
   - Prevents incomplete requests from advancing to committee review without adequate information

3. **ROI Calculation and Validation**: COCO calculates and validates return on investment, payback period, and net present value for requests with financial benefit claims.
   - Identifies unrealistic assumptions in benefit projections and flags them for scrutiny
   - Calculates sensitivity analysis showing how ROI changes under different benefit realization scenarios

4. **Benchmark and Comparator Analysis**: COCO helps contextualize budget requests against industry benchmarks and comparable past investments.
   - Compares cost estimates against market benchmarks for similar investments
   - References outcomes of comparable prior investments to calibrate benefit estimates

5. **Priority Ranking and Portfolio View**: COCO generates a ranked view of budget requests across the evaluation portfolio, enabling resource allocation decision-making at the portfolio level.
   - Ranks requests by composite score across evaluation dimensions
   - Models budget allocation scenarios showing trade-offs between different funding combinations

6. **Evaluation Summary Generation**: COCO produces evaluation summaries formatted for approval committee review, condensing complex analysis into decision-ready documentation.
   - Generates one-page evaluation summaries per request with recommendation and supporting rationale
   - Produces portfolio-level budget recommendation documents for finance and executive review

**Measurable Results**

- **Evaluation Consistency**: Standardized framework application reduces evaluator-to-evaluator scoring variance by 60-70%, improving decision fairness across departments
- **Missing Information Rate**: Structured completeness checking catches 40-55% more incomplete requests before committee review, reducing approval delays caused by follow-up cycles
- **Evaluation Time Per Request**: From 45-90 minutes of unstructured analysis → 15-25 minutes of structured review with COCO-generated framework
- **Committee Preparation Time**: Operations managers report 50-60% reduction in time preparing budget committee submissions when using structured evaluation documentation
- **Project Overrun Rate**: Budget requests evaluated with complete cost and risk analysis show 20-30% lower overrun rates versus those approved with incomplete submissions

**Who Benefits**

- **Operations Manager**: Applies a consistent, defensible evaluation standard to every request without the cognitive load of building the framework from scratch each time
- **Finance Business Partner**: Receives standardized evaluation documentation that maps to approval policy requirements, reducing the back-and-forth of incomplete submissions
- **Requesting Department**: Gets clear feedback on what is missing from their submission and what standard they need to meet, enabling faster revision and resubmission
- **Approval Committee**: Reviews consistently structured, pre-analyzed requests that enable genuine allocation decision-making rather than spending meeting time assessing submission completeness

---

## Practical Prompts

**Prompt 1: Evaluate a Budget Request Against Standard Framework**
```
Evaluate the following budget request using a standardized framework and produce a scored evaluation with recommendation.

Budget request details:
[PASTE FULL TEXT OF BUDGET REQUEST OR DESCRIBE]

Evaluation criteria (score each 1-5):
1. Strategic alignment: Does this request align with our stated [YEAR] priorities? ([LIST PRIORITIES])
2. Financial return: Is the ROI/payback period compelling and well-supported?
3. Implementation risk: How executable is this given our current capacity and constraints?
4. Urgency: What is the consequence of deferring this request 6-12 months?
5. Alternatives: Has the requestor demonstrated they considered alternatives?

Our approval thresholds:
- Capital requests: ROI minimum [X]%, payback maximum [X] years
- Operating expense: Annual benefit must exceed cost within [X] months
- Risk tolerance: [DESCRIBE YOUR ORGANIZATION'S RISK POSTURE]

Output:
1. Score for each evaluation criterion (1-5) with specific justification
2. Overall recommendation: APPROVE / CONDITIONAL APPROVE / DEFER / REJECT
3. Conditions or requirements for conditional approval (if applicable)
4. Key risks to flag for committee review
5. Missing information that should be provided before final decision
6. One-paragraph evaluation summary suitable for committee pre-read
```

**Prompt 2: Identify Missing Justification Elements**
```
Review this budget request submission for completeness. Identify all missing, weak, or unsubstantiated elements that should be addressed before the request advances to committee review.

Budget request:
[PASTE REQUEST]

Required elements for a complete submission:
- Problem statement with quantified current-state cost or impact
- Proposed solution description with vendor/implementation approach
- Total cost of ownership (one-time + ongoing costs for 3-5 year horizon)
- Expected benefits with quantification method explained
- Implementation timeline with key milestones
- Resource requirements (internal time, external expertise, change management)
- Risk assessment with likelihood and impact for top 3-5 risks
- Alternatives considered and why rejected
- Success metrics and measurement approach
- Dependencies on other projects or systems

Output:
1. Completeness score: [X of 10 elements present and adequately addressed]
2. Missing elements: list each with specific description of what is missing
3. Weak elements: elements present but insufficiently supported — with specific questions to resolve
4. Follow-up question list to send to the requestor (ready to copy-paste)
5. Estimated revision effort: what would be required for a complete resubmission
```

**Prompt 3: Calculate and Validate ROI**
```
Calculate and validate the ROI, payback period, and net present value for the following budget request. Flag any assumptions that appear unrealistic or unsupported.

Investment details:
- One-time costs: [ITEMIZE: software license, implementation, hardware, training, etc.]
- Ongoing annual costs: [ITEMIZE: maintenance, license renewal, support, etc.]
- Investment horizon for analysis: [X years]
- Discount rate for NPV: [PERCENTAGE, e.g., 8% or use our WACC of X%]

Claimed benefits:
[LIST ALL BENEFIT CLAIMS from the request, e.g.:]
- Labor savings: [X hours/week × Y employees × $Z/hour]
- Error reduction: [X% reduction in Y type of error, claimed value $Z]
- Throughput improvement: [X% increase in volume, claimed revenue impact $Z]
- [OTHER CLAIMED BENEFITS]

Calculate:
1. Total 3-year cost of ownership
2. Annual benefit value with each component itemized
3. Simple payback period (months)
4. 3-year ROI percentage
5. Net present value over 3 years
6. Breakeven analysis: what benefit realization % is needed to break even?
7. Sensitivity table: ROI at 50%, 75%, 100%, 125% of claimed benefit realization
8. Flag any benefit claims that appear aggressive or lack supporting methodology
```

**Prompt 4: Rank and Prioritize Budget Request Portfolio**
```
I have [NUMBER] budget requests to evaluate for the [BUDGET CYCLE] cycle. Help me rank and prioritize them for committee review and recommend a funding allocation approach.

Budget constraint: Total available budget is [$AMOUNT] for this cycle.

Budget requests summary:
[LIST EACH REQUEST — Request Name | Department | Amount Requested | Category (CapEx/OpEx) | Your Evaluation Score | Strategic Priority (High/Medium/Low) | Urgency (Must-do/Should-do/Nice-to-have)]

Evaluation outputs (from prior analysis or your review):
[PASTE EVALUATION SUMMARIES OR SCORES FOR EACH]

Ranking criteria weights:
- Strategic alignment: [X%]
- Financial return: [X%]
- Implementation risk: [X%] (lower risk = higher ranking)
- Urgency: [X%]

Output:
1. Ranked list of all requests with composite score and recommended disposition
2. Recommended funding allocation within [$AMOUNT] budget constraint
3. Defer list: requests not funded this cycle with recommended timing for next review
4. Reject list: requests with fundamental issues that need rework before resubmission
5. Portfolio summary: total requested vs available, funding coverage rate, risk profile of approved set
6. 2-3 committee discussion topics based on difficult trade-off decisions in this portfolio
```

**Prompt 5: Generate Budget Committee Submission Package**
```
Generate a complete budget committee submission package for the following approved budget requests. The package will be distributed to committee members as pre-read material before our [DATE] budget review session.

Requests to include:
[LIST REQUESTS WITH KEY DETAILS]

Committee audience: [DESCRIBE — e.g., CFO, COO, VP Finance, VP Operations]
Session time available: [X minutes for the full portfolio]
Decision required: Approve final budget allocation for [PERIOD]

Generate:
1. Executive summary memo (1 page): total portfolio summary, funding recommendation, key decisions required
2. Individual one-page summary for each request:
   - Request name, department, amount, category
   - Problem statement (2-3 sentences)
   - Proposed solution (2-3 sentences)
   - Financial summary: cost, benefit, ROI, payback
   - Top 2-3 risks
   - Recommendation with rationale
3. Portfolio comparison table: all requests side-by-side with key metrics
4. Deferred and rejected requests summary: what was not recommended and why
5. Suggested discussion agenda for the committee session with time allocation
```

---
