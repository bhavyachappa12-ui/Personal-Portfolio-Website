import React from 'react';
import { ArrowUp, Mail, MapPin, Linkedin, Github, Figma, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bhavya-chappa-3b900a373', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/bhavyachappa12-ui', icon: Github },
    { name: 'Figma', href: 'https://figma.com/@bhavyachappa', icon: Figma },
  ];

  return (
    <footer className="bg-white border-t border-[#E5E5E5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Row: Brand & Back-to-top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#E5E5E5]">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-[#171717] tracking-tight">
                Chappa Naga Venkata Bhavya
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
            </div>
            <p className="text-sm font-semibold text-[#7C3AED]">
              UI/UX Designer & Creative Designer
            </p>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed italic">
              "Turning Creative Ideas into Simple, Meaningful Experiences."
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-[#FAFAF8] border border-[#E5E5E5] hover:bg-[#171717] hover:text-white transition-all duration-200 shadow-xs self-start md:self-center group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-[#171717] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Middle Row: Links, Contact & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs text-[#666666]">

          {/* Nav Links */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-mono font-bold text-[#171717] uppercase tracking-wider block">
              Navigation
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#7C3AED] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact Details */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-mono font-bold text-[#171717] uppercase tracking-wider block mb-3">
              Direct Contact
            </span>
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <Mail className="w-3.5 h-3.5 text-[#7C3AED]" />
              <a href="mailto:bhavyachappa12@gmail.com" className="hover:text-[#7C3AED] transition-colors">
                bhavyachappa12@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono font-bold text-[#171717] uppercase tracking-wider block">
              Design Profiles
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((soc) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] text-[#171717] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] transition-all duration-200"
                    title={soc.name}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <span>
            © {new Date().getFullYear()} Chappa Naga Venkata Bhavya. All rights reserved.
          </span>
          <span>
            Designed with <span className="text-[#7C3AED]">Figma & React</span>
          </span>
        </div>

      </div>
    </footer>
  );
};
