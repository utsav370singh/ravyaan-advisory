import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li>{items.map((item, index) => <li key={item.label}>{item.href && index < items.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current={index === items.length - 1 ? "page" : undefined}>{item.label}</span>}</li>)}</ol></nav>;
}
