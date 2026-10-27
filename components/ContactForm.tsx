"use client";

import { FormEvent, useState } from "react";

const enquiryAreas = ["Finance & Accounting", "Tax & Regulatory", "Business Advisory", "Strategy & CFO Advisory", "Digital Finance", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your enquiry.");
      setStatus("success"); setMessage("Thank you. Your enquiry has been sent to our advisory team."); form.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Something went wrong. Please call us directly.");
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label><span>Name *</span><input name="name" required minLength={2} autoComplete="name" placeholder="Your full name" /></label>
        <label><span>Business / Company</span><input name="company" autoComplete="organization" placeholder="Company name" /></label>
        <label><span>Email *</span><input type="email" name="email" required autoComplete="email" placeholder="you@company.com" /></label>
        <label><span>Phone *</span><input type="tel" name="phone" required minLength={7} autoComplete="tel" placeholder="Your contact number" /></label>
        <label className="full"><span>Enquiry area *</span><select name="area" required defaultValue=""><option value="" disabled>Select an area</option>{enquiryAreas.map(area => <option key={area}>{area}</option>)}</select></label>
        <label className="full"><span>How can we help? *</span><textarea name="message" required minLength={20} maxLength={3000} rows={6} placeholder="Tell us about your business challenge, objective or opportunity." /></label>
        <label className="website-field" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="consent"><input type="checkbox" required /> <span>I agree to RAVYAAN processing my information to respond to this enquiry.</span></label>
      <button className="button button-primary submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"} <span>↗</span></button>
      {message && <p className={`form-status ${status}`} role="status">{message}</p>}
    </form>
  );
}
