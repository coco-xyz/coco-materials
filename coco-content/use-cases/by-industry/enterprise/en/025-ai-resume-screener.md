# Use Case #025: AI Resume Screener

**Role**: Recruiter / Talent Acquisition / HR Manager | **Industry**: Any Industry with Hiring Needs | **Task**: Resume Screening, Candidate Shortlisting, Skills Assessment, Bias Reduction

---
## Detailed Introduction

**The Pain: Resume Screening Is a Volume Problem That Destroys Quality**

The average corporate job posting receives 250+ applications. For popular roles at known companies, this can exceed 1,000. Recruiters screening these applications face a mathematically impossible task: give each candidate fair consideration while processing hundreds of applications per day across multiple open positions.

The result is "keyword screening" -- the recruiter's survival mechanism. When you have 60 seconds per resume, you scan for exact keyword matches to the job description. This approach is fast but deeply flawed: it rewards candidates who optimize their resumes for keywords (not necessarily the best fit), penalizes those who describe equivalent skills with different terminology, and introduces unconscious biases based on school names, company prestige, and resume formatting.

Research from Harvard Business Review shows that resume screening is one of the least predictive steps in the hiring process, yet it's the step that eliminates 90%+ of candidates. The best candidate for the job might never make it past the screen -- not because they lack qualifications, but because their resume didn't match the pattern the recruiter was looking for in a 60-second scan.

**How COCO Solves It**

COCO's AI Resume Screener performs deep, consistent analysis of every application against your actual job requirements.

1. **Requirements-Based Evaluation**: COCO analyzes each resume against a structured rubric built from the job description:
   - Required technical skills (with semantic understanding -- "React" matches "React.js" matches "React Native for web")
   - Years and type of relevant experience
   - Industry or domain expertise
   - Leadership/management experience where required
   - Education and certifications (when genuinely relevant)

2. **Semantic Skill Matching**: Unlike keyword filters, COCO understands equivalencies:
   - "Cloud infrastructure" = "AWS/GCP/Azure experience"
   - "People manager leading 12 engineers" = "Engineering management experience"
   - "Built real-time data pipelines" = "Stream processing / Kafka / event-driven architecture"
   - This catches candidates whose terminology differs but whose skills match

3. **Multi-Dimensional Scoring**: Each candidate is scored across dimensions:
   - **Skills Match** (0-100): How well their skills match the requirements
   - **Experience Relevance** (0-100): How relevant their work history is
   - **Growth Trajectory** (0-100): Career progression rate and ambition indicators
   - **Culture Indicators** (0-100): Values alignment signals (from projects, volunteer work, writing)
   - **Overall Fit Score**: Weighted composite based on your priorities

4. **Bias Mitigation**: COCO is designed to reduce (not introduce) screening bias:
   - Evaluates skills and experience, not school prestige or company brand
   - Ignores demographic information (name, gender, age indicators)
   - Standardizes evaluation criteria across all candidates
   - Flags when shortlist lacks diversity for review

5. **Detailed Justification**: For each recommended candidate, COCO provides:
   - Why they scored high (specific skills, experiences, and achievements cited)
   - Potential concerns or gaps (with assessment of severity)
   - Suggested interview focus areas (what to explore further)
   - Comparison to other top candidates

6. **Hidden Gem Detection**: COCO specifically identifies:
   - Career changers with transferable skills
   - Candidates from non-traditional backgrounds with relevant experience
   - Overqualified candidates who might be interested for specific reasons
   - Internal candidates who match but haven't applied

**Measurable Results**

- **Screening time**: From 56 hours to 23 minutes per role (99.3% reduction)
- **Quality of shortlist**: 60% of finalists are candidates the old process would have missed
- **Time-to-hire**: Reduced by 8 days (faster screening = faster pipeline)
- **Candidate diversity**: Shortlists showed 34% more diverse candidates
- **Hiring manager satisfaction**: Improved from 3.1/5 to 4.4/5 with candidate quality
- **Cost per hire**: Reduced 27% through efficiency gains

**Who Benefits**

- **Recruiters**: Focus on relationship building and candidate experience, not resume scanning
- **Hiring Managers**: Receive better-matched shortlists faster
- **Candidates**: Fair evaluation based on actual qualifications, not keyword optimization
- **HR Leaders**: Faster, more consistent, and more equitable hiring process

---

## Practical Prompts

**Prompt 1: Screen Resumes Against Job Requirements**
```
Screen these resumes against the following job requirements and rank the top candidates.

Job title: [title]
Key requirements:
- Must have: [list non-negotiable requirements]
- Preferred: [list nice-to-have qualifications]
- Years of experience: [range]
- Industry preference: [if any]

Scoring weights:
- Technical skills match: [X]%
- Experience relevance: [X]%
- Growth trajectory: [X]%
- Culture fit indicators: [X]%

Resumes:
[paste or summarize each resume]

For each candidate, provide:
1. Overall score (0-100) with breakdown by dimension
2. Top 3 strengths relevant to this role
3. Potential concerns or gaps
4. Recommended: Advance / Maybe / Pass (with reasoning)
5. If advancing, suggested interview questions to explore gaps
```

**Prompt 2: Write a Skills-Based Screening Rubric**
```
Create a structured screening rubric for this role that evaluates skills, not pedigree.

Job description:
[paste full job description]

Build a rubric with:
1. 8-10 evaluation criteria (technical skills, soft skills, experience)
2. For each criterion: what "strong" (5), "adequate" (3), and "weak" (1) looks like
3. Weight each criterion by importance to the role (total = 100%)
4. Red flags that should auto-disqualify
5. Green flags that should fast-track
6. Guidance on avoiding common biases (school name, company prestige, employment gaps)

The rubric should be usable by any recruiter, not just domain experts.
```

**Prompt 3: Candidate Comparison Matrix**
```
Compare these final candidates side-by-side for the [role name] position.

Candidates:
1. [Name]: [brief background summary]
2. [Name]: [brief background summary]
3. [Name]: [brief background summary]

Job requirements: [paste or summarize key requirements]

Create a comparison matrix including:
1. Skills coverage (which required skills each candidate has/lacks)
2. Experience relevance (how directly their experience maps)
3. Unique strengths each candidate brings
4. Risk factors for each candidate
5. Cultural fit indicators
6. Compensation expectations alignment (if known)
7. Recommendation: Who to extend an offer to first, second, and why
8. Questions for reference checks tailored to each candidate's risk areas
```

---
