import imgInsuranceRisk from '../assets/services/service-insurance-risk.jpg'
import imgUsAccounting from '../assets/services/service-us-accounting.jpg'
import imgHedgeAccounting from '../assets/services/service-hedge-accounting.jpg'
import imgInternationalTax from '../assets/services/service-international-tax.jpg'
import imgRealEstate from '../assets/services/service-real-estate.jpg'
import imgManagementConsultancy from '../assets/services/service-management-consultancy.jpg'

export interface CapabilityItem {
  number: string
  title: string
  description: string
}

export interface ApproachStep {
  number: string
  title: string
  description: string
}

export interface ClientSituation {
  title: string
  description: string
}

export interface ServiceData {
  slug: string
  number: string
  title: string
  shortTitle: string
  heroHighlightWord: string
  category: string
  kicker: string
  tag: string
  description: string
  cardImage: string
  heroImage: string
  overviewImage: string
  perspectiveImage: string
  overview: {
    heading: string
    subheading: string
    lead: string
    paragraphs: string[]
  }
  capabilities: CapabilityItem[]
  approach: {
    heading: string
    subheading: string
    lead: string
    steps: ApproachStep[]
  }
  situations: ClientSituation[]
  crossBorder: {
    heading: string
    subheading: string
    lead: string
    paragraph: string
  }
  whyVka: {
    heading: string
    subheading: string
    lead: string
    paragraph: string
    points: string[]
  }
  cta: {
    heading: string
    description: string
    buttonText: string
  }
  prev: {
    slug: string
    title: string
  }
  next: {
    slug: string
    title: string
  }
  seo: {
    title: string
    description: string
  }
}

export const servicesData: ServiceData[] = [
  {
    slug: 'insurance-risk-management',
    number: '01',
    title: 'Insurance & Risk Management Advisory',
    shortTitle: 'Insurance & Risk',
    heroHighlightWord: 'Advisory',
    category: 'Risk & Capital Protection',
    kicker: 'Risk Architecture & Placements',
    tag: 'Surety Bonds · Lender Compliant',
    description:
      'Enterprise risk assessment and insurance program structuring — surety bonds, political risk, trade credit and property/casualty placement — aligned to lender and regulatory requirements.',
    cardImage: imgInsuranceRisk,
    heroImage: imgInsuranceRisk,
    overviewImage: '/images/services/insurance-risk-management.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Managing risk.',
      subheading: 'Enabling progress.',
      lead: 'We help clients identify, assess and mitigate risk through structured insurance and risk management solutions.',
      paragraphs: [
        'Our advisory approach aligns with lender, regulatory and operational requirements, ensuring long-term resilience and confidence in your capital and assets.',
        'Risk rarely sits in one place. A project may depend on financing terms, contractual obligations, insurance covenants and the counterparties behind them. We bring those exposures into one clear view, then structure coverage around how the business actually operates.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Enterprise Risk Assessment',
        description: 'Evaluate and prioritize risks across operations, balance sheet assets and operating markets.'
      },
      {
        number: '02',
        title: 'Insurance Program Structuring',
        description: 'Design tailored insurance architectures for optimal asset protection and cost efficiency.'
      },
      {
        number: '03',
        title: 'Surety Bonds',
        description: 'Support project and performance requirements with reliable, collateral-efficient surety solutions.'
      },
      {
        number: '04',
        title: 'Political Risk',
        description: 'Mitigate sovereign, regulatory and expropriation exposure in cross-border capital investments.'
      },
      {
        number: '05',
        title: 'Trade Credit',
        description: 'Manage accounts receivable and counterparty insolvency risk across global supply routes.'
      },
      {
        number: '06',
        title: 'Property & Casualty Placement',
        description: 'Arrange comprehensive physical asset and liability coverage matched to operational risk profiles.'
      },
      {
        number: '07',
        title: 'Lender & Regulatory Requirements',
        description: 'Ensure institutional compliance with bank syndicates, multilateral lenders and statutory standards.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Practical. Structured. Global.',
      lead: 'We combine deep sector knowledge with a disciplined process to deliver insurance and risk solutions that support your commercial objectives.',
      steps: [
        {
          number: '01',
          title: 'Assess',
          description: 'Map balance sheet exposures, contract terms and lender debt covenants across all operational units.'
        },
        {
          number: '02',
          title: 'Structure',
          description: 'Design program specifications, deductible structures and syndicated risk placement layers.'
        },
        {
          number: '03',
          title: 'Execute',
          description: 'Coordinate with domestic and international underwriting syndicates for seamless policy issuance.'
        }
      ]
    },
    situations: [
      {
        title: 'Large-Scale Infrastructure Bidding',
        description: 'Contractors requiring performance surety bonds to replace bank guarantee lines and preserve working capital.'
      },
      {
        title: 'Cross-Border Capital Deployment',
        description: 'Institutional investors structuring political risk and currency inconvertibility protection in frontier markets.'
      },
      {
        title: 'Project Finance Debt Syndication',
        description: 'Developers satisfying stringent technical insurance due diligence mandated by multilateral project lenders.'
      }
    ],
    crossBorder: {
      heading: 'Cross-border insight.',
      subheading: 'Local execution.',
      lead: 'Risk does not stop at national borders.',
      paragraph:
        'Our global market perspective helps you navigate disparate regulatory environments, regional political developments, and international reinsurance markets with clarity and institutional rigor.'
    },
    whyVka: {
      heading: 'Experience. Independence. Focus.',
      subheading: 'WHY VKA',
      lead: 'We provide objective advisory and structured solutions that protect balance sheets and create commercial value.',
      paragraph:
        'Unlike volume-driven brokers, our role is strictly fiduciary and strategic. We evaluate your obligations from a lender and contractor perspective, eliminating redundant premiums while closing critical coverage gaps.',
      points: [
        'Independent advisory approach',
        'Global underwriting market access',
        'Deep infrastructure sector understanding',
        'Long-term commercial partnership mindset'
      ]
    },
    cta: {
      heading: "Let's build a more resilient future.",
      description:
        'Talk to our team to discuss how our enterprise risk and insurance advisory services can protect your capital and projects.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'advisory-management-consultancy',
      title: 'Advisory & Management Consultancy'
    },
    next: {
      slug: 'us-accounting-compliance',
      title: 'U.S. Accounting & Compliance'
    },
    seo: {
      title: 'Insurance & Risk Management Advisory | VKA Capital Bridge',
      description:
        'Enterprise risk assessment, surety bond program structuring, and lender-compliant insurance placement for infrastructure and corporate enterprises.'
    }
  },
  {
    slug: 'us-accounting-compliance',
    number: '02',
    title: 'U.S. Accounting & Compliance',
    shortTitle: 'U.S. Accounting',
    heroHighlightWord: 'Compliance',
    category: 'GAAP & Regulatory Governance',
    kicker: 'U.S. GAAP & Governance',
    tag: 'U.S. GAAP · Audit Readiness',
    description:
      'GAAP-compliant reporting, internal controls, and regulatory compliance for U.S. entities and foreign companies operating in the U.S. — from bookkeeping oversight to audit readiness.',
    cardImage: '/images/services/us-accounting-compliance.jpg',
    heroImage: '/images/services/us-accounting-compliance.jpg',
    overviewImage: '/images/services/us-accounting-compliance.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Financial discipline.',
      subheading: 'Audit certainty.',
      lead: 'Operating in the United States requires unyielding financial precision and adherence to rigorous GAAP frameworks.',
      paragraphs: [
        'We assist foreign parent companies, cross-border subsidiaries, and growing U.S. operations in establishing dependable financial reporting and governance systems.',
        'Sound financial reporting is not merely a compliance burden; it is the prerequisite for institutional credibility, debt syndication, and clean external audit sign-offs. We institute controls that keep executive teams ahead of filing deadlines and audit queries.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'U.S. GAAP Reporting',
        description: 'Preparation of financial statements, balance sheet reconciliations, and disclosures compliant with U.S. GAAP.'
      },
      {
        number: '02',
        title: 'Internal Control Design',
        description: 'Design and review of internal control frameworks to safeguard corporate assets and mitigate reporting errors.'
      },
      {
        number: '03',
        title: 'Bookkeeping Oversight',
        description: 'Executive supervision of general ledgers, revenue recognition, and multi-currency consolidation.'
      },
      {
        number: '04',
        title: 'Audit Readiness & Defense',
        description: 'Organization of audit workpapers, technical accounting memorandums, and direct liaison with external auditors.'
      },
      {
        number: '05',
        title: 'Foreign Subsidiary Integration',
        description: 'Harmonization of local statutory accounts with U.S. reporting requirements and parent consolidation schedules.'
      },
      {
        number: '06',
        title: 'Regulatory Filings Support',
        description: 'Assistance with federal, state, and local entity statutory compliance schedules and disclosures.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Methodical. Rigorous. Transparent.',
      lead: 'We establish structured financial workflows that eliminate surprises during year-end audit reviews.',
      steps: [
        {
          number: '01',
          title: 'Diagnostic',
          description: 'Assess existing accounting policies, control points, and transaction workflows against U.S. GAAP benchmarks.'
        },
        {
          number: '02',
          title: 'Remediate',
          description: 'Formalize revenue schedules, journal documentation, and reconciliation standards.'
        },
        {
          number: '03',
          title: 'Maintain',
          description: 'Provide ongoing technical accounting oversight and pre-audit packaging for independent audit teams.'
        }
      ]
    },
    situations: [
      {
        title: 'International Parent Expansion',
        description: 'Foreign corporate groups launching U.S. operational subsidiaries that require immediate GAAP conformity.'
      },
      {
        title: 'Pre-Audit Cleanup',
        description: 'Mid-market businesses preparing for their first institutional CPA audit or bank covenant review.'
      },
      {
        title: 'Complex Transaction Accounting',
        description: 'Entities executing asset purchases, debt refinancings, or intercompany recharges requiring technical accounting position papers.'
      }
    ],
    crossBorder: {
      heading: 'Bridging standards.',
      subheading: 'Local governance.',
      lead: 'Differences between international frameworks and U.S. GAAP create persistent reconciliation friction.',
      paragraph:
        'We help management teams bridge accounting terminology, convert trial balances accurately, and maintain documentation that satisfies both foreign boards and U.S. financial counterparties.'
    },
    whyVka: {
      heading: 'Precision. Experience. Governance.',
      subheading: 'WHY VKA',
      lead: 'We treat accounting as a strategic asset that protects enterprise value and informs capital allocation.',
      paragraph:
        'Our background in cross-border finance means we grasp both the high-level strategic objectives of the executive committee and the ground-level ledger details required by external audit partners.',
      points: [
        'Dedicated U.S. GAAP technical literacy',
        'Direct experience with foreign subsidiary oversight',
        'Rigorous pre-audit workpaper documentation',
        'Pragmatic internal control implementations'
      ]
    },
    cta: {
      heading: 'Establish audit-ready financial governance.',
      description:
        'Connect with our accounting advisory team to review your U.S. compliance structure and financial reporting readiness.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'insurance-risk-management',
      title: 'Insurance & Risk Management Advisory'
    },
    next: {
      slug: 'us-investment-hedge-accounting',
      title: 'U.S. Investment Hedge Accounting'
    },
    seo: {
      title: 'U.S. Accounting & Compliance Advisory | VKA Capital Bridge',
      description:
        'U.S. GAAP reporting, internal control design, and audit readiness advisory for U.S. operations and international subsidiaries.'
    }
  },
  {
    slug: 'us-investment-hedge-accounting',
    number: '03',
    title: 'U.S. Investment Hedge Accounting',
    shortTitle: 'Hedge Accounting',
    heroHighlightWord: 'Accounting',
    category: 'ASC 815 & Derivative Risk',
    kicker: 'ASC 815 & Derivative Risk',
    tag: 'ASC 815 · FX & Derivatives',
    description:
      'Hedge accounting design and documentation under ASC 815 for interest rate, FX and commodity programs, including effectiveness testing and auditor coordination.',
    cardImage: imgHedgeAccounting,
    heroImage: imgHedgeAccounting,
    overviewImage: '/images/services/hedge-accounting.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Mitigating volatility.',
      subheading: 'Preserving margins.',
      lead: 'Derivatives are essential risk management instruments, but without hedge accounting, they create severe income statement volatility.',
      paragraphs: [
        'Under ASC 815 (formerly FAS 133), qualifying for hedge accounting requires strict contemporaneous formal documentation, designated hedge relationships, and ongoing statistical effectiveness testing.',
        'We help corporate treasuries and investment offices design hedge programs that reflect commercial economic intent, ensuring gains and losses match the underlying hedged exposure rather than creating artificial quarterly earnings turbulence.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'ASC 815 Program Design',
        description: 'Structuring formal cash flow, fair value, and net investment hedging programs under U.S. GAAP standards.'
      },
      {
        number: '02',
        title: 'Contemporaneous Documentation',
        description: 'Drafting rigorous designation memos, risk management objectives, and instrument classification files.'
      },
      {
        number: '03',
        title: 'Effectiveness Testing',
        description: 'Conducting prospective and retrospective regression analysis and dollar-offset calculations.'
      },
      {
        number: '04',
        title: 'Interest Rate Swaps & Caps',
        description: 'Hedge accounting for floating-to-fixed debt hedges and benchmark rate transitions (SOFR alignment).'
      },
      {
        number: '05',
        title: 'FX & Commodity Programs',
        description: 'Structuring balance sheet and forecasted cash flow hedges across currency pairs and commodity inputs.'
      },
      {
        number: '06',
        title: 'Auditor Review Liaison',
        description: 'Defending hedge qualification, valuation models, and effectiveness conclusions before independent audit firms.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Technical. Quantitative. Compliant.',
      lead: 'A disciplined mathematical and documentation process designed to satisfy the strictest technical accounting reviews.',
      steps: [
        {
          number: '01',
          title: 'Designate',
          description: 'Formulate precise hedging relationships and draft contemporaneous designation files on trade date.'
        },
        {
          number: '02',
          title: 'Model',
          description: 'Establish statistical testing models, benchmark curves, and ineffectiveness tracking protocols.'
        },
        {
          number: '03',
          title: 'Report',
          description: 'Generate quarterly journal entries, OCI rollforwards, and mandatory financial statement disclosures.'
        }
      ]
    },
    situations: [
      {
        title: 'Floating Debt Portfolio Refinancing',
        description: 'Borrowers hedging credit facility interest rates with swaps without destabilizing quarterly EBITDA.'
      },
      {
        title: 'Multinational Currency Inflows',
        description: 'Exporters managing anticipated foreign currency revenues across 12-to-24 month commercial cycles.'
      },
      {
        title: 'Commodity Input Price Hedging',
        description: 'Industrial producers mitigating fuel, metal, or energy price fluctuations through forward derivative contracts.'
      }
    ],
    crossBorder: {
      heading: 'Capital market complexity.',
      subheading: 'Balanced outcomes.',
      lead: 'Cross-border treasuries operate across multiple rate environments and foreign currency regimes.',
      paragraph:
        'We help management teams evaluate whether economic hedging arrangements translate cleanly into financial reporting, avoiding costly audit disqualifications and retroactive mark-to-market adjustments.'
    },
    whyVka: {
      heading: 'Quantitative depth. Institutional clarity.',
      subheading: 'WHY VKA',
      lead: 'We understand both the trading desk economics and the strict procedural rules of U.S. technical accounting.',
      paragraph:
        'Our advisory ensures your treasury team can hedge commercial exposures with confidence, backed by robust econometric models and comprehensive audit defense packages.',
      points: [
        'Exhaustive ASC 815 technical documentation',
        'Proven statistical effectiveness methodologies',
        'Direct interface with national audit technical desks',
        'Pragmatic integration with corporate treasury systems'
      ]
    },
    cta: {
      heading: 'Protect earnings from derivative volatility.',
      description:
        'Schedule a confidential discussion with our hedge accounting specialists to evaluate your program documentation.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'us-accounting-compliance',
      title: 'U.S. Accounting & Compliance'
    },
    next: {
      slug: 'international-taxation',
      title: 'International Taxation'
    },
    seo: {
      title: 'U.S. Investment Hedge Accounting (ASC 815) | VKA Capital Bridge',
      description:
        'ASC 815 hedge accounting design, contemporaneous documentation, effectiveness testing, and auditor coordination for interest rate, FX, and commodity derivatives.'
    }
  },
  {
    slug: 'international-taxation',
    number: '04',
    title: 'International Taxation',
    shortTitle: 'International Tax',
    heroHighlightWord: 'Taxation',
    category: 'Cross-Border Structuring & BEPS',
    kicker: 'Cross-Border & BEPS Pillar Two',
    tag: 'Transfer Pricing · Tax Treaties',
    description:
      'Cross-border tax structuring, transfer pricing and treaty analysis for multinational clients — managing withholding exposure and BEPS / Pillar Two compliance.',
    cardImage: imgInternationalTax,
    heroImage: imgInternationalTax,
    overviewImage: '/images/services/international-taxation.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Cross-border efficiency.',
      subheading: 'Global compliance.',
      lead: 'Global commerce demands tax architectures that withstand aggressive international scrutiny and changing treaty networks.',
      paragraphs: [
        'Multinational groups must navigate overlapping tax jurisdictions, evolving transfer pricing regulations, and the ongoing rollout of OECD BEPS Pillar Two global minimum tax standards.',
        'We help corporate leaders and private investment structures design sustainable cross-border holding, financing, and operational frameworks. Our focus is commercial substance, treaty entitlement preservation, and minimizing double-taxation leakage.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Cross-Border Holding Structuring',
        description: 'Design of holding company and capital repatriation corridors aligned with bilateral tax treaty benefits.'
      },
      {
        number: '02',
        title: 'Transfer Pricing Policy',
        description: 'Formulation of defensible intercompany pricing, management fees, and intellectual property licensing models.'
      },
      {
        number: '03',
        title: 'BEPS & Pillar Two Readiness',
        description: 'Assessment of Effective Tax Rates (ETR) and Top-Up tax exposures under OECD Pillar Two global minimum rules.'
      },
      {
        number: '04',
        title: 'Withholding Tax Optimization',
        description: 'Analysis of interest, dividend, and royalty withholding exposures across cross-border cash distributions.'
      },
      {
        number: '05',
        title: 'Permanent Establishment (PE) Defense',
        description: 'Operational guidelines to mitigate unintended nexus and fixed-base taxable exposure in host jurisdictions.'
      },
      {
        number: '06',
        title: 'Tax Due Diligence',
        description: 'Rigorous historical tax liability review and structural assessment for international M&A acquisitions.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Substantive. Compliant. Forward-Looking.',
      lead: 'We prioritize operational substance and defensibility over fragile artificial tax engineering.',
      steps: [
        {
          number: '01',
          title: 'Map',
          description: 'Analyze entity ownership hierarchies, cross-border revenue flows, and existing bilateral tax treaty reliance.'
        },
        {
          number: '02',
          title: 'Model',
          description: 'Calculate effective tax rates, withholding friction points, and transfer pricing margins under current rules.'
        },
        {
          number: '03',
          title: 'Implement',
          description: 'Establish intercompany agreements, economic substance policies, and local documentation protocols.'
        }
      ]
    },
    situations: [
      {
        title: 'Cross-Border Inbound Investment',
        description: 'Indian or European groups deploying capital into North American assets via tax-efficient treaty jurisdictions.'
      },
      {
        title: 'Global Supply Chain Reorganization',
        description: 'Corporations restructuring shared services, IP licensing, and inventory procurement across key international hubs.'
      },
      {
        title: 'Pillar Two Exposure Assessment',
        description: 'Multinationals with combined revenues exceeding threshold assessing top-up tax liabilities across operating entities.'
      }
    ],
    crossBorder: {
      heading: 'Global tax architecture.',
      subheading: 'Substance over form.',
      lead: 'Tax authorities worldwide now share transaction data seamlessly under multilateral conventions.',
      paragraph:
        'Success requires establishing genuine economic substance, governance controls, and documentary evidence that support your tax positions in every jurisdiction where you operate.'
    },
    whyVka: {
      heading: 'Commercial clarity. Treaty expertise.',
      subheading: 'WHY VKA',
      lead: 'We view tax as an integral component of overall capital efficiency and risk management.',
      paragraph:
        'Our advisory bridges commercial intent with statutory reality, helping corporate groups expand internationally without accumulating hidden tax liabilities or regulatory friction.',
      points: [
        'Deep bilateral treaty and withholding analysis',
        'Pragmatic transfer pricing documentation frameworks',
        'Direct focus on commercial substance and compliance',
        'Extensive India-US-UAE cross-border corridor experience'
      ]
    },
    cta: {
      heading: 'Structure your cross-border operations effectively.',
      description:
        'Speak with our international tax advisory team to evaluate your cross-border structures and treaty protections.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'us-investment-hedge-accounting',
      title: 'U.S. Investment Hedge Accounting'
    },
    next: {
      slug: 'real-estate-investment',
      title: 'Real Estate Investment'
    },
    seo: {
      title: 'International Taxation & Cross-Border Structuring | VKA Capital Bridge',
      description:
        'Cross-border tax structuring, transfer pricing documentation, BEPS Pillar Two compliance, and treaty analysis for multinational businesses.'
    }
  },
  {
    slug: 'real-estate-investment',
    number: '05',
    title: 'Real Estate Investment',
    shortTitle: 'Real Estate',
    heroHighlightWord: 'Investment',
    category: 'Capital Structuring & Assets',
    kicker: 'Capital Structuring & Assets',
    tag: 'Cross-Border · Due Diligence',
    description:
      'Acquisition due diligence, capital structuring and portfolio strategy across commercial and residential assets, including cross-border investment structuring.',
    cardImage: imgRealEstate,
    heroImage: imgRealEstate,
    overviewImage: '/images/services/real-estate-investment.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Real assets.',
      subheading: 'Disciplined capital.',
      lead: 'Direct real estate investment demands rigorous financial underwriting and sound jurisdictional structuring.',
      paragraphs: [
        'We advise high-net-worth investors, family offices, and developers on acquisition due diligence, capital stack structuring, and cross-border asset holding strategies.',
        'From high-yield commercial assets in emerging financial centers to prime residential portfolios, we focus on fundamental asset quality, lease covenant strength, and clear exit mechanisms rather than speculative market hype.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Acquisition Due Diligence',
        description: 'Comprehensive financial, technical, and title validation to verify asset valuation and cash flow viability.'
      },
      {
        number: '02',
        title: 'Capital Stack Structuring',
        description: 'Optimizing senior debt, mezzanine finance, and equity participation to lower blended capital costs.'
      },
      {
        number: '03',
        title: 'Portfolio Strategy',
        description: 'Strategic allocation across asset classes, geographical submarkets, and yield-generation profiles.'
      },
      {
        number: '04',
        title: 'Cross-Border Asset Holding',
        description: 'Structuring SPVs, trust entities, and tax-efficient vehicles for international real estate acquisitions.'
      },
      {
        number: '05',
        title: 'Developer Direct Interface',
        description: 'Facilitating direct, un-intermediated relationships with premier tier-one master developers.'
      },
      {
        number: '06',
        title: 'Lease & Covenant Analysis',
        description: 'Review of tenant solvency, rent escalation clauses, and long-term operating net cash flow predictability.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Analytical. Objective. Unaligned.',
      lead: 'We do not sell properties; we advise on capital deployment and underwriting integrity.',
      steps: [
        {
          number: '01',
          title: 'Underwrite',
          description: 'Evaluate physical asset condition, location fundamentals, historical yields, and rent roll reliability.'
        },
        {
          number: '02',
          title: 'Structure',
          description: 'Design holding entities, tax treaty routing, and debt capitalization tailored to investor objectives.'
        },
        {
          number: '03',
          title: 'Execute',
          description: 'Oversee contractual closing, escrow protocols, and transition into operational asset management.'
        }
      ]
    },
    situations: [
      {
        title: 'Global Wealth Asset Diversification',
        description: 'Family offices acquiring prime commercial real estate in global financial gateways to hedge domestic risk.'
      },
      {
        title: 'Developer Joint Venture Structuring',
        description: 'Landowners and equity partners establishing clear equity-sharing, development milestones, and waterfall returns.'
      },
      {
        title: 'Cross-Border Residential Portfolios',
        description: 'HNIs navigating foreign exchange regulations and residency-linked property investments in premier jurisdictions.'
      }
    ],
    crossBorder: {
      heading: 'International real asset flows.',
      subheading: 'Sovereign clarity.',
      lead: 'Property acquisition across jurisdictions involves distinct legal traditions, registration fees, and tax implications.',
      paragraph:
        'We help investors navigate currency repatriation protocols, local zoning laws, and municipal ownership restrictions to ensure real estate investments remain liquid and legally protected.'
    },
    whyVka: {
      heading: 'Fiduciary posture. Institutional rigor.',
      subheading: 'WHY VKA',
      lead: 'We maintain complete independence from broker sales quotas and transaction commissions.',
      paragraph:
        'Our sole objective is ensuring your capital is deployed into fundamentally sound real assets, protected by robust legal structuring and conservative financial modeling.',
      points: [
        'Strictly advisory-first, non-broker model',
        'Direct access to institutional development partners',
        'In-depth cross-border tax and SPV structuring capability',
        'End-to-end transaction due diligence oversight'
      ]
    },
    cta: {
      heading: 'Evaluate your real estate capital strategy.',
      description:
        'Contact our real estate investment advisory group to discuss prospective acquisitions or portfolio restructuring.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'international-taxation',
      title: 'International Taxation'
    },
    next: {
      slug: 'advisory-management-consultancy',
      title: 'Advisory & Management Consultancy'
    },
    seo: {
      title: 'Real Estate Investment Advisory | VKA Capital Bridge',
      description:
        'Real estate acquisition due diligence, capital structuring, and portfolio strategy across prime commercial and residential assets.'
    }
  },
  {
    slug: 'advisory-management-consultancy',
    number: '06',
    title: 'Advisory & Management Consultancy',
    shortTitle: 'Management Consultancy',
    heroHighlightWord: 'Consultancy',
    category: 'Strategic Growth & Transition',
    kicker: 'Strategic Growth & Transition',
    tag: 'Capital Raising · M&A Strategy',
    description:
      'Strategic and operational consulting — business planning, capital raising support and organizational restructuring for businesses navigating growth or transition.',
    cardImage: imgManagementConsultancy,
    heroImage: imgManagementConsultancy,
    overviewImage: '/images/services/advisory-management.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Decisive strategy.',
      subheading: 'Commercial momentum.',
      lead: 'Significant enterprise transitions require seasoned strategic perspective and rigorous operational execution.',
      paragraphs: [
        'We advise owners, boards, and leadership teams navigating pivotal commercial moments — whether preparing for institutional capital raising, restructuring underperforming divisions, or entering new international markets.',
        'We do not deliver theoretical slide decks. Our advisory is anchored in balance sheet realities, capital structure discipline, and executive-level governance that drives measurable commercial outcomes.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Business Planning & Modeling',
        description: 'Developing defensible five-year financial models, sensitivity scenarios, and commercial business plans.'
      },
      {
        number: '02',
        title: 'Capital Raising Support',
        description: 'Preparation of institutional information memorandums, dataroom readiness, and debt/equity syndicate facilitation.'
      },
      {
        number: '03',
        title: 'Organizational Restructuring',
        description: 'Refining executive reporting lines, cost structures, and operational governance for scalable efficiency.'
      },
      {
        number: '04',
        title: 'M&A Transaction Advisory',
        description: 'Strategic target evaluation, synergy modeling, and commercial negotiation support during M&A discussions.'
      },
      {
        number: '05',
        title: 'Joint Venture Formations',
        description: 'Structuring governance agreements, capital contribution schedules, and dispute mechanisms for strategic partnerships.'
      },
      {
        number: '06',
        title: 'Corporate Turnaround Strategy',
        description: 'Crisis cash management, debt renegotiation, and non-core asset divestment for stressed operations.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Pragmatic. Commercial. Decisive.',
      lead: 'We partner closely with leadership to resolve bottlenecks and unlock enterprise growth.',
      steps: [
        {
          number: '01',
          title: 'Diagnose',
          description: 'Conduct rapid financial, operational, and commercial audits to identify structural constraints.'
        },
        {
          number: '02',
          title: 'Formulate',
          description: 'Develop concrete strategic initiatives with assigned accountability, capital requirements, and timelines.'
        },
        {
          number: '03',
          title: 'Execute',
          description: 'Work alongside management through critical implementation stages and stakeholder negotiations.'
        }
      ]
    },
    situations: [
      {
        title: 'Scaling from Mid-Market to Institutional',
        description: 'Privately held companies professionalizing governance and reporting to secure institutional private equity.'
      },
      {
        title: 'Generational or Leadership Transition',
        description: 'Family-owned enterprises establishing independent board structures and transparent management succession frameworks.'
      },
      {
        title: 'Strategic Market Entry',
        description: 'Established corporations evaluating cross-border joint ventures or direct corporate expansion into new territories.'
      }
    ],
    crossBorder: {
      heading: 'Navigating international growth.',
      subheading: 'Strategic clarity.',
      lead: 'Expanding across borders challenges traditional operating models and leadership bandwidth.',
      paragraph:
        'We help management teams evaluate cultural, legal, and operational nuances in target jurisdictions, structuring international operations to ensure sustainable long-term performance.'
    },
    whyVka: {
      heading: 'Direct experience. Uncompromising integrity.',
      subheading: 'WHY VKA',
      lead: 'We operate as an extension of the executive suite, bringing decades of commercial deal-making experience.',
      paragraph:
        'Our advice is candid, objective, and solely aligned with long-term shareholder value creation, unencumbered by corporate bureaucracy or conflicts of interest.',
      points: [
        'Board-level strategic and operational advisory',
        'Demonstrated track record in complex capital raising',
        'Hands-on execution support from senior partners',
        'Deep network across institutional capital providers'
      ]
    },
    cta: {
      heading: 'Accelerate your commercial strategy.',
      description:
        'Schedule a confidential discussion with our senior advisory team to review your corporate growth or transition objectives.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'real-estate-investment',
      title: 'Real Estate Investment'
    },
    next: {
      slug: 'insurance-risk-management',
      title: 'Insurance & Risk Management Advisory'
    },
    seo: {
      title: 'Advisory & Management Consultancy | VKA Capital Bridge',
      description:
        'Strategic and operational consultancy, business planning, institutional capital raising support, and organizational restructuring.'
    }
  }
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug)
}
