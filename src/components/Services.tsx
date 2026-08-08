import React from 'react';
import { motion } from 'motion/react';
import { Layout, Globe, Grid, Layers, Users, Sparkles, Figma, Mail, ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#7C3AED]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#7C3AED]" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-[#7C3AED]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#7C3AED]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#7C3AED]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#7C3AED]" />;
      case 'Figma':
        return <Figma className="w-5 h-5 text-[#7C3AED]" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#7C3AED]" />;
      default:
        return <Layout className="w-5 h-5 text-[#7C3AED]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-y border-[#E5E5E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAF8] border border-[#E5E5E5] text-xs font-mono text-[#7C3AED] mb-3">
              <Layout className="w-3.5 h-3.5" />
              <span>05. SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
              Design Solutions I Offer
            </h2>
          </div>
          <p className="text-[#666666] text-sm max-w-md">
            Human-centered UI/UX design services focused on visual clarity, structural rhythm, and intuitive user journeys.
          </p>
        </div>

        {/* Services 8-Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E5E5E5] hover:border-[#7C3AED] hover:bg-white transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-[#7C3AED]">
                    0{item.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#171717] mb-2 group-hover:text-[#7C3AED] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E5E5]/60 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-[#7C3AED]">
                <span>Figma Workflow</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
