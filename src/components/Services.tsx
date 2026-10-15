import React from 'react';
import { Globe, Layout, Sparkles, Layers, Zap, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types.ts';
import { playCyberClick } from '../utils/sound.ts';

const SERVICES: ServiceItem[] = [
  {
    title: 'Website Development',
    description:
      'End-to-end modern web applications built with React, Next.js, and TypeScript. Optimized for lightning-fast load times, SEO visibility, and rock-solid code maintainability.',
    details: [
      'Single Page Applications (SPA) & SSR',
      'Clean modular component architectures',
      'SEO & OpenGraph standard compliance',
      'Production deployment and Netlify/Vercel pipelines',
    ],
    icon: 'globe',
  },
  {
    title: 'Responsive UI Development',
    description:
      'Pixel-perfect, adaptive user interfaces crafted to provide flawless user ergonomics across smartphones, tablets, high-DPI laptops, and ultra-wide desktop monitors.',
    details: [
      'Mobile-first responsive layout design',
      'Tailwind CSS & fluid typography math',
      'Cross-browser and touch device testing',
      'Accessible focus states and ARIA semantics',
    ],
    icon: 'layout',
  },
  {
    title: 'Interactive Web Experiences',
    description:
      'Immersive digital experiences enhanced with fluid micro-interactions, hardware-accelerated animations, and futuristic 3D WebGL scenes that leave a lasting impression.',
    details: [
      'Three.js and 3D canvas integrations',
      'Hardware-accelerated CSS & Motion transitions',
      'Interactive games & procedural sound synthesis',
      'Custom dark futuristic theme engineering',
    ],
    icon: 'sparkles',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            What I Deliver
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Engineering Services
          </h2>
          <p className="text-slate-400 text-base">
            Professional development services tailored to deliver world-class digital products.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const getIcon = () => {
              switch (service.icon) {
                case 'globe':
                  return <Globe className="w-7 h-7 text-cyan-400" />;
                case 'layout':
                  return <Layout className="w-7 h-7 text-sky-400" />;
                case 'sparkles':
                  return <Sparkles className="w-7 h-7 text-blue-400" />;
                default:
                  return <Globe className="w-7 h-7 text-cyan-400" />;
              }
            };

            return (
              <div
                key={service.title}
                onMouseEnter={() => playCyberClick()}
                className="glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Hover top border gradient glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors w-fit shadow-md">
                    {getIcon()}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      Service 0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 block">
                      Capabilities Included:
                    </span>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA trigger */}
                <div className="pt-8">
                  <a
                    href="#contact"
                    onClick={() => playCyberClick()}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Discuss Project</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
