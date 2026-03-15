// import { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const experiences = [
//   {
//     date: 'July 2025 - PRESENT',
//     role: 'Associate AI/ML Engineer',
//     company: 'Techdome',
//     location: 'Indore',
//     description: 'Building agentic AI systems, multi-agent orchestration platforms, and end-to-end ML pipelines using CrewAI, AutoGen, and LangChain.',
//     bullets: [
//       'Building AI-powered computer vision solutions using YOLO and Re-Identification (ReID) models for intelligent video analytics.',
//       'Developing and optimizing real-time pipelines in Python for large-scale video processing and monitoring applications.',
//       'Leveraging PyTorch, Torchreid, and OpenCV to design and deploy deep learning models for object detection, tracking, and identity recognition.',
//       'Contributing to scalable deployment of ML/CV systems, improving automation, efficiency, and decision-making in enterprise environments.'
//     ],
//     color: '#22d3ee',
//   },
//   {
//     date: 'May 2024 - June 2025',
//     role: 'Data Scientist',
//     company: 'Squad Sync',
//     location: 'Hyderabad',
//     description: 'Designed data engineering pipelines using Azure Data Factory, Databricks, and Synapse Analytics for Olympic data processing and analysis.',
//     bullets: [
//       'Developed advanced biometric analysis algorithms using computer vision, signal processing, and machine learning, achieving 97% accuracy in face-based applications and 98% in heart rate detection.',
//       'Engineered multi-sensor data processing pipelines, integrating video and audio-based physiological signals to enhance biometric accuracy and system reliability.',
//       'Optimized ETL pipelines, improving data processing efficiency for real-time health analytics.',
//       'Contributed to a mobile health app, ensuring seamless biometric data integration while maintaining data privacy compliance.'
//     ],
//     color: '#8b5cf6',
//   },
// ];

// export const ExperienceSection = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const timelineRef = useRef(null);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     if (titleRef.current) {
//       gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, {
//         opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
//         scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
//       });
//     }

//     if (itemsRef.current.length) {
//       itemsRef.current.forEach((item, i) => {
//         if (!item) return;
//         gsap.fromTo(item,
//           { opacity: 0, y: 40, x: i % 2 === 0 ? -20 : 20 },
//           {
//             opacity: 1, y: 0, x: 0, duration: 0.8, ease: 'power3.out',
//             scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
//           }
//         );
//       });
//     }
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative w-full bg-black py-12 md:py-20 overflow-hidden">
//       {/* Header */}
//       <div ref={titleRef} className="text-center mb-12 px-4">
//         <h2
//           className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
//           style={{ fontFamily: "'Syne', sans-serif", color: '#22d3ee' }}
//         >
//           Experience
//         </h2>
//         <div className="mx-auto mt-6 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//       </div>

//       {/* Timeline */}
//       <div ref={timelineRef} className="max-w-5xl mx-auto px-4 md:px-8 relative">
//         {/* Central vertical line */}
//         <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent md:transform md:-translate-x-px" />

//         {/* Experience items */}
//         <div className="space-y-12 md:space-y-16">
//           {experiences.map((exp, i) => (
//             <div
//               key={i}
//               ref={(el) => (itemsRef.current[i] = el)}
//               className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                 }`}
//             >
//               {/* Timeline node */}
//               <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 mt-2 z-10 shadow-lg"
//                 style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
//               />

//               {/* Content card */}
//               <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
//                 <div className="group p-5 md:p-6 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-white/15 transition-all duration-300">
//                   {/* Date */}
//                   <span
//                     className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2 block"
//                     style={{ color: exp.color, fontFamily: "'Syne', sans-serif" }}
//                   >
//                     {exp.date}
//                   </span>
//                   {/* Role */}
//                   <h3
//                     className="text-lg md:text-xl font-bold text-white mb-1"
//                     style={{ fontFamily: "'Syne', sans-serif" }}
//                   >
//                     {exp.role}
//                   </h3>
//                   {/* Company */}
//                   <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? 'md:justify-end md:flex-row-reverse' : ''}`}>
//                     <p className="text-sm text-white/50 font-medium inline-block">{exp.company}</p>
//                     <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
//                     <p className="text-xs text-white/30 tracking-wider uppercase inline-block">{exp.location}</p>
//                   </div>

//                   {/* Description container */}
//                   <div className="relative overflow-hidden">
//                     <p className="text-sm text-white/40 leading-relaxed mb-1 transition-all duration-500 ease-in-out">
//                       {exp.description}
//                     </p>

//                     {/* Expandable Bullets on Hover */}
//                     <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
//                       <div className="overflow-hidden">
//                         <ul className={`mt-3 space-y-2 text-xs md:text-sm text-white/60 leading-relaxed ${i % 2 === 0 ? 'md:list-inside md:text-right' : 'list-inside text-left'}`}>
//                           {exp.bullets.map((bullet, idx) => (
//                             <li key={idx} className="flex items-start gap-2 justify-start">
//                               <span style={{ color: exp.color }} className="text-[10px] mt-1 shrink-0">❖</span>
//                               <span className="text-left">{bullet}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hint indicator */}
//                   <div className="mt-3 flex items-center gap-2 opacity-50 group-hover:opacity-0 transition-opacity duration-300 text-[10px] text-white/30 uppercase tracking-widest">
//                     <span className="w-3 h-px bg-white/20" />
//                     Hover for details
//                     <span className="w-3 h-px bg-white/20" />
//                   </div>

//                 </div>
//               </div>

//               {/* Spacer for alternating layout */}
//               <div className="hidden md:block md:w-[calc(50%-2rem)]" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    date: 'July 2025 - PRESENT',
    role: 'Associate AI/ML Engineer',
    company: 'Techdome',
    location: 'Indore',
    bullets: [
      'Building AI-powered computer vision solutions using YOLO and Re-Identification (ReID) models for intelligent video analytics.',
      'Developing and optimizing real-time pipelines in Python for large-scale video processing and monitoring applications.',
      'Leveraging PyTorch, Torchreid, and OpenCV to design and deploy deep learning models for object detection, tracking, and identity recognition.',
      'Contributing to scalable deployment of ML/CV systems, improving automation, efficiency, and decision-making in enterprise environments.'
    ],
    color: '#22d3ee',
  },
  {
    date: 'May 2024 - June 2025',
    role: 'Data Scientist',
    company: 'Squad Sync',
    location: 'Hyderabad',
    bullets: [
      'Developed advanced biometric analysis algorithms using computer vision, signal processing, and machine learning, achieving 97% accuracy in face-based applications and 98% in heart rate detection.',
      'Engineered multi-sensor data processing pipelines, integrating video and audio-based physiological signals to enhance biometric accuracy and system reliability.',
      'Optimized ETL pipelines, improving data processing efficiency for real-time health analytics.',
      'Contributed to a mobile health app, ensuring seamless biometric data integration while maintaining data privacy compliance.'
    ],
    color: '#8b5cf6',
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    }

    if (itemsRef.current.length) {
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(item,
          { opacity: 0, y: 40, x: i % 2 === 0 ? -20 : 20 },
          {
            opacity: 1, y: 0, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div ref={titleRef} className="text-center mb-12 px-4">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
          style={{ fontFamily: "'Syne', sans-serif", color: '#22d3ee' }}
        >
          Experience
        </h2>
        <div className="mx-auto mt-6 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent md:transform md:-translate-x-px" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 mt-2 z-10 shadow-lg"
                style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
              />

              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                <div className="group p-5 md:p-6 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-white/15 transition-all duration-300">
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2 block"
                    style={{ color: exp.color, fontFamily: "'Syne', sans-serif" }}
                  >
                    {exp.date}
                  </span>

                  <h3
                    className="text-lg md:text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {exp.role}
                  </h3>

                  {/* Company and Location Alignment Logic */}
                  <div className={`flex flex-col mb-4 ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <p className="text-sm text-white/70 font-bold uppercase tracking-wider">{exp.company}</p>
                    <p className="text-xs text-white/40 font-medium uppercase tracking-[0.15em]">{exp.location}</p>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <ul className={`mt-3 space-y-3 text-xs md:text-sm text-white/60 leading-relaxed ${i % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className={`flex items-start gap-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                              <span style={{ color: exp.color }} className="text-[10px] mt-1 shrink-0">❖</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={`mt-3 flex items-center gap-2 opacity-50 group-hover:opacity-0 transition-opacity duration-300 text-[10px] text-white/30 uppercase tracking-widest ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <span className="w-3 h-px bg-white/20" />
                    Hover for project details
                    <span className="w-3 h-px bg-white/20" />
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};