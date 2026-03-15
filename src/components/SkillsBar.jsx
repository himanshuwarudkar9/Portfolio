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

export const SkillsBar = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: '#ffffff0d' }}>
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="skills-marquee-wrapper py-6 md:py-8">
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
              <span className="w-2 h-2 rounded-full bg-cyan-400/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};
