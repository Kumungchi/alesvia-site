'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SaaSDemoDict {
  step1_title: string;
  step1_desc: string;
  field_system_type: string;
  opt_ecommerce: string;
  opt_tutor: string;
  opt_customer_service: string;
  opt_healthcare: string;
  field_deployment: string;
  opt_eu: string;
  opt_us: string;
  opt_global: string;
  field_feature: string;
  opt_decision: string;
  opt_generation: string;
  opt_persuasion: string;
  btn_run: string;
  running: string;
  step2_title: string;
  step2_desc: string;
  res_risk_tier: string;
  res_high_risk: string;
  res_limited_risk: string;
  res_autonomy_score: string;
  res_flags: string;
  flag_1: string;
  flag_2: string;
  flag_3: string;
  res_remediation: string;
  task_1: string;
  task_2: string;
  task_3: string;
  upsell_title: string;
  upsell_desc: string;
  btn_sales: string;
}

export default function CompassSaaSDemo({ dict, contactHref }: { dict: SaaSDemoDict, contactHref: string }) {
  const [step, setStep] = useState<'form' | 'scanning' | 'results'>('form');

  const handleRun = () => {
    setStep('scanning');
    setTimeout(() => {
      setStep('results');
    }, 2500); // Simulate 2.5s scan time
  };

  const handleReset = () => {
    setStep('form');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0F2C59] border border-alesvia-accent/20 rounded-2xl overflow-hidden shadow-2xl relative">
      
      {/* Step 1: The Intake Form */}
      {step === 'form' && (
        <div className="p-8 md:p-12 relative z-10 animate-in fade-in zoom-in duration-500">
          <div className="mb-10">
            <h3 className="text-3xl font-serif font-bold text-alesvia-bg mb-3">{dict.step1_title}</h3>
            <p className="text-alesvia-bg/80 text-lg font-light">{dict.step1_desc}</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-alesvia-bg/70 mb-2">{dict.field_system_type}</label>
              <select className="w-full bg-black/20 border border-white/10 text-alesvia-bg rounded-lg p-4 focus:ring-2 focus:ring-alesvia-accent/50 outline-none appearance-none font-medium">
                <option>{dict.opt_ecommerce}</option>
                <option>{dict.opt_tutor}</option>
                <option>{dict.opt_customer_service}</option>
                <option>{dict.opt_healthcare}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-alesvia-bg/70 mb-2">{dict.field_deployment}</label>
              <select className="w-full bg-black/20 border border-white/10 text-alesvia-bg rounded-lg p-4 focus:ring-2 focus:ring-alesvia-accent/50 outline-none appearance-none font-medium">
                <option>{dict.opt_eu}</option>
                <option>{dict.opt_us}</option>
                <option>{dict.opt_global}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-alesvia-bg/70 mb-2">{dict.field_feature}</label>
              <select className="w-full bg-black/20 border border-white/10 text-alesvia-bg rounded-lg p-4 focus:ring-2 focus:ring-alesvia-accent/50 outline-none appearance-none font-medium">
                <option>{dict.opt_persuasion}</option>
                <option>{dict.opt_decision}</option>
                <option>{dict.opt_generation}</option>
              </select>
            </div>

            <button 
              onClick={handleRun}
              className="w-full mt-8 bg-alesvia-accent text-alesvia-text font-bold text-lg py-4 rounded-lg hover:bg-alesvia-accent/90 transition-all hover:shadow-[0_0_20px_rgba(202,159,102,0.3)]"
            >
              {dict.btn_run}
            </button>
          </div>
        </div>
      )}

      {/* Scanning State */}
      {step === 'scanning' && (
        <div className="p-20 flex flex-col items-center justify-center min-h-[500px] animate-in fade-in duration-300">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-alesvia-accent/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-alesvia-accent rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-alesvia-accent font-bold text-2xl">C</span>
            </div>
          </div>
          <h3 className="text-2xl font-serif text-alesvia-bg animate-pulse">{dict.running}</h3>
        </div>
      )}

      {/* Step 2: The Assessment Results */}
      {step === 'results' && (
        <div className="animate-in slide-in-from-bottom-8 fade-in duration-700">
          
          <div className="p-8 md:p-12 border-b border-white/5 bg-black/10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-alesvia-bg mb-2">{dict.step2_title}</h3>
                <p className="text-alesvia-bg/80 text-lg">{dict.step2_desc}</p>
              </div>
              <button onClick={handleReset} className="text-alesvia-bg/50 hover:text-alesvia-bg text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Reset
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <p className="text-red-400 text-sm font-bold uppercase tracking-wider mb-2">{dict.res_risk_tier}</p>
                <p className="text-alesvia-bg text-xl font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  {dict.res_high_risk}
                </p>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">{dict.res_autonomy_score}</p>
                <div className="flex items-end gap-3">
                  <p className="text-alesvia-bg text-4xl font-bold font-serif">42</p>
                  <p className="text-alesvia-bg/50 text-lg mb-1">/ 100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Red Flags */}
            <div>
              <h4 className="text-xl font-serif font-bold text-alesvia-bg mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-red-500/20 text-red-500 flex items-center justify-center text-sm">!</span>
                {dict.res_flags}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <p className="text-alesvia-bg/80 leading-relaxed text-sm">{dict.flag_1}</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <p className="text-alesvia-bg/80 leading-relaxed text-sm">{dict.flag_2}</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <p className="text-alesvia-bg/80 leading-relaxed text-sm">{dict.flag_3}</p>
                </li>
              </ul>
            </div>

            {/* Remediation */}
            <div>
              <h4 className="text-xl font-serif font-bold text-alesvia-bg mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-green-500/20 text-green-500 flex items-center justify-center text-sm">✓</span>
                {dict.res_remediation}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-3 bg-black/20 rounded-lg border border-white/5">
                  <span className="w-5 h-5 rounded border border-white/20 mt-0.5 shrink-0"></span>
                  <p className="text-alesvia-bg/90 leading-relaxed text-sm font-medium">{dict.task_1}</p>
                </li>
                <li className="flex items-start gap-3 p-3 bg-black/20 rounded-lg border border-white/5">
                  <span className="w-5 h-5 rounded border border-white/20 mt-0.5 shrink-0"></span>
                  <p className="text-alesvia-bg/90 leading-relaxed text-sm font-medium">{dict.task_2}</p>
                </li>
                <li className="flex items-start gap-3 p-3 bg-black/20 rounded-lg border border-white/5">
                  <span className="w-5 h-5 rounded border border-white/20 mt-0.5 shrink-0"></span>
                  <p className="text-alesvia-bg/90 leading-relaxed text-sm font-medium">{dict.task_3}</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Upsell CTA */}
          <div className="bg-alesvia-accent p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-alesvia-text max-w-xl">
              <h4 className="text-xl font-serif font-bold mb-2">{dict.upsell_title}</h4>
              <p className="text-alesvia-text/80 font-medium">{dict.upsell_desc}</p>
            </div>
            <Link href={contactHref} className="bg-alesvia-text text-alesvia-bg font-bold px-8 py-4 rounded-lg whitespace-nowrap hover:bg-alesvia-text/90 transition-colors">
              {dict.btn_sales}
            </Link>
          </div>

        </div>
      )}

      {/* Decorative Blur */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-alesvia-accent/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
