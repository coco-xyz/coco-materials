# 钉钉 — 一个 Agent 连接多个组织

## 需求场景

企业客户在多个钉钉组织中运营，希望用一个 COCO AI Agent 同时服务多个组织，无需为每个组织分别购买和部署。

## 操作步骤

### 第一步：升级钉钉组件

在 Web Console 中发送：

```
升级 dingtalk 组件
```

确保 dingtalk 组件版本 ≥ v0.1.3（该版本支持服务自定义端口）。

![升级钉钉组件](./images/dingtalk-upgrade.png)

### 第二步：在钉钉开发者平台创建应用

1. 登录 [钉钉开发者平台](https://open.dingtalk.com/)
2. 切换到第二个组织

![切换组织](./images/dingtalk-switch-org.png)

3. 创建应用（步骤与[部署指南](/zh/getting-started/channel-deployment#dingtalk)相同）

![创建应用](./images/dingtalk-create-app.png)

### 第三步：配置新实例

1. 在 Web Console 中发送「现在通过独立运行新的zylos-dingtalk的方式接入新钉钉组织」

![发送接入请求](./images/dingtalk-webconsole-msg.png)

2. 待 Bot 回复后，继续发送新创建的应用凭证信息（详情可见[钉钉部署指南](/zh/getting-started/channel-deployment#dingtalk)）：

```
App Key：
App Secret：
Robot Code：
实例命名：
```

![发送凭证信息](./images/dingtalk-credentials.png)

3. Bot 会自动创建并启动新的钉钉实例。

### 第四步：测试

1. 在钉钉客户端切换到对应组织
2. 搜索你设定的实例名称
3. 发送消息测试，确认 Bot 正常响应

![测试结果](./images/dingtalk-test-result.png)

## 注意事项

- 每个组织对应一个独立运行的 dingtalk 实例，互不影响
- 所有实例共享同一个 AI Agent 的记忆和能力
