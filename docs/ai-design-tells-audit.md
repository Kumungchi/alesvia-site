# Audit: 30 znaků „AI designu“ na alesvia.org

Seznam sestavil Gemini 3.8 Flash (Antigravity) 25. 10. 2026 z veřejných zdrojů. Ověření a audit webu provedl Claude. Hlavní zdroje jsme otevřeli (HTTP 200). Pravidla pro číslované štítky, boční proužky, pružný easing a štítek nad nadpisem (eyebrow chip) jsou v katalogu Impeccable skutečně uvedena:

- Impeccable — AI Slop Catalog (Paul Bakaus): https://impeccable.style/slop
- Mateusz Sikora — Top 10 Signs a Website Was Built by AI: https://sikora.software/blog/ai-website-design
- Frontend Horse — The Linear Look (Alex Trost): https://frontend.horse/articles/the-linear-look/
- Linear — A design reset: https://linear.app/blog/a-design-reset

Stav: ✅ na webu není / odstraněno · 🔧 opraveno v této větvi · ⚠️ otevřené (rozhodnutí nebo obsah) · ✋ vědomě nepřevzato

| # | Znak | Stav na alesvia.org |
| --- | --- | --- |
| 1 | Fialovo-indigový gradient, tmavý režim | ✅ vlastní paleta (lilková, námořní, šafránová) |
| 2 | Bento grid | ✅ odstraněn v A-07 |
| 3 | Pilulka nad nadpisem | 🔧 pilulky stavů a tagů nahrazeny textem; zůstávají malé štítky sekcí bez rámečku |
| 4 | Nadužívané dlouhé pomlčky | 🔧 v CS nahrazeny typograficky správnou krátkou pomlčkou (36×); ⚠️ přepis vět v CS i EN je obsahová práce |
| 5 | Inter všude | ⚠️ Inter jen pro text, nadpisy Playfair; výměna fontů čeká na rozhodnutí (viz design-research-2026.md) |
| 6 | Sklo a zářící koule | ✅ odstraněno v A-07 a A-07b |
| 7 | Ikona v zaobleném čtverečku | ✅ odstraněno s InitiativeCard |
| 8 | Strojová trojice karet | ✅ nahrazeno seznamy a sloupci |
| 9 | Barevný proužek na okraji karty | 🔧 princip na stránce Teze je teď typografický citát |
| 10 | Emoji jako ikony | ✅ nejsou |
| 11 | Gradientní text | ✅ odstraněn |
| 12 | Falešný dashboard | ✅ není (náhled Unplugged je skutečný screenshot) |
| 13 | Karty v kartách | ✅ odstraněny |
| 14 | „Ne X. Je to Y.“ | ⚠️ „AI je nástroj. Ne vztah.“ je schválené hlavní sdělení; jinde v textech hlídat |
| 15 | Jedno kurzivní patkové slovo | ✅ není |
| 16 | Běžící pás log | ✅ není |
| 17 | Vymyšlené reference | ✅ nejsou (a nesmí být, viz HANDOFF sekce 2) |
| 18 | 3D objekty místo fotek | ⚠️ web nemá žádné fotky; viz rešerše lidských zdrojů |
| 19 | Vlasová linka + obří stín | ✅ odstraněno |
| 20 | Technická mřížka v pozadí | ✅ není |
| 21 | Cenová trojice | ✅ není |
| 22 | Pulzující tečka | ✅ tečka u „Aktivní“ je statická |
| 23 | Typografické uvozovky | ✋ v češtině jsou „ “ správná typografie, ne znak AI (Gemini: slabě doložené) |
| 24 | Prázdná buzzwords | ⚠️ hlídat při revizi textů (např. „architektura příjmů“, „akcelerátor programů“) |
| 25 | 3D naklápění karet | ✅ odstraněno v A-07 |
| 26 | Blikající kurzor | ✅ není |
| 27 | Číslování 01, 02… bez skutečného pořadí | 🔧 odstraněno ze seznamu pilířů (zavedli jsme ho omylem v A-07) |
| 28 | Prázdné obří mezery | ⚠️ sekce mají py-20; zhodnotit při A-13 |
| 29 | Pružný easing | 🔧 ikona FAQ už nepřekmitává (ease-out 200 ms) |
| 30 | Nízký kontrast šedého textu | 🔧 šedá 3,72:1 → 5,40:1; oranžový text na světlém pozadí 1,97:1 → 4,84:1 (nový token accent-ink); vybledlé varianty /60 a /80 odstraněny |
