# WhatsApp — Let Others Use Your Bot

## Use Case

Connect your COCO AI Agent to WhatsApp so the Bot can automatically reply to customer messages. Link via QR code on the COCO Dashboard — no extra linked device slot required.

See the [WhatsApp Deployment Guide](/getting-started/channel-deployment#whatsapp) for details.

![WhatsApp Connection Overview](/whatsapp-overview.png)

## Steps

### Step 1: Log in to Dashboard and Connect WhatsApp

1. Log in to [COCO Dashboard](https://icoco.ai/dashboard)
2. Top right **Dashboard** → Left sidebar **Channels** → **WhatsApp** Connect
3. Wait for the QR code to generate

![Dashboard QR Code](/whatsapp-dashboard-qr.png)

### Step 2: Open WhatsApp on Your Phone and Go to "Linked Devices"

1. Open WhatsApp on your phone
2. Tap the profile icon in the bottom right
3. In the settings list, tap **Linked Devices**

<img src="/whatsapp-linked-devices.png" alt="Linked Devices" style="max-width: 300px;" />

### Step 3: Tap "Link a Device" and Scan the QR Code

1. On the Linked Devices page, tap the **Link a Device** button at the bottom
2. Point your phone camera at the QR code displayed on the Dashboard

<img src="/whatsapp-scan-qr.png" alt="Scan QR Code" style="max-width: 300px;" />

### Step 4: Verify the Connection

After scanning, the Dashboard automatically detects the connection and the WhatsApp card will show as **Connected**.

![Connected](/whatsapp-connected.png)

### Step 5: Verify the Bot Is Working

Once connected, you are the Bot's Owner (admin). Search for your own account (phone number) in WhatsApp and send yourself a message — the Bot will automatically reply.

### Step 6: Let Others Chat with the Bot

By default, only the Owner can talk to the Bot. To allow others, choose one of two modes:

- **Allowlist mode**: Only specified numbers can chat
- **Open mode**: Anyone can chat

You can configure this using natural language commands to the Bot:

- Allowlist example: `Turn on allowlist mode and add +1 555-xxx-xxxx to the list`
- Open example: `Turn on open mode, anyone can DM you`

![Chat Permission Management](/whatsapp-chat-mode.png)

## Notes

- WhatsApp linked devices will automatically disconnect if your phone is offline for an extended period. Simply re-scan the QR code on the Dashboard to reconnect.
- All mode switching and allowlist management can be done through natural language commands — no manual configuration needed.

---

Learn more: [icoco.ai](https://icoco.ai) Contact us: support@icoco.ai
