'use client';
import { useState } from 'react';

interface FlowchartDict {
  title: string;
  step1_title: string;
  step1_desc: string;
  step2_title: string;
  step2_desc: string;
  step3_title: string;
  step3_desc: string;
  step4_title: string;
  step4_desc: string;
}

export default function CompassFlowchart({ dict }: { dict: FlowchartDict }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: dict.step1_title, desc: dict.step1_desc, icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
    { title: dict.step2_title, desc: dict.step2_desc, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: dict.step3_title, desc: dict.step3_desc, icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { title: dict.step4_title, desc: dict.step4_desc, icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
  ];

  return (
    <div className="w-full">
      <h3 className="font-serif text-2xl font-bold text-alesvia-text mb-10">{dict.title}</h3>
      
      <div className="relative">
        {/* Base Connecting Line */}
        <div className="absolute top-0 bottom-0 left-[27px] lg:left-0 lg:top-[27px] lg:bottom-auto lg:w-full w-[2px] lg:h-[2px] bg-alesvia-muted/20 z-0"></div>
        
        {/* Active Progress Line */}
        <div 
          className="absolute top-0 left-[27px] lg:left-0 lg:top-[27px] w-[2px] lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-r from-alesvia-primary via-alesvia-accent to-alesvia-accent shadow-[0_0_8px_rgba(235,160,89,0.5)] z-0 transition-all duration-500 ease-out"
          style={{ 
            height: '100%', // Mobile is overridden by tailwind if we used logic, but let's just use inline style for dynamic width/height
            maxHeight: typeof window !== 'undefined' && window.innerWidth < 1024 ? `${(activeStep / (steps.length - 1)) * 100}%` : '100%',
            maxWidth: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${(activeStep / (steps.length - 1)) * 100}%` : '2px',
          }}
        />
        {/* Tailwind alternative for the active line without relying on window.innerWidth in render: */}
        <div 
          className="absolute top-0 bottom-auto left-[27px] lg:left-0 lg:top-[27px] w-[2px] lg:w-auto lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-r from-alesvia-primary via-alesvia-accent to-alesvia-accent shadow-[0_0_8px_rgba(235,160,89,0.5)] z-0 transition-all duration-500 ease-out block lg:hidden"
          style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>
        <div 
          className="absolute top-[27px] bottom-auto left-0 h-[2px] bg-gradient-to-r from-alesvia-primary via-alesvia-accent to-alesvia-accent shadow-[0_0_8px_rgba(235,160,89,0.5)] z-0 transition-all duration-500 ease-out hidden lg:block"
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>


        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;

            return (
              <div 
                key={index} 
                onClick={() => setActiveStep(index)}
                className={`flex lg:flex-col items-start gap-6 lg:gap-6 group cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100 scale-[1.02]' : 'opacity-60 hover:opacity-80'}`}
              >
                
                {/* Icon / Node */}
                <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 relative bg-alesvia-surface
                  ${isActive 
                    ? 'border-2 border-alesvia-accent shadow-[0_0_20px_rgba(235,160,89,0.4)]' 
                    : isCompleted 
                      ? 'border-2 border-alesvia-accent/50 text-alesvia-accent' 
                      : 'border-2 border-alesvia-muted/30 text-alesvia-muted'
                  }`}
                >
                  {/* Outer subtle pulse for active */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-alesvia-accent/10 scale-125 animate-pulse z-0"></div>
                  )}
                  <svg className={`w-6 h-6 relative z-10 transition-colors duration-300 ${isActive || isCompleted ? 'text-alesvia-accent' : 'text-alesvia-muted'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}></path>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex-1 lg:mt-2">
                  <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-alesvia-accent' : 'text-alesvia-text'}`}>
                    {step.title}
                  </h4>
                  <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 lg:grid-rows-[1fr] lg:opacity-100'}`}>
                    <p className={`text-sm text-alesvia-muted leading-relaxed overflow-hidden transition-all duration-500 ${!isActive && 'lg:h-10 lg:line-clamp-2'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
