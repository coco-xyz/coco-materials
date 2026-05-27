# Microsoft Teams — Usage Tips

Use your COCO AI employee in Microsoft Teams for enterprise collaboration, team channels, and Microsoft 365 workflows.

## Basic Usage

### Direct Messages
Send any message directly to the bot. No @mention needed in DMs — just open a chat with the bot and start typing.

### Group Chats & Team Channels
@mention the bot in any group conversation or team channel:
```
@COCO AI Employee summarize yesterday's discussion
```

## Best Use Cases

### Enterprise Knowledge Assistant
Deploy in team channels for instant access to company knowledge:
- Answer policy and process questions
- Summarize long threads and meeting notes
- Draft documents and reports on demand

### Cross-Team Collaboration
In group chats and channels:
- @mention to get meeting summaries
- Translate messages for international team members
- Pull data and generate reports without leaving Teams

### Microsoft 365 Integration
Teams is deeply integrated with the Microsoft 365 ecosystem — ideal for:
- Organizations already using Outlook, SharePoint, and OneDrive
- Enterprise environments with Azure AD / Entra ID
- Teams with compliance and governance requirements

## Pro Tips

**Smart mode**: Enable smart mode in group chats and channels — the bot receives all messages and decides when to respond based on context, without needing @mentions every time.

**File sharing**: Share images, PDFs, Word docs, and other files directly in chat. The bot can read, analyze, and respond to file content. Files from OneDrive and SharePoint are automatically downloaded via Graph API.

**Reactions**: The bot uses reactions as processing indicators — you'll see a reaction when your message is being processed, which is removed when the response is ready.

**Voice messages**: Send voice messages in Teams — the bot transcribes and responds to them when voice transcription is available.

**Threading**: The bot supports reply threading, keeping conversations organized in busy channels.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot not responding | Verify the Messaging endpoint is set correctly in Azure Bot Configuration. Check that App ID and App Password match |
| Bot not appearing in Teams | Ensure the Teams App Manifest is installed (sideloaded or admin-deployed). Verify the App ID in manifest.json matches your Azure App Registration |
| Messages not reaching the bot | Confirm the Messaging endpoint URL is HTTPS and publicly reachable. Check the Azure Bot resource is active |
| File downloads failing | Verify `Files.Read.All` permission has admin consent in Azure Portal |
| Smart mode not working | Verify `ChannelMessage.Read.All` has admin consent. Ensure the channel is set to smart mode |
| Credential validation failed | Ensure App Password is the **Value** (not the Secret ID). For single-tenant bots, confirm the Tenant ID is correct |
| Want to disconnect | Click the **Disconnect** button on the Microsoft Teams card in the employee detail page |
