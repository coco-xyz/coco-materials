# Use Case #208: AI PRD Generator

**Role**: Product Manager | **Industry**: SaaS, Enterprise Software, Consumer Tech, Fintech | **Task**: Product Requirements Documentation, Stakeholder Alignment, Feature Scoping

---
## Detailed Introduction

**The Pain: Writing PRDs Is the Job That Steals Time from the Real Job**

A product manager's most irreplaceable contribution is judgment — deciding what to build, why, and in what order. Yet most PMs spend 6 to 10 hours writing a single PRD, a task that consumes the week-before-sprint slot that should be spent validating decisions, aligning stakeholders, and thinking about strategy. For teams running two-week sprints, that means one-third of every sprint cycle is consumed by documentation overhead rather than actual product thinking.

The quality problem compounds the time problem. PRDs written under time pressure are often incomplete — missing edge cases, underdefined acceptance criteria, or disconnected from the user research and strategic context that motivated the feature. Engineers ask clarifying questions that delay sprint start. Designers build to ambiguous specs. QA tests against acceptance criteria that don't match what was intended. Every ambiguity in a PRD costs 30 to 60 minutes of meeting time to resolve downstream — and those meetings don't happen until mid-sprint, when changing course is expensive.

Teams often cope by writing shorter, lighter documents — but "lean" PRDs traded for speed end up creating the same coordination overhead through Slack threads, synchronous walkthrough meetings, and mid-sprint scope changes. There is no shortcut around the need for a clear, complete, shared specification — but there is a faster path to producing one.

**How COCO Solves It**

COCO's AI PRD Generator transforms raw input — meeting notes, research findings, strategic goals, competitive references — into a structured, comprehensive PRD draft in a fraction of the time.

1. **Context-to-Structure Conversion**: Takes unstructured inputs (rough notes, voice memos, bullet points) and organizes them into a complete PRD structure automatically.
   - Populates standard PRD sections: background, problem statement, goals, user stories, requirements, acceptance criteria, out-of-scope items, open questions
   - Extracts implicit requirements from context that the PM may not have explicitly stated
   - Flags areas where input is insufficient to generate a confident specification

2. **User Story Generation**: Creates well-formed user stories from feature descriptions, including personas, actions, and outcomes.
   - Generates primary user stories and relevant edge-case stories from the same feature description
   - Formats stories in standard "As a [user], I want to [action], so that [benefit]" structure
   - Links each story to the underlying user pain point or research evidence that motivates it

3. **Acceptance Criteria Writing**: Produces specific, testable acceptance criteria for each requirement.
   - Distinguishes between functional acceptance criteria, edge cases, and non-functional requirements (performance, accessibility, security)
   - Written to be directly usable by QA and engineering without interpretation
   - Includes "given/when/then" format for complex interaction requirements

4. **Assumptions and Risk Flagging**: Identifies the assumptions baked into the requirements and the associated risks if those assumptions prove wrong.
   - Surfaces dependencies on other teams, services, or features
   - Flags requirements that rely on unvalidated hypotheses
   - Generates a risk register section with likelihood and impact ratings

5. **Scope Boundary Definition**: Explicitly defines what is and is not in scope — preventing scope creep and misalignment during development.
   - Based on stated goals, identifies likely out-of-scope items that should be explicitly excluded
   - Surfaces related features that could be requested by engineers or stakeholders and recommends whether to include them
   - Creates a "future considerations" section for deferred scope

6. **Version-Ready Formatting**: Outputs a cleanly formatted PRD ready to paste into Confluence, Notion, Google Docs, or any documentation system — with no reformatting required.
   - Generates consistent heading hierarchy, table formatting for requirements matrices, and numbered section structure
   - Includes metadata block (author, date, version, status) and review process placeholder

**Measurable Results**

- **PRD drafting time**: From 6-10 hours → 60-90 minutes (80-85% reduction)
- **Clarifying questions from engineering**: Reduced by ~50% due to completeness of acceptance criteria
- **PRD coverage score** (defined sections, acceptance criteria per story): 40% improvement over manually written PRDs
- **Sprint kickoff delays from incomplete specs**: Reduced from affecting ~30% of sprints to under 10%
- **Stakeholder review cycles**: Average 2.1 fewer revision rounds before sign-off
- **PM capacity recovered**: 4-6 hours per sprint cycle available for research, strategy, and user conversations

**Who Benefits**

- **Product Managers**: Spend 80% less time on documentation and more time on the judgment, research, and stakeholder work that matters
- **Engineering Teams**: Start sprints with complete, unambiguous requirements — fewer mid-sprint scope clarifications and rework
- **QA / Test Engineers**: Receive testable acceptance criteria directly from the PRD, reducing spec interpretation overhead
- **Product Designers**: Have a clear requirements foundation to design against — reducing back-and-forth on scope and edge cases

---

## Practical Prompts

**Prompt 1: Full PRD from Meeting Notes and Research**
```
I need to write a PRD for a new feature at [company name]. Here is my raw input:

FEATURE CONCEPT: [describe the feature in 2-5 sentences]

STRATEGIC CONTEXT: [why we're building this — what goal or OKR it supports]

USER RESEARCH INSIGHTS: [paste relevant research findings, user quotes, or pain points]

STAKEHOLDER REQUIREMENTS: [key inputs from sales, CS, engineering, or leadership]

COMPETITIVE REFERENCE: [any competitor functionality being referenced]

CONSTRAINTS: [technical constraints, timeline, resource limits]

Please generate a complete PRD with the following sections:
1. Background and Problem Statement
2. Goals and Success Metrics
3. User Stories (primary + edge cases)
4. Functional Requirements with Acceptance Criteria
5. Non-Functional Requirements (performance, security, accessibility as relevant)
6. Out of Scope
7. Assumptions and Risks
8. Open Questions
9. Future Considerations

Format it for Confluence/Notion paste-ready output.
```

**Prompt 2: Acceptance Criteria Deep-Dive**
```
I have the following user stories for [feature name] that need complete, testable acceptance criteria.
Please write Given/When/Then acceptance criteria for each story, including:
- The primary success path
- Key edge cases (empty states, error states, boundary conditions)
- Non-functional considerations (loading states, error messages, accessibility)

User Stories:
1. [Story 1]
2. [Story 2]
3. [Story 3]

Technical context: [describe any relevant technical constraints or backend behavior]
User segment: [who uses this feature]
Platform: [web / mobile / both]

Also flag any stories where the acceptance criteria reveals an ambiguity I should resolve before sprint planning.
```

**Prompt 3: PRD Gap Analysis and Improvement**
```
I've written a draft PRD for [feature name] and want to pressure-test it before sharing with engineering.
Please review the following draft and identify:

1. Missing acceptance criteria — requirements that lack clear testable criteria
2. Undefined edge cases — interactions or states the requirements don't address
3. Scope ambiguities — areas where engineering could interpret requirements differently
4. Missing dependencies — things that must be true or built before this feature works
5. Assumption risks — requirements that depend on unvalidated assumptions about user behavior or system capabilities
6. Contradictions — any requirements that conflict with each other

For each issue found, suggest a specific fix.

[Paste PRD draft below]

Additional context: engineering team size is [X], sprint length is [Y], and we plan to start sprint on [date].
```

---
