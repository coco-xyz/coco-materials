---
layout: doc
title: Privacy Policy
sidebar: false
editLink: false
---

# COCO AI Privacy Policy

**Effective Date:** March 2026
**Last Updated:** March 6, 2026

---

## Introduction

This Privacy Policy describes how **COCO Labs Limited** ("COCO," "we," "us," or "our") collects, uses, shares, and protects personal information when you use the COCO AI digital employee platform at **coco.xyz**, related services, and client-facing channels (collectively, the "Platform").

COCO is an AI digital employee platform that deploys autonomous AI agents through messaging channels including Telegram, Lark/Feishu, Slack, and enterprise messaging platforms. Each AI digital employee is an independent agent instance with persistent memory, tool-calling capabilities, and multi-channel communication.

By using our Platform, you agree to the collection and use of information as described in this policy. If you do not agree, please discontinue use of the Platform.

---

## 1. Information We Collect

### 1.1 Account & Profile Information

When you sign up through the COCO Dashboard, we collect:

- Name, email address, and login credentials (authenticated via SSO)
- Subscription plan selection (Air / Pro / Ultra / Enterprise)

### 1.2 Payment & Billing Information

We use **Stripe** to process all payments. When you subscribe:

- Credit card details are collected and stored directly by Stripe — COCO does not store your full card number
- We retain billing records including plan type, subscription status, payment history, and invoices

### 1.3 Digital Employee Configuration Data

When you create and configure an AI digital employee, we store:

- Agent instructions, prompts, and persona settings
- Channel configuration (which Telegram groups, Lark chats, Slack workspaces your employee is deployed to)

### 1.4 Persistent Memory Data

Your AI digital employee maintains persistent memory to provide continuity across conversations. This includes:

- Summarized context from prior conversations
- User preferences and working patterns learned over time
- Project-specific knowledge accumulated during interactions

You retain full control over your digital employee's memory and may view, export, or clear it at any time through the Dashboard.

### 1.5 Usage & Technical Data

We automatically collect:

- IP address, browser type, operating system, and device identifiers
- Feature usage patterns, session duration, and access timestamps
- Error and performance logs from your digital employee's runtime environment

### 1.6 Information from Third-Party Integrations

When you connect third-party tools to your digital employee (e.g., Gmail, CRM, databases), we access only the data necessary to perform the tasks you configure, within the scope you authorize via OAuth or API credentials. We do not access data from integrations you have not explicitly connected.

---

## 2. How We Use Your Information

We use your information strictly for the following purposes:

- **Operating Your AI Digital Employees:** Processing conversations, executing tasks, maintaining persistent memory, and delivering outputs across your configured channels (Telegram, Lark/Feishu, Slack, etc.)
- **Infrastructure Provisioning:** Automatically provisioning and managing dedicated cloud resources for each digital employee, including isolated subdomain routing
- **Account & Billing Management:** Subscription management, plan upgrades/downgrades, invoice generation
- **Platform Improvement:** Analyzing aggregated, anonymized usage data to improve features and reliability. **We do not use your personal content, conversations, or digital employee memory for this purpose.**
- **Security & Abuse Prevention:** Monitoring for unauthorized access, fraud, and platform abuse
- **Legal Compliance:** Meeting applicable tax, regulatory, and legal obligations
- **Communications:** Sending service-related notices (subscription updates, maintenance alerts). Marketing communications are sent only with your explicit consent and include an opt-out mechanism.

---

## 3. AI Processing and Third-Party Model Providers

Transparency about how AI processes your data is a core commitment. This section explains the full data flow.

### 3.1 LLM Providers We Use

COCO routes task data to the following large language model providers to power your AI digital employees:

| Provider | Models | Purpose |
|----------|--------|---------|
| **Leading LLM providers** | Top-tier models | Reasoning, conversation, task execution |

We work with industry-leading large language model providers. We may add or change providers over time. This list will be updated accordingly, and existing users will be notified of any material changes.

### 3.2 AI Training — Our Commitment

**Your data will never be used to train, fine-tune, or improve any AI model — whether COCO's own systems or any third-party model.**

Specifically:

- Your conversations, files, digital employee memory, and task outputs are **never** incorporated into any training dataset
- Per our LLM providers' terms of service, data transmitted through their APIs is **not used for model training or improvement**
- Data sent to our LLM providers' APIs is processed solely to generate a response to your specific request — the provider does not permanently store your content, retaining it only temporarily for security and compliance purposes
- There is **no scenario** under which opting out is required — non-training is the default and only mode

This commitment applies equally to all subscription tiers (Air, Pro, Ultra, Enterprise) and all data types (conversations, files, memory, configurations).

### 3.3 How Data Flows Through Your Digital Employee

1. You or your end-users send a message to your AI digital employee via a connected channel (Telegram, Lark, Slack, etc.)
2. COCO's platform (running on a dedicated instance for your employee) processes the input, loads relevant memory and context
3. The relevant content is routed to the LLM provider's API via encrypted connection (TLS 1.2+)
4. The LLM provider processes the request, generates a response, and returns it — **the provider does not permanently store your data, retaining it only temporarily for security and compliance purposes**
5. COCO delivers the response through the originating channel
6. Conversation history and task logs are stored within your isolated workspace

### 3.4 Agent-to-Agent Communication

COCO supports multi-agent collaboration through the HXA-Connect protocol. When your digital employee communicates with other agents:

- Messages are routed through the HXA-Connect hub (connect.coco.xyz) via encrypted WebSocket connections
- Communication is scoped to authorized agents within your organization
- Agent-to-agent logs are stored and accessible within your workspace

### 3.5 Agent Execution Transparency

When your AI digital employee takes an action (sends a message, generates a document, queries a connected service), COCO logs:

- Action type, timestamp, and execution status
- Input provided and output generated
- Channel and integration involved

These logs are accessible to workspace administrators and subject to applicable security policies.

### 3.6 Persistent Memory Management

Your digital employee's persistent memory is designed to improve service quality over time. You have full control:

- **View:** Access your digital employee's stored memory at any time
- **Export:** Download memory data in a portable format
- **Clear:** Selectively delete or fully reset your digital employee's memory
- **Scope:** Memory is isolated per digital employee — one employee's memory is never shared with another

---

## 4. How We Share Your Information

### 4.1 Service Providers

| Category | Provider | Purpose |
|----------|----------|---------|
| Cloud Infrastructure | Google Cloud Platform (GCP) | Hosting, VM provisioning, data storage |
| Payment Processing | Stripe | Subscription billing and payment |
| Authentication | SSO provider | Single sign-on and user authentication |
| LLM Provider | Leading LLM providers | AI processing (see Section 3) |
| Messaging Platforms | Telegram, Lark/Feishu, Slack | Channel delivery for digital employees |

All service providers are bound by contractual obligations to protect your data and use it only for the services they provide to us. We do not share data with providers beyond what is necessary for their specific function.

### 4.2 Connected Integrations

Data is shared with third-party tools only when you explicitly connect them to your digital employee and only within the scope you authorize.

### 4.3 Legal Requirements

We may disclose information if required by law, regulation, legal process, or governmental request, or to protect the rights, safety, or property of COCO, our users, or the public. Where legally permitted, we will notify you of such requests.

### 4.4 Business Transfers

In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you at least 30 days before any such transfer and provide the option to delete your account.

### 4.5 What We Never Do

- **We do not sell your personal data.**
- **We do not share your data for third-party advertising.**
- **We do not use your conversations or content to train AI models.**
- **We do not share data with corporate affiliates for undefined purposes.**

---

## 5. Data Security

### 5.1 Infrastructure Isolation

Each COCO digital employee runs on a **dedicated cloud instance**, providing tenant-level isolation. Your data does not share compute resources with other customers.

### 5.2 Encryption & Access

- **In transit:** TLS 1.2+ for all communications, including API calls to LLM providers, messaging channel connections, and Dashboard access
- **At rest:** AES-256 encrypted storage on GCP infrastructure
- **Access control:** Role-based permissions (user / builder / admin) via the Dashboard; SSO authentication
- **Subdomain isolation:** Each digital employee operates under a unique subdomain with per-employee routing

### 5.3 Operational Security

- Continuous monitoring of all digital employee instances
- Automated health checks and incident detection
- Credential management via encrypted environment variables — never stored in code, logs, or version control
- Regular security assessments of platform infrastructure

### 5.4 Breach Notification

In the event of a data breach affecting your personal information, we will:

- Notify affected users within 72 hours of becoming aware of the breach
- Notify relevant Data Protection Authorities as required by applicable law (GDPR Article 33)
- Provide clear information about the nature of the breach, data affected, and remediation steps

While we implement industry-standard protections, no system is completely secure. We cannot guarantee absolute security but are committed to continuous improvement of our security posture.

---

## 6. International Data Transfers

COCO's infrastructure is hosted on **Google Cloud Platform**. Your data may be stored and processed in regions where GCP operates.

For transfers of personal data from the European Economic Area (EEA), United Kingdom, or Switzerland to countries without an adequate level of data protection, we implement appropriate safeguards under applicable legal frameworks.

For enterprise customers requiring data residency in specific regions, please contact us to discuss available options.

---

## 7. Your Privacy Rights

### 7.1 All Users

Regardless of your location, you may:

- **Access** the personal data we hold about you
- **Correct** inaccurate or incomplete data
- **Delete** your account and personal data
- **Export** your conversation logs, digital employee memory, and configuration data in a structured format
- **Clear** your digital employee's persistent memory at any time
- **Opt out** of marketing communications at any time

To exercise these rights, contact us at **service@coco.xyz**. We will respond within 15 business days.

### 7.2 European Economic Area, United Kingdom, and Switzerland (GDPR)

If you are in the EEA, UK, or Switzerland, you have additional rights under the General Data Protection Regulation:

- **Right to restrict processing** of your personal data
- **Right to object** to processing based on legitimate interests
- **Right to withdraw consent** at any time (without affecting prior processing)
- **Right to data portability** in a structured, machine-readable format
- **Right to lodge a complaint** with your local Data Protection Authority

**Legal bases for processing:**
- **Contract performance:** Operating your AI digital employees and managing your subscription
- **Legitimate interests:** Platform security, fraud prevention, and service improvement (aggregated data only)
- **Consent:** Marketing communications and optional analytics
- **Legal obligations:** Tax, billing, and regulatory compliance

For complex requests, we may extend the response period by an additional 60 days with notice.

### 7.3 California Residents (CCPA/CPRA)

If you are a California resident:

- **Right to Know:** What personal information we collect, use, and share
- **Right to Access:** Request a copy of your personal information (preceding 12 months)
- **Right to Delete:** Request deletion of your personal information
- **Right to Correct:** Request correction of inaccurate information
- **Non-discrimination:** We will not discriminate against you for exercising your rights

We do not sell personal information and do not use it for cross-context behavioral advertising.

### 7.4 Singapore (PDPA)

If you are in Singapore, you have rights under the Personal Data Protection Act:

- Right to access and correct your personal data
- Right to withdraw consent for data collection, use, or disclosure
- Right to request data portability

### 7.5 Australia (Privacy Act)

If you are in Australia, you have rights under the Australian Privacy Principles:

- Right to access and correct your personal data
- Right to complain to the Office of the Australian Information Commissioner (OAIC)

### 7.6 Canada (PIPEDA)

If you are in Canada, you have rights under the Personal Information Protection and Electronic Documents Act:

- Right to access your personal information held by COCO
- Right to challenge accuracy and completeness
- Right to withdraw consent (subject to legal or contractual restrictions)

---

## 8. Enterprise Customer Data

For Enterprise and Pro customers deploying COCO digital employees within their organization:

- COCO acts as a **Data Processor** on your behalf, processing data according to your instructions
- Workspace administrators have full control over:
  - Data retention settings (configurable per workspace)
  - User access permissions and role assignments
  - Integration authorizations
  - Digital employee memory management
- Enterprise customers are responsible for providing appropriate privacy notices to their own end-users whose data may be processed through COCO digital employees
- For enterprise deployments requiring enhanced data residency or compliance controls, contact us to discuss available options

---

## 9. Children's Privacy

The Platform is not intended for individuals under the age of 16 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children.

If we become aware that we have collected data from a child, we will promptly delete it and take steps to prevent further collection. Please contact us at **service@coco.xyz** if you believe a child has provided personal data.

---

## 10. Third-Party Links and Integrations

Your AI digital employees may connect to third-party services (Telegram, Lark, Slack, Gmail, CRM systems, etc.). We are not responsible for the privacy practices of these services. We encourage you to review the privacy policies of any third-party services you connect to your COCO workspace.

When connecting integrations, COCO requests only the minimum permissions necessary for the configured tasks. You can revoke integration access at any time through the Dashboard.

---

## 11. Changes to This Policy

We may update this Privacy Policy from time to time.

- **Material changes:** We will notify you via Dashboard notification at least 30 days before changes take effect, clearly describing what has changed
- **Minor changes:** Updated on this page with a revised "Last Updated" date
- **Your options:** If you disagree with material changes, you may delete your account before the changes take effect

The "Last Updated" date at the top indicates the most recent revision.

---

## 12. Contact Us

If you have questions about this Privacy Policy or our data practices:

- **Email:** service@coco.xyz
- **Website:** https://coco.xyz
- **Response time:** Within 15 business days
