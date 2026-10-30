# HANDOFF — Alesvia (alesvia.org)

Předávací dokument pro agenta v T3 Code (Claude Code / Codex). Stav k 25. 10. 2026. Vlastník projektu: Matias Bunnik (zakladatel a budoucí ředitel Alesvia z.ú.). Sesterské repo: Kumungchi/unplugged má vlastní HANDOFF.md se stejným sdíleným kontextem (sekce 1–3) a navíc s detaily k newsletteru a animacím.

## 0. Jak s tímto dokumentem pracovat

- Přečti celý dokument, pak AGENTS.md a CLAUDE.md a teprve potom začni.
- Tohle není Next.js z tvých trénovacích dat. Repo běží na Next.js 16.2 (App Router, React 19). Před psaním kódu si přečti příslušný návod v `node_modules/next/dist/docs/` a respektuj deprecation hlášky (pravidlo z AGENTS.md).
- Pracuj podle sekce 6 (backlog) shora dolů. Fáze 0 má přednost.
- Cokoli v sekci 8 (otevřené otázky) nerozhoduj sám. Připrav varianty s trade-offy a zeptej se.
- Po každém dokončeném úkolu odškrtni checkbox v tomto souboru a commitni ho spolu se změnou.
- Jako úplně první commit přidej na začátek AGENTS.md řádek (CLAUDE.md ho importuje přes @AGENTS.md): `> Před začátkem práce si přečti HANDOFF.md — aktuální stav, pravidla a backlog.`

Značení stavu: [x] hotovo · [ ] čeká · ⚠️ vyžaduje rozhodnutí Matiase · 🔁 už jednou uděláno, ale práce se ztratila (viz sekce 4).

### Jak komunikovat s Matiasem

- Česky. Technické termíny, kód, názvy souborů a commit messages anglicky.
- Studuje psychologii a informatiku a chce se učit: u každé netriviální volby vysvětli proč a jaké má trade-offy, ne jen co jsi udělal.
- Jedna jasná další akce je lepší než dlouhý seznam paralelních úkolů.
- Píše často diktováním, zprávy mohou obsahovat foneticky zkomolená slova. Když něco nedává smysl, zeptej se.
- Když se spleteš, řekni to rovnou a oprav to.

## 1. Kontext projektu (sdílený s unplugged)

Alesvia je česká nezisková organizace v přípravě (právní forma zapsaný ústav, z.ú., sídlo Ostrava) na průsečíku psychologie a AI. Řeší psychologická rizika konverzační AI: pseudo-intimitu, emoční závislost, AI-asociovanou psychózu a erozi lidské autonomie.

Hlavní sdělení: „AI je nástroj. Ne vztah.“

Čtyři pilíře Alesvia:

| Pilíř | Co dělá | Ekonomická role | Stav |
| --- | --- | --- | --- |
| Unplugged | Veřejná vlajková značka: newsletter, workshopy, osvěta o AI pseudo-intimitě | Motor reputace, financovaný granty | Aktivní (web + newsletter) |
| Akademie | AI gramotnost a implementace pro firmy a veřejnou správu | Nejrychlejší cesta k vlastním příjmům | V přípravě |
| Praktici | Klinické vzdělávání pro terapeuty a psychology | Vysoká marže | Blokováno: chybí klinický garant v radě |
| Policy Lab | Normativní a legislativní výzkum | Nákladové středisko záměrně | V přípravě |

SaaS směr existuje jen jako zmínka na alesvia.org a je mimo rozsah současné fáze.

Unplugged je veřejně viditelná značka pod Alesvia. Rozhodnuto: Unplugged si ponechává nabídku pro školy, organizace a veřejnou správu (B2B sekce zůstávají), nezužuje se jen na veřejnou osvětu.

Mise jednou větou (schválená): „Lidé se učí používat AI jako nástroj, ale nikdo je neučí, co dělat, když AI začne napodobovat přítele, partnera nebo terapeuta. Unplugged tuto mezeru vyplňuje.“

## 2. Co weby smějí tvrdit (stav k 25. 10. 2026)

Tohle je nejdůležitější tabulka v dokumentu. Web organizace, která stojí na psychologické přesnosti, nesmí tvrdit nic, co dnes není pravda.

| Fakt | Pravda dnes | Správná formulace na webu |
| --- | --- | --- |
| Registrace z.ú. | Návrh na zápis nebyl podán | „Alesvia z.ú. připravujeme k registraci“ / „registraci připravujeme“. Nikdy „registrace probíhá“, nikdy „Alesvia z.ú.“ jako hotová entita. |
| Správní rada | Neobsazená (min. 3 lidé, mimo ředitele) | Nezmiňovat složení. Max. „správní radu sestavujeme“. |
| Tým | Zakladatel Matias, žádný potvrzený tým | Žádné „kolektiv psychologů, edukátorů a technologů“. Jmenovat zakladatele s rolí (psychologie + informatika). Další lidi jen po jejich souhlasu. |
| Workshopy | Žádný se zatím nekonal | Nabídka ano („pilotní workshop“), reference a „proškolili jsme“ ne. |
| Partneři | Žádné podepsané partnerství | Nejmenovat instituce jako partnery. |
| Vlastní data | Žádný vlastní výzkum | Citovat cizí studie s přesným zdrojem. Nepředstírat vlastní výzkum. |
| IČO, sídlo | Neexistuje | Doplnit až po zápisu (fáze 2). |

## 3. Nepřekročitelná pravidla obsahu

- Kritizujeme design, ne lidi. Nikdy se nevysmívat uživatelům AI companionů ani osamělým lidem. Používat AI je v pořádku.
- Žádná krizová intervence. Vždy přesměrovat na odbornou pomoc (viz krizové kontakty v úkolu A-06).
- Každé číslo má zdroj u sebe: studie, rok, velikost a typ vzorku. Ne souhrnné „podle výzkumů X, Y, Z“.
- Úrovně evidence: odlišovat doloženo / výzkum naznačuje / naše interpretace. Korelace se píše jako „souviselo s“, ne „způsobuje“.
- Žádná neuro-spekulace (dopamin, oxytocin u chatbotů) bez konkrétní studie.
- Nezávislost (aktualizováno 26. 10. 2026, Matias): žádné peníze od výrobců AI companion produktů. Podpora od dalších firem včetně AI laboratoří (Anthropic, OpenAI…) je možná za jasných podmínek, transparentně (větší dárci zveřejněni) a bez vlivu na výstupy. Infrastrukturní kredity jsou OK. Stanovy a dokumentace o spolupráci jsou v návrhu – na webu je zatím necitovat.
- Tón: chytrý, lidský, přesný, současný. Ironie ano, pohrdání ne. Žádná morální panika.
- Message house (smí se volně používat):
  - AI může působit osobně, ale není osobou.
  - Plynulá konverzace není totéž co vztah.
  - Dostupnost 24/7 není totéž co péče.
  - Empatický tón není důkazem vědomí ani porozumění.
  - Lidská blízkost je pomalejší, náročnější a právě proto skutečná.
- Psychologický obsah, který přepíšeš, označ v PR jako „čeká na kontrolu psychologem“. Nezveřejňovat jako finální bez lidské revize.

## 4. Co se stalo a proč některé věci děláš podruhé

- Červenec 2026: restrukturalizace webu na 4 pilíře, poctivé texty před registrací, formulář zájmu o Akademii, RSS a Article structured data, signalizace SaaS směru pro technologické a VC dárce. Poslední commit v master: 12. 7. 2026.
- 26. 8. a 1. 10. 2026: audity obou webů. alesvia.org vyšel jako blízko finální verze (vlastní canonical na každé stránce, hreflang, sitemap, dynamické OG obrázky, skip link, impressum bez placeholderů). Tento vzor se přenáší na unplugged.cz.
- 13. 10. 2026: v cloudové session vznikla větev `fix/fakta-a-technika-2026-10`: oprava „registrace probíhá“ na „připravujeme“, odstranění dekorativních efektů (gradient orby, glassmorphism, tilt/spotlight karty, scroll fade-iny), nahrazení bento gridu pilířů střídmým seznamem, přepsané zásady ochrany údajů dle čl. 13 GDPR, článek o českém AI ekosystému skrytý jako draft.
- ⚠️ Ta větev nebyla nikdy pushnutá a je ztracená. Na GitHubu existuje jen master. Ověřeno 25. 10. 2026: problémy jsou v kódu pořád. Úkoly označené 🔁 je nutné udělat znovu.
- Poučení → pracovní postup v sekci 5: pushuj průběžně.

## 5. Pracovní postup

- Výchozí větev je master (ne main). Nikdy do ní necommituj přímo. Pro každý logický celek vlastní větev (fix/…, feat/…, content/…), pushni ji hned po prvním commitu a otevři PR. Vercel vytvoří preview. Merge dělá jen Matias.
- PR popis: co se změnilo, proč, trade-offy, které URL v preview má Matias zkontrolovat (CS i EN).
- Commit messages anglicky, v imperativu, jedna věc na commit.
- Build: `npm run build` (Next), `npm run lint`. Produkční build na Vercelu jde přes `npm run deploy:convex` (`convex deploy --cmd "next build"`), takže každý produkční deploy nasazuje i Convex. V tomto kole neměň `convex/schema.ts`, pokud to úkol výslovně nevyžaduje. Před prací s Convexem čti `convex/_generated/ai/guidelines.md`.
- Lokalizace: veškeré texty v `dictionaries/cs.json` a `dictionaries/en.json`. Každá změna textu se dělá v obou jazycích. Routing přes `app/[lang]/…` a `proxy.ts`, URL slugy v `lib/routes.ts`.
- Kontaktní formulář posílá e-maily přes SMTP (`app/api/contact/route.ts`, env `SMTP_*`, `CONTACT_FORM_*_EMAIL`). Formulář Akademie a Policy Labu přes Convex.
- Nesahej na `.env*`, Vercel nastavení, DNS ani produkční data. Když to úkol potřebuje, napiš Matiasovi přesný postup.
- `docs/` obsahuje starší strategické a brandové dokumenty (některé z dubna 2026, se starými názvy iniciativ). Ber je jako historii, ne jako zdroj pravdy. Zdroj pravdy je tento soubor.
- Testovací framework není. Ověřuj buildem, lintem a ručním průchodem v preview (desktop + mobil, CS + EN).

## 6. Backlog

### Fáze 0 — pravdivost a právní minimum

- [x] A-01 🔁 „Registrace probíhá“ → „připravujeme registraci“ — `dictionaries/cs.json` (7 výskytů: ř. ~76, 78, 270, 307, 340, 352, 366) a `dictionaries/en.json` (~8 výskytů „in progress“, vč. registration_text ř. ~370). Návrh na zápis nebyl podán. Také team.board_text („v rámci probíhající registrace“) a team.intro. Hotovo když: grep -ri "probíhá\|in progress" v dictionaries nevrací nic o registraci.
- [x] A-02 Statistika u Praktiků — `dictionaries/cs.json` ř. ~179 (problem_text) + EN ekvivalent. „71 % psychologů nikdy nepoužilo AI nástroje“ je z APA 2024. Aktuální APA Practitioner Pulse Survey 2025: 56 % psychologů v USA použilo za rok AI nástroj, 44 % nikdy (zdroj) — americký vzorek, uvést. Ověřit i tvrzení o studii Brown University a o setkání WHO v březnu 2026 (najít primární zdroj, jinak přeformulovat nebo odstranit). Zdroje doplnit jako odkazy.
- [x] A-03 🔁 Článek „Mapování českého AI ekosystému“ — `content/research/posts.ts`, slug czech-ai-ecosystem-mapping-2026 (ř. ~239). Neověřená čísla (70+ firem, 248 mil. USD), a „Rossum, valuace 100M $+“ je chyba (šlo o investiční kolo Series A, ne valuaci). Přidat do typu ResearchPost pole `draft?: boolean`, vyřadit drafty z výpisu, sitemap, RSS i generateStaticParams, a tento článek označit jako draft. Nemazat. Fakt-check je samostatný úkol (A-11).
- [ ] A-04 Zásady ochrany údajů dle čl. 13 GDPR — `app/[lang]/legal/privacy/page.tsx` + legal/privacy sekce v dictionaries (ř. ~270 a okolí). Doplnit zpracovatele (Vercel, Convex, Clerk, poskytovatel e-mailu/SMTP), předávání do USA, doby uchování, právo stížnosti u ÚOOÚ. ⚠️ Správce a poskytovatel e-mailu viz O-1 a O-2. Sjednotit správce se zásadami na unplugged.cz. V PR: „Doporučeno nechat ověřit právníkem (Frank Bold / ANNO MSK).“
- [x] A-05 Odkazy na Unplugged na www — `app/[lang]/page.tsx` ř. ~81, `app/[lang]/initiatives/unplugged/page.tsx` ř. ~72–75 (iframe), `app/[lang]/layout.tsx` ř. ~99 (sameAs v JSON-LD). Hlavní doména Unplugged je https://www.unplugged.cz (rozhodnuto). Iframe živého webu zvážit nahradit statickým screenshotem (rychlost, třetí strana, GDPR) ⚠️ s trade-offy v PR.
- [x] A-06 Krizové kontakty — kde web mluví o duševním zdraví (Unplugged pilíř, Praktici, FAQ), přidat odkaz na pomoc: Linka první psychické pomoci 116 123, Linka bezpečí 116 111 (do 26 let), 155 / 112. Před mergem ověřit provozní doby.

### Fáze 1 — finální verze

- [x] A-07 🔁 Méně „AI-generovaný“ vzhled — `components/HeroBackground.tsx`, `TiltCard.tsx`, `SpotlightCard.tsx`, `ScrollReveal.tsx`, `ScrollProgress.tsx`; použité na homepage (`app/[lang]/page.tsx` ř. ~3–6, 19, 46, 60–86), v research a v pilířových stránkách. Matias chce, aby web nepůsobil jako šablona. Odstranit dekorativní efekty (gradient orby, glassmorphism, tilt a spotlight karty, scroll fade-iny), pilíře místo bento gridu jako střídmý seznam s jasnou hierarchií. Respektovat prefers-reduced-motion. Načíst skill frontend-design. Nevyhazovat komponenty, dokud nejsou nikde použité; pak je smazat v samostatném commitu.
- [x] A-08 Tým — `app/[lang]/team/page.tsx`, team v dictionaries. Dnes prázdná stránka. ⚠️ Po souhlasu Matiase (O-3) jmenovat zakladatele: role, zázemí psychologie + informatika, veřejný výstup (Psychotalks). Nikoho dalšího bez jeho souhlasu.
- [x] A-09 Sitemap lastModified — `app/sitemap.ts` ř. ~32 a ~49 používá `new Date()`, takže všechny stránky mají čas buildu a Google lastmod ignoruje. U článků použít date z posts.ts, u ostatních hodnotu vynechat.
- [ ] A-10 Konzistence s Unplugged — Unplugged si ponechává nabídku pro školy, organizace a veřejnou správu (rozhodnuto). Zkontrolovat, že texty Akademie a Policy Labu („V přípravě“) nepůsobí jako konkurenční výloha k unplugged.cz: kde se nabídky překrývají, odkazovat na Unplugged jako na místo, kde se dnes poptává. ⚠️ Návrh formulací nech schválit.
- [ ] A-11 Fakt-check článku o českém AI ekosystému — každé číslo se zdrojem, nebo článek přepsat; až pak zrušit draft.
- [ ] A-12 Čerstvý obsah — poslední publikovaný článek je ze 7. 4. 2026. Neřeš psaním obsahu sám; připrav jen technickou možnost (např. sekci „Z newsletteru Unplugged“ s odkazy na archiv), až bude archiv na unplugged.cz (úkol U-18 v sesterském repu).
- [ ] A-13 Lighthouse + přístupnost — mobil ≥ 90 (výkon, přístupnost, SEO), kontrast, klávesnice, focus stavy.

### Co je v pořádku a nerozbíjet

- Vlastní canonical na každé stránce, hreflang CS/EN, sitemap, dynamické OG obrázky (`opengraph-image.tsx`), skip link, impressum, 404.
- Fonty přes next/font/google se stahují při buildu a servírují z vlastní domény, takže na rozdíl od unplugged.cz nejde o přenos IP na Google. Není potřeba měnit.
- Stránka Financování už je v aktuální podobě (4 pilíře, vlastní příjmy, granty, pravidla nezávislosti). Jen při A-01 zkontroluj, že nikde netvrdí hotovou právní formu.
- SaaS zmínka (future_text, prog_saas) a jazyk pro technologické a investiční dárce zůstávají (rozhodnuto), vždy jako budoucí záměr, ne existující produkt.

### Fáze 2 — po zápisu Alesvia z.ú. (teď nedělat)

- [ ] IČO, sídlo, statutár a správní rada (impressum, tým, patička, JSON-LD Organization).
- [ ] Zásady ochrany údajů na právnickou osobu jako správce.
- [ ] Odstranit „připravujeme registraci“ ze všech textů — včetně bloku „Key facts“ v `lib/llms.ts` (registrace, IČO, workshopy, tým).

## 7. Ověřené zdroje

| Číslo | Použití | Zdroj | Pozor na |
| --- | --- | --- | --- |
| 56 % / 44 % | psychologové v USA, kteří za rok použili / nikdy nepoužili AI nástroj | APA Practitioner Pulse Survey 2025 (Becker's) | Americký vzorek. Ideálně citovat přímo APA |
| 72 % | teenageři v USA, kteří vyzkoušeli AI companion | Common Sense Media, 7/2025 | n = 1 060, 13–17 let |
| korelace | častější používání chatbotu souviselo s vyšší osamělostí a závislostí | MIT Media Lab + OpenAI, 3/2025 | Korelace, ne příčina |
| 2,9 % | afektivní konverzace s Claudem; companionship a roleplay pod 0,5 % | Anthropic, 6/2025 | Ověřit v původním článku |

Před použitím každý odkaz otevři a zkontroluj, že číslo sedí.

## 8. Otevřené otázky pro Matiase (nerozhoduj sám)

- O-1 Vyřešeno Matiasem 27. 10. 2026: do registrace je správcem Matias Bunnik, kontakt privacy@alesvia.org. Doručování kontaktu ověřit zvlášť.
- O-2 Poskytovatel potvrzen: Seznam Email Profi. Otevřené zůstává smluvní uspořádání/DPA, tarif Vercelu, regiony a předávání u skutečných účtů. Clerk není v aplikaci zapojený.
- O-3 Smí být Matias na stránce Tým jmenován s fotkou a krátkým medailonkem?
- O-4 Iframe unplugged.cz na stránce pilíře Unplugged: ponechat, nebo nahradit screenshotem?
- O-5 Formulace překryvu Akademie / Policy Lab s nabídkou na unplugged.cz (A-10).

## 9. Definice „plně funkčního webu“

- [ ] Žádné tvrzení o registraci, radě, týmu, partnerech nebo workshopech, které dnes není pravda (CS i EN)
- [ ] Každé číslo má zdroj; neověřené články jsou draft
- [ ] Správce údajů a zpracovatelé uvedeni, shodně s unplugged.cz
- [ ] Kontaktní formulář, formulář Akademie a Policy Labu odeslány testovací zprávou a zpráva dorazila
- [ ] Odkazy alesvia.org ↔ www.unplugged.cz fungují oběma směry
- [ ] Žádné dekorativní „AI šablonové“ efekty; prefers-reduced-motion respektováno
- [ ] Lighthouse mobil ≥ 90
- [ ] Google Search Console nastavená, sitemap odeslaná (Matias)

## 10. Kontext mimo web (jen pro orientaci)

Kritická cesta zakládání: správní rada (min. 3 lidé + Matias jako ředitel; jeden člen ideálně licencovaný klinik jako garant pro Praktiky) → návrh na zápis u Krajského soudu v Ostravě → bankovní účet (Fio) → granty (Nadace Via, Nadační fond Avast/Gen; později OSF, Neuron, Visegrad Fund) → ochranné známky (ÚPV, třídy 41, 42, 45).

Pravidla nezávislosti financování (aktualizováno 26. 10. 2026): žádné peníze od výrobců AI companion produktů; AI laboratoře a další firmy za jasných podmínek a transparentně; infrastrukturní kredity ano; pojmenovaná partnerství posuzovat případ od případu s veřejným zveřejněním.

Promo animace a newsletter žijí v repu unplugged (viz jeho HANDOFF.md, sekce 10). Spot pro Alesvia zatím nevznikl.

Brand Alesvia: červená #DC2626, teplá bílá #F9F7F2, téměř černá #030712; Inter + Playfair Display.

Pokud Matias v T3 Code začne otevírat nové velké nápady (nové pilíře, SaaS…), je v pořádku to jemně pojmenovat: rozšiřování záběru je v projektu opakované riziko a blokátorem zůstává registrace, ne web.

## 11. Rozhodnutí a stav implementace

### Aktualizované zadání designu — 25. 10. 2026

- Matias odmítl editoriální homepage z PR #10 jako příliš suchou a bez vlastní identity. Předchozí „ship“ neznamená schválení; následná nezávislá revize vrátila `rebuild`.
- Preferuje původní barevný web, modrý rám/plochy a efekty. Newsreader zůstává preferencí. Cíl: moderní, profesionální a přívětivé UI/UX s plynulým pohybem, nikoli plošné odstranění efektů.
- Poslání Alesvie je širší než psychologie a AI: digitalizace, optimalizace, rychlost života a osobní i kolektivní identita. Jde o záběr poslání, ne tvrzení o nových fungujících programech. Základ zachycuje PRODUCT.md.
- Homepage má oslovit všechny tři skupiny, především partnery a instituce; dále veřejnost a dárce.
- [x] Připraveny tři návrhy filozofie v docs/design-philosophy.md a samostatná interaktivní deska docs/design-proposals/board.html (A Otevřený institut, B Živá platforma, C Současná veřejná instituce). Výběr směru není proveden. Matias výslovně chce nejdříve návrhy a vysvětlení, až potom aplikaci. Žádné změny aplikačních rout, komponent ani dictionaries v tomto úkolu.
- Návrhy jsou zálohované v draft PR #11 proti větvi PR #10; tento stack není souhlasem s odmítnutou homepage. Ověřeny všechny tři varianty na 728/390 px, přepínače a skutečná písma. Build (53 rout) a lint prošly (6 původních varování). Nezávislé `ship` platí jen pro předání plánovací desky; bez vybraného směru, bez schválení implementace. Výsledek dokumentace je v docs/design-proposals/README.md.

### Upřesnění od Matiase — 25. 10. 2026

- O-1: správce ani funkční kontaktní e-mail pro ochranu údajů zatím nejsou určeni. `privacy@alesvia.org` není založený. A-04 zůstává rozpracovaným návrhem; nelze ho vydávat za dokončené právní minimum.
- O-2: poskytovatel e-mailu / SMTP zatím není určený; přijetí DPA není potvrzené („snad“). Neprezentovat DPA ani mechanismus předávání jako ověřené.
- O-4: schválen statický náhled s odkazem místo živého iframe. Výhoda: rychlost a žádné načítání třetí strany před kliknutím; nevýhoda: nutnost aktualizace náhledu.
- Veřejné kredity (upřesnění 25. 10. 2026): Matias nechce na webu uvádět, že byl vytvořen s pomocí AI. Nepřidávat takové sdělení do tiráže, patičky ani jiného veřejného obsahu. Případná tiráž se může omezit na písma, licence a kredity použitých děl; tvrzení „vytvořeno bez AI“ se nepřidává. Interní záznamy o práci agentů zůstávají pracovní dokumentací.
- [x] Předání uložené v repozitáři; AGENTS.md odkazuje na HANDOFF.md a CLAUDE.md již importuje AGENTS.md.

- A-01: opraveny registrace a metadata v CS/EN, tým a rada odpovídají přípravné fázi. Ostrava je uvedena jako plánované sídlo. Ověřeno vyhledáním všech variant tvrzení o probíhající registraci; právní identita správce zůstává součástí A-04.

- A-02: Praktici v CS/EN citují přímo APA 2025 (n = 1 742), studii Iftikhar a kol. (AIES 2025) a zprávu WHO. Rozlišena kvalitativní studie, průzkum a odborné doporučení; odstraněno nepodložené tvrzení o chybějícím školení většiny terapeutů. Klinický garant je uveden jako podmínka spuštění. Obsah čeká na kontrolu psychologem. Zdroje otevřeny a ověřeny 25. 10. 2026.

- A-03: společný filtr draftů platí pro výpis, sitemap, RSS, generateStaticParams i přímé URL a metadata (404). Článek o ekosystému zůstal v repu. Jako draft je také mental-health-professionals-and-ai-chatbots: obsahuje stejné zastaralé APA/Brown/WHO údaje jako opravený A-02 a nepodložené klinické závěry. Před opětovným zveřejněním vyžaduje vlastní fakt-check a kontrolu psychologem. Ověřeny všechny tři veřejné přístupové funkce: pět publikovaných článků, dva drafty.

- A-04: technický audit a dvojjazyčný pracovní návrh jsou v docs/privacy-review-draft.md. Čeká na O-1/O-2 a právní kontrolu; veřejné zásady zůstávají nedokončené a obsahují nefunkční privacy@alesvia.org. Zjištěno navíc: Akademie i Policy Lab používají Convex i SMTP; nepotvrzené HTTP chyby SMTP mohou vést k falešnému potvrzení doručení. Clerk není v aplikaci zapojený.

- A-05: odkazy a JSON-LD používají www.unplugged.cz. Po schválení O-4 byl iframe nahrazen lokálním screenshotem úvodu (public/previews/unplugged-home.png, 1280 × 680, 80 kB) a běžným odkazem. Pořízen 25. 10. 2026 v T3 preview po odmítnutí analytiky; nezahrnuje neověřené statistiky. Aktualizovat po změnách Unplugged.

- A-06: komponenta components/CrisisSupport.tsx (CS/EN, crisis_support v dictionaries) je na homepage pod FAQ, na stránce Unplugged a u Praktiků. Obsahuje Linku první psychické pomoci 116 123, Linku bezpečí 116 111 (děti a studenti do 26 let, dle webu provozovatele), 155 / 112 a odkazy na zdroje. Provozní doby a cílové skupiny ověřeny u provozovatelů 25. 10. 2026. Text uvádí, že Alesvia krizovou pomoc neposkytuje. Současně přepsán unplugged.problem_text podle message house (bez tvrzení o „výchozí trajektorii závislosti“). Obojí čeká na kontrolu psychologem.

- A-07: homepage v editoriálním layoutu: pilíře jako číslovaný seznam (číslo, název + stav, popis, odkaz) oddělený linkami místo bento gridu; financování jako plný blok bez orbů a shimmer; FAQ jako prosté rozbalovací řádky. Ze všech stránek odstraněny gradient orby, tilt/spotlight karty, glassmorphism, gradientní text, scroll reveal, scroll progress a šum. Komponenty HeroBackground, TiltCard, SpotlightCard, ScrollReveal a ScrollProgress smazány v samostatném commitu včetně jejich CSS. Zbylé animace (FAQ ikona, zmenšení navigace, krátké prolnutí stavových zpráv formulářů) vypíná prefers-reduced-motion. Navíc nalezena a opravena chyba: vlastní fonty (Inter, Playfair Display) se nikdy nepoužily, web běžel v systémovém písmu. Příčina: Tailwind `@theme` odkazoval na proměnné z next/font, které existují jen na <body>; opraveno přes `@theme inline` (vzor z dokumentace Next.js 16). Doplněna sada `latin-ext`, aby česká diakritika nepřepadávala do jiného písma. Ověřeno CS desktop (1280 px) i mobil (390 px), bez horizontálního přetečení. Volba fontů samotná zůstává otevřená, viz PR.

- A-08: se souhlasem Matiase (O-3, 25. 10. 2026) stránka Tým představuje zakladatele: Bc. Matias Bunnik, vede přípravu organizace (ne „ředitel“ — ústav není zapsaný), Bc. v psychologii, studuje navazující magisterskou psychologii a informatiku. Bez fotky (připraveno na doplnění) a bez Psychotalks (Matias zatím nechce). JSON-LD NGO má `founder` (Person) s odkazem na stránku Tým. Po zápisu z.ú. změnit roli na „zakladatel a ředitel“ (fáze 2).

- LLM/AI SEO (mimo backlog, na žádost Matiase 25. 10. 2026): `llms.txt` a nový `llms-full.txt` se generují z dictionaries, routes, tezí a publikovaných článků (`lib/llms.ts`, statické route handlery). Původní ruční `public/llms.txt` tvrdil „registrace probíhá“ a „školí organizace“ — odstraněn. Stejné přehánění („školí organizace podle AI Actu“) opraveno v `metadata.description` a první odpovědi FAQ (CS/EN), které jdou i do JSON-LD. robots.ts už povoluje všechny crawlery včetně AI; zda blokovat trénovací crawlery (GPTBot, Google-Extended…) je otevřená otázka pro Matiase.

- A-09: statické stránky nemají lastModified, články používají datum publikace (drafty vyloučeny). Provedl Gemini 3.8 Flash přes Antigravity (rutinní úkol), diff zkontroloval Claude.

- [x] A-07b: audit 30 znaků šablonového vzhledu je v `docs/ai-design-tells-audit.md`, implementace v PR #6. Odstraněno mechanické číslování pilířů a dekorativní boční proužky, zklidněno FAQ a opraven kontrast textů. Tato poznámka doplňuje zápis, který v předchozí session nebyl dokončen.

- [x] Rešerše a příprava po A-07: původní návrh Gemini uložen a revidován v `docs/human-design-research-2026.md`; konkrétní příprava v `docs/editorial-design-preparation.md`. Katalog má 34 kandidátů, obsahově znovu ověřený výběr je výslovně oddělený. HTTP dostupnost není ověřením licence ani autorství. Opraveno nesprávné zařazení Newsreaderu mezi česká písma, odstraněny nepodložené cenové odhady, neověřený název písma a návrh nepravdivé tiráže „bez AI“. Vizuální směry a licence zatím nejsou schválené ani nasazené. Doporučen první krok: tisková a čtenářská úprava jednoho existujícího článku.

- [x] Ukázka článku podle Impeccable (na žádost Matiase): `/cs/design-preview/article` a `/en/design-preview/article`, přepínač Newsreader / Playfair + Inter, čtecí sloupec, funkční poznámka na okraji / v toku na mobilu a tiskové styly. Původní text článku zachován. Náhled je noindex, mimo sitemap/feed a Vercel production build jej vrátí jako 404; nejde o plošné nasazení nového písma. Použit oficiální skill `pbakaus/impeccable` 4.7.1 (lokálně nainstalovaný). Audit a přesné meze ověření: `docs/article-pilot-review.md`. PDF stránkování vyžaduje ještě kontrolu ve skutečném tiskovém dialogu; psychologický obsah přebraného článku čeká na lidskou revizi.
- Ukázka je pushnutá v PR #8 (navazuje na #7). Lokální build, lint a ověření prohlížečem prošly. Matias dodal příčinu selhání Vercel preview: `convex deploy` odmítl produkční deploy key v neprodukčním prostředí.
- [x] Oprava build příkazu pro preview: `deploy:convex` používá `scripts/vercel-build.mjs`; pouze `VERCEL_ENV=production` spouští původní Convex deploy, ostatní prostředí jen Next build. Čtyři Node testy ověřují podmínku, příkazy a návratové kódy bez skutečného deploye. Požadavky na ruční kontrolu scope klíče a veřejného `NEXT_PUBLIC_CONVEX_URL` pro Preview jsou v `docs/article-pilot-review.md`. Vzdálená nastavení, `.env*`, schema ani produkční data se neměnily. Stav nového vzdáleného deploymentu se ověřuje zvlášť.
- Vzdálený build commitu `b45ef2c` také selhal (deployment `J6sDuwFqzjMZvngPj27JccfcP2Ye`); GitHub neposkytuje chybu buildu a Vercel log vyžaduje přihlášení. Příčina nového selhání zůstává neověřená. Lokální preview build a čtyři testy prošly; online preview zatím není potvrzeno jako funkční.
- [x] Mobbin jako další zdroj (na žádost Matiase): prohlédnuty veřejné webové a mobilní galerie Article Detail včetně snímků The Atlantic Magazine, The New Yorker a WSJ. Konkrétní přínosy a limity jsou v `docs/mobbin-article-references.md`; porovnání doplněno k PR #8. Nepředstírat přístup do celé knihovny ani ověření aktuálních aplikací. Mobbin slouží jako reference, Impeccable jako kontrola našeho návrhu; žádné cizí vizuální aktivum nebylo převzato do webu.
- Rozhodnutí Matiase: po zprovoznění preview výrazně preferuje Newsreader; schválil pokračování na všech publikovaných článcích. URL `tidy-seahorse-810.eu-west-1.convex.cloud` má podle jeho nastavení sloužit Preview; typ deploymentu nebyl agentem ověřen v účtu. Matias potvrdil fungující preview, nikoli nezávislý audit oddělení databází.
- [x] Newsreader pro publikované články (5 článků × CS/EN): nadpis, perex i text přes route-scoped next/font, latin + latin-ext, váhy 400/500/600, swap. Inter zůstává v metadatech a navigaci. Čtecí sloupec 68ch, text 18 px mobil / 20 px desktop, tisk A4; bez přepínače písem a ukázkové poznámky. Opraveno HTML seznamů (`ul > li`). Texty, drafty, canonical a JSON-LD zachovány; obsah stále vyžaduje původní lidskou revizi. Build a lint prošly (6 původních varování), Impeccable type scan bez nálezů, všech 10 verzí HTTP 200 se zachovaným textem. CS/EN desktop i 360px mobil bez přetékání; tiskové deklarace ověřeny v prohlížeči, skutečné PDF stránkování zatím ne. Navazující PR proti větvi ukázky, merge jen Matias.
- [x] Návrh homepage podle Newsreader + Mobbin (Matias schválil přípravu jedné varianty): PR #10, větev `design/editorial-homepage` navazuje na články (PR #9). Směr, konkrétní reference a ověření v `docs/homepage-direction.md`. Návrh zachovává logo/barvy, zvýrazňuje aktivní Unplugged vlastním screenshotem, odlišuje tři připravované pilíře a odkazuje na existující články. Úvod přebírá poctivý metadata popis; Akademie používá stávající podtitulek místo tvrzení o současných příjmech. Build/TypeScript a lint prošly, detektor bez nálezů; zkontrolován desktop/mobil, funkční FAQ a odkazy. Nezávislá Impeccable revize: „ship“ pouze pro předání návrhu, bez materiálních nálezů. Vercel build commitu `350fdc7` úspěšný; hosted preview vyžaduje přihlášení. Schválení homepage Matiasem, merge i přenos na ostatní stránky zůstávají na něm.

- [x] Klikací prototyp návrhu A (`docs/design-proposals/prototype-a.html`): původní logo a motto, přehled směrů v navigaci, mobilní menu jako dialog, přepínání témat a cest ke spolupráci. Ověřeno klávesnicí i omezením pohybu na desktopu a 390 px; opraveno zvedání tlačítek při najetí, české URL a padding tlačítka v hlavičce. Pracovní texty kromě motta čekají na schválení. Živý web nezměněn.

- [x] Design system `docs/DESIGN.md` (písma uzamčena: Figtree + Literata, 25. 10. 2026) (návrh 25. 10. 2026): dvě rodiny písma (měkká nadpisová + textová), barvy beze změny, škála, prostor, pohyb, komponenty. Zjištěno: „původní“ styl, který se Matiasovi líbil, bylo systémové bezpatkové písmo (Segoe UI) — vlastní fonty se kvůli chybě nikdy nenačetly. Prototyp A nově přepíná celé dvojice (Figtree+Literata, Onest+Source Sans 3, Nunito+Source Sans 3, původní systémové, Newsreader+Inter). ⚠️ Čeká na volbu dvojice.

- [ ] Výklad značky `docs/brand-story.md`: význam symbolu převzat z brand identity (duben 2026), návrhy textů CS/EN. Jméno Alesvia nemá doložený význam (vybráno ze shortlistu podle výslovnosti a dostupnosti) — vymyšlená etymologie se nepíše. ⚠️ Čeká na Matiase: potvrzení výkladu, případný osobní příběh jména, umístění na webu.

- [ ] ⏸ PARKOVÁNO (rozhodnutí Matiase 25. 10. 2026: vlastník Alesvia, řešit v budoucnu). Nový samostatný projekt: vzdělávání o rizicích pokročilé AI podle knihy *If Anyone Builds It, Everyone Dies* (MIRI). Návrh oddělení a obsahových pravidel v `docs/project-ai-risk-education.md`; doporučena varianta A (samostatný projekt pod Alesvií, později vlastní byznys). ⚠️ Čeká: vlastnictví značky/obsahu (právník), pracovní název, cílová skupina, formát.
- Výklad jména od Matiase (ales = vše, via → v návrhu pravdivě „cesta“, nadhled = špička symbolu) zapracován do `docs/brand-story.md`; čeká na potvrzení formulace.

- [ ] Hlavní zaměření (Matias 25. 10. 2026): příjmové motory Policy Lab / think tank, produktizované služby a SaaS. Strategie v `docs/revenue-engines.md`: služby před SaaS, první SaaS kandidát „Chatbot Autonomy Check“, SaaS a investice jen přes s.r.o. (z.ú. nemůže prodat podíl), firewall think tank ↔ prodej, místo „certifikace“ veřejné zprávy. Ověřeno: Digital Omnibus (EU) 2026/1744 posunul high-risk na 2. 12. 2027; čl. 4 zmírněn, čl. 50 platí od 2. 8. 2026. `docs/seed-pitch-deck.md` obsahuje nepravdivou trakci — nepoužívat. ⚠️ Čeká na odpovědi Matiase (sekce 8).

- Rozhodnutí Matiase 25. 10. 2026 k příjmům: služby → SaaS (ano), první SaaS „Chatbot Autonomy Check“, s.r.o. pro SaaS vlastní ústav, firewall ano, certifikaci chce dělat (pojistky v `docs/revenue-engines.md` 4.3), kanály pro první rozhovory: Impact Hub a MSIC.

- Certifikace „na základě AI Actu“ (Matias): rozpracováno ve třech cestách v `docs/revenue-engines.md` 4.3 — dlouhodobě oznámený subjekt (čl. 31: nezávislost, zákaz poradenství → samostatná entita), hned kodex chování dle čl. 95 s ověřováním dodržování, a posouzení připravenosti. Nepoužívat „certifikováno dle AI Actu“ do získání statusu oznámeného subjektu. Písma: finální srovnání A (Nunito 800 + Source Sans 3) vs. B (Figtree 700 + Literata) v `docs/design-proposals/type-comparison-final.html`; ⚠️ čeká na volbu.

- [x] Typografický systém zaveden do webu (PR #13, větev `design/type-system`): Figtree pro nadpisy/UI, Literata pro text, tokeny na `<body>`. Ověřeno na homepage a v článku. Prototyp a dokumentace v PR #12.

- [x] Texty nové homepage schváleny Matiasem („vše ano“, 25. 10. 2026): `docs/homepage-copy-proposal.md` (27 bodů). Motto barevně rozděleno (tmavá + modrá) už v PR #13.

- [x] Tři alternativy úvodu bez odstavce vedle motta: `docs/design-proposals/hero-alternatives.html`. Figtree + Literata a původní logo/motto zachovány. A Otevřený prostor, B Vlastní směr, C Živý horizont. Samostatné návrhy, žádná změna aplikační homepage.
- [x] Výběr úvodu uzavřen přijetím pozdějšího návrhu `homepage-refined.html` (26. 10. 2026); předchozí tři alternativy jsou překonané. Česká i anglická verze jsou zapracovány do skutečné homepage.

- [x] Homepage „původní web, vylepšený“ (`docs/design-proposals/homepage-refined.html`): role tlačítek z původního webu, Titan/ISO Meet z Mobbinu, zlatá linie v symbolu jako výrazný prvek. Nahrazuje alternativy z PR #14. Matias 26. 10. potvrdil, že mobilní verze funguje skvěle, a požádal o sjednocení článků i zbytku webu.

- ✅ Pravidla financování sjednocena (Matias 26. 10. 2026): AI companion výrobci ne; AI laboratoře a další firmy ano za jasných podmínek, transparentně, bez vlivu na výstupy. Upraveno v HANDOFF sekce 3, `lib/llms.ts`, `docs/revenue-engines.md` a FAQ návrhu homepage. Stránka Financování („Dar nepřijmeme od subjektu, jehož jádrový produkt aktivně kritizujeme“) je s tím v souladu. Stanovy v návrhu – necitovat.
- ✅ Rozvržení homepage na jedné středové ose (Matias 26. 10. 2026: „vše do středu, ať to nebourá sem a tam“). Nadpisy a bloky na střed, odstavce uvnitř vlevo; zlatá linie z levého okraje přesunuta na středovou osu jako spojnice mezi sekcemi. Varianta s úvodem vlevo zrušena. Detaily v `docs/design-proposals/README.md`. Čára pod hlavičkou odstraněna; responzivita ověřena skriptem `docs/design-proposals/responsive-audit.mjs` na 12 šířkách 320–2560 px (bez přetečení, cíle ≥ 44 px, funkční mobilní menu).

- [x] Sjednocení skutečného Next.js webu podle schváleného návrhu (26. 10. 2026): homepage v CS/EN, původní logo, společná hlavička a patička, dialog mobilního menu, přehled pilířů, stránky organizace, formuláře, právní stránky, výpis a detaily článků. Sdílené role tlačítek: lilkové hlavní, světlé vedlejší, zlaté na modré. Články mají Figtree + Literata, úzký čtecí sloupec a zachované texty i tisk. Dokumentace a přesné meze ověření: `docs/sitewide-design-rollout.md`. Větev `design/sitewide-consistency` navazuje na PR #15; merge provádí Matias.

- [x] Navrácení pohybu podle připomínky Matiase (26. 10. 2026: dřívější animace působily profesionálněji): vykreslení zlatých spojnic, jemný nástup sekcí a záhlaví, doprovodný text úvodu, přechody navigace/menu a spolupráce. Články animují jen záhlaví. Barvy, rozvržení a texty zachovány. Ověřeno na desktopu a mobilu, systémové omezení pohybu včetně přepnutí za běhu a viditelnost bez JS. Build, lint i detektor prošly. Větev `feat/restore-brand-motion`, navazuje na PR #16; podrobnosti `docs/motion-restoration.md`.

- [x] Upřesnění vodorovných linek (26. 10. 2026): oddělovače témat, pilířů a výpisů se postupně probarvují zleva doprava. Vrácena také horní linka průchodu stránkou. Ověřen mezistav vyplnění, konečný stav, 0–100 % ukazatele, mobil bez přetékání a omezený pohyb. Doplněno do PR #17.

- [x] Závěrečná technická kontrola (27. 10. 2026) a příprava souhrnného PR proti `master`: `release/site-final-review`, report `docs/final-review-2026-10-27.md`. Opraveno přesměrování `/api/contact` na 404, falešný úspěch všech tří formulářů při HTTP chybě, escapování údajů v HTML e-mailu a hierarchie nadpisů. Build, lint (4 původní varování), 13 testů, 40 veřejných URL a 240 kontrol šířek prošly. Žádné testovací zápisy do produkce ani skutečné e-maily.
- [ ] Produkční nasazení: zůstává A-04 (správce, funkční kontakt, SMTP/DPA), skutečné ověření doručení, lidská kontrola psychologického obsahu a A-13. Lighthouse mobil: homepage 88–91 výkon, článek 95; přístupnost/SEO 100, best practices 96 kvůli lokálnímu Vercel analytics endpointu. Předchozí odsouhlasení vzhledu tyto body neuzavírá. Merge provádí Matias.

- [x] Potvrzení správce a pošty (Matias, 27. 10. 2026): do registrace je správcem Matias Bunnik, kontakt privacy@alesvia.org, poskytovatel Seznam Email Profi. Doplněno do CS/EN zásad a pracovního návrhu. A-04 zůstává otevřené: DPA, právní tituly, retence, předávání a skutečné doručení nejsou ověřeny. Sesterský Unplugged tímto commitem nezměněn.

- [x] Příprava provozního postupu A-04 (28. 10. 2026): Matias schválil pro běžné dotazy 12 měsíců po uzavření komunikace a měsíční ruční kontrolu pošty i Convexu. Doplněna CS/EN retence, skutečný rozsah formulářů a odkaz na ÚOOÚ. `docs/privacy-operations.md` obsahuje postup výmazu, ověřené oficiální podklady poskytovatelů a nastavení/test SMTP pro Matiase. Opraven chybný odkaz na DPA jiné společnosti (convex.com → convex.dev/legal/dpa). A-04 zůstává otevřené: právní titul dotazů je předložen k potvrzení, smlouvy/DPA a analytika vyžadují ověření. Žádné změny účtů, odeslané e-maily, mazání ani automatický retenční job.

- [x] Právní titul běžných dotazů (Matias, 30. 10. 2026): schválen oprávněný zájem na vyřízení a přiměřené navazující komunikaci; bez newsletteru a marketingu. Upraveny CS/EN zásady a upozornění u kontaktu, Akademie i Policy Labu se společným lokalizovaným odkazem. Nejde o automatický souhlas s dokumentem. A-04 zůstává otevřené kvůli posouzení nezbytnosti/poměření zájmů, analytice, účtům/DPA a skutečnému doručení.
- [ ] Tarif Vercelu (Matias, 30. 10. 2026): **Hobby**. Ověřeno u Vercelu téhož dne: DPA platí jen pro Pro a Enterprise, Hobby je omezen na osobní nekomerční užití (dary nevadí, inzerce prodeje služeb ano). Pro hosting a analytiku tedy chybí smlouva o zpracování; blokuje vydání A-04. Rozhoduje Matias: Pro, jiný hosting, nebo vypnout analytiku do vyřešení. Podrobnosti v `docs/privacy-operations.md`.
- [x] Vercel Web Analytics odstraněna (Matias, 30. 10. 2026): komponenta i balíček `@vercel/analytics`; CS/EN zásady uvádějí, že analytiku nepoužíváme. Na živém webu platí až po sloučení do `master`, do té doby ji lze vypnout ve Vercelu (projekt → Analytics).
