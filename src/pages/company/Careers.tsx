import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Users, Heart } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function CareersPage() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-brand-blue" />,
      title: "Flexible Hours",
      description: "Work when you're most productive. We believe in results, not hours."
    },
    {
      icon: <MapPin className="h-8 w-8 text-brand-blue" />,
      title: "Remote-First",
      description: "Work from anywhere in Sweden or EU. Come to Gothenburg office when you want."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Small Team",
      description: "Direct impact on projects and company direction. Your voice matters."
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-blue" />,
      title: "Work-Life Balance",
      description: "Swedish work culture values. 25 days vacation + public holidays."
    }
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Remote/Gothenburg",
      description: "Join our core team building innovative software products for European startups and scale-ups.",
      requirements: ["5+ years React/Node.js", "Experience with AWS/Azure", "Fluent English", "EU work authorization"]
    },
    {
      title: "Frontend Developer",
      type: "Part-time/Contract",
      location: "Remote",
      description: "Help build beautiful, responsive user interfaces for our client projects.",
      requirements: ["3+ years React experience", "Strong CSS/Tailwind skills", "Portfolio of projects", "Available 20+ hours/week"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Join Nocta Studio
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              We're looking for talented developers who want to work on challenging projects 
              with modern tech stacks, while maintaining Swedish work-life balance.
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/60">
              <MapPin className="h-5 w-5" />
              <span>Gothenburg, Sweden + Remote EU</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Why Work With Us
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

      {/* Open Positions */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Open Positions
            </h2>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <span>{position.type}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <CTAButton href="/company/contact" className="mt-4 md:mt-0">
                      Apply Now
                    </CTAButton>
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed">{position.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0"></div>
                          <span className="text-white/70 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-12">
              Our Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
                <p className="text-white/70 leading-relaxed">
                  We encourage experimentation with new technologies and provide budget for 
                  courses, conferences, and learning resources.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quality Focus</h3>
                <p className="text-white/70 leading-relaxed">
                  We prefer building fewer things really well rather than rushing to market 
                  with mediocre solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Client Impact</h3>
                <p className="text-white/70 leading-relaxed">
                  Every project matters. We work closely with clients to ensure our solutions 
                  create real business value.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Swedish Values</h3>
                <p className="text-white/70 leading-relaxed">
                  Equality, transparency, and work-life balance aren't just buzzwords - 
                  they're how we operate daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-12">
              Application Process
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Send Us Your Portfolio</h3>
                  <p className="text-white/70">Email your CV, portfolio, and a brief note about why you're interested in joining Nocta Studio.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Conversation</h3>
                  <p className="text-white/70">A casual 30-minute chat about your experience, our projects, and technical approach.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Small Paid Project</h3>
                  <p className="text-white/70">Work with us on a small, paid project to see if we're a good fit for each other.</p>
                </div>
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
              Ready to Join Us?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Send us your portfolio and let's start a conversation about working together.
            </p>
            <CTAButton href="mailto:careers@noctastudio.se" className="inline-flex items-center">
              Send Application <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
