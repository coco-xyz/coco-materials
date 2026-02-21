# Use Case #228: AI API Design Validator

**Role**: Developer / API Engineer / Tech Lead / Platform Engineer | **Industry**: Technology, SaaS, Fintech, Developer Platforms | **Task**: API Design Review, Contract Validation, API Governance

---
## Detailed Introduction

**The Pain: APIs That Work on Day One and Break Teams on Day One Hundred**

APIs are contracts. Unlike internal code that can be refactored freely, APIs have external consumers who depend on their stability — whether those consumers are third-party developers, mobile clients, or other internal teams. A poorly designed API is almost impossible to fix after it has consumers: you can't rename a field that thousands of client apps already parse, you can't change a status code that partner systems already handle, you can't restructure a response shape that mobile apps have already shipped against. Every design mistake is either permanent or requires a costly migration that strains consumer relationships and demands significant coordination.

The specific failure modes are consistent. Inconsistent naming conventions (snake_case in some endpoints, camelCase in others) that force client developers to write special-case handling. Non-idiomatic HTTP usage (using POST for reads, returning 200 for errors, inconsistent use of status codes) that breaks standard library behavior. Overly-chatty APIs that require 6 requests to complete a single user action, each with its own latency. Nested resources structured for the convenience of the API author rather than the efficiency of the client. Missing pagination on list endpoints that return 50,000 records fine in development and cause timeouts in production. Opaque error messages that client developers can't act on. These aren't mistakes — they're patterns that emerge naturally when API design isn't reviewed against a systematic standard.

GraphQL and gRPC introduce their own failure modes. GraphQL schemas with N+1 query risks baked into their structure. Mutations that violate CQRS principles. Protobuf field numbering conflicts that break serialization compatibility. gRPC service definitions that don't account for streaming backpressure. Without tooling that understands the specific idioms of each API paradigm, design reviews become inconsistent and dependent on the reviewer's familiarity with each protocol.

**How COCO Solves It**

COCO's AI API Design Validator examines API contracts against protocol-specific best practices, identifies backward compatibility risks in proposed changes, and generates consumer migration guides — ensuring APIs are designed for long-term stability and developer experience from the start.

1. **REST API Best Practices Validation**: COCO applies a comprehensive REST idiom checklist to every API design.
   - Validates resource naming: noun-based endpoints, plural collections, consistent casing, no verbs in paths (except where appropriate for RPC-style endpoints)
   - Checks HTTP method semantics: correct use of GET/POST/PUT/PATCH/DELETE, idempotency expectations met, safe methods not causing side effects
   - Reviews status code usage: correct 2xx/4xx/5xx differentiation, consistent error response format (RFC 7807 Problem Details or equivalent), no 200 OK with error body
   - Validates pagination design: cursor-based vs. offset pagination appropriateness, response envelope consistency, link headers for navigation
   - Checks filtering, sorting, and field selection design for query API completeness and consistency
   - Reviews authentication and authorization patterns: header conventions, scope definitions, token format consistency

2. **GraphQL Schema Validation**: GraphQL has its own set of design pitfalls distinct from REST.
   - Identifies N+1 query risks in schema design: relationships that will cause O(n) resolver calls without DataLoader patterns
   - Reviews mutation design: input type consistency, mutation response structure (affected object + errors), CQRS compliance
   - Checks subscription design: event granularity, authorization in subscriptions, scaling considerations
   - Validates naming conventions: type names, field names, enum values following GraphQL community conventions
   - Reviews error handling: user-facing vs. system errors, error extensions, consistent error code taxonomy

3. **gRPC / Protobuf Design Review**: Wire protocol decisions that can't be changed without breaking clients.
   - Validates field numbering strategy: proper use of reserved field numbers, risk of collision in future additions
   - Reviews service method naming: idiomatic RPC naming, streaming vs. unary appropriateness for each method
   - Checks backward compatibility of proposed schema changes: adding required fields, changing field types, removing fields
   - Evaluates service decomposition: is this service definition appropriately scoped? Too coarse? Too fine-grained?
   - Reviews error status code usage against gRPC status code semantics

4. **Backward Compatibility Analysis**: The most critical review for APIs with existing consumers.
   - Analyzes proposed API changes against the current API version to identify breaking vs. non-breaking changes
   - Classifies each change: backward-compatible addition (safe), non-breaking behavior change (safe with documentation), breaking change (requires migration strategy)
   - Identifies "silent breaking changes" that don't change the schema but change semantics: changed validation rules, changed sorting behavior, changed pagination defaults
   - Recommends versioning strategy: URL versioning (/v1/, /v2/), header versioning (Accept: application/vnd.api+json;version=2), or evolution-based approach for GraphQL/gRPC

5. **Consumer Migration Guide Generation**: When breaking changes are unavoidable, reduce the migration burden.
   - Produces a change log with clear "before" and "after" for each breaking change
   - Generates code migration examples in common client languages (Python, JavaScript/TypeScript, Java, Go) showing how to update client code
   - Creates a dual-support deprecation timeline: how long the old API version will be maintained alongside the new one
   - Drafts a migration communication template for API consumers

6. **OpenAPI / AsyncAPI Specification Validation**: Spec-first API development requires spec correctness.
   - Validates OpenAPI 3.0/3.1 and Swagger 2.0 specifications for completeness and correctness
   - Checks that all request/response schemas are fully specified (no schema-less endpoints)
   - Identifies missing examples, missing error response definitions, and incomplete parameter documentation
   - Validates that security scheme definitions are complete and applied consistently
   - Lints AsyncAPI specifications for event-driven API designs (Kafka, WebSocket, AMQP)

**Measurable Results**

- **Design Issues Caught Pre-Release**: Teams using API design review catch 75% of API design issues before the API has consumers, vs. 25% in unstructured processes
- **Breaking Change Incidents**: Systematic backward compatibility analysis reduces unintentional breaking changes reaching consumers by 80%
- **Developer Experience Score**: APIs reviewed with COCO receive 40% higher developer satisfaction scores from API consumers
- **Migration Effort**: COCO-generated migration guides reduce consumer migration effort by 50% compared to API changelogs alone
- **API Review Time**: Comprehensive design review time reduced from 3-hour manual sessions to 45-minute COCO-assisted sessions
- **Spec Completeness**: API specification completeness improves from average 55% to 90%+ with COCO validation

**Who Benefits**

- **API Engineers / Backend Developers**: Get systematic validation that catches design issues before they become permanent mistakes
- **Platform Teams**: Establish consistent API governance standards that scale across teams without creating review bottlenecks
- **Developer Relations / API Consumer Teams**: Receive better-designed, more consistent APIs with complete documentation
- **Tech Leads**: Enforce API design standards programmatically rather than relying on individual reviewer knowledge

---

## Practical Prompts

**Prompt 1: REST API Design Review**
```
Please review the following REST API design for correctness, consistency, and best practices.

API context:
- Purpose: [what this API does, who consumes it: internal/external/third-party]
- Current consumers: [none yet / mobile apps / third-party partners / internal services]
- Authentication: [JWT / OAuth2 / API key / other]
- Versioning approach: [URL / header / none]

[Paste your API specification (OpenAPI YAML/JSON, or endpoint list with request/response examples)]

Or describe the key endpoints:
- GET /[path]: [description, query params, response shape]
- POST /[path]: [description, request body, response shape]
- PUT/PATCH /[path]: [description]
- DELETE /[path]: [description]

Please review:
1. Resource naming and URL structure consistency
2. HTTP method usage and status code correctness
3. Request/response schema design and naming conventions
4. Error response format and completeness
5. Pagination, filtering, and sorting design
6. Authentication and authorization pattern
7. Missing endpoints that the API design implies (CRUD completeness, etc.)
8. Produce a severity-ranked issues list with specific fixes for each
```

**Prompt 2: Backward Compatibility Analysis for API Changes**
```
I'm proposing changes to an existing API that has consumers. I need a backward compatibility analysis.

Current API (v[N]):
[Paste or describe the current API specification]

Proposed changes:
[Paste or describe the proposed changes to the API]
- [Change 1: e.g., "Rename field 'user_id' to 'userId' for consistency"]
- [Change 2: e.g., "Add required field 'country_code' to POST /orders"]
- [Change 3: e.g., "Change pagination from offset-based to cursor-based"]
- [Change 4: e.g., "Remove deprecated endpoint GET /legacy/users"]

Consumer context:
- Number of known consumers: [N]
- Consumer types: [mobile apps / web app / third-party partners / internal services]
- Consumer update capability: [can push updates immediately / long mobile release cycles / third-party with own timelines]

Please:
1. Classify each proposed change as: Breaking / Non-breaking / Silent breaking change
2. For each breaking change, propose a migration strategy
3. Recommend a versioning approach for this set of changes
4. Suggest a deprecation timeline for old behavior
5. Generate a migration guide for consumers, with before/after code examples in [JavaScript/Python/Java]
6. Draft an API changelog entry for each change
```

**Prompt 3: GraphQL Schema Design Review**
```
Please review our GraphQL schema design for best practices, N+1 risks, and design consistency.

Schema context:
- Backend: [Node.js/Apollo / Python/Strawberry / Java/DGS / Go/gqlgen / other]
- Consumers: [web app / mobile / third-party]
- Authentication: [how auth is handled in resolvers]
- DataLoader usage: [yes / no / partial]

[Paste your GraphQL schema (SDL format)]

Key queries/mutations I'm concerned about:
- [Query/Mutation name]: [describe concern]
- [Query/Mutation name]: [describe concern]

Please review:
1. Schema structure and type naming conventions
2. N+1 resolver risks — identify all relationship fields that will cause cascading queries without DataLoader
3. Mutation design — input types, response types, error handling approach
4. Query depth and complexity — are there unbounded queries that could DoS the server?
5. Authorization pattern — where and how is authorization enforced in the schema?
6. Missing types or fields that the schema design implies but doesn't include
7. Pagination design — is connection-based pagination correctly implemented?
8. Recommend specific DataLoader patterns for identified N+1 risks
```
