import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'AI Equity Trader',
    desc: 'Autonomous financial intelligence agent that performs real-time market sentiment analysis and technical indicator evaluation for equity trading.',
    category: 'AI / FINANCE',
    tech: ['Python', 'MCP', 'YFinance', 'Multi-Agent', 'LLM'],
    year: '2026',
    link: 'https://github.com/himanshuwarudkar9/AI-Equity-Trader',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #2563eb 100%)',
  },
  {
    name: 'AutoGen Idea Agent',
    desc: 'Autonomous AI agent creator that leverages AutoGen framework for multi-agent orchestration and idea generation.',
    category: 'AGENTIC AI',
    tech: ['AutoGen', 'Python', 'LLM', 'Multi-Agent'],
    year: '2026',
    link: 'https://github.com/himanshuwarudkar9/AutoGen-idea-Agent-Creator',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #2563eb 100%)',
  },
  {
    name: 'Medical Chatbot',
    desc: 'AI-powered medical analysis chatbot with intelligent diagnostic capabilities and conversational health interface.',
    category: 'AI / HEALTHCARE',
    tech: ['Python', 'NLP', 'Pinecone', 'RAG', 'LLM'],
    year: '2025',
    link: 'https://github.com/himanshuwarudkar9/Medical_Chatbot',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #dc2626 50%, #f97316 100%)',
  },
  {
    name: 'AI Engineering Crew',
    desc: 'Multi-agent AI engineering team automation using CrewAI for collaborative task execution.',
    category: 'AGENTIC AI',
    tech: ['CrewAI', 'Python', 'LLM', 'Agents'],
    year: '2026',
    link: 'https://github.com/himanshuwarudkar9/AI_Engineering_Team_Crew',
    gradient: 'linear-gradient(135deg, #0c1220 0%, #06b6d4 50%, #3b82f6 100%)',
  },
  {
    name: 'Tokyo Olympic Azure',
    desc: 'End-to-end data engineering pipeline using Azure Data Factory, Databricks, and Synapse Analytics.',
    category: 'DATA ENGINEERING',
    tech: ['Azure', 'Databricks', 'Synapse', 'Jupyter'],
    year: '2024',
    link: 'https://github.com/himanshuwarudkar9/TokyoOlympic-AzureProject',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0284c7 50%, #0891b2 100%)',
  },

];

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="project-card group relative block shrink-0 w-[80vw] sm:w-[400px] md:w-[450px] h-[60vh] min-h-[400px] max-h-[550px] rounded-[32px] overflow-hidden bg-neutral-950 border border-white/5"
    style={{ fontFamily: "'Syne', sans-serif" }}
  >
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        style={{ background: project.gradient }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
        <span
          className="text-6xl md:text-7xl font-black text-white/10 uppercase tracking-tighter text-center leading-none transition-all duration-700 group-hover:scale-105 group-hover:text-white/15"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          {project.name}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
    </div>

    <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
      <div className="absolute top-8 left-8 bg-black/30 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">
        {project.year}
      </div>
      <div className="space-y-4">
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-cyan-400">
          {project.category}
        </span>
        <h3 className="text-4xl font-black text-white leading-none font-['Clash_Display']">
          {project.name}
        </h3>
        <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
          <p className="text-white/60 text-sm leading-relaxed">
            {project.desc}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex gap-2">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} className="text-[9px] text-white/40 border border-white/10 rounded-full px-2 py-1 uppercase font-bold tracking-wider">
                {t}
              </span>
            ))}
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </a>
);

export const ProjectsSection = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    let ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-neutral-950 overflow-hidden">
      {/* Change: Added pb-16 to create space at the bottom.
          Change: Changed justify-between to justify-start to allow manual spacing.
      */}
      <div className="h-[100svh] min-h-[700px] flex flex-col justify-start py-12 md:pb-20">

        {/* 1. Header (Stays Pinned) */}
        <div className="text-center px-4 shrink-0 mb-8 md:mb-12">
          <h2
            className="text-3xl font-black tracking-tight uppercase text-[#22d3ee]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Selected Works
          </h2>
          <div className="mx-auto mt-6 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* 2. Horizontal Project Track */}
        <div className="relative flex-1 flex items-center mb-12">
          <div ref={trackRef} className="flex gap-8 px-[10vw]">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>

        {/* 3. View All Projects link 
            Change: Added mt-auto and pb-6 to push it to the absolute bottom of the viewport
        */}
        <div className="text-center shrink-0 mt-auto pb-6 md:pb-10">
          <a
            href="https://github.com/himanshuwarudkar9?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-white/50 hover:text-cyan-400 transition-colors duration-300 group/link"
          >
            <span className="text-sm font-medium tracking-widest uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
              View All Projects
            </span>
            <div className="w-10 h-10 rounded-full border border-white/20 group-hover/link:border-cyan-400/60 flex items-center justify-center transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};