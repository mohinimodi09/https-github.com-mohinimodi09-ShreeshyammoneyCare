/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Landmark,
  Search,
  BarChart3,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sliders
} from 'lucide-react';

interface ServicesGridProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function ServicesGrid({ onServiceSelect }: ServicesGridProps) {
  const services = [
    {
      id: 'ipo-section',
      icon: TrendingUp,
      title: 'IPO Services',
      description: 'End-to-end IPO advisory services including market assessment, documentation, compliance, and listing support to help your company go public successfully.',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      serviceSelectText: 'IPO Listing & Advisory',
      bullets: [
        'SEBI & NSE/BSE Filings Desk',
        'DRHP Prospectus Drafting',
        'Pre-IPO Private Placement',
        'Sovereign Advisory & Sync'
      ]
    },
    {
      id: 'loan-section',
      icon: Landmark,
      title: 'Loan Syndication',
      description: 'Strategic loan structuring and syndication services connecting businesses with the right lenders for optimal financing solutions.',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      serviceSelectText: 'Debt & Loan Syndication',
      bullets: [
        'INR 10Cr - 500Cr Ticket Size',
        '25+ Allied Bank Partners',
        'Structured Debt Strategy',
        'Working Capital Sanctions'
      ]
    },
    {
      id: 'diligence-section',
      icon: Search,
      title: 'Due Diligence',
      description: 'Comprehensive financial, legal, and operational due diligence to mitigate risks and ensure informed investment decisions.',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      serviceSelectText: 'Corporate Due Diligence',
      bullets: [
        'Forensic Liability Audits',
        'Operations Diagnostics Desk',
        'Complete Vendor Verification',
        'Pre-Investment Risk Analysis'
      ]
    },
    {
      id: 'valuation-section',
      icon: BarChart3,
      title: 'Portfolio Valuation',
      description: 'Accurate portfolio assessment and valuation services using industry-standard methodologies to determine true market value.',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      serviceSelectText: 'Market Portfolio Valuation',
      bullets: [
        'DCF & peer comparisons',
        'Sovereign Asset Appraisals',
        'Brand & IP valuations',
        'IBBI Registered Valuers'
      ]
    },
    {
      id: 'restated-section',
      icon: FileCheck,
      title: 'Restated Statements',
      description: 'Certified restatement of historical financials to align with current accounting standards, regulatory formats, and IPO compliance requirements.',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      serviceSelectText: 'Restated Financial Statements',
      bullets: [
         'SME Unit Consolidation',
         'GAAP / Ind-AS Standards',
         'Multi-Year Histograms',
         'Auditor Sync Approval'
      ]
    },
    {
      id: 'cfo-section',
      icon: Sliders,
      title: 'Virtual CFO Services & SOP',
      description: 'Senior finance executive leadership, bespoke treasury operations Standard Operating Procedure (SOPs) development, leakage auditing, and board MIS steering.',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      serviceSelectText: 'Virtual CFO Services',
      bullets: [
         'Airtight SOP Controls Design',
         'Weekly Liquid Runway Tracking',
         'Monthly board-room MIS Packs',
         'Venture & IPO compliance health'
      ]
    }
  ];

  const handleCardClick = (id: string, serviceSelectText: string) => {
    onServiceSelect(serviceSelectText);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services-section" className="py-12 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] rounded-full bg-[#14B8A6]/5 filter blur-[90px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[#0F766E]/5 filter blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-[#0F766E] bg-teal-50 px-4 py-1 rounded-full border border-teal-100 shadow-sm inline-block mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4 leading-tight">
            Our Core Services
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive financial solutions tailored to meet your business needs and drive sustainable growth
          </p>
        </div>

        {/* 3D Interactive Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-45px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => handleCardClick(service.id, service.serviceSelectText)}
                className="group relative h-[380px] w-full [perspective:1000px] cursor-pointer"
              >
                {/* Flipping Container */}
                <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform ease-out">
                  
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 w-full h-full bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between [backface-visibility:hidden] z-20">
                    <div>
                      {/* Styled Icon Container inside linear gradient */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md shadow-teal-500/10 group-hover:scale-105 transition-transform duration-300 mb-6 text-white`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-[#0F766E] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center text-[#0F766E] font-bold text-xs gap-1.5 mt-auto pt-2 border-t border-slate-100">
                      <span>Explore Capability</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0F766E]/95 to-[#0B5650] text-white rounded-3xl p-6 shadow-2xl flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] border border-teal-500/30">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                        <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#2DD4BF]">
                          Service Desk
                        </span>
                      </div>
                      
                      <h4 className="text-base font-bold text-white border-b border-white/10 pb-2.5 mb-4 leading-tight">
                        {service.title} Highlights
                      </h4>
                      
                      {/* Interactive Spec Bullets */}
                      <ul className="space-y-3">
                        {service.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2.5 text-xs text-teal-50 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-amber-400 font-bold text-xs gap-1.5 mt-auto pt-3 border-t border-white/10">
                      <span>Activate Steering</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200 text-amber-400" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
