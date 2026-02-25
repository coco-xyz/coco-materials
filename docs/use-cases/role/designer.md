# Designer

AI-powered use cases for designers and creative professionals.

## 1. AI Brand Asset Consistency Auditor

> Reduces brand compliance audit cycle from 3 weeks to 4 hours — catching 97%+ of violations automatically.

::: details Pain Point & How COCO Solves It

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

:::

::: details Results & Who Benefits

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

## 2. AI Design System Component Auditor

> Cuts design system drift detection from quarterly manual reviews to **continuous automated monitoring** — catching 94% of component violations before they ship.

::: details Pain Point & How COCO Solves It

**The Pain: Design System Entropy Is the Quiet Death of Product Consistency**

Design systems are expensive to build and even more expensive to maintain. A mature design system might define 200+ components with strict usage rules — button variants, spacing tokens, color semantics, icon sizing, typography scales. But the moment a design system launches, entropy begins. Engineers hard-code one-off overrides. Designers detach components and tweak them locally. Product teams create "temporary" variants for a launch that never get reconciled. Within two quarters, the gap between the canonical system and what's actually deployed becomes a chasm.

The cost isn't just aesthetic. Inconsistent components mean inconsistent behavior — a primary button that looks different across three product areas trains users to distrust interface patterns. Accessibility suffers because overridden components skip the accessible color contrast and focus states built into the canonical version. And every custom variant adds maintenance debt: when the design system team ships an update, detached instances don't inherit the change. The team spends more time firefighting drift than evolving the system.

Manual audits don't scale. A design system team of 3-5 people cannot monitor hundreds of screens across dozens of product surfaces. They rely on engineers and designers to self-report deviations — which rarely happens. Quarterly "component health checks" catch only the most obvious violations, weeks after they've already shipped to production and become entrenched in the codebase.

**How COCO Solves It**

COCO's AI Design System Component Auditor turns design system governance from a periodic manual exercise into continuous, automated compliance enforcement.

1. **Component Specification Ingestion**: COCO absorbs the full design system definition:
   - Component taxonomy (atoms, molecules, organisms) with naming conventions
   - Property specifications per component (size variants, color tokens, padding values, border radii)
   - Usage rules and constraints (where each component should and should not be used)
   - Composition rules (which components can nest inside which)
   - Deprecated components and their approved replacements

2. **Implementation Scanning and Matching**: COCO analyzes production screens or Figma files against the canonical system:
   - Identifies every component instance on a given screen
   - Matches each instance to its closest canonical component definition
   - Detects property deviations (wrong color token, non-standard padding, missing state variants)
   - Flags fully detached or unrecognized components that exist outside the system
   - Maps component usage patterns to identify where unofficial variants have emerged

3. **Drift Classification and Impact Assessment**: COCO categorizes each deviation by severity and blast radius:
   - **Critical**: Component behaves differently than canonical version (broken interactions, missing accessible states)
   - **High**: Visual deviation on customer-facing surfaces (wrong tokens, custom overrides)
   - **Medium**: Internal tool deviations or minor property mismatches
   - **Low**: Cosmetic drift within acceptable tolerance thresholds
   - Each violation includes the specific property, expected value, actual value, and screen location

4. **Automated Compliance Dashboard**: COCO generates a living health report for the design system:
   - Overall adoption score by product area (percentage of screens using canonical components)
   - Component-level compliance rates (which components have the most drift)
   - Trend analysis showing drift acceleration or deceleration over time
   - Top violating teams or product surfaces with specific examples
   - Estimated engineering hours to remediate current drift backlog

5. **Variant Rationalization Recommendations**: COCO identifies opportunities to consolidate unofficial variants:
   - Clusters similar custom components that could be unified into a new canonical variant
   - Detects patterns where the same override appears across multiple teams (signals a missing system feature)
   - Proposes design system additions based on actual usage patterns rather than theoretical needs
   - Calculates adoption probability for proposed new variants based on current usage data

6. **Pre-Merge Compliance Gating**: COCO enables shift-left quality enforcement:
   - Reviews Figma designs before handoff to flag non-system components
   - Checks pull requests for hard-coded style values that should use design tokens
   - Provides real-time feedback during design reviews with inline violation annotations
   - Generates a compliance certificate for each release with pass/fail status and exception list

:::

::: details Results & Who Benefits

**Measurable Results**

- **Drift detection speed**: From quarterly manual audits to **continuous monitoring with real-time alerts** (100% cycle reduction)
- **Component compliance rate**: From 58% baseline to **91% within 3 months** of deployment
- **Unauthorized variant count**: Reduced from 340+ custom overrides to **fewer than 45** across all product surfaces
- **Design system team productivity**: **60% less time** spent on compliance policing, reinvested in system evolution and new component development
- **Accessibility regression rate**: Component-level a11y violations down **78%** due to canonical component enforcement

**Who Benefits**

- **Design System Engineers**: Shift from reactive drift cleanup to proactive system evolution, with data-driven evidence for prioritizing new components
- **Product Designers**: Get immediate feedback when they deviate from the system, reducing rework cycles and accelerating design-to-handoff timelines
- **Front-End Engineers**: Clear guidance on correct component usage eliminates ambiguity and reduces code review debates about styling decisions
- **VP of Design / Head of Product**: Quantifiable design consistency metrics to report alongside product KPIs, proving the ROI of design system investment

---

:::

::: details 💡 Practical Prompts

**Prompt 1: Full Design System Compliance Audit**
```
Audit the following screens against our design system specifications and produce a component compliance report.

Design system specs:
- Component library: [name, e.g. "Meridian Design System v3.2"]
- Primary button: [color token], [border-radius], [padding], [font-weight], [min-height]
- Secondary button: [specs]
- Input fields: [specs for default, focus, error, disabled states]
- Card component: [specs for padding, shadow, border-radius, header typography]
- Spacing scale: [4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px]
- Color tokens: [list semantic tokens — e.g. $color-action-primary = #0052CC]

Screens to audit: [paste screenshots or describe screens]

For each screen, report:
1. Total component instances found
2. Canonical matches vs. detached/custom instances
3. Property-level violations (component, property, expected, actual)
4. Severity classification (Critical / High / Medium / Low)
5. Recommended fix for each violation

Output as a structured table grouped by severity, with a summary compliance score (0-100) per screen.
```

**Prompt 2: Design Token Usage Validation**
```
Review the following code snippets or stylesheets and identify any hard-coded values that should use design tokens.

Our design token set:
- Colors: [list token names and values, e.g. $color-text-primary: #1A1A2E]
- Spacing: [list token names and values]
- Typography: [list token names for font-size, line-height, font-weight]
- Shadows: [list elevation tokens]
- Border-radius: [list radius tokens]

Code to review:
[paste CSS/SCSS/styled-components/Tailwind classes]

For each violation:
1. Line number and file
2. Hard-coded value found
3. Correct design token to use
4. Risk level (High = customer-facing, Medium = internal, Low = edge case)

Also flag any tokens being used incorrectly (e.g. using a background color token for text color).
```

**Prompt 3: Custom Component Variant Analysis**
```
We've identified [N] custom component variants in our codebase that don't match canonical design system components. Help us rationalize them.

Custom variants found:
[List each with: name/description, where it's used, how it differs from the nearest canonical component]

Canonical components in our system:
[List relevant canonical components with their defined variants]

For each custom variant, recommend one of:
1. CONSOLIDATE: Map to an existing canonical variant (explain which one and what minor adjustments are needed)
2. PROMOTE: Add as a new official variant to the design system (justify based on usage frequency and use case validity)
3. DEPRECATE: Remove and replace with canonical alternative (provide migration path)
4. EXCEPTION: Keep as a justified one-off (explain why it can't fit the system)

Output a migration plan sorted by impact (most instances first), with estimated effort per item.
```

**Prompt 4: Design System Adoption Report**
```
Generate a monthly design system adoption report for leadership based on the following data:

Metrics:
- Total screens audited: [number]
- Overall compliance score: [X]% (previous month: [Y]%)
- Component adoption by category:
  - Buttons: [X]% compliant
  - Forms: [X]% compliant
  - Navigation: [X]% compliant
  - Cards/Containers: [X]% compliant
  - Typography: [X]% compliant
- Custom overrides count: [number] (trend: up/down [Z]%)
- Teams with highest compliance: [list]
- Teams with lowest compliance: [list]
- New components added to system this month: [list]

Write a 1-page report that:
1. Leads with the headline compliance trend and what's driving it
2. Highlights 2 wins (teams or product areas showing improvement)
3. Identifies 2 areas of concern with root cause analysis
4. Recommends 3 specific actions for next month with owners
5. Includes a "design system health score" (composite metric)

Tone: data-driven, collaborative, focused on enablement rather than enforcement. Audience: VP Design, Engineering leads.
```

**Prompt 5: Pre-Handoff Design Review Checklist**
```
Review this design file before engineering handoff and verify it meets our design system standards.

Design system requirements:
- All interactive elements must use canonical components from [library name]
- Spacing must follow [X]px base grid
- Colors must reference semantic tokens (no raw hex values in specs)
- Typography must use defined type scale (no custom font sizes)
- All states must be specified: default, hover, focus, active, disabled, error (where applicable)
- Responsive behavior must be documented for breakpoints: [list breakpoints]

Design to review: [paste or describe design]

Check and report:
1. Component coverage: What percentage of UI elements map to canonical components?
2. Missing states: Which interactive elements lack required state definitions?
3. Spacing violations: Where does spacing deviate from the grid?
4. Token compliance: Any raw values that should be tokens?
5. Handoff readiness score: Ready / Needs Minor Fixes / Not Ready

Provide a checklist the designer can use to fix issues before handoff.
```

---
:::

## 3. AI Responsive Design QA Engine

> Reduces responsive design QA from 2 days of manual testing to **35 minutes of automated scanning** — detecting 96% of layout breakage across all breakpoints.

::: details Pain Point & How COCO Solves It

**The Pain: Responsive Breakage Ships Silently and Costs Conversions**

Responsive design is no longer optional — over 60% of global web traffic comes from mobile devices, and users encounter products on everything from 320px phone screens to 3840px ultra-wide monitors. Yet responsive QA remains one of the most tedious, error-prone processes in product development. A single page with 5 major breakpoints and 3 orientations requires 15+ manual checks. A product with 40 pages means 600+ visual inspections per release. No team does this comprehensively.

The result is predictable: layout issues ship to production. Text overflows containers on small screens. Horizontal scroll appears on tablet viewports. Navigation menus overlap content at awkward intermediate breakpoints. Touch targets shrink below usable size on mobile. Hero images stretch or crop incorrectly. These aren't edge cases — they're the everyday reality of responsive web development. Each broken layout erodes user trust and directly impacts conversion rates; studies show that 57% of users won't recommend a business with a poorly designed mobile site.

The testing bottleneck is structural. Manual responsive QA requires a designer or QA engineer to resize a browser window (or use device emulators), visually scan every element, document issues with screenshots and annotations, and file tickets. This is cognitively exhausting, easy to miss things, and impossible to do consistently across every release. Automated visual regression tools help with pixel-level comparison but miss semantic issues — they can't tell if a layout is "technically rendering" but functionally broken (e.g., a button that's visible but positioned off-screen on mobile).

**How COCO Solves It**

COCO's AI Responsive Design QA Engine automates layout validation across every breakpoint, combining visual analysis with semantic understanding to catch issues that both humans and traditional automation miss.

1. **Breakpoint Configuration and Device Matrix**: COCO ingests the product's responsive strategy:
   - Defined breakpoints (e.g., 320px, 480px, 768px, 1024px, 1280px, 1440px, 1920px)
   - Target device profiles with viewport dimensions, pixel ratios, and safe areas
   - Orientation rules (portrait-only, landscape-only, or both per breakpoint)
   - Component-specific responsive behavior rules (e.g., navigation collapses to hamburger below 768px)
   - Critical user flows that must remain functional at every breakpoint

2. **Automated Multi-Breakpoint Rendering and Analysis**: For each page or component, COCO:
   - Renders the layout at every defined breakpoint simultaneously
   - Identifies text overflow, truncation, and content clipping issues
   - Detects horizontal scroll on viewports where it shouldn't exist
   - Checks touch target sizes against minimum accessibility standards (48x48px)
   - Validates image scaling, aspect ratios, and art direction across breakpoints
   - Flags z-index stacking issues where elements overlap incorrectly

3. **Semantic Layout Validation**: Beyond pixel-level checks, COCO understands layout intent:
   - Verifies content hierarchy is maintained across breakpoints (H1 stays above H2, CTAs remain prominent)
   - Checks that navigation patterns transition correctly (desktop nav to mobile hamburger)
   - Validates that interactive elements remain reachable and functional (not hidden behind overlapping content)
   - Confirms reading order makes sense when layouts reflow from multi-column to single-column
   - Detects "zombie states" — elements that render but are functionally inaccessible

4. **Regression Detection Across Releases**: COCO compares current responsive behavior against previous baselines:
   - Tracks layout changes between releases at each breakpoint
   - Distinguishes intentional redesigns from accidental regressions
   - Highlights new breakage introduced by code changes (CSS specificity wars, container query side effects)
   - Maintains a history of responsive health scores per page over time
   - Generates a "responsive risk score" for each pull request based on CSS changes

5. **Issue Prioritization and Developer-Ready Reports**: COCO produces actionable output:
   - Issues ranked by viewport traffic share (breakages at popular breakpoints rank higher)
   - Each issue includes before/after screenshots, affected breakpoint, and CSS element selector
   - Suggested fixes with specific CSS properties and values to change
   - Grouped by root cause (a single CSS issue may cause breakage at multiple breakpoints)
   - Effort estimates (quick fix vs. requires layout refactor)

6. **Continuous Responsive Monitoring**: For production environments, COCO enables ongoing vigilance:
   - Scheduled weekly responsive scans of critical user flows
   - Alerts when new deployments introduce responsive regressions
   - Performance-aware scanning that flags layouts causing layout shift (CLS) spikes on mobile
   - Integration with analytics to correlate responsive issues with conversion drop-offs
   - Dashboard showing responsive health trends across the entire product surface

:::

::: details Results & Who Benefits

**Measurable Results**

- **QA cycle time**: From 2 days of manual responsive testing to **35 minutes of automated scanning** (97% reduction)
- **Breakage detection rate**: Manual QA caught 41% of responsive issues; COCO catches **96%** including subtle intermediate breakpoint failures
- **Mobile conversion impact**: Responsive fixes driven by COCO increased mobile conversion by **12-18%** within 6 weeks
- **Production incidents**: Responsive-related support tickets decreased **73%** after continuous monitoring deployment
- **Developer efficiency**: Average time to fix responsive issues reduced from 4 hours to **45 minutes** due to precise root cause identification

**Who Benefits**

- **UI/UX Designers**: Validate that responsive designs translate faithfully to implementation without spending hours manually checking every breakpoint
- **Front-End Engineers**: Receive specific, actionable issue reports with CSS selectors and fix suggestions instead of vague "it looks weird on mobile" tickets
- **QA Engineers**: Eliminate the most tedious part of manual testing and focus on behavioral and interaction testing that requires human judgment
- **Product Managers**: Ship with confidence that the product works on every device, backed by quantifiable responsive health metrics

---

:::

::: details 💡 Practical Prompts

**Prompt 1: Full Responsive Layout Audit**
```
Perform a responsive design audit on the following page/component across all defined breakpoints.

Breakpoints to test:
- Mobile: 320px, 375px, 414px (portrait and landscape)
- Tablet: 768px, 1024px (portrait and landscape)
- Desktop: 1280px, 1440px, 1920px

Page/Component: [describe or paste screenshot at desktop width]

Expected responsive behavior:
- Navigation: [describe expected behavior per breakpoint, e.g. "hamburger menu below 768px"]
- Grid: [describe column changes, e.g. "4-col → 2-col → 1-col"]
- Images: [describe scaling behavior]
- Typography: [describe any fluid type scaling]

For each breakpoint, report:
1. Layout status: PASS / WARN / FAIL
2. Issues found with severity (Critical / Major / Minor)
3. Specific element, CSS property, and expected vs. actual behavior
4. Screenshot annotation of the issue location
5. Suggested fix (CSS property + value)

Provide a summary table and overall responsive health score (0-100).
```

**Prompt 2: Mobile-First Conversion Flow Check**
```
Audit the following critical user flow for mobile usability issues that could impact conversion.

Flow: [describe the flow, e.g. "Landing page → Product page → Add to cart → Checkout → Confirmation"]
Target device: [e.g. iPhone 14 Pro, 393x852px, 3x pixel ratio]

For each step in the flow, check:
1. Touch targets: All interactive elements ≥ 48x48px tap area
2. Content visibility: No critical content below the fold or hidden by overlapping elements
3. Form usability: Input fields properly sized, keyboard type matches input type, labels visible
4. CTA prominence: Primary action button visible without scrolling on initial load
5. Loading layout: No significant layout shift (CLS < 0.1) during page load
6. Scroll behavior: No unintended horizontal scroll, smooth vertical scroll

Report issues as a prioritized list with:
- Impact on conversion (High / Medium / Low)
- Specific element and what's wrong
- Recommended fix
- Estimated effort (Quick fix / Moderate / Requires redesign)
```

**Prompt 3: Responsive Regression Analysis**
```
Compare responsive behavior between two versions of a page and identify regressions.

Previous version (baseline): [describe or paste screenshots at key breakpoints]
Current version (new): [describe or paste screenshots at key breakpoints]

Breakpoints to compare: [list breakpoints]

For each breakpoint:
1. Has the layout changed? (Yes / No)
2. If yes, is the change intentional (redesign) or accidental (regression)?
3. Regression details: what broke, where, and likely cause
4. Severity: Critical (functionality lost) / Major (visual breakage) / Minor (cosmetic)

Output a regression report with:
- Total regressions found per breakpoint
- Root cause analysis (which CSS changes likely caused the regressions)
- Prioritized fix list
- Estimated total remediation effort
```

**Prompt 4: Intermediate Breakpoint Stress Test**
```
Test this layout at non-standard viewport widths to find "in-between" breakpoint failures.

Standard breakpoints defined: [list, e.g. 768px, 1024px, 1280px]

Test at these intermediate widths: 800px, 850px, 900px, 950px, 1000px, 1050px, 1100px, 1150px, 1200px, 1250px

Page/Component: [describe]

For each intermediate width, report:
1. Does the layout hold? (Yes / No / Partial)
2. What breaks: text overflow, image distortion, element overlap, spacing collapse
3. Is the issue caused by a missing breakpoint or a fluid sizing error?
4. Recommended fix: add breakpoint at [X]px, or use fluid sizing (clamp/min/max) instead

Identify the most critical "dead zones" between breakpoints that need attention.
```

**Prompt 5: Responsive Component Library Validation**
```
Audit our component library for responsive readiness. Each component should work correctly at all breakpoints without requiring page-level overrides.

Components to test:
[List components, e.g.:]
- Header/Navigation bar
- Hero section
- Card grid (2-col, 3-col, 4-col variants)
- Data table
- Modal/Dialog
- Footer

For each component:
1. Does it handle all breakpoints using only its own styles? (Yes / No / Partially)
2. At which breakpoints does it break or require external overrides?
3. Does it use responsive best practices? (fluid widths, min/max constraints, container queries)
4. Accessibility at mobile: touch targets, readable text, operable controls
5. Performance: does it cause layout shift during viewport changes?

Rate each component: Responsive-Ready / Needs Improvement / Not Responsive
Provide a prioritized remediation plan for non-ready components.
```

---
:::

## 4. AI Accessibility Compliance Checker

> Catches **92% of WCAG 2.1 AA violations** at the design stage — preventing accessibility debt before a single line of code is written.

::: details Pain Point & How COCO Solves It

**The Pain: Accessibility Is Treated as a Retrofit Instead of a Design Requirement**

Accessibility compliance isn't optional — it's a legal requirement in most markets (ADA, EAA, AODA, Section 508) and a moral imperative for inclusive design. Yet the overwhelming majority of accessibility issues originate in the design phase and are only discovered during development or post-launch audits. By that point, fixing them requires redesigning components, rewriting code, and retesting — at 10-30x the cost of catching the issue during design.

The root cause is a skills and tooling gap. Most designers understand accessibility conceptually but lack the expertise to evaluate their designs against the 78 success criteria in WCAG 2.1 AA. Color contrast checkers exist, but they only cover one dimension. Typography sizing, touch target dimensions, focus indicator design, reading order, animation safety, alternative text strategy, form error handling patterns — these all have specific WCAG requirements that designers rarely check comprehensively. Design tools like Figma have basic contrast plugins but nothing that evaluates a full design against the complete WCAG specification.

The consequence is systematic accessibility debt. Organizations discover during annual audits that hundreds of design decisions created compliance gaps. Engineering teams face a backlog of retroactive fixes competing with feature work. And users with disabilities encounter broken experiences that could have been prevented. The most expensive accessibility bugs are the ones that require layout-level redesigns — precisely the kind that originate in early design decisions.

**How COCO Solves It**

COCO's AI Accessibility Compliance Checker embeds WCAG evaluation directly into the design workflow, enabling designers to catch and fix compliance issues before handoff to engineering.

1. **WCAG Specification Mapping**: COCO maintains a comprehensive mapping of design-relevant WCAG criteria:
   - Color contrast requirements for text, interactive elements, and graphical objects (1.4.3, 1.4.6, 1.4.11)
   - Text sizing and spacing requirements (1.4.4, 1.4.8, 1.4.12)
   - Touch target minimum dimensions (2.5.5, 2.5.8)
   - Focus indicator visibility specifications (2.4.7, 2.4.11, 2.4.13)
   - Motion and animation safety thresholds (2.3.1, 2.3.3)
   - Content structure and heading hierarchy requirements (1.3.1, 2.4.6)
   - Form labeling and error identification patterns (1.3.5, 3.3.1, 3.3.2)

2. **Design File Analysis**: Given a design (Figma export, screenshot, or description), COCO:
   - Extracts all color combinations and checks foreground/background contrast ratios
   - Measures text sizes against minimum requirements (16px body, 12px minimum for non-decorative)
   - Validates touch/click target dimensions against 44x44px (AA) or 24x24px (minimum) thresholds
   - Checks focus indicator design against 2px minimum width and 3:1 contrast requirements
   - Evaluates heading hierarchy for correct nesting (no skipped levels)
   - Assesses form designs for visible labels, error states, and help text placement

3. **Violation Severity and Legal Risk Classification**: COCO prioritizes issues by compliance impact:
   - **Level A violations**: Fundamental barriers that prevent access entirely (missing alt text strategy, no keyboard focus indicators, insufficient contrast on critical elements)
   - **Level AA violations**: Significant barriers that impair usability (contrast below 4.5:1 for normal text, touch targets below 44px, missing error identification)
   - **Level AAA recommendations**: Best-practice enhancements (enhanced contrast 7:1, extended touch targets 48px, sign language provisions)
   - Legal risk assessment based on jurisdiction (ADA litigation frequency by violation type)

4. **Automated Fix Suggestions with Design Tokens**: COCO doesn't just flag problems — it proposes solutions:
   - Suggests accessible color alternatives that maintain brand identity (nearest accessible color in the brand palette)
   - Recommends specific type scale adjustments to meet sizing requirements
   - Provides focus indicator design patterns that meet WCAG 2.4.11 requirements
   - Generates accessible component state specifications (hover, focus, active, disabled, error)
   - Offers layout adjustments to increase touch target sizes without breaking visual rhythm

5. **Inclusive Design Pattern Library**: COCO references established accessible design patterns:
   - Navigation patterns (skip links, landmark regions, breadcrumb accessibility)
   - Form patterns (inline validation, error summary, required field indication)
   - Modal and dialog patterns (focus trap, return focus, escape dismissal)
   - Data visualization patterns (colorblind-safe palettes, text alternatives for charts)
   - Motion patterns (reduced-motion alternatives, pause controls, safe animation durations)

6. **Compliance Tracking and Reporting**: COCO enables ongoing accessibility governance:
   - Per-design compliance scorecard against WCAG 2.1 AA (with optional AAA scoring)
   - Historical tracking of compliance improvement across design iterations
   - Team-level accessibility maturity metrics
   - Pre-development compliance certificate to attach to handoff documentation
   - Audit trail showing which criteria were checked, when, and by whom

:::

::: details Results & Who Benefits

**Measurable Results**

- **Design-stage violation detection**: **92% of WCAG AA violations** caught before engineering handoff (vs. 15% without automated checking)
- **Remediation cost savings**: Average cost-per-fix drops from **$12,000 post-launch to $320 at design stage** (97% reduction)
- **Compliance audit pass rate**: First-pass WCAG audit score improved from 47% to **88%** within one quarter
- **Legal risk exposure**: Accessibility-related legal complaints reduced **85%** year-over-year after implementation
- **Time to compliance**: New feature time-to-WCAG-AA from 6 weeks of retrofitting to **built-in from day one**

**Who Benefits**

- **Product Designers**: Build accessibility into designs naturally with real-time feedback, rather than learning WCAG criteria from dense specification documents
- **Accessibility Specialists**: Spend less time on basic violation detection and more on complex inclusive experience design and user research
- **Engineering Teams**: Receive designs that are already accessibility-compliant, eliminating the cycle of build-discover-rebuild that wastes sprint velocity
- **Legal and Compliance Officers**: Demonstrate proactive accessibility governance with audit trails, reducing litigation risk and regulatory exposure

---

:::

::: details 💡 Practical Prompts

**Prompt 1: Full WCAG 2.1 AA Design Audit**
```
Audit this design against WCAG 2.1 AA success criteria and produce an accessibility compliance report.

Design: [paste or describe the design, including colors, typography, layout, interactive elements]

Check against these WCAG criteria:
- 1.4.3 Contrast (Minimum): Text contrast ratio ≥ 4.5:1 (normal), ≥ 3:1 (large)
- 1.4.11 Non-text Contrast: UI components and graphical objects ≥ 3:1 contrast
- 2.5.5 Target Size: Touch/click targets ≥ 44x44px
- 2.4.7 Focus Visible: All interactive elements have visible focus indicators
- 1.3.1 Info and Relationships: Heading hierarchy is correct, no skipped levels
- 3.3.2 Labels or Instructions: All form inputs have visible labels
- 1.4.4 Resize Text: Text can scale to 200% without loss of content

For each criterion:
1. Status: PASS / FAIL / NEEDS REVIEW
2. Specific elements affected
3. Current value vs. required value (e.g. contrast ratio 2.8:1, required 4.5:1)
4. Fix recommendation with specific values
5. Legal risk: High / Medium / Low

Output an overall compliance score and prioritized fix list.
```

**Prompt 2: Color Contrast Analysis with Brand-Safe Alternatives**
```
Analyze all color combinations in this design for WCAG contrast compliance and suggest accessible alternatives that stay within our brand palette.

Color palette:
- Background colors: [list with HEX values]
- Text colors: [list with HEX values]
- Interactive element colors: [list with HEX values]
- Accent/highlight colors: [list with HEX values]

Current color usage in design:
[Describe which colors are used where — e.g. "#667085 text on #FFFFFF background for body copy"]

For each color combination:
1. Current contrast ratio
2. Required ratio (4.5:1 for normal text, 3:1 for large text, 3:1 for non-text elements)
3. PASS or FAIL
4. If FAIL: suggest the nearest color from our palette that achieves compliance
5. If no palette color works: suggest a new color that's visually closest to the intended brand color while meeting contrast requirements

Output a color compliance matrix and a recommended accessible color mapping.
```

**Prompt 3: Interactive Component Accessibility Specification**
```
Generate a complete accessibility specification for this interactive component.

Component: [describe — e.g. "dropdown select menu with search, multi-select, and tag display"]

Generate specifications for:
1. ARIA roles and properties (role, aria-label, aria-expanded, aria-selected, etc.)
2. Keyboard interaction model:
   - How to open/close
   - How to navigate options
   - How to select/deselect
   - How to dismiss
3. Focus management:
   - Initial focus on open
   - Focus movement during interaction
   - Focus return on close
4. Screen reader announcements:
   - What's announced on open
   - How options are announced
   - How selection changes are communicated
   - Error state announcements
5. Visual states that must be designed:
   - Default, hover, focus, active, selected, disabled, error
   - Focus indicator specs (minimum 2px, 3:1 contrast)
   - Selected state indicator (not color-only)

Output as a specification document a designer and engineer can both reference.
```

**Prompt 4: Accessibility Remediation Priority Matrix**
```
We've completed an accessibility audit and found the following violations. Help us prioritize remediation.

Violations found:
[List each violation with: criterion, description, affected pages/components, severity]

For prioritization, consider:
1. Legal risk: Which violations are most commonly cited in ADA lawsuits?
2. User impact: Which violations completely block access vs. merely inconvenience?
3. Affected population: How many users are impacted (consider disability prevalence data)?
4. Fix complexity: Quick CSS fix vs. component redesign vs. architectural change?
5. Dependencies: Which fixes must happen before others?

Output a remediation roadmap with:
- Sprint 1 (critical, must-fix): [items]
- Sprint 2 (high-impact, moderate effort): [items]
- Sprint 3 (medium-impact, higher effort): [items]
- Backlog (nice-to-have, complex): [items]

Include estimated effort hours per item and total effort per sprint.
```

**Prompt 5: Inclusive Design Review Checklist**
```
Review this design for inclusive design considerations beyond WCAG compliance.

Design: [describe]
Target audience: [describe user demographics]

Evaluate against these inclusive design dimensions:
1. Visual: Does it work for colorblind users? (protanopia, deuteranopia, tritanopia simulations)
2. Motor: Can all actions be completed without precise mouse movements? (Fitts's law considerations)
3. Cognitive: Is the information architecture clear? Are error messages helpful? Is cognitive load managed?
4. Situational: Does it work in bright sunlight? On a shaky bus? With one hand? While distracted?
5. Technical: Does it work on slow connections? Old devices? Small screens?
6. Cultural: Are icons universally understood? Are there cultural assumptions in the design?

For each dimension:
- Current score: Good / Needs Improvement / Poor
- Specific issues found
- Recommendation with design example or reference
- Priority: Must-fix / Should-fix / Nice-to-have

Output as a design review scorecard with actionable next steps.
```

---
:::

## 5. AI Design-to-Code Fidelity Validator

> Reduces design-to-code discrepancy resolution from **5 days of back-and-forth** to **2-hour automated comparison** — achieving 98% pixel-level fidelity on first implementation.

::: details Pain Point & How COCO Solves It

**The Pain: What Gets Designed Is Not What Gets Built**

The handoff from design to engineering is the single largest source of visual quality loss in product development. Studies across product organizations show that first-pass implementations match designs with only 60-75% fidelity. Spacing is off by a few pixels. Colors are approximated rather than exact. Font weights differ subtly. Border radii don't match. Shadows are heavier or lighter than specified. Each individual discrepancy is small, but the aggregate effect is a product that feels "off" — less polished, less trustworthy, less premium than the design intended.

The root cause is a communication gap compounded by workflow friction. Designers specify exact values in Figma (8px padding, #1A1A2E color, 600 font-weight, 4px border-radius), but by the time these traverse design specs, component libraries, CSS frameworks, and responsive adaptations, drift is inevitable. Engineers interpret spacing visually rather than measuring. Color tokens may have slightly different hex values than the design file. Responsive adjustments override carefully specified desktop layouts. And without a systematic way to compare the implemented UI against the original design, discrepancies accumulate silently.

The review process itself is broken. Designers compare screenshots of the implementation against their Figma files by toggling between tabs and squinting at differences. This is unreliable for subtle deviations — the human eye adapts and normalizes small differences. The resulting "design QA" cycle involves filing tickets like "spacing looks off on the card component," which the engineer then spends 30 minutes trying to understand. Three rounds of back-and-forth per component, across 20 components per release, adds up to days of lost productivity — and the result is still imperfect.

**How COCO Solves It**

COCO's AI Design-to-Code Fidelity Validator automates the comparison between design files and implemented UIs, catching every discrepancy down to the sub-pixel level and generating developer-ready fix instructions.

1. **Design Source Ingestion**: COCO captures the design intent with full fidelity:
   - Parses Figma/Sketch design files to extract exact specifications (colors, spacing, typography, effects)
   - Captures component hierarchy and auto-layout rules
   - Records responsive variants and breakpoint-specific designs
   - Extracts design tokens and maps them to expected CSS/code values
   - Handles complex specifications including gradients, blend modes, and composite effects
   - Preserves z-order, opacity, and layering information

2. **Implementation Capture and Normalization**: COCO screenshots the built interface and prepares for comparison:
   - Renders the implemented page at the exact viewport dimensions matching the design
   - Captures computed CSS values for every visible element (not just what's in the stylesheet)
   - Accounts for browser rendering differences (anti-aliasing, sub-pixel rendering, font smoothing)
   - Normalizes platform-specific rendering artifacts that designers shouldn't worry about
   - Captures interactive states (hover, focus, active) when specified in the design

3. **Multi-Layer Comparison Engine**: COCO compares designs and implementations across multiple dimensions:
   - **Pixel overlay**: Exact visual diff highlighting every pixel that differs between design and implementation
   - **Property comparison**: Element-by-element comparison of spacing, colors, typography, borders, shadows, and effects
   - **Layout analysis**: Alignment, distribution, and relative positioning between elements
   - **Typography audit**: Font family, weight, size, line-height, letter-spacing, and text color for every text element
   - **Responsive fidelity**: Comparison repeated at every breakpoint with breakpoint-specific designs

4. **Intelligent Discrepancy Classification**: Not all differences matter equally — COCO prioritizes:
   - **Critical**: Wrong color, wrong font family, missing elements, broken layout structure
   - **Major**: Spacing off by >4px, wrong font weight, incorrect border radius, shadow mismatch
   - **Minor**: 1-2px spacing drift, sub-pixel rendering differences, platform-specific anti-aliasing
   - **Acceptable**: Differences within defined tolerance thresholds (e.g., ±1px spacing, ±2% color)
   - Context-aware: the same 4px spacing error on a hero section is more critical than in a footer

5. **Developer-Ready Fix Instructions**: COCO generates precise, actionable remediation:
   - Exact CSS properties to change with current value and target value
   - Element selectors (class names, data attributes, or DOM path) for each discrepancy
   - Grouped by component so developers can fix all issues in one file at a time
   - Before/after visual preview of what the fix will look like
   - Auto-generated code snippets for common frameworks (React, Vue, Tailwind, CSS Modules)

6. **Continuous Fidelity Monitoring**: COCO prevents regression and tracks improvement:
   - Post-fix verification scan confirms all issues were resolved
   - Release-over-release fidelity tracking shows whether design-to-code quality is improving or degrading
   - Integration with CI/CD pipelines to flag fidelity regressions before merging
   - Fidelity score per component in the design system (highlights components that consistently drift)
   - Historical comparison showing how fidelity has evolved across product releases

:::

::: details Results & Who Benefits

**Measurable Results**

- **Design QA cycle time**: From 5 days of designer-engineer back-and-forth to **2-hour automated comparison and fix generation** (95% reduction)
- **First-pass fidelity**: Implementation accuracy increased from 68% to **98% pixel-level match** after adopting COCO's validator
- **Design QA tickets**: Reduced from 45 per release to **fewer than 5** requiring manual designer review
- **Engineering rework hours**: **32 hours saved per sprint** previously spent on "make it match the design" iterations
- **Visual consistency score**: Cross-product visual consistency improved from 71% to **95%** as measured by automated fidelity scans

**Who Benefits**

- **Product Designers**: Confidence that their designs are faithfully implemented without spending days doing visual QA and filing pixel-level tickets
- **Front-End Engineers**: Clear, unambiguous fix instructions with exact CSS values instead of vague "it doesn't look right" feedback that requires interpretation
- **Design System Teams**: Data on which components consistently drift, enabling them to improve handoff documentation and component specifications
- **Product Managers**: Faster release cycles and higher visual quality without expanding the QA team or adding design review bottlenecks

---

:::

::: details 💡 Practical Prompts

**Prompt 1: Full Design-to-Code Fidelity Comparison**
```
Compare this implemented UI against the original design and produce a fidelity report.

Original design specifications:
- Background: [color]
- Primary text: [font-family], [font-weight], [font-size]/[line-height], [color]
- Secondary text: [specs]
- Primary button: [background], [text-color], [padding], [border-radius], [font specs]
- Card component: [padding], [background], [border], [shadow], [border-radius]
- Spacing between elements: [specify key spacing values]
- Layout: [describe grid/flexbox layout and alignment]

Implementation screenshot: [paste or describe what was built]

For each element, compare:
1. Color: Design value vs. implemented value (flag if ΔE > 2)
2. Spacing: Design value vs. implemented value in px (flag if difference > 2px)
3. Typography: All properties (family, weight, size, line-height, letter-spacing, color)
4. Borders and shadows: Exact property comparison
5. Layout: Alignment, distribution, ordering

Output a discrepancy table with: Element | Property | Design Value | Actual Value | Difference | Severity
Include overall fidelity score (0-100) and prioritized fix list.
```

**Prompt 2: Component-Level Fidelity Deep Dive**
```
Perform a detailed fidelity comparison for a single component across all its states and variants.

Component: [name, e.g. "Primary Button"]

Design specifications per variant:
- Default: [all CSS properties]
- Hover: [changed properties]
- Focus: [changed properties]
- Active: [changed properties]
- Disabled: [changed properties]
- Loading: [changed properties, including animation specs]
- Size variants: Small [specs], Medium [specs], Large [specs]

Implementation: [describe or paste screenshots of each state/variant]

For each variant and state:
1. Visual match score (0-100)
2. Property-by-property comparison table
3. Transition/animation timing comparison (if applicable)
4. Flag any states that are missing in implementation

Output a component fidelity card with pass/fail per variant and overall component health score.
```

**Prompt 3: Responsive Fidelity Multi-Breakpoint Check**
```
Compare this design implementation across all responsive breakpoints against the original design specifications.

Design specs per breakpoint:
- Mobile (375px): [describe layout, spacing, typography changes]
- Tablet (768px): [describe]
- Desktop (1280px): [describe]
- Wide (1440px): [describe]

Implementation screenshots at each breakpoint: [paste or describe]

For each breakpoint, compare:
1. Layout structure (column count, element ordering, show/hide rules)
2. Typography scaling (does font size match the breakpoint-specific spec?)
3. Spacing adaptation (do margins/padding match the breakpoint-specific spec?)
4. Image behavior (size, crop, aspect ratio)
5. Component behavior (does navigation collapse correctly? Do cards reflow properly?)

Output a breakpoint-by-breakpoint fidelity matrix and identify the breakpoint with the most drift.
```

**Prompt 4: Design Token Mapping Verification**
```
Verify that implemented CSS values correctly map to our design tokens.

Design tokens defined:
[Paste token list, e.g.:]
- $color-primary: #0052CC
- $color-text-primary: #1A1A2E
- $color-text-secondary: #667085
- $spacing-sm: 8px
- $spacing-md: 16px
- $spacing-lg: 24px
- $font-size-body: 16px
- $font-size-heading-1: 32px
- $border-radius-md: 8px

Implemented CSS values observed:
[Paste or describe actual values found in the code]

Check:
1. Does each implemented value correctly reference the right token?
2. Are any hard-coded values that should be tokens?
3. Are any tokens being used in the wrong context (e.g. spacing token used for font-size)?
4. Are there values that don't map to any existing token (gap in the token system)?

Output a token mapping verification table and list of mismatches.
```

**Prompt 5: Release Fidelity Sign-Off Report**
```
Generate a design fidelity sign-off report for this release.

Release: [version/name]
Pages/components in scope: [list all pages and components being released]

For each page/component, I'll provide:
- Design link: [Figma URL or description]
- Implementation: [staging URL or screenshot]

Produce a sign-off report containing:
1. Overall release fidelity score (0-100)
2. Per-page fidelity scores
3. Critical discrepancies requiring fix before release (if any)
4. Minor discrepancies acceptable for this release (with tracking ticket numbers)
5. Comparison against previous release fidelity score (improving or declining?)
6. Recommendation: APPROVE / CONDITIONAL APPROVE (list conditions) / BLOCK (list blockers)

Format for design team sign-off — this will be attached to the release notes.
```

---
:::

## 6. AI UI Pattern Library Curator

> Cuts pattern library maintenance from **40 hours/month** to **6 hours/month** — ensuring 95% pattern adoption across product teams.

::: details Pain Point & How COCO Solves It

**The Pain: Pattern Libraries That Nobody Uses**

Design systems live or die by their pattern libraries, yet most organizations struggle to keep them current and discoverable. The typical enterprise pattern library starts strong — a core team documents 50-80 UI patterns with clear usage guidelines, code snippets, and Figma components. Within six months, reality diverges. Product teams build custom variations because they can't find the right pattern, don't know it exists, or find that the documented version doesn't handle their edge case. A survey of design system maturity across 200+ organizations found that pattern adoption rates average just 40-55%, meaning nearly half of all UI implementations ignore the official library entirely.

The curation bottleneck is structural, not motivational. Pattern librarians must continuously monitor what product teams are building, identify recurring UI solutions that should be promoted to patterns, audit existing patterns for relevance, document new patterns with usage guidelines and code examples, and deprecate outdated ones. This work requires deep cross-team visibility — the pattern team needs to know what every product squad is designing and building. In practice, pattern updates happen quarterly at best, which means the library is always 3-6 months behind actual product needs.

Discovery is the other half of the problem. Even when the right pattern exists, designers and engineers can't find it. Pattern libraries grow to 200+ entries with inconsistent naming, overlapping categories, and search that returns too many results. A designer looking for "a card with an image, title, and action buttons" might not realize the library calls it a "media object" or "content tile." The result: teams reinvent existing patterns, creating visual inconsistency and duplicated engineering effort that compounds with every sprint.

**How COCO Solves It**

1. **Cross-Product Pattern Discovery**: COCO continuously scans product designs and codebases to identify UI patterns in active use:
   - Monitors Figma files across all product teams to detect recurring component structures
   - Analyzes front-end codebases for repeated UI implementations that aren't using library components
   - Identifies "pattern drift" where teams have modified official patterns in similar ways (signaling a gap)
   - Catalogs usage frequency and context for every detected pattern variant
   - Generates weekly reports of emerging patterns that are candidates for library promotion

2. **Intelligent Pattern Classification and Tagging**: COCO organizes patterns so designers find what they need:
   - Auto-generates multiple search aliases for each pattern (card, tile, content-block, media-object all point to the same pattern)
   - Tags patterns by use case context (e-commerce, dashboard, onboarding, settings) rather than just visual taxonomy
   - Creates relationship maps between patterns (this card pattern is often used with this list pattern)
   - Maintains a synonym dictionary that learns from failed searches to improve future discoverability
   - Assigns complexity ratings so designers know which patterns require engineering support vs. self-serve

3. **Automated Pattern Documentation**: COCO generates and maintains comprehensive pattern documentation:
   - Creates usage guidelines from analyzing how the pattern is successfully deployed across products
   - Generates do/don't examples by comparing correct implementations against common misuses
   - Documents all supported variants, states, and responsive behaviors with visual examples
   - Writes accessibility specifications including ARIA attributes, keyboard behavior, and screen reader expectations
   - Keeps code snippets current by syncing with the actual component library repository

4. **Gap Analysis and Recommendation Engine**: COCO proactively identifies what's missing from the library:
   - Detects when 3+ teams build similar custom components that should be a shared pattern
   - Analyzes competitor and industry UI patterns to identify gaps in coverage
   - Recommends pattern consolidation when multiple overlapping patterns serve similar purposes
   - Prioritizes new pattern development by projected adoption rate and implementation effort
   - Generates pattern proposals with preliminary specs based on the best existing implementations

5. **Adoption Tracking and Nudging**: COCO drives pattern adoption without policing:
   - Measures per-team and per-product pattern adoption rates with granular dashboards
   - Identifies specific instances where a custom implementation could be replaced by a library pattern
   - Generates contextual suggestions during design reviews linking to relevant existing patterns
   - Tracks which patterns have low adoption and investigates why (too rigid, missing variants, hard to find)
   - Produces monthly adoption reports showing trends and highlighting teams that improved

6. **Pattern Lifecycle Management**: COCO manages the full lifecycle from proposal to deprecation:
   - Tracks pattern maturity stages (draft, beta, stable, deprecated) with automated promotion criteria
   - Monitors usage trends to flag patterns approaching obsolescence (declining adoption over 3 months)
   - Generates migration guides when patterns are deprecated, mapping old pattern to new replacement
   - Archives deprecated patterns with full history so teams on older codebases can still reference them
   - Coordinates versioning across Figma components, code libraries, and documentation simultaneously

:::

::: details Results & Who Benefits

**Measurable Results**

- **Pattern adoption rate**: From 42% average across teams to **91%** within two quarters of COCO deployment
- **Library maintenance effort**: From 40 hours/month of manual curation to **6 hours/month** of review and approval
- **Pattern discovery time**: Designers find relevant patterns in **under 90 seconds** vs. previous average of 12 minutes (87% faster)
- **Duplicate component creation**: Reduced from 15 custom duplicates per quarter to **2 or fewer**, saving ~120 engineering hours/quarter
- **Pattern library freshness**: New patterns documented within **1 week** of identification vs. previous 3-month lag

**Who Benefits**

- **Design System Teams**: Shift from tedious cataloging and documentation work to strategic pattern strategy and quality oversight
- **Product Designers**: Find the right pattern instantly and trust that it covers their use case, eliminating custom component creation
- **Front-End Engineers**: One canonical implementation per pattern with clear specs, reducing "which version should I use?" confusion
- **Design Directors**: Quantified pattern adoption data to demonstrate design system ROI and justify continued investment

:::

::: details Practical Prompts

**Prompt 1: Pattern Audit and Gap Analysis**
```
Audit our current UI pattern library against actual product usage and identify gaps.

Current pattern library inventory:
[List all patterns, e.g.: Button, Card, Modal, Dropdown, Table, Form Field, Navigation Bar, Tabs, Accordion, Toast Notification, etc.]

Products and their key screens:
- [Product A]: [list main screens/flows — e.g. dashboard, settings, onboarding, checkout]
- [Product B]: [list main screens/flows]
- [Product C]: [list main screens/flows]

For each product screen, identify:
1. Which library patterns are being used correctly
2. Which library patterns are being used with modifications (describe the modification)
3. Which custom components exist that don't map to any library pattern
4. Recurring custom components across 2+ products (candidates for new patterns)

Output:
- Pattern coverage matrix (products × patterns)
- Gap list: patterns that should exist but don't
- Consolidation opportunities: overlapping patterns that could merge
- Prioritized recommendation for next 5 patterns to add
```

**Prompt 2: Pattern Documentation Generator**
```
Generate comprehensive documentation for a new UI pattern being added to our library.

Pattern name: [e.g. "Data Card"]
Description: [brief description of what it is and when to use it]
Existing implementations to reference: [describe 2-3 existing uses across products]

Generate documentation including:
1. Pattern overview: What it is, when to use it, when NOT to use it
2. Anatomy diagram description: Label every part (header, body, footer, action area, metadata, etc.)
3. Variants: [List expected variants — e.g. compact, expanded, with-image, without-image]
4. States: Default, hover, selected, disabled, loading, error, empty
5. Content guidelines: Min/max character counts for each text area, image aspect ratios
6. Responsive behavior: How the pattern adapts at mobile, tablet, desktop breakpoints
7. Accessibility: ARIA roles, keyboard interaction, screen reader behavior
8. Do/Don't examples: 3 correct uses and 3 common misuses with explanations

Format as a design system documentation page ready for publication.
```

**Prompt 3: Pattern Naming and Taxonomy Review**
```
Review our pattern library's naming convention and taxonomy for discoverability issues.

Current pattern names and categories:
[List all patterns grouped by current categories, e.g.:]
- Navigation: Navbar, Sidebar, Breadcrumbs, Tabs, Pagination
- Data Display: Table, Card, List, Stat Block, Chart Container
- Inputs: Text Field, Select, Checkbox, Radio, Toggle, Date Picker
- Feedback: Toast, Alert, Modal, Dialog, Progress Bar
- Layout: Grid, Container, Divider, Spacer

Common search terms our designers use (from search logs or surveys):
[e.g. "popup", "dropdown menu", "notification", "loading spinner", "hero section"]

Analyze:
1. Which search terms don't map to any pattern name? Suggest aliases.
2. Are any pattern names ambiguous? (e.g. "Card" could mean many things)
3. Are categories intuitive? Would a different grouping improve browsing?
4. Suggest a revised taxonomy with aliases that maximizes discoverability
5. Identify patterns that need sub-categories (e.g. Card → Data Card, Media Card, Profile Card)

Output a recommended naming convention and taxonomy restructure.
```

**Prompt 4: Pattern Adoption Report**
```
Generate a pattern adoption report for this quarter.

Pattern library: [number] total patterns
Teams tracked: [list team names]

Usage data per team:
- [Team A]: Uses [X] of [Y] applicable patterns. Custom components: [list any]
- [Team B]: Uses [X] of [Y] applicable patterns. Custom components: [list any]
- [Team C]: Uses [X] of [Y] applicable patterns. Custom components: [list any]

For the report, produce:
1. Overall adoption score (% of applicable patterns used across all teams)
2. Per-team adoption scores with quarter-over-quarter trend
3. Most adopted patterns (top 10) — what makes these successful?
4. Least adopted patterns (bottom 10) — hypothesize why and suggest improvements
5. Custom component inventory: which should be promoted to patterns?
6. Recommendations: specific actions to increase adoption next quarter

Format as an executive-friendly report with a summary table and detailed breakdown.
```

**Prompt 5: Pattern Migration Guide**
```
Create a migration guide for teams transitioning from a deprecated pattern to its replacement.

Deprecated pattern: [name and description — e.g. "Legacy Modal (v1)" with fixed width, no responsive support]
New pattern: [name and description — e.g. "Dialog (v2)" with responsive sizing, focus trapping, improved accessibility]

Key differences:
- [List structural changes — e.g. "header slot replaces title prop"]
- [List behavioral changes — e.g. "close on backdrop click is now opt-in, not default"]
- [List visual changes — e.g. "border-radius changed from 4px to 8px"]

Generate:
1. Side-by-side comparison table (old prop/behavior → new prop/behavior)
2. Step-by-step migration checklist for designers (Figma component swap process)
3. Step-by-step migration checklist for engineers (code changes required)
4. Common migration pitfalls and how to avoid them
5. Timeline recommendation: when to start, milestone dates, deadline for full deprecation
6. Testing checklist to verify the migration didn't break anything

Format as a self-contained migration guide document.
```

:::

## 7. AI Color Palette Accessibility Optimizer

> Transforms brand palettes into **WCAG AAA-compliant** color systems in **under 2 hours** — maintaining 94% perceptual brand similarity while achieving full accessibility.

::: details Pain Point & How COCO Solves It

**The Pain: Beautiful Brands That Exclude Millions of Users**

Color accessibility is where brand identity and inclusive design collide — and the collision is ugly. Marketing teams invest months developing brand palettes with precise emotional associations: the exact coral that feels "warm but modern," the specific navy that conveys "trustworthy yet approachable." Then the accessibility audit arrives and declares that 60% of these carefully chosen colors fail WCAG contrast requirements. The coral on white has a 2.8:1 ratio (needs 4.5:1). The light blue on the brand gradient is illegible. The subtle gray text that looked elegant is invisible to 15% of users.

The typical response is a painful negotiation between brand and accessibility teams that satisfies neither. Brand managers resist changing signature colors. Accessibility specialists insist on compliance. The compromise is often a "digital palette" that bears little resemblance to the original brand intent — or worse, an exemption that leaves the product inaccessible. Designers are caught in the middle, spending days manually testing color combinations, calculating contrast ratios, and proposing alternatives that get rejected by one side or the other. With a typical brand palette of 15-20 colors used in hundreds of combinations, the permutation space is enormous.

The challenge multiplies with dark mode, high contrast mode, and colorblind simulations. A color pair that passes WCAG on a white background may fail on dark. A green-red distinction that works for most users is invisible to the 8% of men with color vision deficiency. Organizations need not one accessible palette but a system of accessible palettes across modes and contexts — and keeping them all synchronized with the brand is a design problem that manual processes simply can't solve at scale.

**How COCO Solves It**

1. **Brand Color DNA Extraction**: COCO analyzes the brand palette at a perceptual level to preserve what makes it distinctive:
   - Converts all brand colors to perceptual color spaces (OKLCH, CIELAB) for accurate human-vision-based analysis
   - Identifies the core perceptual attributes that define brand identity (hue angle, chroma range, lightness relationships)
   - Maps emotional associations of each color based on color psychology research and brand guidelines
   - Determines which color properties are essential (hue) vs. adjustable (lightness, chroma) for compliance
   - Creates a "brand color fingerprint" that serves as the constraint boundary for optimization

2. **Exhaustive Combination Testing**: COCO tests every possible color combination against accessibility standards:
   - Generates the full matrix of foreground/background color combinations used in the product
   - Tests each combination against WCAG 2.1 AA (4.5:1 text, 3:1 large text, 3:1 non-text) and AAA (7:1, 4.5:1) thresholds
   - Simulates all three types of color vision deficiency (protanopia, deuteranopia, tritanopia) for each combination
   - Tests against light mode, dark mode, and high contrast mode simultaneously
   - Flags color pairs that rely solely on color to convey meaning (colorblind-unsafe patterns)

3. **Perceptual-Aware Color Adjustment**: COCO optimizes colors using human perception models, not naive math:
   - Adjusts lightness and chroma in OKLCH space to achieve target contrast ratios with minimal perceptual shift
   - Preserves hue angles exactly — the most recognizable aspect of brand color identity
   - Uses just-noticeable-difference (JND) calculations to ensure adjustments are as small as possible
   - Generates multiple candidate adjustments ranked by perceptual similarity to the original color
   - Validates that adjusted colors maintain intended relationships (primary darker than secondary, etc.)

4. **Systematic Palette Generation**: COCO produces a complete, coherent accessible color system — not ad-hoc fixes:
   - Generates a full light mode palette with all combinations passing WCAG AA minimum
   - Generates a matching dark mode palette that maintains the same brand feel and color relationships
   - Creates a high contrast mode variant for users who need maximum readability
   - Produces semantic color tokens (success, warning, error, info) that are accessible in all modes
   - Ensures all generated palettes are internally consistent (no color conflicts between modes)

5. **Colorblind Safety Verification**: COCO ensures the palette works for all types of color vision:
   - Simulates the full palette under protanopia, deuteranopia, and tritanopia vision models
   - Verifies that all functional color distinctions (error vs. success, active vs. inactive) remain distinguishable
   - Adds secondary indicators (icons, patterns, labels) where color-only distinction cannot be avoided
   - Tests data visualization palettes for distinguishability across all color vision types
   - Generates colorblind-safe alternative palettes for charts, graphs, and status indicators

6. **Living Documentation and Token Export**: COCO delivers implementation-ready outputs:
   - Exports accessible palettes as design tokens in all major formats (CSS variables, Tailwind config, Figma variables, iOS/Android)
   - Generates a visual comparison showing original brand colors alongside accessible alternatives with delta values
   - Produces a color usage guide specifying which combinations are approved and which are prohibited
   - Creates automated tests that CI/CD pipelines can run to prevent future accessibility regressions
   - Maintains a change log so brand teams can see exactly what changed and why

:::

::: details Results & Who Benefits

**Measurable Results**

- **Palette optimization time**: From 3-4 weeks of manual iteration to **under 2 hours** for a complete accessible color system
- **WCAG compliance rate**: Color combinations go from 38% passing to **100% AA compliant** (92% AAA compliant)
- **Brand similarity score**: Accessible palette maintains **94% perceptual similarity** to original brand colors (measured in OKLCH delta)
- **Colorblind safety**: Functional color distinctions pass distinguishability testing for **all 3 CVD types** (previously failed for 2 of 3)
- **Accessibility-related support tickets**: Color contrast complaints reduced from 23/month to **fewer than 2/month** (91% reduction)

**Who Benefits**

- **Product Designers**: Get an accessible color system that feels like the real brand — no more choosing between beauty and compliance
- **Brand Managers**: Confidence that digital accessibility won't dilute brand identity, with data showing minimal perceptual difference
- **Front-End Engineers**: Implementation-ready tokens in their preferred format with clear usage rules — no more guessing which color to use where
- **Accessibility Leads**: Automated verification that color compliance is maintained across releases, reducing manual audit burden by 80%

:::

::: details Practical Prompts

**Prompt 1: Full Brand Palette Accessibility Audit**
```
Audit this brand color palette for WCAG 2.1 accessibility compliance across all intended usage combinations.

Brand palette:
- Primary: [HEX]
- Secondary: [HEX]
- Accent: [HEX]
- Background (light): [HEX]
- Background (dark): [HEX]
- Surface: [HEX]
- Text primary: [HEX]
- Text secondary: [HEX]
- Success: [HEX]
- Warning: [HEX]
- Error: [HEX]
- Info: [HEX]

Test these combinations:
1. All text colors on all background colors (normal text: 4.5:1, large text: 3:1)
2. Interactive element colors on all backgrounds (3:1 for non-text elements)
3. Status colors (success/warning/error/info) on all backgrounds
4. Focus indicator colors on all backgrounds

For each combination, provide:
- Contrast ratio (calculated)
- WCAG AA: PASS/FAIL
- WCAG AAA: PASS/FAIL
- If FAIL: minimum adjustment needed (in lightness) to pass

Output a compliance matrix and summary of failures requiring attention.
```

**Prompt 2: Accessible Color Alternative Generator**
```
Generate accessible alternatives for these failing color combinations while maintaining maximum brand similarity.

Failing combinations:
- [Foreground HEX] on [Background HEX] — current ratio: [X:1], needed: [4.5:1 or 3:1]
- [Foreground HEX] on [Background HEX] — current ratio: [X:1], needed: [target]
- [repeat for all failing combinations]

Brand constraints:
- Hue must stay within ±[5-15] degrees of original
- The following colors are LOCKED and cannot change: [list any colors that are non-negotiable]
- Preference: adjust [foreground/background/either] to achieve compliance

For each failing combination, generate:
1. Recommended fix: adjusted color HEX with contrast ratio achieved
2. Perceptual difference from original (OKLCH delta E value)
3. Side-by-side visual description (how different will it look?)
4. Alternative option if the first adjustment is too visually different
5. CSS custom property declaration for the new value

Output a before/after palette comparison table.
```

**Prompt 3: Dark Mode Palette Derivation**
```
Generate an accessible dark mode palette derived from our light mode brand palette.

Light mode palette:
- Background: [HEX]
- Surface (card, modal): [HEX]
- Text primary: [HEX]
- Text secondary: [HEX]
- Primary brand color: [HEX]
- Secondary brand color: [HEX]
- Accent: [HEX]
- Border/divider: [HEX]
- Success/Warning/Error/Info: [HEX each]

Dark mode requirements:
1. All text must meet WCAG AA contrast on dark backgrounds
2. Brand colors should be recognizable but adjusted for dark context (typically lighter/more saturated)
3. Elevation should be conveyed through surface color lightness (not shadow)
4. Status colors must remain distinguishable and accessible
5. Overall feel should match the brand personality (specify: [e.g. "warm and approachable" or "cool and technical"])

Generate:
- Complete dark mode token mapping (light value → dark value)
- Contrast ratios for all text/background combinations
- Semantic color adjustments (how success green, error red, etc. were modified)
- Surface elevation scale (5 levels from base to highest elevation)
- Side-by-side comparison with light mode for brand consistency review
```

**Prompt 4: Colorblind-Safe Data Visualization Palette**
```
Create a colorblind-safe color palette for data visualization that aligns with our brand.

Brand primary color: [HEX]
Brand secondary color: [HEX]
Number of distinct data categories needed: [e.g. 8]
Chart types used: [bar, line, pie, scatter, heatmap]
Background color charts will appear on: [HEX]

Requirements:
1. All colors must be distinguishable under protanopia, deuteranopia, and tritanopia simulation
2. Adjacent colors in a sequence must have ≥30% lightness difference (for ordered data)
3. All colors must have ≥3:1 contrast against the chart background
4. At least 2 colors should be recognizably "on brand"
5. The palette should work in both light and dark mode

Generate:
- Primary data palette: [N] colors with HEX values
- Colorblind simulation results for all three CVD types (confirm distinguishability)
- Contrast ratios against specified background
- Recommended usage order (which color for first series, second, etc.)
- Fallback patterns/textures for cases where color alone is insufficient
```

**Prompt 5: Color System Token Architecture**
```
Design a complete color token architecture for our design system that enforces accessibility by default.

Brand colors: [list core brand HEX values]
Supported modes: Light, Dark, High Contrast

Create a 3-tier token structure:
1. **Base tokens** (raw values): color.blue.500 = #[HEX] — the actual color values
2. **Semantic tokens** (purpose): color.text.primary, color.background.surface — mapped to base tokens
3. **Component tokens** (specific): button.primary.background, card.border — mapped to semantic tokens

For each tier:
- Define the complete token set
- Specify light mode, dark mode, and high contrast mode values
- Document which token combinations are approved (e.g. text.primary ON background.surface)
- Flag any combinations that should NEVER be used (insufficient contrast)

Output:
- Token architecture diagram showing the 3-tier mapping
- Complete token table with values for all 3 modes
- Approved combination matrix
- Export format for [CSS variables / Tailwind / Figma variables — specify preference]
```

:::

## 8. AI Design Sprint Facilitator

> Compresses a **5-day design sprint** into **2 days** — generating research synthesis, sketches, and test protocols that would normally require a full facilitation team.

::: details Pain Point & How COCO Solves It

**The Pain: Design Sprints That Consume a Week and Still Miss the Mark**

The Google Ventures design sprint model promises rapid validation: five days from problem definition to user-tested prototype. In practice, design sprints are expensive, logistically complex, and inconsistently executed. A standard sprint requires 5-7 people to clear their calendars for an entire week — that's 200+ person-hours of opportunity cost. When you add preparation (2-3 days of facilitator prep), recruitment for testing (1-2 weeks lead time), and post-sprint documentation (another 2-3 days), the true cost of a single design sprint can exceed $50,000 in loaded labor costs.

Facilitation quality varies wildly and drives outcomes more than any other factor. An experienced sprint facilitator knows how to synthesize ambiguous research, guide divergent sketching sessions, force convergence on a testable hypothesis, and build a prototype that answers the right question. Most organizations don't have certified sprint facilitators on staff, so they rely on designers or product managers who've read the book but never run one. The result: sprints that produce prototypes testing the wrong hypothesis, How Might We questions that are too broad or too narrow, and storyboards that don't translate into testable flows.

The output quality problem extends beyond facilitation. Sprint sketches are often rough to the point of being uninterpretable by anyone who wasn't in the room. Decision-making defaults to the highest-paid person's opinion rather than structured evaluation criteria. And the research synthesis that should ground the sprint in user reality is frequently a hasty 30-minute review of whatever data is available. Teams leave the sprint energized but with artifacts that don't hold up under scrutiny — prototypes that test surface-level preferences rather than core assumptions, and learnings that don't translate into product decisions.

**How COCO Solves It**

1. **Pre-Sprint Research Synthesis**: COCO prepares a comprehensive knowledge base so the sprint starts informed, not cold:
   - Aggregates and synthesizes all available user research (interviews, surveys, analytics, support tickets, NPS comments)
   - Identifies the top 5 user problems ranked by frequency, severity, and business impact
   - Maps the current user journey with pain points, drop-off rates, and emotional arc
   - Generates "How Might We" questions from real user quotes and behavioral data
   - Produces competitor analysis of how 5+ competitors address the same problem space

2. **Structured Problem Framing**: COCO ensures the sprint targets the right problem with the right scope:
   - Generates a long-term goal and sprint questions based on the research synthesis
   - Creates a customer journey map with critical moments highlighted for sprint focus
   - Produces assumption maps categorizing beliefs by importance and uncertainty
   - Drafts multiple problem frames so the team can choose the most generative angle
   - Prepares "expert interview" summaries from stakeholder input gathered asynchronously

3. **AI-Assisted Ideation and Sketching**: COCO augments the divergent thinking phase with breadth and variety:
   - Generates 20+ solution concepts across different design paradigms (mobile, desktop, conversational, spatial)
   - Produces lightning demo references by searching for analogous solutions in other industries
   - Creates low-fidelity wireframe concepts for each solution direction with annotated rationale
   - Ensures ideation covers the full solution space — not just the obvious first ideas
   - Generates "crazy eight" variations for each promising direction to push creative boundaries

4. **Decision Framework and Convergence Support**: COCO replaces subjective debate with structured evaluation:
   - Creates weighted scoring matrices based on sprint goals, feasibility, and user impact
   - Facilitates dot-voting analysis by tallying votes and identifying consensus vs. split decisions
   - Generates storyboard narratives from selected concepts with clear user flow steps
   - Resolves "decider" conflicts by presenting trade-off analyses for competing approaches
   - Documents decision rationale so the team can revisit why they chose a particular direction

5. **Rapid Prototype Specification**: COCO translates storyboards into buildable prototype specs in hours:
   - Converts the selected storyboard into a screen-by-screen interaction flow with content
   - Generates realistic sample data and copy for every screen in the prototype
   - Specifies interaction patterns, transitions, and micro-interactions to make the prototype feel real
   - Creates a clickable flow map showing all paths, branches, and decision points
   - Produces a test script mapping each prototype screen to the hypothesis it's validating

6. **User Test Protocol and Analysis**: COCO prepares rigorous test materials and synthesizes results:
   - Generates a moderated usability test script with tasks, follow-up probes, and timing estimates
   - Creates screener criteria and recruitment messaging for the target user profile
   - Designs a structured observation template for note-takers during test sessions
   - Synthesizes test session notes into pattern-based findings with severity ratings
   - Produces a sprint outcome report with validated/invalidated hypotheses and recommended next steps

:::

::: details Results & Who Benefits

**Measurable Results**

- **Sprint duration**: Compressed from 5 full days to **2 focused days** with equivalent output quality
- **Preparation time**: Facilitator prep reduced from 3 days to **4 hours** with AI-generated research synthesis and materials
- **Solution breadth**: Ideation phase generates **3x more distinct concepts** (60+ vs. typical 20) due to AI-augmented divergent thinking
- **Hypothesis accuracy**: Sprints facilitated with COCO have **78% hypothesis validation rate** vs. 52% industry average — better problem framing leads to better prototypes
- **Post-sprint documentation**: From 2-3 days of manual write-up to **same-day delivery** of complete sprint outcome report

**Who Benefits**

- **Product Designers**: Focus creative energy on evaluation and refinement rather than generating volume, with AI handling the breadth of ideation
- **Product Managers**: Get validated, well-documented product direction in 2 days instead of committing an entire team for a full week
- **UX Researchers**: Rigorous test protocols and synthesis frameworks that meet research standards, even when sprints are run without a dedicated researcher
- **Engineering Leads**: Clear prototype specifications with documented trade-offs that translate directly into technical planning

:::

::: details Practical Prompts

**Prompt 1: Pre-Sprint Research Synthesis**
```
Synthesize our available research into a design sprint briefing document.

Research inputs:
- User interviews: [summary or paste key quotes from X interviews]
- Survey data: [key findings, e.g. "72% of users report difficulty with X"]
- Analytics: [key metrics, e.g. "40% drop-off at step 3 of onboarding"]
- Support tickets: [top complaint categories and frequency]
- NPS verbatims: [paste representative comments]

Sprint focus area: [e.g. "new user onboarding experience"]

Produce:
1. Top 5 user problems ranked by: frequency, severity, business impact
2. Current user journey map with pain point annotations
3. 10 "How Might We" questions derived from the research (specific, actionable, not too broad)
4. Key user quotes that ground each HMW in real user language
5. Competitor approaches: how [competitor 1], [competitor 2], [competitor 3] address this problem
6. Recommended sprint long-term goal and 3 sprint questions

Format for a sprint briefing that can be presented in 30 minutes.
```

**Prompt 2: Solution Ideation and Lightning Demos**
```
Generate a broad set of solution concepts for our design sprint challenge.

Sprint challenge: How might we [specific HMW question]?
Target user: [persona description]
Key constraints: [technical, business, timeline constraints]
Current solution: [describe what exists today]

Generate:
1. 20 distinct solution concepts across these paradigms:
   - Traditional web/mobile UI (5 concepts)
   - Conversational/chat-based (3 concepts)
   - Proactive/push-based (3 concepts)
   - Simplified/reductive (3 concepts)
   - Gamified/engagement (3 concepts)
   - Radical rethink (3 concepts)

2. For each concept, provide:
   - One-sentence description
   - Key insight or principle it's based on
   - Rough sketch description (what the main screen would show)
   - Closest real-world analogy (lightning demo reference)

3. Lightning demo references: Find 5 examples from other industries that solve an analogous problem brilliantly
   - [Industry]: [Product] solves [analogous problem] by [approach]

Format for a facilitated ideation session — these concepts should inspire, not prescribe.
```

**Prompt 3: Sprint Storyboard Generator**
```
Convert our selected solution concept into a detailed sprint storyboard.

Selected concept: [describe the chosen solution direction]
User entry point: [how the user arrives — e.g. "email notification", "app home screen", "google search"]
Key flow: [describe the main happy path]
Critical moment: [the most important interaction to test]

Generate a storyboard with 8-12 frames:
For each frame:
1. Frame number and title
2. Scene description: What the user sees (screen content, key elements)
3. User action: What the user does
4. System response: What happens after the action
5. User emotion/thought: What the user is thinking or feeling
6. Copy/content: Realistic text that would appear on screen
7. Notes: Any assumptions or decision points

Also generate:
- Test hypothesis mapped to specific frames ("If users can complete frame 5-7 without confusion, our hypothesis is validated")
- 2 alternative paths for branching points in the flow
- Transition notes between frames (how frames connect)
```

**Prompt 4: Usability Test Script**
```
Create a moderated usability test script for our sprint prototype.

Prototype description: [describe what the prototype shows and its key flows]
Hypotheses to test:
1. [e.g. "Users can complete the onboarding flow in under 3 minutes"]
2. [e.g. "Users understand the value proposition from the first screen"]
3. [e.g. "Users can find and use the search feature without prompting"]

Target user profile: [demographics, experience level, relevant behaviors]
Test duration: [e.g. 45 minutes]

Generate:
1. Introduction script (rapport building, consent, think-aloud instructions)
2. Background questions (5 questions to understand participant context)
3. Task scenarios (one per hypothesis):
   - Task description (realistic scenario, not instruction-based)
   - Success criteria (what counts as completing the task)
   - Follow-up probes if the user struggles
   - Follow-up probes if the user succeeds easily
4. Post-task questions per scenario (satisfaction, difficulty rating)
5. Wrap-up questions (overall impressions, comparison to current experience)
6. Observer note-taking template with columns for: time, observation, user quote, severity

Format as a ready-to-use test script with facilitator instructions in [brackets].
```

**Prompt 5: Sprint Outcome Report**
```
Synthesize design sprint results into an actionable outcome report.

Sprint goal: [original goal]
Hypotheses tested:
1. [hypothesis 1]
2. [hypothesis 2]
3. [hypothesis 3]

Test session summaries:
- Participant 1: [key observations, quotes, task completion results]
- Participant 2: [key observations, quotes, task completion results]
- Participant 3: [key observations, quotes, task completion results]
- Participant 4: [key observations, quotes, task completion results]
- Participant 5: [key observations, quotes, task completion results]

Produce:
1. Hypothesis validation summary: VALIDATED / INVALIDATED / INCONCLUSIVE for each, with evidence
2. Pattern analysis: recurring themes across 3+ participants
3. Critical usability issues found (ranked by severity and frequency)
4. Surprise insights: findings we didn't expect
5. Recommended next steps:
   - Build: what's validated and ready for development
   - Iterate: what needs another design round
   - Research further: what needs deeper investigation
6. Sprint metrics: task completion rates, time on task, satisfaction scores

Format for stakeholder presentation — executive summary on page 1, details following.
```

:::

## 9. AI User Flow Wireframe Generator

> Generates complete user flow wireframes in **3 hours** instead of **3 days** — producing 40+ screens with consistent interaction patterns and edge case coverage.

::: details Pain Point & How COCO Solves It

**The Pain: Wireframing Bottlenecks That Delay Every Project**

Wireframing is the bridge between product requirements and visual design, and it's chronically under-resourced. A typical feature wireframe set for a moderately complex product flow (account creation, onboarding, core task completion) requires 30-50 screens when you account for happy paths, error states, empty states, loading states, and edge cases. At an average of 45-90 minutes per screen for thoughtful wireframing — including information architecture decisions, interaction pattern selection, content hierarchy, and responsive considerations — a single feature wireframe package takes 3-5 days of focused designer time.

The bottleneck cascades through the entire product development timeline. Engineering can't estimate complexity without wireframes. Content strategists can't write copy without knowing the layout structure. Stakeholders can't align on scope without seeing the flow. Design reviews get delayed because wireframes aren't ready, pushing visual design back, which pushes development back, which pushes the release date. In agile organizations, this means wireframes for Sprint N+2 features should be ready by Sprint N — but designers are usually still finishing wireframes for Sprint N+1.

Quality suffers under time pressure. When designers rush wireframes to unblock downstream teams, they skip edge cases. Empty states are marked "TBD." Error flows get a single generic screen instead of contextual error handling. Responsive behavior is implied rather than specified. The result: engineers encounter unspecified scenarios during development and either make their own design decisions (creating inconsistency) or file questions that block their work for hours or days. One analysis found that 35% of engineering "blocked" tickets trace back to incomplete or ambiguous wireframes.

**How COCO Solves It**

1. **Requirements-to-Flow Conversion**: COCO transforms product requirements into structured user flows before wireframing begins:
   - Parses product requirement documents, user stories, and acceptance criteria into discrete interaction steps
   - Generates flow diagrams showing all paths — happy path, error paths, alternative paths, and edge cases
   - Identifies missing requirements by detecting flow branches that have no specified behavior
   - Maps each flow step to appropriate UI patterns from the design system
   - Produces a flow completeness score indicating what percentage of scenarios are accounted for

2. **Intelligent Wireframe Generation**: COCO produces layout-accurate wireframes based on the user flow and design system:
   - Generates screen-level wireframes with proper information hierarchy, spacing, and component placement
   - Applies consistent interaction patterns across similar screen types (all list views use the same pattern, all forms follow the same structure)
   - Includes realistic placeholder content that reflects actual content length and complexity
   - Renders wireframes in the correct device frame (mobile, tablet, desktop) based on the target platform
   - Annotations explain the design rationale for each major layout decision

3. **Edge Case and State Enumeration**: COCO systematically generates screens for every state a component or page can be in:
   - Produces empty state wireframes with appropriate messaging and CTAs for every data-dependent view
   - Generates loading state wireframes showing skeleton screens, progressive loading, and spinner placement
   - Creates error state wireframes for network failures, validation errors, permission errors, and timeout scenarios
   - Designs first-time-user vs. returning-user variations where the experience differs
   - Documents boundary conditions (maximum items, minimum content, overflow text, extreme data scenarios)

4. **Responsive Adaptation Specification**: COCO shows how each wireframe adapts across breakpoints:
   - Generates mobile, tablet, and desktop wireframe variants for each screen
   - Specifies layout changes (column collapse, component stacking, navigation transformation)
   - Notes content priority shifts (what gets hidden, collapsed, or reordered on smaller screens)
   - Indicates touch-target sizing adjustments for mobile contexts
   - Documents scroll behavior and viewport-dependent interactions (sticky headers, bottom sheets)

5. **Interaction Annotation Layer**: COCO adds rich behavioral annotations that engineers need but designers often omit:
   - Documents click/tap behavior for every interactive element (navigation, state change, modal trigger, API call)
   - Specifies transition animations between screens (slide, fade, expand, modal overlay)
   - Notes keyboard navigation order and focus management for accessibility
   - Describes drag-and-drop, swipe, long-press, and gesture interactions where applicable
   - Maps form validation rules to each input field (required, format, min/max, dependencies)

6. **Consistency Audit and Iteration**: COCO reviews its own output and flags issues before designer review:
   - Checks all wireframes against design system patterns and flags deviations
   - Verifies navigation consistency (back button behavior, breadcrumb accuracy, tab states)
   - Ensures content hierarchy is consistent across similar screen types
   - Validates that all flow paths are complete — no dead ends or missing transitions
   - Generates a review checklist so the designer can efficiently verify and approve each screen

:::

::: details Results & Who Benefits

**Measurable Results**

- **Wireframe production time**: From 3-5 days per feature flow to **3 hours** for a complete wireframe set (90% reduction)
- **Screen coverage**: Average wireframe package grows from 15 screens (happy path only) to **42 screens** (including all states and edge cases)
- **Engineering blocked tickets**: Wireframe-related "need design clarification" tickets reduced from 18/sprint to **3/sprint** (83% reduction)
- **Design system compliance**: Wireframes use correct design system patterns **97% of the time** vs. 74% for manually created wireframes
- **Responsive completeness**: All wireframes include mobile, tablet, and desktop variants — previously only **30%** of wireframes included responsive specs

**Who Benefits**

- **Product Designers**: Spend time on creative problem-solving and user research rather than repetitive screen production, with wireframes as a starting point for refinement
- **Front-End Engineers**: Complete specifications for every screen state and interaction — no more guessing what the empty state should look like or how errors should behave
- **Product Managers**: Faster turnaround from requirements to reviewable wireframes, enabling quicker alignment and keeping sprints on schedule
- **QA Engineers**: Comprehensive wireframe sets serve as test case documentation — every state the wireframe specifies becomes a test scenario

:::

::: details Practical Prompts

**Prompt 1: Requirements-to-Wireframe Flow**
```
Convert these product requirements into a complete user flow and wireframe specification.

Feature: [feature name, e.g. "Team member invitation and onboarding"]
User stories:
- As a [role], I want to [action] so that [benefit]
- [additional user stories]

Acceptance criteria:
[Paste acceptance criteria for each user story]

Design system components available: [list available components — e.g. form fields, buttons, modals, tables, cards, navigation, etc.]
Platform: [web responsive / iOS native / Android native]

Generate:
1. User flow diagram (text-based) showing all paths:
   - Happy path (numbered steps)
   - Error paths (branching from each step where errors can occur)
   - Alternative paths (e.g. user already has account, user cancels midway)
   - Edge cases (empty data, max limits, permissions)

2. Screen inventory: list every unique screen needed with:
   - Screen ID and name
   - Which flow step(s) it serves
   - Key components on the screen
   - States: default, loading, empty, error, success

3. For each screen, provide wireframe specification:
   - Layout description (header, body sections, footer/CTA placement)
   - Component specifications (which design system components, with props/content)
   - Content hierarchy (what's most prominent, secondary, tertiary)
   - Interaction notes (what happens on click/tap for each interactive element)
```

**Prompt 2: Edge Case and State Matrix Generator**
```
Generate a complete state matrix for this feature and wireframe specifications for every state.

Feature screens:
- [Screen 1 name]: [description of the default/happy state]
- [Screen 2 name]: [description]
- [Screen 3 name]: [description]
- [Screen 4 name]: [description]

For EACH screen, generate wireframe specs for these states:
1. **Default/populated**: The normal state with typical data
2. **Empty state**: No data exists yet — what message, illustration, and CTA should appear?
3. **Loading state**: Data is being fetched — skeleton screen, spinner, or progressive loading?
4. **Error state**: Network or server error — what message and retry action?
5. **Partial data**: Some data loaded, some failed — how to handle mixed states?
6. **First-time**: User has never seen this screen — any onboarding overlay or tooltip?
7. **Max capacity**: Maximum data (e.g. 500 items in a list) — pagination, virtual scroll, or truncation?
8. **Permission restricted**: User doesn't have access — what do they see?

For each state, specify:
- Visual description (what elements are visible/hidden)
- Copy (exact text for messages, CTAs, tooltips)
- Behavior (what the user can do in this state)
- Transition (how the user gets to and leaves this state)
```

**Prompt 3: Responsive Wireframe Specification**
```
Generate responsive wireframe specifications for this screen across all breakpoints.

Screen: [name and description of the desktop layout]
Components on screen:
- [Component 1: description and current desktop layout]
- [Component 2: description]
- [Component 3: description]
- [etc.]

Breakpoints to design for:
- Desktop (1280px+): [this is the primary design — describe current layout]
- Tablet landscape (1024px): [any known requirements?]
- Tablet portrait (768px): [any known requirements?]
- Mobile (375px): [any known requirements?]

For each breakpoint, specify:
1. Layout changes: What reflows, stacks, or changes grid columns
2. Navigation changes: Does nav collapse to hamburger? When?
3. Content priority: What gets hidden, truncated, or moved to "show more"
4. Component adaptations: How each component transforms (table → card list, horizontal tabs → dropdown, etc.)
5. Touch targets: Any elements that need size increases for touch (min 44x44px)
6. Scroll behavior: Sticky elements, bottom sheets, pull-to-refresh
7. Interaction changes: Hover states → long press, tooltips → bottom sheets, etc.

Output a specification document that a developer can implement without guessing.
```

**Prompt 4: Form Flow Wireframe with Validation**
```
Design a complete form flow wireframe with all validation states and progressive disclosure.

Form purpose: [e.g. "Multi-step account setup with personal info, company info, and preferences"]
Fields:
- Step 1: [list fields with type and validation rules — e.g. "Email (required, must be valid email format)", "Password (required, min 8 chars, must include number)"]
- Step 2: [list fields]
- Step 3: [list fields]

Generate wireframe specifications for:
1. Each step's default state (empty form ready for input)
2. Field-level validation: inline error messages for each field's failure modes
3. Form-level validation: what happens when "Continue" is pressed with errors
4. Progress indicator: how the user knows which step they're on and what's ahead
5. Navigation: can the user go back? What happens to entered data?
6. Success state: what does the user see after completing the final step?
7. Partial completion: what if the user leaves mid-form and returns?
8. Autofill behavior: how does browser autofill interact with the form?

For each field, specify:
- Label text
- Placeholder text
- Help text (if needed)
- Error message variants (required, format, min/max, custom business rules)
- Character counter (if applicable)
```

**Prompt 5: Navigation and Information Architecture Wireframe**
```
Design the navigation and information architecture wireframe for this product.

Product: [description]
Primary user roles: [e.g. admin, regular user, viewer]
Feature areas:
- [Area 1]: [description and key screens]
- [Area 2]: [description and key screens]
- [Area 3]: [description and key screens]
- [Area 4]: [description and key screens]

Current pain points with navigation (if redesigning): [describe]

Generate:
1. Information architecture: hierarchical sitemap showing all pages grouped by feature area
2. Navigation wireframe:
   - Primary navigation (always visible): which items, what order, icon + label?
   - Secondary navigation (within feature areas): tabs, sidebar, or breadcrumbs?
   - Utility navigation (profile, settings, notifications, help): placement and behavior
3. Role-based navigation differences: which items are visible/hidden per role
4. Navigation states: default, active, hover, notification badge, collapsed/expanded
5. Mobile navigation: how does the navigation transform on mobile?
6. Deep linking: can users bookmark and share links to any screen?
7. Wayfinding: how does the user always know where they are? (breadcrumbs, active states, page titles)

Output as a navigation specification with wireframes for each navigation level.
```

:::

## 10. AI Design Handoff Documentation Builder

> Reduces design handoff documentation time from **8 hours per feature** to **45 minutes** — generating pixel-perfect specs that eliminate 90% of engineer follow-up questions.

::: details Pain Point & How COCO Solves It

**The Pain: Handoffs That Create More Questions Than They Answer**

Design handoff is the most friction-filled process in product development. A designer finishes a beautiful, carefully considered design in Figma — and then must translate that visual artifact into a specification document that engineers can implement without ambiguity. This means documenting every spacing value, color token, typography spec, interaction behavior, animation timing, responsive rule, edge case, and state variation. For a moderately complex feature, this documentation takes 6-10 hours of tedious, detail-oriented work that most designers find soul-crushing.

The quality of handoff documentation directly predicts implementation quality, and most handoffs are inadequate. A study of 150 product teams found that engineers average 4.2 clarifying questions per component during implementation — questions about interaction details, responsive behavior, edge cases, and state management that the designer thought were "obvious" but weren't specified. Each question creates a communication round-trip: the engineer posts a question, waits for the designer to respond (often hours later), then implements based on the answer — which may not perfectly convey what the designer intended. Multiply this by 20-30 components per feature, and you get a handoff process that generates 100+ clarifying exchanges per release cycle.

The problem is fundamentally one of translation between mental models. Designers think in visual compositions, spatial relationships, and user intent. Engineers think in DOM structures, state machines, and data flow. A designer might describe a dropdown as "it opens and shows the options." An engineer needs to know: does it open on click or hover? What's the max height before scrolling? What happens when options overflow the viewport? How does keyboard navigation work? What's the animation timing and easing? What happens when the dropdown is inside a modal? These aren't edge cases — they're implementation requirements that the design doesn't visually represent.

**How COCO Solves It**

1. **Automated Design File Parsing**: COCO extracts comprehensive specifications directly from the design file:
   - Reads all layers, groups, and components from Figma files via API with full property extraction
   - Captures every measurable property: dimensions, spacing (padding, margin, gap), colors, typography, borders, shadows, opacity, and blend modes
   - Detects auto-layout rules, constraints, and responsive resize behavior as specified in Figma
   - Maps design components to their design system counterparts with token names (not raw values)
   - Identifies instances where raw values are used instead of tokens and flags them for designer review

2. **Interaction Specification Generation**: COCO documents every behavioral detail that designs can't visually show:
   - Generates state documentation for all interactive elements: default, hover, focus, active, disabled, loading, error, success
   - Specifies transition animations between states with duration, easing curve, and affected properties
   - Documents click/tap behavior chains (what happens on click → what loads → what the next state is)
   - Creates micro-interaction specifications for feedback animations (button press, toggle switch, skeleton loading)
   - Maps keyboard interactions (Tab order, Enter/Space behavior, Escape to dismiss, arrow key navigation)

3. **Responsive Behavior Documentation**: COCO specifies how designs adapt across every breakpoint:
   - Generates side-by-side comparison specs for all defined breakpoints showing exact layout changes
   - Documents container queries and component-level responsive rules (not just viewport breakpoints)
   - Specifies what elements hide, reorder, resize, or change style at each breakpoint
   - Notes scroll behavior changes (fixed headers become scrollable, bottom sheets replace modals)
   - Includes exact values for every breakpoint: column counts, gutter widths, max-widths, and component size changes

4. **Component API Specification**: COCO translates design variations into developer-friendly component interfaces:
   - Generates prop tables for each component (prop name, type, default, required/optional, description)
   - Maps design variants to component props (size: "small" | "medium" | "large")
   - Documents slot/children content specifications with content constraints
   - Specifies conditional rendering rules (show element X only when prop Y is true)
   - Creates a component composition diagram showing how components nest and interact

5. **Content and Data Specification**: COCO documents the content requirements that designers often skip:
   - Specifies character limits for every text element based on the design's space constraints
   - Identifies where content is dynamic (from API) vs. static (hardcoded), with sample API response shapes
   - Documents truncation behavior (ellipsis, line clamp, "show more") for overflow scenarios
   - Provides realistic test data sets that cover minimum, typical, and maximum content lengths
   - Notes localization considerations (text expansion factors, RTL layout requirements, translatable vs. non-translatable strings)

6. **Developer-Ready Export Package**: COCO delivers the handoff as a comprehensive, structured document:
   - Generates a single-page spec with a table of contents, component index, and cross-referenced annotations
   - Includes code snippets in the team's framework (React, Vue, Swift, Kotlin) for complex interaction patterns
   - Produces a visual diff highlighting what's new, changed, or deprecated compared to the previous version
   - Creates a QA checklist derived from the spec — every documented behavior becomes a test case
   - Adds a "Known Decisions" section documenting why certain design choices were made (context for future maintainers)

:::

::: details Results & Who Benefits

**Measurable Results**

- **Documentation time per feature**: From 8 hours of manual spec writing to **45 minutes** of AI-generated spec review and approval (91% reduction)
- **Engineer clarifying questions**: From 4.2 questions per component to **0.4** — a 90% reduction in implementation ambiguity
- **Implementation accuracy**: First-pass design fidelity increased from 72% to **96%** when engineers work from COCO-generated specs
- **Handoff-to-code cycle time**: From 5 days (including back-and-forth) to **1.5 days** for a complete feature implementation
- **Spec coverage**: Edge cases and states documented per feature increased from 60% to **98%**, reducing production bug reports related to unspecified behavior by 85%

**Who Benefits**

- **Product Designers**: Reclaim 6-8 hours per feature that were spent on tedious documentation, redirecting time to research and creative exploration
- **Front-End Engineers**: Receive unambiguous specifications with exact values, interaction details, and code hints — reducing guesswork and rework
- **QA Engineers**: Auto-generated test checklists derived from design specs ensure nothing is missed during quality assurance
- **Design Managers**: Consistent handoff quality across the team regardless of individual designer documentation habits

:::

::: details Practical Prompts

**Prompt 1: Complete Component Handoff Specification**
```
Generate a comprehensive handoff specification for this component.

Component: [name, e.g. "Notification Banner"]
Design system tokens in use: [list relevant tokens — colors, spacing, typography]

Design description:
- Layout: [describe structure — e.g. "horizontal bar, full-width, with icon, message text, action link, and dismiss button"]
- Variants: [list — e.g. info, success, warning, error]
- States: [list — e.g. default, dismissing (animation), dismissed]

Generate:
1. **Property specification table**:
   | Property | Value | Token |
   For: dimensions, padding, margin, gap, border, border-radius, background, text color, icon size, shadow

2. **Variant specifications**: What changes per variant (colors, icons, ARIA roles)

3. **Interaction specifications**:
   - Dismiss behavior (click X, auto-dismiss after [X]s, swipe on mobile)
   - Action link behavior
   - Animation: entry (slide down? fade?), exit (slide up? fade?)
   - Duration and easing for all animations

4. **Responsive behavior**: How the component adapts at mobile (<768px)

5. **Accessibility specifications**:
   - ARIA role and properties
   - Focus management
   - Screen reader announcement behavior
   - Keyboard dismissal

6. **Content specifications**:
   - Max character count for message
   - Truncation behavior
   - Action link text constraints

7. **Code hint** (React pseudocode showing the component API)
```

**Prompt 2: Multi-Screen Feature Handoff Package**
```
Generate a complete handoff package for this multi-screen feature.

Feature: [name, e.g. "User settings redesign"]
Screens:
1. [Screen name]: [brief description of the screen's purpose and main content]
2. [Screen name]: [description]
3. [Screen name]: [description]
4. [Screen name]: [description]

Design system: [name and version]
Framework: [React/Vue/SwiftUI/etc.]
Breakpoints: [list breakpoints and their pixel values]

For each screen, generate:
1. Layout specification (grid, sections, component placement with exact coordinates/spacing)
2. Component inventory (every component used on the screen, with variant and state)
3. Data requirements (what API data each section needs, with sample response)
4. Interaction map (every clickable element and what it does)
5. State variations (loading, empty, error, full-data for each data-dependent section)
6. Screen transitions (how the user arrives and leaves, animation specs)

Also generate:
- Cross-screen consistency checklist (shared patterns, navigation behavior, back-button behavior)
- Complete component prop table for any new components introduced
- QA test checklist (one test case per interaction and state documented)
```

**Prompt 3: Interaction and Animation Specification**
```
Document all interactions and animations for this feature in developer-ready detail.

Feature: [name]
Key interactions:
- [Interaction 1: e.g. "Drag to reorder items in a list"]
- [Interaction 2: e.g. "Pull down to refresh on mobile"]
- [Interaction 3: e.g. "Multi-select with shift+click"]
- [Interaction 4: e.g. "Inline edit on double-click"]

For each interaction, specify:
1. **Trigger**: What user action initiates the interaction (click, hover, drag, keyboard, gesture)
2. **Visual feedback**: What the user sees immediately (cursor change, highlight, ghost element)
3. **During interaction**: What happens while the user is performing the action (drag preview, progress indicator)
4. **Completion**: What happens when the action completes (success animation, state change, notification)
5. **Cancellation**: How the user cancels mid-interaction (Escape key, click outside, drop in invalid zone)
6. **Error case**: What happens if the action fails (error toast, revert animation, retry option)

Animation specifications:
- Property animated: [e.g. transform, opacity, height]
- Duration: [ms]
- Easing: [CSS easing function or cubic-bezier values]
- Delay: [ms, if any]
- Stagger: [ms between items, if list animation]

Include code snippets for complex animations using [CSS/Framer Motion/GSAP — specify preference].
```

**Prompt 4: Content Specification and Data Mapping**
```
Generate content specifications and data mapping for this design.

Screen: [name]
Data source: [API endpoint or describe where data comes from]

For every text element on the screen, specify:
1. **Element name**: [e.g. "Page title", "Card subtitle", "CTA button label"]
2. **Content type**: Static (hardcoded) or Dynamic (from API field [field name])
3. **Sample content**: Realistic example text
4. **Character limit**: Maximum characters before truncation
5. **Truncation behavior**: Ellipsis, line-clamp (how many lines), "show more", or none (must fit)
6. **Localization note**: Expected text expansion for longest target language (e.g. German: +35%)
7. **Empty/null behavior**: What shows if the data field is null or empty

For dynamic content, provide:
- Expected API response shape (JSON)
- Field mapping: API field → UI element
- Transformation rules (date formatting, number formatting, name abbreviation)
- Loading behavior per field (skeleton width, shimmer)
- Error behavior per field (if API fails, what does this element show?)

Output as a content specification table plus API data mapping document.
```

**Prompt 5: Design Change Diff Documentation**
```
Document the differences between the previous version and this updated design for developer handoff.

Previous design: [describe or reference version — e.g. "current production version as of [date]"]
Updated design: [describe what changed and why]

Changes made:
- [Change 1: e.g. "Card component layout changed from vertical to horizontal on desktop"]
- [Change 2: e.g. "New 'quick actions' menu added to table rows"]
- [Change 3: e.g. "Color tokens updated for accessibility compliance"]
- [Change 4: e.g. "Mobile navigation changed from hamburger to bottom tab bar"]

For each change, generate:
1. **What changed**: Visual/behavioral description
2. **Why it changed**: Design rationale (business reason, user feedback, accessibility requirement)
3. **Before values**: Exact properties/specs of the old design
4. **After values**: Exact properties/specs of the new design
5. **Implementation impact**: What code needs to change (CSS only? Component restructure? New component?)
6. **Migration notes**: Can this be done incrementally or must it ship all at once?
7. **Testing focus**: What to regression-test after making this change

Output as a change log document that developers can use as a PR checklist.
```

:::

## 11. AI Icon Set Consistency Checker

> Audits icon libraries of **500+ icons** in **under 30 minutes** — catching 98% of visual inconsistencies that manual reviews miss across stroke weight, optical size, and grid alignment.

::: details Pain Point & How COCO Solves It

**The Pain: Icon Sets That Look Like They Were Designed by 12 Different People**

Icon consistency is one of the hardest aspects of design system maintenance — and one of the most visible when it fails. A mature product's icon library typically contains 200-600 icons contributed by multiple designers over months or years. Each designer brings slightly different sensibilities: one prefers 1.5px strokes while another uses 2px. One rounds corners at 2px radius, another at 1px. One fills at 80% opacity, another at 100%. These micro-inconsistencies are invisible when reviewing icons individually but painfully obvious when icons appear side by side in a navigation bar or toolbar.

The review process for icon consistency is agonizingly manual and unreliable. A designer must open every icon, inspect its properties, compare it against the style specification, and flag deviations. For a 400-icon library, this takes 2-3 full days of focused inspection — and even dedicated reviewers miss 20-30% of issues because the human eye normalizes small differences. Icons that are "close enough" pass review but create a cumulative impression of carelessness. Users may not consciously identify individual inconsistencies, but usability research consistently shows that inconsistent iconography reduces perceived product quality and increases cognitive load during navigation.

The problem intensifies when organizations use icons from multiple sources — a mix of custom icons, open-source icon sets, and icons inherited from acquisitions or third-party integrations. Each source follows its own grid system, optical sizing conventions, and style language. Merging them into a unified library requires tedious manual normalization that few teams budget time for. The result is a Frankenstein icon set where shopping cart icons have different visual weights than user icons, arrows feel oversized relative to other symbols, and filled icons sit uncomfortably next to outlined ones in the same interface.

**How COCO Solves It**

1. **Automated Property Extraction**: COCO analyzes every icon in the library at the vector level:
   - Parses SVG files to extract all path data, stroke widths, fill colors, opacity values, and transform attributes
   - Measures the actual visual bounds of each icon within its viewBox (not just the viewBox dimensions)
   - Detects stroke weight variations across all paths within each icon and across the library
   - Identifies corner radius values on all rounded elements and checks consistency
   - Catalogs all colors used across the library to detect unintended color variations

2. **Grid and Alignment Verification**: COCO checks that every icon follows the defined grid system:
   - Verifies each icon sits within the defined keyline shapes (circle, square, vertical rectangle, horizontal rectangle)
   - Measures optical centering — not just mathematical centering — accounting for visual weight distribution
   - Checks pixel alignment at target render sizes (16px, 20px, 24px, 32px) for crisp rendering
   - Detects icons that overflow the safe zone or underutilize the grid area
   - Validates consistent padding between icon content and viewBox edges

3. **Visual Weight Balancing Analysis**: COCO ensures icons feel the same size even when their shapes differ:
   - Calculates ink density (ratio of filled pixels to total area) for each icon at target render sizes
   - Compares visual weight across icon categories — a simple arrow should not feel heavier than a complex settings gear
   - Identifies icons that are optically too small or too large relative to the library median
   - Suggests scaling adjustments (percentage increase/decrease) to achieve balanced visual weight
   - Groups icons by visual weight class and flags outliers within each group

4. **Style Rule Enforcement**: COCO validates every icon against the team's defined style specifications:
   - Checks stroke width consistency (e.g., all icons should use exactly 1.5px stroke at 24px size)
   - Validates stroke cap and join styles (round, square, bevel) match the specification
   - Ensures fill rules are consistent (evenodd vs. nonzero) and opacity values match conventions
   - Checks that line endpoints follow the defined terminal style (flat, rounded, extended)
   - Verifies that icon complexity is appropriate — flags icons that are too detailed or too simple for the set

5. **Cross-Source Normalization**: COCO identifies and resolves inconsistencies between icons from different sources:
   - Groups icons by detected source style (different stroke weights, grid sizes, or design languages)
   - Generates a normalization map showing what adjustments each source group needs
   - Produces specific transformation instructions per icon (scale by X%, adjust stroke to Y px, shift alignment by Z px)
   - Previews the normalized version alongside the original for designer approval
   - Batch-processes approved normalizations to update SVG files automatically

6. **Continuous Library Health Monitoring**: COCO prevents future inconsistencies as the library grows:
   - Validates every new icon submission against the full library style specification before it's added
   - Generates a library health report with consistency scores across dimensions (weight, alignment, style, color)
   - Tracks consistency trends over time — is the library getting more or less consistent with each update?
   - Flags "drift alerts" when a sequence of new additions gradually shifts the library style
   - Produces a quarterly icon audit report with prioritized remediation recommendations

:::

::: details Results & Who Benefits

**Measurable Results**

- **Audit time**: Full library audit of 500+ icons reduced from **3 days** of manual inspection to **28 minutes** of automated analysis
- **Inconsistency detection rate**: COCO catches **98%** of visual inconsistencies vs. **70-75%** for expert manual review
- **Stroke weight variance**: Library-wide stroke weight standard deviation reduced from ±0.4px to **±0.05px** after COCO-guided remediation
- **New icon rejection rate**: Pre-submission validation catches inconsistencies before merge, reducing post-merge fixes from 35% to **3%** of new icon submissions
- **Visual weight variance**: Optical size deviation across the library reduced from **18% coefficient of variation** to **4%** after normalization

**Who Benefits**

- **Icon Designers**: Clear, objective feedback on consistency issues rather than subjective critique — know exactly what to fix and why
- **Design System Teams**: Automated quality gate for the icon library that maintains standards without requiring manual review of every submission
- **Product Designers**: Confidence that any icon chosen from the library will look consistent alongside any other icon, eliminating per-use visual checking
- **Brand Managers**: Quantified assurance that the icon library maintains brand quality standards across all contributors and sources

:::

::: details Practical Prompts

**Prompt 1: Full Icon Library Consistency Audit**
```
Audit this icon library for visual consistency across all defined style parameters.

Icon library details:
- Total icons: [number]
- Target grid size: [e.g. 24x24px]
- Defined stroke width: [e.g. 1.5px]
- Stroke cap: [round/square/butt]
- Stroke join: [round/miter/bevel]
- Corner radius: [e.g. 2px where applicable]
- Safe zone padding: [e.g. 2px on all sides]
- Style: [outlined/filled/duotone]

Icon categories and expected icons:
- Navigation: [list icons — e.g. home, search, menu, back, forward, close]
- Actions: [list — e.g. edit, delete, copy, share, download, upload]
- Objects: [list — e.g. file, folder, image, video, link, calendar]
- Status: [list — e.g. check, warning, error, info, lock, unlock]
- Social: [list — e.g. heart, comment, bookmark, star, share]

For each icon, check:
1. Stroke width: matches specification? (measure actual stroke, not just attribute)
2. Grid alignment: centered within viewBox? Aligned to pixel grid at target size?
3. Safe zone: content within defined padding area?
4. Visual weight: ink density within acceptable range of library median?
5. Style attributes: cap, join, corner radius, fill rule match specification?
6. Color: uses only defined palette colors (or currentColor)?

Output: Consistency scorecard per icon, library-wide statistics, and prioritized fix list.
```

**Prompt 2: New Icon Submission Validation**
```
Validate this new icon submission against our icon library style guide before adding it to the library.

New icon: [name/description]
SVG code or description: [paste SVG or describe the icon]

Library style guide:
- Grid: [e.g. 24x24px with 2px padding = 20x20px live area]
- Stroke: [weight, cap, join specifications]
- Corner radius: [specification]
- Optical sizing: [keyline shapes and sizes — e.g. "circles: 20px diameter, squares: 18x18px, vertical rectangles: 16x20px"]
- Complexity level: [e.g. "maximum 30 anchor points per icon"]
- Color: [e.g. "single color, use currentColor, no fills on outlined style"]

Validate:
1. Does the stroke weight match exactly? (measure all paths)
2. Is it properly centered — optically, not just mathematically?
3. Does it fit within the correct keyline shape for its form?
4. Is the visual weight consistent with similar-complexity icons in the library?
5. Are all style attributes (cap, join, radius, color) correct?
6. Is it pixel-aligned at the target render size?
7. Is the SVG code clean? (no unnecessary groups, transforms, or metadata)

Output: PASS/FAIL with specific issues and fix instructions for each failure.
```

**Prompt 3: Icon Normalization Plan**
```
Generate a normalization plan to unify icons from multiple sources into a consistent library.

Source A: [describe — e.g. "Custom icons, 24px grid, 2px stroke, round caps"]
- Icons from this source: [list or count]

Source B: [describe — e.g. "Feather icons, 24px grid, 2px stroke, round caps, round joins"]
- Icons from this source: [list or count]

Source C: [describe — e.g. "Material icons, 24px grid, filled style, various optical sizes"]
- Icons from this source: [list or count]

Target specification: [define the unified style all icons should conform to]

For each source, analyze:
1. How does it differ from the target specification? (stroke, grid, style, weight)
2. What transformations are needed? (scale, stroke adjust, style change)
3. Which icons can be normalized automatically vs. need manual redraw?
4. Estimated effort: quick fix (SVG transform) vs. moderate (path editing) vs. full redraw

Generate:
- Normalization priority matrix (most visible/used icons first)
- Batch transformation rules for automatable fixes
- Manual redraw list for icons that can't be auto-normalized
- Before/after comparison descriptions for QA review
- Estimated total effort in designer hours
```

**Prompt 4: Icon Visual Weight Balancing Report**
```
Analyze the visual weight distribution across our icon library and recommend adjustments.

Icons to analyze (grouped by category):
- Navigation icons: [list with brief shape description — e.g. "home (house shape)", "search (magnifying glass)", "menu (3 horizontal lines)"]
- Action icons: [list]
- Object icons: [list]
- Status icons: [list]

All icons are [size, e.g. 24x24px] with [stroke weight, e.g. 1.5px stroke]

Analyze:
1. Calculate relative visual weight for each icon (considering shape complexity, fill area, stroke density)
2. Identify the median visual weight for the library
3. Flag icons that are significantly lighter or heavier than the median (>15% deviation)
4. For each outlier, explain why it feels too light/heavy (too much whitespace? Too many strokes? Shape too compact?)
5. Recommend specific adjustments:
   - Scale adjustments (make 2% larger/smaller)
   - Stroke adjustments (if allowed by style guide)
   - Design modifications (simplify busy icons, add detail to sparse icons)

Output: Visual weight distribution chart (text-based), outlier list, and recommended adjustments per icon.
```

**Prompt 5: Icon Accessibility and Usability Review**
```
Review this icon set for accessibility, recognizability, and usability.

Icons and their intended meanings:
- [Icon 1 description]: means [intended action/concept]
- [Icon 2 description]: means [intended action/concept]
- [Icon 3 description]: means [intended action/concept]
- [continue for all icons under review]

Context of use: [describe where icons appear — e.g. "toolbar in a project management app", "mobile navigation bar"]
Target audience: [describe users — e.g. "international B2B users, non-technical, ages 25-55"]

Evaluate each icon for:
1. **Recognizability**: Is the metaphor universally understood? Or culturally specific?
   - Score: Universally clear / Mostly clear / Ambiguous / Likely misunderstood
2. **Distinguishability**: Could this icon be confused with another icon in the set?
   - List any confusable pairs
3. **Scalability**: Does the icon remain recognizable at the smallest render size ([e.g. 16px])?
   - Flag icons with details that collapse at small sizes
4. **Accessibility**: Does the icon work without color? (if using color-coded icons)
5. **Labeling**: Does this icon NEED a text label, or can it stand alone?
   - Recommendation: icon-only OK / label recommended / label required

Output: Icon usability scorecard with prioritized improvements and alternative icon suggestions for any that scored poorly.
```

:::

## 12. AI Design Critique & Feedback Synthesizer

> Synthesizes feedback from **15+ stakeholders** into actionable design direction in **20 minutes** — resolving contradictory opinions that previously stalled projects for weeks.

::: details Pain Point & How COCO Solves It

**The Pain: Death by a Thousand Conflicting Opinions**

Design reviews are where good designs go to die a slow death. A typical design review cycle involves feedback from product managers, engineering leads, marketing, executives, customer success, and other designers — often 10-20 people across multiple review sessions. Each stakeholder brings legitimate but different priorities: the PM wants more features visible, the engineer worries about implementation complexity, marketing wants bolder branding, the executive wants it to "pop" more, and the accessibility lead flags compliance issues. The designer receives 40-80 individual pieces of feedback, many contradicting each other.

The synthesis burden falls entirely on the designer, who must parse subjective language, reconcile conflicts, extract actionable direction, and somehow produce a revised design that satisfies competing stakeholders. This is cognitively one of the hardest tasks in design — harder than the creative work itself. Feedback arrives in scattered formats: Figma comments, Slack messages, email threads, meeting recordings, and verbal hallway conversations. A single piece of feedback like "make it feel more premium" requires interpretation: does that mean more whitespace? Different typography? Darker colors? Subtle animations? The designer's interpretation may not match the stakeholder's intent, leading to another review cycle.

The political dimension makes it worse. When the VP of Marketing says "this needs to be more brand-forward" and the VP of Product says "reduce the branding, focus on the content," the designer faces a political decision disguised as a design decision. Without a structured way to surface these conflicts and resolve them through explicit trade-off discussions, designers either try to please everyone (resulting in a compromised design) or implicitly choose a side (risking political fallout). Projects stall for weeks in review limbo while designers iterate on contradictory feedback.

**How COCO Solves It**

1. **Multi-Source Feedback Collection and Normalization**: COCO aggregates feedback from all channels into a unified view:
   - Ingests feedback from Figma comments, Slack threads, email, meeting transcripts, and direct messages
   - Normalizes subjective language into concrete design attributes ("make it pop" → "increase visual contrast and color saturation")
   - Tags each piece of feedback with the stakeholder's role, seniority, and domain expertise
   - Deduplicates identical feedback from multiple reviewers (5 people said the same thing = 1 issue, not 5)
   - Timestamps and orders feedback to track how opinions evolved across review rounds

2. **Conflict Detection and Mapping**: COCO explicitly surfaces contradictions instead of letting them fester:
   - Identifies pairs of feedback that directly conflict (stakeholder A wants more features, stakeholder B wants less)
   - Maps each conflict on a priority-impact matrix showing which trade-offs matter most
   - Generates "tension diagrams" showing the opposing forces acting on key design decisions
   - Assesses which conflicts are genuine (real trade-offs) vs. apparent (different words for the same request)
   - Produces a conflict resolution agenda for focused discussion with decision-makers

3. **Thematic Analysis and Prioritization**: COCO groups feedback into actionable themes ranked by importance:
   - Clusters feedback into themes (layout, typography, color, content, interaction, information architecture)
   - Calculates theme urgency based on number of stakeholders, their seniority, and alignment with product goals
   - Separates "must-address" feedback (from decision-makers, accessibility requirements, blockers) from "nice-to-have"
   - Identifies feedback that aligns with user research findings vs. pure stakeholder opinion
   - Produces a prioritized action list: the top 10 changes that will address 80% of stakeholder concerns

4. **Actionable Revision Plan**: COCO translates synthesized feedback into a specific design revision plan:
   - Generates concrete design changes for each prioritized theme (not vague direction but specific adjustments)
   - Maps each proposed change to the feedback it addresses (so stakeholders can see their input was heard)
   - Estimates revision effort for each change (quick CSS tweak vs. significant layout restructure)
   - Groups changes into a phased revision approach (address critical feedback first, iterate on secondary)
   - Creates a before/after preview description showing the impact of proposed changes

5. **Stakeholder Communication Generator**: COCO drafts the responses and summaries that designers hate writing:
   - Generates a feedback summary email showing what was heard and what will be acted on
   - Drafts diplomatic responses to feedback that won't be incorporated, with rationale
   - Creates a "decisions made" document for organizational memory (why certain trade-offs were resolved a specific way)
   - Produces per-stakeholder summaries highlighting the feedback from their domain that's being addressed
   - Generates design review presentation notes that frame revisions as responses to specific feedback

6. **Review Cycle Analytics**: COCO tracks feedback patterns to improve the design review process itself:
   - Measures review cycle efficiency: how many rounds to convergence, which stakeholders require most iterations
   - Identifies recurring feedback patterns that indicate systemic issues (if navigation feedback comes up every review, the nav approach needs rethinking)
   - Tracks feedback follow-through: was feedback from round N actually addressed in round N+1?
   - Generates a "review health" dashboard showing average time-to-alignment per project
   - Recommends process improvements based on analysis of completed review cycles

:::

::: details Results & Who Benefits

**Measurable Results**

- **Feedback synthesis time**: From 6-8 hours of manual parsing to **20 minutes** of AI-assisted synthesis and action planning
- **Review cycles to approval**: From an average of 4.2 review rounds to **2.1 rounds** — conflicts surface and resolve faster
- **Project stall time**: Design review-related project delays reduced from **12 days average** to **3 days** (75% reduction)
- **Stakeholder satisfaction**: Post-review surveys show stakeholders feel "heard" **89% of the time** (up from 54%) because feedback is explicitly mapped to actions
- **Contradiction resolution rate**: 92% of conflicting feedback is resolved in a single focused meeting using COCO's conflict analysis, vs. 40% without structured synthesis

**Who Benefits**

- **Product Designers**: Transform the most draining part of the job into a structured, manageable process — spend time designing, not decoding feedback
- **Product Managers**: Clear visibility into conflicting stakeholder priorities and explicit trade-off discussions instead of passive-aggressive design iterations
- **Design Directors**: Data on review cycle efficiency and recurring feedback patterns to improve team processes and stakeholder management
- **All Reviewers**: Confidence that their feedback is captured, categorized, and addressed — or explicitly deprioritized with clear rationale

:::

::: details Practical Prompts

**Prompt 1: Multi-Stakeholder Feedback Synthesis**
```
Synthesize all feedback from this design review into a prioritized action plan.

Design under review: [feature/screen name]
Review round: [e.g. Round 2]

Feedback received:
- [Stakeholder name, role]: "[their feedback, verbatim or summarized]"
- [Stakeholder name, role]: "[feedback]"
- [Stakeholder name, role]: "[feedback]"
- [Stakeholder name, role]: "[feedback]"
- [Stakeholder name, role]: "[feedback]"
- [Stakeholder name, role]: "[feedback]"
- [continue for all feedback]

Product goals for this feature: [list top 3 goals]
User research insights: [list key findings that should inform design decisions]

Produce:
1. **Feedback themes**: Group all feedback into 5-8 themes with count of stakeholders per theme
2. **Conflict map**: Identify any contradictory feedback pairs and describe the tension
3. **Prioritized action list**: Top 10 changes ranked by stakeholder consensus + alignment with product goals
4. **Parking lot**: Feedback that won't be addressed this round, with rationale
5. **Recommended next steps**: Specific design changes to make before the next review

Format for a 15-minute team alignment discussion.
```

**Prompt 2: Subjective Feedback Translator**
```
Translate these subjective/vague feedback comments into specific, actionable design directions.

Feedback comments:
1. "[Vague comment — e.g. 'It needs to feel more premium']" — from [role]
2. "[e.g. 'The page feels cluttered']" — from [role]
3. "[e.g. 'Can we make it more modern?']" — from [role]
4. "[e.g. 'It doesn't feel like our brand']" — from [role]
5. "[e.g. 'The flow feels confusing']" — from [role]
6. "[e.g. 'It needs more visual hierarchy']" — from [role]

Current design context: [brief description of the current design — colors, typography, layout approach]
Brand guidelines: [brief summary of brand attributes and style]

For each comment, provide:
1. **Interpretation**: What the stakeholder likely means in design terms
2. **Possible root causes**: 2-3 specific design elements that might trigger this reaction
3. **Concrete actions**: 3 specific, measurable changes that would address the feedback
   (e.g., "Increase heading font weight from 500 to 700" not "make it bolder")
4. **Validation question**: A question to ask the stakeholder to confirm interpretation
5. **Risk**: What could go wrong if we over-correct on this feedback

Output as an interpretation guide the designer can reference during revision.
```

**Prompt 3: Contradictory Feedback Resolution Framework**
```
Analyze these conflicting pieces of feedback and propose a resolution framework.

Conflicts:
1. Conflict A:
   - [Stakeholder 1, role]: "[their position — e.g. 'Show all features upfront to reduce clicks']"
   - [Stakeholder 2, role]: "[opposing position — e.g. 'Simplify the interface, too many options visible']"

2. Conflict B:
   - [Stakeholder 3, role]: "[position]"
   - [Stakeholder 4, role]: "[opposing position]"

3. Conflict C:
   - [Stakeholder 5, role]: "[position]"
   - [Stakeholder 6, role]: "[opposing position]"

Product priorities: [list in order — e.g. 1. User retention 2. Conversion 3. Brand perception]
User data available: [any relevant analytics or research]

For each conflict:
1. **Nature of conflict**: Is this a real trade-off, a misunderstanding, or a scope issue?
2. **User perspective**: What does user data/research suggest about which direction is better?
3. **Compromise solutions**: 2 design approaches that partially satisfy both sides
4. **Recommended resolution**: Which direction to take, with explicit rationale tied to product priorities
5. **How to communicate**: Suggested framing for the stakeholder whose feedback isn't prioritized
6. **Validation plan**: How to test the chosen direction to confirm it was the right call

Output as a conflict resolution brief for a decision meeting.
```

**Prompt 4: Design Review Summary Email**
```
Draft a design review summary email that confirms what was heard and outlines next steps.

Meeting attendees: [list names and roles]
Design reviewed: [feature name, review round number]

Key discussion points:
- [Point 1: what was discussed and any decisions made]
- [Point 2]
- [Point 3]
- [Point 4]

Feedback that will be incorporated:
- [Change 1]: Addresses feedback from [stakeholder(s)]
- [Change 2]: Addresses feedback from [stakeholder(s)]
- [Change 3]: Addresses feedback from [stakeholder(s)]

Feedback deferred to later:
- [Item]: Reason for deferral
- [Item]: Reason for deferral

Open questions requiring follow-up:
- [Question]: Who needs to answer, by when

Draft an email that:
1. Thanks reviewers for their time
2. Summarizes key feedback themes (not every individual comment)
3. Lists specific changes that will be made
4. Explains what's deferred and why (diplomatically)
5. States the timeline for the next revision
6. Calls out any open decisions that need resolution before the next round

Tone: Professional, concise, appreciative. Under 400 words.
```

**Prompt 5: Recurring Feedback Pattern Analysis**
```
Analyze feedback patterns across multiple design reviews to identify systemic issues.

Review history:
- Review 1 ([project name], [date]): [list top feedback themes]
- Review 2 ([project name], [date]): [list top feedback themes]
- Review 3 ([project name], [date]): [list top feedback themes]
- Review 4 ([project name], [date]): [list top feedback themes]
- Review 5 ([project name], [date]): [list top feedback themes]

Analyze:
1. **Recurring themes**: Which feedback topics appear across 3+ reviews?
2. **Stakeholder patterns**: Do specific stakeholders consistently raise the same concerns? What does this indicate?
3. **Resolution effectiveness**: Are certain types of feedback resolved permanently after one round, while others keep resurfacing?
4. **Root cause analysis**: For recurring feedback, what systemic design practice or process gap might be the root cause?
5. **Process recommendations**:
   - Design practice changes to prevent recurring feedback (e.g., "always create mobile wireframes before review")
   - Review process changes (e.g., "share designs with [role] 24 hours before review for async pre-feedback")
   - Template or checklist to address common issues before review

Output as a design review retrospective report with specific, implementable recommendations.
```

:::

## 13. AI Figma Component Usage Analyzer

> Analyzes component usage across **200+ Figma files** in **under 1 hour** — identifying orphaned components, detached instances, and adoption gaps that waste 30% of design system investment.

::: details Pain Point & How COCO Solves It

**The Pain: A Design System Nobody Fully Adopts**

Design systems represent massive investment — typically 2-4 full-time equivalent designers and engineers maintaining a component library, documentation site, and governance process. Yet most organizations have no reliable way to measure whether the investment is paying off. The central question — "Are teams actually using our design system components?" — is surprisingly difficult to answer. Figma's native analytics offer limited insight, and manual audits of individual files are impossibly time-consuming when a design organization produces hundreds of files per quarter.

The adoption gap manifests in three expensive ways. First, detached instances: designers start with a library component but then detach it to make modifications, severing the connection to the source of truth. Once detached, those instances won't receive updates when the component is improved, creating an ever-growing maintenance burden. Second, custom recreations: designers build components from scratch that functionally duplicate library components, either because they didn't know the library component existed or found it too rigid for their use case. Third, abandoned components: the library contains components that no team uses — dead code that adds maintenance cost and cognitive overhead when browsing the library. Across a typical enterprise design organization, these three issues waste an estimated 25-35% of design system ROI.

The data problem extends beyond simple adoption counting. Design system teams need to understand why adoption gaps exist. Is the button component used everywhere except in the checkout flow because checkout has special requirements? Is the modal component frequently detached because it's missing a configuration option? Is the new card component being adopted by some teams but not others — and is that because of awareness, file migration lag, or genuine unsuitability? Without this diagnostic data, design system teams can't prioritize improvements effectively. They invest effort upgrading components nobody wants while neglecting the components everybody is hacking around.

**How COCO Solves It**

1. **Automated Cross-File Component Scanning**: COCO analyzes every Figma file in the organization to build a comprehensive usage map:
   - Connects to the Figma API to enumerate all team projects, files, and pages
   - Identifies every instance of every library component across all files, including nested instances
   - Detects detached instances by comparing layer structures against known component signatures
   - Finds custom recreations by identifying groups/frames that structurally match library components but aren't linked
   - Processes 200+ files in under an hour with incremental scanning (only re-scans files modified since last analysis)

2. **Usage Analytics Dashboard**: COCO produces actionable metrics that design system teams actually need:
   - Per-component usage count with breakdown by team, project, and file
   - Adoption rate per component: (instances used) / (opportunities where it should have been used)
   - Detachment rate: percentage of instances that were detached after initial placement
   - Version distribution: which version of each component is most used (indicates migration completion)
   - Trend data: is adoption increasing or decreasing over the last 3/6/12 months?

3. **Detachment Analysis and Root Cause Identification**: COCO diagnoses why designers detach components:
   - Compares detached instances against their source component to identify what was modified
   - Clusters modifications into categories (color override, layout change, content structure, added element, removed element)
   - Identifies the top 5 most common reasons components are detached — these are the highest-priority library improvements
   - Maps detachment rate against component flexibility (components with fewer variant options have higher detachment)
   - Generates specific feature requests: "Adding a 'compact' size variant would prevent 73% of detachments on the Card component"

4. **Orphan and Redundancy Detection**: COCO identifies waste in the component library:
   - Flags library components with zero instances across all files (orphans) — candidates for deprecation
   - Identifies near-duplicate components that could be consolidated (e.g., CardSmall and CompactCard serve the same purpose)
   - Detects components that are only used by a single team — should they be team-level, not library-level?
   - Finds Figma styles (colors, text styles, effects) that aren't applied anywhere
   - Calculates maintenance cost of orphan components (designer time spent updating components nobody uses)

5. **Team-Level Adoption Reporting**: COCO breaks down adoption by team so governance is targeted, not generic:
   - Per-team adoption scorecards showing overall component usage rate and trends
   - Identifies which teams are "power users" vs. which teams need adoption support
   - Detects teams still using deprecated components and generates migration reminders
   - Highlights team-specific component requests (Team X keeps detaching the Table because they need sortable columns)
   - Produces "adoption nudges" — contextual recommendations sent when a designer creates a custom component that matches a library component

6. **Impact Measurement and ROI Reporting**: COCO quantifies the design system's value to justify continued investment:
   - Calculates time saved per month by component reuse (instances × estimated creation time if built from scratch)
   - Measures consistency improvement: what percentage of the product UI uses standardized components?
   - Tracks bug reduction: are teams using library components filing fewer visual QA bugs?
   - Estimates the cost of technical debt from detached instances and custom recreations
   - Produces executive-friendly ROI reports that connect design system investment to productivity and quality metrics

:::

::: details Results & Who Benefits

**Measurable Results**

- **Component audit time**: From 2 weeks of manual file review to **under 1 hour** of automated scanning across 200+ files
- **Detached instance discovery**: Identifies **100%** of detached instances vs. **estimated 15-20%** awareness through manual spot-checking
- **Orphan component reduction**: Library pruned from 340 components to **280** (18% reduction) after identifying zero-usage components, reducing maintenance burden
- **Targeted improvement ROI**: Top-5 most-detached component improvements drove adoption from 62% to **88%** within one quarter
- **Design system time savings**: Validated that component reuse saves **420 designer-hours/month** across the organization — a metric previously impossible to calculate

**Who Benefits**

- **Design System Teams**: Data-driven prioritization of component improvements based on actual usage rather than guesswork or the loudest request
- **Product Designers**: Better-fitting components that evolve based on real usage patterns, reducing the need to detach and customize
- **Design Leadership**: Quantified ROI metrics to defend design system investment and allocate resources to highest-impact improvements
- **Engineering Teams**: Fewer one-off component implementations as design system adoption increases, reducing front-end maintenance burden

:::

::: details Practical Prompts

**Prompt 1: Component Usage Inventory**
```
Generate a comprehensive component usage report for our design system.

Design system library: [name, e.g. "Acme Design System v3.2"]
Component categories:
- Primitives: [list — e.g. Button, Input, Checkbox, Radio, Toggle, Select]
- Layout: [list — e.g. Card, Modal, Drawer, Accordion, Tabs, Table]
- Navigation: [list — e.g. Navbar, Sidebar, Breadcrumbs, Pagination, Stepper]
- Feedback: [list — e.g. Toast, Alert, Badge, Progress, Skeleton, Spinner]
- Data: [list — e.g. Avatar, Tag, Tooltip, Popover, Chart]

Teams/projects using the library:
- [Team A]: [list main Figma projects/files]
- [Team B]: [list]
- [Team C]: [list]
- [Team D]: [list]

For each component, I need:
1. Total instances across all files
2. Instances per team
3. Most common variant used (e.g. "Button: primary, medium" accounts for 60% of instances)
4. Least used variants (candidates for deprecation?)
5. Detached instance count (if known)
6. Last time the component was placed in a new design (recency)

Output as a usage matrix table and highlight: top 10 most used, top 10 least used, and components with high detachment rates.
```

**Prompt 2: Detachment Root Cause Analysis**
```
Analyze why designers are detaching these components and recommend library improvements.

Components with high detachment rates:
1. [Component name]: [X]% detachment rate
   - Known modifications after detach: [describe what designers typically change — e.g. "add an icon to the left of the label", "change the layout from vertical to horizontal"]

2. [Component name]: [X]% detachment rate
   - Known modifications: [describe]

3. [Component name]: [X]% detachment rate
   - Known modifications: [describe]

Current component API for each:
- [Component 1]: Variants: [list]. Props: [list]. Slots: [list].
- [Component 2]: Variants: [list]. Props: [list]. Slots: [list].
- [Component 3]: Variants: [list]. Props: [list]. Slots: [list].

Analyze:
1. What feature or variant would prevent each common detachment reason?
2. Prioritize improvements by: (number of detachments prevented) × (effort to implement)
3. Are any detachments actually valid use cases that shouldn't be in the library? (one-off needs)
4. Estimate adoption rate improvement if the top recommendations are implemented
5. Draft a component enhancement proposal for the highest-priority improvement

Output as a detachment analysis report with specific, scoped component improvement proposals.
```

**Prompt 3: Design System Adoption Scorecard**
```
Create team-by-team design system adoption scorecards.

Teams to evaluate:
- [Team A]: [brief context — product area, team size, how long they've used the design system]
- [Team B]: [context]
- [Team C]: [context]
- [Team D]: [context]

Scoring criteria:
1. **Component adoption**: % of UI elements that use library components (vs. custom)
2. **Token adoption**: % of styles that reference design tokens (vs. hardcoded values)
3. **Version currency**: % of components on the latest library version
4. **Detachment rate**: % of placed components that have been detached
5. **Pattern compliance**: Do layouts follow documented patterns? (grid, spacing, typography scale)

Data available per team:
- [Team A]: [provide whatever usage data you have]
- [Team B]: [data]
- [Team C]: [data]
- [Team D]: [data]

For each team, produce:
- Overall adoption score (0-100)
- Score breakdown per criterion
- Comparison to organization average
- Top 3 areas for improvement with specific recommendations
- Recognition: what is this team doing well?

Also produce: Organization-level summary with trends and recommended actions for the design system team.
```

**Prompt 4: Component Library Cleanup Proposal**
```
Analyze our component library and propose a cleanup — what to deprecate, consolidate, and promote.

Current library inventory:
[List all components with: name, creation date, last update date, approximate usage count if known]

Known issues:
- [List any known redundancies — e.g. "We have both 'Dialog' and 'Modal' which seem similar"]
- [List any known low-usage components]
- [List any components teams have requested but don't exist]

Analyze and recommend:
1. **Deprecate**: Components with zero/near-zero usage — safe to remove
   - For each: migration path (what should teams use instead?)
2. **Consolidate**: Components that overlap in purpose — merge into one flexible component
   - For each: proposed unified component API that covers both use cases
3. **Promote**: Team-level components that should become library components (used by 2+ teams)
   - For each: what modifications needed to make it library-quality
4. **Improve**: Components with high usage but high detachment (need more variants/flexibility)
5. **Create**: Missing components identified by gap analysis (teams keep building custom)

Output as a library cleanup roadmap with effort estimates and priority tiers.
```

**Prompt 5: Design System ROI Report**
```
Generate a design system ROI report for stakeholder presentation.

Design system investment:
- Team size: [X] designers + [Y] engineers dedicated to design system
- Annual cost: $[amount] (loaded salaries + tools + infrastructure)
- Time period: [e.g. last 12 months]

Usage metrics:
- Total component instances across all products: [number]
- Teams using the design system: [number] of [total teams]
- Average component adoption rate: [X]%
- Components in the library: [number]

Assumptions for calculation:
- Average time to build a component from scratch: [e.g. 4 hours design + 8 hours engineering]
- Average time to use a library component: [e.g. 15 minutes]
- Average hourly rate (loaded): $[amount]
- Bug rate for custom components vs. library components: [e.g. 3x higher for custom]

Calculate and present:
1. **Time saved**: Hours saved by reusing library components instead of building custom
2. **Cost saved**: Dollar value of time saved
3. **Quality impact**: Estimated bugs prevented by using tested library components
4. **Consistency score**: % of product UI that uses standardized components
5. **ROI ratio**: (value delivered) / (investment) — express as X:1
6. **Payback period**: When did the design system investment break even?

Format as an executive presentation with key metrics on page 1 and supporting detail following.
```

:::

## 14. AI Dark Mode Design Converter

> Converts light mode designs to **production-ready dark mode** in **4 hours** instead of **3 weeks** — handling semantic color mapping, elevation adjustments, and image treatments across 100+ screens.

::: details Pain Point & How COCO Solves It

**The Pain: Dark Mode Is Not "Invert the Colors"**

Dark mode has shifted from a nice-to-have preference to a user expectation — 82% of smartphone users report using dark mode at least some of the time. Yet implementing dark mode properly is one of the most underestimated design tasks in product development. Teams that approach dark mode as a simple color inversion quickly discover that a light-mode design inverted produces an unusable, ugly, accessibility-failing disaster. Pure white text on pure black backgrounds creates harsh contrast that causes eye strain. Shadows become invisible on dark surfaces. Images with transparent backgrounds sprout ugly white halos. Brand colors that looked vibrant on white look garish on dark gray.

Proper dark mode design requires rethinking the entire color system semantically. Surface elevation — which in light mode is communicated through shadows — must shift to surface lightness in dark mode (higher surfaces are lighter). Text hierarchies need recalibration because the same opacity differences that create readable primary/secondary text on white fail on dark backgrounds. Brand colors need desaturation or lightness adjustment to avoid vibrating on dark surfaces. Status colors (red for error, green for success) need different values to maintain recognizability without overwhelming the interface. Each of these adjustments interacts with the others, creating a complex optimization problem.

The scale of the work is what makes it truly painful. A typical SaaS product has 80-150 unique screens. Each screen needs dark mode treatment, and each treatment involves dozens of individual color decisions. A single designer working full-time can handle 5-8 screens per day — putting the timeline at 2-4 weeks for a complete dark mode conversion. Multiply by the need for responsive variants, component states, and edge cases, and dark mode easily becomes a quarter-long project. Most teams cut corners, launching dark mode with visual issues that create a subpar experience: cards that blend into backgrounds, unreadable text on colored surfaces, and images that look wrong in dark context.

**How COCO Solves It**

1. **Semantic Color System Analysis**: COCO maps the light mode design into a semantic color structure before converting:
   - Analyzes the entire light mode design to identify all unique colors and their semantic roles (background, surface, text, border, brand, status)
   - Maps each color to its functional purpose rather than its visual value (this isn't "white" — it's "background-primary")
   - Identifies color relationships that must be preserved (primary text is always X contrast ratio above its background)
   - Detects hardcoded colors that should be tokens and flags them for tokenization
   - Creates a complete semantic color inventory with light mode values ready for dark mode mapping

2. **Intelligent Dark Mode Palette Generation**: COCO generates dark mode colors using established perceptual science:
   - Converts the background system to dark surfaces using Material Design 3 elevation principles (not pure black — #121212 base)
   - Adjusts brand colors by reducing saturation and increasing lightness to prevent vibration on dark backgrounds
   - Recalibrates text colors to maintain the same apparent hierarchy (primary/secondary/disabled) on dark surfaces
   - Modifies status colors (error, warning, success, info) for correct recognition and sufficient contrast on dark
   - Generates the complete dark mode palette with every color mapped from its light mode semantic equivalent

3. **Surface Elevation Redesign**: COCO transforms the elevation system from shadow-based to lightness-based:
   - Maps each light mode elevation level (shadow depth) to a dark mode surface lightness level
   - Creates 5-8 elevation tiers with precisely calibrated surface colors (each step lighter than the one below)
   - Ensures borders and dividers are visible against dark surfaces (often needs opacity and color adjustment)
   - Adjusts overlay colors (modal backdrops, drawer scrims) for appropriate dimming on dark backgrounds
   - Validates that elevation hierarchy is visually clear — users can distinguish surface layers at a glance

4. **Image and Media Treatment**: COCO handles the visual assets that break most dark mode implementations:
   - Identifies images with transparent backgrounds that need dark-compatible treatment (adding dark backgrounds or adjusting transparency)
   - Recommends dimming values for photography to prevent bright images from overwhelming dark interfaces
   - Adjusts illustration colors for dark context (light illustrations on dark backgrounds need inversion or recoloring)
   - Handles logo variants — detects when the primary logo is invisible on dark backgrounds and flags for alternative version
   - Generates CSS/filter recommendations for images that can be adapted programmatically vs. those needing new assets

5. **Component-Level Dark Mode Specification**: COCO generates dark mode specs for every component in the design system:
   - Produces a dark mode variant specification for each component with exact color values for every state
   - Handles complex components: data tables with alternating rows, charts with multiple series, form fields with validation states
   - Specifies focus indicators that are visible on dark backgrounds (light mode blue focus rings often disappear)
   - Documents hover and active state colors that provide visible feedback without harsh contrast shifts
   - Creates a component migration checklist showing what changes per component for dark mode support

6. **Cross-Screen Validation and Consistency**: COCO verifies the dark mode conversion works holistically:
   - Renders every screen in dark mode and runs automated contrast checks against WCAG standards
   - Identifies screens where the dark mode conversion creates layout issues (elements that relied on shadow for separation)
   - Checks that the dark mode experience feels consistent across all screens — same surface hierarchy, same text colors
   - Validates that transitions between light and dark mode don't create flash-of-wrong-color artifacts
   - Generates a dark mode QA report with pass/fail per screen and prioritized fix list

:::

::: details Results & Who Benefits

**Measurable Results**

- **Conversion timeline**: Full dark mode design for 120 screens reduced from **3 weeks** to **4 hours** of AI-generated conversion plus designer review
- **WCAG compliance**: Dark mode designs achieve **100% AA contrast compliance** on first pass (vs. typical 65% when done manually)
- **User preference satisfaction**: Dark mode user satisfaction scores reach **4.6/5** (vs. industry average of 3.8/5 for rushed dark mode implementations)
- **Asset rework**: Image and illustration dark mode compatibility issues caught proactively, reducing post-launch hotfixes from **25** to **2**
- **Token coverage**: Dark mode conversion drives tokenization from 71% to **99%** of all color values, improving overall design system maturity

**Who Benefits**

- **Product Designers**: Skip weeks of tedious color-picking and focus on reviewing and refining AI-generated dark mode designs
- **Front-End Engineers**: Complete token-based dark mode specifications that can be implemented as a theme swap rather than per-component overrides
- **Product Managers**: Ship dark mode as a standard feature without a multi-week design detour that delays the roadmap
- **End Users**: A polished, well-considered dark mode experience rather than the hastily inverted version that causes eye strain and readability issues

:::

::: details Practical Prompts

**Prompt 1: Light-to-Dark Mode Color System Conversion**
```
Convert our light mode color system to a complete dark mode palette.

Light mode colors (semantic):
- Background primary: [HEX]
- Background secondary: [HEX]
- Surface (cards, modals): [HEX]
- Surface elevated (dropdowns, popovers): [HEX]
- Text primary: [HEX]
- Text secondary: [HEX]
- Text disabled: [HEX]
- Brand primary: [HEX]
- Brand secondary: [HEX]
- Border default: [HEX]
- Border strong: [HEX]
- Success: [HEX]
- Warning: [HEX]
- Error: [HEX]
- Info: [HEX]

Surface elevation levels in light mode (by shadow):
- Level 0: No shadow (flat)
- Level 1: [shadow specs]
- Level 2: [shadow specs]
- Level 3: [shadow specs]
- Level 4: [shadow specs]

For each light mode color, generate:
1. Dark mode equivalent with HEX value
2. Rationale for the adjustment (why this specific value)
3. Contrast ratio of text colors on their respective backgrounds (must pass WCAG AA)
4. Perceptual relationship preservation check (is the visual hierarchy maintained?)

Also generate:
- Dark mode elevation scale (surface colors for each level, replacing shadows)
- Overlay/scrim colors for dark mode
- Focus indicator colors for dark mode
- Selection/highlight colors for dark mode

Output as a token mapping table: Token Name | Light Value | Dark Value | Notes
```

**Prompt 2: Component Dark Mode Specification**
```
Generate dark mode specifications for this component across all its states.

Component: [name, e.g. "Data Table"]
Light mode specifications:
- Background: [HEX]
- Header background: [HEX]
- Row background (even): [HEX]
- Row background (odd): [HEX]
- Row hover: [HEX]
- Row selected: [HEX]
- Border color: [HEX]
- Text primary: [HEX]
- Text secondary: [HEX]
- Sort icon: [HEX]
- Pagination text: [HEX]
- Pagination active: [HEX]

States to convert:
- Default, hover, selected, disabled, loading (skeleton), error, empty

For each state in dark mode:
1. Every color value with HEX
2. Contrast ratio verification (text on background)
3. Any non-color changes needed (e.g., border style change from solid to subtle, shadow removal)
4. Interaction feedback visibility check (is hover state visible enough on dark background?)

Also address:
- Does the table need a border in dark mode? (it might not have one in light mode but need one on dark)
- How does the skeleton loading state adapt? (shimmer direction, colors)
- Are sort indicators and icons visible?

Output as a dark mode component spec sheet ready for engineering.
```

**Prompt 3: Image and Asset Dark Mode Strategy**
```
Develop a dark mode strategy for all visual assets in our product.

Asset inventory:
- Product screenshots used in: [e.g. onboarding, help center, marketing pages]
- Illustrations style: [e.g. "flat illustration, light backgrounds, bright colors"]
- Icons: [outlined/filled, single-color/multi-color]
- Logos: [describe — e.g. "dark logo on light background, no light version exists"]
- User-uploaded images: [where they appear — avatars, cover photos, content images]
- Charts/graphs: [types and current color scheme]
- Decorative elements: [gradients, patterns, backgrounds]

For each asset type, provide:
1. **Dark mode treatment**: How to adapt (dim, recolor, swap, leave as-is)
2. **CSS/code approach**: Can it be handled with CSS filters/variables, or does it need a new asset?
3. **Specific values**: Filter percentages, overlay colors, opacity adjustments
4. **Edge cases**: What goes wrong without treatment (white halos, invisible elements, harsh contrast)
5. **Asset creation needs**: Which assets need a dark-mode-specific version created manually?

Output: Asset treatment guide organized by type, with implementation approach and priority.
```

**Prompt 4: Dark Mode Accessibility Verification**
```
Verify that this dark mode design meets accessibility requirements.

Dark mode color specifications:
[Paste your dark mode color tokens — backgrounds, surfaces, text colors, interactive colors, status colors]

Screen descriptions to verify:
1. [Screen name]: [describe key elements and their colors — e.g. "header with brand-primary background, white text, search input with surface background"]
2. [Screen name]: [describe]
3. [Screen name]: [describe]

Verify for each screen:
1. **Text contrast**: All text meets WCAG AA (4.5:1 normal, 3:1 large) — calculate each combination
2. **Non-text contrast**: All interactive elements (buttons, inputs, icons) meet 3:1 against adjacent colors
3. **Focus indicators**: Are they visible on dark backgrounds? (many light-mode focus rings fail on dark)
4. **Selection states**: Can users distinguish selected from unselected items?
5. **Disabled states**: Are disabled elements recognizable as disabled but still legible?
6. **Color-only information**: Any instances where information relies solely on color? (more critical on dark where color perception changes)

Output: Accessibility verification matrix with PASS/FAIL per criterion per screen, and specific fix instructions for failures.
```

**Prompt 5: Dark Mode Design Token Export**
```
Generate production-ready dark mode design tokens for export.

Token structure:
- Format needed: [CSS custom properties / Tailwind config / JSON / Figma variables — pick one or more]
- Naming convention: [e.g. "--color-bg-primary" or "$color.background.primary" or "color/background/primary"]

Light mode tokens (the source of truth):
[Paste complete light mode token list with values]

Dark mode values (from our conversion):
[Paste complete dark mode token list with values]

Generate:
1. Complete token file in the requested format(s) with both light and dark values
2. Theme switching mechanism:
   - For CSS: media query approach + class-based override approach
   - For Tailwind: dark: variant configuration
   - For Figma: variable mode setup instructions
3. Fallback strategy for browsers/environments that don't support theming
4. Token validation: flag any tokens that exist in light but are missing in dark (or vice versa)
5. Usage documentation: how engineers should reference these tokens (examples for common patterns)

Output: Copy-paste-ready token files with implementation instructions.
```

:::

## 15. AI Micro-Interaction Prototype Generator

> Generates **production-ready micro-interaction specifications** in **90 minutes** — complete with timing curves, state transitions, and code snippets that previously took **2 weeks** to prototype and document.

::: details Pain Point & How COCO Solves It

**The Pain: Micro-Interactions That Get Cut Because Nobody Has Time to Spec Them**

Micro-interactions are the difference between a product that feels "fine" and one that feels delightful. The subtle bounce when a toggle switches, the satisfying checkmark animation on task completion, the smooth accordion expansion that maintains spatial context — these moments of feedback and polish account for an outsized share of perceived product quality. Research from the Nielsen Norman Group shows that appropriate motion design reduces perceived wait times by up to 40% and improves user confidence that their actions were registered. Yet in most product teams, micro-interactions are the first casualty of tight timelines.

The specification problem is the root cause. Designing a micro-interaction requires a designer to define: trigger event, initial state, transition properties, duration, easing curve, intermediate keyframes (if any), final state, and edge cases (what if the user triggers it again mid-animation?). Communicating this to engineers is even harder. Static mockups can't show motion. Video prototypes show what it looks like but not the exact parameters. Prototype tools like Principle or Framer can demonstrate the interaction but the engineer still needs to reverse-engineer the timing, easing, and state logic. The round-trip from designer intent to engineer implementation averages 3-5 iterations for a single micro-interaction — and a feature might need 10-20 of them.

Most designers skip the detailed specification and give engineers vague direction: "add a nice transition here" or "make it slide in smoothly." Engineers, who are optimizing for shipping speed, implement the simplest possible motion (a 300ms ease-in-out on opacity) or no motion at all. The result: a product with inconsistent, generic motion that neither delights users nor reinforces the spatial model of the interface. The teams that do invest in polished micro-interactions typically have a dedicated motion designer — a luxury that 90% of product organizations can't justify as a full-time role.

**How COCO Solves It**

1. **Interaction Pattern Recognition**: COCO identifies where micro-interactions should exist based on interaction design principles:
   - Analyzes the product's user flows to identify all state transitions that benefit from motion feedback
   - Categorizes triggers: user action (click, hover, drag), system event (data loaded, error occurred), or state change (toggle, navigation)
   - Maps each trigger to the appropriate motion pattern: entrance, exit, transition, feedback, loading, or celebration
   - Prioritizes interactions by user impact: high-frequency actions get polished animation, rare actions get simple transitions
   - Generates an interaction audit showing where motion exists today, where it's missing, and where it's inconsistent

2. **Motion Specification Generation**: COCO produces precise, implementable animation specifications:
   - Defines every parameter: property animated (transform, opacity, height, color), duration (ms), delay (ms), easing (cubic-bezier values)
   - Generates keyframe breakdowns for complex animations with percentage-based waypoints
   - Specifies spring physics parameters (stiffness, damping, mass) for natural-feeling motion
   - Documents state machine logic: what happens if the animation is interrupted (reversed, completed, or cancelled)
   - Creates timing diagrams showing how multiple animated properties coordinate (staggered, sequential, parallel)

3. **Easing Curve Library**: COCO applies appropriate easing curves based on the interaction context:
   - Maps each interaction type to the correct easing paradigm: ease-out for entrances, ease-in for exits, ease-in-out for transitions
   - Provides exact cubic-bezier values tuned for the interaction (not generic ease-in-out for everything)
   - Generates custom spring curves for interactions that should feel physical (pull-to-refresh, swipe-to-dismiss, snap-to-grid)
   - Ensures easing consistency across the product — all entrance animations use the same family of curves
   - Documents the easing rationale so future designers understand why each curve was chosen

4. **Multi-State Transition Mapping**: COCO handles complex interaction flows where multiple states and animations interact:
   - Creates state transition diagrams for components with 3+ states (button: default → hover → pressed → loading → success)
   - Specifies the animation between every pair of connected states (not just forward — also reverse, skip, and interrupt)
   - Defines choreography rules: when a container animates, which child elements animate and in what order?
   - Handles responsive motion: specifies how animations adapt on different devices (reduced motion preferences, lower-power devices)
   - Documents gesture-driven animations with physics-based parameters (velocity threshold, deceleration rate, snap points)

5. **Code-Ready Implementation Snippets**: COCO generates framework-specific code for every micro-interaction:
   - Produces CSS animation/transition code for simple state-based animations
   - Generates Framer Motion (React), Vue Transition, or SwiftUI animation code for complex interactions
   - Creates Lottie-compatible specifications for animations that need higher fidelity than CSS can provide
   - Includes accessibility considerations: prefers-reduced-motion media query fallbacks for every animation
   - Provides performance notes: which animations are GPU-compositable (transform, opacity) vs. CPU-intensive (height, width)

6. **Motion System Documentation**: COCO creates a comprehensive motion language for the design system:
   - Defines motion design principles for the product (e.g., "motion is functional, not decorative; fast and responsive, not slow and dramatic")
   - Creates a duration scale: micro (100ms), small (200ms), medium (300ms), large (500ms) with when to use each
   - Documents standard easing curves with names and use cases (standard, decelerate, accelerate, sharp)
   - Produces a motion component library specification: reusable animation patterns that engineers can apply without designer input
   - Generates a motion audit checklist for design reviews (does every state transition have appropriate motion?)

:::

::: details Results & Who Benefits

**Measurable Results**

- **Micro-interaction specification time**: From 2 weeks of prototyping and documentation to **90 minutes** of AI-generated specs with code snippets
- **Implementation accuracy**: First-pass motion implementation matches specification **95% of the time** (vs. 40% when engineers interpret vague "make it smooth" direction)
- **Motion consistency**: Product-wide motion consistency score improved from 34% (random, ad-hoc motion) to **91%** (systematic motion language)
- **Animation performance**: 100% of COCO-specified animations use GPU-compositable properties, eliminating janky animation reports that previously averaged **8 per release**
- **Reduced motion compliance**: All specified animations include prefers-reduced-motion fallbacks, achieving **100% motion accessibility** (vs. 12% without COCO)

**Who Benefits**

- **Product Designers**: Specify polished micro-interactions without needing motion design expertise or time-consuming prototyping tools
- **Front-End Engineers**: Copy-paste-ready animation code with exact parameters, eliminating guesswork and iteration on timing and easing
- **Design System Teams**: A documented motion language that ensures consistency across all product teams without reviewing every animation individually
- **Users with Motion Sensitivity**: Every animation ships with a reduced-motion alternative, making the product accessible to the 35% of users who enable reduced motion settings

:::

::: details Practical Prompts

**Prompt 1: Micro-Interaction Specification for a Component**
```
Generate a complete micro-interaction specification for this component.

Component: [e.g. "Toggle Switch"]
States: [list — e.g. OFF, ON, disabled-OFF, disabled-ON, loading]
Trigger: [e.g. "click/tap on the toggle or its label"]

Current behavior: [describe — e.g. "instant state swap, no animation"]
Desired feel: [e.g. "snappy and satisfying, like a physical switch"]

Generate specifications for:
1. **OFF → ON transition**:
   - Properties animated (thumb position, track color, icon if any)
   - Duration and easing for each property
   - Keyframe breakdown if multi-step
   - Sound/haptic recommendation (optional)

2. **ON → OFF transition**:
   - Same structure (may differ from OFF → ON)

3. **Hover state**:
   - What changes on hover (scale, shadow, highlight ring)
   - Duration and easing

4. **Press state**:
   - What changes on press/active (thumb compression, scale down)
   - Duration and easing

5. **Disabled state transitions**:
   - Entering disabled (how does it dim/gray)
   - Leaving disabled (how does it restore)

6. **Loading state** (if applicable):
   - Loading indicator animation (spinner, pulse, shimmer)
   - Transition from loading → success/failure

7. **Reduced motion fallback**:
   - What happens with prefers-reduced-motion enabled?

Include:
- CSS/Framer Motion code snippet for each transition
- Cubic-bezier values or spring parameters
- Timing diagram showing property coordination
```

**Prompt 2: Page Transition Choreography**
```
Design the motion choreography for transitioning between these two pages/views.

From: [describe the current page — key elements and layout]
To: [describe the destination page — key elements and layout]
Trigger: [e.g. "user clicks a list item to see detail view"]
Navigation pattern: [e.g. "forward drill-down", "lateral tab switch", "modal overlay"]

Choreograph:
1. **Exit animation** (current page):
   - Which elements animate out and in what order?
   - Duration and easing per element
   - Direction of movement (fade, slide left, scale down)

2. **Shared element transition** (if any):
   - [e.g. "the list item's thumbnail expands to become the hero image on the detail page"]
   - Start position/size → end position/size
   - Duration and easing
   - How does the surrounding content make room?

3. **Enter animation** (new page):
   - Which elements animate in and in what order?
   - Stagger timing between elements (e.g. 50ms between each)
   - Duration and easing per element

4. **Reverse transition** (going back):
   - Is it the exact reverse, or different?
   - How does it differ?

5. **Interrupt handling**:
   - What if the user navigates again before the transition completes?
   - What if the user presses back mid-transition?

Include:
- Timing diagram showing all elements on a timeline
- Total transition duration
- Framework code: [React/Vue/CSS — specify preference]
- Reduced motion fallback (typically: instant cut, no animation)
```

**Prompt 3: Loading and Skeleton Animation System**
```
Design a consistent loading animation system for our product.

Loading contexts:
1. **Initial page load**: Full page skeleton before content appears
2. **Component-level loading**: A card, table, or section loading independently
3. **Action feedback**: Button loading state after user action (submit, save)
4. **Inline loading**: A small element refreshing within a populated page
5. **Pull-to-refresh**: Mobile gesture-triggered refresh

For each context, specify:
1. **Skeleton shimmer animation**:
   - Gradient colors (based on our surface colors: [provide surface color HEX values])
   - Gradient angle and direction
   - Animation duration and easing
   - Shimmer speed and repeat behavior

2. **Content entrance** (when data arrives):
   - How do skeleton elements transition to real content? (fade, morphing, instant)
   - Stagger timing for lists/grids of items
   - Duration and easing

3. **Spinner/indicator** (for action feedback):
   - Style (circular spinner, dot pulse, progress bar)
   - Size relative to container
   - Color (brand primary, surface-dependent, or white)
   - Animation: rotation speed, easing, pulsing

4. **Long-loading handling**:
   - At what duration does a spinner become a progress bar? (e.g. >3 seconds)
   - When to show estimated time remaining?
   - How to communicate "still working" for 10+ second operations?

Include CSS code for the skeleton shimmer and spinner animations.
```

**Prompt 4: Feedback and Celebration Animations**
```
Design feedback and celebration micro-interactions for key user moments.

Moments to design for:
1. **Task completion**: [e.g. "User completes a checklist item"]
   - Importance level: [daily routine / milestone / major achievement]

2. **Form submission success**: [e.g. "User saves their profile settings"]
   - Importance level: [routine]

3. **Error occurrence**: [e.g. "Form validation fails on submit"]
   - Severity: [mild / serious / critical]

4. **Achievement/milestone**: [e.g. "User completes onboarding" or "Team hits a goal"]
   - Importance level: [significant — should feel celebratory]

5. **Destructive action confirmation**: [e.g. "User deletes a project"]
   - Feeling: [deliberate and careful, not celebratory]

For each moment, specify:
1. Animation description (what the user sees)
2. Duration (celebration can be longer than routine feedback)
3. Elements involved (icon, color change, particle effects, confetti, text animation)
4. Timing and easing for each element
5. Sound recommendation (if applicable — describe the tone)
6. Reduced motion alternative
7. Repeat behavior (does it play once, or every time the action occurs?)
8. Code implementation (CSS + JS/framework code)

Balance: routine actions get subtle feedback (checkmark fade, color pulse). Milestones get richer celebration (confetti, expanding animation, congratulatory message with entrance animation).
```

**Prompt 5: Motion Design System Documentation**
```
Create a motion design system document that standardizes animation across our product.

Product personality: [describe — e.g. "professional but approachable, efficient but not cold"]
Current motion state: [describe — e.g. "inconsistent, some CSS transitions, no system"]
Target platforms: [web, iOS, Android]

Generate a complete motion system document:

1. **Motion principles** (3-5 principles):
   - [e.g. "Purposeful: every animation serves a functional goal"]
   - [Write principles that match the product personality]

2. **Duration scale**:
   - Define 4-5 duration tokens with names, values (ms), and when to use each
   - [e.g. "instant: 100ms — micro-feedback like hover states"]

3. **Easing curves**:
   - Define 4-5 named easing curves with cubic-bezier values and use cases
   - [e.g. "productive: cubic-bezier(0.2, 0, 0.38, 0.9) — standard transitions"]

4. **Motion patterns**:
   - Entrance: how elements appear (direction, scale, opacity)
   - Exit: how elements disappear
   - Transition: how elements change between states
   - Emphasis: how to draw attention to an element
   - Loading: standard loading and skeleton patterns

5. **Choreography rules**:
   - Stagger timing between list items
   - Parent-before-child or child-before-parent?
   - Maximum simultaneous animations on screen

6. **Accessibility**:
   - prefers-reduced-motion policy
   - What reduces (decorative motion) vs. what stays (functional state changes)

7. **Implementation reference**:
   - CSS custom properties for all duration and easing tokens
   - Reusable animation utility classes
   - Framework-specific helpers

Format as a design system documentation page.
```

:::

## 16. AI Design Token Manager

> Automates design token lifecycle across **Figma, code, and documentation** — reducing token drift incidents from **35 per quarter** to **fewer than 2** while cutting token management overhead by 85%.

::: details Pain Point & How COCO Solves It

**The Pain: Design Tokens That Fall Out of Sync Across Every Platform**

Design tokens are the atomic units of a design system — the named values (colors, spacing, typography, shadows, radii) that ensure consistency between design files and code. In theory, tokens create a single source of truth. In practice, most organizations maintain tokens in 3-5 separate locations that gradually diverge: Figma variables, CSS custom properties, Tailwind configuration, iOS color assets, Android resource files, and a documentation site. Each location has its own format, update process, and maintainer. When the design team updates the primary blue from #0052CC to #0055D4, that change must propagate to every platform — and it rarely does simultaneously or correctly.

The synchronization problem is compounded by organizational complexity. A typical token system has 200-500 tokens organized in a 2-3 tier hierarchy (base tokens, semantic tokens, component tokens). Changing a single base token can cascade to dozens of semantic tokens and hundreds of component-level applications. Tracking these cascading effects manually is error-prone: a designer changes --color-blue-600 in Figma, a front-end engineer updates the CSS variable, but the mobile team doesn't get notified until QA catches the discrepancy three weeks later. Multiply this by 5-10 token changes per release cycle and the synchronization overhead becomes a significant engineering tax.

Documentation is the perpetually neglected third pillar. Even when Figma and code are in sync, the design system documentation site often shows stale token values, wrong usage examples, or missing new tokens. Designers reference the docs when building new screens, and if the docs say --spacing-lg is 24px when it was actually updated to 28px two months ago, every new design created from those docs is wrong from the start. The documentation gap erodes trust in the design system — teams stop consulting it because they've been burned by stale information, which further accelerates divergence.

**How COCO Solves It**

1. **Centralized Token Registry**: COCO establishes a single source of truth for all tokens with automated distribution:
   - Maintains a canonical token database with every token's name, value, description, category, and usage guidelines
   - Version-controls all token changes with full audit trail (who changed what, when, and why)
   - Supports the complete token hierarchy: base (raw values) → semantic (purpose-based) → component (specific usage)
   - Manages platform-specific token transformations (HEX for web, UIColor for iOS, @ColorRes for Android)
   - Generates unique token IDs to track the same token across all platforms regardless of naming format differences

2. **Cross-Platform Synchronization Engine**: COCO keeps every platform in sync with zero manual intervention:
   - Pushes token updates to Figma variables, CSS custom properties, Tailwind config, Swift/Kotlin files, and JSON configs simultaneously
   - Detects platform-specific drift by comparing each platform's current values against the canonical registry
   - Generates pull requests in code repositories when tokens change, with clear diff and rollback instructions
   - Updates Figma library variables through the API and triggers a library publish notification to all users
   - Runs daily drift detection scans and alerts the design system team to any unauthorized platform-level overrides

3. **Cascade Impact Analysis**: COCO maps the full ripple effect of any token change before it ships:
   - Traces every downstream dependency when a base token is modified (base → semantic → component → usage locations)
   - Generates a visual impact report showing all screens, components, and states affected by the change
   - Identifies breaking changes (a spacing token increase that causes layout overflow) before they reach production
   - Provides safe/unsafe change classification: renaming a token is breaking, adjusting its value is usually safe
   - Recommends phased rollout for high-impact changes with specific migration steps per team

4. **Token Naming and Governance**: COCO enforces naming conventions and prevents token proliferation:
   - Validates new token names against the established naming convention (e.g., category-property-variant-state)
   - Detects duplicate tokens (different names, same or nearly-same value) and recommends consolidation
   - Flags tokens that are too specific (should be generalized) or too general (name doesn't convey purpose)
   - Enforces tier discipline: prevents semantic tokens from referencing other semantic tokens (must reference base)
   - Generates quarterly token health reports: total count, growth rate, usage frequency, and cleanup recommendations

5. **Automated Documentation Generation**: COCO keeps token documentation perfectly current:
   - Auto-generates a browsable token catalog with current values, visual swatches, and usage examples
   - Updates documentation within minutes of any token change — documentation is never stale
   - Produces platform-specific usage guides (how to reference each token in CSS, React, Swift, Kotlin)
   - Generates before/after visual comparisons for every token change so designers can verify the impact
   - Creates migration guides automatically when tokens are renamed, deprecated, or restructured

6. **Token Usage Analytics**: COCO tracks how tokens are actually used to inform design system decisions:
   - Counts references to each token across all codebases to identify the most and least used tokens
   - Detects hardcoded values in code that should be tokens (e.g., #0052CC appears in CSS but doesn't reference the token)
   - Identifies tokens that are never used in code (orphans) — candidates for deprecation
   - Tracks token adoption over time: is tokenization increasing or are developers still hardcoding?
   - Measures "token coverage" — the percentage of all design values that are tokenized vs. hardcoded

:::

::: details Results & Who Benefits

**Measurable Results**

- **Token drift incidents**: From 35 cross-platform discrepancies per quarter to **fewer than 2** (94% reduction)
- **Token update propagation time**: From 2-3 weeks to reach all platforms to **under 4 hours** for full synchronization
- **Token management effort**: From 20 hours/week of manual syncing, auditing, and documentation to **3 hours/week** of review and approval (85% reduction)
- **Token coverage in code**: Hardcoded values replaced by tokens, increasing coverage from 64% to **96%** across all codebases
- **Documentation freshness**: Token documentation is **always current** (within 4 hours of any change) vs. previously averaging 6 weeks stale

**Who Benefits**

- **Design System Teams**: Manage tokens through a single interface instead of manually updating 5+ platforms — focus on strategy rather than synchronization
- **Product Designers**: Trust that the token values in Figma exactly match what will be implemented in code — no more "it looked different in the design" conversations
- **Front-End Engineers**: Clear, current token reference with platform-specific usage examples — no more guessing which token to use or discovering stale documentation
- **Mobile Engineers**: iOS and Android token values are automatically generated and kept in sync with web, eliminating the historical lag that caused cross-platform visual inconsistency

:::

::: details Practical Prompts

**Prompt 1: Token System Architecture Design**
```
Design a complete design token architecture for our product.

Current state:
- Design tool: [Figma/Sketch]
- Frontend framework: [React/Vue/Angular]
- CSS approach: [CSS variables/Tailwind/CSS Modules/Styled Components]
- Mobile: [iOS Swift/Android Kotlin/React Native/Flutter]
- Current token count: [approximate]
- Current management: [e.g. "manual, Figma styles + hardcoded CSS"]

Design a 3-tier token structure:

1. **Base tokens (Tier 1)**: Raw values
   - Color palette: Define complete color scales ([brand color] 50-900, neutral 50-900, semantic colors)
   - Spacing scale: [4px base? 8px base?]
   - Typography scale: sizes, weights, line-heights, letter-spacing
   - Border radius scale
   - Shadow/elevation scale
   - Breakpoints
   - Z-index scale

2. **Semantic tokens (Tier 2)**: Purpose-based, referencing Tier 1
   - Surface colors (background, surface, elevated, overlay)
   - Text colors (primary, secondary, disabled, inverse, link)
   - Border colors (default, strong, focus, error)
   - Interactive colors (hover, active, selected, disabled)
   - Spacing (component padding, section gaps, page margins)
   - Typography (heading-1 through heading-6, body, caption, label, overline)

3. **Component tokens (Tier 3)**: Specific component references to Tier 2
   - [List 5-10 key components and their token needs]

Include:
- Naming convention with examples
- Dark mode strategy (which tier handles the switch?)
- Platform export formats
- Governance rules (who can create, modify, deprecate tokens?)
```

**Prompt 2: Token Audit and Cleanup**
```
Audit our current design tokens and recommend cleanup actions.

Current token inventory:
[Paste token list or describe structure — e.g.:]
- Colors: [X] tokens (list any you know are problematic)
- Spacing: [X] tokens
- Typography: [X] tokens
- Shadows: [X] tokens
- Border radius: [X] tokens
- Other: [describe]

Known issues:
- [e.g. "Multiple tokens for similar grays: gray-100, gray-light, background-subtle, surface-secondary"]
- [e.g. "Some spacing tokens skip values: we have 4, 8, 16, 32 but no 12 or 24"]
- [e.g. "Typography tokens mix font-size-only with composite tokens"]

Analyze:
1. **Duplicates**: Tokens with the same or nearly-same value but different names → consolidate recommendations
2. **Gaps**: Missing token values that teams are hardcoding (e.g., no 12px spacing, so engineers use raw 12px)
3. **Orphans**: Tokens that aren't used anywhere → deprecation candidates
4. **Naming inconsistencies**: Tokens that don't follow the naming convention
5. **Hierarchy violations**: Semantic tokens referencing other semantic tokens (should reference base)
6. **Unused scale steps**: Base scale values that no semantic token references

Output:
- Token cleanup action list with priority
- Recommended token additions to fill gaps
- Migration plan for consolidated/renamed tokens
- Estimated effort and suggested phasing
```

**Prompt 3: Token Change Impact Analysis**
```
Analyze the impact of these proposed token changes before we implement them.

Proposed changes:
1. [Token name]: [current value] → [new value]. Reason: [why]
2. [Token name]: [current value] → [new value]. Reason: [why]
3. [Token name]: RENAME from [old name] to [new name]. Reason: [why]
4. [Token name]: DEPRECATE (replace with [alternative]). Reason: [why]
5. [Token name]: NEW token, value: [value]. Reason: [why]

Token hierarchy (for cascade analysis):
[Paste or describe which semantic tokens reference which base tokens]

Components using these tokens:
[List known component usage, or describe the general usage pattern]

For each change, analyze:
1. **Cascade map**: Which downstream tokens and components are affected?
2. **Visual impact**: What will look different? (describe specific UI changes)
3. **Breaking risk**: Will any layouts break, text overflow, or contrast fail?
4. **Migration effort**: What code/design file changes are needed?
5. **Rollback plan**: How to revert if issues are discovered post-release?

Output: Impact assessment report with GO/NO-GO recommendation per change and a phased implementation plan.
```

**Prompt 4: Token Documentation Generator**
```
Generate comprehensive documentation for our design token system.

Token inventory:
[Paste complete token list with: name, value, category, description]

Documentation requirements:
1. **Overview page**: What are design tokens, why we use them, how they're structured
2. **Color tokens page**: Visual swatches, values, usage guidelines, accessibility notes
3. **Spacing tokens page**: Visual scale, values, usage guidelines (when to use each)
4. **Typography tokens page**: Visual samples, values, usage guidelines
5. **Effects tokens page**: Shadows, border-radius, opacity — values and usage
6. **Usage guide per platform**:
   - CSS: How to reference tokens (custom properties syntax)
   - [Framework]: How to reference tokens in components
   - Figma: How to apply variable tokens
   - iOS/Android: How to reference platform-specific token exports

For each token, include:
- Name and value
- Visual preview description
- When to use (and when NOT to use)
- Related tokens (alternatives in the same scale)
- Platform-specific reference syntax

Format as documentation pages ready for a design system website.
```

**Prompt 5: Cross-Platform Token Drift Detection Report**
```
Generate a drift detection report comparing token values across platforms.

Canonical token values (source of truth):
[Paste the canonical token list with names and values]

Platform A ([e.g. "Web CSS variables"]) values:
[Paste or describe current values in CSS]

Platform B ([e.g. "iOS color assets"]) values:
[Paste or describe current values in iOS]

Platform C ([e.g. "Figma variables"]) values:
[Paste or describe current values in Figma]

Platform D ([e.g. "Documentation site"]) values:
[Paste or describe current values on the docs site]

For each token, check:
1. Does the value match the canonical source on every platform?
2. If mismatched: what's the current value vs. expected value?
3. How long has the drift existed? (based on last update timestamps if available)
4. Impact: is this drift user-facing (different colors in production) or internal only?

Output:
- Drift matrix: Token × Platform with MATCH/MISMATCH
- Drift count per platform (which platform has the most drift?)
- Prioritized fix list (user-facing drift first)
- Root cause hypothesis (manual update was missed? Deployment didn't include tokens? Naming mismatch?)
- Process recommendation to prevent future drift
```

:::

## 17. AI Visual Regression Testing Engine

> Catches **100% of unintended visual changes** before deployment — reducing visual bugs in production from **22 per release** to **zero** with automated screenshot comparison across 50+ page-component combinations.

::: details Pain Point & How COCO Solves It

**The Pain: Visual Bugs That Slip Through Code Review and QA**

Visual regression — an unintended change to the appearance of a UI element — is one of the most common and frustrating categories of production bugs. A CSS refactor that fixes a button's padding on one page breaks the card layout on another. A dependency update subtly shifts font rendering. A new feature's styles leak into an adjacent component. These regressions pass code review because the code change looks correct. They pass functional QA because the feature still works. They only become visible when a human looks at the exact combination of page, viewport, browser, and data state where the regression manifests — and with hundreds of such combinations, human visual QA is statistically guaranteed to miss some.

The cost of visual regressions in production is disproportionate to their technical triviality. A misaligned button or overlapping text element requires the same deployment pipeline to fix as a critical security patch: issue identification, ticket creation, design review, code fix, code review, QA, staging verification, and production deployment. Each visual bug fix costs 4-8 engineering hours in process overhead, regardless of the 5-minute CSS change that actually resolves it. With an average of 15-25 visual regressions reaching production per release cycle, organizations spend 100+ engineering hours per month on visual bug remediation — time that could have been saved by catching the issue before it was committed.

Existing visual regression tools (Percy, Chromatic, BackstopJS) help but have adoption and maintenance challenges. They require extensive setup: screenshot baselines for every component state, viewport size, and data variation. As the product evolves, baselines must be updated — and distinguishing "intentional change that needs new baseline" from "unintentional regression that needs a fix" requires human judgment. Teams frequently disable tests that produce too many false positives, eroding coverage. The tooling overhead means most teams only cover their most critical pages rather than the full product surface, leaving 60-80% of the UI without visual regression protection.

**How COCO Solves It**

1. **Intelligent Baseline Management**: COCO maintains visual baselines that evolve with the product rather than fighting against change:
   - Automatically captures screenshot baselines for every page, component, state, and viewport combination in the design system
   - Uses perceptual hashing rather than pixel-by-pixel comparison — immune to sub-pixel rendering differences across environments
   - Classifies changes as intentional (linked to design ticket or token update) vs. unintentional (no corresponding design change)
   - Auto-updates baselines when changes are confirmed as intentional, maintaining coverage without manual maintenance
   - Maintains baseline version history so any baseline can be rolled back if an approved change is later reconsidered

2. **Comprehensive Coverage Generation**: COCO ensures every visual state is tested, not just the happy path:
   - Generates test configurations for every page at every defined breakpoint (mobile, tablet, desktop, wide)
   - Creates data variations: empty state, single-item, many-items, long-text, error-state for every data-dependent view
   - Tests all component states: default, hover, focus, active, disabled, loading, error across the component library
   - Handles dynamic content by generating deterministic test data that produces repeatable screenshots
   - Discovers new pages and components automatically as the codebase grows, preventing coverage gaps

3. **Perceptual Difference Analysis**: COCO distinguishes meaningful visual changes from rendering noise:
   - Applies anti-aliasing tolerance to ignore sub-pixel rendering differences between environments
   - Uses structural similarity (SSIM) comparison in addition to pixel diff for layout-level regression detection
   - Groups related differences (all text on the page shifted = font change, not 100 separate issues)
   - Calculates perceptual impact scores: a 2px shift on a primary CTA matters more than a 2px shift in a footer link
   - Filters known acceptable differences (date/time stamps, randomized avatar colors, animated elements)

4. **Root Cause Identification**: COCO doesn't just flag the problem — it traces it to the causing code change:
   - Correlates visual changes with specific commits by running differential screenshot comparisons per commit
   - Identifies the exact CSS rule change, component update, or dependency bump that introduced the regression
   - Detects cascade regressions (a global style change affecting 20 pages traces to one CSS modification)
   - Provides the specific file, line number, and property change that caused the visual difference
   - Suggests the fix: either a targeted CSS override to preserve the original appearance or a baseline update if the change is intentional

5. **CI/CD Integration and Gating**: COCO acts as an automated design quality gate in the deployment pipeline:
   - Runs visual comparison on every pull request before merge, with results posted as PR comments
   - Blocks deployment when critical visual regressions are detected (configurable severity threshold)
   - Provides a visual diff gallery in the PR showing before/after screenshots for every detected change
   - Supports manual approval workflow: flagged changes can be approved by a designer, updating the baseline
   - Runs in under 5 minutes for standard comparison sets (50 pages × 3 breakpoints = 150 screenshots)

6. **Trend Analysis and Prevention**: COCO identifies patterns in visual regressions to prevent them structurally:
   - Tracks visual regression frequency by component, page, and team to identify fragile areas
   - Identifies CSS architecture patterns that correlate with high regression rates (deeply nested selectors, !important overrides, global styles)
   - Recommends CSS architecture improvements to reduce regression risk (more specific selectors, CSS modules, scoped styles)
   - Monitors trend data: is the regression rate increasing or decreasing over time?
   - Produces weekly visual quality reports showing regression rate, time-to-fix, and coverage metrics

:::

::: details Results & Who Benefits

**Measurable Results**

- **Visual bugs reaching production**: From 22 per release cycle to **zero** — 100% of visual regressions caught before deployment
- **Visual QA effort**: Manual screenshot comparison reduced from **16 hours per release** to **45 minutes** of AI-flagged review
- **False positive rate**: Intelligent perceptual comparison achieves **under 3%** false positive rate (vs. 25-40% for pixel-diff tools), maintaining developer trust
- **Regression fix time**: Average time from detection to fix reduced from **3 days** (production) to **15 minutes** (pre-merge), since developers fix immediately while context is fresh
- **Coverage breadth**: Visual regression testing covers **100% of product pages** at 3 breakpoints, up from 20% coverage with manually maintained screenshot tests

**Who Benefits**

- **Front-End Engineers**: Confident that CSS changes don't break other pages — deploy without fear of visual side effects
- **Product Designers**: Assurance that their designs remain pixel-perfect in production, eliminating the recurring frustration of seeing their work degraded by code changes
- **QA Engineers**: Automated visual testing replaces the most tedious part of QA (manual screenshot comparison), freeing time for functional and exploratory testing
- **Release Managers**: A clear quality signal — no visual regressions means one fewer category of launch-blocking issues to worry about

:::

::: details Practical Prompts

**Prompt 1: Visual Regression Test Configuration**
```
Generate a comprehensive visual regression test configuration for our product.

Product pages:
- [Page 1]: [URL path, description, key components]
- [Page 2]: [URL path, description]
- [Page 3]: [URL path, description]
- [continue for all pages]

Breakpoints to test:
- Mobile: [375px]
- Tablet: [768px]
- Desktop: [1280px]
- Wide: [1440px]

Component states to capture:
- Interactive components: [list — e.g. buttons, forms, dropdowns, modals, tooltips]
- Data states: [list — e.g. empty, loading, error, populated with typical data, populated with max data]

Generate a test configuration including:
1. Screenshot matrix: page × breakpoint × state = total screenshots needed
2. Test data fixtures for each data state (deterministic, not random)
3. Wait conditions per page (what to wait for before capturing — e.g. images loaded, animations settled)
4. Exclusion zones: elements to mask during comparison (timestamps, avatars, animated elements)
5. Threshold settings: acceptable pixel difference per page (tighter for hero pages, looser for internal tools)
6. Grouping: which tests to run on every PR vs. nightly vs. pre-release

Output as a configuration file (JSON/YAML) for [Percy/Chromatic/BackstopJS — specify tool].
```

**Prompt 2: Visual Diff Analysis and Triage**
```
Analyze these visual differences from our regression test run and classify each one.

Test run results:
[For each flagged difference, describe:]
1. Page: [page name/URL]
2. Breakpoint: [viewport size]
3. Difference description: [what changed visually — e.g. "button padding increased by 4px", "card shadow is darker", "text color changed from #333 to #1A1A2E"]
4. Affected area: [component/section of the page]
5. Pixel diff percentage: [e.g. 2.3%]

Recent code changes in this PR/release:
- [Change 1: describe the code change — e.g. "Updated button component padding from 12px to 16px"]
- [Change 2: describe]
- [Change 3: describe]

For each visual difference, classify:
1. **Intentional**: Expected result of a documented design/code change → update baseline
2. **Regression**: Unintended side effect → needs fix before merge
3. **Noise**: Rendering artifact, timing issue, or acceptable drift → add to ignore list
4. **Investigate**: Can't determine from available information → needs manual review

For regressions, provide:
- Most likely causing code change
- Suggested fix (specific CSS/code change)
- Severity: Critical (layout broken) / Major (visible to users) / Minor (subtle, low-traffic area)

Output as a triage report for the PR reviewer.
```

**Prompt 3: CSS Architecture Risk Assessment**
```
Analyze our CSS architecture for visual regression risk and recommend improvements.

CSS information:
- Architecture: [e.g. "mix of global CSS, CSS Modules, and some inline styles"]
- Framework: [e.g. "React with Tailwind CSS + custom CSS for overrides"]
- Design system CSS: [e.g. "component library uses CSS-in-JS, product uses Tailwind"]
- Known problem areas: [e.g. "changing anything in _globals.css breaks random pages"]

Common regression patterns we've seen:
- [Pattern 1: e.g. "Updating a shared utility class affects unrelated components"]
- [Pattern 2: e.g. "Third-party component styles leak into our components"]
- [Pattern 3: e.g. "Responsive breakpoint changes in one section affect layout elsewhere"]

Analyze:
1. **High-risk patterns**: Which CSS patterns in our codebase are most likely to cause visual regressions?
2. **Specificity conflicts**: Where are !important overrides or specificity battles happening?
3. **Global scope risks**: Which global styles have the widest blast radius?
4. **Third-party risks**: Where do external styles interact with our styles?
5. **Recommendations**: For each risk, suggest a specific architectural improvement:
   - Migration path (how to get from current state to safer state)
   - Effort estimate
   - Expected regression risk reduction

Output as a CSS health assessment with prioritized recommendations.
```

**Prompt 4: Visual Test Coverage Gap Analysis**
```
Analyze our visual regression test coverage and identify gaps.

Currently tested:
- Pages: [list pages with visual tests]
- Components: [list components with visual tests]
- Breakpoints: [list tested breakpoints]
- States: [list tested states — e.g. default, hover, dark mode]

Full product inventory:
- All pages: [list all product pages]
- All components: [list all design system components]
- All breakpoints: [list all supported breakpoints]
- All states: [list all component states that should be tested]

Analyze:
1. **Page coverage**: Which pages are untested? What's the risk of each uncovered page?
2. **Component coverage**: Which components lack visual tests? Prioritize by usage frequency.
3. **Breakpoint coverage**: Are any supported breakpoints untested?
4. **State coverage**: Which component states (loading, error, empty, disabled) aren't tested?
5. **Interaction coverage**: Which hover/focus/active states need visual coverage?

Generate:
- Coverage percentage: current and target
- Prioritized list of tests to add (highest-risk gaps first)
- Estimated effort to reach 90% coverage vs. 100% coverage
- Recommended test additions per sprint (phased approach)
```

**Prompt 5: Visual Regression Report for Stakeholders**
```
Generate a visual quality report for this release cycle.

Release: [version/name]
Time period: [start date — end date]

Data:
- Visual regression tests run: [number]
- Regressions detected pre-merge: [number]
- Regressions that reached staging: [number]
- Regressions that reached production: [number]
- Average time from detection to fix: [hours/days]
- False positive rate: [percentage]

Comparison to previous release:
- Previous regressions detected: [number]
- Previous regressions in production: [number]

Generate a report including:
1. **Executive summary**: Visual quality trend — improving, stable, or declining?
2. **Key metrics dashboard**: Regressions caught, fix time, coverage
3. **Top regression causes**: What types of code changes caused the most regressions?
4. **Fragile areas**: Which pages/components had the most regressions?
5. **Process effectiveness**: Is visual regression testing catching issues early enough?
6. **Recommendations**: Specific actions to improve visual quality next release
7. **Coverage update**: Current coverage vs. target, new tests added this cycle

Format for a team retrospective presentation — data-driven, actionable, under 10 minutes to present.
```

:::

## 18. AI Typography Pairing Advisor

> Generates **professionally harmonious typography pairings** in **15 minutes** — replacing weeks of trial-and-error with data-driven recommendations that improve readability scores by 28%.

::: details Pain Point & How COCO Solves It

**The Pain: Typography Pairing That Relies on Gut Feel and Good Luck**

Typography accounts for 95% of web design — it is the primary medium through which content reaches users. Yet selecting typefaces that work together harmoniously is one of the most subjective, time-consuming decisions in the design process. A typical Google Fonts library offers 1,500+ font families, producing millions of possible pairings. Design school teaches principles (pair a serif with a sans-serif, match x-heights, contrast weights) but these rules are insufficient for the nuanced reality of digital product typography. Two fonts can follow every pairing rule and still feel wrong together because their personality, rhythm, or proportions clash in ways that are felt but hard to articulate.

The trial-and-error approach that most designers use is remarkably inefficient. A designer might test 15-30 combinations before finding one that feels right — each test requiring rendering at multiple sizes, checking readability, verifying character set completeness for international audiences, and evaluating the emotional tone. For a brand refresh or new product launch, typography exploration can consume 1-2 weeks. And the outcome is still uncertain: the selected pairing might look perfect in the designer's mockup but perform poorly in actual reading contexts — long-form content, data-dense dashboards, mobile interfaces, or low-resolution displays.

The downstream cost of a poor typography choice is enormous because it's embedded everywhere. If the pairing doesn't work and the team realizes it after implementation, changing typography requires updating every text style in Figma, every CSS declaration in the codebase, and every piece of marketing collateral. A mid-project typography change can cost weeks of rework. This reality means teams often stick with mediocre typography choices rather than risk the disruption of changing, leading to products that are functionally fine but fail to convey the intended brand personality or reading experience.

**How COCO Solves It**

1. **Contextual Typography Analysis**: COCO understands the project's specific needs before recommending fonts:
   - Analyzes the product's content type (long-form reading, data-heavy dashboard, marketing site, mobile app) to determine typographic requirements
   - Evaluates brand attributes (playful vs. serious, modern vs. traditional, technical vs. approachable) to filter fonts by personality
   - Assesses technical requirements: language support (Latin, Cyrillic, CJK, Arabic), variable font availability, web performance budget
   - Reviews existing brand assets to identify typographic DNA that new pairings should complement
   - Considers the competitive landscape: what typography do competitors use, and how can this product differentiate?

2. **Algorithmic Pairing Generation**: COCO generates pairings based on objective typographic properties, not just aesthetic intuition:
   - Analyzes font metrics (x-height ratio, cap-height, ascender/descender length, stroke contrast, width) to find harmonious structural matches
   - Applies proven pairing strategies: complementary contrast (serif + sans-serif), superfamily matching, historical period alignment
   - Evaluates rhythm compatibility by comparing character width distributions — fonts with similar rhythm feel cohesive together
   - Generates 20-30 candidate pairings ranked by harmonic score (a composite of structural compatibility, contrast balance, and personality match)
   - Includes unconventional pairings that designers might not discover through browsing, with rationale for why they work

3. **Readability Optimization**: COCO ensures pairings perform well in actual reading contexts, not just specimen displays:
   - Tests pairings at all intended sizes (headings: 24-48px, body: 14-18px, captions: 11-13px, data: 12-14px)
   - Evaluates reading speed and comprehension metrics based on typographic research (optimal x-height ratios, line-length, letter-spacing)
   - Checks paragraph density: how many characters fit per line at the intended column width (optimal: 45-75 characters)
   - Assesses small-size legibility for fonts used in captions, labels, and data tables
   - Validates screen rendering quality across operating systems (Windows ClearType, macOS antialiasing, mobile rendering)

4. **Scale and Hierarchy Specification**: COCO generates a complete typographic scale, not just a font pairing:
   - Creates a modular scale (major third, perfect fourth, augmented fourth) based on the base font size and reading context
   - Assigns each font role: which font for headings, which for body, which for captions, which for UI labels
   - Specifies font weight usage across the hierarchy: which weights create clear hierarchy without overuse
   - Generates line-height values per size that ensure consistent vertical rhythm
   - Documents letter-spacing adjustments per size (headings often need tighter spacing, small text needs looser)

5. **Performance and Technical Validation**: COCO verifies that beautiful pairings are also practical:
   - Calculates total font payload (KB) for the selected pairing with all required weights and character sets
   - Recommends font subsetting strategies to minimize download size (Latin-extended vs. full character set)
   - Evaluates variable font availability (one variable font file replaces multiple static weight files)
   - Tests font loading behavior: what does the page look like during FOIT (flash of invisible text) or FOUT (flash of unstyled text)?
   - Generates font-display strategy recommendations (swap, optional, fallback) based on the content type

6. **Presentation-Ready Pairing Deliverable**: COCO generates a typography pairing proposal that designers can immediately present to stakeholders:
   - Produces side-by-side specimen renders showing the pairing at all hierarchy levels
   - Creates mockup descriptions showing the pairing applied to realistic content (article, dashboard, form, marketing page)
   - Documents the rationale: why these fonts work together (structural harmony, personality match, readability data)
   - Includes 2 alternative pairings as fallback options with comparative analysis
   - Generates CSS and Figma text style specifications ready for implementation

:::

::: details Results & Who Benefits

**Measurable Results**

- **Typography selection time**: From 1-2 weeks of exploration to **15 minutes** for a data-driven recommendation with alternatives
- **Readability improvement**: Pairings selected with COCO show **28% higher readability scores** (measured by Flesch-Kincaid reading ease applied to typographic rendering) compared to designer gut-feel selections
- **Font payload optimization**: Average web font download reduced from **280KB** to **95KB** through intelligent subsetting and variable font recommendations (66% reduction)
- **Stakeholder approval rate**: First-presented typography pairings approved **82% of the time** (vs. 35% without data-driven rationale), reducing revision cycles
- **Post-launch typography changes**: Near-zero post-launch font changes (vs. 23% of projects requiring typography adjustment after implementation)

**Who Benefits**

- **Product Designers**: Skip weeks of subjective font browsing and present data-backed recommendations that get approved faster
- **Brand Designers**: Objective typographic analysis that complements creative intuition, ensuring pairings work functionally as well as aesthetically
- **Front-End Engineers**: Performance-optimized font loading specifications with exact weights, subsets, and display strategies — no more debugging font loading issues
- **Content Strategists**: Typography optimized for their content type (long reads, data tables, marketing copy) ensuring readability where it matters most

:::

::: details Practical Prompts

**Prompt 1: Typography Pairing Recommendation**
```
Recommend typography pairings for this project based on our specific requirements.

Project type: [e.g. "B2B SaaS dashboard with marketing site"]
Brand personality: [e.g. "Professional but approachable, modern, trustworthy"]
Content types:
- Primary: [e.g. "Data-heavy tables and charts, 60% of interface"]
- Secondary: [e.g. "Short-form marketing copy, 20%"]
- Tertiary: [e.g. "Long-form help documentation, 20%"]

Technical requirements:
- Languages needed: [e.g. "English, German, French, Japanese"]
- Performance budget for fonts: [e.g. "< 100KB total"]
- Variable font preferred? [yes/no]
- Existing brand font (if any): [name, or "none — starting fresh"]

Design sensibility:
- Reference products we admire: [list 2-3 products with typography you like]
- What to avoid: [e.g. "Nothing too playful, no decorative serifs"]

Generate:
1. **Primary recommendation**: Heading font + body font pairing
   - Why they work together (structural and personality analysis)
   - Readability assessment at intended sizes
   - Character set coverage for required languages
   - Total file size with recommended weights
   - Usage specification: which font for which purpose

2. **Alternative A**: Different stylistic direction
3. **Alternative B**: Budget-friendly / better performance option

For each pairing, provide: font names, recommended weights, sample rendering at key sizes.
```

**Prompt 2: Typographic Scale Generator**
```
Generate a complete typographic scale for our product.

Base font: [name, e.g. "Inter"]
Heading font: [name, e.g. "Fraunces" or "same as body"]
Base size: [e.g. 16px]
Scale ratio preference: [e.g. "Major Third (1.250)" or "let me know what you recommend"]

Content contexts:
- Marketing pages: [describe — e.g. "hero headlines, sub-headlines, body paragraphs, CTAs"]
- Application UI: [describe — e.g. "page titles, section headers, body text, labels, captions, data cells"]
- Documentation: [describe — e.g. "H1-H4 hierarchy, body paragraphs, code blocks, callouts"]

Generate a complete scale:
1. **Size scale**: Every step from smallest (caption/label) to largest (hero headline)
   - Size in px and rem
   - Font family and weight for each step
   - Line-height (relative, e.g. 1.5) for each step
   - Letter-spacing adjustment for each step
   - Max line length recommendation for each step (in characters)

2. **Responsive adjustments**: How the scale adapts at mobile breakpoint
   - Which sizes reduce and by how much?
   - Any font-weight changes at smaller screens?

3. **Vertical rhythm**: Base unit and how spacing between text elements maintains rhythm

4. **Text style definitions**: Named styles ready for Figma and CSS
   - [e.g. display-xl, heading-lg, heading-md, heading-sm, body-lg, body-md, body-sm, caption, label, overline]
   - Each with: family, weight, size, line-height, letter-spacing, transform (if any)

Output as a specification table and CSS custom properties.
```

**Prompt 3: Font Performance Optimization**
```
Optimize our font loading strategy for performance.

Current fonts:
- [Font 1]: Weights used: [list — e.g. 400, 500, 600, 700], Format: [woff2/woff/ttf]
- [Font 2]: Weights used: [list], Format: [format]

Current loading approach: [e.g. "Google Fonts <link> tag in <head>", "self-hosted with @font-face", "Adobe Fonts kit"]
Current total font payload: [KB if known]

Languages our product supports: [list]
Performance budget: [target, e.g. "< 80KB for all font files"]

Analyze and recommend:
1. **Subsetting**: Which character sets are needed? What can be removed?
   - Calculate size savings from subsetting
2. **Variable fonts**: Are variable font versions available? Size comparison vs. multiple static files
3. **Weight reduction**: Can we eliminate any weights? (e.g., do we really need 500 AND 600?)
4. **Loading strategy**:
   - font-display value recommendation with rationale
   - Preload critical weights (which ones?)
   - Async load non-critical weights
   - Fallback font stack that minimizes layout shift (system font with similar metrics)
5. **Self-hosting vs. CDN**: Recommendation with rationale
6. **Font metrics override**: CSS font-metrics-override values to match system fallback with web font

Output: Optimized font loading implementation with before/after size comparison and code snippets.
```

**Prompt 4: Typography Accessibility Review**
```
Review our typography choices for accessibility compliance and reading comfort.

Current typography setup:
- Body font: [name], size: [px], weight: [value], line-height: [value], color: [HEX] on [background HEX]
- Heading font: [name], sizes: [list per level], weights: [list]
- Caption/label font: [name], size: [px], weight: [value]
- Monospace (code): [name], size: [px]

Layout:
- Maximum content width: [px]
- Typical line length: [approximate characters per line]
- Paragraph spacing: [px or em]

Review for:
1. **WCAG compliance**:
   - Text contrast ratios for all text/background combinations
   - Minimum text size for body content (is it ≥ 16px?)
   - Can text be scaled to 200% without layout breakage?

2. **Readability**:
   - Line length: is it within 45-75 characters for body text?
   - Line height: is it between 1.4-1.6 for body text?
   - Paragraph spacing: sufficient to distinguish paragraphs?
   - Letter-spacing: appropriate for the font and size?

3. **Cognitive accessibility**:
   - Is the heading hierarchy clear? (sufficient size/weight contrast between levels)
   - Are links distinguishable from body text without relying solely on color?
   - Is there sufficient contrast between primary and secondary text?

4. **Dyslexia-friendly considerations**:
   - Does the font have clear character differentiation (Il1, O0, bdpq)?
   - Is the font too narrow or condensed for comfortable reading?

Output: Accessibility scorecard with specific fix recommendations for each issue found.
```

**Prompt 5: Brand Typography Specification Document**
```
Create a comprehensive typography specification document for our brand.

Brand: [name]
Typography selections:
- Primary typeface: [name, foundry, license type]
- Secondary typeface: [name, foundry, license type]
- Monospace typeface (if any): [name]

Generate a brand typography guide including:
1. **Typeface overview**: History, personality, and why it fits our brand
2. **Usage hierarchy**: Which typeface for which purpose (headings, body, labels, marketing, UI)
3. **Weight usage**: Approved weights and when to use each (never use more than 3-4 weights)
4. **Size scale**: Complete scale for digital products (with px and rem values)
5. **Color combinations**: Approved text/background pairings with contrast ratios
6. **Alignment rules**: Left-align body text (never justify on web), center headings only for marketing
7. **Do/Don't examples**:
   - DO: [3 correct usage examples]
   - DON'T: [3 common mistakes — e.g. "Don't use light weight for body text smaller than 16px"]
8. **Fallback stacks**: System font fallbacks for each typeface (ordered for metric-matching)
9. **International considerations**: How typography adapts for non-Latin scripts
10. **Implementation reference**: CSS, Figma text styles, iOS/Android text appearance specs

Format as a brand guidelines chapter ready for the brand book.
```

:::

## 19. AI Design Portfolio Review Assistant

> Reviews design portfolios in **10 minutes** with institutional-quality critique — helping designers improve presentation quality by **65%** and doubling interview callback rates.

::: details Pain Point & How COCO Solves It

**The Pain: Portfolio Feedback Is Expensive, Subjective, and Inaccessible**

A design portfolio is the single most important asset in a designer's career, yet most designers receive inadequate feedback on theirs. Getting meaningful portfolio critique traditionally requires access to senior designers, hiring managers, or portfolio review events — resources that are scarce, unevenly distributed, and often gated by geography or professional network. Junior designers and career switchers are most in need of feedback but have the least access to it. Design bootcamps provide some review, but graduates report that feedback is often generic ("tell more of a story") rather than specific and actionable.

The stakes are enormous. A hiring manager spends an average of 3-4 minutes reviewing a design portfolio before deciding whether to advance a candidate. In that window, the portfolio must communicate: this designer identifies real problems, generates thoughtful solutions, delivers polished outcomes, and can articulate their process. A portfolio that buries the impact, leads with process instead of outcomes, lacks quantitative results, or presents case studies without clear narrative structure gets passed over — regardless of the quality of the actual design work. The cruel irony is that many talented designers have weak portfolios because portfolio design is a distinct skill from product design, and it's rarely taught.

Self-review is insufficient because designers are too close to their own work. They include context that exists in their head but not on the page. They assume the reviewer understands the problem space. They present work chronologically (how they did it) rather than strategically (why it matters). Without an external perspective that simulates a hiring manager's fresh eyes, designers can't identify what's confusing, what's missing, and what's undermining their narrative. The feedback gap perpetuates itself: designers with strong networks get better feedback, build better portfolios, get better jobs, and expand their networks further — while equally talented designers without access stagnate.

**How COCO Solves It**

1. **First-Impression Analysis**: COCO evaluates the portfolio the way a hiring manager actually experiences it — in the first 3 minutes:
   - Assesses the landing page: is it immediately clear who this person is, what they do, and what their strongest work is?
   - Evaluates the first 30 seconds of each case study: does it hook the reader with a compelling problem and result?
   - Checks information hierarchy: are the most important elements (outcomes, role, impact) visually prominent?
   - Identifies cognitive load issues: too much text, unclear navigation, buried call-to-action, or confusing project selection
   - Generates a "3-minute walkthrough" showing exactly what a time-constrained reviewer would see and conclude

2. **Case Study Structure Evaluation**: COCO analyzes each case study against proven portfolio narrative frameworks:
   - Checks for the essential elements: problem context, user insight, design process, key decisions, final solution, and measurable impact
   - Evaluates the balance: is the case study 80% process documentation and 20% outcome (common mistake), or properly weighted toward impact?
   - Assesses storytelling arc: does the narrative build tension (problem) and resolve it (solution), or does it meander?
   - Identifies missing specificity: "improved the user experience" vs. "reduced task completion time from 4 minutes to 90 seconds"
   - Flags common anti-patterns: showing every iteration, including irrelevant research details, or burying the final design

3. **Quantitative Impact Assessment**: COCO identifies where case studies lack the metrics that hiring managers care about:
   - Flags case studies with no measurable outcomes (the single biggest portfolio weakness)
   - Suggests metric categories appropriate to the project type (conversion rate, task time, error rate, NPS, revenue impact)
   - Identifies claims that lack evidence ("users loved it" — based on what data?)
   - Recommends how to present metrics visually for maximum impact (before/after comparisons, delta callouts)
   - Helps reframe qualitative outcomes as quantified improvements where possible

4. **Visual Presentation Critique**: COCO evaluates the portfolio's own design quality:
   - Assesses typography: is the portfolio readable? Is the type hierarchy clear? Are case study text blocks skimmable?
   - Evaluates layout: does the visual structure guide the reader's eye through the narrative?
   - Checks image quality: are mockups crisp, properly sized, and presented in appropriate context (device frames, environment)?
   - Reviews responsive behavior: how does the portfolio look on mobile (30%+ of portfolio views come from phones)
   - Flags visual inconsistencies between case studies (different layout styles, font changes, tonal shifts)

5. **Role and Level Calibration**: COCO calibrates feedback to the designer's target role and seniority:
   - Evaluates whether the portfolio demonstrates skills appropriate for the target level (junior: craft and process, senior: strategy and impact, lead: team and system thinking)
   - Identifies skill gaps relative to common job requirements for the target role (e.g., senior product designer portfolios need design system thinking)
   - Suggests project framing adjustments: the same project can be presented as a craft exercise (junior) or a strategic initiative (senior) depending on emphasis
   - Compares the portfolio's signals against what specific company types look for (startup vs. enterprise, product vs. agency)
   - Recommends which projects to include, cut, or reframe based on the target audience

6. **Actionable Revision Plan**: COCO generates a specific, prioritized improvement plan:
   - Ranks all feedback by impact (what will most improve hiring outcomes) and effort (quick fixes vs. major rewrites)
   - Provides before/after text examples for weak case study sections (rewrites the first paragraph of a case study as a demonstration)
   - Suggests structural reorganization with a recommended case study template
   - Identifies the single strongest and weakest case study, with specific guidance for each
   - Creates a 1-week revision plan with daily focus areas for efficient portfolio improvement

:::

::: details Results & Who Benefits

**Measurable Results**

- **Review time**: Comprehensive portfolio critique generated in **10 minutes** vs. 2-4 weeks waiting for a senior designer's availability
- **Portfolio quality improvement**: Designers who implement COCO's recommendations improve their portfolio presentation score by **65%** (rated by a panel of hiring managers)
- **Interview callback rate**: Designers report **2x higher callback rates** after COCO-guided portfolio revisions (from 12% to 26% average)
- **Revision efficiency**: Average portfolio revision time reduced from 3 weeks of unfocused iteration to **5 days** of targeted improvements using COCO's prioritized plan
- **Metric inclusion rate**: Case studies with measurable outcomes increased from 30% to **90%** after COCO flagged missing metrics and suggested appropriate measures

**Who Benefits**

- **Job-Seeking Designers**: Get institutional-quality portfolio feedback without needing access to senior mentors or expensive coaching, leveling the playing field
- **Junior Designers**: Specific, actionable guidance on how to present limited experience in the most compelling way, rather than generic "add more projects" advice
- **Career-Switching Designers**: Framework for reframing non-design experience as relevant design thinking, with guidance on portfolio structure for career changers
- **Design Managers (as Hiring Managers)**: Higher-quality candidate portfolios mean less time wasted on misaligned interviews and faster identification of strong candidates

:::

::: details Practical Prompts

**Prompt 1: Full Portfolio Review**
```
Review my design portfolio and provide comprehensive feedback.

Portfolio URL or description: [URL or describe each page/section]
Number of case studies: [X]
My target role: [e.g. "Senior Product Designer at a B2B SaaS company"]
Years of experience: [X years]

Case study summaries:
1. [Project name]: [1-2 sentence summary, your role, key outcome]
2. [Project name]: [summary]
3. [Project name]: [summary]
4. [Project name]: [summary]

Review from the perspective of a hiring manager at my target company type. Evaluate:

1. **First impression (0-30 seconds)**: What does a hiring manager see first? Is it compelling?
2. **Navigation and structure**: Can they find what they need quickly? Is the case study selection clear?
3. **Case study quality** (per case study):
   - Does the opening hook the reader?
   - Is the problem clearly stated with business context?
   - Is the process shown at the right level of detail?
   - Are key design decisions highlighted and justified?
   - Is the outcome quantified with specific metrics?
   - Is the narrative compelling and well-paced?
4. **Missing signals**: What does a senior/lead portfolio need that this one lacks?
5. **Visual presentation**: Is the portfolio itself well-designed?
6. **About/bio section**: Does it communicate the right professional identity?

Output: Scorecard (1-10 per category), top 5 strengths, top 5 improvements, and a prioritized action plan.
```

**Prompt 2: Case Study Narrative Strengthening**
```
Help me improve the narrative of this case study for my portfolio.

Current case study structure:
- Title: [project name]
- Overview: [paste current overview paragraph]
- Problem: [paste current problem description]
- Process: [paste current process section summary — or describe what's included]
- Solution: [paste current solution description]
- Results: [paste current results section]

My role in this project: [describe what you actually did]
Team composition: [who else was involved]
Timeline: [how long the project took]
Outcome data available: [what metrics or qualitative data you have]

Help me strengthen this case study:
1. **Rewrite the opening paragraph** to hook the reader in 2 sentences (lead with impact, not context)
2. **Sharpen the problem statement**: Make it specific, quantified, and emotionally resonant
3. **Trim the process section**: What to cut (80% of process detail doesn't help) and what to emphasize (key decisions and pivots)
4. **Enhance the solution presentation**: How to frame the design decisions, not just show the screens
5. **Strengthen the results**: Reframe available data for maximum impact. Suggest metrics to add if possible.
6. **Add missing elements**: What's this case study missing that a hiring manager needs to see?

Output the rewritten sections (not just advice — show me the improved text).
```

**Prompt 3: Portfolio Strategy for Target Role**
```
Help me strategize which projects to include and how to frame them for my target role.

Target role: [e.g. "Senior Product Designer at a fintech company, Series B-D"]
My background: [brief career summary — years, industries, company types]

Available projects to include:
1. [Project name]: [brief description, your role, outcome, company/context]
2. [Project name]: [description]
3. [Project name]: [description]
4. [Project name]: [description]
5. [Project name]: [description]
6. [Project name]: [description]
7. [Project name]: [description]

Constraints: [e.g. "Can't show Project 3 due to NDA", "Project 5 was a personal project, not professional"]

Advise:
1. **Project selection**: Which 3-4 projects to include and in what order? Why?
2. **Framing angle**: For each selected project, what angle to emphasize for the target role?
   (e.g., "For fintech: emphasize the data complexity and regulatory constraints you navigated")
3. **Projects to cut**: Which to exclude and why
4. **Gap coverage**: Does this selection demonstrate all skills the target role requires? If not, what's missing and how to address it?
5. **Differentiation**: What makes this portfolio stand out from other candidates for this role?
6. **Supporting content**: Should I include a "side projects" section, writing samples, or other materials?

Output a portfolio strategy document with project selection rationale and framing guidance.
```

**Prompt 4: Portfolio Metric Enhancement**
```
Help me add quantitative impact to case studies that currently lack metrics.

Case studies needing metrics:
1. [Project name]: [describe the project and outcome. Current results section: paste what you have — e.g. "Users responded positively to the redesign"]
   - Data available: [what data you actually have access to — e.g. "I know conversion went up but don't have exact numbers"]

2. [Project name]: [describe]
   - Data available: [what you have]

3. [Project name]: [describe]
   - Data available: [what you have — or "none, this was a concept project"]

For each case study:
1. **If data exists**: Help me present it most effectively
   - Frame as before → after comparison
   - Suggest visual presentation (callout numbers, charts, comparison tables)
   - Write the results paragraph with the data woven into a narrative

2. **If data is limited**: Help me estimate or reframe
   - What metrics could I reasonably calculate or estimate?
   - How to present qualitative outcomes quantitatively (e.g., "8 out of 10 test participants completed the task without assistance")
   - Honest framing when exact data isn't available

3. **If it's a concept project**: How to show potential impact
   - Projected metrics based on industry benchmarks
   - Usability test results (if you ran any)
   - Competitive comparison as proxy for impact

Output: Rewritten results sections for each case study with metrics incorporated.
```

**Prompt 5: Portfolio Presentation for Interview**
```
Help me prepare to present my portfolio case study in a design interview.

Case study I'll present: [project name]
Time limit: [e.g. 15 minutes presentation + 10 minutes Q&A]
Audience: [e.g. "Design Director, Senior Designer, Product Manager at [company type]"]
Company values/focus: [e.g. "User-centered design, data-driven decisions, systems thinking"]

Current case study content: [paste or summarize the full case study]

Help me prepare:
1. **Presentation structure**: Recommended slide-by-slide outline for [X] minutes
   - How much time on each section
   - What to say vs. what to show
   - Where to pause for engagement

2. **Opening hook**: Write a 30-second opening that grabs attention
3. **Key decision moments**: Identify the 2-3 most interesting design decisions to deep-dive on
4. **Anticipated questions**: 10 likely interview questions about this project, with suggested answers
5. **Weak spots**: Where might interviewers challenge me? How to address each gracefully
6. **Closing statement**: How to end strongly (tie back to the company's needs/values)

7. **Practice tips**:
   - Common presentation mistakes to avoid
   - How to handle "tell me about a failure" if this project had setbacks
   - How to discuss team collaboration without diminishing your own contribution

Output as a presentation prep document with scripted talking points for key moments.
```

:::

## 20. AI Multi-Platform Asset Exporter

> Exports design assets for **7+ platforms** simultaneously in **under 30 minutes** — replacing a manual process that takes **2 full days** and eliminates the platform-specific sizing errors that cause 40% of asset-related bug reports.

::: details Pain Point & How COCO Solves It

**The Pain: Exporting Assets Is a Full-Time Job Nobody Wants**

Modern digital products must render correctly across an ever-expanding landscape of platforms and contexts: web (standard and retina), iOS (1x, 2x, 3x), Android (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi), macOS, Windows, email clients, social media, print, and emerging platforms like wearables and in-car displays. Each platform has its own requirements for file format, resolution, color space, naming convention, and directory structure. A single icon that appears across all platforms may need 15+ exported variants. A product with 100 icons, 50 illustrations, and 20 marketing images faces an export matrix of thousands of individual files.

The export process is tedious, error-prone, and consistently deprioritized. Designers configure export settings in Figma — often one asset at a time — then manually verify that each export is correct: right dimensions, right format, right color profile, right naming convention. For a full asset update cycle, this takes 1-3 days of a designer's time. The work is so monotonous that errors are inevitable: an iOS 3x icon exported at 2x resolution, an Android asset in the wrong density folder, a web image saved as PNG when it should be WebP, or an SVG with embedded fonts that break on certain browsers. These errors surface as bug reports during development or, worse, in production.

The organizational dysfunction is that asset export is neither a design task nor an engineering task — it's an operational task that falls in the gap between teams. Designers consider it done when the design is complete. Engineers expect ready-to-use assets. The export step is an unfunded mandate that someone does reluctantly, often under time pressure at the end of a sprint. When assets need updating (a brand color changes, an icon is redesigned, a new platform is added), the entire export process must be repeated. Without automation, most organizations maintain stale asset libraries where some platforms have the latest version and others don't — creating visual inconsistencies that undermine the carefully maintained design system.

**How COCO Solves It**

1. **Platform-Aware Export Configuration**: COCO maintains export profiles for every target platform with current specifications:
   - Pre-configured export profiles for: Web (SVG, PNG @1x/2x, WebP), iOS (PDF vector, PNG @1x/@2x/@3x), Android (vector drawable, PNG at all density buckets), macOS, Windows, email, and social media
   - Automatically applies the correct color space per platform (sRGB for web, Display P3 for iOS where supported, CMYK for print)
   - Handles naming conventions per platform (kebab-case for web, camelCase for iOS, snake_case for Android) automatically
   - Generates the correct directory structure per platform (Android's drawable-mdpi/, drawable-hdpi/ structure, iOS Assets.xcassets)
   - Stays current with platform specification changes (e.g., when Android adds a new density bucket)

2. **Intelligent Format Selection**: COCO chooses the optimal file format for each asset and platform:
   - Analyzes each asset's characteristics: vector vs. raster, transparency needs, color complexity, animation
   - Selects SVG for scalable icons and illustrations on web (with PNG fallback generation for email clients)
   - Chooses WebP with PNG fallback for photographs on web (40-50% smaller than JPEG at equivalent quality)
   - Generates PDF vectors for iOS and Android vector drawable XML for Android — resolution-independent where possible
   - Applies lossy vs. lossless compression based on the asset type (logos always lossless, photography lossy with quality threshold)

3. **Automated Quality Validation**: COCO verifies every exported asset before delivery:
   - Checks dimensions match the exact specification for each platform (e.g., iOS app icon must be exactly 1024x1024)
   - Validates file size is within acceptable limits (mobile assets flag if a single image exceeds 100KB)
   - Verifies SVGs are clean: no embedded raster images, no external font dependencies, no unnecessary metadata
   - Confirms PNGs have correct transparency handling (no white-matte artifacts on transparent backgrounds)
   - Runs visual comparison between exported assets and the source design to catch export corruption

4. **Batch Processing with Smart Diffing**: COCO only exports what changed, dramatically reducing incremental update time:
   - Maintains a hash of every previously exported asset to detect which sources have been modified
   - Only re-exports assets that have actually changed since the last export run
   - Detects design token changes (color update, spacing change) that affect all assets and triggers a full re-export
   - Supports selective export by category (only icons, only illustrations, only marketing assets)
   - Generates a change manifest showing exactly what was added, updated, or removed in each export run

5. **Asset Optimization Pipeline**: COCO applies platform-specific optimizations to minimize file size without quality loss:
   - SVG optimization: removes metadata, combines paths, simplifies coordinates, removes hidden elements (SVGO-equivalent)
   - PNG optimization: color depth reduction where possible, chunk stripping, optimal compression (TinyPNG-equivalent)
   - WebP optimization: quality tuning per asset to hit the target file size with maximum visual quality
   - Sprite sheet generation for icon sets where appropriate (CSS sprites for web, texture atlases for games)
   - Progressive JPEG rendering for large photographs (shows a low-quality preview while loading)

6. **Distribution and Integration**: COCO delivers assets directly to where engineers need them:
   - Pushes exported assets to code repositories via pull requests with visual diff for review
   - Uploads to CDN or asset management systems with cache-busting version hashes
   - Updates package managers (npm packages for web icon libraries, CocoaPods/SPM for iOS, Maven for Android)
   - Generates asset manifest files that engineers import to reference assets by name rather than path
   - Maintains a browsable asset catalog with search, filtering, and download-per-platform capability

:::

::: details Results & Who Benefits

**Measurable Results**

- **Export time**: Full multi-platform asset export reduced from **2 days** of manual work to **under 30 minutes** of automated processing
- **Asset-related bugs**: Platform-specific sizing, format, and naming errors reduced from **18 per release** to **fewer than 1** (95% reduction)
- **File size optimization**: Average asset payload reduced by **45%** through intelligent format selection and optimization (200KB → 110KB average per screen)
- **Platform parity**: Time from design change to updated assets on ALL platforms reduced from **2-3 weeks** (staggered manual updates) to **same-day** (simultaneous automated export)
- **Designer time recovered**: **16 hours per release cycle** previously spent on asset export, verification, and bug-fixing redirected to design work

**Who Benefits**

- **Product Designers**: Eliminate the most tedious part of the design process — exporting and verifying assets for every platform — and focus on creative work
- **iOS Engineers**: Correctly sized, properly named, and appropriately formatted assets delivered to the exact directory structure Xcode expects
- **Android Engineers**: Vector drawables and density-specific rasters in the correct resource folders with proper naming, eliminating manual asset wrangling
- **Web Engineers**: Optimized WebP/SVG/PNG assets with fallbacks, delivered as an importable package with cache-busting filenames

:::

::: details Practical Prompts

**Prompt 1: Multi-Platform Export Configuration**
```
Generate a complete export configuration for our design assets across all target platforms.

Assets to export:
- Icons: [count, e.g. 120 icons], source format: [SVG in Figma], sizes used: [16, 20, 24, 32px]
- Illustrations: [count], source format: [vector/raster in Figma], typical dimensions: [describe]
- App icons: [list platforms — e.g. iOS App Store, Android Play Store, macOS, favicon]
- Marketing images: [count], dimensions: [describe typical sizes and aspect ratios]
- Logos: [variants — e.g. full logo, logomark, horizontal, vertical]

Target platforms:
- Web: [technologies — e.g. React with Tailwind, static marketing site]
- iOS: [minimum iOS version, Swift or SwiftUI]
- Android: [minimum API level, Kotlin]
- Email: [email clients to support]
- Print: [any print needs — business cards, conference banners]
- Social media: [platforms — Twitter, LinkedIn, Instagram]

For each asset category and platform, specify:
1. File format (SVG, PNG, WebP, PDF, XML vector drawable, etc.)
2. Resolutions/sizes needed (1x, 2x, 3x, density buckets, etc.)
3. Color space (sRGB, Display P3, CMYK)
4. Naming convention (with example)
5. Directory structure
6. Size/quality optimization settings

Output as an export configuration document with a matrix: Asset Type × Platform = Format + Settings.
```

**Prompt 2: App Icon Export Specification**
```
Generate the complete app icon export specification for all platforms.

Source icon: [describe — shape, key colors, any transparency]
Brand colors: [list HEX values used in the icon]

Generate specifications for:
1. **iOS/iPadOS**:
   - All required sizes (list each: 20pt @1x/2x/3x through 1024pt @1x for App Store)
   - Format: PNG, no transparency, no rounded corners (OS applies mask)
   - Color space: sRGB or Display P3?

2. **Android**:
   - Adaptive icon layers: foreground (108dp) and background (108dp)
   - Legacy icon sizes: 48dp in mdpi through xxxhdpi
   - Play Store icon: 512x512 PNG
   - Foreground safe zone (66dp centered circle)

3. **macOS**:
   - All required sizes (16 through 1024 at @1x and @2x)
   - Format and rounding specifications

4. **Web**:
   - Favicon: ICO (16x16, 32x32), PNG (192x192, 512x512)
   - Apple touch icon: 180x180
   - manifest.json icon entries
   - Open Graph / social sharing image: 1200x630

5. **Windows**:
   - Tile sizes: small, medium, wide, large

For each, provide:
- Exact pixel dimensions
- File format and compression settings
- Background handling (transparent, filled, adaptive)
- Naming convention
- Directory placement

Output as a complete checklist with file specifications.
```

**Prompt 3: SVG Optimization Guide**
```
Analyze and optimize these SVG icon exports for web use.

SVG issues we've encountered:
- [Issue 1: e.g. "Some icons have embedded raster images from Figma export"]
- [Issue 2: e.g. "File sizes vary wildly — some icons are 2KB, others are 45KB"]
- [Issue 3: e.g. "Icons break when we try to change their color with CSS currentColor"]

Current export process: [describe — e.g. "Export from Figma as SVG, no post-processing"]
Usage in code: [describe — e.g. "Inline SVG in React components, color set via CSS"]

Generate an SVG optimization guide:
1. **Export settings**: Optimal Figma SVG export settings
   - Include/exclude: IDs, class names, outline text, flatten transforms
   - Component preparation: how to structure layers in Figma for clean SVG export

2. **Post-export optimization** (SVGO or equivalent):
   - Plugins to enable and their configuration
   - Plugins to disable (things that break icons)
   - Expected size reduction percentage

3. **Color handling for dynamic coloring**:
   - How to prepare SVGs so CSS currentColor works
   - Handling multi-color icons (which parts should be colorable?)
   - fill vs. stroke color inheritance

4. **Accessibility**:
   - Required attributes (role, aria-label, title)
   - When to use aria-hidden (decorative icons)

5. **Common problems and fixes**:
   - Embedded fonts → outline text
   - Raster images → remove or re-trace
   - Incorrect viewBox → recalculate
   - Clip-path issues → simplify geometry
   - Inconsistent stroke-width → normalize

Output as a developer-and-designer-friendly SVG optimization guide.
```

**Prompt 4: Asset Naming Convention and Organization**
```
Design an asset naming convention and file organization system for our multi-platform product.

Current state: [describe — e.g. "No convention, files named randomly, scattered across team drives and repos"]

Asset types: Icons, Illustrations, Photos, Logos, App Icons, Marketing Graphics, UI Screenshots
Platforms: Web, iOS, Android, Email, Print
Teams contributing assets: [list — e.g. Product Design, Marketing, Brand]

Design a system covering:
1. **Naming convention**:
   - Template: [category]-[name]-[variant]-[size].[format]
   - Rules for each segment (allowed characters, casing, separators)
   - Examples for each asset type
   - How to handle platform-specific names (web: kebab-case, iOS: camelCase, etc.)
   - Versioning: how to name updated versions of the same asset

2. **Directory structure**:
   - Root organization (by asset type? by platform? by feature?)
   - Recommended structure for each platform's asset directory
   - Where source files (Figma, AI, PSD) live vs. exported files

3. **Metadata**:
   - What metadata to embed in each file (author, date, version, license)
   - How to maintain an asset registry/manifest (JSON, spreadsheet, DAM system)

4. **Governance**:
   - Who can add assets? What's the approval process?
   - How to handle duplicates and outdated assets?
   - Archive vs. delete policy

Output as an asset management guideline document with examples for every rule.
```

**Prompt 5: Responsive Image Strategy**
```
Design a responsive image strategy for our web product.

Product context:
- Page types: [e.g. marketing pages, product dashboard, blog, help center]
- Key image contexts: [e.g. hero images, product screenshots, user avatars, blog thumbnails, background images]
- Target devices: [e.g. mobile (375-428px), tablet (768-1024px), desktop (1280-1920px), 4K (2560px+)]
- Performance budget: [e.g. "< 1.5MB total page weight on initial load"]

For each image context, define:
1. **Breakpoints and sizes**:
   - srcset sizes for each breakpoint
   - art direction needs (different crop/composition at different sizes?)
   - Pixel density handling (1x, 2x, 3x)

2. **Format strategy**:
   - Primary format: WebP, AVIF, or both with fallback?
   - Fallback format: JPEG or PNG?
   - <picture> element configuration with format and size sources

3. **Optimization settings**:
   - Quality level per format (e.g. WebP quality 80, JPEG quality 85)
   - Maximum file size targets per breakpoint
   - Lazy loading rules: what's above the fold (eager) vs. below (lazy)?

4. **Placeholder strategy**:
   - LQIP (Low Quality Image Placeholder): inline base64 or dominant color?
   - BlurHash or ThumbHash?
   - Aspect ratio preservation to prevent layout shift

5. **CDN and caching**:
   - Image CDN recommendation (Cloudinary, Imgix, self-hosted)
   - Cache headers and versioning strategy
   - On-the-fly resizing vs. pre-generated sizes

Output as an implementation specification with HTML/CSS code examples for each image context.
```

:::