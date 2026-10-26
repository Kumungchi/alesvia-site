# Identity comparison board

Open `board.html` directly in a browser. It is self-contained, uses embedded existing Newsreader and Inter Latin/Latin-ext fonts, and makes no remote font requests. The two OFL files accompany those fonts. The board is a private planning artifact, not a new application route or a production homepage.

Source: `board.template.html`. Regenerate from the project's existing `.next/static` font files with `node docs/design-proposals/build-board.mjs`. The generator only writes this board; it does not build or change the application.

Controls switch between three proposals, toggle a narrow composition, replay the proposed motion, and select topics in proposal B. A mock collaboration CTA explains its intended destination instead of submitting or navigating. Mock header labels are noninteractive layout specimens. The Unplugged and reference links are real.

Read `../design-philosophy.md` for purpose, layout/type/color/motion rationale, cross-page application, risks, evidence limits and next steps. Selecting a tab is not approval. The public mission copy and navigation are proposals.

## Verification

- T3 Chromium at 728px and 390px: all three states rendered, no horizontal overflow, both actual fonts loaded.
- Topic switching, phone toggle, motion trigger and mock CTA feedback were exercised. Browser resource entries showed no remote dependencies.
- All six captures were opened for inspection. Tall captures contain blank space below the document; it is not a missing content region.
- `html_preview` at 728px rendered with no console errors; dark-theme note contrast corrected afterward.
- Impeccable detector: small 10/11px declarations raised to 12px in the scaled sketch; shadow made neutral. Inter warning retained intentionally because it is the existing UI family paired with Newsreader. Font novelty is not presented as sufficient identity.
- Reduced-motion CSS is included; no claim of OS-level emulation, whole-site accessibility or production performance verification.
- Full Next build passed (53 static routes); lint passed with zero errors and six existing warnings, following the repository pre-PR workflow. Only documentation and a standalone HTML planning artifact changed. No production settings or data touched.

## Documentation review — 25 October 2026

Disposition: **ship for planning-board selection only**, with no material fixes. Source review of `PRODUCT.md`, `../design-philosophy.md` and `board.template.html` is consistent with this README's contract: three proposals, illustrative copy, current versus planned activities, and explicit selection before implementation. The documented incumbent palette is blue #0F2C59, plum #31263E, gold #ECA72C and warm ground #F9F9F8; existing Newsreader and Inter supply the board's typography. These are source-grounded references, not approval of a new system. No direction is selected and no approved `DESIGN.md` or design system exists; neither `DESIGN.md` nor `.impeccable/design.json` is created. This review adds no live-site implementation or new browser, build or production verification.

## Prototype A — interactive draft (`prototype-a.html`)

Selected direction A ("Otevřený institut") as a clickable Czech prototype: exact existing logo file, original motto, project overview in navigation, mobile menu, topic and collaboration switches. Regenerate with `node docs/design-proposals/build-prototype-a.mjs` (reads `board.html` fonts and `public/brand/alesvia-lockup-horizontal.svg`). Planning artifact only; no application route changed.

Verified in T3 Chromium on 25 October 2026 (desktop 1280 px, iPhone 12 Pro 390 px):

- Mobile menu: opens as a modal dialog with focus on "Zavřít"; Escape closes it and returns focus to "Menu"; an in-menu link closes the dialog and moves focus to the target section.
- Desktop "Naše směry": opens with Enter; Escape closes it and returns focus to the summary.
- "Omezit pohyb" removes animations and transitions (hero animation `none`, button transition `0s`); the OS reduced-motion preference is also honored.
- No horizontal overflow at 390 px; Newsreader and Inter load from embedded files; no console errors or remote requests besides the local preview image.
- Fixed during review: hover lift and shadow on buttons and the Unplugged preview (contradicted the A-07b audit), Czech URLs (`/cs/kontakt`, `/cs/vyzkum`, `/cs/financovani`), and the header CTA losing its horizontal padding.

Removed at Matias's request: the rule-of-three tagline "Technologie. Společnost. Vlastní směr." Other copy apart from the motto is provisional; Inter remains the UI face by choice.

Motto typeface comparison (requested 25 October 2026: softer letterforms than Newsreader): a switch above the prototype toggles the motto between Newsreader (current), Fraunces with the SOFT axis at 100 and WONK 0, and Literata. Both candidates are OFL, embedded from `fonts/` (latin + latin-ext only, licenses alongside) and verified loaded in the browser. Only the motto changes; applying a choice to other headings is a separate decision.

## Homepage — editoriální návrh (`homepage-refined.html`)

Verze 2 (26. 10. 2026) po zamítnutí verze 1 („kapky, elementy, velké boxy“). Postaveno podle design skillu jako **tištěný editorial veřejného institutu**: typografie a mřížka nesou celou stránku; žádné karty, krabice, pilulky ani stíny; zaoblená jsou jen původní tlačítka (role zachovány: lilkové hlavní, světlé vedlejší, zlaté na tmavomodrém). Jediná barevná plocha je tmavomodrý pruh spolupráce přes celou šířku, bez zaoblení.

Výrazný prvek: **zlatá spojnice na středové ose** (zlatá cesta ze symbolu loga) mezi sekcemi; vysune se, když k ní čtenář doscrolluje. Motto se při načtení vysune řádek po řádku z účaří. Obojí vypnuto při omezení pohybu.

Rozvržení (Matias 26. 10. 2026): **celá stránka stojí na jedné středové ose**, aby se zarovnání nestřídalo mezi středem a levým okrajem. Na střed jsou úvod, štítky a nadpisy sekcí, obsahové sloupce, tmavomodrý pruh i krizové linky. Dlouhé odstavce (témata, články, odpovědi FAQ) zůstávají uvnitř vycentrovaných bloků zarovnané vlevo kvůli čitelnosti. Varianta s úvodem vlevo a symbolem byla odstraněna. Tmavá čára pod hlavičkou odstraněna (Matias: „buď málo, nebo až moc omezující“); hlavička a patička jsou na velkých monitorech omezené na 1440 px.

Responzivita: `responsive-audit.mjs <url>` (headless Chrome přes CDP) projde 12 šířek od 320 do 2560 px. Výsledek 26. 10. 2026: bez vodorovného přetečení, všechny dotykové cíle ≥ 44 px, nadpisy přesně na středové ose, mobilní menu se otevírá i zavírá, nejmenší písmo 13 px (12 px jen štítek „Pokračovat“).

Mobbin (veřejná galerie Sites): Titan — řádek faktů pod hlavičkou, vlasové linky a disciplína mřížky. Převzat princip, ne grafika.

Ověřeno v T3 Chromium 1440 px a 390 px: bez přetečení, 0 stínů, žádné zaoblení nad 8 px, mobilní dialog s návratem fokusu, rozbalovací „Naše směry“. Impeccable detector: 2× „cramped padding“ posouzeno jako falešný poplach (záměrná linka nad seznamem pilířů s 20 px odsazením; modrý pruh má vnitřní okraj >100 px).
