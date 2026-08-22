/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Landmark, BarChart4, FileSpreadsheet, Check } from 'lucide-react';
import InteractiveCalculator from './InteractiveCalculator';

interface ValuationAndRestatementsProps {
  onTriggerContact: (service: string, extraNote: string) => void;
}

export default function ValuationAndRestatements({ onTriggerContact }: ValuationAndRestatementsProps) {
  const restatementPoints = [
    {
      title: 'Historical Financial Restatement',
      desc: 'Recompilation and certified restatement of past financial statements to comply with Ind AS, IFRS, or Schedule III formats.'
    },
    {
      title: 'Audit & Certification support',
      desc: 'Independent audit coordination and backup testing by qualified Chartered Accountants for seamless regulatory acceptance.'
    },
    {
      title: 'IPO Compliance Formatting',
      desc: 'Preparation of financial tables in the exact format required by SEBI and major stock exchanges for DRHP and RHP filings.'
    },
    {
      title: 'Material Adjustments & Reconciliation',
      desc: 'Identification, isolation, and quantification of material adjustments needed between historic figures and restated reports.'
    },
    {
      title: 'Accounting Standard Alignment',
      desc: 'Meticulous restatements to align historical balances with current corporate policies, revenue recognitions, and accounting rules.'
    },
    {
      title: 'Regulatory Audit Support',
      desc: 'End-to-end support during SEBI, MCA, and stock exchange reviewers with direct CA defense on restatement logic.'
    }
  ];

  const methodologies = [
    'Discounted Cash Flow (DCF) Analysis',
    'Comparable Company Analysis (CCA)',
    'Precedent Transaction Analysis',
    'Asset-Based Sum-of-the-parts Appraisal',
    'Market EBITDA / Revenue Multiples',
    'Real Option valuation pricing model'
  ];

  return (
    <div>
      {/* SECTION A: FINANCIAL RESTATEMENT */}
      <section id="restated-section" className="py-12 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/5 filter blur-[110px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Header */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider block mb-3">
              Financial Restatement
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4 leading-tight">
              Restated Financial Statements
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto font-medium">
              We prepare certified restated financial statements that meet the stringent requirements of SEBI, stock exchanges, and institutional investors. Whether you are planning an IPO, raising funds, or complying with regulatory mandates, our restatement services ensure accuracy, consistency, and full regulatory alignment.
            </p>
          </div>

          {/* 3-Column Grid of 6 Compliance Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
            {restatementPoints.map((pt, idx) => (
              <div
                key={idx}
                className="group bg-white hover:bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] mb-4 border border-[#14B8A6]/10 group-hover:scale-105 transition-transform duration-300">
                  <FileSpreadsheet className="w-5 h-5 text-[#0F766E]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-serif">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Full size block bottom CTA card */}
          <div className="bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden text-center max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[#000] opacity-5 pointer-events-none" />
            
            <div className="relative z-10">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">
                Need Certified Restated Financials?
              </h4>
              <button
                onClick={() => onTriggerContact('Restated Financial Statements', 'Requested certified financial restatement consulting values.')}
                className="bg-white hover:bg-gray-100 text-[#0F766E] font-bold text-xs py-3 px-6 rounded-xl shadow-md transition-all duration-205 flex items-center justify-center space-x-2 mx-auto cursor-pointer"
              >
                <span>Get Restatement Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: PORTFOLIO VALUATION */}
      <section id="valuation-section" className="py-12 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[40%] left-[-10%] w-[35%] h-[35%] rounded-full bg-teal-500/5 filter blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Portfolio Content Info */}
            <div>
              <span className="text-xs font-bold font-sans uppercase tracking-widest text-[#0F766E] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 inline-block mb-4 shadow-sm">
                Valuation Services
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                Accurate Portfolio Valuation & Assessment
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-medium">
                Get precise valuation of your investment portfolio, business assets, or corporate legal entities using industry-leading methodologies. Our expert empanelled CA valuations support strategic board decisions, investor fundraising, complex M&A, and financial reporting.
              </p>

              {/* Methodologies block */}
              <div className="mb-8">
                <h4 className="text-base font-serif font-bold text-slate-900 mb-4">
                  Valuation Methodologies:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {methodologies.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 leading-snug">
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </div>



              <button
                onClick={() => onTriggerContact('Market Portfolio Valuation', 'Requested a formal portfolio/corporate asset valuation quote.')}
                className="bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold text-xs py-4 px-8 rounded-xl shadow-lg hover:shadow-[#14B8A6]/30 transition-all duration-200 flex items-center space-x-2.5 cursor-pointer w-full sm:w-auto text-center"
              >
                <span>Get Valuation Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Custom high-fidelity portfolio presentation with absolute floating cards and badges */}
            <div className="relative py-8 px-4 sm:px-8">
              <div className="relative max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="/src/assets/images/portfolio_evaluation_banner_1780230336675.png"
                  alt="Portfolio Valuation"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E]/40 via-transparent to-transparent pointer-events-none" />
              </div>


            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
