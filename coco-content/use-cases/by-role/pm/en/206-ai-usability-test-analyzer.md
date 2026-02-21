# Use Case #206: AI Usability Test Analyzer

**Role**: Product Manager / UX Researcher | **Industry**: SaaS, E-commerce, Consumer Apps, Enterprise Software | **Task**: Usability Testing, UX Friction Analysis, Session Data Processing

---
## Detailed Introduction

**The Pain: Usability Sessions Are Done, But the Real Work Has Barely Begun**

Running usability tests is the easy part. A team of five runs 8 moderated sessions over two days — that's roughly 12 hours of screen recordings, annotated click paths, task completion logs, and verbal think-aloud transcripts. By the time the last session wraps, the research team is already behind on their next project. The analysis work — watching recordings, tagging friction moments, quantifying task success rates, mapping behavioral patterns across participants — takes another week or more. What should be a fast feedback loop becomes a slow, expensive reporting exercise.

The problem compounds in unmoderated testing at scale. Running 50 to 200 unmoderated sessions via platforms like UserTesting or Maze generates more data than most teams can meaningfully process. Teams end up cherry-picking the sessions they have time to watch, which introduces selection bias and leaves the majority of behavioral signal unexamined. The result is that "usability findings" often reflect what the team had capacity to review, not what the data actually showed.

Meanwhile, product and design decisions wait. Developers sit idle on the next sprint while designers wait for research validation. The longer analysis takes, the more likely that the product moves on before the findings ever get acted on — making the entire testing investment partially wasted.

**How COCO Solves It**

COCO's AI Usability Test Analyzer processes multi-modal session data — click paths, task logs, completion timestamps, error events, and verbal/text feedback — to surface UX friction points with speed and precision.

1. **Task Completion Rate Analysis**: Automatically calculates success, failure, and partial completion rates across all sessions for each task in the test protocol.
   - Distinguishes between critical failures (task abandoned), near misses (wrong path but eventual success), and smooth completions
   - Flags tasks with completion rates below a configurable threshold (e.g., below 70%) as high-priority friction zones
   - Shows completion rate variance by participant segment (novice vs. experienced users, different device types)

2. **Click Path and Navigation Deviation Detection**: Compares actual user paths against the intended optimal flow to identify where users go off-script.
   - Maps the most common deviations from the expected user flow
   - Identifies "escape hatches" — elements users click on when they're lost or confused
   - Quantifies average steps taken vs. minimum steps required (path efficiency score)

3. **Friction Moment Clustering**: Groups hesitation points, error events, and backtrack behaviors into clusters by screen, step, and user type.
   - Identifies the specific UI elements or interaction patterns triggering the most confusion
   - Correlates friction moments with verbal comments from think-aloud sessions
   - Ranks friction severity by frequency (how often it occurs) and impact (how much it disrupts task completion)

4. **Think-Aloud Sentiment and Confusion Mapping**: Analyzes verbal or written feedback from sessions to extract emotional tone and confusion signals.
   - Identifies moments where users express frustration, surprise, or uncertainty
   - Links verbal comments to specific screen states or interaction events
   - Generates a "confusion map" overlaying UX friction with user language

5. **Cross-Session Pattern Synthesis**: Synthesizes findings across all sessions to separate systemic UX problems from individual outliers.
   - Distinguishes between issues that affect most users vs. issues isolated to specific user types
   - Surfaces behavioral patterns that only become visible when looking across 20+ sessions
   - Produces a ranked severity list: critical (affects majority, blocks task), moderate, and minor

6. **Design Recommendation Generation**: Translates friction findings into actionable design improvement hypotheses ready for designer handoff.
   - For each identified friction point, suggests 1-2 redesign directions supported by the observed behavior
   - Formats findings as testable hypotheses: "We believe that [design change] will [reduce friction metric] because [evidence from sessions]"

**Measurable Results**

- **Analysis time**: From 5-7 days manual → 6-8 hours with COCO (80%+ reduction)
- **Session coverage**: From reviewing ~30% of sessions to analyzing 100% of data
- **Friction points identified**: 2.5x more distinct UX issues surfaced per test cycle
- **Time to design handoff**: Reduced from 10 days to under 2 days
- **False positives (misattributed user errors)**: Reduced by ~40% through cross-session pattern validation
- **Sprint delay from waiting for research**: Eliminated in teams using COCO in-cycle

**Who Benefits**

- **Product Managers**: Get ranked, evidence-backed UX friction reports ready to turn into sprint tickets without waiting a week for analysis
- **UX Designers**: Receive specific, session-referenced friction points with behavioral evidence — not just "users were confused" but exactly where and why
- **UX Researchers**: Spend research time on session facilitation and protocol design rather than hours of manual session review
- **Engineering Teams**: Get unambiguous design requirements rooted in behavioral data, reducing back-and-forth on UX fixes

---

## Practical Prompts

**Prompt 1: Full Usability Test Session Analysis**
```
I've just completed a round of usability testing for [product/feature name] at [company name].
Here is the session data — please analyze and deliver a structured usability findings report.

Test protocol:
- Number of sessions: [e.g., 12 moderated / 80 unmoderated]
- Tasks tested: [list the 3-5 tasks participants were asked to complete]
- User segments: [describe participant profiles]
- Testing platform/method: [e.g., Maze, UserTesting, in-person moderated]

Data provided: [describe what you're attaching — click path exports, session recordings, completion logs, think-aloud transcripts]

Please deliver:
1. Task-by-task completion rate breakdown (success / partial / fail) with key friction moments for each
2. Top 5-8 UX friction points ranked by severity and frequency, with supporting evidence
3. The 3 highest-priority issues that, if fixed, would most improve overall task success rates
4. Any behavioral patterns that suggest systemic navigation or labeling problems vs. isolated UI issues
5. Design hypotheses for each top friction point in the format: "We believe that [change] will [outcome] because [evidence]"
```

**Prompt 2: Click Path Deviation Analysis**
```
Please analyze the click path data from our recent usability test of [feature/flow name].

Optimal intended flow:
Step 1: [screen/action]
Step 2: [screen/action]
Step 3: [screen/action]
Step 4: [screen/action]
[continue as needed]

Actual click path data: [paste export or attach file]

I want to understand:
1. What percentage of users followed the optimal path exactly?
2. Where do users most commonly deviate, and what do they click instead?
3. What is the average path length vs. the optimal path length (efficiency score)?
4. Which "wrong" paths still lead to task completion, and which result in abandonment?
5. Are there any unintended paths that actually work well — suggesting our optimal flow may not be optimal?

Session context: [number of sessions, user type, device type if relevant]
```

**Prompt 3: Think-Aloud Transcript Friction Mapping**
```
I have think-aloud transcripts from [number] usability sessions for [product area].
Please analyze the verbal feedback to build a friction and confusion map.

For each session transcript provided:
1. Identify all moments where the user expressed confusion, frustration, or uncertainty — note the exact screen or action they were describing
2. Extract any language that suggests broken mental models (e.g., "I thought this button would...", "Where is the...")
3. Tag sentiment: positive, neutral, confused, frustrated

Then synthesize across all sessions:
4. Which screens or interaction points generated the most negative/confused verbal reactions?
5. What language do users use to describe the product that differs from how we label things? (labeling/taxonomy gaps)
6. Are there moments of delight or unexpected positive reactions we should double down on?

[Paste transcripts below or indicate file attached]
Product area being tested: [brief description]
```

---
