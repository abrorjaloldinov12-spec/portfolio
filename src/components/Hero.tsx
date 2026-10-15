import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Layers, Cpu } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas.tsx';
import { playCyberClick } from '../utils/sound.ts';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden bg-cyber-grid">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Status Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 backdrop-blur-md w-fit shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>AVAILABLE FOR CREATIVE PROJECTS</span>
            </div>

            {/* Giant Futuristic Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Abror</span>, <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">and I'm Black Hacker</span>

              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-200 tracking-tight">
                Frontend Developer &amp; Digital Creator
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I build modern, interactive and visually stunning digital experiences for the web.
              Focused on performance, futuristic aesthetics, and seamless user interaction.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={() => playCyberClick()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={() => playCyberClick()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-cyan-300 bg-slate-900/80 border border-cyan-500/30 rounded-xl hover:bg-slate-800/80 hover:border-cyan-400/60 hover:text-white transition-all backdrop-blur-sm"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display text-white tabular-nums">2+ Years</span>
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display text-cyan-300 tabular-nums">100%</span>
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Interactive Web</span>
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-2xl font-bold font-display text-sky-400">React &amp; 3D</span>
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Modern Stack</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              {/* Outer cyber frame styling */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent blur-md -z-10" />
              <div className="relative rounded-2xl border border-cyan-500/20 bg-slate-950/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-cyan-950/30">
                <Hero3DCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
