/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // Lucide icon name
  description: string;
  keyPoints: string[];
  vCFOEquivalent: string; // How Virtual CFO helps in this specific domain
  benefits: string[];
  processSteps: string[];
}

export interface PortfolioInputs {
  companyName: string;
  annualRevenue: number;
  operatingCosts: number;
  totalAssets: number;
  totalLiabilities: number;
  cashEquivalent: number;
  expectedGrowthRate: number; // percentage
}

export interface ValuationMetrics {
  netWorth: number;
  operatingMargin: number; // percentage
  debtToEquity: number;
  currentRatio: number; // cash/liquidity indicator
  estimatedValue: number; // Multiple based valuation
  projectedValue5Y: number[]; // 5 years curve
}

export interface ChecklistItem {
  id: string;
  category: 'legal' | 'financial' | 'governance' | 'operations';
  task: string;
  description: string;
  completed: boolean;
  weight: number; // relative importance
}

export interface ConsultationInquiry {
  id: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceDesired: string;
  message: string;
  submittedAt: string;
  status: 'Pending Discovery' | 'CFO Scheduled' | 'Resolved';
}

export interface CaseStudy {
  id: string;
  clientType: string;
  serviceCovered: string;
  challenge: string;
  solution: string;
  result: string;
  capitalRaised?: string;
  valuationIncrease?: string;
}
