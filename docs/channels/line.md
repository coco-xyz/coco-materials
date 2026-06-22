# LINE — Usage Tips

Use your COCO AI employee in LINE for personal assistance, customer-facing support, and team chats — especially across Japan, Taiwan, and Thailand where LINE is the primary messaging app.

> New here? See the [LINE Deployment guide](../getting-started/channel-deployment#line) to connect your Official Account first.

## Basic Usage

### Direct Messages
Add your Official Account as a friend and send any message directly — no special command needed. The first person to DM the account becomes the **Owner** with full access.

### Group Chats
Invite the Official Account into a LINE group or multi-person chat. To allow it to join groups, enable **"Allow the Official Account to join group chats"** in the LINE Official Account Manager (Settings → Account settings). Group access is allowlist-controlled by default.

## Best Use Cases

### Customer-Facing Support
LINE is ideal for businesses serving customers in Japan, Taiwan, and Thailand:
- Answer FAQs and product questions instantly, around the clock
- Triage and route incoming requests
- Translate messages for international support

### Personal Assistant
Use it as a always-on personal assistant in your pocket:
- Capture notes, reminders, and to-dos by chat
- Summarize forwarded articles, documents, and voice memos
- Look things up without leaving LINE

### Team & Community
For teams and communities that live in LINE:
- Keep discussions moving in group chats
- Share files and images for quick analysis
- Surface answers and docs on demand

## Pro Tips

**Media in, media out**: Send images, video, voice messages, and files — the AI employee reads them (voice is transcribed automatically) and can send images, video, and audio back.

**Voice messages**: Record a voice message and the AI employee transcribes and acts on it, then replies in text.

**Owner**: The first person to DM the Official Account becomes the Owner, who always has full access regardless of access settings.

**Access control**: By default only the Owner can DM the account, and groups must be explicitly allowed. Adjust DM and group policies to open it up to a team or the public.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot not responding | Confirm **Use webhook** is ON in the LINE Developers Console and that the saved Webhook URL exactly matches the one on the LINE card (including `/line/webhook`) |
| Replies arrive from LINE's auto-responder, not the AI | Turn **Auto-response messages** OFF in the Official Account Manager → Response settings (keep **Webhooks** ON) |
| Connected but no inbound messages | Make sure you've added the Official Account as a friend, and that **Webhooks** is enabled in Response settings |
| Group messages ignored | Enable "Allow the Official Account to join group chats", and ensure the group is allowed in your access settings |
| Want to disconnect | Click the **Disconnect** button on the LINE card in the employee detail page |
