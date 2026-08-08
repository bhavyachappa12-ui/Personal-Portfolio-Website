import React from 'react';
import { motion } from 'motion/react';
import { Compass, Search, Lightbulb, Grid, Layers, RefreshCw } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Understand the problem and users.',
      icon: Compass
    },
    {
      number: '02',
      title: 'Research',
      description: 'Explore user needs and existing solutions.',
      icon: Search
    },
    {
      number: '03',
      title: 'Ideate',
      description: 'Generate possible solutions and ideas.',
      icon: Lightbulb
    },
    {
      number: '04',
      title: 'Wireframe',
      description: 'Create low-fidelity and high-fidelity wireframes.',
      icon: Grid
    },
    {
      number: '05',
      title: 'Prototype',
      description: 'Build interactive prototypes.',
      icon: Layers
    },
    {
      number: '06',
      title: 'Improve',
      description: 'Refine the design based on feedback.',
      icon: RefreshCw
    }
  ];

  return (
    <section id="process" className="py-20 bg-white border-y border-[#E5E5E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAF8] border border-[#E5E5E5] text-xs font-mono text-[#7C3AED] mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span> DESIGN PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            How I Approach UI/UX Design
          </h2>
          <p className="text-[#666666] text-sm max-w-xl mt-2">
            A structured, user-centered methodology ensuring every pixel serves a functional and meaningful purpose.
          </p>
        </div>

        {/* Horizontal/Vertical Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E5E5] hover:border-[#7C3AED] hover:bg-white transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#7C3AED] bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#171717] mb-1.5 group-hover:text-[#7C3AED] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#E5E5E5]/60 text-[10px] font-mono text-slate-400">
                  Phase {idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
