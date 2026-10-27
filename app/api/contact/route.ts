import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const clean = (value: unknown, max = 3000) => String(value ?? "").trim().slice(0, max);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website) return NextResponse.json({ ok: true });
    const name = clean(body.name, 120), company = clean(body.company, 160), email = clean(body.email, 200), phone = clean(body.phone, 50), area = clean(body.area, 120), message = clean(body.message);
    if (name.length < 2 || !emailPattern.test(email) || phone.length < 7 || !area || message.length < 20) return NextResponse.json({ error: "Please complete all required fields correctly." }, { status: 400 });
    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, SMTP_TO } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !SMTP_TO) {
      console.error("Contact form SMTP environment variables are not configured.");
      return NextResponse.json({ error: "Email delivery is not configured yet. Please call +91 80870 89272." }, { status: 503 });
    }
    const transporter = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT), secure: SMTP_SECURE === "true", auth: { user: SMTP_USER, pass: SMTP_PASSWORD } });
    await transporter.sendMail({
      from: SMTP_FROM || `Ravyaan Advisory Website <${SMTP_USER}>`, to: SMTP_TO, replyTo: email,
      subject: `New website enquiry — ${area}`,
      text: `New enquiry from the RAVYAAN website\n\nName: ${name}\nCompany: ${company || "Not provided"}\nEmail: ${email}\nPhone: ${phone}\nEnquiry area: ${area}\n\nMessage:\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#10233f"><h2>New website enquiry</h2><table cellpadding="7" style="border-collapse:collapse"><tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr><tr><td><b>Company</b></td><td>${escapeHtml(company || "Not provided")}</td></tr><tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr><tr><td><b>Phone</b></td><td>${escapeHtml(phone)}</td></tr><tr><td><b>Enquiry area</b></td><td>${escapeHtml(area)}</td></tr></table><h3>Message</h3><p>${escapeHtml(message).replace(/\n/g,"<br>")}</p></div>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "We could not send your enquiry. Please call +91 80870 89272." }, { status: 500 });
  }
}

function escapeHtml(value: string) { return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char] || char); }
