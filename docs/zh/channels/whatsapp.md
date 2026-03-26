# WhatsApp 接入指南

COCO Dashboard 中的 WhatsApp 渠道采用扫码关联设备方式接入，无需 API 密钥或应用配置。

::: danger 重要提醒
为了让这个 AI 员工像一个独立 Bot 一样被正常使用，请务必给它绑定一个新的、专属的 WhatsApp 号码。

- 不要直接绑定你自己常用的 WhatsApp 账号
- Bot 需要独立身份，其他人才能把它当成单独账号来发消息、拉群、@它
- 请准备并注册一个新的 WhatsApp 号码，专门给这个 Bot 使用
:::

::: info 准备事项
- 需要一部已注册 WhatsApp 账号的手机
- 需要先在 COCO Dashboard 创建 AI 员工实例
- 整个流程约 5 分钟
:::

## 第1步：创建 AI 员工并进入配置页面

登录 COCO Dashboard，创建一个 AI 员工，或选择已有实例。在仪表盘中点击该员工卡片下方的 **配置 →** 进入实例详情页。

<img src="/whatsapp-step1-dashboard.png" alt="仪表盘配置入口" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0.75rem 0;" />

## 第2步：点击 WhatsApp「连接」，等待二维码生成

在实例详情页的渠道列表中找到 **WhatsApp** 卡片，点击 **连接** 按钮。

系统会在后台为你的实例准备 WhatsApp 会话，二维码需要几十秒生成，请耐心等待。生成后二维码会每 15 秒自动刷新。

<img src="/whatsapp-step2-qr-code.png" alt="WhatsApp 二维码" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0.75rem 0;" />

::: warning 注意
等待过程中请勿关闭页面或反复点击，否则可能触发重复请求。
:::

## 第3步：打开手机 WhatsApp，进入「已关联的设备」

在手机上打开 **WhatsApp**，点击右下角 **自己**（个人头像），在设置列表中找到并点击 **已关联的设备**。

<img src="/whatsapp-step3-linked-devices.png" alt="WhatsApp 已关联的设备" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.75rem 0;" />

## 第4步：点击「关联设备」并扫描二维码

在「已关联的设备」页面中，点击底部的 **关联设备** 绿色按钮，手机会打开扫码界面。

将手机摄像头对准第 2 步中 Dashboard 页面上显示的二维码进行扫描。

<img src="/whatsapp-step4-link-device.png" alt="关联设备" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.75rem 0;" />

::: tip 提示
如果二维码已过期，Dashboard 会自动刷新，请扫描最新显示的二维码。
:::

## 第5步：验证连接并管理聊天权限

扫码成功后，Dashboard 会自动检测到连接状态，WhatsApp 卡片会显示为 **已连接**。

### 验证 Bot 是否正常工作

连接成功后，你就是该 Bot 的 Owner（管理员）。在 WhatsApp 中搜索自己的账号，给自己发一条消息，Bot 会自动回复你。

### 让其他人与 Bot 聊天

默认只有 Owner 可以和 Bot 对话。如果需要让其他人也能聊天，有两种方式：

- **Allowlist 模式**：仅指定的人可以和 Bot 聊天
- **Open 模式**：所有人都可以和 Bot 聊天

设置方式很简单，直接用自然语言告诉 Bot 即可。

::: tip Allowlist 示例
给 Bot 发消息：「打开 allowlist 模式，将 +86 188xxxx8888 加入到列表中」

Bot 会自动更新配置，该号码的用户即可开始与 Bot 对话。
:::

::: tip Open 示例
给 Bot 发消息：「打开 open 模式，任何人都可以 DM 你」

Bot 会开放所有人的聊天权限。
:::

::: warning 注意
WhatsApp 关联设备会在手机长时间离线后自动断开。如果断开，回到 Dashboard 重新扫码即可恢复。
:::
