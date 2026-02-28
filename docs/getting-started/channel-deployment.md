# Channel Deployment Guide

Detailed guide for connecting your AI employee to Telegram or Lark.

## Supported Channels

| Channel | Status | Best For |
|---------|--------|----------|
| Telegram | Available | International users, personal use |
| Lark (Feishu) | Available | Domestic teams, enterprise use |
| WhatsApp | Coming Soon | International business users |
| Discord | Coming Soon | Developer/community scenarios |
| Slack | Planned | European/US enterprise users |
| WeChat Work | Planned | Domestic enterprise users |

> **Tip:** You can connect multiple channels simultaneously. Your AI employee responds across all connected channels. Pro plan supports Telegram + Lark dual-channel access.

## Prerequisites

| Item | Description |
|------|-------------|
| COCO Account | Registered and paid/trial active |
| Channel Account | Your Telegram or Lark platform account |
| ~10 minutes | Time to complete deployment |

**You do NOT need:**
- Any servers or technical infrastructure
- Any coding skills
- API keys or developer accounts
- Any technical knowledge

---

## Option A: Telegram Deployment (Recommended for international users)

**Estimated time: 5-8 minutes**

### Step 1: Create a Telegram Bot
1. Open Telegram, search for **@BotFather** (official bot manager)
2. Send `/newbot` command
3. Enter your Bot display name (e.g., `My COCO AI`)
4. Enter your Bot username (must end with `bot`, e.g., `my_coco_ai_bot`)
5. BotFather returns a **Bot Token** (format: `110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`)
6. **Copy and save this Token** — you'll need it next

> **Important:** The Bot Token is your bot's unique credential. Do not share it with others.

### Step 2: Configure Bot Settings (Optional but recommended)
In @BotFather:
1. Send `/setdescription` → Select your Bot → Enter description
   - Suggested: `COCO AI Digital Employee - Your Dedicated AI Assistant`
2. Send `/setuserpic` → Select your Bot → Upload an avatar
   - Recommended: Use COCO logo or your company logo

### Step 3: Connect in COCO Dashboard

> **Free Trial Note:** During the free trial period, payment and automated setup steps are skipped. After creating your Bot, please provide your **Bot Token** to the COCO technical team. Our team will manually assist with the configuration. This may take some time — we will complete your deployment within **24 hours**.

<!--
1. Log into [COCO Dashboard](https://coco.site/dashboard)
2. Go to **Connect** or **Channels** page
3. Select **Telegram**
4. Paste the Bot Token from Step 1
5. Click **Verify and Connect**
6. System automatically validates the Token and completes connection
-->

### Step 4: Start Using
1. In Telegram, search for your Bot username (e.g., `@my_coco_ai_bot`)
2. Click **Start** or send `/start`
3. Send any message — AI employee responds immediately
4. Deployment complete!

> **Tip:** Telegram is the simplest deployment. No admin permissions needed, no extra configuration. Recommended for first-time users.

### Telegram FAQ

| Issue | Solution |
|-------|----------|
| Bot not responding | Check if Token is correct, verify connection status in Dashboard |
| Slow responses | Check network connection. Telegram requires stable internet |
| Want multi-user access | Add Bot to a Telegram group. All group members can interact with AI |
| Want to switch Bot | Disconnect old one in Dashboard, create new Bot and reconnect |

---

## Option B: Lark / Feishu Deployment

**Estimated time: 8-15 minutes**

> **Note:** Adding a self-built app (Bot) in Lark/Feishu requires **enterprise admin approval**. If you don't want to set up an enterprise Bot right away, you can first create a [Lark personal account](https://www.larksuite.com) (international) or [Feishu personal account](https://www.feishu.cn) (domestic). You can create and use Bots in your personal workspace without admin approval.

Lark (international) and Feishu (domestic China) have slightly different interfaces. Choose the guide that matches your platform:

### Lark Deployment (Recommended for international teams) {#lark}

#### Step 1: Access Lark Open Platform

1. Visit [Lark Open Platform](https://open.larksuite.com)
2. Log in with your Lark account
3. Click **Developer Backend** in the top-right corner

#### Step 2: Create a Custom App

1. In the Developer Backend, click **Create Custom App**
2. Enter app name (e.g., `COCO AI Employee`) and description
3. After creation, note down:
   - **App ID**
   - **App Secret**

> **Tip:** Enterprise admin permissions are required. If you're not an admin, contact your IT department or use a Lark personal account first.

#### Step 3: Configure Permissions

In the app management page, go to **Permissions & Scopes** and enable:

**Required Permissions (minimum set):**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| Send & receive messages | `im:message` | AI sends and receives messages |
| Read group @bot messages | `im:message.group_at_msg:readonly` | Receive @mentions in groups (required, otherwise bot won't respond in group chats) |
| Get group info | `im:chat:readonly` | Identify chat groups |
| Get user info | `contact:user.base:readonly` | Identify users |

**Recommended Permissions (enhanced experience):**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| Upload/download files | `im:resource` | AI handles files and images |

::: details Quick Setup: Batch Import Permissions via JSON

Instead of adding permissions one by one, you can paste the following JSON to import all permissions at once. **Document-related permissions are optional** — only add them if you want the bot to read Lark Docs, Sheets, or Wiki.

```json
{
  "scopes": {
    "tenant": [
      // ── Core Messaging ──
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.group_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_users",
      "im:message:update",

      // ── Chat & Contacts ──
      "im:chat.members:bot_access",
      "im:chat:readonly",
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "contact:user.employee_id:readonly",
      "contact:user.id:readonly",

      // ── Media & Interactions ──
      "im:resource",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:url_preview.update",

      // ── Documents (optional — add only if you want the bot to read Lark Docs) ──
      "bitable:app:readonly",
      "calendar:calendar:readonly",
      "docs:doc:readonly",
      "docx:document:readonly",
      "sheets:spreadsheet:readonly",
      "wiki:wiki:readonly"
    ],
    "user": []
  }
}
```

:::

After enabling, click **Create Version** to submit for admin approval.

> **Admin Approval:** After publishing a Lark custom app, the enterprise admin must approve it in the **Lark Admin Console** before the app becomes active. If you're using a personal Lark account, this step is not needed. Approval typically takes 1-2 business days. You can check the approval status on the app management page.

> **Note:** The message receiving capability (`im.message.receive_v1`) is configured as an Event Subscription in the next step, not as a permission. The `im:message` permission already includes the ability to send rich text messages.

#### Step 4: Configure Event Subscription

> **Prerequisite:** Before configuring event subscriptions, you need to choose a custom **username** — just pick any name you like. This username becomes part of your dedicated domain, used to generate the Webhook URL in the format: `https://<username>.coco.site/webhook/lark/`. Since usernames must be globally unique, the system may append additional characters (such as `-`) to your chosen name to ensure uniqueness.

1. In app management, go to **Events & Callbacks**
2. Under "Event Configuration", select **Send events to developer server**
3. Set **Request URL**: `https://<username>.coco.site/webhook/lark/` (replace `<username>` with the username you registered on the COCO platform)
4. Subscribe to events:
   - `im.message.receive_v1` — Receive messages (required)
   - `im.chat.member.bot.added_v1` — Bot added to group (optional)
5. Click **Save**

#### Step 5: Get Verification Token

After configuring event subscriptions, you need to get the **Verification Token** (required) for the COCO platform binding:

1. In app management, go to **Events & Callbacks**
2. Click the **Encryption Strategy** tab
3. Find the **Verification Token** at the bottom of the page, click the eye icon to view and copy it

> **Tip:** On the same page you'll also find the **Encrypt Key** (optional). If you need encrypted communication, record this as well.

#### Step 6: Connect in COCO Dashboard

> **Free Trial Note:** During the free trial period, payment and automated setup steps are skipped. After completing the Lark configuration above, please provide your **App ID**, **App Secret**, **Verification Token**, and **Encrypt Key** (if set) to the COCO technical team. Our team will manually assist with the configuration. This may take some time — we will complete your deployment within **24 hours**.

<!--
1. Log into [COCO Dashboard](https://coco.site/dashboard)
2. Go to **Connect** or **Channels** page
3. Select **Lark**
4. Enter:

| Field | Source |
|-------|--------|
| App ID | Lark Open Platform → Credentials |
| App Secret | Lark Open Platform → Credentials |
| Verification Token | Lark Open Platform → Events & Callbacks → Encryption Strategy |
| Encrypt Key (optional) | Lark Open Platform → Events & Callbacks → Encryption Strategy |

5. Click **Verify and Connect**
6. System auto-configures Webhook and verifies connectivity
-->

#### Step 7: Enable Bot and Add to Groups

1. In Lark Open Platform, go to **Bot** menu, confirm bot functionality is enabled
2. Open Lark client
3. Create or enter a group
4. Group Settings → **Bots** → **Add Bot** → Search for your app name
5. Confirm addition
6. @mention your bot in the group and send a message
7. AI employee responds → Deployment complete!

> **Also works in private chat:** Search for your app name in Lark and start a direct conversation.

---

### Feishu Deployment (Recommended for domestic China teams) {#feishu}

#### Step 1: Access Feishu Open Platform

1. Visit [Feishu Open Platform](https://open.feishu.cn)
2. Log in with your Feishu account
3. Click **Developer Backend** in the top-right corner

#### Step 2: Create an Enterprise App

1. In the Developer Backend, click **Create Custom App**
2. Enter app name (e.g., `COCO AI Employee`) and description, select an app icon
3. Click **Create** to finish
4. After creation, go to **Credentials & Basic Info** in the left sidebar and note down:
   - **App ID**
   - **App Secret**

> **Tip:** Enterprise admin permissions are required. If you're not an admin, contact your IT department or use a Feishu personal account first.

#### Step 3: Add Bot Capability and Configure Permissions

In the app management page, first add the **Bot** capability by clicking **+ Add**, then go to **Permission Management** in the left sidebar.

In the Permission Management page, click **Enable Permissions** to search and add required permissions. Type the Permission ID (e.g., `im:message`), check the needed permissions, then click **Confirm**.

**Required Permissions:**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| Send & receive messages | `im:message` | AI sends and receives messages |
| Read group @bot messages | `im:message.group_at_msg:readonly` | Receive @mentions in groups (required, otherwise bot won't respond in group chats) |
| Get group info | `im:chat:readonly` | Identify chat groups |
| Get user info | `contact:user.base:readonly` | Identify users |

**Recommended Permissions:**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| Upload/download files | `im:resource` | AI handles files and images |

::: details Quick Setup: Batch Import Permissions via JSON

Instead of adding permissions one by one, you can paste the following JSON to import all permissions at once. **Document-related permissions are optional** — only add them if you want the bot to read Feishu Docs, Sheets, or Wiki.

```json
{
  "scopes": {
    "tenant": [
      // ── Core Messaging ──
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.p2p_msg:readonly",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_users",
      "im:message:update",

      // ── Chat & Contacts ──
      "im:chat.members:bot_access",
      "im:chat:readonly",
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "contact:user.employee_id:readonly",
      "contact:user.id:readonly",

      // ── Media & Interactions ──
      "im:resource",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:url_preview.update",

      // ── Documents (optional — add only if you want the bot to read Feishu Docs) ──
      "bitable:app:readonly",
      "calendar:calendar:readonly",
      "docs:doc:readonly",
      "docx:document:readonly",
      "sheets:spreadsheet:readonly",
      "wiki:wiki:readonly"
    ],
    "user": []
  }
}
```

:::

After enabling, click **Publish Version** to submit for admin approval.

> **Admin Approval:** After publishing a Feishu custom app, the enterprise admin must approve it in the **Feishu Admin Console** before the app becomes active. If you're using a personal Feishu account, this step is not needed. Approval typically takes 1-2 business days. You can check the approval status on the app management page.

> **Note:** Message receiving (`im.message.receive_v1`) is configured as an Event Subscription in the next step, not here. `im:message` already includes rich text sending.

#### Step 4: Configure Event Subscription

> **Prerequisite:** Before configuring event subscriptions, you need to choose a custom **username** — just pick any name you like. This username becomes part of your dedicated domain, used to generate the Webhook URL in the format: `https://<username>.coco.site/webhook/lark/`. Since usernames must be globally unique, the system may append additional characters (such as `-`) to your chosen name to ensure uniqueness.

1. In app management, go to **Events & Callbacks**
2. Under "Event Configuration", select **Send events to developer server**
3. Set **Request URL**: `https://<username>.coco.site/webhook/lark/` (replace `<username>` with the username you registered on the COCO platform)
4. Subscribe to events:
   - `im.message.receive_v1` — Receive messages
   - `im.chat.member.bot.added_v1` — Bot added to group (optional)
5. Click **Save**

#### Step 5: Get Verification Token

After configuring event subscriptions, you need to get the **Verification Token** (required) for the COCO platform binding:

1. In app management, go to **Events & Callbacks**
2. Click the **Encryption Strategy** (加密策略) tab
3. Find the **Verification Token** at the bottom of the page, click the eye icon to view and copy it

> **Tip:** On the same page you'll also find the **Encrypt Key** (optional). If you need encrypted communication, record this as well.

#### Step 6: Connect in COCO Dashboard

> **Free Trial Note:** During the free trial period, payment and automated setup steps are skipped. After completing the Feishu configuration above, please provide your **App ID**, **App Secret**, **Verification Token**, and **Encrypt Key** (if set) to the COCO technical team. Our team will manually assist with the configuration. This may take some time — we will complete your deployment within **24 hours**.

<!--
1. Log into [COCO Dashboard](https://coco.site/dashboard)
2. Go to **Connect** or **Channels** page
3. Select **Feishu**
4. Enter:

| Field | Source |
|-------|--------|
| App ID | Feishu Open Platform → Credentials |
| App Secret | Feishu Open Platform → Credentials |
| Verification Token | Feishu Open Platform → Events & Callbacks → Encryption Strategy |
| Encrypt Key (optional) | Feishu Open Platform → Events & Callbacks → Encryption Strategy |

5. Click **Verify and Connect**
6. System auto-configures Webhook and verifies connectivity
-->

#### Step 7: Enable Bot and Add to Groups

1. In Feishu Open Platform, go to **Bot** menu, confirm bot functionality is enabled
2. Open Feishu client
3. Create or enter a group
4. Group Settings → **Bots** → **Add Bot** → Search for your app name
5. Confirm addition
6. @mention your bot in the group and send a message
7. AI employee responds → Deployment complete!

> **Also works in private chat:** Search for your app name in Feishu and start a direct conversation.
