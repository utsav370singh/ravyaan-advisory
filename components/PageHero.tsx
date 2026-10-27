import Reveal from "./Reveal";

type HeroVariant = "default" | "service" | "about" | "insights" | "careers" | "contact" | "legal";

export default function PageHero({ eyebrow, title, intro, variant = "default", marker = "R", tags = [], className = "" }: { eyebrow: string; title: string; intro: string; variant?: HeroVariant; marker?: string; tags?: string[]; className?: string }) {
  return <section className={`page-hero page-hero-${variant} ${className}`}>
    <div className="page-hero-mesh" aria-hidden="true" />
    <div className="container page-hero-layout">
      <Reveal variant="left" className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>{tags.length > 0 && <div className="page-hero-tags">{tags.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}</div>}</Reveal>
      <Reveal variant="scale" delay={140} className="page-hero-visual">
        <div className="hero-motif" aria-hidden="true">
          <div className="motif-frame frame-one"/><div className="motif-frame frame-two"/><div className="motif-frame frame-three"/>
          <div className="motif-axis axis-one"/><div className="motif-axis axis-two"/>
          <span className="motif-marker">{marker}</span>
          <i className="motif-dot dot-one"/><i className="motif-dot dot-two"/><i className="motif-dot dot-three"/>
        </div>
      </Reveal>
    </div>
    <div className="page-hero-index" aria-hidden="true">{eyebrow}</div>
  </section>;
}
