# Use Case #233: AI Legacy Code Archaeologist

**Role**: Software Developer / Senior Engineer / Tech Lead | **Industry**: SaaS, Enterprise Software, Financial Services, Healthcare IT | **Task**: Code Review, Legacy System Modernization, Technical Debt Analysis, Documentation

---
## Detailed Introduction

**The Pain: Developers Are Losing Weeks Every Quarter to Code That Nobody Alive Can Fully Explain**

Legacy code is one of software engineering's most expensive and least acknowledged productivity drains. A developer joining a 7-year-old codebase inherits a system built by people who have largely left, using patterns that were rational in 2017 but have no living documentation, with business logic buried in 12-level function call stacks where a single misconstrued variable name can trigger a cascade of production failures. Studies of enterprise software teams find that developers spend 42% of their time understanding existing code before they can modify it. For complex legacy systems, that ratio inverts: understanding takes 60-70% of total task time, with actual coding taking under 30%.

The human cost is particularly acute during three high-risk events: onboarding new engineers, incident response, and legacy modernization projects. A new senior engineer at a fintech company took an average of 14 weeks to reach full productivity on the core transaction processing system — not because they lacked skill, but because there was no reliable way to build a mental model of a 400,000-line codebase with 11 years of accumulated decisions, workarounds, and "temporary" fixes that became permanent. During production incidents, teams routinely spend 40-60% of total incident time in the diagnosis phase, chasing through unfamiliar code paths while the system is down and the business is bleeding.

Legacy modernization projects are where the costs peak. Replacing a legacy monolith is a 12-24 month initiative at most organizations, and one of the leading causes of failure — cited in 38% of failed modernization programs — is "incomplete understanding of existing system behavior." Teams discover undocumented business rules embedded in code after they've already built the replacement system that doesn't handle those cases. The rule was implemented in 2015 by a developer who left in 2018 and the only documentation is a one-line comment reading "handle edge case from Finance." That edge case turns out to be critical for end-of-quarter reconciliation, and the new system gets blocked at launch.

**How COCO Solves It**

COCO's AI Legacy Code Archaeologist performs deep structural analysis of codebases — tracing execution paths, identifying implicit business logic, surfacing undocumented dependencies, and generating human-readable explanations of what code actually does vs. what it was supposed to do.

1. **Execution Path Tracing and Call Graph Analysis**: Maps the full execution path of any code unit across the entire codebase.
   - Traces function calls across file and module boundaries, including dynamic dispatch and dependency injection
   - Identifies all callers of a given function or method — critical for impact analysis before modifications
   - Generates visual call graphs for complex subsystems showing data flow and dependency chains
   - Flags circular dependencies, dead code branches, and unreachable code paths that indicate prior bugs or refactoring artifacts

2. **Implicit Business Logic Extraction**: Identifies business rules encoded in code without explicit documentation.
   - Recognizes patterns like "magic numbers" (hardcoded values like 0.035 that represent an interest rate or tax threshold) and generates hypotheses about their business meaning
   - Identifies conditional logic trees that implement regulatory or business policy rules and explains the decision logic in plain language
   - Cross-references code behavior against variable names, comments, commit messages, and test cases to triangulate what the code is actually doing
   - Flags business logic that appears to contradict what the function name or surrounding comments claim

3. **Dependency and Integration Archaeology**: Maps the full dependency picture including external integrations that may no longer be current.
   - Identifies all external API calls, database queries, file I/O, and inter-service communications
   - Detects deprecated API endpoints or libraries that may be creating silent failures or security vulnerabilities
   - Maps database schema assumptions embedded in code — queries that assume column existence or data types not reflected in current schema documentation
   - Identifies environment-specific behavior: code that runs differently in dev vs. production based on environment variables

4. **Automated Legacy Documentation Generation**: Produces structured documentation from code analysis, filling gaps where none exists.
   - Generates function-level documentation explaining inputs, outputs, side effects, and preconditions inferred from code behavior
   - Produces module-level summaries explaining the business purpose of each code component
   - Creates data flow diagrams showing how data transforms as it moves through the system
   - Generates a "known unknowns" report: areas of the codebase where behavior cannot be confidently determined from code alone and requires human verification

5. **Modernization Risk Assessment**: For legacy replacement projects, identifies hidden complexity and risk before it derails timelines.
   - Identifies all implicit contracts between system components that must be preserved in any replacement
   - Flags code that implements edge cases or exception handling that a clean-room reimplementation would likely miss
   - Estimates modernization complexity per module based on coupling metrics, cyclomatic complexity, and dependency density
   - Produces a risk-ranked modernization sequencing recommendation: which modules to replace first, which to leave until last

**Measurable Results**

- **New developer onboarding time**: Reduced from 10-14 weeks to full productivity on complex legacy systems to 5-7 weeks — saving 5-7 weeks of partially-productive senior developer time per new hire
- **Incident diagnosis time**: Root cause identification in unfamiliar legacy code reduced by 55% — from average 3.2 hours to 1.4 hours per incident
- **Pre-modification impact analysis**: Time to identify all code affected by a proposed change reduced from 4-6 hours (manual grep and trace) to 25-40 minutes with COCO
- **Hidden business logic discovery**: Teams modernizing legacy systems report COCO identifies an average of 23 undocumented business rules per 50,000 lines of code that would have been missed
- **Modernization scope accuracy**: Projects using COCO for upfront legacy analysis report 31% fewer scope changes during the modernization project vs. teams that rely on manual analysis

**Who Benefits**

- **Software Developers**: Spend less time confused and more time productive — understand what code does before modifying it, reducing the risk of introducing regressions
- **Senior Engineers and Tech Leads**: Delegate legacy archaeology work to COCO rather than becoming the team's sole "human encyclopedia" for old systems
- **Engineering Managers**: Produce accurate time and risk estimates for legacy modernization projects instead of guesses that routinely underestimate by 40-60%
- **SRE and Platform Teams**: Diagnose production incidents faster when the affected code is in systems built before current team members joined

---

## Practical Prompts

**Prompt 1: Unfamiliar Function Deep Dive**
```
I'm trying to understand a function in our legacy codebase before I modify it. Help me build a complete mental model.

Function: [paste the full function code here]

Context I can provide:
- Language and framework: [e.g., Java 8, Spring Boot 2.1]
- File location: [e.g., src/main/java/com/company/billing/InvoiceProcessor.java]
- Adjacent code (callers I know about): [paste any calling code or describe the context]
- What the system does broadly: [e.g., this is our billing system, processes monthly invoices]
- What I'm trying to change: [describe the modification you need to make]

Please:
1. Explain what this function actually does in plain English — what is its real business purpose?
2. Identify any "magic numbers," hardcoded strings, or implicit assumptions embedded in the logic
3. List all the preconditions: what must be true about the inputs for this to behave correctly?
4. What are the side effects beyond the return value? (state changes, writes, external calls)
5. What are the edge cases this function handles? Are there any it probably should handle but doesn't?
6. What are the most likely ways my proposed change could break existing behavior?
7. What tests should I write or verify before making my change?
```

**Prompt 2: Legacy Module Business Logic Extraction**
```
I need to extract and document all the business rules embedded in a legacy module before we replace it.

Module code: [paste the relevant files or key files — if too large, paste the most complex 200-400 lines]
Module context:
- What it's part of: [e.g., our order management system, handles order state transitions]
- Original estimated purpose (from what we know): [what you think it does]
- Technology: [language, framework, approximate age if known]
- Known business context: [any domain knowledge about the business processes it supports]

Please:
1. List every business rule you can identify in this code — be exhaustive. Format each as: "Rule: [plain English description] — Source: [where in the code]"
2. Flag any rules that appear to be regulatory or compliance-related (these are highest risk to miss)
3. Identify any rules that seem to contradict each other or that have apparent redundancy
4. Flag any "suspicious" rules — logic that looks like it was added to handle a specific incident or exception that may no longer be relevant, or may be very relevant and undocumented
5. List the "known unknowns": decisions in this code you cannot explain from the code alone — things that need a former team member or business stakeholder to clarify
6. Produce a plain-English specification of what this module does, suitable for handing to engineers building the replacement
```

**Prompt 3: Pre-Modification Impact Analysis**
```
Before I make a change to legacy code, I need to understand the full blast radius.

The change I'm planning:
- I'm modifying: [describe what you're changing — function name, class, database column, API contract, etc.]
- The change: [describe the specific change]
- Reason: [why you're making it]

Code context:
[paste the code being changed]

Known dependencies (what I already know calls this):
[list any callers or dependents you're already aware of]

Codebase context:
- Language: [language]
- System: [describe the broader system — microservices, monolith, etc.]
- Deployment context: [how does this code get deployed — is there a staging environment? Feature flags?]

Please:
1. Based on the code patterns and the change described, what categories of callers or dependents should I search for?
2. What specific grep patterns or code search queries should I run to find all affected code?
3. What database queries or data migrations might be required?
4. What test cases most likely cover the behavior I'm changing — and which might pass incorrectly after my change?
5. What configuration, environment variables, or external system contracts does this change potentially affect?
6. Given this analysis, what's your risk assessment for this change: Low / Medium / High — and what's the key risk?
7. What would a safe rollout sequence look like for this change?
```

**Prompt 4: Incident Root Cause Archaeology**
```
We're investigating a production incident and the failing code is in a legacy system I don't fully understand.

Incident description:
- What's failing: [describe the symptom — error messages, wrong data, service down, etc.]
- When it started: [timestamp or relative time]
- Error output: [paste error messages, stack traces, or log excerpts]
- What changed recently: [any deployments, configuration changes, or data changes in the 48 hours before the incident]

Relevant legacy code:
[paste the code sections implicated by the stack trace or error messages]

System context:
- What this system does: [brief description]
- Known integrations: [external systems this code talks to]
- Data it processes: [what data flows through this code path]

Please:
1. Trace the execution path from the entry point to the failure point — what is the code supposed to do at each step?
2. At the failure point: what condition or state would cause this specific error?
3. Given the recent changes listed, which (if any) could plausibly have caused this failure? Why?
4. What other potential causes should I investigate? Rank by likelihood.
5. What diagnostic queries or log searches would confirm or rule out each hypothesis?
6. Once we identify the root cause, what's the minimum-viable fix vs. the proper fix? Are there risks in applying only the minimum-viable fix?
```

**Prompt 5: Modernization Readiness Assessment**
```
We're planning to replace a legacy module with a modern implementation. Help me understand what we'd be taking on.

Legacy module to replace:
[paste the code or describe the module — if large, paste the main entry points and most complex sections]

Replacement context:
- Why we're replacing it: [performance, maintainability, new requirements, etc.]
- Target technology: [what we're replacing it with]
- Timeline we're hoping for: [months]
- Team size working on this: [engineers]

Please produce a modernization assessment:
1. Complexity rating (1-10) with rationale: how hard is this to replace?
2. Hidden dependencies: what does this code depend on that isn't obvious from reading it?
3. Implicit contracts: what behavior does the rest of the system depend on that a clean replacement must preserve exactly?
4. High-risk business rules: which rules embedded in this code are most likely to be missed in a clean-room reimplementation?
5. Suggested modernization approach: strangler fig, big bang, or module-by-module? Why?
6. Recommended phasing: what should we tackle first vs. last?
7. Realistic timeline estimate: given the complexity assessment, what timeline would you recommend and what are the major risks to that timeline?
```

---
