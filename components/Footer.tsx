import Link from "next/link";
import { services } from "@/data/site";
import { siteConfig } from "@/data/config";
import BackToTop from "./BackToTop";

export default function Footer(){return <footer className="footer"><div className="container footer-top"><div className="footer-brand"><Link href="/" className="brand brand-light"><span className="brand-mark">R</span><span><b>RAVYAAN</b><small>ADVISORY</small></span></Link><p>{siteConfig.descriptor}</p><p className="footer-disciplines">{siteConfig.pillarsLine}</p></div><div className="footer-links">
  <div><h3>Company</h3><Link href="/about">About Us</Link><Link href="/about#leadership">Leadership</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
  <div><h3>What We Do</h3>{services.map(s=><Link key={s.slug} href={`/${s.slug}`}>{s.title}</Link>)}</div>
  <div><h3>Industries</h3><Link href="/industries#manufacturing">Manufacturing</Link><Link href="/industries#renewable-energy">Renewable Energy</Link><Link href="/industries#real-estate-construction">Real Estate & Construction</Link><Link href="/industries#trading-distribution">Trading & Distribution</Link><Link href="/industries#technology-digital">Technology & Digital</Link><Link href="/industries#startups-msmes">Startups & MSMEs</Link></div>
  <div><h3>Resources</h3><Link href="/insights">Insights</Link><Link href="/insights#reports">Reports</Link><Link href="/insights#case-studies">Case Studies</Link><Link href="/contact#faq">FAQs</Link></div>
  <div><h3>Global</h3><span>India</span><span>USA</span><span>UAE</span><span>Singapore</span><span>Global Markets</span></div>
  <div><h3>Legal</h3><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/cookies">Cookies</Link><Link href="/professional-disclaimer">Professional Disclaimer</Link></div>
  </div></div><div className="container footer-bottom"><div><span>© {new Date().getFullYear()} {siteConfig.legalName}</span><p>Website information is general in nature and does not establish a professional engagement.</p></div><BackToTop/></div></footer>}
