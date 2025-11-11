"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/lib/services";

interface ServiceContentProps {
  service: Service;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>

          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            {service.fullContent.overview}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Technologies & Frameworks
            </h2>
            <ul className="space-y-3">
              {service.fullContent.technologies.map((tech, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}
                  />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Our Process
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.fullContent.process.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {i + 1}
                  </div>
                  <span className="text-gray-700 pt-1">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Key Benefits
            </h2>
            <ul className="space-y-3">
              {service.fullContent.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help with your{" "}
            {service.title.toLowerCase()} needs.
          </p>
          <Link
            href="/start-your-project"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:scale-105"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

