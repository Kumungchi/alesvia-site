# A-04 — pracovní návrh pro právní kontrolu

Stav: 28. 10. 2026. **Pracovní návrh, A-04 není dokončeno.** Matias potvrdil správce před registrací: Matias Bunnik; kontakt: privacy@alesvia.org; poskytovatel pošty: Seznam Email Profi. Novější potvrzení kontaktu nahrazuje dřívější informaci o nezaložené schránce. Dále schválil 12 měsíců po uzavření běžné komunikace a měsíční ruční kontrolu pošty i Convexu. Doručování ani provádění výmazů nebyly testovány. DPA, předávání a právní posouzení zůstávají neověřené. Konkrétní postup a ověřené zdroje: [privacy-operations.md](privacy-operations.md).

Doporučeno nechat ověřit právníkem (Frank Bold / ANNO MSK). Agent není právník.

## Co bylo ověřeno v kódu

- `ContactForm.tsx` → Convex → `/api/contact` → Nodemailer/SMTP. Jméno, e-mail, kategorie dotazu a zpráva. Příjemci podle `lib/contact.ts`, případně kopie BCC podle konfigurace. Matias potvrdil Seznam Email Profi; skutečné nastavení SMTP a doručování nebyly ověřeny.
- `AcademyForm.tsx` → `messages.send` v Convexu → `/api/contact` → SMTP. Navíc organizace, typ organizace a zájem o program, složené do textu zprávy.
- `PolicyForm.tsx` → stejný tok jako Akademie. Navíc organizace a profesní zařazení, složené do zprávy.
- Convex ukládá `formType`, `name`, `email`, `subject`, `message`, systémové ID a čas vytvoření. Automatický výmaz ani retenční úloha v repozitáři nejsou. Zápis do databáze a odeslání e-mailu nejsou jedna transakce.
- Všechny tři formuláře kontrolují HTTP výsledek i explicitní potvrzení API. Oprava je součástí závěrečné kontroly; skutečné doručení příjemci stále vyžaduje test. Při selhání e-mailu záznam v Convexu zůstává.
- Vercel Web Analytics se v layoutu načítá bez aplikačního kroku souhlasu. Přesné nastavení, retenční období a právní titul je nutné ověřit; označení „anonymizované“ samo právní posouzení nenahrazuje.
- Fonty jsou přes `next/font`; screenshot Unplugged je lokální soubor. V aplikaci nebyl nalezen Clerk SDK ani Clerk autentizace. Pokud ho používá interní služba mimo repo, doplnit skutečný rozsah; jinak ho do seznamu zpracovatelů tohoto webu nepřidávat.
- `.env*`, produkční účty a produkční data nebyly čteny ani měněny. Dostupnost DPA, regiony, zálohy a subzpracovatelé nejsou zjištěním z kódu.

## Rozhodnutí potřebná před převodem do dictionaries

1. **Správce potvrzen:** Matias Bunnik do registrace ústavu, privacy@alesvia.org. Promítnuto do CS/EN zásad tohoto repozitáře. Shodu v sesterském Unplugged ověřit zvlášť.
2. **Účely a tituly:** pro běžné dotazy zvážit oprávněný zájem na vyřízení komunikace (včetně posouzení zájmů); pro konkrétní předsmluvní kroky na žádost dotčené osoby zvážit smluvní titul. Souhlas není univerzální náhrada. U novinek o budoucím pilotu samostatně posoudit, zda jde už o marketing. Potom upravit i text u formuláře.
3. **Uchování běžných dotazů potvrzeno:** po dobu vyřízení a nejdéle dalších 12 měsíců po uzavření; měsíční ruční kontrola a výmaz v poště i Convexu. Nejde o automatickou funkci. Postup pro datum uzavření, duplicity, kopie a výmaz je v `privacy-operations.md`; skutečné provádění, zálohy a zvláštní evidence zájmu o pilot ještě vyžadují ověření. Nedoložená 24měsíční lhůta analytiky odstraněna z veřejného návrhu.
4. **Příjemci:** Vercel (hosting/analytika), Convex (formuláře), konkrétní poskytovatel pošty, oprávnění interní příjemci. Potvrdit smluvní entity, přijaté DPA, regiony a subzpracovatele v účtech.
5. **Předávání:** zjistit, zda a komu se předává mimo EHP, včetně podpory a záloh. U každého toku ověřit použitelný mechanismus (například aktuálně platné rozhodnutí o odpovídající ochraně pro příjemce, který splňuje jeho podmínky, nebo standardní smluvní doložky a potřebné doplňkové posouzení). Samotná veřejná DPA nedokazuje její přijetí ani použitelný mechanismus. Uvést, kde získat kopii záruk.
6. **Analytika:** ověřit nastavení a právní titul, případně připravit souhlas nebo vypnutí. Bez rozhodnutí nelze tvrdit, že současná implementace splňuje všechny podmínky.

## Návrh textu CS — doplnit a právně ověřit

**Správce a kontakt.** Správcem údajů pro projekt Alesvia je do registrace ústavu Matias Bunnik. Registraci zapsaného ústavu připravujeme. Žádosti o údaje posílejte na privacy@alesvia.org.

**Dotazy a zájem o spolupráci.** Zpracováváme jméno, e-mail a obsah zprávy, u formulářů Akademie a Policy Labu také údaje o organizaci a zájmu o spolupráci. Používáme je k vyřízení dotazu a navazující komunikaci. Účel, právní titul a případný oprávněný zájem: [POTVRDIT PRO KAŽDÝ TOK]. Poskytnutí je dobrovolné; bez kontaktního údaje nemůžeme odpovědět. Formuláře nejsou určeny pro krizovou pomoc ani zdravotní dokumentaci.

**Uchování běžných dotazů — schválené pravidlo.** Běžné dotazy uchováváme po dobu vyřízení a nejdéle dalších 12 měsíců po uzavření komunikace. Dodržování lhůty kontrolujeme měsíčně a záznamy v poště a databázi mažeme ručně. Pravidlo není automatická funkce aplikace. Zálohy a případné odlišné zákonné lhůty: [OVĚŘIT SKUTEČNÝ ROZSAH].

**Příjemci a uchování.** Zprávy se odesílají prostřednictvím Seznam Email Profi. Zprávy ze všech tří formulářů se před pokusem o odeslání e-mailu ukládají do Convexu. Hosting a analytiku zajišťuje Vercel. Rozsah analytiky, příjemce mimo EHP, záruky předávání a způsob získání jejich kopie: [OVĚŘIT]. Lhůty nebo kritéria uchování včetně pošty a záloh: [POTVRDIT A ZAJISTIT].

**Práva.** Za podmínek GDPR můžete žádat přístup, opravu, výmaz, omezení či přenositelnost údajů a vznést námitku. Pokud se zpracování opírá o souhlas, lze jej odvolat bez vlivu na předchozí zákonné zpracování. Stížnost lze podat u [Úřadu pro ochranu osobních údajů](https://uoou.gov.cz/). Automatizované rozhodování s právními či obdobně významnými účinky: [POTVRDIT SKUTEČNÝ STAV].

## EN draft — fill in and obtain legal review

**Controller and contact.** The controller for the Alesvia project is Matias Bunnik (until the institute is registered). We are preparing to register the institute. Send data requests to privacy@alesvia.org.

**Inquiries and collaboration.** We process your name, email, and message, plus organization and collaboration details in the Academy and Policy Lab forms, to respond and follow up. Purpose, legal basis, and any legitimate interest: [CONFIRM FOR EACH FLOW]. Providing data is voluntary; we cannot reply without contact details. These forms are not for crisis support or medical records.

**Ordinary inquiry retention — approved rule.** We retain ordinary inquiries while handling them and for no more than a further 12 months after the conversation is closed. We check this limit monthly and manually delete email and database records. This is not an automated application feature. Backups and any separate legal retention requirements: [VERIFY ACTUAL SCOPE].

**Recipients and retention.** Messages are emailed through Seznam Email Profi. Submissions from all three forms are stored in Convex before email delivery is attempted. Vercel provides hosting and analytics. Analytics scope, recipients outside the EEA, transfer safeguards and how to obtain a copy: [VERIFY]. Retention periods or criteria, including email and backups: [CONFIRM AND IMPLEMENT].

**Rights.** Subject to GDPR conditions, you may request access, rectification, erasure, restriction or portability, and object to processing. Where consent applies, you may withdraw it without affecting prior lawful processing. You may complain to the [Czech Office for Personal Data Protection](https://uoou.gov.cz/). Automated decisions with legal or similarly significant effects: [CONFIRM ACTUAL PRACTICE].

## Zdroje a dokončení

Právní informační rámec: [ÚOOÚ — základní příručka, právo být informován a čl. 13/14 GDPR](https://uoou.gov.cz/verejnost/zakladni-prirucka-k-ochrane-udaju). [Convex DPA správného poskytovatele](https://www.convex.dev/legal/dpa) je podklad pro kontrolu smluv, nikoli důkaz přijetí v konkrétním účtu. Starý odkaz na convex.com patřil jiné společnosti a nebyl použitelným podkladem tohoto backendu. [Vercel DPA](https://vercel.com/legal/dpa) vyžaduje ověření tarifu a použitelné smlouvy. Podrobnosti, Seznam a ověřené SMTP nastavení jsou v `privacy-operations.md`.

Po potvrzení údajů převést schválené verze do `dictionaries/cs.json` a `dictionaries/en.json`, doplnit skutečné datum revize, sladit kontakty i texty u všech formulářů a zásady v sesterském repu. Následně ověřit všechny tři formuláře a výmazový postup. Do té doby A-04 neodškrtávat.

## Návrh změny právního titulu — čeká na potvrzení Matiase

Návrh pro běžné dotazy: oprávněný zájem na vyřízení zprávy a přiměřené navazující komunikaci podle čl. 6 odst. 1 písm. f GDPR. Případné kroky před uzavřením smlouvy na žádost samotné smluvní strany je třeba odlišit. Newsletter, marketing a obecné novinky o budoucím pilotu nejsou automatickou součástí vyřízení dotazu.

Před změnou ve veřejném textu dopracovat a potvrdit odůvodnění zájmu, nezbytnost údajů a poměření se zájmy dotčeného člověka. Zvlášť zhodnotit, zda je pro obyčejnou odpověď nutné současně ukládat zprávu do databáze i do pošty po celou lhůtu. Samotná přítomnost Convexu v kódu není odůvodněním. Není potřeba zavádět povinný checkbox „souhlasím se zásadami“ jako náhradu tohoto posouzení.

Navržené věcné upozornění u formulářů, až bude změna titulu schválena:

- CS: „Údaje použijeme k vyřízení vaší zprávy. Podrobnosti najdete v zásadách ochrany osobních údajů.“
- EN: “We use your details to respond to your message. See our privacy policy for more information.”

Veřejný kandidát zatím stále obsahuje staré ustanovení o souhlasu a analytice; není tím schválen k vydání. Nepovažovat tuto poznámku za provedené právní posouzení.
