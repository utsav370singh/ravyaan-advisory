import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InsightExplorer from "@/components/InsightExplorer";
import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Insights", description: "Practical finance, tax, business, strategy, MSME and technology perspectives for business leaders." };

export default function Insights(){return <>
  <PageHero eyebrow="RAVYAAN Insights" title="Perspectives for Business Leaders." intro="Practical knowledge to help business leaders understand change, evaluate choices and make more informed decisions." variant="insights" marker="01" tags={["Finance","Tax","Business","Strategy","MSME"]}/>
  <section className="section insights-directory"><div className="container"><div className="section-heading"><div><span className="section-kicker">Ideas for action</span><h2>Latest Perspectives</h2></div><p>Editorial samples demonstrate the intended resource experience and can be replaced through the central insights data file.</p></div><InsightExplorer/></div></section>
  <section className="section case-study-state" id="case-studies"><div className="container empty-case-grid"><Reveal variant="left"><div><span className="section-kicker">Case studies</span><h2>Evidence, Published Responsibly.</h2></div></Reveal><Reveal variant="right"><div><p className="lead">No client case studies are published yet.</p><p>Case studies will appear only when the engagement is genuine, outcomes are supportable and the client has provided permission. We do not use fictional success stories.</p></div></Reveal></div></section>
  <section className="newsletter-band" id="reports"><div className="container"><NewsletterForm/></div></section>
  </>}
