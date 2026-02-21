# Use Case #251: AI API Design Reviewer

**Role**: Developer | **Industry**: SaaS, Enterprise Software, Platform Engineering, Developer Tools | **Task**: Code Review, API Design, Architecture

---
## Detailed Introduction

**The Pain: Bad API Design is a Permanent Tax on Everyone Who Ever Integrates With Your System**

API design decisions are among the most consequential and least reversible choices a software team makes. A poorly named endpoint, an inconsistent error response format, a missing pagination mechanism, a field named `status` that accepts 11 different string values with no enumeration — these decisions ship, get integrated by 3 internal teams, then 7 external customers, and then become essentially unmovable. Changing them later requires versioning, migration periods, deprecation notices, and coordination across every dependent system. The cost of a bad API design decision compounds with every new integration built on top of it.

The discipline of API design is frequently treated as an afterthought. In the standard feature development workflow, an engineer is tasked with building a feature, they design the API that supports it, write the implementation, get a code review that focuses primarily on the implementation, and ship. The API design review — if it happens at all — is conducted by the same engineer or a teammate looking at the code rather than the API contract. Nobody pauses to systematically ask: Is this resource name consistent with our existing naming conventions? Does this endpoint violate REST semantics in a way that will confuse integrators? What happens when the requester passes an invalid combination of parameters — and is that error response actually useful?

The consequences are predictable. Stripe, one of the companies most admired for API design, has published extensively on the internal discipline required to achieve API consistency — a dedicated API review committee, design guides running to dozens of pages, and a culture of treating API design as a public commitment. Most teams have none of this infrastructure, and the technical debt accumulates. An internal audit at a mid-sized SaaS company found 31 distinct patterns for error responses across their 140 API endpoints: some returning `{"error": "not found"}`, others `{"message": "Resource not found", "code": 404}`, others `{"errors": [{"type": "NOT_FOUND", "detail": "..."}]}`. Every integrator had to handle all 31 patterns or accept silent failures.

Security is the other dimension where API design quality has direct operational consequences. Broken object level authorization (BOLA), excessive data exposure, missing rate limiting, and insecure direct object references are all primarily API design failures — they appear in code, but the vulnerability was introduced at the design stage. OWASP's API Security Top 10 are essentially a catalog of API design mistakes, and they appear in production systems with startling regularity despite being well-documented.

**How COCO Solves It**

COCO's AI API Design Reviewer provides systematic design review of API definitions, catching consistency violations, security issues, usability problems, and documentation gaps before APIs ship.

1. **REST and HTTP Semantics Review**: Validates correct use of HTTP conventions.
   - Checks correct use of HTTP verbs: GET for reads (idempotent, no side effects), POST for creation, PUT/PATCH for updates, DELETE for deletions
   - Validates status code usage: 201 for creation, 204 for empty success, 400 vs. 422 for different validation failure types, 401 vs. 403 distinction
   - Identifies violations of resource naming conventions: verbs in resource names, inconsistent pluralization, non-hierarchical URL structures for hierarchical resources
   - Flags HATEOAS opportunities and evaluates whether the API's navigation model is coherent

2. **Consistency Analysis**: Evaluates internal consistency across all endpoints in the API surface.
   - Identifies inconsistent naming conventions: camelCase vs. snake_case fields, mixed English and other languages in field names, truncated vs. spelled-out field names
   - Detects inconsistent error response formats across endpoints and proposes a unified error schema
   - Flags inconsistent pagination: some endpoints using cursor-based, others offset-based, without documented rationale
   - Identifies inconsistent authentication header usage, inconsistent versioning approaches within the same API surface

3. **Security Design Review**: Identifies security vulnerabilities introduced at the API design stage.
   - Detects excessive data exposure: endpoints that return full object graphs when only a subset of fields is needed
   - Identifies missing or insufficient rate limiting specifications
   - Flags direct object reference patterns that should use opaque identifiers
   - Identifies authorization logic that should be specified at the API design level
   - Evaluates input validation specifications: which fields have validation rules, which are unbounded, where injection risks could exist

4. **Usability and Developer Experience Review**: Evaluates the API from the perspective of an integrator.
   - Identifies operations that require multiple sequential API calls when a single endpoint would serve better
   - Flags missing bulk endpoints for operations that will predictably be performed at scale
   - Evaluates error message quality: are errors actionable? Do they tell the integrator what to fix?
   - Identifies missing or incomplete pagination, filtering, and sorting capabilities
   - Evaluates the onboarding complexity: how many steps does a new integrator need to accomplish a basic use case?

5. **Documentation Completeness Review**: Ensures API documentation meets professional standards.
   - Identifies missing parameter descriptions, undocumented constraints, and absent example values
   - Flags missing error code documentation: what errors can each endpoint return and under what conditions?
   - Evaluates whether the API description is accurate to the actual implementation
   - Identifies missing authentication documentation and missing rate limit documentation

6. **Breaking Change Detection**: Flags proposed changes that would break existing integrations.
   - Identifies removal of fields, endpoints, or enum values that existing integrators may depend on
   - Flags type changes, renamed fields, and changed semantics that are breaking without proper versioning
   - Recommends versioning strategy for breaking changes

**Measurable Results**

- **Integration support tickets**: Teams that conduct COCO-guided API design reviews before shipping report 44% fewer integration support requests in the 90 days post-launch
- **API versioning events**: Reduction in the frequency of breaking API changes requiring major version bumps — teams report 38% fewer forced version increments per year
- **Security vulnerability density**: API design-phase security issues detected by COCO review show 0.6 security issues per endpoint on average in first review; after COCO-guided redesign, drops to 0.1
- **Consistency score**: APIs reviewed with COCO before launch score an average of 8.2/10 on field naming consistency vs. 5.1/10 for unreviewed APIs
- **Review throughput**: A COCO-assisted API design review takes 45-90 minutes vs. 3-4 hours for a comparable manual review, allowing more thorough review without increasing review burden

**Who Benefits**

- **Backend and API Developers**: Receive specific, actionable design feedback before shipping rather than discovering issues through integration complaints
- **Platform and Developer Experience Teams**: Enforce API design standards across dozens of services without requiring a dedicated API review committee for every change
- **Security Engineers**: Catch API design-phase security vulnerabilities when fixing them is cheap (before implementation) rather than expensive (after integration)
- **Technical Product Managers**: Understand the usability implications of API design choices before customer commitments are made

---
## Practical Prompts

**Prompt 1: Full REST API Design Review**
```
Please review the following API design for consistency, correctness, usability, and security issues.

API specification (paste OpenAPI/Swagger YAML or JSON, or describe endpoints):
[paste API spec or endpoint descriptions]

Context:
- API type: [REST / GraphQL / gRPC]
- Who will integrate with this: [internal services only / external developers / both]
- Existing API conventions we follow: [describe any existing conventions, or paste a link to your API style guide]
- Authentication method: [JWT / API key / OAuth 2.0 / etc.]

Please review and report:
1. REST/HTTP correctness issues: wrong verbs, wrong status codes, non-RESTful patterns
2. Naming consistency issues: field naming, endpoint naming, inconsistencies with stated conventions
3. Security design issues: excessive data exposure, missing rate limits, authorization gaps
4. Usability issues: operations that require too many round trips, missing bulk endpoints, poor error messages
5. Documentation completeness: missing descriptions, missing error codes, missing examples
6. Overall design score (1-10) with rationale
7. Top 3 priority issues to fix before shipping
```

**Prompt 2: Error Response Design Review**
```
I want to evaluate and standardize our API error response design.

Sample error responses from our API (paste 5-10 different error responses from different endpoints):
[paste actual error response JSON examples from your API]

Context:
- Number of endpoints in this API: [approximate count]
- Languages our integrators use: [JavaScript, Python, Java, etc.]
- Existing error handling approach: [describe, or say "no consistent approach"]
- Any error response standards we're supposed to follow: [e.g., RFC 9457 Problem Details, JSON:API errors, or custom]

Please:
1. Identify all the different error response patterns currently in use
2. Evaluate each pattern for: consistency, actionability (does it tell the integrator what to fix?), debuggability (does it include enough context?)
3. Propose a single unified error response schema that our entire API should use
4. Show migration examples: how should each existing pattern be converted to the unified format?
5. What error codes/types should we define for the most common error categories?
6. How should we communicate validation errors for multi-field requests?
```

**Prompt 3: API Security Design Review**
```
Please review this API design for security vulnerabilities, focusing on OWASP API Security Top 10.

API endpoints to review (paste spec or describe each endpoint):
[paste API specification or endpoint descriptions]

Authentication and authorization design:
[describe how authentication works and how authorization decisions are made]

Data models returned (paste schema or describe):
[paste response schemas or describe what data each endpoint returns]

Please check for:
1. Broken Object Level Authorization (BOLA): can users access objects they don't own?
2. Broken Authentication: weaknesses in the authentication design
3. Excessive Data Exposure: are endpoints returning more data than needed?
4. Lack of Resources and Rate Limiting: which endpoints need rate limiting and what limits?
5. Broken Function Level Authorization: are admin-only functions adequately protected?
6. Mass Assignment: can attackers update fields they shouldn't by including them in request bodies?
7. Security Misconfiguration: CORS settings, exposed internal endpoints, etc.
8. Injection risks: where should additional input validation be specified?

For each issue found: describe the vulnerability, show the specific endpoint affected, and recommend the design fix.
```

**Prompt 4: API Versioning and Breaking Change Review**
```
I need to review a proposed API change for breaking change impact before shipping.

Current API version: [e.g., v2]
Proposed changes:
[describe or paste the proposed changes — endpoint additions, modifications, or removals]

Current API specification (the version that's live):
[paste relevant parts of the current spec]

Known integrators:
- Internal services: [list internal services that use this API]
- External integrators: [number of external integrators, if known]
- SDK/client library: [whether you have SDKs that would need updating]

Please:
1. Classify each proposed change: Non-breaking / Potentially breaking / Breaking — with explanation
2. For each breaking change: what specific integrator code would fail?
3. What is the minimum versioning strategy required: patch, minor, or major version bump?
4. Should we run v2 and v3 in parallel? For how long? What's a reasonable deprecation timeline?
5. What communication do we need to send to integrators before shipping these changes?
6. Are there non-breaking design alternatives that achieve the same outcome for any of the breaking changes?
```

**Prompt 5: GraphQL or gRPC API Design Review**
```
Please review this [GraphQL schema / gRPC proto definition] for design quality.

Schema/proto definition:
[paste the GraphQL schema or .proto file]

Context:
- Use case: [what this API is for]
- Clients: [who will call this API — web, mobile, internal services]
- Existing conventions: [any style guide or conventions we follow]
- Performance constraints: [e.g., must support mobile clients on slow networks]

For GraphQL, please review:
1. Schema design: are types, fields, and relationships well-modeled?
2. Query depth: are there unbounded query depth risks that need depth limiting?
3. N+1 risks: which resolvers will predictably cause N+1 problems without DataLoader?
4. Mutation design: do mutations follow good naming conventions and return useful payloads?
5. Pagination: is cursor-based pagination implemented for all list types?
6. Authorization: where should field-level or type-level authorization be documented?

For gRPC, please review:
1. Service and method naming conventions
2. Request/response message design: appropriate field types, optional vs. required, etc.
3. Error handling: use of status codes and error details
4. Streaming: are streaming RPCs used appropriately?
5. Versioning strategy for future changes

Overall design quality and top recommendations.
```

---
