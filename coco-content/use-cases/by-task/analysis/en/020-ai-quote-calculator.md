# Use Case #020: AI Quote Calculator

**Role**: Sales Rep / Sales Operations / Revenue Operations | **Industry**: SaaS, Manufacturing, Professional Services, Enterprise | **Task**: Quote Generation, Pricing Configuration, Discount Approval, Deal Structuring

---

## Social Media Copy

Our pricing had 4 tiers, 3 add-on modules, volume discounts starting at 100 seats, annual vs monthly billing differences, a partner margin table, and 6 different discount approval thresholds depending on deal size and contract length. The pricing spreadsheet was 47 tabs.

Every quote took 30-45 minutes. A rep would build the quote, realize the discount needed VP approval, email the VP, wait 4 hours, get asked to restructure the deal, rebuild the quote, and send it to the prospect a full day later. Meanwhile, the competitor sent their quote in 20 minutes.

We lost 3 deals last quarter where the prospect explicitly said: "The other vendor got back to us faster."

COCO's AI Quote Calculator eliminated the bottleneck:
- Rep describes the deal parameters in natural language: "200 seats, Enterprise tier, the analytics add-on, 2-year commitment, they want 15% off"
- COCO generates the quote, checks it against discount policy, flags that 15% needs director approval for this deal size, suggests a 12% + extended payment terms alternative that doesn't need approval
- Outputs a formatted quote document ready to send
- Total time: 4 minutes. No spreadsheet. No waiting for approval on pre-approved structures.

Quote generation time: from 45 minutes to 4 minutes. Approval cycle: from 6 hours to 20 minutes (for quotes that actually need approval). Deals lost to "too slow to quote": zero last quarter.

---

## Detailed Introduction

**The Pain: Complex Pricing Slows Down Your Fastest Deals**

As companies grow, pricing complexity inevitably increases. Multiple product tiers, add-on modules, volume discounts, multi-year commitments, partner margins, regional pricing, currency conversions, and custom enterprise agreements create a labyrinth that even experienced sales reps struggle to navigate.

The consequences are measurable. DealHub research shows the average B2B quote takes 30-60 minutes to configure and often requires 1-2 rounds of revision before it's accurate. Add discount approval workflows (which touch 65% of enterprise deals), and the average quote-to-send time stretches to 24-48 hours. In competitive evaluations where timing matters, this is a critical disadvantage.

Pricing errors compound the problem. Incorrect quotes erode trust, trigger re-quotes, and occasionally create margin-destroying commitments that weren't intended. Most organizations have experienced at least one "we accidentally quoted them 40% off the wrong tier" incident.

**How COCO Solves It**

COCO's AI Quote Calculator transforms the quoting process from a manual, error-prone workflow into a fast, policy-compliant system.

1. **Natural Language Quote Input**: Instead of navigating pricing spreadsheets, reps describe deals conversationally:
   - "200 users on the Growth plan with the analytics module, 2-year annual commitment"
   - COCO interprets the parameters and generates the quote
   - Handles ambiguity by asking clarifying questions when needed

2. **Intelligent Price Calculation**: COCO applies all pricing rules:
   - Tier-based pricing with feature mapping
   - Volume discount tiers (automatic breakpoint optimization)
   - Multi-year commitment discounts
   - Add-on module pricing and bundling logic
   - Regional pricing adjustments and currency conversion
   - Partner/channel margin calculations

3. **Discount Policy Enforcement**: Before generating the quote, COCO:
   - Checks the requested discount against approval policies
   - Flags discounts that exceed the rep's authority
   - Routes approval requests to the correct approver based on discount level and deal size
   - Suggests alternative deal structures that achieve similar economics within the rep's approval authority

4. **Deal Structure Optimization**: COCO recommends deal structures that optimize for both the customer and the company:
   - "15% discount requires VP approval, but 12% discount + net-60 payment terms is within your authority and the customer's total cost is similar"
   - Multi-year vs. annual pricing comparison
   - Bundling suggestions that increase deal value while giving the customer a better per-unit price
   - Upsell recommendations based on the customer's use case

5. **Quote Document Generation**: COCO produces professionally formatted quote documents:
   - Branded PDF or spreadsheet format
   - Line item breakdown with descriptions
   - Discount details and terms
   - Payment schedule options
   - Validity period and acceptance terms
   - Comparison table if multiple options are presented

6. **Quote Analytics and Insights**: For sales leadership:
   - Average discount by segment, product, and rep
   - Win rate correlation with discount levels
   - Quote-to-close time analysis
   - Pricing optimization recommendations based on win/loss data

**Measurable Results**

- **Quote generation time**: From 45 minutes to 4 minutes (91% reduction)
- **Approval cycle time**: From 6 hours to 20 minutes
- **Pricing errors**: Reduced by 94%
- **Deals lost to slow quoting**: From 3/quarter to 0
- **Average discount given**: Reduced by 3.2 percentage points (smarter deal structuring)
- **Rep time saved**: 5+ hours/week on quoting activities

**Who Benefits**

- **Sales Reps**: Quote in minutes, not hours; close while the iron is hot
- **Sales Managers/VPs**: Fewer approval requests for standard deal structures; faster revenue
- **Finance/RevOps**: Accurate pricing, consistent margin protection, clean deal data
- **Customers**: Fast, professional quotes that show you value their time

---

## Practical Prompts

**Prompt 1: Generate a Sales Quote**
```
Generate a detailed quote based on these deal parameters.

Our pricing structure:
[paste your pricing tiers, add-ons, and discount policies]

Deal parameters:
- Customer: [company name]
- Product tier: [which tier]
- Number of users/seats: [X]
- Add-on modules: [list any]
- Contract length: [monthly/annual/2-year/3-year]
- Requested discount: [X%]
- Special terms requested: [any special conditions]
- Partner/channel: [direct or through partner]

Generate:
1. Line-item pricing breakdown
2. Discount analysis (is the discount within policy? Who needs to approve?)
3. If discount exceeds policy, suggest 2 alternative deal structures that stay within policy
4. Total contract value (monthly and annual)
5. Comparison table if multiple options exist
6. Any upsell suggestions based on the customer's needs
```

**Prompt 2: Discount Approval Request**
```
Help me prepare a discount approval request for my manager.

Deal details:
- Customer: [name] - [size, industry]
- Deal value: $[X] ARR
- Requested discount: [X]%
- Standard discount for this tier: [X]%
- My approval authority: up to [X]%
- Approval needed from: [title]

Build a compelling approval request that includes:
1. Deal summary (customer, size, strategic value)
2. Why the customer is requesting this discount (competitive pressure, budget constraints, multi-year commitment)
3. What we get in return (case study rights, longer commitment, larger scope)
4. Competitive context (what the competitor likely quoted)
5. Margin analysis (even with discount, what's our margin?)
6. Risk of not approving (will we lose the deal?)
7. Recommended compromise if full discount isn't approved
```

**Prompt 3: Pricing Comparison for Customer**
```
Create a pricing comparison document showing our 3 packaging options for this customer.

Customer context:
- Company size: [X employees]
- Primary use case: [what they want to do]
- Budget range: [if known]
- Key requirements: [must-have features]

Our 3 options:
Option 1 - [Tier name]: [features included, price per user]
Option 2 - [Tier name]: [features included, price per user]
Option 3 - [Tier name]: [features included, price per user]

Create a comparison table with:
1. Feature comparison matrix (highlight what each tier adds)
2. Monthly and annual pricing for their user count
3. ROI estimate per tier
4. Recommended option with reasoning (based on their stated needs)
5. "Best value" indicator
6. What they'd be missing by choosing a lower tier (loss aversion framing)

Format as a clean, customer-facing document.
```

---
