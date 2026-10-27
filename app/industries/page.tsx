import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { industries } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry-focused finance, tax, advisory, strategy and digital support.",
};

export default function Industries() {
  return <>
    <section className="page-hero industry-hero">
      <div className="industry-hero-grid-lines" aria-hidden="true" />
      <div className="container industry-hero-layout">
        <Reveal variant="left" className="industry-hero-copy">
          <span className="eyebrow">Industries</span>
          <h1>Business Context <em>Matters.</em></h1>
          <p>We bring an integrated perspective to the financial, operational and strategic realities of different industries.</p>
          <div className="industry-hero-meta">
            <div><strong>08</strong><span>Industry perspectives</span></div>
            <div><strong>05</strong><span>Connected capabilities</span></div>
          </div>
          <a className="industry-scroll-link" href="#industry-sectors">Explore sectors <i>↓</i></a>
        </Reveal>

        <Reveal variant="scale" delay={180} className="industry-system-wrap">
          <div className="industry-system" aria-hidden="true">
            <div className="system-ring ring-a" /><div className="system-ring ring-b" /><div className="system-ring ring-c" />
            <div className="system-axis axis-x" /><div className="system-axis axis-y" />
            <div className="system-core"><span>R</span><small>Integrated<br />Perspective</small></div>
            {["Manufacturing", "Renewable", "Real Estate", "Trade", "Technology", "Startups"].map((name, i) => <div className={`system-node node-${i + 1}`} key={name}><i /><span>{name}</span></div>)}
            <span className="system-pulse pulse-a" /><span className="system-pulse pulse-b" />
          </div>
        </Reveal>
      </div>
      <div className="industry-hero-marquee" aria-hidden="true"><span>FINANCE · TAX · ADVISORY · STRATEGY · DIGITAL ·</span><span>FINANCE · TAX · ADVISORY · STRATEGY · DIGITAL ·</span></div>
    </section>

    <section className="section industry-directory" id="industry-sectors"><div className="container industry-page-grid">{industries.map(([title, text], i) => <Reveal key={title} delay={(i % 4) * 70} variant={i % 2 ? "right" : "left"}><article><span>{String(i + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{text}</p><Link href={`/contact?area=${encodeURIComponent(title)}`}>Discuss your business <b>↗</b></Link></article></Reveal>)}</div></section>

    <section className="final-cta compact"><div className="cta-lines" aria-hidden="true"><i /><i /><i /></div><div className="container"><Reveal variant="blur"><h2>Expertise That Grows With Your Business.</h2><p>Our industry coverage will continue to expand as RAVYAAN&apos;s client base and professional ecosystem grow.</p><Link className="button button-light" href="/contact">Start a conversation <span>↗</span></Link></Reveal></div></section>
  </>;
}
