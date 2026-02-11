# Use Case #006: AI Test Generator

**Role**: Developer / QA Engineer | **Industry**: Technology, SaaS, Fintech, Healthcare IT | **Task**: Automated Test Generation, Test Coverage Improvement, Regression Testing

---

## Part 1: Social Media Copy

### English

I audited our test suite last month. The results were humbling: 34% branch coverage. Entire modules with zero tests. The "critical path" for our payment flow? Covered by exactly one happy-path test written in 2022.

We didn't have a testing problem. We had a math problem. 200K lines of code. 2 QA engineers. At their pace of ~15 meaningful tests per week, reaching 80% coverage would take 3.4 years. By then the codebase would have doubled.

We deployed COCO's AI Test Generator 6 weeks ago:
- It read our codebase and identified the 847 untested code paths
- Generated edge case tests we never would have thought of (race conditions in our queue processor, timezone boundary bugs in billing)
- Matched our existing test patterns -- Vitest, factory-bot fixtures, our custom assertion helpers
- Produced 2,100 tests in the first two weeks. 89% passed on first run. The 11% that failed? They found actual bugs.

Coverage went from 34% to 78%. Our deploy confidence score (measured by rollback rate) improved by 60%.

Stop writing tests line by line. Tell your AI employee what to test.

### 中文

上个月我审计了我们的测试套件。结果很惭愧：分支覆盖率34%。整个模块零测试。支付流程的"关键路径"？只有一个2022年写的happy path测试。

我们不是有测试问题，我们是有数学问题。20万行代码，2个QA工程师。按他们每周约15个有意义的测试的速度，达到80%覆盖率需要3.4年。到那时代码量早已翻倍。

6周前我们部署了COCO的AI Test Generator：
- 读取代码库，识别了847条未测试的代码路径
- 生成了我们从未想到的边界测试（队列处理器的竞态条件、计费系统的时区边界bug）
- 匹配我们现有的测试模式——Vitest、factory-bot fixtures、自定义断言工具
- 前两周生成了2100个测试。89%首次运行通过。那11%失败的？发现了真实的bug。

覆盖率从34%升到78%。我们的部署信心指标（以回滚率衡量）提升了60%。

别再逐行写测试了。告诉你的AI员工该测什么。

---

## Part 2: Detailed Introduction

### English

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

### 中文

**痛点：永远还不清的测试覆盖率债务**

每个工程团队都有测试覆盖率目标，几乎没有团队能持续达标。经济账很残酷：为一个函数写完整测试所需时间是写函数本身的2-5倍。边界情况进一步翻倍。而当截止日期到来时，测试是第一个被砍掉的——"以后再补"变成了永恒状态。

后果在悄悄累积。低测试覆盖率意味着每次部署都是赌博。重构变得令人恐惧，因为你无法信任安全网。Bug回归成为常态。开发者对代码库失去信心，进一步拖慢开发速度。这是一个向下的螺旋。

手动QA也无法扩展。一个QA工程师手动编写测试，每天能产出10-20个高质量测试。对于一个拥有数千个函数和数百个API端点的成熟代码库，追赶在数学上是不可能的。

**COCO如何解决**

COCO的AI Test Generator不只是创建样板测试。它对你的代码进行深度分析，生成真正能捕获bug的测试。以下是具体流程：

1. **代码库分析**：COCO扫描整个代码仓库，理解架构、依赖关系、数据模型和现有测试模式。它映射每个函数、方法和端点，识别哪些路径有测试覆盖，哪些没有。

2. **基于风险的优先级生成**：COCO不会随机生成测试，而是按风险优先级排序：
   - 处理金钱、认证或用户数据的代码路径
   - 高圈复杂度的函数（更多分支=更多风险）
   - 最近修改的代码（统计上bug最可能出现的地方）
   - 服务间的集成点

3. **智能边界情况发现**：COCO分析每个函数的参数、类型和行为，生成边界用例：
   - Null/undefined/空输入
   - 边界值（0、-1、MAX_INT、空数组）
   - 类型转换陷阱
   - 并发访问场景
   - 时区和区域设置相关行为
   - 错误传播路径

4. **模式匹配**：COCO读取你现有的测试并匹配：
   - 测试框架和断言库（Jest、Vitest、pytest、JUnit等）
   - Fixture和工厂模式
   - Mock/Stub策略
   - 命名规范
   - 文件组织结构

5. **测试质量保证**：每个生成的测试都是：
   - 确定性的（没有因随机数据或时序导致的不稳定测试）
   - 独立的（可以任意顺序运行）
   - 快速的（默认mock外部依赖）
   - 可读的（清晰的测试名称描述被验证的行为）

6. **持续缺口分析**：初始生成后，COCO监控代码变更，自动为修改的代码建议新测试，确保覆盖率不退化。

**可量化的结果**

- 6周内覆盖率**从34%提升到78%**（中型代码库的典型结果）
- 生成测试**89%首次运行通过**
- 生产环境bug回归率**降低60%**
- 新功能达到覆盖率标准的时间**缩短85%**
- 每季度测试编写**节省450+开发者小时**
- 首次运行失败的测试中，**73%发现了真实bug**

**受益角色**

- **开发者**：自信发版，无惧重构
- **QA工程师**：专注探索性测试和复杂场景，而非编写样板代码
- **技术经理**：可量化的质量指标可供汇报，生产环境bug导致的紧急救火更少
- **产品团队**：重构不被缺失的测试阻塞，功能交付更快

---

## Part 3: Practical Prompts

### English

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

### 中文

**提示词 1: 为未测试模块生成测试**
```
分析以下模块并生成全面的单元测试。我们的技术栈使用[Jest/Vitest/pytest]，采用[describe/it/test]风格。

要求：
- 覆盖所有公共方法
- 包含正常路径、错误情况和边界情况
- Mock外部依赖（数据库、API调用、文件系统）
- 使用描述性的测试名称，遵循模式："当[条件]时，应该[预期行为]"
- 匹配我们现有的fixture模式（参考下面的示例测试）

待测试模块：
[粘贴模块代码]

参考的现有测试示例：
[粘贴项目中一个现有测试文件]
```

**提示词 2: 边界测试用例发现**
```
对以下函数，识别所有可能的边界情况并为每个生成测试。考虑：
- 输入边界（最小值、最大值、零、负数、空、null、undefined）
- 类型转换风险
- 并发执行场景
- 状态变异副作用
- 依赖的错误传播
- 时区/区域设置敏感行为
- Unicode和特殊字符处理

函数：
[粘贴函数代码]

依赖/上下文：
[粘贴相关类型定义或接口]
```

**提示词 3: 集成测试套件生成**
```
为我们的[REST API / GraphQL API]端点生成集成测试。

端点：[HTTP方法] [路径]
请求体Schema：[粘贴schema]
响应Schema：[粘贴schema]
认证方式：[Bearer token / API key / Session]
涉及的数据库模型：[列出模型]

生成覆盖以下场景的测试：
1. 有效数据的成功请求
2. 校验错误（缺少必填字段、无效类型、边界值）
3. 认证/授权失败
4. 并发请求处理
5. 数据库约束违规
6. 速率限制行为
7. 响应格式和状态码验证

使用[supertest/httpx/RestAssured]发送HTTP请求，[factory-bot/faker]生成测试数据。
```

**提示词 4: 基于Bug报告的回归测试**
```
一个bug已被报告并修复。生成回归测试确保此bug永不复发。

Bug描述：[描述bug]
根本原因：[解释原因]
已应用的修复：[描述或粘贴修复代码]
受影响的代码：
[粘贴相关代码]

生成的测试应该：
1. 重现确切的bug场景（应用修复后应该通过）
2. 覆盖可能导致类似bug的相关边界情况
3. 测试修复周围的边界条件
4. 验证修复没有破坏相关功能
```

**提示词 5: 测试覆盖缺口分析**
```
以下是我们当前的测试文件和它测试的源模块。分析哪些没有被覆盖，并生成缺失的测试。

源模块：
[粘贴源代码]

当前测试文件：
[粘贴现有测试]

识别：
1. 未测试的函数/方法
2. 未测试的分支（if/else路径、switch分支、try/catch）
3. 已测试函数的缺失边界情况
4. 缺失的错误场景测试
5. 函数间缺失的集成测试

只生成缺失的测试，不要重复已有的覆盖。
```
