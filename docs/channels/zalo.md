# Zalo — Usage Tips

Use your COCO AI employee on Zalo, Vietnam's most popular messaging platform.

## Setting Up Zalo

### What You Need

| Item | Description |
|------|-------------|
| COCO Account | Registered and paid/trial active |
| Zalo Bot Token | From the Zalo Bot Platform (see below) |
| ~5 minutes | Time to complete deployment |

### Step 1: Create a Zalo Bot

1. Visit [Zalo Bot Platform](https://bot.zaloplatforms.com) and log in
2. Click **Create Bot**
3. Enter a bot name and description
4. After creation, find the **Bot Token** on the bot's settings page
5. Copy and save the Token — you'll need it next

> **Note:** The Zalo Bot Token uses a `numeric_id:secret` format. Keep it confidential.

### Step 2: Connect in COCO Dashboard

1. Log into [COCO Dashboard](https://coco.xyz/dashboard)
2. Open the **Channels** page and find the **Zalo** card
3. Paste the **Bot Token** from Step 1
4. Click **Connect**
5. The system validates the token and completes the connection

### Step 3: Start Using

1. Open Zalo and search for your bot's name
2. Send any message — the AI employee responds immediately
3. Deployment complete!

> **Tip:** Zalo Bot uses polling mode by default — no public URL or server is needed. This is the simplest deployment method.

## Basic Usage

### Direct Messages (DM)

Send any message to your bot and it will respond immediately. No @mention needed in DMs.

```
You: Help me translate this to Vietnamese
Bot: Here's the translation...
```

### Group Chats

Add the bot to a Zalo group. In groups, @mention the bot to trigger a response:

```
@YourBot summarize today's discussion
```

> **Note:** Group access requires configuration. By default, only the bot owner can interact. Ask your AI employee to enable group access for specific groups.

## Supported Features

| Feature | Support |
|---------|---------|
| Text messages | Yes |
| Images | Send via URL |
| Stickers | Send and receive |
| Files / PDFs | Not supported |
| Group chats | Yes (with allowlist) |
| Typing indicators | Basic |

## Delivery Modes

**Polling (default):** No setup required. The bot checks for new messages automatically. Best for most users.

**Webhook:** For advanced users who want real-time message delivery. Requires a public HTTPS URL. Configure in your COCO Dashboard under Zalo channel settings.

## Pro Tips

**Access control**: By default, only the owner can message the bot. To allow others, tell your bot: "Enable open mode for DMs" or "Add user 123456 to the allowlist."

**Group setup**: Tell your bot to add a group by providing the group ID and desired mode (mention or open).

**Multiple channels**: You can connect Zalo alongside other channels (Telegram, Lark, etc.) — the same AI employee responds across all of them.

## Troubleshooting

**Bot not responding?**
- Verify the Bot Token is correct in your COCO Dashboard
- Check that your COCO subscription is active
- Try disconnecting and reconnecting the channel

**Slow responses?**
- Polling mode checks for messages periodically — there may be a slight delay compared to webhook mode
- Complex requests take longer (30–60 seconds for detailed analysis)

**Can't add bot to groups?**
- Group access must be explicitly enabled — ask your AI employee to configure group permissions
- Ensure the bot has been added to the group on the Zalo platform

**Image issues?**
- Outbound images require a public URL — local file paths are not supported
- Inbound images are automatically downloaded and processed
