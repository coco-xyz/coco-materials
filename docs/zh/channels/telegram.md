# Telegram — 使用技巧

Everything you need to get the most out of your COCO AI employee on Telegram.

## Basic Usage

### Direct Messages (DM)
Send any message to your bot and it will respond immediately. No @mention needed in DMs.

```
You: Summarize this article for me: [paste text]
Bot: Here's a summary...
```

### Group Chats
In a group, you must @mention your bot to trigger it:

```
@YourBot help me draft a reply to this email
```

> **Tip:** Add your bot to a team group so the whole team can query the same AI employee.

## Commands

| Command | Description |
|---------|-------------|
| `/start` | Initialize the bot, see welcome message |
| `/help` | List available commands |
| `/reset` | Clear the current conversation context |
| `/lang en` | Switch response language to English |
| `/lang zh` | Switch response language to Chinese |

## Group Chat Best Practices

### Setting Up for a Team
1. Add your bot to the group
2. Grant the bot **admin rights** so it can read all messages
3. Use `/start` in the group to activate
4. Mention the bot whenever you need AI assistance

### Controlling When the Bot Responds
By default, the bot only responds when @mentioned in groups. You can also:
- Set it to respond to all messages (configure in COCO Dashboard → Channel Settings)
- Set specific trigger keywords

### Forwarding Messages
You can forward any message to the bot and ask it to analyze, translate, or summarize it.

## Pro Tips

**Long documents**: Paste large texts directly — the bot handles up to 100,000 characters per message.

**Voice messages**: Send voice messages and the bot will transcribe and respond to them.

**Files & images**: Send PDFs, images, or documents. The bot can read and analyze them.

**Reply-to-quote**: Reply to any specific message in the chat and @mention the bot — it will respond in context of that message.

**Pinned instructions**: Pin a message with your bot's standing instructions (e.g., "Always reply in English, be concise") so team members know the bot's behavior.

## Troubleshooting

**Bot not responding in group?**
- Make sure you @mentioned the bot
- Check that the bot has not been muted or restricted
- Verify the bot is still a member of the group

**Slow responses?**
- Large requests take longer — complex analysis can take 30–60 seconds
- Check your COCO Dashboard for any quota or rate limit warnings

**Context lost?**
- Use `/reset` to start a fresh conversation
- Context is per-session; very long conversations may auto-reset
