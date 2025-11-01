"use client";

export default function TeamwayWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        * {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">teamway</div>
          <a
            href="mailto:contact@teamway.dev"
            className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              Senior Software Engineers
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-8">
              Digital Products
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                That Move Business Forward
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-12">
              We design and build software that performs beautifully and scales
              effortlessly. From mobile apps to cloud-native platforms, we
              combine design thinking, cutting-edge technology, and solid
              engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@teamway.dev"
                className="px-8 py-4 bg-indigo-600 text-white text-base font-medium rounded-full hover:bg-indigo-700 transition-all text-center shadow-lg shadow-indigo-200"
              >
                Start Your Project
              </a>
              <a
                href="https://dorianmusaj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-gray-900 text-base font-medium rounded-full hover:bg-gray-50 transition-all text-center border border-gray-200"
              >
                Meet the Founders
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your
              business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "📱",
                color: "from-blue-500 to-cyan-500",
                title: "Mobile App Development",
                desc: "Build experiences that fit in your customers' hands. We craft native and cross-platform mobile apps that are fast, intuitive, and built to last.",
                details:
                  "Whether you need a consumer-facing product or an internal business tool, we design apps that work seamlessly across iOS and Android — leveraging React Native, Flutter, or native Swift/Kotlin to match your goals.",
              },
              {
                icon: "⚡",
                color: "from-indigo-500 to-purple-500",
                title: "Full-Stack Application Development",
                desc: "From front to back, we've got it covered. Our team specializes in building end-to-end solutions — modern web interfaces backed by robust, secure APIs.",
                details:
                  "We handle everything from architecture to deployment, ensuring a consistent, scalable experience. Whether it's .NET, Node.js, or serverless architectures, we bring your ideas to life with precision and speed.",
              },
              {
                icon: "🌐",
                color: "from-purple-500 to-pink-500",
                title: "Web Application Development",
                desc: "Transform ideas into powerful web platforms. We develop high-performance web applications that combine elegant design with functional depth.",
                details:
                  "Our approach focuses on usability, performance, and maintainability — whether it's a custom dashboard, an e-commerce solution, or a client portal. Using React, Next.js, or Vue.",
              },
              {
                icon: "🔗",
                color: "from-orange-500 to-red-500",
                title: "Systems Integration",
                desc: "Make your technology work as one. We connect your systems and data sources so they work together smoothly.",
                details:
                  "From integrating payment gateways, CRMs, and ERPs to building custom APIs or middleware layers, we streamline your workflows and reduce manual overhead.",
              },
              {
                icon: "☁️",
                color: "from-cyan-500 to-blue-500",
                title: "Cloud Services & DevOps",
                desc: "Scalable. Secure. Cloud-ready. We help you design, deploy, and manage cloud infrastructure across AWS, Azure, and Google Cloud.",
                details:
                  "Our services include migration, CI/CD automation, containerization (Docker, Kubernetes), and performance optimization — ensuring your applications run reliably at any scale.",
              },
              {
                icon: "🎯",
                color: "from-green-500 to-emerald-500",
                title: "Technical Consulting & Strategy",
                desc: "Turn your vision into a clear, executable plan. Our experts work with you to define architecture, technology choices, and development roadmaps.",
                details:
                  "We bridge the gap between business goals and technical implementation — guiding startups and enterprises alike toward efficient, future-proof solutions.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
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
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {service.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack with Colors */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and frameworks for modern digital products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6" />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Mobile</h3>
              <ul className="space-y-3">
                {[
                  "iOS & Android Native",
                  "React Native",
                  "Flutter",
                  "Xamarin",
                  "Ionic Cordova",
                ].map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-6" />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">
                Web & Backend
              </h3>
              <ul className="space-y-3">
                {[
                  "React & Next.js",
                  "Node.js & Express",
                  "ASP.NET Core",
                  "Spring Boot",
                  "GraphQL & REST APIs",
                ].map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-6" />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">
                Cloud & DevOps
              </h3>
              <ul className="space-y-3">
                {[
                  "AWS Lambda & AppSync",
                  "DynamoDB & S3",
                  "CloudFormation",
                  "Docker & Kubernetes",
                  "CI/CD Automation",
                ].map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              A transparent, collaborative process from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                color: "bg-gradient-to-br from-blue-500 to-cyan-500",
                title: "Share Your Vision",
                desc: "Email us your project idea or job description. We'll analyze your requirements and respond quickly with a clear plan and next steps.",
              },
              {
                num: "02",
                color: "bg-gradient-to-br from-indigo-500 to-purple-500",
                title: "Strategy Call",
                desc: "We discuss requirements, timelines, technical approach, and answer all your questions. This is where we align on goals and expectations.",
              },
              {
                num: "03",
                color: "bg-gradient-to-br from-purple-500 to-pink-500",
                title: "We Build It",
                desc: "Team assembled, timeline set, work begins. We deliver quality code with regular updates, demos, and transparent communication throughout.",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div
                  className={`${step.color} text-white p-8 rounded-2xl shadow-xl`}
                >
                  <div className="text-6xl font-bold opacity-20 mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Flexible Engagement
            </h2>
            <p className="text-xl text-gray-600">
              Choose the model that fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-6" />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                Project-Based
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Fixed scope, fixed timeline, fixed budget. Perfect for
                well-defined projects with clear deliverables.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  Clear milestones & deliverables
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  Predictable costs & timeline
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  Dedicated team focused on your goals
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-6" />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                Team Extension
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Hourly rates, flexible scaling. Extend your team with senior
                engineers as needed.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  Scale team up or down easily
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  Pay only for time used
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  Quick onboarding & integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Let's Build Something
            <br />
            Great Together
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're starting from an idea or modernizing an existing
            system, we're here to help you design, develop, and launch
            exceptional digital products.
          </p>
          <a
            href="mailto:contact@teamway.dev"
            className="inline-block px-10 py-5 bg-white text-indigo-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all shadow-2xl hover:scale-105"
          >
            contact@teamway.dev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tight">teamway</div>
          <div className="text-gray-500 text-sm">
            © 2025 Teamway. Built with excellence by senior software engineers.
          </div>
        </div>
      </footer>
    </div>
  );
}
