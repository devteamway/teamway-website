"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight"
        >
          Let's Build Something
          <br />
          Great Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you're starting from an idea or modernizing an existing system,
          we're here to help you design, develop, and launch exceptional digital
          products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/start-your-project"
            className="inline-block px-10 py-5 bg-white text-indigo-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all shadow-2xl hover:scale-105"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

