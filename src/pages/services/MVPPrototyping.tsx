import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Timer, Target, Lightbulb } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function MVPPrototypingPage() {
  const benefits = [
    {
      icon: <Timer className="h-8 w-8 text-brand-blue" />,
      title: "Rapid Development",
      description: "Get your idea to market in weeks, not months. Fast iteration and quick validation of concepts."
    },
    {
      icon: <Target className="h-8 w-8 text-brand-blue" />,
      title: "Market Validation",
      description: "Test your core assumptions with real users before investing in full-scale development."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-brand-blue" />,
      title: "Cost-Effective",
      description: "Minimal upfront investment to validate ideas and reduce the risk of building the wrong product."
    },
    {
      icon: <Rocket className="h-8 w-8 text-brand-blue" />,
      title: "Scalable Foundation",
      description: "Clean, well-structured code that can grow into a full product when you're ready to scale."
    }
  ];

  const deliverables = [
    "Core feature implementation",
    "User authentication system",
    "Basic admin dashboard",
    "Mobile-responsive design",
    "Database design & setup",
    "API documentation",
    "Deployment & hosting setup",
    "User testing feedback integration"
  ];

  const timeline = [
    {
      week: "Week 1",
      title: "Planning & Design",
      activities: ["Requirements gathering", "User flow mapping", "Technical architecture", "UI/UX wireframes"]
    },
    {
      week: "Week 2-3",
      title: "Core Development",
      activities: ["Essential features", "Database setup", "Authentication", "Basic UI components"]
    },
    {
      week: "Week 4",
      title: "Testing & Launch",
      activities: ["User testing", "Bug fixes", "Deployment setup", "Handoff & documentation"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              MVP Prototyping
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Validate your idea quickly with a functional prototype. We build the essential 
              features you need to test your concept with real users and get market feedback 
              in just 4 weeks.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Start Your MVP <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Why Start with an MVP?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif mb-8">
                  What You Get
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  A complete, functional prototype with all the essential features needed 
                  to validate your concept and gather user feedback.
                </p>
                <CTAButton href="/company/contact" className="inline-flex items-center">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
              </div>
              <div className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue rounded-full flex-shrink-0"></div>
                    <span className="text-white/80">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              4-Week Development Timeline
            </h2>
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-brand-blue">{phase.week}</span>
                      <h3 className="text-xl font-semibold mt-2">{phase.title}</h3>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0"></div>
                            <span className="text-white/70 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-12">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Startups</h3>
                <p className="text-white/70">
                  Validate your business idea before raising funds or building a full product.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">New Features</h3>
                <p className="text-white/70">
                  Test new product features with a subset of users before full implementation.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Market Research</h3>
                <p className="text-white/70">
                  Gather real user data and feedback to inform your product roadmap.
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
              Ready to Test Your Idea?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's build your MVP in 4 weeks and get it in front of real users.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Start Your MVP <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
