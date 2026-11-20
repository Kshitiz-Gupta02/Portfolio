import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, FileText, ArrowUpRight, Database, Image as ImageIcon, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { JIRA_EPICS_STORIES, DEFECT_LOGS } from '../data/portfolioData';

export interface CaseStudyItem {
  id: string;
  title: string;
  clientOrOrg: string;
  category: string;
  period: string;
  role: string;
  tagline: string;
  impactMetrics: { label: string; value: string }[];
  overview: string;
  problem: string;
  solution: string;
  keyTakeaways: string[];
  toolsUsed: string[];
  images?: { title: string; src: string; caption: string }[];
  pdfAssetPath?: string;
  driveUrl?: string;
  hasUatData?: boolean;
}

interface CaseStudyDetailModalProps {
  study: CaseStudyItem | null;
  onClose: () => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({ study, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'artifacts' | 'traceability'>('overview');
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  useEffect(() => {
    setActiveTab('overview');
    setZoomedIndex(null);
    setZoomScale(1);
  }, [study?.id]);

  useEffect(() => {
    if (zoomedIndex === null || !study?.images) return;
    const total = study.images.length;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setZoomedIndex(null);
        setZoomScale(1);
      } else if (e.key === 'ArrowRight') {
        setZoomedIndex((prev) => (prev !== null ? (prev + 1) % total : null));
        setZoomScale(1);
      } else if (e.key === 'ArrowLeft') {
        setZoomedIndex((prev) => (prev !== null ? (prev - 1 + total) % total : null));
        setZoomScale(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedIndex, study?.images]);

  if (!study) return null;

  const openLightbox = (idx: number) => {
    setZoomedIndex(idx);
    setZoomScale(1);
  };

  const closeLightbox = () => {
    setZoomedIndex(null);
    setZoomScale(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#090d16] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <span>{study.category}</span>
              <span aria-hidden="true">·</span>
              <span>{study.clientOrOrg}</span>
              <span aria-hidden="true">·</span>
              <span>{study.period}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {study.title}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Role: <span className="text-slate-300">{study.role}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Bar */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-900/40 border-b border-slate-800 text-xs font-semibold flex-wrap">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg border interactive-tab-hover ${
              activeTab === 'overview' 
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' 
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Executive Summary
          </button>

          {study.images && study.images.length > 0 && (
            <button
              onClick={() => setActiveTab('artifacts')}
              className={`px-3 py-1.5 rounded-lg border interactive-tab-hover flex items-center gap-1.5 ${
                activeTab === 'artifacts' 
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Screenshots & Dashboards ({study.images.length})</span>
            </button>
          )}

          {study.hasUatData && (
            <button
              onClick={() => setActiveTab('traceability')}
              className={`px-3 py-1.5 rounded-lg border interactive-tab-hover flex items-center gap-1.5 ${
                activeTab === 'traceability' 
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>BRD, Epics & Defect Log</span>
            </button>
          )}

          {(study.driveUrl || study.pdfAssetPath) && (
            <a
              href={study.driveUrl || study.pdfAssetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-300 px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900/60 interactive-tab-hover"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Original Deck or Artifacts</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Metric Highlights Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {study.impactMetrics.map((m, idx) => (
                  <div key={idx} className="min-w-0 p-3 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono">
                    <div className="text-base sm:text-2xl font-bold text-white tabular-nums break-words">{m.value}</div>
                    <div className="text-[11px] text-emerald-400 font-sans font-semibold mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Context & Problem */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono font-semibold uppercase text-slate-400">Context & The Friction Point</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {study.problem}
                </p>
              </div>

              {/* Engineering Solution */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono font-semibold uppercase text-slate-400">The Analytical Solution</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-2.5">
                <h4 className="text-sm font-mono font-semibold uppercase text-slate-400">Key Deliverables & Impact</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {study.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools list */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-500 uppercase mb-2">Technologies & Frameworks</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300 font-mono">
                  {study.toolsUsed.map((tool, idx) => (
                    <span key={idx}>
                      {tool} {idx < study.toolsUsed.length - 1 && <span className="text-slate-600">·</span>}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ARTIFACTS / SCREENSHOTS */}
          {activeTab === 'artifacts' && study.images && (
            <div className="space-y-6">
              <p className="text-xs text-slate-400">
                Original production screenshots and dashboard artifacts. Click any image to enlarge and zoom:
              </p>
              <div className="grid grid-cols-1 gap-6">
                {study.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-800 bg-[#070b14] overflow-hidden space-y-2.5 p-3 sm:p-4">
                    <div className="flex items-center justify-between gap-2 px-1">
                      <div className="text-xs sm:text-sm font-semibold text-white">{img.title}</div>
                      <button
                        type="button"
                        onClick={() => openLightbox(idx)}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors shrink-0"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>Enlarge / Zoom</span>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => openLightbox(idx)}
                      className="group relative block w-full text-left rounded-lg overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-colors cursor-zoom-in"
                      title="Click to enlarge and zoom"
                    >
                      <img 
                        src={img.src} 
                        alt={img.title} 
                        className="w-full h-auto object-contain max-h-[450px] bg-[#04060a]"
                        referrerPolicy="no-referrer"
                      />
                      <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 border border-slate-700 text-[11px] font-mono text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Click to zoom</span>
                      </span>
                    </button>
                    <div className="text-[11px] text-slate-400 px-1 font-mono">{img.caption}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TRACEABILITY / JIRA & UAT (FOR GROWTH CENTRAL VC) */}
          {activeTab === 'traceability' && study.hasUatData && (
            <div className="space-y-6">
              
              <div className="space-y-2">
                <div className="text-xs font-mono text-emerald-400 uppercase">Requirements Traceability Matrix</div>
                <h4 className="text-sm font-bold text-white">5 JIRA Epics and 13 User Stories</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every dashboard visual and database constraint maps cleanly back to specific Given/When/Then acceptance criteria authored during the business requirements definition.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {JIRA_EPICS_STORIES.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-emerald-400">{item.id}</span>
                      <span className="text-slate-400 text-[11px]">{item.epic}</span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-slate-300">
                      {item.stories.map((st, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-slate-500">•</span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Defect Log */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase">UAT Defect Log & Resolutions</div>
                <div className="space-y-3">
                  {DEFECT_LOGS.map((def) => (
                    <div key={def.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-mono">
                        <span className="font-bold text-emerald-400">{def.id}: {def.title}</span>
                        <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">{def.status}</span>
                      </div>
                      <div className="text-slate-400 text-[11px]"><strong className="text-slate-300">Severity & Location:</strong> {def.severity} · {def.foundIn}</div>
                      <div className="text-slate-400 text-[11px]"><strong className="text-slate-300">Root Cause:</strong> {def.rootCause}</div>
                      <div className="text-slate-300 text-[11px]"><strong className="text-emerald-400">Resolution:</strong> {def.fix}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono">Self-contained production artifact</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>

      {/* Fullscreen Image Lightbox & Zoom Viewer */}
      {zoomedIndex !== null && study.images && study.images[zoomedIndex] && (
        <div
          className="fixed inset-0 z-[60] bg-black/92 backdrop-blur-md flex flex-col"
          onClick={closeLightbox}
        >
          {/* Top Zoom Toolbar */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-slate-950/90 border-b border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-white truncate">
                {study.images[zoomedIndex].title}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Screenshot {zoomedIndex + 1} of {study.images.length}
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {study.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setZoomedIndex((zoomedIndex - 1 + study.images!.length) % study.images!.length);
                      setZoomScale(1);
                    }}
                    aria-label="Previous screenshot"
                    className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setZoomedIndex((zoomedIndex + 1) % study.images!.length);
                      setZoomScale(1);
                    }}
                    aria-label="Next screenshot"
                    className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors mr-1"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={() => setZoomScale((z) => Math.max(1, Number((z - 0.5).toFixed(1))))}
                disabled={zoomScale <= 1}
                aria-label="Zoom out"
                className="p-2 text-slate-300 hover:text-white disabled:opacity-40 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-emerald-400 min-w-[46px] text-center">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomScale((z) => Math.min(3, Number((z + 0.5).toFixed(1))))}
                disabled={zoomScale >= 3}
                aria-label="Zoom in"
                className="p-2 text-slate-300 hover:text-white disabled:opacity-40 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoomScale(1)}
                aria-label="Reset zoom"
                title="Reset zoom"
                className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close enlarged image"
                className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Zoom Canvas */}
          <div
            className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center"
            onClick={closeLightbox}
          >
            <img
              src={study.images[zoomedIndex].src}
              alt={study.images[zoomedIndex].title}
              onClick={(e) => {
                e.stopPropagation();
                setZoomScale((z) => (z >= 2.5 ? 1 : Number((z + 0.5).toFixed(1))));
              }}
              style={{ width: `${zoomScale * 100}%`, maxWidth: zoomScale === 1 ? '1200px' : 'none' }}
              className={`h-auto rounded-lg border border-slate-700 shadow-2xl transition-all duration-200 ${
                zoomScale >= 2.5 ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Caption Bar */}
          <div
            className="px-4 sm:px-6 py-2.5 bg-slate-950/90 border-t border-slate-800 text-center text-[11px] sm:text-xs font-mono text-slate-400"
            onClick={(e) => e.stopPropagation()}
          >
            {study.images[zoomedIndex].caption}
          </div>
        </div>
      )}
    </div>
  );
};
