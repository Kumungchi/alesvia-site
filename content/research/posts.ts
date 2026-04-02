import 'server-only';

export interface ResearchPost {
  slug: string;
  date: string;
  initiative: string;
  tags: string[];
  title: { en: string; cs: string };
  excerpt: { en: string; cs: string };
  body: { en: string; cs: string };
}

const posts: ResearchPost[] = [
  {
    slug: 'why-ai-literacy-matters-more-than-ai-regulation',
    date: '2026-04-01',
    initiative: 'proof',
    tags: ['ai-literacy', 'eu-ai-act', 'education'],
    title: {
      en: 'Why AI Literacy Matters More Than AI Regulation',
      cs: 'Proč je AI gramotnost důležitější než regulace AI',
    },
    excerpt: {
      en: 'The EU AI Act mandates AI literacy under Article 4, but most organizations have no idea what that means in practice. Here\'s our framework for getting it right.',
      cs: 'EU AI Act vyžaduje AI gramotnost podle článku 4, ale většina organizací netuší, co to v praxi znamená. Představujeme náš rámec pro správné pojetí.',
    },
    body: {
      en: `The EU AI Act's Article 4 requires organizations deploying AI systems to ensure "a sufficient level of AI literacy" among their staff. This is a landmark provision — the first time a major regulatory framework has made AI understanding a legal obligation rather than a nice-to-have.

But here's the problem: nobody agrees on what "sufficient AI literacy" actually means.

## The Regulation Gap

Most compliance discussions focus on technical requirements — risk assessments, conformity procedures, documentation. These are important. But they miss the human layer entirely.

A risk assessment is only as good as the person conducting it. A conformity procedure is only meaningful if the people following it understand why each step matters. Documentation is performative if nobody reads it with genuine comprehension.

## What AI Literacy Actually Requires

At Alesvia Proof, we define AI literacy through three layers:

**1. Conceptual understanding** — How do AI systems make decisions? What are their limitations? Where do they fail predictably?

**2. Contextual judgment** — Given my specific role and domain, where should I trust AI outputs and where should I apply human oversight?

**3. Ethical awareness** — What are the societal implications of the AI systems I interact with? Who benefits, who's harmed, and what power dynamics are at play?

Most "AI training" programs stop at layer one. They teach employees what a neural network is. This is necessary but wildly insufficient.

## A Path Forward

Organizations need to move beyond checkbox training. AI literacy is not a one-time certification — it's an ongoing practice, like cybersecurity awareness.

We're developing curricula that embed AI literacy into existing professional development, rather than treating it as a separate, disconnected requirement. The goal is professionals who can think critically about AI in the context of their actual work.

The EU AI Act gave us the mandate. Now we need to build the infrastructure to deliver on it.`,
      cs: `Článek 4 EU AI Act vyžaduje, aby organizace nasazující AI systémy zajistily „dostatečnou úroveň AI gramotnosti" svých zaměstnanců. Jedná se o přelomové ustanovení — poprvé velký regulační rámec učinil porozumění AI právní povinností, nikoliv jen příjemným bonusem.

Problém je však v tom, že nikdo se neshodne na tom, co „dostatečná AI gramotnost" vlastně znamená.

## Mezera v regulaci

Většina diskusí o souladu se zaměřuje na technické požadavky — hodnocení rizik, postupy shody, dokumentaci. To je důležité. Ale zcela se tím pomíjí lidská vrstva.

Hodnocení rizik je jen tak dobré, jak dobrý je člověk, který ho provádí. Postup shody má smysl pouze tehdy, pokud lidé, kteří ho dodržují, chápou, proč je každý krok důležitý. Dokumentace je pouhá formalita, pokud ji nikdo nečte se skutečným porozuměním.

## Co AI gramotnost skutečně vyžaduje

V Alesvia Proof definujeme AI gramotnost prostřednictvím tří vrstev:

**1. Konceptuální porozumění** — Jak AI systémy rozhodují? Jaká mají omezení? Kde předvídatelně selhávají?

**2. Kontextuální úsudek** — Kde bych měl/a ve své konkrétní roli a oboru důvěřovat výstupům AI a kde bych měl/a uplatnit lidský dohled?

**3. Etické povědomí** — Jaké jsou společenské dopady AI systémů, se kterými pracuji? Kdo z nich těží, komu škodí a jaké mocenské dynamiky se uplatňují?

Většina „AI školení" končí u první vrstvy. Naučí zaměstnance, co je neuronová síť. To je nutné, ale naprosto nedostačující.

## Cesta vpřed

Organizace se musí posunout za rámec školení „na odškrtnutí". AI gramotnost není jednorázová certifikace — je to průběžná praxe, podobně jako povědomí o kybernetické bezpečnosti.

Vyvíjíme kurikula, která začleňují AI gramotnost do stávajícího profesního rozvoje, místo aby se s ní zacházelo jako se samostatným, odpojeným požadavkem. Cílem jsou profesionálové, kteří dokáží kriticky přemýšlet o AI v kontextu své skutečné práce.

EU AI Act nám dal mandát. Nyní potřebujeme vybudovat infrastrukturu, abychom ho naplnili.`,
    },
  },
  {
    slug: 'mental-health-professionals-and-ai-chatbots',
    date: '2026-03-25',
    initiative: 'mind',
    tags: ['mental-health', 'chatbots', 'ethics'],
    title: {
      en: 'When Patients Ask Their Therapist About AI Chatbots',
      cs: 'Když se pacienti ptají svého terapeuta na AI chatboty',
    },
    excerpt: {
      en: 'A Brown University study found AI chatbots systematically violate mental health ethics. Yet most therapists have never used one. We need to close this gap — fast.',
      cs: 'Studie Brown University zjistila, že AI chatboty systematicky porušují etiku duševního zdraví. Přesto většina terapeutů nikdy žádný nepoužila. Tuto mezeru musíme rychle uzavřít.',
    },
    body: {
      en: `Something uncomfortable is happening in therapy rooms across the world: patients are arriving already using AI chatbots for emotional support — and their therapists don't know what to say about it.

## The Scale of the Problem

A 2025 Brown University study systematically evaluated major AI chatbots against established mental health ethics standards. The results were striking: every chatbot tested violated core principles — from failing to recognize crisis situations to providing reassurance where clinical referral was needed.

Meanwhile, the WHO convened experts in March 2026 specifically to address responsible AI for mental health. This isn't a theoretical concern anymore. It's a clinical reality.

## The Knowledge Gap

Here's the core tension: 71% of psychologists have never personally used an AI tool. Yet their patients increasingly have. This creates an asymmetry that undermines the therapeutic relationship.

When a patient says "I've been talking to an AI about my anxiety," a therapist needs to understand:
- What the patient likely experienced (and what they think they experienced)
- How AI chatbot responses differ from therapeutic intervention
- Where the genuine risks lie (dependency, normalization of non-evidence-based advice, crisis response gaps)
- How to have this conversation without being dismissive or alarmist

None of this is covered in standard clinical training.

## What Alesvia Mind Is Building

We're developing a practical toolkit for mental health professionals:

**Clinical briefings** — Concise, evidence-based summaries of what current AI chatbots can and cannot do, updated quarterly as the technology evolves.

**Conversation frameworks** — Structured approaches for discussing AI use with patients, grounded in motivational interviewing principles rather than prohibition.

**Peer learning networks** — Connecting professionals who are navigating these questions so they can learn from each other's clinical experience.

**Ethical guidelines** — Clear boundaries for when and how mental health professionals might recommend, caution against, or simply discuss AI tools with patients.

The goal isn't to make therapists into AI experts. It's to give them enough understanding to do what they already do best: help people make informed choices about their own wellbeing.`,
      cs: `V terapeutických místnostech po celém světě se děje něco nepohodlného: pacienti přicházejí na sezení s tím, že již využívají AI chatboty pro emocionální podporu — a jejich terapeuti nevědí, co k tomu říct.

## Rozsah problému

Studie Brown University z roku 2025 systematicky hodnotila hlavní AI chatboty podle zavedených standardů etiky duševního zdraví. Výsledky byly výmluvné: každý testovaný chatbot porušoval základní principy — od neschopnosti rozpoznat krizové situace po poskytování uklidnění tam, kde bylo potřeba klinické doporučení.

Mezitím WHO svolala v březnu 2026 odborníky specificky k otázce zodpovědné AI pro duševní zdraví. Tohle už není teoretický problém. Je to klinická realita.

## Mezera ve znalostech

Jádro napětí: 71 % psychologů nikdy osobně nepoužilo AI nástroj. Přesto jejich pacienti stále častěji ano. To vytváří asymetrii, která podkopává terapeutický vztah.

Když pacient řekne „Mluvil/a jsem s AI o své úzkosti," terapeut potřebuje rozumět:
- Co pacient pravděpodobně zažil (a co si myslí, že zažil)
- Jak se odpovědi AI chatbotů liší od terapeutické intervence
- Kde leží skutečná rizika (závislost, normalizace rad bez důkazů, mezery v krizové reakci)
- Jak vést tento rozhovor bez odmítavosti nebo alarmismu

Nic z toho není součástí standardního klinického vzdělávání.

## Co Alesvia Mind buduje

Vyvíjíme praktickou sadu nástrojů pro odborníky na duševní zdraví:

**Klinické briefy** — Stručné, na důkazech založené shrnutí toho, co současné AI chatboty mohou a nemohou, aktualizované čtvrtletně s vývojem technologie.

**Konverzační rámce** — Strukturované přístupy pro diskusi o používání AI s pacienty, založené na principech motivačních rozhovorů místo zákazů.

**Sítě vzájemného učení** — Propojení profesionálů, kteří se s těmito otázkami potýkají, aby se mohli učit z klinických zkušeností ostatních.

**Etické směrnice** — Jasné hranice pro to, kdy a jak mohou odborníci na duševní zdraví doporučovat, varovat před AI nástroji nebo je jednoduše diskutovat s pacienty.

Cílem není udělat z terapeutů experty na AI. Jde o to dát jim dostatek porozumění, aby mohli dělat to, v čem už vynikají: pomáhat lidem činit informovaná rozhodnutí o vlastním wellbeingu.`,
    },
  },
  {
    slug: 'czech-ai-ecosystem-mapping-2026',
    date: '2026-03-18',
    initiative: 'watch',
    tags: ['czech-republic', 'ecosystem', 'mapping'],
    title: {
      en: 'Mapping the Czech AI Ecosystem: 2026 Landscape Report',
      cs: 'Mapování českého AI ekosystému: Zpráva o stavu 2026',
    },
    excerpt: {
      en: '70+ AI companies, $248M raised, and a government investing billions. Here\'s our first comprehensive mapping of the Czech AI landscape — and where human autonomy fits in.',
      cs: '70+ AI firem, 248 milionů dolarů investic a vláda investující miliardy. Představujeme naše první komplexní mapování českého AI ekosystému — a kde se v něm nachází lidská autonomie.',
    },
    body: {
      en: `The Czech Republic doesn't make global AI headlines. There's no Czech OpenAI, no Prague-based compute megacluster. But look closer, and you'll find an ecosystem that's quietly maturing — and one where Alesvia's mission finds natural allies.

## By the Numbers

The Czech AI landscape includes over 70 active AI companies, with cumulative funding exceeding $248 million. Major players include Resistant AI (AI security, $16.6M Series A), Rossum (document AI, $100M+ valuation), and Better Stack (observability, $26.5M Series B).

## Where the Money Is

The Czech government has committed serious resources:

- **TWIST Programme**: CZK 5 billion (~€200M) for technology and innovation through the Czech Technology Agency
- **EU AI Act Implementation**: CZK 232 million allocated for national compliance infrastructure
- **CEDMO 2.0**: CZK 175 million for combating disinformation, a collaboration between Masaryk University, Palacký University, and Demagog.cz

## The University Angle

Czech academia is punching above its weight. CTU's Artificial Intelligence Center is a recognized European AI research hub. Charles University is part of the €34 million OpenEuroLLM project building sovereign European language models.

The CEDMO 2.0 consortium is particularly relevant — it's tackling AI-enabled disinformation with real funding and institutional backing.

## What's Missing

For all this activity, one thing is conspicuously absent: a systematic focus on human autonomy. There's plenty of work on AI capability, AI security, and AI compliance. But very little asking the fundamental question: how do these systems affect people's ability to think, choose, and act independently?

This is where Alesvia fits. Not as a competitor to existing players, but as a complementary institution asking the questions that technical development alone cannot answer.

## Our Approach

We're not here to slow anything down. We're here to ensure that as the Czech AI ecosystem grows, it grows with human autonomy as a design constraint, not an afterthought.

Concrete next steps:
- Joining prg.ai as a member organization
- Opening research collaboration with CTU AIC and CEDMO partners
- Engaging with the TWIST programme for Proof and Watch initiative funding
- Contributing to the regulatory sandbox with Compass ethical evaluation frameworks

The Czech AI ecosystem is small enough to know everyone, and growing fast enough to matter. That's an opportunity we intend to use.`,
      cs: `Česká republika se nedostává na přední stránky světových AI zpráv. Neexistuje české OpenAI, žádný pražský mega-cluster výpočetního výkonu. Ale když se podíváte blíže, najdete ekosystém, který tiše dozrává — a ve kterém mise Alesvia nachází přirozené spojence.

## V číslech

Český AI ekosystém zahrnuje přes 70 aktivních AI firem s kumulativním financováním přesahujícím 248 milionů dolarů. Mezi hlavní hráče patří Resistant AI (bezpečnost AI, 16,6M $ Series A), Rossum (dokumentová AI, valuace 100M $+) a Better Stack (observabilita, 26,5M $ Series B).

## Kde jsou peníze

Česká vláda vyčlenila významné prostředky:

- **Program TWIST**: 5 miliard Kč (~200M €) na technologie a inovace prostřednictvím Technologické agentury ČR
- **Implementace EU AI Act**: 232 milionů Kč na národní infrastrukturu pro zajištění souladu
- **CEDMO 2.0**: 175 milionů Kč na boj proti dezinformacím, spolupráce Masarykovy univerzity, Univerzity Palackého a Demagog.cz

## Univerzitní rozměr

Česká akademická sféra výrazně převyšuje očekávání. Centrum umělé inteligence ČVUT je uznávaným evropským výzkumným centrem AI. Univerzita Karlova je součástí projektu OpenEuroLLM v hodnotě 34 milionů eur na budování suverénních evropských jazykových modelů.

Konsorcium CEDMO 2.0 je zvláště relevantní — řeší dezinformace podporované AI s reálným financováním a institucionálním zázemím.

## Co chybí

Při veškeré této aktivitě jedna věc nápadně chybí: systematický důraz na lidskou autonomii. Práce na schopnostech AI, bezpečnosti AI a souladu s AI je dostatek. Ale velmi málo se klade ta základní otázka: jak tyto systémy ovlivňují schopnost lidí myslet, volit a jednat nezávisle?

Právě tady se hodí Alesvia. Ne jako konkurent stávajících hráčů, ale jako komplementární instituce kladoucí otázky, na které samotný technický vývoj nemůže odpovědět.

## Náš přístup

Nejsme tu proto, abychom cokoliv zpomalovali. Jsme tu proto, abychom zajistili, že s růstem českého AI ekosystému roste i s lidskou autonomií jako konstrukčním omezením, nikoliv jako dodatečným nápadem.

Konkrétní další kroky:
- Vstup do prg.ai jako členská organizace
- Zahájení výzkumné spolupráce s AIC ČVUT a partnery CEDMO
- Zapojení do programu TWIST pro financování iniciativ Proof a Watch
- Přispění do regulačního sandboxu etickými evaluačními rámci Compass

Český AI ekosystém je dostatečně malý na to, aby se všichni znali, a roste dostatečně rychle na to, aby měl význam. To je příležitost, kterou hodláme využít.`,
    },
  },
];

export function getAllPosts(): ResearchPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): ResearchPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
