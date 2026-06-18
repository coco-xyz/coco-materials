# WhatsApp — 允许他人使用 Bot

## 需求场景

客户希望将 COCO AI Agent 接入 WhatsApp，让 Bot 自动回复客户消息。通过 COCO Dashboard 扫码关联，无需额外占用 WhatsApp 的可关联设备名额。

详情请见 [WhatsApp 部署指南](/zh/getting-started/channel-deployment#whatsapp)。

![WhatsApp 连接概览](/whatsapp-overview.png)

## 操作步骤

### 第一步：登录 Dashboard 连接 WhatsApp

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 右上角【Dashboard】→ 左侧【Channels】→ 【WhatsApp】Connect
3. 等待二维码生成

![Dashboard 生成二维码](/whatsapp-dashboard-qr.png)

### 第二步：打开手机 WhatsApp，进入「已关联的设备」

1. 打开手机上的 WhatsApp
2. 点击右下角的个人头像
3. 在设置列表中，点击 **已关联的设备**

<img src="/whatsapp-linked-devices.png" alt="已关联的设备" style="max-width: 300px;" />

### 第三步：点击「关联设备」并扫描二维码

1. 在「关联设备」页面，点击底部的 **关联设备** 按钮
2. 手机摄像头打开 — 对准 Dashboard 显示的二维码扫描

<img src="/whatsapp-scan-qr.png" alt="扫描二维码" style="max-width: 300px;" />

### 第四步：验证连接

扫码成功后，Dashboard 自动检测到连接，WhatsApp 卡片会显示为 **已连接（Connected）**。

![连接成功](/whatsapp-connected.png)

### 第五步：验证 Bot 是否正常工作

连接成功后，你就是该 Bot 的 Owner（管理员）。在 WhatsApp 中搜索自己的账号（即手机号），给自己发一条消息，Bot 会自动回复你。

### 第六步：让其他人与 Bot 聊天

默认只有 Owner 可以和 Bot 对话。如需允许其他人使用，有两种模式：

- **Allowlist 模式**：仅指定号码可对话
- **Open 模式**：所有人都可对话

可直接通过自然语言对 Bot 下指令：

- Allowlist 示例：`打开 allowlist 模式，将 +86 188xxxx8888 加入到列表中`
- Open 示例：`打开 open 模式，任何人都可以 DM 你`

![聊天权限管理](/whatsapp-chat-mode.png)

## 注意事项

- WhatsApp 关联设备会在手机长时间离线后自动断开，断开后回到 Dashboard 重新扫码即可恢复
- 所有模式切换和白名单管理都可以通过自然语言指令完成，无需手动修改配置

---

了解更多：[icoco.ai](https://icoco.ai) 联系我们：support@icoco.ai
