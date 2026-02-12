# Process Automation Use Cases

AI use cases for workflow automation, system integration, and operational efficiency.

---

# Use Case #005: AI Code Reviewer

**Role**: Developer / Engineering Lead | **Industry**: Technology, SaaS, Fintech, Enterprise Software | **Task**: Automated Code Review, Quality Assurance, Security Scanning

---
## Detailed Introduction

**The Pain: Code Review Is Crushing Your Engineering Velocity**

Code review is one of the most important quality gates in software engineering -- and one of the biggest bottlenecks. Studies from Google and Microsoft show that developers spend 20-30% of their working hours reviewing other people's code. For senior engineers, it's often more. The result is a painful paradox: the people best qualified to review code are the same people you desperately need writing it.

The downstream effects are severe. Slow reviews block merges. Blocked merges create integration conflicts. Developers context-switch between writing code and reviewing code, destroying deep work. And when reviews get rushed due to queue pressure, bugs slip through -- the exact outcome the process was designed to prevent.

**How COCO Solves It**

COCO's AI Code Reviewer integrates directly into your existing Git workflow (GitHub, GitLab, Bitbucket) and acts as an always-available first-pass reviewer. Here's the step-by-step workflow:

1. **Automatic Trigger**: When a PR is opened or updated, COCO automatically picks it up. No manual action needed.

2. **Multi-Dimensional Analysis**: COCO reviews the diff across multiple dimensions simultaneously:
   - **Security**: SQL injection, XSS, hardcoded secrets, insecure dependencies, authentication bypasses
   - **Performance**: N+1 queries, unnecessary re-renders, memory leaks, unindexed database queries
   - **Logic**: Edge cases, null pointer risks, race conditions, off-by-one errors
   - **Style**: Adherence to your team's coding standards, naming conventions, file structure
   - **Architecture**: Design pattern violations, coupling issues, separation of concerns

3. **Contextual Comments**: Instead of generic warnings, COCO posts inline comments on the exact lines that need attention, with explanations of why there's an issue and suggested fixes. It understands context -- it won't flag a "magic number" that's clearly a well-known HTTP status code.

4. **Learning Your Codebase**: COCO indexes your repository's patterns, conventions, and architecture. Over time, its reviews become increasingly aligned with your team's specific standards -- not just generic best practices.

5. **Severity Triage**: Issues are categorized as Critical (must fix), Warning (should fix), and Suggestion (nice to have). This lets developers prioritize effectively instead of wading through a flat list.

6. **Human Reviewer Routing**: After COCO's first pass, the PR is routed to the most appropriate human reviewer based on code ownership, expertise area, and current workload. The human reviewer sees COCO's analysis and focuses only on architectural decisions, business logic correctness, and design trade-offs.

**Measurable Results**

Teams using COCO's AI Code Reviewer report:
- **68% reduction** in average PR review turnaround time
- **73% increase** in bugs caught before merge
- **85% reduction** in security vulnerabilities reaching production
- **11+ hours/week** freed up per senior engineer
- **40% fewer** review-related Slack messages and context switches

**Who Benefits**

- **Engineering Leaders**: Faster shipping velocity without sacrificing quality
- **Senior Engineers**: Freed from repetitive review work to focus on architecture and mentoring
- **Junior Engineers**: Faster feedback loops accelerate learning and reduce "waiting on review" blocks
- **Security Teams**: Consistent security scanning on every single PR, not just periodic audits

---

## Practical Prompts

**Prompt 1: Security-Focused Code Review**
```
Review this pull request for security vulnerabilities. Focus on:
1. SQL injection or NoSQL injection risks
2. Cross-site scripting (XSS) vectors
3. Hardcoded secrets, API keys, or credentials
4. Insecure deserialization
5. Authentication/authorization bypass risks
6. Insecure direct object references

For each issue found, explain the attack vector, severity (Critical/High/Medium/Low), and provide a secure code fix. Here's the diff:

[paste PR diff]
```

**Prompt 2: Performance Review for Database-Heavy Code**
```
Analyze this code change for performance issues, specifically:
1. N+1 query patterns (identify each instance)
2. Missing database indexes for new queries
3. Unbounded queries that could return massive result sets
4. Opportunities to batch operations instead of looping
5. Unnecessary data loading (selecting columns we don't use)

Our stack is [Python/Django with PostgreSQL / Node.js with MongoDB / etc.]. Current table sizes: users (~2M rows), orders (~15M rows), products (~500K rows).

Suggest optimized alternatives for each issue with expected performance improvement. Here's the code:

[paste code]
```

**Prompt 3: Full PR Review with Team Standards**
```
Review this PR as a senior engineer on our team. Our standards:
- Language: TypeScript strict mode
- Style: Airbnb ESLint config, Prettier defaults
- Testing: Minimum 80% branch coverage for new code
- Patterns: Repository pattern for data access, dependency injection
- Error handling: Custom error classes, no bare catch blocks
- Naming: camelCase variables, PascalCase types, SCREAMING_SNAKE constants

Review for: logic errors, edge cases, style violations, test coverage gaps, and architecture concerns. Categorize each finding as [MUST FIX], [SHOULD FIX], or [SUGGESTION].

PR Title: {title}
PR Description: {description}
Diff:
[paste diff]
```

**Prompt 4: Legacy Code Refactoring Review**
```
This PR refactors a legacy module. Review it for:
1. Are there any behavioral changes that might break existing functionality?
2. Is the refactoring complete, or are there leftover legacy patterns?
3. Are there new abstractions that add complexity without clear benefit?
4. Is backward compatibility maintained for the public API?
5. Are there adequate tests covering the refactored paths?

Original code behavior summary: [brief description]
Diff:
[paste diff]
```

**Prompt 5: Review Summary for Engineering Manager**
```
Generate an executive summary of this PR suitable for a non-technical engineering manager. Include:
1. What this change does in plain language (2-3 sentences)
2. Risk assessment (Low/Medium/High) with justification
3. Areas that need human review attention
4. Estimated blast radius if something goes wrong
5. Rollback complexity (simple revert vs. data migration needed)

PR:
[paste PR details and diff]
```

---

**Demo Video:**

<video controls width="100%" style="max-width: 720px; border-radius: 8px; margin: 1rem 0;">
  <source src="/videos/en/005-ai-code-reviewer.mp4" type="video/mp4">
</video>

---

# Use Case #006: AI Test Generator

**Role**: Developer / QA Engineer | **Industry**: Technology, SaaS, Fintech, Healthcare IT | **Task**: Automated Test Generation, Test Coverage Improvement, Regression Testing

---
## Detailed Introduction

**The Pain: The Test Coverage Debt That Never Gets Paid**

Every engineering team has a test coverage goal. Almost none consistently hit it. The economics are brutal: writing a thorough test for a function takes 2-5x longer than writing the function itself. Edge cases multiply the time further. And when deadlines hit, tests are the first thing cut -- "we'll add them later" becomes a permanent state.

The consequences compound silently. Low test coverage means every deploy is a gamble. Refactoring becomes terrifying because you can't trust your safety net. Bug regression becomes routine. Developers lose confidence in the codebase, which slows development further. It's a downward spiral.

Manual QA doesn't scale either. A QA engineer writing tests manually can produce 10-20 quality tests per day. For a mature codebase with thousands of functions and hundreds of API endpoints, catching up is mathematically impossible.

**How COCO Solves It**

COCO's AI Test Generator doesn't just create boilerplate tests. It performs deep analysis of your code to generate tests that actually catch bugs. Here's how:

1. **Codebase Analysis**: COCO scans your entire repository to understand the architecture, dependencies, data models, and existing test patterns. It maps every function, method, and endpoint, identifying which paths have test coverage and which don't.

2. **Priority-Based Generation**: Instead of generating tests randomly, COCO prioritizes based on risk:
   - Code paths that handle money, authentication, or user data
   - Functions with high cyclomatic complexity (more branches = more risk)
   - Recently modified code (where bugs are statistically most likely)
   - Integration points between services

3. **Intelligent Edge Case Discovery**: COCO analyzes each function's parameters, types, and behavior to generate edge cases:
   - Null/undefined/empty inputs
   - Boundary values (0, -1, MAX_INT, empty arrays)
   - Type coercion pitfalls
   - Concurrent access scenarios
   - Timezone and locale-specific behaviors
   - Error propagation paths

4. **Pattern Matching**: COCO reads your existing tests and matches:
   - Test framework and assertion library (Jest, Vitest, pytest, JUnit, etc.)
   - Fixture and factory patterns
   - Mock/stub strategies
   - Naming conventions
   - File organization structure

5. **Test Quality Assurance**: Every generated test is:
   - Deterministic (no flaky tests from random data or timing)
   - Independent (can run in any order)
   - Fast (mocks external dependencies by default)
   - Readable (clear test names that describe the behavior being verified)

6. **Continuous Gap Analysis**: After initial generation, COCO monitors code changes and automatically suggests new tests for modified code, ensuring coverage doesn't degrade over time.

**Measurable Results**

- **34% to 78% coverage** in 6 weeks (typical for mid-size codebases)
- **89% first-run pass rate** on generated tests
- **60% reduction** in production bug regression rate
- **85% reduction** in time-to-coverage for new features
- **450+ developer hours saved** per quarter on test writing
- Tests that fail on first run **find real bugs 73% of the time**

**Who Benefits**

- **Developers**: Ship with confidence; refactor without fear
- **QA Engineers**: Focus on exploratory testing and complex scenarios instead of writing boilerplate
- **Engineering Managers**: Measurable quality metrics to report; fewer fire drills from production bugs
- **Product Teams**: Faster feature delivery when refactoring isn't blocked by missing tests

---

## Practical Prompts

**Prompt 1: Generate Tests for Untested Module**
```
Analyze the following module and generate comprehensive unit tests. Our stack uses [Jest/Vitest/pytest] with [describe/it/test] style.

Requirements:
- Cover all public methods
- Include happy path, error cases, and edge cases
- Mock external dependencies (database, API calls, file system)
- Use descriptive test names following the pattern: "should [expected behavior] when [condition]"
- Match our existing fixture patterns (see example test below)

Module to test:
[paste module code]

Example existing test for reference:
[paste an existing test file from your project]
```

**Prompt 2: Edge Case Test Discovery**
```
For the following function, identify ALL possible edge cases and generate tests for each one. Think about:
- Input boundaries (min, max, zero, negative, empty, null, undefined)
- Type coercion risks
- Concurrent execution scenarios
- State mutation side effects
- Error propagation from dependencies
- Timezone/locale-sensitive behavior
- Unicode and special character handling

Function:
[paste function code]

Dependencies/context:
[paste relevant type definitions or interfaces]
```

**Prompt 3: Integration Test Suite Generation**
```
Generate integration tests for our [REST API / GraphQL API] endpoint.

Endpoint: [METHOD] [path]
Request body schema: [paste schema]
Response schema: [paste schema]
Authentication: [Bearer token / API key / Session]
Database models involved: [list models]

Generate tests covering:
1. Successful request with valid data
2. Validation errors (missing required fields, invalid types, boundary values)
3. Authentication/authorization failures
4. Concurrent request handling
5. Database constraint violations
6. Rate limiting behavior
7. Response format and status code verification

Use [supertest/httpx/RestAssured] for HTTP calls and [factory-bot/faker] for test data.
```

**Prompt 4: Regression Test from Bug Report**
```
A bug was reported and fixed. Generate regression tests to ensure this bug never returns.

Bug description: [describe the bug]
Root cause: [explain what caused it]
Fix applied: [describe or paste the fix]
Affected code:
[paste the relevant code]

Generate tests that:
1. Reproduce the exact bug scenario (should now pass with the fix)
2. Cover related edge cases that could cause similar bugs
3. Test the boundary conditions around the fix
4. Verify the fix doesn't break related functionality
```

**Prompt 5: Test Coverage Gap Analysis**
```
Here is our current test file and the source module it tests. Analyze what's NOT covered and generate the missing tests.

Source module:
[paste source code]

Current test file:
[paste existing tests]

Identify:
1. Untested functions/methods
2. Untested branches (if/else paths, switch cases, try/catch)
3. Missing edge cases for tested functions
4. Missing error scenario tests
5. Missing integration between functions

Generate ONLY the missing tests, not duplicates of existing coverage.
```

---

**Demo Video:**

<video controls width="100%" style="max-width: 720px; border-radius: 8px; margin: 1rem 0;">
  <source src="/videos/en/006-ai-test-generator.mp4" type="video/mp4">
</video>

---

# Use Case #007: AI Deploy Monitor

**Role**: DevOps Engineer / SRE / Platform Engineer | **Industry**: Technology, SaaS, E-commerce, Fintech | **Task**: Deployment Monitoring, Incident Detection, Automated Rollback, Post-Deploy Analysis

---
## Detailed Introduction

**The Pain: Deployments Are Your Biggest Source of Incidents**

Research from DORA (DevOps Research and Assessment) consistently shows that deployments are the single largest source of production incidents. The irony: the faster you ship (which every business demands), the more incidents you create. Most teams respond by either slowing down deployments (hurting velocity) or accepting a higher incident rate (hurting reliability).

The core problem isn't the deployment itself -- it's the detection and response gap. On average, it takes 15-45 minutes to detect a deployment-caused regression, another 10-30 minutes to diagnose the root cause, and 5-15 minutes to execute a rollback. During that window, users are suffering, revenue is lost, and trust erodes.

Existing monitoring tools are powerful but passive. They collect data and fire alerts based on static thresholds. They don't understand that a latency spike starting exactly 3 minutes after a deploy is probably caused by that deploy. That correlation -- obvious to a human looking at the timeline -- requires manual investigation every single time.

**How COCO Solves It**

COCO's AI Deploy Monitor acts as an intelligent layer on top of your existing monitoring infrastructure (Datadog, Prometheus/Grafana, CloudWatch, New Relic, etc.). It doesn't replace your tools -- it makes them proactive.

1. **Deploy-Aware Monitoring**: COCO hooks into your CI/CD pipeline (GitHub Actions, GitLab CI, Jenkins, ArgoCD). When a deployment starts, COCO automatically enters heightened monitoring mode, capturing baseline metrics from the pre-deploy window and watching for deviations.

2. **Multi-Signal Anomaly Detection**: COCO monitors signals across multiple dimensions simultaneously:
   - Application: Error rates, latency percentiles (p50, p95, p99), throughput
   - Infrastructure: CPU, memory, disk I/O, network, container restarts
   - Business: Transaction completion rates, cart abandonment, API success rates
   - Dependencies: Database query times, cache hit rates, external API latencies

3. **Causal Correlation**: When an anomaly is detected, COCO doesn't just alert -- it correlates the anomaly with the specific changes in the deployment. It analyzes the diff, identifies which services were modified, and maps the anomaly to the most likely root cause.

4. **Automated Response Tiers**:
   - **Tier 1 (Warning)**: Subtle anomaly detected. Notify the team with analysis. No action taken.
   - **Tier 2 (Auto-Pause)**: Significant regression detected. Pause canary rollout. Wait for human decision.
   - **Tier 3 (Auto-Rollback)**: Critical regression (error rate > threshold, latency > SLA). Automatically roll back and notify.

5. **Post-Deploy Analysis**: After every deployment (successful or not), COCO generates a deploy health report:
   - Before/after metric comparisons
   - Anomalies detected and their resolution
   - Performance regression trends over time
   - Recommendations for improving deployment safety

6. **Incident Timeline Construction**: When things go wrong, COCO automatically constructs a detailed incident timeline: what was deployed, when metrics diverged, which users were affected, what the root cause was, and what actions were taken. This eliminates hours of post-incident investigation.

**Measurable Results**

- **Mean time to detection (MTTD)**: Reduced from 23 minutes to 94 seconds
- **Mean time to rollback (MTTR)**: Reduced from 15 minutes to under 3 minutes
- **Customer-facing incidents from deploys**: Reduced by 91%
- **On-call engineer alert fatigue**: Reduced by 65% (fewer false alarms)
- **Post-incident review preparation time**: Reduced from 4 hours to 30 minutes

**Who Benefits**

- **SRE/DevOps Teams**: Sleep better. Fewer pages. Faster incident resolution.
- **On-Call Engineers**: Clear root cause analysis instead of manual investigation at 3 AM
- **Engineering Managers**: Ship faster without increasing incident rate
- **Business Stakeholders**: Higher uptime, fewer customer complaints, protected revenue

---

## Practical Prompts

**Prompt 1: Post-Deploy Health Check Analysis**
```
Analyze the following deployment metrics and determine if this deploy is healthy or needs rollback.

Deploy timestamp: [time]
Service: [service name]
Changes: [brief description of what was deployed]

Pre-deploy baseline (last 30 min):
- Error rate: [X]%
- p99 latency: [X]ms
- CPU utilization: [X]%
- Memory: [X]%
- Requests/sec: [X]

Post-deploy (last 15 min):
- Error rate: [X]%
- p99 latency: [X]ms
- CPU utilization: [X]%
- Memory: [X]%
- Requests/sec: [X]

Error log sample:
[paste recent error logs]

Provide: health verdict, risk assessment, root cause hypothesis if unhealthy, and recommended action (proceed/monitor/rollback).
```

**Prompt 2: Incident Root Cause Analysis**
```
An incident occurred after deployment. Help me construct a root cause analysis.

Timeline:
- Deploy started: [time]
- Deploy completed: [time]
- First anomaly detected: [time]
- Alert fired: [time]
- Rollback initiated: [time]
- Recovery confirmed: [time]

Deployment changes (diff summary):
[paste key changes]

Affected metrics:
[paste metric data or screenshots description]

Error samples:
[paste representative errors]

Generate a structured RCA including:
1. Incident summary (what happened, impact, duration)
2. Root cause (what specifically caused the issue)
3. Contributing factors (what made it worse)
4. Timeline analysis (where we lost time)
5. Action items (prevent recurrence, improve detection, reduce blast radius)
```

**Prompt 3: Deployment Runbook Generation**
```
Generate a deployment runbook for our [service name] based on:

Architecture: [describe service architecture]
Dependencies: [list downstream/upstream services]
Database migrations: [yes/no, describe if yes]
Feature flags: [list any feature flags being toggled]
Expected traffic: [current requests/sec]
Deploy strategy: [rolling/blue-green/canary with X% increments]

Include:
1. Pre-deploy checklist (what to verify before deploying)
2. Key metrics to monitor during rollout (with specific thresholds)
3. Smoke test commands to run after deploy
4. Rollback procedure (step-by-step)
5. Communication plan (who to notify, when)
6. Known risks and mitigations
```

**Prompt 4: Alert Threshold Optimization**
```
Our current alerting generates too many false positives. Help optimize thresholds.

Service: [service name]
Current alerts and their thresholds:
[list each alert with current threshold]

Last 30 days alert history:
- Total alerts fired: [X]
- True positives (actual incidents): [X]
- False positives: [X]
- Alerts during deploys: [X]

Normal traffic patterns:
- Peak hours: [times]
- Off-peak baseline: [metrics]
- Known spikes: [e.g., batch jobs at midnight]

Recommend new thresholds that reduce false positives by at least 50% while maintaining detection of real incidents. Consider dynamic thresholds based on time of day.
```

---

---

# Use Case #009: AI Debug Assistant

**Role**: Developer / Full-Stack Engineer / Backend Engineer | **Industry**: Technology, SaaS, Fintech, Any Software Company | **Task**: Bug Diagnosis, Error Resolution, Performance Debugging, Log Analysis

---
## Detailed Introduction

**The Pain: Debugging Is the Biggest Hidden Tax on Engineering Productivity**

Debugging is where engineering time goes to die. Studies from Cambridge University estimate that developers spend 50% of their programming time finding and fixing bugs. Of that, the majority is spent on diagnosis -- not the fix itself. The fix is often one line. Finding that line takes hours.

The knowledge asymmetry is the core problem. The error message tells you what happened, but not why. The stack trace shows you where the crash occurred, but not the upstream cause. To bridge that gap, a developer needs to hold the entire system's context in their head: how data flows between services, what assumptions each function makes, what changed recently, and what could have cascaded to cause this specific failure.

Senior developers debug faster because they carry this context from experience. But even they hit walls when the bug crosses service boundaries, involves timing-dependent behavior, or stems from a change made by someone else weeks ago. And junior developers? They're often stuck for entire days on bugs that a senior would solve in 20 minutes -- because they lack the contextual mental model.

**How COCO Solves It**

COCO's AI Debug Assistant acts as a senior debugging partner that has read your entire codebase, understands your architecture, and can correlate errors with recent changes.

1. **Contextual Error Analysis**: When you paste an error, stack trace, or unexpected behavior description, COCO doesn't just read the error message. It:
   - Parses the full stack trace to understand the execution path
   - Reads the relevant source files at the lines referenced
   - Examines the types, interfaces, and data flow around the error location
   - Checks recent git commits to see if something changed near the error site
   - Searches for similar past errors in your error tracking system

2. **Root Cause Chain**: COCO traces the causal chain backward from the symptom to the root cause. For example:
   - **Symptom**: "Cannot read property 'email' of undefined"
   - **Immediate cause**: `user` object is undefined at line 47
   - **Upstream cause**: `findUserById` returned null because the query uses `user_id` but the column was renamed to `account_id` in migration #283
   - **Root cause**: Migration was applied but the ORM model wasn't updated to reflect the column rename

3. **Fix Suggestions with Diffs**: COCO doesn't just explain the problem -- it generates the fix as a code diff you can apply directly. It considers:
   - The minimal change that fixes the bug without side effects
   - Whether the fix should include a null check, a migration, a schema change, or a configuration update
   - Related code that might have the same bug pattern

4. **Performance Debugging**: Beyond errors, COCO helps diagnose performance issues:
   - Identifies slow database queries from explain plans
   - Spots N+1 query patterns in ORM code
   - Detects memory leaks from heap snapshots
   - Analyzes slow API response times by tracing the request lifecycle

5. **Log Analysis**: COCO can ingest log files and:
   - Filter signal from noise in verbose logs
   - Identify patterns and anomalies across thousands of log lines
   - Correlate timestamps across multiple services to reconstruct request flows
   - Spot error patterns that precede failures

6. **Knowledge Accumulation**: Every debug session teaches COCO more about your system. Over time, it builds a model of:
   - Common failure modes in your codebase
   - Which components are fragile and why
   - Recurring patterns in bugs (e.g., "every time the cache TTL config changes, these three endpoints break")

**Measurable Results**

- **Debugging time reduced** from 9.2 to 3.4 hours/developer/week (63% reduction)
- **Bug resolution time (MTTR)** reduced by 58%
- **Junior developer productivity** improved 40% (faster ramp-up through AI-assisted learning)
- **Recurring bug patterns** identified and systematically eliminated, reducing bug recurrence by 45%
- **5.8 hours/developer/week** returned to feature development

**Who Benefits**

- **All Developers**: Faster diagnosis means less frustration and more flow state time
- **Junior Developers**: AI pair debugging accelerates learning and reduces dependency on senior mentors
- **Engineering Managers**: Quantifiable reduction in debugging overhead; more time on feature work
- **On-Call Engineers**: Faster incident diagnosis during outages

---

## Practical Prompts

**Prompt 1: Error Diagnosis with Full Context**
```
Help me debug this error. Here's all the context:

Error message and stack trace:
[paste full error output]

Relevant source code (the file(s) referenced in the stack trace):
[paste code]

What was I doing when the error occurred:
[describe the action/request that triggered it]

Recent changes (last few commits that touched this area):
[paste git log or describe changes]

Environment: [Node.js 20 / Python 3.12 / etc.] running on [local / staging / production]

Trace the root cause chain from symptom to origin. Then provide a fix as a code diff.
```

**Prompt 2: Performance Issue Diagnosis**
```
This API endpoint is responding slowly. Help me find the bottleneck.

Endpoint: [METHOD] [path]
Average response time: [X]ms (expected: [Y]ms)
Slow under: [all conditions / high load / specific requests]

Here's the handler code and all functions it calls:
[paste code including database queries, external API calls, etc.]

Database query explain plans (if available):
[paste EXPLAIN output]

Application logs for a slow request:
[paste logs with timestamps]

Identify:
1. The specific bottleneck(s) causing slowness
2. Why it's slow (algorithmic complexity, missing index, synchronous blocking, etc.)
3. Optimized code with expected improvement
```

**Prompt 3: Reproduce and Fix Intermittent Bug**
```
I have an intermittent bug that I can't consistently reproduce. Help me narrow it down.

Symptoms: [describe what goes wrong]
Frequency: [happens ~X% of the time / only under certain conditions]
When it started: [approximate date or deploy]

What I've tried:
[list debugging steps already taken]

Relevant code:
[paste the code area where the bug manifests]

Logs from a failing instance:
[paste]

Logs from a succeeding instance (same operation):
[paste]

Analyze the differences between the failing and succeeding cases. Identify likely causes (race condition, timing, data-dependent, environment-dependent). Suggest a reproduction strategy and fix.
```

**Prompt 4: Memory Leak Investigation**
```
Our [Node.js/Python/Java] service memory usage grows steadily until it OOMs every [X hours].

Current memory profile:
- Startup: [X]MB
- After 1 hour: [X]MB
- After 4 hours: [X]MB
- OOM threshold: [X]MB

Heap snapshot summary (if available):
[paste top retained objects/sizes]

Suspected area of code:
[paste code that handles the most data or creates the most objects]

Recent changes that might have introduced the leak:
[paste or describe]

Analyze for common leak patterns: event listeners not removed, closures retaining references, growing caches without eviction, streams not properly closed, circular references preventing GC. Provide specific fix recommendations.
```

**Prompt 5: Log-Based Incident Investigation**
```
An incident occurred and I need to understand what happened from these logs. The logs are from [number] services over a [X minute] window.

Service A logs:
[paste]

Service B logs:
[paste]

Service C logs:
[paste]

Timeline context:
- Incident reported at: [time]
- Services involved: [list]
- User impact: [description]

Correlate the logs across services to reconstruct:
1. The sequence of events leading to the incident
2. The first point of failure
3. How the failure propagated between services
4. The root cause
5. Timeline of impact start to recovery
```

---

---

# Use Case #016: AI CRM Updater

**Role**: Sales Rep / Account Executive / Sales Operations | **Industry**: B2B SaaS, Enterprise Sales, Professional Services | **Task**: CRM Data Entry, Activity Logging, Pipeline Hygiene, Deal Intelligence

---
## Detailed Introduction

**The Pain: CRM Data Entry Is Killing Sales Productivity and Pipeline Accuracy**

Salesforce's own research shows that sales reps spend only 28% of their time actually selling. The largest single time drain? Administrative tasks, with CRM data entry at the top. It's a painful irony: the system designed to help sales teams sell better is the system that prevents them from selling.

The downstream effects are devastating. When CRM updates are treated as busywork (which they are, for the rep), data quality suffers. Fields are left empty. Deal stages are updated late. Meeting notes are minimal. Contact information is incomplete. The CRM becomes a unreliable source of truth, which undermines forecasting, pipeline reviews, and strategic decision-making.

Sales leaders face a lose-lose: enforce strict CRM hygiene (reps hate it, morale drops, top performers leave) or accept dirty data (forecasts are wrong, pipeline reviews are theater, board reports are fiction).

**How COCO Solves It**

COCO's AI CRM Updater automates data entry by extracting intelligence from the conversations and activities that are already happening.

1. **Automatic Call/Meeting Logging**: COCO integrates with conversation intelligence tools (Gong, Chorus, Clari) and calendar:
   - Detects when a sales activity occurs (call, meeting, email)
   - Extracts structured data from the conversation
   - Logs the activity in the CRM with full context -- not just "Had a call"

2. **Intelligent Note Generation**: After every customer interaction, COCO generates structured meeting notes:
   - **Summary**: What was discussed (2-3 sentences)
   - **Decisions Made**: Any commitments or agreements
   - **Objections Raised**: Specific concerns the prospect expressed
   - **Next Steps**: Action items with owners and deadlines
   - **Stakeholders Mentioned**: New contacts or influencers identified
   - **Budget/Timeline Signals**: Any mentions of budget, timeline, or urgency
   - **Competitive Intelligence**: Competitors mentioned and in what context

3. **Auto-Field Population**: COCO fills CRM fields from conversation data:
   - Contact details (title changes, email addresses mentioned)
   - Company information (size, revenue, tech stack mentioned in conversation)
   - Deal fields (budget range, decision timeline, number of users, use case)
   - Custom fields specific to your sales process

4. **Deal Stage Intelligence**: Instead of relying on reps to manually update stages, COCO:
   - Analyzes conversation content against your stage definitions
   - Suggests stage changes when deal behavior matches criteria (e.g., "Budget confirmed, technical evaluation scheduled -- suggest moving to Stage 3")
   - Flags deals that should move backward ("Champion went silent, last meeting was canceled -- consider reverting to Stage 2")

5. **Pipeline Hygiene Automation**:
   - Flags stale deals with no recent activity
   - Identifies close date slippage (deal was supposed to close last month)
   - Detects zombie deals (no engagement, no progression, but still in pipeline)
   - Recommends actions: re-engage, update close date, or remove from pipeline

6. **Forecast Enhancement**: With real-time, accurate data, COCO improves forecast reliability:
   - Commit vs. upside classification based on actual deal signals, not rep optimism
   - Risk scoring for each deal in the pipeline
   - Week-over-week pipeline movement analysis
   - Early warning for deals at risk of slipping

**Measurable Results**

- **CRM data completeness**: From 61% to 94%
- **Rep time saved on data entry**: 4.2 hours/week per rep
- **Pipeline forecast accuracy**: +38% improvement
- **Deal stage accuracy**: From 67% to 89% (verified by manager review)
- **Stale deal identification**: 100% (zero zombie deals undetected for >14 days)
- **Sales team CRM satisfaction**: From 2.1/5 to 4.2/5

**Who Benefits**

- **Sales Reps**: Eliminate the most-hated part of their job; focus on selling
- **Sales Managers**: Accurate pipeline data for meaningful reviews and coaching
- **VP of Sales/CRO**: Reliable forecasts for board reporting and resource planning
- **Sales Operations**: Clean data for analytics, territory planning, and compensation

---

## Practical Prompts

**Prompt 1: Meeting Notes to CRM Update**
```
Convert these meeting notes into structured CRM fields and a properly formatted activity log.

Meeting notes (raw):
[paste your rough meeting notes, call transcript summary, or voice memo transcript]

Meeting details:
- Date: [date]
- Attendees: [list]
- Company: [company name]
- Deal name: [if exists in CRM]

Extract and format:
1. **Activity Log Entry**: Structured summary of the meeting (who, what, outcome, next steps)
2. **CRM Field Updates**: Which fields should be updated based on information discussed:
   - Deal stage: [current] → [recommended] with reasoning
   - Budget: [any budget information mentioned]
   - Timeline: [any timeline information]
   - Decision makers: [any new stakeholders identified]
   - Use case: [what they want to use the product for]
   - Competitive information: [any competitors mentioned]
3. **Follow-up Tasks**: Action items with owner, due date, and priority
4. **Risk Flags**: Any warning signs from this meeting
```

**Prompt 2: Pipeline Hygiene Audit**
```
Audit this pipeline data and flag issues that need attention.

Pipeline data:
[paste pipeline export or describe deals - for each deal include: deal name, stage, close date, amount, last activity date, last activity type, days in current stage]

Our sales cycle average: [X days]
Our stage definitions:
- Stage 1: [definition + expected duration]
- Stage 2: [definition + expected duration]
- Stage 3: [definition + expected duration]
- Stage 4: [definition + expected duration]
- Closed Won/Lost

Flag:
1. **Stale Deals**: No activity in >14 days (recommend action for each)
2. **Stage Duration Outliers**: Deals stuck in a stage longer than 2x average
3. **Close Date Issues**: Deals past their close date that aren't closed
4. **Pipeline Integrity**: Deals that appear to have skipped stages
5. **At-Risk Deals**: Deals showing patterns that historically correlate with losses

For each flagged deal, recommend: re-engage strategy, update close date, move to lost, or escalate to manager.
```

**Prompt 3: Weekly Deal Review Preparation**
```
Prepare a deal review summary for my pipeline meeting with my manager.

My current pipeline:
[paste your deals with: deal name, company, stage, amount, close date, key contacts, last activity]

For each deal, generate:
1. **Status Summary** (2-3 sentences): What's happening, where we are, what's next
2. **Confidence Level**: High/Medium/Low with specific reasoning
3. **Key Risks**: What could go wrong
4. **Help Needed**: Specific asks for my manager (exec sponsorship, pricing flexibility, technical resources)
5. **Next Steps**: What I'm doing this week to advance the deal

Also generate:
- **Pipeline Summary**: Total pipeline value, weighted pipeline, expected close this month/quarter
- **Top 3 Deals to Focus On**: Where my time will have the highest impact
- **Deals to Consider Closing Out**: Deals I should probably move to lost
```

---

---

# Use Case #021: AI Ticket Classifier

**Role**: Support Operations / Support Manager / Customer Success | **Industry**: SaaS, E-commerce, Fintech, Healthcare, Telecommunications | **Task**: Ticket Routing, Priority Classification, Auto-Triage, SLA Management

---
## Detailed Introduction

**The Pain: Manual Ticket Triage Is a Bottleneck That Gets Worse at Scale**

Every support organization faces the triage bottleneck. Incoming tickets arrive through multiple channels (email, chat, web forms, social media, phone) in unstructured natural language. Someone has to read each one, understand the issue, assign a priority, categorize it, and route it to the right team. At 100 tickets/day, a skilled support lead can handle this. At 500/day, it becomes a full-time job. At 1,000+/day, it's impossible for one person and you're hiring triage-only headcount.

The human cost of misrouting is significant. When a ticket goes to the wrong team, the customer waits while it's reassigned. Average reassignment adds 2-4 hours to resolution time. And the customer has to re-explain their issue to a new agent, creating frustration. In high-volume environments, misrouting rates of 20-40% are common.

Priority assignment is equally problematic. A customer reporting a production outage and a customer asking about a feature request both arrive as "new tickets." Without intelligent prioritization, they wait in the same queue, and SLA breaches become inevitable.

**How COCO Solves It**

COCO's AI Ticket Classifier provides instant, accurate triage for every incoming support ticket.

1. **Natural Language Understanding**: COCO reads the full ticket content and understands:
   - The type of issue (bug, feature request, billing, how-to, account access, integration, etc.)
   - The severity (production down, degraded performance, inconvenience, question)
   - The product area affected
   - The customer's emotional state (frustrated, confused, angry, neutral)
   - Whether the ticket contains enough information to diagnose (or needs clarification)

2. **Multi-Factor Priority Assignment**: Priority isn't just about what the customer says -- it's about context:
   - **Issue severity**: Production outage = P1, Feature request = P4
   - **Customer tier**: Enterprise/VIP customer = priority boost
   - **Business impact**: Revenue-affecting issues get higher priority
   - **Sentiment analysis**: Frustrated/angry customers get elevated attention
   - **SLA context**: Tickets approaching SLA breach get auto-escalated
   - **Repeat tickets**: Same customer, same issue = escalation

3. **Intelligent Routing**: Based on classification, COCO routes to the correct team:
   - Maps issues to specialized teams (billing, technical, product, security)
   - Considers agent availability, workload, and expertise
   - Routes complex issues to senior agents directly
   - Handles multi-issue tickets by splitting or routing to primary team with secondary tag

4. **Auto-Response for Common Issues**: For tickets that match known solutions, COCO:
   - Identifies relevant knowledge base articles
   - Generates a helpful auto-response with the specific solution steps
   - Sets ticket to "Awaiting Customer Confirmation" instead of closing
   - If the customer replies saying it didn't work, auto-escalates to human agent

5. **Escalation Intelligence**: COCO detects escalation triggers:
   - Customer mentions "cancel," "legal," "regulator," or "executive"
   - Customer has submitted 3+ tickets on the same issue
   - SLA breach is imminent
   - VIP customer with any P2+ issue
   - Negative sentiment exceeding threshold

6. **Continuous Learning**: Classification accuracy improves over time:
   - Learns from agent corrections (when an agent reclassifies a ticket)
   - Adapts to new issue types as products evolve
   - Updates routing rules based on resolution patterns

**Measurable Results**

- **Misrouting rate**: From 31% to 4% (87% reduction)
- **First-response time**: From 4.7 hours to 47 minutes (83% reduction)
- **Auto-resolved tickets**: 35% of volume handled without human agent
- **CSAT score**: From 72% to 89%
- **Triage labor saved**: 3+ hours/day of team lead time
- **SLA breach rate**: From 18% to 3%
- **Average resolution time**: Reduced by 42%

**Who Benefits**

- **Support Agents**: Receive properly categorized, prioritized tickets in their specialty area
- **Support Managers**: Eliminate triage bottleneck; focus on quality and coaching
- **Customers**: Faster, more accurate first responses; fewer "wrong department" bounces
- **Operations**: Clean ticket data for reporting, capacity planning, and product feedback loops

---

## Practical Prompts

**Prompt 1: Build Ticket Classification Taxonomy**
```
Help me build a ticket classification taxonomy for our support team.

Our product: [describe your product]
Support channels: [email, chat, phone, web form]
Current team structure: [list specialist teams, e.g., billing, technical, product]
Common issue types we see: [list the types of issues you get most often]
SLA tiers: [list your SLA requirements by priority level]

Create:
1. Category taxonomy (3 levels: Category > Subcategory > Issue Type) with at least 30 issue types
2. Priority matrix mapping issue types to priority levels (P1-P4)
3. Routing rules: which team handles which categories
4. Auto-escalation triggers: conditions that should automatically escalate a ticket
5. Auto-response candidates: issue types where a KB article can fully resolve the question
6. Sentiment-based overrides: when sentiment should change priority regardless of issue type
```

**Prompt 2: Classify a Batch of Tickets**
```
Classify these support tickets. For each, provide: category, subcategory, priority (P1-P4), recommended team, sentiment score, and whether it can be auto-resolved with a KB article.

Our classification taxonomy:
[paste your taxonomy or describe categories]

Our priority definitions:
- P1: Production down, security breach, data loss
- P2: Major feature broken, significant business impact
- P3: Minor issue, workaround available
- P4: Question, feature request, minor cosmetic issue

Tickets:

Ticket #1: "[paste ticket subject and body]"
Ticket #2: "[paste ticket subject and body]"
Ticket #3: "[paste ticket subject and body]"
[...continue]

For each ticket, output:
| Ticket | Category | Subcategory | Priority | Team | Sentiment | Auto-resolve? | Reasoning |
```

**Prompt 3: Write Auto-Response Templates**
```
Create auto-response templates for our top 10 most common ticket types. Each response should feel helpful and human, not robotic.

Our top 10 ticket types:
1. [Issue type] - [brief description of what customers ask]
2. [Issue type] - [brief description]
[...continue for all 10]

Our brand voice: [describe - e.g., "friendly, professional, empathetic"]
Our product name: [name]

For each ticket type, write:
1. An empathetic opening (acknowledges their issue)
2. Step-by-step solution (clear, numbered steps)
3. Link placeholder for relevant KB article: [KB: article-name]
4. Fallback: "If this doesn't resolve your issue, reply to this email and a team member will assist you within [SLA timeframe]"
5. Warm sign-off

Keep each response under 150 words. Test readability: would a frustrated customer find this helpful, not annoying?
```

---

---

# Use Case #024: AI VIP Escalation

**Role**: Enterprise Support / Customer Success Manager / Support Operations | **Industry**: SaaS, Enterprise Software, Fintech, Healthcare | **Task**: VIP Customer Detection, Intelligent Escalation, Priority Queue Management, Churn Prevention

---
## Detailed Introduction

**The Pain: Your Support System Can't Tell a $500K Customer from a Free Trial User**

Most support systems treat all customers equally. From a fairness perspective, this seems right. From a business perspective, it's catastrophic. When a $500K enterprise account gets the same 4-hour SLA as a $50/month subscriber, you're making an implicit statement about how much you value that relationship.

Enterprise customers don't just expect faster support -- they expect contextual support. When they contact you, they expect the agent to know their account, their history, their contract terms, and their strategic priorities. Being treated as ticket #4,527 in a faceless queue is, for many enterprise buyers, the beginning of the end.

The churn economics are stark. Losing one enterprise account can equal losing 100+ SMB accounts. And by the time a VP emails your CEO saying "we're evaluating alternatives," the damage is done -- recovery is expensive and uncertain. The support interaction that precipitated that email might have been trivially easy to handle correctly, if only someone had flagged it as important.

**How COCO Solves It**

COCO's AI VIP Escalation creates a smart layer that ensures high-value customers receive treatment proportional to their business importance.

1. **Real-Time Customer Value Recognition**: When a ticket arrives, COCO instantly identifies:
   - Account tier (ARR, contract value, strategic importance)
   - Renewal date proximity (accounts within 90 days of renewal get priority boost)
   - Account health score (NPS, product usage, support history)
   - Contact's role (executive contacts get different treatment than end users)
   - Expansion pipeline (accounts with active upsell opportunities)

2. **Intelligent Escalation Matrix**: COCO applies dynamic escalation rules:
   - **Tier 1 (Enterprise VIP)**: P1-P2 issues go directly to senior agent + immediate CSM notification. P3-P4 go to dedicated enterprise queue with 30-minute SLA.
   - **Tier 2 (Growth accounts)**: P1 gets immediate escalation. P2-P4 get priority queue placement.
   - **Renewal Risk**: Any account within 60 days of renewal gets automatic priority boost regardless of issue severity.
   - **Churn Signal Detection**: Language analysis flags tickets containing churn indicators.

3. **Context-Rich Agent Handoff**: When a VIP ticket is escalated, the agent receives:
   - Account summary (ARR, products, contract dates, key stakeholders)
   - Ticket history (recent issues, resolution patterns, satisfaction scores)
   - Relationship context (CSM notes, last executive meeting, known concerns)
   - Renewal/expansion context (upcoming renewal, active opportunities)
   - Recommended approach (based on account health and contact personality)

4. **Churn Signal Detection**: COCO analyzes ticket content for warning signs:
   - Direct signals: "cancel," "downgrade," "not renewing," "looking at alternatives"
   - Indirect signals: "frustrated," "this keeps happening," "not getting value," "executive team is asking"
   - Pattern signals: Increasing ticket frequency, escalating severity, shorter messages (disengagement)
   - Triggers automatic CSM alert with risk assessment

5. **Proactive Intervention**: Beyond reactive escalation, COCO enables:
   - Weekly VIP account health reports for CSMs
   - Automatic outreach triggers when usage drops below threshold
   - Sentiment trend analysis across all touchpoints
   - Early warning system for accounts showing pre-churn patterns

6. **Executive Communication Handling**: When C-level contacts submit tickets:
   - Immediate routing to most senior available agent
   - CSM and account manager notified within 5 minutes
   - Response drafted with executive-appropriate tone and detail level
   - Follow-up scheduled within 24 hours regardless of resolution

**Measurable Results**

- **VIP first-response time**: 12 minutes (vs. 2 hours standard)
- **VIP accounts churned due to support**: 0 (previous year: 4 accounts, $1.2M ARR)
- **VIP CSAT**: 94% (vs. 84% overall)
- **Churn signals detected and saved**: 11 at-risk accounts identified and retained ($2.8M ARR)
- **CSM proactive intervention rate**: From 23% to 78% of VIP issues
- **Enterprise renewal rate**: From 89% to 96%

**Who Benefits**

- **Enterprise Customers**: Feel valued and prioritized; issues resolved faster
- **Support Agents**: Clear priority guidance; pre-loaded context for VIP interactions
- **Customer Success Managers**: Early warning on at-risk accounts; data for proactive outreach
- **Revenue Leaders**: Protected enterprise revenue; higher renewal rates

---

## Practical Prompts

**Prompt 1: Build VIP Escalation Rules**
```
Design a VIP escalation framework for our support team.

Our customer tiers:
- Enterprise: $100K+ ARR, [X] accounts
- Mid-Market: $10K-$100K ARR, [X] accounts
- SMB: Under $10K ARR, [X] accounts

Current SLAs:
- P1: [X hours] first response
- P2: [X hours] first response
- P3: [X hours] first response

Design:
1. Escalation matrix: For each customer tier x priority level, define response SLA, agent tier, and notification rules
2. Auto-escalation triggers: Conditions that automatically bump priority
3. Churn signal keywords: Words/phrases that should trigger CSM alerts
4. Executive contact handling: Special rules for C-level contacts
5. Renewal proximity rules: How to adjust priority based on days-to-renewal
6. Metrics to track: KPIs that measure VIP support effectiveness
```

**Prompt 2: Analyze Account Risk from Support Interactions**
```
Analyze these recent support interactions for a key account and assess churn risk.

Account: [Company], $[X] ARR, renewal date: [date]
CSM: [name]
Account health score: [current score]

Recent support tickets (last 90 days):
1. Date: [X] | Issue: [X] | Priority: [X] | Resolution time: [X] | CSAT: [X]
2. Date: [X] | Issue: [X] | Priority: [X] | Resolution time: [X] | CSAT: [X]
[...continue]

Recent support excerpts (customer language):
[paste notable customer messages]

Analyze:
1. Churn risk level (Low/Medium/High/Critical) with reasoning
2. Pattern analysis: Is ticket frequency/severity increasing?
3. Sentiment trend: Is the customer becoming more frustrated over time?
4. Key concerns: What issues keep recurring?
5. Recommended actions for CSM (immediate, this week, this month)
6. Talking points for next CSM check-in call
```

**Prompt 3: Draft VIP Customer Apology and Recovery Email**
```
A VIP customer had a poor support experience. Draft a recovery email from their CSM.

Account: [Company], $[X] ARR
Contact: [Name], [Title]
What happened: [describe the support failure - e.g., long wait time, incorrect resolution, multiple transfers]
Customer's stated frustration: [paste their words if available]
Relationship history: [strong/strained/new]

Write an email that:
1. Acknowledges the specific failure (don't be vague)
2. Takes ownership without excuses
3. Explains what we're doing to fix the root cause (not just this instance)
4. Offers a concrete goodwill gesture appropriate to the relationship tier
5. Provides direct escalation path for future issues
6. Maintains dignity -- apologetic but not groveling

Tone: Senior, professional, genuine. This should sound like it comes from someone who genuinely cares about the relationship, not a PR template.
```

---

---

# Use Case #027: AI Interview Scheduler

**Role**: Recruiting Coordinator / Talent Operations / HR | **Industry**: Any Industry with High Hiring Volume | **Task**: Interview Scheduling, Calendar Coordination, Candidate Communication, Interview Loop Management

---
## Detailed Introduction

**The Pain: Interview Scheduling Is the Silent Killer of Recruiting Speed**

In competitive talent markets, speed wins. Research from Glassdoor shows that the best candidates are off the market within 10 days. Yet the average interview process takes 23 days, with a significant portion of that time consumed not by evaluation but by scheduling logistics. The scheduling bottleneck is particularly acute for multi-person interview panels, cross-timezone coordination, and senior roles requiring multiple rounds.

Recruiting coordinators -- the people managing this complexity -- are among the most overworked and undervalued roles in HR. They manage dozens of scheduling requests simultaneously, each one a multi-variable optimization problem. Finding a 1-hour slot where 5 busy people, the candidate, and a conference room are all available feels like solving a Rubik's cube that keeps changing colors.

The hidden cost goes beyond coordinator time. Every day of scheduling delay increases the probability of losing a top candidate. When your process takes 5 days just to confirm an interview, while a competitor confirms in 1 day, the math is simple and brutal. The candidates you lose aren't the average ones -- they're the ones with multiple options, which means they're the best ones.

**How COCO Solves It**

COCO's AI Interview Scheduler automates the entire scheduling workflow from initial availability to confirmation.

1. **Calendar Intelligence**: Integrates with Google Calendar, Outlook, and Calendly to read real-time availability across all interviewers. Understands recurring meetings, focus time blocks, and out-of-office schedules.

2. **Constraint-Aware Optimization**: Finds optimal slots considering:
   - Panel composition requirements (e.g., must include 1 hiring manager + 2 technical + 1 culture)
   - Interviewer load limits (max interviews per day/week per person)
   - Timezone preferences for both interviewers and candidates
   - Buffer time between interviews (no back-to-back scheduling fatigue)
   - Room availability and virtual meeting setup
   - Candidate preferences and travel logistics

3. **Automated Candidate Communication**: Sends professional, branded scheduling emails with:
   - Self-service confirmation links (one-click accept)
   - Time zone-aware display (candidate sees their local time)
   - Calendar invites with all logistics (room, video link, prep materials)
   - What-to-expect guide for each interview type
   - Interviewer bios and LinkedIn profiles

4. **Dynamic Rescheduling**: When cancellations happen (and they always do), COCO:
   - Automatically finds replacement slots within the original timeframe
   - Finds substitute interviewers from a pre-approved backup list
   - Notifies all parties and updates calendar invites
   - Logs the reschedule reason for reporting (which interviewers cancel most?)
   - All without human intervention for 90% of reschedules

5. **Interview Loop Management**: For multi-round processes, manages the entire pipeline:
   - Phone screen scheduling (recruiter + candidate, simple)
   - Technical round coordination (1-3 technical interviewers)
   - Onsite loop assembly (5-7 interviewers across a full day)
   - Debrief scheduling (all interviewers within 24-48 hours of loop)
   - Final round / exec interview (scheduling around VIP calendars)

6. **Analytics and Insights**: Tracks and reports on:
   - Scheduling velocity (time from "schedule requested" to "confirmed")
   - Interviewer utilization and availability patterns
   - Candidate wait times by role, team, and stage
   - Bottleneck identification (which interviewers are hardest to schedule?)
   - Cancellation and reschedule rates by interviewer
   - Correlation between scheduling speed and offer acceptance rates

**Measurable Results**

- **Scheduling time per loop**: From 45 minutes to 3 minutes (93% reduction)
- **Candidate wait time**: From 5.2 days to 1.4 days
- **Candidates lost to delays**: From 18% to 4%
- **Coordinator time saved**: 22+ hours/week reallocated to candidate experience
- **Interviewer satisfaction**: +35% (fewer scheduling conflicts and last-minute changes)
- **Reschedule handling**: 90% automated (no human intervention needed)
- **Offer acceptance rate**: +12% improvement attributed to faster process

**Who Benefits**

- **Recruiting Coordinators**: Freed from calendar Tetris to focus on candidate experience and process improvement
- **Interviewers**: Fewer scheduling conflicts, better preparation time, balanced interview load
- **Candidates**: Faster process, professional communication, respect for their time
- **Hiring Managers**: Faster pipeline velocity means roles filled sooner
- **TA Leaders**: Better metrics on scheduling efficiency and its impact on hiring outcomes

---

## Practical Prompts

**Prompt 1: Design Interview Loop Schedule**
```
Help me schedule an interview loop for a [role name] candidate.

Candidate availability: [list dates/times, timezone]
Required interviewers and their roles:
1. [Name] - [Interview type: technical/behavioral/culture] - Available: [paste calendar availability]
2. [Name] - [Interview type] - Available: [availability]
3. [Name] - [Interview type] - Available: [availability]
[...continue]

Constraints:
- Total interview time needed: [X hours]
- Buffer between sessions: [X minutes]
- Lunch break required: [yes/no, time range]
- Room/virtual meeting requirements: [describe]
- Candidate timezone: [timezone]

Find the optimal schedule and generate:
1. Proposed schedule with times in candidate's timezone
2. Calendar invite descriptions for each session
3. Candidate-facing agenda email (professional, warm, includes prep info)
4. Backup options if primary slots don't work
```

**Prompt 2: Candidate Scheduling Email Templates**
```
Create professional scheduling email templates for our interview process.

Company name: [name]
Brand voice: [professional/warm/startup-casual]
Role type: [engineering/sales/executive/etc.]

Generate templates for:
1. **Initial scheduling outreach**: "We'd like to schedule your interview..."
2. **Confirmation with details**: Calendar confirmed, prep materials, what to expect
3. **Reschedule request (company-initiated)**: Apologetic, professional, offering alternatives
4. **Reschedule request (candidate-initiated)**: Accommodating, easy to respond to
5. **Day-before reminder**: Logistics, contact info, encouragement
6. **Post-interview thank you**: Timeline for next steps

Each template should be warm but professional, include all necessary logistics, and represent our employer brand well.
```

**Prompt 3: Interviewer Load Analysis and Optimization**
```
Analyze our interviewer utilization and recommend optimizations.

Current interview data:
[paste data or describe: interviewer names, number of interviews per week, cancellation rate, types of interviews they conduct]

Team hiring plan:
- Open roles: [X]
- Expected interviews per role: [X rounds]
- Timeline: [X weeks]
- Available interviewers by type: [list]

Analyze:
1. **Current load distribution**: Who's doing the most interviews? Is it balanced?
2. **Bottleneck interviewers**: Who has lowest availability / highest cancellation rate?
3. **Capacity forecast**: Can our current interviewer pool handle the hiring plan?
4. **Training recommendations**: Who should we certify as new interviewers to increase capacity?
5. **Scheduling rules**: Recommend max interviews per person per week, buffer times, and blackout periods
6. **Quality maintenance**: How to prevent interview fatigue from degrading evaluation quality

Provide actionable recommendations for the next quarter.
```

---

---

# Use Case #028: AI Onboarding Assistant

**Role**: HR Manager / People Ops / Hiring Manager | **Industry**: Any Industry | **Task**: Employee Onboarding, Day-1 Readiness, 30/60/90 Day Planning, New Hire Experience

---
## Detailed Introduction

**The Pain: Broken Onboarding Costs You Employees Before They Start Contributing**

Research from SHRM shows that organizations with a strong onboarding process improve new hire retention by 82% and productivity by over 70%. Yet only 12% of employees say their company does onboarding well. The gap is enormous and expensive: replacing an employee costs 50-200% of their annual salary, and poor onboarding is a leading cause of early turnover.

The root cause is coordination complexity. Onboarding touches every department: IT (equipment, access), HR (paperwork, benefits), Facilities (desk, badge), Finance (payroll, expenses), Legal (contracts, NDAs), Security (background checks, access levels), the hiring manager (role expectations, projects), and often a buddy or mentor. Orchestrating all of these simultaneously, for multiple new hires, without dropping any balls, is a full-time coordination job that most HR teams do in addition to everything else.

The new hire experience compounds the problem. New employees are anxious, eager to contribute, and deeply sensitive to first impressions. When they spend their first week waiting for equipment, searching for information, and feeling ignored, that initial enthusiasm converts into frustration and second-guessing. The "buyer's remorse" window -- the first 90 days -- is when employees decide whether they made the right choice. A chaotic onboarding experience tells them they didn't.

**How COCO Solves It**

COCO's AI Onboarding Assistant orchestrates the entire onboarding experience from offer acceptance to the 90-day milestone.

1. **Automated Workflow Orchestration**: The moment an offer is accepted, COCO triggers a role-specific onboarding workflow:
   - Assigns tasks to all stakeholders with clear deadlines (IT: provision laptop by day -3, HR: benefits enrollment by day 1, Manager: first 1:1 by day 2)
   - Sends automated reminders for overdue items
   - Escalates missed deadlines to the right manager
   - Tracks completion percentage across all onboarding tasks
   - Handles multiple simultaneous onboardings without confusion

2. **Personalized Onboarding Plans**: Generates role-specific 30/60/90 day plans:
   - **Days 1-30 (Learn)**: Company orientation, tool setup, team introductions, shadow sessions, initial training modules
   - **Days 31-60 (Contribute)**: First project ownership, deeper process understanding, cross-team collaboration starts
   - **Days 61-90 (Own)**: Full responsibility for key deliverables, performance expectations clear, first review
   - Plans are tailored by role (engineer vs. sales vs. marketing), seniority (junior vs. senior), and team norms

3. **New Hire Knowledge Base**: Acts as a 24/7 concierge answering common questions:
   - Company policies (PTO, expense, travel, work-from-home)
   - Tools and systems (how to access, how to use, who to contact for help)
   - Team and organizational structure (who does what, reporting lines)
   - Cultural norms (meeting etiquette, communication preferences, decision-making processes)
   - Benefits and perks (enrollment, deadlines, contacts)

4. **Manager Coaching**: Most managers haven't been trained on onboarding. COCO helps:
   - Prompts managers with check-in reminders at key milestones
   - Suggests conversation topics for 1:1s ("Week 1: Ask about their first impressions and any blockers")
   - Provides onboarding best practices tips ("Set one small win in the first week to build confidence")
   - Flags at-risk situations (new hire hasn't completed training, manager hasn't met with them)

5. **Progress Dashboard**: Real-time visibility for HR and managers:
   - Onboarding completion percentage per new hire
   - Task status across all stakeholders (who's behind?)
   - New hire engagement signals (are they asking questions? completing tasks?)
   - Comparison to benchmarks (is this onboarding on track vs. company average?)

6. **Feedback Collection and Action**: Automated surveys at key milestones:
   - Day 7: "How was your first week? Any blockers?"
   - Day 30: "Do you feel productive? What would help?"
   - Day 60: "Are you clear on expectations? How's the team dynamic?"
   - Day 90: "Would you recommend our company? What would you change about onboarding?"
   - Results aggregated for continuous improvement of the onboarding program

**Measurable Results**

- **New hire satisfaction (30-day)**: From 62% to 91%
- **Time-to-productivity**: Reduced by 23%
- **HR coordination per hire**: From 12 hours to 2 hours
- **Onboarding task completion**: From 78% to 98%
- **First-6-month voluntary turnover**: Down 34%
- **Manager onboarding effort**: Reduced by 40% through structured plans and automation
- **IT provisioning delays**: From 5 days average to 0 days (equipment ready on day 1)

**Who Benefits**

- **New Hires**: Smooth, organized first impression; 24/7 answers to questions; clear expectations from day 1
- **HR/People Ops**: 83% less coordination time; systematic tracking replaces spreadsheet chaos
- **Hiring Managers**: Structured playbook instead of ad-hoc onboarding; prompted for critical check-ins
- **IT/Facilities**: Clear task assignments with deadlines instead of last-minute fire drills
- **Leadership**: Lower early turnover; faster time-to-productivity; better employer brand

---

## Practical Prompts

**Prompt 1: Generate 30/60/90 Day Onboarding Plan**
```
Create a 30/60/90 day onboarding plan for a new [role title] joining the [team name] team.

New hire context:
- Experience level: [junior/mid/senior]
- Background: [brief professional background]
- Start date: [date]
- Manager: [name]
- Team size: [X people]
- Key tools they'll use: [list tools/systems]

Generate a structured plan:

**First 30 Days (Learn)**:
- Week 1: Orientation, tool setup, meet the team, understand company context
- Week 2-4: Shadow key processes, complete training, begin small tasks
- 30-day milestone: [specific measurable outcome]

**Days 31-60 (Contribute)**:
- Take ownership of [specific responsibilities]
- Complete [specific projects or deliverables]
- 60-day milestone: [specific measurable outcome]

**Days 61-90 (Own)**:
- Full ownership of [scope]
- Begin [longer-term initiative]
- 90-day milestone: [specific measurable outcome]

Include: key meetings to schedule, people to meet, documents to read, and success metrics for each phase.
```

**Prompt 2: Onboarding FAQ for New Hires**
```
Create a comprehensive FAQ document for new hires at [company name].

Company context:
- Industry: [industry]
- Size: [employees]
- Office setup: [remote/hybrid/office]
- Key tools: [list main tools - Slack, Notion, Jira, etc.]

Generate FAQs organized by category:
1. **Getting Started**: Equipment, accounts, access, first-day logistics
2. **Communication**: How to use [tools], team channels, meeting culture
3. **HR & Benefits**: PTO policy, health insurance, expense reporting, payroll
4. **Culture**: Values, norms, dress code, social events
5. **IT & Security**: VPN, password policies, data handling
6. **Career**: Performance reviews, growth opportunities, learning budget

Write 5-8 Q&As per category. Answers should be friendly, clear, and direct.
```

**Prompt 3: Build Cross-Team Onboarding Checklist**
```
Create a comprehensive onboarding checklist that coordinates across all departments.

Company: [name]
Typical new hire departments: [engineering/sales/marketing/etc.]

Build a checklist organized by responsible team and timeline:

**Pre-Day 1 (Day -7 to Day -1)**:
- IT: [equipment, accounts, access]
- HR: [paperwork, benefits enrollment]
- Facilities: [desk, badge, parking]
- Manager: [first-week schedule, buddy assignment]
- Finance: [payroll setup, expense card]

**Day 1**:
- HR: [orientation, company overview]
- IT: [setup assistance]
- Manager: [welcome, team introductions, first 1:1]
- Buddy: [lunch, building tour]

**Week 1**:
- [list key activities and responsible parties]

**Days 8-30**:
- [ongoing training, check-ins, milestones]

**Days 31-90**:
- [performance check-ins, feedback surveys, goal setting]

For each task: responsible person, deadline, dependencies, and verification that it's done.
```

---

---

# Use Case #031: AI Invoice Processor

**Role**: Accounts Payable Clerk / AP Manager / Finance Operations | **Industry**: Any Enterprise, Manufacturing, Retail, Healthcare | **Task**: Invoice Processing, PO Matching, Payment Scheduling, AP Automation

---
## Detailed Introduction

**The Pain: AP Is the Most Labor-Intensive Function in Finance**

Accounts payable processing is among the most repetitive, error-prone, and underappreciated functions in any organization. The Institute of Financial Operations estimates that manual invoice processing costs $12-15 per invoice when you factor in labor, errors, late fees, and lost early payment discounts.

For a mid-size company processing 3,000+ invoices monthly, that's $36,000-45,000 per month in processing costs alone. The errors -- duplicate payments, incorrect amounts, wrong GL coding -- add another layer of cost through rework, vendor disputes, and audit findings.

The format problem makes automation seem impossible. Invoices arrive via email (PDF attachments), postal mail (scanned paper), supplier portals (various export formats), and increasingly, photos taken on phones. Each vendor has a different layout, terminology, and numbering system. Traditional template-based OCR breaks the moment it encounters an unfamiliar format.

And the matching problem is worse. A vendor named "Widget Corporation Inc." on the PO might appear as "Widget Corp" or "Widget Corp." or "WidgetCo" on the invoice. Line items may be bundled differently: the PO says "100 units of Product A at $10 each" while the invoice says "Product A -- 50 shipped Jan 5, 50 shipped Jan 12, total $1,000." Same transaction, different representation. Humans handle this intuitively. Rules-based systems fail.

**How COCO Solves It**

COCO's AI Invoice Processor automates the entire AP workflow from receipt to payment.

1. **Intelligent Document Processing**: Reads invoices in any format using advanced OCR and NLP:
   - Extracts vendor name, invoice number, date, line items, quantities, unit prices, tax, and total
   - Handles any layout -- no templates needed for new vendors
   - Reads handwritten notes, stamps, and annotations on paper invoices
   - Processes invoices embedded in email bodies (not just attachments)
   - Handles multi-page invoices and consolidated billing statements

2. **Automated PO Matching**: Fuzzy-matches invoices to purchase orders with intelligence:
   - Handles vendor name variations ("Widget Corp" = "Widget Corporation Inc.")
   - Matches partial deliveries and split shipments to a single PO
   - Reconciles line-item splits (PO says 100 units; invoice says 50+50)
   - Handles pricing variations from contract terms (volume discounts, tiered pricing)
   - Identifies invoices without POs for non-PO workflows (recurring services, utilities)

3. **Three-Way Match**: Compares PO, invoice, and goods receipt at the line-item level:
   - Quantity verification: ordered vs. invoiced vs. received
   - Price verification: agreed price vs. invoiced price
   - Tax calculation: verifies tax amounts against applicable rates
   - Flags specific discrepancies with details: "Line 3: PO price $10.00, Invoice price $10.50, difference $50.00 on 100 units"
   - Tolerance thresholds: auto-approves minor variances within configured limits

4. **GL Account Coding**: Auto-assigns general ledger codes:
   - Based on vendor, expense category, department, and project
   - Learns from historical coding patterns (this vendor always coded to 6100-Marketing)
   - Handles cost center allocation for shared expenses
   - Flags unusual coding for review (same vendor, different GL code than usual)

5. **Approval Routing**: Routes invoices based on configurable rules:
   - Amount thresholds ($0-$5K: auto-approve; $5K-$25K: department head; $25K+: VP)
   - Department and cost center routing
   - Special approval requirements (capital expenses, new vendors, contract changes)
   - Escalation for overdue approvals (reminder at 48h, escalation at 72h)
   - Mobile approval for managers on the go

6. **Payment Optimization**: Schedules payments to maximize value:
   - Captures early payment discounts (2/10 net 30: pay on day 10, save 2%)
   - Maintains cash flow targets (don't pay everything early if cash is tight)
   - Batches payments to reduce transaction costs
   - Prioritizes vendor payments based on relationship importance and terms
   - Forecasts upcoming payment obligations for cash flow planning

**Measurable Results**

- **Processing time per invoice**: From 14 minutes to 45 seconds (95% reduction)
- **Error rate**: From 8.3% to 0.6%
- **Late payment penalties**: From $23K to under $2K annually
- **Early payment discounts captured**: +$47K/year (previously missed)
- **AP staff time freed**: 75% of processing time reallocated to strategic work
- **Duplicate payment prevention**: 100% detection rate
- **Month-end close**: AP close 2 days faster due to automated reconciliation
- **Vendor satisfaction**: Payment accuracy and timeliness improved vendor relationships

**Who Benefits**

- **AP Clerks**: Freed from data entry to focus on vendor relationships and exception resolution
- **AP Managers**: Full visibility into invoice pipeline; bottlenecks identified automatically
- **Controllers**: Accurate GL coding; cleaner audit trail; faster month-end close
- **CFO**: Optimized cash flow; early payment discounts captured; reduced fraud risk
- **Vendors**: Faster, more accurate payments improve the business relationship
- **Procurement**: Better PO compliance tracking; vendor performance data

---

## Practical Prompts

**Prompt 1: Invoice Data Extraction**
```
Extract structured data from this invoice for entry into our AP system.

Invoice:
[paste invoice text or describe the invoice content]

Extract:
1. Vendor name and address
2. Invoice number and date
3. PO number (if referenced)
4. Line items: description, quantity, unit price, line total
5. Subtotal, tax amount, total due
6. Payment terms
7. Bank/payment details

Format as a structured table ready for system entry. Flag any fields that are ambiguous or missing.
```

**Prompt 2: Invoice Exception Resolution**
```
Help resolve these invoice exceptions from our 3-way match process.

Exception 1:
- PO: [X units at $Y each]
- Invoice: [Z units at $W each]
- Goods receipt: [A units received]
- Discrepancy: [describe]

Exception 2:
[...continue]

For each exception:
1. What's the discrepancy?
2. Most likely cause (pricing error, partial shipment, tax calculation, quantity mismatch)
3. Recommended resolution (pay as invoiced, adjust to PO, request credit memo, partial payment)
4. Communication template for vendor if needed
5. GL adjustment entry if applicable
```

**Prompt 3: AP Process Optimization Analysis**
```
Analyze our accounts payable process for optimization opportunities.

Current process:
- Monthly invoice volume: [X]
- Average processing time per invoice: [X minutes]
- AP team size: [X people]
- Current error rate: [X%]
- Late payment rate: [X%]
- Early payment discounts captured: [X% of available]
- Top 3 bottlenecks: [describe]

Vendor mix:
- Number of active vendors: [X]
- Top 10 vendors by volume: [list]
- Percentage with electronic invoicing: [X%]

Analyze and recommend:
1. **Quick wins**: What can we improve this month with zero investment?
2. **Automation candidates**: Which invoice types/vendors are easiest to automate?
3. **Payment optimization**: How much are we leaving on the table in early payment discounts?
4. **Error reduction**: What's causing our errors and how to fix root causes?
5. **Vendor consolidation**: Should we reduce vendor count to simplify AP?
6. **Technology gaps**: What tools/integrations would deliver the highest ROI?
7. **Staffing model**: Is our AP team right-sized for the volume?

Provide a prioritized 90-day improvement roadmap.
```

---

---

# Use Case #032: AI Meeting Notes

**Role**: Project Manager / Team Lead / Executive Assistant / Operations | **Industry**: Any Industry | **Task**: Meeting Transcription, Action Item Extraction, Decision Documentation, Follow-Up Tracking

---
## Detailed Introduction

**The Pain: Meetings Produce Decisions and Action Items That Immediately Vanish**

Professionals spend 31 hours per month in unproductive meetings (Atlassian research). But the bigger problem isn't the time in meetings -- it's the value lost after meetings. Decisions made in meetings aren't documented reliably. Action items aren't tracked. Commitments aren't followed up on. Three days later, people remember the meeting differently, and the whole conversation happens again.

Manual meeting notes are inherently flawed. The note-taker can't fully participate while writing. They capture what they think is important, not what the group decides is important. And notes taken during the meeting are often unstructured and incomplete.

The organizational cost is staggering. When decisions aren't documented, they get relitigated. When action items aren't tracked, they don't happen. When meeting outcomes aren't shared, only attendees have the context, creating information silos. A Harvard Business Review study found that 73% of professionals do other work during meetings -- partly because they've learned that meeting outcomes rarely translate into action anyway.

**How COCO Solves It**

COCO's AI Meeting Notes captures everything, structures it, and ensures follow-through.

1. **Real-Time Transcription**: Joins meetings via calendar integration and produces accurate transcripts:
   - Supports Zoom, Google Meet, Microsoft Teams, and Webex
   - Speaker identification (who said what)
   - Multiple language support and real-time translation
   - Handles overlapping speakers and background noise
   - Records audio/video with consent management

2. **Structured Note Generation**: Within minutes of meeting end, produces:
   - **Executive summary** (2-3 sentences: what was the meeting about and what was the outcome)
   - **Decisions made** (with context, rationale, and who made the call)
   - **Action items** (with owner, deadline, priority, and dependencies)
   - **Key discussion points** (organized by topic, not chronologically)
   - **Open questions and parking lot items** (unresolved topics for future meetings)
   - **Sentiment and engagement indicators** (who participated most, topics that generated debate)

3. **Automated Distribution**: Posts notes to the right channels:
   - Slack channel based on meeting type and attendees
   - Notion/Confluence page in the appropriate project space
   - Email to attendees and relevant stakeholders who weren't in the meeting
   - Calendar event update with notes attached
   - Custom webhooks for project management tools (Jira, Asana, Linear)

4. **Action Item Tracking**: Goes beyond note-taking into accountability:
   - Creates tasks in your project management tool automatically
   - Assigns to the named owner with deadline
   - Sends reminder 24 hours before deadline
   - Follows up on overdue items (gentle nudge, then escalation)
   - Reports on completion rates by team and individual
   - Carries forward uncompleted items to next meeting agenda

5. **Meeting Analytics**: Provides insights on meeting patterns:
   - Meeting frequency, duration, and attendee overlap
   - Decision-to-action completion rates (are meetings producing results?)
   - Time spent in meetings vs. time spent on action items
   - Recurring meetings that rarely produce decisions (candidates for elimination)
   - Meeting cost calculator (attendee salaries x duration)

6. **Searchable Archive**: All meeting notes are indexed and searchable:
   - "What did we decide about pricing in Q1?" returns the exact meeting, decision, and context
   - "Who committed to the API redesign?" returns the owner, deadline, and current status
   - Cross-meeting pattern detection: "How many times have we discussed this topic without deciding?"
   - Compliance-friendly retention and access controls

**Measurable Results**

- **Action item completion**: From 21% to 84%
- **Time to distribute notes**: From 2 days to 5 minutes
- **"What did we decide?" questions**: Down 90%
- **Note-taking labor**: Eliminated (freeing participants to engage)
- **Meeting follow-through accountability**: Visible to all stakeholders
- **Institutional knowledge capture**: 100% of meetings documented vs. ~30% previously
- **Redundant meetings**: 15% reduction (fewer "re-alignment" meetings needed)

**Who Benefits**

- **Project Managers**: Automatic action item tracking; no more manual follow-up
- **Team Leads**: Clear decisions documented; accountability visible to the team
- **Executive Assistants**: Meeting notes generated automatically; focus shifts to strategic support
- **Executives**: Weekly digest of all decisions and commitments across the organization
- **Remote/Async Workers**: Full context available even when they can't attend meetings
- **New Employees**: Searchable meeting archive helps them understand past decisions and context

---

## Practical Prompts

**Prompt 1: Structure Meeting Notes**
```
Convert these raw meeting notes/transcript into structured, actionable meeting documentation.

Meeting: [meeting name/purpose]
Date: [date]
Attendees: [list names and roles]
Duration: [X minutes]

Raw notes/transcript:
[paste unstructured notes or transcript]

Generate structured notes:
1. **Executive Summary** (2-3 sentences: what was the meeting about and what was the outcome)
2. **Decisions Made** (numbered list, each with context)
3. **Action Items** (table format: Item | Owner | Deadline | Priority)
4. **Key Discussion Points** (bullet summary of important topics discussed)
5. **Open Questions** (unresolved items for next meeting)
6. **Next Meeting** (date if scheduled, agenda items)

Format cleanly for posting in [Slack/Notion/email].
```

**Prompt 2: Generate Weekly Decisions Digest**
```
Compile a weekly decisions and commitments digest from these meeting notes.

Meeting notes from this week:
[paste or summarize notes from multiple meetings]

Generate a digest for leadership that includes:
1. **Key Decisions This Week** (decision, meeting where it was made, impact)
2. **Major Action Items** (item, owner, deadline, status)
3. **Risks and Blockers Raised** (issue, responsible team, mitigation)
4. **Upcoming Deadlines** (commitments coming due in the next 2 weeks)
5. **Items Needing Leadership Input** (decisions deferred, escalations)

Keep it scannable -- a busy executive should get the full picture in 2 minutes.
```

**Prompt 3: Meeting Effectiveness Analysis**
```
Analyze our meeting patterns and recommend improvements.

Meeting data (past month):
[describe or paste: meeting types, frequency, duration, attendee count, outcomes]

For example:
- Weekly team standup: 30 min, 12 attendees, Mon/Wed/Fri
- Sprint planning: 2 hours, 8 attendees, every 2 weeks
- 1:1s: 30 min each, [X] per week
- Cross-team syncs: 1 hour, 6 attendees, weekly
- All-hands: 1 hour, 40 attendees, monthly

Analyze:
1. **Time investment**: Total hours/week in meetings per person. Is it sustainable?
2. **Decision output**: Which meetings consistently produce decisions vs. which just "discuss"?
3. **Attendee efficiency**: Which meetings have too many attendees (who could be async instead)?
4. **Redundancy**: Are any meetings covering the same ground?
5. **Missing meetings**: Are there gaps (e.g., no cross-team alignment, no retrospectives)?
6. **Format optimization**: Which meetings should be shorter, less frequent, or async?
7. **Cost analysis**: Estimated salary cost of current meeting load

Provide a specific "meeting diet" recommendation: what to keep, cut, shorten, merge, or convert to async.
```

---

