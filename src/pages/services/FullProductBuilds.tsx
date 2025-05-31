import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Database, Settings } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function FullProductBuildsPage() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-brand-blue" />,
      title: "Frontend Development",
      description: "Modern React, Vue, or Angular applications with responsive design and optimal performance."
    },
    {
      icon: <Database className="h-8 w-8 text-brand-blue" />,
      title: "Backend Systems",
      description: "Scalable APIs, databases, and server architecture built for growth and reliability."
    },
    {
      icon: <Layers className="h-8 w-8 text-brand-blue" />,
      title: "Full-Stack Integration",
      description: "Seamless connection between frontend and backend with proper testing and deployment."
    },
    {
      icon: <Settings className="h-8 w-8 text-brand-blue" />,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines, cloud deployment, monitoring, and maintenance setup."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, technical constraints, and business goals to create a detailed project roadmap."
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "System architecture design, database modeling, and UI/UX wireframes to ensure scalable foundation."
    },
    {
      step: "03",
      title: "Development Sprints",
      description: "Agile development with regular updates, code reviews, and testing to ensure quality at every step."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Comprehensive testing, deployment setup, documentation, and smooth handoff to your team."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Full Product Builds
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Complete software solutions built from the ground up. We handle everything from 
              initial concept to production-ready product, delivering scalable, maintainable code 
              that grows with your business.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Our Process
            </h2>
            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 p-6 border-l-2 border-brand-blue">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-brand-blue">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">
              Ready to Build Your Product?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss your project requirements and create a custom development plan.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
