export type Service = {
  number: string;
  slug: string;
  title: string;
  short: string;
  intro: string;
  message: string;
  groups: { title?: string; items: { name: string; detail?: string }[] }[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "finance-accounting",
    title: "Finance & Accounting",
    short: "Reliable financial information and stronger financial foundations.",
    intro: "RAVYAAN helps businesses establish reliable accounting, reporting and financial management systems that provide management with greater clarity and control.",
    message: "Reliable financial information is the foundation of better business decisions.",
    groups: [{ items: [
      { name: "Accounting & Bookkeeping", detail: "Structured accounting and bookkeeping support." },
      { name: "Financial Reporting", detail: "Preparation and support for financial statements and reporting." },
      { name: "MIS & Management Reporting", detail: "Relevant financial information for management decision-making." },
      { name: "Budgeting & Forecasting", detail: "Planning financial performance and future requirements." },
      { name: "Cash-Flow Management", detail: "Improving visibility over cash inflows, outflows and working capital." },
      { name: "Financial Controls", detail: "Strengthening accounting processes and financial controls." },
      { name: "Audit Readiness", detail: "Organising financial information, documentation and processes for audit requirements." },
    ] }],
  },
  {
    number: "02",
    slug: "tax-regulatory",
    title: "Tax & Regulatory",
    short: "Practical support for tax and regulatory complexity.",
    intro: "RAVYAAN provides practical tax and regulatory support across the business lifecycle.",
    message: "We help businesses manage tax and regulatory obligations while remaining focused on growth.",
    groups: [
      { title: "Direct Tax", items: ["Income tax", "Corporate taxation", "Tax planning", "TDS/TCS", "Tax compliance", "Assessment support", "Tax notice support"].map(name => ({ name })) },
      { title: "Indirect Tax", items: ["GST registration", "GST compliance", "GST advisory", "GST reconciliation", "E-invoicing", "E-way bill support", "GST health checks"].map(name => ({ name })) },
      { title: "Regulatory", items: ["MCA compliance", "Business registrations", "Entity compliance", "Regulatory reporting", "Compliance health checks"].map(name => ({ name })) },
    ],
  },
  {
    number: "03",
    slug: "business-advisory",
    title: "Business Advisory",
    short: "Insight and advice for important business decisions.",
    intro: "RAVYAAN works with entrepreneurs and management teams to address important business decisions and operational challenges.",
    message: "Better decisions begin with a clear understanding of your business.",
    groups: [{ items: ["Business planning", "Business model evaluation", "Financial feasibility", "Project reports", "Business restructuring", "Cost optimisation", "Working capital advisory", "Business process improvement", "Funding readiness", "Expansion planning", "Performance improvement", "Management decision support"].map(name => ({ name })) }],
  },
  {
    number: "04",
    slug: "strategy-cfo-advisory",
    title: "Strategy & CFO Advisory",
    short: "Financial and strategic support for business leadership.",
    intro: "RAVYAAN provides financial and strategic support to businesses that want stronger management visibility and decision-making capabilities.",
    message: "From financial visibility to strategic decision-making.",
    groups: [
      { title: "CFO Advisory", items: ["Monthly MIS", "Financial dashboards", "Budgeting", "Forecasting", "Cash-flow planning", "Working capital management", "Profitability analysis", "KPI development", "Management reporting", "Financial modelling"].map(name => ({ name })) },
      { title: "Strategic Advisory", items: ["Growth strategy", "Expansion planning", "Financial strategy", "Performance improvement", "Business planning", "Strategic decision support"].map(name => ({ name })) },
    ],
  },
  {
    number: "05",
    slug: "digital-finance",
    title: "Digital Finance & Managed Services",
    short: "Technology-enabled finance operations for modern businesses.",
    intro: "RAVYAAN combines professional finance expertise with technology to help businesses create efficient and connected finance operations.",
    message: "More than bookkeeping. A technology-enabled finance function for your business.",
    groups: [{ items: ["Cloud accounting", "Tally solutions", "Digital bookkeeping", "Remote finance operations", "Finance automation", "Digital reporting", "MIS automation", "Finance workflow improvement", "Accounting process digitisation", "Technology-enabled compliance support"].map(name => ({ name })) }],
  },
];

export const industries = [
  ["Manufacturing", "Finance, costing, working capital and business performance."],
  ["Renewable Energy", "Project finance, financial planning and business advisory."],
  ["Real Estate & Construction", "Accounting, taxation, project finance and business support."],
  ["Trading & Distribution", "Inventory, GST, working capital and profitability."],
  ["Technology & Digital", "Finance operations, business planning and growth support."],
  ["Startups & MSMEs", "Integrated finance, tax, business and growth advisory."],
  ["Professional Services", "Financial clarity, compliance and performance insight."],
  ["Agriculture & Agri-Business", "Structured finance and business support across the value chain."],
] as const;

export const values = [
  ["Integrity", "We build relationships through transparency, responsibility and trust."],
  ["Excellence", "We continuously improve the quality of our work."],
  ["Client Centricity", "We place client objectives at the centre of our approach."],
  ["Innovation", "We embrace technology and new ways of solving business challenges."],
  ["Confidentiality", "We respect the confidentiality of client information."],
  ["Impact", "We focus on creating meaningful and measurable value."],
] as const;
