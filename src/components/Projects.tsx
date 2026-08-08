import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, Sparkles } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetails } from './ProjectDetails';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] text-xs font-mono text-[#7C3AED] mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>06. FEATURED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
              Selected UI/UX Projects
            </h2>
          </div>
          <p className="text-[#666666] text-sm max-w-md">
            Explore detailed design case studies from wireframes and user flows to interactive Figma prototypes.
          </p>
        </div>

        {/* Project Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Detailed Modal Overlay */}
      <ProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
