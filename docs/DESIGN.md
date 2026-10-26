# Alesvia — design system

Stav: **schválený základ pro celý web**. Figtree + Literata schválil Matias 25. 10. 2026. Dne 26. 10. potvrdil mobilní podobu `docs/design-proposals/homepage-refined.html` a požádal o stejný vzhled článků a ostatních stránek. Starší kompozice jsou historií návrhů.

## Princip

Nadpisy a obsahové bloky mají společnou středovou osu. Dlouhé odstavce uvnitř zůstávají vlevo. Zlatá spojnice mezi sekcemi navazuje na symbol loga. Původní logo, motto a role barev tlačítek se zachovávají. Přenos vychází z přijatého prototypu, nikoli z dřívějších alternativ.

## Písmo a měřítko

- **Figtree**, váhy 400/600/700: nadpisy, navigace, tlačítka, popisky, formulářové prvky, metadata.
- **Literata**, váhy 400/600: odstavce, perexy, články a odpovědi FAQ.
- Obě rodiny přes `next/font/google`, latin + latin-ext, `display: swap`; návštěvník nestahuje fonty z Googlu.
- Motto homepage: `clamp(46px, min(15vw, 13.6vh), 164px)`, řádkování .92, tři řádky podle přijatého prototypu.
- Nadpis stránky: 40–76 px; nadpis sekce: 28–44 px, na homepage 36–68 px.
- Článek: text 18 px mobil / 20 px desktop, řádkování 1.65 a sloupec 68ch. Titulek 40 px mobil / 64 px desktop.
- Nadpisy váha 600–700, tracking nejméně −.04em. Žádné ozdobné třetí písmo.

## Barvy a role

| Token | Hex | Role |
| --- | --- | --- |
| bg | #F9F9F8 | papírové pozadí |
| text | #221E22 | hlavní text |
| muted | #6B6472 | vedlejší text na světlém |
| trust | #0F2C59 | modrý pás a důraz v mottu |
| primary | #31263E | hlavní tlačítka na světlém |
| accent | #ECA72C | spojnice a hlavní akce na modrém |
| accent-ink | #9A6200 | zlatý text a fokus na světlém |
| surface | #F4F4F2 | tlumená plocha |

Hlavní tlačítko je lilkové s bílým textem, vedlejší bílé s jemným obrysem, hlavní na modrém zlaté s tmavým textem. Hover lilkové ztmaví na #241B2E, nemění ji na modrou; zlaté zesvětlí na #F3BC57. Fokus je tmavě zlatý na světlém a světle zlatý na modrém.

Běžný text má kontrast alespoň 4,5 : 1. Na modrém se používá bílá nebo světlý modrý odstín (#E3E9F2 / #C5D0E1).

## Prostor a tvar

- Vnější odsazení: `clamp(20px, 4vw, 56px)`.
- Obsah hlavičky a patičky nejvýše 1440 px; institucionální sekce 1080 px; dlouhé odstavce nejvýše 68ch.
- Rozestupy sekcí 64–112 px. Zlaté spojnice 56–64 px, šířka 2 px.
- Zaoblení tlačítek a polí 8 px. Obsahové sekce a modrý pás jsou rovné; bez dekorativních stínů.
- Stín pouze u plovoucí navigace. Cíle společných ovládacích prvků alespoň 44 × 44 px.
- Hlavička bez spodní čáry, shodná na homepage i podstránkách.

## Pohyb

Matias 26. 10. výslovně požádal o navrácení animací, které při plošném sjednocení chyběly. Homepage zachovává nástup řádků motta (800 ms); doprovodný text naváže za 300 ms. Zlaté spojnice se při příchodu sekce vykreslí za 900 ms a obsah jemně naváže (600 ms, posun 12 px). Záhlaví podstránek a článků má nástup 650 ms; tělo článku se při čtení nepohybuje. Každá sekce se spustí jen jednou při návštěvě stránky.

Navigace kreslí zlaté podtržení, menu a dialog se otevřou za 240–300 ms, změna cesty spolupráce má přechod 300 ms. Tlačítka drží své barvy a šipka se posune o 3 px, bez zvedání celého tlačítka. Vše používá exponenciální ease-out, bez pružení a nekonečných smyček.

Obsah je v serverovém HTML viditelný; JavaScript přidává pohyb, nikoli podmínku zobrazení. Systémové omezení pohybu vypíná animace i přechody, včetně již běžících Web Animations. Výchozí stav a tisk jsou plně čitelné. Implementace: společný `components/SiteMotion.tsx`, jeden IntersectionObserver a cleanup při navigaci; bez nové knihovny a bez scroll listeneru na každé sekci.

## Sdílené komponenty

- Původní SVG lockup v hlavičce i patičce.
- Přehled směrů s jejich skutečným stavem; mobilní nativní dialog, Escape, návrat fokusu a zámek scrollování.
- Vycentrovaný PageHeader, nadpisy sekcí a čtecí bloky.
- Projekt Unplugged se skutečným lokálním náhledem, připravované pilíře jako přehledné řádky.
- Modrý pás s přepínačem spolupráce a zlatým CTA.
- Formuláře se společnými poli a lilkovým odesíláním, krizové kontakty, společná patička.
- Články s vlastní čtecí šířkou a zachovanými tiskovými pravidly A4.

## Implementace a změny

Sdílené styly: `app/site-system.css`. Homepage a články mají scoped CSS Modules. Tokeny barev a rodiny písem zůstávají v `app/globals.css`; fonty vlastní společný layout. Při změně systému upravit tento dokument i HANDOFF.md.

Logo, symbol a wordmark se neupravují. Výklad značky a nezodpovězené obsahové otázky jsou v `docs/brand-story.md`. Zdokumentované vizuální sjednocení nezavršuje nevyřešené zásady ochrany údajů ani lidskou kontrolu psychologického obsahu.
