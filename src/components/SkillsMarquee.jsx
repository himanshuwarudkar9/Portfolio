import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'Agentic AI',
  'Machine Learning',
  'RAG',
  'LLMs',
  'MCP',
  'Deep Learning',
  'NLP',
  'Computer Vision',
  'Data Engineering',
  'CrewAI',
  'AutoGen',
  'Python',
];

const taglineText = 'I blend creativity with technical expertise to build AI/ML solutions that drive real-world impact.';

export const SkillsMarquee = () => {
  const sectionRef = useRef(null);
  const taglineRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    if (!wordsRef.current.length) return;

    // Set all words to faded initially
    gsap.set(wordsRef.current, { opacity: 0.15 });

    // Animate each word's opacity from 0.15 to 1 as the user scrolls
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: taglineRef.current,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: 0.5,
      },
    });

    wordsRef.current.forEach((word, i) => {
      tl.to(
        word,
        {
          opacity: 1,
          duration: 1,
          ease: 'none',
        },
        i * 0.3 // stagger each word
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
    >
      {/* Skills marquee */}
      <div className="relative py-8 md:py-12">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Top border line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="skills-marquee-wrapper">
          <div className="skills-marquee-track">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center gap-6 md:gap-10 shrink-0">
                {skills.map((skill, i) => (
                  <span
                    key={`${set}-${i}`}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight whitespace-nowrap transition-colors duration-300 hover:text-cyan-400 cursor-default"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: 'rgba(255,255,255,0.15)',
                      WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
                {/* Separator dot */}
                <span className="w-2 h-2 rounded-full bg-cyan-400/40 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Tagline with scroll-triggered word-by-word reveal */}
      {/* Tagline with scroll-triggered word-by-word reveal */}
      {/* Tagline Section - Forced 3-Line Stretch */}
      <div
        ref={taglineRef}
        // max-w-[900px] is the "break point" for this specific sentence length
        // leading-[1.1] keeps the lines tight and professional
        className="flex flex-wrap justify-center items-center px-6 py-14 md:py-24 max-w-[900px] mx-auto gap-x-[0.8em] gap-y-2 leading-[1.1]"
      >
        {taglineText.split(' ').map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordsRef.current[i] = el)}
            // text-[3rem] (48px) matches your inspect data for the "Nishant" look
            className="text-2xl sm:text-4xl md:text-[3rem] font-black tracking-tighter text-center"
            style={{
              fontFamily: "'Clash Display', sans-serif",
              color: '#ffffff',
              opacity: 0.15,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
};
