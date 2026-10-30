# Příjmové motory: Policy Lab, think tank a SaaS

Stav: **schváleno Matiasem v bodech níže** (25. 10. 2026): služby → SaaS, první SaaS „Chatbot Autonomy Check“, SaaS vlastní ústav, firewall ano, certifikaci chce Matias dělat. Navazuje na `docs/strategy.md` a `docs/seed-pitch-deck.md` (duben 2026), které tímto dokumentem v bodech níže opravuje. Ceny jsou **hypotézy k ověření**, ne nabídka. Nic z toho není na webu.

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
- Žádné peníze od výrobců AI companion produktů. Podpora od dalších firem včetně AI laboratoří jen za jasných podmínek, transparentně a bez vlivu na výstupy (rozhodnutí Matiase 26. 10. 2026, HANDOFF sekce 3).

### 4.3 Certifikace na základě AI Actu — rozhodnutí Matiase (25. 10. 2026)

Matias chce certifikaci **na základě AI Actu**. Co to právně znamená (ověřeno 25. 10. 2026, zdroje níže):

**Cesta 1 — oznámený subjekt (skutečná certifikace dle AI Actu, dlouhodobě).**
- Certifikáty dle AI Actu vydávají jen **oznámené subjekty** (notified bodies, čl. 28–39). V ČR je oznamujícím orgánem podle dostupných materiálů **ÚNMZ** (k ověření v aktuálním znění); dozor nad trhem **ČTÚ** (oddělení pro AI od 1. 9. 2026; český zákon o AI zatím není schválen).
- Čl. 31: subjekt musí být **nezávislý** na posuzovaných poskytovatelích, **nesmí jim poskytovat poradenství** a jeho lidé nesmí AI systémy vyvíjet ani prodávat. Nutná akreditace, pojištění, systém kvality.
- Důsledek: certifikační jednotka **nemůže být ve stejné organizaci jako poradenství a SaaS pro stejné klienty**. Potřebovala by samostatnou právnickou osobu a přísné oddělení. Je to roky práce, ne první produkt.
- Trh je úzký: certifikát od oznámeného subjektu potřebují hlavně vybrané vysoce rizikové systémy (např. biometrie a produkty dle Přílohy I); většina vysoce rizikových systémů dle Přílohy III se posuzuje **interní kontrolou** poskytovatele. **Chatboty nejsou vysoce rizikové** — pro ně certifikát dle AI Actu neexistuje.

**Cesta 2 — kodex chování dle čl. 95 AI Actu (doporučeno jako start).**
- Čl. 95 výslovně podporuje **dobrovolné kodexy**, které rozšiřují požadavky AI Actu na systémy, jež nejsou vysoce rizikové — tedy přesně **chatboty a AI asistenty**. Témata: důvěryhodná AI, AI gramotnost, ochrana zranitelných skupin, inkluzivní design; kodex má mít cíle a měřitelné ukazatele.
- Kodex sepisují poskytovatelé / provozovatelé nebo jejich sdružení **za účasti občanské společnosti a akademie**. Alesvia může být iniciátorem a odborným garantem (např. se startupy z Impact Hubu a MSIC jako signatáři) a nabízet **nezávislé ověření dodržování kodexu**.
- Pravdivé označení: „Ověřený soulad s Kodexem … dle čl. 95 AI Actu“.

**Cesta 3 — posouzení připravenosti na AI Act (služba hned).**
- Pro provozovatele, kterým od 2. 12. 2027 platí povinnosti pro vysoce rizikové systémy, a pro všechny ohledně čl. 4 a čl. 50. Výstup: zpráva a plán opatření, ne certifikát.

**Pravidla označení (aby nešlo o klamavou reklamu):** nepoužívat „certifikováno dle AI Actu“, „CE“ ani „posouzení shody“, dokud Alesvia (nebo její samostatná certifikační entita) není oznámeným subjektem. Pojistky z předchozí verze platí dál: veřejná kritéria, cena nezávislá na výsledku, omezená platnost, veřejný registr, kdo radil, necertifikuje. **Před spuštěním právní kontrola.**

Zdroje: [čl. 31 — AI Act Service Desk](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-31), [čl. 95 — AI Act Service Desk](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-95), [Lupa: ČTÚ rozjíždí dohled nad AI](https://www.lupa.cz/aktuality/ctu-rozjizdi-dohled-nad-umelou-inteligenci-nove-oddeleni-zahajilo-provoz/), [Dostupný advokát: český návrh zákona o AI](https://dostupnyadvokat.cz/blog/cesky-navrh-zakona-o-umele-inteligenci).

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
2. ~~Vlastnictví~~ — **s.r.o. pro SaaS vlastní ústav** (Matias). Zisk se vrací do mise; investor může vstoupit do s.r.o., ne do ústavu. Smluvní podoba → právník.
3. Souhlasíš s firewallem a s tím, že místo „certifikace“ budou veřejné zprávy?
4. Smím přepsat `seed-pitch-deck.md` tak, aby odpovídal pravdě?
5. ~~Kontakty~~ — kanály: **Impact Hub** a **Moravskoslezské inovační centrum (MSIC)** (Matias). Přes ně oslovit startupy a menší firmy s chatboty / AI asistenty; banky a telco později.

Zdroje k AI Actu: [EUR-Lex, nařízení (EU) 2026/1744](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ%3AL_202601744), [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/), [Jones Walker](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html), [Law & Technology — čl. 4](https://lawandtechnology.eu/en/ai-literacy-digital-omnibus-article-4-ai-act/). TA ČR SIGMA DC3: [MU FF](https://www.phil.muni.cz/en/about-us/organisational-structure/219915-project-support-office/news/sigma-sub-objective-3-supporting-the-innovation-potential-of-social-sciences-humanities-and-the-arts).
