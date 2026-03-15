import { useRef } from 'react';

export const HeroSection = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full bg-black" style={{ height: '100vh' }}>
      <style>
        {`
          @keyframes slow-pan-bg {
            0% { transform: scale(1.05) translate(0, 0); }
            50% { transform: scale(1.15) translate(-2%, -2%); }
            100% { transform: scale(1.05) translate(0%, 2%); }
          }
          .animate-slow-pan-bg {
            animation: slow-pan-bg 30s ease-in-out infinite alternate;
          }
        `}
      </style>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Animated Background Image */}
        <div className="absolute inset-0 w-full h-full" style={{ filter: 'saturate(1.25)' }}>
          <img
            src="/animated_bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover animate-slow-pan-bg"
          />
        </div>

        {/* Overlay layers */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle, transparent 50%, rgba(0,0,0,0.4) 100%)' }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-12">

          {/* Top-right: Links */}
          <div className="flex justify-end">
            <div className="flex flex-col gap-4 text-xs font-medium tracking-[0.2em] uppercase">
              <a href="https://www.linkedin.com/in/himanshu-warudkar" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="mailto:himanshuwarudkar9@gmail.com" className="hover:text-blue-400 transition-colors">
                Email
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8 pb-8 md:pb-12">
            {/* Title */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.85]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              AI/ML<br />Engineer
            </h1>

            {/* Description + scroll indicator */}
            <div className="flex flex-col items-start md:items-end gap-6 md:text-right max-w-sm">
              <p className="text-base md:text-lg text-white/70 leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                Building intelligent systems and immersive experiences at the intersection of AI and design.
              </p>

              {/* Scroll indicator */}
              <div className="flex items-center gap-3 text-white/40 text-xs tracking-[0.3em] uppercase">
                <span>Scroll</span>
                <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
                {/* Mobile: mouse icon */}
                <svg className="w-5 h-8 block md:hidden" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 36">
                  <rect x="4" y="1" width="16" height="26" rx="8" />
                  <line x1="12" y1="8" x2="12" y2="14" style={{ animation: 'pulse-glow 1.5s ease-in-out infinite' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

