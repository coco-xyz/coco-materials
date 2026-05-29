# Zalo — Usage Tips

Use your COCO AI employee on Zalo, Vietnam's most popular messaging platform with over 75 million users.

## Zalo (Official) vs Zalo Personal (Unofficial)

COCO supports two ways to connect to Zalo. Choose the one that fits your needs:

| | Zalo (Official) | Zalo Personal (Unofficial) |
|---|---|---|
| **What it is** | Uses the official [Zalo Bot Platform](https://bot.zaloplatforms.com) API to create a bot that users can message | Uses a real Zalo account via QR code login (similar to WhatsApp Web) |
| **Protocol** | Official API — endorsed by Zalo/VNG | Reverse-engineered protocol ([zca-js](https://github.com/nicenathapong/zca-js)) — **not endorsed by Zalo/VNG** |
| **Account needed** | A Zalo account to register a bot on the Bot Platform | A dedicated Zalo account (separate from users who will chat with it) |
| **Setup** | Create bot → paste Bot Token in Dashboard | Scan a QR code — no tokens or developer setup |
| **Account risk** | None — official API | Possible account restriction or ban — use at your own risk |
| **Best for** | Production use, customer-facing bots, long-term stability | Quick personal use, testing, or when you don't want to register a bot |
| **Deployment time** | ~5 minutes | ~2 minutes |
| **Deployment guide** | [Zalo (Official) deployment →](../getting-started/channel-deployment#zalo) | [Zalo Personal (Unofficial) deployment →](../getting-started/channel-deployment#zalo-personal) |

::: tip Which one should I choose?
**Use Zalo (Official)** if you want a stable, long-term connection with no risk of account issues. This is the recommended option for most users.

**Use Zalo Personal (Unofficial)** if you want the fastest possible setup (just scan a QR code) and are comfortable with the risk of using an unofficial protocol. Good for testing or personal use.
:::

## Zalo (Official) — Usage

### Direct Messages
Send any message to your bot on Zalo. No special commands needed — the bot responds immediately.

### Getting Started
1. Search for your bot name in Zalo
2. Start a conversation — the bot responds automatically
3. The first user to send a DM becomes the **Owner** (administrator)

### Managing Access
By default, only the Owner can chat with the bot. To allow others:

**Allowlist mode** — only specified users can chat:
> Send to bot: `Enable allowlist mode, add phone number +84 xxx to the list`

**Open mode** — anyone can chat:
> Send to bot: `Enable open mode, anyone can DM you`

## Zalo Personal (Unofficial) — Usage

### Direct Messages
Anyone who messages your dedicated bot Zalo account will receive AI-powered responses.

### Getting Started
1. Your AI employee sends you a QR code during setup
2. Scan with the dedicated bot Zalo account
3. Connection is established — start chatting

### Managing Access
Same as Zalo (Official): Owner-only by default, with Allowlist and Open modes available.

### Connection Stability
Zalo Personal uses an unofficial protocol, so connections may occasionally drop. If this happens, ask your AI employee to reconnect:
> "Reconnect Zalo Personal"

## Pro Tips

**Voice messages**: Send voice messages — the bot transcribes and responds to them.

**Images & files**: Send photos or documents for the bot to analyze.

**Multilingual**: The bot responds in whatever language you write in — Vietnamese, English, Chinese, or others.

**Multiple channels**: You can connect both Zalo (Official) and Zalo Personal (Unofficial) simultaneously on the same AI employee, alongside other channels like Telegram or WhatsApp.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot not responding (Official) | Verify the Bot Token is correct. Check the connection status in COCO Dashboard |
| Bot not responding (Personal) | Ask your AI employee to reconnect — the session may have expired |
| Others can't message the bot | By default only the Owner can chat. Enable Allowlist or Open mode |
| Account warning (Personal only) | Stop using the unofficial integration and switch to [Zalo (Official)](#zalo-official-usage) |
| Want to disconnect | Click **Disconnect** on the respective Zalo card in the employee detail page, or ask your AI employee |
