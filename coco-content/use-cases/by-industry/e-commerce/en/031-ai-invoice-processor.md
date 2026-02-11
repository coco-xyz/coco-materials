# Use Case #031: AI Invoice Processor

**Role**: Accounts Payable Clerk / AP Manager / Finance Operations | **Industry**: Any Enterprise, Manufacturing, Retail, Healthcare | **Task**: Invoice Processing, PO Matching, Payment Scheduling, AP Automation

---

## Part 1: Social Media Copy

### English

Our AP department processed 3,400 invoices per month. Each one: receive the invoice (email, mail, portal), enter it into the system, match to PO, verify quantities and pricing, code to GL accounts, route for approval, schedule payment. Average processing time: 14 minutes per invoice. Error rate: 8.3%. Late payment penalty fees: $23,000 last year.

The invoices arrived in every imaginable format: PDFs attached to emails, scanned paper documents, supplier portal downloads, photos of receipts taken on phones. Three of our four AP clerks spent their entire day on data entry and matching. The fourth spent her day chasing approvals and resolving discrepancies.

COCO's AI Invoice Processor turned our AP team from data entry operators into financial controllers:
- Reads invoices in any format (PDF, image, email body, XML) and extracts all fields automatically
- Matches to purchase orders with fuzzy matching (catches "Widget Corp" vs "Widget Corporation Inc.")
- 3-way match: PO, invoice, and goods receipt -- flags discrepancies at the line-item level
- Auto-codes GL accounts based on vendor, category, and historical patterns
- Routes for approval based on amount thresholds and department rules
- Schedules payments to optimize early payment discounts vs. cash flow

Processing time per invoice: from 14 minutes to 45 seconds. Error rate: from 8.3% to 0.6%. Late payment penalties: from $23K to under $2K. The team now manages vendor relationships and cash flow strategy.

### 中文

我们的应付账款部门每月处理3400张发票。每一张：接收发票（邮件、信件、门户）、录入系统、匹配采购订单、验证数量和价格、编码总账科目、路由审批、安排付款。平均处理时间：每张14分钟。错误率：8.3%。逾期付款罚金：去年23000美元。

发票以各种能想到的格式到达：邮件附件的PDF、扫描的纸质文件、供应商门户下载、手机拍的收据照片。四个AP文员中三个整天在做数据录入和匹配。第四个整天在追审批和解决差异。

COCO的AI Invoice Processor将我们的AP团队从数据录入员转变为财务管理者：
- 读取任何格式的发票（PDF、图片、邮件正文、XML）并自动提取所有字段
- 与采购订单进行模糊匹配（识别"Widget Corp"和"Widget Corporation Inc."是同一家）
- 三向匹配：采购订单、发票和收货单——在明细行级别标记差异
- 基于供应商、类别和历史模式自动编码总账科目
- 基于金额阈值和部门规则路由审批
- 安排付款以优化早期付款折扣vs现金流

每张发票处理时间：从14分钟降至45秒。错误率：从8.3%降至0.6%。逾期付款罚金：从23K降至不到2K美元。团队现在管理供应商关系和现金流策略。

---

## Part 2: Detailed Introduction

### English

**The Pain: AP Is the Most Labor-Intensive Function in Finance**

Accounts payable processing is among the most repetitive, error-prone, and underappreciated functions in any organization. The Institute of Financial Operations estimates that manual invoice processing costs $12-15 per invoice when you factor in labor, errors, late fees, and lost early payment discounts.

For a mid-size company processing 3,000+ invoices monthly, that's $36,000-45,000 per month in processing costs alone. The errors -- duplicate payments, incorrect amounts, wrong GL coding -- add another layer of cost through rework, vendor disputes, and audit findings.

**How COCO Solves It**

COCO's AI Invoice Processor automates the entire AP workflow from receipt to payment.

1. **Intelligent Document Processing**: Reads invoices in any format using OCR and NLP. Extracts vendor name, invoice number, date, line items, quantities, unit prices, tax, and total.

2. **Automated PO Matching**: Fuzzy-matches invoices to purchase orders, handling variations in vendor names, partial deliveries, and line-item splits.

3. **Three-Way Match**: Compares PO, invoice, and goods receipt. Flags discrepancies at the line-item level with specific details.

4. **GL Account Coding**: Auto-assigns GL codes based on vendor, expense category, department, and historical coding patterns.

5. **Approval Routing**: Routes invoices based on configurable rules: amount thresholds, department, expense type, and special approval requirements.

6. **Payment Optimization**: Schedules payments to capture early payment discounts while maintaining cash flow targets.

**Measurable Results**

- **Processing time per invoice**: From 14 minutes to 45 seconds (95% reduction)
- **Error rate**: From 8.3% to 0.6%
- **Late payment penalties**: From $23K to under $2K annually
- **Early payment discounts captured**: +$47K/year (previously missed)
- **AP staff time freed**: 75% of processing time reallocated to strategic work
- **Duplicate payment prevention**: 100% detection rate

---

## Part 3: Practical Prompts

### English

**Prompt 1: Invoice Data Extraction**
```
Extract structured data from this invoice for entry into our AP system.

Invoice:
[paste invoice text or describe the invoice content]

Extract:
1. Vendor name and address
2. Invoice number and date
3. PO number (if referenced)
4. Line items: description, quantity, unit price, line total
5. Subtotal, tax amount, total due
6. Payment terms
7. Bank/payment details

Format as a structured table ready for system entry. Flag any fields that are ambiguous or missing.
```

**Prompt 2: Invoice Exception Resolution**
```
Help resolve these invoice exceptions from our 3-way match process.

Exception 1:
- PO: [X units at $Y each]
- Invoice: [Z units at $W each]
- Goods receipt: [A units received]
- Discrepancy: [describe]

Exception 2:
[...continue]

For each exception:
1. What's the discrepancy?
2. Most likely cause (pricing error, partial shipment, tax calculation, quantity mismatch)
3. Recommended resolution (pay as invoiced, adjust to PO, request credit memo, partial payment)
4. Communication template for vendor if needed
5. GL adjustment entry if applicable
```

### 中文

**提示词 1: 发票数据提取**
```
从这张发票中提取结构化数据以录入我们的AP系统。

发票：
[粘贴发票文本或描述发票内容]

提取：
1. 供应商名称和地址
2. 发票号码和日期
3. 采购订单号（如有引用）
4. 明细行：描述、数量、单价、行合计
5. 小计、税额、应付总额
6. 付款条款
7. 银行/付款详情

格式化为可直接录入系统的结构化表格。标记任何模糊或缺失的字段。
```

**提示词 2: 发票异常解决**
```
帮助解决我们三向匹配流程中的这些发票异常。

异常1：
- 采购订单：[X数量，每个$Y]
- 发票：[Z数量，每个$W]
- 收货单：[已收A数量]
- 差异：[描述]

异常2：
[...继续]

对每个异常：
1. 差异是什么？
2. 最可能的原因（价格错误、部分发货、税额计算、数量不匹配）
3. 建议解决方案（按发票付款、调整为PO金额、请求贷项凭证、部分付款）
4. 如需联系供应商的沟通模板
5. 如适用的总账调整分录
```
