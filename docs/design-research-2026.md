# Design research 2026 — non-template, editorial direction

Rešerši 25. 10. 2026 provedl Gemini 3.8 Flash (Antigravity), výběr a ověření Claude. Podklad pro rozhodnutí o fontech a dalším vizuálním směru po A-07. Nic z toho není nasazené.

Ověření: odkazy otestovány HTTP požadavkem; podpora češtiny u Google Fonts ověřena přítomností sady `latin-ext` v CSS API. U Fontshare a Displaay je čeština deklarována výrobcem, glyfy jsme sami nekontrolovali.

## Fonty (čeština = latin-ext)

| Font | Zdroj · licence | Role | Ověřeno |
| --- | --- | --- | --- |
| Newsreader | Production Type · Google Fonts, OFL | titulky i text; optické velikosti 6–72 | latin-ext ✓ |
| Literata | TypeTogether (Veronika Burian) · Google Fonts, OFL | text dlouhých článků | latin-ext ✓ |
| Instrument Serif + Instrument Sans | Instrument · Google Fonts, OFL | ostré titulky, sesterský sans | latin-ext ✓ |
| Fraunces | Undercase Type · Google Fonts, OFL | vřelejší titulky (osy SOFT, WONK) | latin-ext ✓ |
| Besley | Indestructible Type · Google Fonts, OFL | institucionální, „clarendon“ | latin-ext ✓ |
| General Sans, Gambetta | ITF · Fontshare Free License | sans / serif, self-host přes `next/font/local` | stránka ✓, čeština dle výrobce |
| Reckless | Displaay (Praha) · placená licence | prémiová volba pro titulky | https://displaay.net/typeface/reckless/ ✓ (Gemini uvedl chybnou URL) |

## Weby jako reference

- Psyche — https://psyche.co — esejistické čtení o psychologii, klidný rytmus.
- Noema — https://www.noemamag.com — bílý prostor, zakázková ilustrace místo AI klišé.
- AI Now Institute — https://ainowinstitute.org — střízlivá struktura výzkumných zpráv.
- Works in Progress — https://worksinprogress.co — knižní sazba, ~65 znaků na řádek, poznámky na okraji.
- Rest of World — https://restofworld.org — modulární rastr oddělený vlasovými linkami, bez karet.
- Emergence Magazine — https://emergencemagazine.org — řemeslný, hmatatelný dojem.
- Santa Fe Institute — https://www.santafe.edu — přesný, diagramatický jazyk.
- The Point — https://thepointmag.com — čistě textová střídmost (automatickou kontrolu blokuje, HTTP 403).

## Stavební kameny

- Utopia — https://utopia.fyi — plynulá typografická a mezerová škála přes `clamp()`, vkládá se do `@theme`.
- Iconoir — https://iconoir.com (MIT), Phosphor — https://phosphoricons.com (MIT, jen váhy thin/light).
- Wellcome Collection — https://wellcomecollection.org/works, Public Domain Review — https://publicdomainreview.org — historické perokresby a diagramy (public domain / CC0) místo AI ilustrací. Licenci ověřovat u každého díla zvlášť.

## Galerie

Typewolf, Fonts In Use, Minimal Gallery, Godly — aktivní. Siteinspire odpovídá (při kontrole HTTP 429, omezení rychlosti).

## Co jsme vědomě nepřevzali

- Zrnitá „papírová“ textura (Gemini doporučil, odkaz grainy-gradients.vercel.app je mrtvý — HTTP 402). Šum jsme v A-07 odstranili jako dekoraci; vracet ho nedává smysl.
