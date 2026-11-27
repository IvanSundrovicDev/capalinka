<template>
  <div>
    <PageHero
      eyebrow="Pravne informacije"
      title="Politika privatnosti"
      intro="Vaša privatnost nam je važna. Ova stranica objašnjava koje podatke prikupljamo putem web stranice, u koje se svrhe koriste i koja prava imate."
      :breadcrumbs="[{ label: 'Politika privatnosti' }]"
    />

    <section class="section">
      <div class="container--narrow">
        <p class="legal-updated">Zadnja izmjena: 1. studenoga 2026.</p>

        <div class="prose legal-prose">
          <h2>1. Voditelj obrade</h2>
          <p>
            Voditelj obrade osobnih podataka je Obrt Čapalinka, vl. Sanela Šimara,
            sa sjedištem u Donjem Miholjcu, 31540 Donji Miholjac, Hrvatska.
          </p>
          <p>
            Kontakt za pitanja o privatnosti:
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>,
            telefon <a :href="`tel:${site.phoneHref}`">{{ site.phoneDisplay }}</a>.
          </p>

          <h2>2. Koje podatke prikupljamo</h2>
          <p>
            Putem kontakt obrasca mogu se prikupiti sljedeći podaci: ime i
            prezime, broj telefona (ako ga unesete), lokacija, odabrana usluga i
            sadržaj poruke. Podatke nam dostavljate dobrovoljno kako bismo mogli
            odgovoriti na vaš upit.
          </p>
          <p>
            Obrazac na ovoj stranici ne šalje podatke na poslužitelj web stranice.
            Kada potvrdite obrazac, otvara se vaša e-mail aplikacija s unaprijed
            pripremljenom porukom. Podaci se zatim šalju e-poštom tek kada vi sami
            pošaljete poruku.
          </p>

          <h2>3. Svrha i pravna osnova obrade</h2>
          <p>
            Podatke koristimo isključivo radi odgovora na vaš upit, dogovora o
            usluzi i, po potrebi, provedbe ugovorenog posla. Pravna osnova obrade
            je vaš pristanak te, kada je primjenjivo, poduzimanje radnji prije
            sklapanja ugovora i ispunjavanje ugovornih obveza.
          </p>
          <p>
            Ne koristimo vaše podatke za marketing, profiliranje niti ih prodajemo
            trećim osobama bez izričitog pristanka.
          </p>

          <h2>4. Koliko dugo čuvamo podatke</h2>
          <p>
            Podatke iz upita čuvamo onoliko dugo koliko je potrebno za odgovor i
            eventualni dogovor, a najdulje do prestanka potrebe za njihovim
            čuvanjem. Ako se sklopi poslovni odnos, podaci se čuvaju u skladu s
            primjenjivim zakonskim obvezama.
          </p>

          <h2>5. Primatelji podataka</h2>
          <p>
            Osim vas i nas, podatke mogu obrađivati pružatelj usluge hostinga i
            pružatelj e-mail usluge, isključivo u okviru tehničke podrške i
            sigurnosti. Takvi pružatelji obrađuju podatke prema našim uputama i
            primjenjivim ugovorima o obradi podataka.
          </p>

          <h2>6. Kolačići i vanjski sadržaji</h2>
          <p>
            Ova web stranica ne koristi kolačiće za analitiku, oglašavanje ni
            praćenje korisnika. Na stranici Kontakt nalazi se interaktivna karta
            izrađena pomoću biblioteke Leaflet, koja koristi kartografske pločice
            usluge OpenStreetMap. Vanjski sadržaji učitavaju se tek kada posjetite
            stranicu Kontakt, a na njih se primjenjuju pravila privatnosti tog
            pružatelja usluge.
          </p>

          <h2>7. Vaša prava</h2>
          <p>
            U vezi s obradom svojih podataka imate pravo na pristup, ispravak,
            brisanje, ograničenje obrade, prigovor, prenosivost podataka i
            povlačenje pristanka u svakom trenutku. Zahtjev možete poslati na
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>.
          </p>
          <p>
            Ako smatrate da je obrada podataka provedena suprotno propisima, imate
            pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP),
            Selska cesta 136, Zagreb, <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">azop.hr</a>.
          </p>

          <h2>8. Sigurnost i izmjene</h2>
          <p>
            Mjere zaštite podataka prilagođavamo vrsti obrade i rizicima. Ova
            politika može se povremeno ažurirati kako bi odražavala promjene u
            radu stranice ili zakonskim zahtjevima. Datum zadnje izmjene nalazi se
            na početku stranice.
          </p>

          <div class="legal-contact">
            <p>
              Imate pitanje o privatnosti ili obradi podataka?
            </p>
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
    'Politika privatnosti Obrta Čapalinka: koje podatke prikupljamo putem web stranice, kako se koriste i koja prava imate.',
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

.legal-prose p {
  font-size: 0.98rem;
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
</style>
