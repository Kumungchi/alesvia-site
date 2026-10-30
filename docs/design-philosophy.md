# Alesvia: identity proposals

Status: proposals for Matias, not an approved design system. 25 October 2026.

## Corrected brief

The owner rejected PR #10's plain editorial homepage. Newsreader was liked; removing color, framing, effects and spatial hierarchy was not. A new independent review returned `rebuild`. Earlier `ship` is superseded by owner feedback. The original homepage is a source of recognizable identity, not a mandate to restore every effect.

Alesvia spans digitalization, AI, optimization, accelerated life and personal/collective identity. Partners and institutions are the primary homepage audience, with public and donor paths retained. New public copy is illustrative and requires approval; it does not create new programs or claim current capabilities.

## Scope and decision

The owner accepted developing three named proposals: Open Institute, Living Platform, Contemporary Public Institution. These are three expansions of the pinned existing blue/plum/gold world, not randomly selected replacement brands. The standalone HTML board compares their composition, type roles and motion; it does not modify Next routes or deploy a redesign. No image-generation comp or approved composition exists. These executable sketches demonstrate layout and movement rather than promise final production imagery.

## A — Open Institute / Otevřený institut

Thesis: a confident blue architectural frame creates a recognizable space for human judgment. Closest continuity with the original site. Cream reading area held inside a blue field; gold identifies the opening, plum carries supporting UI. Newsreader 400/500 carries the main statement; Inter 400/600 carries explanation and controls. A precise framing gesture settles once, not continuous parallax.

Homepage sequence: mission and collaboration → active Unplugged with real output → compact planned programs → writing → blue collaboration/funding close. Pillar pages use the frame around a real activity or program explanation; articles keep Newsreader and an unobtrusive contents rail; contact uses a calm single column. Risk: formal tone; balance with warm spacing, direct language and actual human material when available. Never fabricate a team photo.

## B — Living Platform / Živá platforma

Thesis: show connections between human agency and the systems shaping everyday life. A working topic selector changes a central panel; the topics are mission lenses, not four newly launched services. The first screen is predominantly blue, with a small warm surface and gold active state. Inter 600 leads the short display, Newsreader 400 punctuates it and carries long reading. One panel slides a short distance when the visitor chooses a topic; no automatic carousel.

Homepage sequence: thematic exploration → clear organization explanation → active/project statuses → collaboration → articles. Pillars inherit the selectable section navigation; articles remain quiet; contact carries the selected topic only with explicit user action. Risk: can resemble a technology vendor and hide the purpose behind interaction. All topics and the organization explanation must remain accessible without interaction. Do not imply live data or measurements.

## C — Contemporary Public Institution / Současná veřejná instituce

Thesis: Alesvia is a place to connect perspectives and open public questions. A compact blue masthead, large typographic composition and offset plum discussion panel create a public-facing cultural identity. Gold forms a limited punctuation accent. Newsreader 500 leads the main composition; Inter organizes navigation, metadata and participation. Short vertical transitions connect the composition without hiding text.

Homepage sequence: question and mission → themes and an actual publication → active Unplugged → planned initiatives → institution collaboration. Pillars use stronger publication-like covers; articles have an optional evidence note and clear source links; contact stays conventional. Risk: may read as a magazine rather than an institution, so current activities and collaboration must appear early. Bespoke editorial imagery would strengthen this direction but is not an existing asset.

## Shared visual and interaction rules proposed

- Preserve the actual logo geometry/colors. Site blue #0F2C59, plum #31263E, warm ground #F9F9F8, gold #ECA72C. Logo blue/gold retain their existing separate values. Gold is an accent or dark-surface foreground, not small text on cream.
- Two families only: Newsreader and Inter are the initial tested pairing. Distinguish the directions through role, weight, scale and composition. A new font name alone will not create identity. Test Czech diacritics, EN expansion, numerals and form labels before a final type decision.
- Production size targets, not the reduced board scale: display 48–88px desktop / 38–48px mobile; body 18px; controls 16px. Long reading measure around 65–70ch. Avoid oversized heading-only first screens.
- Motion: controls 160–220ms; panel changes 350–450ms; one framing arrival 700–900ms. Ease-out, no bounce by default. Keep content visible. No scroll-jacking, cursor replacement, or hover-only information. Reduced-motion removes spatial motion and retains immediate state changes. Board motion is user-triggered.
- UI states: default/hover/focus/pressed; forms also pending/success/error. Buttons describe the next action. Error messages preserve input and explain recovery. No actual forms or submissions in this design board.
- Mobile: design hierarchy and framing specifically, not simply shrink desktop. Navigation has an explicit menu, minimum 44px controls, no horizontally scrolling topic requirement. Board's phone switch demonstrates a narrow composition, not production device certification.
- Imagery: use real publication excerpts and activity material when it exists. Illustrations can explain concepts but must not masquerade as evidence. No fake dashboards, fabricated statistics, partner logos or workshop photography.

## Information architecture proposal, awaiting approval

About / Areas and initiatives / Writing / Collaboration, with CS–EN switch and a visible collaboration action. Funding remains reachable from collaboration and footer; whether it deserves top navigation will be decided against donor needs. On the homepage: state what Alesvia is, show what exists, separate planned work, then offer a relevant next step. Do not turn all three audiences into equal competing buttons in every section.

## References and what they support

- [Mobbin Sites](https://mobbin.com/explore/sites): public gallery only. Previously viewed Titan, ISO Meet and Mercury; reopened for this round. Use section hierarchy, visible interaction affordances and real artifact scale as questions to investigate. No full paid-library access, copied assets or human-authorship certification.
- [Instrument](https://www.instrument.com/): reference for connecting brand, product and concrete work across one presentation; not a claim Alesvia has its client evidence. Prior page inspection was content-level, not a full motion audit.
- [Newsreader / Production Type](https://github.com/productiontype/Newsreader): official repository describes on-screen continuous reading; OFL license. Existing project font assets are embedded in the standalone sketch with the license retained.
- [Inter / Rasmus Andersson](https://rsms.me/inter/): official page describes UI/display optical sizes and OFL. Existing build assets are reused with license. No remote font calls in the board.
- Existing Alesvia brand SVGs and original homepage source: own-world authority. The old source confirms blue funding, dark Academy, gold accents and unequal hierarchy; no historical screenshot is claimed.

These references inform choices, not prove that the resulting design is effective. Aesthetic approval belongs to Matias; usability needs later interaction testing.

## Sequence after selection

1. Select a philosophy or name specific elements to revise. This is the current decision.
2. Refine one desktop/mobile homepage composition plus representative pillar, article and contact screens, with actual CS/EN copy.
3. Approve typography, palette roles, navigation and motion specimens; record DESIGN.md and component/state specifications.
4. Implement only the approved scope in a PR. Build/lint, browser interactions, reduced motion, keyboard/zoom and mobile performance checks follow.

No implementation begins merely because the board opens or a tab is selected. Tab selection is local exploration, not approval.
