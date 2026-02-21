# Use Case #252: AI Database Schema Optimizer

**Role**: Developer | **Industry**: SaaS, Enterprise Software, E-commerce, Fintech | **Task**: Analysis, Performance Optimization, Architecture

---
## Detailed Introduction

**The Pain: Database Schema Decisions Made in Year One Define Performance Ceilings for the Next Decade**

Database schema design is the highest-leverage infrastructure decision most engineering teams make — and the one they invest the least professional rigor in. A startup's initial schema is typically designed by a single developer under time pressure, with table structures reflecting the immediate feature requirements rather than the query patterns, data volumes, or access characteristics that will define the system's performance at 10x, 100x, or 1000x scale. Those design decisions calcify. Adding an index later is easy. Restructuring a table that has 50 million rows and is written to by 15 different services, with a schema change that requires a migration during business hours without downtime — that is a 3-week engineering project.

The specific failure modes are well-documented. Missing indexes are the most common: a developer adds a `user_id` column to a table for filtering purposes, and the application works fine in development with 1,000 rows. At 10 million rows in production, every query that filters by `user_id` performs a full table scan, and what was a 5ms query becomes a 3-second query that brings down the service. The developer who added the column assumed the DBA would add an index; the DBA assumed the developer would specify it. Neither happened.

Data type choices have compound consequences. A column created as `VARCHAR(255)` because "that seemed like enough" becomes a migration project when the business requirement changes and longer values need to be stored — and if that column is part of an index, the migration requires rebuilding the index on the full table. A `TEXT` column that stores JSON because "we weren't sure of the structure yet" becomes a performance sink when queries need to filter or aggregate on fields within the JSON, which requires full table scans without support from standard B-tree indexes. An integer primary key chosen for simplicity hits its ceiling at 2.1 billion rows, requiring an emergency migration to BIGINT — a migration that cannot be performed with zero downtime on a live table without significant operational complexity.

Normalization decisions are permanent architecture choices with significant performance implications. Over-normalization creates query complexity: business logic that should read from one table requires 7 joins, and every join is an opportunity for a query plan to choose an inefficient path. Under-normalization creates data integrity problems: the same customer email address stored in 4 tables means 4 update targets when the customer changes their email, and 4 potential points of inconsistency. The correct trade-off depends on the access patterns, and the access patterns are often not known with confidence at schema design time.

**How COCO Solves It**

COCO's AI Database Schema Optimizer analyzes existing schemas, query patterns, and application code to identify performance issues, normalization problems, and design risks — and generates specific optimization recommendations.

1. **Index Analysis and Recommendation**: Identifies missing, redundant, and suboptimal indexes.
   - Analyzes query patterns from application code and slow query logs to identify which columns need indexes
   - Detects missing composite indexes for multi-column WHERE clauses and ORDER BY combinations
   - Identifies redundant indexes: indexes that are superseded by broader composite indexes or never used
   - Recommends partial indexes for filtered queries on large tables (e.g., `WHERE status = 'active'`)
   - Evaluates index coverage for frequently-joined foreign key columns
   - Identifies index bloat issues on high-write tables where excessive indexing degrades write performance

2. **Data Type Optimization**: Reviews column type choices for correctness and efficiency.
   - Identifies columns that could use more appropriate types: VARCHAR that should be ENUM, TEXT that should have a constraint, INT that should be BIGINT given growth trajectory
   - Flags JSON/JSONB columns and recommends when to extract fields into typed columns vs. when unstructured storage is appropriate
   - Identifies timestamp storage issues: storing timestamps as strings or integers instead of proper timestamp types
   - Recommends UUID vs. sequential integer vs. ULID primary key strategies based on the access pattern and query characteristics

3. **Normalization Review**: Evaluates the normalization level and its trade-offs.
   - Identifies denormalization opportunities for performance: columns that should be cached on a parent table to avoid joins in hot query paths
   - Flags over-normalization: relationship tables that add join complexity without meaningful data integrity benefit
   - Identifies missing foreign key constraints that leave referential integrity enforcement to application code
   - Recommends materialized views or summary tables for complex aggregation queries that run frequently

4. **Query Pattern Analysis**: Evaluates how schema design aligns with actual query patterns.
   - Analyzes the most frequent queries against the schema and identifies mismatches between schema design and query patterns
   - Identifies N+1 query sources rooted in schema design rather than application code
   - Recommends schema changes that would allow queries to be simplified or eliminated
   - Evaluates pagination strategies and recommends cursor-based pagination schema support for large datasets

5. **Migration Risk Assessment**: Evaluates the difficulty and risk of recommended schema changes.
   - For each recommended change, estimates the migration complexity: trivial, moderate, or high-risk
   - Identifies which changes require table locks and estimates downtime impact at current data volumes
   - Recommends online migration strategies using tools like `pt-online-schema-change` or `gh-ost`
   - Generates safe migration scripts with appropriate precautions for high-risk changes

6. **Multi-Tenant and Scaling Pattern Review**: Evaluates schema design for multi-tenancy and horizontal scaling.
   - Reviews tenant isolation strategy: row-level isolation, schema-per-tenant, or database-per-tenant
   - Identifies sharding readiness: whether the schema can be partitioned and what the natural partition key would be
   - Evaluates table partitioning opportunities for time-series or high-volume tables

**Measurable Results**

- **Query performance improvement**: Teams implementing COCO-recommended index changes report median query performance improvements of 60-85% for the targeted slow queries
- **Schema migration incidents**: Teams using COCO for pre-launch schema review experience 52% fewer production schema migration incidents in the first year
- **Index efficiency**: Redundant index removal reduces write overhead by an average of 18% on high-write tables
- **Storage efficiency**: Data type optimization recommendations reduce storage footprint by 15-30% on large tables where over-specified types are common
- **Investigation time**: Time to identify the root cause of database performance problems reduced by 70% when COCO analyzes the schema and query patterns together

**Who Benefits**

- **Backend Developers**: Get expert-level schema design feedback during feature development, before design decisions are locked in by implementation
- **Data Engineers**: Analyze and optimize complex schemas for reporting and analytics workloads without manually auditing every table and index
- **Database Administrators**: Automate the first pass of schema review for teams that don't have dedicated DBA coverage
- **Engineering Managers**: Catch costly schema design mistakes before they ship to production, avoiding the expensive remediation work that typically follows

---
## Practical Prompts

**Prompt 1: Full Schema Review and Optimization**
```
Please review the following database schema for performance, design quality, and optimization opportunities.

Schema (paste CREATE TABLE statements or schema dump):
[paste your schema DDL]

Database system: [PostgreSQL / MySQL / SQLite / etc., version]
Approximate data volumes: [e.g., users table: 2M rows, orders: 50M rows, order_items: 200M rows]
Primary query patterns (describe or paste your most common queries):
[describe the top 5-10 most frequent query types, or paste representative SQL]

Application context:
- Type: [e.g., multi-tenant SaaS, e-commerce, analytics platform]
- Read/write ratio: [e.g., 80% reads, 20% writes]
- Peak concurrent connections: [approximate]

Please analyze and report:
1. Missing indexes: which columns need indexes, and what type (single, composite, partial)?
2. Redundant or unused indexes that should be dropped
3. Data type issues: columns with inappropriate types given the data stored
4. Normalization issues: over- or under-normalization with specific recommendations
5. Foreign key constraints that are missing (identified by naming conventions or query patterns)
6. Top 3 performance risks at 10x current data volume
7. Priority-ranked optimization recommendations with estimated impact
```

**Prompt 2: Slow Query Root Cause Analysis via Schema**
```
I have slow queries that I believe are caused by schema design issues. Help me identify the root cause and fix.

Slow queries (paste the actual SQL, including WHERE clauses):
[paste the slow queries]

EXPLAIN / EXPLAIN ANALYZE output for each:
[paste the query plans]

Schema for the tables involved:
[paste CREATE TABLE statements for the relevant tables]

Existing indexes on these tables:
[paste index definitions]

Performance goal: [e.g., "this query needs to run in under 100ms for a table with 10M rows"]

Please:
1. Explain why each query is slow, referencing the query plan
2. What schema changes (new indexes, type changes, denormalization) would most improve performance?
3. Show the exact DDL for each recommended schema change
4. After the schema changes, what would the new query plan look like? (Describe the expected improvement)
5. Are there query rewrites that would help even without schema changes?
6. What's the estimated migration risk for each schema change at current table size?
```

**Prompt 3: Index Strategy Design**
```
I need to design a comprehensive indexing strategy for the following tables given our query patterns.

Table schemas:
[paste CREATE TABLE statements]

All queries that access these tables (paste the SQL — every variation matters):
[paste all query variations]

Current indexes:
[list or paste current index definitions]

Constraints:
- Write volume: [approximate inserts/updates/deletes per second]
- Acceptable index storage overhead: [e.g., "we can afford up to 2x the table storage for indexes"]
- Maintenance window availability: [can we take downtime for index creation?]

Please:
1. For each query, identify whether it is fully covered by existing indexes
2. Recommend new indexes, specifying: column order, index type (B-tree, hash, GIN, etc.), and whether partial
3. Identify which existing indexes to drop as redundant
4. Explain the write performance trade-off of the recommended index set
5. In what order should the indexes be created for minimum risk and maximum early benefit?
6. What monitoring queries should I run to validate index usage after creation?
```

**Prompt 4: Schema Migration Safety Review**
```
I need to make schema changes to a production database table and need help assessing the risk and planning the migration.

The table: [table name]
Current schema: [paste CREATE TABLE statement]
Table size: [approximate row count and storage size]
Write volume: [approximate writes per minute to this table]
Downtime tolerance: [zero downtime required / brief maintenance window acceptable]

Proposed schema changes:
[describe each change: add column, modify type, add index, add constraint, etc.]

Database system and version: [e.g., PostgreSQL 15]
Available tools: [e.g., pt-online-schema-change, gh-ost, native online DDL]

Please:
1. For each proposed change, classify: safe online (no lock) / brief lock (milliseconds) / long lock (minutes+)
2. Which changes require special migration tooling? Which can be done with native ALTER TABLE?
3. Provide the exact migration SQL or command for each change
4. What's the recommended sequence for making multiple changes?
5. What should I monitor during migration execution to detect problems early?
6. What is the rollback procedure for each change if something goes wrong?
7. Pre-migration checklist: what should I verify before running this migration in production?
```

**Prompt 5: Multi-Tenant Schema Design Review**
```
I'm designing (or reviewing) the schema for a multi-tenant SaaS application and need to evaluate the isolation strategy and performance characteristics.

Current or proposed schema (focus on tenant-related design):
[paste relevant schema sections]

Isolation strategy currently in use: [row-level / schema-per-tenant / database-per-tenant / hybrid]
Number of tenants (current and projected 2-year growth): [e.g., 50 now, expecting 2,000 in 2 years]
Tenant size variation: [e.g., "most tenants have <1,000 records, but our largest has 5M"]
Compliance requirements: [e.g., data residency, PII isolation, GDPR]

Please evaluate:
1. Is the isolation strategy appropriate for the tenant scale and compliance requirements?
2. How does the current schema handle tenant data isolation — what are the risks?
3. Are there missing tenant_id indexes that will cause cross-tenant query performance issues?
4. How will the schema perform as the largest tenant grows? What are the failure points?
5. What sharding strategy would work for this schema if we needed to horizontally partition?
6. Recommendations for improving the schema for multi-tenancy, with migration complexity assessment for each
```

---
