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
- No Next build/lint was needed: only documentation and a standalone HTML planning artifact changed. No production settings or data touched.
