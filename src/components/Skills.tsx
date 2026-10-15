import React, { useState } from 'react';
import { 
  Code, 
  Palette, 
  FileCode, 
  Atom, 
  Boxes, 
  Wind, 
  GitBranch, 
  Smartphone,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { playCyberClick } from '../utils/sound.ts';

interface SkillData {
  name: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  coreConcepts: string[];
  accentColor: string;
}

const SKILLS_LIST: SkillData[] = [
  {
    name: 'HTML5',
    category: 'Core Structure',
    icon: <Code className="w-6 h-6 text-orange-400" />,
    description: 'Semantic markup, accessibility (ARIA), modern DOM structures, and clean SEO architecture.',
    coreConcepts: ['Semantic Elements', 'Web Accessibility', 'SEO Foundations', 'Canvas API'],
    accentColor: 'from-orange-500/20 to-transparent',
  },
  {
    name: 'CSS3',
    category: 'Styling & Motion',
    icon: <Palette className="w-6 h-6 text-blue-400" />,
    description: 'Modern layout engines (Grid & Flexbox), fluid typography, custom animations, and CSS variables.',
    coreConcepts: ['CSS Grid & Flexbox', 'Keyframe Animations', 'Custom Properties', 'Fluid Math'],
    accentColor: 'from-blue-500/20 to-transparent',
  },
  {
    name: 'JavaScript',
    category: 'Core Logic',
    icon: <FileCode className="w-6 h-6 text-yellow-400" />,
    description: 'Modern ES6+ syntax, asynchronous programming, DOM manipulation, functional patterns, and APIs.',
    coreConcepts: ['Async / Await', 'ES6+ Modules', 'Closures & Scopes', 'Event Architecture'],
    accentColor: 'from-yellow-500/20 to-transparent',
  },
  {
    name: 'React',
    category: 'Component Architecture',
    icon: <Atom className="w-6 h-6 text-cyan-400" />,
    description: 'Component-driven architectures, custom hooks, reactive state workflows, and virtual DOM optimization.',
    coreConcepts: ['Custom Hooks', 'State Management', 'Component Lifecycle', 'Performance Optimization'],
    accentColor: 'from-cyan-500/20 to-transparent',
  },
  {
    name: 'Next.js',
    category: 'Full-Stack React Framework',
    icon: <Boxes className="w-6 h-6 text-slate-200" />,
    description: 'Server-side rendering (SSR), static site generation (SSG), routing paradigms, and production deployment.',
    coreConcepts: ['App Router', 'Server Components', 'Static Generation', 'API Route Handlers'],
    accentColor: 'from-slate-400/20 to-transparent',
  },
  {
    name: 'Tailwind CSS',
    category: 'Utility-First Design',
    icon: <Wind className="w-6 h-6 text-sky-400" />,
    description: 'Rapid UI prototyping, design token consistency, dark mode theming, and responsive utility architecture.',
    coreConcepts: ['Design Tokens', 'Responsive Modifiers', 'Dark Theme Engine', 'Custom Plugins'],
    accentColor: 'from-sky-500/20 to-transparent',
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control & Teamwork',
    icon: <GitBranch className="w-6 h-6 text-rose-400" />,
    description: 'Version control workflows, branch strategy, code review management, and repository synchronization.',
    coreConcepts: ['Git Flow', 'Merge & Rebase', 'GitHub Workflows', 'Version Tagging'],
    accentColor: 'from-rose-500/20 to-transparent',
  },
  {
    name: 'Responsive Web Design',
    category: 'Cross-Device Experience',
    icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
    description: 'Adaptive layouts optimized for smartphones, tablets, high-DPI laptops, and multi-monitor setups.',
    coreConcepts: ['Mobile-First Philosophy', 'Fluid Viewports', 'Touch Ergonomics', 'High-DPI Assets'],
    accentColor: 'from-emerald-500/20 to-transparent',
  },
];

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Core Technologies &amp; Capabilities
          </h2>
          <p className="text-slate-400 text-base">
            Modern tools and engineering principles used to build responsive, high-performance web products.
          </p>
        </div>

        {/* 3D Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_LIST.map((skill) => {
            const isHovered = activeSkill === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => {
                  playCyberClick();
                  setActiveSkill(skill.name);
                }}
                onMouseLeave={() => setActiveSkill(null)}
                className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 group cursor-default ${
                  isHovered ? 'border-cyan-400/60 shadow-xl shadow-cyan-950/50 -translate-y-1.5' : 'hover:border-slate-700'
                }`}
              >
                {/* Dynamic gradient background wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${skill.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors shadow-inner">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Core Concepts */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 block">
                      Core Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.coreConcepts.map((concept) => (
                        <span
                          key={concept}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
