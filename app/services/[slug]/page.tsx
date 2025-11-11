import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import ServiceContent from "./ServiceContent";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ServiceContent service={service} />
      <Footer />
    </div>
  );
}

// Generate static params for all service pages
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

