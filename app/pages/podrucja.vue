<template>
  <div>
    <PageHero
      eyebrow="Područja rada"
      title="Čišćenje i prijevoz u Donjem Miholjcu i okolici"
      intro="Iz Donjeg Miholjca pokrivamo grad, prigradska naselja, susjedne općine i šire područje istočne Slavonije. Za redovite poslove i manje termine najlakše se dogovaramo u neposrednoj blizini, a za veće projekte i prijevoz dolazak usklađujemo unaprijed."
      :breadcrumbs="[{ label: 'Područja rada' }]"
    >
      <template #actions>
        <div class="btn-row">
          <NuxtLink class="btn" to="/kontakt">
            Provjerite dostupnost
            <ArrowRight :size="18" aria-hidden="true" />
          </NuxtLink>
          <a class="btn btn--outline" :href="`tel:${site.phoneHref}`">
            <Phone :size="17" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
        </div>
      </template>
    </PageHero>

    <section class="section">
      <div class="container coverage-intro">
        <div class="coverage-intro__copy">
          <span class="eyebrow">Lokalno i dostupno</span>
          <h2>Blizu vas, s jasnim <em class="italic-accent">dogovorom</em></h2>
          <p>
            Donji Miholjac nije samo mjesto iz kojeg dolazimo – to je naš dom i
            sredina koju poznajemo. Znamo koliko je važno da netko dođe na vrijeme,
            da razumije specifičnosti prostora i da se može lako dogovoriti za
            sljedeći termin. Upravo zato lokalnost smatramo prednošću, a ne samo
            stavkom u opisu usluge.
          </p>
          <p>
            Radimo na području cijele okolice: od prigradskih naselja i susjednih
            općina do Valpova, Belišća, Osijeka, Našica, Slatine i Virovitice.
            Dolazak za svaku lokaciju potvrđujemo unaprijed kako biste znali što
            možete očekivati.
          </p>
          <div class="coverage-intro__links">
            <NuxtLink to="/usluge" class="link-arrow">
              Pogledajte usluge
              <ArrowUpRight :size="16" aria-hidden="true" />
            </NuxtLink>
            <NuxtLink to="/prijevoz-robe-i-materijala" class="link-arrow">
              Prijevoz robe i materijala
              <ArrowUpRight :size="16" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <div class="coverage-visual">
          <LeafBranch class="coverage-visual__leaf" soft />
          <div class="coverage-visual__orbit coverage-visual__orbit--one" aria-hidden="true" />
          <div class="coverage-visual__orbit coverage-visual__orbit--two" aria-hidden="true" />
          <div class="coverage-visual__center">
            <span class="coverage-visual__pin">
              <MapPin :size="24" aria-hidden="true" />
            </span>
            <strong>Donji Miholjac</strong>
            <small>baza obrta</small>
          </div>
          <span class="coverage-visual__label coverage-visual__label--one">Osječko-baranjska</span>
          <span class="coverage-visual__label coverage-visual__label--two">Virovitičko-podravska</span>
          <span class="coverage-visual__label coverage-visual__label--three">prema dogovoru</span>
        </div>
      </div>
    </section>

    <section class="section section--sage">
      <div class="container">
        <SectionIntro
          eyebrow="Zone dolaska"
          title="Od najbližih adresa do <em class='italic-accent'>šire okolice</em>"
          text="Područja su navedena okvirno kako biste lakše procijenili možemo li doći. Konkretan termin i uvjete uvijek potvrđujemo telefonom ili putem upita."
        />

        <div class="coverage-zones">
          <article
            v-for="(group, index) in areaGroups"
            :key="group.title"
            class="coverage-zone"
          >
            <div class="coverage-zone__head">
              <span class="coverage-zone__num" aria-hidden="true">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="coverage-zone__tag">
                {{ index === 0 ? 'Osnovno područje' : index === 1 ? 'Susjedne općine' : 'Šira okolica' }}
              </span>
            </div>
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
            <ul class="coverage-zone__places" :aria-label="`Mjesta: ${group.title}`">
              <li v-for="place in group.places" :key="place">{{ place }}</li>
            </ul>
          </article>
        </div>

        <p class="coverage-zones__note">
          <Info :size="15" aria-hidden="true" />
          Dolazak izvan navedenih područja moguć je prema dogovoru, ovisno o vrsti
          posla i raspoloživosti termina.
        </p>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container local-focus">
        <aside class="local-focus__aside">
          <span class="eyebrow">Poznajemo okolicu</span>
          <h2>Lokalne rute, <em class="italic-accent">manje čekanja</em></h2>
          <p>
            Rad u poznatoj sredini olakšava dogovor, procjenu vremena i rješavanje
            sitnih nepredviđenih situacija. Ako vaše mjesto nije na popisu, javite
            nam se – možda se već nalazimo u blizini.
          </p>
          <NuxtLink class="btn btn--sm" to="/kontakt">
            Provjerite termin
            <ArrowRight :size="16" aria-hidden="true" />
          </NuxtLink>
          <LeafBranch class="local-focus__leaf" soft />
        </aside>

        <div class="local-focus__body">
          <article class="local-focus__article">
            <h3>Donji Miholjac i prigradska naselja</h3>
            <p>
              U samom Donjem Miholjcu i obližnjim naseljima najčešće radimo
              čišćenje apartmana, stanova i kuća te povremena završna čišćenja. Za
              redovite termine u ovom području lakše je naći termin koji se
              uklapa u vaš tjedni raspored, a i dodatne potrebe mogu se brže
              riješiti.
            </p>
            <p>
              Prigradska naselja Golinci, Miholjački Poreč, Podgajci Podravski,
              Radikovci, Rakitovica i Sveti Đurađ također su dio našeg osnovnog
              područja. Ako trebate pripremu za goste, sezonsko čišćenje ili
              prijevoz materijala, dovoljno je navesti adresu i opis posla.
            </p>
            <div class="local-focus__links">
              <NuxtLink to="/usluge/ciscenje-apartmana" class="link-arrow">
                Čišćenje apartmana
                <ArrowUpRight :size="15" aria-hidden="true" />
              </NuxtLink>
              <NuxtLink to="/usluge/stambeni-prostori" class="link-arrow">
                Čišćenje stana
                <ArrowUpRight :size="15" aria-hidden="true" />
              </NuxtLink>
            </div>
          </article>

          <article class="local-focus__article">
            <h3>Valpovo, Belišće i susjedne općine</h3>
            <p>
              Za Valpovo, Belišće te općine Viljevo, Magadenovac, Marijanci,
              Podravska Moslavina, Čađavica i Sopje dolazak dogovaramo unaprijed.
              Uvjeti su isti kao i u matičnom području: jasan opseg, potvrđen
              termin i pažljiv rad u prostoru.
            </p>
            <p>
              Za veće ili složenije poslove, poput završnog čišćenja nakon
              renovacije, korisno je poslati nekoliko fotografija i okvirnu
              kvadraturu. Tako možemo procijeniti trajanje i predložiti realan
              raspored bez nepotrebnih dolazaka.
            </p>
            <div class="local-focus__links">
              <NuxtLink to="/usluge/zavrsna-ciscenja" class="link-arrow">
                Završno čišćenje
                <ArrowUpRight :size="15" aria-hidden="true" />
              </NuxtLink>
              <NuxtLink to="/usluge/uredenje-okolisa" class="link-arrow">
                Uređenje okoliša
                <ArrowUpRight :size="15" aria-hidden="true" />
              </NuxtLink>
            </div>
          </article>

          <article class="local-focus__article">
            <h3>Osijek, Našice, Slatina i Virovitica</h3>
            <p>
              Na širem području istočne Slavonije dolazimo prema dogovoru. Za
              Osijek, Našice, Slatinu i Viroviticu preporučujemo da nam se javite
              s dovoljno vremena kako bismo mogli uskladiti put i termin. Fokus je
              na poslovima kod kojih dolazak ima smisla – završna čišćenja, veći
              projekti, prijevoz robe i materijala ili kombinacija više usluga.
            </p>
            <p>
              Ako planirate uređenje apartmana ili kuće za sezonu, dobra je
              praksa da nas kontaktirate nekoliko tjedana ranije. Tako ostaje
              prostora za dogovor, a posao se može završiti bez nepotrebnog
              preskakanja rokova.
            </p>
            <div class="local-focus__links">
              <NuxtLink to="/prijevoz-robe-i-materijala" class="link-arrow">
                Prijevoz robe i materijala
                <ArrowUpRight :size="15" aria-hidden="true" />
              </NuxtLink>
              <NuxtLink to="/kontakt" class="link-arrow">
                Dogovorite dolazak
                <ArrowUpRight :size="15" aria-hidden="true" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container coverage-faq">
        <div class="coverage-faq__intro">
          <span class="eyebrow">Pitanja o dolasku</span>
          <h2>Prije nego se <em class="italic-accent">čujemo</em></h2>
          <p>
            Ako vaše mjesto nije navedeno ili niste sigurni je li dolazak moguć,
            slobodno se javite. Najbrže ćemo odgovoriti telefonom.
          </p>
          <a class="phone-link" :href="`tel:${site.phoneHref}`">
            <Phone :size="17" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
        </div>
        <FaqList :items="areaFaqs" />
      </div>
    </section>

    <CtaBand
      title="Provjerimo možemo li doći <em class='italic-accent'>k vama</em>"
      text="Recite nam mjesto, vrstu usluge i okvirni termin. Odmah ćemo vam reći koje su mogućnosti i što je potrebno za dogovor."
    />
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  Info,
  MapPin,
  Phone,
} from 'lucide-vue-next'
import { areaGroups } from '~/data/site'
import { breadcrumbSchema, faqSchema } from '~/utils/schema'

const site = useSite()

const areaFaqs = [
  {
    question: 'Dolazite li u moje mjesto?',
    answer:
      'Najčešće radimo u Donjem Miholjcu, prigradskim naseljima i obližnjim općinama. Za Valpovo, Belišće, Osijek, Našice, Slatinu, Viroviticu i druga mjesta dolazak dogovaramo prema raspoloživosti. Najbolje je nazvati ili poslati upit s lokacijom i opisom posla.',
  },
  {
    question: 'Kako se dogovara termin za udaljenije mjesto?',
    answer:
      'Za udaljenije lokacije javite se što ranije kako bismo uskladili put i termin. Veći projekti ili više usluga na istoj lokaciji lakše se planiraju unaprijed, a termin potvrđujemo prije dolaska.',
  },
  {
    question: 'Ulazi li put u cijenu usluge?',
    answer:
      'Ponuda uključuje dogovorene stavke, a eventualni trošak dolaska za udaljenije lokacije navodimo unaprijed. Tako prije početka znate ukupne uvjete i nema naknadnih iznenađenja.',
  },
  {
    question: 'Može li se prijevoz dogovoriti izvan navedenih područja?',
    answer:
      'Prema dogovoru, posebno za veće pošiljke ili projekte. Opišite vrstu robe, količinu, lokacije utovara i istovara te željeni termin, a mi ćemo provjeriti mogućnosti.',
  },
]

usePageSeo({
  title: 'Čišćenje i prijevoz – Donji Miholjac i okolica',
  description:
    'Područja rada Obrta Čapalinka: Donji Miholjac, Golinci, Valpovo, Belišće, Osijek, Našice, Slatina, Virovitica i okolica. Provjerite dostupnost termina.',
  path: '/podrucja',
})

useJsonLd(
  breadcrumbSchema(
    [
      { label: 'Početna', to: '/' },
      { label: 'Područja rada', to: '/podrucja' },
    ],
    site,
  ),
  'ld-breadcrumb',
)
useJsonLd(faqSchema(areaFaqs), 'ld-faq')
</script>

<style scoped>
.coverage-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: center;
}

.coverage-intro__copy h2 {
  margin-bottom: 1.2rem;
}

.coverage-intro__copy > p {
  color: var(--ink-soft);
  font-size: 0.98rem;
  line-height: 1.78;
}

.coverage-intro__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.4rem;
}

.coverage-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at 50% 45%, rgba(169, 212, 195, 0.19), transparent 16rem),
    var(--dark);
  color: var(--cream-on-dark);
}

.coverage-visual__orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(169, 212, 195, 0.22);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.coverage-visual__orbit--one {
  width: 230px;
  height: 230px;
}

.coverage-visual__orbit--two {
  width: 340px;
  height: 340px;
  border-style: dashed;
  opacity: 0.7;
}

.coverage-visual__center {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.coverage-visual__pin {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  margin-bottom: 0.8rem;
  border: 1px solid rgba(169, 212, 195, 0.4);
  border-radius: 50%;
  background: var(--sage);
  color: var(--dark);
  box-shadow: 0 0 0 9px rgba(169, 212, 195, 0.09);
}

.coverage-visual__center strong {
  color: var(--cream-on-dark);
  font-family: var(--font-serif);
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.2;
}

.coverage-visual__center small {
  margin-top: 0.15rem;
  color: rgba(246, 241, 229, 0.65);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.coverage-visual__label {
  position: absolute;
  z-index: 2;
  padding: 0.35rem 0.6rem;
  border: 1px solid rgba(169, 212, 195, 0.18);
  border-radius: 999px;
  background: rgba(246, 241, 229, 0.05);
  color: rgba(246, 241, 229, 0.78);
  font-size: 0.64rem;
  font-weight: 650;
  line-height: 1.4;
  white-space: nowrap;
}

.coverage-visual__label--one {
  top: 17%;
  left: 11%;
}

.coverage-visual__label--two {
  right: 8%;
  bottom: 22%;
}

.coverage-visual__label--three {
  bottom: 12%;
  left: 18%;
}

.coverage-visual__leaf {
  position: absolute;
  right: -40px;
  bottom: -100px;
  width: 230px;
  opacity: 0.5;
  transform: rotate(8deg);
}

.coverage-zones {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.coverage-zone {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  border: 1px solid var(--line-green);
  border-radius: var(--radius);
  background: rgba(252, 250, 245, 0.68);
}

.coverage-zone__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.4rem;
}

.coverage-zone__num {
  color: var(--sage-dark);
  font-family: var(--font-serif);
  font-size: 1.15rem;
}

.coverage-zone__tag {
  color: var(--muted);
  font-size: 0.61rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-align: right;
  text-transform: uppercase;
}

.coverage-zone h3 {
  margin-bottom: 0.6rem;
  font-size: 1.35rem;
}

.coverage-zone > p {
  flex: 1;
  margin-bottom: 1.25rem;
  color: var(--ink-soft);
  font-size: 0.86rem;
  line-height: 1.65;
}

.coverage-zone__places {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.coverage-zone__places li {
  margin: 0;
  padding: 0.25rem 0.55rem;
  border: 1px solid var(--line-green);
  border-radius: 999px;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1.4;
}

.coverage-zones__note {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  margin: 1.6rem 0 0;
  color: var(--muted);
  font-size: 0.77rem;
  line-height: 1.55;
}

.coverage-zones__note svg {
  margin-top: 0.13rem;
  flex-shrink: 0;
  color: var(--sage-dark);
}

.local-focus {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: start;
}

.local-focus__aside {
  position: sticky;
  top: calc(var(--header-height) + 1.5rem);
  overflow: hidden;
  padding: 2rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--cream);
}

.local-focus__aside h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.local-focus__aside p {
  margin-bottom: 1.4rem;
  color: var(--ink-soft);
  font-size: 0.9rem;
  line-height: 1.7;
}

.local-focus__leaf {
  position: absolute;
  right: -55px;
  bottom: -100px;
  width: 200px;
  opacity: 0.4;
}

.local-focus__article {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--line);
}

.local-focus__article + .local-focus__article {
  padding-top: 2rem;
}

.local-focus__article:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.local-focus__article h3 {
  margin-bottom: 0.8rem;
  font-size: clamp(1.45rem, 2.2vw, 1.9rem);
}

.local-focus__article p {
  color: var(--ink-soft);
  font-size: 0.97rem;
  line-height: 1.78;
}

.local-focus__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 0.9rem;
}

.local-focus__links .link-arrow {
  font-size: 0.82rem;
}

.coverage-faq {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

.coverage-faq__intro h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.9rem, 3.2vw, 2.8rem);
}

.coverage-faq__intro p {
  max-width: 40ch;
  color: var(--ink-soft);
  font-size: 0.94rem;
  line-height: 1.7;
}

.coverage-faq__intro .phone-link {
  margin-top: 0.5rem;
}

@media (max-width: 1000px) {
  .coverage-intro,
  .local-focus,
  .coverage-faq {
    grid-template-columns: 1fr;
    gap: 2.7rem;
  }

  .coverage-visual {
    max-width: 560px;
    min-height: 340px;
  }

  .coverage-zones {
    grid-template-columns: 1fr;
  }

  .local-focus__aside {
    position: static;
    max-width: 600px;
  }

  .coverage-faq__intro {
    max-width: 580px;
  }
}

@media (max-width: 640px) {
  .coverage-visual {
    min-height: 300px;
  }

  .coverage-visual__orbit--one {
    width: 190px;
    height: 190px;
  }

  .coverage-visual__orbit--two {
    width: 280px;
    height: 280px;
  }

  .coverage-visual__label--one {
    top: 10%;
    left: 6%;
  }

  .coverage-visual__label--two {
    right: 5%;
    bottom: 16%;
  }

  .coverage-visual__label--three {
    display: none;
  }

  .local-focus__aside {
    padding: 1.4rem;
  }

  .coverage-intro__links {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
