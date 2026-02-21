# Use Case #231: AI Access Permission Auditor

**Role**: Developer / DevOps Engineer / Security Engineer / Platform Engineer | **Industry**: Technology, SaaS, Fintech, Healthcare, Enterprise | **Task**: IAM Audit, Least Privilege Enforcement, Compliance Review

---
## Detailed Introduction

**The Pain: Access Creep That Accumulates Until It Becomes a Security Crisis**

The principle of least privilege is universally understood and universally violated. Not through malice — through the natural mechanics of fast-moving engineering organizations. When a developer needs access to a production database for a critical debugging session, the emergency fix is to grant broad access now and clean it up later. Later never comes. When a service account needs a new permission for a feature, it's easier to add admin-level access than to carefully scope the minimum required policy. When a team member leaves and their IAM user is deprovisioned, their access groups might not be — and the permissions live on. Six months later, an audit reveals that 40% of active service accounts have administrative or near-administrative permissions that they never actually use, and 15 users have cross-account access from three previous projects ago.

The scale of the problem in cloud environments is genuinely staggering. AWS, GCP, and Azure each offer thousands of discrete permissions across hundreds of services. A well-intentioned developer given the task of scoping IAM permissions for a new service faces a combinatorial problem that cannot be solved by reading documentation — it requires tooling. Without that tooling, the path of least resistance is wildcard permissions and managed admin policies. A typical 50-engineer startup running on AWS has thousands of IAM policies, hundreds of roles, dozens of service accounts, and no single person who understands the full permission graph.

The compliance dimension compounds the security risk. SOC 2, ISO 27001, PCI DSS, and HIPAA all require demonstrable least-privilege access controls, periodic access reviews, separation of duties, and audit trails for privileged access. Failing these controls in an audit results in findings that block enterprise sales, trigger customer security reviews, and require emergency remediation projects. Organizations typically discover compliance gaps when auditors arrive — at the worst possible time, under the worst possible time pressure.

**How COCO Solves It**

COCO's AI Access Permission Auditor reviews IAM policies, RBAC configurations, and service account permissions across cloud providers and Kubernetes clusters to identify excessive privileges, separation of duties violations, and compliance gaps — producing remediation recommendations sorted by risk and complexity.

1. **IAM Policy Analysis**: COCO analyzes cloud IAM at scale.
   - Reviews AWS IAM policies (inline, managed, boundary), roles, and groups for overly permissive statements
   - Identifies wildcard permissions (`s3:*`, `ec2:*`, `*:*`) and analyzes which specific permissions are actually needed vs. granted
   - Detects privilege escalation paths: combinations of permissions that allow a principal to escalate to administrative access even without explicit admin grants (e.g., `iam:CreatePolicyVersion`, `iam:AttachRolePolicy`, `lambda:CreateFunction` + `iam:PassRole`)
   - Analyzes GCP IAM bindings for over-broad role assignments and primitive roles (Owner, Editor) that should be replaced with predefined or custom roles
   - Reviews Azure RBAC role assignments for scope appropriateness (subscription-level vs. resource group vs. resource)

2. **Service Account Audit**: Service accounts are often the most over-privileged principals.
   - Enumerates all service accounts and compares their granted permissions against their actual usage (using CloudTrail, GCP Audit Logs, or Azure Activity Logs to determine which permissions are actively exercised)
   - Identifies "zombie" service accounts: service accounts with no usage in the past 90 days that retain active permissions
   - Detects service accounts with human-level interactive permissions (console access, password credentials) that should be key-based only
   - Identifies service accounts shared across multiple services (should be per-service for blast radius containment)
   - Generates a permission usage report: granted vs. used, with unused permissions highlighted as remediation candidates

3. **Kubernetes RBAC Analysis**: Kubernetes adds its own permission complexity.
   - Reviews ClusterRoles and Roles for overly broad rules: wildcards on resources, verbs, or API groups
   - Identifies ServiceAccounts bound to powerful ClusterRoles (especially `cluster-admin`)
   - Detects namespace isolation violations: principals with cross-namespace access beyond what's required
   - Reviews RBAC inheritance: how RoleBindings and ClusterRoleBindings interact
   - Flags common Kubernetes RBAC anti-patterns: binding to `system:masters`, using `*` verbs, granting `exec` to production pods

4. **Separation of Duties Analysis**: Ensures no single principal can perform high-risk action combinations alone.
   - Identifies SoD violations: principals that can both approve and execute sensitive operations (e.g., can both create IAM policies and attach them)
   - Reviews production access controls: are there developers with direct production write access without change management controls?
   - Checks data access controls: can developers query production PII databases directly?
   - Identifies missing approval workflows for sensitive operations

5. **Compliance Mapping**: Connects access findings to specific compliance requirements.
   - Maps each finding to relevant compliance controls: SOC 2 CC6.1/CC6.3 (logical access), PCI DSS 7 (need-to-know access), HIPAA §164.312(a)(1) (access control), ISO 27001 A.9
   - Generates a compliance-ready access review report documenting what was reviewed, when, and what was found
   - Identifies "high-risk" permission combinations that regulators and auditors specifically look for
   - Tracks access review completion status for periodic review requirements

6. **Remediation Prioritization & Policy Generation**: Not just "here's what's wrong" but "here's the fix."
   - Prioritizes findings by risk: Critical (privilege escalation paths, wildcard admin) > High (unused admin permissions) > Medium (non-critical overly broad access) > Low (minor policy hygiene)
   - Generates least-privilege replacement policies for identified over-permissive policies
   - Produces an access cleanup plan with effort estimates and sequencing recommendations
   - Generates permission scope recommendations for new service accounts using observed access patterns

**Measurable Results**

- **Permission Reduction**: Typical first audit identifies that 35–50% of granted permissions are unused and candidates for removal
- **Privilege Escalation Path Elimination**: COCO identifies an average of 12–25 privilege escalation paths in mature AWS environments — most previously unknown
- **Compliance Readiness**: Access review documentation produced in 4–8 hours vs. 2–4 weeks manually for SOC 2 preparation
- **Service Account Hygiene**: Zombie service account identification and cleanup reduces attack surface by 30% on average
- **Audit Finding Reduction**: Organizations completing COCO audits before external audits see 60–70% fewer access-related audit findings
- **Incident Risk**: Organizations with least-privilege enforcement have 45% lower credential-based attack impact (smaller blast radius when credentials are compromised)

**Who Benefits**

- **DevOps / Platform Engineers**: Understand the full permission landscape of the infrastructure they manage and address gaps systematically
- **Security Engineers**: Scale access review coverage across cloud accounts and Kubernetes clusters without manual policy-by-policy review
- **Tech Leads / Developers**: Get guidance on correct scoping for service account permissions in new infrastructure code
- **CTO / CISO**: Demonstrate least-privilege compliance to auditors and enterprise customers with documented, systematic access reviews

---

## Practical Prompts

**Prompt 1: AWS IAM Audit**
```
I need a comprehensive audit of our AWS IAM permissions for excessive privileges and security risks.

AWS environment context:
- Number of accounts: [N AWS accounts]
- Account structure: [single account / multi-account with Organizations / standalone]
- Approximate scale: [N IAM users, N roles, N service accounts]
- Primary services used: [EC2, RDS, S3, Lambda, EKS, etc.]
- Compliance requirements: [SOC 2 / PCI DSS / HIPAA / internal only]

Artifacts to analyze (paste or attach):
- IAM policy document(s): [paste JSON or attach]
- IAM role list with attached policies: [describe or attach]
- CloudTrail usage data: [available yes/no]

Known concerns:
- [e.g., "Several roles have AdministratorAccess that might be unnecessary"]
- [e.g., "We have service accounts from old projects that might still be active"]
- [e.g., "Developers have direct production S3 bucket access"]

Please:
1. Identify all overly permissive policies with specific policy statements to remediate
2. Detect privilege escalation paths in the current permission set
3. Identify unused permissions (granted but not used in past 90 days if CloudTrail available)
4. Flag wildcard permissions and recommend specific replacements
5. Identify zombie IAM users/roles (no recent activity)
6. Generate a risk-prioritized remediation list with effort estimates
7. For the top 5 issues, generate replacement least-privilege policy JSON
```

**Prompt 2: Kubernetes RBAC Security Review**
```
I need to audit our Kubernetes RBAC configuration for security risks.

Cluster context:
- Kubernetes version: [version]
- Cloud provider: [EKS / GKE / AKS / self-managed]
- Number of namespaces: [N]
- Number of ServiceAccounts: [N]
- Workload types: [describe: web services, batch jobs, data processing, etc.]

RBAC configuration (paste or attach):
- ClusterRoles list: [paste `kubectl get clusterroles -o yaml` output or describe]
- ClusterRoleBindings: [paste `kubectl get clusterrolebindings -o yaml`]
- Namespace-scoped Roles and RoleBindings for key namespaces: [paste or describe]
- ServiceAccounts of concern: [list any you already know about]

Known concerns:
- [e.g., "We think some service accounts might have cluster-admin binding"]
- [e.g., "We use a shared ServiceAccount across multiple services"]
- [e.g., "Some workloads have exec access to production pods"]

Please:
1. Identify all ClusterRoleBindings granting cluster-admin or equivalent
2. Find ServiceAccounts with permissions beyond their actual operational needs
3. Detect wildcard permissions (*, verbs, API groups) that should be scoped
4. Identify cross-namespace RBAC that violates isolation principles
5. Flag RBAC anti-patterns (exec on production, secrets access for non-secret-needing workloads)
6. Generate replacement RBAC manifests for the highest-risk findings
```

**Prompt 3: Access Review for Compliance Audit**
```
I need to conduct a formal access review for our upcoming [SOC 2 / ISO 27001 / PCI DSS] audit.

Access review scope:
- Cloud accounts: [list]
- Kubernetes clusters: [list]
- Critical systems requiring access review: [database, payment system, admin consoles, etc.]
- Review period: [e.g., "reviewing accesses as of [date]"]
- User population: [N employees, N contractors, N service accounts]

Current access inventory (attach or describe):
- User-to-role mappings: [format, how to provide]
- Service account inventory: [list or attach]
- Privileged access list: [who has admin/elevated access]

Compliance context:
- Standard: [SOC 2 / ISO 27001 / PCI DSS / HIPAA]
- Specific controls to evidence: [list the control IDs if known]
- Previous audit findings related to access: [describe if any]

Please:
1. Identify access that violates least-privilege principles
2. Flag accesses that represent SoD violations
3. Identify stale/orphaned access (terminated employees, decommissioned services)
4. Produce a compliance-ready access review report documenting scope, methodology, and findings
5. Generate a management attestation checklist for access reviewers (business owners certifying access is appropriate)
6. Map findings to specific compliance control gaps with remediation recommendations
```
