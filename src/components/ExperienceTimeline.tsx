import React from 'react';
import { EXPERIENCE_HISTORY } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            05. Career & Track Record
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            A chronological progression of building operational architectures, executing business analysis, and scaling organizations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 pl-5 sm:pl-8 ml-2 sm:ml-4 space-y-10 sm:space-y-12">
          {EXPERIENCE_HISTORY.map((exp, idx) => (
            <div key={idx} className="relative group min-w-0">
              
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[29px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07090e] border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="min-w-0 rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-7 space-y-4 hover:border-slate-700 transition-colors">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                    </h3>
                    <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  {exp.summary}
                </p>

                {/* Detailed Accomplishments */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-mono font-bold shrink-0 mt-0.5">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools Used (Clean unboxed metadata) */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-mono flex-wrap">
                  <span className="text-slate-500">Skills & Tech:</span>
                  {exp.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-slate-300">
                      {tool} {tIdx < exp.tools.length - 1 && <span className="text-slate-600">·</span>}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
