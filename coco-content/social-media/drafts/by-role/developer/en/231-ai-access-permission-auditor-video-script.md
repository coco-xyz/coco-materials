# Video Script: AI Access Permission Auditor
Duration: ~30 seconds
Style: Warm yellow color tone, COCO branding

## Scene 1 (0-5s): Hook
[Fade in. Bold text on warm yellow background. Subtle particle animation.]
Voiceover: "Emergency debugging session: grant broad production database access now, clean it up later. Later never comes. Six months later, an audit reveals 40% of active service accounts have administrative permissions they never actually use, and 15 users have cross-account access from three previous projects. Nobody did this on purpose."

## Scene 2 (5-12s): Pain Point
[Split screen: left side shows the combinatorial explosion of AWS IAM policies that no single person understands completely, right side shows compliance audit findings triggering an emergency remediation project. Numbers animate upward.]
Voiceover: "AWS, GCP, and Azure each offer thousands of discrete permissions across hundreds of services. Properly scoping IAM permissions for a new service is a combinatorial problem that can't be solved by reading documentation. The path of least resistance is always wildcard permissions and managed admin policies — and they accumulate until they become a crisis."

## Scene 3 (12-22s): Solution
[COCO logo appears. Smooth transition to dashboard mockup. Feature bullets animate in one by one.]
Key features:
  - IAM policy analysis identifying wildcard permissions, overly broad managed roles, and privilege escalation paths — combinations of permissions that allow reaching admin access without an explicit admin grant
  - Service account audit comparing granted permissions against actual usage from CloudTrail and audit logs — flagging zombie accounts with no activity in 90+ days
  - Risk-prioritized remediation plan generating least-privilege replacement policy JSON for high-priority findings — satisfying SOC 2, PCI DSS, and HIPAA access control evidence requirements
Voiceover: "COCO's AI Access Permission Auditor compresses SOC 2 access review documentation from 2-4 weeks of manual work to 4-8 hours — finding to remediation, end-to-end."

## Scene 4 (22-28s): Results
[Impact metrics animate with counting effect. Green upward arrows.]
Voiceover: "First audits typically identify 35-50% of granted permissions as unused remediation candidates. Mature AWS environments average 12-25 privilege escalation paths — most previously unknown. Organizations completing COCO audits before external audits see 60-70% fewer access-related findings. Least-privilege enforcement reduces credential-based attack blast radius by 45%."

## Scene 5 (28-30s): CTA
[COCO logo centered. URL fades in below. Warm glow effect.]
Voiceover: "Visit coco.xyz"
