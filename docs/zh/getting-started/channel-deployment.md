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
| [微信](#wechat) | 已支持 | 国内用户首选，个人使用便捷 |
| [企业微信](#wecom) | 已支持 | 国内企业用户首选 |
| [钉钉](#dingtalk) | 已支持 | 国内团队协作，无需公网回调 |
| [WhatsApp](#whatsapp) | 已支持 | 海外商务用户 |
| [Discord](#discord) | 已支持 | 开发者/社区场景 |
| [Slack](#slack) | 已支持 | 欧美企业用户 |
| [Microsoft Teams](#ms-teams) | 已支持 | 企业团队、Microsoft 365 组织 |
| [Zalo (官方)](#zalo) | 已支持 | 越南用户、个人及商业使用 |
| [Zalo 个人版（非官方）](#zalo-personal) | 已支持 | 越南用户、个人 Zalo 账号（非官方） |
| [LINE](#line) | 已支持 | 日本 / 台湾 / 泰国用户、个人及商业使用 |

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

#### 第1步：创建Telegram Bot

1. 打开 Telegram，搜索 **@BotFather**（Telegram官方机器人管理器）
2. 发送 `/newbot` 命令
3. 按提示输入你的Bot名称（显示名），例如：`My COCO AI`
4. 输入Bot用户名（必须以bot结尾），例如：`my_coco_ai_bot`
5. BotFather会返回一个 **Bot Token**（格式类似：`110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`）
6. **复制并保存这个Token**，下一步需要用到

> **重要：** Bot Token是你机器人的唯一凭证，请勿泄露给他人。

#### 第2步：在COCO Dashboard绑定

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 进入 **对话入口** 页面，找到 **Telegram** 卡片
3. 粘贴上一步获取的 **Bot Token**
4. 点击 **连接**
5. 系统会自动验证Token有效性并完成连接

<img :src="withBase('/tg-dashboard-token.png')" alt="在 COCO Dashboard 对话入口中粘贴 Bot Token 并点击连接" style="max-width: 720px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

#### 第3步：开始使用
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

飞书提供两种部署方式，请根据你的需求选择：

- **方案1：智能体快速部署（推荐）** — 1-2 分钟完成，系统自动配置权限和事件，适合大多数用户
- **方案2：自建应用部署** — 需要手动配置权限、事件订阅和版本发布，适合需要精细控制的高级用户

---

#### 方案1：智能体快速部署（推荐） {#feishu-quick}

**预计耗时：1-2分钟** | 系统自动配置权限和事件订阅，只需创建智能体并填写凭证即可完成部署。

##### 第1步：进入飞书开放平台

1. 访问 [飞书开放平台](https://open.feishu.cn)
2. 使用你的飞书账号登录
3. 点击右上角 **开发者后台** 进入管理页面

<img :src="withBase('/feishu-open-platform.png')" alt="飞书开放平台首页 — 点击右上角「开发者后台」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第2步：点击「立即创建」飞书智能体应用

在开发者后台顶部，找到 **创建飞书智能体应用** 横幅，点击右侧的 **立即创建**。

<img :src="withBase('/feishu-smart-agent-create.png')" alt="飞书开发者后台 — 点击「立即创建」智能体应用" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第3步：填写信息并创建

1. 选择您想要的 **头像**
2. 填写名称（如 `COCO AI 员工`）
3. 点击 **立即创建**

<img :src="withBase('/feishu-smart-agent-form.png')" alt="创建飞书智能体应用 — 选择头像、填写名称、点击立即创建" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **企业账号注意：** 创建成功之后，如您使用的是企业飞书号，则需要企业管理员在 [飞书管理后台](https://feishu.cn/admin) 中审批通过后，应用才能正式使用。如果你是个人版账号，则无需此步骤。

<br>

##### 第4步：在 COCO Dashboard 填写凭证并部署

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 点击左侧的「对话入口」，选择 **飞书**

<img :src="withBase('/feishu-smart-agent-dashboard-channel.png')" alt="COCO Dashboard — 点击「对话入口」，选择飞书" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 回到智能体 **创建成功** 页面，将 App ID 和 App Secret 复制到「对话入口」的飞书中

<img :src="withBase('/feishu-smart-agent-credentials.png')" alt="创建成功页面 — 复制 App ID 和 App Secret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

4. 填写完 **App ID** 和 **App Secret**，点击 **连接**，系统将自动部署你的 AI 员工（通常需要 2-3 分钟）

<img :src="withBase('/feishu-smart-agent-connect.png')" alt="填写 App ID 和 App Secret 后点击连接" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第5步：搜索机器人并开始聊天

连接完成后，在 **飞书客户端** 搜索您刚设置的机器人名字，确认机器人已正确创建，点击进去和机器人聊天即可。

<img :src="withBase('/feishu-smart-agent-search-bot.png')" alt="在飞书中搜索机器人名称" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<img :src="withBase('/feishu-smart-agent-chat.png')" alt="点击机器人进入聊天" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **部署完成！** 你的 AI 员工已经上线，可以直接私聊使用，也可以添加到群组中。

---

#### 方案2：自建应用部署（完整配置） {#feishu-custom}

**预计耗时：8-15分钟** | 手动创建自建应用并逐步配置权限、事件订阅和版本发布。适合需要精细控制权限或自定义配置的高级用户。

**WebSocket 长连接（推荐）：** 最简配置，只需 App ID 和 App Secret，无需配置 Webhook URL 和校验。

##### 第1步：进入飞书开放平台

1. 访问 [飞书开放平台](https://open.feishu.cn)
2. 使用你的飞书账号登录
3. 点击右上角 **开发者后台** 进入管理页面

<img :src="withBase('/feishu-open-platform.png')" alt="飞书开放平台首页 — 点击右上角「开发者后台」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第2步：创建企业自建应用

1. 在开发者后台，点击 **创建企业自建应用**

<img :src="withBase('/feishu-create-app.png')" alt="飞书开发者后台 — 点击「创建企业自建应用」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

2. 填写应用名称（如 `COCO AI员工`）和描述，选择应用图标

<img :src="withBase('/feishu-create-app-form.png')" alt="填写应用名称和描述" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 点击 **创建** 完成

> **提示：** 需要企业管理员权限创建应用。如果你不是管理员，请联系你的IT部门协助。或者先使用飞书个人版账号体验。

<br>

##### 第3步：添加机器人能力

在应用管理页面，进入左侧 **添加应用能力**，找到 **机器人** 卡片，点击「+ 添加」。

<img :src="withBase('/feishu-add-bot-capability.png')" alt="添加应用能力 — 找到机器人卡片，点击「+ 添加」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第4步：配置应用权限

添加机器人能力后，进入左侧 **权限管理**。你可以点击 **开通权限** 逐个选择需要的权限，也可以点击 **批量导入/导出权限** 粘贴我们准备好的 JSON 一键导入：

<img :src="withBase('/feishu-batch-import-permissions.png')" alt="权限管理页面 — 点击「批量导入/导出权限」一键导入所有权限" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<img :src="withBase('/feishu-batch-import-dialog.png')" alt="批量导入权限 — 先全部删除，再粘贴 JSON" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

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

部分权限开通后会弹出「可访问的数据范围」配置窗口，选择默认配置并点击 **确认** 即可：

<img :src="withBase('/feishu-permission-scope.png')" alt="权限数据范围配置 — 保持默认配置，点击确认" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第5步：配置事件订阅

1. 回到飞书开发者后台，进入左侧 **事件与回调**
2. 在「事件配置」标签下，选择 **使用长连接接收事件**

<img :src="withBase('/feishu-events.png')" alt="事件与回调 — 选择订阅方式并配置事件" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 点击下方 **添加事件**，订阅以下事件：

   **接收消息**（必需）：
   <div class="event-code">

   ```
   im.message.receive_v1
   ```

   </div>

   **Bot被加入群组**（可选）：
   <div class="event-code">

   ```
   im.chat.member.bot.added_v1
   ```

   </div>

<img :src="withBase('/feishu-add-event.png')" alt="添加事件 — 搜索并订阅 im.message.receive_v1" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

4. 点击 **保存**

<br>

##### 第6步：创建版本并发布

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

##### 第7步：在 COCO Dashboard 填写凭证并部署

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 点击左侧的「对话入口」，选择 **飞书**

<img :src="withBase('/coco-dashboard-feishu-channel.png')" alt="COCO Dashboard — 点击「对话入口」，选择飞书" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 回到 [飞书开放平台](https://open.feishu.cn/)，在左侧的 **凭证与基础信息** 页面，将 App ID 和 App Secret 复制到「对话入口」的飞书中
4. 点击 **连接**，系统将自动部署你的 AI 员工（通常需要 2-3 分钟）

<br>

##### 第8步：启用机器人并添加到群组

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

Lark 提供两种部署方式，请根据你的需求选择：

- **方案1：智能体快速部署（推荐）** — 1-2 分钟完成，系统自动配置权限和事件，适合大多数用户
- **方案2：自建应用部署** — 需要手动配置权限、事件订阅和版本发布，适合需要精细控制的高级用户

---

#### 方案1：智能体快速部署（推荐） {#lark-quick}

**预计耗时：1-2分钟** | 系统自动配置权限和事件订阅，只需创建智能体并填写凭证即可完成部署。

##### 第1步：进入 Lark 开放平台

1. 访问 [Lark Open Platform](https://open.larksuite.com)
2. 使用你的 Lark 账号登录
3. 点击右上角 **开发者后台** 进入管理页面

<img :src="withBase('/lark-smart-agent-open-platform.png')" alt="Lark 开放平台首页 — 点击右上角「开发者后台」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第2步：点击「立即创建」Lark 智能体应用

在开发者后台顶部，找到 **创建 Lark 智能体应用** 横幅，点击右侧的 **立即创建**。

<img :src="withBase('/lark-smart-agent-create.png')" alt="Lark 开发者后台 — 点击「立即创建」智能体应用" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第3步：填写信息并创建

1. 选择您想要的 **头像**
2. 填写名称（如 `COCO AI 员工`）
3. 点击 **立即创建**

<img :src="withBase('/lark-smart-agent-form.png')" alt="创建 Lark 智能体应用 — 选择头像、填写名称、点击立即创建" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **企业账号注意：** 创建成功之后，如您使用的是企业 Lark 账号，则需要企业管理员在 Lark 管理后台中审批通过后，应用才能正式使用。如果你是个人版账号，则无需此步骤。

<br>

##### 第4步：在 COCO Dashboard 填写凭证并部署

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 点击左侧的「对话入口」，选择 **Lark（飞书国际版）**

<img :src="withBase('/lark-smart-agent-dashboard-channel.png')" alt="COCO Dashboard — 点击「对话入口」，选择 Lark" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 回到智能体 **创建成功** 页面，将 App ID 和 App Secret 复制到「对话入口」的 Lark 中

<img :src="withBase('/lark-smart-agent-credentials.png')" alt="创建成功页面 — 复制 App ID 和 App Secret" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

4. 填写完 **App ID** 和 **App Secret**，点击 **连接**，系统将自动部署你的 AI 员工（通常需要 2-3 分钟）

<img :src="withBase('/lark-smart-agent-connect.png')" alt="填写 App ID 和 App Secret 后点击连接" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第5步：搜索机器人并开始聊天

连接完成后，在 **Lark 客户端** 搜索您刚设置的机器人名字，确认机器人已正确创建，点击进去和机器人聊天即可。

<img :src="withBase('/lark-smart-agent-search-bot.png')" alt="在 Lark 中搜索机器人名称" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<img :src="withBase('/lark-smart-agent-chat.png')" alt="点击机器人进入聊天" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **部署完成！** 你的 AI 员工已经上线，可以直接私聊使用，也可以添加到群组中。

---

#### 方案2：自建应用部署（完整配置） {#lark-custom}

**预计耗时：8-15分钟** | 手动创建自建应用并逐步配置权限、事件订阅和版本发布。适合需要精细控制权限或自定义配置的高级用户。

**WebSocket 长连接（推荐）：** 最简配置，只需 App ID 和 App Secret，无需配置 Webhook URL 和校验。

##### 第1步：进入 Lark 开放平台

1. 访问 [Lark Open Platform](https://open.larksuite.com)
2. 使用你的 Lark 账号登录
3. 点击 **创建应用** 进入应用创建流程

<img :src="withBase('/lark-open-platform.png')" alt="Lark 开放平台首页 — 点击「创建应用」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **提示：** Lark 是飞书的海外版本，界面为英文。功能与飞书基本一致，但平台地址和部分操作名称不同。

<br>

##### 第2步：创建应用

1. 在开发者后台，点击 **创建企业自建应用**

<img :src="withBase('/lark-create-app.png')" alt="Lark 开发者后台 — 点击「创建企业自建应用」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

2. 填写应用名称（如 `COCO AI Employee`）和描述，选择应用图标

<img :src="withBase('/lark-create-app-form.png')" alt="填写应用名称和描述" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 点击 **创建** 完成
4. 创建成功后，可以在工作台看到你的应用

<img :src="withBase('/lark-workspace.png')" alt="工作台 — 查看已创建的应用，点击右上角「创建应用」可创建更多" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **提示：** 需要 Lark 企业管理员权限。如果你不是管理员，请联系你的 IT 部门协助。或者先使用 Lark 个人版账号体验。

<br>

##### 第3步：添加机器人能力

在应用管理页面，进入左侧 **添加应用能力**，找到 **机器人** 卡片，点击「+ 添加」。

<img :src="withBase('/lark-add-bot-capability.png')" alt="添加应用能力 — 找到机器人卡片，点击「+ 添加」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<br>

##### 第4步：配置应用权限

添加机器人能力后，进入左侧 **权限管理**。你可以点击 **开通权限** 逐个选择需要的权限，也可以点击 **批量导入/导出权限** 粘贴我们准备好的 JSON 一键导入：

<img :src="withBase('/lark-batch-import-permissions.png')" alt="权限管理页面 — 点击「批量导入/导出权限」粘贴 JSON 一键导入" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

<img :src="withBase('/lark-batch-import-dialog.png')" alt="批量导入权限 — 先全部删除，再粘贴 JSON" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

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

##### 第5步：配置事件订阅

1. 回到 Lark 开发者后台，进入左侧 **Events & Callbacks**（事件与回调）
2. 在订阅方式中，选择 **Receive events through persistent connection**（使用长连接接收事件）

<img :src="withBase('/lark-events.png')" alt="Events & Callbacks — 选择「使用长连接接收事件」" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 点击下方 **Add Events**，订阅以下事件：

   **接收消息**（必需）：
   <div class="event-code">

   ```
   im.message.receive_v1
   ```

   </div>

   **Bot被加入群组**（可选）：
   <div class="event-code">

   ```
   im.chat.member.bot.added_v1
   ```

   </div>

4. 点击 **Save**

<br>

##### 第6步：创建版本并发布

1. 进入左侧 **版本管理与发布**，点击 **创建版本**
2. 填写版本号（如 `1.0.0`）和更新说明
3. 确认应用能力和权限信息无误，点击 **保存**
4. 在弹出的确认窗口中，点击 **确认发布**

<img :src="withBase('/lark-publish-version.png')" alt="版本管理与发布 — 填写版本号和更新说明" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **管理员审批：** 提交后需要企业管理员审批。个人版账号无需此步骤。

配置完成后，可以在 Lark 客户端搜索你的应用名称，确认机器人已正确创建。

<br>

##### 第7步：在 COCO Dashboard 填写凭证并部署

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 点击左侧的「对话入口」，选择 **Lark**

<img :src="withBase('/coco-dashboard-lark-channel.png')" alt="COCO Dashboard — 点击「对话入口」，选择 Lark" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

3. 填入以下信息：

| 字段 | 来源 |
|------|------|
| App ID | Lark Open Platform → Credentials & Basic Info |
| App Secret | Lark Open Platform → Credentials & Basic Info |

4. 点击 **连接**，系统将自动部署你的 AI 员工（通常需要 2-3 分钟）

<br>

##### 第8步：启用机器人并添加到群组

首先，在 Lark Open Platform 确认应用状态已变为已开启（Enabled）：

1. 在 Lark Open Platform，进入 **Bot** 菜单，确认 Bot 功能已开启
2. 打开 Lark 客户端
3. 创建或进入一个群组
4. Group Settings → **Bots** → **Add Bot** → 搜索你的应用名称
5. 确认添加
6. 在群中 @你的 Bot 发送消息
7. AI员工响应 → 部署完成！

> **也可以私聊使用：** 在 Lark 中搜索你的应用名，直接发起私聊对话。

---

## 选项C：微信部署 {#wechat}

**预计耗时：约2分钟**

### 第1步：更新微信版本 （建议更新到微信最新版本）

1. iOS 微信需 8.0.70 版本及以上
2. Android 微信需 8.0.69 版本及以上
3. 电脑桌面版 微信需 4.1.9 版本及以上

### 第2步：登录 Dashboard → 对话入口 → 微信连接 → 微信扫码（附截图）

<a href="https://icoco.ai/dashboard" style="color: #f5a623; font-weight: 600;">登录 Dashboard</a> → 对话入口 → 选择微信连接 → 待二维码生成 → 手机微信扫码即可

<img :src="withBase('/wechat-dashboard-connect.png')" alt="COCO Dashboard 对话入口 — 点击微信连接按钮，扫码完成绑定" style="max-width: 720px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第3步：开始使用

1. 手机微信会自动弹出 微信ClawBot 对话页面
2. 发送任意消息，AI员工会立即响应
3. 部署完成！

---

## 选项D：企业微信部署 {#wecom}

**预计耗时：约5分钟**

> **版本说明：** 本指南适用于企业微信组件 **v0.1.1 及以上版本**（WebSocket 长连接模式，无需公网 IP 或 SSL）。如仍在使用旧版 v0.1.0 Webhook 模式，请通过 Dashboard Web Console 发送 `帮我升级 wecom 组件` 进行升级。

只需配置 2 项凭证：

| 配置项 | 说明 |
|--------|------|
| Bot ID | 智能机器人的唯一标识 |
| Secret | 机器人身份验证密钥 |

### 第1步：创建智能机器人

在企业微信管理后台，进入 **工作台** → **智能机器人**，点击 **创建机器人**。

### 第2步：选择创建方式

在弹出对话框中，点击 **手动创建 >**，或选择 AI 自动生成。

### 第3步：切换至 API 模式

在页面底部，点击 **切换至 API 模式创建**。

### 第4步：开启长连接并复制凭证

1. 选择 **使用长连接**
2. 复制页面上显示的 **Bot ID** 和 **Secret**
3. 设置 **可见范围**，选择哪些成员可以使用该机器人
4. 点击 **保存**

> **重要：** Secret 只在创建时显示一次，请立即保存。

### 第5步：在 Dashboard 中连接

在 COCO Dashboard 的员工实例详情页 → **会话入口** → 点击 **企业微信连接** 按钮 → 填写第4步获取的 **Bot ID** 和 **Secret**，点击 **连接**。

### 企业微信常见问题

| 问题 | 解决方案 |
|------|---------|
| 机器人不响应 | 确认已开启长连接模式，且 Bot ID 和 Secret 填写正确 |
| Secret 丢失 | 删除机器人重新创建——Secret 创建后不可再次查看 |

---

## 选项E：钉钉部署 {#dingtalk}

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

## 选项F：Slack 部署 {#slack}

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

### 第7步：将 Token 发给 AI 员工

完成 Slack App 配置后，直接在对话中将两个 Token 发给你的 AI 员工即可完成接入。例如发送：

> Bot Token：xoxb-xxxxxxxx
> App Token：xapp-xxxxxxxx

AI 员工会自动完成 Slack 渠道的连接配置。

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
| Bot 不响应 | 通过对话重新向 AI 员工发送 Bot Token 和 App Token |
| Slack 中看不到 Bot | 确认 App 已安装到 Workspace（第4步）且 App Home 已配置（第6步） |
| 频道中 Bot 不响应 | Bot 需先被邀请到频道，使用 `/invite @BotName` |
| 修改权限后 Token 失效 | 每次修改 Scopes 后需重新安装 App，然后更新 Dashboard 中的 Token |
| 无法给 Bot 发私信 | 确认 App Home 中已开启 Messages Tab |

## 选项G：WhatsApp 部署 {#whatsapp}

**预计用时：约5分钟**

> **说明：** WhatsApp 通过**扫码关联设备**方式接入，无需 API 密钥、开发者账号或应用配置。

::: danger 重要提醒：必须使用新的专属号码
为了让这个 AI 员工像独立 Bot 一样正常使用，请务必绑定一个**新的、专属的 WhatsApp 号码**。

**为什么不能直接用你现在常用的 WhatsApp？**  
如果直接绑定你自己的 WhatsApp，这个账号会同时扮演“你本人”和“Bot”两个身份，通常会导致只能自己给自己发消息，别人也无法把它当成独立 Bot 正常对话。

**为什么要注册一个新号码？**  
Bot 需要独立身份。只有使用专属号码，其他人才能把它当作单独账号来发消息、拉群、@它，并正常互动。
:::

无需填写凭证，只需准备：

| 所需项目 | 说明 |
|----------|------|
| COCO AI 员工 | COCO Dashboard 中已创建的实例 |
| WhatsApp 账号 | 一台已安装并登录 WhatsApp 的手机 |
| 约5分钟 | 完成部署所需时间 |

### 第1步：创建 AI 员工并进入配置页面

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 创建新的 AI 员工，或选择已有实例
3. 点击员工卡片上的 **配置 →** 进入实例详情页

<img :src="withBase('/whatsapp-step1-dashboard.png')" alt="Dashboard 配置入口" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第2步：点击 WhatsApp「连接」，等待二维码生成

1. 在实例详情页的渠道列表中，找到 **WhatsApp** 卡片
2. 点击 **连接** 按钮
3. 系统将在后台准备 WhatsApp 会话，二维码需要 **几十秒** 生成，请耐心等待
4. 生成后，二维码每15秒自动刷新

<img :src="withBase('/whatsapp-step2-qr-code.png')" alt="WhatsApp 二维码" style="max-width: 520px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **注意：** 等待期间请勿关闭页面或重复点击，否则可能触发重复请求。

### 第3步：打开手机 WhatsApp，进入「已关联的设备」

1. 打开手机上的 **WhatsApp**
2. 点击右下角的 **自己**（个人头像）
3. 在设置列表中，点击 **已关联的设备**

<img :src="withBase('/whatsapp-step3-linked-devices.png')" alt="WhatsApp 关联设备" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

### 第4步：点击「关联设备」并扫描二维码

1. 在「关联设备」页面，点击底部的 **关联设备** 按钮
2. 手机摄像头打开——对准第2步中 Dashboard 显示的二维码扫描

<img :src="withBase('/whatsapp-step4-link-device.png')" alt="关联设备" style="max-width: 320px; width: 100%; border-radius: 8px; margin: 0.5rem 0;" />

> **提示：** 若二维码已过期，Dashboard 会自动刷新，扫描最新显示的二维码即可。

### 第5步：验证连接并管理聊天权限

扫码成功后，Dashboard 自动检测到连接，WhatsApp 卡片会显示为 **已连接（Connected）**。

#### 验证 Bot 是否正常工作

连接成功后，你就是该 Bot 的 Owner（管理员）。在 WhatsApp 中搜索自己的账号，给自己发一条消息，Bot 会自动回复你。

#### 让其他人与 Bot 聊天

默认只有 Owner 可以和 Bot 对话。如需允许其他人使用，有两种模式：

- **Allowlist 模式**：仅指定号码可对话
- **Open 模式**：所有人都可对话

可直接通过自然语言对 Bot 下指令：

- Allowlist 示例：`打开 allowlist 模式，将 +86 188xxxx8888 加入到列表中`
- Open 示例：`打开 open 模式，任何人都可以 DM 你`

> **注意：** WhatsApp 关联设备会在手机长时间离线后自动断开。断开后回到 Dashboard 重新扫码即可恢复。

---

## 选项H：Microsoft Teams 部署 {#ms-teams}

**预计耗时：15-20分钟**

> **说明：** Microsoft Teams 是企业广泛使用的 Microsoft 365 协作平台。部署需要创建 Azure Bot 资源、配置权限，并通过 Teams Developer Portal 发布应用。无需服务器或编程技能——Azure 免费层即可满足。

### 前提条件

与 Telegram、Lark 不同，部署 Microsoft Teams **之前**需要先准备好两项 Microsoft 账户条件：

| 前提条件 | 说明 |
|----------|------|
| **Microsoft 365 组织账户（工作/学校账户）** | Teams 需运行在 Microsoft Entra ID（Azure AD）租户上。个人版 Microsoft 账户无法使用——必须是可安装机器人的组织租户。 |
| **有效的 Azure 订阅** | 用于在第 1 步创建 Azure Bot 资源——**即使使用免费（F0）层级也同样需要**。Microsoft 365 账户**不等于** Azure 订阅：你可能已登录，却仍没有任何订阅。如果没有，请先开通[免费 Azure 订阅](https://azure.microsoft.com/free/)（按量付费亦可）再继续——否则第 1 步的 **创建资源 → Azure Bot** 将无法进行。 |

> **提示：** "Azure 免费层" 指的是机器人的 F0 计费层级——但资源本身仍需存放在一个 Azure 订阅中。开通订阅免费，F0 机器人层级也不收费。

对接 Microsoft Teams 需要 **4 个配置项**：

| 配置项 | 获取位置 | 说明 |
|--------|---------|------|
| App ID | Azure Bot → Configuration → Microsoft App ID | 标识你的机器人应用 |
| App Password | App Registration → Certificates & secrets → Secret Value | 认证你的机器人 |
| Tenant ID | Azure Bot → Configuration → Directory (tenant) ID | 你的组织租户标识 |
| App Catalog ID | Teams Developer Portal → Basic information → App ID | 在 Teams 目录中标识应用 |

### 第1步：创建 Azure Bot

1. 打开 [Azure Portal](https://portal.azure.com)，点击 **Create a resource**，搜索 **Azure Bot**
2. 点击 **Create** 并填写：
   - **Bot handle**：唯一名称（如 `coco-ai-employee`）
   - **Resource group**：选择已有的或创建新的
   - **Pricing tier**：F0（免费）
   - **Type of App**：Single Tenant
   - **Creation type**：Create new Microsoft App ID
3. 点击 **Review + create**，然后点击 **Create**
4. 部署完成后，点击 **Go to resource**

> **说明：** 创建 Azure Bot 会自动为你创建 App Registration——无需单独创建。

### 第2步：配置 Bot 并记录凭据

1. 在 Azure Bot 资源中，进入 **Configuration**
2. 设置 **Messaging endpoint** 为你的 AI 员工的 MS Teams webhook URL：
   ```
   https://<你的-agent-域名>/ms-teams/api/messages
   ```
   你可以在 COCO Dashboard 员工详情页的渠道列表中，**Microsoft Teams** 卡片上找到该 URL。复制并粘贴到此处。
3. 记下 **Microsoft App ID**（即你的 **App ID**）和 **App Tenant ID**（即你的 **Tenant ID**）
4. 点击 **Apply**
5. 进入左侧 **Channels**，点击 **Microsoft Teams**，接受条款后点击 **Apply** 以启用 Teams 渠道

> **重要：** 必须在 Azure Bot 资源上启用 Teams 渠道。否则用户尝试与 Bot 聊天时，Teams 会显示"Invalid Bot"错误。

### 第3步：创建 Client Secret（客户端密钥）

1. 在 Configuration 页面，点击 **Manage Password** — 会跳转到 App Registration 页面
2. 进入 **Certificates & secrets**
3. 点击 **New client secret**
4. 输入描述（如 `COCO Bot Secret`），选择过期时间
5. 点击 **Add**
6. **立即复制 Secret 的 Value** — 离开此页面后无法再次查看

> **注意：** 客户端密钥仅在创建时显示一次，请立即安全保存。这就是你的 **App Password**。

### 第4步：配置 Graph API 权限

无需逐个搜索添加权限，可以通过 Manifest 编辑器一次性粘贴全部权限。

1. 在 App Registration 页面（第3步完成后应已在此页面），进入 **Manifest** 标签页
2. 选择顶部的 **Microsoft Graph App Manifest (New)** 标签
3. 找到 `"requiredResourceAccess": []`，仅将 `[]` 替换为以下数组：

```json
[
  {
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
      { "id": "01d4889c-1287-42c6-ac1f-5d1e02578ef6", "type": "Role" },
      { "id": "6b7d71aa-70aa-4810-a8d9-5d9fb2830017", "type": "Role" },
      { "id": "7b2449af-6ccd-4f4d-9f78-e550c193f0d1", "type": "Role" },
      { "id": "df021288-bdef-4463-88db-98f22de89214", "type": "Role" },
      { "id": "9ff7295e-131b-4d94-90e1-69fde507ac11", "type": "Scope" },
      { "id": "ebf0f66e-9fb1-49e4-a278-222f76911cf4", "type": "Scope" },
      { "id": "767156cb-16ae-4d10-8f8b-41b657c8c8c8", "type": "Scope" },
      { "id": "df85f4d6-205c-4ac5-a5ea-6bf408dba283", "type": "Scope" },
      { "id": "7427e0e9-2fba-42fe-b0c0-848c9e6a8182", "type": "Scope" }
    ]
  }
]
```

4. 点击页面顶部的 **Save** 保存

> **注意：** 仅替换 `"requiredResourceAccess":` 后面的空 `[]` — 不要替换包含键名的整行。

这会一次性添加全部 9 项权限：

| 权限 | 类型 | 用途 |
|------|------|------|
| `Files.Read.All` | 应用程序 | 从 OneDrive/SharePoint 下载文件 |
| `Chat.Read.All` | 应用程序 | 读取私聊和群聊历史记录 |
| `ChannelMessage.Read.All` | 应用程序 | 读取团队频道消息历史 |
| `User.Read.All` | 应用程序 | 解析用户提及和搜索用户 |
| `Chat.ReadWrite` | 委托 | 代表用户读取和发送聊天消息 |
| `ChannelMessage.Send` | 委托 | 代表用户发送频道消息 |
| `ChannelMessage.Read.All` | 委托 | 代表用户读取频道消息 |
| `Files.Read.All` | 委托 | 访问用户有权访问的文件 |
| `offline_access` | 委托 | 在用户未主动登录时保持访问权限 |

#### 授予管理员同意

保存 Manifest 后，进入 **API permissions** 页面，点击 **Grant admin consent for [你的组织]** 并确认。全部 9 项权限应显示绿色勾号。

> **注意：** 必须获得管理员同意。否则文件下载、聊天历史、表情回应和智能模式功能将无法使用。

### 第5步：在 Teams Developer Portal 中创建应用

1. 打开 [Teams Developer Portal](https://dev.teams.microsoft.com) 并登录
2. 点击左侧 **Apps**，然后点击 **+ New app**
3. 输入应用名称（如 `COCO AI Employee`）
4. 在 **Basic information** 中，记下顶部显示的 **App ID** — 这就是你的 **App Catalog ID**（连接 COCO Dashboard 时需要）
5. 填写必填字段：
   - **Short description**：如 `AI 智能数字员工`
   - **Long description**：如 `COCO AI 员工，帮助团队处理写作、研究、翻译、数据分析和日常任务——直接在 Microsoft Teams 中使用。`
   - **Developer name**：如 `COCO`
   - **Website**：`https://icoco.ai`
   - **Privacy policy**：`https://docs.icoco.ai/privacy-policy`
   - **Terms of use**：`https://docs.icoco.ai/user-agreement`
6. 点击 **Save**

### 第6步：配置应用 Manifest

1. 在 Teams Developer Portal 中，进入你的应用的 **App package** → **App package editor**
2. 粘贴以下 manifest JSON，将两个占位符替换为你的实际值：
   - 将 `<TEAMS_APP_ID>`（1 处）替换为第5步的 **App ID**（App Catalog ID）
   - 将 `<AZURE_APP_ID>`（2 处）替换为第2步的 **App ID**（Azure App Registration ID）

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.19/MicrosoftTeams.schema.json",
  "version": "1.0.0",
  "manifestVersion": "1.19",
  "id": "<TEAMS_APP_ID>",
  "name": { "short": "COCO AI Employee" },
  "developer": {
    "name": "COCO",
    "websiteUrl": "https://icoco.ai",
    "privacyUrl": "https://docs.icoco.ai/privacy-policy",
    "termsOfUseUrl": "https://docs.icoco.ai/user-agreement"
  },
  "description": {
    "short": "AI-powered digital employee",
    "full": "COCO AI employee that helps your team with writing, research, translation, data analysis, and daily tasks — right inside Microsoft Teams."
  },
  "icons": { "outline": "outline.png", "color": "color.png" },
  "accentColor": "#FFD646",
  "bots": [{
    "botId": "<AZURE_APP_ID>",
    "scopes": ["personal", "team", "groupChat"],
    "isNotificationOnly": false,
    "supportsCalling": false,
    "supportsVideo": false,
    "supportsFiles": true
  }],
  "permissions": ["messageTeamMembers"],
  "validDomains": [],
  "webApplicationInfo": {
    "id": "<AZURE_APP_ID>",
    "resource": "https://graph.microsoft.com"
  },
  "authorization": {
    "permissions": {
      "resourceSpecific": [
        { "name": "ChatMessage.Read.Chat", "type": "Application" },
        { "name": "ChannelMessage.Read.Group", "type": "Application" }
      ]
    }
  }
}
```

3. 点击编辑器顶部的 **Save**
4. 返回 **App package editor** 页面，点击 **Update** 按钮以应用更改

> **关于占位符：** Manifest 中有两个不同的 ID。`<TEAMS_APP_ID>` 是 Teams Developer Portal 的 App ID（第5步）——在 `id` 字段中出现1次。`<AZURE_APP_ID>` 是 Azure 的 App ID（第2步）——出现在 `botId` 和 `webApplicationInfo.id` 中。

### 第7步：上传应用图标（可选）

1. 在 Teams Developer Portal 中，进入你的应用的 **Branding** 部分
2. 上传应用图标：
   - **Color icon**：192x192 PNG
   - **Outline icon**：32x32 透明背景 PNG
3. 点击 **Save**

> **提示：** 如果跳过此步骤，Teams 将使用默认占位图标。

### 第8步：发布应用

有两种方式分发应用：

**方式 A — 发布到组织：**
1. 在 Teams Developer Portal 中，进入 **Distribute** → **Publish to org**
2. 提交应用以待管理员审批
3. 管理员需在 [Teams 管理中心](https://admin.teams.microsoft.com) → **Manage apps** 中批准应用
4. 批准后，用户需要**重启 Microsoft Teams** 才能看到新应用

**方式 B — 通过应用包侧载（适用于管理员）：**
1. 在 Teams Developer Portal 中，点击 **Download app package** 下载 `.zip` 文件
2. 在 Microsoft Teams 中，进入 **Apps** → **Manage your apps** → **Upload a custom app**
3. 选择下载的 `.zip` 文件

### 第9步：在 COCO Dashboard 中连接

> **重要：** 此步骤必须**最后**完成——需要全部 4 个配置项。

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 进入员工实例详情页
3. 找到 **Microsoft Teams** 卡片并点击 **连接**
4. 输入以下凭据：

| 字段 | 来源 |
|------|------|
| App ID | Azure Bot → Configuration → Microsoft App ID（第2步） |
| App Password | App Registration → Client Secret Value（第3步） |
| App Catalog ID | Teams Developer Portal → Basic information → App ID（第5步） |
| Tenant ID | Azure Bot → Configuration → App Tenant ID（第2步） |

5. 点击 **连接** — 系统将验证凭据并部署渠道

### 第10步：开始聊天

1. 在 Teams 中搜索你的应用名称（如 `COCO AI Employee`）
2. 点击即可开始私聊对话
3. 发送任何消息 — AI 员工即时响应
4. 部署完成！

> **提示：** 如需在群聊或团队频道中使用，将机器人添加到团队或群聊中，然后 @mention 即可触发回复。

### Microsoft Teams 常见问题

| 问题 | 解决方案 |
|------|---------|
| 机器人不响应 | 确认 Azure Bot Configuration 中的 Messaging endpoint 设置正确，检查凭据（App ID、App Password）是否匹配 |
| 凭据验证失败 | 确认 App Password 使用的是 **Value**（非 Secret ID）。确认 Tenant ID 正确 |
| Teams 中看不到机器人 | 应用必须已发布并获批准（或侧载安装）。检查 manifest 中的 Azure App ID 是否与 App Registration 一致 |
| 管理员批准后仍看不到应用 | 重启 Microsoft Teams 客户端以加载新批准的应用 |
| 消息未送达机器人 | 确认 Messaging endpoint URL 为 HTTPS 且可公开访问。检查 Azure Bot 资源是否处于正常状态 |
| 文件下载失败 | 确认 Azure Portal → App Registration → API permissions 中 `Files.Read.All` 已获得管理员同意 |
| 智能模式不生效 | 确认 `ChannelMessage.Read.All` 已获得管理员同意，且频道已设置为智能模式 |
| 客户端密钥过期 | Azure 客户端密钥会按你设置的时间过期。创建新密钥并在 COCO Dashboard 中更新 App Password |
| 想要断开连接 | 在员工详情页的 Microsoft Teams 卡片上点击 **断开连接** 按钮 |

---

## 选项I：Zalo (官方) 部署 {#zalo}

**预计耗时：约5分钟**

> **说明：** Zalo (官方) 通过官方 [Zalo Bot Platform](https://bot.zaloplatforms.com) API 连接。只需一个个人 Zalo 账号——无需注册官方账号（OA）、无需服务器、无需编程技能。

只需 **1 个配置项**：

| 配置项 | 获取位置 | 说明 |
|--------|---------|------|
| Bot Token | Zalo Bot Platform → Bot 详情页 | Bot 的唯一凭证（格式：`数字ID:密钥`） |

### 第1步：在 Zalo Bot Platform 创建 Bot

1. 访问 [Zalo Bot Platform](https://bot.zaloplatforms.com) 并用你的 Zalo 账号登录
2. 点击 **Create Bot**（创建 Bot）
3. 输入 Bot 名称（例如 `COCO AI`）和描述
4. 创建完成后，你会看到 **Bot Token**（格式：`数字ID:密钥`）
5. **复制并保存此 Token** — 下一步会用到

> **重要：** Bot Token 是你的 Bot 的唯一凭证，请勿分享给他人。

### 第2步：在 COCO Dashboard 中连接

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 进入员工实例详情页
3. 找到 **Zalo (官方)** 卡片，点击 **Connect**（连接）
4. 粘贴第1步获取的 **Bot Token**
5. 点击 **Connect** — 系统将验证 Token 并完成连接

### 第3步：开始聊天

1. 在手机或电脑上打开 Zalo
2. 搜索你的 Bot 名称
3. 发送任意消息 — AI 员工立即回复
4. 部署完成！

> **首条消息：** 第一个给 Bot 发送私聊消息的用户将成为 **Owner**（管理员）。Owner 始终拥有完整访问权限，不受策略设置限制。

### Zalo (官方) 常见问题

| 问题 | 解决方案 |
|------|----------|
| Bot 不回复 | 检查 Bot Token 是否正确。在 COCO Dashboard 中确认连接状态 |
| 无法发送图片给 Bot | 确保图片小于 10 MB。支持格式：JPG、PNG |
| Bot 发送的图片不显示 | 发出的图片必须托管在公开可访问的 HTTPS URL 上 |
| 其他人无法和 Bot 聊天 | 默认只有 Owner 可以聊天。通过 Dashboard 设置将访问策略改为 Allowlist 或 Open 模式 |
| 想要断开连接 | 在员工详情页的 Zalo (官方) 卡片上点击 **断开连接** 按钮 |

---

## 选项J：Zalo 个人版（非官方） 部署 {#zalo-personal}

**预计耗时：约2分钟**

> **说明：** Zalo 个人版（非官方） 通过二维码扫描使用真实 Zalo 账号连接——无需注册 Bot、无需 API 密钥、无需开发者账号。它通过 [zca-js](https://github.com/nicenathapong/zca-js)（逆向工程协议库）实现连接。

::: warning 非官方协议
Zalo 个人版（非官方） 使用的是非官方的逆向工程协议（zca-js），**未经 Zalo/VNG 官方认可**。你的账号可能会被 Zalo 限制或封禁。**使用风险自负。** 如需官方集成，请使用 [Zalo Bot Platform](#zalo)。
:::

::: warning 请使用专用 Zalo 账号
请使用一个**独立的、专门用于 Bot 的 Zalo 账号**——**不要**使用与 COCO agent 对话的用户相同的账号。连接的账号将成为 Bot 的身份，因此必须与任何要与其交互的用户账号不同。
:::

无需填写凭证。认证完全通过二维码完成：

| 所需项目 | 说明 |
|----------|------|
| COCO AI 员工 | 已有至少一个渠道连接的 AI 员工（如 Telegram、飞书、WhatsApp） |
| 专用 Zalo 账号 | 一台已安装并登录**独立账号**的手机——不能与用户联系 COCO agent 使用的账号相同 |
| 约2分钟 | 完成部署所需时间 |

### 第1步：让你的 AI 员工安装 Zalo 个人版（非官方）

在任何已连接的渠道（Telegram、飞书、WhatsApp 等）中，给你的 AI 员工发送消息：

> "安装 Zalo 个人版（非官方） 渠道"

AI 员工会自动安装 Zalo 个人版（非官方） 组件并生成二维码，通过聊天发送给你。

### 第2步：使用专用 Zalo 账号扫描二维码

1. 打开已登录**专用 Bot 账号**的手机上的 **Zalo**（不是你的个人账号）
2. 点击 **二维码扫描器**（通常在首页右上角或搜索栏中）
3. 将手机摄像头对准 AI 员工发送给你的二维码
4. 在手机上确认登录

### 第3步：连接确认

AI 员工会确认连接已建立。你的专用 Zalo 账号现在是 Bot 在 Zalo 上的身份。

### 第4步：开始聊天

1. 任何给你的专用 Bot Zalo 账号发送消息的人都会收到 AI 自动回复
2. 部署完成！

> **首条消息：** 第一个发送私聊消息的用户将成为 **Owner**（管理员）。Owner 始终拥有完整访问权限，不受策略设置限制。

### Zalo 个人版（非官方） 常见问题

| 问题 | 解决方案 |
|------|----------|
| 二维码过期未扫描 | 让 AI 员工重新生成二维码（如："重新连接 Zalo 个人版（非官方）"） |
| 连接一段时间后断开 | Zalo 可能会断开长时间运行的会话。让 AI 员工重新连接（如："重新连接 Zalo 个人版（非官方）"） |
| 账号收到警告或被限制 | 此功能使用非官方协议。如果收到 Zalo 的警告，请停止使用该集成，考虑切换到官方的 [Zalo Bot Platform](#zalo) |
| 其他人无法和 Bot 聊天 | 默认只有 Owner 可以聊天。让 AI 员工启用 Allowlist 或 Open 模式以开放访问权限 |
| 想要断开连接 | 让 AI 员工断开 Zalo 个人版（非官方） 渠道（如："断开 Zalo 个人版（非官方）"） |

---

## 选项K：Discord 部署 {#discord}

**预计耗时：约8分钟**

> **说明：** Discord 通过 Gateway（WebSocket）连接——无需公网回调地址或 Webhook。你只需要在 Discord 开发者门户获取一个 Bot Token。

只需 **1 个配置项**：

| 配置项 | 格式 | 说明 |
|--------|------|------|
| Bot Token | 一串不透明的长令牌字符串 | 用于在 Discord Gateway 上对你的 Bot 进行身份验证 |

### 第1步：创建 Discord 应用

1. 访问 [Discord 开发者门户](https://discord.com/developers/applications) 并登录
2. 点击页面右上角的 **New Application**
3. 输入名称（例如 `COCO AI Employee`），点击 **Create** 完成创建

### 第2步：添加 Bot 并复制 Token

1. 在左侧导航栏，进入 **Bot** 标签页
2. 点击 **Reset Token**（如有提示则点击 **Add Bot**），并确认
3. 复制 **Bot Token** 并妥善保存

> **重要：** Bot Token 仅显示一次。如果丢失，需要重置并复制新的 Token。

### 第3步：启用 Message Content Intent（必需）

1. 仍在 **Bot** 标签页，下拉至 **Privileged Gateway Intents**
2. 将 **Message Content Intent** 开关打开
3. 保存更改

> **重要：** 未启用 Message Content Intent 时，Bot 收到的消息文本为空，无法读取用户发送的内容。

### 第4步：将 Bot 邀请到你的服务器

1. 在左侧导航栏，进入 **OAuth2** → **URL Generator**
2. 在 **Scopes** 下，勾选 **`bot`**
3. 在 **Bot Permissions** 下，勾选：
   - **View Channels**（查看频道）
   - **Send Messages**（发送消息）
   - **Read Message History**（读取消息历史）
   - **Attach Files**（上传文件）
   - **Add Reactions**（添加表情回复）
4. 复制页面底部生成的 URL，并在浏览器中打开
5. 选择要添加 Bot 的服务器，然后点击 **Authorize**（授权）

> **说明：** 私信无需服务器邀请——只有在服务器/频道中使用时才需要邀请进服务器。

### 第5步：在 COCO Dashboard 中连接

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 进入员工实例详情页
3. 找到 **Discord** 卡片，点击 **Connect**（连接）
4. 粘贴第2步获取的 **Bot Token**
5. 点击 **Connect** — 系统将验证 Token 并完成连接

### 第6步：开始聊天

1. 直接私信 Bot，或在服务器频道中 @mention 它
2. 发送任意消息 — AI 员工立即回复
3. 部署完成！

> **首条消息：** 第一个给 Bot 发送私聊消息的用户将成为 **Owner**（管理员）。Owner 始终拥有完整访问权限，不受策略设置限制。

### Discord 常见问题

| 问题 | 解决方案 |
|------|----------|
| Bot 离线 | 确认 Bot Token 正确，并已在 Discord 开发者门户中启用 Message Content Intent |
| 服务器频道中无回复 | 确认 Bot 已被邀请进服务器、在该频道中拥有查看和发送消息的权限，并已被 @mention |
| Bot 收到空消息或无消息文本 | 在 Discord 开发者门户的 Bot 标签页中启用 **Message Content Intent** |
| 想要断开连接 | 在员工详情页的 Discord 卡片上点击 **断开连接** 按钮 |

---

## 选项L：LINE 部署 {#line}

**预计耗时：5-10分钟**

LINE 通过两个凭证连接——**Channel Access Token**（通道访问令牌）和 **Channel Secret**（通道密钥）——外加一个由 Dashboard 自动生成的 **Webhook URL**。无需数字 Channel ID。

#### 第1步：创建 LINE 官方账号并启用 Messaging API

1. 进入 [LINE 官方账号管理后台](https://manager.line.biz/)，创建（或打开）一个官方账号。
2. 打开 **设置 → Messaging API**，点击 **启用 Messaging API**，按提示选择或创建一个 Provider 并同意条款。
3. 这会在 [LINE Developers Console](https://developers.line.biz/console/) 中创建一个 Messaging API 通道。

#### 第2步：获取凭证

1. 在 [LINE Developers Console](https://developers.line.biz/console/) 中打开你的 Provider → 对应通道。
2. **Channel secret（通道密钥）**——在 **Basic settings** 标签页复制（OA 管理后台的 Messaging API 页面也会显示）。
3. **Channel access token（长期令牌）**——打开 **Messaging API** 标签页，滚动到 **Channel access token**，点击 **Issue（签发）** 并复制令牌。

> **重要：** 两个值都是密钥，请勿泄露。数字 Channel ID **不需要**。

#### 第3步：在 COCO Dashboard 绑定

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)，进入员工实例详情页（或雇佣流程中的 **对话入口** 步骤）。
2. 找到 **LINE** 卡片，点击 **连接**。
3. 粘贴第2步获取的 **Channel Access Token** 和 **Channel Secret**。
4. 点击 **连接**——系统会验证令牌并部署你的 LINE 通道。
5. 连接成功后，卡片会显示一个 **Webhook URL**（例如 `https://<你的子域名>.icoco.ai/line/webhook`）。**复制它。**

#### 第4步：在 LINE 中配置 Webhook

1. 回到 LINE Developers Console → **Messaging API** 标签页 → **Webhook settings**。
2. 粘贴第3步的 **Webhook URL** 并点击 **Save（保存）**，然后开启 **Use webhook（使用 Webhook）**。
3. 在 LINE 官方账号管理后台 → **设置 → 回复设置** 中：开启 **Webhooks**，关闭 **自动回复消息**——这样由你的 AI 员工（而非 LINE 的自动回复）来处理消息。

#### 第5步：开始聊天

1. 将你的官方账号加为好友——在 OA 管理后台扫描其二维码，或搜索其 Basic ID（例如 `@xxxxxxx`）。
2. 发送任意消息，AI 员工会立即响应。
3. 部署完成！

> **首条消息：** 第一个给该账号发私信的用户会成为 **Owner（管理员）**，无论权限设置如何始终拥有完全访问权限。

#### LINE 常见问题

| 问题 | 解决方案 |
|------|---------|
| Bot 无响应 | 确认已开启 **Use webhook**，且保存的 Webhook URL 与 LINE 卡片上显示的完全一致（包含 `/line/webhook`），并已关闭 **自动回复消息** |
| 已连接但收不到消息 | 确认 OA 管理后台 → 回复设置中已开启 **Webhooks**，并已将官方账号加为好友 |
| 收到消息但不回复 | Channel Access Token 可能失效或被重新签发——在 Developers Console 重新签发长期令牌并重新连接 |
| 发送图片/视频/语音/文件 | 开箱即用——在聊天中发送即可，AI 员工能读取（语音会自动转写） |
| 想要断开连接 | 在员工详情页的 LINE 卡片上点击 **断开连接** 按钮 |

<!-- 已注释：之前基于 Dashboard 的设置流程（已替换为上方的 AI 员工引导流程——Zalo 个人版（非官方） 不再通过 COCO Dashboard 界面配置）

无需填写凭证。认证完全通过二维码完成：

| 所需项目 | 说明 |
|----------|------|
| COCO AI 员工 | COCO Dashboard 中已创建的实例 |
| 专用 Zalo 账号 | 一台已安装并登录**独立账号**的手机——不能与用户联系 COCO agent 使用的账号相同 |
| 约2分钟 | 完成部署所需时间 |

### 第1步：点击 Zalo 个人版（非官方） 卡片的「连接」

1. 登录 [COCO Dashboard](https://icoco.ai/dashboard)
2. 进入员工实例详情页
3. 找到 **Zalo 个人版（非官方）** 卡片，点击 **连接**
4. 系统将生成二维码——可能需要几秒钟

### 第2步：使用专用 Zalo 账号扫描二维码

1. 打开已登录**专用 Bot 账号**的手机上的 **Zalo**（不是你的个人账号）
2. 点击 **二维码扫描器**（通常在首页右上角或搜索栏中）
3. 将手机摄像头对准 Dashboard 上显示的二维码
4. 在手机上确认登录

### 第3步：等待连接确认

1. 扫码成功后，Dashboard 自动检测到连接——Zalo 个人版（非官方） 卡片显示为 **已连接（Connected）**
2. 连接已通过你的专用 Zalo 账号建立

### 第4步：开始聊天

1. 任何给你的专用 Bot Zalo 账号发送消息的人都会收到 AI 自动回复
2. 部署完成！

> **首条消息：** 第一个发送私聊消息的用户将成为 **Owner**（管理员）。Owner 始终拥有完整访问权限，不受策略设置限制。

### Zalo 个人版（非官方） 常见问题

| 问题 | 解决方案 |
|------|----------|
| 二维码过期未扫描 | 二维码有时间限制。重新点击 **连接** 生成新的二维码 |
| 连接一段时间后断开 | Zalo 可能会断开长时间运行的会话。返回 Dashboard 重新扫码即可恢复连接 |
| 账号收到警告或被限制 | 此功能使用非官方协议。如果收到 Zalo 的警告，请停止使用该集成，考虑切换到官方的 [Zalo Bot Platform](#zalo) |
| 其他人无法和 Bot 聊天 | 默认只有 Owner 可以聊天。启用 Allowlist 或 Open 模式以开放访问权限 |
| 想要断开连接 | 在员工详情页的 Zalo 个人版（非官方） 卡片上点击 **断开连接** 按钮 |

-->
