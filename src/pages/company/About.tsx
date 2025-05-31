import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Code, Target } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function AboutPage() {
  const values = [
    {
      icon: <Code className="h-8 w-8 text-brand-blue" />,
      title: "Technical Excellence",
      description: "We write clean, maintainable code that scales. Our technical standards are uncompromising because your success depends on it."
    },
    {
      icon: <Target className="h-8 w-8 text-brand-blue" />,
      title: "Focused Delivery",
      description: "No bloated project plans. We identify what matters most and deliver it efficiently, keeping you moving fast toward your goals."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Partnership Mindset",
      description: "We don't just build software – we become an extension of your team, understanding your business and sharing your vision."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "15+", label: "Years Combined Experience" },
    { number: "3", label: "Core Team Members" },
    { number: "100%", label: "Remote-First" }
  ];

  const team = [
    {
      name: "Erik Lindberg",
      role: "Technical Lead & Co-founder",
      bio: "Full-stack developer with 8+ years building scalable web applications. Previously at Spotify and Klarna.",
      expertise: ["React", "Node.js", "System Architecture", "DevOps"]
    },
    {
      name: "Anna Svensson",
      role: "Product Developer & Co-founder", 
      bio: "Frontend specialist and UX-minded developer with experience from top Swedish startups and scale-ups.",
      expertise: ["Frontend", "UI/UX", "Product Strategy", "Mobile"]
    },
    {
      name: "Marcus Johansson",
      role: "Backend Specialist",
      bio: "Infrastructure and backend expert focused on performance, security, and scalable systems architecture.",
      expertise: ["Backend", "Cloud", "Databases", "Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              About Nocta Studio
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              We're a small but powerful tech team based in Gothenburg, Sweden. 
              We specialize in building modern digital tools for startups, scale-ups, 
              and teams that need to move fast — without sacrificing quality.
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/60">
              <MapPin className="h-5 w-5" />
              <span>Gothenburg, Sweden</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-8">Our Mission</h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Nocta exists to help teams turn ideas into working software — faster.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Because when the right things get built at the right time, great ideas don't get stuck.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-bold text-brand-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full mb-4 mx-auto"></div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                  <p className="text-brand-blue text-center mb-4">{member.role}</p>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-brand-blue/20 text-brand-blue text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Sweden */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-12">
              Why Sweden?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Tech Innovation Hub</h3>
                  <p className="text-white/70 leading-relaxed">
                    Sweden is home to Spotify, Klarna, King, and countless other tech success stories. 
                    We're part of a thriving ecosystem that values innovation and quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality & Efficiency</h3>
                  <p className="text-white/70 leading-relaxed">
                    Swedish work culture emphasizes efficiency, collaboration, and work-life balance, 
                    which translates to focused, high-quality output for our clients.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cost-Effective Excellence</h3>
                  <p className="text-white/70 leading-relaxed">
                    Get world-class development talent at competitive rates. Our lean structure 
                    means you get senior-level expertise without agency overhead.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                  <p className="text-white/70 leading-relaxed">
                    Working with international clients has given us perspective on global markets 
                    and the ability to build software that works anywhere.
                  </p>
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
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss your project and see how we can help turn your ideas into working software.
            </p>
            <CTAButton href="/company/contact" className="inline-flex items-center">
              Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
