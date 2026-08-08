import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Figma, Sparkles } from 'lucide-react';
import { Project } from '../data/projects';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#7C3AED]/50 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Project Image Box */}
        <div className="relative overflow-hidden aspect-16/10 bg-[#FAFAF8] border-b border-[#E5E5E5]">
          <ImageWithFallback
            src={project.image}
            alt={project.name}
            type={project.id as any}
            title={project.name}
            category={project.category}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Status Badge */}
          {project.status && (
            <div className="absolute top-3 left-3 bg-amber-100 text-amber-900 border border-amber-300 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>{project.status}</span>
            </div>
          )}

          {/* Category Pill */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#171717] border border-[#E5E5E5] px-3 py-1 rounded-full text-[11px] font-mono font-medium shadow-xs">
            {project.category}
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#171717] group-hover:text-[#7C3AED] transition-colors">
              {project.name}
            </h3>
            <span className="text-xs font-mono text-[#666666]">{project.role}</span>
          </div>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tools Badges */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md bg-[#FAFAF8] border border-[#E5E5E5] text-[11px] font-mono text-[#666666]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0">
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="w-full py-3 px-4 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] text-xs font-semibold text-[#171717] group-hover:bg-[#171717] group-hover:text-white group-hover:border-[#171717] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
