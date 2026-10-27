"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
        root.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.12, 90)}px`);
      });
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => { window.removeEventListener("scroll", updateScroll); cancelAnimationFrame(frame); };
  }, []);
  return <div className="scroll-progress" aria-hidden="true" />;
}
