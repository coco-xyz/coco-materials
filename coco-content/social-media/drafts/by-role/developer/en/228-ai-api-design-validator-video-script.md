# Video Script: AI API Design Validator
Duration: ~30 seconds
Style: Warm yellow color tone, COCO branding

## Scene 1 (0-5s): Hook
[Fade in. Bold text on warm yellow background. Subtle particle animation.]
Voiceover: "APIs are contracts. Unlike internal code you can refactor freely, APIs with consumers are almost impossible to fix after the fact: you can't rename a field that thousands of client apps already parse, you can't change a status code that partner systems already handle, you can't restructure a response shape that mobile apps have already shipped against."

## Scene 2 (5-12s): Pain Point
[Split screen: left side shows a client developer writing special-case handling for inconsistent naming conventions across endpoints, right side shows a list endpoint that works fine in development timing out in production at scale. Numbers animate upward.]
Voiceover: "These aren't mistakes — they're patterns that emerge naturally without systematic review: snake_case mixed with camelCase, 200 OK returned for errors, missing pagination that works at 50,000 records in development and causes production timeouts at scale. Every design problem is fixable before consumers. After, the cost is permanent."

## Scene 3 (12-22s): Solution
[COCO logo appears. Smooth transition to dashboard mockup. Feature bullets animate in one by one.]
Key features:
  - Protocol-specific best practice validation for REST, GraphQL, and gRPC — covering naming, HTTP semantics, status codes, pagination design, and authentication patterns
  - Backward compatibility analysis classifying proposed API changes as compatible additions, silent breaking changes, or breaking changes requiring migration strategy
  - Consumer migration guide generation including before/after code examples in multiple client languages and a deprecation timeline draft
Voiceover: "COCO's AI API Design Validator catches 75% of API design issues before the API has consumers — and reduces unintentional breaking changes reaching consumers by 80%."

## Scene 4 (22-28s): Results
[Impact metrics animate with counting effect. Green upward arrows.]
Voiceover: "APIs reviewed with COCO receive 40% higher developer satisfaction scores from consumers. API specification completeness improves from 55% to 90%+. Comprehensive design review time drops from 3-hour manual sessions to 45 minutes — and COCO-generated migration guides cut consumer migration effort by 50%."

## Scene 5 (28-30s): CTA
[COCO logo centered. URL fades in below. Warm glow effect.]
Voiceover: "Visit coco.xyz"
