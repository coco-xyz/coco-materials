# Use Case #229: AI Threat Model Generator

**Role**: Developer / Security Engineer / Tech Lead / Application Architect | **Industry**: Technology, SaaS, Fintech, Healthcare, Enterprise Software | **Task**: Threat Modeling, Security Architecture, Risk Assessment

---
## Detailed Introduction

**The Pain: Security Reviews That Happen Too Late, Cover Too Little**

Threat modeling is universally acknowledged as a best practice in secure software development — and universally underpracticed. The reasons are structural. Threat modeling requires cross-domain expertise: application architecture knowledge, security domain knowledge (attack patterns, threat actors, STRIDE/DREAD frameworks), and the ability to think systematically about how an adversary would approach the system. Most development teams have deep application knowledge but limited security domain knowledge. Security teams have deep security knowledge but are chronically understaffed — a typical enterprise security team supports 10–20× more developers than it can meaningfully engage with on design reviews.

The consequence is predictable: security review happens at the wrong time (penetration testing against a system already in production) and at the wrong level (vulnerability scanning finds implementation bugs, not design flaws). The STRIDE threat modeling methodology identifies six categories of threats — Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege — that exist at the design level and are extraordinarily expensive to remediate post-deployment. An information disclosure threat identified in a threat model costs a developer 4 hours to fix in the design. The same design flaw discovered during a breach investigation costs orders of magnitude more and carries regulatory and reputational consequences that dwarfs the engineering cost.

The documentation problem compounds the skills gap. Even when threat modeling is done, the output is often a whiteboard photograph and some informal notes — not a systematic document that can be reviewed, maintained, and referenced during future development. Security debt is therefore both invisible (nobody knows what threats were considered) and unmanageable (no baseline to compare against when the system changes). New features get added to systems where the original threat model hasn't been revisited in two years, introducing new attack surfaces that nobody has thought carefully about.

**How COCO Solves It**

COCO's AI Threat Model Generator creates systematic STRIDE/DREAD threat models from architecture descriptions, data flow diagrams, and trust boundary definitions — democratizing security design review without requiring every team to have an in-house security architect.

1. **Architecture-Based Threat Identification**: COCO derives threats from the structure of the system, not from a generic checklist.
   - Analyzes data flow diagrams (DFDs) or architecture descriptions to identify all data entry points, trust boundary crossings, data stores, and external entities
   - Applies STRIDE methodology systematically to each component and data flow: what spoofing attacks exist against this authentication endpoint? what tampering attacks exist against this data store?
   - Identifies threats specific to the technology stack: OAuth2 misconfigurations for applications using OAuth, SQL injection risks for ORM-based database access, SSRF risks for services that fetch user-controlled URLs
   - Accounts for deployment environment: Kubernetes-specific threats (pod escape, RBAC misconfigurations), cloud-specific threats (IAM privilege escalation, metadata service SSRF), serverless threats (cold-start timing attacks, function hijacking)

2. **STRIDE Threat Matrix Generation**: Structured, comprehensive, and specific.
   - Produces a full STRIDE matrix for each component: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
   - Each threat entry includes: threat description, attacker profile, attack scenario, attack preconditions, potential impact, and existing/proposed mitigations
   - Groups related threats to show attack chains — a sequence of steps an attacker might combine to achieve a significant objective
   - Distinguishes between intentional threats (adversary-driven) and accidental threats (misconfigurations, unintended data exposure)

3. **DREAD Risk Scoring**: Prioritizes threats by risk so teams can focus on what matters most.
   - Scores each threat on DREAD dimensions: Damage potential, Reproducibility, Exploitability, Affected users, Discoverability
   - Produces a risk-prioritized threat register: Critical threats to address before launch, High threats to address in the next quarter, Medium/Low threats to monitor
   - Adjusts scoring based on system context: a low-severity threat is rated differently for a healthcare system with PHI than for an internal analytics dashboard
   - Provides confidence ratings for each threat: how certain is this threat given the available architecture information?

4. **Mitigation Recommendations**: Every identified threat comes with actionable defense guidance.
   - Maps each threat to specific technical mitigations with implementation guidance: "For this CSRF threat: implement SameSite=Strict cookies and verify CSRF tokens using [framework-specific implementation]"
   - References OWASP, NIST, and CIS benchmark guidance for each threat category
   - Distinguishes between: eliminate the threat (remove the attack surface), mitigate the risk (make exploitation harder), accept and monitor (residual risk with detection), or transfer (insurance, third-party)
   - Identifies compensating controls when primary mitigations aren't immediately feasible

5. **Trust Boundary & Data Flow Mapping**: Formal definitions that catch implicit assumptions.
   - Identifies all trust boundaries in the system: where does an authenticated context end? where is data validated? where do privilege levels change?
   - Maps data flows for sensitive data: PII, financial data, credentials — from ingestion through processing to storage and egress
   - Identifies data that crosses trust boundaries without appropriate validation or sanitization
   - Documents assumptions (e.g., "internal network traffic is trusted") and converts implicit trust to explicit security decisions

6. **Living Threat Model Maintenance**: Threat models that stay current as systems evolve.
   - Generates a versioned threat model document that can be updated incrementally as features are added
   - Provides change impact analysis: "New feature X introduces [N] new threat scenarios, here they are..."
   - Integrates with development workflows: threat model check as part of feature design review
   - Tracks mitigation implementation status: which identified threats have been addressed, which are still open

**Measurable Results**

- **Threat Coverage**: COCO-generated threat models identify on average 3–4× more threats than unstructured security reviews
- **Pre-Launch Issue Detection**: 55% of critical security findings from penetration tests are predictable from threat model analysis; catching them at design time costs 20–100× less
- **Security Review Democratization**: Engineering teams can conduct their own initial threat models in 3–4 hours vs. requiring a 2-week security team engagement
- **Mitigation Rate**: Teams with systematic threat models remediate 70% of high-priority threats before launch vs. 30% without
- **Compliance Support**: Threat model documentation satisfies STRIDE requirements for ISO 27001, SOC 2, and HIPAA security review evidence
- **Security Debt Reduction**: Quarterly threat model reviews catch 80% of new attack surfaces introduced by feature development

**Who Benefits**

- **Software Developers**: Learn to think adversarially about their own code with structured, system-specific threat scenarios rather than generic security advice
- **Security Engineers**: Scale their impact by reviewing AI-generated threat models rather than conducting every session from scratch
- **Tech Leads / Architects**: Integrate security into design decisions from the start, not as a post-development gate
- **Compliance & Risk Teams**: Get documented, systematic security analysis that satisfies regulatory audit requirements

---

## Practical Prompts

**Prompt 1: Full Application Threat Model**
```
Generate a comprehensive STRIDE threat model for the following application.

Application context:
- Application type: [web app / mobile backend / microservice / data pipeline / etc.]
- Industry/compliance context: [general SaaS / fintech (PCI DSS) / healthcare (HIPAA) / etc.]
- User types: [anonymous users / authenticated users / admin users / API clients]
- Deployment: [cloud provider, Kubernetes / serverless / traditional VMs]

Architecture overview:
[Describe the system — list components, how they communicate, what data they handle]

Key components:
- Frontend: [tech stack, authentication method]
- API layer: [framework, authentication, authorization approach]
- Database: [type, what sensitive data is stored]
- External integrations: [payment processor, email service, OAuth providers, etc.]
- Background jobs: [describe any async processing]

Data classification:
- PII collected: [what user data is stored]
- Financial data: [if any]
- Credentials: [how passwords, tokens, API keys are stored]

Please generate:
1. A complete STRIDE matrix covering all major components and data flows
2. A DREAD-scored threat register, sorted by risk priority
3. Trust boundary diagram (text description)
4. Top 10 highest-priority threats with specific mitigation recommendations
5. Compliance gap analysis for [relevant compliance framework]
```

**Prompt 2: Feature-Specific Threat Analysis**
```
I'm adding a new feature to an existing system and need a threat model for the new attack surface.

Existing system context (brief):
- What it does: [describe]
- Current security posture: [authentication type, key protections in place]

New feature description:
- Feature: [describe the new feature in detail]
- New data being collected/processed: [describe]
- New external integrations: [any new third-party services?]
- New user-facing functionality: [what can users do that they couldn't before?]
- New API endpoints or data flows: [describe]
- New background processes: [if any]

Please:
1. Identify new attack surfaces introduced by this feature
2. Apply STRIDE to each new component and data flow
3. Identify interactions between the new feature and existing system that create new threats
4. Score threats with DREAD and prioritize
5. Provide specific implementation guidance for the top 5 threats
6. List security acceptance criteria that should be met before this feature ships
```

**Prompt 3: Authentication & Authorization Threat Model**
```
I need a focused threat model specifically for our authentication and authorization system.

Auth system details:
- Authentication method: [username/password / OAuth2 / SAML / magic links / MFA — which factors?]
- Session management: [JWT / server-side sessions / cookie config]
- Authorization model: [RBAC / ABAC / ACL / custom]
- Token storage (client-side): [localStorage / httpOnly cookie / memory]
- Password storage: [bcrypt / Argon2 / other]
- Account recovery: [email link / security questions / SMS / other]
- OAuth providers integrated: [Google / GitHub / other]

Known concerns:
- [e.g., "We use JWTs and I'm not sure if our expiry/revocation is secure"]
- [e.g., "Password reset flow feels weak"]
- [e.g., "We don't have MFA yet and are adding it — want to model it first"]

Please generate:
1. A complete STRIDE analysis of the authentication and authorization system
2. Specific attack scenarios for the highest-risk components (credential stuffing, token forgery, privilege escalation)
3. JWT-specific threat analysis if applicable (algorithm confusion, weak secret, expiry bypass)
4. OAuth2/OIDC-specific threats if applicable (authorization code injection, state parameter attacks)
5. Hardening recommendations for each identified threat with implementation specifics
6. Test cases that would validate the security of each mitigation
```
