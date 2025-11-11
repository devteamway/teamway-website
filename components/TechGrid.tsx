"use client";

import { motion } from "framer-motion";

export default function TechGrid() {
  const techStacks = [
    {
      title: "Mobile",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500",
      technologies: [
        "iOS & Android Native",
        "React Native",
        "Flutter",
        "Xamarin",
        "Ionic/Cordova",
      ],
    },
    {
      title: "Web & Backend",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500",
      technologies: [
        "React & Next.js",
        "Node.js & Express",
        "ASP.NET Core",
        "Spring Boot",
        "GraphQL & REST APIs",
      ],
    },
    {
      title: "Cloud & DevOps",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500",
      technologies: [
        "AWS, Google Cloud, Azure",
        "Docker & Kubernetes",
        "CI/CD Automation",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
    },
  ];

  return (
    <section
      id="technologies"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 to-indigo-50"
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
            Technologies We Work With
          </h2>
          <p className="text-xl text-gray-600">
            Cutting-edge tools and frameworks for modern digital products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stack.color} rounded-xl mb-6`}
              />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">
                {stack.title}
              </h3>
              <ul className="space-y-3">
                {stack.technologies.map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className={`w-2 h-2 rounded-full ${stack.bgColor}`} />
                    {tech}
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

