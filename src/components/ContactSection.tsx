import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#06080e]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            06. Let's Connect
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open to Strategic & Analytics Opportunities
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Interested in discussing business analysis, quantitative modeling, or operations management roles? Connect directly via email or professional channels below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Email */}
          <div className="min-w-0 rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Direct Email</h3>
              <p className="text-xs text-slate-400 font-mono select-all break-all">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 py-2 px-3 text-xs font-semibold text-center text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                Send Message
              </a>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: Professional Profiles */}
          <div className="min-w-0 rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Professional Networks</h3>
              <p className="text-xs text-slate-400">
                Explore open-source repositories, case competitions, and verified work history.
              </p>
            </div>

            <div className="space-y-2 pt-1 font-mono text-xs">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <span>CodeChef Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Card 3: Resume & Direct Call */}
          <div className="min-w-0 rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenResume}
                className="flex-1 py-2 px-3 text-xs font-semibold text-center text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                Open Resume
              </button>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Kshitiz_Gupta_Resume.pdf"
                className="py-2 px-3 text-xs font-semibold text-center text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>

        </div>

        {/* Footer info adhering to anti-slop guidelines */}
        <div className="pt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed for GitHub Pages hosting.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="#about" className="hover:text-slate-400 transition-colors">About</a>
            <span aria-hidden="true">·</span>
            <a href="#interactive-lab" className="hover:text-slate-400 transition-colors">Interactive Lab</a>
            <span aria-hidden="true">·</span>
            <a href="#case-studies" className="hover:text-slate-400 transition-colors">Case Studies</a>
            <span aria-hidden="true">·</span>
            <a href={PERSONAL_INFO.githubPagesUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">GitHub Pages ↗</a>
          </div>
        </div>

      </div>
    </section>
  );
};
