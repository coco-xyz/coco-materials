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
| Get group info | `im:chat:readonly` | Identify chat groups |
| Get user info | `contact:user.base:readonly` | Identify users |
| Receive message events | `im:message.receive_v1` | Real-time message reception |

**Recommended Permissions (enhanced experience):**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| Upload/download files | `im:resource` | AI handles files and images |
| Send rich text | `im:message.rich_text` | Send formatted messages |

After enabling, click **Create Version** and wait for admin approval.

#### Step 4: Configure Event Subscription

1. In app management, go to **Events & Callbacks**
2. Set **Request URL**: Provided by COCO, format: `https://api.coco.xyz/webhook/lark/{your-instance-id}`
3. Subscribe to events:
   - `im.message.receive_v1` — Receive messages
   - `im.chat.member.bot.added_v1` — Bot added to group (optional)
4. Note the **Verification Token** and **Encrypt Key** (if set)

#### Step 5: Connect in COCO Dashboard

1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Go to **Connect** or **Channels** page
3. Select **Lark**
4. Enter:

| Field | Source |
|-------|--------|
| App ID | Lark Open Platform → Credentials |
| App Secret | Lark Open Platform → Credentials |
| Verification Token | Lark Open Platform → Events & Callbacks |
| Encrypt Key (optional) | Lark Open Platform → Events & Callbacks |

5. Click **Verify and Connect**
6. System auto-configures Webhook and verifies connectivity

#### Step 6: Enable Bot and Add to Groups

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

1. Visit [飞书开放平台](https://open.feishu.cn)
2. Log in with your Feishu account
3. Click **开发者后台** (Developer Backend) in the top-right corner

![Feishu Open Platform — Click "开发者后台" in the top-right corner](/feishu-open-platform.png)

#### Step 2: Create an Enterprise App

1. In the Developer Backend, click **创建企业自建应用** (Create Custom App)

![Feishu Developer Backend — Click "创建企业自建应用"](/feishu-create-app.png)

2. Enter app name (e.g., `COCO AI员工`) and description, select an app icon

![Fill in app name and description](/feishu-create-app-form.png)

3. Click **创建** (Create) to finish
4. After creation, go to **凭证与基础信息** (Credentials & Basic Info) in the left sidebar and note down:
   - **App ID**
   - **App Secret**

![Credentials page — Copy App ID and App Secret](/feishu-credentials.png)

> **Tip:** Enterprise admin permissions are required. If you're not an admin, contact your IT department or use a Feishu personal account first.

#### Step 3: Add Bot Capability and Configure Permissions

In the app management page, first add the **机器人** (Bot) capability by clicking 「+ 添加」, then go to **权限管理** (Permission Management) in the left sidebar:

![App management — Add Bot capability, then go to "权限管理" for permissions](/feishu-app-capabilities.png)

**Required Permissions:**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| 获取与发送消息 | `im:message` | AI sends and receives messages |
| 获取群信息 | `im:chat:readonly` | Identify chat groups |
| 获取用户信息 | `contact:user.base:readonly` | Identify users |
| 接收消息事件 | `im:message.receive_v1` | Real-time message reception |

**Recommended Permissions:**

| Permission | Permission ID | Purpose |
|-----------|---------------|---------|
| 上传下载文件 | `im:resource` | AI handles files and images |
| 发送富文本 | `im:message.rich_text` | Send formatted messages |

After enabling, click **发布版本** (Publish Version) and wait for admin approval.

#### Step 4: Configure Event Subscription

1. In app management, go to **事件与回调** (Events & Callbacks)
2. Set **请求地址 (Request URL)**: Provided by COCO, format: `https://api.coco.xyz/webhook/lark/{your-instance-id}`
3. Subscribe to events:
   - `im.message.receive_v1` — Receive messages
   - `im.chat.member.bot.added_v1` — Bot added to group (optional)
4. Note the **Verification Token** and **Encrypt Key** (if set)

#### Step 5: Connect in COCO Dashboard

1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Go to **Connect** or **Channels** page
3. Select **飞书 (Feishu)**
4. Enter:

| Field | Source |
|-------|--------|
| App ID | 飞书开放平台 → 应用凭证 |
| App Secret | 飞书开放平台 → 应用凭证 |
| Verification Token | 飞书开放平台 → 事件订阅 |
| Encrypt Key (optional) | 飞书开放平台 → 事件订阅 |

5. Click **Verify and Connect**
6. System auto-configures Webhook and verifies connectivity

#### Step 6: Enable Bot and Add to Groups

1. In 飞书开放平台, go to **机器人** (Bot) menu, confirm bot functionality is enabled
2. Open Feishu client
3. Create or enter a group
4. Group Settings → **机器人** → **添加机器人** → Search for your app name
5. Confirm addition
6. @mention your bot in the group and send a message
7. AI employee responds → Deployment complete!

> **Also works in private chat:** Search for your app name in Feishu and start a direct conversation.
