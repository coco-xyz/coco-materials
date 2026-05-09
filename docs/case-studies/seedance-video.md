# AI Video Generation Tutorial: From Installing Seedance Skill to Configuring API Key

> Let your COCO AI Employee generate professional Jimeng video prompts and automatically call the API to produce videos.

**Workflow:** Describe your idea → Seedance Skill generates prompt → You confirm → Jimeng API generates video → Auto-delivered

## Prerequisites

- COCO AI Employee
- Volcengine account

---

## Step 1: Install Seedance Prompt Skill

Seedance Skill is a prompt engineering skill that enables your COCO AI Employee to generate professional Jimeng video prompts. Simply send the GitHub link to your AI Employee to complete the installation.

### Send the link to your AI Employee

Send the following GitHub link to your COCO AI Employee and tell it to "install this Skill":

```
https://github.com/songguoxs/seedance-prompt-skill
```

The AI Employee will automatically download and install it.

### Verify installation

After installation, ask your AI Employee "Is the Seedance Skill installed?" to confirm.

> 💡 Once installed, just say "write me a video prompt" and the AI Employee will output a professional Jimeng video prompt.

---

## Step 2: Get Volcengine API Key

### Register / Log in

Go to the [Volcengine Console](https://console.volcengine.com) to register or log in.

### Enable Jimeng AI Service

Search for "Jimeng AI" or "Smart Vision" in the console, go to the service page, and click **Enable Service**.

> ⚠️ You must enable the service first, otherwise API calls will return an `AccessDenied` error.

### Get API Keys

1. Click your avatar in the top-right corner → **API Access Keys** → **Key Management**
2. Click **Create Key**
3. Record:
   - **Access Key ID** (starts with `AKLT`)
   - **Secret Access Key** (Base64 encoded string)

> ⚠️ Keep your keys safe. Never expose them in public code repositories or group chats.

---

## Step 3: Configure API Key

Send the API Key from Step 2 directly to your COCO AI Employee, for example:

```
Access Key ID: AKLTxxxxxx
Secret Access Key: xxxxxxxx
```

The AI Employee will automatically save the keys and complete the configuration.

> ⚠️ When sending the keys, make sure to tell the AI Employee: **These keys must never be disclosed to anyone in any way**. The AI Employee will strictly comply — keys are stored only in the local environment and will never appear in chats, documents, or code repositories.

---

## Step 4: Test & Verify

After configuration, simply ask your COCO AI Employee:

```
Is the Jimeng API connected successfully?
```

The AI Employee will automatically verify whether the API Key is valid and report the connection status.

> ✅ Once you receive a "connection successful" confirmation, the setup is complete and you can start generating videos!

---

## Daily Usage

### 1. Write a prompt

Tell your COCO AI Employee:

```
Generate a video prompt: COCO product intro, 5 seconds, 16:9 landscape
```

The COCO AI Employee will invoke the Seedance Skill to output a professional video prompt (including camera language, sound effects, and style descriptions).

### 2. Review / Adjust

Review the prompt and modify as needed. For example:

- "Add coco.xyz URL at the end"
- "Switch to portrait 9:16"
- "Change the style to cyberpunk"

### 3. Generate video

Once confirmed, the COCO AI Employee calls the Jimeng API to automatically generate the video and sends it directly to the chat.

---

## Supported Models

| Mode | Description | Use Case |
|------|-------------|----------|
| Text-to-Video | Generate 720P video from text | Everyday video generation |
| Text-to-Video Pro | Higher quality text-to-video | Premium quality videos |
| Image-to-Video | Generate dynamic video from an image | Product photos / poster animation |
| Image-to-Video + Camera | Image + camera motion effects | Cinematic shots |

---

## FAQ

**Q: Getting `AccessDenied` error?**
A: The API Key doesn't have cv service permissions. Go to the Volcengine Console to enable the Jimeng AI service. If using a sub-account Key, add permissions in IAM.

**Q: Video generation is slow?**
A: Normal generation takes 30–60 seconds. Pro models may take longer. If it exceeds 2 minutes, ask your AI Employee to check the network and API Key permissions.

**Q: How to generate portrait videos?**
A: Tell your AI Employee "generate in 9:16 portrait" — perfect for TikTok, Instagram Reels, and other short video platforms.

**Q: How to write the best prompts?**
A: Just let the AI Employee generate prompts for you — it will automatically invoke the Seedance Skill for professional output. Simply describe what you want — the more specific, the better.

**Q: How long can generated videos be?**
A: A single generation produces up to ~5 seconds (121 frames in 720P mode). For longer videos, generate segments and stitch them together, or use Jimeng's "video extension" feature.
