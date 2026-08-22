/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Building2, TrendingUp, HandCoins, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onCtaclick: (sectionId: string) => void;
}

export default function Hero({ onCtaclick }: HeroProps) {
  const stats = [
    { number: '150+', label: 'Happy Clients', desc: 'SMEs & Corporates served' },
    { number: '98%', label: 'Success Rate', desc: 'In approvals & transactions' },
    { number: '15+', label: 'Years Experience', desc: 'Professional financial consulting' }
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background Image and Gradient Overlay from Readdy */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20financial%20growth%20visualization%20with%20ascending%20geometric%20shapes%20and%2520market%2520graphs%2520in%2520turquoise%2520blue%2520gradient%2520background%2520creating%2520professional%2520corporate%2520atmosphere%2520with%2520floating%2520data%2520elements%2520and%2520modern%2520business%2520aesthetics%2520conveying%2520trust%2520and%2520prosperity&width=1180&height=1080&seq=hero-bg-turq-001&orientation=landscape"
          alt="Financial Excellence Background"
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2F1]/95 via-[#B2DFDB]/90 to-[#80CBC4]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 text-center">
        {/* Luxury Sparkle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/80 border border-[#14B8A6]/40 py-2 px-6 rounded-full mb-8 shadow-sm backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-[#0F766E] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0F766E] uppercase font-sans">
            Your Trusted Financial Partner Since 2015
          </span>
        </motion.div>

        {/* Principal Heading - Playfair Display serif paired beautifully */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F766E] tracking-tight leading-tight sm:leading-none mb-8 max-w-5xl mx-auto font-serif"
        >
          Empowering Your <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#0F766E] to-[#14B8A6] bg-clip-text text-transparent italic">
            Financial Future
          </span>{' '}
          with Expert Solutions
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#0D5C56] max-w-3xl mx-auto mb-10 leading-relaxed font-sans font-medium"
        >
          Comprehensive IPO services, loan syndication, due diligence, and portfolio valuation to help your business thrive in the competitive financial landscape. We architect strategic growth liquidity under trusted Virtual CFO guidance.
        </motion.p>

        {/* CTA Button Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
        >
          <button
            onClick={() => onCtaclick('services-section')}
            className="w-full sm:w-auto bg-[#0F766E] hover:bg-teal-850 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-teal-700/30 transform hover:-translate-y-0.5 transition-all duration-205 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => onCtaclick('contact-section')}
            className="w-full sm:w-auto bg-white/90 border border-teal-500/20 text-[#0F766E] hover:text-teal-800 font-bold text-base px-8 py-4 rounded-xl hover:bg-white transition-all duration-205 flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
          >
            <span>Get in Touch</span>
          </button>
        </motion.div>




      </div>
    </section>
  );
}
