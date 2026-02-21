# Use Case #227: AI Microservices Dependency Analyzer

**Role**: Developer / Senior Engineer / Platform Engineer / Solution Architect | **Industry**: Technology, SaaS, Fintech, Enterprise Software | **Task**: Service Dependency Mapping, Microservices Architecture, System Reliability

---
## Detailed Introduction

**The Pain: A Map of Your System That Nobody Has**

Every microservices system starts with clean, well-understood boundaries. Three years later, that diagram on the wiki is confidently wrong. Services that were supposed to be independent now share databases. Synchronous call chains that weren't planned — and weren't approved in any design review — have formed naturally as features were built quickly. A "simple" service now calls 14 other services, 3 of which call it back, creating circular dependency chains that nobody mapped. When you ask the team "what does a deployment of Service A affect?", you get a range of answers, none of which is complete or reliable.

The blast radius problem is the most dangerous manifestation. In a tightly coupled microservices system, a single service's degradation can ripple through the architecture in ways that are impossible to predict without a complete, accurate dependency map. A memory leak in a shared data service triggers connection pool exhaustion in Services B, C, D, and E, which triggers timeout failures in Services F, G, and H, which triggers user-facing errors in the API gateway — an incident that looks complex but has a single root cause. The mean time to identify the blast radius is typically 45–90 minutes because nobody has the system map in their head.

The operational risk compounds with team growth. When 5 engineers built the system, everyone knew how it fit together. At 50 engineers working across 15 services, that shared mental model is gone. Changes that seem local in one team's service turn out to have unexpected effects on other teams' services. Breaking changes propagate silently until a deployment triggers failures in services that weren't thought to be affected. Without systematic dependency tracking, the microservices that were supposed to enable independent team velocity actually create hidden coordination costs that undermine it.

**How COCO Solves It**

COCO's AI Microservices Dependency Analyzer automatically maps service-to-service dependencies from multiple data sources, identifies architectural problems, and produces both technical and visual dependency intelligence for teams managing complex distributed systems.

1. **Automated Dependency Discovery**: COCO builds a dependency graph from real data, not assumptions.
   - Parses service mesh configurations (Istio, Linkerd, Consul Connect) to extract actual communication topology
   - Analyzes code repositories to identify API client instantiations, SDK usage, and direct HTTP/gRPC call patterns across service codebases
   - Ingests distributed trace data (Jaeger, Zipkin, AWS X-Ray) to discover dependencies from actual runtime call patterns — including dependencies that are absent from configuration but present in production
   - Analyzes Kubernetes service discovery, Helm charts, and Terraform configurations for declared dependencies
   - Cross-references all sources to produce a high-confidence dependency graph

2. **Circular Dependency Detection**: Circular dependencies are architectural debt with compounding consequences.
   - Identifies all cycles in the dependency graph, from direct A → B → A cycles to multi-hop cycles spanning 5+ services
   - Classifies circular dependencies by type: synchronous runtime cycles (immediate blast radius risk) vs. data coupling cycles (schema or event coupling) vs. build-time dependency cycles
   - Calculates cycle severity: cycle length, traffic volume through the cycle, criticality of participating services
   - Recommends specific breaking strategies for each detected cycle: event-based decoupling, introducing a mediator service, data duplication with eventual consistency, or dependency inversion

3. **Single Point of Failure Analysis**: Some services are more critical than the team realizes.
   - Calculates in-degree centrality: services that are depended upon by many others are SPOFs by nature
   - Identifies "bridge" services: services whose removal would disconnect portions of the dependency graph
   - Maps which services have no redundancy, fallback, or circuit breaker protection for their dependencies
   - Generates a "criticality score" for each service based on its position in the dependency graph + actual traffic volume

4. **Blast Radius Calculation**: When Service X fails, what else fails?
   - Given any service, calculates the complete transitive set of affected services for synchronous dependency chains
   - Differentiates blast radius by failure type: complete failure vs. latency degradation vs. error rate increase
   - Identifies which failures would be user-facing vs. internal-only
   - Produces pre-computed blast radius reports for all services, usable during incidents for rapid impact assessment
   - Integrates with alerting systems to auto-correlate active alerts with dependency-predicted blast radius

5. **Service Coupling Metrics**: Quantifies the degree of coupling between services.
   - Calculates coupling scores: afferent coupling (who depends on you) and efferent coupling (who you depend on)
   - Identifies "instability" metric per service: ratio of efferent to total coupling — highly unstable services change frequently and affect many dependents
   - Maps data coupling: shared databases, shared message queues, shared caches — often the most dangerous hidden dependencies
   - Identifies version coupling: services pinned to specific versions of shared libraries that create implicit coordination requirements

6. **Dependency Evolution & Governance**: Track how the dependency graph changes over time.
   - Generates a dependency diff for each deployment: what new dependencies were introduced or removed?
   - Alerts on new circular dependencies introduced by a service change before it merges
   - Tracks dependency graph health metrics over time (coupling trends, SPOF count, cycle count)
   - Enables dependency governance policies: "Service X cannot directly depend on Service Y — must go through Service Z"

**Measurable Results**

- **Dependency Map Accuracy**: Organizations typically discover 40–60% more service dependencies than their manually-maintained diagrams show
- **SPOF Identification**: Average of 3–5 previously unrecognized SPOFs discovered per system
- **Incident MTTR**: Blast radius information available in seconds vs. 45–90 min manual investigation — reducing incident diagnosis time by 60–70%
- **Circular Dependency Reduction**: Teams with continuous monitoring eliminate newly-introduced cycles before they merge in 85% of cases
- **Service Extraction Effort**: Accurate dependency mapping reduces effort estimates for service extraction projects by 50% (no hidden dependency surprises)
- **Cross-Team Coordination**: Automated blast radius reporting reduces unplanned cross-team incidents from service changes by 40%

**Who Benefits**

- **Platform Engineers**: Have a real-time, accurate map of the system they're responsible for operating
- **Tech Leads / Architects**: Identify architectural decay early and make data-driven decisions about service refactoring
- **Individual Developers**: Understand impact of changes before deploying — no more "I didn't know Service B depended on mine"
- **Engineering Managers**: Gain visibility into hidden coupling that creates unplanned cross-team coordination costs

---

## Practical Prompts

**Prompt 1: Service Dependency Map Generation**
```
I need to map the dependencies between our microservices and identify architectural problems.

System context:
- Number of services: [N]
- Primary communication protocols: [REST / gRPC / Kafka / RabbitMQ / mix]
- Service mesh: [Istio / Linkerd / Consul / none]
- Tracing: [Jaeger / Zipkin / Datadog / none]
- Deployment: [Kubernetes / ECS / bare VMs]

Available data (describe or attach):
- Service registry / list of services: [list all services with brief descriptions]
- API specifications (OpenAPI/Protobuf): [available yes/no]
- Distributed traces sample: [paste sample or describe]
- Infrastructure config (Helm values, service definitions): [available yes/no]

Known problematic areas:
- [e.g., "Service A seems to call many other services — not sure how many"]
- [e.g., "We suspect there's a circular dependency involving Service B and Service C"]
- [e.g., "We don't know the blast radius of deploying Service D"]

Please:
1. Construct a dependency graph from the provided information
2. Identify all circular dependencies with specific service chains
3. Calculate the blast radius for the 3 most critical services
4. Identify services with highest dependency centrality (most likely SPOFs)
5. Flag any obvious architectural anti-patterns visible in the dependency structure
6. Recommend priority remediation actions
```

**Prompt 2: Blast Radius Analysis Before a Deployment**
```
I'm about to deploy a change to [Service Name] and need to understand the blast radius before proceeding.

Service details:
- Service name: [name]
- What it does: [brief description]
- What this deployment changes: [describe the change — new API behavior, schema change, removed endpoint, etc.]
- Deployment type: [rolling update / blue-green / canary]

Dependency information:
- Services that depend on [Service Name]: [list if known, or "unknown"]
- Services that [Service Name] depends on: [list]
- Shared resources: [shared DB? shared queue? shared cache?]

Change details:
- Is this a breaking change? [yes/no/unsure]
- API changes: [added endpoints / modified existing / removed / none]
- Data model changes: [schema change? backward compatible?]
- Performance characteristics changed: [latency, throughput, resource usage]

Please:
1. Map all services potentially affected by this deployment (direct and transitive)
2. Assess the risk level for each affected service
3. Identify which services need to be notified/coordinated with before deployment
4. Recommend a deployment sequence if multiple services need coordinated updates
5. Suggest pre-deployment validation steps to catch problems before they hit production
6. Draft a deployment communication to send to affected service teams
```

**Prompt 3: Circular Dependency Breaking Plan**
```
We have a circular dependency problem we need to resolve.

Circular dependency details:
- Services in the cycle: [Service A → Service B → Service C → Service A, or describe]
- What data/calls flow through the cycle: [describe what each service calls the next for]
- How this cycle was created: [historical context if known]
- Current pain: [what problems is this causing today?]
- Traffic volume through the cycle: [low / medium / high / critical path]

Constraints:
- Can we do a big-bang migration? [yes/no]
- Teams involved: [N teams, describe ownership]
- Timeline constraint: [any hard deadlines?]
- Current test coverage of the affected services: [%]

Please:
1. Analyze the root cause of why this cycle exists (domain modeling issue? convenience shortcut?)
2. Propose 2-3 concrete breaking strategies with trade-offs for each:
   - Event-based decoupling
   - Introducing a new mediator/orchestrator service
   - Data duplication with eventual consistency
   - Dependency inversion (abstractions)
3. Recommend the best strategy for our constraints
4. Produce a phased migration plan that allows incremental cycle elimination
5. Identify what tests need to exist before starting migration
```
