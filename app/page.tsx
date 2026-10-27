import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { industries, services } from "@/data/site";

const differentiators = [
  ["Integrated Perspective", "Finance, tax, business and strategy considered together."],
  ["Business Focus", "Advice designed around commercial objectives."],
  ["Technology Enabled", "Modern technology supporting efficient finance operations."],
  ["Practical Approach", "Recommendations designed for real-world implementation."],
  ["Long-Term Partnership", "Supporting businesses through different stages of growth."],
  ["Professional Discipline", "Structured processes, confidentiality and professional standards."],
];
const approach = [
  ["01", "Understand", "We understand your business, objectives and challenges."],
  ["02", "Advise", "We provide practical, commercially focused recommendations."],
  ["03", "Execute", "We support implementation through people, processes and technology."],
  ["04", "Grow", "We help build capabilities for sustainable growth."],
];

export default function Home() {
  return <>
    <section className="hero">
      <Image src="/images/ravyaan-hero.png" alt="Contemporary architecture overlooking a global city at dusk" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-overlay" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="container hero-content">
        <div className="hero-copy"><span className="hero-eyebrow">Professional Services & Business Advisory</span><h1>Turning Business Complexity into <em>Strategic Advantage.</em></h1><p>Professional services and business advisory for businesses seeking clarity, control and sustainable growth.</p><div className="hero-actions"><Link className="button button-light" href="#services">Explore Our Services <span>↓</span></Link><Link className="button button-outline" href="/contact">Talk to an Advisor <span>↗</span></Link></div></div>
        <div className="hero-disciplines"><span>Finance</span><span>Tax</span><span>Advisory</span><span>Strategy</span><span>Digital</span></div>
      </div>
    </section>

    <section className="section intro-section" id="introduction"><div className="container intro-grid"><Reveal variant="left"><span className="section-kicker">Who we are</span><h2>Advisory Built Around <em>Your Ambitions.</em></h2></Reveal><Reveal delay={120} variant="right"><div className="intro-copy"><p className="lead">Businesses face increasingly complex financial, regulatory and strategic decisions.</p><p>RAVYAAN helps entrepreneurs and organisations navigate that complexity through practical advice, financial insight, technology and structured execution.</p><p>We work across the business lifecycle—from establishing strong financial foundations to supporting growth, transformation and strategic decision-making.</p><Link href="/about" className="text-link">Discover RAVYAAN <span>↗</span></Link></div></Reveal></div><span className="section-ghost" aria-hidden="true">01</span></section>

    <section className="section services-section" id="services"><div className="container"><div className="section-heading"><Reveal variant="left"><div><span className="section-kicker">What we do</span><h2>How We Help Businesses</h2></div></Reveal><Reveal variant="right"><p>Five connected capabilities. One clear view of your business.</p></Reveal></div><div className="services-list">{services.map((service, i) => <Reveal key={service.slug} delay={i * 70} variant={i % 2 ? "right" : "left"}><Link href={`/${service.slug}`} className="service-row"><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.short}</p><span className="round-arrow">↗</span></Link></Reveal>)}</div></div></section>

    <section className="section lifecycle-section"><div className="lifecycle-word" aria-hidden="true">GROWTH</div><div className="container"><div className="section-heading light"><div><span className="section-kicker">Business lifecycle</span><h2>Supporting Businesses at Every Stage</h2></div><p>From the first foundation to professional scale.</p></div><div className="lifecycle-line">{[["Start","Build the right financial and business foundations."],["Build","Strengthen systems, processes and financial visibility."],["Grow","Improve performance and identify growth opportunities."],["Scale","Build professional management, technology and strategic capabilities."]].map(([title,text], i) => <Reveal key={title} delay={i*110} variant="scale"><div className="lifecycle-step"><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section>

    <section className="section industries-editorial" id="industries"><div className="container"><Reveal variant="blur"><div className="industry-home-heading"><span className="section-kicker">Industry perspective</span><h2>Industries<br/>We Understand</h2><Link href="/industries" className="text-link">Explore all industries <span>↗</span></Link></div></Reveal><div className="industry-stack industry-home-grid">{industries.slice(0,6).map(([title],i) => <Reveal key={title} delay={i*65} variant={i%2 ? "right" : "left"}><article className="industry-strip"><span className="card-index">0{i+1}</span><div><h3>{title}</h3></div><Link href="/contact" aria-label={`Discuss ${title}`}>↗</Link></article></Reveal>)}</div></div></section>

    <section className="section section-alt difference-section"><div className="container"><div className="difference-layout"><Reveal variant="left"><div className="difference-sticky"><span className="section-kicker">Why RAVYAAN</span><h2>Clarity Across the Whole Business</h2><p>Professional rigour paired with an entrepreneurial mindset.</p><div className="difference-ring" aria-hidden="true"><span>R</span></div></div></Reveal><div className="difference-list">{differentiators.map(([title,text],i) => <Reveal key={title} delay={(i%2)*70} variant="right"><div className="difference-row"><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></div></Reveal>)}</div></div></div></section>

    <section className="section approach-section"><div className="container"><Reveal variant="blur"><div className="approach-title"><span className="section-kicker">Our approach</span><h2>Understand.<br/><span>Advise.</span> Execute. <em>Grow.</em></h2></div></Reveal><div className="approach-grid">{approach.map(([num,title,text],i) => <Reveal key={title} delay={i*100} variant="scale"><div className="approach-item"><div><span>{num}</span><i>→</i></div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section>

    <section className="global-section"><div className="global-globe" aria-hidden="true"><i/><i/><i/></div><div className="container global-grid"><Reveal variant="left"><div><span className="section-kicker light-kicker">Global perspective</span><h2>India & Global<br />Business Advisory</h2><p className="global-tagline">Local Expertise. Global Perspective.</p></div></Reveal><Reveal delay={100} variant="right"><div className="global-copy"><p>RAVYAAN is based in India with an ambition to support businesses operating across international markets.</p><div className="market-list"><span>India</span><span>USA</span><span>UAE</span><span>Singapore</span><span>Middle East</span><span>Global Markets</span></div><p className="small-note">International regulated services are offered only through appropriately qualified professionals or specialist partners where required.</p></div></Reveal></div></section>

    <section className="section insights-preview"><div className="container"><div className="insights-layout"><Reveal variant="left"><div className="insights-feature"><span className="section-kicker">RAVYAAN Insights</span><h2>Perspectives for Business Leaders</h2><p>Practical knowledge for clearer decisions, stronger finance and sustainable growth.</p><Link className="button button-primary" href="/insights">View all insights <span>↗</span></Link><span className="insight-watermark" aria-hidden="true">R</span></div></Reveal><div className="insight-categories">{["Tax & Regulatory","Finance","Business","Strategy","MSME","Technology"].map((item,i)=><Reveal key={item} delay={i*55} variant="right"><Link href="/insights"><span>0{i+1}</span>{item}<b>↗</b></Link></Reveal>)}</div></div></div></section>

    <section className="section leadership-preview" id="leadership"><div className="container leadership-grid"><Reveal variant="scale"><div className="leadership-visual"><span>R</span><small>Leadership built on<br/>professional discipline.</small><i aria-hidden="true"/></div></Reveal><Reveal delay={100} variant="right"><div><span className="section-kicker">Leadership</span><h2>Building an Integrated Advisory Platform</h2><p>The founder is focused on bringing finance, business advisory, technology and entrepreneurial solutions together to help businesses operate, grow and transform.</p><p className="small-note">Verified leadership credentials and professional profiles will be added as the organisation grows.</p><Link className="text-link" href="/about#leadership">About our approach <span>↗</span></Link></div></Reveal></div></section>

    <section className="final-cta"><div className="cta-lines" aria-hidden="true"><i/><i/><i/></div><div className="container"><Reveal variant="blur"><span className="section-kicker light-kicker">Start a conversation</span><h2>Your Next Business Decision Deserves a Clear Perspective.</h2><p>Whether you are starting, growing, restructuring or transforming your business, RAVYAAN can help you evaluate the opportunity and define the next step.</p><Link className="button button-light" href="/contact">Talk to an Advisor <span>↗</span></Link></Reveal></div></section>
  </>;
}
