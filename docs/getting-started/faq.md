---
title: FAQ
---

<script setup>
import { withBase } from 'vitepress'
</script>

<img :src="withBase('/faq-banner.png')" alt="COCO FAQ" style="width:100%;border-radius:12px;margin-bottom:24px;" />

# FAQ

## I. Cloud Agent Authorization

<div class="section-intro">
<details>
<summary>What is Cloud Agent Authorization?</summary>

**Cloud Agent Authorization** means granting an AI Agent (like CoCo) deployed on a cloud server the permissions to operate third-party platforms.

Breaking it down:
- **Cloud host** = remote server with no screen or browser
- **Agent** = an AI program running autonomously (CoCo)
- **Authorization** = giving it a "pass" to act on your behalf on platforms like Lark, GitHub, Telegram, etc.

Common third-party authorization scenarios include: GitHub (code repositories), Lark (team collaboration), Telegram (instant messaging), cloud platform APIs (AWS, GCP, etc.).

</details>
</div>

::: details Q1: What permissions does the Agent need? How is the scope controlled?

**Principle of Least Privilege**

COCO AI employees follow the "least privilege" principle — only requesting the minimum permissions needed to complete the task you specify, never overreaching.

**Permission Scope Breakdown**

| Task Type | Required Permission | Description |
|-----------|---------------------|-------------|
| View server status | Read-only | Cannot modify any configuration |
| Deploy/update applications | Write access to specific directories | Limited to specified paths, cannot touch other directories |
| Restart services | Service management permission | Limited to specified services, cannot modify system-level config |
| View logs | Log read permission | Does not involve sensitive config files |

**How to Control Permission Scope**

Before onboarding, the COCO team will provide a standard permissions checklist for your review and approval. To add or adjust permissions, contact the COCO team (Telegram: [@CocoAIxyz](https://t.me/CocoAIxyz)).

**Standard Permissions Checklist**

**I. Code of Conduct (Agent Built-in Rules)**

| Rule | Description |
|------|-------------|
| Least privilege | Only request the minimum permissions needed for the task |
| Confirm before acting | Ask for your approval before irreversible actions (e.g., deleting files, modifying configs) |
| Key protection | All API keys, tokens, passwords, and other sensitive info are encrypted at rest and never appear in chat logs or public documents |
| Third-party review | Review code security before installing any external tools or plugins |
| Audit logging | All operations are logged and can be reviewed at any time |

**II. Channel Access Permissions**

You can configure independently for each communication channel who can interact with the Agent:

| Setting | Meaning |
|---------|---------|
| Open mode | Anyone can talk to the Agent |
| Whitelist mode | Only designated users can talk to the Agent |
| @mention mode | In group chats, the Agent only responds when @mentioned, preventing accidental triggers |

Each channel (Lark, Telegram, Web Console, etc.) can be configured independently without affecting others.

**III. Memory & Data Management**

The Agent has a memory system to remember your preferences and work context:

- **Identity info**: Records team members' roles and communication preferences for personalized service
- **Work records**: Saves project progress and decision history to avoid repetitive communication
- **Data isolation**: Each user's information is stored separately and not leaked between users
- **Viewable & deletable**: You can request to view or delete any information the Agent has stored at any time

:::

::: details Q2: What authorization methods are supported? How do I choose between SSH Key, API Token, and browser login?

COCO supports three mainstream authorization methods. Choose based on your platform and security requirements:

**Method 1: SSH Key (recommended for Linux servers)**

Use case: Directly managing VPS / cloud hosts (Hetzner, AWS EC2, DigitalOcean, etc.)

Steps:
1. Create a dedicated system account on your server (e.g., `coco-agent`) — do not use the root account
2. Generate an SSH key pair, or use the public key provided by COCO
3. Add the public key to that account's `~/.ssh/authorized_keys`
4. Complete the authorization configuration through conversation with the AI employee — they will guide you through connection verification

Security tips:
- Limit the dedicated account's permissions to necessary directories only; do not grant sudo unless required
- Configure an IP whitelist to restrict SSH connections to COCO's servers only

**Method 2: API Token (recommended for cloud platforms / SaaS services)**

Use case: Allowing the AI employee to access third-party service APIs, such as:
- GitHub → Create PRs, view issues, manage repositories
- Lark → Send messages, manage documents
- Telegram → Send and receive bot messages
- Other SaaS platforms → Integrate via each platform's API

Steps:
1. Create a "service account" or "API Token" on the relevant platform with the required permissions
2. Recommended: create a dedicated token rather than using your personal account's primary token. For GitHub:
   - **Classic Token**: Permissions selected by broad category (e.g., `repo`, `read:org`) — quick to set up
   - **Fine-grained PAT**: Precise control down to specific repositories and action types — more secure, recommended
3. Send the generated token to the AI employee, who will help you complete configuration and verification

Security tips:
- Set a token expiry (e.g., 90 days) and rotate regularly
- Configure IP restrictions for the token if the platform supports it
- Use separate tokens for different purposes so they can be revoked independently

**Method 3: Browser Login (for platforms that require web interaction)**

Use case: Some platforms lack a robust API, or certain actions must be completed via a webpage

Steps:
1. Install COCO's Browser component (virtual browser) — just tell the AI employee "help me install the browser component"
2. Connect to the virtual browser via remote desktop (VNC)
3. Log into the target platform in the virtual browser
4. Once logged in, the AI employee can perform operations through that browser

Security notes:
- Login state (cookies) is stored in the virtual browser and typically lasts from weeks to months
- Re-login is required once cookies expire
- Note: some social media platforms have restrictions on automated activity — use this primarily for information gathering and be cautious about bulk automated actions

**Comparison of the Three Methods**

| Method | Use Case | Revocation Difficulty | Security Level |
|--------|----------|-----------------------|----------------|
| SSH Key | Linux servers | Low (just remove the public key) | High (key encryption) |
| API Token | Cloud platforms / SaaS | Low (delete directly on the platform) | Medium–High (varies by platform) |
| Browser Login | Web-based platforms | Low (clear browser login state) | Medium (cookies expire) |

:::

::: details Q3: Real-world example of cloud Agent authorization

This is a very common question. Cloud hosts are typically headless Linux environments — no browser, no graphical UI for redirect-based logins. Here are three solutions:

**Option 1: Generate a Personal Access Token (PAT) — Recommended, simplest**

1. Log into GitHub (or another platform) on your own computer
2. Go to Settings → Developer Settings → Personal Access Tokens
3. Generate a token and select the scopes the Agent needs (e.g., `repo`, `read:org`)
4. Provide the token to the COCO AI employee (via the chat window)
5. The AI employee uses the token to operate — no browser login required

You can also just tell the AI employee what you need, for example:
> "I want you to be able to create PRs and merge on GitHub for me — help me set up the permissions."

The AI employee will guide you through the setup step by step.

Security tips:
- Create a dedicated token (don't use your everyday development token)
- Set an expiry date
- Only select the necessary permission scopes

**Option 2: Provide session credentials after logging in yourself**

1. Log into GitHub on your own computer
2. Provide the login cookie / session token to the AI employee
3. The AI employee uses your session to complete the operation

Note: This approach has lower security — once the session expires, you'll need to repeat the process. PAT is preferred.

**Option 3: Install Browser Component + Remote VNC**

1. Tell the AI employee "help me install the Browser component" — they will automatically install and configure the virtual browser
2. Once installed, you'll receive a remote desktop (VNC) link
3. Open the virtual browser via that link and log into the platform
4. Once logged in, the AI employee can operate through that browser

Use case: Complex authorization flows requiring a full browser environment. Even though cloud hosts have no physical desktop, all browser-required operations can be completed via VNC.

**Summary: No desktop does NOT mean no authorization**

| Option | Difficulty | Security | Best For |
|--------|------------|----------|----------|
| PAT | Lowest | High (controllable scopes) | GitHub, GitLab, and other token-supporting platforms |
| Cookie/Session | Low | Medium (expires) | Temporary operations |
| Browser + VNC | Medium | High (full browser) | Complex auth flows, multi-factor authentication |

:::

::: details Q4: How do I revoke the Agent's authorization?

**Revoke via Conversation**

Simply tell the AI employee which platform's authorization you want to revoke, for example:
> "Help me delete the GitHub token authorization" or "Revoke access to platform XX"

The AI employee will help you delete the credentials and confirm completion.

**Manual Revocation**

You can also take action directly on the source platform for the most thorough revocation:
1. **Revoke credentials**: Delete the SSH Key or API Token on your server / cloud platform
2. **Clear browser login state**: If you used browser login, notify the AI employee to clear the login state for that platform

**Emergency Situations**

If you notice abnormal activity, in addition to the above steps:
- Contact COCO support immediately (support@coco.xyz) — we will help investigate
- For server security concerns, you can disable the account directly on the server side (`usermod -L coco-agent`)

**Data Handling After Revocation**

After authorization is revoked, COCO no longer holds your credentials and will not initiate new operations.

:::

::: details Q5: After the Agent service ends, does COCO retain my credentials?

**Clear Commitment**

- Once you actively disconnect, the COCO system will delete the stored credentials (SSH Keys, API Tokens, etc.)

**Recommendation**: Regardless, after revoking authorization please also delete the corresponding keys on your server / cloud platform side — this is the most thorough security guarantee.

:::

## II. Social Media & Third-Party Platforms

::: details Q6: What social media and third-party platforms are supported?

COCO AI employees can access various third-party platforms via API or the Browser component. The specific scope of support depends on your use case and the openness of each platform.

You can ask the AI employee directly, for example:
> "Can you help me operate platform XX?" or "I want to monitor activity on platform XX — can you do that?"

The AI employee will tell you the current support status and recommend the best integration method.

For platforms that require web-based interaction, installing the Browser component (virtual browser) is recommended — just tell the AI employee "help me install the browser component" to get started.

:::

::: details Q7: How is data timeliness guaranteed?

**Three Timeliness Guarantees**

1. **Scheduled scraping + proactive push**: Automatically collects data at your configured frequency and immediately sends notifications when new content appears — no manual checking needed
2. **Incremental updates**: Only fetches new content since the last check, avoiding duplicate processing
3. **Anomaly detection**: If scraping from a platform fails (e.g., network timeout, rate limiting), you'll be alerted promptly rather than silently failing

**Objective Limitations on Data Latency**

| Factor | Impact | Description |
|--------|--------|-------------|
| Scraping frequency limits | N-hour delay | Depends on the check interval you set |
| Platform API rate limiting | Occasional delays | Some platforms restrict request frequency |
| Viral content spikes | Possible 1–2 cycle delay | Trending content spreads fast; tracking may lag slightly |

If the content you're monitoring is highly time-sensitive (e.g., real-time sentiment monitoring), it's recommended to set the highest scraping frequency and enable instant push notifications.

:::

::: details Q8: Is social media data scraping compliant?

**Our Approach**

- We only scrape **publicly accessible** content (public posts from public accounts)
- We comply with each platform's robots.txt and terms of service
- We do not scrape private messages or private content

**User Responsibility**

When using the collected data, please ensure compliance with local data protection regulations (e.g., GDPR, data security laws). COCO provides data collection tools, but compliance with regulations for how you use that data is your responsibility.

:::

## III. Product Usage

::: details Q9: What's the difference between COCO and regular ChatGPT?

| Dimension | ChatGPT | COCO |
|-----------|---------|------|
| **How you use it** | You open the app and ask questions | The AI employee proactively executes tasks end-to-end and pushes results to you |
| **Memory** | Forgets everything after the conversation ends | Persistent cross-conversation memory — gets smarter the more you use it |
| **Automation** | Not supported | Supports scheduled tasks with no manual trigger needed |
| **Channels** | ChatGPT app | Platforms you already use: Lark/Telegram |
| **Underlying model** | OpenAI GPT | Claude (Anthropic) |
| **Team collaboration** | Personal tool | Can join group chats — the whole team shares one AI employee |

In short: ChatGPT is a smart Q&A tool. COCO is a digital employee that proactively gets work done, remembers you, and grows more capable over time.

:::

::: details Q10: How do I get started with COCO?

**Full Onboarding Flow (approximately 15 minutes)**

1. Register a COCO account and choose a plan
2. Follow the [Channel Deployment Guide](https://docs.coco.xyz) to connect your channel (Telegram: ~5 minutes; Lark: ~10 minutes)
3. Complete the Onboarding in the Dashboard (select your role; the AI employee initializes automatically)
4. Send your first message and start collaborating

For deployment assistance, contact support (support@coco.xyz) or your customer group — we offer 1-on-1 Onboarding support.

:::

::: details Q11: What AI models does COCO support?

COCO is a **fully managed service** — the underlying AI models are managed by us, so you don't need to supply your own API key:

| Plan | Model Used | Capabilities |
|------|-----------|--------------|
| **Air** | Mainstream standard model (Claude Sonnet tier) | Everyday tasks: writing, organizing, analysis |
| **Pro / Ultra** | Top-tier model (Claude Opus tier) | Complex reasoning, very long documents, high-frequency use |

**Model switching**: COCO automatically selects the most suitable model based on task type and cost efficiency — this is transparent to users. For special requirements (e.g., Enterprise compliance requiring a specific model), contact us to discuss separately.

:::

## IV. Security & Privacy

::: details Q12: Data Security and Privacy Protection

As a managed service provider, your conversation data passes through COCO's servers to be processed by the AI model. Throughout this process, we strictly protect your data security. We have established a comprehensive data security framework to fully ensure information safety.

**Data Security Measures:**
- End-to-end transmission encryption (HTTPS/TLS) and encrypted data storage
- User conversation data is never used for model training or any other purpose
- Strict data access controls with audit logs for all operations involving user data
- No personnel may access user conversation content without explicit user authorization

**Privacy Commitments:**
- User conversation content is strictly confidential — no one may view or access it without explicit user authorization
- We do not sell, share, or use user data for model training or any other purpose
- A formal privacy protection agreement is being finalized and will clearly define all data rights in writing

:::
