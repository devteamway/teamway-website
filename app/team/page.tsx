"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Team() {
  const founders = [
    {
      name: "Dorian Musaj",
      role: "Co-Founder & Senior Software Engineer",
      experience: "12+ years",
      website: "https://dorianmusaj.com",
      photo: "/photo.jpg",
      expertise: [
        "Full-Stack Development",
        "Mobile App Development",
        "Cloud Architecture",
        "AI Integration",
      ],
      bio: "Dorian brings over 12 years of experience building scalable software solutions for startups and enterprises. His expertise spans mobile and web development, with a focus on creating robust, user-centered applications. Passionate about leveraging AI tools to accelerate development and deliver exceptional results.",
    },
    {
      name: "Co-Founder",
      role: "Co-Founder & Senior Software Engineer",
      experience: "12+ years",
      website: "",
      photo: "",
      expertise: [
        "Backend Systems",
        "DevOps & Cloud Infrastructure",
        "Technical Architecture",
        "System Integration",
      ],
      bio: "With 12+ years of experience in software engineering, our co-founder specializes in building resilient backend systems and cloud infrastructure. Expert in designing scalable architectures that grow with your business needs.",
    },
  ];

  const philosophy = [
    {
      title: "Quality Over Speed",
      description:
        "We believe in building things right the first time. While we move fast, we never compromise on code quality, security, or user experience.",
      icon: "⚡",
    },
    {
      title: "AI-Powered Efficiency",
      description:
        "We leverage cutting-edge AI tools to boost productivity, improve code quality, and accelerate delivery — passing the benefits directly to our clients.",
      icon: "🤖",
    },
    {
      title: "Transparent Communication",
      description:
        "No black boxes. We keep you informed every step of the way with regular updates, demos, and clear documentation.",
      icon: "💬",
    },
    {
      title: "Long-Term Partnership",
      description:
        "We're not just here to build and leave. We aim to be your trusted technology partner as your business grows and evolves.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
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

            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Meet the Founders
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-16 max-w-3xl">
              Two senior engineers with a shared vision: building exceptional software
              that drives real business results.
            </p>
          </motion.div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-gray-200"
              >
                {founder.photo ? (
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-20 h-20 rounded-full mb-6 object-cover border-2 border-indigo-200"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6 flex items-center justify-center text-white text-3xl font-bold">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">
                  {founder.website ? (
                    <a
                      href={founder.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600 transition-colors"
                    >
                      {founder.name}
                    </a>
                  ) : (
                    founder.name
                  )}
                </h3>
                <p className="text-indigo-600 font-medium mb-2">{founder.role}</p>
                <p className="text-gray-600 text-sm mb-6">
                  {founder.experience} of experience
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{founder.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-center">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {philosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20 p-8 md:p-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-center text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build something exceptional.
            </p>
            <Link
              href="/start-your-project"
              className="inline-block px-8 py-4 bg-white text-indigo-600 font-medium rounded-full hover:bg-gray-50 transition-all shadow-lg hover:scale-105"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

