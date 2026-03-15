import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const BentoGrid = () => {
  const sectionRef = useRef(null);
  const [success, setSuccess] = useState(false);

  // GSAP batch entry animation
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.bento-card');
    if (!cards?.length) return;

    gsap.set(cards, { opacity: 0, y: 40 });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          overwrite: true,
        }),
      start: 'top 90%',
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    e.target.reset();
    setTimeout(() => setSuccess(false), 3000);
  };

  const cardBase = 'bento-card rounded-3xl border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-500 overflow-hidden';

  return (
    <section ref={sectionRef} className="min-h-[60vh] bg-neutral-950 p-4 md:p-8 pt-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[240px] gap-4 md:gap-5">

          {/* ── 1. Intro Card (7 col, 2 row) ── */}
          <div className={`${cardBase} col-span-1 md:col-span-7 row-span-2 bg-white/5 backdrop-blur-md p-6 md:p-8 relative flex flex-col justify-between`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                Hi, I'm Himanshu
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg mb-6">
                I specialise in building intelligent applications, data engineering solutions, and AI-driven systems. Welcome to my digital space where design meets advanced machine learning.
              </p>
            </div>

            {/* Resume Button */}
            <div className="relative z-20 mt-4">
              <a 
                href="/resume.pdf" 
                download="Himanshu_Warudkar_Resume.pdf"
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-bold px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors shadow-lg hover:shadow-cyan-500/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* ── 2. Profile Image Card (5 col, 2 row) ── */}
          <div className={`${cardBase} col-span-1 md:col-span-5 row-span-2 bg-neutral-900 relative group`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="/profile_author.png" 
              alt="Himanshu Warudkar" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" 
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-widest uppercase text-white shadow-lg">
                Available for Work
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
