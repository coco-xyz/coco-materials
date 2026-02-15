# Important Notes

Key tips and common mechanisms when using your COCO AI employee.

## Group Chat & Private Chat

### Private Chat (1-on-1)

AI employees support private chat by default. Simply search for your Bot name in Telegram or Lark/Feishu and start a direct conversation — no additional configuration needed.

### Group Chat

When using AI employees in group chats, keep the following in mind:

| Item | Details |
|------|---------|
| Trigger method | Must **@mention your Bot** to trigger a response. Regular messages won't activate it |
| Group permissions | Bot must be added to the group first (see [Channel Deployment Guide](./channel-deployment) Step 7) |
| Feishu/Lark permission | Must enable `im:message.group_at_msg:readonly` permission, otherwise Bot cannot receive @mentions in groups |
| Member access | Once Bot is added to a group, all group members can @mention and chat with it |

> **Tip:** If your Bot doesn't respond in a group, check:
> 1. Is the Bot added to this group?
> 2. Did you use @mention (not a regular message)?
> 3. Is the `im:message.group_at_msg:readonly` permission enabled in the Feishu/Lark app?

### Multi-Group Usage

A single AI employee can be added to multiple groups simultaneously. Each group's conversation context is independent and won't interfere with others.

---

## Long-Term Memory & SOP Storage

AI employees have long-term memory capabilities. They can remember important workflows (SOPs), preference settings, and business rules, and will continue to follow them in future conversations.

### How to Store SOPs

Simply tell your AI employee what you want it to remember during a conversation:

**Examples:**

```
Please remember this workflow:
1. Check inbox for customer inquiries every morning at 9 AM
2. Organize inquiries into standard format: client name, requirements, contact info
3. Categorize by urgency: A/B/C levels
4. Level A: respond same day, B: within 48 hours, C: within one week
```

```
Please remember: Our brand color is #F5C542. All designs must use this color.
```

```
Please remember: When replying to client emails, always use this signature:
Best regards,
[Name]
[Company] | [Title]
```

### Memory Management

| Action | How |
|--------|-----|
| Add memory | Say "Please remember..." or "From now on, always..." |
| View memories | Ask "What rules have I told you?" or "List all my saved SOPs" |
| Modify memory | Say "Change the previous rule about XX to..." |
| Delete memory | Say "Forget the rule about XX" |

> **Tip:** Long-term memories persist within the same AI employee instance, even across new conversations. We recommend storing important business rules, workflows, and formatting requirements in long-term memory.

### What to Store in Long-Term Memory

- **Workflows (SOPs)**: Daily procedures, approval processes, reporting formats
- **Brand guidelines**: Brand colors, fonts, tone of voice, prohibited words
- **Business rules**: Pricing strategies, discount policies, service terms
- **Communication preferences**: Email formats, reply templates, language style
- **Team info**: Organization structure, contacts, role assignments

---

## Other Common Notes

### Message Length Limits

| Channel | Per-Message Limit | Long Message Handling |
|---------|-------------------|----------------------|
| Telegram | 4,096 characters | Automatically split into multiple messages |
| Lark/Feishu | ~30,000 characters | Content auto-truncated if exceeded |

### File Handling

AI employees can process the following file types (requires `im:resource` permission):

- **Documents**: PDF, Word, Excel, PPT
- **Images**: PNG, JPG, GIF
- **Text**: TXT, CSV, JSON, Markdown

> **Note:** File size should not exceed 20MB. Large files may take longer to process.

### Response Times

| Scenario | Expected Response Time |
|----------|----------------------|
| Simple Q&A | 3-10 seconds |
| File processing | 10-30 seconds |
| Complex analysis | 30-60 seconds |
| Long document generation | 1-3 minutes |

> **Tip:** If your AI employee hasn't responded for over 2 minutes, try resending your message.

### Security & Privacy

- Your AI employee will not share your conversation data with other users
- Each AI employee instance's data is isolated
- Avoid sending sensitive passwords or keys in conversations
- Enterprise plans support custom data retention policies
