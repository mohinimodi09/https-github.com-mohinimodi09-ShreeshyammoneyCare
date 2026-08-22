/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, ClipboardCheck, Sparkles } from 'lucide-react';

interface IpoAdvisorySectionProps {
  onTriggerContact: (service: string, extraNote: string) => void;
}

export default function IpoAdvisorySection({ onTriggerContact }: IpoAdvisorySectionProps) {
  const ipoPoints = [
    'Market Assessment & Feasibility Analysis',
    'Regulatory Compliance & Documentation',
    'Valuation & Pricing Strategy',
    'Roadshow Management & Investor Relations',
    'Post-IPO Support & Compliance',
    'Listing Strategy & Exchange Coordination'
  ];

  return (
    <section id="ipo-section" className="py-14 md:py-20 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-teal-500/5 filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core detailed rows from readdy template */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Custom high-fidelity IPO Advisory Banner */}
          <div className="relative h-[300px] sm:h-[380px] lg:h-[440px] rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-[#08182E]/5 flex items-center justify-center p-4 group">
            <img
              src="/src/assets/images/ipo_advisory_banner_1780230292456.png"
              alt="IPO Advisory Services"
              className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E]/5 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column - info content */}
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-widest text-[#0F766E] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 inline-block mb-3 shadow-sm">
              IPO Advisory
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4 leading-tight">
              Take Your Company Public with Confidence
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl font-medium">
              Our comprehensive IPO services guide you through every step of the public offering process, from initial planning to successful listing and beyond. With deep market knowledge and regulatory expertise, we ensure a smooth transition to the public markets (NSE SME & Main Board).
            </p>

            {/* List items with elegant icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {ipoPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="w-5.5 h-5.5 rounded-full bg-teal-100/70 border border-teal-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-teal-700">
                    <ClipboardCheck className="w-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onTriggerContact('IPO Listing & Advisory', 'Requested customized consult for company IPO planning.')}
              className="mt-8 bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold text-xs py-3 px-6 rounded-xl shadow-lg hover:shadow-[#14B8A6]/30 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
            >
              <span>Discuss Your IPO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
