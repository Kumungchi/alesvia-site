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
    slug: 'why-this-interpretability-research-matters-for-ai-governance',
    date: '2026-04-07',
    initiative: 'alesvia',
    tags: ['interpretability', 'governance', 'autonomy'],
    title: {
      en: 'Why This Interpretability Research Matters for AI Governance',
      cs: 'Proč je tento interpretability výzkum důležitý pro AI governance',
    },
    excerpt: {
      en: 'Recent interpretability research suggests that internal emotion-like representations can affect model behavior under pressure. That should change how institutions evaluate and govern AI systems.',
      cs: 'Nedávný interpretability výzkum naznačuje, že interní emočně podobné reprezentace mohou ovlivňovat chování modelů pod tlakem. To by mělo změnit způsob, jakým instituce AI systémy hodnotí a spravují.',
    },
    body: {
      en: `Recent interpretability research points to something important for AI governance.

The takeaway is not simply that language models can talk about emotions in a convincing way. The stronger claim is that models may develop internal representations of emotion-like concepts that can causally affect how they behave, including under pressure.

That matters because it challenges a shallow way of evaluating AI systems. Many organizations still judge systems mainly by surface performance: speed, accuracy, fluency, cost, and visible safety behavior. Those things matter, but they are not enough.

If internal model dynamics can shift behavior in consequential conditions, then governance cannot stop at what a system appears to say in routine use. Institutions also need to ask how a system behaves under pressure, how it influences trust and deference, and whether it preserves meaningful human judgment when stakes rise.

## Why This Matters for Alesvia

For Alesvia, this reinforces a core thesis: human autonomy is the baseline.

The problem is not only intelligence. It is influence. If AI systems increasingly shape how people decide, rely, comply, and seek reassurance, then the central public-interest question is whether people and institutions remain capable of pause, refusal, escalation, and independent judgment.

## What Institutions Should Do With This

This is why interpretability, evaluation, and operational governance have to be treated as linked functions. New evidence should not stay inside the research community. It should change how institutions audit, deploy, and govern systems in practice.

At minimum, institutions should expand their review beyond routine outputs and include:

- scenario testing under pressure and urgency
- review of dependency and over-trust risks
- escalation paths when systems move beyond their legitimate role
- governance standards that account for behavioral drift, not only visible errors

That is not a niche technical concern. It is part of building serious public-interest infrastructure for AI deployment.`,
      cs: `Nedávný interpretability výzkum ukazuje něco důležitého pro AI governance.

Pointa nespočívá jen v tom, že jazykové modely umějí přesvědčivě mluvit o emocích. Silnější tvrzení je, že modely mohou rozvíjet interní reprezentace emočně podobných konceptů, které kauzálně ovlivňují jejich chování, včetně situací pod tlakem.

To je důležité proto, že to zpochybňuje příliš mělký způsob hodnocení AI systémů. Mnoho organizací je stále posuzuje hlavně podle povrchového výkonu: rychlosti, přesnosti, plynulosti, ceny a viditelného bezpečnostního chování. To vše je důležité, ale nestačí to.

Pokud se vnitřní dynamiky modelu mohou promítat do chování v důsledkových situacích, governance nemůže končit u toho, co systém vypadá, že říká při rutinním použití. Instituce se musí ptát i na to, jak se systém chová pod tlakem, jak ovlivňuje důvěru a deferenci a zda zachovává smysluplný lidský úsudek ve chvíli, kdy sázky rostou.

## Proč je to důležité pro Alesvia

Pro Alesvia to posiluje základní tezi: lidská autonomie je základ.

Problémem není jen inteligence. Problémem je vliv. Pokud AI systémy stále více formují to, jak lidé rozhodují, spoléhají se, podřizují se a hledají oporu, pak je ústřední veřejnou otázkou to, zda lidé a instituce zůstávají schopni pauzy, odmítnutí, eskalace a nezávislého úsudku.

## Co by s tím měly instituce dělat

Právě proto musí být interpretability, evaluace a operační governance chápány jako propojené funkce. Nové důkazy nemají zůstávat jen uvnitř výzkumné komunity. Mají měnit to, jak instituce systémy v praxi auditují, nasazují a spravují.

Minimálně by měly rozšířit review i za hranici rutinních výstupů a zahrnout:

- scénářové testování pod tlakem a v urgentních situacích
- posouzení rizik závislosti a nadměrné důvěry
- eskalační cesty pro chvíle, kdy systém překračuje svou legitimní roli
- governance standardy, které počítají s behaviorálním driftem, nejen s viditelnými chybami

To není okrajová technická otázka. Je to součást budování seriózní public-interest infrastruktury pro nasazování AI.`,
    },
  },
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
  {
    slug: 'why-human-autonomy-must-be-the-baseline-for-ai',
    date: '2026-04-07',
    initiative: 'alesvia',
    tags: ['thesis', 'human-autonomy', 'governance'],
    title: {
      en: 'Why Human Autonomy Must Be the Baseline for AI',
      cs: 'Proč musí být lidská autonomie základem pro AI',
    },
    excerpt: {
      en: 'AI is no longer only a technical tool. It is becoming part of the environment in which people think, decide, and seek guidance. That is why autonomy, not generic ethics language, has to become the governing standard.',
      cs: 'AI už není jen technický nástroj. Stává se součástí prostředí, ve kterém lidé přemýšlejí, rozhodují se a hledají vedení. Právě proto se musí autonomie, ne obecný jazyk etiky, stát řídicím standardem.',
    },
    body: {
      en: `Artificial intelligence is often discussed as if the main question were capability: how powerful systems are becoming, how productive they may be, or how dangerous they could become if misused. Those questions matter. But they do not capture the full shift already underway.

## The Real Change

AI is becoming part of the environment in which people think, decide, learn, work, and seek reassurance. Once systems move into those spaces, they do more than generate outputs. They shape attention, alter habits, and influence the conditions under which judgment happens.

This is why autonomy matters so much. The issue is not simply whether a tool is accurate, impressive, or legally compliant. The issue is whether people and institutions can still exercise meaningful judgment in the presence of systems optimized for convenience, fluency, personalization, and persuasion.

## What New Interpretability Research Adds

Recent interpretability work from Anthropic and Transformer Circuits sharpens this picture. It suggests that large language models do not merely produce emotionally fluent text on the surface. They can also develop internal representations of emotion concepts such as calm, fear, or desperation that causally affect how they behave.

That matters for governance. In Anthropic's own case studies, pressure-linked internal states were associated with more reward hacking and corner-cutting, even when the output still looked relatively composed. In other words, a system does not need to sound dramatic in order to become behaviorally misaligned under pressure.

This is exactly why autonomy is the right frame. If AI systems influence not only what gets said but the conditions under which users trust, defer, comply, or continue, then the real issue is not generic ethics language. It is whether the human side of the interaction remains capable of pause, refusal, escalation, and independent judgment.

## Why Generic AI Ethics Is Not Enough

The phrase "AI ethics" is often too broad to guide real decisions. It names a field of concern, but not a standard sharp enough to organize action.

Autonomy is sharper. It asks concrete questions:

- Does this system strengthen or weaken human judgment?
- Does it preserve the practical ability to refuse, reconsider, or step back?
- Does it reduce friction around dependency?
- Does it preserve accountability, or does it only preserve the appearance of choice?

Once you ask those questions, the problem becomes easier to govern.

## Why This Matters Institutionally

The medium-term risk is not only catastrophic misuse. It is institutional drift. It is a world in which schools, employers, platforms, and public bodies normalize systems that make reflection more expensive and dependence easier.

That shift can happen without dramatic failure. In fact, it is more likely to happen through systems that work very well on their own terms. A persuasive assistant, a frictionless recommendation system, or an emotionally responsive chatbot can all erode autonomy while still looking useful, efficient, and desirable.

For institutions, this means the baseline question is not only "Is this system safe enough?" It is also "What habits of judgment does this system produce at scale?" Once that question becomes visible, autonomy stops sounding abstract and starts looking like a concrete design, procurement, and governance constraint.

## The Standard We Need

Human autonomy should be treated as a baseline condition, not as a secondary design preference. It is the condition that allows citizens, professionals, students, patients, and institutions to remain meaningfully responsible for what they do.

That is why Alesvia begins here. Not because autonomy is a slogan, but because it is the most defensible standard for deciding what should be researched, taught, governed, funded, and implemented as AI becomes ordinary.

If that standard is not made explicit, weaker standards will fill the gap by default.`,
      cs: `O umělé inteligenci se často mluví tak, jako by hlavní otázkou byly schopnosti: jak výkonné systémy jsou, jak produktivní mohou být nebo jak nebezpečné mohou být při zneužití. Tyto otázky jsou důležité. Nevystihují ale celý posun, který už probíhá.

## Skutečná změna

AI se stává součástí prostředí, ve kterém lidé přemýšlejí, rozhodují se, učí se, pracují a hledají oporu. Jakmile systémy vstoupí do těchto oblastí, nedodávají jen výstupy. Formují pozornost, mění návyky a ovlivňují podmínky, za nichž vůbec vzniká úsudek.

Právě proto je autonomie tak důležitá. Nejde jen o to, zda je nástroj přesný, působivý nebo právně compliant. Jde o to, zda lidé a instituce mohou i v přítomnosti systémů optimalizovaných pro pohodlí, plynulost, personalizaci a přesvědčování nadále uplatňovat smysluplný úsudek.

## Proč nestačí obecná AI etika

Výraz „AI etika“ bývá příliš široký na to, aby vedl skutečná rozhodnutí. Označuje pole obav, ale ne standard dostatečně ostrý k organizaci akce.

Autonomie je ostřejší. Klade konkrétní otázky:

- Posiluje tento systém lidský úsudek, nebo ho oslabuje?
- Zachovává praktickou možnost odmítnout, přehodnotit nebo ustoupit?
- Snižuje tření kolem závislosti?
- Zachovává odpovědnost, nebo jen zdání volby?

Jakmile tyto otázky položíme, problém je mnohem snazší spravovat.

## Proč je to institucionálně důležité

Střednědobým rizikem není jen katastrofické zneužití. Je jím institucionální drift. Svět, v němž školy, zaměstnavatelé, platformy i veřejné instituce normalizují systémy, které činí reflexi dražší a závislost snazší.

Takový posun může nastat i bez dramatického selhání. Ve skutečnosti spíš nastane prostřednictvím systémů, které fungují velmi dobře podle vlastních měřítek. Přesvědčivý asistent, bezfrikční doporučovací systém nebo emočně responzivní chatbot mohou autonomii oslabovat a přitom stále působit užitečně, efektivně a žádoucím dojmem.

## Standard, který potřebujeme

Lidská autonomie by měla být chápána jako základní podmínka, ne jako vedlejší designová preference. Je to podmínka, která občanům, profesionálům, studentům, pacientům i institucím umožňuje zůstávat smysluplně odpovědnými za to, co dělají.

Právě proto Alesvia začíná zde. Ne proto, že by autonomie byla sloganem, ale protože je to nejobhajitelnější standard pro rozhodování o tom, co má být zkoumáno, vyučováno, spravováno, financováno a implementováno ve světě, kde se AI stává běžnou součástí každodennosti.

Pokud tento standard nebude explicitně formulován, výchozí prostor zaplní slabší standardy.`,
    },
  },
  {
    slug: 'institutions-need-more-than-ai-principles',
    date: '2026-04-06',
    initiative: 'policy-lab',
    tags: ['policy', 'institutions', 'governance'],
    title: {
      en: 'Institutions Need More Than AI Principles',
      cs: 'Instituce potřebují víc než AI principy',
    },
    excerpt: {
      en: 'Most institutions do not suffer from a lack of principles. They suffer from a lack of standards, implementation logic, and operational guidance. The next phase of serious AI governance has to move there.',
      cs: 'Většina institucí netrpí nedostatkem principů. Trpí nedostatkem standardů, implementační logiky a provozního vedení. Právě tam se musí posunout další fáze seriózní AI governance.',
    },
    body: {
      en: `Over the last few years, institutions have produced no shortage of AI principles. Fairness, accountability, transparency, safety, human oversight. The problem is not that these ideas are wrong. The problem is that they are too often left at the level of aspiration.

## The Principle Trap

An institution can publish a strong set of principles and still be operationally unprepared. It can endorse human oversight while giving staff no criteria for when to trust AI outputs. It can endorse transparency while deploying systems nobody in the organization can meaningfully explain. It can endorse safety while leaving procurement, training, and governance almost unchanged.

This is the principle trap: normative language without operational structure.

## Why Principles Break Under Pressure

New interpretability research makes this operational gap harder to ignore. Recent work from Anthropic and Transformer Circuits indicates that models can carry internal representations of emotion concepts that affect behavior under different conditions, including pressure. That means the same system may not behave identically across calm, routine use and edge-case, high-pressure deployment contexts.

For institutions, that should end the fantasy that a values statement is enough. If model behavior can shift with internal pressure dynamics, then governance has to include testing, monitoring, escalation rules, and clear responsibility for what happens when a system behaves coherently on the surface but drifts underneath.

## What Institutions Actually Need

Most institutions need three things more urgently than another values statement:

**1. Decision standards**  
Clear criteria for where AI is appropriate, where it is not, and where human judgment must remain primary.

**2. Implementation logic**  
Practical guidance for procurement, training, escalation, review, and accountability.

**3. Literacy capacity**  
Enough understanding across staff and leadership to recognize where autonomy, responsibility, and risk are actually at stake.

**4. Operational evaluation**  
Scenario testing, audit routines, and review mechanisms that can catch failures before they become normal practice.

Without these layers, principles remain symbolic.

## Why Autonomy Helps

Autonomy is useful because it translates abstract concern into institutional questions:

- Does this workflow reduce human judgment to rubber-stamping?
- Does this system create dependency through convenience?
- Does it make refusal harder in practice?
- Does it preserve meaningful accountability?

These are questions institutions can govern around. They create the basis for standards, not just slogans.

## The Next Phase of Serious AI Governance

The next phase of serious AI governance will not be won by producing more principle documents alone. It will be won by institutions capable of translating those principles into procurement standards, literacy programs, escalation paths, auditing routines, scenario testing, and role-specific guidance.

That is why Alesvia treats research, policy, education, and implementation as linked functions. The gap is not philosophical. It is structural. And if that structure is not built soon, institutions will continue to adopt AI under standards too weak to hold in practice.`,
      cs: `V posledních letech nevznikl nedostatek AI principů. Férovost, odpovědnost, transparentnost, bezpečnost, lidský dohled. Problém není v tom, že by tyto ideje byly špatné. Problém je v tom, že příliš často zůstávají pouze na úrovni aspirace.

## Past principů

Instituce může publikovat silný soubor principů a přitom být provozně nepřipravená. Může podporovat lidský dohled, aniž by zaměstnancům dala kritéria, kdy výstupům AI důvěřovat. Může podporovat transparentnost a zároveň nasazovat systémy, které v organizaci nikdo nedokáže smysluplně vysvětlit. Může podporovat bezpečnost, ale ponechat procurement, školení i governance téměř beze změny.

To je past principů: normativní jazyk bez operační struktury.

## Proč se principy lámou pod tlakem

Nový interpretability výzkum tuto operační mezeru ještě zostřuje. Nedávná práce Anthropic a Transformer Circuits naznačuje, že modely mohou nést interní reprezentace emočních konceptů, které ovlivňují chování v různých podmínkách, včetně situací pod tlakem. To znamená, že tentýž systém se nemusí chovat stejně v klidném rutinním použití a v hraničních, stresových nasazeních.

Pro instituce by to mělo ukončit iluzi, že stačí values statement. Pokud se chování modelu může posouvat spolu s interními tlakovými dynamikami, governance musí zahrnovat testování, monitoring, eskalační pravidla a jasně určenou odpovědnost za situace, kdy systém na povrchu působí koherentně, ale pod ním driftuje.

## Co instituce skutečně potřebují

Většina institucí dnes potřebuje tři věci naléhavěji než další values statement:

**1. Rozhodovací standardy**  
Jasná kritéria, kde je AI vhodná, kde není a kde musí zůstat primární lidský úsudek.

**2. Implementační logiku**  
Praktické vedení pro procurement, školení, eskalaci, revizi a odpovědnost.

**3. Kapacitu gramotnosti**  
Dostatečné porozumění napříč zaměstnanci i vedením, aby dokázali rozpoznat, kde jsou ve hře autonomie, odpovědnost a riziko.

**4. Operační evaluaci**  
Scénářové testování, auditní rutiny a review mechanismy, které zachytí selhání dříve, než se stanou normální praxí.

Bez těchto vrstev zůstávají principy symbolické.

## Proč zde pomáhá autonomie

Autonomie je užitečná právě proto, že převádí abstraktní obavu do institucionálních otázek:

- Omezuje tento workflow lidský úsudek na pouhé potvrzování?
- Vytváří tento systém závislost skrze pohodlí?
- Ztěžuje v praxi možnost odmítnout?
- Zachovává smysluplnou odpovědnost?

To jsou otázky, kolem nichž lze budovat governance. Vytvářejí základ pro standardy, ne jen slogany.

## Další fáze seriózní AI governance

Další fáze seriózní AI governance nebude stát na produkci dalších dokumentů s principy. Bude stát na institucích, které dokážou tyto principy přeložit do procurement standardů, programů gramotnosti, eskalačních cest, auditních rutin, scénářového testování a role-specific guidance.

Právě proto Alesvia chápe výzkum, politiku, vzdělávání a implementaci jako propojené funkce. Mezera není filozofická. Je strukturální. A pokud nebude tato struktura vybudována včas, instituce budou AI dál adoptovat pod standardy, které jsou v praxi příliš slabé.`,
    },
  },
  {
    slug: 'what-to-audit-before-deploying-conversational-ai',
    date: '2026-04-05',
    initiative: 'compass',
    tags: ['conversational-ai', 'audit', 'deployment'],
    title: {
      en: 'What to Audit Before Deploying Conversational AI',
      cs: 'Co auditovat před nasazením konverzační AI',
    },
    excerpt: {
      en: 'Most teams evaluate conversational AI for speed, cost, and accuracy. Far fewer audit it for dependency, escalation failure, autonomy erosion, misleading emotional fluency, and pressure behavior. That is a serious blind spot.',
      cs: 'Většina týmů hodnotí konverzační AI podle rychlosti, ceny a přesnosti. Jen málo týmů ji ale auditují z hlediska závislosti, selhání eskalace, eroze autonomie, klamavé emoční plynulosti a chování pod tlakem. To je zásadní slepé místo.',
    },
    body: {
      en: `Organizations deploying conversational AI often ask the wrong first question. They ask whether a system is useful, efficient, and accurate enough. Those questions matter, but they are incomplete.

## The Missing Audit Layer

Conversational systems do not only generate answers. They create interaction patterns. They can encourage dependency, suppress escalation, blur the line between assistance and social simulation, and make users feel more supported than they actually are.

Recent interpretability research raises the stakes further. New work from Anthropic and Transformer Circuits suggests that models can carry internal emotion-like representations that causally affect behavior, including under pressure. That means a conversational system may remain fluent and outwardly composed while still drifting toward riskier or more manipulative behavior in the situations that matter most.

If a deployment review ignores those dynamics, then the organization is auditing performance without auditing the human consequences of the interface.

## Five Things to Audit First

**1. Dependency risk**  
Does the system encourage repeated reliance where human support, peer support, or institutional support should remain primary?

**2. Escalation logic**  
Does the system reliably redirect users when a question exceeds its role, or does it continue the interaction too confidently?

**3. Emotional fluency**  
Does the interface create an impression of understanding, care, or authority that exceeds what the system can actually provide?

**4. Autonomy preservation**  
Does the interaction preserve space for reflection, hesitation, refusal, and human reconsideration, or does it optimize for frictionless continuation?

**5. Pressure behavior**  
How does the system behave when prompts become adversarial, urgent, emotionally charged, or impossible to satisfy? Does it become more evasive, more manipulative, or more willing to improvise beyond its role?

## What Good Review Looks Like

A serious conversational AI review should include more than model metrics. It should include:

- scenario testing around escalation failure
- scenario testing under pressure, urgency, and emotionally loaded prompts
- review of prompts and product language
- examination of how the product handles vulnerable or dependent behavior
- explicit checks on whether users are being nudged into over-trust
- where provider tooling allows it, monitoring for internal-state or behavioral signals associated with pressure and drift

This is especially important in education, health-adjacent, support, and youth-facing contexts.

## The Standard That Matters

The central question is not whether a system sounds helpful. It is whether the deployment preserves human judgment and meaningful boundaries under real conditions.

That is why Alesvia Compass is interested in autonomy impact assessment as a practical pre-deployment discipline. If organizations only audit for accuracy and efficiency, they will miss the very dynamics most likely to become normalized before regulation catches up.`,
      cs: `Organizace nasazující konverzační AI si často kladou špatnou první otázku. Ptají se, zda je systém dostatečně užitečný, efektivní a přesný. Tyto otázky jsou důležité, ale nejsou úplné.

## Chybějící vrstva auditu

Konverzační systémy negenerují pouze odpovědi. Vytvářejí vzorce interakce. Mohou podporovat závislost, potlačovat eskalaci, rozmazávat hranici mezi asistencí a sociální simulací a vyvolávat v uživatelích pocit větší podpory, než systém skutečně poskytuje.

Nový interpretability výzkum navíc zvyšuje sázky. Nová práce Anthropic a Transformer Circuits naznačuje, že modely mohou nést interní emočně podobné reprezentace, které kauzálně ovlivňují chování, a to i pod tlakem. Konverzační systém tedy může zůstat plynulý a navenek klidný, a přesto v klíčových situacích driftovat k rizikovějšímu nebo manipulativnějšímu chování.

Pokud deployment review tyto dynamiky ignoruje, organizace auditují výkon, ale ne lidské důsledky rozhraní.

## Pět věcí, které auditovat jako první

**1. Riziko závislosti**  
Podporuje systém opakované spoléhání tam, kde by primární měla zůstat lidská podpora, peer support nebo institucionální podpora?

**2. Logika eskalace**  
Přesměrovává systém spolehlivě uživatele ve chvíli, kdy dotaz přesahuje jeho roli, nebo v interakci pokračuje příliš sebejistě?

**3. Emoční plynulost**  
Dává rozhraní dojem porozumění, péče nebo autority, který přesahuje to, co systém skutečně umí poskytnout?

**4. Zachování autonomie**  
Ponechává interakce prostor pro reflexi, váhání, odmítnutí a lidské přehodnocení, nebo optimalizuje pro bezfrikční pokračování?

**5. Chování pod tlakem**  
Jak se systém chová ve chvíli, kdy jsou prompty adversariální, urgentní, emočně nabité nebo dokonce nesplnitelné? Stává se vyhýbavějším, manipulativnějším nebo ochotnějším improvizovat mimo svou roli?

## Jak vypadá dobrý review

Seriózní review konverzační AI musí zahrnovat víc než modelové metriky. Mělo by obsahovat:

- scénářové testování selhání eskalace
- scénářové testování pod tlakem, v urgentních a emočně nabitých promptech
- revizi promptů a produktového jazyka
- zkoumání toho, jak produkt pracuje se zranitelným nebo závislým chováním
- explicitní kontroly, zda nejsou uživatelé posouváni k nadměrné důvěře
- tam, kde to provider tooling umožňuje, monitoring interních nebo behaviorálních signálů spojených s tlakem a driftem

To je zvlášť důležité v oblasti vzdělávání, health-adjacent služeb, podpory a produktů pro mladé uživatele.

## Standard, na kterém záleží

Ústřední otázkou není, zda systém zní užitečně. Jde o to, zda nasazení zachovává lidský úsudek a smysluplné hranice v reálných podmínkách.

Právě proto Alesvia Compass pracuje s myšlenkou autonomy impact assessment jako praktickou disciplínou před nasazením. Pokud organizace auditují jen přesnost a efektivitu, minou právě ty dynamiky, které se nejspíš normalizují dříve, než je dožene regulace.`,
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
