# Ochrana údajů — provozní postup před vydáním

Stav: 28. 10. 2026. Vlastník postupu: Matias Bunnik. Toto je interní postup, nikoli potvrzení splnění všech právních podmínek.

## Potvrzená rozhodnutí

- Do registrace ústavu je správcem Matias Bunnik, kontakt pro žádosti je privacy@alesvia.org.
- Poskytovatelem pošty je Seznam Email Profi.
- Běžné dotazy: po dobu vyřízení, nejdéle dalších 12 měsíců po uzavření komunikace; měsíční ruční kontrola pošty i Convexu (schváleno Matiasem 28. 10. 2026).
- Právní titul pro běžné dotazy: oprávněný zájem na vyřízení komunikace (schváleno Matiasem 30. 10. 2026); newsletter a marketing tím nejsou pokryty. U všech tří formulářů je věcné upozornění s odkazem na zásady, nikoli „souhlas odesláním“.
- Toto není automatický výmaz. Aplikace nemá stav uzavření dotazu ani plánovanou retenční úlohu. Schválení pravidla není důkaz jeho vykonávání.

## Měsíční kontrola a výmaz

1. V soukromé provozní evidenci zaznamenat datum uzavření dotazu, termín výmazu a odpovídající ID záznamů. Obsah zpráv ani e-mailové adresy znovu nekopírovat. Evidence nepatří do GitHubu; i ID může být osobním údajem a má mít omezený přístup.
2. Uzavření počítat od poslední věcné komunikace nebo doloženého vyřízení. Datum vytvoření záznamu v Convexu není datum uzavření. U nevyřízených nebo opuštěných poptávek měsíčně přezkoumat, zda další uchování ještě má účel; samotné označení „otevřeno“ neopravňuje k neomezenému uchování.
3. Při každé měsíční kontrole zahrnout i dotazy, jejichž 12měsíční lhůta uplyne před další kontrolou. Vymazat je nejpozději v jejich termínu, případně při této kontrole dříve. Tím se lhůta neprodlužuje o další měsíc.
4. Ověřit správný projekt a deployment v Convex dashboardu. Dohledat všechny související záznamy tabulky `messages`, včetně duplicit po opakovaném odeslání, a odstranit je. Neodvozovat termín pouze z `_creationTime` a nepoužívat hromadný výmaz tabulky.
5. Dohledat a vymazat související zprávy v přijaté i odeslané poště, koši, případných BCC schránkách, přeposlaných kopiích a lokálních exportech. Zkontrolovat oprávněné příjemce; každý další příjemce znamená další místo výmazu.
6. Zaznamenat jen datum kontroly, počet odstraněných záznamů a případné doložené výjimky s termínem přezkumu. Po výmazu odstranit i identifikátory, které už nejsou potřeba. Nedělat „zálohu před výmazem“ obsahující stejné údaje.
7. U poskytovatelů ověřit životní cyklus záloh a dobu jejich doběhu. Tuto dobu zatím neznáme a neslibujeme okamžité vymazání všech záloh. Při obnově zálohy se mají dříve provedené výmazy znovu uplatnit před obnovením běžného přístupu.

Tento postup platí pro běžné dotazy. Nevytváří pravidlo pro smluvní/účetní dokumenty ani pro marketingovou databázi. Případnou výjimku uchování je potřeba doložit konkrétním účelem, právním titulem a lhůtou. Evidence zájmu o zatím nespuštěný pilot nemá sama o sobě neomezenou dobu uchování.

## Co ověřit u poskytovatelů

V neveřejné evidenci smluv uložit poskytovatele, smluvní entitu, tarif, datum a způsob přijetí podmínek, použitelnou verzi DPA, region produkce i Preview, subzpracovatele a mechanismus případného předávání mimo EHP. Do repozitáře nevkládat smlouvy s osobními údaji ani přihlašovací údaje.

| Služba | Ověřený veřejný podklad | Co ještě musí potvrdit vlastník účtu |
| --- | --- | --- |
| Vercel | [DPA](https://vercel.com/legal/dpa), ověřeno 28. 10. 2026: úvod vymezuje použitelnost pro Pro a Enterprise; dokument obsahuje standardní smluvní doložky. [Podmínky](https://vercel.com/legal/terms) na DPA odkazují. | **Tarif potvrzen: Hobby (Matias, 30. 10. 2026).** DPA (verze 17. 3. 2026, účinná od 31. 3. 2026) se podle svého znění vztahuje jen na zákazníky Pro a Enterprise, takže pro Hobby účet není doložena smlouva o zpracování dle čl. 28 GDPR pro hosting ani analytiku. [Podmínky](https://vercel.com/legal/terms) (19. 10. 2026, čl. 4) a [Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines) (14. 9. 2026) omezují Hobby na osobní nekomerční užití; žádost o dary podle nich komerčním užitím není, inzerce prodeje produktu nebo služby ano. Web Analytics je na Hobby dostupná (50 000 událostí měsíčně). Řešení (Pro, jiný hosting, nebo vypnutí analytiky do vyřešení) rozhoduje Matias; žádný upgrade se tímto neschvaluje. |
| Convex | [DPA správného poskytovatele](https://www.convex.dev/legal/dpa), ověřeno 28. 10. 2026 přes vložený dokument v prohlížeči: role správce/zpracovatele, SCC pro příslušná předávání a zálohy s vlastní retenční dobou. [Regiony](https://docs.convex.dev/production/regions) umožňují volbu místa deploymentu. | Přijetí příslušné smlouvy a skutečné regiony produkce i Preview, přístupy podpory a doba uchování záloh. Název dříve sdílené URL není ověřením všech účtů a prostředí. |
| Seznam Email Profi | [Podmínky služby](https://o-seznam.cz/napoveda/email/profi/smluvni-podminky/), ověřeno 28. 10. 2026: poskytovatel Seznam.cz, a.s.; samy o sobě nedokládají konkrétní zpracovatelské uspořádání tohoto účtu. | Přijaté podmínky účtu, role při zpracování obsahu zpráv a použitelné smluvní uspořádání pro údaje třetích osob, kopie/přeposílání a mazání záloh. Při nejasnosti se obrátit na podporu Seznamu. |
| Clerk | SDK ani autentizace Clerk nejsou v aplikaci nalezeny. | Nezařazovat do veřejného seznamu jen proto, že byl ve starém backlogu. Pokud se používá mimo tento web, určit konkrétní tok. |

Oprava staršího podkladu: `convex.com/data-protection-addendum` patří jinému poskytovateli (Convex Labs LLC), ne backendu tohoto projektu. Správný zdroj je `www.convex.dev/legal/dpa`. Veřejná existence dokumentu u žádné služby nedokazuje přijetí v účtu.

## Analytika a právní posouzení

**Stav k 30. 10. 2026: Vercel Web Analytics odstraněna z kódu (rozhodnutí Matiase), a to do vyřešení smlouvy s Vercelem.** Na živém webu platí až po sloučení do `master`. Níže uvedené podklady slouží pro případné budoucí zapnutí; to by vyžadovalo použitelnou DPA, právní titul a úpravu zásad.

[Vercel popisuje](https://vercel.com/docs/analytics/privacy-policy) analytiku bez cookies třetích stran, denní identifikátor návštěvy vytvořený z požadavku a jeho zánik po 24 hodinách. To není retenční lhůta všech agregovaných statistik. Analytika může přenášet URL, referrer, filtrované parametry, čas, přibližnou polohu a údaje o zařízení/prohlížeči. V kódu je `<Analytics />` bez souhlasového kroku a bez vlastní redakce URL; právní režim a nastavení účtu zatím nejsou potvrzeny.

Nedokládat soulad jen slovem „anonymizované“. Ověřit rozsah dat, query parametry, skutečnou dobu uchování a použitelný právní titul. Alternativa „do vyjasnění vypnout“ byla 30. 10. 2026 provedena. Ve formulářích nebyly nalezeny vlastní marketingové odběry. Zájem o pilot neopravňuje automaticky přidat kontakt do newsletteru.

Rámec pro kontrolu: [ÚOOÚ — základní příručka](https://uoou.gov.cz/verejnost/zakladni-prirucka-k-ochrane-udaju) a [informování a cookies](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies). Pro právní titul oprávněného zájmu zpracovat i jeho odůvodnění a posouzení dopadů, ne jen změnit text souhlasu.

## SMTP — postup pro Matiase

Ověřeno podle [oficiální nápovědy Seznamu](https://o-seznam.cz/napoveda/email/mohlo-by-se-hodit/postovni-programy-a-aplikace/) dne 28. 10. 2026. Agent `.env*`, Vercel nastavení ani DNS nemění.

Ve Vercelu otevřít projekt → Settings → Environment Variables. Pro test vybrat pouze **Preview** a podle potřeby konkrétní testovací větev. Produkční hodnoty nastavit samostatně až při připraveném vydání. Backendové údaje nesmějí mít prefix `NEXT_PUBLIC_`.

| Proměnná používaná kódem | Hodnota / význam |
| --- | --- |
| `SMTP_HOST` | `smtp.seznam.cz` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` (TLS od začátku spojení) |
| `SMTP_USER` | Celá adresa skutečné odesílací schránky; nemusí to být privacy@alesvia.org. |
| `SMTP_PASS` | Heslo pro SMTP přístup dané schránky podle jejího nastavení; zadat pouze přímo ve Vercelu. |
| `SMTP_FROM_EMAIL` | Odesílací adresa povolená pro přihlášenou schránku, pro test nejlépe totožná s `SMTP_USER`. |
| `CONTACT_FORM_TO_EMAIL` | Příjemce obecných dotazů. |
| `CONTACT_FORM_PARTNERS_EMAIL` | Příjemce partnerství, Akademie a Policy Labu. |
| `CONTACT_FORM_MEDIA_EMAIL` | Příjemce dotazů médií. |
| `CONTACT_FORM_RESEARCH_EMAIL` | Příjemce výzkumných dotazů. |
| `CONTACT_FORM_OTHER_EMAIL` | Příjemce ostatních dotazů. |
| `CONTACT_FORM_BCC_EMAIL` | Volitelná další kopie; ponechat nenastavené, pokud není potřeba. |

Při absenci příjemců má kód výchozí info@alesvia.org / partners@alesvia.org / press@alesvia.org. Matias 30. 10. 2026 potvrdil, že všechny tyto schránky jsou v Email Profi založené; příjem ještě není otestovaný. V produkci proto proměnné příjemců nejsou nutné, pokud mají platit tyto výchozí adresy. Pro Preview přesměrovat **všech pět** příjemců do jedné ověřené vlastní testovací schránky. Hodnoty neposílat do chatu spolu s hesly. Po změně proměnných vytvořit nový Preview deployment. Nespouštět `convex deploy` jako součást tohoto testu.

## Zkouška doručení — zatím neprovedena

Nejprve potvrdit, že Preview mluví s odděleným testovacím Convex deploymentem. Nelze to dovodit jen z úspěšného buildu. Pokud je napojená produkce, nevytvářet tam testovací záznamy; nejprve opravit nastavení testovacího prostředí.

1. Použít vlastní adresu odesílatele a krátký neosobní text s unikátním označením `ALESVIA-SMTP-TEST-YYYYMMDD-01`. Nevkládat informace o zdraví ani cizí osobní údaje.
2. Odeslat jednou přes kontaktní formulář, jednou Akademii a jednou Policy Lab; pro každý test nové označení. Ověřit CS i EN zobrazení potvrzení bez zbytečného opakování zápisů. Matice příjemců je pět kategorií výše; před vydáním ověřit také jejich skutečné směrování.
3. U každé zprávy ověřit úspěch UI, jeden odpovídající testovací záznam v Convexu a přijetí e-mailu v cílové schránce (včetně spamu). Zkontrolovat správný Reply-To; API samo neposílá potvrzovací e-mail návštěvníkovi.
4. Potvrzení `{ok:true}` znamená dokončené volání SMTP, nikoli důkaz pozdějšího přijetí do schránky. Pokud test selže, nejprve dohledat uložený záznam; opakování může vytvořit duplicitu. Neodesílat formulář ve smyčce.
5. Zaznamenat pouze testovací označení, datum, prostředí, výsledek a commit. Do repozitáře nevkládat e-maily, hlavičky s osobními údaji ani screenshoty správy účtů.
6. Po kontrole odstranit testovací záznamy a e-maily z testovacích prostředí. Test příjmu na privacy@alesvia.org má zvlášť provést Matias ze své jiné schránky.

Agent v tomto kroku nic neposílal, nemazal ani nenastavoval v účtech. Skutečné odeslání a smazání testovacích dat není splněno napsáním tohoto návodu.

## Před vydáním

- [ ] Potvrdit tarif a smluvní uspořádání Vercelu, Convexu a Seznamu, včetně předávání a záloh. Vercel: tarif Hobby potvrzen, DPA se na něj nevztahuje (viz tabulka) — blokuje vydání do rozhodnutí.
- [ ] Zahájit měsíční retenční kontrolu a soukromou evidenci uzavření; stanovit první termín.
- [ ] Dokončit posouzení nezbytnosti a poměření zájmů pro schválený titul dotazů (analytika je vypnutá, její právní režim se řeší až při případném zapnutí). Samotná volba titulu ani změna textu není dokončené posouzení.
- [ ] Ověřit SMTP a doručení do skutečných schránek podle postupu výše.
- [ ] Sjednotit správce a kontakt s Unplugged v sesterském repozitáři.
- [ ] Doporučeno nechat ověřit právníkem (Frank Bold / ANNO MSK). Agent není právník.

A-04 zůstává otevřené; merge ani produkční nasazení tento dokument neschvaluje.

## Ověření této úpravy

30. 10. 2026: změna titulu a společného upozornění prošla plným buildem (53 rout, TypeScript), cíleným ESLintem na všech změněných TSX souborech a Impeccable detektorem bez nálezů. Všech šest formulářových stránek CS/EN má upozornění v prerenderu, odkaz ve správném jazyce a cílovou stránku HTTP 200. Vizuálně ověřen kontakt na desktopu a anglická Akademie na 390 px bez přetečení. Formuláře nebyly odeslány; jejich datový tok se neměnil.

28. 10. 2026: plný `npm run build` prošel (53 rout, TypeScript), `npm run lint` má 0 chyb a 4 původní varování v generovaných souborech Convexu. V prerenderu obou jazyků jsou potvrzený kontakt, 12měsíční lhůta a odkaz na ÚOOÚ. Česká i anglická stránka zkontrolována v T3 prohlížeči na 390 a 1280 CSS px bez horizontálního přetečení; jeden hlavní nadpis a správný jazyk. Cílený Impeccable detector na změněné stránce nemá nálezy. Nejde o nové měření Lighthouse ani ověření kompletního webu. Změny nezahrnují nové e-mailové nebo databázové testovací zápisy.
