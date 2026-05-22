# Zalo Personal — Usage Tips

Use your COCO AI employee through a personal Zalo account — full support for groups, files, stickers, and reactions.

## Setting Up Zalo Personal

### What You Need

| Item | Description |
|------|-------------|
| COCO Account | Registered and paid/trial active |
| Zalo Account | A phone with Zalo installed and logged in |
| ~5 minutes | Time to complete deployment |

::: warning Use a Dedicated Zalo Account
Please use a **dedicated Zalo account** for the bot — do **not** use your personal Zalo account. The connected account will serve exclusively as the bot. Using Zalo Web in a browser will disconnect the bot session.
:::

**No API keys or developer accounts needed** — just scan a QR code.

### Step 1: Connect in COCO Dashboard

1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Open the **Channels** page and find the **Zalo Personal** card
3. Click **Connect** — the system generates a QR code (may take ~30 seconds)

### Step 2: Scan the QR Code

1. Open **Zalo** on your phone
2. Go to **Settings → QR code scanner** (or tap the QR icon)
3. Scan the QR code displayed on the Dashboard
4. Confirm the login on your phone

### Step 3: Start Using

1. The Dashboard shows the connection as active
2. Send a message to the connected Zalo account from another account
3. AI employee responds — deployment complete!

> **Note:** Zalo allows only one web session at a time. If you open Zalo Web in a browser, the bot session will disconnect. To reconnect, scan the QR code again from the Dashboard.

## Basic Usage

### Direct Messages (DM)

Send any message to the bot's Zalo account. No special commands needed.

```
You: Summarize this document for me
Bot: Here's a summary...
```

### Group Chats

Add the bot's Zalo account to a group. In groups, @mention the bot to trigger a response:

```
@BotName help me draft a reply to this client
```

> **Tip:** Groups support two modes — **mention** (respond only when @mentioned) and **smart** (see all messages, respond when relevant). Ask your AI employee to configure the preferred mode.

## Supported Features

| Feature | Support |
|---------|---------|
| Text messages | Yes |
| Images | Send and receive files |
| Files / PDFs | Yes |
| Stickers | Send and receive |
| Reactions | 11 emoji types |
| Group chats | Full support |
| Typing indicators | Yes |
| @Mentions | Yes |

## Compared to Zalo Bot Platform

| | Zalo Personal | Zalo Bot Platform |
|---|---|---|
| Setup | QR code scan | Bot Token from developer portal |
| Groups | Full support | Allowlist only |
| Files & PDFs | Yes | No |
| Reactions | Yes | No |
| Images | Send/receive files | URL only |
| API type | Unofficial (zca-js) | Official API |
| Risk | Account may be restricted | Stable, officially supported |

Choose **Zalo Personal** for richer features (groups, files, reactions). Choose **Zalo Bot Platform** for stability and official API support.

## Pro Tips

**Access control**: By default, only the owner can message the bot. To allow others, tell your bot: "Enable open mode for DMs" or "Add user 123456 to the allowlist."

**Group modes**: Ask your bot to set a group to "smart mode" — it will see all messages and respond only when relevant, without needing @mention every time.

**Send files**: Share PDFs, documents, and images directly in the chat. The bot processes and responds to file content.

**Reactions**: The bot can react to messages with emoji. Tell it to react to specific messages or set up auto-reactions.

**Multiple channels**: Connect Zalo Personal alongside other channels (Telegram, Lark, WhatsApp, etc.) — the same AI employee responds across all of them.

## Troubleshooting

**Bot went offline?**
- Zalo only allows one web session — if you opened Zalo Web in a browser, the bot disconnected
- Return to the Dashboard and scan the QR code again to reconnect

**Bot not responding in group?**
- Ensure the bot account has been added to the group
- In mention mode, you must @mention the bot
- Ask your AI employee to confirm the group is configured

**QR code not appearing?**
- The first QR code may take 30–60 seconds to generate — do not close the page
- If it still doesn't appear, try refreshing the Dashboard page

**Slow responses?**
- Complex requests take longer (30–60 seconds for detailed analysis)
- Check your COCO subscription is active

**Session expired?**
- Zalo sessions may expire if the phone is offline for too long
- Reconnect by scanning a new QR code from the Dashboard
