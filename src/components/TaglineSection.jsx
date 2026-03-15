import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const taglineText = 'I blend creativity with technical expertise to build AI/ML solutions that drive real-world impact.';

export const TaglineSection = () => {
  const taglineRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    if (!wordsRef.current.length) return;

    gsap.set(wordsRef.current, { opacity: 0.15 });

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
        { opacity: 1, duration: 1, ease: 'none' },
        i * 0.3
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div
        ref={taglineRef}
        className="flex flex-wrap justify-center items-center px-6 py-14 md:py-24 max-w-[900px] mx-auto gap-x-[0.8em] gap-y-2 leading-[1.1]"
      >
        {taglineText.split(' ').map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordsRef.current[i] = el)}
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
