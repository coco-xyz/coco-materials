# Use Case #230: AI Security Incident Forensics Assistant

**Role**: Developer / Security Engineer / DevOps Engineer / Incident Responder | **Industry**: Technology, SaaS, Fintech, Healthcare, Enterprise Software | **Task**: Security Incident Investigation, Digital Forensics, Incident Timeline Analysis

---
## Detailed Introduction

**The Pain: Security Incidents That Unfold Faster Than Humans Can Analyze**

A security incident — whether a data breach, ransomware infection, insider threat, or external intrusion — is simultaneously a technical crisis and a forensic investigation. The responding team must do two things at once: contain the ongoing attack and investigate what already happened. These goals are often in tension. Containment actions destroy evidence. Investigation takes time that allows damage to spread. And the volume of forensic data involved in a modern cloud-native environment — terabytes of logs, hundreds of thousands of network events, thousands of file system changes — is simply beyond what a human analyst can process manually in the time available.

The attacker's advantage is methodology. Sophisticated threat actors follow known frameworks (MITRE ATT&CK, Cyber Kill Chain) with systematic precision. They cover tracks by deleting logs and manipulating timestamps. They establish multiple persistence mechanisms so that evicting them from one vector doesn't end the intrusion. They move laterally using compromised credentials, mimicking legitimate behavior to blend into normal traffic patterns. Catching this requires pattern recognition across millions of events — exactly the kind of analysis that human analysts can do in principle but cannot scale to the data volumes modern incidents produce.

The documentation burden compounds the technical challenge. After containment, organizations face regulatory notification timelines (72 hours for GDPR, 60 days for HIPAA), legal evidence preservation requirements, executive communication demands, and the organizational post-mortem process — all while the security team is exhausted from the response. The forensic report that lawyers, regulators, and insurance companies need typically requires 2–4 weeks of manual analysis. Teams that have already spent 72+ hours containing the incident face another month of documentation work.

**How COCO Solves It**

COCO's AI Security Incident Forensics Assistant analyzes security incident artifacts — logs, network captures, file system changes, memory dumps, and endpoint telemetry — and produces structured, timeline-based forensics reports that compress weeks of analysis into hours.

1. **Multi-Source Artifact Analysis**: COCO ingests the full spectrum of forensic artifacts.
   - Processes application logs, access logs, authentication logs, and audit logs from any source
   - Analyzes network captures (PCAP files, NetFlow data, DNS query logs, firewall logs) to reconstruct network-level activity
   - Examines file system activity: creation, modification, deletion events from EDR tools, Windows Event Logs, Linux auditd, or cloud storage access logs
   - Processes authentication events: failed login attempts, successful authentications, privilege changes, new account creation
   - Analyzes cloud API audit logs (AWS CloudTrail, GCP Audit Logs, Azure Activity Log) for infrastructure-level attacker activity

2. **MITRE ATT&CK Technique Mapping**: Ground incident findings in the industry-standard framework.
   - Maps observed attacker behaviors to specific MITRE ATT&CK techniques and sub-techniques
   - Identifies which Tactics are represented: Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Exfiltration, Impact
   - Uses ATT&CK mappings to suggest what other attacker activity to look for — if Technique A is observed, related Techniques B and C are commonly used by the same threat actor profile
   - Assesses the sophistication level of the threat actor based on technique selection

3. **Attack Timeline Reconstruction**: The chronological story of what happened.
   - Automatically correlates events across all ingested data sources, normalized to a common timestamp
   - Reconstructs the complete attack timeline: initial compromise → lateral movement → persistence establishment → data access/exfiltration → detection
   - Identifies the "patient zero" — the first indicator of compromise, often hours or days before the alert that triggered the response
   - Determines attacker dwell time: how long were they in the environment before detection?
   - Marks investigator actions in the timeline to distinguish attacker activity from responder activity

4. **Indicators of Compromise (IoC) Extraction**: Actionable threat intelligence from the incident.
   - Extracts all observed IoCs: IP addresses, domain names, file hashes, user agents, URL patterns, registry keys, scheduled task names
   - Validates IoCs against threat intelligence feeds to identify known malicious infrastructure
   - Generates a shareable IoC report in STIX/TAXII format for integration with security tooling
   - Identifies attacker infrastructure patterns for threat actor attribution

5. **Scope of Compromise Assessment**: What was accessed, touched, or taken?
   - Identifies all systems accessed by the threat actor during the intrusion
   - Maps data access: which files, database tables, S3 buckets, or secrets were accessed?
   - Assesses exfiltration: was data transferred out? How much? To where?
   - Identifies compromised credentials: which accounts were used or potentially accessed by the attacker?
   - Determines whether attackers are still present and active (active threat vs. historical incident)

6. **Regulatory & Legal Report Generation**: The documentation that follows containment.
   - Generates a structured forensic report suitable for legal review with chain-of-custody documentation
   - Produces an executive summary for leadership communication (non-technical, impact-focused)
   - Creates a technical forensic report for security team and insurance purposes
   - Drafts a regulatory notification with the required elements for GDPR, HIPAA, or other applicable frameworks
   - Generates evidence preservation checklist ensuring forensic integrity is maintained throughout

**Measurable Results**

- **Analysis Speed**: Forensic timeline reconstruction compressed from 2–4 weeks manual work → 12–24 hours with COCO assistance
- **Attacker Dwell Time Discovery**: COCO identifies the actual start of incidents on average 72 hours earlier than manual analysis, revealing full scope
- **IoC Completeness**: Automated extraction identifies 3–5× more IoCs than manual log review
- **Regulatory Timeline**: GDPR 72-hour notification drafted and reviewed within the required window in 85% of cases (vs. 30% without assistance)
- **Coverage Completeness**: COCO-assisted investigations examine 10–50× more log volume than human analysts can review manually
- **Incident Recurrence**: Organizations with complete forensic reports have 60% lower recurrence rates (root cause fully understood and remediated)

**Who Benefits**

- **Security Engineers / Incident Responders**: Handle larger, more complex incidents with systematic analysis support — without requiring a full forensics team
- **DevOps Engineers / SREs**: Investigate security anomalies in the systems they operate with structured forensic guidance
- **Engineering Leadership**: Understand the full scope and timeline of incidents for accurate business impact assessment
- **Legal / Compliance Teams**: Receive analysis-backed regulatory notifications and legal evidence packages on compressed timelines

---

## Practical Prompts

**Prompt 1: Initial Compromise Investigation**
```
We've detected a potential security incident and need forensic analysis to understand what happened.

Incident context:
- Alert/trigger: [what caused you to suspect an incident: alert, user report, unusual traffic, etc.]
- Affected systems: [list systems believed to be involved]
- Detection timestamp: [when was the incident detected]
- Suspected scope: [data breach / unauthorized access / malware / insider threat / other]
- Cloud environment: [AWS / GCP / Azure / on-premise / hybrid]

Available artifacts (paste or attach):
- Authentication logs (past 72 hours): [paste sample or attach]
- Access logs for affected systems: [paste sample or attach]
- Network logs / firewall logs: [available: yes/no]
- EDR/endpoint alerts: [paste if available]
- Cloud audit logs (CloudTrail/GCP Audit/Azure Activity): [available: yes/no]

Known facts:
- Affected accounts/users: [if known]
- Known malicious IP or file: [if any alerts have specific IoCs]
- Containment actions taken so far: [list what's been done]

Please:
1. Reconstruct the attack timeline from the provided artifacts
2. Identify patient zero and the initial compromise vector
3. Map observed behaviors to MITRE ATT&CK techniques
4. Determine the scope of compromise (systems accessed, data accessed)
5. Extract all Indicators of Compromise (IoCs)
6. Identify whether the threat actor is still present
7. Recommend immediate containment actions if any gaps remain
```

**Prompt 2: Post-Incident Forensic Report**
```
Our incident has been contained. I need to produce a forensic report for [legal / regulatory / insurance / internal] purposes.

Incident summary:
- Incident type: [data breach / ransomware / unauthorized access / insider threat]
- Timeline: [start date] to [end date/containment date]
- Affected systems: [list]
- Data potentially accessed: [describe categories of data]
- Confirmed exfiltration: [yes / no / unknown]
- Affected users/accounts: [numbers, categories]

Evidence collected:
- Log sources analyzed: [list]
- Time period covered: [date range]
- Key findings from investigation: [summarize what you know]

Reporting requirements:
- Regulatory framework: [GDPR / HIPAA / PCI DSS / SEC / state breach notification law / internal only]
- Notification deadline: [if applicable]
- Audience: [legal team / regulators / board / insurance / all]

Please produce:
1. An executive summary (1 page, non-technical)
2. A detailed forensic timeline with timestamps
3. Root cause analysis
4. Scope of compromise assessment
5. Evidence of attacker techniques and objectives
6. [Draft regulatory notification with required data elements if applicable]
7. Remediation actions completed and remaining
8. Recommendations to prevent recurrence
```

**Prompt 3: Log Analysis for Suspicious Activity**
```
I have suspicious logs and need help determining if this is a security incident.

System context:
- System: [web server / database / API gateway / cloud account / endpoint]
- Normal behavior baseline: [describe what normal looks like for this system]
- Why this looks suspicious: [describe what you observed that triggered concern]

Suspicious log excerpt:
[Paste the suspicious log entries — include timestamps, source IPs, user agents, actions taken]

Questions to answer:
1. Is this consistent with a known attack pattern? Which one?
2. What is the most likely explanation for this activity?
3. Is there evidence of successful compromise or only attempted attack?
4. What additional logs or artifacts should I collect to confirm/deny?
5. What is the recommended immediate response?
6. What MITRE ATT&CK techniques are potentially represented?
7. Are there IoCs I should immediately block at the firewall/WAF?
```
