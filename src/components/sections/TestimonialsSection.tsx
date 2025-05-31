import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

// Client testimonials data
const testimonials = [
  {
    id: 1,
    name: "Matt McGee",
    title: "VP of Marketing",
    company: "Veriforce",
    quote: "Tiller has been incredibly instrumental in helping us stand up our demand generation operations.",
    metric: "450%",
    metricLabel: "increase in qualified leads",
    photo: "/images/clients/matt-mcgee.jpg"
  },
  {
    id: 2,
    name: "Shannon Vander Meulen",
    title: "CEO",
    company: "WaitWell",
    quote: "The strategic guidance and execution from Tiller has transformed our marketing approach completely.",
    metric: "300%",
    metricLabel: "ROI improvement",
    photo: "/images/clients/shannon-vander.jpg"
  }
];

// Company logos for mobile scrolling
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

export default function TestimonialsSection() {
  const isMobile = useIsMobile();

  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 mobile-container">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        
        {/* Desktop Layout - PC端：左边图片、中间评价、右边评价 */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Image */}
            <div className="flex justify-center items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-brand-orange">
                <img 
                  src={testimonials[0].photo}
                  alt={testimonials[0].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder
                    (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                      <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
                        <rect width="256" height="256" fill="#FF6B35"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="72" fill="white" font-family="Arial">
                          ${testimonials[0].name.charAt(0)}
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
            </div>

            {/* Center Testimonial */}
            <div className="flex flex-col justify-center">
              <blockquote className="text-xl text-white mb-6 leading-relaxed">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="mb-4">
                <p className="text-white font-semibold text-lg">{testimonials[0].name}</p>
                <p className="text-white/70">{testimonials[0].title}, {testimonials[0].company}</p>
              </div>
              <div className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full inline-block w-fit">
                <span className="font-bold text-2xl">{testimonials[0].metric}</span>
                <span className="ml-2 text-sm">{testimonials[0].metricLabel}</span>
              </div>
            </div>

            {/* Right Testimonial */}
            <div className="flex flex-col justify-center">
              <blockquote className="text-xl text-white mb-6 leading-relaxed">
                "{testimonials[1].quote}"
              </blockquote>
              <div className="mb-4">
                <p className="text-white font-semibold text-lg">{testimonials[1].name}</p>
                <p className="text-white/70">{testimonials[1].title}, {testimonials[1].company}</p>
              </div>
              <div className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full inline-block w-fit">
                <span className="font-bold text-2xl">{testimonials[1].metric}</span>
                <span className="ml-2 text-sm">{testimonials[1].metricLabel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - 移动端：无限滚动的公司Logo */}
        <div className="lg:hidden">
          {/* Single testimonial for mobile */}
          <div className="max-w-md mx-auto text-center mb-12">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-brand-orange mx-auto mb-6">
              <img 
                src={testimonials[0].photo}
                alt={testimonials[0].name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                      <rect width="80" height="80" fill="#FF6B35"/>
                      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="32" fill="white" font-family="Arial">
                        ${testimonials[0].name.charAt(0)}
                      </text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            <blockquote className="text-lg text-white mb-4">
              "{testimonials[0].quote}"
            </blockquote>
            <p className="text-white font-semibold">{testimonials[0].name}</p>
            <p className="text-white/70 text-sm mb-4">{testimonials[0].title}, {testimonials[0].company}</p>
            <div className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full inline-block">
              <span className="font-bold">{testimonials[0].metric}</span>
              <span className="ml-1 text-sm">{testimonials[0].metricLabel}</span>
            </div>
          </div>

          {/* Infinite scrolling logos */}
          <div className="overflow-hidden infinite-scroll">
            <motion.div 
              className="flex space-x-8"
              animate={isMobile ? {} : { x: [0, -50 * companyLogos.length] }}
              transition={isMobile ? {} : {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of logos */}
              {companyLogos.map((company, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                  <img 
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter brightness-50 hover:brightness-100 transition-all"
                    onError={(e) => {
                      // Fallback to text-based logo
                      (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                        <svg width="128" height="64" xmlns="http://www.w3.org/2000/svg">
                          <rect width="128" height="64" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
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
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                  <img 
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter brightness-50 hover:brightness-100 transition-all"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent(`
                        <svg width="128" height="64" xmlns="http://www.w3.org/2000/svg">
                          <rect width="128" height="64" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
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
        </div>
      </div>
    </section>
  );
}