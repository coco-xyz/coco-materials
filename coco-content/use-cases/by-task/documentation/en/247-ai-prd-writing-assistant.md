# Use Case #247: AI PRD Writing Assistant

**Role**: Product Manager | **Industry**: SaaS, B2B Software, Cloud Platforms, Developer Tools | **Task**: Documentation, PRD Writing, Specification

---
## Detailed Introduction

**The Pain: Vague Specs Cost More Than the Time Saved by Skipping Them**

Product Requirements Documents are one of the most consistently underinvested artifacts in software development. The pattern is nearly universal: a PM has a clear enough mental model of the feature to explain it in a meeting, converts that meeting into a Jira ticket with a paragraph of description and a few acceptance criteria, and ships it to engineering as the "spec." Engineering asks three clarifying questions in Slack, gets partial answers, makes assumptions about the rest, and builds something that is 70% right. The PM reviews the build, identifies the gaps, and the team enters a rework cycle that consumes 30-40% of the original build time. ProductPlan research found that poor requirement definition is cited as the primary driver of project failure by 47% of engineering leaders — yet fewer than 30% of SaaS companies have a standardized PRD format that is consistently used across the product team.

The time pressure excuse is real but self-defeating. PMs avoid writing complete PRDs because a full spec takes 4-6 hours to write under deadline pressure, and the feature still gets built even without one. The problem is that the cost of incomplete specification is not paid upfront — it is paid in rework, in edge cases discovered during QA, in post-launch bugs from unconsidered states, and in customer-reported issues that trace back to behavior that was never defined. The true cost of skipping the PRD is typically 2-3x the time saved, borne by the engineering team rather than the PM. This creates a misaligned incentive: the PM who skips the PRD saves personal time, while the engineering team absorbs the downstream cost.

The quality problem is equally significant. Even when PRDs are written, they are often incomplete in systematic ways. PMs consistently omit edge cases (what happens when the user has zero records? What happens when the API call fails?), leave success metrics undefined (we'll know it worked when customers like it), fail to specify error states and messaging, and skip the out-of-scope section that would prevent scope creep during implementation. These omissions are not random — they reflect the limits of how the PM is thinking about the problem. Without a structured template that prompts for every required section, the PM writes what they have thought about and skips what they haven't, which is precisely the information engineering needs most.

The consistency problem compounds across a product team. When each PM writes PRDs in their own format and style, engineering teams develop PM-specific interpretation habits that don't transfer. A new PM whose specs don't match the team's learned expectations causes confusion and delays. Cross-functional teams (design, QA, data) cannot rely on finding specific information in a consistent location, so they either ask the PM repeatedly or make their own assumptions. A standardized PRD format eliminates this cognitive overhead and is estimated to reduce clarifying question volume by 35-50% in teams that implement it consistently.

**How COCO Solves It**

COCO's AI PRD Writing Assistant accelerates PRD creation from rough idea to complete specification, ensures all required sections are covered, and enforces format consistency across the entire product team.

1. **PRD Structure Generation from Rough Input**: Converts a rough feature idea or meeting notes into a complete PRD skeleton with all required sections pre-populated to the extent possible from the input.
   - Problem statement expansion: taking a one-line feature description and generating a full problem statement with user context, current pain, and business motivation
   - Section scaffolding: generating all required PRD sections (goals, non-goals, user stories, requirements, edge cases, error states, success metrics, open questions) as structured headers with prompting content
   - Input parsing: extracting implicit requirements from meeting notes, customer quotes, or rough descriptions that the PM may not have thought to make explicit
   - Assumption surfacing: identifying where the PM's input contains gaps that require decisions before specification can be completed

2. **User Story and Acceptance Criteria Generation**: Produces complete, testable user stories and acceptance criteria from feature descriptions.
   - Persona-specific user stories: generating stories for each relevant user role who interacts with the feature
   - INVEST-compliant criteria: independent, negotiable, valuable, estimable, small, and testable acceptance criteria for each user story
   - Given/When/Then format: structured BDD-style criteria that QA can directly convert into test cases
   - Edge case user stories: automatically generating stories for error states, empty states, permission edge cases, and data boundary conditions that PMs commonly miss

3. **Edge Case and Error State Enumeration**: Systematically surfaces the error conditions and edge cases that incomplete specs leave undefined.
   - State matrix generation: for any feature with conditional behavior, generating the full matrix of input states and expected output states
   - API failure scenarios: what should the feature do when a dependent service is unavailable, times out, or returns unexpected data?
   - Permission and role edge cases: how does the feature behave for users with different permission levels, and what are the boundary conditions?
   - Data boundary conditions: empty state (no records), single record, very large datasets, special characters in text fields, concurrent access scenarios

4. **Success Metrics and Analytics Specification**: Defines measurable success criteria and the analytics instrumentation required to evaluate them.
   - OKR-aligned metrics: connecting the feature's success metrics to the relevant company-level objective
   - Leading and lagging indicators: distinguishing between metrics that signal early adoption vs. metrics that confirm long-term value realization
   - Instrumentation requirements: specifying exactly what events need to be tracked, with what properties, to measure each success metric
   - Baseline and target setting: using historical data context to set realistic before/after targets for each metric

5. **Cross-Functional Requirement Extraction**: Generates the supporting requirements that non-engineering stakeholders need but PMs often forget to include.
   - Design requirements: interaction patterns, responsive behavior, accessibility requirements (WCAG level), loading states, and empty states
   - Data requirements: data model changes, migration requirements, retention policies for new data entities
   - Security and privacy requirements: data sensitivity classification, access control requirements, audit logging needs
   - Localization and internationalization: which markets need this feature, and what locale-specific requirements apply?

6. **PRD Consistency and Completeness Review**: Audits completed PRDs against a completeness rubric before they are handed to engineering.
   - Section completeness check: identifying missing sections, sections with insufficient detail, and sections that contain placeholder language
   - Internal consistency review: flagging contradictions between requirements sections (e.g., acceptance criteria that conflict with non-goals)
   - Readability assessment: ensuring the PRD is written in plain language that engineering, QA, and design can all understand without domain-specific PM jargon
   - Handoff readiness score: a structured assessment of whether the PRD is complete enough to begin engineering without additional clarification sessions

**Measurable Results**

- **PRD writing time**: Complete PRD creation reduced from 4-6 hours to 60-90 minutes using COCO to generate the structure, user stories, and edge cases
- **Clarifying question volume**: Teams with standardized, AI-assisted PRDs report 43% fewer engineering clarifying questions per feature vs. informal spec processes
- **Rework rate**: Features specified with complete edge cases and error states show 38% lower post-implementation rework cycle frequency
- **Spec completeness**: COCO-assisted PRDs consistently include 6.2x more edge case scenarios than unassisted PM-written specs
- **Team consistency**: Cross-PM PRD format standardization reduces onboarding time for new engineering team members by 3-4 weeks

**Who Benefits**

- **Product Managers**: Produce complete, high-quality PRDs in a fraction of the time, reducing the personal cost of thorough specification
- **Engineering Teams**: Receive clear, complete specifications that enable accurate estimation, reduce clarifying question overhead, and prevent rework
- **QA Engineers**: Get acceptance criteria in testable formats that can be directly converted to test cases without interpretation
- **Design Teams**: Receive interaction requirements, state requirements, and edge case documentation that informs design decisions earlier

---
## Practical Prompts

**Prompt 1: Generate a Complete PRD from a Feature Idea**
```
I need to write a complete PRD for a feature I'm planning. I have a rough idea but need help structuring it into a full specification.

Feature concept:
- Feature name: [name]
- One-line description: [what it does]
- Why we're building it: [customer pain it solves, business motivation]
- Who will use it: [user roles or personas]
- How we imagine it working (rough): [describe the rough UX or flow as you understand it]
- Known constraints: [technical constraints, timeline, out-of-scope items you know about]

Customer evidence:
[Paste relevant customer quotes, support tickets, or feedback that motivated this feature]

Engineering context (if known):
[Any technical considerations the engineering team has raised]

Please generate a complete PRD with the following sections:
1. Problem statement (the customer pain, current workaround, and why now)
2. Goals and non-goals (what success looks like and what we are explicitly not building)
3. User personas and use cases (who uses this and in what contexts)
4. Functional requirements (numbered list of what the feature must do)
5. User stories with acceptance criteria in Given/When/Then format
6. Edge cases and error states (the scenarios we must define before engineering begins)
7. Success metrics (how we'll know the feature worked, with specific measurement approach)
8. Open questions (what needs to be decided before or during implementation)
9. Analytics instrumentation requirements (what events to track and with what properties)
```

**Prompt 2: Generate Edge Cases and Error States for an Existing Feature Spec**
```
I have a PRD draft that covers the happy path but I know I'm missing edge cases and error states. Please help me enumerate them systematically.

Feature: [name and description]

Current happy path specification:
[Paste your existing requirements or user stories]

System context:
- External dependencies: [APIs, services, or integrations this feature relies on]
- Data this feature reads or writes: [describe the data model]
- User roles who have access: [list permission levels]
- Expected data scale: [typical record counts, concurrent users, etc.]

Please systematically enumerate:
1. Empty state scenarios: what happens when there are no records, no data, or the user hasn't completed a prerequisite step?
2. Permission edge cases: what does each user role see and what are they blocked from doing?
3. Concurrent access scenarios: what if two users try to edit the same record simultaneously?
4. External dependency failures: what happens if [dependency 1] is down? Returns an error? Times out?
5. Data validation edge cases: empty fields, maximum field lengths, special characters, invalid formats
6. State transition edge cases: what happens if the user navigates away mid-flow? Refreshes the browser? Goes back?
7. Scale edge cases: what happens with zero records? One record? 10,000 records?

For each edge case, specify: the scenario, the expected system behavior, and the user-facing message or UI treatment.
```

**Prompt 3: Write Acceptance Criteria for a Feature**
```
I need to write complete, testable acceptance criteria for a feature I'm specifying. The criteria need to be detailed enough for QA to write test cases directly from them.

Feature: [name and description]
User story: As a [persona], I want to [action] so that [goal].

Feature requirements:
[List the functional requirements you've already defined]

Known edge cases:
[List any edge cases you're aware of]

Target user roles: [who interacts with this feature]
Related permissions: [what different roles can and cannot do]

Please generate acceptance criteria in the following formats:

1. Given/When/Then format for each primary scenario:
   - Happy path scenarios (the main flows that must work)
   - Alternative path scenarios (valid alternate ways to accomplish the same goal)
   - Error and edge case scenarios (invalid inputs, boundary conditions, failure states)

2. For each criterion, specify:
   - The precondition (Given)
   - The action (When)
   - The expected outcome (Then)
   - The pass/fail definition for QA

3. Identify any acceptance criteria that require specific test data setup and describe what that data should look like.

4. Flag any criteria where the expected behavior is ambiguous and a product decision is still needed.
```

**Prompt 4: Define Success Metrics and Analytics Requirements for a Feature**
```
I'm finalizing a PRD and need to define how we'll measure whether this feature succeeds, and what we need to instrument to track those metrics.

Feature: [name and description]
Business objective this feature supports: [company OKR or strategic goal]
The problem it solves: [customer pain]
Expected behavior change: [what should customers do differently after using this feature?]

Current baseline (if known):
- Current workaround usage: [how customers currently solve this problem]
- Relevant existing metrics: [any current data points that are relevant]

Please define:
1. Primary success metrics (1-2 metrics that definitively answer "did this feature work?")
2. Secondary metrics (3-4 supporting metrics that give fuller picture of feature health)
3. Counter-metrics (what negative outcomes would indicate the feature is backfiring?)
4. Leading indicators (metrics we can check in the first 2 weeks to get early signal)
5. Lagging indicators (metrics that take 30-90 days to show the real impact)

For each metric, specify:
- Metric name and definition
- How to calculate it
- Target value (what "success" looks like numerically)
- Baseline (current state if known)
- Measurement timeframe

Analytics instrumentation requirements:
- What user events need to be tracked (with event names and properties)
- What data needs to be captured at each event
- What dashboard or report will we use to monitor these metrics post-launch?
```

**Prompt 5: Review and Critique an Existing PRD for Completeness**
```
I've written a PRD and want you to review it for completeness, internal consistency, and engineering readiness before I hand it off.

PRD to review:
[Paste your full PRD here]

Engineering handoff context:
- Engineering team size: [number of engineers who will work on this]
- Timeline: [sprint count or deadline]
- Tech stack notes: [any relevant technical context]
- Prior related features: [anything engineering has built that this depends on]

Please evaluate this PRD on the following dimensions:

1. COMPLETENESS — Are all required sections present and sufficiently detailed?
   - Problem statement: clear, specific, with customer evidence?
   - Goals and non-goals: explicitly defined?
   - User stories: cover all relevant personas and use cases?
   - Acceptance criteria: testable and unambiguous?
   - Edge cases: systematically covered?
   - Error states: defined with user-facing messaging?
   - Success metrics: specific and measurable?
   - Open questions: captured and assigned?

2. INTERNAL CONSISTENCY — Do sections contradict each other?
   - Identify any conflicts between requirements
   - Flag any acceptance criteria that are inconsistent with non-goals
   - Note any vague language that could be interpreted multiple ways

3. ENGINEERING READINESS — Can engineering start from this PRD?
   - What clarifying questions would engineering likely ask?
   - What decisions still need to be made before implementation can begin?
   - What is missing that would cause engineering to make incorrect assumptions?

4. Overall readiness score (1-10) with specific items that must be resolved before handoff
```

---
