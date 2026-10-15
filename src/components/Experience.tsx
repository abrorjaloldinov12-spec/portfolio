import React from 'react';
import { Search, PenTool, Terminal, Rocket, CheckCircle2, Calendar, Milestone } from 'lucide-react';
import { playCyberClick } from '../utils/sound.ts';

const TIMELINE_STEPS = [
  {
    year: '2024',
    title: 'Modern Web Foundations & Core Architecture',
    period: 'Year 1 · Foundational Phase',
    description:
      'Mastered the essential building blocks of modern web development: semantic HTML5, modern CSS layout systems (Flexbox, Grid), asynchronous JavaScript (ES6+), and responsive mobile ergonomics.',
    achievements: [
      'Built responsive web interfaces adhering to modern web standards',
      'Engineered interactive client-side logic with vanilla JavaScript',
      'Adopted Git version control and modern developer workflows',
    ],
  },
  {
    year: '2025',
    title: 'React Ecosystem & Component-Driven Apps',
    period: 'Year 2 · Scaling & Specialization',
    description:
      'Expanded into modern reactive frameworks including React and Next.js. Focused on declarative state management, reusable component libraries, Tailwind CSS design systems, and rapid UI prototyping.',
    achievements: [
      'Engineered dynamic interactive applications with React & modern hooks',
      'Developed responsive web applications deployed to Netlify and Vercel',
      'Implemented clean UI design systems and state persistence',
    ],
  },
  {
    year: '2026',
    title: 'Interactive Experiences, Browser Gaming & 3D Web',
    period: 'Present · Cutting Edge',
    description:
      'Pushing frontend frontiers into interactive browser experiences, WebGL/Three.js spatial visualizations, game mechanics, and high-performance digital aesthetics.',
    achievements: [
      'Built 4D football demos and interactive browser gaming interfaces',
      'Developed specialized utility tools like the IELTS Score Calculator',
      'Pioneering futuristic dark cyber aesthetics and 3D web interfaces',
    ],
  },
];

const WORKFLOW_STEPS = [
  {
    number: '01',
    name: 'Discover',
    subtitle: 'Loyiha talablarini tushunish',
    description: 'Analyzing requirements, identifying core objectives, user personas, and performance benchmarks.',
    icon: <Search className="w-5 h-5 text-cyan-400" />,
  },
  {
    number: '02',
    name: 'Design',
    subtitle: 'Interfeys va vizual uslubni rejalashtirish',
    description: 'Wireframing, typography pairing, aesthetic direction, and component hierarchy planning.',
    icon: <PenTool className="w-5 h-5 text-sky-400" />,
  },
  {
    number: '03',
    name: 'Develop',
    subtitle: 'Responsive va interaktiv sayt yaratish',
    description: 'Writing clean, modular code with React, Tailwind CSS, hardware-accelerated animations, and responsive layouts.',
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
  },
  {
    number: '04',
    name: 'Launch',
    subtitle: 'Sinovdan o‘tkazish va internetga joylashtirish',
    description: 'Cross-browser QA, mobile device verification, performance optimization, and seamless cloud deployment.',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            Journey &amp; Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Experience &amp; Workflow
          </h2>
          <p className="text-slate-400 text-base">
            Two years of dedicated frontend evolution backed by a structured engineering process.
          </p>
        </div>

        {/* 1. 2-Year Progression Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 text-xs font-mono uppercase tracking-widest text-slate-400">
            <Milestone className="w-4 h-4 text-cyan-400" />
            <span>2-Year Growth Timeline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {TIMELINE_STEPS.map((step, idx) => (
              <div
                key={step.year}
                onMouseEnter={() => playCyberClick()}
                className="glass-card rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-extrabold font-display text-cyan-400 tabular-nums">
                      {step.year}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {step.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 block">
                    Key Milestones:
                  </span>
                  <ul className="space-y-1.5">
                    {step.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 4-Step Engineering Workflow */}
        <div>
          <div className="flex items-center gap-2 mb-8 text-xs font-mono uppercase tracking-widest text-slate-400">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span>4-Stage Project Workflow</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((wf) => (
              <div
                key={wf.number}
                onMouseEnter={() => playCyberClick()}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-display text-slate-800 group-hover:text-cyan-500/30 transition-colors tabular-nums">
                      {wf.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                      {wf.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {wf.name}
                    </h3>
                    <span className="text-[11px] text-cyan-400/80 font-mono block mt-0.5">
                      {wf.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {wf.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
