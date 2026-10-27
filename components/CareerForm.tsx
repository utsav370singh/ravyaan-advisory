"use client";
import { FormEvent, useState } from "react";

const areas=["Finance","Accounting","Taxation","Business Advisory","Technology","Digital Finance","Business Development","Research & Analytics","Operations","General application"];
export default function CareerForm(){
  const[state,setState]=useState<"idle"|"sending"|"success"|"error">("idle"); const[message,setMessage]=useState("");
  async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setState("sending");setMessage("");const form=event.currentTarget;try{const response=await fetch("/api/careers",{method:"POST",body:new FormData(form)});const result=await response.json();if(!response.ok)throw new Error(result.error||"Unable to submit your application.");setState("success");setMessage("Thank you. Your application has been submitted for review.");form.reset()}catch(error){setState("error");setMessage(error instanceof Error?error.message:"Unable to submit your application.")}}
  return <form className="contact-form career-form" onSubmit={submit}><div className="form-grid">
    <label><span>Full name *</span><input name="name" required minLength={2} autoComplete="name"/></label>
    <label><span>Email *</span><input name="email" required type="email" autoComplete="email"/></label>
    <label><span>Phone *</span><input name="phone" required type="tel" minLength={7} autoComplete="tel"/></label>
    <label><span>Area of interest *</span><select name="area" required defaultValue=""><option value="" disabled>Select an area</option>{areas.map(area=><option key={area}>{area}</option>)}</select></label>
    <label className="full"><span>LinkedIn profile</span><input name="linkedin" type="url" placeholder="https://linkedin.com/in/..."/></label>
    <label className="full"><span>Short introduction *</span><textarea name="message" required minLength={40} maxLength={2000} rows={5} placeholder="Tell us about your experience, interests and what you hope to contribute."/></label>
    <label className="full file-field"><span>CV — PDF, DOC or DOCX, max 5 MB *</span><input name="cv" type="file" required accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/></label>
    <label className="website-field" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off"/></label>
  </div><label className="consent"><input type="checkbox" required/><span>I agree to RAVYAAN processing my information for recruitment purposes.</span></label><button className="button button-primary submit" disabled={state==="sending"} data-track="career-application">{state==="sending"?"Submitting…":"Submit application"} <span>↗</span></button>{message&&<p className={`form-status ${state}`} role="status">{message}</p>}</form>
}
