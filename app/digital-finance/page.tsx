import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/data/site";
export const metadata: Metadata = { title: "Digital Finance & Managed Services", description: services[4].short };
export default function Page(){ return <ServicePage service={services[4]} />; }
