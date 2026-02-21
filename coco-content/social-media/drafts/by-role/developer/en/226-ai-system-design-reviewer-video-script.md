# Video Script: AI System Design Reviewer
Duration: ~30 seconds
Style: Warm yellow color tone, COCO branding

## Scene 1 (0-5s): Hook
[Fade in. Bold text on warm yellow background. Subtle particle animation.]
Voiceover: "Design review: a 30-minute meeting where everyone nods, concerns go unvoiced, the review produces no written record of trade-offs. Six months later, the system is in production — and a failure mode that was visible in the design is causing your first major incident. Boehm's Cost of Change: 1x to fix in design, 10-100x to fix post-deployment."

## Scene 2 (5-12s): Pain Point
[Split screen: left side shows a synchronous call chain cascading into failure when a downstream service degrades, right side shows a database schema that can't be migrated at production data volumes. Numbers animate upward.]
Voiceover: "Architectural failure patterns are well-documented: missing circuit breakers on external dependencies, caching strategies that work at 100 users and cause thundering herd at 10,000, shared database patterns that make service extraction impossible. These are known traps. Catching them requires structured review against a comprehensive checklist — which most teams lack."

## Scene 3 (12-22s): Solution
[COCO logo appears. Smooth transition to dashboard mockup. Feature bullets animate in one by one.]
Key features:
  - Systematic architecture review across communication patterns, data storage decisions, service boundary design, and API choices — identifying over-synchronization, SPOFs, and scaling bottlenecks
  - Failure mode and resilience analysis checking circuit breakers, timeout/retry strategies, and graceful degradation behavior for every external dependency
  - Severity-categorized findings list (Critical/High/Medium/Low) with specific alternatives and trade-off analysis, plus ADR documentation drafted automatically
Voiceover: "COCO's AI System Design Reviewer compresses comprehensive architecture review from 2-3 days of senior engineer time to 4-6 hours — covering 95%+ of standard review dimensions."

## Scene 4 (22-28s): Results
[Impact metrics animate with counting effect. Green upward arrows.]
Voiceover: "Teams using structured design review catch 60-70% of architectural issues before implementation. Architecture-layer incidents reduced by 45%. ADR documentation completeness improves from 20% to 85%+ of decisions documented. Each issue caught in design vs. post-deployment saves 10-50x in remediation cost."

## Scene 5 (28-30s): CTA
[COCO logo centered. URL fades in below. Warm glow effect.]
Voiceover: "Visit coco.xyz"
