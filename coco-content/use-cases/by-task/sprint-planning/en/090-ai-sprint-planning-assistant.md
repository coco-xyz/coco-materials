# Use Case #090: AI Sprint Planning Assistant

**Role**: Developer, PM | **Industry**: SaaS-Tech | **Task**: Sprint Planning, Agile Management

---
## Detailed Introduction

**The Pain: Sprint Planning Is a 4-Hour Guessing Game**

Sprint planning is supposed to be the foundation of agile delivery. In practice, it's a 2-4 hour meeting where tired engineers argue about story points, product managers negotiate scope, and everyone leaves with commitments they privately doubt they'll meet. The data confirms the dysfunction: 58% of sprints miss their commitments, and teams that consistently over-commit burn out while teams that under-commit lose stakeholder trust.

Story point estimation is the core of the problem. Despite decades of agile practice, estimation remains stubbornly subjective. The same story gets a 3 from one developer and an 8 from another. Anchoring bias dominates planning poker — the first estimate spoken influences all subsequent ones. And historical data shows that developer estimates are systematically optimistic: the average task takes 1.5-2x longer than estimated, with the distribution heavily skewed toward underestimation.

Sprint composition is another blind spot. Teams pack sprints with feature work while tech debt accumulates silently. The result is predictable: after 4-6 sprints of deferring maintenance, the codebase degrades to the point where feature velocity drops by 30-40%. But tech debt is never prioritized because it's invisible in most planning tools and doesn't have a product sponsor.

Dependency management makes everything worse. In organizations with multiple teams, sprint commitments cascade. Team A's sprint depends on Team B delivering an API by Wednesday. But Team B's sprint is already overcommitted. Nobody realizes the conflict until mid-sprint, when blocked work creates a domino effect that derails both teams.

Capacity planning is crude at best. Most teams use a simple "number of developers x 10 points per sprint" formula that ignores vacations, meetings, on-call rotations, interviews, and the variable productivity of individuals on different types of work. The result is chronic over-commitment when the team is at reduced capacity and under-commitment when they're fully staffed.

The retrospective data that should improve future planning is rarely used. Sprint velocity history, estimation accuracy per developer, story completion patterns, and blocker frequency are all available in Jira or Linear — but nobody has time to analyze them systematically between sprints.

**How COCO Solves It**

COCO's AI Sprint Planning Assistant transforms sprint planning from a subjective debate into a data-driven process:

1. **Velocity Analysis**: COCO analyzes your team's historical sprint data — actual velocity across the last 10+ sprints, velocity by sprint composition (feature-heavy vs. maintenance-heavy), seasonal patterns, and the impact of team size changes. It generates a reliable velocity range with confidence intervals, not a single misleading number.

2. **Story Estimation**: Using your team's historical data, COCO provides AI-assisted story point estimates based on story descriptions, acceptance criteria, and similar past stories. It identifies when a story description is too vague for reliable estimation and suggests clarifying questions. Estimates include a confidence range and the specific comparable stories they're based on.

3. **Capacity Planning**: COCO calculates true available capacity by factoring in planned time off, recurring meetings, on-call schedules, interview commitments, and historical productivity patterns. It knows that your team delivers 15% less in sprints with a major release and 20% less during holiday weeks.

4. **Dependency Mapping**: COCO identifies cross-team dependencies in the sprint backlog and visualizes the critical path. It flags sprint plans where dependencies create risk — especially when dependent stories are scheduled for the same sprint with no buffer.

5. **Risk Assessment**: For each proposed sprint plan, COCO calculates a commitment confidence score based on historical accuracy, dependency risk, capacity constraints, and story complexity. A score below 70% triggers a warning with specific recommendations for de-scoping.

6. **Sprint Composition Optimization**: COCO recommends the optimal mix of feature work, tech debt, and maintenance based on your team's health metrics. It tracks tech debt accumulation and recommends allocation percentages to prevent velocity degradation.

**Measurable Results**

- **Sprint commitment accuracy improved from 42% to 87%**, building stakeholder trust and team morale
- **Planning meeting time reduced 71%**, from an average of 3.2 hours to 55 minutes
- **Estimation variance reduced 63%**, making delivery timelines more predictable
- **Tech debt addressed 3x more consistently** through data-driven allocation recommendations
- **Team velocity improved 22%** through better capacity utilization and reduced mid-sprint re-planning

**Who Benefits**

- **Developers**: Shorter, more focused planning meetings with realistic commitments that don't lead to crunch
- **Product Managers**: Predictable delivery timelines and data to support prioritization decisions with stakeholders
- **Scrum Masters**: Facilitation supported by data, less time mediating estimation debates
- **Engineering Managers**: Visibility into team health metrics, capacity trends, and delivery predictability across sprints

---

## Practical Prompts

**Prompt 1: Sprint Velocity Analysis and Forecasting**
```
Analyze our sprint velocity data and generate a forecast for the next sprint:

Historical sprint data (last 10 sprints):
[paste sprint data — sprint number, committed points, completed points, team size, notable events]

Team composition for next sprint:
- Total developers: [number]
- Planned time off: [list names and days]
- On-call duty: [name and dates]
- New team members (ramping up): [names and start dates]

Analyze:
1. Velocity Trend: Rolling average, trend direction (improving/declining/stable), and statistical variance
2. Commitment Accuracy: Ratio of completed to committed for each sprint, trend over time
3. Capacity Impact: How velocity correlates with effective team size (factoring in absences and part-timers)
4. Sprint Type Impact: How velocity differs for feature-heavy vs. maintenance-heavy vs. mixed sprints
5. Carry-Over Analysis: How much unfinished work carries over between sprints and its impact on subsequent sprint planning
6. Recommended Velocity Range: Based on the data, what should we commit to for next sprint? Provide a range (conservative / target / stretch) with probability estimates for each

Flag any concerning patterns: consistently declining velocity, growing carry-over, increasing variance.
```

**Prompt 2: AI-Assisted Story Estimation**
```
Estimate story points for the following user stories based on our team's historical data:

Team's estimation history: [paste past stories with their estimates and actual completion time/complexity]
Team's definition of story point scale: [e.g., "1=few hours, 2=half day, 3=1-2 days, 5=3-4 days, 8=full week, 13=needs splitting"]

Stories to estimate:
[paste each story with title, description, acceptance criteria, and technical notes]

For each story, provide:
1. Recommended Story Points: With confidence range (e.g., "5 points, confidence: 3-8")
2. Comparable Past Stories: 2-3 similar stories from history that inform the estimate, with their actual outcomes
3. Risk Factors: What could make this story take longer than estimated (unknowns, dependencies, complexity)
4. Missing Information: What clarifying questions should we ask before committing to this estimate
5. Splitting Recommendation: If estimated at 8+ points, suggest how to break it into smaller stories

Also flag:
- Stories where the description is too vague for reliable estimation
- Stories with hidden complexity (looks simple but has edge cases)
- Stories that appear to be duplicates or overlapping with other stories in the backlog
```

**Prompt 3: Sprint Composition Optimizer**
```
Optimize the sprint composition for our upcoming sprint:

Available velocity: [points] (based on capacity analysis)
Sprint duration: [weeks]
Sprint goal: [describe the key objective]

Candidate stories (prioritized backlog):
[paste list with — ID, title, points, type (feature/bug/tech-debt/maintenance), priority, dependencies, assigned team]

Constraints:
- Minimum [X]% of capacity for tech debt (team agreement)
- Must complete [specific stories] for upcoming release deadline
- Developer [name] is the only one who can work on [type of stories]
- Cross-team dependency: [describe dependency and timeline]

Optimize for:
1. Sprint Goal Achievement: Which stories are essential for the sprint goal?
2. Capacity Fit: Fill to 85% of velocity (leave 15% buffer for unplanned work)
3. Balance: Appropriate mix of feature work, bug fixes, tech debt, and operational tasks
4. Dependency Safety: No story should depend on another story completing in the same sprint (unless explicitly buffered)
5. Individual Workload: No developer should be assigned more than their historical throughput
6. Risk Mitigation: Front-load risky or uncertain stories in the sprint

Output: Recommended sprint backlog with rationale, risk score (1-10), and a plan B if the highest-risk story slips.
```

**Prompt 4: Cross-Team Dependency Analyzer**
```
Analyze cross-team dependencies for the upcoming sprint cycle:

Teams and their sprint plans:
Team A: [list committed stories with dependencies]
Team B: [list committed stories with dependencies]
Team C: [list committed stories with dependencies]

Shared services/platforms: [list shared components multiple teams depend on]
Sprint dates: [start and end dates]
Release date: [if applicable]

Analyze and report:
1. Dependency Map: Visual representation of which team depends on which team for what, and by when
2. Critical Path: The longest chain of dependencies that determines the minimum time to deliver the sprint goals
3. Risk Points: Dependencies where the providing team hasn't committed the required work, or has scheduled it late in the sprint
4. Conflict Detection: Cases where two teams depend on the same person/component simultaneously
5. Buffer Analysis: For each dependency, how many days of buffer exist between the expected delivery and the dependent team's need
6. Recommendations:
   - Stories that should be moved earlier in the sprint to de-risk dependencies
   - API contracts or interfaces that should be agreed upon before sprint start
   - Contingency plans for the highest-risk dependencies

Generate a dependencies calendar showing when each dependency must be resolved, with red/yellow/green status indicators.
```

**Prompt 5: Sprint Retrospective Data Analysis**
```
Analyze our sprint retrospective data to identify systemic patterns and improvements:

Sprint data (last 6 sprints):
[paste for each sprint — committed items, completed items, carry-over items, blockers encountered, team satisfaction score]

Retro feedback (categorized):
[paste aggregated feedback — what went well, what didn't, action items from each retro]

Previous action items and their status:
[paste action items and whether they were implemented]

Analyze:
1. Pattern Detection: What themes appear repeatedly across retros? Are the same problems cited sprint after sprint?
2. Action Item Effectiveness: What percentage of action items were implemented? Which ones actually improved metrics?
3. Blocker Analysis: Categorize blockers by type (dependency, technical, process, external). Which category is most impactful?
4. Team Health Trends: Is satisfaction improving or declining? Correlate with velocity, commitment accuracy, and overtime
5. Estimation Accuracy by Story Type: Are we consistently overestimating bugs and underestimating features? Identify systematic biases
6. Process Improvement ROI: For each implemented change, measure before/after impact on team metrics

Generate:
- Top 3 systemic issues with root cause analysis and recommended structural fixes
- "Quick wins" that can be implemented immediately with high impact
- Metrics dashboard showing sprint-over-sprint improvement trends
- Predicted impact of recommended changes on next sprint's velocity and accuracy
```

---
