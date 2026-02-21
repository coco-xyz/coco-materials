# Use Case #210: AI Requirements Conflict Detector

**Role**: Product Manager | **Industry**: Enterprise Software, SaaS, Fintech, Healthcare Tech | **Task**: Requirements Analysis, Stakeholder Alignment, Dependency Management

---
## Detailed Introduction

**The Pain: The Conflict Was There All Along — Nobody Found It Until Sprint 3**

Multi-stakeholder product development is a coordination problem at scale. A PM collecting requirements for a major feature might receive inputs from six different teams: Sales wants single sign-on for enterprise deals. Security requires role-based access controls with audit logging. Engineering flags database performance constraints. CS wants a simplified self-serve flow. Legal requires explicit consent checkpoints. The enterprise customer wants bulk import with no data validation delays. Nobody in any of those conversations knows what the others said — and nobody has time to read all six sets of notes looking for landmines.

The conflicts emerge during development, not before. An engineer starts building the self-serve flow and realizes it conflicts with the role-based access controls. A security review catches that the bulk import bypasses the consent checkpoints. A performance test shows that the audit logging requirement blows the database performance constraint. Each of these discoveries costs 1-2 days of engineering rework at minimum — but more often triggers a spec revision that restarts planning, disrupts sprint velocity, and requires a new round of stakeholder sign-offs.

The real cost is not just rework time. It is the erosion of team trust that comes from a feature that repeatedly changes shape mid-sprint. Engineers lose confidence in the planning process. Stakeholders feel ignored when requirements they thought were agreed are quietly dropped. The PM spends more time firefighting coordination failures than actually leading the product.

**How COCO Solves It**

COCO's AI Requirements Conflict Detector analyzes requirements from multiple sources simultaneously, surfaces contradictions and dependency risks before development begins, and produces a resolution framework for stakeholder alignment.

1. **Cross-Stakeholder Requirement Parsing**: Ingests requirements from multiple sources — meeting notes, Slack threads, email summaries, PRD comments, design specs — and normalizes them into a unified requirements model.
   - Extracts explicit requirements ("must support X") and implicit constraints ("cannot impact Y")
   - Tags each requirement with its source stakeholder and confidence level
   - Identifies requirements stated in different terminology that describe the same or conflicting functionality

2. **Conflict Type Classification**: Categorizes detected conflicts by type for targeted resolution.
   - **Direct contradictions**: Requirement A states X must be true; Requirement B states X must not be true
   - **Resource conflicts**: Two requirements that each require the same constrained resource (bandwidth, database write limits, API quota)
   - **Priority conflicts**: Two requirements that are each marked "must have" but cannot both be delivered in the stated scope/timeline
   - **Dependency conflicts**: Requirement A assumes capability B is available, but B is not yet built or is being changed

3. **Dependency Graph Generation**: Maps the dependency relationships between requirements to reveal hidden chains of assumptions.
   - Shows which requirements are blocked by other requirements
   - Identifies circular dependencies (A requires B, B requires A)
   - Highlights requirements that are high-risk dependency hubs — their change would cascade through many other requirements

4. **Conflict Severity Scoring**: Rates each detected conflict by its potential impact on delivery if left unresolved.
   - Critical: will block feature delivery or create a legally/technically unacceptable outcome
   - High: will require significant rework or scope change if discovered during development
   - Medium: creates implementation ambiguity that different engineers might resolve differently
   - Low: stylistic or non-blocking inconsistency worth noting but unlikely to cause problems

5. **Resolution Option Generation**: For each conflict, generates 2-3 possible resolution paths with trade-off analysis.
   - Identifies which stakeholder's requirement would need to change for each resolution option
   - Estimates the downstream impact of each resolution path on other requirements
   - Flags resolution options that may require escalation to leadership vs. PM-level decision

6. **Alignment Meeting Preparation**: Produces a pre-structured conflict review document ready for stakeholder meetings.
   - Organizes conflicts by severity and by which stakeholders are involved
   - Formats each conflict as a clear decision item: "We need to decide between [Option A] and [Option B]. Here is the trade-off."
   - Generates a decision log template to capture resolutions during the meeting

**Measurable Results**

- **Pre-development conflict detection rate**: 70-80% of conflicts detected before sprint start vs. ~20% with manual review
- **Mid-sprint rework events**: Reduced by ~55% in teams using systematic conflict detection
- **Stakeholder alignment meeting efficiency**: Conflict review meetings cut from 90 minutes to 40 minutes with pre-structured materials
- **Sprint velocity impact from spec changes**: Drops from ~15% velocity loss per quarter to under 5%
- **Requirement coverage before sign-off**: 90%+ of cross-stakeholder dependencies documented vs. ~50% manually
- **Post-launch requirement regression rate**: Features launched without detected conflicts show 40% fewer post-launch spec disputes

**Who Benefits**

- **Product Managers**: Catch conflicts before they become costly mid-sprint discoveries — and walk into stakeholder meetings with a structured resolution agenda instead of improvising
- **Engineering Teams**: Start sprints with a coherent, internally consistent spec — no more discovering that two parts of the requirements contradict each other on day 5
- **Stakeholders (Sales, Legal, CS, Security)**: Have their requirements properly tracked and conflicts surfaced transparently — no more feeling like inputs were ignored or silently dropped
- **Project / Program Managers**: Get a dependency map and risk register they can use for delivery planning and risk escalation

---

## Practical Prompts

**Prompt 1: Full Multi-Stakeholder Requirements Conflict Scan**
```
I'm building a requirements specification for [feature/product name] at [company name].
I've collected inputs from multiple stakeholders — please analyze all of them together and identify any conflicts, contradictions, or dependency risks.

Requirements by stakeholder:

SALES:
[Paste sales requirements / requests]

ENGINEERING:
[Paste technical constraints and engineering requirements]

SECURITY / COMPLIANCE:
[Paste security and compliance requirements]

CUSTOMER SUCCESS:
[Paste CS requirements and customer requests]

LEGAL:
[Paste legal requirements]

DESIGN:
[Paste UX/design constraints]

Please deliver:
1. A list of all detected conflicts, categorized by type (direct contradiction / resource conflict / dependency conflict / priority conflict)
2. Severity rating for each conflict (Critical / High / Medium / Low)
3. For each Critical and High conflict: 2-3 resolution options with trade-offs
4. A dependency map showing which requirements depend on each other
5. A prioritized list of decisions that must be made before development begins
```

**Prompt 2: Two-Team Requirements Alignment**
```
We have a requirements conflict between two teams that I need to resolve before sprint planning.

Team A's position ([team name, e.g., Security]):
[Paste their requirements or constraints in full]

Team B's position ([team name, e.g., Engineering]):
[Paste their requirements or constraints in full]

The specific conflict: [describe the conflict in 1-3 sentences as you understand it]

Current sprint timeline: [when sprint starts, when the feature needs to be ready]

Please help me:
1. Restate the conflict clearly and objectively — what does each side actually need vs. what they're asking for?
2. Generate 3 possible resolution approaches, each with:
   - What changes for Team A
   - What changes for Team B
   - Risk or trade-off introduced
   - Implementation complexity estimate
3. Recommend which resolution is most likely to be acceptable to both teams and why
4. Identify what additional information would help resolve this faster
5. Draft the key talking point I should use to present this to both teams in a joint resolution meeting
```

**Prompt 3: Dependency Risk Assessment Before Sprint Kickoff**
```
I'm about to kick off a sprint on [feature name] and want to check for hidden dependency risks before we start.

Here is our current requirements set: [paste PRD or requirements list]

External dependencies I know about:
- [Dependency 1]: [describe — e.g., "requires API from Team X, currently in development"]
- [Dependency 2]: [describe]
- [Dependency 3]: [describe]

Please analyze and tell me:
1. Which requirements in our spec have dependencies on the external items listed — and what happens to each if those dependencies are delayed or change?
2. Are there internal dependencies within our own requirements that I may have missed?
3. What is the "critical path" through our requirements — which requirement, if delayed, would push the entire feature?
4. Which of our requirements are making assumptions about other systems or teams that we haven't explicitly validated?
5. For the top 3 dependency risks: what is the mitigation strategy if the dependency doesn't resolve as expected?
```

---
