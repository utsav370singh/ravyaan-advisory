import Link from "next/link";
import { services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light"><span className="brand-mark">R</span><span><b>RAVYAAN</b><small>ADVISORY</small></span></Link>
          <p>Professional Services & Business Advisory</p>
          <p className="footer-disciplines">Finance · Tax · Advisory · Strategy · Digital</p>
        </div>
        <div className="footer-links">
          <div><h3>Company</h3><Link href="/about">About us</Link><Link href="/about#leadership">Leadership</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
          <div><h3>What we do</h3>{services.map(s => <Link key={s.slug} href={`/${s.slug}`}>{s.title}</Link>)}</div>
          <div><h3>Resources</h3><Link href="/insights">Insights</Link><Link href="/insights#reports">Reports</Link><Link href="/insights#case-studies">Case studies</Link><Link href="/contact#faq">FAQs</Link></div>
          <div><h3>Global</h3><span>India</span><span>USA</span><span>UAE</span><span>Singapore</span><span>Global markets</span></div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} RAVYAAN ADVISORY PRIVATE LIMITED</span>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/cookies">Cookies</Link></div>
      </div>
    </footer>
  );
}
