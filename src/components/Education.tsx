import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, BookCheck } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] text-xs font-mono text-[#7C3AED] mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>02. ACADEMICS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#171717] tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-sm transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E5E5]">

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Currently Pursuing</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                B.Tech – Computer Science and Engineering
              </h3>

              <p className="text-sm sm:text-base font-semibold text-[#7C3AED] flex items-center gap-2">
                <span>Jawaharlal Nehru Technological University Gurajada Vizianagaram</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-[#666666]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFAF8] border border-[#E5E5E5]">
                <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>2024 – 2028</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFAF8] border border-[#E5E5E5]">
                <MapPin className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Vizianagaram, AP</span>
              </div>
            </div>

          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#666666]">
            <div className="flex items-start gap-2">
              <BookCheck className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
              <span>Gaining foundational knowledge in computing logic, algorithms, and web technologies.</span>
            </div>
            <div className="flex items-start gap-2">
              <BookCheck className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
              <span>Applying computer science principles to human-computer interaction and design thinking.</span>
            </div>
            <div className="flex items-start gap-2">
              <BookCheck className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
              <span>Combining software logic with creative UI/UX prototyping and user research.</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
