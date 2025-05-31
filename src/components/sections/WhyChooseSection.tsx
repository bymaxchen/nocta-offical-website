import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

// Company logos for vertical scrolling
const companyLogos = [
  { name: "Veriforce", logo: "/images/logos/veriforce.png" },
  { name: "WaitWell", logo: "/images/logos/waitwell.png" },
  { name: "StellarAlgo", logo: "/images/logos/stellaralgo.png" },
  { name: "SeisWare", logo: "/images/logos/seisware.png" },
  { name: "Monark", logo: "/images/logos/monark.png" },
  { name: "TechFlow", logo: "/images/logos/techflow.png" },
  { name: "DataSync", logo: "/images/logos/datasync.png" },
  { name: "CloudVision", logo: "/images/logos/cloudvision.png" }
];

// Advantages data
const advantages = [
  {
    id: 1,
    title: "B2B SaaS expertise",
    description: "Getting B2B SaaS buying committees to commit isn't easy, but it is our speciality. We've solved thousands of challenges for B2B brands like yours, and you get our SaaS strategy and 16+ years of experience from day 1.",
    image: "/images/advantages/saas-expertise.jpg"
  },
  {
    id: 2,
    title: "Proven track record",
    description: "We've helped hundreds of B2B SaaS companies achieve measurable growth. Our portfolio includes successful launches, rebrands, and growth campaigns that delivered real ROI.",
    image: "/images/advantages/track-record.jpg"
  },
  {
    id: 3,
    title: "Strategic partnership",
    description: "We don't just execute campaigns – we become your strategic partner. Our team works closely with your leadership to align marketing efforts with business objectives.",
    image: "/images/advantages/partnership.jpg"
  },
  {
    id: 4,
    title: "Full-stack capabilities",
    description: "From brand strategy to paid media, we offer comprehensive marketing services under one roof. No need to manage multiple agencies or vendors.",
    image: "/images/advantages/full-stack.jpg"
  }
];

export default function WhyChooseSection() {
  const [hoveredAdvantage, setHoveredAdvantage] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 mobile-container">
        
        {/* PC Layout */}
        <div className="hidden lg:block">
          {/* First Section: Title + Description + Scrolling Logos */}
          <div className="grid grid-cols-2 gap-16 max-w-7xl mx-auto mb-24">
            {/* Left Side: Title and Description */}
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight mb-8">
                Why ambitious B2B SaaS brands choose Tiller.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Maybe you've been burned by agencies before or tried to do everything in-house. 
                But with massive revenue expectations of marketing and a mile-long to-do list, 
                you need strategy and leadership you can trust. SaaS CMO, we're here for you.
              </p>
            </motion.div>

            {/* Right Side: Vertical Scrolling Logos */}
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-64 h-96 overflow-hidden relative infinite-scroll">
                <motion.div 
                  className="flex flex-col space-y-8"
                  animate={isMobile ? {} : { y: [0, -50 * companyLogos.length] }}
                  transition={isMobile ? {} : {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* First set of logos */}
                  {companyLogos.map((company, index) => (
                    <div key={index} className="flex-shrink-0 h-16 flex items-center justify-center">
                      <img 
                        src={company.logo}
                        alt={company.name}
                        className="max-w-32 max-h-12 object-contain filter brightness-50 hover:brightness-100 transition-all"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                            <svg width="128" height="48" xmlns="http://www.w3.org/2000/svg">
                              <rect width="128" height="48" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
                              <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="12" fill="#ffffff" opacity="0.7" font-family="Arial">
                                ${company.name}
                              </text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {companyLogos.map((company, index) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0 h-16 flex items-center justify-center">
                      <img 
                        src={company.logo}
                        alt={company.name}
                        className="max-w-32 max-h-12 object-contain filter brightness-50 hover:brightness-100 transition-all"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                            <svg width="128" height="48" xmlns="http://www.w3.org/2000/svg">
                              <rect width="128" height="48" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
                              <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="12" fill="#ffffff" opacity="0.7" font-family="Arial">
                                ${company.name}
                              </text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Second Section: Advantages List */}
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-0">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.id}
                  className="border-b border-white/20 last:border-b-0"
                  onMouseEnter={() => setHoveredAdvantage(advantage.id)}
                  onMouseLeave={() => setHoveredAdvantage(null)}
                >
                  <div className="py-8">
                    <div className="grid grid-cols-2 gap-12 items-start">
                      {/* Left Column: Title and Image */}
                      <div>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-brand-orange transition-colors duration-300 mb-4">
                          {advantage.title}
                        </h3>
                        
                        <AnimatePresence>
                          {hoveredAdvantage === advantage.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-800">
                                <img 
                                  src={advantage.image}
                                  alt={advantage.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                                      <svg width="400" height="192" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="400" height="192" fill="#374151"/>
                                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="#ffffff" opacity="0.7">
                                          ${advantage.title}
                                        </text>
                                      </svg>
                                    `)}`;
                                  }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Right Column: Description */}
                      <div className="flex items-center">
                        <p className="text-white/80 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-white text-center mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why ambitious B2B SaaS brands choose Tiller.
          </motion.h2>

          <motion.p 
            className="text-lg text-white/80 leading-relaxed text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Maybe you've been burned by agencies before or tried to do everything in-house. 
            But with massive revenue expectations of marketing and a mile-long to-do list, 
            you need strategy and leadership you can trust. SaaS CMO, we're here for you.
          </motion.p>

          {/* Mobile Advantages */}
          <motion.div 
            className="space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                className="py-8 border-b border-white/20 last:border-b-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {advantage.title}
                </h3>
                
                <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-800 mb-4">
                  <img 
                    src={advantage.image}
                    alt={advantage.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                        <svg width="400" height="192" xmlns="http://www.w3.org/2000/svg">
                          <rect width="400" height="192" fill="#374151"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="#ffffff" opacity="0.7">
                            ${advantage.title}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>
                
                <p className="text-white/80 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}