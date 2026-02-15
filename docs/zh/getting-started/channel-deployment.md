# 渠道部署指南

将AI员工连接到Telegram或飞书的详细指南。

## 支持的渠道（Channels）

| 渠道 | 状态 | 适合场景 |
|------|------|---------|
| Telegram | 已支持 | 海外用户首选，个人使用便捷 |
| Lark（飞书） | 已支持 | 国内团队首选，企业协作场景 |
| WhatsApp | 即将支持 | 海外商务用户 |
| Discord | 即将支持 | 开发者/社区场景 |
| Slack | 规划中 | 欧美企业用户 |
| 企业微信 | 规划中 | 国内企业用户 |

> **提示：** 你可以同时连接多个渠道，AI员工会在所有已连接的渠道中响应你的消息。Pro套餐支持 Telegram + Lark 双渠道同时接入。

## 部署前准备

| 项目 | 说明 |
|------|------|
| COCO账号 | 已注册并完成付费/试用 |
| 渠道账号 | 你要连接的平台（Telegram/Lark）账号 |
| 约10分钟 | 完成部署所需时间 |

**你不需要准备的：**
- 不需要服务器或技术环境
- 不需要编写任何代码
- 不需要API密钥或开发者账号
- 不需要懂任何技术

---

## 选项A：Telegram 部署（推荐海外用户）

**预计耗时：5-8分钟**

### 第1步：创建Telegram Bot
1. 打开 Telegram，搜索 **@BotFather**（Telegram官方机器人管理器）
2. 发送 `/newbot` 命令
3. 按提示输入你的Bot名称（显示名），例如：`My COCO AI`
4. 输入Bot用户名（必须以bot结尾），例如：`my_coco_ai_bot`
5. BotFather会返回一个 **Bot Token**（格式类似：`110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`）
6. **复制并保存这个Token**，下一步需要用到

> **重要：** Bot Token是你机器人的唯一凭证，请勿泄露给他人。

### 第2步：配置Bot设置（可选但推荐）
继续在 @BotFather 中操作：
1. 发送 `/setdescription` → 选择你的Bot → 输入描述（用户看到Bot时显示的介绍）
   - 建议：`COCO AI数字员工 - 你的专属AI助手`
2. 发送 `/setuserpic` → 选择你的Bot → 上传头像
   - 建议使用COCO logo或你公司logo

### 第3步：在COCO Dashboard绑定
1. 登录 [COCO Dashboard](https://coco.xyz/dashboard)
2. 进入 **Connect** 或 **Channels** 页面
3. 选择 **Telegram**
4. 粘贴上一步获取的 Bot Token
5. 点击 **验证并连接**
6. 系统会自动验证Token有效性并完成连接

### 第4步：开始使用
1. 在Telegram中搜索你创建的Bot用户名（如 `@my_coco_ai_bot`）
2. 点击 **Start** 或发送 `/start`
3. 发送任意消息，AI员工会立即响应
4. 部署完成！

> **提示：** Telegram部署最简单，无需管理员权限，无需额外配置，推荐首次用户优先选择。

### Telegram常见问题

| 问题 | 解决方案 |
|------|---------|
| Bot不回复 | 检查Token是否正确，在Dashboard查看连接状态 |
| 回复很慢 | 检查网络连接，Telegram需要稳定的网络 |
| 想让多人使用 | 将Bot添加到Telegram群组即可，群内成员都可以与AI对话 |
| 想更换Bot | 在Dashboard断开旧连接，创建新Bot后重新绑定 |

---

## 选项B：Lark / 飞书部署

**预计耗时：8-15分钟**

> **注意：** 在 Lark/飞书中添加自建应用（Bot）需要**企业管理员审批**。如果你暂时不想接入企业的 Bot，可以先开通一个 [飞书个人版](https://www.feishu.cn)（国内）或 [Lark 个人版](https://www.larksuite.com)（海外）账号，在个人工作区中创建和使用 Bot，无需管理员审批。

Lark（海外版）和飞书（国内版）的操作流程略有不同，请根据你的使用场景选择对应的指南：

### 飞书部署（推荐国内团队） {#feishu}

#### 第1步：进入飞书开放平台

1. 访问 [飞书开放平台](https://open.feishu.cn)
2. 使用你的飞书账号登录
3. 点击右上角 **开发者后台** 进入管理页面

![飞书开放平台首页 — 点击右上角「开发者后台」](/feishu-open-platform.png)

#### 第2步：创建企业自建应用

1. 在开发者后台，点击 **创建企业自建应用**

![飞书开发者后台 — 点击「创建企业自建应用」](/feishu-create-app.png)

2. 填写应用名称（如 `COCO AI员工`）和描述，选择应用图标

![填写应用名称和描述](/feishu-create-app-form.png)

3. 点击 **创建** 完成
4. 创建成功后，进入左侧 **凭证与基础信息** 页面，记录以下信息：
   - **App ID**
   - **App Secret**

![凭证与基础信息 — 复制 App ID 和 App Secret](/feishu-credentials.png)

> **提示：** 需要企业管理员权限创建应用。如果你不是管理员，请联系你的IT部门协助。或者先使用飞书个人版账号体验。

#### 第3步：添加机器人能力并配置权限

在应用管理页面，首先添加 **机器人** 能力（点击「+ 添加」），然后进入左侧 **权限管理** 开启以下权限：

![应用管理页面 — 添加机器人能力，然后进入「权限管理」配置权限](/feishu-app-capabilities.png)

**必需权限（最小权限集）：**

| 权限 | 权限ID | 用途 |
|------|--------|------|
| 获取与发送消息 | `im:message` | AI收发消息 |
| 获取群信息 | `im:chat:readonly` | 识别对话群组 |
| 获取用户信息 | `contact:user.base:readonly` | 识别对话用户 |
| 接收消息事件 | `im:message.receive_v1` | 实时接收用户消息 |

**推荐权限（增强体验）：**

| 权限 | 权限ID | 用途 |
|------|--------|------|
| 上传下载文件 | `im:resource` | AI处理文件和图片 |
| 发送富文本 | `im:message.rich_text` | 发送格式化消息 |

开启权限后，点击 **发布版本** 并等待管理员审批。

#### 第4步：配置事件订阅

1. 在应用管理页面，进入 **事件与回调**
2. 配置 **请求地址（Request URL）**：由COCO平台提供，格式如：`https://api.coco.xyz/webhook/lark/{your-instance-id}`
3. 订阅以下事件：
   - `im.message.receive_v1` — 接收消息
   - `im.chat.member.bot.added_v1` — Bot被加入群组（可选）
4. 记录页面上的 **Verification Token** 和 **Encrypt Key**（如有）

#### 第5步：在COCO平台绑定

1. 登录 [COCO Dashboard](https://coco.xyz/dashboard)
2. 进入 **Connect** 或 **Channels** 页面
3. 选择 **飞书**
4. 填入以下信息：

| 字段 | 来源 |
|------|------|
| App ID | 飞书开放平台 → 应用凭证 |
| App Secret | 飞书开放平台 → 应用凭证 |
| Verification Token | 飞书开放平台 → 事件订阅 |
| Encrypt Key（可选） | 飞书开放平台 → 事件订阅 |

5. 点击 **验证并连接**
6. 系统会自动完成Webhook配置并验证连通性

#### 第6步：启用机器人并添加到群组

1. 在飞书开放平台，进入 **机器人** 菜单，确认机器人功能已开启
2. 打开飞书客户端
3. 创建或进入一个群组
4. 群设置 → **机器人** → **添加机器人** → 搜索你的应用名称
5. 确认添加
6. 在群中 @你的机器人 发送消息
7. AI员工响应 → 部署完成！

> **也可以私聊使用：** 在飞书中搜索你的应用名，直接发起私聊对话。

---

### Lark 部署（推荐海外团队） {#lark}

#### 第1步：进入 Lark 开放平台

1. 访问 [Lark Open Platform](https://open.larksuite.com)
2. 使用你的 Lark 账号登录
3. 点击右上角 **Developer Backend** 进入管理页面

> **提示：** Lark 是飞书的海外版本，界面为英文。功能与飞书基本一致，但平台地址和部分操作名称不同。

#### 第2步：创建应用

1. 在 Developer Backend，点击 **Create Custom App**
2. 填写应用名称（如 `COCO AI Employee`）和描述
3. 创建成功后，记录以下信息：
   - **App ID**
   - **App Secret**

> **提示：** 需要 Lark 企业管理员权限。如果你不是管理员，请联系你的 IT 部门协助。或者先使用 Lark 个人版账号体验。

#### 第3步：配置应用权限

在应用管理页面，进入 **Permissions & Scopes**，开启以下权限：

**必需权限（Required Permissions）：**

| 权限 | Permission ID | 用途 |
|------|---------------|------|
| Send & receive messages | `im:message` | AI收发消息 |
| Get group info | `im:chat:readonly` | 识别对话群组 |
| Get user info | `contact:user.base:readonly` | 识别对话用户 |
| Receive message events | `im:message.receive_v1` | 实时接收用户消息 |

**推荐权限（Recommended Permissions）：**

| 权限 | Permission ID | 用途 |
|------|---------------|------|
| Upload/download files | `im:resource` | AI处理文件和图片 |
| Send rich text | `im:message.rich_text` | 发送格式化消息 |

开启权限后，点击 **Create Version** 并等待管理员审批。

#### 第4步：配置事件订阅

1. 在应用管理页面，进入 **Events & Callbacks**
2. 配置 **Request URL**：由COCO平台提供，格式如：`https://api.coco.xyz/webhook/lark/{your-instance-id}`
3. 订阅以下事件：
   - `im.message.receive_v1` — Receive messages
   - `im.chat.member.bot.added_v1` — Bot added to group（可选）
4. 记录页面上的 **Verification Token** 和 **Encrypt Key**（如有）

#### 第5步：在COCO平台绑定

1. 登录 [COCO Dashboard](https://coco.xyz/dashboard)
2. 进入 **Connect** 或 **Channels** 页面
3. 选择 **Lark**
4. 填入以下信息：

| 字段 | 来源 |
|------|------|
| App ID | Lark Open Platform → Credentials |
| App Secret | Lark Open Platform → Credentials |
| Verification Token | Lark Open Platform → Events & Callbacks |
| Encrypt Key（可选） | Lark Open Platform → Events & Callbacks |

5. 点击 **验证并连接**
6. 系统会自动完成Webhook配置并验证连通性

#### 第6步：启用机器人并添加到群组

1. 在 Lark Open Platform，进入 **Bot** 菜单，确认 Bot 功能已开启
2. 打开 Lark 客户端
3. 创建或进入一个群组
4. Group Settings → **Bots** → **Add Bot** → 搜索你的应用名称
5. 确认添加
6. 在群中 @你的 Bot 发送消息
7. AI员工响应 → 部署完成！

> **也可以私聊使用：** 在 Lark 中搜索你的应用名，直接发起私聊对话。
