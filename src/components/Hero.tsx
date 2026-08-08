import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, MousePointer, Layers, Grid, Sparkles, MapPin } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background Subtle Designer Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E5] shadow-xs text-xs md:text-sm font-medium text-[#171717]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hi, I'm Bhavya 👋</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#666666] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#7C3AED]" /> Visakhapatnam, India
              </span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.1]">
                Chappa Naga Venkata Bhavya
              </h1>
              <p className="text-lg md:text-xl font-semibold text-[#7C3AED] tracking-tight">
                UI/UX Designer & Creative Designer
              </p>
            </motion.div>

            {/* Main Dominant Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171717] leading-snug tracking-tight">
                "Turning Creative Ideas into Simple, Meaningful Experiences."
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl font-normal"
            >
              I create simple, intuitive and meaningful digital experiences by combining creative design, user thinking and technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171717] text-white text-sm font-semibold hover:bg-[#7C3AED] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E5E5E5] text-[#171717] text-sm font-semibold hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Micro Design Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 flex items-center gap-6 text-xs text-[#666666] font-mono"
            >
              <div className="flex items-center gap-1.5">
                <Grid className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>8pt Grid Precision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Auto Layout & Variants</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image & Subtle Figma Component Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">

              {/* Decorative Subtle Background Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-100/60 via-slate-100 to-indigo-100/40 rounded-3xl -rotate-1 border border-[#E5E5E5] -z-10" />

              {/* Main Card Container */}
              <div className="bg-white border border-[#E5E5E5] rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">

                {/* Figma Canvas Header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#666666] border-b border-[#E5E5E5] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="font-semibold text-[#171717]">Frame 1080</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-600 font-mono">
                    Figma Canvas
                  </div>
                </div>

                {/* Profile Image Component */}
                <div className="relative rounded-xl overflow-hidden aspect-4/5 border border-[#E5E5E5] bg-[#FAFAF8]">
                  <ImageWithFallback
                    src="/assets/profile.jpg"
                    alt="Chappa Naga Venkata Bhavya - UI/UX Designer"
                    type="profile"
                    title="Chappa Naga Venkata Bhavya"
                    className="w-full h-full"
                  />

                  {/* Floating Designer Badges */}
                  <div className="absolute top-3 right-3 bg-[#171717]/90 text-white backdrop-blur-xs text-[11px] font-mono px-3 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-purple-300" />
                    <span>Figma UI/UX</span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-white/95 text-[#171717] backdrop-blur-xs text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E5E5E5] shadow-sm flex items-center gap-2">
                    <MousePointer className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>Bhavya Chappa</span>
                  </div>
                </div>

                {/* Quick Career Focus Tag */}
                <div className="p-3 bg-[#FAFAF8] rounded-xl border border-[#E5E5E5] flex items-center justify-between text-xs">
                  <span className="text-[#666666] font-medium">Primary Focus</span>
                  <span className="font-semibold text-[#171717] bg-white px-2.5 py-1 rounded-md border border-[#E5E5E5] text-[#7C3AED]">
                    UI/UX & Creative Product Design
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
