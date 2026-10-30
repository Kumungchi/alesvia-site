# Příprava dalšího vizuálního kroku

Stav: návrh k posouzení, 25. 10. 2026. Navazuje na `human-design-research-2026.md` a audit `ai-design-tells-audit.md`. Tato příprava nemění veřejné stránky ani rozhodnutí o písmu.

## Doporučený první krok: jeden dobře vysázený článek

Připravit náhled jednoho existujícího publikovaného článku v CS i EN se současným písmem. Na něm ověřit tisk, poznámky a čitelnost. Jeden ucelený čtenářský zážitek umožní lépe posoudit výsledek než přidávání dekorací na homepage. Před úpravou komponent přečíst příslušné návody v místní dokumentaci Next.js a vyhledat požadovaný skill `frontend-design`.

### Tisk a PDF

Při tisku skrýt navigaci, formuláře a ovládací prvky. Zachovat název, autora pouze tam, kde je doložený, datum, obsah, citace a kontakty na pomoc, pokud jsou součástí článku. Adresy zdrojů vypsat čitelně a bez zdvojení již vytištěné URL. Nevypsat za každým interním odkazem dlouhou technickou adresu. Zabránit odříznutí textu a rozdělování krátkých citací mezi stránky.

Trade-off: tisk přináší užitek bez nové knihovny, ale PDF z prohlížečů se liší. Přijetí: čitelné A4 PDF z Chromium i Firefoxu, funkční zdroje, žádná prázdná první stránka a obsah bez useknutého pravého okraje.

### Poznámky a citace

Začít běžnými odkazy na poznámky a návratem do textu, které fungují i bez JavaScriptu. Na široké obrazovce lze jednu glosu posadit do okraje. Littlefoot je kandidát na pozdější rozšíření pro mobil; jeho přidání vyžaduje kontrolu kompatibility s Reactem a test ovládání fokusu. Konkrétní knihovna se nezavádí jen kvůli vzhledu.

Trade-off: marginálie zpřehlední vztah mezi tvrzením a zdrojem, ale přidávají práci s delšími poznámkami, zoomem a překladem. Přijetí: 360 px i 1280 px bez přetečení, 200% zoom, použití klávesnicí, přečtení poznámky bez myši a bez závislosti na hoveru. Číslo, vzorek a omezení studie zůstávají přímo u tvrzení podle HANDOFF.

### Písmo jako samostatné rozhodnutí

Porovnat stejný český odstavec a titulek v současném Inter + Playfair a ve variantě s Newsreaderem. Text se nesmí mezi variantami měnit. Ověřit diakritiku, kurzívu, číslice, délku řádku, načítání a velikost souborů. U komerční alternativy Tobias/Reckless nejprve zkontrolovat licenci pro web a podmínky trial fontů; trial není automaticky licence pro veřejný preview deployment.

Newsreader pochází od Production Type a je pod OFL. Tobias je od Displaay, produktová stránka uvádí Martina Váchu. Rozhodnutí o změně hlavního písma zůstává Matiasovi. Bezplatný font sám nezaručuje generický výsledek a placený font sám nezaručuje osobitost.

## Obrazový podklad pro člověka, který bude kreslit

Před poptávkou sepsat jeden stručný brief: vysvětlit rozdíl mezi plynulou odpovědí a lidskou péčí; nikoho nezesměšňovat; neukazovat osamělost jako selhání; nevyvolávat strach. Požadovat doložitelného autora a dohodnuté použití na webu, v newsletteru i v tisku. Kredit uvést podle smlouvy. Kandidáti: konkrétní ilustrátor z drawETC. nebo Absurd Design s ověřenou licencí. LUSTR zatím zůstává kandidát: automatické otevření jeho webu při této kontrole selhalo.

Trade-off: zakázka přidá vlastní interpretaci tématu a jasné autorství; stojí peníze a potřebuje tvůrčí vedení. Neověřené cenové odhady z prvního návrhu nejsou rozpočet. Žádné portfolio ani archiv není povolením kopírovat všechna vystavená díla.

## Co z rešerše nepřenést doslova

- Zákaz všech odrážek, čísel nebo patkových písem není pravidlem dobrého designu. Problém je mechanické opakování bez účelu; seznam je správně tam, kde pomáhá čtenáři.
- Tvar kresby není spolehlivý detektor AI. Lidský původ se dokládá autorem a procesem.
- Případný `/colophon` se omezí na písma, licence a kredity konkrétních použitých děl. Matias nechce na veřejném webu uvádět použití AI při tvorbě. Tiráž není nutnou součástí webu; tvrzení o tvorbě „bez AI“ se také nepřidává.
- `/now` má smysl až s člověkem odpovědným za aktualizace. Bez něj rychle vznikne další zastaralá stránka.
- Iniciály a optické vysunutí interpunkce jsou doplňky s fallbackem, nikoli podmínka čitelnosti nebo důkaz modernosti.

Nejbližší navržená akce je náhled tiskové a čtenářské úpravy jednoho článku. Písmo, nákup licence a zakázková ilustrace jsou následná rozhodnutí; A-04 dál čeká na určení správce a funkčního kontaktu.
