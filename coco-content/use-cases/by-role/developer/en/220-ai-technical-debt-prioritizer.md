# Use Case #220: AI Technical Debt Prioritizer

**Role**: Developer / Engineering Lead / CTO | **Industry**: Technology, SaaS, Fintech, Enterprise Software | **Task**: Technical Debt Assessment, Code Quality Management, Refactoring Planning

---
## Detailed Introduction

**The Pain: Drowning in Debt You Can't See, Measure, or Defend**

Every engineering team knows technical debt exists, but almost none can quantify it in terms that matter to stakeholders. A typical 500K LOC codebase accumulates roughly 2,000–3,000 hours of technical debt per year through rushed features, changing requirements, and deferred refactors. What makes it devastating isn't the volume — it's the invisibility. Engineers know the codebase is degrading, but when asked "how bad is it?" the best answer is usually a vague gesture at a Jira backlog with 400 tickets labeled "cleanup." Without a clear picture of where the debt lives and what it costs, every sprint planning session becomes a negotiation with incomplete information.

The cascading effects compound over time. Velocity drops as developers spend increasing hours navigating undocumented workarounds, reverse-engineering forgotten assumptions, and carefully stepping around known fragile zones. Bug rates rise in high-debt areas because developers fear touching code they don't fully understand. New engineers spend weeks onboarding into areas that experienced engineers themselves find opaque. Eventually, attrition climbs — senior engineers disproportionately cite codebase quality as a reason for leaving, and the people who understand the debt best are exactly the ones who leave first.

The business cost is concrete: industry studies show that technical debt absorbs between 20–40% of development capacity in mature codebases. For a 20-engineer team, that's 4–8 full-time engineers effectively working on debt service instead of product development. Without prioritization, teams either do nothing (debt compounds) or refactor randomly (effort without strategic impact).

**How COCO Solves It**

COCO's AI Technical Debt Prioritizer transforms a diffuse, subjective problem into a quantified, prioritized action plan that engineers and executives can both act on.

1. **Automated Codebase Scanning & Debt Detection**: COCO analyzes repository structure, commit history, and static analysis outputs to identify debt patterns at scale.
   - Detects code smells: God classes, long methods, deep inheritance chains, high cyclomatic complexity (flags functions with complexity > 10)
   - Parses output from tools like SonarQube, CodeClimate, and ESLint to consolidate existing findings rather than duplicating work
   - Mines Git history to identify "churn hotspots" — files that are modified frequently, which correlates strongly with defect density and hidden complexity
   - Flags TODO/FIXME/HACK comments and correlates them with code age and change frequency

2. **Business Impact Quantification**: Raw debt findings are converted into business-meaningful metrics.
   - Calculates estimated remediation effort in developer-hours using SQALE methodology and team-specific velocity data
   - Estimates defect probability per module using historical bug-to-churn correlation from your own Git history
   - Translates debt into velocity drag: "This module adds an estimated 3.2 hours of overhead per sprint to your team"
   - Projects compound cost: debt left unaddressed for 6 months vs. addressed now

3. **Prioritized Remediation Roadmap**: Not all debt is equal. COCO scores each debt item across multiple dimensions to focus effort where it matters.
   - Priority score = (Business Impact × Defect Probability) / Remediation Effort — surfaces high-ROI fixes first
   - Groups related debt into logical refactoring "campaigns" that can be planned as sprint-sized work items
   - Identifies "zero-cost" debt reduction opportunities: items addressable during normal feature work with minimal extra effort
   - Highlights debt in modules with upcoming planned feature work — cheapest time to fix is before the next feature lands

4. **Dependency & Blast Radius Analysis**: Understands that refactoring one module can ripple across the system.
   - Maps module interdependencies to estimate refactoring scope and risk
   - Identifies "isolated" debt that can be addressed without cross-team coordination vs. debt requiring coordinated migrations
   - Flags deprecated dependencies (EOL libraries, outdated language versions) and maps all usages

5. **Stakeholder-Ready Reporting**: Produces two parallel outputs — one for engineers, one for leadership.
   - Engineering view: specific files, functions, patterns to address, with code references and refactoring suggestions
   - Executive view: debt-to-velocity cost, projected ROI of remediation investments, risk exposure summary
   - Integrates with Jira/Linear to auto-create debt tickets with priority scores and effort estimates pre-filled

6. **Continuous Debt Tracking**: Debt isn't a one-time audit — COCO tracks trends across releases.
   - Monitors debt trajectory: is the codebase getting better or worse over time?
   - Alerts when new features introduce debt above a configurable threshold
   - Generates sprint-level debt reports to keep teams accountable without adding process overhead

**Measurable Results**

- **Debt Visibility**: 0% quantified → 100% of codebase scored with business-impact ratings within first analysis run
- **Planning Efficiency**: Sprint planning debt discussions reduced from 90 min avg → 20 min with pre-prioritized backlog
- **Remediation ROI**: Teams targeting COCO's top-priority debt items achieve 3× more velocity improvement per engineering-hour than random refactoring
- **Defect Reduction**: Addressing top 10% highest-priority debt zones reduces bug reports in those areas by 40–60% within 2 sprints
- **Onboarding Speed**: New engineer time-to-productivity improves 30% when high-debt onboarding friction areas are addressed first
- **Executive Buy-In**: Teams using debt cost reports see 2× faster approval of refactoring initiatives vs. teams presenting qualitative arguments

**Who Benefits**

- **Senior Developers / Tech Leads**: Get a defensible, data-backed prioritization framework instead of gut-feel arguments for refactoring time
- **Engineering Managers**: Can plan quarters with explicit debt reduction targets and measure progress objectively
- **CTOs / VPs of Engineering**: Translate technical debt into business risk language for board and product conversations
- **DevOps / Platform Engineers**: Identify infrastructure-layer technical debt (deprecated runtimes, EOL dependencies) before it becomes an incident

---

## Practical Prompts

**Prompt 1: Full Codebase Debt Assessment**
```
I need a technical debt assessment for our [Python/Java/TypeScript/Go] codebase.

Repository context:
- Primary language: [language]
- Framework: [framework, e.g., Django, Spring Boot, Next.js]
- Approximate size: [LOC or number of files]
- Team size: [N] engineers
- Current sprint velocity: [story points or hours/week]
- Last major refactor: [timeframe, e.g., "18 months ago" or "never"]

I'm attaching / have the following data available:
- SonarQube export: [yes/no, file attached]
- Git log (last 12 months): [yes/no]
- Current Jira tech debt backlog: [N tickets]
- Known pain points from engineers: [list 2-3 areas]

Please:
1. Identify the top debt categories present (architecture, code quality, test coverage, dependencies, documentation)
2. Score each category by severity and business impact
3. Estimate total remediation effort in developer-hours
4. Produce a prioritized top-10 debt item list with ROI scoring
5. Group items into sprint-sized remediation campaigns
6. Suggest which items can be addressed as "while we're in there" work during upcoming features
```

**Prompt 2: Debt Impact Report for Engineering Leadership**
```
I need to present our technical debt situation to [CTO/VP Engineering/Board] and get budget approval for a refactoring initiative.

Our situation:
- Team: [N] engineers, [N]-week sprints
- Product: [describe briefly, e.g., "B2B SaaS platform, 3 years old, 800K LOC"]
- Known high-debt areas: [module names or rough descriptions]
- Current symptoms: [e.g., "deploy frequency dropped from daily to weekly", "bug rate up 40% YoY", "2 senior engineers resigned citing codebase quality"]
- Proposed initiative: [e.g., "3-month refactoring sprint with 2 engineers dedicated"]

Please produce:
1. An executive summary quantifying debt in business terms (velocity cost, defect risk, attrition risk)
2. A cost-of-inaction projection (what does 12 more months of accumulated debt cost?)
3. ROI calculation for the proposed refactoring initiative
4. A risk-adjusted comparison: refactor now vs. rewrite later vs. status quo
5. A one-page "debt health score" suitable for a slide deck

Use concrete numbers. I need to defend the investment, not just describe the problem.
```

**Prompt 3: Module-Level Debt Triage for Sprint Planning**
```
We're doing sprint planning for [sprint name/date] and need to decide which debt items to include.

Context:
- We have [N] hours of capacity available for debt work this sprint
- Upcoming features planned: [feature A in module X, feature B in module Y]
- Recently filed bugs concentrated in: [module names]
- Team velocity concern: [e.g., "authentication module takes 3x longer to build in than expected"]

Attached/available:
- Our current tech debt backlog (Jira export or list below): [paste or attach]
- Git churn data for last quarter: [paste or describe]

Please:
1. Re-prioritize our backlog using impact × probability / effort scoring
2. Flag any debt items that overlap with our planned feature work (fix before or during the feature)
3. Identify the 3-5 highest-ROI items we can realistically complete in [N] hours
4. Estimate the velocity improvement we should expect if we address these items
5. Draft acceptance criteria for each selected debt ticket
```

**Prompt 4: Dependency & EOL Debt Audit**
```
I need to audit our dependency technical debt before our [Q1/Q2/Q3/Q4] planning cycle.

Stack:
- Runtime: [Node.js 16 / Python 3.8 / Java 11 / etc.]
- Key dependencies: [list major libraries and current versions]
- Package manager: [npm/pip/Maven/etc.]
- package.json / requirements.txt / pom.xml: [attached or pasted below]

Questions to answer:
1. Which dependencies are EOL or approaching EOL in the next 12 months?
2. Which dependencies have known CVEs (cross-reference with NVD)?
3. What is the estimated upgrade effort for each outdated dependency?
4. Are there any dependencies we should replace entirely (abandoned projects, better alternatives)?
5. What is the correct upgrade sequence to minimize conflict risk?
6. Which upgrades can be bundled together for efficiency?

Produce a dependency debt roadmap with effort estimates and risk ratings for each item.
```
