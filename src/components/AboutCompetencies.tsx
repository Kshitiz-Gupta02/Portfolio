import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Compass, GraduationCap } from 'lucide-react';

export const AboutCompetencies: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Split Column: Professional Story & Educational Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Narrative: Engineering + Management */}
          <div className="lg:col-span-6 min-w-0 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              01. Background & Philosophy
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Applying an <span className="text-emerald-400">engineering mindset</span> to business operations.
            </h2>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I approach business operations and product strategy the same way an engineer looks at a system: workflows have clear states, metrics act as feedback loops, and every bottleneck has a root cause you can model and fix.
              </p>
              <p>
                At <strong className="text-white">Growth Central VC</strong>, I was one of four core team members running all non-sales operations as we scaled from 20 to over 200 people. When rapid growth caused hiring quality to drop and friction between teams to rise, I traced the issue back to rigid ratio metrics. To fix it, I designed a new KPI scoring system from the ground up, writing the BRDs and 13 user stories, setting up PostgreSQL validation rules, and building Power BI DAX dashboards so teams had clearer, fairer targets.
              </p>
              <p>
                Later at <strong className="text-white">Genpact</strong>, I brought that same systems approach to AML compliance. I audited broken macro workbooks, created structured Microsoft Copilot prompt templates to speed up SAR documentation, and built Power Automate flows to triage high-risk transaction alerts faster.
              </p>
            </div>

            {/* Design Philosophy Callout (Directly from Growth Central VC BRD) */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Operating Philosophy</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">1.</span>
                  <span>Always start from what actually needs to improve, then design the KPI around it, not the other way around.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">2.</span>
                  <span>A number can never fully capture human effort, feeling, or luck. Build that acknowledgement into the model itself, and communicate it explicitly.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Education & Cross-Functional Toolkit */}
          <div className="lg:col-span-6 min-w-0 space-y-8">
            {/* Education Box */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b101d] border border-slate-800 p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Shiv Nadar University</h3>
                  <div className="text-xs text-slate-400 font-mono">Greater Noida, India · 2020 – 2024</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="font-semibold text-white">
                  B.Tech in Electronics & Communication + Minor in Management Studies
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dual-disciplinary curriculum combining digital signal processing, control systems engineering (Lagrangian modeling, state-space pole placement, Nyquist/Bode analysis) with financial accounting, operations research, managerial economics, and marketing strategy.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 font-mono">
                <span>Top 10 National B-School Track (Maruti Suzuki)</span>
                <span aria-hidden="true">·</span>
                <span>Co-Founder Daikoku (AIC Incubated)</span>
                <span aria-hidden="true">·</span>
                <span>NPTEL Certified 5G/IoT</span>
              </div>
            </div>

            {/* Core Software & Tool Arsenal */}
            <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                Core Tool Arsenal & Environments
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="min-w-0 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 interactive-tab-hover break-words">
                  <div className="font-bold text-white">Power BI & DAX</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Star schema, time-intelligence</div>
                </div>
                <div className="min-w-0 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 interactive-tab-hover break-words">
                  <div className="font-bold text-white">PostgreSQL & DBeaver</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Schema integrity, upsert import</div>
                </div>
                <div className="min-w-0 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 interactive-tab-hover break-words">
                  <div className="font-bold text-white">Excel (Financial & Logic)</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">XLOOKUP, Dynamic models, VBA</div>
                </div>
                <div className="min-w-0 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 interactive-tab-hover break-words">
                  <div className="font-bold text-white">JIRA & Confluence</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">5 Epics, 13 Stories, Defect log</div>
                </div>
                <div className="min-w-0 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 interactive-tab-hover break-words">
                  <div className="font-bold text-white">MS Visio & draw.io</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">As-Is/To-Be swimlane, ERDs</div>
                </div>
                <div className="min-w-0 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 interactive-tab-hover break-words">
                  <div className="font-bold text-white">Power Automate & AI</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Cloud flows, Copilot SAR prompts</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3-Column Detailed Competencies Grid */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">02. Core Competencies</div>
              <h3 className="text-2xl font-bold text-white mt-1">Specialized Analytical Disciplines</h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Categorized breakdown of quantitative modeling, operational systems architecture, and business consulting practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx} 
                className="min-w-0 rounded-2xl bg-slate-900/30 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between space-y-6 interactive-card-hover group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold">
                      0{idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-white">{cat.category}</h4>
                  </div>
                  
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-slate-400 leading-snug">
                          {skill.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
