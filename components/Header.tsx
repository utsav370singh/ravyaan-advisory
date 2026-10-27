"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const nav = [
  ["What we do", "/#services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About us", "/about"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Ravyaan Advisory home">
          <span className="brand-mark">R</span>
          <span><b>RAVYAAN</b><small>ADVISORY</small></span>
        </Link>
        <nav className={`main-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          <Link href="/contact" className="button nav-cta">Talk to an Advisor <span>↗</span></Link>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button className={`menu-toggle ${open ? "active" : ""}`} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
