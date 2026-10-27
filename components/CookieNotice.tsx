"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(!localStorage.getItem("ravyaan-cookie-choice")), []);
  if (!show) return null;
  const choose = (value: string) => { localStorage.setItem("ravyaan-cookie-choice", value); setShow(false); };
  return <div className="cookie-notice" role="dialog" aria-label="Cookie preferences"><p>We use essential cookies to keep this website working. Optional analytics can help us improve the experience. <Link href="/cookies">Learn more</Link></p><div><button onClick={() => choose("essential")}>Essential only</button><button className="button button-primary" onClick={() => choose("accepted")}>Accept all</button></div></div>;
}
