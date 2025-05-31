import { motion } from 'framer-motion';
import { ArrowRight, Puzzle, Zap, Shield, Wrench } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function ModuleFeatureDevPage() {
  const capabilities = [
    {
      icon: <Puzzle className="h-8 w-8 text-brand-blue" />,
      title: "Custom Modules",
      description: "Self-contained components that integrate seamlessly with your existing codebase."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-blue" />,
      title: "Feature Enhancement",
      description: "Adding new functionality to existing products without disrupting current operations."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-blue" />,
      title: "API Integration",
      description: "Connect your system with third-party services and external APIs efficiently."
    },
    {
      icon: <Wrench className="h-8 w-8 text-brand-blue" />,
      title: "Performance Optimization",
      description: "Improve existing features with better performance, security, and user experience."
    }
  ];

  const examples = [
    {
      title: "Payment Integration",
      description: "Secure payment processing modules with Stripe, PayPal, or custom solutions.",
      tech: ["React", "Node.js", "Stripe API"]
    },
    {
      title: "Authentication Systems",
      description: "Single sign-on, multi-factor authentication, and user management features.",
      tech: ["OAuth", "JWT", "Firebase Auth"]
    },
    {
      title: "Data Analytics",
      description: "Custom dashboards, reporting tools, and data visualization components.",
      tech: ["D3.js", "Chart.js", "Python"]
    },
    {
      title: "Content Management",
      description: "Custom CMS modules, content editors, and publishing workflows.",
      tech: ["Next.js", "Strapi", "Sanity"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Module & Feature Development
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Extend your existing products with custom modules and features. 
              We integrate seamlessly with your current tech stack to add new capabilities 
              without disrupting your workflow.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              What We Can Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-white/70 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Example Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {examples.map((example, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{example.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {example.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-12">
              Our Approach
            </h2>
            <div className="space-y-8">
              <div className="p-6 border-l-4 border-brand-blue">
                <h3 className="text-xl font-semibold mb-3">Code Review & Analysis</h3>
                <p className="text-white/70 leading-relaxed">
                  We start by understanding your existing codebase, architecture patterns, 
                  and development standards to ensure seamless integration.
                </p>
              </div>
              <div className="p-6 border-l-4 border-brand-orange">
                <h3 className="text-xl font-semibold mb-3">Modular Design</h3>
                <p className="text-white/70 leading-relaxed">
                  Our modules are built to be self-contained, testable, and easily maintainable, 
                  following your existing patterns and conventions.
                </p>
              </div>
              <div className="p-6 border-l-4 border-brand-blue">
                <h3 className="text-xl font-semibold mb-3">Testing & Documentation</h3>
                <p className="text-white/70 leading-relaxed">
                  Comprehensive testing, clear documentation, and smooth handoff ensure your team 
                  can maintain and extend the features we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">
              Need a Custom Feature?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how we can extend your existing product with new capabilities.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Start Planning <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
