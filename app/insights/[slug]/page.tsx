import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { insights } from "@/data/insights";

export function generateStaticParams(){return insights.map(item=>({slug:item.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=insights.find(entry=>entry.slug===slug);return item?{title:item.title,description:item.excerpt}:{title:"Insight not found"}}

export default async function InsightArticle({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const article=insights.find(item=>item.slug===slug); if(!article)notFound();
  const related=insights.filter(item=>item.slug!==article.slug).slice(0,3);
  const schema={"@context":"https://schema.org","@type":"Article",headline:article.title,datePublished:article.date,description:article.excerpt,author:{"@type":"Organization",name:"RAVYAAN ADVISORY"}};
  return <><article className="article-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div className="container article-head"><Breadcrumbs items={[{label:"Insights",href:"/insights"},{label:article.title}]}/><span className="section-kicker">{article.category}</span><h1>{article.title}</h1><p>{article.excerpt}</p><div className="article-byline"><time dateTime={article.date}>{new Date(article.date).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}</time><span>{article.readTime}</span><span>Editable sample</span></div></div><div className="container article-body"><aside><span>In this perspective</span>{article.sections.map((section,index)=><a href={`#section-${index}`} key={section.heading}>{section.heading}</a>)}</aside><div>{article.sections.map((section,index)=><Reveal key={section.heading} variant="up"><section id={`section-${index}`}><h2>{section.heading}</h2><p>{section.body}</p></section></Reveal>)}<div className="article-note"><strong>Important note</strong><p>This material is general information, not professional advice. Specific circumstances should be reviewed before decisions are made.</p></div></div></div></article><section className="section related-insights"><div className="container"><div className="section-heading"><h2>Continue Reading</h2><Link className="text-link" href="/insights">All insights ↗</Link></div><div className="related-grid">{related.map(item=><Link href={`/insights/${item.slug}`} key={item.slug}><span>{item.category}</span><h3>{item.title}</h3><small>{item.readTime} ↗</small></Link>)}</div></div></section></>
}
