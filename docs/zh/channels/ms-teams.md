# Microsoft Teams — 使用技巧

在 Microsoft Teams 上使用 COCO AI 员工，适用于企业协作、团队频道和 Microsoft 365 工作流。

## 基本使用

### 私信
直接向机器人发送消息，私聊中无需 @mention——打开与机器人的对话即可开始。

### 群聊与团队频道
在群聊或团队频道中 @mention 机器人：
```
@COCO AI Employee 总结一下昨天的讨论
```

## 适用场景

### 企业知识助手
在团队频道中部署，随时获取企业知识：
- 回答政策和流程相关问题
- 总结长对话和会议纪要
- 按需撰写文档和报告

### 跨团队协作
在群聊和频道中：
- @mention 机器人获取会议纪要
- 为国际团队成员翻译消息
- 无需离开 Teams 即可查询数据和生成报告

### Microsoft 365 集成
Teams 与 Microsoft 365 生态深度整合，适合：
- 已在使用 Outlook、SharePoint 和 OneDrive 的组织
- 使用 Azure AD / Entra ID 的企业环境
- 有合规和治理要求的团队

## 进阶技巧

**智能模式**：在群聊和频道中启用智能模式——机器人接收所有消息并根据上下文决定何时响应，无需每次都 @mention。

**文件共享**：直接在聊天中分享图片、PDF、Word 文档等文件。机器人可以读取、分析并回复文件内容。OneDrive 和 SharePoint 中的文件通过 Graph API 自动下载。

**表情回复**：机器人会在收到消息时添加 💬 表情作为处理指示器，处理完成后移除。

**语音消息**：在 Teams 中发送语音消息——在语音转写可用时，机器人会转录并回复。

**消息线程**：机器人支持回复线程，在繁忙的频道中保持对话有序。

## 故障排除

| 问题 | 解决方案 |
|------|---------|
| 机器人不响应 | 确认 Azure Bot 配置中的 Messaging endpoint 设置正确，检查 App ID 和 App Password 是否匹配 |
| Teams 中看不到机器人 | 确认 Teams App Manifest 已安装（侧载或管理员部署），验证 manifest.json 中的 App ID 与 Azure App Registration 一致 |
| 消息未送达机器人 | 确认 Messaging endpoint URL 为 HTTPS 且可公开访问，检查 Azure Bot 资源状态是否正常 |
| 文件下载失败 | 确认 Azure Portal 中 `Files.Read.All` 权限已获得管理员同意 |
| 智能模式不生效 | 确认 `ChannelMessage.Read.All` 已获得管理员同意，确保频道已设置为智能模式 |
| 凭据验证失败 | 确认 App Password 使用的是 **Value**（非 Secret ID）。单租户机器人请确认 Tenant ID 正确 |
| DM 中没有 💬 反应 | 未配置 App Catalog ID。请参阅部署指南第8步 |
| 想要断开连接 | 在员工详情页的 Microsoft Teams 卡片上点击 **断开连接** 按钮 |
