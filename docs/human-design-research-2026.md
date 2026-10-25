# Design od skutečných lidí: 34 řemeslných prvků a zdrojů pro Alesvia (2026)

Rešerši 25. 10. 2026 provedl Gemini 3.8 Flash (Antigravity) na základě zadání: vyhnout se 30 znakům „AI designu“ a soustředit se na autentické, lidské designové prvky od reálných tvůrců, designérů a studií.

Kontext Alesvia: *„AI je nástroj. Ne vztah.“* — lidská autonomie, psychologie a technologie. Web běží na Next.js 16 (App Router) a Tailwind v4 v redakčním (editorial) stylu.

## Jak číst stav rešerše

Původní seznam sestavil Gemini. Obsahově ověřený výběr je níže; ostatní položky jsou kandidáti k dalšímu ověření. Původní HTTP značky byly odstraněny: dostupná URL sama nepotvrzuje autorství, licenci, cenu ani původ konkrétního souboru. Ne všechny zdroje vznikly v letech 2024–2026; rok v názvu označuje datum rešerše.

Kontrola Codexem 25. 10. 2026:

- **Absurd Design:** web připisuje projekt Dianě Valeanu a výslovně deklaruje ruční tvorbu bez AI. Před užitím konkrétní ilustrace ověřit její licenci; předchozí odhad ceny nebyl doložen. https://absurd.design/
- **drawETC.:** oficiální web má portfolio a adresář talentů pro ilustraci a design. Zakázku, cenu a požadavek na doložitelnou ruční tvorbu je třeba sjednat s vybraným autorem. https://www.drawetc.com/
- **Open Peeps:** web jmenuje Pabla Stanleyho a uvádí CC0. Knihovna je sestavitelná a rozšířená, takže sama nezaručuje osobitost; vhodnější pro pracovní návrh než hlavní identitu. https://www.openpeeps.com/
- **Tufte CSS:** oficiální dokumentace jmenuje Davea Liepmanna a popisuje poznámky na okraji. Převzít princip sazby, ne celý styl. https://edwardtufte.github.io/tufte-css/
- **Littlefoot:** oficiální dokumentace nabízí poznámkové popovery, ovládání klávesnicí a správu fokusu. Před integrací zkontrolovat konkrétní verzi a licenci v repozitáři; deklarace přístupnosti nenahrazuje test na našem webu. https://littlefoot.js.org/
- **GOV.UK:** oficiální design systém vysvětluje kontrastní stavy fokusu. Převzít princip rozpoznatelnosti na všech pozadích, barvy přizpůsobit Alesvia a změřit. https://design-system.service.gov.uk/get-started/focus-states/
- **Tobias:** oficiální produktová stránka Displaay existuje. Autor konkrétního písma, rozsah webové licence a cena vyžadují kontrolu před nákupem. https://displaay.net/typeface/tobias/
- **Newsreader:** autorem je Production Type; jde o písmo určené pro souvislé čtení na obrazovce, nikoli o českou písmolijnu. Primární repozitář obsahuje licenční soubor OFL. https://github.com/productiontype/Newsreader

U CSS iniciál navíc otevřena specifikace W3C: https://www.w3.org/TR/css-inline-3/#initial-letter . Podporu v cílových prohlížečích ověřit před nasazením a zajistit běžný první znak jako fallback.

### Katalog kandidátů

Následující návrhy použití jsou naše designové interpretace. Nejsou důkazem účinnosti, licence ani autorství všech aktiv na daném webu.

---

## 1. Ilustrace a obrazový materiál od lidí

Místo generovaných 3D objektů, plastových postaviček nebo abstraktních gradientních mřížek:

### 1. LUSTR Festival Showcase & Adresář
* **URL:** [https://lustrfestival.cz/](https://lustrfestival.cz/)
* **Autor / Studio:** LUSTR festival ilustrace z.s. (Praha)
* **Licenční podklad k ověření před použitím:** Adresář pro výběr autora; odhad ceny není ověřený. Vyžádat konkrétní nabídku.
* **Využití pro Alesvia:** Přímý zdroj prověřených českých i středoevropských autorů současné autorské ilustrace pro zadání doprovodných kreseb k nosným esejům.

### 2. drawETC.
* **URL:** [https://www.drawetc.com/](https://www.drawetc.com/)
* **Autor / Studio:** Vladimír Strejček a studio drawETC. (Praha)
* **Licenční podklad k ověření před použitím:** Komerční zakázková tvorba; kalkulace na míru.
* **Využití pro Alesvia:** Zastřešující pražské ilustrátorské studio pro poptávku výtvarníka schopného ztvárnit složitá psychologická témata bez generického vizuálního balastu.

### 3. Absurd Design
* **URL:** [https://absurd.design/](https://absurd.design/)
* **Autor / Studio:** Diana Văleanu (nezávislá ilustrátorka)
* **Licenční podklad k ověření před použitím:** Před použitím ověřit licenci konkrétní ilustrace a aktuální podmínky členství; cenový odhad odstraněn.
* **Využití pro Alesvia:** Expresivní, záměrně nedokonalá perokresba surrealistických lidsko-technologických situací. Vizuálně ztělesňuje absurditu antropomorfizace technologií.

### 4. Open Peeps
* **URL:** [https://www.openpeeps.com/](https://www.openpeeps.com/)
* **Autor / Studio:** Pablo Stanley
* **Licenční podklad k ověření před použitím:** CC0 1.0 Universal (Public Domain, zdarma i pro komerční užití).
* **Využití pro Alesvia:** Ručně skicované vektorové postavy a emoce. Ve střídmých linkách (stroke-only) použitelné jako drobné glosy nebo avatary autorů.

### 5. eSbírky (Národní muzeum)
* **URL:** [https://www.esbirky.cz/](https://www.esbirky.cz/)
* **Autor / Studio:** Národní muzeum a participující české paměťové instituce.
* **Licenční podklad k ověření před použitím:** Public Domain (PDM) / Creative Commons u volných děl.
* **Využití pro Alesvia:** Autentické historické české rytiny, archivní skici a fotografie z dějin vědy, psychologie a filosofie; dodávají webu hloubku a ukotvení v české kulturní paměti.

### 6. Rijksstudio (Rijksmuseum)
* **URL:** [https://www.rijksmuseum.nl/en/rijksstudio](https://www.rijksmuseum.nl/en/rijksstudio)
* **Autor / Studio:** Rijksmuseum Amsterdam.
* **Licenční podklad k ověření před použitím:** Ověřit práva a podmínky stažení u konkrétního sbírkového objektu; otevřenost archivu neznamená jednotnou licenci všech položek.
* **Využití pro Alesvia:** Detaily historických grafických listů, anatomických perokreseb a studií lidské tváře a výrazu jako doprovodných textur v záhlaví esejů.

### 7. Dokumentární fotografie Romana Krafta
* **URL:** [https://unsplash.com/@iamromankraft](https://unsplash.com/@iamromankraft) (automatická kontrola dříve blokována)
* **Autor / Studio:** Roman Kraft (fotograf a designér, Berlín / ČR).
* **Licenční podklad k ověření před použitím:** Unsplash License (volné užití).
* **Využití pro Alesvia:** Autentické, nestylizované záběry čtení knih, otevřených zápisníků, rukou a klidných interiérů, podtrhující analogové soustředění člověka.

---

## 2. Typografické a redakční detaily

Řemeslné sazby, které odlišují novinářský/knižní web od AI landing page:

### 8. Tufte CSS (Sidenotes & Marginálie)
* **URL:** [https://edwardtufte.github.io/tufte-css/](https://edwardtufte.github.io/tufte-css/)
* **Autor / Studio:** Dave Liepmann (inspirováno Edwardem Tuftem).
* **Licenční podklad k ověření před použitím:** MIT License.
* **Využití pro Alesvia:** Umístění poznámek a odboček do pravého okraje textu namísto odskakování do patičky. Zachovává kontinuitu hlubokého čtení na desktopu.

### 9. Gwern.net: Sidenotes In Web Design
* **URL:** [https://gwern.net/sidenote](https://gwern.net/sidenote)
* **Autor / Studio:** Gwern Branwen.
* **Licenční podklad k ověření před použitím:** Licenci textu, kódu a převzatých obrázků ověřit odděleně u konkrétního materiálu.
* **Využití pro Alesvia:** Technické řešení překryvů marginálií a elegantní degradace na úzkých displejích mobilních telefonů.

### 10. Littlefoot.js (Inline Footnote Popovers)
* **URL:** [https://littlefoot.js.org/](https://littlefoot.js.org/)
* **Autor / Studio:** Francisco Giordano (vanilla JS nástupce Bigfoot.js od Chrise Sauvé).
* **Licenční podklad k ověření před použitím:** MIT License.
* **Využití pro Alesvia:** Nenápadné číselné indexy, které po kliknutí/tapnutí rozbalí poznámku v bublině přímo u věty; ideální pro mobilní zobrazení v Tailwindu.

### 11. CSS `initial-letter` (Nativní iniciály / Drop Caps)
* **URL:** [https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter](https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter)
* **Autor / Studio:** W3C / MDN Web Docs.
* **Licenční podklad k ověření před použitím:** Otevřený webový standard.
* **Využití pro Alesvia:** Čistá sazba úvodní iniciály článku přes 2–3 řádky bez nutnosti hackování `float` a `line-height`.

### 12. CSS `hanging-punctuation` (Optické vyrovnání okraje)
* **URL:** [https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation](https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation)
* **Autor / Studio:** W3C / MDN Web Docs.
* **Licenční podklad k ověření před použitím:** Otevřený webový standard.
* **Využití pro Alesvia:** Vysunutí počátečních uvozovek a pomlček do levého okraje textového bloku; vytváří dokonalou optickou svislici odstavce.

### 13. Butterick’s Practical Typography: Pull Quotes
* **URL:** [https://practicaltypography.com/](https://practicaltypography.com/)
* **Autor / Studio:** Matthew Butterick (typograf a právník).
* **Licenční podklad k ověření před použitím:** Otevřená publikace; knižní licence.
* **Využití pro Alesvia:** Přísná redakční pravidla pro zvýrazněné citace z textu bez křiklavých rámečků – pouze decentní odsazení a změna velikosti patkového písma.

### 14. Tocbot (Table-of-Contents Rail)
* **URL:** [https://tscanlin.github.io/tocbot/](https://tscanlin.github.io/tocbot/)
* **Autor / Studio:** Tim Scanlin.
* **Licenční podklad k ověření před použitím:** MIT License.
* **Využití pro Alesvia:** Lehká postranní lišta s osnovou dlouhého eseje, která při posouvání stránky jemně indikuje polohu čtenáře v textu bez blikání a layout shiftů.

### 15. Maggie Appleton Pattern Library (Epistemic Status & Metadata)
* **URL:** [https://maggieappleton.com/patterns](https://maggieappleton.com/patterns)
* **Autor / Studio:** Maggie Appleton.
* **Licenční podklad k ověření před použitím:** Creative Commons Attribution.
* **Využití pro Alesvia:** Štítky v záhlaví textu transparentně deklarující stav zralosti myšlenky (*„Názorový esej / Revidováno v říjnu 2026 / Doba čtení 7 min“*).

---

## 3. Lidské, nenápadné mikro-interakce a stránky

Prvky, které prozrazují lidského tvůrce se smyslem pro detail a přístupnost:

### 16. Modern CSS Underline Styling
* **URL:** [https://moderncss.dev/12-modern-css-one-line-upgrades/](https://moderncss.dev/12-modern-css-one-line-upgrades/)
* **Autor / Studio:** Stephanie Eckles.
* **Licenční podklad k ověření před použitím:** Volně dostupný vzdělávací zdroj.
* **Využití pro Alesvia:** Využití vlastností `text-underline-offset: 0.25em` a `text-decoration-thickness: 1px` pro podtržení odkazů, které nekoliduje se spodními dotahy písmen (*g, y, p, j*).

### 17. GOV.UK Accessible Focus States
* **URL:** [https://design-system.service.gov.uk/get-started/focus-states/](https://design-system.service.gov.uk/get-started/focus-states/)
* **Autor / Studio:** Government Digital Service (UK).
* **Licenční podklad k ověření před použitím:** Open Government Licence v3.0.
* **Využití pro Alesvia:** Vysoce kontrastní, řemeslně zvládnutý stav klávesnicového fokusu (žluté pozadí s černou linkou), který signalizuje poctivou péči o přístupnost a klávesnicovou navigaci.

### 18. Print Stylesheet (CSS Paged Media)
* **URL:** [https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/](https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/)
* **Autor / Studio:** Rachel Andrew.
* **Licenční podklad k ověření před použitím:** Volně dostupný návod.
* **Využití pro Alesvia:** Skrytí navigace a patičky při tisku a automatické vypsání plných adres za hypertextové odkazy (`a[href]::after { content: " (" attr(href) ")"; }`), aby byl vytištěný esej plnohodnotným dokumentem.

### 19. Colophon / Tiráž webu
* **URL:** [https://maggieappleton.com/colophon](https://maggieappleton.com/colophon)
* **Autor / Studio:** Maggie Appleton.
* **Licenční podklad k ověření před použitím:** Otevřená inspirace.
* **Využití pro Alesvia:** Stránka `/colophon` s pravdivým popisem písem, autorů, licencí a použití AI při tvorbě. U Alesvia nelze tvrdit absenci AI v kódu nebo designu.

### 20. Frank Chimero: Redukce a řemeslo webu
* **URL:** [https://frankchimero.com/](https://frankchimero.com/)
* **Autor / Studio:** Frank Chimero (Studio Frank, New York).
* **Licenční podklad k ověření před použitím:** Autorský osobní web.
* **Využití pro Alesvia:** Vzorové uplatnění střídmosti, kde design ustupuje do pozadí a veškerý rytmus určují vertikální mezery a typografie bez dekorativních prvků.

### 21. Keep a Changelog
* **URL:** [https://keepachangelog.com/](https://keepachangelog.com/)
* **Autor / Studio:** Olivier Lacan.
* **Licenční podklad k ověření před použitím:** Creative Commons BY 3.0.
* **Využití pro Alesvia:** Veřejný deník změn obsahu a postojů organizace na webu psaný lidskou řečí namísto suchých git commitů.

### 22. The /now Page Movement
* **URL:** [https://nownownow.com/about](https://nownownow.com/about)
* **Autor / Studio:** Derek Sivers.
* **Licenční podklad k ověření před použitím:** Veřejná nezávislá iniciativa.
* **Využití pro Alesvia:** Stránka `alesvia.org/now` s krátkým přehledem toho, na jakých výzkumech a projektech tým právě pracuje a co naopak vědomě odmítá.

### 23. A Working Library (Analogový podpis a osobní tón)
* **URL:** [https://aworkinglibrary.com/](https://aworkinglibrary.com/)
* **Autor / Studio:** Mandy Brown.
* **Licenční podklad k ověření před použitím:** Autorský web.
* **Využití pro Alesvia:** Umístění naskenovaného lidského podpisu (SVG) pod klíčovými manifesty a stanovisky jako stvrzení osobního ručení za obsah.

---

## 4. Český kontext: Písma, studia a rukodělné weby

Místo generických amerických SaaS vzorů čerpat z bohaté tradice české grafiky a typografie:

### 24. Displaay Type Foundry — Písmo Tobias
* **URL:** [https://displaay.net/typeface/tobias/](https://displaay.net/typeface/tobias/)
* **Autor / Studio:** Martin Vácha (Displaay, Praha).
* **Licenční podklad k ověření před použitím:** Komerční licence; aktuální cenu, rozsah webového použití a autora řezu ověřit na produktové stránce.
* **Využití pro Alesvia:** Špičkový barokně-tranzitní český serif s ostrým detailem a vysokou čitelností, ideální alternativa k již dříve zmíněnému Reckless.

### 25. Rosetta Type Foundry — Písmo Skolar
* **URL:** [https://rosettatype.com/Skolar](https://rosettatype.com/Skolar)
* **Autor / Studio:** David Březina (Rosetta Type Foundry, Brno / Praha).
* **Licenční podklad k ověření před použitím:** Komerční webová licence.
* **Využití pro Alesvia:** Písmo navržené přímo pro náročné akademické texty a dlouhé čtení s dokonalou českou diakritikou a robustními patkami.

### 26. Superior Type — kandidát k výběru knižního písma
* **URL:** [https://superiortype.com/](https://superiortype.com/)
* **Autor / Studio:** Vojtěch Říha (Superior Type, Praha).
* **Licenční podklad k ověření před použitím:** Komerční licence pro web a tisk.
* **Využití pro Alesvia:** Prozkoumat katalog knižních písem a podporu češtiny. Původní konkrétní název a tvrzení o použití v Hostu nebyly doloženy, proto nejsou doporučením k nákupu.

### 27. Briefcase Type Foundry
* **URL:** [https://briefcasetype.com/](https://briefcasetype.com/)
* **Autor / Studio:** Radek Sidun a Tomáš Brousil (Praha).
* **Licenční podklad k ověření před použitím:** Komerční licence od nezávislé písmolijny.
* **Využití pro Alesvia:** Zdroj digitalizovaných klenotů české typografie (např. *BC Falster Grotesk* či historické titulkové řezy), jež dodají webu nezaměnitelnou identitu.

### 28. Suitcase Type Foundry — Superrodina Tabac
* **URL:** [https://suitcasetype.com/](https://suitcasetype.com/) (automatická kontrola dříve omezena)
* **Autor / Studio:** Tomáš Brousil (Suitcase Type Foundry, Praha).
* **Licenční podklad k ověření před použitím:** Komerční písmolijna.
* **Využití pro Alesvia:** Rozsáhlý redakční systém (Tabac Serif, Sans, Slab, Mono a optická velikost Micro), který pokrývá všechny potřeby od titulku po nejmenší poznámku pod čarou.

### 29. Typomil & knižní úprava Martina T. Peciny
* **URL:** [https://typomil.com/](https://typomil.com/)
* **Autor / Studio:** Martin T. Pecina.
* **Licenční podklad k ověření před použitím:** Volně přístupná online rukověť české sazby.
* **Využití pro Alesvia:** Závazná referenční pravidla pro hladkou českou sazbu (nedělitelné předložky, správné uvozovky `„ “`, české pomlčky a dělení slov).

### 30. Revue Prostor
* **URL:** [https://revueprostor.cz/](https://revueprostor.cz/)
* **Autor / Studio:** Redakce Revue Prostor z.s. (Praha, Kampus Hybernská).
* **Licenční podklad k ověření před použitím:** Nezávislé kulturní periodikum.
* **Využití pro Alesvia:** Inspirace pro digitální esejistiku – vzdušná typografická sazba, výrazné mezititulky a citlivá práce s autorskými texty na pomezí filozofie a společenských věd.

### 31. H7O / Časopis Host
* **URL:** [https://h7o.cz/](https://h7o.cz/)
* **Autor / Studio:** Spolek přátel vydávání časopisu Host; grafická úprava Matěj Málek (studio Still Testing).
* **Licenční podklad k ověření před použitím:** Literární periodikum.
* **Využití pro Alesvia:** Příklad čistého, textově orientovaného českého webu s vysokým kontrastem, absencí komerčních bannerů a důrazem na typografii.

### 32. Artalk.info
* **URL:** [https://artalk.info/](https://artalk.info/)
* **Autor / Studio:** Artalk z.s.
* **Licenční podklad k ověření před použitím:** Nezisková platforma.
* **Využití pro Alesvia:** Referenční nezávislý redakční systém s dlouhou tradicí, který dokazuje, že čistá struktura a kvalitní text fungují bez generativních vizuálních efektů.

### 33. PageFive
* **URL:** [https://www.pagefive.com/](https://www.pagefive.com/)
* **Autor / Studio:** Nezávislé nakladatelství a knihkupectví PageFive (Praha 7 – Letná).
* **Licenční podklad k ověření před použitím:** Autorská distribuce a prodej.
* **Využití pro Alesvia:** Příklad komunity propojující autorský tisk, papír a ilustraci, ze které lze čerpat fyzické materiály a kontakty na začínající knižní grafiky.

### 34. Studio Marvil
* **URL:** [https://www.marvil.cz/](https://www.marvil.cz/)
* **Autor / Studio:** Studio Marvil (Praha).
* **Licenční podklad k ověření před použitím:** Špičkové komerční grafické studio.
* **Využití pro Alesvia:** Inspirace pro precizní, střídmou corporate identity kulturních a veřejných institucí postavenou na striktním gridu a typografické kázni.

---

## Top 5 pro Alesvia

Z výše uvedených zdrojů doporučujeme prioritně implementovat následujících 5 prvků, které mají nejvyšší poměr mezi řemeslným efektem, technickou proveditelností v Next.js 16 / Tailwind v4 a souladem s poselstvím organizace:

1. **Podrobné Sidenotes / Marginálie v kombinaci s Littlefoot.js (položky 8 a 10):**
   * *Důvod:* Texty na pomezí psychologie a technologií vyžadují glosy, odkazy na výzkumy a terminologická upřesnění. Marginálie na velkých obrazovkách a inline popovery na mobilech udrží čtenáře v hlubokém soustředění, aniž by musel přeskakovat do patičky stránky.
2. **Písmo pro dlouhé čtení: Newsreader od Production Type, nebo po licenční kontrole Tobias / Reckless od Displaay:**
   * *Důvod:* Písmo významně ovlivňuje rytmus čtení. Newsreader nabízí bezplatnou cestu k prototypu; česká komerční písmolijna nabízí jiný autorský kontext za cenu licence. Volbu rozhodne porovnání skutečných českých textů a souhlas Matiase.
3. **Plnohodnotný Print Stylesheet s rozpadem URL odkazů (položka 18):**
   * *Důvod:* Zprávy a eseje o lidské autonomii si lidé chtějí vytisknout na papír nebo uložit do čistého PDF bez zbytečných menu. Vytvoření perfektního tiskového stylu s automatickým vypsáním odkazů do závorek demonstruje respekt k analogovému médiu.
4. **Vlastní stránka `/colophon` a `/now` (položky 19 a 22):**
   * *Důvod:* Nejrychlejší způsob, jak dát najevo lidské autorství. Tiráž pravdivě uvede autory, licence a pomoc AI; stránka `/now` má smysl jen s konkrétním vlastníkem aktualizací. Ani jedna stránka se nemá plnit smyšlenými aktivitami nebo tvrzením o tvorbě bez AI.
5. **Autorská perokresba od prověřeného lidského tvůrce (Absurd Design nebo LUSTR showcase) (položky 1 a 3):**
   * *Důvod:* Jedna ilustrace se jménem autora a doloženou licencí může dát tématu konkrétní vizuální výklad. Samotný styl kresby nedokazuje lidský původ; rozhodující je ověřitelné autorství a dohoda s tvůrcem.
