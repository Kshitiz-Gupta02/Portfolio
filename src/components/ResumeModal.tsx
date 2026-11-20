import React, { useState } from 'react';
import { X, Download, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_HISTORY, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `
Kshitiz Gupta
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Portfolio: ${PERSONAL_INFO.githubPagesUrl} | LinkedIn: ${PERSONAL_INFO.linkedin} | CodeChef: ${PERSONAL_INFO.codechef}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

PROFESSIONAL EXPERIENCE
${EXPERIENCE_HISTORY.map(exp => `
${exp.role} — ${exp.company} (${exp.period}) | ${exp.location}
${exp.summary}
${exp.bullets.map(b => `• ${b}`).join('\n')}
Tools: ${exp.tools.join(', ')}
`).join('\n')}

CORE SKILLS
${SKILL_CATEGORIES.map(cat => `${cat.category}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        
        {/* Header with actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Kshitiz_Gupta_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#07090e] text-slate-200 text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="text-center space-y-2 border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 underline">
                LinkedIn
              </a>
              <span aria-hidden="true">·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 underline">
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a href={PERSONAL_INFO.codechef} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 underline">
                CodeChef
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold border-b border-slate-800/80 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Operations and analytics professional with hands-on experience in requirements documentation (BRD), process mapping, workflow automation, and quantitative modeling, gained from scaling operations 10x at an early-stage VC and working on AML compliance workflows at Genpact. Comfortable with BRDs, user stories, JIRA, Power BI, PostgreSQL, and advanced Excel modeling. Looking to move into a Business Analyst / Operations Strategy role.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold border-b border-slate-800/80 pb-1">
              Professional Experience
            </h2>

            {EXPERIENCE_HISTORY.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-white text-sm">{exp.company}</span>
                    <span className="text-slate-400 font-mono text-xs"> — {exp.role}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc marker:text-emerald-400">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold border-b border-slate-800/80 pb-1">
              Education & Honors
            </h2>
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-bold text-white text-sm">Shiv Nadar University</span>
                <span className="text-xs text-slate-400 font-mono">August 2020 – May 2024 | Greater Noida</span>
              </div>
              <div className="text-xs text-slate-300">
                B.Tech in Electronics and Communication Engineering, Minor in Management Studies
              </div>
              <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1 pt-1 marker:text-emerald-400">
                <li><strong className="text-slate-300">Maruti Suzuki XCELerate 2023:</strong> Semi-Finalist (Top 10 in B-School Track, Top 20 overall) out of 51,866 registrants nationwide. Developed national EV market entry and charging infrastructure strategy.</li>
                <li><strong className="text-slate-300">Daikoku (EdTech):</strong> Co-founded at SNU Atal Incubation Centre; managed product requirements and B2B client acquisition.</li>
              </ul>
            </div>
          </div>

          {/* Core Skills & Tools */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold border-b border-slate-800/80 pb-1">
              Core Skills & Tools
            </h2>
            <div className="space-y-2 text-xs font-mono">
              <div>
                <strong className="text-white">Tools & Software:</strong>{' '}
                <span className="text-slate-300">Power BI (DAX, Power Query), PostgreSQL, DBeaver, Excel (XLOOKUP, Dynamic Arrays, Macros), JIRA, Confluence, MS Visio, draw.io, Power Automate, Microsoft Copilot</span>
              </div>
              <div>
                <strong className="text-white">Business Analysis:</strong>{' '}
                <span className="text-slate-300">BRD / SRS Authoring, 13 User Stories & Given/When/Then Acceptance Criteria, UAT Test Case Execution, Defect Logging, As-Is / To-Be Process Mapping, ERD Diagrams, Agile/Scrum</span>
              </div>
              <div>
                <strong className="text-white">Quantitative & Operations:</strong>{' '}
                <span className="text-slate-300">3-Step DuPont ROE Decomposition, Little's Law Queuing Models, Dijkstra Route Optimization, Bottleneck & Capacity Planning, Time-and-Motion Studies</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono">
            {PERSONAL_INFO.email} · {PERSONAL_INFO.phone}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
