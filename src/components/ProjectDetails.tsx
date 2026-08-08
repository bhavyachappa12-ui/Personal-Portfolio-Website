import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Figma, Sparkles, CheckCircle2, Layers, Cpu, ShieldAlert, Target, Lightbulb, Compass, Award } from 'lucide-react';
import { Project } from '../data/projects';
import { ImageWithFallback } from './ImageWithFallback';
import { FinanceWireframes } from './FinanceWireframes';
import { EmailTemplateShowcase } from './EmailTemplateShowcase';

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudySections = [
    { number: '01', title: 'Overview', content: project.caseStudy.overview, icon: Compass },
    { number: '02', title: 'Problem Statement', content: project.caseStudy.problem, icon: ShieldAlert },
    { number: '03', title: 'User Needs', content: project.caseStudy.userNeeds, icon: Target },
    { number: '04', title: 'User Research', content: project.caseStudy.research, icon: Cpu },
    { number: '05', title: 'Design Goals', content: project.caseStudy.designGoals, icon: Lightbulb },
    { number: '06', title: 'Wireframes & Architecture', content: project.caseStudy.wireframes, icon: Layers },
    { number: '07', title: 'High-Fidelity Interface', content: project.caseStudy.highFidelityDesign, icon: Figma },
    { number: '08', title: 'Interactive Prototype', content: project.caseStudy.prototype, icon: Sparkles },
    { number: '09', title: 'Design Challenges', content: project.caseStudy.challenges, icon: ShieldAlert },
    { number: '10', title: 'Final Solution', content: project.caseStudy.finalSolution, icon: CheckCircle2 },
    { number: '11', title: 'Key Learnings', content: project.caseStudy.learnings, icon: Award },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-2 sm:p-4 md:p-6 lg:p-10">

        {/* Overlay Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 -z-10"
        />

        {/* Case Study Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-[#FAFAF8] w-full max-w-5xl rounded-2xl md:rounded-3xl border border-[#E5E5E5] shadow-2xl overflow-hidden my-auto my-6"
        >

          {/* Sticky Header */}
          <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-[#E5E5E5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
              <div className="truncate">
                <span className="text-xs font-mono font-bold text-[#7C3AED] uppercase block">
                  {project.category}
                </span>
                <h3 className="text-base font-bold text-[#171717] truncate">
                  {project.name} — UX Case Study
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-[#FAFAF8] hover:bg-slate-200 text-[#171717] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 md:p-10 space-y-10">

            {/* Case Study Hero Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {project.status && (
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
                    ⚡ {project.status}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200 font-semibold">
                  Role: {project.role}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight">
                {project.name}
              </h1>

              <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Tools Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono font-bold text-[#171717] mr-2">Tools Used:</span>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-lg bg-white border border-[#E5E5E5] text-xs font-medium text-[#171717]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Visual Image Showcase */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E5E5] bg-white shadow-sm min-h-[280px]">
              <ImageWithFallback
                src={project.image}
                alt={project.name}
                type={project.id as any}
                title={project.name}
                category={project.category}
                className="w-full h-80 sm:h-96"
              />
            </div>

            {/* Special Interactive Wireframes Section for Finance App */}
            {project.id === 'finance-app' && (
              <div className="pt-2">
                <FinanceWireframes />
              </div>
            )}

            {/* Special Interactive Figma Template Showcase for Email Template */}
            {project.id === 'email-template' && (
              <div className="pt-2">
                <EmailTemplateShowcase />
              </div>
            )}

            {/* 11 Case Study Sections Grid */}
            <div className="space-y-8 pt-4">
              <div className="border-b border-[#E5E5E5] pb-3">
                <h2 className="text-xl font-bold text-[#171717] flex items-center gap-2">
                  <Figma className="w-5 h-5 text-[#7C3AED]" />
                  <span>Case Study Breakdown (01 – 11)</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudySections.map((sec) => {
                  const IconComponent = sec.icon;
                  return (
                    <div
                      key={sec.number}
                      className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-xs space-y-3 hover:border-[#7C3AED]/40 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-[#E5E5E5]">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 text-[#7C3AED]" />
                          <h3 className="text-base font-bold text-[#171717]">
                            {sec.title}
                          </h3>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#7C3AED] bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                          {sec.number}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                        {sec.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer Action inside Modal */}
            <div className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs font-mono text-[#666666]">
                Designed in Figma by Chappa Naga Venkata Bhavya
              </p>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-[#7C3AED] transition-colors"
              >
                Close Case Study
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
