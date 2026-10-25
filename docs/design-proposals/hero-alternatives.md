# Alternativy úvodu homepage

Stav: návrhy k výběru. Režim povrchu: **Persuade**. Matias schválil navržené texty homepage, ale odmítl kompozici s vysvětlujícím odstavcem vedle motta. Žádná z těchto tří alternativ zatím není vybraná ani schválená k implementaci.

## Hranice návrhu

Samostatná deska `hero-alternatives.html` vzniká z `hero-alternatives.template.html` příkazem `node docs/design-proposals/build-hero-alternatives.mjs`. Nemění aplikační komponenty, routy ani veřejný web. Odkazy vedou na současné stránky; nejde o kompletní navigaci budoucí homepage.

Původní `public/brand/alesvia-lockup-horizontal.svg` je vložen beze změn. Motto zůstává „Lidská autonomie je základ.“. Lokálně vložená písma Figtree a Literata zachovávají schválené role, včetně českých znaků. Modrá `#0F2C59`, plum `#31263E` a zlatá `#ECA72C` navazují na značku.

## Tři kompozice

- **A — Otevřený prostor:** centrální motto a text v modrém rámu se zlatými řezy. Nejbližší původně oblíbenému rámování.
- **B — Vlastní směr:** motto a odstavec pod sebou, vedle nich velká geometrie s modrými plochami a zlatou linií. Na mobilu motiv pokračuje pod textem.
- **C — Živý horizont:** široká typografie a barevný horizont pod obsahem jako přechod k projektům.

Geometrie zavádí podpůrnou slate barvu `#7189a9`; návrhy zkoušejí také větší poloměry rohů a větší display sazbu. Tyto rozdíly platí pouze pro srovnávací desku a čekají na výběr. Nejde o změnu ani globální schválení `docs/DESIGN.md`.

## Ověření a revize

T3 preview bylo nedostupné s chybou `Authentication required`; vykreslení bylo ověřeno lokálním Playwrightem. Dodaná kontrola zahrnuje všechny tři varianty na 1280 a 390 px: bez horizontálního přetékání a JavaScript chyb, načtené písmo a původní logo, přepínání variant, systémové i ruční omezení pohybu. Pohyb se spouští tlačítkem. Build vytvořil 53 rout; lint skončil bez chyb se šesti existujícími varováními. Tyto funkční a build výsledky dodal implementující agent, reviewer je nezávisle neopakoval.

Vizuální reviewer otevřel všech šest desktopových a mobilních snímků. Jediný materiální nález byl nedostatečný kontrast statusu registrace přes světle modrou geometrii varianty C. Oprava přidala souvislý podklad `#0F2C59` s paddingem 8 × 12 px, nezávislý na pohybu geometrie. Následná revize zdroje a nového mobilního snímku potvrzuje **nález vyřešen**.

Disposition: **ship pro předání srovnání k výběru**, nikoli produkční nebo celowebové schválení. Fix-only revize hodnotila pouze uvedenou opravu; statické snímky samy nedokládají plynulost animací ani úplnou přístupnost.
