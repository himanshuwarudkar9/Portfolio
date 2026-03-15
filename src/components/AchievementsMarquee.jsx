export const AchievementsMarquee = () => {
  const items = [
    { number: '15+', label: 'Projects Completed' },
    { number: '1.5+', label: 'Years of AI/ML Experience' },
    { number: '3+', label: 'AI Agent Systems Built' },
    { number: '5+', label: 'ML Models Deployed' },
  ];

  return (
    <div className="relative w-full overflow-hidden border-t border-b border-white/10" style={{ backgroundColor: '#ffffff0d' }}>
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="achievements-marquee-wrapper py-6 md:py-8">
        <div className="achievements-marquee-track">
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center gap-12 md:gap-20 shrink-0">
              {items.map((item, i) => (
                <div key={`${set}-${i}`} className="flex items-center gap-3 md:gap-4 whitespace-nowrap">
                  <span
                    className="text-3xl sm:text-4xl md:text-5xl font-black"
                    style={{ fontFamily: "'Syne', sans-serif", color: '#22d3ee' }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-sm md:text-base text-white/50 font-medium uppercase tracking-wider"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
              <span className="text-white/20 text-2xl shrink-0">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
