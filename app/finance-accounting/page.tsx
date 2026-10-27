import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/data/site";
export const metadata: Metadata = { title: "Finance & Accounting", description: services[0].short };
export default function Page(){ return <ServicePage service={services[0]} />; }
