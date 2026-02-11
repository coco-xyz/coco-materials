# Use Case #031: AI Invoice Processor

**Role**: Accounts Payable Clerk / AP Manager / Finance Operations | **Industry**: Any Enterprise, Manufacturing, Retail, Healthcare | **Task**: Invoice Processing, PO Matching, Payment Scheduling, AP Automation

---

## Social Media Copy

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

---

## Detailed Introduction

**The Pain: AP Is the Most Labor-Intensive Function in Finance**

Accounts payable processing is among the most repetitive, error-prone, and underappreciated functions in any organization. The Institute of Financial Operations estimates that manual invoice processing costs $12-15 per invoice when you factor in labor, errors, late fees, and lost early payment discounts.

For a mid-size company processing 3,000+ invoices monthly, that's $36,000-45,000 per month in processing costs alone. The errors -- duplicate payments, incorrect amounts, wrong GL coding -- add another layer of cost through rework, vendor disputes, and audit findings.

The format problem makes automation seem impossible. Invoices arrive via email (PDF attachments), postal mail (scanned paper), supplier portals (various export formats), and increasingly, photos taken on phones. Each vendor has a different layout, terminology, and numbering system. Traditional template-based OCR breaks the moment it encounters an unfamiliar format.

And the matching problem is worse. A vendor named "Widget Corporation Inc." on the PO might appear as "Widget Corp" or "Widget Corp." or "WidgetCo" on the invoice. Line items may be bundled differently: the PO says "100 units of Product A at $10 each" while the invoice says "Product A -- 50 shipped Jan 5, 50 shipped Jan 12, total $1,000." Same transaction, different representation. Humans handle this intuitively. Rules-based systems fail.

**How COCO Solves It**

COCO's AI Invoice Processor automates the entire AP workflow from receipt to payment.

1. **Intelligent Document Processing**: Reads invoices in any format using advanced OCR and NLP:
   - Extracts vendor name, invoice number, date, line items, quantities, unit prices, tax, and total
   - Handles any layout -- no templates needed for new vendors
   - Reads handwritten notes, stamps, and annotations on paper invoices
   - Processes invoices embedded in email bodies (not just attachments)
   - Handles multi-page invoices and consolidated billing statements

2. **Automated PO Matching**: Fuzzy-matches invoices to purchase orders with intelligence:
   - Handles vendor name variations ("Widget Corp" = "Widget Corporation Inc.")
   - Matches partial deliveries and split shipments to a single PO
   - Reconciles line-item splits (PO says 100 units; invoice says 50+50)
   - Handles pricing variations from contract terms (volume discounts, tiered pricing)
   - Identifies invoices without POs for non-PO workflows (recurring services, utilities)

3. **Three-Way Match**: Compares PO, invoice, and goods receipt at the line-item level:
   - Quantity verification: ordered vs. invoiced vs. received
   - Price verification: agreed price vs. invoiced price
   - Tax calculation: verifies tax amounts against applicable rates
   - Flags specific discrepancies with details: "Line 3: PO price $10.00, Invoice price $10.50, difference $50.00 on 100 units"
   - Tolerance thresholds: auto-approves minor variances within configured limits

4. **GL Account Coding**: Auto-assigns general ledger codes:
   - Based on vendor, expense category, department, and project
   - Learns from historical coding patterns (this vendor always coded to 6100-Marketing)
   - Handles cost center allocation for shared expenses
   - Flags unusual coding for review (same vendor, different GL code than usual)

5. **Approval Routing**: Routes invoices based on configurable rules:
   - Amount thresholds ($0-$5K: auto-approve; $5K-$25K: department head; $25K+: VP)
   - Department and cost center routing
   - Special approval requirements (capital expenses, new vendors, contract changes)
   - Escalation for overdue approvals (reminder at 48h, escalation at 72h)
   - Mobile approval for managers on the go

6. **Payment Optimization**: Schedules payments to maximize value:
   - Captures early payment discounts (2/10 net 30: pay on day 10, save 2%)
   - Maintains cash flow targets (don't pay everything early if cash is tight)
   - Batches payments to reduce transaction costs
   - Prioritizes vendor payments based on relationship importance and terms
   - Forecasts upcoming payment obligations for cash flow planning

**Measurable Results**

- **Processing time per invoice**: From 14 minutes to 45 seconds (95% reduction)
- **Error rate**: From 8.3% to 0.6%
- **Late payment penalties**: From $23K to under $2K annually
- **Early payment discounts captured**: +$47K/year (previously missed)
- **AP staff time freed**: 75% of processing time reallocated to strategic work
- **Duplicate payment prevention**: 100% detection rate
- **Month-end close**: AP close 2 days faster due to automated reconciliation
- **Vendor satisfaction**: Payment accuracy and timeliness improved vendor relationships

**Who Benefits**

- **AP Clerks**: Freed from data entry to focus on vendor relationships and exception resolution
- **AP Managers**: Full visibility into invoice pipeline; bottlenecks identified automatically
- **Controllers**: Accurate GL coding; cleaner audit trail; faster month-end close
- **CFO**: Optimized cash flow; early payment discounts captured; reduced fraud risk
- **Vendors**: Faster, more accurate payments improve the business relationship
- **Procurement**: Better PO compliance tracking; vendor performance data

---

## Practical Prompts

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

**Prompt 3: AP Process Optimization Analysis**
```
Analyze our accounts payable process for optimization opportunities.

Current process:
- Monthly invoice volume: [X]
- Average processing time per invoice: [X minutes]
- AP team size: [X people]
- Current error rate: [X%]
- Late payment rate: [X%]
- Early payment discounts captured: [X% of available]
- Top 3 bottlenecks: [describe]

Vendor mix:
- Number of active vendors: [X]
- Top 10 vendors by volume: [list]
- Percentage with electronic invoicing: [X%]

Analyze and recommend:
1. **Quick wins**: What can we improve this month with zero investment?
2. **Automation candidates**: Which invoice types/vendors are easiest to automate?
3. **Payment optimization**: How much are we leaving on the table in early payment discounts?
4. **Error reduction**: What's causing our errors and how to fix root causes?
5. **Vendor consolidation**: Should we reduce vendor count to simplify AP?
6. **Technology gaps**: What tools/integrations would deliver the highest ROI?
7. **Staffing model**: Is our AP team right-sized for the volume?

Provide a prioritized 90-day improvement roadmap.
```

---
