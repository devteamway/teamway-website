"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              12+ Years of Engineering Excellence
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8"
          >
            We build software that moves businesses forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-8"
          >
            At Teamway, we help you plan, build, and scale digital products — from MVPs in months to enterprise systems — using modern tech and AI-driven efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start max-w-3xl">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Software Consultancy</span>
                  <span className="text-gray-600"> — guiding product and architecture decisions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Software Development</span>
                  <span className="text-gray-600"> — web, mobile, backend, cloud, and custom integrations</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/start-your-project"
              className="px-8 py-4 bg-indigo-600 text-white text-base font-medium rounded-full hover:bg-indigo-700 transition-all text-center shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/team"
              className="px-8 py-4 bg-white text-gray-900 text-base font-medium rounded-full hover:bg-gray-50 transition-all text-center border border-gray-200 hover:shadow-lg"
            >
              Meet the Founders
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

