import React, { useState } from 'react';
import { Mail, Target, Lightbulb, Check, Sparkles, ExternalLink, Layers } from 'lucide-react';

export const EmailTemplateShowcase: React.FC = () => {
  const [showFigmaInspect, setShowFigmaInspect] = useState<boolean>(true);

  return (
    <div className="w-full bg-slate-900 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-white border border-slate-800 shadow-xl overflow-hidden">
      
      {/* Control Bar Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wide">
              Figma Design System
            </span>
            <span className="text-xs font-mono text-slate-400">Newsletter Template</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
            Email Newsletter Template
          </h3>
        </div>

        {/* Toggle Inspector Overlay */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowFigmaInspect(!showFigmaInspect)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
              showFigmaInspect
                ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{showFigmaInspect ? 'Figma Inspector On' : 'Clean Preview Mode'}</span>
          </button>
        </div>
      </div>

      {/* Main Email Showcase Frame Container */}
      <div className="pt-8 flex justify-center">
        <div className="w-full max-w-[540px] bg-white text-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-200 relative transition-all">

          {/* Optional Figma Selection Box Overlay */}
          {showFigmaInspect && (
            <div className="absolute inset-0 border-2 border-blue-500 pointer-events-none z-30">
              {/* Corner Handles */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-blue-500" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-blue-500" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-blue-500" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-blue-500" />
            </div>
          )}

          {/* 1. Header Blue Banner */}
          <div className="bg-[#1D4ED8] text-white text-center py-7 px-6 relative">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Your Company Name
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium opacity-90">
              Making a difference, one email at a time
            </p>
          </div>

          {/* 2. Main Email Body Container */}
          <div className="p-6 sm:p-8 space-y-6 text-slate-700 text-sm leading-relaxed relative">
            
            {/* Greeting */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Welcome to Our Newsletter!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Dear Valued Customer,
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thank you for subscribing to our newsletter. We're excited to share the latest updates, insights, and exclusive offers with you. Our team is dedicated to bringing you valuable content that matters.
            </p>

            {/* Key Highlights Callout Box */}
            <div className="bg-blue-50/60 rounded-xl p-4 sm:p-5 border-l-4 border-[#1D4ED8] space-y-3">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Key Highlights
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>Exclusive access to new features and products</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>Industry insights and expert tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>Special promotions and early bird offers</span>
                </li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We value your time and promise to deliver only high-quality content. If you have any questions or feedback, we'd love to hear from you.
            </p>

            {/* Get Started Button */}
            <div className="text-center pt-2 pb-4">
              <button
                type="button"
                className="bg-[#1D4ED8] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-lg shadow-md shadow-blue-500/20 transition-transform active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
            </div>

            <div className="border-t border-slate-100 my-4" />

            {/* 3-Column Feature Highlights */}
            <div className="grid grid-cols-3 gap-3 text-center pt-2 pb-2">
              
              {/* Feature 1 */}
              <div className="space-y-1.5 flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-blue-100/70 flex items-center justify-center text-[#1D4ED8] shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-[11px] sm:text-xs">
                  Stay Connected
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                  Regular updates delivered to your inbox
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-1.5 flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-blue-100/70 flex items-center justify-center text-[#1D4ED8] shadow-2xs">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-[11px] sm:text-xs">
                  Exclusive Content
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                  Access to premium resources
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-1.5 flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-blue-100/70 flex items-center justify-center text-[#1D4ED8] shadow-2xs">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-[11px] sm:text-xs">
                  Expert Insights
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                  Learn from industry leaders
                </p>
              </div>

            </div>

          </div>

          {/* 3. Footer Section with Figma Dimension Pill */}
          <div className="bg-slate-50 border-t border-slate-200 p-6 sm:p-7 text-center relative space-y-3">
            
            {/* Figma Dimension Badge */}
            {showFigmaInspect && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#007AFF] text-white font-mono text-[10px] font-bold px-3 py-1 rounded-md shadow-md z-40 whitespace-nowrap">
                606.4 Fill × 739.8 Hug
              </div>
            )}

            <div className="space-y-0.5 text-xs text-slate-600 font-medium pt-1">
              <div>Best regards,</div>
              <div className="font-bold text-slate-800 text-sm">The Team at Your Company</div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <span className="hover:text-blue-600 cursor-pointer">Facebook</span>
              <span>|</span>
              <span className="hover:text-blue-600 cursor-pointer">Twitter</span>
              <span>|</span>
              <span className="hover:text-blue-600 cursor-pointer">LinkedIn</span>
              <span>|</span>
              <span className="hover:text-blue-600 cursor-pointer">Instagram</span>
            </div>

            {/* Address */}
            <div className="text-[10px] sm:text-[11px] text-slate-400">
              123 Business Street, Suite 100, City, State 12345
            </div>

            {/* Disclaimer & Unsubscribe */}
            <div className="text-[10px] text-slate-400 pt-1 leading-normal">
              You're receiving this email because you subscribed to our newsletter.
              <div className="pt-0.5 space-x-1 text-[#1D4ED8] font-medium">
                <span className="underline cursor-pointer">Unsubscribe</span>
                <span>|</span>
                <span className="underline cursor-pointer">Update Preferences</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
