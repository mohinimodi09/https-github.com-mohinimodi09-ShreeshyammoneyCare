/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { COMPLIANCE_CHECKLIST_PRESETS } from '../data/servicesData';
import { ChecklistItem } from '../types';
import { CheckSquare, Square, Award, Percent, Milestone, HelpCircle, ArrowRight } from 'lucide-react';

interface ReadinessChecklistProps {
  onTriggerContact: (service: string, extraNote: string) => void;
}

export default function ReadinessChecklist({ onTriggerContact }: ReadinessChecklistProps) {
  const [items, setItems] = useState<ChecklistItem[]>(COMPLIANCE_CHECKLIST_PRESETS);

  // Toggle checklist state
  const handleToggle = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  // Select/Unselect All
  const handleSelectAll = (select: boolean) => {
    setItems((prev) => prev.map((item) => ({ ...item, completed: select })));
  };

  // Calculate Weighted score
  const readinessResults = useMemo(() => {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    const completedWeight = items
      .filter((item) => item.completed)
      .reduce((sum, item) => sum + item.weight, 0);

    const score = totalWeight > 0 ? (completedWeight / totalWeight) * 100 : 0;
    const completedCount = items.filter((item) => item.completed).length;

    // Dynamic advice guidelines based on real-time interactive calculations
    let scoreVibe = 'teal';
    let title = 'Critical Grooming Stage';
    let description =
       'Your compliance index suggests significant statutory or internal audit risks. Releasing an IPO or securing large-scale syndicated bank credit at this phase will incur heavy transaction cost penalties or prompt regulatory reviews. Let us groom your ledger.';
    let primaryAction = 'Initiate Financial Alignment';
    let serviceRoute = 'IPO Services';

    if (score >= 40 && score < 75) {
      scoreVibe = 'emerald';
      title = 'Structured Transition Phase';
      description =
        'You have mapped out solid foundational registers. However, certain high-priority board governance structures or five-year projection models are still absent. We advise conducting custom transactional dry-runs.';
      primaryAction = 'Conduct Advanced Due Diligence Check';
      serviceRoute = 'Due Diligence';
    } else if (score >= 75) {
      scoreVibe = 'amber';
      title = 'Institutional Investment Ready';
      description =
        'Superb! Your corporate records reflect premier regulatory hygiene and internal reporting governance. You are structurally primed for massive growth initiatives—either active IPO listings, or private bank syndicated consortiums.';
      primaryAction = 'Draft IPO Red Herring Filing';
      serviceRoute = 'IPO Services';
    }

    return {
      score,
      completedCount,
      scoreVibe,
      title,
      description,
      primaryAction,
      serviceRoute
    };
  }, [items]);

  return (
    <div id="re-readiness-calculator" className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 sm:p-8 lg:p-10">
      <div className="mb-8 border-b border-slate-150 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-slate-900 tracking-tight font-serif flex items-center gap-2">
            <Milestone className="w-5 h-5 text-teal-600" />
            IPO & Loan Readiness Index Calculator
          </h4>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Toggle your corporate parameters to calculate an institutional valuation capability.
          </p>
        </div>

        {/* Action Convenience Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleSelectAll(true)}
            className="text-xxs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg border border-teal-100 cursor-pointer transition-colors"
          >
            Select All
          </button>
          <button
            onClick={() => handleSelectAll(false)}
            className="text-xxs font-bold text-slate-500 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 cursor-pointer transition-colors"
          >
            Reset List
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Checkbox List (7 cols) */}
        <div className="lg:col-span-7 space-y-3.5 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleToggle(item.id)}
              className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 group ${
                item.completed
                  ? 'bg-teal-50/40 border-teal-500/30 shadow-sm'
                  : 'bg-white border-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {item.completed ? (
                  <CheckSquare className="w-5 h-5 text-teal-600" />
                ) : (
                  <Square className="w-5 h-5 text-slate-300 group-hover:text-slate-400" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`text-sm font-bold transition-colors ${
                      item.completed ? 'text-slate-900 font-bold' : 'text-slate-700'
                    }`}
                  >
                    {item.task}
                  </span>
                  <span className="text-[9px] font-bold font-sans uppercase bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Score Results Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-slate-900 border border-slate-950 p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[400px]">
            {/* Ambient Background Gold Overlay */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Award className="w-24 h-24 text-amber-400" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <span className="text-[10px] font-bold font-mono tracking-widest text-[#14B8A6] uppercase">
                  COMPLIANCE COEFFICIENT
                </span>
                
                {/* Real-time calculated Dial */}
                <div className="flex items-center justify-center my-4">
                  <div className="relative w-28 h-28 rounded-full border-4 border-slate-800 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-white font-serif">
                      {Math.round(readinessResults.score)}%
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-wider mt-0.5">
                      ACCURACY
                    </span>
                  </div>
                </div>

                <div className="text-teal-400 text-xs font-semibold">
                  {readinessResults.completedCount} of {items.length} Pillars Consolidated
                </div>
              </div>

              {/* Status block */}
              <div className="border-t border-slate-800 pt-6 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="font-bold text-xs uppercase text-emerald-400 tracking-wider">
                    {readinessResults.title}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {readinessResults.description}
                </p>
              </div>
            </div>

            {/* Core trigger button based on calculations */}
            <div className="relative z-10 pt-4 border-t border-slate-800">
              <button
                onClick={() =>
                  onTriggerContact(
                    readinessResults.serviceRoute,
                    `Requested customized roadmap from compliance index. Score achieved: ${Math.round(
                      readinessResults.score
                    )}% (${readinessResults.completedCount}/${items.length} documents compiled).`
                  )
                }
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-600 hover:to-emerald-500 text-slate-900 font-bold text-xs py-3.5 px-4 rounded-xl shadow-lg transition-transform duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{readinessResults.primaryAction}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center mt-3 text-[9px] font-medium text-slate-500">
                Liaison with qualified Chartered Accountants & regulatory experts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
