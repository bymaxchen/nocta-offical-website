import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

// Services data matching original website
const services = [
  {
    id: 1,
    name: "Branding",
    description: "Strategic brand development that resonates with your target audience and drives market differentiation.",
    features: [
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Brand Guidelines",
      "Messaging Architecture",
      "Competitive Analysis"
    ],
    image: "/images/services/branding.jpg",
    href: "/services/branding"
  },
  {
    id: 2,
    name: "Websites",
    description: "High-converting websites designed to generate leads and showcase your brand's unique value proposition.",
    features: [
      "Custom Web Design",
      "Development & CMS",
      "Mobile Optimization",
      "Performance Optimization",
      "Analytics Integration"
    ],
    image: "/images/services/websites.jpg",
    href: "/services/websites"
  },
  {
    id: 3,
    name: "CRO",
    description: "Conversion rate optimization that turns more visitors into customers through data-driven improvements.",
    features: [
      "A/B Testing",
      "Landing Page Optimization",
      "User Experience Analysis",
      "Conversion Funnel Optimization",
      "Heat Map Analysis"
    ],
    image: "/images/services/cro.jpg",
    href: "/services/cro"
  },
  {
    id: 4,
    name: "Paid Media",
    description: "Strategic paid advertising campaigns that maximize ROI and drive qualified leads to your business.",
    features: [
      "Google Ads Management",
      "Social Media Advertising",
      "LinkedIn Lead Generation",
      "Retargeting Campaigns",
      "Campaign Optimization"
    ],
    image: "/images/services/paid-media.jpg",
    href: "/services/paid-media"
  },
  {
    id: 5,
    name: "Sales Enablement",
    description: "Tools and strategies that empower your sales team to close more deals and shorten sales cycles.",
    features: [
      "Sales Collateral Design",
      "Lead Nurturing Sequences",
      "CRM Integration",
      "Sales Process Optimization",
      "Training & Support"
    ],
    image: "/images/services/sales-enablement.jpg",
    href: "/services/sales-enablement"
  },
  {
    id: 6,
    name: "Product Marketing",
    description: "Strategic product positioning and go-to-market strategies that drive adoption and growth.",
    features: [
      "Product Positioning",
      "Go-to-Market Strategy",
      "Launch Campaigns",
      "Customer Research",
      "Competitive Intelligence"
    ],
    image: "/images/services/product-marketing.jpg",
    href: "/services/product-marketing"
  }
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 mobile-container">
        
        {/* Desktop Layout - PC端：左边标题，右边折叠选项 */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Side - Title */}
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight">
                Digital marketing that fuels
                <br />
                <span className="text-brand-orange">your pipeline.</span>
              </h2>
            </motion.div>

            {/* Right Side - Collapsible Services */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="border-b border-white/20 pb-4"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-center justify-between cursor-pointer group">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-brand-orange transition-colors duration-300">
                      {service.name}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-white/60 group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  
                  <AnimatePresence>
                    {hoveredService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 flex gap-6">
                          {/* Service Image */}
                          <div className="w-48 h-32 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                            <img 
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                                  <svg width="192" height="128" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="192" height="128" fill="#374151"/>
                                    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="14" fill="#ffffff" opacity="0.7">
                                      ${service.name}
                                    </text>
                                  </svg>
                                `)}`;
                              }}
                            />
                          </div>
                          
                          {/* Service Details */}
                          <div className="flex-1">
                            <p className="text-white/80 mb-3 text-sm leading-relaxed">
                              {service.description}
                            </p>
                            <ul className="space-y-1">
                              {service.features.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-xs text-white/60 flex items-center">
                                  <span className="mr-2 text-brand-orange">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout - 移动端：标题上方，下面列表 */}
        <div className="lg:hidden">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-white text-center mb-12 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Digital marketing that fuels
            <br />
            <span className="text-brand-orange">your pipeline.</span>
          </motion.h2>

          <motion.div 
            className="space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.a
                key={service.id}
                href={service.href}
                className="block py-6 border-b border-white/20 last:border-b-0 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-brand-orange transition-colors duration-300 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-brand-orange transition-colors duration-300 ml-4 flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}