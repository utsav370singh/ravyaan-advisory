import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";
import MotionEffects from "@/components/MotionEffects";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import { siteConfig } from "@/data/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "RAVYAAN ADVISORY | Professional Services & Business Advisory", template: "%s | RAVYAAN ADVISORY" },
  description: "Finance, tax, business advisory, strategy and digital finance services for businesses seeking clarity, control and sustainable growth.",
  keywords: ["Business advisory India", "Business consultant Pune", "CFO advisory India", "Virtual CFO services", "Accounting advisory", "GST advisory", "MSME advisory"],
  openGraph: { title: "RAVYAAN ADVISORY", description: "Turning Business Complexity into Strategic Advantage.", type: "website", images: ["/images/ravyaan-hero.png"] },
  robots: { index: true, follow: true },
};

const themeScript = `(function(){try{var t=localStorage.getItem('ravyaan-theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=t||(p?'dark':'light')}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "ProfessionalService", name: siteConfig.legalName, telephone: siteConfig.phoneDisplay, description: siteConfig.promise, address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" }, areaServed: siteConfig.markets }, { "@type":"WebSite", name:siteConfig.brandName, url:siteUrl }] };
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></head><body><a className="skip-link" href="#main-content">Skip to main content</a><MotionEffects /><AnalyticsEvents/><Header /><main id="main-content">{children}</main><Footer /><WhatsAppButton/><CookieNotice /></body></html>;
}
