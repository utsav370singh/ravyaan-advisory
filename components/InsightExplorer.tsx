"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { insightCategories, insights } from "@/data/insights";

export default function InsightExplorer(){
  const [category,setCategory]=useState<(typeof insightCategories)[number]>("All");
  const [query,setQuery]=useState(""); const [visible,setVisible]=useState(4);
  const filtered=useMemo(()=>insights.filter(item=>(category==="All"||item.category===category)&&`${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
  return <div className="insight-explorer">
    <div className="insight-tools"><label className="insight-search"><span className="sr-only">Search insights</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search insights"/><i aria-hidden="true">⌕</i></label><div className="filter-chips" role="group" aria-label="Filter by category">{insightCategories.map(item=><button type="button" className={category===item?"active":""} aria-pressed={category===item} onClick={()=>{setCategory(item);setVisible(4)}} key={item}>{item}</button>)}</div></div>
    <div className="articles-grid">{filtered.slice(0,visible).map((article,index)=><article className={index===0?"featured":""} key={article.slug}><div className="article-meta"><span>{article.category}</span><time dateTime={article.date}>{new Date(article.date).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</time></div><h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2><p>{article.excerpt}</p><div className="article-footer"><small>{article.readTime} · Editable sample</small><Link href={`/insights/${article.slug}`} aria-label={`Read ${article.title}`}>↗</Link></div></article>)}</div>
    {filtered.length===0&&<div className="empty-state"><h3>No matching insights</h3><p>Try a different search term or category.</p></div>}
    {visible<filtered.length&&<button className="button button-primary load-more" type="button" onClick={()=>setVisible(v=>v+3)}>Load more</button>}
  </div>
}
