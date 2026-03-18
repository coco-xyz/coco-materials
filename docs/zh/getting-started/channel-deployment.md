<script setup>
import { withBase } from 'vitepress'
</script>

# 渠道部署指南

将AI员工连接到Telegram或飞书的详细指南。

## 支持的渠道（Channels）

| 渠道 | 状态 | 适合场景 |
|------|------|---------|
| [Telegram](#telegram) | 已支持 | 海外用户首选，个人使用便捷 |
| [飞书](#feishu) | 已支持 | 国内团队首选，企业协作场景 |
| [Lark](#lark) | 已支持 | 海外团队首选，企业协作场景 |
| [企业微信](#wecom) | 已支持 | 国内企业用户首选 |
| [钉钉](#dingtalk) | 已支持 | 国内团队协作，无需公网回调 |
| [WhatsApp](#whatsapp) | 已支持 | 海外商务用户 |
| Discord | 即将支持 | 开发者/社区场景 |
| [Slack](#slack) | 已支持 | 欧美企业用户 |

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

## 选项A：Telegram 部署（推荐海外用户） {#telegram}

**预计耗时：5-8分钟**

<video controls style="max-width: 720px; width: 100%; border-radius: 8px; margin: 1rem 0;">
  <source src="https://github.com/coco-xyz/coco-materials/releases/download/assets-v1/tg-deploy-guide-v1.7.mp4" type="video/mp4">
</video>

#### 第1步：创建Telegram Bot

<img :src="withBase('/tg-botfather-create.png')" alt="创建 Telegram 机器人 — 通过 BotFather 完成4步操作" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

1. 打开 Telegram，搜索 **@BotFather**（Telegram官方机器人管理器）
2. 发送 `/newbot` 命令
3. 按提示输入你的Bot名称（显示名），例如：`My COCO AI`
4. 输入Bot用户名（必须以bot结尾），例如：`my_coco_ai_bot`
5. BotFather会返回一个 **Bot Token**（格式类似：`110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`）
6. **复制并保存这个Token**，下一步需要用到

> **重要：** Bot Token是你机器人的唯一凭证，请勿泄露给他人。

#### 第2步：配置Bot设置（可选但推荐）
继续在 @BotFather 中操作：
1. 发送 `/setdescription` → 选择你的Bot → 输入描述（用户看到Bot时显示的介绍）
   - 建议：`COCO AI数字员工 - 你的专属AI助手`
2. 发送 `/setuserpic` → 选择你的Bot → 上传头像
   - 建议使用COCO logo或你公司logo

#### 第3步：在COCO Dashboard绑定

1. 登录 [COCO Dashboard](https://coco.xyz/dashboard)
2. 进入渠道配置页面，选择 **Telegram**
3. 粘贴上一步获取的 **Bot Token**
4. 点击 **验证并连接**
5. 系统会自动验证Token有效性并完成连接

<img :src="withBase('/tg-dashboard-token.png')" alt="在 COCO Dashboard 中输入 Bot Token 并验证连接" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

#### 第4步：开始使用
1. 在Telegram中搜索你创建的Bot用户名（如 `@my_coco_ai_bot`）
2. 点击 **Start** 或发送 `/start`
3. 发送任意消息，AI员工会立即响应
4. 部署完成！

> **提示：** Telegram部署最简单，无需管理员权限，无需额外配置，推荐首次用户优先选择。

#### Telegram常见问题

| 问题 | 解决方案 |
|------|---------|
| Bot不回复 | 检查Token是否正确，在Dashboard查看连接状态 |
| 回复很慢 | 检查网络连接，Telegram需要稳定的网络 |
| 想让多人使用 | 将Bot添加到Telegram群组即可，群内成员都可以与AI对话 |
| 想更换Bot | 在Dashboard断开旧连接，创建新Bot后重新绑定 |

---

## 选项B：Lark / 飞书部署 {#lark-feishu}

**预计耗时：8-15分钟**

> **注意：** 在 Lark/飞书中添加自建应用（Bot）需要**企业管理员审批**。如果你暂时不想接入企业的 Bot，可以先开通一个 [飞书个人版](https://www.feishu.cn)（国内）或 [Lark 个人版](https://www.larksuite.com)（海外）账号，在个人工作区中创建和使用 Bot，无需管理员审批。

Lark（海外版）和飞书（国内版）的操作流程略有不同，请根据你的使用场景选择对应的指南：

### 飞书部署（推荐国内团队） {#feishu}

**WebSocket 长连接（推荐）：** 最简配置，只需 App ID 和 App Secret，无需配置 Webhook URL 和校验。

<video controls style="max-width: 720px; width: 100%; border-radius: 8px; margin: 1rem 0;">
  <source src="https://github.com/coco-xyz/coco-materials/releases/download/assets-v1/feishu_ws_v17.mp4" type="video/mp4">
</video>

**Webhook 传统方式：** 飞书将事件推送到 Webhook URL，需要填写 Verification Token。

<video controls style="max-width: 720px; width: 100%; border-radius: 8px; margin: 1rem 0;">
  <source src="https://github.com/coco-xyz/coco-materials/releases/download/assets-v1/feishu_wh_v17.mp4" type="video/mp4">
</video>

#### 第1步：进入飞书开放平台

1. 访问 [飞书开放平台](https://open.feishu.cn)
2. 使用你的飞书账号登录
3. 点击右上角 **开发者后台** 进入管理页面

<img :src="withBase('/feishu-open-platform.png')" alt="飞书开放平台首页 — 点击右上角「开发者后台」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

#### 第2步：创建企业自建应用

1. 在开发者后台，点击 **创建企业自建应用**

<img :src="withBase('/feishu-create-app.png')" alt="飞书开发者后台 — 点击「创建企业自建应用」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

2. 填写应用名称（如 `COCO AI员工`）和描述，选择应用图标

<img :src="withBase('/feishu-create-app-form.png')" alt="填写应用名称和描述" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 点击 **创建** 完成

> **提示：** 需要企业管理员权限创建应用。如果你不是管理员，请联系你的IT部门协助。或者先使用飞书个人版账号体验。

<br>

#### 第3步：添加机器人能力

在应用管理页面，进入左侧 **添加应用能力**，找到 **机器人** 卡片，点击「配置」或「+ 添加」。添加完成后，左侧会出现 **机器人** 菜单项，同时可以在 **权限管理** 中配置相关权限：

<img :src="withBase('/feishu-add-bot-capability.png')" alt="点击添加机器人卡片，再进行权限配置" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **重要：** 必须先添加机器人能力，然后才能配置消息相关的权限（如 `im:message.group_at_msg:readonly`）。否则权限页面会提示「请在开启 bot 能力后，再申请开通此权限」，该权限的勾选框将无法选中：

<img :src="withBase('/feishu-permission-bot-required.png')" alt="未添加机器人能力时，im:message.group_at_msg:readonly 权限无法勾选" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

添加完成后，进入左侧 **凭证与基础信息** 页面，记录以下信息：
   - **App ID**
   - **App Secret**

<img :src="withBase('/feishu-credentials.png')" alt="凭证与基础信息 — 复制 App ID 和 App Secret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

#### 第4步：配置应用权限

添加机器人能力后，进入左侧 **权限管理**。你可以点击 **开通权限** 逐个选择需要的权限，也可以点击 **批量导入/导出权限** 粘贴我们准备好的 JSON 一键导入：

<img :src="withBase('/feishu-batch-import-permissions.png')" alt="权限管理页面 — 点击「批量导入/导出权限」一键导入所有权限" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

复制以下 JSON，批量导入所有权限：

```json
{
  "scopes": {
    "tenant": [
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "im:app_feed_card:write",
      "im:chat",
      "im:chat.announcement:read",
      "im:chat.announcement:write_only",
      "im:chat.chat_pins:read",
      "im:chat.chat_pins:write_only",
      "im:chat.collab_plugins:read",
      "im:chat.collab_plugins:write_only",
      "im:chat.managers:write_only",
      "im:chat.members:bot_access",
      "im:chat.members:read",
      "im:chat.members:write_only",
      "im:chat.menu_tree:read",
      "im:chat.menu_tree:write_only",
      "im:chat.moderation:read",
      "im:chat.tabs:read",
      "im:chat.tabs:write_only",
      "im:chat.top_notice:write_only",
      "im:chat.widgets:read",
      "im:chat.widgets:write_only",
      "im:chat:create",
      "im:chat:delete",
      "im:chat:moderation:write_only",
      "im:chat:operate_as_owner",
      "im:chat:read",
      "im:chat:readonly",
      "im:chat:update",
      "im:datasync.feed_card.time_sensitive:write",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.p2p_msg:readonly",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:message.urgent",
      "im:message.urgent:phone",
      "im:message.urgent:sms",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_depts",
      "im:message:send_sys_msg",
      "im:message:update",
      "im:resource",
      "im:url_preview.update",
      "im:user_agent:read"
    ],
    "user": []
  }
}
```

> **飞书 vs Lark 权限差异：** 飞书（国内版）的权限集与 Lark（海外版）略有不同。两个权限 — `im:chat.labels` 和 `im:message.group_msg:readonly` — 在飞书国内版平台不受支持，已从上方 JSON 中移除。其余权限完全相同。关键权限 `im:message.group_at_msg:readonly` 用于接收群组 @消息，缺少此权限会导致机器人在群聊中无法响应。

部分权限开通后会弹出「可访问的数据范围」配置窗口，选择默认配置并点击 **确认** 即可：

<img :src="withBase('/feishu-permission-scope.png')" alt="权限数据范围配置 — 保持默认配置，点击确认" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

#### 第5步：获取 Verification Token（仅 Webhook 模式需要）

> **WebSocket 用户可跳过此步。** 如果你在 COCO Dashboard 选择 WebSocket 长连接模式，只需填写 App ID 和 App Secret，无需 Verification Token 和 Encrypt Key。

1. 在应用管理页面，进入左侧 **事件与回调**
2. 点击 **加密策略** 标签
3. 在页面底部找到 **Verification Token**，点击眼睛图标查看并复制

<img :src="withBase('/feishu-verification-token.png')" alt="事件与回调 → 加密策略 — 在页面底部找到 Verification Token" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **提示：** 同一页面还有 **Encrypt Key**（可选），如果你需要加密通信，也请一并记录。

<br>

#### 第6步：在 COCO Dashboard 填写凭证并部署

1. 登录 [COCO Dashboard](https://coco.xyz/dashboard)
2. 进入渠道配置页面，选择 **飞书**
3. 选择连接方式：**WebSocket 长连接**（推荐）或 **Webhook**
4. 在「应用凭证」区域填入以下信息：

**WebSocket 长连接（推荐）** — 只需填写：

| 字段 | 来源 |
|------|------|
| App ID | 飞书开放平台 → 凭证与基础信息 |
| App Secret | 飞书开放平台 → 凭证与基础信息 |

<img :src="withBase('/coco-dashboard-feishu-websocket.png')" alt="COCO Dashboard — 飞书 WebSocket 长连接模式，只需填写 App ID 和 App Secret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

**Webhook 传统方式** — 需要填写：

| 字段 | 来源 |
|------|------|
| App ID | 飞书开放平台 → 凭证与基础信息 |
| App Secret | 飞书开放平台 → 凭证与基础信息 |
| Verification Token | 飞书开放平台 → 事件与回调 → 加密策略 |
| Encrypt Key（可选） | 飞书开放平台 → 事件与回调 → 加密策略 |

<img :src="withBase('/coco-dashboard-credentials.png')" alt="COCO Dashboard — 填写应用凭证（App ID、App Secret、Verification Token、Encrypt Key）后点击连接" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

5. 点击 **连接**，系统将自动部署你的 AI 员工（通常需要 2-3 分钟）
6. 部署完成后，页面会显示你的专属 **Webhook URL**（Webhook 模式下一步需要用到）

<img :src="withBase('/coco-dashboard-feishu-webhook-url.png')" alt="COCO Dashboard 部署完成 — 复制 Webhook URL 用于飞书事件订阅配置" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

#### 第7步：配置事件订阅

> **Webhook 和 WebSocket 模式都需要此步。** 两种模式都需要订阅事件，区别在于：Webhook 模式需要填写请求地址（Webhook URL），WebSocket 模式无需填写请求地址，事件通过长连接自动接收。

1. 回到飞书开发者后台，进入左侧 **事件与回调**
2. 在「事件配置」标签下，选择订阅方式：
   - **Webhook 模式：** 选择 **将事件发送至开发者服务器**，在 **请求地址** 中粘贴上一步从 COCO Dashboard 获取的 Webhook URL
   - **WebSocket 模式：** 选择 **使用长连接接收事件**（如已在前面步骤中配置，此处确认即可）

<img :src="withBase('/feishu-events.png')" alt="事件与回调 — 选择订阅方式并配置事件" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 点击下方 **添加事件**，订阅以下事件：
   - `im.message.receive_v1` — 接收消息（必需）
   - `im.chat.member.bot.added_v1` — Bot被加入群组（可选）
4. 点击 **保存**

<br>

#### 第8步：创建版本并发布

1. 在飞书开发者后台，进入左侧 **版本管理与发布**
2. 点击 **创建版本**
3. 填写版本号（如 `1.0.0`）和更新说明
4. 确认应用能力和权限信息无误，点击 **保存**
5. 在弹出的确认窗口中，点击 **确认发布**

<img :src="withBase('/feishu-create-version.png')" alt="飞书开发者后台 — 版本管理与发布，填写版本号和更新说明" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **管理员审批：** 飞书自建应用发布后，需要企业管理员在 **飞书管理后台** 中审批通过后，应用才能正式使用。如果你是个人版账号，则无需此步骤。

配置完成后，可以在飞书客户端搜索你的应用名称，确认机器人已正确创建：

<img :src="withBase('/feishu-search-bot.png')" alt="在飞书中搜索你的应用名称，确认机器人已创建" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

#### 第9步：启用机器人并添加到群组

首先，在飞书开放平台确认应用状态已从「待上线」变为「已开启」：

<img :src="withBase('/feishu-app-status.png')" alt="飞书开放平台 — 确认应用状态已变为「已开启」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

1. 在飞书开放平台，进入 **机器人** 菜单，确认机器人功能已开启
2. 打开飞书客户端
3. 创建或进入一个群组
4. 点击右上角 **...** 菜单 → **Settings**（设置）

<img :src="withBase('/feishu-group-settings.png')" alt="进入群组后，点击右上角「...」→「Settings」" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

5. 在设置中找到 **Bots**（机器人）选项，点击进入（也可以直接点击群组顶部的小机器人图标快速打开）

<img :src="withBase('/feishu-group-bots.png')" alt="群设置 — 点击「Bots」进入机器人管理" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

6. 点击 **Add Bot**（添加机器人） → 搜索你的应用名称 → 点击添加

<img :src="withBase('/feishu-add-bot.png')" alt="添加机器人 — 搜索Bot名称，点击添加" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

7. 添加成功后，你的机器人会出现在 Bots 列表中

<img :src="withBase('/feishu-bot-added.png')" alt="机器人添加完毕 — 也可通过群组顶部机器人图标快速查看" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

8. 在群中 @你的机器人 发送消息
9. AI员工响应 → 部署完成！

> **也可以私聊使用：** 在飞书中搜索你的应用名，直接发起私聊对话。

---

### Lark 部署（推荐海外团队） {#lark}

<video controls style="max-width: 720px; width: 100%; border-radius: 8px; margin: 1rem 0;">
  <source src="https://github.com/coco-xyz/coco-materials/releases/download/assets-v1/lark-deploy-guide-v1.7.mp4" type="video/mp4">
</video>

#### 第1步：进入 Lark 开放平台

1. 访问 [Lark Open Platform](https://open.larksuite.com)
2. 使用你的 Lark 账号登录
3. 点击 **创建应用** 进入应用创建流程

<img :src="withBase('/lark-open-platform.png')" alt="Lark 开放平台首页 — 点击「创建应用」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **提示：** Lark 是飞书的海外版本，界面为英文。功能与飞书基本一致，但平台地址和部分操作名称不同。

<br>

#### 第2步：创建应用

1. 在开发者后台，点击 **创建企业自建应用**

<img :src="withBase('/lark-create-app.png')" alt="Lark 开发者后台 — 点击「创建企业自建应用」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

2. 填写应用名称（如 `COCO AI Employee`）和描述，选择应用图标

<img :src="withBase('/lark-create-app-form.png')" alt="填写应用名称和描述" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 点击 **创建** 完成
4. 创建成功后，可以在工作台看到你的应用

<img :src="withBase('/lark-workspace.png')" alt="工作台 — 查看已创建的应用，点击右上角「创建应用」可创建更多" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **提示：** 需要 Lark 企业管理员权限。如果你不是管理员，请联系你的 IT 部门协助。或者先使用 Lark 个人版账号体验。

<br>

#### 第3步：添加机器人能力并记录凭证

1. 进入应用，在左侧 **添加应用能力** 中，找到 **机器人** 卡片，点击「配置」。添加完成后，左侧会出现 **机器人** 菜单项。

<img :src="withBase('/lark-add-bot-capability.png')" alt="添加应用能力 — 点击机器人卡片的「配置」按钮" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

2. 在左侧 **凭证与基础信息** 页面，记录以下信息：
   - **App ID**
   - **App Secret**

<img :src="withBase('/lark-credentials.png')" alt="凭证与基础信息 — 复制 App ID 和 App Secret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 记录好后，将 App ID 和 App Secret 填入 COCO Dashboard 的对应位置：

<img :src="withBase('/coco-dashboard-app-credentials.png')" alt="COCO Dashboard — App ID 和 App Secret 填写位置" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **重要：** 必须先添加机器人能力，然后才能配置消息相关的权限。

<br>

#### 第4步：获取 Verification Token 并在 COCO Dashboard 填写凭证

1. 在应用管理页面，进入左侧 **事件与回调**
2. 点击 **加密策略** 标签
3. 找到 **Verification Token**，点击眼睛图标查看并复制

<img :src="withBase('/lark-verification-token.png')" alt="事件与回调 → 加密策略 — 找到 Verification Token" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **提示：** 同一页面还有 **Encrypt Key**（可选），如果你需要加密通信，也请一并记录。

4. 登录 [COCO Dashboard](https://coco.xyz/dashboard)，进入渠道配置页面，选择 **Lark**
5. 在「应用凭证」区域填入以下信息：

| 字段 | 来源 |
|------|------|
| App ID | Lark Open Platform → Credentials & Basic Info |
| App Secret | Lark Open Platform → Credentials & Basic Info |
| Verification Token | Lark Open Platform → Events & Callbacks → Encryption Strategy |
| Encrypt Key（可选） | Lark Open Platform → Events & Callbacks → Encryption Strategy |

<img :src="withBase('/coco-dashboard-verification-token.png')" alt="COCO Dashboard — 填写应用凭证，Verification Token 填写位置" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

6. 点击 **连接**，系统将自动部署你的 AI 员工（通常需要 2-3 分钟）
7. 部署完成后，页面会显示你的专属 **Webhook URL**，复制此 URL（在后面的步骤需要用到）

<img :src="withBase('/coco-dashboard-webhook-url.png')" alt="COCO Dashboard 部署完成 — 复制 Webhook URL" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

#### 第5步：配置应用权限

在等待部署的过程中可以配置应用权限。在应用管理页面，进入左侧 **权限管理**。你可以点击 **开通权限** 逐个选择需要的权限，也可以点击 **批量导入/导出权限** 粘贴我们准备好的 JSON 一键导入：

<img :src="withBase('/lark-batch-import-permissions.png')" alt="权限管理页面 — 点击「批量导入/导出权限」粘贴 JSON 一键导入" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

复制以下 JSON，批量导入所有权限：

```json
{
  "scopes": {
    "tenant": [
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "im:app_feed_card:write",
      "im:chat",
      "im:chat.announcement:read",
      "im:chat.announcement:write_only",
      "im:chat.chat_pins:read",
      "im:chat.chat_pins:write_only",
      "im:chat.collab_plugins:read",
      "im:chat.collab_plugins:write_only",
      "im:chat.labels",
      "im:chat.managers:write_only",
      "im:chat.members:bot_access",
      "im:chat.members:read",
      "im:chat.members:write_only",
      "im:chat.menu_tree:read",
      "im:chat.menu_tree:write_only",
      "im:chat.moderation:read",
      "im:chat.tabs:read",
      "im:chat.tabs:write_only",
      "im:chat.top_notice:write_only",
      "im:chat.widgets:read",
      "im:chat.widgets:write_only",
      "im:chat:create",
      "im:chat:delete",
      "im:chat:moderation:write_only",
      "im:chat:operate_as_owner",
      "im:chat:read",
      "im:chat:readonly",
      "im:chat:update",
      "im:datasync.feed_card.time_sensitive:write",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.group_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:message.urgent",
      "im:message.urgent:phone",
      "im:message.urgent:sms",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_depts",
      "im:message:send_sys_msg",
      "im:message:update",
      "im:resource",
      "im:url_preview.update",
      "im:user_agent:read"
    ],
    "user": []
  }
}
```

> **权限说明：** 以上权限涵盖通讯录（只读）、群管理（完整）、消息（收发/撤回/pin/reaction）、群组 @消息监听、紧急消息、文件资源和 Feed 卡片。`im:message:send_multi_depts` 是旧版 `im:message:send_multi_users` 的新名称。飞书（国内版）使用的权限集略有不同，详见[飞书部署](#feishu)。

<br>

#### 第6步：配置事件订阅

1. 回到 Lark 开发者后台，进入左侧 **事件与回调**
2. 在「事件配置」标签下，选择订阅方式为 **将事件发送至开发者服务器**
3. 在 **请求地址** 中粘贴上一步从 COCO Dashboard 获取的 Webhook URL

<img :src="withBase('/lark-events.png')" alt="事件与回调 — 选择「将事件发送至开发者服务器」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

4. 订阅以下事件：
   - `im.message.receive_v1` — 接收消息（必需）
   - `im.chat.member.bot.added_v1` — Bot被加入群组（可选）
5. 点击 **保存**

<br>

#### 第7步：创建版本并发布

1. 进入左侧 **版本管理与发布**，点击 **创建版本**
2. 填写版本号（如 `1.0.0`）和更新说明
3. 确认应用能力和权限信息无误，点击 **保存**
4. 在弹出的确认窗口中，点击 **确认发布**

<img :src="withBase('/lark-publish-version.png')" alt="版本管理与发布 — 填写版本号和更新说明" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **管理员审批：** 提交后需要企业管理员审批。个人版账号无需此步骤。

<br>

#### 第8步：启用机器人并添加到群组

1. 在 Lark Open Platform，进入 **Bot** 菜单，确认 Bot 功能已开启
2. 打开 Lark 客户端
3. 创建或进入一个群组
4. Group Settings → **Bots** → **Add Bot** → 搜索你的应用名称
5. 确认添加
6. 在群中 @你的 Bot 发送消息
7. AI员工响应 → 部署完成！

> **也可以私聊使用：** 在 Lark 中搜索你的应用名，直接发起私聊对话。

---

## 选项C：企业微信部署 {#wecom}

**预计耗时：10-15分钟**

> **注意：** 企业微信是腾讯旗下的企业通讯平台，广泛应用于中国企业。创建自建应用需要**企业管理员权限**登录企业微信管理后台。

需要配置以下 5 项凭证：

| 配置项 | 说明 |
|--------|------|
| 企业ID（CorpID） | 企业唯一标识 |
| 应用Secret | 应用凭证密钥 |
| AgentId | 应用ID |
| Token | 回调验证 Token |
| EncodingAESKey | 回调消息加密密钥（43位） |

### 第1步：获取企业ID（CorpID）

访问企业微信管理后台 [我的企业](https://work.weixin.qq.com/wework_admin/frame#/profile) 页面，在页面底部找到 **企业ID**，复制并保存。

<img :src="withBase('/wecom-step1-corp-id.png')" alt="获取企业ID" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第2步：进入应用管理，创建应用

在左侧菜单进入 **应用管理**，页面下方「自建」区域点击 **创建应用**。

<img :src="withBase('/wecom-step2-create-app.png')" alt="创建应用" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第3步：设置应用名称和可见范围

给 Bot 起一个好记的名字（如 `COCO AI员工`），选择该应用对企业成员的 **可见范围**（决定哪些成员可以看到并使用这个 Bot）。

<img :src="withBase('/wecom-step3-app-name.png')" alt="设置应用名称和可见范围" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第4步：获取 AgentId 和 Secret，设置 API 接收

应用创建成功后，在应用详情页获取：

- **AgentId** — 页面上直接显示
- **Secret** — 点击「查看」获取

然后在页面下方「功能」区域，点击 **接收消息 → 设置API接收**。

<img :src="withBase('/wecom-step4-agent-secret.png')" alt="获取AgentId和Secret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **重要：** Secret 只显示一次，请立即保存。

### 第5步：获取 Token 和 EncodingAESKey（暂不保存，保留页面）

在「API接收消息」配置页面：

- **Token** — 点击「随机获取」生成
- **EncodingAESKey** — 点击「随机获取」生成

<img :src="withBase('/wecom-step5-token-aeskey-new.png')" alt="获取Token和EncodingAESKey" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **注意：** 此步骤暂不保存，URL 需要在第7步填写。请保留此页面不要关闭。

### 第6步：在 Dashboard 中填写凭证并连接

在 COCO Dashboard 的企业微信渠道配置页面中，填写前面获取的所有凭证信息，记录页面上显示的 **Webhook URL** 和 **服务器 IP**，然后点击 **连接** 等待连接成功。

<img :src="withBase('/wecom-step6-dashboard-credentials.png')" alt="Dashboard填写凭证" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第7步：回填 Webhook URL 到企业微信

连接成功后，将 Dashboard 显示的 **Webhook URL** 复制并填写到第5步保留的「接收消息服务器配置」页面的 **URL** 输入框中，点击 **保存**。

### 第8步：配置企业可信 IP

将 Dashboard 显示的 **服务器 IP** 配置到企业微信的 **企业可信 IP** 中，确保服务器可以正常调用企业微信 API。

<img :src="withBase('/wecom-step8-trusted-ip.png')" alt="配置企业可信IP" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第9步：开始聊天

配置成功后：
1. 在企业微信中搜索 Bot 名称，开启对话
2. 发送任意消息，AI员工会立即响应
3. 也可以将应用添加到企业微信群组，让整个团队都能使用
4. 部署完成！

> **群组使用：** 在企业微信群聊中，@你的应用即可与AI员工互动，群内所有可见范围内的成员都可以使用。

### 企业微信常见问题

| 问题 | 解决方案 |
|------|---------|
| 无法保存 API 配置 | 确保先在 Dashboard 完成连接（第6步），企业微信在保存时会验证 URL 有效性 |
| 应用对部分成员不可见 | 检查应用管理中的 **可见范围** 设置，确保所有使用者都已添加 |
| 群聊中机器人不响应 | 确认应用已添加至群组，且群成员在可见范围内 |
| Secret 丢失或忘记 | 在应用管理中重新点击 **获取Secret** — 原 Secret 立即失效，需重新配置 |

---

## 选项D：钉钉部署 {#dingtalk}

**预计耗时：8-12分钟**

> **注意：** 钉钉是阿里旗下的企业协作平台，广泛应用于中国企业。钉钉使用 **Stream 模式**（WebSocket 长连接），无需配置公网回调地址，部署更简单。

需要配置以下 3 项凭证：

| 配置项 | 说明 |
|--------|------|
| AppKey | 应用唯一标识 |
| AppSecret | 应用凭证密钥 |
| RobotCode | 机器人编码（通常与 AppKey 相同） |

### 第1步：访问钉钉开放平台，创建应用

访问钉钉开放平台 [应用管理](https://open-dev.dingtalk.com/fe/app) 页面，点击 **创建应用**。

<img :src="withBase('/dingtalk-step1-create-app.png')" alt="创建应用" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第2步：输入应用名称和描述

输入 **应用名称**（如 `COCO AI员工`）和 **应用描述**，点击 **保存**。

<img :src="withBase('/dingtalk-step2-app-name.png')" alt="设置应用名称" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第3步：添加机器人能力

保存后自动跳转到「添加应用能力」页面，点击 **添加机器人** 能力。

<img :src="withBase('/dingtalk-step3-add-robot.png')" alt="添加机器人能力" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第4步：配置机器人，选择 Stream 模式

打开机器人配置页面，填写必要的信息，**消息接收模式** 选择 **Stream 模式**，然后发布。

<img :src="withBase('/dingtalk-step4a-robot-config.png')" alt="机器人配置" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<img :src="withBase('/dingtalk-step4b-stream-mode.png')" alt="选择Stream模式" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **注意：** Stream 模式通过 WebSocket 长连接接收消息，无需配置公网回调地址，部署更简单。

### 第5步：版本管理与发布

在左侧菜单选择 **版本管理与发布**，点击 **创建新版本**。

<img :src="withBase('/dingtalk-step5-version-publish.png')" alt="创建新版本" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第6步：设置应用可见范围

填写版本信息，选择合适的 **应用可见范围**（决定哪些成员可以看到并使用这个 Bot），然后保存发布。

<img :src="withBase('/dingtalk-step6-visible-range.png')" alt="设置可见范围" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第7步：获取 AppKey、AppSecret、RobotCode

在应用详情页的「凭证与基础信息」中获取：

- **AppKey** — 应用唯一标识
- **AppSecret** — 点击「显示」查看

<img :src="withBase('/dingtalk-step7a-credentials.png')" alt="获取AppKey和AppSecret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

在机器人配置页面获取 **RobotCode**（通常与 AppKey 相同）。

<img :src="withBase('/dingtalk-step7b-robot-code.png')" alt="获取RobotCode" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第8步：填写凭证到 Dashboard

将获取到的 **AppKey**、**AppSecret**、**RobotCode** 正确填写到 COCO Dashboard 的钉钉渠道配置页面中，点击连接即可。

### 第9步：开始聊天

在钉钉中搜索对应的 Bot 名称，开始和 AI 机器人聊天。

<img :src="withBase('/dingtalk-step9-search-bot.png')" alt="搜索Bot开始聊天" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **群组使用：** 在钉钉群聊中，@你的 Bot 即可与 AI 员工互动。

### 钉钉常见问题

| 问题 | 解决方案 |
|------|---------|
| 应用对部分成员不可见 | 检查版本发布时的 **可见范围** 设置，确保所有使用者都已添加 |
| 群聊中机器人不响应 | 确认机器人已添加至群组，且使用 @mention 方式触发 |
| AppSecret 忘记 | 在应用凭证页面重新查看或重置 |

---

## 选项E：Slack 部署 {#slack}

**预计耗时：8-12分钟**

> **说明：** Slack 是欧美企业广泛使用的团队协作平台。Slack 使用 **Socket Mode**（WebSocket 连接），无需配置公网回调地址，部署简便。

对接 Slack 需要 **2 个配置项**：

| 配置项 | 格式 | 说明 |
|--------|------|------|
| Bot Token | `xoxb-...` | Bot User OAuth Token，用于调用 Slack API |
| App Token | `xapp-...` | App-Level Token，用于 Socket Mode 连接 |

### 第1步：创建 Slack App

1. 访问 [Slack App 管理页面](https://api.slack.com/apps) 并登录
2. 点击页面右上角的 **Create New App**
3. 在弹出窗口中选择 **From scratch**（从零创建）
4. 输入 App 名称（如 `COCO AI Employee`），选择要安装到的 Workspace
5. 点击 **Create App** 完成创建

<img :src="withBase('/slack-step1-create-app.png')" alt="创建 Slack App" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第2步：开启 Socket Mode 并生成 App Token

1. 在 App 配置页面左侧导航栏，找到 **Socket Mode**
2. 点击开启 **Enable Socket Mode**
3. 开启后系统会提示生成 App-Level Token：
   - 为 Token 起一个名称（如 `zylos-socket`）
   - 添加 Scope：搜索并勾选 **`connections:write`**
   - 点击 **Generate** 生成 Token
4. 复制并保存该 Token（格式为 `xapp-...`）

<img :src="withBase('/slack-step2-socket-mode-new.png')" alt="开启 Socket Mode" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<img :src="withBase('/slack-step2-generate-token.png')" alt="生成 App-Level Token" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **注意：** 此 Token 生成后仅显示一次，请立即复制保存。如果丢失需要重新生成。

### 第3步：配置 Bot Token 权限 (Scopes)

1. 左侧导航栏找到 **OAuth & Permissions**
2. 下拉至 **Scopes** 模块
3. 在 **Bot Token Scopes** 下点击 **Add an OAuth Scope**，逐一添加以下权限：

| 权限 | 说明 |
|------|------|
| `app_mentions:read` | 读取 Bot 被 @mention 的消息 |
| `channels:history` | 读取公共频道消息 |
| `channels:read` | 查看频道基本信息 |
| `chat:write` | 以 Bot 身份发送消息 |
| `files:read` | 读取分享的文件 |
| `files:write` | 上传文件 |
| `groups:history` | 读取私有频道消息 |
| `groups:read` | 查看私有频道基本信息 |
| `im:history` | 读取私聊消息记录 |
| `im:read` | 查看私聊基本信息 |
| `im:write` | 发起私聊对话 |
| `reactions:read` | 读取表情回复 |
| `reactions:write` | 添加表情回复 |
| `users:read` | 查看用户信息 |

<img :src="withBase('/slack-step3-scopes-new.png')" alt="配置 Bot Token Scopes" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第4步：安装 App 到 Workspace

1. 回到 **OAuth & Permissions** 页面顶部
2. 点击 **Install to Workspace**（或 **Reinstall to Workspace**）
3. 在弹出的授权窗口中确认权限，点击 **Allow** 完成安装
4. 安装成功后，复制并保存 **Bot User OAuth Token**（格式为 `xoxb-...`）

<img :src="withBase('/slack-step4-install.png')" alt="安装 App 到 Workspace" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **注意：** 每次修改 Scopes 后都需要重新安装 App 到 Workspace，Token 会重新生成。请及时更新配置。

### 第5步：开启事件订阅 (Event Subscriptions)

1. 左侧导航栏找到 **Event Subscriptions**
2. 点击开启 **Enable Events**
3. 展开 **Subscribe to bot events**，点击 **Add Bot User Event**，添加以下事件：

| 事件 | 说明 |
|------|------|
| `message.im` | 接收私聊消息 |
| `message.channels` | 接收公共频道消息 |
| `message.groups` | 接收私有频道消息 |
| `app_mention` | 接收 @mention 消息 |

4. 添加完成后，点击页面底部 **Save Changes** 保存

<img :src="withBase('/slack-step5-events.png')" alt="开启事件订阅" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第6步：开启 App Home（允许私信）

1. 左侧导航栏找到 **App Home**
2. 在 **Show Tabs** 区域：
   - 勾选 **Messages Tab**
   - 勾选下方的 **Allow users to send Slash commands and messages from the messages tab**
3. 这样用户才能在 Slack 中直接给 Bot 发送私信

<img :src="withBase('/slack-step6-app-home.png')" alt="开启 App Home" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第7步：在 COCO Channel 中配置 Token

1. 返回 [COCO Dashboard](https://coco.site/dashboard)，进入对应 Channel 的配置页面
2. 填入以下两个 Token：
   - **Bot Token**（`xoxb-...`）：来自 Slack App 的 [OAuth & Permissions](https://api.slack.com/apps) 页面
   - **App Token**（`xapp-...`）：第2步中生成的 Token
3. 保存配置

### 第8步：开始聊天

1. 在 Slack 中搜索 Bot 名称或在 **Apps** 列表中找到它
2. 点击即可开始私聊对话，AI 员工即时响应
3. 如需在频道中使用，先将 Bot 邀请到目标频道（在频道中输入 `/invite @BotName`）
4. 通过 `@BotName` 提及即可触发回复
5. 部署完成！

> **提示：** Slack Bot 支持私聊和频道 @mention 两种方式，可同时在多个频道使用。

### Slack 常见问题

| 问题 | 解决方案 |
|------|---------|
| Bot 不响应 | 检查 Dashboard 中的 Bot Token 和 App Token 是否正确 |
| Slack 中看不到 Bot | 确认 App 已安装到 Workspace（第4步）且 App Home 已配置（第6步） |
| 频道中 Bot 不响应 | Bot 需先被邀请到频道，使用 `/invite @BotName` |
| 修改权限后 Token 失效 | 每次修改 Scopes 后需重新安装 App，然后更新 Dashboard 中的 Token |
| 无法给 Bot 发私信 | 确认 App Home 中已开启 Messages Tab |

## 选项F：WhatsApp 部署 {#whatsapp}

**预计用时：约5分钟**

> **说明：** WhatsApp 通过**扫码**方式连接（关联设备模式），与使用 WhatsApp Web 类似。无需 API 密钥、开发者账号或任何应用配置——只需一台已安装 WhatsApp 的手机即可。

无需填写凭证，只需准备：

| 所需项目 | 说明 |
|----------|------|
| COCO AI 员工 | COCO Dashboard 中已创建的实例 |
| WhatsApp 账号 | 一台已安装并登录 WhatsApp 的手机 |
| 约5分钟 | 完成部署所需时间 |

### 第1步：创建 AI 员工并进入配置页

1. 登录 [COCO Dashboard](https://coco.xyz/dashboard)
2. 创建新的 AI 员工，或选择已有实例
3. 点击员工卡片上的 **配置 →** 进入实例详情页

<img :src="withBase('/whatsapp-step1-dashboard.png')" alt="Dashboard 配置入口" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第2步：点击 WhatsApp「连接」，等待二维码生成

1. 在实例详情页的渠道列表中，找到 **WhatsApp** 卡片
2. 点击 **连接** 按钮
3. 系统将在后台准备 WhatsApp 会话——二维码生成需要约 **30秒**，请耐心等待
4. 生成后，二维码每15秒自动刷新

<img :src="withBase('/whatsapp-step2-qr-code.png')" alt="WhatsApp 二维码" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **注意：** 等待期间请勿关闭页面或重复点击，否则可能触发重复请求。

### 第3步：手机打开 WhatsApp → 关联设备

1. 打开手机上的 **WhatsApp**
2. 点击右下角的 **「我」**（个人资料图标）
3. 在设置列表中，点击 **关联设备**

<img :src="withBase('/whatsapp-step3-linked-devices.png')" alt="WhatsApp 关联设备" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第4步：点击「关联设备」，扫描二维码

1. 在「关联设备」页面，点击底部的 **关联设备** 按钮
2. 手机摄像头打开——对准第2步中 Dashboard 显示的二维码扫描
3. 等待几秒，连接完成

<img :src="withBase('/whatsapp-step4-link-device.png')" alt="关联设备" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **提示：** 若二维码已过期，Dashboard 会自动刷新，扫描最新显示的二维码即可。

### 第5步：验证连接并管理聊天权限

1. 扫码成功后，Dashboard 自动检测到连接——WhatsApp 卡片显示 **已连接（Connected）**
2. 部署完成！你现在是这个 WhatsApp 机器人的 **Owner**（管理员）

#### 验证机器人是否正常运作

在 WhatsApp 中搜索自己的账号，给自己发一条消息——AI 员工会自动回复，即表示连接成功。

#### 管理哪些人可以和机器人对话

默认情况下，**只有 Owner** 可以和机器人对话。如需允许其他人使用，可通过以下两种模式配置——直接向机器人发送自然语言指令即可：

**白名单模式（Allowlist Mode）** — 仅指定号码可对话：

> 发给机器人：`开启白名单模式，将 +86 138xxxx8888 加入列表`

机器人会自动更新配置，只有白名单内的用户才能发起对话。

**开放模式（Open Mode）** — 任何人均可对话：

> 发给机器人：`开启开放模式，允许所有人给你发消息`

机器人将向所有用户开放聊天权限。

> **提示：** 若手机长时间离线，WhatsApp 关联设备可能自动断开。断开后，返回 Dashboard 重新扫码即可恢复连接。

### WhatsApp 常见问题

| 问题 | 解决方案 |
|------|---------|
| 二维码很久没有出现 | 首次生成可能需要30~60秒，属于正常现象，请勿关闭页面 |
| 扫码前二维码已过期 | 二维码每15秒自动刷新，使用最新显示的即可 |
| 提示「请求进行中」 | 上一个二维码请求仍在运行，稍等片刻会自动恢复 |
| 其他人无法给机器人发消息 | 默认只有 Owner 可对话。开启白名单或开放模式即可授权其他人 |
| WhatsApp 过一段时间断开了 | 手机离线时间过长导致断开。回到 Dashboard 重新扫码连接即可 |
| 想要断开 WhatsApp | 在实例详情页的 WhatsApp 卡片上点击 **断开连接** 按钮 |
