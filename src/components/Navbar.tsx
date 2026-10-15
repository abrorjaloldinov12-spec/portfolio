import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { getAudioMuted, setAudioMuted, playCyberClick, playCyberChime } from '../utils/sound.ts';

const LOGO_SRC = '/src/assets/images/abror_logo_insignia_1792050823478.jpg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(getAudioMuted());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !muted;
    setMuted(nextState);
    setAudioMuted(nextState);
    if (!nextState) {
      setTimeout(() => playCyberChime(), 50);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
  ];

  const handleLinkClick = () => {
    playCyberClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text/insignia brand element wordmark */}
          <a
            href="#"
            onClick={() => playCyberClick()}
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Abror Homepage"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-cyan-400/40 shadow-sm shadow-cyan-500/30 group-hover:border-cyan-300 transition-colors">
              <img
                src={LOGO_SRC}
                alt="Abror 3D Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-display flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
                ABRORBEK
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400/80 -mt-0.5">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + audio feedback toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
              title={muted ? 'Enable Cyber SFX' : 'Mute SFX'}
              aria-label={muted ? 'Enable Cyber SFX' : 'Mute SFX'}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={() => playCyberClick()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                playCyberClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-cyan-500/30 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-lg shadow-md shadow-cyan-500/25"
              >
                <Sparkles className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
