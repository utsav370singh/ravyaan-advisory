import Link from "next/link";
import { Service } from "@/data/site";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

export default function ServicePage({ service }: { service: Service }) {
  return <>
    <PageHero eyebrow={`${service.number} — What we do`} title={service.title} intro={service.short} variant="service" marker={service.number} tags={service.groups.flatMap(group => group.items.slice(0, 2).map(item => item.name)).slice(0, 5)} className={`service-hero service-${service.slug}`} />
    <section className={`section service-intro-section service-${service.slug}`}><div className="container service-intro"><Reveal variant="blur"><span className="section-kicker">Our capability</span><h2>{service.intro}</h2></Reveal><span className="service-watermark" aria-hidden="true">{service.number}</span></div></section>
    <section className={`section section-alt service-capability-section service-${service.slug}`}><div className="container">
      <div className="section-heading"><div><span className="section-kicker">Capabilities</span><h2>How we can help</h2></div><p>Practical support designed around the realities of your business.</p></div>
      <div className={`capability-groups ${service.groups.length > 1 ? "multi" : ""}`}>{service.groups.map((group, i) => <Reveal key={group.title || i} delay={i * 80} variant={i % 2 ? "right" : "left"}><div className="capability-group">{group.title && <h3>{group.title}</h3>}<div className="capability-list">{group.items.map((item, itemIndex) => <div key={item.name}><span>{String(itemIndex + 1).padStart(2,"0")}</span><div><h4>{item.name}</h4>{item.detail && <p>{item.detail}</p>}</div></div>)}</div></div></Reveal>)}</div>
    </div></section>
    <section className={`quote-section service-quote service-${service.slug}`}><div className="quote-orbit" aria-hidden="true"/><div className="container"><Reveal variant="blur"><span className="quote-mark">“</span><blockquote>{service.message}</blockquote><Link className="text-link" href="/contact">Talk to an Advisor <span>↗</span></Link></Reveal></div></section>
  </>;
}
