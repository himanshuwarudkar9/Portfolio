import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    title: 'Programming & Analytics',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'SciPy'],
  },
  {
    title: 'AI Agents & Intelligent Automation',
    items: ['LLM Integrations', 'RAG Pipelines', 'MCP', 'CrewAI', 'AutoGen'],
  },
  {
    title: 'Data Visualization & BI',
    items: ['Tableau', 'Seaborn', 'Plotly', 'Excel Pivot Tables'],
  },
  {
    title: 'Machine Learning & AI',
    items: ['Supervised ML', 'Unsupervised ML', 'Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Databases & Cloud',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Azure', 'Databricks'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git/GitHub', 'Jupyter', 'VS Code', 'Docker'],
  },
];

export const TechArsenal = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
    );

    const cards = containerRef.current.querySelectorAll('.skill-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );
  }, []);

  return (
    <section className="w-full bg-black py-16 md:py-24 px-6 overflow-hidden">
      {/* Centered Header */}
      <div ref={titleRef} className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
          <span className="text-white">Skills & </span>
          <span className="text-cyan-400" style={{ color: '#22d3ee' }}>Expertise</span>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base font-medium">
          Technologies I've worked with in real-world projects and professional environments
        </p>
      </div>

      {/* Grid container for categories */}
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, ci) => (
            <div
              key={ci}
              className="skill-card flex flex-col p-6 md:p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-6 font-sans">
                {cat.title}
              </h3>

              {/* Pill container */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((skill, si) => (
                  <span
                    key={si}
                    className="px-4 py-1.5 rounded-full text-sm font-medium text-neutral-300 bg-neutral-800/50 border border-neutral-700/50 hover:text-white hover:bg-neutral-800 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};