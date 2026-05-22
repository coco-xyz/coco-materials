# Zalo Personal — Deployment & Usage Guide

Connect your COCO AI employee to Zalo using a personal account. Supports DMs, group chats, images, files, stickers, and reactions — the full Zalo experience.

## Prerequisites

| Item | Description |
|------|-------------|
| Zalo account | A personal Zalo account with the Zalo mobile app installed |
| COCO AI Employee | An existing instance in COCO Dashboard |
| ~5 minutes | Time to complete deployment |

**You do NOT need:**
- Any servers or technical infrastructure
- API keys or developer accounts
- Zalo Official Account (OA) registration
- Any coding skills

::: warning Use a Dedicated Zalo Account
Please use a **dedicated Zalo account** for the bot — do **not** use your primary personal Zalo account. The connected account will serve exclusively as the bot. Using Zalo Web on the same account will disconnect the bot.
:::

---

## Deployment

### Step 1: Connect in COCO Dashboard

1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Go to the channel configuration page, select **Zalo Personal**
3. Click **Connect** — the system will generate a QR code (this takes ~30 seconds, please be patient)

> **Important:** Do not close the page or click repeatedly while waiting — this may trigger duplicate requests.

### Step 2: Scan QR Code with Zalo Mobile App

1. Open the **Zalo** app on your phone
2. Tap the **QR scan** icon (top-right corner of the main screen)
3. Point your phone's camera at the QR code displayed on the Dashboard
4. Confirm the login on your phone
5. Wait a few seconds for the connection to complete

> **Tip:** If the QR code has expired, the Dashboard will automatically refresh it. Scan the latest QR code displayed.

### Step 3: Start Using

1. The Dashboard shows **Connected** once the QR scan succeeds
2. Search for the connected Zalo account from another Zalo account and send a message
3. AI employee responds immediately — deployment complete!

> **First message:** The first user to send a DM to the bot becomes the **Owner**. The owner always has full access regardless of policy settings.

---

## Usage Tips

### Direct Messages (DM)
Send any message directly to the bot account. No @mention needed in DMs.

### Group Chats
@mention the bot in any group conversation:
```
@BotName help me summarize this document
```

The owner can activate the bot in a new group simply by @mentioning it — the group is automatically registered.

### Smart Mode vs. Mention Mode
Groups can operate in two modes:
- **Mention mode** (default): Bot only responds when @mentioned
- **Smart mode**: Bot receives all messages and decides when to respond based on context

### Images & Files
- **Sending to the bot:** Share images (JPG, PNG) and files (PDF, DOCX, etc.) — the bot can read and analyze them
- **Receiving from the bot:** The bot can send images and files back to you
- File size limits: 50 MB inbound, 25 MB outbound

### Stickers & Reactions
- Send and receive stickers in conversations
- The bot can react to messages with emoji reactions (heart, like, haha, wow, cry, angry)

### Voice Messages
Voice message sending is available but requires a publicly hosted audio URL. Voice message receiving is not yet supported.

---

## Access Control

### DM Access
By default, only the Owner can DM the bot. Configure access via these modes:

| Mode | Behavior |
|------|----------|
| `owner` | Only the owner can DM (default) |
| `allowlist` | Owner + specific users can DM |
| `open` | Anyone can DM |

### Group Access
Group access is controlled separately:

| Mode | Behavior |
|------|----------|
| `allowlist` | Only registered groups are active (default) |
| `open` | Bot responds to @mentions in any group |

Per-group options include sender restrictions (`allowFrom`) and mode selection (mention/smart).

---

## Features

| Feature | Status |
|---------|--------|
| DM messaging | Available |
| Group chat messaging | Available |
| @mention detection | Available |
| Image attachments (inbound) | Available |
| Image sending (outbound) | Available |
| File attachments (inbound) | Available |
| File sending (outbound) | Available |
| Stickers (send & receive) | Available |
| Reactions (send & receive) | Available |
| Typing indicator | Available |
| Quote-reply | Available |
| Proactive messaging | Available |
| Smart mode (groups) | Available |
| Voice messages | Partial (send only, requires public URL) |

## Known Limitations

| Limitation | Details |
|------------|---------|
| Single web session | If Zalo Web is open in a browser on the same account, the bot will disconnect. Only one web session is allowed per account. |
| QR re-login required | Session credentials can expire over time. When this happens, return to the Dashboard to scan a new QR code. |
| Typing shows "typing on PC" | This is a Zalo platform limitation — the typing indicator always shows "typing on PC" regardless of the actual source. |
| No markdown formatting | All outbound messages are plain text — rich text formatting is not supported. |
| Phone number not visible | Zalo privacy restrictions prevent the bot from seeing users' phone numbers. |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot not responding | Check the connection status in COCO Dashboard. If disconnected, scan the QR code again. |
| QR code takes a long time to appear | The first generation may take 30–60 seconds — this is normal. Do not close the page. |
| Bot disconnected unexpectedly | Another Zalo Web session may have been opened on the same account. Close other web sessions and reconnect. |
| Cannot send files to bot | Ensure files are under 50 MB. Supported formats: images, PDFs, documents. |
| Bot not responding in group | The bot must be @mentioned in the group. The owner must @mention it first to activate a new group. |
| Want multi-user access | Change the DM access policy to `allowlist` or `open` mode via Dashboard settings. |
