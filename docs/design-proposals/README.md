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

## Homepage — původní web, vylepšený (`homepage-refined.html`)

Na žádost Matiase (26. 10. 2026) po odmítnutí alternativ z PR #14: vychází ze struktury, barev a **rolí tlačítek původního webu** — plné lilkové `#31263E` pro hlavní akci (i v hlavičce), světlé s jemným rámečkem pro vedlejší, zlaté na tmavomodrém bloku. Schválená písma Figtree + Literata a všech 27 schválených textů.

Reference z Mobbin (veřejná galerie Sites, bez přihlášení vidět jen první stránka, 26. 10. 2026): **Titan** — úvod v rámu se svislými linkami sloupců, titulek vlevo, výrazný obraz vpravo, řádek faktů s vlasovými linkami; **ISO Meet** — přímý titulek a jeden dominantní obraz. Převzat princip, ne grafika.

Výrazný prvek: symbol Alesvie ve velkém v pravé části úvodu; **zlatá středová linie (autonomie) se při načtení vysune nahoru** (1,1 s, jednou). Při omezení pohybu statické. Řádek faktů jen s pravdivými údaji (aktivní Unplugged, tři pilíře v přípravě, plánované sídlo Ostrava, registrace v přípravě).

Ověřeno v T3 Chromium: 1280 px a 390 px bez přetečení; computed barvy tlačítek odpovídají rolím; rozbalovací „Naše směry“ (Escape zavře); mobilní menu jako dialog s návratem fokusu; Figtree a Literata načtené z vložených souborů. Opraveno při kontrole: tlačítko v hlavičce přebíjené stylem odkazů, velikost loga v patičce.
