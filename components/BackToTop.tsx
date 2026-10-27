"use client";
export default function BackToTop(){return <button className="back-to-top" type="button" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top">↑</button>}
