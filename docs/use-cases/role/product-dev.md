# Product & Dev

AI-powered use cases for developers, DevOps, tech leads, and PMs.

## 1. AI Code Reviewer

> Auto-reviews every PR: bugs, security, performance — full report in 15 minutes.

::: details 🎬 Watch Demo Video

<video controls width="100%" style="max-width: 720px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/005-ai-code-reviewer.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

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

:::

::: details Results & Who Benefits

**Measurable Results**

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

:::

::: details Practical Prompts

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

:::

## 2. AI Test Generator

> Reads source code and generates comprehensive tests with edge cases. Coverage: 34% → 89%.

::: details 🎬 Watch Demo Video

<video controls width="100%" style="max-width: 720px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/006-ai-test-generator.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

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

:::

::: details Results & Who Benefits

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

:::

::: details Practical Prompts

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

:::

## 3. AI Deploy Monitor

> Monitors every deploy in real-time, detects anomalies in 90s, auto-rollbacks. MTTR: 47min → 2min.

::: details 🎬 Watch Demo Video

<video controls width="100%" style="max-width: 720px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/007-ai-deploy-monitor.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

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

:::

::: details Results & Who Benefits

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

:::

::: details Practical Prompts

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

:::

## 4. AI API Doc Writer

> Auto-generates and syncs API docs from codebase, multi-language examples, zero drift.

::: details 🎬 Watch Demo Video

<video controls width="100%" style="max-width: 720px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/008-ai-api-doc-writer.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

**The Pain: Documentation Drift Is Silently Killing Your Developer Experience**

API documentation is the front door to your product for every developer who integrates with you. When it's wrong, the consequences are expensive: developers waste hours debugging against incorrect docs, file support tickets, and sometimes abandon your API entirely for a competitor with better documentation.

The root cause is structural. Documentation is a second-class citizen in most engineering workflows. It's written once during initial development, then gradually drifts as the code evolves. Parameter types change, new required fields get added, error codes are introduced -- and the docs lag behind. There's no CI/CD for documentation. No automated tests that catch when docs and code diverge.

Technical writers, when companies even have them, are perpetually playing catch-up. They weren't in the room when the engineer changed the response format. They find out when a customer complains. The cycle repeats every sprint.

**How COCO Solves It**

COCO's AI API Doc Writer treats documentation as a living artifact that stays synchronized with your codebase automatically.

1. **Code-First Documentation**: COCO analyzes your actual implementation -- route handlers, middleware, validation schemas, type definitions, database models -- and generates documentation from the source of truth. No more manually copying parameter names from code to docs.

2. **OpenAPI/Swagger Generation**: COCO automatically generates or updates your OpenAPI 3.0 specification from the codebase. This includes:
   - All endpoints with HTTP methods and paths
   - Request body schemas with types, required fields, and validation rules
   - Response schemas for all status codes (200, 400, 401, 404, 500)
   - Authentication requirements per endpoint
   - Rate limiting information
   - Deprecation notices

3. **Rich Endpoint Documentation**: For each endpoint, COCO produces:
   - Human-readable description of what the endpoint does and when to use it
   - Parameter documentation with types, constraints, and default values
   - Multiple request/response examples covering common scenarios
   - Error response catalog with causes and resolution steps
   - Related endpoints and workflow context

4. **Multi-Language Code Samples**: COCO generates working code examples in your users' languages:
   - cURL (universal)
   - Python (requests + your SDK if available)
   - JavaScript/TypeScript (fetch + Node.js)
   - Go, Ruby, Java, PHP as needed
   - Each example includes proper authentication, error handling, and common patterns

5. **Drift Detection**: COCO continuously compares existing documentation against the current codebase and flags:
   - New endpoints that aren't documented
   - Parameters that were added, removed, or changed type
   - Response formats that no longer match documented schemas
   - Deprecated endpoints still shown as active
   - Authentication changes not reflected in docs

6. **Developer Guide Generation**: Beyond reference docs, COCO generates conceptual guides:
   - Getting started / quickstart tutorials
   - Authentication and authorization guides
   - Pagination and filtering patterns
   - Webhook integration guides
   - Migration guides when breaking changes occur

:::

::: details Results & Who Benefits

**Measurable Results**

- **100% documentation coverage** across all endpoints (vs. typical 60-70%)
- **Zero documentation drift** -- docs always match current API behavior
- **34% reduction** in developer support tickets
- **75% faster** time-to-first-API-call for new integrators
- **90% reduction** in docs maintenance effort for technical writers
- **Developer NPS improvement**: +18 points average after deploying accurate docs

**Who Benefits**

- **External Developers/Partners**: Accurate, always-current docs reduce integration time and frustration
- **Technical Writers**: Freed from keeping reference docs current to focus on tutorials, guides, and developer education
- **Developer Relations**: Better docs = more adoption, fewer support escalations
- **Engineering Teams**: No more "update the docs" as an afterthought PR comment

:::

::: details Practical Prompts

**Prompt 1: Generate API Endpoint Documentation**
```
Generate complete API documentation for the following endpoint implementation. Include:
1. Endpoint description (what it does, when to use it)
2. HTTP method and path
3. Authentication requirements
4. Request parameters (path, query, header, body) with types, required/optional, constraints
5. Response schema for all status codes (success + all error cases)
6. Two request/response examples (one success, one error)
7. Rate limiting details (if applicable)
8. Related endpoints

Code implementation:
[paste route handler, validation schema, and relevant model code]

Output format: Markdown suitable for a developer documentation site.
```

**Prompt 2: Generate OpenAPI 3.0 Specification**
```
Generate an OpenAPI 3.0 YAML specification for the following API endpoints. Analyze the code to extract:
- Paths and HTTP methods
- Request body schemas (derive from validation rules and type definitions)
- Response schemas (derive from serialization code and type definitions)
- Authentication schemes (Bearer, API Key, OAuth2)
- Error response schemas
- Common components (reusable schemas, parameters, responses)

Include proper descriptions, examples, and tags for organization.

Source code:
[paste router file(s) and relevant models/types]

Existing endpoints to include:
[list endpoint paths if not all should be included]
```

**Prompt 3: Generate Multi-Language Code Examples**
```
Generate working code examples for the following API endpoint in these languages: cURL, Python, JavaScript (Node.js), and Go.

Endpoint: [METHOD] [path]
Authentication: Bearer token in Authorization header
Request body: [paste schema or example]
Base URL: https://api.example.com/v1

Each example should:
- Include proper authentication headers
- Handle the response (parse JSON, check status code)
- Include basic error handling
- Show both the request and expected response
- Use the language's standard HTTP library (no unnecessary dependencies)
- Include comments explaining each step
```

**Prompt 4: Documentation Drift Audit**
```
Compare the following API documentation against the actual implementation and identify discrepancies.

Current documentation:
[paste existing API docs or OpenAPI spec]

Current implementation:
[paste the actual route handlers, validation schemas, and models]

Report:
1. Endpoints in code but missing from docs
2. Endpoints in docs but removed from code
3. Parameter mismatches (name, type, required status)
4. Response schema differences
5. Missing error codes/responses
6. Outdated examples
7. Authentication requirement changes

Priority each discrepancy as Critical (will cause integration failures), High (will cause confusion), or Low (cosmetic/minor).
```

**Prompt 5: Developer Quickstart Guide**
```
Write a developer quickstart guide for our API that takes a new user from zero to their first successful API call in under 10 minutes.

API overview: [brief description of what the API does]
Authentication method: [how to get API keys/tokens]
Base URL: [URL]
Most common first endpoint: [the endpoint new users typically call first]

The guide should include:
1. Prerequisites (account setup, getting API key)
2. Making your first request (with cURL example)
3. Understanding the response
4. Common next steps (2-3 follow-up endpoints)
5. Error troubleshooting (top 3 errors new users hit)
6. Links to full documentation

Write in a friendly, clear tone. Assume the reader is a developer but has never used this specific API before.
```

:::

## 5. AI Debug Assistant

> Paste error logs, AI traces from symptom to root cause, provides ready-to-apply fix diffs.

::: details 🎬 Watch Demo Video

<video controls width="100%" style="max-width: 720px; border-radius: 8px; margin: 0.5rem 0 1rem;">
  <source src="/videos/en/009-ai-debug-assistant.mp4" type="video/mp4">
</video>

:::

::: details Pain Point & How COCO Solves It

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

:::

::: details Results & Who Benefits

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

:::

::: details Practical Prompts

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

:::

