import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-brand-blue" />,
      title: "Email Us",
      description: "Get in touch for project inquiries and partnerships",
      contact: "hello@noctastudio.se",
      action: "Send Email"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-brand-blue" />,
      title: "Start a Project",
      description: "Ready to build something? Let's discuss your needs",
      contact: "projects@noctastudio.se", 
      action: "Discuss Project"
    },
    {
      icon: <MapPin className="h-8 w-8 text-brand-blue" />,
      title: "Visit Us",
      description: "Based in Gothenburg, Sweden",
      contact: "Gothenburg, Sweden",
      action: "Get Directions"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Let's Build Something Together
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Have a project in mind? Need to extend your development team? 
              Or just want to chat about your tech challenges? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5 text-center">
                  <div className="mb-4 flex justify-center">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{method.description}</p>
                  <div className="text-brand-blue font-medium mb-4">{method.contact}</div>
                  <CTAButton href={`mailto:${method.contact.includes('@') ? method.contact : 'hello@noctastudio.se'}`} 
                            className="w-full justify-center">
                    {method.action}
                  </CTAButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry Form */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Tell Us About Your Project
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-blue focus:outline-none">
                  <option value="">Select project type</option>
                  <option value="full-product">Full Product Build</option>
                  <option value="module-feature">Module/Feature Development</option>
                  <option value="mvp">MVP Prototyping</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-blue focus:outline-none">
                  <option value="">Select budget range</option>
                  <option value="10k-25k">€10k - €25k</option>
                  <option value="25k-50k">€25k - €50k</option>
                  <option value="50k-100k">€50k - €100k</option>
                  <option value="100k+">€100k+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-brand-orange-dark hover:shadow-glow hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Send Project Inquiry <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16">
              Common Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">How quickly can you start a project?</h3>
                <p className="text-white/70 leading-relaxed">
                  We typically can start new projects within 1-2 weeks, depending on our current workload and project scope.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Do you work with international clients?</h3>
                <p className="text-white/70 leading-relaxed">
                  Absolutely! We work with clients across Europe, North America, and beyond. We're experienced with remote collaboration and different time zones.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">What's your development process like?</h3>
                <p className="text-white/70 leading-relaxed">
                  We use agile methodologies with weekly sprints, regular check-ins, and transparent communication throughout the project.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Do you provide ongoing support after launch?</h3>
                <p className="text-white/70 leading-relaxed">
                  Yes, we offer various maintenance and support packages, or can provide a complete handoff with documentation and training for your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
