import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Cpu, Target, BookOpen, Compass, Award } from 'lucide-react';

export const About: React.FC = () => {
  const highlightCards = [
    {
      title: "Creative Thinker",
      desc: "Transforming complex concepts into intuitive visual narratives.",
      icon: Lightbulb
    },
    {
      title: "Problem Solver",
      desc: "Analyzing user behavior to eliminate digital friction.",
      icon: Cpu
    },
    {
      title: "Detail-Oriented",
      desc: "Crafting pixel-perfect layouts, typography, and spacing systems.",
      icon: Target
    },
    {
      title: "Always Learning",
      desc: "Continuously exploring modern UI trends, AI tools & design workflows.",
      icon: BookOpen
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-[#E5E5E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAF8] border border-[#E5E5E5] text-xs font-mono text-[#7C3AED] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Designing with Purpose & Empathy
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Short Introduction & Real Education Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 bg-[#FAFAF8] rounded-2xl border border-[#E5E5E5] space-y-4 shadow-xs">
              <p className="text-base sm:text-lg text-[#171717] font-medium leading-relaxed">
                I am a B.Tech 3rd-year Computer Science and Engineering student from Jawaharlal Nehru Technological University Gurajada Vizianagaram. I am passionate about UI/UX design, creative problem solving, AI and building practical digital experiences.
              </p>
              <p className="text-base text-[#666666] leading-relaxed">
                I enjoy creating user-focused designs using Figma, wireframing and prototyping. I am continuously learning new design and technology skills and want to become a professional UI/UX Designer.
              </p>
            </div>

            {/* Real Highlight Statistics Grid (NO fake numbers) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E5E5] hover:border-[#7C3AED]/40 transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#171717] block">
                  3rd Year
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#666666] mt-1 block">
                  B.Tech Computer Science & Engineering
                </span>
                <span className="text-[11px] font-mono text-[#7C3AED] mt-2 block">
                  JNTUGV University
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E5E5] hover:border-[#7C3AED]/40 transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#171717] block">
                  UI/UX
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#666666] mt-1 block">
                  Primary Professional Focus
                </span>
                <span className="text-[11px] font-mono text-[#7C3AED] mt-2 block">
                  Figma & Human-Centered Design
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlightCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E5E5E5] hover:border-[#7C3AED]/50 hover:bg-white transition-all duration-300 group shadow-xs hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center text-[#7C3AED] mb-4 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#171717] mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
