/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  Building,
  TrendingUp,
  Percent,
  CheckCircle,
  TrendingDown,
  Info,
  DollarSign,
  AlertTriangle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

interface InteractiveCalculatorProps {
  onSuggestService: (serviceName: string) => void;
}

export default function InteractiveCalculator({ onSuggestService }: InteractiveCalculatorProps) {
  // Mode: 'corporate' valuation or dynamic 'portfolio' breakdown
  const [calcMode, setCalcMode] = useState<'corporate' | 'portfolio'>('corporate');

  // Corporate Parameters (INR Rupees)
  const [revenue, setRevenue] = useState<number>(180000000); // ₹18 Cr
  const [costs, setCosts] = useState<number>(135000000);   // ₹13.5 Cr
  const [assets, setAssets] = useState<number>(95000000);    // ₹9.5 Cr
  const [liabilities, setLiabilities] = useState<number>(42000000); // ₹4.2 Cr
  const [cashEquiv, setCashEquiv] = useState<number>(22000000);  // ₹2.2 Cr
  const [growthRate, setGrowthRate] = useState<number>(15);     // 15%
  const [industryMultiplier, setIndustryMultiplier] = useState<number>(6.5); // Tech/Services multiplier

  // Portfolio Parameters (INR Rupees)
  const [cashBalance, setCashBalance] = useState<number>(15000000);   // ₹1.5 Cr
  const [equityBalance, setEquityBalance] = useState<number>(45000000); // ₹4.5 Cr
  const [mutualFundBalance, setMutualFundBalance] = useState<number>(25000000); // ₹2.5 Cr
  const [debtBalance, setDebtBalance] = useState<number>(15000000);   // ₹1.5 Cr
  const [portfolioTargetRate, setPortfolioTargetRate] = useState<number>(12); // 12%

  // Helper formatting INR
  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100050).toFixed(1)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  // 1. Core Corporate Calculations
  const corporateResults = useMemo(() => {
    const ebitda = Math.max(0, revenue - costs);
    const netWorth = assets - liabilities;
    const operatingMargin = revenue > 0 ? (ebitda / revenue) * 100 : 0;
    const debtToEquity = netWorth > 0 ? liabilities / netWorth : 0;

    // Standard Multiples Formula: 
    // Val = 70% of (EBITDA * Multiplier) + 30% of BookValue (NetWorth) + Cash reserves
    const EBITDAVal = ebitda * industryMultiplier;
    const estimatedValue = Math.max(0, 0.7 * EBITDAVal + 0.3 * netWorth + cashEquiv);

    // 5-Year compound projection curve
    const projectionCurve: number[] = [];
    let rollingVal = estimatedValue;
    for (let i = 0; i <= 5; i++) {
      if (i === 0) {
        projectionCurve.push(rollingVal);
      } else {
        rollingVal = rollingVal * (1 + growthRate / 100);
        projectionCurve.push(rollingVal);
      }
    }

    // Dynamic Advisor recommendations
    let advisoryHeader = "Virtual CFO Acceleration Program";
    let advisoryNotes = [
      'Your profit margins indicate opportunities for cost optimisations.',
      'Our team will conduct rigorous internal-leakage checks to boost EBITDA values.'
    ];
    let recommendedService = 'Virtual CFO Services';

    if (operatingMargin > 20 && revenue >= 150000000 && debtToEquity < 0.7) {
      advisoryHeader = "Prime IPO advisory candidate";
      advisoryNotes = [
        'Superb corporate health. Your operating leverage aligns with SME Board SEBI requirements.',
        'We advise establishing advanced VCFO bookkeeping to structure red-herring prospectuses.',
        'Your enterprise valuation multiplier makes public equity listing highly optimal.'
      ];
      recommendedService = 'IPO Services';
    } else if (debtToEquity > 1.3) {
      advisoryHeader = "Debt Restructuring & Syndication Candidate";
      advisoryNotes = [
        'High external leverage ratios detected. Debt refinancing is advised to lower your current interest structures.',
        'Consortium credit limit syndication can optimize your overall Cost of Capital.',
        'Our Virtual CFO models will set up liquid sinking funds to maintain pristine interest safety.'
      ];
      recommendedService = 'Loan Syndication';
    } else if (revenue >= 80000000) {
      advisoryHeader = "Due Diligence & Transaction Assessment Ready";
      advisoryNotes = [
        'Solid parameters. To raise professional strategic venture funds, a comprehensive transaction check is recommended.',
        'Organizing an internal legal & financial corporate data room mitigates future dilution discount risks.'
      ];
      recommendedService = 'Due Diligence';
    }

    return {
      ebitda,
      netWorth,
      operatingMargin,
      debtToEquity,
      estimatedValue,
      projectionCurve,
      advisoryHeader,
      advisoryNotes,
      recommendedService
    };
  }, [revenue, costs, assets, liabilities, cashEquiv, growthRate, industryMultiplier]);

  // 2. Core Portfolio Calculations
  const portfolioResults = useMemo(() => {
    const totalPortfolioValue = cashBalance + equityBalance + mutualFundBalance + debtBalance;

    const cashShare = totalPortfolioValue > 0 ? (cashBalance / totalPortfolioValue) * 105 : 0;
    const equityShare = totalPortfolioValue > 0 ? (equityBalance / totalPortfolioValue) * 100 : 0;
    const mutualFundShare = totalPortfolioValue > 0 ? (mutualFundBalance / totalPortfolioValue) * 100 : 0;
    const debtShare = totalPortfolioValue > 0 ? (debtBalance / totalPortfolioValue) * 100 : 0;

    const blendedReturn = (cashShare * 0.055 + equityShare * 0.14 + mutualFundShare * 0.11 + debtShare * 0.085) / 100;

    // 10-Year compounding projections
    const projectionCurve10Y: number[] = [];
    let rollingVal = totalPortfolioValue;
    for (let i = 0; i <= 5; i++) {
      if (i === 0) {
        projectionCurve10Y.push(rollingVal);
      } else {
        rollingVal = rollingVal * (1 + portfolioTargetRate / 100);
        projectionCurve10Y.push(rollingVal);
      }
    }

    return {
      totalPortfolioValue,
      cashShare,
      equityShare,
      mutualFundShare,
      debtShare,
      blendedReturn,
      projectionCurve10Y
    };
  }, [cashBalance, equityBalance, mutualFundBalance, debtBalance, portfolioTargetRate]);

  return (
    <div className="bg-white rounded-3xl border border-slate-150 shadow-xl overflow-hidden mt-12">
      {/* Tab Selectors */}
      <div className="flex border-b border-slate-150 bg-slate-50 p-2 gap-2">
        <button
          onClick={() => setCalcMode('corporate')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            calcMode === 'corporate'
              ? 'bg-white text-[#0F766E] shadow-sm border border-slate-100'
              : 'text-slate-600 hover:text-[#0F766E]'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Corporate Valuation Estimator</span>
        </button>
        <button
          onClick={() => setCalcMode('portfolio')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            calcMode === 'portfolio'
              ? 'bg-white text-[#0F766E] shadow-sm border border-slate-100'
              : 'text-slate-600 hover:text-[#0F766E]'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Wealth Portfolio compounding Planner</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        {calcMode === 'corporate' ? (
          /* CORPORATE VALUATION MODE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* INPS */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-800 tracking-tight uppercase mb-4 font-mono">
                  Financial Ledger (INR)
                </h4>
                
                {/* Revenue Slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600">Annual Revenue</span>
                    <span className="text-xs font-sans font-bold text-teal-700">{formatCurrency(revenue)}</span>
                  </div>
                  <input
                    type="range"
                    min={10000000} // 1 Cr
                    max={1000000000} // 100 Cr
                    step={5000000}
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full accent-[#14B8A6] cursor-pointer"
                  />
                </div>

                {/* Costs Slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600">Operating Costs</span>
                    <span className="text-xs font-sans font-bold text-red-500">{formatCurrency(costs)}</span>
                  </div>
                  <input
                    type="range"
                    min={5000000}
                    max={revenue} // cost cap
                    step={5000000}
                    value={costs}
                    onChange={(e) => setCosts(Number(e.target.value))}
                    className="w-full accent-teal-600 cursor-pointer"
                  />
                </div>

                {/* Assets Slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600">Total Book Assets</span>
                    <span className="text-xs font-sans font-bold text-blue-600">{formatCurrency(assets)}</span>
                  </div>
                  <input
                    type="range"
                    min={5000000}
                    max={500000000}
                    step={5000000}
                    value={assets}
                    onChange={(e) => setAssets(Number(e.target.value))}
                    className="w-full accent-[#14B8A6] cursor-pointer"
                  />
                </div>

                {/* Liabilities Slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600">Total Liabilities</span>
                    <span className="text-xs font-sans font-bold text-slate-500">{formatCurrency(liabilities)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={assets} // cannot exceed assets
                    step={1000000}
                    value={liabilities}
                    onChange={(e) => setLiabilities(Number(e.target.value))}
                    className="w-full accent-slate-400 cursor-pointer"
                  />
                </div>

                {/* Growth Rate slider */}
                <div className="space-y-2 mb-4 pt-3 border-t border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600">Projected Growth Rate</span>
                    <span className="text-xs font-sans font-bold text-amber-500">{growthRate}% Y-o-Y</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={1}
                    value={growthRate}
                    onChange={(e) => setGrowthRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Sector EBITDA Multiple slider */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600">Sector EBITDA Multiplier</span>
                    <span className="text-xs font-sans font-bold text-[#0F766E]">{industryMultiplier}x</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={20}
                    step={0.5}
                    value={industryMultiplier}
                    onChange={(e) => setIndustryMultiplier(Number(e.target.value))}
                    className="w-full accent-teal-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* VALUATION OUTPUT COLUMN (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between h-full shadow-lg">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 tracking-widest block uppercase">
                      Computed Enterprise Valuation
                    </span>
                    <h5 className="text-3xl sm:text-4xl font-extrabold text-white font-serif mt-2 font-mono">
                      {formatCurrency(corporateResults.estimatedValue)}
                    </h5>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300">
                    <div>
                      <span className="text-slate-500 text-[10px] block">EBITDA:</span>
                      <span className="font-bold text-white">{formatCurrency(corporateResults.ebitda)}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Operating Margin:</span>
                      <span className="font-bold text-teal-400">{corporateResults.operatingMargin.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Net Worth:</span>
                      <span className="font-bold text-white">{formatCurrency(corporateResults.netWorth)}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Debt/Equity:</span>
                      <span className="font-bold text-amber-400">{corporateResults.debtToEquity.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* 5-Year Compounding visual graph illustration inside SVG (extremely safe for typescript compiles) */}
                <div className="relative z-10 py-6">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-4">
                    5-Year Compounded Valuation Forecast
                  </span>
                  <div className="h-28 flex items-end justify-between gap-2.5 pt-4">
                    {corporateResults.projectionCurve.map((value, idx) => {
                      const maxVal = Math.max(...corporateResults.projectionCurve);
                      const heightPercent = maxVal > 0 ? (value / maxVal) * 100 : 0;
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center group">
                          <div className="text-[10px] font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity mb-1 font-bold">
                            {formatCurrency(value).replace(' Cr', '')}
                          </div>
                          <div
                            style={{ height: `${Math.max(15, heightPercent * 0.7)}px` }}
                            className="w-full bg-gradient-to-t from-teal-700 to-teal-400 rounded-t-lg transition-all duration-300 group-hover:to-amber-400"
                          />
                          <span className="text-[10px] text-slate-500 font-bold font-mono mt-2">
                            Yr {idx}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CFO Advisory Suggestion */}
                <div className="relative z-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-auto">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 tracking-wider block uppercase mb-1">
                      Virtual CFO Advisory Outlook
                    </span>
                    <h6 className="text-[#14B8A6] font-serif font-bold text-sm">
                      {corporateResults.advisoryHeader}
                    </h6>
                  </div>
                  <button
                    onClick={() => onSuggestService(corporateResults.recommendedService)}
                    className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-slate-900 font-bold text-xs py-3.5 px-5 rounded-xl flex items-center gap-2 cursor-pointer hover:shadow-lg shadow-teal-500/20 hover:opacity-90 active:scale-95 transition-all"
                  >
                    <span>Connect to Advisor</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* PORTFOLIO COMPOUNDING PLANNER MODE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-fade-in">
            {/* INPS */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-800 tracking-tight uppercase mb-4 font-mono">
                  Portfolio Asset Allocation (INR)
                </h4>

                {/* Cash holdings slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" />
                      Cash & FDs
                    </span>
                    <span className="text-xs font-sans font-bold text-slate-700">{formatCurrency(cashBalance)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100000000}
                    step={1000000}
                    value={cashBalance}
                    onChange={(e) => setCashBalance(Number(e.target.value))}
                    className="w-full accent-teal-600 cursor-pointer"
                  />
                </div>

                {/* Equity holdings slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                      Direct Equities
                    </span>
                    <span className="text-xs font-sans font-bold text-slate-700">{formatCurrency(equityBalance)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100000000}
                    step={1000000}
                    value={equityBalance}
                    onChange={(e) => setEquityBalance(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                {/* Mutual Funds holdings slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      Mutual Funds
                    </span>
                    <span className="text-xs font-sans font-bold text-slate-700">{formatCurrency(mutualFundBalance)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100000000}
                    step={1000000}
                    value={mutualFundBalance}
                    onChange={(e) => setMutualFundBalance(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Fixed Yield Debt holdings slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
                      Bonds & Debt Securities
                    </span>
                    <span className="text-xs font-sans font-bold text-slate-700">{formatCurrency(debtBalance)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100000000}
                    step={1000000}
                    value={debtBalance}
                    onChange={(e) => setDebtBalance(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                {/* Target growth compounding rate slider */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-600">Expected Annual Portfolio Yield</span>
                    <span className="text-xs font-sans font-bold text-teal-600">{portfolioTargetRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={25}
                    step={1}
                    value={portfolioTargetRate}
                    onChange={(e) => setPortfolioTargetRate(Number(e.target.value))}
                    className="w-full accent-teal-700 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* PORTFOLIO OUTPUT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between h-full shadow-lg">
                <div className="relative z-10 pb-6 border-b border-slate-800">
                  <span className="text-[10px] font-bold text-[#14B8A6] tracking-widest block uppercase">
                    Total Assets Under Management (AUM)
                  </span>
                  <h5 className="text-3xl sm:text-4xl font-extrabold text-white font-serif mt-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-300">
                    {formatCurrency(portfolioResults.totalPortfolioValue)}
                  </h5>

                  {/* Allocation Percent Bar */}
                  <div className="mt-6">
                    <span className="text-[9px] text-slate-400 font-bold uppercase block mb-2">
                      Holding Diversification Shares
                    </span>
                    <div className="w-full h-3 rounded-full bg-slate-800 flex overflow-hidden border border-slate-950">
                      <div className="bg-teal-500 h-full" style={{ width: `${portfolioResults.cashShare}%` }} />
                      <div className="bg-blue-500 h-full" style={{ width: `${portfolioResults.equityShare}%` }} />
                      <div className="bg-amber-500 h-full" style={{ width: `${portfolioResults.mutualFundShare}%` }} />
                      <div className="bg-purple-500 h-full" style={{ width: `${portfolioResults.debtShare}%` }} />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 text-[10px] font-bold font-mono text-slate-400">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-teal-500 inline-block"/>Cash: {portfolioResults.cashShare.toFixed(0)}%</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"/>Equity: {portfolioResults.equityShare.toFixed(0)}%</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block"/>MF: {portfolioResults.mutualFundShare.toFixed(0)}%</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block"/>Debt: {portfolioResults.debtShare.toFixed(0)}%</span>
                    </div>
                  </div>
                </div>

                {/* Over compounding diagram */}
                <div className="relative z-10 py-6">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-4">
                    5-Year Compound Portfolio Growth Forecast
                  </span>
                  <div className="h-28 flex items-end justify-between gap-3 pt-4">
                    {portfolioResults.projectionCurve10Y.map((val, i) => {
                      const maxVal = Math.max(...portfolioResults.projectionCurve10Y);
                      const heightPercent = maxVal > 0 ? (val / maxVal) * 100 : 0;
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center group">
                          <div className="text-[9px] font-mono text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity mb-1 font-bold">
                            {formatCurrency(val).replace(' Cr', '').replace(' Lakh', '')}
                          </div>
                          <div
                            style={{ height: `${Math.max(15, heightPercent * 0.7)}px` }}
                            className="w-full bg-gradient-to-t from-teal-800 to-[#14B8A6] rounded-t-lg transition-all duration-300 group-hover:to-amber-400"
                          />
                          <span className="text-[10px] text-slate-500 font-bold mt-2">
                            Yr {i}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative z-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 tracking-wider block uppercase mb-1">
                      Blended Returns Estimate
                    </span>
                    <h6 className="text-[#14B8A6] font-serif font-bold text-sm">
                      Blended asset allocation matches growth benchmarks
                    </h6>
                  </div>
                  <button
                    onClick={() => onSuggestService('Market Portfolio Valuation')}
                    className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-slate-900 font-bold text-xs py-3.5 px-5 rounded-xl flex items-center gap-2 cursor-pointer hover:shadow-lg transition-all"
                  >
                    <span>Audit Portfolio Value</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
