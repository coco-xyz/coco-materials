# Lark / Feishu — Usage Tips

Get the most out of your COCO AI employee on Lark (international) and Feishu (China).

## Basic Usage

### Direct Messages (DM)
Send any message directly to the bot. No @mention needed.

### Group Chats
@mention the bot in any group conversation:
```
@YourBot please summarize the above discussion
```

### Document Integration
Add your AI employee to any Lark document as a **Document App**:

1. Open a Lark document
2. Click **···** (top-right menu)
3. Select **Add Document App** (添加文档应用)
4. Search for your bot name
5. Confirm to add

Once added, @mention the bot inside the document to get AI assistance with the content.

## Group Chat Best Practices

### Smart Mode vs. Mention Mode
- **Mention mode** (recommended for most groups): Bot only responds when @mentioned
- **Smart mode**: Bot monitors all messages and proactively chimes in when relevant

Configure this in COCO Dashboard → Channel Settings → Lark.

### Setting Standing Instructions
You can give your bot persistent instructions that apply to all responses in a group. Example:
> "You are an assistant for our marketing team. Always respond in Chinese. Keep answers under 200 words."

Set this in COCO Dashboard → Bot Settings → System Prompt.

### Thread Replies
The bot responds in threads to keep group chats organized. If you want a direct reply, the bot will still create a thread from your message.

## Document App Features

When added to a Lark document, your AI employee can:

- **Answer questions** about document content: @mention + ask your question
- **Generate content**: @mention + "write a section about X"
- **Summarize**: @mention + "summarize this document"
- **Translate**: @mention + "translate this to English"

> **Tip:** For documents with sensitive content, ensure the bot only has read access. Configure permissions in Lark Admin.

## Feishu (飞书) Notes

Feishu and Lark share the same platform — the same COCO bot configuration works for both. If your organization uses Feishu internally and Lark externally, the bot handles both from a single connection.

## Pro Tips

**@mention in comments**: You can @mention the bot in document comments for inline Q&A.

**Group summary**: At the end of a long group discussion, @mention the bot and say "summarize the discussion above" for a quick recap.

**Multi-language**: The bot auto-detects the language you write in and responds accordingly. Or specify: "reply in English."

**Forward to DM**: For sensitive questions, forward a group message to the bot's DM for a private response.

## Troubleshooting

**Bot not appearing in document app search?**
- The bot must have been granted document app permissions in the Lark admin console
- Contact your Lark admin to enable external app access

**Bot not responding in group?**
- Confirm the bot was added to the group (not just the organization)
- Check that group mention mode is enabled in COCO Dashboard

**Messages showing as "failed to send"?**
- Check if the COCO service is online at [coco.xyz/dashboard](https://coco.xyz/dashboard)
- Verify your subscription is active
