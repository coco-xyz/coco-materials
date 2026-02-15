# Important Notes

Key tips and common mechanisms when using your COCO AI employee.

## Initial Setup (Required for First Use)

After adding your AI employee to a group chat, **don't start asking questions right away — complete these setup steps first:**

### Step 1: Enable Group Chat Whitelist

Send the following message in the group by @mentioning your AI employee:

```
@AI-Employee Enable this group's whitelist
```

The AI employee will confirm that the group is activated. After that, all group members can interact normally.

<br>

### Step 2: Grant Private Chat Access for Members (Optional)

If you want a specific member to be able to chat 1-on-1 with the AI employee, send in the group:

```
@AI-Employee Grant @member private chat access
```

> **Note:** @mentioning the AI employee in group chats is not restricted by the whitelist — all group members can use it. The whitelist only controls private chat permissions.

<br>

### Step 3: Choose Group Chat Mode (Optional)

| Mode | Trigger | Best For | How to Enable |
|------|---------|----------|---------------|
| **Standard Mode** (Default) | Must @mention AI employee to get a reply | Large groups, daily discussions | Enabled by default, no action needed |
| **Smart Group Chat Mode** | AI automatically decides whether to respond | Small project groups (<10 people) | @AI-Employee and say "Enable smart group chat mode" |

To enable smart group chat mode:

```
@AI-Employee Enable smart group chat mode
```

To disable:

```
@AI-Employee Disable smart group chat mode
```

> **Note:** In smart group chat mode, the AI reads all messages in the group to determine whether a response is needed. This increases token consumption. We recommend enabling it only in core working groups.

---

## Send Your First Task

After completing the initial setup, @mention your AI employee in a group chat or send a direct message in private chat:

```
@AI-Employee Hello! Please introduce yourself and tell me what you can help me with.
```

The AI employee will respond based on your plan's capabilities. Once you confirm everything works, you're ready for daily use.

---

## Interaction Quick Reference

| Scenario | How to Interact | Notes |
|----------|----------------|-------|
| **Group chat** | @AI-Employee name + message content | In default mode, must @mention to trigger a reply |
| **Private chat** | Send messages directly | Requires private chat whitelist access first |
| **Multi-person group** | @AI-Employee, reply visible to all members | AI's reply is visible to everyone in the group |

> **Tip:** Messages in group chats that don't @mention the AI employee will not be processed or replied to — it won't interfere with normal team communication.

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
