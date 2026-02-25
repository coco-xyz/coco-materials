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
