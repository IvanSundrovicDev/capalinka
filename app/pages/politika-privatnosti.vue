<template>
  <div>
    <PageHero
      eyebrow="Pravne informacije"
      title="Politika privatnosti"
      intro="Ova politika objašnjava koje osobne podatke Obrt Čapalinka obrađuje putem web stranice, kontaktnog obrasca, e-pošte i telefona, u koje svrhe, na kojoj pravnoj osnovi, kome ih može otkriti i koja prava imate."
      :breadcrumbs="[{ label: 'Politika privatnosti' }]"
    />

    <section class="section">
      <div class="container--narrow">
        <p class="legal-updated">
          Verzija 1.1 · Zadnja izmjena: 27. studenoga 2026.
        </p>

        <div class="prose legal-prose">
          <h2>1. Voditelj obrade</h2>
          <p>
            Voditelj obrade osobnih podataka je Obrt Čapalinka, vl. Sanela Šimara,
            sa sjedištem u Donjem Miholjcu, 31540 Donji Miholjac, Hrvatska.
          </p>
          <p>
            Kontakt za pitanja o privatnosti i ostvarivanje prava:
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>,
            telefon <a :href="`tel:${site.phoneHref}`">{{ site.phoneDisplay }}</a>.
          </p>

          <h2>2. Koje podatke obrađujemo i odakle dolaze</h2>
          <p>
            Ovisno o tome kako nas kontaktirate, možemo obrađivati sljedeće
            kategorije podataka:
          </p>
          <ul>
            <li>
              <strong>Kontakt obrazac:</strong> ime i prezime, broj telefona
              (neobavezan), odabrana usluga, lokacija i sadržaj poruke. Obrazac
              ne šalje podatke na poslužitelj ove web stranice. Nakon potvrde
              otvara se vaša e-mail aplikacija s pripremljenom porukom, a podaci
              nam stižu tek kada sami pošaljete e-poštu.
            </li>
            <li>
              <strong>E-pošta i telefon:</strong> podaci koje nam dobrovoljno
              pošaljete u e-poruci ili priopćite tijekom telefonskog razgovora,
              primjerice ime, kontakt podaci i sadržaj upita.
            </li>
            <li>
              <strong>Tehnički podaci hostinga:</strong> prilikom posjete
              stranici pružatelj hostinga i CDN usluge može zabilježiti IP
              adresu, vrstu preglednika i uređaja, operativni sustav, referrer,
              datum i vrijeme te zatražene URL-ove i status odgovora. Te podatke
              koristimo za isporuku sadržaja, sigurnost i sprječavanje zlouporabe.
            </li>
            <li>
              <strong>Karta:</strong> na stranici Kontakt koristimo Leaflet i
              kartografske pločice OpenStreetMap Foundationa (OSMF). Kada se
              karta učita, vaš preglednik izravno komunicira s OSMF-ovim
              poslužiteljima te im se prenose IP adresa i tehnički podaci o
              zahtjevu. OSMF te podatke obrađuje kao neovisni voditelj obrade
              prema vlastitoj politici privatnosti.
            </li>
          </ul>
          <p>
            Ime i prezime te poruka su obavezni ako želite da odgovorimo na upit.
            Broj telefona nije obavezan. Ako ga ne unesete, odgovorit ćemo na
            e-mail adresu s koje je poruka poslana. Bez obveznih podataka ne
            možemo obraditi upit niti odgovoriti na njega.
          </p>
          <p>
            Potvrda u kontakt obrascu nije privola za marketing. Njome
            potvrđujete da ste upoznati s ovom politikom i načinom obrade podataka
            potrebnih za odgovor na upit.
          </p>

          <h2>3. Svrhe i pravne osnove obrade</h2>
          <p>
            Osobne podatke obrađujemo samo u svrhe za koje postoji odgovarajuća
            pravna osnova:
          </p>
          <ul>
            <li>
              <strong>Odgovor na upit i priprema ponude:</strong> članak 6.
              stavak 1. točka (b) GDPR-a (radnje prije sklapanja ugovora) i,
              kada je primjenjivo, članak 6. stavak 1. točka (f) GDPR-a
              (legitimni interes za odgovor na poslovni upit).
            </li>
            <li>
              <strong>Sklapanje i izvršavanje ugovora:</strong> članak 6. stavak
              1. točka (b) GDPR-a.
            </li>
            <li>
              <strong>Računovodstvene i porezne obveze:</strong> članak 6.
              stavak 1. točka (c) GDPR-a (pravna obveza).
            </li>
            <li>
              <strong>Sigurnost web stranice i tehnički zapisi:</strong> članak
              6. stavak 1. točka (f) GDPR-a (legitimni interes za sigurnu i
              stabilnu isporuku stranice te sprječavanje zlouporabe).
            </li>
            <li>
              <strong>Prikaz lokacije na karti:</strong> članak 6. stavak 1.
              točka (f) GDPR-a (legitimni interes da posjetiteljima prikažemo
              lokaciju). OSMF za vlastitu obradu koristi svoj legitimni interes;
              pojedinosti su u OSMF-ovoj politici privatnosti.
            </li>
            <li>
              <strong>Marketing:</strong> trenutačno ne provodimo marketing,
              profiliranje ni automatizirano odlučivanje. Ako se to promijeni,
              prethodno ćemo zatražiti odgovarajuću privolu i ažurirati ovu
              politiku.
            </li>
          </ul>

          <h2>4. Legitimni interes i pravo na prigovor</h2>
          <p>
            Kada se obrada temelji na legitimnom interesu, naši interesi su:
            odgovoriti na vaš poslovni upit, zaštititi web stranicu i sustave od
            zlouporabe, osigurati ispravan prikaz sadržaja te omogućiti prikaz
            lokacije putem karte. U tim slučajevima imate pravo uložiti prigovor
            na obradu. Prigovor možete poslati na
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>; objasnit ćemo
            vam nastavak obrade ili ćemo je, kada je to propisano, ograničiti.
          </p>

          <h2>5. Primatelji i prijenosi izvan EGP-a</h2>
          <p>
            Vaše podatke ne prodajemo. U okviru navedenih svrha podatke mogu
            obrađivati sljedeći primatelji i izvršitelji obrade:
          </p>
          <ul>
            <li>
              <strong>Netlify, Inc.</strong> — pružatelj hostinga i CDN usluge za
              ovu web stranicu. Netlify obrađuje tehničke podatke i podatke iz
              zapisa o pristupu u okviru pružanja usluge. Netlify ima sjedište u
              Sjedinjenim Američkim Državama te obrađuje podatke i izvan EGP-a;
              prijenos je obuhvaćen važećim zaštitnim mjerama iz Netlifyjevog
              ugovora o obradi podataka (EU-U.S. Data Privacy Framework i, kao
              zamjena, standardne ugovorne klauzule).
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >Netlify Privacy Statement</a>
              ·
              <a
                href="https://www.netlify.com/pdf/netlify-dpa.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >Netlify DPA</a>
            </li>
            <li>
              <strong>Pružatelj e-mail usluge</strong> koji koristimo za primanje
              i slanje poslovne e-pošte, isključivo radi komunikacije vezane uz
              vaš upit ili poslovni odnos. Ako taj pružatelj obrađuje podatke
              izvan EGP-a, prijenos se temelji na primjenjivim zaštitnim mjerama
              iz njegovih uvjeta i ugovora o obradi podataka.
            </li>
            <li>
              <strong>OpenStreetMap Foundation (OSMF)</strong>, St John’s
              Innovation Centre, Cowley Road, Cambridge, CB4 0WS, Ujedinjeno
              Kraljevstvo — neovisni voditelj obrade za kartografske pločice.
              OSMF obrađuje tehničke podatke o zahtjevima za pločice na temelju
              legitimnog interesa i koristi poslužitelje u Ujedinjenom
              Kraljevstvu, Nizozemskoj i globalnoj CDN mreži. Više informacija:
              <a
                href="https://osmfoundation.org/wiki/Privacy_Policy"
                target="_blank"
                rel="noopener noreferrer"
              >OSMF Privacy Policy</a>.
            </li>
            <li>
              <strong>IT podrška, knjigovodstvo i slični pružatelji usluga</strong>,
              kada je to potrebno za sigurnost, održavanje sustava ili zakonske
              obveze, uz odgovarajuće obveze povjerljivosti i zaštite podataka.
            </li>
          </ul>
          <p>
            Podatke možemo otkriti i nadležnim tijelima kada nas na to obvezuje
            zakon. Sadržaj kontakt obrasca ne šalje se Netlifyju jer se obrada
            odvija kroz vašu e-mail aplikaciju; Netlify obrađuje tehničke zapise
            povezane s isporukom stranice.
          </p>

          <h2>6. Koliko dugo čuvamo podatke</h2>
          <ul>
            <li>
              <strong>Upiti i komunikacija bez sklopljenog ugovora:</strong>
              čuvamo ih do 12 mjeseci od posljednje komunikacije, osim ako je
              potrebno dulje čuvanje radi zaštite pravnih zahtjeva.
            </li>
            <li>
              <strong>Ugovorni i računovodstveni podaci:</strong> čuvamo ih
              onoliko koliko zahtijevaju važeći računovodstveni i porezni propisi;
              točan rok ovisi o vrsti dokumenta i potvrđuje se s knjigovođom.
            </li>
            <li>
              <strong>Tehnički zapisi hostinga:</strong> čuvaju se prema
              Netlifyjevim pravilima i postavkama potrebnima za sigurnost i
              dijagnostiku; naš pristup tim zapisima ograničen je na nužno.
            </li>
            <li>
              <strong>OSMF podaci:</strong> čuvaju se prema OSMF-ovoj politici
              privatnosti, na koju ne možemo izravno utjecati.
            </li>
          </ul>
          <p>
            Nakon isteka primjenjivog roka podatke brišemo ili anonimiziramo.
            Ako se obrada temelji na privoli, podatke prestajemo obrađivati nakon
            povlačenja privole, uz mogućnost daljnjeg čuvanja kada to zahtijeva
            zakon.
          </p>

          <h2>7. Kolačići i vanjski sadržaji</h2>
          <p>
            Ova web stranica ne koristi kolačiće za analitiku, oglašavanje ni
            praćenje korisnika i trenutačno nema potrebe za trakom za privolu
            kolačića. Tehnički nužna pohrana koju eventualno koristi pružatelj
            hostinga služi isključivo za isporuku i sigurnost stranice.
          </p>
          <p>
            Karta na stranici Kontakt učitava se pomoću biblioteke Leaflet i
            pločica OpenStreetMap Foundationa. Standardne OSMF-ove kartografske
            pločice ne zahtijevaju kolačiće za prikaz karte, ali vaš preglednik
            pritom izravno kontaktira OSMF-ove poslužitelje i prenosi im IP
            adresu i tehničke podatke opisane u odjeljku 2. Ako u budućnosti
            uvedemo analitiku, oglašavanje, ugrađeni video ili slične alate koji
            nisu tehnički nužni, prije njihova postavljanja zatražit ćemo privolu
            i objaviti odgovarajuću obavijest o kolačićima, sukladno Zakonu o
            elektroničkim komunikacijama i smjernicama AZOP-a.
          </p>

          <h2>8. Vaša prava</h2>
          <p>
            U vezi s obradom svojih podataka imate pravo na pristup, ispravak,
            brisanje, ograničenje obrade, prigovor, prenosivost podataka i
            povlačenje privole kada se obrada temelji na privoli. Povlačenje
            privole ne utječe na zakonitost obrade koja je provedena prije
            povlačenja.
          </p>
          <p>
            Zahtjev možete poslati na
            <a :href="`mailto:${site.email}`">{{ site.email }}</a> ili nas
            kontaktirati telefonom. Odgovorit ćemo bez nepotrebnog odgađanja, a
            najkasnije u roku od mjesec dana od zaprimanja zahtjeva. Rok se može
            produžiti za dodatna dva mjeseca ako je zahtjev složen; o tome ćemo
            vas obavijestiti u prvom mjesecu.
          </p>
          <p>
            Ako smatrate da je obrada provedena suprotno propisima, imate pravo
            podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP),
            Ulica Metela Ožegovića 16, 10 000 Zagreb, e-pošta
            <a href="mailto:azop@azop.hr">azop@azop.hr</a>,
            <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">azop.hr</a>.
          </p>
          <p>
            Ne provodimo automatizirano donošenje odluka ni profiliranje s
            pravnim ili slično značajnim učincima.
          </p>

          <h2>9. Sigurnost i izmjene politike</h2>
          <p>
            Primjenjujemo tehničke i organizacijske mjere primjerene riziku,
            uključujući HTTPS, ograničen pristup podacima i korištenje pružatelja
            usluga s odgovarajućim ugovornim zaštitnim mjerama. Nijedan sustav nije
            potpuno imun na sigurnosne incidente; u slučaju povrede podataka
            postupamo u skladu s člancima 33. i 34. GDPR-a.
          </p>
          <p>
            Ovu politiku povremeno ažuriramo kako bi odražavala stvarne postupke
            obrade i zakonske zahtjeve. Važeća verzija i datum izmjene objavljeni
            su na početku ove stranice.
          </p>

          <div class="legal-contact">
            <p>Imate pitanje o privatnosti ili obradi podataka?</p>
            <NuxtLink to="/kontakt" class="btn btn--sm">
              Kontaktirajte nas
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { breadcrumbSchema } from '~/utils/schema'

const site = useSite()

usePageSeo({
  title: 'Politika privatnosti',
  description:
    'Politika privatnosti Obrta Čapalinka: koje podatke obrađujemo putem web stranice, obrasca, e-pošte i telefona, pravne osnove, primatelji, rokovi i prava.',
  path: '/politika-privatnosti',
  noindex: true,
})

useJsonLd(
  breadcrumbSchema(
    [
      { label: 'Početna', to: '/' },
      { label: 'Politika privatnosti', to: '/politika-privatnosti' },
    ],
    site,
  ),
  'ld-breadcrumb',
)
</script>

<style scoped>
.legal-updated {
  margin-bottom: 2rem;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 650;
}

.legal-prose h2 {
  margin-top: 2.4rem;
}

.legal-prose h2:first-of-type {
  margin-top: 0;
}

.legal-prose p,
.legal-prose li {
  font-size: 0.98rem;
}

.legal-prose li {
  margin-bottom: 0.65rem;
}

.legal-contact {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
}

.legal-contact p {
  margin: 0;
  color: var(--ink);
  font-weight: 650;
}

.legal-contact .btn {
  color: var(--cream);
  text-decoration: none;
}

.legal-contact .btn:hover {
  color: var(--ink);
}
</style>
