import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications in 2025",
      excerpt: "Best practices for structuring large React applications with modern tools and patterns that scale with your team.",
      author: "Erik Lindberg",
      date: "January 15, 2025",
      readTime: "8 min read",
      tags: ["React", "Frontend", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "MVP Development: From Idea to Launch in 4 Weeks",
      excerpt: "Our proven framework for rapid MVP development that helps startups validate ideas quickly without sacrificing code quality.",
      author: "Anna Svensson",
      date: "January 10, 2025",
      readTime: "6 min read",
      tags: ["MVP", "Startup", "Process"]
    },
    {
      id: 3,
      title: "The Swedish Approach to Software Development",
      excerpt: "How Swedish work culture and values create better software. Quality over quantity, collaboration over competition.",
      author: "Marcus Johansson",
      date: "January 5, 2025",
      readTime: "5 min read",
      tags: ["Culture", "Quality", "Sweden"]
    },
    {
      id: 4,
      title: "API Design Principles for Modern Web Applications",
      excerpt: "Design APIs that developers love to use. RESTful principles, GraphQL considerations, and documentation best practices.",
      author: "Erik Lindberg",
      date: "December 28, 2024",
      readTime: "10 min read",
      tags: ["API", "Backend", "Best Practices"]
    },
    {
      id: 5,
      title: "Why We Choose TypeScript for Every Project",
      excerpt: "The benefits of type safety in JavaScript projects and how TypeScript improves developer experience and code quality.",
      author: "Anna Svensson",
      date: "December 20, 2024",
      readTime: "7 min read",
      tags: ["TypeScript", "JavaScript", "Development"]
    },
    {
      id: 6,
      title: "Deployment Strategies for Small Development Teams",
      excerpt: "CI/CD, monitoring, and deployment automation for small teams. How to achieve enterprise-level deployment practices.",
      author: "Marcus Johansson",
      date: "December 15, 2024",
      readTime: "9 min read",
      tags: ["DevOps", "Deployment", "Automation"]
    }
  ];

  const categories = [
    { name: "All Articles", count: articles.length, active: true },
    { name: "Frontend", count: 3 },
    { name: "Backend", count: 2 },
    { name: "Process", count: 2 },
    { name: "Culture", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Articles
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Insights about software development, team culture, and building great products. 
              Written by our team from real project experience.
            </p>
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

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif mb-8">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 bg-white/5 rounded-lg border border-white/10">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {articles[0].tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-brand-blue/20 text-brand-blue text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif mb-4">{articles[0].title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{articles[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-white/60 mb-6">
                  <span>{articles[0].author}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <CTAButton href="#" className="inline-flex items-center">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </CTAButton>
              </div>
              <div className="w-full h-64 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <article key={article.id} className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
                  <div className="w-full h-48 bg-gradient-to-br from-brand-blue/10 to-brand-orange/10"></div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-brand-blue/20 text-brand-blue text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>{article.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get notified when we publish new articles about software development and tech culture.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-brand-orange-dark hover:shadow-glow hover:-translate-y-1"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
