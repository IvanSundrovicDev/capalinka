export type ServiceIcon = 'spray' | 'sofa' | 'clipboard-check' | 'sprout' | 'truck'

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceSection {
  title: string
  paragraphs: string[]
}

export interface ServiceContent {
  slug: string
  path: string
  name: string
  shortName: string
  menuDescription: string
  icon: ServiceIcon
  h1: string
  metaTitle: string
  metaDescription: string
  shortDescription: string
  lead: string
  image: string
  imageAlt: string
  galleryCategory: string
  highlights: string[]
  included: string[]
  forWho: string[]
  process: { title: string; text: string }[]
  sections: ServiceSection[]
  faqs: ServiceFaq[]
  priceNote: string
  relatedSlugs: string[]
  ctaTitle: string
  ctaText: string
}

export const services: ServiceContent[] = [
  {
    slug: 'ciscenje-apartmana',
    path: '/usluge/ciscenje-apartmana',
    name: 'Čišćenje apartmana',
    shortName: 'Apartmani',
    menuDescription: 'Detaljno čišćenje prije dolaska gostiju i između boravaka.',
    icon: 'spray',
    h1: 'Čišćenje apartmana u Donjem Miholjcu i okolici',
    metaTitle: 'Čišćenje apartmana u Donjem Miholjcu',
    metaDescription:
      'Detaljno čišćenje apartmana i turističkih smještaja u Donjem Miholjcu i okolici. Dogovorite termin s Obrtom Čapalinka – 095 509 4124.',
    shortDescription:
      'Detaljno čišćenje apartmana i turističkih smještaja prije dolaska gostiju, između boravaka ili prije početka sezone.',
    lead:
      'Apartman spreman za nove goste, bez posljednjih sitnica koje vam odvlače pažnju. Čišćenje prilagođavamo vašem prostoru, načinu iznajmljivanja i dogovorenom terminu.',
    image: '/images/gallery/apartment-bedroom.svg',
    imageAlt:
      'Ilustracija uredno uređenog apartmana s krevetom, velikim prozorom i biljkom u kutu',
    galleryCategory: 'Apartmani',
    highlights: ['Turnover čišćenje', 'Priprema prije sezone', 'Redoviti termini'],
    included: [
      'Kuhinja: radne površine, sudoper, vanjske površine uređaja i unutrašnjost mikrovalne pećnice prema dogovoru',
      'Kupaonica: sanitarije, kada ili tuš, pločice, ogledala, slavine i dozatori',
      'Sobe i dnevni boravak: usisavanje, vlažno brisanje podova i uklanjanje prašine s dostupnih površina',
      'Detalji koje gosti primijete: prekidači, kvake, daljinski upravljači, vidljivi tragovi na vratima',
      'Završni prolaz: provjera svake prostorije, odvoz otpada i provjetravanje',
      'Promjena posteljine i ručnika prema dogovoru, ako je tekstil osiguran u prostoru',
    ],
    forWho: [
      'Vlasnici apartmana i kuća za odmor u Donjem Miholjcu i okolici',
      'Turistički smještaj koji treba pouzdanu pripremu između gostiju',
      'Prostori koji se pripremaju za sezonu ili dulji najam',
    ],
    process: [
      {
        title: 'Javite se s osnovnim podacima',
        text: 'Recite nam lokaciju, okvirnu kvadraturu i željeni termin. Ako imate popis obveza, pošaljite ga uz upit.',
      },
      {
        title: 'Dogovaramo opseg',
        text: 'Jasno određujemo što ulazi u čišćenje, što je potrebno pripremiti i koliko vremena treba za prostor.',
      },
      {
        title: 'Dolazimo prema dogovoru',
        text: 'Čistimo sustavno, od gornjih površina prema podu, bez preskakanja dogovorenih detalja.',
      },
      {
        title: 'Završna provjera',
        text: 'Prolazimo kroz prostor prije odlaska kako bismo bili sigurni da je sve spremno za dolazak gostiju.',
      },
    ],
    sections: [
      {
        title: 'Čišćenje između gostiju: detalj koji gost primijeti',
        paragraphs: [
          'Prvi dojam o apartmanu ne stvara samo namještaj, nego i osjećaj svježine kada se otvore vrata. Uredna kupaonica, čista kuhinja i pod bez tragova prašine govore više od bilo kojeg opisa u oglasu. Upravo zato čišćenju između gostiju pristupamo kao pripremi cijelog prostora, a ne kao brzom prolasku kroz nekoliko soba.',
          'Radimo prema dogovorenoj listi obveza kako biste znali što možete očekivati. Ako se tijekom sezone izmjenjuju različiti gosti, dogovorimo redoviti raspored i prilagodimo ga vašim prijavama i odjavama. Time se smanjuje žurba, a vi imate više prostora za ostale zadatke.',
        ],
      },
      {
        title: 'Priprema apartmana prije sezone',
        paragraphs: [
          'Prije prvih gostiju dobro je napraviti temeljitiji prolaz: očistiti unutrašnjost ormara, prozore i okvire, provjeriti kutove i površine koje se tijekom brzih izmjena ne stignu detaljno obraditi. To je i prilika da se uoče sitnice koje treba popraviti ili zamijeniti.',
          'Za apartmane u Donjem Miholjcu i okolici termin pripreme najbolje je dogovoriti unaprijed, posebno u proljeće i uoči ljetne sezone. Ako se prostor koristi i zimi, povremeno dublje čišćenje pomaže da kroz cijelu godinu zadrži uredan dojam.',
        ],
      },
      {
        title: 'Pouzdan dogovor, bez nepotrebnih komplikacija',
        paragraphs: [
          'Znate kada dolazimo, što radimo i što nam je potrebno za rad. Ako u prostoru postoje osjetljive površine ili posebna pravila kućnog reda, recite nam unaprijed kako bismo ih poštovali. Naš cilj je da vaš apartman bude spreman, a vaš raspored mirniji.',
          'Uz čišćenje apartmana možemo dogovoriti i prijevoz robe i materijala ili uređenje okoliša, ovisno o tome što vam treba za isti objekt. Tako na jednom mjestu rješavate više praktičnih zadataka.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Koliko unaprijed trebam rezervirati čišćenje apartmana?',
        answer:
          'Termin je najsigurnije dogovoriti nekoliko dana unaprijed, a tijekom sezone i ranije. Kratkoročne termine primamo ovisno o slobodnim terminima, zato je najbrže nazvati na 095 509 4124.',
      },
      {
        question: 'Može li se dogovoriti redovito čišćenje tijekom turističke sezone?',
        answer:
          'Da. Redoviti termini mogu se dogovoriti za čišćenje između gostiju, povremeno održavanje ili kombinaciju obje potrebe. Raspored prilagođavamo vašim dolascima i odlascima gostiju.',
      },
      {
        question: 'Donosite li posteljinu i ručnike?',
        answer:
          'Posteljinu i ručnike osigurava vlasnik prostora. Možemo dogovoriti njihovu zamjenu i slaganje, a pranje se dogovara posebno ovisno o mogućnostima na lokaciji.',
      },
      {
        question: 'Uključuje li čišćenje apartmana i terasu?',
        answer:
          'Terasa, balkon i vanjske površine mogu biti dio dogovora. Opseg ovisi o veličini prostora i opremi, pa se to najbolje dogovori uz osnovne informacije o apartmanu.',
      },
      {
        question: 'Kako se formira cijena čišćenja?',
        answer:
          'Cijena ovisi o kvadraturi, trenutnom stanju prostora i opsegu dogovorenih obveza. Nakon kratkog opisa dobivate okvirnu ponudu, a konačni dogovor potvrđujemo prije dolaska.',
      },
    ],
    priceNote:
      'Cijena se dogovara prema kvadraturi, stanju prostora i opsegu čišćenja. Pošaljite osnovne informacije ili nas nazovite za okvirnu ponudu.',
    relatedSlugs: ['stambeni-prostori', 'zavrsna-ciscenja', 'prijevoz-robe-i-materijala'],
    ctaTitle: 'Neka vaš apartman bude spreman za sljedećeg gosta',
    ctaText:
      'Dogovorite čišćenje apartmana u Donjem Miholjcu ili okolici. Kratak opis prostora dovoljan je za prvi razgovor.',
  },
  {
    slug: 'stambeni-prostori',
    path: '/usluge/stambeni-prostori',
    name: 'Stambeni prostori',
    shortName: 'Stambeni prostori',
    menuDescription: 'Redovito ili povremeno čišćenje stanova i kuća.',
    icon: 'sofa',
    h1: 'Čišćenje stana i stambenih prostora u Donjem Miholjcu',
    metaTitle: 'Čišćenje stana u Donjem Miholjcu i okolici',
    metaDescription:
      'Redovito ili povremeno čišćenje stana, kuće i stambenih prostora u Donjem Miholjcu i okolici. Prilagođeno vašem domu i ritmu. Pozovite 095 509 4124.',
    shortDescription:
      'Redovito ili povremeno čišćenje stanova, kuća i stambenih prostora, prilagođeno vašem domu, navikama i rasporedu.',
    lead:
      'Domaća čistoća ne mora značiti cijeli dan pospremanja. Čišćenje prilagođavamo vašem prostoru i ritmu – od redovitog održavanja do dubljeg prolaza prije gostiju ili nakon napornog razdoblja.',
    image: '/images/gallery/living-room.svg',
    imageAlt:
      'Ilustracija urednog dnevnog boravka s kaučem, stolićem, policom i sobom u toplim tonovima',
    galleryCategory: 'Stambeni prostori',
    highlights: ['Redovito održavanje', 'Jednokratno čišćenje', 'Proljetno spremanje'],
    included: [
      'Usisavanje i vlažno brisanje podova u svim dogovorenim prostorijama',
      'Uklanjanje prašine s dostupnih površina, polica, okvira i dekoracija',
      'Kuhinja: radne površine, sudoper, štednjak i vanjske površine uređaja',
      'Kupaonica: sanitarije, kada ili tuš, slavine, pločice i ogledala',
      'Detalji: prekidači, kvake, vrata i vidljive mrlje na zidovima prema dogovoru',
      'Unutarnje staklene površine, prozori i balkonska vrata prema dogovoru',
      'Promjena posteljine i slaganje rublja prema dogovoru',
    ],
    forWho: [
      'Obitelji koje žele više vremena za sebe, a manje za svakodnevno pospremanje',
      'Osobe koje se pripremaju za goste, selidbu ili dulji izostanak',
      'Vlasnici stanova i kuća koji traže pouzdano povremeno održavanje',
    ],
    process: [
      {
        title: 'Razgovor o prostoru',
        text: 'Kažete nam veličinu doma, prostorije koje su prioritet i želite li redoviti ili jednokratni dolazak.',
      },
      {
        title: 'Dogovor o opsegu',
        text: 'Određujemo što ulazi u osnovno čišćenje, a što su dodatne stavke poput prozora ili unutrašnjosti ormara.',
      },
      {
        title: 'Termin koji vam odgovara',
        text: 'Dolazimo u dogovoreno vrijeme. Ako trebate redoviti raspored, okvirni dani dogovaraju se unaprijed.',
      },
      {
        title: 'Dosljedan standard',
        text: 'Svaki prostor čistimo prema dogovorenoj listi kako bi rezultat bio jednak svakoga puta.',
      },
    ],
    sections: [
      {
        title: 'Čistoća koja se uklapa u svakodnevni život',
        paragraphs: [
          'Redovito čišćenje stana nije luksuz, nego praktična pomoć koja oslobađa vrijeme. Umjesto da svaki slobodni sat trošite na usisavanje, brisanje prašine i kupaonicu, možete unaprijed dogovoriti kada dolazimo i prepustiti nam dio posla. Između termina dom održavate svojim tempom, a dublji prolaz prepuštate nama.',
          'Neki klijenti žele redoviti dolazak svaki tjedan ili dva, dok drugima više odgovara povremeno čišćenje prije obiteljskog okupljanja ili nakon napornog mjeseca. Nema univerzalnog rasporeda – dogovaramo ga prema vašim potrebama i veličini prostora.',
        ],
      },
      {
        title: 'Posebni prolazi: prozori, kuhinja i kupaonica',
        paragraphs: [
          'Kuhinja i kupaonica su prostorije u kojima se najčešće zadržava vlaga, masnoća i kamena naslaga. U redovitom čišćenju obraćamo pažnju na slavine, tuš, sudoper i radne površine, a povremeno dublje čistimo fuge, unutrašnjost uređaja i teško dostupne kutove prema dogovoru. Sredstva prilagođavamo materijalu kako ne bismo oštetili površinu.',
          'Ako se bliži sezona gostiju, blagdani ili selidba, možemo napraviti opsežniji prolaz. Prozori, balkonska vrata i vanjske površine dogovaraju se odvojeno jer zahtijevaju više vremena i siguran pristup.',
        ],
      },
      {
        title: 'Kuća koja ostaje mirna dok ste odsutni',
        paragraphs: [
          'Ponekad je najvažnije da se prostor održi urednim dok ste na putu ili dok se priprema za dolazak novih stanara. Dolazimo prema dogovoru, poštujemo privatnost i ne zadržavamo se u prostorima koji nisu predviđeni za čišćenje. Ako imate kućne ljubimce, biljke ili osjetljive predmete, recite nam unaprijed kako bismo prilagodili rad.',
          'Za vikendice i kuće izvan grada možemo dogovoriti sezonsko otvaranje i zatvaranje prostora, uz osnovno čišćenje i pripremu za boravak. Detalji se uvijek dogovaraju prije dolaska.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Trebam li biti kod kuće tijekom čišćenja?',
        answer:
          'Nije obavezno. Mnogi klijenti nama prepuste pristup i vrate se nakon dogovorenog termina. Ako vam je draže da netko bude prisutan, to je također moguće.',
      },
      {
        question: 'Koliko traje čišćenje stana?',
        answer:
          'Trajanje ovisi o kvadraturi, stanju prostora i opsegu dogovora. Za manji stan obično je potrebno nekoliko sati, a točniju procjenu dajemo nakon osnovnih informacija.',
      },
      {
        question: 'Koristite li vlastita sredstva i opremu?',
        answer:
          'Dolazimo s osnovnom opremom i sredstvima prema dogovoru. Ako u prostoru postoji sredstvo koje želite da koristimo ili površina koja zahtijeva poseban pristup, javite nam unaprijed.',
      },
      {
        question: 'Može li se dogovoriti redoviti raspored?',
        answer:
          'Da. Redoviti termini dogovaraju se prema vašim potrebama i našim slobodnim terminima. Moguće je dogovoriti tjedni, dvotjedni ili mjesečni ritam.',
      },
      {
        question: 'Radite li i dublje čišćenje prije useljenja?',
        answer:
          'Da, takav prolaz možemo dogovoriti kao jednokratno čišćenje. Za prostore nakon renovacije preporučujemo uslugu završnog čišćenja koja je prilagođena prašini i ostacima radova.',
      },
    ],
    priceNote:
      'Ponuda ovisi o kvadraturi, stanju prostora i tome je li riječ o redovitom ili jednokratnom čišćenju. Kontaktirajte nas za procjenu.',
    relatedSlugs: ['ciscenje-apartmana', 'zavrsna-ciscenja', 'uredenje-okolisa'],
    ctaTitle: 'Više vremena za ono što vam je važnije',
    ctaText:
      'Dogovorite čišćenje stana ili kuće u Donjem Miholjcu i okolici. Prilagođavamo termin, opseg i ritam vašem domu.',
  },
  {
    slug: 'zavrsna-ciscenja',
    path: '/usluge/zavrsna-ciscenja',
    name: 'Završna čišćenja',
    shortName: 'Završna čišćenja',
    menuDescription: 'Temeljito čišćenje nakon renovacije ili selidbe.',
    icon: 'clipboard-check',
    h1: 'Završno čišćenje nakon renovacije u Donjem Miholjcu',
    metaTitle: 'Završno čišćenje u Donjem Miholjcu',
    metaDescription:
      'Završno čišćenje nakon renovacije, gradnje ili selidbe u Donjem Miholjcu i okolici. Temeljito, pažljivo i bez improvizacije. Provjerite termin.',
    shortDescription:
      'Temeljito čišćenje nakon radova, renovacije ili selidbe – od fine prašine do posljednjeg detalja prije useljenja.',
    lead:
      'Prah, tragovi radova i ljepljive površine – sve ono što se ne vidi na prvi pogled, posao je završnog čišćenja. Cilj je prostor koji je spreman za upotrebu, ne samo naizgled uredan.',
    image: '/images/gallery/final-cleaning.svg',
    imageAlt:
      'Ilustracija završnog čišćenja prostora s ljestvama, kantom, prozorom i iskricama svježine',
    galleryCategory: 'Završna čišćenja',
    highlights: ['Nakon renovacije', 'Prije useljenja', 'Detaljni prolaz'],
    included: [
      'Uklanjanje grube i fine prašine sa zidova, plafona, uglova, polica i radnih površina',
      'Prozori, prozorski okviri, stakla i klizna vrata prema dogovoru i sigurnosnim uvjetima',
      'Kuhinja: unutrašnjost i vanjština elemenata, sudoper, pločice i dostupni uređaji',
      'Kupaonica: sanitarije, tuš, kada, pločice, ogledala i slavine',
      'Podovi: usisavanje, uklanjanje ostataka materijala i vlažno brisanje prema vrsti podloge',
      'Prekidači, utičnice, kvake, lajsne, vrata i vidljive metalne površine',
      'Završni prolaz i provjera prostora prije predaje',
    ],
    forWho: [
      'Vlasnici stanova i kuća nakon renovacije ili gradnje',
      'Investitori koji pripremaju prostor za prodaju ili najam',
      'Osobe koje se useljavaju i žele čist početak u novom prostoru',
    ],
    process: [
      {
        title: 'Procjena prostora',
        text: 'Recite nam što je u prostoru rađeno, kolika je kvadratura i kada planirate useljenje ili predaju.',
      },
      {
        title: 'Dogovor o detaljima',
        text: 'Određujemo koje površine i materijali zahtijevaju posebnu pažnju te što je potrebno osigurati na lokaciji.',
      },
      {
        title: 'Sustavno čišćenje',
        text: 'Radimo od gore prema dolje i od suhog prema mokrom kako prašina ne bi ponovno završila na očišćenim površinama.',
      },
      {
        title: 'Predaja prostora',
        text: 'Zajedno ili prema dogovoru prolazimo kroz prostor i provjeravamo završni rezultat.',
      },
    ],
    sections: [
      {
        title: 'Zašto je završno čišćenje poseban posao',
        paragraphs: [
          'Nakon renovacije prašina nije samo na podu. Nalazi se na plafonima, u utičnicama, na lajsnama, unutar ormara i na površinama koje su radnici dotaknuli. Obično kućansko čišćenje često prebaci prašinu s jednog mjesta na drugo, a tragovi boje, silikona ili ljepila ostaju tamo gdje ih nitko ne primijeti do useljenja.',
          'Završno čišćenje zato ima svoj redoslijed. Prvo uklanjamo grubu nečistoću i ostatke materijala, zatim finu prašinu, a tek onda peremo površine. Tako se izbjegava stvaranje mrlja i ponovno zagađenje već gotovih prostorija. Površine i sredstva dodatno prilagođavamo materijalima kako ne bismo oštetili novi namještaj, parket ili osjetljive obloge.',
        ],
      },
      {
        title: 'Što treba pripremiti prije dolaska',
        paragraphs: [
          'Najbolje je da su veći radovi završeni i da je omogućen pristup vodi i struji. Ako u prostoru još uvijek rade majstori, dogovorit ćemo termin nakon njihova završetka kako čišćenje ne bi bilo uzaludno. Uklonite samo stvari koje ne smijete izložiti vlazi ili prašini, a ostalo možemo dogovoriti pri procjeni.',
          'Za prozore na većim visinama i teško dostupne površine javite nam unaprijed kako bismo procijenili sigurnost i potrebnu opremu. Ponekad je najbolje čišćenje podijeliti u dvije faze: grubo čišćenje nakon radova i završni detaljni prolaz prije useljenja.',
        ],
      },
      {
        title: 'Čist početak u novom prostoru',
        paragraphs: [
          'Useljenje je stresnije ako se odmah morate baviti prašinom i ostacima radova. Dobro isplanirano završno čišćenje skraćuje taj period i omogućuje da se odmah posvetite namještanju i organizaciji. To je posebno važno kod apartmana i stambenih prostora koji se pripremaju za goste ili novog vlasnika.',
          'Završno čišćenje često kombiniramo s prijevozom robe i materijala ili uređenjem okoliša. Ako se istovremeno rješavaju unutrašnjost i dvorište, dogovorimo redoslijed radova kako bi sve bilo spremno u željenom terminu.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kada zakazati završno čišćenje?',
        answer:
          'Najbolje nakon završetka svih građevinskih i obrtničkih radova, a prije useljenja namještaja i osobnih stvari. Ako je moguće, termin dogovorite nekoliko dana unaprijed.',
      },
      {
        question: 'Koliko traje završno čišćenje?',
        answer:
          'Trajanje ovisi o kvadraturi, količini prašine i dostupnim površinama. Manji stan može se očistiti u jednom danu, dok veći prostori i kuće mogu zahtijevati više termina.',
      },
      {
        question: 'Uklanjate li ostatke boje, silikona i ljepila?',
        answer:
          'Uklanjamo ih pažljivo, prema vrsti površine i uz sredstva koja ne oštećuju materijal. Neke tvrdokorne ostatke potrebno je dogovoriti zasebno jer zahtijevaju poseban pristup.',
      },
      {
        question: 'Trebam li prostor isprazniti prije čišćenja?',
        answer:
          'Prostor je najlakše očistiti dok je prazan. Ako je namještaj već unutra, možemo raditi oko njega, ali neke površine tada nisu potpuno dostupne. Dogovor o tome donosimo pri procjeni.',
      },
      {
        question: 'Radite li završna čišćenja izvan Donjeg Miholjca?',
        answer:
          'Da, dolazimo u okolicu i šira mjesta prema dogovoru. Za udaljenije lokacije i veće projekte javite se unaprijed kako bismo uskladili termin i opseg posla.',
      },
    ],
    priceNote:
      'Cijena završnog čišćenja ovisi o kvadraturi, stupnju zaprljanja i dostupnosti površina. Opis radova i lokacija dovoljni su za prvu procjenu.',
    relatedSlugs: ['stambeni-prostori', 'prijevoz-robe-i-materijala', 'uredenje-okolisa'],
    ctaTitle: 'Neka novi prostor bude spreman od prvog dana',
    ctaText:
      'Dogovorite završno čišćenje u Donjem Miholjcu i okolici. Recite nam što je rađeno i kada planirate useljenje.',
  },
  {
    slug: 'uredenje-okolisa',
    path: '/usluge/uredenje-okolisa',
    name: 'Uređenje okoliša',
    shortName: 'Uređenje okoliša',
    menuDescription: 'Održavanje dvorišta, živice i sezonsko pospremanje.',
    icon: 'sprout',
    h1: 'Uređenje okoliša i održavanje dvorišta u Donjem Miholjcu',
    metaTitle: 'Uređenje okoliša u Donjem Miholjcu',
    metaDescription:
      'Uređenje i održavanje okoliša u Donjem Miholjcu i okolici – košnja, živica, korovi i sezonsko pospremanje dvorišta. Dogovorite termin.',
    shortDescription:
      'Uređenje i održavanje dvorišta, živice, gredica i zajedničkih vanjskih površina kroz cijelu sezonu.',
    lead:
      'Uredan okoliš upotpunjuje dojam prostora – bilo da se radi o kući, apartmanu ili poslovnom objektu. Od košnje i živice do sezonskog pospremanja, pomažemo da dvorište izgleda njegovano i tijekom godine.',
    image: '/images/gallery/garden.svg',
    imageAlt:
      'Ilustracija uređenog dvorišta s kućom, živicom, stazom, drvom i vrtnim alatima',
    galleryCategory: 'Uređenje okoliša',
    highlights: ['Košnja i živica', 'Sezonsko pospremanje', 'Vanjske površine'],
    included: [
      'Košnja trave i uređivanje rubova prema dogovoru',
      'Obrezivanje živice, grmova i niskog raslinja',
      'Uklanjanje korova i sakupljanje otpalog lišća',
      'Uređenje gredica i sezonsko pospremanje cvjetnjaka',
      'Metenje i čišćenje staza, terasa i drugih vanjskih površina',
      'Završni prolaz i odvoz zelenog otpada prema dogovoru',
    ],
    forWho: [
      'Vlasnici kuća i apartmana koji žele uredno dvorište bez dodatnog opterećenja',
      'Objekti koji pripremaju vanjske površine za sezonu ili goste',
      'Poslovni prostori i manji objekti s dvorištem ili prilazom',
    ],
    process: [
      {
        title: 'Obilazak ili opis prostora',
        text: 'Kažete nam što je potrebno – košnja, živica, korovi ili kompletno pospremanje dvorišta.',
      },
      {
        title: 'Dogovor o opsegu',
        text: 'Određujemo koje površine ulaze u rad i planiramo potrebno vrijeme i opremu.',
      },
      {
        title: 'Rad na lokaciji',
        text: 'Radimo prema dogovorenom redoslijedu, pazeći na sigurnost, susjede i zelene površine koje treba sačuvati.',
      },
      {
        title: 'Uredan završetak',
        text: 'Skupljamo nastali otpad i ostavljamo prostor spreman za korištenje.',
      },
    ],
    sections: [
      {
        title: 'Dvorište koje izgleda njegovano',
        paragraphs: [
          'Prvi pogled na kuću često počinje ispred ulaznih vrata. Pokošena trava, uredna živica i očišćena staza ostavljaju dojam da se o prostoru vodi briga. Suprotno tome, korov i razbacano lišće mogu zasjeniti i najljepše uređen interijer. Uređenje okoliša zato promatramo kao završni detalj cjelokupnog dojma prostora.',
          'Posao prilagođavamo sezoni. U proljeće su najčešći prvo košnje, obrezivanje i pospremanje nakon zime. Ljeti je naglasak na održavanju živice, gredica i staza, a u jesen na lišću i pripremi dvorišta za hladnije mjesece. Prema potrebi dogovaramo jednokratne posjete ili redovito održavanje.',
        ],
      },
      {
        title: 'Mali detalji koji čine razliku',
        paragraphs: [
          'Uređenje okoliša nije samo košnja. Rubovi uz staze, orezane grane, očišćene površine i uredno odložen zeleni otpad zajedno stvaraju osjećaj skladnog prostora. Povremeno je potrebno očistiti terasu, ulazni dio ili prilaz garaži, posebno nakon kiše, vjetra ili radova u dvorištu.',
          'Ako pripremate apartman ili kuću za goste, dolazak možemo uskladiti s čišćenjem interijera. Tako vanjski prostor i unutrašnjost budu uređeni u istom terminu, bez nekoliko različitih dolazaka i dogovora.',
        ],
      },
      {
        title: 'Održavanje kroz cijelu godinu',
        paragraphs: [
          'Redovito održavanje sprječava da manji poslovi prerastu u veliko spremanje. Živica se lakše održava kada se obrezuje u pravom trenutku, a trava ostaje uredna kada se kosi dosljedno. Ako želite, dogovorimo okvirni plan posjeta i prilagodimo ga vremenskim uvjetima.',
          'Radimo na području Donjeg Miholjca i okolice, a za veće projekte i objekte u širim mjestima javite se unaprijed kako bismo dogovorili termin i opseg. Svi detalji o opremi, pristupu i odvozu otpada dogovaraju se prije početka rada.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Dolazite li s vlastitom opremom za uređenje okoliša?',
        answer:
          'Da, osnovna oprema dogovara se prema vrsti posla. Za specifične potrebe, poput visokog raslinja ili posebnog pristupa, recite nam unaprijed kako bismo se pripremili.',
      },
      {
        question: 'Koliko često treba održavati dvorište?',
        answer:
          'Ovisi o veličini zelenih površina, sezoni i vremenskim uvjetima. Neka dvorišta treba kositi svaka dva tjedna, a druga dovoljno je pospremati sezonski. Okvirni raspored dogovaramo zajedno.',
      },
      {
        question: 'Odnosite li pokošenu travu i zeleni otpad?',
        answer:
          'Odvoz zelenog otpada može biti dio dogovora, ovisno o lokaciji i količini. Molimo da to naglasite prilikom upita kako bismo ga uključili u ponudu.',
      },
      {
        question: 'Radite li jednokratno uređenje zapuštenog dvorišta?',
        answer:
          'Da. Jednokratni projekt može uključivati košnju, obrezivanje, uklanjanje korova i osnovno pospremanje. Nakon prvog uređenja možete odlučiti želite li povremeno održavanje.',
      },
      {
        question: 'Uređujete li okoliš poslovnih prostora?',
        answer:
          'Da, prema dogovoru. Za poslovne prostore važno je uskladiti termine s radnim vremenom i pristupom objektu, što dogovaramo unaprijed.',
      },
    ],
    priceNote:
      'Cijena ovisi o veličini dvorišta, vrsti radova i učestalosti održavanja. Pošaljite opis posla ili nas nazovite za okvirnu ponudu.',
    relatedSlugs: ['zavrsna-ciscenja', 'stambeni-prostori', 'ciscenje-apartmana'],
    ctaTitle: 'Neka vaše dvorište bude dio lijepog dojma',
    ctaText:
      'Dogovorite uređenje ili održavanje okoliša u Donjem Miholjcu i okolici. Recite nam što vam treba, a mi predlažemo termin.',
  },
  {
    slug: 'prijevoz-robe-i-materijala',
    path: '/prijevoz-robe-i-materijala',
    name: 'Prijevoz robe i materijala',
    shortName: 'Prijevoz robe i materijala',
    menuDescription: 'Lokalni prijevoz pošiljaka, robe i materijala.',
    icon: 'truck',
    h1: 'Prijevoz robe i materijala u Donjem Miholjcu i okolici',
    metaTitle: 'Prijevoz robe i materijala – Donji Miholjac',
    metaDescription:
      'Prijevoz robe i materijala u Donjem Miholjcu i okolici. Lokalna dostava i prijevoz uz jasan dogovor i pažljivo rukovanje. Pozovite nas.',
    shortDescription:
      'Lokalni prijevoz robe, materijala i manjih pošiljaka uz dogovor o terminu, utovaru i istovaru.',
    lead:
      'Kada roba treba stići na pravo mjesto – bez stresa i bez viška organizacije. Prijevoz dogovaramo prema vašoj pošiljci, lokaciji i terminu, uz jasan dogovor prije polaska.',
    image: '/images/gallery/transport.svg',
    imageAlt:
      'Ilustracija kombija za prijevoz robe s kutijama, cestom i brdima u pozadini',
    galleryCategory: 'Prijevoz',
    highlights: ['Lokalni prijevoz', 'Dogovor o terminu', 'Roba i materijal'],
    included: [
      'Prijevoz robe i materijala prema dogovoru i dostupnom terminu',
      'Manje i srednje pošiljke za kućanstva, obrte i male poslovne prostore',
      'Dostava materijala i potrepština na dogovorenu lokaciju',
      'Utovar i istovar prema dogovoru, uz jasno navedene uvjete pristupa',
      'Prijevoz između mjesta u okolici Donjeg Miholjca',
      'Koordinacija termina dolaska i preuzimanja s pošiljateljem ili primateljem',
    ],
    forWho: [
      'Kućanstva koja trebaju prevesti robu ili kućne potrepštine',
      'Obrti i manji poslovni prostori kojima je potrebna lokalna dostava',
      'Vlasnici apartmana i objekata koji pripremaju materijal za sezonu',
    ],
    process: [
      {
        title: 'Opišite pošiljku',
        text: 'Recite nam što prevozite, odakle i kamo te okvirne dimenzije ili količinu. Fotografija pošiljke pomaže.',
      },
      {
        title: 'Dogovorite termin',
        text: 'Zajedno određujemo datum i okvirno vrijeme preuzimanja i dostave, ovisno o raspoloživosti.',
      },
      {
        title: 'Utovar i prijevoz',
        text: 'Pošiljku preuzimamo prema dogovoru i prevozimo do odredišta, pazeći na sigurno slaganje i zaštitu robe.',
      },
      {
        title: 'Istovar i potvrda',
        text: 'Na odredištu istovaramo prema dogovoru i potvrđujemo da je pošiljka stigla na pravu adresu.',
      },
    ],
    sections: [
      {
        title: 'Prijevoz koji ne komplicira dan',
        paragraphs: [
          'Ponekad je za dovršetak posla potreban samo jedan pouzdan prijevoz. Materijal za renovaciju, dijelovi namještaja, oprema za apartman ili roba za manji poslovni prostor – sve to treba doći na odredište u dogovoreno vrijeme i u ispravnom stanju. Prijevoz robe i materijala zato dogovaramo jednostavno: opišite pošiljku, lokacije i termin, a mi kažemo što je moguće i pod kojim uvjetima.',
          'Prije polaska važno je znati količinu i vrstu robe. Teže i osjetljive predmete potrebno je posebno osigurati, a pristup utovaru i istovaru mora biti jasan. Ako zgrada nema dizalo ili je prilaz ograničen, recite nam to unaprijed kako bi dogovor bio realan i bez iznenađenja na terenu.',
        ],
      },
      {
        title: 'Utovar i istovar: dogovor prije svega',
        paragraphs: [
          'Prijevoz ne uključuje uvijek automatski i nošenje robe do vrata. Zato pitanje utovara i istovara rješavamo unaprijed. Možemo dogovoriti pomoć pri utovaru ili istovaru, ovisno o vrsti i težini pošiljke te dostupnom pristupu. Tako svi uključeni znaju što treba pripremiti i koliko vremena treba predvidjeti.',
          'Pošiljku je najbolje pripremiti u kutijama ili zaštitnoj ambalaži, posebno ako je riječ o osjetljivoj robi. Ako je potrebno, recite nam kakve su dimenzije i je li potrebna zaštita tijekom prijevoza. Prijevoz organiziramo prema vrsti pošiljke, a ne prema unaprijed zadanoj šabloni.',
        ],
      },
      {
        title: 'Lokalno, pouzdano i po dogovoru',
        paragraphs: [
          'Naše područje rada je Donji Miholjac i okolica, uključujući obližnja mjesta i širu istočnu Slavoniju. Kratke lokalne rute često su najpraktičnije jer omogućuju brz dogovor i jednostavno usklađivanje termina. Za udaljenije destinacije javite se unaprijed kako bismo provjerili mogućnosti.',
          'Ako uz prijevoz trebate i čišćenje prostora ili uređenje okoliša, možemo uskladiti poslove kako roba ne bi stizala u prostor koji još nije spreman. Na taj način cijeli projekt teče u logičnom redu, bez nepotrebnih povratnih dolazaka.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kakvu robu i materijale prevozite?',
        answer:
          'Prevozimo robu i materijale koji odgovaraju dogovorenom prijevozu i uvjetima utovara. Vrstu, količinu i dimenzije najbolje je opisati pri upitu kako bismo potvrdili mogućnost prijevoza.',
      },
      {
        question: 'Kako se formira cijena prijevoza?',
        answer:
          'Cijena ovisi o udaljenosti, količini i vrsti robe te potrebi za utovarom i istovarom. Nakon opisa pošiljke i lokacija dajemo okvirnu ponudu.',
      },
      {
        question: 'Koliko unaprijed trebam dogovoriti prijevoz?',
        answer:
          'Što je termin ranije dogovoren, to je veća mogućnost da će odgovarati. Za manje lokalne pošiljke povremeno imamo kratkoročne termine, no to provjeravamo telefonom.',
      },
      {
        question: 'Radite li prijevoz izvan Donjeg Miholjca?',
        answer:
          'Da, prema dogovoru. Okolica Donjeg Miholjca je naše osnovno područje, a za šire relacije javite se unaprijed kako bismo provjerili raspoloživost.',
      },
      {
        question: 'Je li utovar uključen u prijevoz?',
        answer:
          'Utovar i istovar dogovaraju se posebno ovisno o vrsti pošiljke i pristupu lokaciji. Uvijek ih jasno navedemo u dogovoru kako ne bi bilo nesporazuma.',
      },
    ],
    priceNote:
      'Cijena prijevoza dogovara se prema udaljenosti, količini i vrsti robe te potrebi za utovarom i istovarom. Pošaljite osnovne podatke za procjenu.',
    relatedSlugs: ['zavrsna-ciscenja', 'stambeni-prostori', 'ciscenje-apartmana'],
    ctaTitle: 'Pošiljka na pravom mjestu, u dogovoreno vrijeme',
    ctaText:
      'Dogovorite prijevoz robe i materijala u Donjem Miholjcu i okolici. Recite nam lokaciju, vrstu pošiljke i željeni termin.',
  },
]

export const cleaningServices = services.filter(
  (service) => service.slug !== 'prijevoz-robe-i-materijala',
)

export const transportService = services.find(
  (service) => service.slug === 'prijevoz-robe-i-materijala',
)!

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug)
}
