// Hero Section Content
export const heroContent = {
  headline: "Fast, focused, and flexible software development — from Sweden.",
  subheadline: "Hi, we're Nocta Studio. A tech development team.",
  description: "We specialize in building modern digital tools for startups, scale-ups, and teams that need to move fast — without sacrificing quality. Whether it's a full product build, a standalone module, or a quick MVP, we help our clients turn ideas into real, working software.",
  cta: {
    text: "Start Your Project",
    href: "/contact",
    type: "primary"
  },
  framework: {
    title: "Development Process Framework™",
    interactive: true,
    animation: "spiral-rotate"
  }
};

// Testimonials Section Content
export const testimonialsContent = {
  sectionTitle: "What Our Clients Say",
  testimonials: [
    {
      id: 1,
      client: {
        name: "Alex Johnson",
        title: "CTO",
        company: "StartupTech",
        photo: "/images/testimonials/matt-mcgee.jpg"
      },
      quote: "Nocta Studio delivered our MVP in record time without compromising on quality. Their technical expertise and communication were exceptional.",
      result: "MVP launched in 6 weeks"
    },
    {
      id: 2,
      client: {
        name: "Sarah Chen",
        title: "Founder & CEO",
        company: "InnovateSaaS",
        photo: "/images/testimonials/vince-ircandia.webp"
      },
      quote: "Working with Nocta Studio was a game-changer for our product development. They understood our vision and brought it to life beautifully.",
      result: "Successful product launch"
    },
    {
      id: 3,
      client: {
        name: "Marcus Lindberg",
        title: "Product Manager",
        company: "TechCorp",
        photo: "/images/testimonials/waitwell-client.jpg"
      },
      quote: "The team's Swedish approach to quality and attention to detail is exactly what we needed for our enterprise platform.",
      result: "99.9% uptime achieved"
    },
    {
      id: 4,
      client: {
        name: "Lisa Thompson",
        title: "Founder",
        company: "E-commerce Plus",
        photo: "/images/testimonials/jotson-client.jpg"
      },
      quote: "Nocta Studio transformed our checkout process and the results were immediate. Performance improved dramatically.",
      result: "3x conversion improvement"
    }
  ],
  carousel: {
    autoplay: true,
    duration: 5000,
    indicators: true
  }
};

// Services Section Content
export const servicesContent = {
  title: "Software development services that scale with your vision",
  subtitle: "From MVP to full-scale products, we build modern software solutions",
  services: [
    {
      id: 1,
      name: "Full Product Builds",
      description: "Complete end-to-end product development from concept to launch and beyond.",
      icon: "package",
      features: [
        "Product Architecture",
        "Frontend & Backend Dev",
        "Database Design",
        "Deployment & DevOps"
      ]
    },
    {
      id: 2,
      name: "MVP Prototyping",
      description: "Rapid prototyping to validate your ideas and get to market fast.",
      icon: "zap",
      features: [
        "Concept Validation",
        "Rapid Development",
        "User Testing",
        "Iterative Design"
      ]
    },
    {
      id: 3,
      name: "Module Development",
      description: "Custom features and modules to extend your existing applications.",
      icon: "puzzle-piece",
      features: [
        "Feature Development",
        "API Integration",
        "Third-party Services",
        "Performance Optimization"
      ]
    },
    {
      id: 4,
      name: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your applications.",
      icon: "wrench",
      features: [
        "Bug Fixes",
        "Security Updates",
        "Performance Monitoring",
        "Technical Support"
      ]
    }
  ]
};

// Video Section Content
export const videoContent = {
  title: "See our development process in action",
  subtitle: "From concept to code, watch how we build modern software",
  video: {
    src: "/videos/nocta-development-showcase.mp4",
    poster: "/images/video/video-poster.jpg",
    autoplay: false,
    controls: true,
    muted: true
  },
  animation: {
    type: "ripple-circles",
    color: "#FF6B35",
    count: 3
  }
};

// Case Studies Section Content
export const caseStudiesContent = {
  title: "Software projects that make an impact",
  subtitle: "See how we've helped startups and teams build successful products",
  caseStudies: [
    {
      id: 1,
      client: "FinTech Startup",
      title: "MVP to 10k users in 8 weeks",
      description: "Built a complete financial management platform from concept to market-ready product.",
      image: "/images/case-studies/monark-preview.png",
      metrics: {
        value: "10k",
        label: "Active Users"
      },
      href: "/work/fintech-mvp"
    },
    {
      id: 2,
      client: "E-commerce Platform",
      title: "3x faster checkout process",
      description: "Re-engineered the entire checkout flow, resulting in significant conversion improvements.",
      image: "/images/case-studies/seisware-preview.png",
      metrics: {
        value: "3x",
        label: "Faster Checkout"
      },
      href: "/work/ecommerce-optimization"
    },
    {
      id: 3,
      client: "SaaS Tool",
      title: "50% reduction in load times",
      description: "Performance optimization and architecture improvements for a growing SaaS platform.",
      image: "/images/case-studies/veriforce-preview.png",
      metrics: {
        value: "50%",
        label: "Faster Loading"
      },
      href: "/work/saas-performance"
    }
  ],
  cta: {
    text: "View All Projects",
    href: "/work",
    type: "secondary"
  }
};

// Why Choose Nocta Studio Section Content
export const whyChooseContent = {
  title: "Why teams choose Nocta Studio for their development needs",
  description: "Building software shouldn't be complex or stressful. Whether you're a startup with an idea or a scale-up needing to move fast, we bring Swedish engineering precision and startup agility to every project.",
  valuePropositions: [
    {
      id: 1,
      title: "Full-Stack Expertise",
      description: "From frontend to backend, databases to deployment - we handle the complete technical stack.",
      icon: "layers"
    },
    {
      id: 2,
      title: "Swedish Quality Standards",
      description: "Clean code, robust architecture, and sustainable development practices built into every project.",
      icon: "shield-check"
    },
    {
      id: 3,
      title: "Startup Speed",
      description: "We understand the need to move fast without breaking things. Rapid development with quality focus.",
      icon: "zap"
    },
    {
      id: 4,
      title: "Transparent Process",
      description: "Clear communication, regular updates, and no surprises. You always know where your project stands.",
      icon: "eye"
    }
  ],
  clients: [
    {
      name: "TechStart",
      logo: "/images/logos/techstart.svg"
    },
    {
      name: "Nordic Ventures",
      logo: "/images/logos/nordic-ventures.svg"
    },
    {
      name: "ScaleUp Co",
      logo: "/images/logos/scaleup.svg"
    }
  ],
  expertise: {
    title: "Modern development expertise",
    description: "We specialize in modern web technologies, cloud-native architecture, and scalable solutions. Our team has built everything from MVPs to enterprise-scale platforms, and we bring that experience to every project from day one."
  }
};

// CTA Section Content
export const ctaContent = {
  title: "Ready to build something amazing?",
  description: "Let's discuss your project and how we can help bring your ideas to life.",
  cta: {
    text: "Start Your Project",
    href: "/company/contact",
    type: "primary"
  },
  backgroundPattern: {
    type: "geometric-lines",
    color: "#FF6B35"
  }
};

// Navigation Data
export const navigationItems = {
  services: {
    title: "Services",
    items: [
      { name: "Full Product Builds", href: "/services/full-product-builds" },
      { name: "Module / Feature Dev", href: "/services/module-feature-dev" },
      { name: "MVP Prototyping", href: "/services/mvp-prototyping" },
      { name: "Maintenance & Handoff", href: "/services/maintenance-handoff" }
    ]
  },
  company: {
    title: "Company",
    items: [
      { name: "About", href: "/company/about" },
      { name: "Careers", href: "/company/careers" },
      { name: "Contact", href: "/company/contact" }
    ]
  },
  resources: {
    title: "Resources",
    items: [
      { name: "Articles", href: "/resources/articles" },
      { name: "Guides", href: "/resources/guides" }
    ]
  }
};

// Footer Content
export const footerContent = {
  contactInfo: {
    email: "hello@noctastudio.se",
    business: "projects@noctastudio.se"
  },
  social: [
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/", icon: "github" }
  ],
  certifications: [
    { name: "Sweden Tech Hub", image: "/images/certifications/sweden-tech.svg" },
    { name: "Certified Developer", image: "/images/certifications/developer-certified.svg" }
  ],
  navigation: {
    services: {
      title: "SERVICES",
      links: [
        { name: "Full Product Builds", href: "/services/full-product-builds" },
        { name: "Module / Feature Dev", href: "/services/module-feature-dev" },
        { name: "MVP Prototyping", href: "/services/mvp-prototyping" },
        { name: "Maintenance & Handoff", href: "/services/maintenance-handoff" }
      ]
    },
    company: {
      title: "COMPANY",
      links: [
        { name: "About", href: "/company/about" },
        { name: "Careers", href: "/company/careers" },
        { name: "Contact", href: "/company/contact" }
      ]
    },
    resources: {
      title: "RESOURCES",
      links: [
        { name: "Articles", href: "/resources/articles" },
        { name: "Guides", href: "/resources/guides" }
      ]
    }
  },
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" }
  ],
  copyright: "© 2025 Nocta Studio AB. All rights reserved. Based in Gothenburg, Sweden."
};