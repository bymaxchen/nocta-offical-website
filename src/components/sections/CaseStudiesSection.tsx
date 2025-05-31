import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTAButton from '../ui/CTAButton';

interface CaseStudy {
  id: number;
  client: string;
  title: string;
  description: string;
  image: string;
  metrics: {
    value: string;
    label: string;
  };
  href: string;
}

interface CaseStudiesSectionProps {
  title: string;
  subtitle: string;
  caseStudies: CaseStudy[];
  cta: {
    text: string;
    href: string;
    type: string;
  };
}

export default function CaseStudiesSection({
  title,
  subtitle,
  caseStudies,
  cta
}: CaseStudiesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section bg-brand-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="section-headline mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              className="case-study-card group"
              variants={itemVariants}
            >
              <Link to={caseStudy.href} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  {/* Background image - in production, replace with next/image */}
                  <div 
                    className="absolute inset-0 bg-brand-black/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8))`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-sm text-brand-orange font-medium">
                        {caseStudy.client}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 group-hover:text-brand-orange transition-colors">
                        {caseStudy.title}
                      </h3>
                    </div>
                    
                    <div>
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {caseStudy.description}
                      </p>
                      <div className="flex items-center">
                        <div className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                          <span className="font-bold mr-1">{caseStudy.metrics.value}</span> 
                          {caseStudy.metrics.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <CTAButton href={cta.href} type="secondary">
            {cta.text}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}