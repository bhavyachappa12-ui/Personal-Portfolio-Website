import React from 'react';
import { motion } from 'motion/react';
import { Layers, Code2, Wrench, Sparkles, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'UI/UX DESIGN':
        return <Layers className="w-4 h-4 text-[#7C3AED]" />;
      case 'DEVELOPMENT':
        return <Code2 className="w-4 h-4 text-[#7C3AED]" />;
      case 'TOOLS':
        return <Wrench className="w-4 h-4 text-[#7C3AED]" />;
      case 'AI':
        return <Sparkles className="w-4 h-4 text-[#7C3AED]" />;
      default:
        return <Layers className="w-4 h-4 text-[#7C3AED]" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] text-xs font-mono text-[#7C3AED] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>04. SKILLS & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Capabilities & Tools
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-2 max-w-2xl">
            A balanced mix of design intuition, technical fundamentals, and AI-powered creative tools.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 hover:border-[#7C3AED]/40 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-[#E5E5E5] mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#FAFAF8] border border-[#E5E5E5] flex items-center justify-center">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#7C3AED] tracking-wider uppercase block">
                    {cat.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#171717]">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Skills Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] hover:border-[#7C3AED]/50 hover:bg-white transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                      <span className="text-sm font-bold text-[#171717] group-hover:text-[#7C3AED] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="text-[11px] text-[#666666] mt-1 pl-5 line-clamp-2">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
