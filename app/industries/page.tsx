import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { industries } from "@/data/site";

export const metadata: Metadata = {title:"Industries",description:"Industry-focused finance, tax, advisory, strategy and digital support."};
const focus:Record<string,string[]>={
  "Manufacturing":["Costing and margin visibility","Working-capital discipline","Finance controls and reporting"],
  "Renewable Energy":["Project finance readiness","Financial planning","Business and regulatory coordination"],
  "Real Estate & Construction":["Project accounting","Cash-flow and taxation","Management reporting"],
  "Trading & Distribution":["Inventory visibility","GST and transaction controls","Working-capital performance"],
  "Technology & Digital":["Scalable finance operations","Planning and performance","Growth decision support"],
  "Startups & MSMEs":["Financial foundations","Compliance and MIS","Funding and growth readiness"],
  "Professional Services":["Utilisation and profitability","Cash collection","Management insight"],
  "Agriculture & Agri-Business":["Value-chain finance","Planning and controls","Business support"],
};
const slug=(title:string)=>title.toLowerCase().replaceAll(" & ","-").replaceAll(" ","-");

export default function Industries(){return <>
  <section className="page-hero industry-hero"><div className="industry-hero-grid-lines" aria-hidden="true"/><div className="container industry-hero-layout"><Reveal variant="left" className="industry-hero-copy"><span className="eyebrow">Industries</span><h1>Business Context <em>Matters.</em></h1><p>We bring an integrated perspective to the financial, operational and strategic realities of different industries.</p><div className="industry-hero-meta"><div><strong>08</strong><span>Industry perspectives</span></div><div><strong>05</strong><span>Connected capabilities</span></div></div><a className="industry-scroll-link" href="#industry-sectors">Explore sectors <i>↓</i></a></Reveal><Reveal variant="scale" delay={180} className="industry-system-wrap"><div className="industry-system" aria-hidden="true"><div className="system-ring ring-a"/><div className="system-ring ring-b"/><div className="system-ring ring-c"/><div className="system-axis axis-x"/><div className="system-axis axis-y"/><div className="system-core"><span>R</span><small>Integrated<br/>Perspective</small></div>{["Manufacturing","Renewable","Real Estate","Trade","Technology","Startups"].map((name,i)=><div className={`system-node node-${i+1}`} key={name}><i/><span>{name}</span></div>)}<span className="system-pulse pulse-a"/><span className="system-pulse pulse-b"/></div></Reveal></div><div className="industry-hero-marquee" aria-hidden="true"><span>FINANCE · TAX · ADVISORY · STRATEGY · DIGITAL ·</span><span>FINANCE · TAX · ADVISORY · STRATEGY · DIGITAL ·</span></div></section>
  <section className="section industry-directory" id="industry-sectors"><div className="container"><div className="section-heading"><div><span className="section-kicker">Sector perspectives</span><h2>Understanding the Operating Reality</h2></div><p>Our view connects commercial context with finance, tax, operating controls, strategic choices and technology.</p></div><div className="industry-page-grid">{industries.map(([title,text],i)=><Reveal key={title} delay={(i%4)*70} variant={i%2?"right":"left"}><article id={slug(title)}><span>{String(i+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p><ul>{focus[title].map(item=><li key={item}>{item}</li>)}</ul><Link href={`/contact?area=${encodeURIComponent(title)}`}>Discuss your business <b>↗</b></Link></article></Reveal>)}</div></div></section>
  <section className="section industry-method"><div className="container split-copy"><Reveal variant="left"><div><span className="section-kicker">Our lens</span><h2>Different Industries. A Connected Set of Questions.</h2></div></Reveal><Reveal variant="right"><div className="industry-lens">{["What drives value and margin?","Where is cash tied up?","Which obligations and risks need attention?","What information does management need?","Which capabilities must change to support growth?"].map((item,index)=><div key={item}><span>0{index+1}</span><p>{item}</p></div>)}</div></Reveal></div></section>
  <section className="final-cta compact"><div className="cta-lines" aria-hidden="true"><i/><i/><i/></div><div className="container"><Reveal variant="blur"><h2>Expertise That Grows With Your Business.</h2><p>Our industry coverage will continue to expand as RAVYAAN&apos;s client base and professional ecosystem grow.</p><Link className="button button-light" href="/contact">Start a conversation <span>↗</span></Link></Reveal></div></section>
  </>}
