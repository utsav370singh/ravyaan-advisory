export type Insight = {
  slug: string;
  title: string;
  category: "Finance" | "Tax & Regulatory" | "Business" | "Strategy" | "MSME" | "Technology";
  excerpt: string;
  date: string;
  readTime: string;
  sample: true;
  sections: { heading: string; body: string }[];
};

export const insights: Insight[] = [
  { slug:"building-a-practical-cash-flow-rhythm", title:"Building a Practical Cash-Flow Rhythm for Better Decisions", category:"Finance", date:"2026-10-15", readTime:"6 min read", sample:true, excerpt:"A disciplined cash-flow rhythm can help management anticipate pressure, prioritise decisions and improve working-capital visibility.", sections:[
    {heading:"Start with decision-useful visibility",body:"Cash-flow reporting should help management understand timing, dependencies and the decisions that need attention. A concise rolling view is often more useful than a complex model that is difficult to maintain."},
    {heading:"Connect forecasts to operating actions",body:"Receivables, inventory, supplier terms and planned expenditure should be reviewed together. Assign clear owners to the assumptions that have the greatest impact on liquidity."},
    {heading:"Review the variance, not only the balance",body:"Comparing forecast and actual movements helps expose weak assumptions and recurring process issues. Over time, this improves both forecast quality and management confidence."},
  ]},
  { slug:"gst-reconciliations-as-a-management-control", title:"GST Reconciliations as a Management Control", category:"Tax & Regulatory", date:"2026-10-10", readTime:"5 min read", sample:true, excerpt:"A structured GST reconciliation process supports compliance while also improving the reliability of underlying transaction data.", sections:[
    {heading:"Treat reconciliation as a recurring control",body:"Regular reconciliation can identify classification, timing and documentation issues before they become larger compliance problems."},
    {heading:"Link tax data to accounting records",body:"Differences between ledgers, returns and source documents should be investigated with clear ownership and an auditable trail."},
    {heading:"Escalate patterns, not only exceptions",body:"Repeated exceptions may indicate a process or system issue. Management should use these patterns to improve controls across the transaction cycle."},
  ]},
  { slug:"turning-business-plans-into-management-tools", title:"Turning Business Plans into Management Tools", category:"Business", date:"2026-10-04", readTime:"7 min read", sample:true, excerpt:"A useful business plan is not a static document—it connects commercial priorities, financial assumptions and execution responsibilities.", sections:[
    {heading:"Build from commercial drivers",body:"Revenue, cost and capital assumptions should reflect how the business actually operates. The plan becomes more useful when every assumption has a clear rationale."},
    {heading:"Define decisions and ownership",body:"Milestones should identify who is responsible, what evidence signals progress and when management needs to reconsider the course."},
    {heading:"Keep the plan alive",body:"A periodic review turns the plan into a management tool. Update assumptions when evidence changes rather than waiting for an annual planning cycle."},
  ]},
  { slug:"connecting-financial-insight-with-growth-strategy", title:"Connecting Financial Insight with Growth Strategy", category:"Strategy", date:"2026-09-26", readTime:"6 min read", sample:true, excerpt:"Growth choices become clearer when management connects strategic ambition with unit economics, cash requirements and execution capacity.", sections:[
    {heading:"Make the strategic choice explicit",body:"Clarify whether the priority is market expansion, capacity, product development, operational improvement or a combination of these."},
    {heading:"Translate ambition into financial consequences",body:"Evaluate working capital, investment, management capacity and the time required before benefits are expected to emerge."},
    {heading:"Create decision checkpoints",body:"Define leading indicators and review points that allow management to adapt before resources are fully committed."},
  ]},
  { slug:"management-information-for-growing-msmes", title:"Management Information for Growing MSMEs", category:"MSME", date:"2026-09-18", readTime:"5 min read", sample:true, excerpt:"Focused management information can help growing businesses move from reactive reporting to clearer operational and financial control.", sections:[
    {heading:"Begin with management questions",body:"Reports should answer the questions leadership repeatedly faces: profitability, cash, receivables, inventory, capacity and performance against plan."},
    {heading:"Use a small set of consistent measures",body:"A focused dashboard with reliable definitions is more valuable than a large set of measures that teams interpret differently."},
    {heading:"Build a review habit",body:"Information creates value when it leads to discussion, decisions and accountable follow-through."},
  ]},
  { slug:"designing-a-connected-digital-finance-workflow", title:"Designing a Connected Digital Finance Workflow", category:"Technology", date:"2026-09-10", readTime:"6 min read", sample:true, excerpt:"Digital finance works best when technology simplifies a well-designed process rather than automating fragmented work.", sections:[
    {heading:"Map the workflow before choosing tools",body:"Understand how information enters the finance function, where approvals occur and which hand-offs create delay or rework."},
    {heading:"Standardise the core process",body:"Clear roles, documentation and exception handling create the foundation for useful automation."},
    {heading:"Measure operational quality",body:"Track timeliness, completeness and recurring exceptions so technology decisions remain connected to business outcomes."},
  ]},
];

export const insightCategories = ["All", "Finance", "Tax & Regulatory", "Business", "Strategy", "MSME", "Technology"] as const;
