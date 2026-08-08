import React, { useState } from 'react';
import { Layout, Figma, Sparkles, Smartphone, Mail, ShoppingBag, Landmark, Sprout, User, Check } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  type?: 'profile' | 'nyx' | 'finance' | 'email' | 'raitu' | 'generic';
  title?: string;
  category?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  type = 'generic',
  title,
  category
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    // Render custom Figma-inspired UI mockup placeholder
    return (
      <div
        className={`relative overflow-hidden bg-slate-50 border border-slate-200 flex flex-col justify-between p-6 select-none group transition-all duration-300 ${className}`}
        aria-label={alt}
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Figma interface top bar header decoration */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-200/80 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="text-[11px] font-mono text-slate-400 ml-2 truncate max-w-[140px]">
              Figma Frame — {title || 'UI Design'}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="px-1.5 py-0.5 rounded bg-slate-200/70 text-[10px] text-slate-600">
              100%
            </span>
            <Figma className="w-3.5 h-3.5 text-[#7C3AED]" />
          </div>
        </div>

        {/* Dynamic Center Mockup Visualization based on Type */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-6 px-4">
          {type === 'profile' && (
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-[#7C3AED]/20 via-purple-100 to-indigo-50 border-2 border-[#7C3AED]/30 flex items-center justify-center shadow-inner">
                  <User className="w-14 h-14 text-[#7C3AED]" />
                </div>
                {/* Figma Cursor Badge */}
                <div className="absolute -bottom-1 -right-1 bg-[#171717] text-white text-[10px] font-mono px-2 py-1 rounded-md shadow-md flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                  Bhavya (UI/UX)
                </div>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Image location: <code className="text-slate-600 font-semibold">{src}</code>
              </p>
            </div>
          )}

          {(type === 'nyx' || type === 'nyx-app') && (
            <div className="w-full max-w-md space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#7C3AED]" />
                    <span className="font-extrabold text-sm tracking-tight text-slate-900">NYX</span>
                    <span className="text-[10px] text-[#7C3AED] font-mono italic">"Radiate Confidence, Your Beauty, Your way"</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-[#7C3AED] font-bold border border-purple-100">
                    Figma Flow (11 Screens)
                  </span>
                </div>

                {/* Mini Mobile Flow Cards Representation */}
                <div className="grid grid-cols-4 gap-1.5 my-3 relative p-2 bg-slate-50/80 rounded-lg border border-slate-200 overflow-hidden">
                  
                  {/* Screen 1: Splash */}
                  <div className="bg-white p-1.5 rounded border border-slate-200 text-[9px] space-y-1 flex flex-col justify-between h-20 shadow-2xs">
                    <span className="font-mono font-bold text-slate-400 block text-[8px]">Splash</span>
                    <div className="text-[8px] font-serif font-bold text-teal-800 leading-tight">Radiate Confidence</div>
                    <div className="w-full h-1.5 bg-[#7C3AED] rounded-full mt-auto" />
                  </div>

                  {/* Screen 2: Login */}
                  <div className="bg-white p-1.5 rounded border border-slate-200 text-[9px] space-y-1 flex flex-col justify-between h-20 shadow-2xs">
                    <span className="font-mono font-bold text-slate-400 block text-[8px]">Login</span>
                    <div className="text-[8px] font-bold text-slate-800">Welcome Back</div>
                    <div className="space-y-0.5">
                      <div className="w-full h-1 bg-slate-100 rounded" />
                      <div className="w-full h-1 bg-slate-100 rounded" />
                    </div>
                  </div>

                  {/* Screen 3: Home */}
                  <div className="bg-white p-1.5 rounded border border-slate-200 text-[9px] space-y-1 flex flex-col justify-between h-20 shadow-2xs">
                    <span className="font-mono font-bold text-slate-400 block text-[8px]">Home</span>
                    <div className="text-[8px] font-bold text-slate-900">Hello John</div>
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="h-2 bg-pink-100 rounded" />
                      <div className="h-2 bg-purple-100 rounded" />
                    </div>
                  </div>

                  {/* Screen 4: Product Detail */}
                  <div className="bg-white p-1.5 rounded border border-slate-200 text-[9px] space-y-1 flex flex-col justify-between h-20 shadow-2xs border-l-2 border-l-[#7C3AED]">
                    <span className="font-mono font-bold text-slate-400 block text-[8px]">Product</span>
                    <div className="text-[7.5px] font-bold text-slate-900 leading-none">Swiss Beauty</div>
                    <div className="flex gap-0.5 my-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-700" />
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                    </div>
                    <div className="text-[8px] font-mono text-[#7C3AED] font-bold">$26.00</div>
                  </div>

                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                  <span>Interactive Flow & Prototype Connections</span>
                  <span className="text-[#7C3AED] font-semibold">Explore Case Study →</span>
                </div>
              </div>
            </div>
          )}

          {(type === 'finance' || type === 'finance-app') && (
            <div className="w-full max-w-md space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#2563EB]" />
                    <span className="font-extrabold text-sm tracking-tight text-slate-900">Finance App</span>
                    <span className="text-[10px] text-blue-600 font-mono">Low & Hi-Fi Wireframes</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-bold border border-blue-100">
                    Figma Wireframing
                  </span>
                </div>

                {/* Wireframes Grid Preview: Low-Fi vs High-Fi */}
                <div className="grid grid-cols-2 gap-2 my-2 p-2 bg-slate-50/90 rounded-lg border border-slate-200">
                  {/* Low Fidelity Card */}
                  <div className="bg-white p-2 rounded border border-dashed border-slate-300 text-[9px] space-y-1.5 shadow-2xs">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <span className="font-serif font-bold text-slate-500 text-[8px]">Low-Fidelity</span>
                      <span className="text-[7px] text-slate-400 font-mono">Grayscale</span>
                    </div>
                    <div className="p-1.5 bg-slate-100 rounded text-center font-serif text-[8px] text-slate-600">
                      Finance App
                    </div>
                    <div className="space-y-1 bg-slate-50 p-1 rounded border border-slate-200">
                      <div className="text-[7.5px] font-mono text-slate-500">Total Balance</div>
                      <div className="text-[9px] font-bold text-slate-800">₹ 25,000.00</div>
                    </div>
                    <div className="bg-slate-200 py-1 rounded text-center text-[7.5px] font-bold text-slate-600">
                      TRANSFER MONEY
                    </div>
                  </div>

                  {/* High Fidelity Card */}
                  <div className="bg-white p-2 rounded border border-blue-200 text-[9px] space-y-1.5 shadow-2xs relative overflow-hidden">
                    <div className="flex items-center justify-between pb-1 border-b border-blue-50">
                      <span className="font-sans font-bold text-blue-600 text-[8px]">High-Fidelity</span>
                      <span className="text-[7px] text-blue-500 font-mono">Electric Blue</span>
                    </div>
                    <div className="p-1.5 bg-[#2563EB] text-white rounded font-sans text-[8px] flex justify-between items-center">
                      <div>
                        <div className="text-[6.5px] opacity-80">Total Balance</div>
                        <div className="text-[9.5px] font-extrabold">₹ 25,000.00</div>
                      </div>
                      <Landmark className="w-3 h-3 text-white/80" />
                    </div>
                    <div className="grid grid-cols-4 gap-0.5 text-[6px] text-center">
                      <div className="bg-blue-50 text-blue-600 p-0.5 rounded font-medium">Scan</div>
                      <div className="bg-blue-600 text-white p-0.5 rounded font-medium">Send</div>
                      <div className="bg-blue-50 text-blue-600 p-0.5 rounded font-medium">Recharge</div>
                      <div className="bg-blue-50 text-blue-600 p-0.5 rounded font-medium">More</div>
                    </div>
                    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-100 p-1 rounded">
                      <span className="text-[7.5px] text-emerald-700 font-bold">✓ Payment Success!</span>
                      <span className="text-[8px] font-bold text-emerald-800">₹ 1,000</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                  <span>Login • Dashboard • Transfer • Confirmation</span>
                  <span className="text-blue-600 font-semibold">View Wireframes →</span>
                </div>
              </div>
            </div>
          )}

          {(type === 'email' || type === 'email-template') && (
            <div className="w-full max-w-md space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                {/* Header */}
                <div className="flex justify-between items-center mb-2.5">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#1D4ED8]" />
                    <span className="font-extrabold text-sm tracking-tight text-slate-900">Email Template</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-100">
                    Figma Newsletter
                  </span>
                </div>

                {/* Email Preview Card Box */}
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs my-2">
                  {/* Blue Banner */}
                  <div className="bg-[#1D4ED8] text-white p-3 text-center">
                    <div className="font-extrabold text-xs">Your Company Name</div>
                    <div className="text-[8px] text-blue-100 opacity-90">Making a difference, one email at a time</div>
                  </div>

                  {/* Body Content */}
                  <div className="p-3 space-y-2 text-[9px] text-slate-700">
                    <div className="font-bold text-slate-900 text-[11px]">Welcome to Our Newsletter!</div>
                    <p className="text-slate-500 line-clamp-1">Dear Valued Customer, Thank you for subscribing...</p>

                    {/* Highlights Box */}
                    <div className="bg-blue-50/70 p-2 rounded border-l-2 border-[#1D4ED8] space-y-1">
                      <div className="font-bold text-slate-900 text-[8.5px]">Key Highlights</div>
                      <div className="space-y-0.5 text-[7.5px] text-slate-600">
                        <div className="flex items-center gap-1">
                          <Check className="w-2.5 h-2.5 text-[#1D4ED8]" />
                          <span>Exclusive access to new features</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-2.5 h-2.5 text-[#1D4ED8]" />
                          <span>Industry insights & expert tips</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center pt-1">
                      <span className="inline-block px-4 py-1 bg-[#1D4ED8] text-white font-bold text-[8.5px] rounded">
                        Get Started
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                  <span>Header • Highlights • CTA • 3-Col Footer</span>
                  <span className="text-blue-600 font-semibold">Inspect Case Study →</span>
                </div>
              </div>
            </div>
          )}

          {(type === 'raitu' || type === 'raitu-vedika') && (
            <div className="w-full max-w-sm space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Sprout className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-sm text-slate-900">Raitu Vedika</span>
                  </div>
                  <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                    In Progress
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">Equipment Leasing & Farming Platform</p>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                  <span>Tractor & Harvester</span>
                  <span className="text-[#7C3AED]">Figma Prototype</span>
                </div>
              </div>
            </div>
          )}

          {type === 'generic' && (
            <div className="flex flex-col items-center gap-2">
              <Layout className="w-8 h-8 text-[#7C3AED]/60" />
              <span className="text-xs font-semibold text-slate-700">{title || 'UI Case Study'}</span>
              <span className="text-[11px] text-slate-400 font-mono">{category || 'Design Mockup'}</span>
            </div>
          )}
        </div>

        {/* Bottom indicator hint */}
        <div className="relative z-10 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span>Figma Auto Layout Canvas</span>
          <span className="text-[#7C3AED] group-hover:underline">Figma View</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
