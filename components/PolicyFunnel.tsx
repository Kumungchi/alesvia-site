'use client';
import { useState } from 'react';

interface FunnelDict {
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

export default function PolicyFunnel({ dict }: { dict: FunnelDict }) {
  const [activeNode, setActiveNode] = useState<number | null>(0); // Default to first step open

  const steps = [
    { title: dict.step1_title, desc: dict.step1_desc, icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { title: dict.step2_title, desc: dict.step2_desc, icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { title: dict.step3_title, desc: dict.step3_desc, icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { title: dict.step4_title, desc: dict.step4_desc, icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }
  ];

  return (
    <div className="w-full">
      <h3 className="font-serif text-2xl font-bold text-alesvia-text mb-10">{dict.title}</h3>
      
      <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
        {/* Base Connecting Line (Vertical) */}
        <div className="absolute top-8 bottom-8 left-[31px] md:left-1/2 md:-ml-[1px] w-[2px] bg-alesvia-muted/20 z-0"></div>
        
        {/* Animated flow line indicating processing */}
        <div 
          className="absolute top-8 left-[31px] md:left-1/2 md:-ml-[1px] w-[2px] bg-gradient-to-b from-transparent via-alesvia-accent to-transparent z-0 animate-[pulse_3s_ease-in-out_infinite]"
          style={{ height: '50%', animation: 'slideDown 4s linear infinite' }}
        ></div>

        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeNode === index;

            return (
              <div 
                key={index} 
                onClick={() => setActiveNode(isActive ? null : index)}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-pointer transition-all duration-300 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
              >
                
                {/* Desktop Spacer (for alternating layout) */}
                <div className="hidden md:block flex-1">
                  <div className={`w-full ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                     <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-alesvia-accent' : 'text-alesvia-text group-hover:text-alesvia-accent'}`}>{step.title}</h4>
                     <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                       <p className="text-sm text-alesvia-muted leading-relaxed overflow-hidden">
                         {step.desc}
                       </p>
                     </div>
                  </div>
                </div>

                {/* Icon / Node */}
                <div className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 relative mx-0 md:mx-auto z-10 bg-alesvia-surface
                  ${isActive 
                    ? 'border-2 border-alesvia-accent shadow-[0_0_20px_rgba(235,160,89,0.4)] scale-110' 
                    : 'border-2 border-alesvia-muted/30 group-hover:border-alesvia-accent'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-alesvia-accent/10 scale-125 animate-pulse z-0"></div>
                  )}
                  <svg className={`w-6 h-6 relative z-10 transition-colors duration-300 ${isActive ? 'text-alesvia-accent' : 'text-alesvia-muted group-hover:text-alesvia-accent'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}></path>
                  </svg>
                </div>
                
                {/* Mobile / Alternating Content */}
                <div className="flex-1 md:hidden ml-16 md:ml-0 -mt-16 md:mt-0 pt-4 md:pt-0">
                  <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-alesvia-accent' : 'text-alesvia-text group-hover:text-alesvia-accent'}`}>{step.title}</h4>
                  <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="text-sm text-alesvia-muted leading-relaxed overflow-hidden">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block flex-1"></div>

              </div>
            );
          })}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown {
          0% { top: -10%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}} />
    </div>
  );
}
