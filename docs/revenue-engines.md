# Příjmové motory: Policy Lab, think tank a SaaS

Stav: **pracovní strategie k diskusi** (25. 10. 2026). Navazuje na `docs/strategy.md` a `docs/seed-pitch-deck.md` (duben 2026), které tímto dokumentem v bodech níže opravuje. Ceny jsou **hypotézy k ověření**, ne nabídka. Nic z toho není na webu.

## 0. Shrnutí

Tři motory, každý s jinou rolí a jinou právní formou:

| Motor | Co prodává | Kdo platí | Role | Právní forma |
| --- | --- | --- | --- | --- |
| **1. Policy Lab (think tank)** | výzkum, stanoviska, metodiky, kulaté stoly | granty, veřejné zakázky, nadace, partnerský kruh | důvěra a autorita | z.ú. (hlavní činnost) |
| **2. Produktizované služby** | posouzení konverzační AI, programy AI gramotnosti | firmy, školy, veřejná správa | první vlastní příjmy, učení se trhu | z.ú. (doplňková činnost) |
| **3. SaaS nástroje** | software vzniklý z opakovaných služeb | firmy (předplatné) | škálovatelný příjem | **samostatná s.r.o.** (viz 4.1) |

Pořadí je záměrné: **služby před softwarem.** SaaS se staví až z toho, co si zákazníci opakovaně zaplatili ručně (stejná logika jako v pitch decku, „services-to-software“).

## 1. Policy Lab jako think tank

### Produkty
1. **Policy briefy a stanoviska** (zdarma, veřejné) — k AI Actu, ochraně dětí a duševnímu zdraví v kontextu konverzační AI. Buduje autoritu; nepřináší příjem přímo.
2. **Autonomy Impact Assessment — otevřená metodika** — veřejně publikovaný postup, jak posoudit dopad AI systému na lidskou autonomii (závislost, pseudo-intimita, eskalace na člověka, transparentnost). Otevřená metodika = důvěra; placené je její **provedení** (motor 2).
3. **Smluvní studie a odborná stanoviska** pro ministerstva, kraje, regulátory a parlamentní výbory.
4. **Kulaté stoly a briefingy** pro veřejnou správu a odbornou veřejnost (Chatham House pravidla).
5. **Partnerský kruh** — roční příspěvek organizací, které podporují nezávislou práci (bez vlivu na výstupy; strop ~25 % ročních příjmů na dárce podle stránky Financování).

### Financování (k ověření aktuálních výzev)
- **European AI & Society Fund** — přímo na občanskou společnost a AI v Evropě (`docs/strategy.md`).
- **TA ČR SIGMA, dílčí cíl 3** (společenské vědy) — výzva 2026 skončila 18. 3. 2026; hlídat další kolo.
- **Horizon Europe / CERV** — jako partner konsorcia, ne hlavní žadatel (malá organizace).
- **Visegrad Fund** a česká nadace — regionální projekty.
- **Veřejné zakázky malého rozsahu** — studie pro veřejnou správu.

Pozn.: většina grantů vyžaduje existující právnickou osobu a často historii. **Zápis z.ú. je tedy podmínkou motoru 1** (fáze 2 v HANDOFF).

## 2. Produktizované služby

| Služba | Pro koho | Rozsah | Cenová hypotéza |
| --- | --- | --- | --- |
| **Posouzení konverzační AI** (chatbot, AI asistent v zákaznické péči, aplikace pro mladé) podle metodiky Autonomy Impact Assessment + kontrola transparentnosti dle čl. 50 AI Actu | banky, telco, e-commerce, veřejné služby, edtech | 2–4 týdny, zpráva + doporučení pro vývoj | 60–150 tis. Kč |
| **Program AI gramotnosti dle čl. 4** (Akademie) | firmy, školy, úřady | pilotní workshop → program po rolích | workshop 25–60 tis. Kč |
| **Klinické vzdělávání** (Praktici) | psychologové, terapeuti | až s klinickým garantem | — (blokováno) |

Proč konverzační AI: tady má Alesvia **odlišení, které nemá běžná compliance firma** — psychologii pseudo-intimity, závislosti a krizové eskalace. Obecný „AI Act compliance“ trh je přeplněný.

Fakta k AI Actu (ověřeno 25. 10. 2026, Digital Omnibus, nařízení (EU) 2026/1744, účinné od 27. 7. 2026):
- **Čl. 4 AI gramotnost** platí; Omnibus ji zmírnil na povinnost **přijmout opatření** bez záruky konkrétní úrovně. Dozor od srpna 2026.
- **Čl. 50 transparentnost** (např. informovat, že člověk mluví s AI) platí od 2. 8. 2026 — **přímo relevantní pro chatboty**.
- **Vysoce rizikové systémy (Příloha III)** posunuty na **2. 12. 2027**; produkty dle Přílohy I na 2. 8. 2028.

## 3. SaaS — kandidáti

Stavět až po 3 placených pilotech motoru 2. Kandidáti v pořadí podle odlišení:

1. **Chatbot Autonomy Check** — sada testovacích scénářů pro konverzační AI: přizná, že je AI (čl. 50)? Jak reaguje na krizi a odkáže na pomoc? Podporuje závislost, lichotí (sycophancy), napodobuje vztah? Výstup: zpráva a opakované měření po změnách modelu. *Unikátní vůči trhu.* Hypotéza: 3–10 tis. Kč/měsíc podle počtu systémů.
2. **Evidence AI gramotnosti (čl. 4)** — evidence školení po rolích, export pro dozor, česky. *Konkurenční trh*, odlišení jen jazykem a psychologickým obsahem. Hypotéza: 990–2 990 Kč/měsíc.
3. **Monitoring** (později) — průběžné testování nasazených chatbotů.

Validace před vývojem: 10 rozhovorů s odpovědnými lidmi (produkt, compliance, zákaznická péče) → 3 placené pilotní služby → teprve pak MVP.

## 4. Pravidla, bez kterých to nepůjde

### 4.1 Právní struktura
- **Zapsaný ústav nemůže prodat podíl investorovi.** Seed investice (pitch deck: 1–1,5 mil. USD) je možná jen do **obchodní společnosti (s.r.o.)**.
- Varianty: s.r.o. vlastněná ústavem (zisk se vrací do mise), nebo s.r.o. zakladatele s licenční smlouvou na metodiku ústavu. Každá má jiné důsledky pro nezávislost a pro grantové podmínky. **Rozhodnout s právníkem** (spolu s A-04).
- Služby v ústavu lze provozovat jako **doplňkovou činnost** (zisk do hlavního účelu).

### 4.2 Firewall mezi think tankem a prodejem
Pitch deck tvrdí: *„píšeme pravidla, podle kterých se firmy řídí, a pak jim prodáme řešení“*. Pro think tank je to **střet zájmů**, který by zničil právě tu důvěru, na které model stojí. Pravidla:
- Metodika a stanoviska Policy Labu jsou veřejné a nezávislé na tom, co se prodává.
- Policy Lab nedoporučuje vlastní produkty; veřejně zveřejňujeme, kdo za co platil.
- Žádné peníze od výrobců AI companion produktů; žádné cash granty od AI laboratoří (HANDOFF sekce 3).

### 4.3 Žádná „certifikace“
„Alesvia Certified“ (pitch deck, strategie) **nedoporučuji.** Posouzení shody dle AI Actu dělají výrobci nebo notifikované osoby; soukromá pečeť placená posuzovanou firmou může klamat uživatele a je to střet zájmů. Místo toho: **veřejná zpráva o posouzení s datem a rozsahem**.

## 5. Co je v existujících dokumentech potřeba opravit

`docs/seed-pitch-deck.md` (nesmí jít investorům v současné podobě):
- „We are currently executing Phase 1: selling manual assessments“ — **nepravda**, žádná služba se zatím neprodala.
- „Fortune 500s“, trakce, inbound engine — nedoloženo.
- „€15M fines starting in 2026“ — pokuty mají tři stupně (až 35 mil. € / 7 %, 15 mil. € / 3 %, 7,5 mil. € / 1 %) a povinnosti pro vysoce rizikové systémy jsou posunuté na prosinec 2027.
- TAM čísla (70 mld. USD, 5 mld. USD) bez zdroje.
- Iniciativy „Watch“, „Compass“ jsou návrhy, ne existující programy.

## 6. Plán na 18 měsíců

| Období | Policy Lab | Služby | SaaS |
| --- | --- | --- | --- |
| 0–6 měsíců | metodika Autonomy Impact Assessment (draft), 2 policy briefy, 1 grantová žádost po zápisu z.ú. | 10 rozhovorů, 1 pilotní workshop Akademie, 1–3 pilotní posouzení chatbotu | nic se nestaví |
| 6–12 měsíců | kulatý stůl s veřejnou správou, publikace metodiky | standardní nabídka a ceník podle pilotů | rozhodnutí o s.r.o.; prototyp Chatbot Autonomy Check interně |
| 12–18 měsíců | partnerský kruh, druhý grant | opakovaní klienti | MVP pro 3 platící pilotní zákazníky |

## 7. Web — co tam smí být

Podle pravdivostní tabulky: Policy Lab a Akademie jako **„v přípravě“** s popisem záměru a možností se ozvat. **SaaS na web nedávat**, dokud neexistuje. Připravit kontaktní cestu „Pilotní posouzení chatbotu“ až ve chvíli, kdy je kapacita ho dodat.

## 8. Otázky pro Matiase

1. Souhlasíš s pořadím služby → SaaS a s prvním SaaS kandidátem „Chatbot Autonomy Check“?
2. Kdo bude vlastnit s.r.o. pro SaaS (ústav, nebo ty)? → právník.
3. Souhlasíš s firewallem a s tím, že místo „certifikace“ budou veřejné zprávy?
4. Smím přepsat `seed-pitch-deck.md` tak, aby odpovídal pravdě?
5. Prvních 10 lidí/organizací na rozhovory — máš kontakty (banky, telco, edtech, úřady)?

Zdroje k AI Actu: [EUR-Lex, nařízení (EU) 2026/1744](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ%3AL_202601744), [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/), [Jones Walker](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html), [Law & Technology — čl. 4](https://lawandtechnology.eu/en/ai-literacy-digital-omnibus-article-4-ai-act/). TA ČR SIGMA DC3: [MU FF](https://www.phil.muni.cz/en/about-us/organisational-structure/219915-project-support-office/news/sigma-sub-objective-3-supporting-the-innovation-potential-of-social-sciences-humanities-and-the-arts).
