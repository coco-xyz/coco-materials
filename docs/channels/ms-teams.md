# Microsoft Teams — Deployment & Usage Guide

Connect your COCO AI employee to Microsoft Teams. Supports DMs, group chats, and Teams channels.

## Prerequisites

| Item | Description |
|------|-------------|
| Azure account | Access to [Azure Portal](https://portal.azure.com) (Entra ID / App Registrations) |
| Microsoft 365 tenant | The tenant where the bot will be installed |
| COCO AI Employee | An existing instance in COCO Dashboard |
| ~15 minutes | Time to complete deployment |

**You do NOT need:**
- Azure Bot Service resource (direct webhook validation is used)
- Bot Framework SDK knowledge or Visual Studio
- Microsoft 365 global admin access (for initial setup — admin consent is needed later for optional Graph API features)

---

## Deployment

### Step 1: Create an Azure App Registration

1. Go to [Azure Portal](https://portal.azure.com) → **Microsoft Entra ID** → **App registrations**
2. Click **New registration**
3. Enter a name (e.g., `COCO AI Employee`)
4. Under **Supported account types**, select **Single tenant** (recommended for most organizations)
5. Leave **Redirect URI** blank — not needed for bot-only apps
6. Click **Register**

After registration, note down:
- **Application (client) ID** — your bot's unique identifier
- **Directory (tenant) ID** — your organization's tenant ID

> **Tip:** Single tenant is recommended for enterprise use. Choose Multitenant only if the bot needs to work across multiple organizations.

### Step 2: Create a Client Secret

1. In your App Registration, go to **Certificates & secrets**
2. Click **New client secret**
3. Enter a description (e.g., `coco-bot-secret`) and select an expiry period
4. Click **Add**
5. **Copy the secret value immediately** — it is only shown once

> **Important:** The secret value is displayed only once after creation. If you lose it, you must create a new secret.

### Step 3: Add Graph API Permissions (Optional but Recommended)

These permissions enable file attachments, chat history context, and user resolution. They are not required for basic messaging but unlock the full feature set.

| Permission | Purpose |
|------------|---------|
| `Chat.Read.All` | Read DM and group chat history + attachments |
| `ChannelMessage.Read.All` | Read channel message history + attachments |
| `Files.Read.All` | Download files from OneDrive/SharePoint shared links |
| `User.Read.All` | Resolve user mentions and search users |

**Option A: Bulk import via App Manifest (recommended)**

1. In your App Registration, go to the **Manifest** tab
2. Find the `"requiredResourceAccess"` array and replace it with:

```json
"requiredResourceAccess": [
  {
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
      { "id": "6b7d71aa-70aa-4810-a8d9-5d9fb2830017", "type": "Role" },
      { "id": "7b2449af-571a-4f28-b208-4b8f865d5da6", "type": "Role" },
      { "id": "01d4f6a5-17f3-4c51-b160-bfc8e3fe57ba", "type": "Role" },
      { "id": "df021288-bdef-4463-88db-98f22de89214", "type": "Role" }
    ]
  }
]
```

3. Click **Save** at the top of the Manifest page
4. Go to **API permissions** and click **Grant admin consent for [your tenant]**
5. Verify all four permissions show a green checkmark

> **Permission GUIDs:** `6b7d71aa` = Chat.Read.All, `7b2449af` = ChannelMessage.Read.All, `01d4f6a5` = Files.Read.All, `df021288` = User.Read.All. The `resourceAppId` `00000003-...` is Microsoft Graph.

**Option B: Add permissions one by one**

1. In your App Registration, go to **API permissions**
2. Click **Add a permission** → **Microsoft Graph** → **Application permissions**
3. Search for and add each permission from the table above
4. Click **Grant admin consent for [your tenant]**

> **Note:** Admin consent requires tenant admin privileges. If you are not an admin, ask your IT department to grant consent. Basic messaging works without these permissions.

### Step 4: Connect in COCO Dashboard

1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Go to the channel configuration page, select **Microsoft Teams**
3. Enter the following credentials:

| Field | Source |
|-------|--------|
| App ID | Azure Portal → App Registration → Application (client) ID |
| App Password | Azure Portal → App Registration → Certificates & secrets → Secret value |
| Tenant ID | Azure Portal → App Registration → Directory (tenant) ID |

4. Click **Connect** — the system will configure the bot endpoint

### Step 5: Create a Teams App Manifest

Create a file named `manifest.json` with the following content:

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.17/MicrosoftTeams.schema.json",
  "manifestVersion": "1.17",
  "version": "1.0.0",
  "id": "<your App ID>",
  "developer": {
    "name": "Your Organization",
    "websiteUrl": "https://your-domain.com",
    "privacyUrl": "https://your-domain.com/privacy",
    "termsOfUseUrl": "https://your-domain.com/terms"
  },
  "name": {
    "short": "COCO AI",
    "full": "COCO AI Employee"
  },
  "description": {
    "short": "AI employee for Teams",
    "full": "COCO AI digital employee — your AI assistant on Microsoft Teams."
  },
  "icons": {
    "color": "color.png",
    "outline": "outline.png"
  },
  "bots": [
    {
      "botId": "<your App ID>",
      "scopes": ["personal", "team", "groupChat"],
      "supportsFiles": true,
      "isNotificationOnly": false
    }
  ],
  "permissions": ["messageTeamMembers"],
  "validDomains": []
}
```

Replace `<your App ID>` (in both places) with your Application (client) ID from Step 1.

### Step 6: Prepare the App Package

1. Create two icon files:
   - `color.png` — 192×192 full-color icon
   - `outline.png` — 32×32 transparent outline icon
2. Place `manifest.json`, `color.png`, and `outline.png` in the same folder
3. Select all three files and compress into a `.zip` file

> **Tip:** The icons must be exactly the specified sizes. Use any image editor or online tool to resize. PNG format is required.

### Step 7: Install the App in Teams

**Sideloading (for development and testing):**

1. Open Microsoft Teams
2. Go to **Apps** → **Manage your apps** → **Upload a custom app**
3. Select **Upload a custom app** and choose the `.zip` file from Step 6
4. Click **Add** to install for personal use, or **Add to a team** for channel access

**Admin deployment (for organization-wide rollout):**

1. Go to [Teams Admin Center](https://admin.teams.microsoft.com)
2. Navigate to **Teams apps** → **Manage apps**
3. Click **Upload new app** and select the `.zip` file
4. Configure app policies to make it available to your organization

> **Note:** Sideloading requires the "Upload custom apps" policy to be enabled. If you don't see the upload option, contact your Teams admin.

### Step 8: Start Using

1. In Teams, search for your bot name (e.g., "COCO AI")
2. Click to start a DM conversation
3. Send any message — AI employee responds immediately
4. Deployment complete!

> **First message:** The first user to send a private message to the bot becomes the **Owner**. The owner always has full access regardless of policy settings.

---

## Usage Tips

### Direct Messages (DM)
Send any message directly to the bot. No @mention needed in DMs.

### Group Chats
@mention the bot in any group conversation:
```
@COCO AI help me draft a response to this client
```

### Teams Channels
Add the bot to a team channel for team-wide access. @mention the bot to trigger responses.

### Smart Mode vs. Mention Mode
Groups and channels can operate in two modes:
- **Mention mode** (default): Bot only responds when @mentioned
- **Smart mode**: Bot receives all messages and decides when to respond based on context

### Voice Messages
Send voice messages in Teams — the bot will transcribe and respond to the audio content automatically (when voice transcription is enabled).

### File & Image Attachments
- **Sending files to the bot:** Share files in the chat — the bot can read documents, images, and other attachments
- **Receiving files from the bot:** The bot sends images inline and can share file references

> **Note:** Teams does not support drag-and-drop file upload in bot DMs. Share files via OneDrive links or the attachment button.

## Access Control

### DM Access
By default, only the Owner can DM the bot. Configure access via these modes:

| Mode | Behavior |
|------|----------|
| `owner` | Only the owner can DM (default) |
| `allowlist` | Owner + specific users can DM |
| `open` | Anyone in the tenant can DM |

### Group Access
Group access is controlled separately:

| Mode | Behavior |
|------|----------|
| `disabled` | All group messages are ignored |
| `allowlist` | Only configured groups are active (default) |
| `open` | Bot responds to @mentions in any group |

Per-group options include sender restrictions (`allowFrom`) and mode selection (mention/smart).

## Updating the App

When updating the bot (e.g., new icon, new description):

1. Bump the `version` field in `manifest.json`
2. Re-package the `.zip` file with updated files
3. In Teams: **Apps** → **Manage your apps** → find your app → **Upload new version**
4. **Fully quit and relaunch Teams** to clear cached app metadata

## Features

| Feature | Requires Graph API | Status |
|---------|-------------------|--------|
| DM messaging | No | Available |
| Group chat messaging | No | Available |
| Teams channel messaging | No | Available |
| @mention detection | No | Available |
| Image attachments (inbound) | No* | Available |
| File attachments (inbound) | Yes | Available |
| OneDrive/SharePoint files | Yes | Available |
| Chat history context | Yes | Available |
| Voice transcription | No | Available |
| Proactive messaging | No | Available |
| Image sending (outbound) | No | Available |

\* Image download in DMs uses Bot Framework token. Graph API is needed for channel images and OneDrive files.

## Known Limitations

| Limitation | Details |
|------------|---------|
| No drag-and-drop file upload in bot DMs | Teams does not allow this in bot conversations. Use OneDrive sharing or the attachment button instead. |
| Markdown formatting limits | Teams markdown is more limited than Slack or Discord. Complex tables and deeply nested lists may not render correctly. |
| Teams client caching | After updating the app manifest, you must fully quit and relaunch Teams to see changes. |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot not responding | Verify App ID and App Password are correct. Check that the messaging endpoint is reachable. |
| "App not found" when searching | Ensure the app manifest was correctly packaged and sideloaded. Try quitting and relaunching Teams. |
| 401 errors on file attachments | Ensure Graph API permissions are granted with admin consent (Step 3). |
| Duplicate messages | Normal — Teams may retry webhooks. The bot deduplicates automatically. |
| Bot not visible in group/channel | The bot must be added to the team or group chat first. Use "Add to a team" during installation. |
| Graph features not working | All three credentials (App ID, App Password, Tenant ID) must be configured, and admin consent must be granted for the required Graph API permissions. |
