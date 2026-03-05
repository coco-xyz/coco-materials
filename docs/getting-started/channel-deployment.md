<script setup>
import { withBase } from 'vitepress'
</script>

# Channel Deployment Guide

Detailed guide for connecting your AI employee to Telegram or Lark.

## Supported Channels

| Channel | Status | Best For |
|---------|--------|----------|
| Telegram | Available | International users, personal use |
| Lark (Feishu) | Available | Domestic teams, enterprise use |
| WeCom (企业微信) | Available | Domestic enterprise users |
| DingTalk (钉钉) | Available | Domestic teams, no public callback needed |
| WhatsApp | Coming Soon | International business users |
| Discord | Coming Soon | Developer/community scenarios |
| [Slack](#slack) | Available | European/US enterprise users |

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

In the app management page, go to **Permissions & Scopes**. Copy the following JSON and import all permissions at once:

```json
{
  "scopes": {
    "tenant": [
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "im:app_feed_card:write",
      "im:chat",
      "im:chat.announcement:read",
      "im:chat.announcement:write_only",
      "im:chat.chat_pins:read",
      "im:chat.chat_pins:write_only",
      "im:chat.collab_plugins:read",
      "im:chat.collab_plugins:write_only",
      "im:chat.labels",
      "im:chat.managers:write_only",
      "im:chat.members:bot_access",
      "im:chat.members:read",
      "im:chat.members:write_only",
      "im:chat.menu_tree:read",
      "im:chat.menu_tree:write_only",
      "im:chat.moderation:read",
      "im:chat.tabs:read",
      "im:chat.tabs:write_only",
      "im:chat.top_notice:write_only",
      "im:chat.widgets:read",
      "im:chat.widgets:write_only",
      "im:chat:create",
      "im:chat:delete",
      "im:chat:moderation:write_only",
      "im:chat:operate_as_owner",
      "im:chat:read",
      "im:chat:readonly",
      "im:chat:update",
      "im:datasync.feed_card.time_sensitive:write",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.group_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:message.urgent",
      "im:message.urgent:phone",
      "im:message.urgent:sms",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_depts",
      "im:message:send_sys_msg",
      "im:message:update",
      "im:resource",
      "im:url_preview.update",
      "im:user_agent:read"
    ],
    "user": []
  }
}
```

> **Scope overview:** The scopes above cover contacts (read), chat management (full), messaging (send/receive/recall/pin/react), group @mention listening, urgent messages, file resources, and feed cards. The `im:message:send_multi_depts` scope replaces the older `im:message:send_multi_users` name used in previous versions of the platform. Lark and Feishu share the same API -- the scope sets are identical.

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

In the Permission Management page, copy the following JSON and import all permissions at once:

```json
{
  "scopes": {
    "tenant": [
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "im:app_feed_card:write",
      "im:chat",
      "im:chat.announcement:read",
      "im:chat.announcement:write_only",
      "im:chat.chat_pins:read",
      "im:chat.chat_pins:write_only",
      "im:chat.collab_plugins:read",
      "im:chat.collab_plugins:write_only",
      "im:chat.labels",
      "im:chat.managers:write_only",
      "im:chat.members:bot_access",
      "im:chat.members:read",
      "im:chat.members:write_only",
      "im:chat.menu_tree:read",
      "im:chat.menu_tree:write_only",
      "im:chat.moderation:read",
      "im:chat.tabs:read",
      "im:chat.tabs:write_only",
      "im:chat.top_notice:write_only",
      "im:chat.widgets:read",
      "im:chat.widgets:write_only",
      "im:chat:create",
      "im:chat:delete",
      "im:chat:moderation:write_only",
      "im:chat:operate_as_owner",
      "im:chat:read",
      "im:chat:readonly",
      "im:chat:update",
      "im:datasync.feed_card.time_sensitive:write",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.group_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:message.urgent",
      "im:message.urgent:phone",
      "im:message.urgent:sms",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_depts",
      "im:message:send_sys_msg",
      "im:message:update",
      "im:resource",
      "im:url_preview.update",
      "im:user_agent:read"
    ],
    "user": []
  }
}
```

> **Lark/Feishu scope parity:** Feishu (domestic) and Lark (international) share the same API, so the scope sets above are identical. The scope `im:message:send_multi_depts` replaces the older `im:message:send_multi_users` name used in previous versions of the platform.

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

---

## Option C: WeCom (企业微信) Deployment

**Estimated time: 10-15 minutes**

> **Note:** WeCom (企业微信) is Tencent's enterprise messaging platform, widely used by Chinese companies. Setting up a self-built application requires **enterprise admin access** to the WeCom Admin Console.

Five credentials are required:

| Credential | Description |
|------------|-------------|
| Corp ID (CorpID) | Enterprise unique identifier |
| App Secret | Application credential key |
| Agent ID (AgentId) | Application identifier |
| Token | Callback verification token |
| EncodingAESKey | Callback message encryption key (43 characters) |

### Step 1: Get Your Corp ID (CorpID)

Visit the WeCom Admin Console [My Enterprise](https://work.weixin.qq.com/wework_admin/frame#/profile) page. Scroll to the bottom to find the **Enterprise ID** (企业ID). Copy and save this value.

<img :src="withBase('/wecom-step1-corp-id.png')" alt="Get Corp ID" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 2: Go to App Management and Create an Application

In the left sidebar, go to **App Management** (应用管理). In the "Self-Built" (自建) section at the bottom, click **Create Application** (创建应用).

<img :src="withBase('/wecom-step2-create-app.png')" alt="Create Application" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 3: Set Application Name and Visible Scope

Give your Bot a memorable name (e.g., `COCO AI Employee`) and set the **Visible Scope** (可见范围) to select which team members can see and use the Bot.

<img :src="withBase('/wecom-step3-app-name.png')" alt="Set App Name and Visible Scope" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 4: Get AgentId and Secret, Set Up API Reception

After the application is created, on the application detail page:

- **AgentId** — displayed directly on the page
- **Secret** — click "View" to obtain

Then in the "Features" section at the bottom, click **Receive Messages → Set Up API** (接收消息 → 设置API接收).

<img :src="withBase('/wecom-step4-agent-secret.png')" alt="Get AgentId and Secret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **Important:** The Secret is only shown once. Save it immediately.

### Step 5: Get Token and EncodingAESKey (Do Not Save Yet)

In the "API Message Reception" configuration page:

- **Token** — click "Randomly Generate" (随机获取)
- **EncodingAESKey** — click "Randomly Generate" (随机获取)

<img :src="withBase('/wecom-step5-token-aeskey-new.png')" alt="Get Token and EncodingAESKey" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **Important:** Do not save yet — the URL field needs to be filled in Step 7. Keep this page open.

### Step 6: Enter Credentials in Dashboard and Connect

In the COCO Dashboard's WeCom channel configuration page, enter all the credentials obtained above. Note the **Webhook URL** and **Server IP** displayed on the page, then click **Connect** and wait for the connection to succeed.

<img :src="withBase('/wecom-step6-dashboard-credentials.png')" alt="Dashboard Credentials" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 7: Enter Webhook URL Back in WeCom

After the connection succeeds, copy the **Webhook URL** from the Dashboard and paste it into the **URL** field on the "API Message Reception" configuration page you kept open in Step 5. Click **Save**.

### Step 8: Configure Trusted IP

Enter the **Server IP** from the Dashboard into WeCom's **Trusted Enterprise IP** (企业可信IP) settings to ensure the server can call WeCom APIs.

<img :src="withBase('/wecom-step8-trusted-ip.png')" alt="Configure Trusted IP" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 9: Start Chatting

Once configuration is complete:
1. Search for the Bot name in WeCom and start a conversation
2. Send any message — your AI employee responds immediately
3. You can also add the application to a WeCom group for team-wide access
4. Deployment complete!

> **Group usage:** In a WeCom group chat, @mention your application to interact with the AI employee. All group members within the Visible Scope can use it.

### WeCom FAQ

| Issue | Solution |
|-------|----------|
| Cannot save API configuration | Ensure you complete the Dashboard connection (Step 6) first — WeCom validates the URL on save |
| Application not visible to team members | Check the Visible Scope setting in App Management — make sure all intended users are included |
| Bot not responding in group | Confirm the application has been added to the group and members are within the Visible Scope |
| Secret lost or forgotten | In App Management, click Get Secret again — the old Secret is invalidated; reconfigure as needed |

---

## Option D: DingTalk (钉钉) Deployment

**Estimated time: 8-12 minutes**

> **Note:** DingTalk (钉钉) is Alibaba's enterprise collaboration platform, widely used by Chinese companies. DingTalk uses **Stream mode** (WebSocket long connection), so no public callback URL is needed — deployment is simpler.

Three credentials are required:

| Credential | Description |
|------------|-------------|
| AppKey | Application unique identifier |
| AppSecret | Application credential key |
| RobotCode | Robot identifier (usually same as AppKey) |

### Step 1: Access DingTalk Open Platform and Create an Application

Visit the DingTalk Open Platform [App Management](https://open-dev.dingtalk.com/fe/app) page and click **Create Application**.

<img :src="withBase('/dingtalk-step1-create-app.png')" alt="Create Application" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 2: Enter Application Name and Description

Enter the **Application Name** (e.g., `COCO AI Employee`) and **Description**, then click **Save**.

<img :src="withBase('/dingtalk-step2-app-name.png')" alt="Set App Name" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 3: Add Robot Capability

After saving, you'll be redirected to the "Add Capabilities" page. Click **Add Robot** capability.

<img :src="withBase('/dingtalk-step3-add-robot.png')" alt="Add Robot Capability" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 4: Configure Robot and Select Stream Mode

Open the robot configuration page, fill in the required information, select **Stream Mode** for message reception, then publish.

<img :src="withBase('/dingtalk-step4a-robot-config.png')" alt="Robot Configuration" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<img :src="withBase('/dingtalk-step4b-stream-mode.png')" alt="Select Stream Mode" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **Note:** Stream mode uses WebSocket long connections to receive messages — no public callback URL configuration needed, making deployment simpler.

### Step 5: Version Management and Publishing

In the left sidebar, select **Version Management & Publishing** and click **Create New Version**.

<img :src="withBase('/dingtalk-step5-version-publish.png')" alt="Create New Version" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 6: Set Application Visible Scope

Enter the version information, select the appropriate **Visible Scope** (which team members can see and use the Bot), then save and publish.

<img :src="withBase('/dingtalk-step6-visible-range.png')" alt="Set Visible Scope" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 7: Get AppKey, AppSecret, and RobotCode

In the application detail page under "Credentials & Basic Info":

- **AppKey** — application unique identifier
- **AppSecret** — click "Show" to view

<img :src="withBase('/dingtalk-step7a-credentials.png')" alt="Get AppKey and AppSecret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

On the robot configuration page, find the **RobotCode** (usually the same as AppKey).

<img :src="withBase('/dingtalk-step7b-robot-code.png')" alt="Get RobotCode" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 8: Enter Credentials in Dashboard

Enter the **AppKey**, **AppSecret**, and **RobotCode** into the COCO Dashboard's DingTalk channel configuration page and click Connect.

### Step 9: Start Chatting

Search for the Bot name in DingTalk and start chatting with your AI employee.

<img :src="withBase('/dingtalk-step9-search-bot.png')" alt="Search Bot and Start Chatting" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **Group usage:** In a DingTalk group chat, @mention your Bot to interact with the AI employee.

### DingTalk FAQ

| Issue | Solution |
|-------|----------|
| Application not visible to team members | Check the Visible Scope in version publishing — ensure all intended users are included |
| Bot not responding in group | Confirm the robot has been added to the group and use @mention to trigger |
| AppSecret forgotten | View or reset in the application credentials page |

---

## Option E: Slack Deployment {#slack}

**Estimated time: 8-12 minutes**

> **Note:** Slack is widely used by European and US enterprises for team collaboration. Slack uses **Socket Mode** (WebSocket connection), so no public callback URL is needed — deployment is straightforward.

Two credentials are required:

| Credential | Format | Description |
|------------|--------|-------------|
| Bot Token | `xoxb-...` | Bot User OAuth Token, used to call the Slack API |
| App Token | `xapp-...` | App-Level Token, used for Socket Mode connection |

### Step 1: Create a Slack App

1. Visit [Slack App Management](https://api.slack.com/apps) and log in
2. Click **Create New App** in the top-right corner
3. Select **From scratch** in the popup
4. Enter your App name (e.g., `COCO AI Employee`) and select the Workspace to install to
5. Click **Create App** to finish

<img :src="withBase('/slack-step1-create-app.png')" alt="Create Slack App" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 2: Enable Socket Mode and Generate App Token

1. In the App settings left sidebar, find **Socket Mode**
2. Toggle **Enable Socket Mode** on
3. When prompted to generate an App-Level Token:
   - Name the Token (e.g., `zylos-socket`)
   - Add Scope: search and select **`connections:write`**
   - Click **Generate**
4. Copy and save the generated Token (format: `xapp-...`)

<img :src="withBase('/slack-step2-socket-mode-new.png')" alt="Enable Socket Mode" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<img :src="withBase('/slack-step2-generate-token.png')" alt="Generate App-Level Token" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **Important:** The App Token is displayed only once after generation. Save it immediately. If lost, you'll need to regenerate it.

### Step 3: Configure Bot Token Scopes

1. In the left sidebar, go to **OAuth & Permissions**
2. Scroll down to the **Scopes** section
3. Under **Bot Token Scopes**, click **Add an OAuth Scope** and add the following permissions:

| Scope | Purpose |
|-------|---------|
| `app_mentions:read` | Read @mentions of the bot |
| `channels:history` | Read messages in public channels |
| `channels:read` | View basic channel info |
| `chat:write` | Send messages as the bot |
| `files:read` | Read files shared with the bot |
| `files:write` | Upload files |
| `groups:history` | Read messages in private channels |
| `groups:read` | View basic private channel info |
| `im:history` | Read direct message history |
| `im:read` | View basic DM info |
| `im:write` | Start direct messages |
| `reactions:read` | Read emoji reactions |
| `reactions:write` | Add emoji reactions |
| `users:read` | View user info |

<img :src="withBase('/slack-step3-scopes-new.png')" alt="Configure Bot Token Scopes" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 4: Install App to Workspace

1. Go back to the top of the **OAuth & Permissions** page
2. Click **Install to Workspace** (or **Reinstall to Workspace**)
3. Confirm the permissions in the authorization popup, click **Allow**
4. After installation, copy and save the **Bot User OAuth Token** (format: `xoxb-...`)

<img :src="withBase('/slack-step4-install.png')" alt="Install App to Workspace" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **Important:** Each time you modify Scopes, you must reinstall the App to Workspace. The Token will be regenerated — update your configuration accordingly.

### Step 5: Enable Event Subscriptions

1. In the left sidebar, go to **Event Subscriptions**
2. Toggle **Enable Events** on
3. Expand **Subscribe to bot events**, click **Add Bot User Event**, and add:

| Event | Purpose |
|-------|---------|
| `message.im` | Receive direct messages |
| `message.channels` | Receive messages in public channels |
| `message.groups` | Receive messages in private channels |
| `app_mention` | Receive @mentions |

4. Click **Save Changes** at the bottom

<img :src="withBase('/slack-step5-events.png')" alt="Enable Event Subscriptions" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 6: Configure App Home

1. In the left sidebar, go to **App Home**
2. Under **Show Tabs**:
   - Check **Messages Tab**
   - Check **Allow users to send Slash commands and messages from the messages tab**

This enables users to send direct messages to your bot in Slack.

<img :src="withBase('/slack-step6-app-home.png')" alt="Configure App Home" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### Step 7: Configure Tokens in COCO Channel

1. Return to the [COCO Dashboard](https://coco.site/dashboard) and enter the configuration page for the corresponding Channel
2. Fill in the following two Tokens:
   - **Bot Token** (`xoxb-...`): from Slack App's [OAuth & Permissions](https://api.slack.com/apps) page
   - **App Token** (`xapp-...`): the token generated in Step 2 above
3. Save the configuration

### Step 8: Start Chatting

1. In Slack, search for your Bot name or find it in the **Apps** list
2. Click to start a DM conversation — AI employee responds immediately
3. To use in a channel, invite the Bot by typing `/invite @BotName` in the channel
4. @mention your Bot to trigger responses in the channel
5. Deployment complete!

> **Tip:** Slack Bot supports both DMs and channel @mentions. You can use it across multiple channels simultaneously.

### Slack FAQ

| Issue | Solution |
|-------|----------|
| Bot not responding | Verify both Bot Token and App Token are correct in the Dashboard |
| Bot not visible in Slack | Ensure the App is installed to Workspace (Step 4) and App Home is configured (Step 6) |
| Bot not responding in channels | The Bot must be invited to the channel first using `/invite @BotName` |
| Token regenerated after scope change | Reinstall the App to Workspace after any scope modification, then update tokens in Dashboard |
| Cannot send DMs to Bot | Confirm Messages Tab is enabled in App Home settings |
