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
1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Go to **Connect** or **Channels** page
3. Select **Telegram**
4. Paste the Bot Token from Step 1
5. Click **Verify and Connect**
6. System automatically validates the Token and completes connection

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

## Option B: Lark (Feishu) Deployment (Recommended for domestic teams)

**Estimated time: 8-15 minutes**

> **Note:** Adding a self-built app (Bot) in Lark/Feishu requires **enterprise admin approval**. If you don't want to go through the enterprise approval process right away, you can first create a [Lark personal account](https://www.larksuite.com) (international) or [Feishu personal account](https://www.feishu.cn) (domestic). You can create and use Bots in your personal workspace without admin approval.

### Step 1: Create a Lark App
1. Visit [Lark Open Platform](https://open.larksuite.com) (international) or [Feishu Open Platform](https://open.feishu.cn) (domestic)
2. Log in with your Lark/Feishu admin account
3. Click **Create App** → Select **Enterprise Self-Built App**
4. Enter app name (e.g., `COCO AI Employee`) and description
5. After creation, note down:
   - **App ID**
   - **App Secret**

> **Tip:** Enterprise admin permissions are required to create apps. If you're not an admin, contact your IT department.

### Step 2: Configure Permissions
In the app management page, go to **Permission Management** and enable:

**Required Permissions (minimum set):**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| Send & receive messages | `im:message` | AI sends and receives messages |
| Get group info | `im:chat:readonly` | Identify chat groups |
| Get user info | `contact:user.base:readonly` | Identify users |
| Receive message events | `im:message.receive_v1` | Real-time message reception |

**Recommended Permissions (enhanced experience):**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| Upload/download files | `im:resource` | AI handles files and images |
| Send rich text | `im:message.rich_text` | Send formatted messages |

After enabling, click **Publish Version** and wait for admin approval.

### Step 3: Configure Event Subscription
1. In app management, go to **Events & Callbacks**
2. Set **Request URL**: Provided by COCO, format: `https://api.coco.xyz/webhook/lark/{your-instance-id}`
3. Subscribe to events:
   - `im.message.receive_v1` — Receive messages
   - `im.chat.member.bot.added_v1` — Bot added to group (optional)
4. Note the **Verification Token** and **Encrypt Key** (if set)

### Step 4: Connect in COCO Dashboard
1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Go to **Connect** or **Channels** page
3. Select **Lark/Feishu**
4. Enter:

| Field | Source |
|-------|--------|
| App ID | Lark Open Platform → App Credentials |
| App Secret | Lark Open Platform → App Credentials |
| Verification Token | Lark Open Platform → Event Subscription |
| Encrypt Key (optional) | Lark Open Platform → Event Subscription |

5. Click **Verify and Connect**
6. System auto-configures Webhook and verifies connectivity

### Step 5: Enable Bot and Add to Groups
1. In Lark Open Platform, go to **Bot** menu, confirm bot functionality is enabled
2. Open Lark/Feishu client
3. Create or enter a group
4. Group Settings → **Bot** → **Add Bot** → Search for your app name
5. Confirm addition
6. @mention your bot in the group and send a message
7. AI employee responds → Deployment complete!

> **Also works in private chat:** Search for your app name in Lark/Feishu and start a direct conversation.
