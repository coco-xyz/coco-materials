# Use Case #026: AI Job Description Writer

**Role**: Recruiter / Hiring Manager / HR Business Partner | **Industry**: Any Industry | **Task**: Job Description Writing, Inclusive Language Optimization, Compensation Benchmarking, Employer Brand Messaging

---

## Social Media Copy

We analyzed why our engineering roles took 47 days to fill while the industry median was 36. The bottleneck wasn't sourcing or interviews -- it was applications. Our pipeline was thin because qualified candidates weren't applying. When we audited our job descriptions, the reason became obvious. They read like compliance documents, not job advertisements.

"Must have 7+ years in enterprise Java development with Spring Boot, Hibernate, and microservices architecture in a CI/CD environment utilizing Docker and Kubernetes in AWS." That was our opening line. Not what the role was about. Not why someone would want this job. Just a wall of requirements that made 70% of qualified women and underrepresented candidates self-select out (Stanford research shows women apply only when meeting 100% of requirements; men apply at 60%).

COCO's AI Job Description Writer rewired our approach:
- Analyzes the actual role needs and separates true requirements from nice-to-haves
- Writes descriptions that lead with impact and growth, not requirement lists
- Runs inclusive language analysis: removes gendered language, excessive requirements, and exclusionary jargon
- Benchmarks compensation against market data so we don't underprice roles
- Generates versions optimized for different channels (LinkedIn, Indeed, careers page)

Application volume: +64%. Female applicants: +41%. Diverse candidates in pipeline: +38%. Time-to-fill: from 47 to 31 days. Same roles, better descriptions.

---

## Detailed Introduction

**The Pain: Bad Job Descriptions Are Invisible Pipeline Killers**

Job descriptions are the most read and least optimized piece of content in most companies. They're written once, copied from templates or previous postings, edited minimally, and posted. Yet they are the single most important factor in determining who applies for your roles.

Research consistently shows that poorly written JDs have measurable negative effects: excessive requirements reduce the applicant pool (particularly among women and underrepresented groups), jargon-heavy language discourages career changers, and "requirements" that are actually preferences cause the best candidates to self-select out.

Most hiring managers write JDs that describe their ideal candidate -- someone who has already done this exact job. This eliminates candidates with high potential who could grow into the role, career changers who bring fresh perspectives, and candidates from adjacent fields with transferable skills.

**How COCO Solves It**

COCO's AI Job Description Writer creates compelling, inclusive, and effective job descriptions that attract the right candidates.

1. **Role Analysis**: COCO works with the hiring manager to clarify the actual role:
   - What will this person do in their first 90 days?
   - What skills are genuinely required vs. learnable on the job?
   - What does success look like at 6 and 12 months?
   - What makes this role unique and exciting?

2. **Impact-First Structure**: COCO writes JDs that lead with what matters to candidates:
   - **Hook**: Why this role matters and what impact the person will have
   - **What You'll Do**: Specific responsibilities framed as outcomes, not tasks
   - **What You Bring**: Separated into "Required" (genuinely non-negotiable) and "Nice to Have"
   - **What We Offer**: Compensation range, benefits, growth opportunities, culture
   - **About Us**: Company mission and team context

3. **Inclusive Language Optimization**: COCO scans for and corrects:
   - Gendered language ("rockstar," "ninja," "he/she" defaults)
   - Unnecessary requirements that exclude diverse candidates
   - Jargon that discourages career changers
   - Age-coded language ("digital native," "young and energetic")
   - Ability-biased language that excludes disabled candidates

4. **Compensation Intelligence**: COCO helps position compensation competitively:
   - Market rate benchmarking based on role, location, and company stage
   - Pay transparency compliance (where legally required)
   - Benefits and perks framing that resonates with target candidates
   - Total compensation positioning

5. **Channel Optimization**: Different platforms need different versions:
   - **LinkedIn**: Professional tone, network-shareable, emphasis on company brand
   - **Indeed**: Keyword-optimized for search, clear compensation
   - **Careers Page**: Detailed, culture-rich, with team information
   - **Internal Posting**: Growth opportunity framing, internal mobility emphasis

6. **Performance Tracking**: COCO helps measure JD effectiveness:
   - Application rate per channel
   - Quality of applicant pool (% meeting requirements)
   - Demographic diversity of applicants
   - Time-to-fill compared to previous versions

**Measurable Results**

- **Application volume**: +64% increase
- **Female applicants**: +41% increase
- **Diverse candidates in pipeline**: +38% increase
- **Time-to-fill**: From 47 to 31 days (34% reduction)
- **JD writing time**: From 2 hours to 20 minutes
- **Application-to-interview ratio**: Improved from 8% to 14% (better qualified applicants)

**Who Benefits**

- **Recruiters**: Higher application volumes with better-qualified candidates
- **Hiring Managers**: Clearer role definition leads to better hiring outcomes
- **Candidates**: Understand the role, impact, and requirements clearly
- **D&I Leaders**: More inclusive language attracts more diverse candidate pools

---

## Practical Prompts

**Prompt 1: Write a Job Description**
```
Write a compelling job description for this role.

Role: [title]
Team: [which team/department]
Reports to: [title]
Location: [office/remote/hybrid]

Hiring manager's input:
- What this person will do: [describe key responsibilities]
- Must-have skills: [list only genuinely non-negotiable skills]
- Nice-to-have skills: [list preferred but not required]
- What success looks like at 6 months: [describe]
- Why this role is exciting: [what's unique about it]
- Team size and culture: [describe]
- Compensation range: $[X]-$[X]

Write a JD with:
1. Compelling opening paragraph (why this role matters, impact opportunity)
2. "What You'll Do" (5-7 outcomes-focused responsibilities)
3. "What You Bring" (split: Required vs Nice to Have -- be ruthless about what's truly required)
4. "What We Offer" (compensation, benefits, growth)
5. "About Us" (2-3 sentences about company and team)

Run an inclusive language check and flag any problematic phrases. Keep the total length under 600 words.
```

**Prompt 2: Audit Existing Job Description for Inclusivity**
```
Audit this job description for inclusive language and effectiveness.

Current JD:
[paste the full job description]

Analyze:
1. **Language Inclusivity**: Flag gendered, age-coded, ability-biased, or exclusionary language
2. **Requirement Inflation**: Which "requirements" are actually preferences? Recommend moving to "Nice to Have"
3. **Readability**: Is it clear, scannable, and candidate-friendly?
4. **Missing Elements**: What's missing that candidates care about? (compensation, growth, impact)
5. **Keyword Optimization**: Is it discoverable on job boards?
6. **Call to Action**: Does it make someone want to apply?

Provide: Revised version with all improvements applied, plus a changelog explaining each change.
```

**Prompt 3: Generate Multiple Channel Versions**
```
Adapt this job description for different posting channels.

Base JD:
[paste your approved job description]

Generate versions for:
1. **LinkedIn** (short-form): 150-200 words, shareable, professional tone, key highlights only
2. **Indeed** (search-optimized): Full detail, keyword-rich for search algorithms, clear compensation
3. **Careers Page** (brand-rich): Full detail plus company culture, team description, application process info
4. **Internal Posting** (employee-facing): Emphasis on growth opportunity, internal mobility, team context
5. **Employee Referral Blurb** (sharing-friendly): 50-word summary employees can share with their network

Each version should feel native to the platform while maintaining consistent core messaging.
```

**Prompt 4: Compensation Benchmarking**
```
Help me benchmark compensation for this role to ensure we're competitive.

Role: [title]
Location: [city/region or remote]
Company stage: [startup/growth/enterprise]
Industry: [industry]
Experience level: [junior/mid/senior/staff/principal]
Team size they'd manage: [if applicable]

Research and provide:
1. Market salary range (25th, 50th, 75th, 90th percentile)
2. Equity/stock options typical for this level and stage
3. Signing bonus norms
4. Key benefits that top candidates expect for this role
5. How our proposed range of $[X]-$[X] compares to market
6. Recommended total compensation positioning (if we want to attract top 25% talent)
7. Geographic adjustments if remote (cost-of-living factors)
8. Red flags that our compensation might cause (too low = no applicants; too high = wrong expectations)

Include data sources and note any limitations in the benchmarking.
```

---
