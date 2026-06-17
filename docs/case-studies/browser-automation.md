# Browser Automation Tutorial: Let Your AI Employee Operate Web Pages

> Let your COCO AI Employee log into websites, take screenshots, fill forms, and scrape data — anything a browser can do, your AI can do for you.

**Workflow:** Install browser component → (Optional) Set up VNC remote monitoring → Give tasks in natural language → AI Employee automates the browser and reports results

## Prerequisites

- COCO AI Employee
- No additional accounts needed — the component works out of the box

---

## What Can Browser Automation Do?

Once the browser component is installed, you can ask your AI Employee to complete these tasks with a single message:

- **Log into accounts**: Remotely log into Gmail, company dashboards, or any website
- **Take screenshots**: Capture any web page and send it to your chat
- **Fill out forms**: Automatically fill in and submit forms
- **Scrape data**: Extract structured data from web pages and organize it into tables
- **Scheduled monitoring**: Periodically check a page for price changes, status updates, or content changes
- **Automated workflows**: Multi-step web operations like placing orders, approvals, or publishing content

---

## Step 1: Install the Browser Component

Simply tell your COCO AI Employee:

```
Install the browser component
```

Or send the following command:

```
zylos add browser
```

The AI Employee will automatically download and install it, usually within 1–2 minutes.

### Verify Installation

After installation, ask your AI Employee:

```
Is the browser component installed?
```

The AI Employee will confirm the installation status. Once installed, you can start giving browser tasks right away.

> 💡 No restart needed — ready to use immediately after installation.

---

## Step 2: (Optional) Set Up VNC Remote Monitoring

VNC lets you see your AI Employee's browser screen in real time. This is especially useful when:

- You want to watch the AI's operations live
- You need to manually complete a CAPTCHA or SMS verification
- You want to log into an account yourself, then hand off to the AI

### Enable VNC

Tell your AI Employee:

```
Enable VNC remote desktop access
```

The AI Employee will provide you with a **web link** and a connection password.

### Connect via VNC

The browser component provides remote desktop access through **noVNC web interface** — no client software needed:

1. Open the VNC web link provided by the AI Employee in your browser
2. Enter the connection password
3. You'll see the AI Employee's live desktop right in your browser

### Typical Usage: Log In via VNC, Let AI Take Over

1. Connect to the AI Employee's desktop via VNC
2. Manually log into your account in the browser (e.g., Google, company systems)
3. Disconnect from VNC after logging in
4. Tell the AI Employee: "I've logged in, now help me with..."
5. The AI Employee reuses the logged-in browser session and continues the remaining tasks

> 💡 The AI Employee preserves your login state — no need to re-login for future related tasks.

---

## Step 3: Give Browser Tasks

After installation, simply tell your AI Employee what you need in natural language.

### Screenshots

```
Open https://icoco.ai and send me a screenshot
```

```
Take a screenshot of my Gmail inbox to check for new emails
```

### Login & Operations

```
Log into my Gmail, check if there are any emails from support@xxx.com today, and send me the subject lines and timestamps
```

```
Open our company's CRM dashboard and screenshot the latest 10 customer records
```

### Fill Out Forms

```
Open this link and fill out the form: name "John Smith", email "john@example.com", then submit
```

### Data Scraping

```
Open https://example.com/pricing and organize all plan names and prices into a table for me
```

```
Every morning at 9 AM, check the competitor's pricing page and notify me if anything changes
```

---

## Daily Usage Flow

### 1. Give a Task

Describe what you want the AI Employee to do in natural language — the more specific, the better:

```
Open Gmail, find emails with "invoice" in the subject, download the attachments and send them to me
```

### 2. AI Executes and Reports

The AI Employee will:
- Automatically navigate to the target web page
- Understand the page structure and locate interactive elements
- Perform clicks, typing, scrolling, and other operations
- Take screenshots of key steps
- Report the results

### 3. Handle Exceptions

If the AI encounters login verification, CAPTCHA, or other situations requiring human intervention, it will proactively notify you:

```
I encountered an SMS verification code. Please connect via VNC to handle it, or tell me the code.
```

Once you've handled it, the AI Employee continues with the remaining operations.

---

## FAQ

**Q: Can the AI log into accounts with two-factor authentication (2FA)?**
A: Yes, but you'll need to help with the verification step. We recommend connecting via VNC to manually complete 2FA, then letting the AI take over. Alternatively, you can send the verification code directly to your AI Employee.

**Q: Is the AI's browser the same as my local browser?**
A: No. The AI Employee runs an independent browser on the server, completely separate from your local browser. VNC lets you remotely view the AI's browser.

**Q: Can the AI still use the account I logged into via VNC?**
A: Yes. The AI Employee preserves the login session and can use it for future tasks without re-logging in, unless the session expires or is manually cleared.

**Q: Can the AI run browser tasks on a schedule?**
A: Yes. Just tell the AI Employee: "Check ... for me every morning at 8 AM," and it will automatically set up a scheduled task.

**Q: Will the AI trigger anti-bot detection?**
A: The browser component is built on a real browser engine (Playwright), so its behavior closely resembles a normal user. The risk of triggering anti-bot measures is low, but some platforms have strict detection — we recommend the AI maintain reasonable intervals between actions.

**Q: Which browsers does the component support?**
A: It's built on Chromium (Chrome engine) and is compatible with the vast majority of modern websites.

**Q: What if installation fails?**
A: Tell your AI Employee "The browser component installation failed, help me troubleshoot," and it will automatically diagnose and fix the issue.

---

Learn more: [icoco.ai](https://icoco.ai) Contact us: support@icoco.ai
