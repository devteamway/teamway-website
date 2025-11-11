"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface OfferCardProps {
  service: {
    id: string;
    icon: string;
    color: string;
    title: string;
    desc: string;
    details: string;
  };
  index: number;
}

export default function OfferCard({ service, index }: OfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
      />
      <div className="relative">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3 font-medium">
          {service.desc}
        </p>
        <p className="text-gray-500 leading-relaxed text-sm mb-6">
          {service.details}
        </p>
        <Link
          href={`/services/${service.id}`}
          className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-medium rounded-full hover:shadow-lg transition-all`}
        >
          Read More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

