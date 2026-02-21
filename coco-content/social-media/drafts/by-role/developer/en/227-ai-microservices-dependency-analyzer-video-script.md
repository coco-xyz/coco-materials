# Video Script: AI Microservices Dependency Analyzer
Duration: ~30 seconds
Style: Warm yellow color tone, COCO branding

## Scene 1 (0-5s): Hook
[Fade in. Bold text on warm yellow background. Subtle particle animation.]
Voiceover: "That architecture diagram on the wiki was drawn three years ago. It's confidently wrong. Ask your team 'what does deploying Service A affect?' — you'll get a range of incomplete, contradictory answers. The hidden dependencies that diagram doesn't show are waiting for the next deployment to turn them into an incident."

## Scene 2 (5-12s): Pain Point
[Split screen: left side shows a memory leak in one shared service cascading through five downstream services to produce user-facing errors, right side shows a team spending 45-90 minutes manually reconstructing blast radius during an active incident. Numbers animate upward.]
Voiceover: "Manually maintained dependency diagrams miss 40-60% of actual service dependencies. When 5 engineers built the system, everyone knew how it fit together. At 50 engineers across 15 services, that shared mental model is gone — and nobody knows when it disappeared."

## Scene 3 (12-22s): Solution
[COCO logo appears. Smooth transition to dashboard mockup. Feature bullets animate in one by one.]
Key features:
  - Automated dependency discovery cross-referencing service mesh configurations, code repository call patterns, and distributed trace data — building a high-confidence dependency graph from actual runtime behavior
  - Blast radius calculation for any service in seconds — computing the complete transitive set of affected services for synchronous failure chains, available pre-computed before incidents happen
  - Deployment-level dependency diffing alerting on newly introduced circular dependencies before they merge
Voiceover: "COCO's AI Microservices Dependency Analyzer builds a real-time, accurate system map — blast radius information available in seconds instead of 45-90 minutes during an active incident."

## Scene 4 (22-28s): Results
[Impact metrics animate with counting effect. Green upward arrows.]
Voiceover: "Organizations discover an average of 3-5 previously unrecognized SPOFs per system. Continuous monitoring catches 85% of newly introduced circular dependencies before they merge. Service extraction effort estimates improve 50% in accuracy — no hidden dependency surprises. Cross-team incidents from service changes reduced 40%."

## Scene 5 (28-30s): CTA
[COCO logo centered. URL fades in below. Warm glow effect.]
Voiceover: "Visit coco.xyz"
