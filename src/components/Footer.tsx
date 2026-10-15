import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { playCyberClick } from '../utils/sound.ts';

const LOGO_SRC = '/src/assets/images/abror_logo_insignia_1792050823478.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-400/40">
              <img
                src={LOGO_SRC}
                alt="Abror Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-base font-bold font-display text-white tracking-wider">
                ABROR
              </span>
              <span className="text-xs text-slate-500 font-mono block">
                Frontend Developer &amp; Digital Creator
              </span>
            </div>
          </div>

          {/* Clean metadata links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <a href="#about" onClick={() => playCyberClick()} className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a href="#skills" onClick={() => playCyberClick()} className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a href="#projects" onClick={() => playCyberClick()} className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a href="#services" onClick={() => playCyberClick()} className="hover:text-cyan-400 transition-colors">
              Services
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a href="#contact" onClick={() => playCyberClick()} className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 font-mono">
              © {new Date().getFullYear()} Abror. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
