/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import logoFallback from '@/assets/images/Logo.png';
import { 
  Building2, 
  Settings, 
  TrendingUp, 
  FileSpreadsheet, 
  FolderCheck, 
  Users, 
  ArrowRight,
  ClipboardList,
  ShieldAlert,
  Sliders,
  DollarSign
} from 'lucide-react';

interface CfoSopSectionProps {
  onTriggerContact: (service: string, extraNote: string) => void;
}

export default function CfoSopSection({ onTriggerContact }: CfoSopSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const sopSteps = [
    {
      title: 'Phase 1: Financial Architecture Audit',
      subtitle: 'Mapping Existing Workflows & Bottlenecks',
      desc: 'We perform an in-depth audit of your current accounting practices, treasury management, and reporting schedules. Under strict CA supervision, we define all operational gaps and compliance bottlenecks.',
      metrics: ['100% GAP Analysis Map', 'Treasury Risk Report', 'Immediate Tax Health Evaluation']
    },
    {
      title: 'Phase 2: Custom SOP Design & Integration',
      subtitle: 'Codifying Checks & Balances',
      desc: 'We draft and implement custom Standard Operating Procedures (SOPs) for billing, payables, stock management, and internal approvals to install an airtight internal control system.',
      metrics: ['Custom Financial Manual', 'Zero-leak Payment approval SOPs', 'Auditor-friendly Ledger controls']
    },
    {
      title: 'Phase 3: Operational CFO Steering',
      subtitle: 'Active Cashflow Oversight & Performance Tracking',
      desc: 'Our senior executives act as your Virtual CFOs. We run weekly cashflow analytics, optimize working capital cycles, and conduct monthly operational board reviews to safeguard profitability.',
      metrics: ['Weekly Runway & Liquidity Tracker', 'Monthly MIS Board deck preparation', 'Working Capital expansion strategy']
    },
    {
      title: 'Phase 4: Scalability & Exit Prep',
      subtitle: 'Setting Up institutional Due Diligence readiness',
      desc: 'We prepare your books, legal frameworks, and operational systems to be investment-ready for venture debt, private equity syndication, or mainboard SME IPO listing.',
      metrics: ['Investor Dataroom Setup', 'Clean Ind-AS restated alignment', 'Venture capital pitching readiness']
    }
  ];

  const valuePillars = [
    {
      icon: Settings,
      title: 'SOP Process Engineering',
      desc: 'Deploy custom approval matrixes and automated control loops to completely eliminate fund leakage and compliance penalties.'
    },
    {
      icon: DollarSign,
      title: 'Liquidity & Cashflow Controls',
      desc: 'Real-time monitoring of working capital run-rates, receivable aging, and treasury optimization structures.'
    },
    {
      icon: FolderCheck,
      title: 'MIS Reporting & Board Advisory',
      desc: 'Sovereign-grade Management Information Systems (MIS) rendering deep margin analysis directly to your board.'
    },
    {
      icon: ShieldAlert,
      title: 'Internal Audit & Compliance',
      desc: 'Rigorous recurring reviews ensuring 100% alignment with SEBI guidelines, Ind-AS, and company law compliance.'
    }
  ];

  const handleDiscussClick = () => {
    onTriggerContact(
      'Virtual CFO Services',
      'Interested in Virtual CFO advisory & custom SOP process implementation. Looking for immediate workflow auditing and structural financial guidance.'
    );
  };

  return (
    <section id="cfo-section" className="py-14 md:py-20 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Dynamic graphic particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[15%] left-[-10%] w-[35%] h-[35%] rounded-full bg-teal-500/5 filter blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-teal-500/5 filter blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Editorial Context & SOP Stages Track (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold font-sans uppercase tracking-widest text-[#0F766E] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 shadow-sm inline-block mb-3">
                Virtual CFO & SOP Systems
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4 leading-tight">
                Enterprise Executive Steering & Airtight Financial SOPs
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Bridge the gap between vision and execution with our combined Virtual CFO on-tap steering and Standard Operating Procedure (SOP) design. We set up rigid financial safeguards, eliminate payroll or vendor payment leakages, and model custom MIS frameworks to empower SME promoters with board-grade corporate governance.
              </p>
            </div>

            {/* Interactive Process / SOP Interactive Lifecycle component */}
            <div className="bg-slate-50 rounded-3xl p-5 sm:p-7 border border-slate-100 mt-2">
              <h4 className="text-sm font-bold text-slate-900 uppercase font-sans tracking-wide mb-5 flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-teal-600" />
                <span>The Virtual CFO SOP Lifecycle</span>
              </h4>

              {/* Progress Steps Header */}
              <div className="flex justify-between items-center border-b border-slate-200/60 pb-3 mb-6 gap-2 overflow-x-auto scrollbar-none">
                {sopSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`pb-2.5 text-xs font-bold transition-all border-b-2 px-3 whitespace-nowrap cursor-pointer ${
                      activeStep === index
                        ? 'border-[#14B8A6] text-[#0F766E]'
                        : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Phase {index + 1}
                  </button>
                ))}
              </div>

              {/* Step Detail Content */}
              <div className="min-h-[190px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-teal-650 text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 mb-2 inline-block">
                    {sopSteps[activeStep].subtitle}
                  </span>
                  <h5 className="text-base font-bold text-slate-900 mb-3 font-serif">
                    {sopSteps[activeStep].title}
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold mb-4">
                    {sopSteps[activeStep].desc}
                  </p>
                </div>

                {/* Sub-results checklist */}
                <div className="border-t border-slate-200/50 pt-4 mt-2">
                  <div className="flex flex-wrap gap-2">
                    {sopSteps[activeStep].metrics.map((metric, metricIdx) => (
                      <span
                        key={metricIdx}
                        className="text-[10px] font-semibold text-slate-700 bg-white border border-slate-200 py-1 px-2.5 rounded-full inline-flex items-center gap-1 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button
                onClick={handleDiscussClick}
                className="bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold text-xs py-3.5 px-7 rounded-xl shadow-lg hover:shadow-[#14B8A6]/30 transition-all duration-200 flex items-center space-x-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                <span>Request CFO SOP Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side: Grid of 4 Solid Value Pillars (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative h-[250px] sm:h-[300px] rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-[#08182E]/5 flex items-center justify-center p-3 group">
              <img
                src="/src/assets/images/shree_shyam_logo_1780747844943.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =logoFallback;
                }}
                alt="Virtual CFO Service & SOP Seals"
                className="w-1/2 object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-none opacity-90 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-5 text-center text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-1">
                  Empanelled Corporate Steering
                </span>
                <h5 className="font-serif font-bold text-sm">Strategic Governance Architecture</h5>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valuePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4.5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-[#14B8A6] mb-3 border border-teal-100">
                      <Icon className="w-4 h-4 text-teal-600" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                      {pillar.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 leading-normal font-semibold">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
