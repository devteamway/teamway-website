export interface Service {
  id: string;
  icon: string;
  color: string;
  title: string;
  desc: string;
  details: string;
  fullContent: {
    overview: string;
    technologies: string[];
    process: string[];
    benefits: string[];
  };
}

export const services: Service[] = [
  {
    id: "mobile",
    icon: "📱",
    color: "from-blue-500 to-cyan-500",
    title: "Mobile App Development",
    desc: "iOS and Android apps using React Native, Flutter, or native Swift/Kotlin — tailored to your goals.",
    details:
      "Whether you need a consumer-facing product or an internal business tool, we design apps that work seamlessly across iOS and Android.",
    fullContent: {
      overview:
        "We create mobile applications that deliver exceptional user experiences while maintaining high performance and reliability. Our approach combines modern design principles with robust engineering to build apps that users love and businesses depend on.",
      technologies: [
        "iOS Development (Swift, SwiftUI, UIKit)",
        "Android Development (Kotlin, Java, Jetpack Compose)",
        "React Native (JavaScript, TypeScript)",
        "Flutter (Dart)",
        "Xamarin (C#, Xamarin.Forms)",
      ],
      process: [
        "Discovery & Requirements Analysis",
        "UX/UI Design & Prototyping",
        "Agile Development Sprints",
        "Quality Assurance & Testing",
        "App Store Deployment",
        "Post-Launch Support & Maintenance",
      ],
      benefits: [
        "Native performance with cross-platform efficiency",
        "Seamless integration with device features",
        "Offline-first capabilities",
        "Push notifications and real-time updates",
        "App Store optimization and submission support",
      ],
    },
  },
  {
    id: "web",
    icon: "🌐",
    color: "from-purple-500 to-pink-500",
    title: "Web Application Development",
    desc: "Build scalable web platforms using React, Next.js, or Laravel — WordPress for CMS.",
    details:
      "Our approach focuses on usability, performance, and maintainability — whether it's a custom dashboard, an e-commerce solution, or a client portal.",
    fullContent: {
      overview:
        "We build modern web applications that deliver desktop-like experiences in the browser. Our focus is on creating fast, responsive, and accessible interfaces that work flawlessly across all devices and browsers.",
      technologies: [
        "React & Next.js for dynamic SPAs",
        "Server-Side Rendering (SSR) & Static Generation",
        "Progressive Web Apps (PWA)",
        "Responsive Design & Mobile-First approach",
        "Modern CSS (Tailwind, CSS-in-JS)",
      ],
      process: [
        "User Research & Wireframing",
        "Visual Design & Style Guide",
        "Component Development",
        "Responsive Implementation",
        "Browser Compatibility Testing",
        "Performance Optimization & SEO",
      ],
      benefits: [
        "Lightning-fast page loads",
        "SEO-optimized for better discoverability",
        "Accessible to all users (WCAG compliant)",
        "Works offline with PWA technology",
        "Consistent experience across devices",
      ],
    },
  },
  {
    id: "fullstack",
    icon: "⚡",
    color: "from-indigo-500 to-purple-500",
    title: "Full-Stack Application Development",
    desc: "From frontend to backend using .NET, Node.js, or serverless architectures.",
    details:
      "We handle everything from architecture to deployment, ensuring a consistent, scalable experience.",
    fullContent: {
      overview:
        "Our full-stack expertise enables us to deliver complete digital solutions. We architect, develop, and deploy applications that scale from MVP to enterprise-level systems, ensuring consistency across every layer of your technology stack.",
      technologies: [
        "Frontend: React, Next.js, Vue.js, TypeScript",
        "Backend: Node.js, .NET Core, Spring Boot",
        "Databases: PostgreSQL, MongoDB, Redis",
        "APIs: REST, GraphQL, WebSockets",
        "Authentication: OAuth, JWT, SSO",
      ],
      process: [
        "System Architecture Design",
        "Database Schema & API Design",
        "Frontend & Backend Development",
        "Integration & Testing",
        "Performance Optimization",
        "Deployment & Monitoring",
      ],
      benefits: [
        "Unified development team and vision",
        "Optimized performance across the stack",
        "Scalable architecture from day one",
        "Comprehensive security implementation",
        "End-to-end responsibility and support",
      ],
    },
  },
  {
    id: "integration",
    icon: "🔗",
    color: "from-orange-500 to-red-500",
    title: "Systems Integration",
    desc: "Integrating CRMs, ERPs, payment gateways, and APIs.",
    details:
      "From integrating payment gateways, CRMs, and ERPs to building custom APIs or middleware layers, we streamline your workflows and reduce manual overhead.",
    fullContent: {
      overview:
        "We bridge the gaps between your disparate systems, creating seamless data flow and unified workflows. Our integration solutions eliminate silos, reduce manual work, and enable your teams to focus on what matters most.",
      technologies: [
        "REST & GraphQL API Development",
        "Message Queues (RabbitMQ, Kafka)",
        "Enterprise Service Bus (ESB)",
        "Webhook & Event-Driven Architecture",
        "ETL & Data Pipeline Tools",
      ],
      process: [
        "System Audit & Integration Planning",
        "API Design & Documentation",
        "Middleware Development",
        "Data Mapping & Transformation",
        "Testing & Validation",
        "Monitoring & Maintenance",
      ],
      benefits: [
        "Real-time data synchronization",
        "Eliminated data silos",
        "Automated workflows",
        "Reduced manual data entry",
        "Better business intelligence",
      ],
    },
  },
  {
    id: "cloud",
    icon: "☁️",
    color: "from-cyan-500 to-blue-500",
    title: "Cloud Services & DevOps",
    desc: "CI/CD automation, containerization (Docker, Kubernetes), and performance optimization.",
    details:
      "We help you design, deploy, and manage cloud infrastructure across AWS, Azure, and Google Cloud — ensuring your applications run reliably at any scale.",
    fullContent: {
      overview:
        "We help organizations leverage cloud infrastructure to achieve greater scalability, reliability, and cost-efficiency. From migration strategy to ongoing optimization, we ensure your cloud investment delivers maximum value.",
      technologies: [
        "AWS (Lambda, ECS, EKS, S3, RDS)",
        "Azure (App Service, AKS, Cosmos DB)",
        "Google Cloud (GKE, Cloud Run, BigQuery)",
        "Docker & Kubernetes",
        "Terraform & Infrastructure as Code",
      ],
      process: [
        "Cloud Readiness Assessment",
        "Migration Strategy & Planning",
        "Infrastructure Setup & Configuration",
        "CI/CD Pipeline Implementation",
        "Security & Compliance Setup",
        "Monitoring & Cost Optimization",
      ],
      benefits: [
        "Auto-scaling for traffic spikes",
        "99.9%+ uptime SLAs",
        "Pay only for what you use",
        "Global deployment in minutes",
        "Enterprise-grade security",
      ],
    },
  },
  {
    id: "consulting",
    icon: "🎯",
    color: "from-green-500 to-emerald-500",
    title: "Technical Consulting & Strategy",
    desc: "Product strategy, architecture reviews, and AI integration planning.",
    details:
      "Our experts work with you to define architecture, technology choices, and development roadmaps — bridging the gap between business goals and technical implementation.",
    fullContent: {
      overview:
        "We provide strategic technical guidance to help you make informed decisions about technology investments. Our consultants bring years of experience across industries to help you navigate complex technical challenges.",
      technologies: [
        "Technology Stack Selection",
        "Architecture Design Patterns",
        "Microservices vs Monolith Analysis",
        "Database Selection & Design",
        "Security & Compliance Planning",
      ],
      process: [
        "Business Goals Assessment",
        "Technical Feasibility Analysis",
        "Architecture Design & Documentation",
        "Technology Roadmap Creation",
        "Team Structure Recommendations",
        "Implementation Support",
      ],
      benefits: [
        "Avoid costly technical mistakes",
        "Accelerate time to market",
        "Build for scale from the start",
        "Align tech with business goals",
        "Knowledge transfer to your team",
      ],
    },
  },
];

