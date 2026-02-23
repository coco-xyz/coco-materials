# Use Case #275: AI Decision Framework Builder

**Role**: Executive / Personal Assistant | **Industry**: Enterprise, Professional Services, Financial Services, Technology | **Task**: Analysis, Strategic Decision-Making, Executive Operations

---

## Detailed Introduction

**The Pain: Executives Make High-Stakes Decisions Under Time Pressure Without a Structured Process, and the Cost of Poorly Made Decisions Compounds Over Years**

Decision quality is the ultimate measure of executive performance. Every major organizational outcome — a market entered or exited, a key hire made or missed, a product built or abandoned, a partnership pursued or declined — traces back to a decision made under uncertainty by an executive who had imperfect information and limited time. Research by McKinsey & Company found that executives report spending only 37% of their time on decisions they consider their most important — and that poor decision processes, rather than bad luck or bad data, account for the majority of the decisions executives later regret.

The structural problem is that most executives have never formally learned a decision-making process. They make decisions based on intuition, organizational momentum, stakeholder pressure, and pattern-matching from prior experience — all of which are valuable, but all of which are also highly susceptible to well-documented cognitive biases. Confirmation bias leads executives to weigh evidence that supports their initial inclination more heavily than contradicting evidence. Sunk cost fallacy causes continued investment in initiatives that are no longer viable. Availability bias means the most recent data or the most memorable outcome from a similar past situation gets disproportionate weight. The planning fallacy systematically underestimates how long things take and how much they cost. These biases don't disappear with experience — research shows they often become more entrenched as executives gain seniority and become less likely to be challenged.

The time pressure problem amplifies the bias problem. Many consequential decisions are made in meeting rooms, in the middle of conversations, under social pressure to reach a conclusion. An executive who hasn't thought through a decision framework in advance is particularly vulnerable to what researchers call "decide-and-defend" — committing to the first viable option that gets raised and then rationalizing it rather than genuinely evaluating alternatives. A 2019 study found that 60% of executives report their most regretted business decision was made too quickly without adequate analysis of alternatives.

The documentation problem is the third layer. Even when executives make decisions thoughtfully, the reasoning is rarely written down. Six months later, the team can't remember why a particular path was chosen, what alternatives were considered, or what conditions were assumed to be true that would validate revisiting the decision. This creates organizational amnesia — the same debates happen repeatedly, learned lessons from past decisions don't compound, and new team members can't understand the strategic logic behind the choices they've inherited.

**How COCO Solves It**

COCO's AI Decision Framework Builder gives executives a structured thinking partner for any significant decision — helping frame the decision correctly, surface relevant considerations, identify and stress-test options, and document the reasoning for future reference.

1. **Decision Framing and Scoping**: Many poor decisions are made poorly because they are framed incorrectly — the wrong question is being answered, the decision is made at the wrong level of specificity, or important constraints are taken as fixed when they should be questioned.
   - Decision type identification: COCO categorizes the decision (one-way door vs. two-way door, time-sensitive vs. time-available, strategic vs. tactical, certain vs. uncertain outcome)
   - Question refinement: checks whether the executive is solving the right problem, and whether the decision as stated could be decomposed into smaller, clearer sub-decisions
   - Success criteria: what does "good" look like? COCO helps articulate what outcome the executive is actually optimizing for — because without clear success criteria, any option can be rationalized
   - Decision authority: who should actually make this decision, and who needs to be consulted or informed?

2. **Option Generation**: Executives under time pressure tend to evaluate only the first two or three options that come to mind, rather than generating a fuller option set.
   - COCO helps generate at least 4-6 options for any significant decision, including options that might not be intuitive
   - Forces inclusion of the "do nothing / status quo" option and its full implications
   - Challenges binary framing: when an executive presents a decision as "Option A vs. Option B," COCO asks whether there is an Option C, a hybrid, or a sequenced approach
   - Explores reversibility: for each option, identifies whether it is reversible and at what cost — a key factor in how much analytical rigor the decision warrants

3. **Structured Evaluation**: COCO walks the executive through a structured evaluation of each option against the decision's success criteria.
   - Pros, cons, and uncertainties for each option
   - Risk assessment: what is the downside scenario for each option, how likely is it, and is it recoverable?
   - Stakeholder impact analysis: who is affected by each option and how do they feel about it?
   - Assumption identification: what does each option assume to be true? Which assumptions are most uncertain?
   - Pre-mortem technique: imagining 12 months from now that a specific option failed — what most likely went wrong?

4. **Bias Check**: COCO applies a structured bias audit to the decision process before a conclusion is reached.
   - Asks whether the executive's initial preference was formed before the analysis was done
   - Checks for missing voices: who should have input who hasn't been asked?
   - Identifies the most emotionally loaded aspect of the decision and prompts the executive to examine it explicitly
   - Applies reference class forecasting: how have similar decisions turned out in comparable situations?

5. **Decision Documentation and Record**: COCO produces a structured decision memo that captures the full decision logic for organizational memory.
   - Decision summary: what was decided, by whom, on what date
   - Options considered: what alternatives were evaluated and why they were not chosen
   - Key assumptions: what the decision depends on being true
   - Review trigger: what conditions, if they change, should prompt revisiting this decision
   - Success metrics: how we will know in 6-12 months whether this was a good decision

**Measurable Results**

- **Decision quality self-assessment**: Executives using structured decision frameworks rate 54% more of their decisions as "high quality" when reviewed 6 months later vs. intuition-only approaches
- **Decision regret rate**: Organizations using structured decision processes report 41% fewer significant decision regrets over a 12-month period
- **Bias reduction**: Pre-mortem and bias audit techniques reduce overconfidence in decision outcomes by an average of 35% in controlled studies
- **Documentation rate**: Decision memo capture rate increases from under 15% to 80%+ when using COCO's structured workflow
- **Decision meeting efficiency**: Meetings that have a pre-built framework reduce decision meeting time by 40% while improving reported outcome quality

**Who Benefits**

- **C-Suite Executives (CEO, CFO, Chief Strategy Officer)**: Apply structured thinking to the highest-stakes decisions facing the organization without adding significant time to the process
- **Executive Assistants and Chiefs of Staff**: Facilitate pre-decision analysis for executives, ensuring the right options have been considered and the reasoning is captured before the executive commits
- **Board Members**: Use structured decision frameworks when evaluating management proposals, ensuring adequate alternatives and assumptions have been tested
- **Senior Leaders and Strategy Teams**: Bring rigorous decision analysis to strategic planning, investment cases, and major operational choices — improving both the quality of decisions and the quality of the debates that precede them

---

## Practical Prompts

**Prompt 1: Full Decision Framework for a Major Decision**
```
I need to make an important decision and want to think through it systematically. Help me build a decision framework.

The decision I'm facing:
[Describe the decision in your own words — what is the choice you need to make?]

My role and context:
- My position: [title, company]
- My decision authority: [is this my decision alone / shared / do I need board approval / other]
- Timeline: [when does this decision need to be made, and why?]

What I know:
- Relevant facts: [key data, context, or information you have]
- What I don't know: [key uncertainties you're aware of]
- My current instinct: [what you're leaning toward and why]

What success looks like:
- Primary goal: [what are you optimizing for?]
- Secondary goals: [what else matters?]
- What you want to avoid: [key risks or outcomes you're trying not to create]

Stakeholders affected:
- [Who is affected by this decision and how?]

Please:
1. Check my framing — am I solving the right problem?
2. Help me generate 4-6 distinct options (including non-obvious ones and the status quo)
3. Build a structured comparison of each option against my stated goals
4. Identify the key assumptions behind each option
5. Run a pre-mortem on my instinct: if my current preference fails, what most likely went wrong?
6. Bias check: what cognitive biases might be affecting my thinking here?
7. Draft a decision memo I can use to document my reasoning
```

**Prompt 2: Fast Decision Framework (15-Minute Version)**
```
I need to make a decision quickly and want to think through it structurally before committing.

The decision: [one clear sentence — what is the choice?]
Deadline: [when does this need to be decided?]
My current instinct: [what I'm leaning toward]

Options I'm aware of:
1. [Option A]
2. [Option B]
3. [Any others?]

Key factors I'm weighing:
- [Factor 1 and how each option performs on it]
- [Factor 2 and how each option performs on it]
- [Factor 3 and how each option performs on it]

What I'm worried about:
- [Key risk or concern I can't shake]

Please:
1. Tell me if my framing seems right or if there's a better way to think about this
2. Is there an obvious option I'm not considering?
3. What's the most important uncertainty I should resolve before deciding?
4. What's the decision that would be hardest to reverse — and does that change my analysis?
5. Give me your honest assessment: if this were your decision, what would you do and why?
```

**Prompt 3: Stakeholder Buy-In Analysis Before a Decision**
```
I've made a decision (or I'm close to deciding) and I need to think through how to get the right buy-in and anticipate objections.

The decision: [what you've decided or are close to deciding]
The key stakeholders who need to support or accept this decision:
1. [Stakeholder 1: name/role, their likely reaction — supportive / neutral / resistant, why]
2. [Stakeholder 2: name/role, their likely reaction — supportive / neutral / resistant, why]
3. [Stakeholder 3: if relevant]

The most likely objections I expect:
1. [Objection 1]
2. [Objection 2]
3. [Objection 3]

What I need from each stakeholder:
- [Stakeholder 1]: needs to [approve / endorse publicly / not actively resist / other]
- [Stakeholder 2]: needs to [action]

Please:
1. For each stakeholder, recommend the best framing to gain their support (what to emphasize, what concerns to address proactively)
2. For each major objection, help me build a response that acknowledges the concern and addresses it substantively
3. Recommended sequencing: who should I talk to first, and in what order?
4. Is there anyone I should be talking to who I haven't listed?
5. What's the most likely single point of failure in getting this decision accepted — and how should I address it?
```

**Prompt 4: Post-Decision Review (What Did We Learn?)**
```
I made a significant decision [X months/weeks ago] and I want to review it honestly to learn from the outcome and improve future decisions.

The decision that was made:
- What was decided: [the decision]
- When: [date or timeframe]
- What the alternatives were: [other options that were considered]
- What assumptions were made: [what we expected to be true]
- Who was involved: [decision-makers and key influencers]

What actually happened:
- Outcome: [what resulted from the decision]
- Where we were right: [what the decision got correct]
- Where we were wrong: [what played out differently than expected]
- What we didn't anticipate: [surprises, good or bad]
- How stakeholders responded: [how people reacted]

Please:
1. Honest assessment: was this a good decision? (Note: separate the quality of the decision process from the outcome — a good process can produce bad outcomes due to factors outside control)
2. What would we do differently in the decision process if we faced this choice again?
3. What did we learn that should inform future similar decisions?
4. Are there any assumption errors or bias patterns I should watch for in my future decisions?
5. Should this decision be revisited, modified, or reversed based on what we now know?
```

**Prompt 5: Build a Decision Criteria Matrix for a Recurring Decision Type**
```
I make the same category of decision repeatedly and I want to build a reusable framework so I (and my team) make these decisions more consistently.

The recurring decision type: [e.g., new hire decisions / new customer acquisition / new vendor selection / partnership evaluation / investment allocation / market entry]

What makes this decision hard:
- [Key tensions or trade-offs you typically face]
- [Common points of disagreement when this decision comes up]
- [Types of information that are hard to get but important]

What "good" looks like for this decision type:
- [The characteristics of a great outcome for this type of decision]
- [The failure modes you want to avoid]

What factors always matter (list 5-8 criteria that should always be considered):
1. [Criterion 1]
2. [Criterion 2]
[continue]

Please build:
1. A weighted decision matrix with your recommended criteria and suggested weights
2. A scoring rubric for each criterion (how to score 1-5 on each factor)
3. Recommended data sources: what information to gather before scoring
4. Red flags: what signals should automatically disqualify an option regardless of overall score
5. The key question to ask at the end: one question that cuts through the analysis and tests whether the recommendation feels right
```

---
