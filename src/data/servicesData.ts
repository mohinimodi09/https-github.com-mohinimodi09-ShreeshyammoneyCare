/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail, ChecklistItem, CaseStudy } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'virtual-cfo',
    title: 'Virtual CFO Services',
    subtitle: 'Strategic Finance & Growth Advisory',
    icon: 'Briefcase',
    description: 'Empower your enterprise with CXO-level financial acumen without the overhead of a full-time executive. Our Virtual CFO (VCFO) services act as the nervous system of your business, managing growth, planning strategies, and ensuring strict fiscal discipline.',
    keyPoints: [
      'Financial Strategy & Growth modeling',
      'Daily/Monthly Cash Flow Optimizations & Liquidity tracking',
      'Accurate Budgeting, Variance Analysis, and Cost Control',
      'MIS reports, Board Presentations, and KPI Telemetry',
      'Corporate Governance & Risk mitigation compliance'
    ],
    vCFOEquivalent: 'The ultimate umbrella advisory under which we prepare you for listing, syndicated credit, and due diligence checks.',
    benefits: [
      'High-end strategic financial planning at a fraction of full-time cost',
      'Data-driven decision making via real-time bespoke cloud dashboards',
      'Proactive identification of cash runway issues and cost leaks',
      'Instant institutional credibility with banks, investors, and regulatory bodies'
    ],
    processSteps: [
      'Discovery & Financial Health Audit (Assessment of books & corporate structure)',
      'Systems & KPI Integration (Deploying MIS controls and runway tracking)',
      'Budgetary Execution (Establishing weekly/monthly financial guardrails)',
      'Growth Steering (Conducting weekly board reviews and strategic capitalization runs)'
    ]
  },
  {
    id: 'ipo-advisory',
    title: 'IPO Listing & Advisory',
    subtitle: 'Transitioning from Private to Public Sector',
    icon: 'TrendingUp',
    description: 'Listing your company is a monumental milestone. Our end-to-end IPO advisory steers you through SEBI compliance, rigorous audit structures, underwriting, pricing, and launching a triumphant public subscription on the NSE-SME or Main Board.',
    keyPoints: [
      'IPO Feasibility Assessment & Capital Restructuring',
      'Drafting Draft Red Herring Prospectus (DRHP) details',
      'Underwriter, Merchant Banker, and Lead Manager liaising',
      'Pre-IPO placements and strategic anchor investor outreach',
      'NSE / BSE filing and post-listing regulatory support'
    ],
    vCFOEquivalent: 'Our VCFO team grooms your corporate structure, books, and internal controls for 18–24 months before filing, ensuring a premium valuation multiply.',
    benefits: [
      'Access to massive permanent public equity pools',
      'Exponential elevation in brand prestige and customer trust',
      'Facilitated stock liquidity for promoters, employees, and early-stage capital',
      'Clear valuation benchmarks for subsequent expansion or dynamic acquisitions'
    ],
    processSteps: [
      'Feasibility & Listing Strategy (Evaluating size, timing, and BSE/NSE SME vs Main Board)',
      'Structural Ggrooming (Implementing standard accounting codes, board independent chairs)',
      'Prospectus Crafting & SEBI Filing (Meticulous compilation of business history & risk factors)',
      'Roadshows & Launch (Generating institutional demand, underwriting alignment, and listing bell)'
    ]
  },
  {
    id: 'loan-syndication',
    title: 'Debt & Loan Syndication',
    subtitle: 'Tailored Institutional Fund Raising',
    icon: 'ShieldAlert', // Representing safety in liquidity or structured credit
    description: 'Fuel your CAPEX, working capital, or project expansions with structured, competitive finance. We leverage our relationships with over 35 premier banks, NBFCs, and sovereign credit funds to syndicate optimal debt structures matching your cash generation curve.',
    keyPoints: [
      'Structured Trade & Infrastructure Project Financing',
      'Consortium & Multiple Banking Arrangements management',
      'Working Capital limits (CC, LC, Bank Guarantees)',
      'Mezzanine, Bond placements, and External Commercial Borrowings (ECB)',
      'Interest rate optimization and covenant re-engineering'
    ],
    vCFOEquivalent: 'Our VCFO plans your debt levels precisely so that your Interest Coverage Ratio (ICR) remains pristine, keeping debt costs optimally minimized.',
    benefits: [
      'Procurement of high-volume capital with zero equity dilution',
      'Highly competitive interest rates and extended repayment moratoriums',
      'Flexible financial covenants mapped strictly to your seasonal cash flows',
      'Streamlined credit appraisal processes through professional pitch models'
    ],
    processSteps: [
      'Debt Modeling (Determining optimal leverage, debt service coverage, and cost goals)',
      'Information Memorandum Preparation (Translating balance sheets into institutional credit pitches)',
      'Lender Placement & Term-Sheet Negotiation (Pitching to multiple bankers to trigger bidding)',
      'Appraisal & Disbursement (Navigating title due diligence, charge creation, and capital drawdown)'
    ]
  },
  {
    id: 'due-diligence',
    title: 'Corporate Due Diligence',
    subtitle: 'Prudent Transaction Risk Mitigation',
    icon: 'FileCheck',
    description: 'Whether preparing for strategic acquisition, a merger, or equity investment, complete transparency is vital. We conduct ruthless, highly meticulous investigative audits of finances, taxes, technology IP, and statutory filings so you proceed with absolute confidence.',
    keyPoints: [
      'Forensic financial statement analysis and revenue validation',
      'Corporate law, labor statute, and environment filing compliance reviews',
      'Direct and Indirect Tax liabilities and outstanding claims audit',
      'Related-party transaction scrutiny and asset-valuation verification',
      'Vendor contracts, client concentrations, and material risk mapping'
    ],
    vCFOEquivalent: 'Our VCFO establishes internal data-rooms and continuous compliance trackers so your business is permanently "due-diligence ready" at 24-hour notice.',
    benefits: [
      'Elimination of toxic inherited liabilities, unrecorded tax claims, or legal exposure',
      'Massive leverage in transactional purchase-price negotiations',
      'Unbiased, objective assessment of targeted business operational bottlenecks',
      'Guaranteed compliance with regulatory and standard accounting benchmarks'
    ],
    processSteps: [
      'Diligence Outlining (Defining audit depth: financial, tax, operational, or legal)',
      'Field Scrutiny & Forensics (Detailed audit of bank lines, receipts, and statutory registers)',
      'Risk Identification (Identifying cost abnormalities, tax exposures, and compliance gaps)',
      'Definitive Diligence Reporting (Publishing executive reviews, valuation adjustments, and Escrow codes)'
    ]
  },
  {
    id: 'portfolio-valuation',
    title: 'Market Portfolio Valuation',
    subtitle: 'Unveiling Real Economic Worth',
    icon: 'BadgePercent',
    description: 'Determine the authentic, independent fair market value of your enterprise, investment portfolio, or intangible intellectual property. Our certified methodology aligns with DCF, comparable companies premium, and replacement value protocols.',
    keyPoints: [
      'Discounted Cash Flow (DCF) & Relative Valuation modeling',
      'Equity, Debt-instruments, and complex structured security valuation',
      'Intangible assets valuation (Goodwill, Patents, Client portfolios)',
      'Shareholder buy-back, joint venture, and transfer pricing calculations',
      'Certified independent corporate valuation reports for SEBI, RBI, and Income Tax'
    ],
    vCFOEquivalent: 'We map valuation continuously to strategic benchmarks, helping key stakeholders identify which operational levers will double transaction multiples.',
    benefits: [
      'Concrete authority in board discussions and fund-raising rounds',
      'Flawless regulatory clearances from taxation authorities and central banks',
      'Equitable resolution of shareholder disputes or equity allocations',
      'Data-backed benchmarks to guide strategic enterprise acquisitions'
    ],
    processSteps: [
      'Underlying Data Compilation (Gathering historical financials, growth projections, and assets)',
      'Peer & Sector Benchmark Alignment (Synthesizing market multiples and discount parameters)',
      'Formulation of Models (Constructing Discounted Cash Flow and Multiple matrices)',
      'Publishing Certified Valuation (Delivering fully audited valuation dossiers with sensitivity tables)'
    ]
  }
];

export const COMPLIANCE_CHECKLIST_PRESETS: ChecklistItem[] = [
  {
    id: 'c1',
    category: 'financial',
    task: 'Audited Financial Accounts',
    description: 'Clean Audited Balance Sheets and P&L Statements for the last 3 immediate financial years with no severe qualifications.',
    completed: false,
    weight: 20
  },
  {
    id: 'c2',
    category: 'financial',
    task: 'Comprehensive 5-Year Projections',
    description: 'Detailed, month-on-month driver-based financial model showing cash burn, revenues, EBITDA margins, and capital budgets.',
    completed: false,
    weight: 15
  },
  {
    id: 'c3',
    category: 'legal',
    task: 'Statutory Incorporation Files & MoA/AoA',
    description: 'Up-to-date Ministry of Corporate Affairs (MCA) filings, Memorandum and Articles of Association reflecting clean equity lines.',
    completed: false,
    weight: 10
  },
  {
    id: 'c4',
    category: 'legal',
    task: 'Clear Land Title & Asset Registrations',
    description: 'Clear structural ownership or long-lease deeds of all material corporate workspaces/offices and plant assets.',
    completed: false,
    weight: 10
  },
  {
    id: 'c5',
    category: 'governance',
    task: 'Independent Board Configuration',
    description: 'Establishment of a functioning advisory board featuring independent non-executive directors and structured audit committees.',
    completed: false,
    weight: 15
  },
  {
    id: 'c6',
    category: 'governance',
    task: 'Internal Financial Control Protocols',
    description: 'Active segregation of financial duties, formalized purchase approval thresholds, and continuous internal audit registries.',
    completed: false,
    weight: 10
  },
  {
    id: 'c7',
    category: 'operations',
    task: 'Material Customer/Vendor SLAs',
    description: 'Signed agreements with key suppliers and key customers representing robust recurring order patterns.',
    completed: false,
    weight: 10
  },
  {
    id: 'c8',
    category: 'operations',
    task: 'Tax Compliance & Filings Cleats',
    description: 'Flawless records of GST submissions, PF/ESI worker compliance, and zero outstanding material Income Tax notices.',
    completed: false,
    weight: 10
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    clientType: 'Logistics & Logistics Infra Enterprise',
    serviceCovered: 'IPO Listings on NSE-SME',
    challenge: 'Struggling with unorganized books, high family-debt exposure, and lack of institutional operational governance.',
    solution: 'Our Virtual CFO team stepped in, restructured promoter debt, set up formal audit committees, and led a 12-month grooming sprint before filing.',
    result: 'Successfully launched IPO on NSE-SME. Issue was oversubscribed by 28x, raising ₹72 Crore and boosting corporate pride.',
    capitalRaised: '₹72 Cr',
    valuationIncrease: '3.4x'
  },
  {
    id: 'case-2',
    clientType: 'Precision Parts Component Manufacturer',
    serviceCovered: 'Debt & Loan Syndication',
    challenge: 'Needed ₹120 Cr to fund a state-of-the-art export facility. Local banks offered expensive rates with high promoter mortgage covenants.',
    solution: 'Designed an analytical Information Memorandum showcasing export cash flow guarantees and negotiated a consortium limits scheme.',
    result: 'Syndicated ₹120 Crore in project finance at 2.1% lower interest rates than initial bids with structured inventory-based covenants.',
    capitalRaised: '₹120 Cr',
    valuationIncrease: 'None (Debt)'
  },
  {
    id: 'case-3',
    clientType: 'SaaS Customer Analytics Enterprise',
    serviceCovered: 'Due Diligence & Value Maximization',
    challenge: 'A global private equity giant offered to acquire them, but early-stage due diligence flagged structural revenue leaks and weak IP contracts.',
    solution: 'Conducted forensic correction sprints under Virtual CFO hours. Re-structured software license SLAs and created a clean digital data room.',
    result: 'Passed institutional buyer due diligence audit with flying colors, concluding the transaction smoothly.',
    capitalRaised: '₹95 Cr (Exit)',
    valuationIncrease: '65% Premium'
  }
];
