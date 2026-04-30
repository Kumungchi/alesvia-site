'use client';

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
        {/* Connecting Line (Vertical on mobile, horizontal on lg screens) */}
        <div className="absolute top-0 bottom-0 left-[27px] lg:left-0 lg:top-[27px] lg:bottom-auto lg:w-full w-[2px] lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-r from-alesvia-accent/20 via-alesvia-accent/40 to-alesvia-primary/20 z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex lg:flex-col items-start gap-6 lg:gap-6 group">
              
              {/* Icon / Node */}
              <div className="w-14 h-14 shrink-0 rounded-full bg-alesvia-surface border-2 border-alesvia-accent/30 flex items-center justify-center shadow-lg group-hover:border-alesvia-accent group-hover:shadow-alesvia-accent/20 transition-all duration-300 relative">
                {/* Outer subtle pulse */}
                <div className="absolute inset-0 rounded-full bg-alesvia-accent/5 scale-100 group-hover:scale-125 transition-transform duration-500 z-0"></div>
                <svg className="w-6 h-6 text-alesvia-accent relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}></path>
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1 lg:mt-2">
                <h4 className="text-lg font-bold text-alesvia-text mb-2 group-hover:text-alesvia-accent transition-colors">{step.title}</h4>
                <p className="text-sm text-alesvia-muted leading-relaxed">{step.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
