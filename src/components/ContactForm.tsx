/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ConsultationInquiry } from '../types';
import {
  CalendarDays,
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  User,
  Building,
  Briefcase,
  Layers,
  Trash2,
  FileSpreadsheet
} from 'lucide-react';

interface ContactFormProps {
  selectedService: string;
  checklistExtraNote: string;
  onInquirySubmitted: () => void;
}

export default function ContactForm({ selectedService, checklistExtraNote, onInquirySubmitted }: ContactFormProps) {
  // Form Fields
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceDesired, setServiceDesired] = useState('IPO Listing & Advisory');
  const [message, setMessage] = useState('');

  // Local persistence and state
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiries, setInquiries] = useState<ConsultationInquiry[]>([]);

  // Sync selection if parent trigger triggers
  useEffect(() => {
    if (selectedService) {
      setServiceDesired(selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    if (checklistExtraNote) {
      setMessage((prev) => `${prev ? prev + '\n' : ''}${checklistExtraNote}`);
    }
  }, [checklistExtraNote]);

  // Load submissions from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('smmc_inquiries');
      if (stored) {
        setInquiries(JSON.parse(stored));
      }
    } catch (_) {}
  }, []);

  const saveInquiries = (updated: ConsultationInquiry[]) => {
    setInquiries(updated);
    try {
      localStorage.setItem('smmc_inquiries', JSON.stringify(updated));
    } catch (_) {}
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName || !companyName || !email || !phone) {
      return;
    }

    const newInquiry: ConsultationInquiry = {
      id: `inq-${Date.now()}`,
      clientName,
      companyName,
      email,
      phone,
      serviceDesired,
      message,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Pending Discovery'
    };

    const updated = [newInquiry, ...inquiries];
    saveInquiries(updated);
    setIsSuccess(true);
    onInquirySubmitted(); // Alerts parent counter

    // Clear fields
    setClientName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setMessage('');

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(updated);
    onInquirySubmitted(); // Sync parent counter
  };

  return (
    <section id="contact-section" className="py-14 md:py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Decorative vectors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-10%] w-[35%] h-[35%] rounded-full bg-teal-500/5 filter blur-[110px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-teal-500/5 filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-[#0F766E] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 shadow-sm inline-block mb-3">
            Corporate Inquiry Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4 leading-tight">
            Schedule a Private Strategic Assessment
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Submit your corporate details to schedule a premium financial planning session with our empanelled specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Column - Contact Detail Pane (4 columns) */}
          <div className="lg:col-span-5 bg-[#08182E] text-white p-6 sm:p-10 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[#14B8A6]/5 pointer-events-none" />
            
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-[#2DD4BF] font-bold uppercase">
                  Direct Liaison Support
                </span>
                <h3 className="text-2xl font-bold font-serif mt-1 text-white">
                  Shree Shyam Money Care
                </h3>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300">Call Pitampura Office</h4>
                    <p className="text-sm font-semibold tracking-wide text-white mt-0.5">
                      <a href="tel:+919167858195" className="hover:text-teal-400 transition-colors">
                        +91 9167858195
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300">Email Inquiries</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      <a href="mailto:moneycareshyam91@gmail.com" className="hover:text-teal-400 transition-colors">
                        moneycareshyam91@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                    <CalendarDays className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300">Liaison Hours</h4>
                    <p className="text-xs text-slate-450 text-slate-300 mt-0.5 font-medium">Monday to Saturday: 10:00 AM – 06:30 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <span className="text-[10px] font-mono tracking-widest text-[#2DD4BF] font-bold uppercase block mb-1">
                Atrusted Partner
              </span>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Empanelled with leading nationalized bank partners and registered IBBI professionals to coordinate airtight transaction security.
              </p>
            </div>
          </div>

          {/* Right Column - Submission Form (7 columns) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Client Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full text-xs font-semibold text-slate-800 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Company Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter official enterprise name"
                    className="w-full text-xs font-semibold text-slate-800 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Business Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-xs font-semibold text-slate-800 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Direct Phone *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit number"
                    className="w-full text-xs font-semibold text-slate-800 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Service Selection Dropdown */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Desired Financial Competence *</span>
                </label>
                <select
                  value={serviceDesired}
                  onChange={(e) => setServiceDesired(e.target.value)}
                  className="w-full text-xs font-bold text-slate-800 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all cursor-pointer"
                >
                  <option value="IPO Listing & Advisory">IPO Listing & Advisory</option>
                  <option value="Debt & Loan Syndication">Debt & Loan Syndication</option>
                  <option value="Corporate Due Diligence">Corporate Due Diligence</option>
                  <option value="Virtual CFO Services">Virtual CFO Services & SOP</option>
                  <option value="Restated Financial Statements">Restated Financial Statements</option>
                  <option value="Market Portfolio Valuation">Market Portfolio Valuation</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Specific Parameter & Brief Description</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Summarize your company requirements (e.g. current revenue, funding ticket needs, process audit gaps...)"
                  className="w-full text-xs font-semibold text-slate-800 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-lg hover:shadow-[#14B8A6]/30 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Secure Consultation Request</span>
              </button>

              {/* Submission visual success banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-teal-50 border border-teal-100 text-teal-800 rounded-2xl flex items-start gap-3 mt-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold">Request Lodged Successfully</h4>
                      <p className="text-[11px] text-teal-700/90 font-medium leading-normal mt-0.5">
                        Our corporate registrar has registered your request. An empanelled Chartered Accountant or senior partner from SMMC's Delhi Pitampura desk will contact you via email/phone shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* INQUIRIES INTERACTIVE TRACKING PANEL (renders dynamically from localStorage state) */}
        {inquiries.length > 0 && (
          <div className="mt-12 bg-white rounded-3xl p-5 sm:p-7 border border-slate-100 shadow-md max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-5 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-teal-600" />
                <h4 className="text-sm font-bold text-slate-900 font-serif">
                  Registered Request Tracker Console
                </h4>
              </div>
              <span className="text-[10px] font-mono bg-teal-50 text-[#0F766E] border border-teal-100 px-3 py-1 rounded-full font-bold">
                {inquiries.length} Active Request{inquiries.length > 1 ? 's' : ''}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider font-semibold text-[10px]">
                    <th className="py-3 px-4">Company</th>
                    <th className="py-3 px-4">Desired Service</th>
                    <th className="py-3 px-4">Lodged Date</th>
                    <th className="py-3 px-4">Representative</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Clear</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold">
                  {inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{inq.companyName}</td>
                      <td className="py-3.5 px-4 text-[#0F766E]">{inq.serviceDesired}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-500">{inq.submittedAt}</td>
                      <td className="py-3.5 px-4">{inq.clientName}</td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block text-[10px] bg-amber-400/10 text-amber-700 border border-amber-300/20 px-2 py-0.5 rounded-full font-bold">
                          Pending Discovery
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDeleteInquiry(inq.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 bg-slate-100 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
