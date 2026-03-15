import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from './components/HeroSection';
import { SkillsBar } from './components/SkillsBar';
import { TaglineSection } from './components/TaglineSection';
import { BentoGrid } from './components/BentoGrid';
import { AchievementsMarquee } from './components/AchievementsMarquee';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { TechArsenal } from './components/TechArsenal';
import { ConnectSection } from './components/ConnectSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
    });
    lenisRef.current = lenis;

    // Sync Lenis ↔ ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "'Satoshi', sans-serif" }}>
      <HeroSection />
      <SkillsBar />
      <TaglineSection />
      <BentoGrid />
      <AchievementsMarquee />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <TechArsenal />
      <ConnectSection />
    </div>
  );
}

export default App;
