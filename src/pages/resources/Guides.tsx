import { motion } from 'framer-motion';
import { ArrowRight, Download, BookOpen, Clock, Star } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function GuidesPage() {
  const guides = [
    {
      id: 1,
      title: "Complete Guide to MVP Development",
      description: "A comprehensive 40-page guide covering everything from idea validation to launch. Includes templates, checklists, and real case studies.",
      pages: "40 pages",
      downloads: "1,200+",
      rating: 4.9,
      category: "Product Development",
      featured: true,
      preview: "Learn our proven 4-week MVP development process that has helped dozens of startups validate their ideas and secure funding."
    },
    {
      id: 2,
      title: "React Architecture Best Practices",
      description: "How to structure scalable React applications. Covers state management, component organization, and testing strategies.",
      pages: "28 pages",
      downloads: "850+",
      rating: 4.8,
      category: "Frontend Development",
      preview: "Master the art of building maintainable React applications that scale with your team and product requirements."
    },
    {
      id: 3,
      title: "API Design & Documentation Handbook",
      description: "Design APIs that developers love. RESTful principles, versioning strategies, and comprehensive documentation approaches.",
      pages: "35 pages",
      downloads: "650+",
      rating: 4.7,
      category: "Backend Development",
      preview: "Create APIs that are intuitive, well-documented, and built to last. Includes real-world examples and common pitfalls."
    },
    {
      id: 4,
      title: "Modern DevOps for Small Teams",
      description: "Implement enterprise-level DevOps practices without enterprise complexity. CI/CD, monitoring, and deployment automation.",
      pages: "32 pages",
      downloads: "720+",
      rating: 4.6,
      category: "DevOps",
      preview: "Streamline your deployment process and improve reliability with tools and practices that work for small development teams."
    },
    {
      id: 5,
      title: "Software Project Estimation Guide",
      description: "Accurate project estimation techniques for software development. Includes templates and real project examples.",
      pages: "24 pages",
      downloads: "430+",
      rating: 4.5,
      category: "Project Management",
      preview: "Learn to estimate software projects accurately using time-tested techniques and avoid common estimation mistakes."
    },
    {
      id: 6,
      title: "User Experience for Developers",
      description: "UX principles every developer should know. From wireframing to user testing, improve your product thinking.",
      pages: "30 pages",
      downloads: "380+",
      rating: 4.4,
      category: "UX Design",
      preview: "Bridge the gap between development and design with practical UX knowledge that makes your products more successful."
    }
  ];

  const categories = [
    { name: "All Guides", count: guides.length, active: true },
    { name: "Product Development", count: 2 },
    { name: "Frontend", count: 1 },
    { name: "Backend", count: 1 },
    { name: "DevOps", count: 1 },
    { name: "Management", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Development Guides
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              In-depth guides and handbooks covering essential software development topics. 
              Based on our real-world experience building products for startups and scale-ups.
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/60">
              <div className="flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>PDF Format</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>4.7 Avg Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    category.active 
                      ? 'bg-brand-blue text-white' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif mb-8">Featured Guide</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 bg-white/5 rounded-lg border border-white/10">
              <div>
                <div className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-sm rounded-full mb-4">
                  {guides[0].category}
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif mb-4">{guides[0].title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{guides[0].preview}</p>
                <div className="flex items-center space-x-6 text-sm text-white/60 mb-6">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{guides[0].pages}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{guides[0].downloads} downloads</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{guides[0].rating}</span>
                  </div>
                </div>
                <CTAButton href="#" className="inline-flex items-center">
                  Download Free <Download className="ml-2 h-4 w-4" />
                </CTAButton>
              </div>
              <div className="w-full h-64 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 rounded-lg flex items-center justify-center">
                <BookOpen className="h-24 w-24 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif mb-12">All Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.slice(1).map((guide, index) => (
                <div key={guide.id} className="border border-white/10 rounded-lg p-6 bg-white/5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-block px-3 py-1 bg-brand-blue/20 text-brand-blue text-sm rounded-full">
                      {guide.category}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-white/60">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{guide.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{guide.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{guide.description}</p>
                  <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{guide.pages}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{guide.downloads}</span>
                      </div>
                    </div>
                  </div>
                  <CTAButton href="#" className="w-full justify-center">
                    Download Free
                  </CTAButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Form */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">
              Get All Guides
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Download our complete collection of development guides and get notified when we publish new ones.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company (Optional)"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
              />
              <button 
                type="submit" 
                className="w-full bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-brand-orange-dark hover:shadow-glow hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Download All Guides <Download className="ml-2 h-5 w-5" />
              </button>
            </form>
            <p className="text-xs text-white/50 mt-4">
              We respect your privacy. No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
