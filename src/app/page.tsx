import { EfficiencySection } from "./components/EfficiencySection";
import { IntroSection } from "./components/IntroSection";
import { LogoScroller } from "./components/LogoScroller";

export default function HomePage() {
  return (
    <>
        <IntroSection />
        <LogoScroller />    
        <EfficiencySection />

    </>


  );
}