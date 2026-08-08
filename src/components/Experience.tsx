import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "UI/UX Designer Intern",
      organization: "CodSoft",
      period: "June 2026 – July 2026",
      type: "Internship",
      description: "Worked as a UI/UX Designer intern, gaining practical experience in UI design, design workflows and user-focused design solutions.",
      highlights: [
        "Created low & high fidelity wireframes using Figma",
        "Participated in user interface feedback sessions & iterative visual enhancements",
        "Applied standard auto-layout component guidelines"
      ]
    },
    {
      title: "UI/UX Design with AI",
      organization: "Internshala",
      period: "Completed",
      type: "Professional Training",
      description: "Completed training focused on UI/UX design with AI and explored AI-assisted design workflows.",
      highlights: [
        "Explored generative AI tools for rapid wireframing and user flow generation",
        "Mastered modern AI prompt techniques for asset ideation and UX copy creation",
        "Synthesized research insights using AI assistance for accelerated design execution"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white border-y border-[#E5E5E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAF8] border border-[#E5E5E5] text-xs font-mono text-[#7C3AED] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03. EXPERIENCE & TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Industry & Training Journey
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-[#E5E5E5] ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet Point */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:scale-125 transition-all duration-300 shadow-xs" />

              <div className="bg-[#FAFAF8] border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 hover:border-[#7C3AED]/40 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#E5E5E5]">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171717]">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#7C3AED]">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] text-xs font-mono text-[#666666] shrink-0 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#171717] font-medium leading-relaxed mb-4">
                  "{exp.description}"
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E5E5E5]/60">
                  <span className="text-xs font-mono font-semibold text-[#666666] uppercase tracking-wider block">Key Focus Areas:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#666666] bg-white p-2 rounded-lg border border-[#E5E5E5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
