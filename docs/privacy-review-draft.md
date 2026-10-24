# A-04 — pracovní návrh pro právní kontrolu

Stav: 25. 10. 2026. **Není určen ke zveřejnění.** Správce, funkční kontaktní e-mail a poskytovatel SMTP nejsou podle Matiase určeni. Přijetí DPA není ověřeno. Dosavadní `privacy@alesvia.org` není založený. A-04 není dokončeno a stávající veřejné zásady nelze považovat za ověřené právní minimum.

Doporučeno nechat ověřit právníkem (Frank Bold / ANNO MSK). Agent není právník.

## Co bylo ověřeno v kódu

- `ContactForm.tsx` → `/api/contact` → Nodemailer/SMTP. Jméno, e-mail, kategorie dotazu a zpráva. Příjemci podle `lib/contact.ts`, případně kopie BCC podle konfigurace. Poskytovatele ani funkčnost schránek nelze bez potvrzení určit. Kontaktní formulář sám neukládá zprávu do Convexu.
- `AcademyForm.tsx` → `messages.send` v Convexu → `/api/contact` → SMTP. Navíc organizace, typ organizace a zájem o program, složené do textu zprávy.
- `PolicyForm.tsx` → stejný tok jako Akademie. Navíc organizace a profesní zařazení, složené do zprávy.
- Convex ukládá `formType`, `name`, `email`, `subject`, `message`, systémové ID a čas vytvoření. Automatický výmaz ani retenční úloha v repozitáři nejsou. Zápis do databáze a odeslání e-mailu nejsou jedna transakce.
- Akademie a Policy Lab nekontrolují `response.ok` u SMTP endpointu. Potvrzení na stránce proto nedokazuje doručení e-mailu. Opravu a test doručení je potřeba dokončit před odškrtnutím formulářů v definici hotového webu.
- Vercel Web Analytics se v layoutu načítá bez aplikačního kroku souhlasu. Přesné nastavení, retenční období a právní titul je nutné ověřit; označení „anonymizované“ samo právní posouzení nenahrazuje.
- Fonty jsou přes `next/font`; screenshot Unplugged bude lokální soubor. V aplikaci nebyl nalezen Clerk SDK ani Clerk autentizace. Pokud ho používá interní služba mimo repo, doplnit skutečný rozsah; jinak ho do seznamu zpracovatelů tohoto webu nepřidávat.
- `.env*`, produkční účty a produkční data nebyly čteny ani měněny. Dostupnost DPA, regiony, zálohy a subzpracovatelé nejsou zjištěním z kódu.

## Rozhodnutí potřebná před převodem do dictionaries

1. **Správce:** skutečná fyzická osoba provozující projekt, nebo existující právnická osoba, která tuto roli převzala. První varianta znamená osobní odpovědnost, druhá vyžaduje skutečné smluvní a organizační uspořádání. Budoucí nezapsaný ústav nelze automaticky dosadit. Potvrdit identitu, kontaktní údaje a stejný údaj pro Unplugged.
2. **Účely a tituly:** pro běžné dotazy zvážit oprávněný zájem na vyřízení komunikace (včetně posouzení zájmů); pro konkrétní předsmluvní kroky na žádost dotčené osoby zvážit smluvní titul. Souhlas není univerzální náhrada. U novinek o budoucím pilotu samostatně posoudit, zda jde už o marketing. Potom upravit i text u formuláře.
3. **Uchování:** stanovit lhůtu od uzavření dotazu, dobu evidence zájmu o pilot a skutečný postup výmazu v Convexu, poště, kopiích i zálohách. Původní hodnoty 12 a 24 měsíců nejsou doloženou konfigurací. Neuvádět jako hotovou funkci něco, co není zajištěno.
4. **Příjemci:** Vercel (hosting/analytika), Convex (formuláře), konkrétní poskytovatel pošty, oprávnění interní příjemci. Potvrdit smluvní entity, přijaté DPA, regiony a subzpracovatele v účtech.
5. **Předávání:** zjistit, zda a komu se předává mimo EHP, včetně podpory a záloh. U každého toku ověřit použitelný mechanismus (například aktuálně platné rozhodnutí o odpovídající ochraně pro příjemce, který splňuje jeho podmínky, nebo standardní smluvní doložky a potřebné doplňkové posouzení). Samotná veřejná DPA nedokazuje její přijetí ani použitelný mechanismus. Uvést, kde získat kopii záruk.
6. **Analytika:** ověřit nastavení a právní titul, případně připravit souhlas nebo vypnutí. Bez rozhodnutí nelze tvrdit, že současná implementace splňuje všechny podmínky.

## Návrh textu CS — doplnit a právně ověřit

**Správce a kontakt.** Správcem údajů pro projekt Alesvia je [POTVRZENÁ IDENTITA A KONTAKT]. Registraci zapsaného ústavu připravujeme. Žádosti o údaje posílejte na [FUNKČNÍ KONTAKT].

**Dotazy a zájem o spolupráci.** Zpracováváme jméno, e-mail a obsah zprávy, u formulářů Akademie a Policy Labu také údaje o organizaci a zájmu o spolupráci. Používáme je k vyřízení dotazu a navazující komunikaci. Účel, právní titul a případný oprávněný zájem: [POTVRDIT PRO KAŽDÝ TOK]. Poskytnutí je dobrovolné; bez kontaktního údaje nemůžeme odpovědět. Formuláře nejsou určeny pro krizovou pomoc ani zdravotní dokumentaci.

**Příjemci a uchování.** Kontaktní zprávy se odesílají prostřednictvím [POSKYTOVATEL POŠTY]. Zprávy Akademie a Policy Labu se navíc ukládají do Convexu. Hosting a analytiku zajišťuje Vercel. Rozsah analytiky, příjemce mimo EHP, záruky předávání a způsob získání jejich kopie: [OVĚŘIT]. Lhůty nebo kritéria uchování včetně pošty a záloh: [POTVRDIT A ZAJISTIT].

**Práva.** Za podmínek GDPR můžete žádat přístup, opravu, výmaz, omezení či přenositelnost údajů a vznést námitku. Pokud se zpracování opírá o souhlas, lze jej odvolat bez vlivu na předchozí zákonné zpracování. Stížnost lze podat u [Úřadu pro ochranu osobních údajů](https://uoou.gov.cz/). Automatizované rozhodování s právními či obdobně významnými účinky: [POTVRDIT SKUTEČNÝ STAV].

## EN draft — fill in and obtain legal review

**Controller and contact.** The controller for the Alesvia project is [CONFIRMED IDENTITY AND CONTACT]. We are preparing to register the institute. Send data requests to [WORKING CONTACT].

**Inquiries and collaboration.** We process your name, email, and message, plus organization and collaboration details in the Academy and Policy Lab forms, to respond and follow up. Purpose, legal basis, and any legitimate interest: [CONFIRM FOR EACH FLOW]. Providing data is voluntary; we cannot reply without contact details. These forms are not for crisis support or medical records.

**Recipients and retention.** Messages are emailed through [EMAIL PROVIDER]. Academy and Policy Lab submissions are also stored in Convex. Vercel provides hosting and analytics. Analytics scope, recipients outside the EEA, transfer safeguards and how to obtain a copy: [VERIFY]. Retention periods or criteria, including email and backups: [CONFIRM AND IMPLEMENT].

**Rights.** Subject to GDPR conditions, you may request access, rectification, erasure, restriction or portability, and object to processing. Where consent applies, you may withdraw it without affecting prior lawful processing. You may complain to the [Czech Office for Personal Data Protection](https://uoou.gov.cz/). Automated decisions with legal or similarly significant effects: [CONFIRM ACTUAL PRACTICE].

## Zdroje a dokončení

Právní informační rámec: [ÚOOÚ — základní příručka, právo být informován a čl. 13/14 GDPR](https://uoou.gov.cz/verejnost/zakladni-prirucka-k-ochrane-udaju). [Convex DPA](https://www.convex.com/data-protection-addendum) je podklad pro kontrolu smluv, nikoli důkaz přijetí v konkrétním účtu. [Vercel Privacy Notice](https://vercel.com/legal/privacy-notice) nenahrazuje ověření zákaznické DPA a nastavení služby.

Po potvrzení údajů převést schválené verze do `dictionaries/cs.json` a `dictionaries/en.json`, doplnit skutečné datum revize, sladit kontakty i texty u všech formulářů a zásady v sesterském repu. Následně ověřit všechny tři formuláře a výmazový postup. Do té doby A-04 neodškrtávat.
