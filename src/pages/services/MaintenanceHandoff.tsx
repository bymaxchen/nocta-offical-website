import { motion } from 'framer-motion';
import { ArrowRight, Shield, FileText, Users, Wrench } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function MaintenanceHandoffPage() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-brand-blue" />,
      title: "Ongoing Maintenance",
      description: "Regular updates, security patches, performance monitoring, and bug fixes to keep your software running smoothly."
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-blue" />,
      title: "Complete Documentation",
      description: "Comprehensive technical documentation, code comments, and user guides for seamless knowledge transfer."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Team Training",
      description: "Train your internal team on the codebase, architecture, and best practices for future development."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-blue" />,
      title: "Quality Assurance",
      description: "Final testing, performance optimization, and security audits before handoff to your team."
    }
  ];

  const handoffProcess = [
    {
      step: "01",
      title: "Code Review & Cleanup",
      description: "Comprehensive code review, optimization, and cleanup to ensure maintainable, well-structured code."
    },
    {
      step: "02",
      title: "Documentation Creation",
      description: "Complete technical documentation, API docs, deployment guides, and troubleshooting resources."
    },
    {
      step: "03",
      title: "Knowledge Transfer",
      description: "Training sessions with your team covering architecture, development workflows, and maintenance procedures."
    },
    {
      step: "04",
      title: "Transition Support",
      description: "30-day transition period with ongoing support to ensure smooth operation under your team's management."
    }
  ];

  const maintenanceOptions = [
    {
      title: "Basic Support",
      description: "Bug fixes and critical security updates",
      features: ["Emergency bug fixes", "Security patches", "Monthly check-ins", "Email support"],
      duration: "3-6 months"
    },
    {
      title: "Extended Support",
      description: "Ongoing development and feature additions",
      features: ["Regular updates", "New feature development", "Performance optimization", "Priority support"],
      duration: "6-12 months"
    },
    {
      title: "Full Partnership",
      description: "Long-term development partnership",
      features: ["Dedicated team", "Strategic planning", "Continuous development", "24/7 monitoring"],
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Maintenance & Handoff
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Ensure your software continues to perform optimally with our maintenance services, 
              or get a complete handoff package when you're ready to manage development internally.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              What We Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Handoff Process */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Handoff Process
            </h2>
            <div className="space-y-8">
              {handoffProcess.map((item, index) => (
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

      {/* Maintenance Options */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Maintenance Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenanceOptions.map((option, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-white/70 mb-4">{option.description}</p>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-brand-blue font-medium">
                    Duration: {option.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Support */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-12">
              Why Choose Our Support
            </h2>
            <div className="space-y-8">
              <div className="p-6 border-l-4 border-brand-blue">
                <h3 className="text-xl font-semibold mb-3">Proactive Monitoring</h3>
                <p className="text-white/70 leading-relaxed">
                  We monitor your application's performance, security, and uptime to catch 
                  issues before they affect your users.
                </p>
              </div>
              <div className="p-6 border-l-4 border-brand-orange">
                <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
                <p className="text-white/70 leading-relaxed">
                  Fast response times for critical issues with clear communication 
                  and transparent progress updates.
                </p>
              </div>
              <div className="p-6 border-l-4 border-brand-blue">
                <h3 className="text-xl font-semibold mb-3">Knowledge Retention</h3>
                <p className="text-white/70 leading-relaxed">
                  Our team knows your codebase inside and out, ensuring efficient 
                  troubleshooting and feature development.
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
              Ready for Reliable Support?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss the best maintenance or handoff strategy for your project.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Get Support Plan <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
