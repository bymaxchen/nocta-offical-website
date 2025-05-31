import HeroSection from '../components/sections/HeroSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ServicesSection from '../components/sections/ServicesSection';
import VideoSection from '../components/sections/VideoSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import CTASection from '../components/sections/CTASection';

import {
  heroContent,
  videoContent,
  ctaContent
} from '../data/homeContent';

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroContent} />
      <TestimonialsSection />
      <ServicesSection />
      <VideoSection {...videoContent} />
      <WhyChooseSection />
      <CTASection {...ctaContent} />
    </>
  );
}