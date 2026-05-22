# Zalo — Deployment & Usage Guide

Connect your COCO AI employee to Zalo using the official Bot Platform API. Supports DMs with text, images, and stickers.

## Prerequisites

| Item | Description |
|------|-------------|
| Zalo account | A personal Zalo account to create a bot |
| COCO AI Employee | An existing instance in COCO Dashboard |
| ~5 minutes | Time to complete deployment |

**You do NOT need:**
- Any servers or technical infrastructure
- A public domain or SSL certificate
- Zalo Official Account (OA) registration
- Any coding skills

---

## Deployment

### Step 1: Create a Bot on the Zalo Bot Platform

1. Visit the [Zalo Bot Platform](https://bot.zaloplatforms.com) and log in with your Zalo account
2. Click **Create Bot**
3. Enter a bot name (e.g., `COCO AI`) and description
4. After creation, you will see your **Bot Token** (format: `numeric_id:secret`)
5. **Copy and save this Token** — you'll need it next

> **Important:** The Bot Token is your bot's unique credential. Do not share it with others.

### Step 2: Connect in COCO Dashboard

1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Go to the channel configuration page, select **Zalo**
3. Paste the **Bot Token** from Step 1
4. Click **Connect** — the system will validate the token and complete the connection

### Step 3: Start Using

1. Open Zalo on your phone or desktop
2. Search for your bot name
3. Send any message — AI employee responds immediately
4. Deployment complete!

> **First message:** The first user to send a DM to the bot becomes the **Owner**. The owner always has full access regardless of policy settings.

---

## Usage Tips

### Direct Messages (DM)
Send any message directly to the bot. No @mention needed in DMs.

### Images
- **Sending images to the bot:** Share images in the chat — the bot can view and analyze them (max 10 MB)
- **Receiving images from the bot:** The bot can send images via public URLs

### Stickers
Send and receive stickers in conversations with the bot.

### Voice Messages
Voice messages are not supported by the Zalo Bot Platform.

---

## Access Control

### DM Access
By default, only the Owner can DM the bot. Configure access via these modes:

| Mode | Behavior |
|------|----------|
| `owner` | Only the owner can DM (default) |
| `allowlist` | Owner + specific users can DM |
| `open` | Anyone can DM |

---

## Features

| Feature | Status |
|---------|--------|
| DM messaging | Available |
| Image attachments (inbound) | Available |
| Image sending (outbound, via URL) | Available |
| Stickers (send & receive) | Available |
| Typing indicator | Available |
| Proactive messaging | Available |
| Group chats | Not available |
| File attachments | Not available |
| Voice messages | Not available |
| Markdown formatting | Not available |

## Known Limitations

| Limitation | Details |
|------------|---------|
| No group chats | The Bot Platform API supports DMs only. Group messaging requires a separate Zalo Official Account (OA). |
| No file attachments | The bot cannot send or receive files (PDFs, documents, etc.). |
| No markdown or rich text | All outbound messages are plain text — formatting is not supported. |
| Images require public URL | The bot can only send images via publicly accessible HTTPS URLs. |
| Quote-reply not rendered | The API accepts reply references but Zalo does not render them visually. |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot not responding | Verify the Bot Token is correct. Check the connection status in COCO Dashboard. |
| Cannot send images to bot | Ensure the image is under 10 MB. Supported formats: JPG, PNG. |
| Bot image not displaying | Outbound images must be hosted on a publicly accessible HTTPS URL. |
| Want multi-user access | Change the DM access policy to `allowlist` or `open` mode via Dashboard settings. |
