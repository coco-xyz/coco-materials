# #398 — AI SQL Query Optimizer

**Role**: Data Scientist
**Industry**: SaaS / Tech
**Task**: Analysis
**Slug**: `ai-sql-query-optimizer`

---

## Introduction

SQL remains the dominant language for data access in machine learning workflows. Feature engineering, training data extraction, model evaluation queries, monitoring dashboards — all run on SQL against data warehouses like BigQuery, Snowflake, Redshift, or Databricks SQL. And as datasets grow from gigabytes to terabytes, the difference between a well-optimized and a poorly optimized SQL query is not seconds — it is hours and dollars. A single poorly written feature engineering query that runs daily against a 5TB warehouse table can cost thousands of dollars per month in compute alone, and if it misses a partition filter, it might scan the entire table every run.

The challenge is that SQL optimization for analytical workloads (OLAP) requires a different skill set than SQL optimization for transactional databases (OLTP). Data scientists are typically expert at writing correct SQL — getting the right joins, the right aggregations, the right window functions. But they are often not expert at: choosing the right clustering and partitioning keys, understanding when a common table expression (CTE) materializes versus when it is inlined by the query optimizer, writing efficient window functions that avoid full table scans, using APPROX_COUNT_DISTINCT instead of COUNT(DISTINCT) when appropriate, or understanding when to split a complex query into multiple materialized intermediate steps.

The financial impact is significant. A Snowflake query that runs 30 minutes with a full table scan can often be reduced to 2 minutes with proper partition pruning, saving 93% of compute costs. A BigQuery query that incorrectly uses COUNT(DISTINCT user_id) over 6 months of event data may scan 500GB and cost $3 per run — running 100 times per day, that is $300 per day or $108,000 per year for a single query. Many data teams have "runaway queries" like this that they are not even aware of because the cost is distributed across a warehouse billing account rather than attributed to individual queries.

COCO acts as an expert SQL optimization advisor, analyzing query patterns, identifying inefficiencies, and rewriting queries with specific, explained improvements. The workflow:

1. **Paste the query and provide context.** Share the SQL, the schema of involved tables, approximate table sizes, and which warehouse or engine you're using.
2. **Describe the performance problem.** Share query execution time, estimated data scanned, or cost information if available.
3. **COCO identifies optimization opportunities.** It reviews the query for: partition filter usage, join order efficiency, window function efficiency, anti-pattern detection (SELECT *, unnecessary DISTINCT, correlated subqueries), and opportunities for approximation.
4. **Receive an annotated, rewritten query.** The optimized version includes inline comments explaining each change and why it helps performance.
5. **Iterate on edge cases.** If the optimized query produces different results for edge cases you identify, COCO helps resolve the discrepancy while maintaining the optimization.

Data teams using COCO for SQL optimization report average query execution time reductions of 67% and compute cost savings averaging $1,200/month per optimized critical query.

**Who benefits:**

- **Data Scientists** who write complex feature engineering SQL and need to optimize it for cost and speed before productionizing
- **Analytics Engineers** whose dbt models run slowly or expensively and need to be tuned
- **ML Engineers** who run training data extraction queries on tight schedules and need to ensure they complete within SLA windows
- **Data Platform Leads** looking to reduce warehouse compute costs by identifying and fixing expensive query patterns across the team

---

## Practical Prompts

**Prompt 1 — Full Query Performance Optimization**
```
I have a SQL query that is running too slowly and costing too much. Please help me optimize it.

Warehouse: [BigQuery / Snowflake / Redshift / Databricks SQL / other]
Current execution time: [N minutes]
Data scanned: [N GB/TB if available]
Estimated cost per run: [$X if available]
Run frequency: [how often does this run]

Table schemas:
[TABLE_1]: [N rows, N GB], partitioned by [COLUMN], clustered by [COLUMN]
[TABLE_2]: [N rows, N GB], partitioned by [COLUMN]

SQL query:
```sql
[PASTE YOUR QUERY]
```

Known issues (if any): [DESCRIBE WHAT YOU SUSPECT]

Analyze the query, identify all optimization opportunities, and provide a rewritten version with inline comments explaining each change.
```

**Prompt 2 — Window Function Optimization**
```
I'm using window functions in my feature engineering SQL and suspect they may be causing performance issues.

Warehouse: [WAREHOUSE]
Table: [TABLE_NAME], [N rows], [PARTITIONED_BY]

Current SQL with window functions:
```sql
[PASTE SQL WITH WINDOW FUNCTIONS]
```

Current performance: [execution time, data scanned]

Help me: (1) identify whether my PARTITION BY and ORDER BY clauses are efficient, (2) check if I have unnecessary re-scans of the table, (3) suggest alternative approaches if window functions are not the right tool here, (4) optimize the frame clause (ROWS vs RANGE) if applicable.
```

**Prompt 3 — BigQuery-Specific Optimization**
```
I have a BigQuery query that's scanning too much data. Help me add proper partition and cluster filters.

Project/Dataset: [PROJECT.DATASET]
Table: [TABLE_NAME]
Table size: [N TB]
Partition column: [COLUMN_NAME, DATE/TIMESTAMP/INTEGER type]
Clustering columns: [COLUMNS]

Query:
```sql
[PASTE QUERY]
```

Query execution details from BigQuery console:
- Bytes processed: [N GB]
- Slot ms: [N]
- Stage timing: [paste if available]

Optimize for: (1) maximum partition pruning, (2) clustering filter usage, (3) any approximation functions where exactness isn't required, (4) JOIN order and broadcasting opportunities, (5) whether to materialize any CTEs as intermediate tables.
```

**Prompt 4 — Training Data Extraction Query**
```
I extract training data for my ML model using the following SQL query. It needs to run within a [N minute] SLA window but currently takes [M minutes].

Use case: [WHAT THE QUERY DOES — e.g., "extracts 6 months of customer behavior features for churn model training"]
Warehouse: [WAREHOUSE]
Data volume: [N rows output, N GB scanned]

SQL:
```sql
[PASTE EXTRACTION QUERY]
```

Constraints:
- Output must be exact (no approximations that change results)
- [OTHER_CONSTRAINTS]

Optimize the query to fit within the [N minute] SLA: (1) add any missing partition/date filters, (2) eliminate full table scans, (3) reorder JOINs if beneficial, (4) if single-query optimization is insufficient, suggest a multi-step approach using intermediate materialized tables.
```

**Prompt 5 — Anti-Pattern Review and Code Quality**
```
Please review my SQL code for common anti-patterns and best practices. I want to improve both performance and maintainability.

Warehouse: [WAREHOUSE]
Purpose: [WHAT THIS QUERY DOES]

SQL:
```sql
[PASTE YOUR FULL QUERY]
```

Review for: (1) performance anti-patterns (SELECT *, unnecessary DISTINCT, correlated subqueries, implicit cross joins), (2) correctness risks (NULL handling, join type correctness, window function edge cases), (3) maintainability issues (magic numbers, unclear aliases, missing comments on complex logic), (4) opportunities to refactor into cleaner CTEs or modular dbt models.
```
