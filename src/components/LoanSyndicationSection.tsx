/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Landmark, ArrowRight, ShieldCheck, HeartHandshake, Eye, Sparkles, Network } from 'lucide-react';

interface LoanSyndicationSectionProps {
  onTriggerContact: (service: string, extraNote: string) => void;
}

export default function LoanSyndicationSection({ onTriggerContact }: LoanSyndicationSectionProps) {
  const cards = [
    {
      icon: Network,
      title: 'Optimal Financing',
      desc: 'Secure the best possible terms and interest rates through our extensive lender network of over 35 premier banks & NBFCs.'
    },
    {
      icon: HeartHandshake,
      title: 'Expert Negotiation',
      desc: 'Leverage our institutional relationships and decades of expertise to negotiate favorable interest structures and covenants.'
    },
    {
      icon: Sparkles,
      title: 'Quick Processing',
      desc: 'Streamlined appraisal processes engineered under CA scrutiny ensure faster approval times and capital disbursement.'
    },
    {
      icon: ShieldCheck,
      title: 'Risk Mitigation',
      desc: 'Comprehensive risk assessment and meticulous cash flow modeling throughout the debt syndication life-cycle.'
    }
  ];

  return (
    <section id="loan-section" className="py-12 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/5 filter blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (Copy content + 4 cards - 7 cols) - order-2 lg:order-1 */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold font-sans uppercase tracking-widest text-[#0F766E] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 inline-block mb-3 shadow-sm">
                Financing Solutions
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4 leading-tight">
                Structured Loan Syndication for Your Growth
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                Access capital efficiently through our loan syndication services. We connect corporate enterprises with a premium network of nationalised banks, private financial institutions, and sovereign credit funds, structuring optimal debt models that map perfectly against your seasonal cash generation and repayment capacities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-[#14B8A6] mb-3 border border-teal-100">
                      <Icon className="w-4.5 h-4.5 text-teal-600" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button
                onClick={() => onTriggerContact('Debt & Loan Syndication', 'Requested personalized debt-capacity mapping and bank loan options.')}
                className="bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold text-xs py-3.5 px-7 rounded-xl shadow-lg hover:shadow-[#14B8A6]/30 transition-all duration-200 flex items-center space-x-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                <span>Explore Financing Options</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (Visual Banner - 5 cols) - order-1 lg:order-2 */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-[#08182E]/5 flex items-center justify-center p-3 group">
              <img 
                src="/src/assets/images/loan_syndication_banner_1780230314924.png"
                alt="Loan Syndication"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E]/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
