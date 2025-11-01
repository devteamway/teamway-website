"use client";

export default function TeamwayWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <h1 className="text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
                teamway
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto">
              Elite software development teams at your service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="mailto:contact@teamway.dev"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://dorianmusaj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                Meet the Founders
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </header>

      {/* Process Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Simple Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Share Your Vision",
                desc: "Email us your project idea. Include a job description if you have one. We'll respond quickly with next steps.",
              },
              {
                num: "02",
                title: "Strategy Call",
                desc: "We discuss requirements, timelines, and technical details. Ask us anything about your project.",
              },
              {
                num: "03",
                title: "We Build It",
                desc: "Team assembled, timeline set, work begins. We deliver quality code with regular updates.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-7xl font-black text-purple-500/20 group-hover:text-purple-500/40 transition-colors mb-4">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            What We Build
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📱",
                title: "Mobile Apps",
                items: [
                  "iOS & Android Native",
                  "React Native",
                  "Flutter",
                  "Xamarin",
                  "Ionic",
                ],
              },
              {
                icon: "🌐",
                title: "Web Apps",
                items: ["React", "Next.js", "ASP.NET Core", "Modern SPAs"],
              },
              {
                icon: "⚡",
                title: "Backend & APIs",
                items: [
                  "Node.js",
                  ".NET Core",
                  "Spring Boot",
                  "GraphQL",
                  "REST APIs",
                ],
              },
              {
                icon: "☁️",
                title: "AWS Cloud",
                items: ["Lambda", "DynamoDB", "S3", "CloudFront", "Cognito"],
              },
              {
                icon: "🎯",
                title: "Flexible Hiring",
                items: [
                  "Project-based",
                  "Hourly rates",
                  "Individual devs",
                  "Full teams",
                ],
              },
              {
                icon: "💎",
                title: "Premium Quality",
                items: [
                  "Senior engineers",
                  "Best practices",
                  "Clean code",
                  "Fast delivery",
                ],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-400 flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Showcase */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Technologies We Master
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Swift",
              "Kotlin",
              "Flutter",
              ".NET Core",
              "Java",
              "Python",
              "AWS",
              "Docker",
              "GraphQL",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Kubernetes",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-slate-300 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all hover:scale-110 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Let's Build Something Great
          </h2>
          <p className="text-xl md:text-2xl text-slate-400">
            Senior engineers ready to bring your vision to life
          </p>
          <a
            href="mailto:contact@teamway.dev"
            className="inline-block group relative px-12 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">contact@teamway.dev</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500">
            © 2025 Teamway. Built with excellence by senior software engineers.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-grid-white\/\[0\.02\] {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px
            );
        }
      `}</style>
    </div>
  );
}
