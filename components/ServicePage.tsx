import Link from "next/link";
import { Service } from "@/data/site";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import Accordion from "./Accordion";
import Breadcrumbs from "./Breadcrumbs";

const processSteps = [
  ["01","Discover","Understand the business, priorities, existing information and immediate constraints."],
  ["02","Diagnose","Review the current position, identify gaps and establish the issues that matter most."],
  ["03","Design","Define practical actions, responsibilities, reporting and an appropriate delivery rhythm."],
  ["04","Deliver","Support implementation, monitor progress and refine the approach as the business evolves."],
];
const audiences=["Entrepreneurs and promoters","Startups and MSMEs","Growing owner-managed businesses","Management and finance teams"];

export default function ServicePage({ service }: { service: Service }) {
  return <>
    <PageHero eyebrow={`${service.number} — What we do`} title={service.title} intro={service.short} variant="service" marker={service.number} tags={service.groups.flatMap(group => group.items.slice(0, 2).map(item => item.name)).slice(0, 5)} className={`service-hero service-${service.slug}`} />
    <div className="container breadcrumb-band"><Breadcrumbs items={[{label:"What we do",href:"/#services"},{label:service.title}]}/></div>
    <section className={`section service-intro-section service-${service.slug}`}><div className="container service-intro"><Reveal variant="blur"><span className="section-kicker">Our capability</span><h2>{service.intro}</h2></Reveal><span className="service-watermark" aria-hidden="true">{service.number}</span></div></section>
    <section className={`section section-alt service-capability-section service-${service.slug}`}><div className="container">
      <div className="section-heading"><div><span className="section-kicker">Capabilities</span><h2>How We Can Help</h2></div><p>Practical support designed around the realities of your business.</p></div>
      <div className={`capability-groups ${service.groups.length > 1 ? "multi" : ""}`}>{service.groups.map((group, i) => <Reveal key={group.title || i} delay={i * 80} variant={i % 2 ? "right" : "left"}><div className="capability-group">{group.title && <h3>{group.title}</h3>}<div className="capability-list">{group.items.map((item, itemIndex) => <div key={item.name}><span>{String(itemIndex + 1).padStart(2,"0")}</span><div><h4>{item.name}</h4>{item.detail && <p>{item.detail}</p>}</div></div>)}</div></div></Reveal>)}</div>
    </div></section>
    <section className="section service-process"><div className="container"><div className="section-heading"><div><span className="section-kicker">How we work</span><h2>A Structured Route from Question to Action</h2></div><p>Scope and delivery are tailored to the nature, maturity and priorities of each business.</p></div><div className="process-grid">{processSteps.map(([number,title,text],index)=><Reveal key={title} delay={index*70} variant="scale"><article><span>{number}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
    <section className="section service-fit"><div className="container service-fit-grid"><Reveal variant="left"><div><span className="section-kicker">Who it is for</span><h2>Support Built Around the Way Your Business Operates</h2><p>Engagements can focus on a defined requirement or connect multiple disciplines where the challenge crosses finance, tax, operations and strategy.</p></div></Reveal><Reveal variant="right"><div className="fit-list">{audiences.map((item,index)=><div key={item}><span>0{index+1}</span><h3>{item}</h3></div>)}</div></Reveal></div></section>
    <section className="section section-alt service-outcomes"><div className="container"><span className="section-kicker">Potential outcomes</span><h2>Greater Clarity. Stronger Control. Better Decisions.</h2><div className="outcome-grid">{["More reliable management information","Clearer financial and operational priorities","More consistent processes and accountability","A stronger basis for sustainable growth"].map((item,index)=><Reveal key={item} delay={index*60} variant="up"><div><span>0{index+1}</span><p>{item}</p></div></Reveal>)}</div></div></section>
    <section className="section service-faq"><div className="container faq-layout"><div><span className="section-kicker">Frequently asked</span><h2>Before We Begin</h2></div><Accordion items={[{question:`Can RAVYAAN tailor ${service.title.toLowerCase()} support to our business?`,answer:"Yes. We begin by understanding the business context and define a proportionate scope rather than applying a standard package."},{question:"Can you work with our existing team and advisers?",answer:"Yes. RAVYAAN can work alongside management, internal finance teams and existing professional advisers with clear roles and information protocols."},{question:"How does an engagement start?",answer:"An initial conversation helps clarify the requirement. Scope, responsibilities, timelines and commercial terms are agreed before any professional engagement begins."}]}/></div></section>
    <section className={`quote-section service-quote service-${service.slug}`}><div className="quote-orbit" aria-hidden="true"/><div className="container"><Reveal variant="blur"><span className="quote-mark">“</span><blockquote>{service.message}</blockquote><Link className="text-link" data-track="service-advisor-cta" href={`/contact?area=${encodeURIComponent(service.title)}`}>Talk to an Advisor <span>↗</span></Link></Reveal></div></section>
  </>;
}
