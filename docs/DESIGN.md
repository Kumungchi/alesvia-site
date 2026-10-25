# Alesvia — design system

Stav: **návrh k potvrzení** (25. 10. 2026). Jediný zdroj pravdy pro vzhled webu. Co tu není, se nepřidává bez úpravy tohoto souboru. Ověřuje se v `docs/design-proposals/prototype-a.html`.

## 1. Princip

Klidný, lidský, čitelný. Typografie a prostor nesou hierarchii; dekorace ne. Web nemá vypadat jako šablona — závazný seznam toho, čemu se vyhýbáme, je v `docs/ai-design-tells-audit.md`.

## 2. Písmo — dvě rodiny, každá s jednou rolí

| Role | Použití | Písmo |
| --- | --- | --- |
| **Nadpisová** (měkká) | H1–H3, motto, oznámení a stavy („Aktivní“, „V přípravě“), navigace, tlačítka, krátké štítky | ⚠️ čeká na volbu — výchozí Figtree |
| **Textová** | odstavce, perexy, články, FAQ odpovědi, formulářové popisky | ⚠️ čeká na volbu — výchozí Literata |

Pravidla:
- Žádné třetí písmo. Žádná kurzíva jako ozdoba jednoho slova.
- Obě rodiny: licence OFL, sady `latin` + `latin-ext` (čeština), načítání přes `next/font`, `display: swap`.
- Nadpisy váha 600 (motto 600), text 400, zvýraznění v textu 600. Žádné 800/900.
- Prostrkání nadpisů −0,02 až −0,03 em; text 0.
- Čtecí sloupec max. 68 znaků.

### Typografická škála (desktop → mobil)

| Token | Velikost | Řádkování | Rodina |
| --- | --- | --- | --- |
| `display` (motto) | clamp(44px, 7.4cqw, 84px) | 1.04 | nadpisová |
| `h2` | 40 → 34 px | 1.1 | nadpisová |
| `h3` | 25–28 px | 1.2 | nadpisová |
| `lead` (perex) | 18–20 px | 1.6 | textová |
| `body` | 16 px (článek 18 → 20 px) | 1.65 | textová |
| `small` / štítek | 13–14 px | 1.5 | nadpisová |

Minimum 12 px; nic menšího.

## 3. Barvy (existující značka, beze změny odstínů)

| Token | Hex | Role |
| --- | --- | --- |
| `bg` | #F9F9F8 | pozadí |
| `text` | #221E22 | text |
| `muted` | #6B6472 | vedlejší text (5,40 : 1) |
| `trust` | #0F2C59 | modrý rám, primární plochy |
| `primary` | #31263E | lilková — sekce spolupráce, tlačítka |
| `accent` | #ECA72C | zlatá — jen plochy, tečky a text na tmavém (6,64 : 1) |
| `accent-ink` | #9A6200 | zlatá pro text na světlém (4,84 : 1) |
| `surface` | #F4F4F2 / #E8EDF4 | tlumené sekce |

Kontrast textu vždy ≥ 4,5 : 1. Žádné gradienty, žádný text s průhledností pod 100 %.

## 4. Prostor a tvar

- Mezery v násobcích 4 px; sekce 52 px (desktop) / 36 px (mobil) svisle.
- Zaoblení: 8 px ovládací prvky a náhledy, 12 px panely; motto-rám jediná výjimka (asymetrický roh 44 px).
- Oddělení obsahu linkou (1 px), ne kartou se stínem. Stín jen u plovoucích vrstev (rozbalovací navigace, dialog).
- Cílová plocha ovládacích prvků ≥ 44 × 44 px.

## 5. Pohyb

- Jen jako odezva na akci: otevření panelu 300–400 ms, změna obsahu 400 ms, barva tlačítka 200 ms, `ease-out`.
- Žádné zvedání při najetí myší, žádné pružné/překmitávající křivky, žádné animace při scrollování.
- `prefers-reduced-motion: reduce` vypíná vše.

## 6. Komponenty (z prototypu A)

Hlavička s rozbalovacím přehledem směrů · mobilní menu jako modální dialog (Escape, návrat fokusu) · motto v modrém rámu · projekt Unplugged se skutečným náhledem · připravované pilíře jako rozbalovací řádky · přepínač cest ke spolupráci · krizové kontakty · patička.

## 7. Změny systému

Každá změna tokenu nebo pravidla = úprava tohoto souboru ve stejném commitu a záznam v HANDOFF.md.

## 8. Značka

Logo, symbol a wordmark se nemění (soubory v `public/brand/`). Výklad symbolu, původ jména a návrhy veřejných textů: `docs/brand-story.md`. Symbol: vnější A = instituce, zlatá středová linie = lidská autonomie. Jménu se nepřipisuje vymyšlená etymologie.
