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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">teamway</div>
          <a
            href="mailto:contact@teamway.dev"
            className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-8">
              Your AI-Powered
              <br />
              <span className="text-black/40">Development Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 leading-relaxed max-w-3xl mb-12">
              We unite senior engineers to innovate and create solutions that
              drive growth and success for businesses in today's fast-paced
              digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@teamway.dev"
                className="px-8 py-4 bg-black text-white text-base font-medium rounded-full hover:bg-black/90 transition-all text-center"
              >
                Start Your Project
              </a>
              <a
                href="https://dorianmusaj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black/5 text-black text-base font-medium rounded-full hover:bg-black/10 transition-all text-center"
              >
                Meet the Founders
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-black/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "AI",
                title: "AI Development",
                desc: "Your customers aren't all the same—so why should their experience be? Use AI to create personalized experiences for each user, improving engagement and boosting satisfaction.",
              },
              {
                label: "MVP",
                title: "MVP Development",
                desc: "Transform your groundbreaking ideas into successful ventures with our expert Startup and MVP Development services, designed to bring your vision to life swiftly and effectively.",
              },
              {
                label: "Cloud",
                title: "Cloud Migration",
                desc: "Ready to take your business to the next level? We provide secure and scalable cloud solutions that let your business grow without limits.",
              },
              {
                label: "Mobile",
                title: "Mobile App Development",
                desc: "Your business doesn't have to be stuck on a big screen. We bring your services to the small screen with mobile app solutions designed to engage users anywhere, anytime.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-10 rounded-3xl hover:shadow-xl transition-all duration-300 border border-black/5"
              >
                <div className="text-sm font-medium text-black/40 mb-2 tracking-wide uppercase">
                  {service.label}
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-black/60 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight">
            Technologies
            <br />
            <span className="text-black/40">We Master</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">Mobile</h3>
              <ul className="space-y-3 text-black/60">
                <li>iOS & Android Native</li>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Xamarin</li>
                <li>Ionic Cordova</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">
                Web & Backend
              </h3>
              <ul className="space-y-3 text-black/60">
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>ASP.NET Core</li>
                <li>Spring Boot</li>
                <li>GraphQL & REST APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">
                Cloud & DevOps
              </h3>
              <ul className="space-y-3 text-black/60">
                <li>AWS Lambda & AppSync</li>
                <li>DynamoDB & S3</li>
                <li>CloudFormation</li>
                <li>Cognito & CloudWatch</li>
                <li>Docker & Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight">
            Make Your Visions
            <br />
            <span className="text-white/40">Come True</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
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
              <div key={idx}>
                <div className="text-6xl font-bold text-white/20 mb-4">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight">
            Flexible
            <br />
            <span className="text-black/40">Engagement</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/[0.02] p-10 rounded-3xl border border-black/5">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Project-Based
              </h3>
              <p className="text-black/60 leading-relaxed mb-6">
                Fixed scope, fixed timeline, fixed budget. Perfect for
                well-defined projects with clear deliverables.
              </p>
              <ul className="space-y-2 text-black/60">
                <li>• Clear milestones</li>
                <li>• Predictable costs</li>
                <li>• Dedicated team</li>
              </ul>
            </div>
            <div className="bg-black/[0.02] p-10 rounded-3xl border border-black/5">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Team Extension
              </h3>
              <p className="text-black/60 leading-relaxed mb-6">
                Hourly rates, flexible scaling. Extend your team with senior
                engineers as needed.
              </p>
              <ul className="space-y-2 text-black/60">
                <li>• Scale up or down</li>
                <li>• Pay as you go</li>
                <li>• Quick onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Let's Talk About
            <br />
            Your Goals
          </h2>
          <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether refining your processes or starting something new, our
            senior engineers are here to help.
          </p>
          <a
            href="mailto:contact@teamway.dev"
            className="inline-block px-10 py-5 bg-black text-white text-lg font-medium rounded-full hover:bg-black/90 transition-all"
          >
            contact@teamway.dev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tight">teamway</div>
          <div className="text-black/40 text-sm">
            © 2025 Teamway. Built with excellence by senior software engineers.
          </div>
        </div>
      </footer>
    </div>
  );
}
