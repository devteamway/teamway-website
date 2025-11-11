"use client";

import { motion } from "framer-motion";

export default function EngagementSection() {
  const engagementModels = [
    {
      title: "Project-Based",
      color: "from-indigo-500 to-purple-500",
      icon: "📋",
      description:
        "Best for startups and well-defined MVPs. Fixed scope, fixed timeline, fixed budget.",
      benefits: [
        "Clear milestones & deliverables",
        "Predictable costs & timeline",
        "Dedicated team focused on your goals",
      ],
      iconColor: "bg-green-100",
      iconDot: "bg-green-500",
    },
    {
      title: "Team Extension",
      color: "from-cyan-500 to-blue-500",
      icon: "👥",
      description:
        "Hire us as dedicated senior engineers integrated into your team. Flexible scaling on demand.",
      benefits: [
        "Scale team up or down easily",
        "Pay only for time used",
        "Quick onboarding & integration",
      ],
      iconColor: "bg-blue-100",
      iconDot: "bg-blue-500",
    },
  ];

  return (
    <section
      id="engagement"
      className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Flexible Engagement
          </h2>
          <p className="text-xl text-gray-600">
            Choose the model that fits your needs and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-6">{model.icon}</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                {model.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {model.description}
              </p>
              <ul className="space-y-3 text-gray-600">
                {model.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 ${model.iconColor} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <div className={`w-2 h-2 ${model.iconDot} rounded-full`} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

