/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import IpoAdvisorySection from './components/IpoAdvisorySection';
import LoanSyndicationSection from './components/LoanSyndicationSection';
import DueDiligenceSection from './components/DueDiligenceSection';
import CfoSopSection from './components/CfoSopSection';
import ValuationAndRestatements from './components/ValuationAndRestatements';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Sparkles, AlertCircle, ArrowUpRight } from 'lucide-react';
import logoFallback from '@/src/assets/images/Logo.png';
export default function App() {
  const [selectedService, setSelectedService] = useState('IPO Listing & Advisory');
  const [checklistExtraNote, setChecklistExtraNote] = useState('');
  const [consultationCount, setConsultationCount] = useState(0);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  // Load initial local consult tracker count on boot
  useEffect(() => {
    updateConsultationCount();
  }, []);

  const updateConsultationCount = () => {
    try {
      const stored = localStorage.getItem('smmc_inquiries');
      if (stored) {
        const parsed = JSON.parse(stored);
        setConsultationCount(parsed.length);
      } else {
        setConsultationCount(0);
      }
    } catch (_) {
      setConsultationCount(0);
    }
  };

  // Modern browser smooth scrolling parameters
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Standardize callback selections matching values in contact form select values
  const handleServiceSelect = (serviceName: string) => {
    if (serviceName.includes('IPO') || serviceName.includes('Listing')) {
      setSelectedService('IPO Listing & Advisory');
    } else if (serviceName.includes('Syndication') || serviceName.includes('Debt')) {
      setSelectedService('Debt & Loan Syndication');
    } else if (serviceName.includes('Diligence')) {
      setSelectedService('Corporate Due Diligence');
    } else if (serviceName.includes('Restatement') || serviceName.includes('Restated')) {
      setSelectedService('Restated Financial Statements');
    } else if (serviceName.includes('Valuation') || serviceName.includes('Portfolio')) {
      setSelectedService('Market Portfolio Valuation');
    } else {
      setSelectedService('Virtual CFO Services');
    }
    handleScrollToSection('contact-section');
  };

  // Handler callback trigger from estimators or scorecard checklists
  const handleTriggerContactWithNote = (service: string, extraNote: string) => {
    handleServiceSelect(service);
    setChecklistExtraNote(extraNote);
    handleScrollToSection('contact-section');
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 selection:bg-teal-500 selection:text-white scroll-smooth antialiased">
      {/* Top Fixed Header */}
      <Navbar
        onNavigate={handleScrollToSection}
        consultationCount={consultationCount}
        onLogoClick={() => setIsLogoModalOpen(true)}
      />

      {/* Main Hero Showcase */}
      <Hero onCtaclick={handleScrollToSection} />

      {/* Quick Core Services Menu Panel */}
      <ServicesGrid onServiceSelect={handleServiceSelect} />

      {/* 1. IPO Advisory & Listing Services Section */}
      <IpoAdvisorySection onTriggerContact={handleTriggerContactWithNote} />

      {/* 2. Structured Loan Syndication Section */}
      <LoanSyndicationSection onTriggerContact={handleTriggerContactWithNote} />

      {/* 3. Forensic Due Diligence Section */}
      <DueDiligenceSection onTriggerContact={handleTriggerContactWithNote} />

      {/* Virtual CFO & SOP Compliance Service Desk */}
      <CfoSopSection onTriggerContact={handleTriggerContactWithNote} />

      {/* 4 & 5. Financial Restatements + Portfolio Valuations Segment (grows our valuation calculator) */}
      <ValuationAndRestatements onTriggerContact={handleTriggerContactWithNote} />

      {/* Corporate Lead Consultation Inquiry Desk */}
      <ContactForm
        selectedService={selectedService}
        checklistExtraNote={checklistExtraNote}
        onInquirySubmitted={updateConsultationCount}
      />

      {/* Global Disclaimer Footer */}
      <Footer onNavigate={handleScrollToSection} onLogoClick={() => setIsLogoModalOpen(true)} />

      {/* EXQUISITE HIGH-FIDELITY LOGO INSPECTION MODAL */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-amber-500/20 max-w-4xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 my-8"
            >
              {/* Absolutes */}
              <button
                onClick={() => setIsLogoModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 sm:p-2.5 rounded-full border border-white/10 transition-all cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Col: Majestic high-resolution circular presentation of emblem */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative group w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-amber-500/40 p-1.5 overflow-hidden bg-[#08182E]/95 shadow-2xl transition-all duration-700 hover:border-amber-500/60">
                    <img
                      src="/src/assets/images/shree_shyam_logo_1780747844943.png"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =logoFallback;
                      }}
                      alt="Shree Shyam Money Care Official Seal"
                      className="w-full h-full object-contain rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-[#08182E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-amber-500 font-bold uppercase mt-4 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                    Official Corporate Stamp
                  </span>
                </div>

                {/* Right Col: High design symbol breakdown & descriptive text */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xxs font-mono text-teal-400 font-bold uppercase tracking-widest block mb-1">
                      Brand Architecture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight leading-tight">
                      Shree Shyam Money Care Seal
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                      Every element of our official crown emblem illustrates our deep-rooted commitment to transactional safety, ethical transparency, and outstanding enterprise growth acceleration.
                    </p>
                  </div>

                  {/* Symbol details list */}
                  <div className="space-y-4 font-sans text-xs">
                    {/* Feature 1 */}
                    <div className="flex gap-3 bg-white/5 border border-white/[0.03] p-3 rounded-2xl">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-0.5">Circular Band & Golden Serif Type</h4>
                        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                          Deep sapphire blue bands framed by metallic 3D gold bounds reflect sovereign stability, integrity, and absolute alignment with top asset compliance guidelines.
                        </p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-3 bg-white/5 border border-white/[0.03] p-3 rounded-2xl">
                      <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-0.5">Imperial Shield of Protection</h4>
                        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                          Shielding SME transactions. Represents airtight corporate tax diligence, certified enterprise valuations, and secure Virtual CFO risk management.
                        </p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-3 bg-white/5 border border-white/[0.03] p-3 rounded-2xl">
                      <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-0.5">Rupee Currency Bag & Growth Graph</h4>
                        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                          Three currency purses indicating multi-dimensional sovereign funding sources, backed by an exploding metallic golden growth arrow represent active SME capital compounding victories.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom validation info desk */}
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] text-slate-500 font-mono gap-3">
                    <span>© 2026 Shree Shyam Money Care</span>
                    <span>Corporate Advisory Desk Approved</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
