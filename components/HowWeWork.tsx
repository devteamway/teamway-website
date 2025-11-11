"use client";

import { motion } from "framer-motion";

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      title: "Share Your Vision",
      desc: "Tell us about your project — we'll analyze it and respond fast.",
    },
    {
      num: "02",
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
      title: "Strategy Call",
      desc: "We align on goals, timeline, and technical approach.",
    },
    {
      num: "03",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      title: "We Build It",
      desc: "We deliver quality code with frequent demos, updates, and clear communication.",
    },
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-xl text-gray-600">
            A transparent, collaborative process from concept to launch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className={`${step.color} text-white p-8 rounded-2xl shadow-xl`}>
                <div className="text-6xl font-bold opacity-20 mb-4">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/90 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

