import type { Locale } from '../dictionaries';

export type ThesisSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type ThesisContent = {
  metadataTitle: string;
  metadataDescription: string;
  label: string;
  title: string;
  intro: string;
  principleLabel: string;
  principleText: string;
  sections: ThesisSection[];
  closingLabel: string;
  closingText: string;
  primaryCta: string;
  secondaryCta: string;
};

const thesisContent: Record<Locale, ThesisContent> = {
  en: {
    metadataTitle: 'The Thesis | Alesvia',
    metadataDescription:
      'Alesvia’s thesis on human autonomy, institutional responsibility, and what must be built as AI becomes part of daily life.',
    label: 'The Thesis',
    title: 'Human autonomy is the baseline.',
    intro:
      'Alesvia begins from a simple observation: artificial intelligence is no longer just a tool. It is becoming part of the environment in which people think, decide, learn, work, and seek reassurance. As AI systems move into everyday life, they do not merely assist decisions. They shape attention, influence judgment, and alter the conditions under which people act. Our position is simple: human autonomy must not become the variable that technology quietly optimizes away.',
    principleLabel: 'Core Principle',
    principleText:
      'Human autonomy is the baseline. Technology may extend human capability, but it must not train people out of agency, judgment, or the practical ability to refuse, reconsider, and set boundaries.',
    sections: [
      {
        heading: 'The problem is not only intelligence. It is influence.',
        paragraphs: [
          'Most public debate still frames AI as a question of capability: how powerful systems are becoming, how productive they may be, or how dangerous they could become if misused. Those questions matter, but they do not capture the full shift already underway. The more immediate change is behavioral and institutional. Systems optimized for convenience, fluency, personalization, and persuasion do not stay neutral. They reshape habits, lower friction around dependency, and make human oversight harder to sustain in practice.',
          'This is why Alesvia does not begin with generic “AI ethics” language. That category is too broad and too often detached from lived conditions. We begin with autonomy because autonomy is what turns technical change into a civic question. If people can no longer think independently, choose deliberately, or maintain meaningful boundaries, then the issue is no longer only innovation. It is public and institutional responsibility.',
        ],
      },
      {
        heading: 'Why this matters now',
        paragraphs: [
          'The systems entering public life today are not waiting for society to catch up. Conversational AI is already being used for advice, emotional regulation, learning, companionship, and professional judgment. Educational institutions are being pushed to adapt before they have real frameworks. Policymakers are under pressure to regulate tools that are changing faster than the institutions around them. Employers are deploying AI while still treating literacy and judgment as afterthoughts.',
          'In this environment, the default future is not necessarily collapse. It is quieter than that. It is a gradual normalization of systems that reduce friction for everything except human reflection. People adapt to the tool, institutions adapt to the market, and the ability to say no becomes narrower, costlier, and less culturally legible. That is the trajectory Alesvia exists to interrupt before it starts to feel inevitable.',
        ],
      },
      {
        heading: 'What Alesvia is building',
        paragraphs: [
          'Alesvia is not a single campaign, a product company, or a commentary brand. It is an institution built to create practical infrastructure for human autonomy. That means producing research, shaping public language, translating principles into policy and governance frameworks, developing educational programs, and supporting implementation where these questions become operational.',
          'The test for our work is practical. Can this help a school, therapist, policymaker, funder, founder, or public institution make better decisions under real conditions? If the answer is no, the work is incomplete. Research must travel. Principles must become usable. Institutions need standards, tools, and frameworks they can actually adopt.',
        ],
        points: [
          'research and briefings that clarify where autonomy is under pressure',
          'policy and governance frameworks that can be adopted in real institutions',
          'educational programs that teach judgment, literacy, and boundary-setting',
          'implementation guidance for partners deploying AI in the public interest',
        ],
      },
      {
        heading: 'The first fields of action',
        paragraphs: [
          'Alesvia’s initial initiatives are not random projects. They are early proofs of the same thesis applied to different pressure points. Unplugged addresses healthy boundaries with conversational AI. Policy Lab turns ethical principles into legislative and institutional guidance. Education focuses on algorithmic literacy and digital self-defense. Advisory, Mind, Proof, Compass, and Watch extend the same logic into investment, mental health, AI literacy, innovation practice, and public accountability.',
          'The point is not to build a loose collection of branded initiatives. The point is to build an institution capable of operating across research, policy, education, and implementation without losing a coherent center of gravity. That center is autonomy.',
        ],
      },
      {
        heading: 'Our institutional commitments',
        paragraphs: [
          'Alesvia should be judged not only by what it says, but by how it is structured. We are committed to institutional seriousness over trend-chasing, public-interest orientation over engagement incentives, and long-term credibility over reactive positioning. Independence is not a branding theme for us. It is a structural requirement.',
          'That is why transparency, governance, and funding integrity matter. The organization must be able to publish uncomfortable findings, support careful implementation, and remain legible to partners who need rigor rather than hype. If human autonomy is the baseline, then the institution defending it must be designed accordingly.',
        ],
      },
      {
        heading: 'What success looks like',
        paragraphs: [
          'Success is not simply being early to a conversation. Success means helping set the standards by which institutions decide what responsible AI adoption actually requires. It means making autonomy a normal design and governance constraint. It means giving professionals, educators, and policymakers language and frameworks they can use before dependence, manipulation, or institutional drift are treated as inevitable side effects.',
          'The long-term aim is cultural and institutional: a world in which technological systems can amplify human capability without training people out of reflection, judgment, and self-command. That outcome will not emerge automatically. It has to be built.',
        ],
      },
    ],
    closingLabel: 'Next Step',
    closingText:
      'If this thesis resonates, the next question is not whether the problem is real. It is where to act first, what to build next, and which institutions need to move before dependence, manipulation, and drift are treated as normal. That is the work Alesvia is here to do.',
    primaryCta: 'See Our Work',
    secondaryCta: 'Partner With Us',
  },
  cs: {
    metadataTitle: 'Teze | Alesvia',
    metadataDescription:
      'Teze Alesvia o lidské autonomii, institucionální odpovědnosti a o tom, co je nutné budovat, když se AI stává součástí každodenního života.',
    label: 'Teze',
    title: 'Lidská autonomie je základ.',
    intro:
      'Alesvia vychází z jednoduchého pozorování: umělá inteligence už není jen nástroj. Stává se součástí prostředí, ve kterém lidé přemýšlejí, rozhodují se, učí se, pracují a hledají oporu. Jakmile AI systémy vstupují do každodenního života, nepomáhají pouze s rozhodováním. Formují pozornost, ovlivňují úsudek a mění podmínky, za nichž lidé jednají. Náš výchozí bod je jednoduchý: lidská autonomie se nesmí stát proměnnou, kterou technologie tiše optimalizují pryč.',
    principleLabel: 'Základní princip',
    principleText:
      'Lidská autonomie je základ. Technologie mohou rozšiřovat lidské schopnosti, ale nesmějí lidi odnaučovat jednat, posuzovat, odmítat, přehodnocovat a nastavovat hranice.',
    sections: [
      {
        heading: 'Problémem není jen inteligence. Problémem je vliv.',
        paragraphs: [
          'Většina veřejné debaty stále rámuje AI jako otázku schopností: jak výkonné systémy jsou, jak produktivní mohou být nebo jak nebezpečné mohou být při zneužití. To vše je důležité, ale nevystihuje to celý posun, který už probíhá. Bezprostřednější proměna je behaviorální a institucionální. Systémy optimalizované pro pohodlí, plynulost, personalizaci a přesvědčování nezůstávají neutrální. Přetvářejí návyky, snižují tření kolem závislosti a v praxi oslabují lidský dohled.',
          'Právě proto Alesvia nezačíná obecným jazykem „AI etiky“. Tato kategorie je příliš široká a příliš často odpojená od reálných podmínek. Začínáme autonomií, protože právě autonomie proměňuje technickou změnu v občanskou otázku. Pokud lidé přestávají samostatně myslet, uvážlivě volit nebo udržovat smysluplné hranice, pak už nejde jen o inovaci. Jde o veřejnou a institucionální odpovědnost.',
        ],
      },
      {
        heading: 'Proč na tom záleží právě teď',
        paragraphs: [
          'Systémy, které dnes vstupují do veřejného života, nečekají, až je společnost dožene. Konverzační AI se už používá pro rady, emoční regulaci, učení, společnost i profesní úsudek. Vzdělávací instituce jsou tlačeny k adaptaci dříve, než mají skutečné rámce. Tvůrci politik regulují nástroje, které se mění rychleji než instituce okolo nich. Zaměstnavatelé nasazují AI, zatímco gramotnost a lidský úsudek stále berou jako dodatek.',
          'V takovém prostředí není výchozí budoucností nutně kolaps. Je tišší. Je to postupná normalizace systémů, které snižují tření u všeho kromě lidské reflexe. Lidé se přizpůsobují nástroji, instituce trhu a schopnost říct ne je stále užší, nákladnější a kulturně méně srozumitelná. Právě tuto trajektorii chce Alesvia přerušit dříve, než začne působit jako nevyhnutelná.',
        ],
      },
      {
        heading: 'Co Alesvia buduje',
        paragraphs: [
          'Alesvia není jednorázová kampaň, produktová firma ani značka založená jen na komentování dění. Je to instituce budovaná jako praktická infrastruktura pro lidskou autonomii. To znamená vytvářet výzkum, formovat veřejný jazyk, překládat principy do politických a governance rámců, rozvíjet vzdělávací programy a podporovat implementaci tam, kde se tyto otázky stávají praktickými.',
          'Měřítkem naší práce je použitelnost. Pomůže to škole, terapeutovi, tvůrci politik, donorovi, zakladateli nebo veřejné instituci činit lepší rozhodnutí v reálných podmínkách? Pokud ne, práce je neúplná. Výzkum musí cestovat. Principy se musí stát použitelnými. Instituce potřebují standardy, nástroje a rámce, které mohou skutečně převzít.',
        ],
        points: [
          'výzkum a briefy, které objasňují, kde je autonomie pod tlakem',
          'politické a governance rámce, které lze přijmout v reálných institucích',
          'vzdělávací programy, které učí úsudek, gramotnost a nastavování hranic',
          'implementační vedení pro partnery, kteří nasazují AI ve veřejném zájmu',
        ],
      },
      {
        heading: 'První pole působnosti',
        paragraphs: [
          'Počáteční iniciativy Alesvia nejsou náhodné projekty. Jsou to první důkazy stejné teze aplikované na různé tlakové body. Unplugged řeší zdravé hranice s konverzační AI. Policy Lab převádí etické principy do legislativního a institucionálního vedení. Education se soustředí na algoritmickou gramotnost a digitální sebeobranu. Advisory, Mind, Proof, Compass a Watch rozšiřují stejnou logiku do investic, duševního zdraví, AI gramotnosti, inovační praxe a veřejné odpovědnosti.',
          'Smyslem není vystavět volnou sbírku brandovaných iniciativ. Smyslem je vybudovat instituci schopnou působit napříč výzkumem, politikou, vzděláváním a implementací, aniž by ztratila svůj střed. Tím středem je autonomie.',
        ],
      },
      {
        heading: 'Naše institucionální závazky',
        paragraphs: [
          'Alesvia by měla být posuzována nejen podle toho, co říká, ale i podle toho, jak je strukturována. Hlásíme se k institucionální serióznosti místo sledování trendů, k veřejnému zájmu místo engagementových pobídek a k dlouhodobé důvěryhodnosti místo reaktivního positioningu. Nezávislost pro nás není brandingové téma. Je to strukturální požadavek.',
          'Proto záleží na transparentnosti, governance a integritě financování. Organizace musí být schopna publikovat nepohodlná zjištění, podporovat pečlivou implementaci a zůstávat čitelná pro partnery, kteří potřebují rigoróznost, ne hype. Pokud je lidská autonomie základ, musí tomu odpovídat i instituce, která ji hájí.',
        ],
      },
      {
        heading: 'Jak vypadá úspěch',
        paragraphs: [
          'Úspěchem není jen být mezi prvními v nějaké debatě. Úspěch znamená pomáhat nastavovat standardy, podle nichž instituce rozhodují, co skutečně vyžaduje odpovědné nasazování AI. Znamená to udělat z autonomie běžný návrhový a governance princip. Znamená to dát profesionálům, pedagogům a tvůrcům politik jazyk a rámce, které mohou použít dříve, než budou závislost, manipulace nebo institucionální drift považovány za nevyhnutelné vedlejší efekty.',
          'Dlouhodobým cílem je kulturní i institucionální proměna: svět, v němž technologické systémy mohou posilovat lidské schopnosti, aniž by lidi odnaučovaly reflexi, úsudku a sebeřízení. Takový výsledek nevznikne automaticky. Musí být vybudován.',
        ],
      },
    ],
    closingLabel: 'Další krok',
    closingText:
      'Pokud s tebou tato teze rezonuje, další otázkou není, zda je problém skutečný. Otázkou je, kde začít jednat, co budovat jako další a které instituce se musí pohnout dříve, než budou závislost, manipulace a drift považovány za normální. Právě to je práce, kterou tu Alesvia chce dělat.',
    primaryCta: 'Prohlédnout naši práci',
    secondaryCta: 'Spolupracujte s námi',
  },
};

export function getThesisContent(locale: Locale) {
  return thesisContent[locale];
}
