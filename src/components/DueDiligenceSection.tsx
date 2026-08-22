/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FileSpreadsheet, Scale, Settings2, ShieldAlert, Award, FileSearch, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface DueDiligenceSectionProps {
  onTriggerContact: (service: string, extraNote: string) => void;
}

export default function DueDiligenceSection({ onTriggerContact }: DueDiligenceSectionProps) {
  const complianceDiligenceItems = [
    {
      icon: FileSpreadsheet,
      title: 'Financial Due Diligence',
      description: 'Comprehensive analysis of financial statements, cash flows, working capital quality, and historic compliance practices.'
    },
    {
      icon: Scale,
      title: 'Legal Due Diligence',
      description: 'Review of transaction contracts, statutory compliance, material liabilities, and intellectual property alignments.'
    },
    {
      icon: Settings2,
      title: 'Operational Due Diligence',
      description: 'Assessment of active plant or digital operations, process bottlenecks, logistics safety, and executive talent capability.'
    },
    {
      icon: FileSearch,
      title: 'Tax Due Diligence',
      description: 'Meticulous evaluation of historical direct & indirect tax compliance, liabilities, outstanding notices, and optimization gaps.'
    },
    {
      icon: Sparkles,
      title: 'Commercial Due Diligence',
      description: 'In-depth market landscaping, competitor valuation positioning, client concentrations, and future growth-budget forecasting.'
    },
    {
      icon: ShieldAlert,
      title: 'Compliance Due Diligence',
      description: 'Third-party independent verification of state and central MCA adherence, SEBI templates, and industry-specific certifications.'
    }
  ];

  return (
    <section id="diligence-section" className="py-12 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Abstract light grid overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] rounded-full bg-teal-500/5 filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        {/* Modern Split View Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-6">
          {/* Left Column - Sticky Description & Brand Image Poster (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-bold font-sans uppercase tracking-widest text-[#0F766E] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 shadow-sm inline-block mb-3">
              Transaction Safety
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4 leading-tight">
              Comprehensive Due Diligence Services
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
              Make fully-informed transaction, acquisition, or funding decisions with our thorough due diligence process. We conduct deep investigations across financial, legal, tax, and compliance aspects to reveal transactional opportunities and hidden risk values.
            </p>

            {/* Gorgeous custom branding due diligence asset representation */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-100 h-56 sm:h-64 bg-[#08182E]/5 flex items-center justify-center p-3 group mt-4">
              <img 
                src="/src/assets/images/due_diligence_banner_1780230254767.png" 
                alt="Due Diligence Target Audit Report" 
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a28]/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none bg-black/60 p-3 rounded-2xl backdrop-blur-md">
                <span className="text-[9px] font-bold font-mono tracking-widest text-[#14B8A6] uppercase">
                  CERTIFIED REPORTING
                </span>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-white mt-1 leading-snug">
                  Transparent Forensic File Auditing
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column - Specialized Items Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {complianceDiligenceItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#fefbf3]/20 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-teal-500/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#14B8A6] mb-3.5 border border-teal-100">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call-to-Action banner matched exactly from readdy.cc layout */}
        <div className="bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-2xl p-3 sm:p-4 shadow-sm relative overflow-hidden text-center max-w-[440px] mx-auto">
          <div className="absolute inset-0 bg-[#000] opacity-5 pointer-events-none" />
          
          <div className="relative z-10">
            <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-4">
              Need a Thorough Due Diligence Report?
            </h4>
            <button
              onClick={() => onTriggerContact('Corporate Due Diligence', 'Requested comprehensive target validation due diligence audit.')}
              className="bg-white hover:bg-gray-100 text-[#0F766E] font-bold text-[11px] py-2 px-4 rounded-lg shadow-sm transition-all duration-205 flex items-center justify-center space-x-1.5 mx-auto cursor-pointer"
            >
              <span>Request Due Diligence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
