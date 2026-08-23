/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, CalendarCheck, FileSliders } from 'lucide-react';
import logoFallback from '@/src/assets/images/Logo.png';
interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  consultationCount: number;
  onLogoClick?: () => void;
}

export default function Navbar({ onNavigate, consultationCount, onLogoClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', id: 'services-section' },
    { label: 'IPO Advisory', id: 'ipo-section' },
    { label: 'Loan Syndication', id: 'loan-section' },
    { label: 'Due Diligence', id: 'diligence-section' },
    { label: 'Virtual CFO & SOP', id: 'cfo-section' },
    { label: 'Financial Restatement', id: 'restated-section' },
    { label: 'Valuation & Estimator', id: 'valuation-section' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-teal-600/10 py-3'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand with readdy.ai original Logo Asset */}
          <div
            id="brand-logo"
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div 
              onClick={(e) => {
                e.stopPropagation();
                if (onLogoClick) onLogoClick();
              }}
              title="Click to view full high-resolution emblem details"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-[#08182E]/95 p-0.5 flex items-center justify-center shrink-0 shadow-lg border-2 border-amber-500/50 hover:border-amber-500 hover:scale-110 active:scale-95 transition-all duration-300 relative"
            >
              <img
                src="/src/assets/images/shree_shyam_logo_1780747844943.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =logoFallback;
                }}
                alt="Shree Shyam Money Care Logo"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[8px] font-bold text-amber-200 rounded-full" />
            </div>
            <div onClick={() => handleNavClick('hero-section')}>
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#0F766E] block group-hover:text-teal-600 transition-colors uppercase leading-none">
                Shree Shyam
              </span>
              <span className="text-[10px] font-sans font-semibold tracking-wider text-teal-500 block uppercase pt-0.5">
                Money Care
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0F766E] transition-colors duration-200 cursor-pointer py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* CTA Consultation Button */}
            <button
              onClick={() => handleNavClick('contact-section')}
              className="relative flex items-center space-x-2 bg-gradient-to-r from-[#0F766E] to-teal-500 text-white font-semibold text-xs py-2.5 px-4 rounded-xl hover:opacity-90 hover:shadow-lg shadow-teal-700/10 transform hover:-translate-y-0.5 transition-all duration-205 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Get Consultation</span>
              {consultationCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-900 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
                  {consultationCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            {consultationCount > 0 && (
              <button
                onClick={() => handleNavClick('contact-section')}
                className="relative bg-teal-50 text-teal-700 p-2 rounded-xl border border-teal-100"
              >
                <CalendarCheck className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-900 text-[9px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full">
                  {consultationCount}
                </span>
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-1.5 bg-slate-50 rounded-lg border border-slate-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl transition-all duration-300">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl text-slate-700 hover:text-[#0F766E] hover:bg-slate-50 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => handleNavClick('contact-section')}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-teal-600 to-[#0F766E] text-white font-bold px-4 py-3 rounded-xl shadow-md cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
