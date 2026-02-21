# Use Case #226: AI System Design Reviewer

**Role**: Developer / Senior Engineer / Tech Lead / Solution Architect | **Industry**: Technology, SaaS, Fintech, Enterprise Software | **Task**: Architecture Review, Design Validation, Scalability Assessment

---
## Detailed Introduction

**The Pain: Architecture Decisions Made in a Vacuum, Discovered Too Late**

System design is one of the highest-leverage activities in software engineering — a good architectural decision pays dividends for years, while a poor one becomes progressively more expensive to work around. The problem is that most architectural decisions are made by small groups with limited time, drawing on the experience of whoever happens to be in the room. Design reviews, when they happen at all, are often perfunctory: a 30-minute meeting where everyone nods along, concerns go unvoiced to avoid conflict, and the review produces no written record of trade-offs considered. Six months later, the system is in production and a failure mode that was visible in the design — obvious to anyone who had time to think about it — is causing your first major incident.

The specific patterns of architectural failure are well-documented. Synchronous chains that create cascading failure points. Missing circuit breakers on external dependencies. Database schemas that can't be migrated without downtime once data volumes reach production scale. Single-region architectures that become liability once the product attracts enterprise customers who require redundancy SLAs. Shared database patterns that make service extraction impossible. Caching strategies that work at 100 users and produce thundering herd problems at 10,000. Each of these patterns is known — they appear in every systems design book. But catching them before they're built requires structured review against a comprehensive checklist, combined with experience of the failure modes. That's exactly what most teams lack.

The economics favor architectural investment heavily: Boehm's Cost of Change curve shows that fixing an architectural issue in design costs 1× while fixing it post-deployment costs 10–100×. A 2-hour architectural review that catches a fundamental scalability flaw saves months of emergency refactoring and potentially millions in lost revenue during capacity incidents.

**How COCO Solves It**

COCO's AI System Design Reviewer evaluates architecture diagrams, design documents, and technical specifications against best practices, scalability patterns, and known failure modes — providing structured, comprehensive feedback before a line of infrastructure code is written.

1. **Architecture Pattern Analysis**: COCO applies systematic review across multiple architectural dimensions.
   - Evaluates communication patterns: synchronous vs. asynchronous, request-response vs. event-driven, and where each choice introduces coupling or failure amplification
   - Reviews data storage decisions: database type selection (relational vs. document vs. time-series vs. graph), sharding strategy, replication approach, and schema evolution plan
   - Assesses service boundary design: are services split by correct domain boundaries? Is there inappropriate data sharing? Are there circular dependencies?
   - Evaluates API design choices: REST vs. GraphQL vs. gRPC, versioning strategy, backward compatibility approach
   - Checks consistency model alignment: does the chosen consistency level (eventual vs. strong) match the business requirements for each data type?

2. **Scalability Pattern Review**: Can this system handle 10× current load? 100×?
   - Identifies horizontal scaling blockers: stateful application servers, shared in-memory caches, database connections without pooling
   - Reviews load balancing strategy: session affinity requirements, health check configuration, connection draining
   - Evaluates database scaling plan: read replicas, caching layer, connection pooling, and the plan for when a single primary isn't enough
   - Assesses queue/async processing design: dead letter queues, idempotency guarantees, message ordering requirements vs. approach
   - Identifies "scaling cliffs" — points where the current architecture breaks and requires structural rework (e.g., moving from single-DB to sharded, from single-region to multi-region)

3. **Failure Mode & Resilience Analysis (FMEA)**: Every external dependency is a failure risk.
   - Identifies single points of failure: services with no redundancy, dependencies with no fallback, synchronous chains that become availability multipliers
   - Reviews circuit breaker implementation: is there protection against cascading failures from downstream service degradation?
   - Evaluates timeout and retry strategies: are timeouts set appropriately? Do retries use exponential backoff with jitter?
   - Assesses graceful degradation: what does the system do when Service X is unavailable? Is there a defined degraded-mode behavior?
   - Identifies thundering herd and cache stampede risks in high-traffic scenarios

4. **Security & Compliance Architecture Review**: Security belongs in the design, not the post-deployment audit.
   - Reviews trust boundary definitions: where is authentication and authorization enforced? Are there gaps?
   - Evaluates data encryption approach: encryption in transit (TLS configuration), encryption at rest, and key management
   - Assesses data flow for PII/sensitive data: is sensitive data minimized, properly isolated, and audited?
   - Checks for compliance architecture requirements: GDPR data residency, SOC2 logging, PCI DSS network segmentation
   - Reviews secret management approach: hardcoded secrets vs. vault integration, rotation strategy

5. **Operational Readiness Assessment**: Building it is only half the job.
   - Evaluates observability design: are metrics, logs, and traces built in or bolted on? Are the right business metrics measurable from this design?
   - Reviews deployment strategy: can this be deployed without downtime? What's the rollback plan?
   - Assesses configuration management: environment-specific configuration, feature flags, runtime reconfiguration capability
   - Identifies operational runbook requirements that the design creates

6. **Design Document & ADR Generation**: Review findings become permanent architectural records.
   - Produces a structured review report with findings categorized by severity (Critical / High / Medium / Low)
   - Generates Architecture Decision Records (ADRs) documenting key decisions, alternatives considered, and rationale
   - Creates a "design assumptions" document capturing explicit assumptions that should be validated
   - Suggests specific design alternatives for critical findings with trade-off analysis

**Measurable Results**

- **Pre-Production Issue Detection**: Teams using structured AI design review catch 60–70% of architectural issues before implementation begins
- **Incident Reduction**: Architecture-layer incidents (scalability failures, cascading outages, data integrity issues) reduced by 45% in teams with consistent design review
- **Review Completeness**: COCO-assisted reviews cover 95%+ of standard review dimensions vs. 40–60% in unstructured peer reviews
- **Review Throughput**: Comprehensive design review time reduced from 2–3 days of senior engineer time → 4–6 hours with COCO assistance
- **ADR Compliance**: Design documentation completeness improves from 20% of decisions documented → 85%+ with COCO-generated ADRs
- **Cost of Change**: Catching architectural issues during design review vs. post-deployment produces 10–50× cost savings per issue

**Who Benefits**

- **Solution Architects**: Get comprehensive, checklist-driven review coverage that complements human experience with systematic breadth
- **Senior Engineers / Tech Leads**: Conduct thorough design reviews on team members' proposals without spending 2 days on each review
- **Engineering Managers**: Establish consistent, documented architectural review processes that scale with team growth
- **CTOs**: Build architectural governance that catches systemic risks without creating bureaucratic bottlenecks

---

## Practical Prompts

**Prompt 1: Full System Design Review**
```
Please review the following system design for correctness, scalability, and failure modes.

Design context:
- System purpose: [describe what this system does]
- Scale requirements: [current load, expected growth, SLAs]
- Team context: [team size, operational capabilities, cloud provider]
- Constraints: [budget, existing technology stack, compliance requirements]
- Key non-functional requirements: [latency targets, availability SLA, data durability]

[Paste architecture diagram description or design document below]

Services involved:
- [Service A: describe what it does, tech stack, how it communicates]
- [Service B: ...]
- [Data stores: describe each, what data it holds]
- [External dependencies: third-party APIs, services]

Please review across these dimensions:
1. Service boundary correctness and coupling analysis
2. Data model and consistency model appropriateness
3. Scalability bottlenecks and horizontal scaling viability
4. Single points of failure and cascade failure risks
5. Security trust boundary and data flow analysis
6. Operational readiness (observability, deployment, rollback)
7. Produce a severity-categorized findings list with specific recommendations
```

**Prompt 2: Scalability Review for Expected Growth**
```
We're expecting significant traffic growth (10× over the next 12 months) and need to validate our current architecture can handle it — or understand what needs to change.

Current system:
- Tech stack: [describe]
- Current load: [requests/sec, users, data volume]
- Target load: [10× of current, or specific numbers]
- Database: [type, size, connection approach, read/write ratio]
- Caching: [Redis/Memcached, what's cached, TTLs, cache hit rate]
- Deployment: [single-region/multi-region, container orchestration, instance types]

Known bottlenecks (if any): [describe]

[Paste architecture description or key design details]

Please analyze:
1. Where does this architecture break under 10× load? (identify specific bottlenecks)
2. What's the "scaling cliff" — the load at which the current approach requires structural rework?
3. What are the priority-ordered steps to prepare for 10× growth?
4. Which of these steps can be done with the current architecture vs. require architectural changes?
5. Estimate the infrastructure cost increase and whether any architectural changes reduce it
6. What load testing approach should we use to validate before traffic actually arrives?
```

**Prompt 3: Architecture Decision Record (ADR) Generation**
```
I've made an architectural decision and need to document it properly as an ADR.

Decision being documented:
- Decision: [state the decision clearly, e.g., "We will use Kafka as our event bus instead of SQS"]
- Context: [what problem were we solving? what constraints existed?]
- Alternatives considered: [list 2-4 alternatives with brief descriptions]
- Chosen option: [which option and why]
- Trade-offs accepted: [what downsides does this choice have?]
- Assumptions: [what must be true for this decision to be correct?]

Please:
1. Write a formal ADR in standard format (Title, Status, Context, Decision, Consequences, Alternatives Considered)
2. Strengthen the "Consequences" section — identify both positive and negative consequences I may have missed
3. Add a "Risks and Mitigations" section for the accepted trade-offs
4. Suggest validation steps: how will we know if this decision was correct in 6 months?
5. Identify related decisions that should also be documented (decisions this choice implies or constrains)
```
