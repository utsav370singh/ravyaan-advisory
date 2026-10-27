"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { services } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

const nav = [["Industries","/industries"],["Insights","/insights"],["About us","/about"],["Careers","/careers"],["Contact","/contact"]] as const;

export default function Header(){
  const pathname=usePathname(); const [menu,setMenu]=useState(false); const [mega,setMega]=useState(false); const [scrolled,setScrolled]=useState(false); const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  useEffect(()=>{setMenu(false);setMega(false);window.scrollTo({top:0,behavior:"auto"})},[pathname]);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>18);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape"){setMega(false);setMenu(false)}};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
  useEffect(()=>{document.body.style.overflow=menu?"hidden":"";return()=>{document.body.style.overflow=""}},[menu]);
  const enter=()=>{if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>setMega(true),120)}; const leave=()=>{if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>setMega(false),120)};
  const active=(href:string)=>pathname===href||pathname.startsWith(`${href}/`);
  return <header className={`site-header ${scrolled?"scrolled":""}`}>
    <div className="nav-shell">
      <Link href="/" className="brand" aria-label="RAVYAAN ADVISORY home"><span className="brand-mark">R</span><span><b>RAVYAAN</b><small>ADVISORY</small></span></Link>
      <nav className={`main-nav ${menu?"open":""}`} aria-label="Primary navigation">
        <div className={`nav-mega ${mega?"open":""}`} onMouseEnter={enter} onMouseLeave={leave}>
          <button type="button" className={services.some(s=>pathname===`/${s.slug}`)?"active":""} aria-expanded={mega} aria-controls="services-mega" onClick={()=>setMega(!mega)}>What we do <span className="nav-chevron" aria-hidden="true"/></button>
          <div className="mega-menu" id="services-mega"><div className="mega-intro"><span>What we do</span><h2>Five connected capabilities.<br/>One clear perspective.</h2><Link href="/#services">Explore our services →</Link></div><div className="mega-services">{services.map(service=><Link href={`/${service.slug}`} key={service.slug}><span>{service.number}</span><div><b>{service.title}</b><small>{service.short}</small></div><i aria-hidden="true">↗</i></Link>)}</div></div>
        </div>
        {nav.map(([label,href],index)=><Link className={active(href)?"active":""} style={{"--nav-index":index} as CSSProperties} key={label} href={href}>{label}</Link>)}
        <Link href="/contact?source=navbar" data-track="talk-to-advisor" className="button nav-cta">Talk to an Advisor <span>↗</span></Link>
      </nav>
      <div className="nav-actions"><ThemeToggle/><button className={`menu-toggle ${menu?"active":""}`} type="button" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation"><span/><span/></button></div>
    </div>
  </header>
}
