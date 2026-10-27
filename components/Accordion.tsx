"use client";
import { useState } from "react";

export default function Accordion({ items, className = "" }: { items: { question: string; answer: string }[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className={`accordion ${className}`}>{items.map((item, index) => <div className={`accordion-item ${open === index ? "open" : ""}`} key={item.question}><h3><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{item.question}</span><i aria-hidden="true">+</i></button></h3><div className="accordion-panel" aria-hidden={open !== index}><div><p>{item.answer}</p></div></div></div>)}</div>;
}
