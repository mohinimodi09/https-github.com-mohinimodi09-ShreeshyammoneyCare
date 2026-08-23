/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, Shield, Copyright, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onLogoClick?: () => void;
}

export default function Footer({ onNavigate, onLogoClick }: FooterProps) {
  const handleLogoClick = () => {
    onNavigate('hero-section');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo Brand Segment */}
          <div>
            <div className="flex items-center space-x-3 mb-4 cursor-pointer group">
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  if (onLogoClick) onLogoClick();
                }}
                title="Click to view full high-resolution emblem details"
                className="w-13 h-13 rounded-full overflow-hidden bg-[#08182E]/95 p-0.5 flex items-center justify-center shadow-lg border-2 border-amber-500/50 hover:border-amber-500 group-hover:scale-110 active:scale-95 transition-all duration-300 relative"
              >
                <img
                  src="/src/assets/images/shree_shyam_logo_1780747844943.png"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/src/assets/images/Logo.png";
                  }}
                  alt="Shree Shyam Money Care Logo"
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div onClick={handleLogoClick}>
                <span className="text-base font-bold tracking-tight text-white block group-hover:text-teal-400 transition-colors uppercase">
                  Shree Shyam
                </span>
                <span className="text-[9px] font-sans font-bold tracking-wider text-teal-400 block uppercase leading-none mt-1">
                  Money Care
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Providing SME IPO advisory, structured corporate debt syndication, financial restating diagnostics, certified valuations, and Virtual CFO steering since 2015.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[10px]">
              <Globe className="w-4 h-4 text-teal-500" />
              <span>shreeshyammoneycare.com</span>
            </div>
          </div>

          {/* Quick Sections Links */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase mb-4">
              Corporate Sections
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
              <li>
                <button
                  onClick={() => onNavigate('services-section')}
                  className="hover:text-teal-450 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Our Core Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ipo-section')}
                  className="hover:text-teal-450 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  IPO Advisory & SME Listing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('loan-section')}
                  className="hover:text-teal-450 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Loan Syndication & Debt Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('valuation-section')}
                  className="hover:text-teal-450 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Enterprise Valuation Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cfo-section')}
                  className="hover:text-teal-450 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Virtual CFO & SOP Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Key Services Tags */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase mb-4">
              Specialized Audits
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
              <li>
                <button
                  onClick={() => onNavigate('diligence-section')}
                  className="hover:text-teal-450 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Financial & Tax Due Diligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('restated-section')}
                  className="hover:text-teal-450 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Certified Historic Restatements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ipo-section')}
                  className="hover:text-teal-450 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  SME Listing Compliance (NSE/BSE)
                </button>
              </li>
            </ul>
          </div>

          {/* Pitampura India Details */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase mb-4">
              Delhi Liaison Desk
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Shree Shyam Money Care Corporate Tower,<br />
              Outer Ring Road, Pitampura, New Delhi, 110034 India
            </p>
            <p className="text-xs text-slate-400 mb-2 font-mono">
              Phone:{' '}
              <a href="tel:+919167858195" className="hover:text-teal-400 transition-colors">
                +91 9167858195
              </a>
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Support:{' '}
              <a href="mailto:moneycareshyam91@gmail.com" className="hover:text-teal-400 transition-colors">
                moneycareshyam91@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Disclaimer / Regulatory disclosures */}
        <div className="border-t border-slate-900 pt-8 mt-8">
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-900 flex items-start gap-3.5 mb-8">
            <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
              <strong>Regulatory Disclaimer & Risk Advisory:</strong> Shree Shyam Money Care is a premier corporate financial consulting advisory group. Financial structuring, debt loan syndications, IPO advisory boards, and certified asset valuations are subject to specific company health, bank underwriting approvals, and stock exchange (BSE/NSE/SEBI) compliance clearances. We operate alongside empanelled Chartered Accountants, merchant bankers, and legal counsel networks to deliver regulatory certifications. Capital estimates, valuations, or checklists generated by our dynamic applet interfaces are indicative. Past indicative outputs are no representation of corresponding future investment outputs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-slate-600 font-mono text-[10px] font-bold gap-4">
            <div className="flex items-center gap-1.5">
              <Copyright className="w-4 h-4 text-slate-600" />
              <span>2026 Shree Shyam Money Care. All Strategic Rights Reserved.</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>ISO 9001:2015 Certified advisory</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <span>In Reference with ASC Group Concept</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
