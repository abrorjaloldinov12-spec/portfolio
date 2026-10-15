import React, { useState } from 'react';
import { ExternalLink, Lock, Eye, X, Play, Sparkles, Gamepad2, Car, Calculator, Layers } from 'lucide-react';
import { Project } from '../types.ts';
import { playCyberClick, playCyberChime } from '../utils/sound.ts';

const PROJECTS: Project[] = [
  {
    id: 'football-4d',
    title: '4D Football Demo',
    description: 'A browser-based football game demo with a scoreboard and on-screen controls.',
    longDescription:
      'An immersive cybernetic sports simulation built for modern web browsers. Features dynamic scoreboard telemetry, interactive on-screen keyboard/touch controls, and visual stadium floodlight aesthetics designed for high-refresh gaming.',
    image: '/src/assets/images/project_football_4d_1792050825081.jpg',
    demoUrl: 'https://abror2026.netlify.app/',
    category: 'game',
    tags: ['JavaScript', 'HTML5 Canvas', 'Game Loop', 'Audio SFX'],
    features: [
      'Interactive scoreboard with match timer and goal counters',
      'On-screen responsive controls for mobile and desktop input',
      'Dynamic stadium floodlight rendering and sound synthesis',
      'Zero-lag browser gameplay optimization',
    ],
  },
  {
    id: 'football-game',
    title: 'Football Game',
    description: 'An interactive football game built for the web.',
    longDescription:
      'A fast-paced interactive web football experience engineered with responsive physics and player movement. Designed with vivid neon arena styling, dynamic ball trajectories, and real-time score tracking.',
    image: '/src/assets/images/project_football_game_1792050823438.jpg',
    demoUrl: 'https://fodballgame.netlify.app/',
    category: 'game',
    tags: ['JavaScript', 'Web Game', 'Interactive Physics', 'Responsive UI'],
    features: [
      'Kinematic ball flight physics and goal detection',
      'Smooth keyboard controls and tactile touch pads',
      'Neon hyper-stadium aesthetic with glowing goal nets',
      'Instant replay and match score statistics',
    ],
  },
  {
    id: 'auto-market',
    title: 'Auto Market',
    description: 'A modern car marketplace website for exploring and discovering vehicles.',
    longDescription:
      'A sleek, high-end automotive marketplace interface showcasing luxury electric and hypercar inventory. Built with modern card layouts, specifications comparison HUDs, and an ultra-clean dark theme for vehicle discovery.',
    image: '/src/assets/images/project_auto_market_1792050823832.jpg',
    demoUrl: 'https://abrorcars.netlify.app/',
    category: 'webapp',
    tags: ['React', 'Tailwind CSS', 'Vehicle Catalog', 'Filter System'],
    features: [
      'Interactive vehicle filtering by category, price, and specs',
      'Comprehensive HUD detail panels for horsepower, acceleration, and range',
      'Futuristic dark showroom styling with ambient reflections',
      'Fluid mobile-first responsive grid system',
    ],
  },
  {
    id: 'ielts-calculator',
    title: 'IELTS Score Calculator',
    description: 'An IELTS score calculator designed to help users calculate their estimated band score.',
    longDescription:
      'An accurate and intuitive calculator for IELTS test takers. Automatically computes estimated overall band scores according to the official IELTS rounding criteria across Listening, Reading, Writing, and Speaking modules.',
    image: '/src/assets/images/project_ielts_calculator_1792050824998.jpg',
    demoUrl: 'https://conclusionieltscore.netlify.app/',
    category: 'tool',
    tags: ['JavaScript', 'Score Algorithm', 'Analytics Dashboard', 'Clean UI'],
    features: [
      'Official IELTS 0.5 band score rounding logic implementation',
      'Visual breakdown for Listening, Reading, Writing, and Speaking',
      'Instant recalculation as sliders or numeric fields change',
      'Target score comparison and CEFR level guidance',
    ],
  },
];

type CategoryFilter = 'all' | 'game' | 'webapp' | 'tool';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const openProjectModal = (proj: Project) => {
    playCyberChime();
    setSelectedProject(proj);
  };

  const closeProjectModal = () => {
    playCyberClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
              Work &amp; Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base">
              A curated selection of interactive web applications, browser games, and digital tools.
            </p>
          </div>

          {/* Filter Bar (Interactive Buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => {
                playCyberClick();
                setFilter('all');
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => {
                playCyberClick();
                setFilter('game');
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'game'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              Games &amp; 3D
            </button>
            <button
              onClick={() => {
                playCyberClick();
                setFilter('webapp');
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'webapp'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              Web Apps
            </button>
            <button
              onClick={() => {
                playCyberClick();
                setFilter('tool');
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'tool'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              Tools
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg hover:shadow-cyan-950/30"
            >
              {/* Project Image Showcase with Overlay */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Quick inspection hover button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-cyan-400/50 text-cyan-300 text-xs font-semibold shadow-xl">
                    <Eye className="w-4 h-4" />
                    Inspect Project Specs
                  </span>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30 backdrop-blur-md">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-3">
                  <h3
                    onClick={() => openProjectModal(project)}
                    className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-400 font-mono">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-cyan-300/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions: Live Demo + Honest Source Code Button */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playCyberClick()}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-lg shadow-sm hover:shadow-cyan-400/30 hover:brightness-110 active:scale-95 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Source Code Action: Honest status according to instructions */}
                  {project.sourceCodeUrl ? (
                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                    >
                      <span>Source Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-slate-500 bg-slate-900/60 border border-slate-800/60 rounded-lg cursor-not-allowed select-none"
                      title="Source code not added for this demo"
                    >
                      <Lock className="w-3 h-3 text-slate-500" />
                      <span>Source code not added</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="relative aspect-video w-full bg-slate-950 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-white hover:text-cyan-300 hover:border-cyan-400 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                  Project Deep Dive
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* Key Features List */}
              {selectedProject.features && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Architectural Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <span className="text-cyan-400 font-mono mt-0.5">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-slate-950 border border-cyan-500/20 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberClick()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-xl hover:shadow-cyan-400/40 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-cyan-500/20"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={closeProjectModal}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
