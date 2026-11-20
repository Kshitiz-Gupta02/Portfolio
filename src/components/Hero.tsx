import React from 'react';
import { ArrowRight, Download, FileText, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO, HEADLINE_METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onJumpToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onJumpToProjects }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/80 overflow-hidden">
      {/* Background radial accent glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-3xl -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Split Grid Hero: Left Typography / Right Project Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Anchor */}
          <div className="lg:col-span-7 min-w-0 space-y-6">
            
            {/* Domain Kicker: Clean unboxed metadata */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400">
              <span>Quantitative Strategy</span>
              <span aria-hidden="true">·</span>
              <span>Operations Research</span>
              <span aria-hidden="true">·</span>
              <span>Business Analytics</span>
            </div>

            {/* Main Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance break-words">
              Turning complex operations into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">clear, measurable systems</span>.
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I’m <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a business and systems analyst focused on quantitative modeling and process design. My work ranges from translating business needs into detailed BRDs and user stories to building mathematical frameworks like KPI scoring engines, AML transaction workflows, and graph-theory routing models. I enjoy taking unstructured problems and building practical tools teams can actually use.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onJumpToProjects}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 hover:translate-y-[-1px]"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-xl transition-all hover:translate-y-[-1px]"
              >
                <span>View Resume</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Kshitiz_Gupta_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>PDF Download</span>
              </a>
            </div>

            {/* Quick Context Subtext */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono flex-wrap">
              <span>B.Tech ECE + Minor in Management (SNU)</span>
              <span aria-hidden="true">·</span>
              <span>Ex-Genpact AML</span>
              <span aria-hidden="true">·</span>
              <span>Ex-Growth Central VC</span>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Lead Project Card */}
          <div className="lg:col-span-5 min-w-0">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1220]/90 border border-slate-800 p-5 sm:p-7 shadow-2xl space-y-5">
              
              {/* Header of lead card */}
              <div className="flex items-center justify-between gap-3 flex-wrap border-b border-slate-800 pb-4">
                <div className="min-w-0">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Lead Project Highlight</div>
                  <div className="text-base font-bold text-white">GCVC Performance Management Redesign</div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-1 rounded shrink-0">
                  BRD + 13 Stories
                </div>
              </div>

              {/* Mathematical Equation Box */}
              <div className="bg-[#070a12] rounded-xl p-4 border border-slate-800/80 font-mono text-xs space-y-2">
                <div className="text-slate-400 text-[11px]">WEIGHTED SCORING ENGINE (V3)</div>
                <div className="text-emerald-300 font-semibold text-sm">
                  Total Score = 5A + 2B − 6C + 10D − 4E
                </div>
                <div className="text-slate-400 text-[11px] leading-relaxed pt-1">
                  A: Job Ads · B: Applicants · C: Shortlists (20-60) · D: Passed (D≤C) · E: Not Selected (C−D)
                </div>
              </div>

              {/* Execution Details */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-800/40 rounded-lg p-3 border border-slate-800">
                  <div className="text-slate-400 text-[11px]">SYSTEM LIFECYCLE</div>
                  <div className="text-white font-semibold mt-0.5">PostgreSQL + DBeaver</div>
                  <div className="text-slate-400 text-[11px] mt-1">Staging & Upsert Pipelines</div>
                </div>
                <div className="bg-slate-800/40 rounded-lg p-3 border border-slate-800">
                  <div className="text-slate-400 text-[11px]">REPORTING DASHBOARD</div>
                  <div className="text-white font-semibold mt-0.5">Power BI Desktop</div>
                  <div className="text-emerald-400 text-[11px] mt-1">Custom DAX Metrics</div>
                </div>
              </div>

              {/* Direct Link to Project details */}
              <button
                onClick={onJumpToProjects}
                className="w-full py-2.5 px-4 text-xs font-semibold text-emerald-300 hover:text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>View Full 10-Project Showcase</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Headline Metrics Strip below the split */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
          {HEADLINE_METRICS.map((metric, idx) => (
            <div key={idx} className="min-w-0 space-y-1">
              <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums break-words">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-400">
                {metric.label}
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
