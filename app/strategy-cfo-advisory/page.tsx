import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/data/site";
export const metadata: Metadata = { title: "Strategy & CFO Advisory", description: services[3].short };
export default function Page(){ return <ServicePage service={services[3]} />; }
