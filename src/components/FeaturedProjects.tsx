import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  FileText, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  BarChart3, 
  Compass, 
  Users, 
  Search, 
  Navigation,
  DollarSign
} from 'lucide-react';
import { FEATURED_PROJECTS, ProjectDetail } from '../data/portfolioData';
import { CaseStudyDetailModal } from './CaseStudyDetailModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl min-w-0">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              03. Featured Portfolio
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Strategy Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Curated showcase of 10 end-to-end projects across quantitative analytics, venture scaling, operations research, and financial modeling.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border interactive-tab-hover whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Projects (10)
            </button>
            <button
              onClick={() => setActiveFilter('Analytics & Modeling')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border interactive-tab-hover whitespace-nowrap ${
                activeFilter === 'Analytics & Modeling'
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Analytics & Modeling
            </button>
            <button
              onClick={() => setActiveFilter('Strategy & Operations')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border interactive-tab-hover whitespace-nowrap ${
                activeFilter === 'Strategy & Operations'
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Strategy & Operations
            </button>
            <button
              onClick={() => setActiveFilter('Product & Consulting')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border interactive-tab-hover whitespace-nowrap ${
                activeFilter === 'Product & Consulting'
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Product & Consulting
            </button>
          </div>
        </div>

        {/* 10 Projects Ordered Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="min-w-0 rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-7 flex flex-col justify-between space-y-6 cursor-pointer interactive-card-hover group"
            >
              <div className="space-y-4">
                
                {/* Top Metadata Bar (Unboxed text with separators) */}
                <div className="flex items-start justify-between gap-2 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-emerald-400 min-w-0">
                    <span className="font-bold text-slate-500">#{proj.order < 10 ? `0${proj.order}` : proj.order}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.clientOrOrg}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{proj.period}</span>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-800/60 text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {proj.title}
                </h3>

                {/* Tagline / Overview */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.tagline}
                </p>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 font-mono">
                  {proj.impactMetrics.slice(0, 2).map((metric, mIdx) => (
                    <div key={mIdx} className="min-w-0 p-2.5 rounded-xl bg-[#070b14] border border-slate-800/80">
                      <div className="text-sm sm:text-lg font-bold text-white tabular-nums break-words">{metric.value}</div>
                      <div className="text-[11px] text-emerald-400 font-sans font-medium mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables Bullet Preview */}
                <div className="space-y-1.5 pt-1 text-xs text-slate-400">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">›</span>
                    <span className="line-clamp-2">{proj.keyTakeaways[0]}</span>
                  </div>
                </div>

              </div>

              {/* Bottom Footer Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs font-mono">
                <span className="text-slate-400 truncate min-w-0 flex-1">
                  {proj.toolsUsed.slice(0, 3).join(' · ')}
                </span>
                <span className="text-emerald-400 font-semibold group-hover:underline shrink-0 whitespace-nowrap">
                  Inspect Details →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyDetailModal
        study={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
