"use client";

import { ReactNode, useEffect, useRef } from "react";

type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

export default function Reveal({ children, className = "", delay = 0, variant = "up" }: { children: ReactNode; className?: string; delay?: number; variant?: RevealVariant }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal reveal-${variant} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
