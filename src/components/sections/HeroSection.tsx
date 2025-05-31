import { motion } from 'framer-motion';
import CTAButton from '../ui/CTAButton';
import FrameworkDiagram from '../animations/FrameworkDiagram';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  description: string;
  cta: {
    text: string;
    href: string;
    type: string;
  };
  framework: {
    title: string;
    interactive: boolean;
    animation: string;
  };
}

export default function HeroSection({
  headline,
  subheadline,
  description,
  cta,
  framework
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-brand-orange mb-2">{subheadline}</div>
            <h1 className="hero-headline text-white">
              {headline}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              {description}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <CTAButton 
                href={cta.href} 
                type="primary" 
                className="mt-8"
              >
                {cta.text}
              </CTAButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <FrameworkDiagram title={framework.title} interactive={framework.interactive} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}