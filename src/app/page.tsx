import { EfficiencySection } from "./components/EfficiencySection";
import { IntroSection } from "./components/IntroSection";
import { LogoScroller } from "./components/LogoScroller";
import { ServicesSection } from "./components/ServicesSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <LogoScroller />
      <EfficiencySection />
      <ServicesSection />
      <AdvantagesSection />
      <TestimonialsCarousel />
    </>
  );
}