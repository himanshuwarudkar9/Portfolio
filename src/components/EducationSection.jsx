import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: 'Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    icon: '☁️',
    color: '#0078D4',
    link: 'https://learn.microsoft.com/en-us/users/himanshuwarudkar-3877/credentials/314ab6e84317c909?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Computer Vision Workshop',
    issuer: 'IIIT Hyderabad (CIE Labs)',
    icon: '👁️',
    color: '#7C3AED',
  },
  {
    title: 'Machine Learning Rock Star',
    subtitle: 'End-to-End Practice',
    issuer: 'ML Certification',
    icon: '🎸',
    color: '#F59E0B',
    link: 'https://www.coursera.org/account/accomplishments/certificate/9B7XY7Z4U9MR',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    icon: '🌩️',
    color: '#F80000',
  },
];

const education = [
  {
    degree: 'PG Diploma in Big Data Analytics',
    institution: 'CDAC Bengaluru',
    year: '2023',
    color: '#22d3ee',
  },
  {
    degree: 'B.E. in Mechanical Engineering',
    institution: 'GHRCE, Nagpur',
    year: '2018',
    color: '#8b5cf6',
  },
];

export const EducationSection = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
      });
    }

    if (cardsRef.current.length) {
      gsap.set(cardsRef.current.filter(Boolean), { opacity: 0, y: 30 });
      ScrollTrigger.batch(cardsRef.current.filter(Boolean), {
        onEnter: (batch) => gsap.to(batch, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1, overwrite: true,
        }),
        start: 'top 90%',
      });
    }
  }, []);

  let idx = 0;

  return (
    <section className="w-full bg-black py-12 md:py-20 px-6 overflow-hidden">
      {/* Header */}
      <div ref={titleRef} className="text-center mb-10 md:mb-14">
        <h2
          className="text-3xl font-black tracking-tight uppercase text-[#22d3ee]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Education & Certifications
        </h2>
        <div className="mx-auto mt-6 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400/80">01</span>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/30">Education</h3>
            <div className="flex-1 h-px bg-neutral-900" />
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => {
              const cardIdx = idx++;
              return (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[cardIdx] = el)}
                  className="group relative p-5 md:p-6 rounded-xl border border-neutral-900 bg-neutral-950/50 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
                    style={{ backgroundColor: edu.color }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-white/40">{edu.institution}</p>
                    </div>
                    <span
                      className="text-xs font-bold tracking-wider px-3 py-1 rounded-full border shrink-0"
                      style={{ color: edu.color, borderColor: `${edu.color}30` }}
                    >
                      {edu.year}
                    </span>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: edu.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400/80">02</span>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/30">Certifications</h3>
            <div className="flex-1 h-px bg-neutral-900" />
          </div>

          <div className="space-y-4">
            {certifications.map((cert, i) => {
              const cardIdx = idx++;
              return (
                <div key={i} ref={(el) => (cardsRef.current[cardIdx] = el)}>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative p-5 md:p-6 rounded-xl border border-neutral-900 bg-neutral-950/50 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300 block"
                    >
                      <CertCardInner cert={cert} />
                    </a>
                  ) : (
                    <div className="group relative p-5 md:p-6 rounded-xl border border-neutral-900 bg-neutral-950/50 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300">
                      <CertCardInner cert={cert} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for the inner content of the card
const CertCardInner = ({ cert }) => (
  <>
    {/* Hover glow */}
    <div
      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
      style={{ backgroundColor: cert.color }}
    />

    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-800 bg-neutral-900/50 text-xl shrink-0 group-hover:border-neutral-700 transition-colors">
        {cert.icon}
      </div>

      <div className="flex-1">
        <h4 className="text-base md:text-lg font-bold text-white mb-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>
          {cert.title}
        </h4>
        {cert.subtitle && (
          <p className="text-sm text-white/50 mb-0.5">{cert.subtitle}</p>
        )}
        <p className="text-xs text-white/30">{cert.issuer}</p>
      </div>
      
      {cert.link && (
        <div className="shrink-0 text-white/20 group-hover:text-cyan-400 transition-colors mt-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </div>
      )}
    </div>

    {/* Bottom accent */}
    <div
      className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
      style={{ backgroundColor: cert.color }}
    />
  </>
);
