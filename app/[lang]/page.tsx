import React from 'react';
import { getDictionary, Locale } from '../../dictionaries';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-statera-bg text-statera-text selection:bg-statera-accent/30 font-sans">
      
      {/* Navigation - Glassmorphism applied */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto border-b border-statera-muted/10 sticky top-0 bg-statera-bg/80 backdrop-blur-md z-50">
        <div className="font-serif text-2xl font-bold tracking-tight text-statera-primary">{dict.nav.brand}</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-statera-muted items-center">
          <a href="#initiatives" className="hover:text-statera-text transition-colors">{dict.nav.initiatives}</a>
          <a href="#philosophy" className="hover:text-statera-text transition-colors">{dict.nav.philosophy}</a>
          <a href="#funding" className="hover:text-statera-text transition-colors">{dict.nav.financing}</a>
          
          <LanguageSwitcher currentLang={lang} />
        </div>
        <button className="hidden md:block text-sm font-semibold bg-statera-primary text-statera-bg px-5 py-2.5 rounded hover:bg-statera-primary/90 transition-all shadow-md">
          {dict.nav.partner}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 fade-in relative">
        
        {/* Abstract 3D Hero Ambient Background */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-tr from-statera-primary/5 to-statera-accent/10 rounded-full blur-3xl -z-10 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"></div>

        {/* Hero Section */}
        <section className="py-24 md:py-32 max-w-4xl relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-statera-primary leading-[1.1] mb-8 drop-shadow-sm">
            {dict.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-statera-muted font-light leading-relaxed mb-10 max-w-2xl">
            {dict.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-statera-primary text-statera-bg px-8 py-4 rounded font-medium hover:bg-statera-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
              {dict.hero.primary_link}
            </button>
            <button className="bg-statera-surface/80 backdrop-blur-sm text-statera-text px-8 py-4 rounded font-medium border border-statera-muted/20 hover:border-statera-accent/50 hover:bg-statera-surface transition-all text-lg">
              {dict.hero.secondary_link}
            </button>
          </div>
        </section>

        {/* Initiatives Ecosystem Section */}
        <section id="initiatives" className="py-20 border-t border-statera-muted/10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-statera-accent mb-4">
                {dict.ecosystem.label}
              </h2>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-statera-text">
                {dict.ecosystem.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Unplugged - Flagship (3D Parallax Hover) */}
            <div className="group bg-statera-white/80 backdrop-blur-sm rounded-xl p-8 border border-statera-primary/10 hover:border-statera-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full lg:col-span-2 relative overflow-hidden">
              <div className="w-12 h-12 bg-statera-primary text-statera-bg rounded flex items-center justify-center font-bold text-xl mb-6 shadow-md relative z-10">
                U
              </div>
              <div className="flex-1 relative z-10">
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="font-serif text-2xl font-bold text-statera-primary">{dict.ecosystem.unplugged_title}</h4>
                  <span className="text-xs font-semibold bg-statera-accent/10 text-statera-accent px-2 py-1 rounded backdrop-blur-md">{dict.ecosystem.status_active}</span>
                </div>
                <p className="text-statera-muted leading-relaxed mb-6">
                  {dict.ecosystem.unplugged_desc}
                </p>
              </div>
              <a href={`/${lang}/initiatives/unplugged`} className="font-medium text-statera-accent group-hover:text-statera-primary transition-colors inline-flex items-center relative z-10">
                {dict.ecosystem.unplugged_link}
              </a>
              {/* Subtle glass effect behind active card */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-statera-accent/5 rounded-full blur-2xl group-hover:bg-statera-accent/10 transition-all duration-500"></div>
            </div>

            {/* Policy Lab */}
            <div className="group bg-statera-surface/50 rounded-xl p-8 border border-statera-muted/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-statera-muted/10 text-statera-muted rounded flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-statera-muted/20 transition-colors">
                P
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="font-serif text-xl font-bold text-statera-text">{dict.ecosystem.policy_title}</h4>
                  <span className="text-xs font-medium text-statera-muted">{dict.ecosystem.status_incubating}</span>
                </div>
                <p className="text-statera-muted text-sm leading-relaxed mb-6">
                  {dict.ecosystem.policy_desc}
                </p>
              </div>
            </div>

            {/* Education Outreach */}
            <div className="group bg-statera-surface/50 rounded-xl p-8 border border-statera-muted/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-statera-muted/10 text-statera-muted rounded flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-statera-muted/20 transition-colors">
                E
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="font-serif text-xl font-bold text-statera-text">{dict.ecosystem.education_title}</h4>
                  <span className="text-xs font-medium text-statera-muted">{dict.ecosystem.status_incubating}</span>
                </div>
                <p className="text-statera-muted text-sm leading-relaxed mb-6">
                  {dict.ecosystem.education_desc}
                </p>
              </div>
            </div>

            {/* Advisory (VC / Startups) - Premium 3D Interaction */}
            <div className="group bg-gradient-to-br from-statera-primary to-[#1A1323] text-statera-bg rounded-xl p-8 border border-statera-primary/20 hover:shadow-2xl hover:-translate-y-2 hover:shadow-statera-primary/30 transition-all duration-500 flex flex-col h-full lg:col-span-2 relative overflow-hidden">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md text-statera-accent rounded flex items-center justify-center font-bold text-xl mb-6 relative z-10 border border-white/5">
                A
              </div>
              <div className="flex-1 relative z-10">
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="font-serif text-2xl font-bold text-statera-bg">{dict.ecosystem.advisory_title}</h4>
                  <span className="text-xs font-medium text-statera-bg/50 border border-statera-bg/20 px-2 py-1 rounded">{dict.ecosystem.status_incubating}</span>
                </div>
                <p className="text-statera-bg/80 leading-relaxed mb-6 font-light">
                  {dict.ecosystem.advisory_desc}
                </p>
              </div>
              {/* Premium abstract 3D glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-statera-accent/10 rounded-full blur-3xl group-hover:bg-statera-accent/20 transition-all duration-1000 -mr-10 -mt-10"></div>
            </div>

          </div>
        </section>

        {/* Financing structure block */}
        <section id="funding" className="py-24">
          <div className="group bg-[#0F2C59] text-statera-bg rounded-2xl p-10 md:p-16 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/5">
            
            {/* Subtle decorative background element */}
            <div className="absolute top-0 right-0 p-32 bg-statera-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-statera-accent/20 transition-all duration-1000 scale-110"></div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-statera-accent mb-4">
                {dict.financing.label}
              </h2>
              <h3 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                {dict.financing.title}
              </h3>
              <p className="text-statera-white/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
                {dict.financing.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-statera-accent text-statera-text font-semibold px-8 py-4 rounded hover:bg-statera-accent/90 transition-transform hover:scale-105 shadow-md">
                  {dict.financing.primary_link}
                </button>
                <button className="bg-transparent backdrop-blur-sm border border-statera-white/20 text-statera-white font-medium px-8 py-4 rounded hover:bg-statera-white/10 transition-colors">
                  {dict.financing.secondary_link}
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-statera-muted/10 py-12 mt-12 bg-statera-surface/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-statera-muted">
          <p>&copy; {new Date().getFullYear()} {dict.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-statera-text transition-colors">{dict.footer.privacy}</a>
            <a href="#" className="hover:text-statera-text transition-colors">{dict.footer.terms}</a>
            <a href="#" className="hover:text-statera-text transition-colors">{dict.footer.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
