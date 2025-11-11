"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OfferCard from "@/components/OfferCard";
import TechGrid from "@/components/TechGrid";
import HowWeWork from "@/components/HowWeWork";
import EngagementSection from "@/components/EngagementSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* What We Offer Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business
              growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <OfferCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <TechGrid />
      <HowWeWork />
      <EngagementSection />
      <CTASection />
      <Footer />
    </div>
  );
}
