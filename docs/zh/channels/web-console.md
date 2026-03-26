# Web 控制台 — 使用技巧

The Web Console is your browser-based interface for chatting with your COCO AI employee — no app installation required.

## Accessing the Web Console

Your Web Console URL is provided when you set up your AI employee. It typically looks like:
```
https://[your-domain].coco.xyz/console/
```

Access it from any browser on desktop or mobile.

## Basic Usage

### Starting a Conversation
1. Open your Web Console URL
2. Type your message in the input box at the bottom
3. Press **Enter** or click **Send**

### Uploading Files
Click the **paperclip icon** (📎) to attach:
- PDF documents
- Images (PNG, JPG, WEBP)
- Text files

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Send message |
| `Shift + Enter` | New line (multi-line input) |
| `↑` | Recall last message |
| `Esc` | Cancel current input |

## Embedding in Your Website

You can embed the Web Console as a chat widget on your website:

### Option A: iFrame Embed
```html
<iframe
  src="https://[your-domain].coco.xyz/console/"
  width="400"
  height="600"
  frameborder="0"
  style="border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.1);"
></iframe>
```

### Option B: Floating Widget
Add the COCO widget script to your page:
```html
<script>
  window.COCO_CONFIG = {
    botId: 'YOUR_BOT_ID',
    position: 'bottom-right',
    primaryColor: '#FFD646'
  };
</script>
<script src="https://coco.xyz/widget.js" async></script>
```

Configure widget settings in COCO Dashboard → Web Console → Embed Settings.

## Advanced Features

### Custom Welcome Message
Set a greeting that appears when users first open the console:
> Dashboard → Bot Settings → Welcome Message

### Conversation History
- The Web Console saves conversation history in the browser session
- Users can scroll up to review the full conversation
- History clears when the browser tab is closed (by default)

### Authentication Options
- **Open access**: Anyone with the URL can chat (good for public websites)
- **Password protected**: Require a password to access
- **SSO**: Integrate with your existing auth system (enterprise plan)

## Pro Tips

**Copy responses**: Hover over any bot response to see copy and thumbs-up/down buttons.

**Regenerate**: Click "Regenerate" on the last response if you want the bot to try a different answer.

**Share conversation**: Use the share button to generate a link to the current conversation.

**Mobile**: The Web Console is fully responsive — works on phones and tablets without any app install.

**Dark mode**: The console follows your system's dark/light mode preference automatically.

## Troubleshooting

**Console not loading?**
- Check that your subscription is active
- Clear browser cache and cookies
- Try a different browser

**Responses cut off?**
- Very long responses may be truncated — reply "continue" to get the rest

**File upload failing?**
- Maximum file size: 20MB
- Supported formats: PDF, PNG, JPG, WEBP, TXT, MD, CSV
