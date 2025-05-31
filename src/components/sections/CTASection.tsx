import { motion } from 'framer-motion';
import CTAButton from '../ui/CTAButton';

interface CTASectionProps {
  title: string;
  description: string;
  cta: {
    text: string;
    href: string;
    type: string;
  };
  backgroundPattern: {
    type: string;
    color: string;
  };
}

export default function CTASection({
  title,
  description,
  cta,
  backgroundPattern
}: CTASectionProps) {
  return (
    <section className="section bg-brand-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke={backgroundPattern.color}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-headline mb-6">{title}</h2>
          <p className="text-lg text-white/80 mb-10">{description}</p>
          <CTAButton href={cta.href} type="primary" className="text-lg px-10 py-4">
            {cta.text}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}