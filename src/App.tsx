import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutCompetencies } from './components/AboutCompetencies';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleJumpToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300 overflow-x-clip">
      
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with 4-Column Proof Metrics */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onJumpToProjects={handleJumpToProjects} 
        />

        {/* 2. About & Competencies (Engineering + Management, No Skill Ratings) */}
        <AboutCompetencies />

        {/* 3. Featured 10 Projects in Exact Sequence */}
        <FeaturedProjects />

        {/* 4. Career & Track Record Timeline */}
        <ExperienceTimeline />

        {/* 5. Professional Contact & Verification Links */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Full ATS & Executive Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}
