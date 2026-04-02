import { getDictionary, Locale } from '../../dictionaries';
import SectionLabel from '../../components/SectionLabel';
import HeroBackground from '../../components/HeroBackground';
import TiltCard from '../../components/TiltCard';
import SpotlightCard from '../../components/SpotlightCard';
import ScrollReveal from '../../components/ScrollReveal';
import JsonLd from '../../components/JsonLd';
import Link from 'next/link';
import { getPublicPath } from '../../lib/routes';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-alesvia-bg text-alesvia-text selection:bg-alesvia-accent/30 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

        <HeroBackground />

        {/* ── Hero Section ── */}
        <section className="py-28 md:py-40 max-w-4xl relative z-10 fade-in">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient leading-[1.05] mb-8">
            {dict.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-alesvia-muted font-light leading-relaxed mb-12 max-w-2xl">
            {dict.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={getPublicPath(lang, 'initiatives')}
              className="btn-primary bg-alesvia-primary text-alesvia-bg px-8 py-4 rounded-lg font-medium text-lg text-center"
            >
              {dict.hero.primary_link}
            </Link>
            <Link
              href={getPublicPath(lang, 'about')}
              className="glass text-alesvia-text px-8 py-4 rounded-lg font-medium hover:border-alesvia-accent/50 transition-all text-lg text-center hover:-translate-y-0.5"
            >
              {dict.hero.secondary_link}
            </Link>
          </div>
        </section>

        {/* ── Initiatives — Bento Grid ── */}
        <ScrollReveal>
          <section id="initiatives" className="py-20 border-t border-alesvia-muted/10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
              <div className="max-w-2xl">
                <SectionLabel>{dict.ecosystem.label}</SectionLabel>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-alesvia-text">
                  {dict.ecosystem.title}
                </h3>
              </div>
            </div>

            <div className="bento-grid">

              {/* Unplugged — Flagship (2x2) */}
              <TiltCard intensity={5}>
                <SpotlightCard className="h-full">
                  <div className="gradient-border h-full">
                    <div className="glass shimmer inner-light rounded-xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
                      <div className="w-14 h-14 bg-alesvia-primary text-alesvia-bg rounded-xl flex items-center justify-center font-bold text-2xl mb-6 shadow-lg">
                        U
                      </div>
                      <div className="flex-1 tilt-card-inner">
                        <div className="flex justify-between items-baseline mb-3">
                          <h4 className="font-serif text-2xl md:text-3xl font-bold text-alesvia-primary">{dict.ecosystem.unplugged_title}</h4>
                          <span className="text-xs font-semibold bg-alesvia-accent/10 text-alesvia-accent px-3 py-1.5 rounded-full">{dict.ecosystem.status_active}</span>
                        </div>
                        <p className="text-alesvia-muted leading-relaxed mb-8 text-lg font-light">{dict.ecosystem.unplugged_desc}</p>
                      </div>
                      <Link href={getPublicPath(lang, 'initiativeUnplugged')} className="link-animated font-medium text-alesvia-accent hover:text-alesvia-primary transition-colors inline-flex items-center gap-2">
                        {dict.ecosystem.unplugged_link}
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>

              {/* Policy Lab */}
              <ScrollReveal delay={1}>
                <TiltCard intensity={8}>
                  <SpotlightCard className="h-full">
                    <div className="glass inner-light rounded-xl p-8 h-full flex flex-col group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-alesvia-muted/10 text-alesvia-muted rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-alesvia-primary/10 group-hover:text-alesvia-primary transition-colors duration-300">
                        P
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-3">
                          <h4 className="font-serif text-xl font-bold text-alesvia-text">{dict.ecosystem.policy_title}</h4>
                          <span className="text-xs font-medium text-alesvia-muted">{dict.ecosystem.status_incubating}</span>
                        </div>
                        <p className="text-alesvia-muted text-sm leading-relaxed">{dict.ecosystem.policy_desc}</p>
                      </div>
                      <Link href={getPublicPath(lang, 'initiativePolicyLab')} className="mt-6 link-animated font-medium text-sm text-alesvia-muted hover:text-alesvia-accent transition-colors">
                        {lang === 'cs' ? 'Více →' : 'Learn more →'}
                      </Link>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>

              {/* Education */}
              <ScrollReveal delay={2}>
                <TiltCard intensity={8}>
                  <SpotlightCard className="h-full">
                    <div className="glass inner-light rounded-xl p-8 h-full flex flex-col group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-alesvia-muted/10 text-alesvia-muted rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-alesvia-primary/10 group-hover:text-alesvia-primary transition-colors duration-300">
                        E
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-3">
                          <h4 className="font-serif text-xl font-bold text-alesvia-text">{dict.ecosystem.education_title}</h4>
                          <span className="text-xs font-medium text-alesvia-muted">{dict.ecosystem.status_incubating}</span>
                        </div>
                        <p className="text-alesvia-muted text-sm leading-relaxed">{dict.ecosystem.education_desc}</p>
                      </div>
                      <Link href={getPublicPath(lang, 'initiativeEducation')} className="mt-6 link-animated font-medium text-sm text-alesvia-muted hover:text-alesvia-accent transition-colors">
                        {lang === 'cs' ? 'Více →' : 'Learn more →'}
                      </Link>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>

              {/* Advisory — Premium dark (2-col span) */}
              <ScrollReveal delay={3}>
                <TiltCard intensity={5}>
                  <SpotlightCard className="h-full">
                    <div className="glass-dark inner-light rounded-xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden group">
                      <div className="w-14 h-14 bg-white/10 text-alesvia-accent rounded-xl flex items-center justify-center font-bold text-2xl mb-6 border border-white/5">
                        A
                      </div>
                      <div className="flex-1 tilt-card-inner">
                        <div className="flex justify-between items-baseline mb-3">
                          <h4 className="font-serif text-2xl font-bold text-alesvia-bg">{dict.ecosystem.advisory_title}</h4>
                          <span className="text-xs font-medium text-alesvia-bg/50 border border-alesvia-bg/20 px-3 py-1.5 rounded-full">{dict.ecosystem.status_incubating}</span>
                        </div>
                        <p className="text-alesvia-bg/80 leading-relaxed font-light text-lg">{dict.ecosystem.advisory_desc}</p>
                      </div>
                      <Link href={getPublicPath(lang, 'initiativeAdvisory')} className="mt-6 link-animated font-medium text-alesvia-accent hover:text-alesvia-bg transition-colors inline-flex items-center gap-2">
                        {lang === 'cs' ? 'Více →' : 'Learn more →'}
                      </Link>
                      <div className="absolute top-0 right-0 w-72 h-72 bg-alesvia-accent/8 rounded-full blur-3xl group-hover:bg-alesvia-accent/15 transition-all duration-1000 -mr-12 -mt-12" />
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>

              {/* ── New Initiatives (Planned) ── */}

              {/* Mind */}
              <ScrollReveal delay={1}>
                <TiltCard intensity={8}>
                  <SpotlightCard className="h-full">
                    <div className="glass inner-light rounded-xl p-8 h-full flex flex-col group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-alesvia-muted/10 text-alesvia-muted rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-alesvia-primary/10 group-hover:text-alesvia-primary transition-colors duration-300">
                        M
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-3">
                          <h4 className="font-serif text-xl font-bold text-alesvia-text">{dict.ecosystem.mind_title}</h4>
                          <span className="text-xs font-medium text-alesvia-muted/60">{dict.ecosystem.status_planned}</span>
                        </div>
                        <p className="text-alesvia-muted text-sm leading-relaxed">{dict.ecosystem.mind_desc}</p>
                      </div>
                      <Link href={getPublicPath(lang, 'initiativeMind')} className="mt-6 link-animated font-medium text-sm text-alesvia-muted hover:text-alesvia-accent transition-colors">
                        {lang === 'cs' ? 'Více →' : 'Learn more →'}
                      </Link>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>

              {/* Proof */}
              <ScrollReveal delay={2}>
                <TiltCard intensity={8}>
                  <SpotlightCard className="h-full">
                    <div className="glass inner-light rounded-xl p-8 h-full flex flex-col group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-alesvia-muted/10 text-alesvia-muted rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-alesvia-primary/10 group-hover:text-alesvia-primary transition-colors duration-300">
                        Pr
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-3">
                          <h4 className="font-serif text-xl font-bold text-alesvia-text">{dict.ecosystem.proof_title}</h4>
                          <span className="text-xs font-medium text-alesvia-muted/60">{dict.ecosystem.status_planned}</span>
                        </div>
                        <p className="text-alesvia-muted text-sm leading-relaxed">{dict.ecosystem.proof_desc}</p>
                      </div>
                      <Link href={getPublicPath(lang, 'initiativeProof')} className="mt-6 link-animated font-medium text-sm text-alesvia-muted hover:text-alesvia-accent transition-colors">
                        {lang === 'cs' ? 'Více →' : 'Learn more →'}
                      </Link>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>

              {/* Compass */}
              <ScrollReveal delay={3}>
                <TiltCard intensity={8}>
                  <SpotlightCard className="h-full">
                    <div className="glass inner-light rounded-xl p-8 h-full flex flex-col group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-alesvia-muted/10 text-alesvia-muted rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-alesvia-primary/10 group-hover:text-alesvia-primary transition-colors duration-300">
                        C
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-3">
                          <h4 className="font-serif text-xl font-bold text-alesvia-text">{dict.ecosystem.compass_title}</h4>
                          <span className="text-xs font-medium text-alesvia-muted/60">{dict.ecosystem.status_planned}</span>
                        </div>
                        <p className="text-alesvia-muted text-sm leading-relaxed">{dict.ecosystem.compass_desc}</p>
                      </div>
                      <Link href={getPublicPath(lang, 'initiativeCompass')} className="mt-6 link-animated font-medium text-sm text-alesvia-muted hover:text-alesvia-accent transition-colors">
                        {lang === 'cs' ? 'Více →' : 'Learn more →'}
                      </Link>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>

              {/* Watch */}
              <ScrollReveal delay={4}>
                <TiltCard intensity={8}>
                  <SpotlightCard className="h-full">
                    <div className="glass inner-light rounded-xl p-8 h-full flex flex-col group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-alesvia-muted/10 text-alesvia-muted rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-alesvia-primary/10 group-hover:text-alesvia-primary transition-colors duration-300">
                        W
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-3">
                          <h4 className="font-serif text-xl font-bold text-alesvia-text">{dict.ecosystem.watch_title}</h4>
                          <span className="text-xs font-medium text-alesvia-muted/60">{dict.ecosystem.status_planned}</span>
                        </div>
                        <p className="text-alesvia-muted text-sm leading-relaxed">{dict.ecosystem.watch_desc}</p>
                      </div>
                      <Link href={getPublicPath(lang, 'initiativeWatch')} className="mt-6 link-animated font-medium text-sm text-alesvia-muted hover:text-alesvia-accent transition-colors">
                        {lang === 'cs' ? 'Více →' : 'Learn more →'}
                      </Link>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>

            </div>
          </section>
        </ScrollReveal>

        {/* ── Financing Block ── */}
        <ScrollReveal>
          <section id="funding" className="py-24">
            <TiltCard intensity={3}>
              <SpotlightCard>
                <div className="group bg-[#0F2C59] text-alesvia-bg rounded-2xl p-10 md:p-16 relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-alesvia-trust/20 transition-all duration-500 border border-white/5 shimmer inner-light">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-alesvia-accent/8 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-alesvia-accent/15 transition-all duration-1000" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-alesvia-primary/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
                  <div className="relative z-10 max-w-3xl tilt-card-inner">
                    <SectionLabel>{dict.financing.label}</SectionLabel>
                    <h3 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                      {dict.financing.title}
                    </h3>
                    <p className="text-alesvia-white/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
                      {dict.financing.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={getPublicPath(lang, 'funding')} className="btn-primary bg-alesvia-accent text-alesvia-text font-semibold px-8 py-4 rounded-lg text-center">
                        {dict.financing.primary_link}
                      </Link>
                      <Link href={getPublicPath(lang, 'contact')} className="bg-transparent border border-alesvia-white/20 text-alesvia-white font-medium px-8 py-4 rounded-lg hover:bg-alesvia-white/10 transition-colors text-center">
                        {dict.financing.secondary_link}
                      </Link>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </section>
        </ScrollReveal>

        {/* ── FAQ Section (GEO-optimized) ── */}
        <ScrollReveal>
          <section id="faq" className="py-20 border-t border-alesvia-muted/10">
            <SectionLabel>{dict.faq.label}</SectionLabel>
            <div className="space-y-4 mt-8 max-w-3xl">
              {dict.faq.items.map((item: { question: string; answer: string }, i: number) => (
                <ScrollReveal key={i} delay={i < 4 ? (i + 1) as 1 | 2 | 3 | 4 : 0}>
                  <details className="group glass rounded-xl overflow-hidden">
                    <summary className="cursor-pointer p-6 font-serif text-lg font-bold text-alesvia-text flex justify-between items-center hover:bg-alesvia-surface/50 transition-colors">
                      {item.question}
                      <span className="faq-icon text-alesvia-accent text-xl ml-4 shrink-0 font-sans font-light">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-alesvia-muted leading-relaxed border-t border-alesvia-muted/10 pt-4">
                      {item.answer}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* JSON-LD: FAQPage schema for GEO */}
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: dict.faq.items.map((item: { question: string; answer: string }) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }} />

      </div>
    </div>
  );
}
