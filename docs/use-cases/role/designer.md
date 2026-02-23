# Designer

AI-powered use cases for designers and creative professionals.

## 1. AI Brand Asset Consistency Auditor

> Reduces brand compliance audit cycle from 3 weeks to 4 hours — catching 97%+ of violations automatically.

::: details Pain Point & How COCO Solves It
## Detailed Introduction

**The Pain: Brand Inconsistency Is Silent Revenue Leakage**

Large organizations with distributed teams, multiple product lines, and agency partnerships face a chronic brand consistency problem. Logos appear in wrong colors. Typography drifts across regions. Button styles diverge between product and marketing. Each deviation seems minor in isolation — but compound inconsistency erodes brand trust at scale. Studies show consumers need 5-7 brand impressions to build recognition; inconsistent assets reset that counter every time.

The audit process itself is the core bottleneck. A typical enterprise brand audit means one or two designers manually checking hundreds of assets across Figma files, marketing PDFs, social templates, pitch decks, landing pages, and email sequences. That review takes 2-4 weeks per quarter — time the design team doesn't have. Most audits are deferred, done superficially, or skipped entirely. By the time violations are caught, they've often shipped to millions of users.

The problem compounds with scale. When 50+ stakeholders across marketing, product, sales, and regional teams are producing assets, enforcing standards through ad-hoc Slack reminders and style guide PDFs is structurally impossible. The style guide itself becomes outdated as the brand evolves, and there's no system to propagate changes or check for compliance after updates.

**How COCO Solves It**

COCO's AI Brand Asset Consistency Auditor transforms brand governance from a reactive manual process into an automated, continuous compliance system.

1. **Brand Standards Ingestion**: COCO absorbs the complete brand ruleset:
   - Primary, secondary, and tertiary color codes (HEX/RGB/CMYK/Pantone)
   - Typography hierarchy (typefaces, weights, sizes, line-height ratios)
   - Logo usage rules (minimum sizes, clear space, forbidden backgrounds, prohibited modifications)
   - Spacing and grid system specifications
   - Tone-of-voice guidelines and prohibited phrases
   - Approved imagery style parameters (photography, illustration, iconography)

2. **Asset Inventory Analysis**: Given a batch of assets (images, PDFs, screenshots, Figma exports), COCO:
   - Extracts color values from every significant element
   - Identifies fonts in use and compares against approved typeface list
   - Checks logo placement, size, and surrounding clear space
   - Detects unauthorized modifications (stretched logos, recolored marks)
   - Flags layout patterns that deviate from grid specifications

3. **Violation Classification and Severity Scoring**: COCO doesn't just flag — it prioritizes:
   - **Critical**: Logo misuse, off-brand colors in hero elements, unauthorized font families
   - **Major**: Inconsistent button styles, incorrect heading hierarchy, spacing violations
   - **Minor**: Subtle color drift (within tolerance but trending), typography size inconsistencies
   - Each violation includes screenshot coordinates, rule reference, and remediation suggestion

4. **Automated Audit Report Generation**: COCO produces a structured compliance report:
   - Executive summary with overall compliance score (0-100)
   - Asset-by-asset breakdown with violation counts by severity
   - Heat map of most common violation types
   - Comparison against previous audit to show trend
   - Prioritized fix list sorted by business impact (customer-facing > internal)

5. **Style Guide Gap Detection**: COCO identifies where the style guide itself is ambiguous or incomplete:
   - Rules that are applied inconsistently (suggesting unclear guidance)
   - New use cases not covered by existing guidelines (dark mode, mobile-first, co-branding)
   - Conflicting rules that create interpretation disputes across teams
   - Produces a list of recommended style guide additions

6. **Ongoing Compliance Monitoring**: At scale, COCO enables continuous governance:
   - Automated weekly or monthly audits on a defined asset folder
   - Alerts when new asset uploads contain violations before they reach production
   - Brand change propagation: when guidelines update, auto-identify all assets needing refresh
   - Dashboard showing compliance trend over time by team and asset category

**Measurable Results**

- **Audit cycle time**: From 3 weeks manual review to **4 hours automated scan** (95% reduction)
- **Brand compliance score**: From 61% baseline to **89% within 2 quarters** of implementation
- **Violation detection rate**: Manual audits caught 34% of violations; COCO catches **97%+**
- **Designer time reclaimed**: 28–40 hours per quarter freed from audit work, **reinvested in creation**
- **Time-to-fix**: Average violation remediation from 12 days to **2 days** (fix prioritization effect)

**Who Benefits**

- **Brand Designers**: Eliminate tedious manual audit cycles and focus on creative work rather than compliance policing
- **Creative Directors**: Get objective compliance data to support brand governance decisions and cross-team accountability conversations
- **Marketing Operations Managers**: Enforce standards across agencies and regional teams without creating bottlenecks in the asset approval workflow
- **CMOs and Brand Executives**: Track brand compliance as a measurable KPI alongside campaign performance and market perception metrics

---

:::

::: details 💡 Practical Prompts

**Prompt 1: Full Brand Compliance Audit**
```
Audit the following assets against our brand guidelines and produce a structured compliance report.

Brand guidelines summary:
- Primary color: [HEX code, e.g. #0052CC]
- Secondary colors: [list HEX codes]
- Primary typeface: [font name], weights: [list approved weights]
- Secondary typeface: [font name], for [use case]
- Logo clear space: minimum [X]px on all sides at any size
- Prohibited: stretching logo, placing logo on [color/pattern], using unapproved color variants

Assets to audit: [paste screenshot descriptions or list asset names]

For each asset, report:
1. Overall compliance score (0-100)
2. Violations found (Critical / Major / Minor) with specific element and rule violated
3. Fix recommendation for each violation
4. Priority order for remediation

Output as a structured table with a summary paragraph at the end.
```

**Prompt 2: New Asset Pre-Launch Review**
```
Review this asset before it ships to production. Our brand standards are:
[paste relevant brand rules]

Asset description / screenshot: [describe or paste asset details]

Check for:
1. Color compliance (exact HEX match or within acceptable tolerance of ±5%)
2. Typography: correct typeface, weight, and size hierarchy
3. Logo usage: proper variant, minimum size met, clear space respected
4. Spacing: consistent with [X]px grid system
5. Tone of voice: headline and copy alignment with brand voice guidelines

Return: APPROVED / APPROVED WITH MINOR FIXES / REQUIRES REVISION, with specific notes for any issues.
```

**Prompt 3: Style Guide Gap Analysis**
```
I'm reviewing our brand style guide and want to identify gaps. Here are common use cases our teams encounter:

[List 10-15 scenarios, e.g.:]
- Dark mode UI components
- Co-branded materials with [partner company]
- Social media story format (9:16 vertical)
- Email signature templates
- Trade show booth graphics

Review these scenarios against our current style guide:
[paste or summarize style guide sections]

For each scenario:
1. Is it covered? (Yes / Partially / No)
2. If partially covered, what's ambiguous?
3. If not covered, what rule would you recommend adding?
4. Are there any contradictions between existing rules when applied to this scenario?

Output as a prioritized list of style guide additions/clarifications.
```

**Prompt 4: Quarterly Compliance Trend Report**
```
Generate a quarterly brand compliance executive summary based on these audit results:

Q[N] Audit data:
- Assets audited: [number]
- Compliance score: [X]% (up/down from Q[N-1]: [Y]%)
- Critical violations: [number] ([list top 3 types])
- Major violations: [number] ([list top 3 types])
- Minor violations: [number]
- Teams with most violations: [list]
- Most improved team: [team name] ([improvement %])

Write a 1-page executive summary that:
1. Opens with the headline metric and trend direction
2. Identifies the 2-3 root causes driving violations (systemic, not individual)
3. Calls out 1-2 wins to reinforce positive behavior
4. Recommends 3 specific actions for Q[N+1] with owners and deadlines
5. Ends with projected Q[N+1] target score

Tone: factual, constructive, not punitive. Audience: CMO and VP Design.
```

**Prompt 5: Agency Brief — Brand Compliance Requirements**
```
Create a brand compliance requirements brief for an external agency producing assets for [campaign name / project].

Our brand standards (summarized):
[paste key rules]

The agency will produce: [list deliverables, e.g. 10 social banners, 3 landing pages, 1 email sequence]

Generate a brief that includes:
1. Non-negotiable rules (violations that will require complete rework)
2. Preferred practices (strong recommendations but some flexibility)
3. Common mistakes to avoid (based on past violations)
4. Approval process: what we review, in what order, with what turnaround
5. File delivery specifications (format, resolution, naming convention, layered files)

Make it clear, practical, and scannable — the agency PM and designers should be able to work from this directly.
```

---
:::
