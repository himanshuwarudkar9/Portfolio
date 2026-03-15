import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ConnectSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });
    }
  }, []);

  return (
    <section className="relative z-50 w-full bg-black py-16 md:py-24 px-6 overflow-hidden">
      <div ref={sectionRef} className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase mb-4"
          style={{ fontFamily: "'Clash Display', sans-serif", color: '#22d3ee' }}
        >
          Have a project in your mind?<br />Let's Work together
        </h2>
        <p className="text-white/40 text-sm md:text-base mb-10 max-w-md mx-auto">
          Open to collaborations, freelance projects, and full-time opportunities in AI/ML engineering.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-5 mb-10">
          <a
            href="https://www.linkedin.com/in/himanshu-warudkar"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950/50 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white/50 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">LinkedIn</span>
          </a>

          <a
            href="https://github.com/himanshuwarudkar9"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950/50 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white/50 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">GitHub</span>
          </a>

          <a
            href="mailto:himanshuwarudkar9@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950/50 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white/50 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">Email</span>
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Footer text */}
        <p className="text-white/20 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Himanshu Warudkar · Built with ❤️
        </p>
      </div>
    </section>
  );
};
