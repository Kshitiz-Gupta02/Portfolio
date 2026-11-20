import React from 'react';
import { FileText, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Zone 1: Brand Wordmark with spring-rotating diamond glyph */}
        <a 
          href="#" 
          className="brand-link text-sm sm:text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 sm:gap-3"
        >
          <span
            aria-hidden="true"
            className="brand-diamond inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] border-2 border-emerald-400 bg-emerald-400/20 shrink-0"
          />
          <span>{PERSONAL_INFO.name}</span>
        </a>

        {/* Zone 2: Single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-semibold text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            About & Skills
          </a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Featured Projects
          </a>
          <a href="#timeline" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Experience
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.codechef}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeChef Profile"
            title="CodeChef"
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-sm hover:shadow-emerald-500/20 whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 hidden sm:block" />
            <span>
              <span className="hidden sm:inline">View </span>Resume
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
