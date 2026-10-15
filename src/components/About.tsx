import React from 'react';
import { Compass, Sparkles, Code2, Monitor, Cpu, CheckCircle2 } from 'lucide-react';

const LOGO_SRC = '/src/assets/images/abror_logo_insignia_1792050823478.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      {/* Background radial accent */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            About Abror
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Transforming Concepts into Digital Reality
          </h2>
          <p className="text-slate-400 text-base">
            Bridging aesthetics, code precision, and interactive engineering.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-400">
                <Code2 className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider">Frontend Specialist</span>
              </div>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
                “I'm <strong className="text-white font-medium">Abror</strong>, a passionate Frontend Developer with 2 years of experience creating modern and interactive websites. I enjoy turning creative ideas into beautiful digital experiences using modern web technologies. I focus on clean code, responsive layouts, smooth animations and excellent user experiences.”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Pixel-Perfect Execution</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Meticulous layouts designed to perform on every device size.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Performance-First Code</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Fast load times, modular architecture, and zero bloat.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/20">
                Based in Uzbekistan
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/20">
                Available Globally
              </span>
            </div>
          </div>

          {/* Right Column: Holographic Insignia & Quick Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Holographic Insignia Box */}
            <div className="glass-card rounded-2xl p-6 flex items-center gap-6 relative overflow-hidden">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-cyan-400/50 shadow-md shadow-cyan-500/30 shrink-0">
                <img
                  src={LOGO_SRC}
                  alt="Abror Hologram Identity"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Digital Identity</span>
                <h3 className="text-xl font-bold font-display text-white">Abror</h3>
                <p className="text-xs text-slate-300">Frontend Developer &amp; UI Architect</p>
                <div className="pt-1 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>2+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Specialties & Interests */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Interests &amp; Specializations</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {['UI / UX Engineering', 'Web Animations', 'Interactive Experiences', 'High Performance Web', 'Component Systems'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Exploring / Currently Leveling Up */}
            <div className="glass-card rounded-2xl p-6 border-cyan-500/30 bg-gradient-to-r from-slate-900/80 to-cyan-950/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Currently Exploring
                </span>
                <span className="text-cyan-400/80">Active</span>
              </div>
              <h4 className="text-sm font-semibold text-white">Three.js, WebGL &amp; 3D Web Shaders</h4>
              <p className="text-xs text-slate-400">
                Pioneering the next generation of web interfaces with spatial graphics, real-time lighting, and interactive 3D viewports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
