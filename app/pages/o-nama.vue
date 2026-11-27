<template>
  <div>
    <PageHero
      eyebrow="O nama"
      title="Briga o prostoru koja se temelji na dogovoru i pažnji"
      intro="Obrt Čapalinka je lokalni obrt iz Donjeg Miholjca. Spajamo praktične usluge čišćenja, uređenja okoliša i prijevoza robe i materijala – s ciljem da vaš prostor bude spreman, a vaš dan mirniji."
      :breadcrumbs="[{ label: 'O nama' }]"
    >
      <template #actions>
        <div class="btn-row">
          <NuxtLink class="btn" to="/kontakt">
            Zatražite ponudu
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
      <div class="container about-page">
        <div class="about-page__visual">
          <div class="about-page__frame">
            <img
              src="/images/gallery/living-room.svg"
              alt="Ilustracija uređenog dnevnog boravka – briga o stambenim prostorima"
              width="1200"
              height="900"
              fetchpriority="high"
            />
          </div>
          <div class="about-page__signature">
            <LogoMark class="about-page__signature-mark" />
            <span>
              <strong>Sanela Šimara</strong>
              vlasnica obrta
            </span>
          </div>
          <LeafBranch class="about-page__leaf" soft />
        </div>

        <div class="about-page__copy">
          <span class="eyebrow">Naša priča</span>
          <h2>Lokalno, osobno i s <em class="italic-accent">pažnjom</em></h2>
          <p>
            Obrt Čapalinka nastao je iz jednostavne ideje: da ljudima u Donjem
            Miholjcu i okolici treba pouzdan lokalni partner za poslove koji im
            oduzimaju vrijeme. Čišćenje apartmana prije gostiju, priprema doma
            nakon renovacije, uređivanje dvorišta ili prijevoz materijala često
            su zadaci koji se preklapaju sa svakodnevnim obvezama.
          </p>
          <p>
            Umjesto da svaki posao rješavate s drugom osobom, možete se javiti
            jednom obrtu i dogovoriti ono što vam stvarno treba. Pristup je
            praktičan: slušamo, procjenjujemo i predlažemo opseg koji ima smisla
            za vaš prostor, vrijeme i budžet. Bez velikih obećanja i bez sitnih
            slova.
          </p>
          <p>
            Obrt vodi Sanela Šimara, a rad se temelji na lokalnom poznavanju
            prilika, izravnoj komunikaciji i odgovornosti prema prostoru u koji
            ulazimo. Zato nam je važno da se nakon svakog posla osjećate dobro –
            i da nas rado preporučite dalje.
          </p>

          <blockquote class="about-quote">
            <Quote :size="20" aria-hidden="true" />
            <p>
              „Najljepši dio posla je trenutak kada prostor ostavimo uređenim, a
              vlasnik zna da ne mora ništa dodatno provjeravati.“
            </p>
            <footer>Sanela Šimara, vlasnica Obrta Čapalinka</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="section section--sage">
      <div class="container">
        <SectionIntro
          eyebrow="Načela rada"
          title="Ono što ne mijenjamo, <em class='italic-accent'>bez obzira na posao</em>"
          text="Bez obzira radi li se o malom apartmanu ili većem prostoru, način na koji radimo ostaje isti: jasan dogovor, uredan rad i poštovanje vašeg vremena."
        />

        <div class="about-values">
          <article class="about-value">
            <span class="about-value__num">01</span>
            <Check :size="20" aria-hidden="true" />
            <h3>Dogovor na prvom mjestu</h3>
            <p>
              Prije dolaska znamo što je posao, koliko traje i što je potrebno
              pripremiti. Ako se nešto promijeni, javljamo se na vrijeme.
            </p>
          </article>
          <article class="about-value">
            <span class="about-value__num">02</span>
            <HeartHandshake :size="20" aria-hidden="true" />
            <h3>Poštovanje prostora</h3>
            <p>
              Vaš dom, apartman ili ured tretiramo kao prostor s karakterom. Pazimo
              na materijale, predmete i privatnost.
            </p>
          </article>
          <article class="about-value">
            <span class="about-value__num">03</span>
            <Sparkles :size="20" aria-hidden="true" />
            <h3>Pažnja prema detaljima</h3>
            <p>
              Detalji su ti koji stvaraju osjećaj čistoće: rubovi, ručke, staklo,
              osvježen prostor. Na njima se ne štedi.
            </p>
          </article>
          <article class="about-value">
            <span class="about-value__num">04</span>
            <MapPin :size="20" aria-hidden="true" />
            <h3>Lokalna odgovornost</h3>
            <p>
              Dolazimo iz Donjeg Miholjca i radimo u okolici. Lokalna dostupnost
              znači brži dogovor i lakše rješavanje dodatnih potreba.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container about-standards">
        <div class="about-standards__media">
          <img
            src="/images/gallery/final-cleaning.svg"
            alt="Ilustracija završnog čišćenja prostora nakon radova, s ljestvama i kantom"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <span class="about-standards__badge">
            <Leaf :size="16" aria-hidden="true" />
            Temeljito, ali bez žurbe
          </span>
        </div>
        <div class="about-standards__copy">
          <span class="eyebrow">Naš standard</span>
          <h2>Uredan rezultat počinje <em class="italic-accent">dobrom pripremom</em></h2>
          <p>
            Svaki posao ima svoj redoslijed. U čišćenju prvo uklanjamo prašinu i
            grubu nečistoću, a tek onda peremo završne površine. U uređenju
            okoliša rezultat je bolji kada se radi u pravo godišnje doba. Kod
            prijevoza je najvažnije da su pošiljka, pristup i termin jasni prije
            polaska.
          </p>
          <p>
            Zato prije početka uvijek uskladimo osnovne informacije. Ako nešto
            treba dodatno provjeriti – materijal površine, visinu prozora,
            veličinu pošiljke – to rješavamo ranije, a ne usred posla.
          </p>

          <ul class="check-list about-standards__list">
            <li>Dolazimo u dogovoreno vrijeme i s potrebnom opremom.</li>
            <li>Sredstva i pristup prilagođavamo vrsti površine i namjene.</li>
            <li>Radimo prema unaprijed dogovorenom opsegu.</li>
            <li>Ostavljamo prostor urednim i spremnim za korištenje.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionIntro
          eyebrow="Usluge"
          title="Jedan obrt, više načina da si <em class='italic-accent'>olakšate</em>"
          text="Naš rad pokriva svakodnevne potrebe domova i manjih objekata. Svaka usluga može se dogovoriti zasebno ili u kombinaciji."
          link-to="/usluge"
          link-label="Pogledajte sve usluge"
        />

        <div class="about-services">
          <NuxtLink class="about-service" to="/usluge/ciscenje-apartmana">
            <span class="icon-badge icon-badge--sm">
              <SprayCan :size="20" aria-hidden="true" />
            </span>
            <h3>Čišćenje apartmana</h3>
            <p>
              Priprema prostora prije dolaska gostiju, između boravaka i uoči
              sezone, prema dogovorenoj listi.
            </p>
            <span class="link-arrow">
              Saznajte više
              <ArrowUpRight :size="16" aria-hidden="true" />
            </span>
          </NuxtLink>
          <NuxtLink class="about-service" to="/usluge/stambeni-prostori">
            <span class="icon-badge icon-badge--sm">
              <Sofa :size="20" aria-hidden="true" />
            </span>
            <h3>Stambeni prostori</h3>
            <p>
              Redovito ili povremeno čišćenje stanova i kuća, prilagođeno vašem
              ritmu i navikama u domu.
            </p>
            <span class="link-arrow">
              Saznajte više
              <ArrowUpRight :size="16" aria-hidden="true" />
            </span>
          </NuxtLink>
          <NuxtLink class="about-service" to="/usluge/zavrsna-ciscenja">
            <span class="icon-badge icon-badge--sm">
              <ClipboardCheck :size="20" aria-hidden="true" />
            </span>
            <h3>Završna čišćenja</h3>
            <p>
              Temeljito čišćenje nakon renovacije ili selidbe, prije useljenja i
              korištenja novog prostora.
            </p>
            <span class="link-arrow">
              Saznajte više
              <ArrowUpRight :size="16" aria-hidden="true" />
            </span>
          </NuxtLink>
          <NuxtLink class="about-service" to="/usluge/uredenje-okolisa">
            <span class="icon-badge icon-badge--sm">
              <Sprout :size="20" aria-hidden="true" />
            </span>
            <h3>Uređenje okoliša</h3>
            <p>
              Košnja, živica, korovi i sezonsko pospremanje dvorišta za uredan
              vanjski dojam.
            </p>
            <span class="link-arrow">
              Saznajte više
              <ArrowUpRight :size="16" aria-hidden="true" />
            </span>
          </NuxtLink>
          <NuxtLink class="about-service" to="/prijevoz-robe-i-materijala">
            <span class="icon-badge icon-badge--sm">
              <Truck :size="20" aria-hidden="true" />
            </span>
            <h3>Prijevoz robe i materijala</h3>
            <p>
              Lokalni prijevoz pošiljaka i materijala uz jasan dogovor o terminu,
              utovaru i istovaru.
            </p>
            <span class="link-arrow">
              Saznajte više
              <ArrowUpRight :size="16" aria-hidden="true" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaBand
      title="Upoznajmo se kroz <em class='italic-accent'>prvi dogovor</em>"
      text="Recite nam što vam treba i gdje se nalazite. Odgovorit ćemo jasno, bez obveze i bez nepotrebnih komplikacija."
    />
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  HeartHandshake,
  Leaf,
  MapPin,
  Phone,
  Quote,
  Sofa,
  Sparkles,
  SprayCan,
  Sprout,
  Truck,
} from 'lucide-vue-next'
import { breadcrumbSchema } from '~/utils/schema'

const site = useSite()

usePageSeo({
  title: 'O nama – lokalni obrt iz Donjeg Miholjca',
  description:
    'Obrt Čapalinka iz Donjeg Miholjca: čišćenje, uređenje okoliša i prijevoz robe i materijala. Upoznajte naš pristup, načela rada i područje djelovanja.',
  path: '/o-nama',
})

useJsonLd(
  breadcrumbSchema(
    [
      { label: 'Početna', to: '/' },
      { label: 'O nama', to: '/o-nama' },
    ],
    site,
  ),
  'ld-breadcrumb',
)

useJsonLd(
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.owner,
    jobTitle: 'Vlasnica obrta',
    worksFor: {
      '@id': `${site.url}/#business`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressCountry: site.countryCode,
    },
  },
  'ld-owner',
)
</script>

<style scoped>
.about-page {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.about-page__visual {
  position: relative;
  padding: 1rem 1rem 3rem 0;
}

.about-page__frame {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: var(--cream-deep);
  box-shadow: var(--shadow-md);
}

.about-page__frame img {
  width: 100%;
  aspect-ratio: 1.02;
  object-fit: cover;
}

.about-page__signature {
  position: absolute;
  right: -0.7rem;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--paper-strong);
  box-shadow: var(--shadow-sm);
  color: var(--muted);
  font-size: 0.68rem;
  line-height: 1.4;
}

.about-page__signature strong {
  display: block;
  color: var(--ink);
  font-size: 0.74rem;
}

.about-page__signature-mark {
  width: auto;
  height: 38px;
  color: var(--ink);
  flex-shrink: 0;
}

.about-page__leaf {
  position: absolute;
  top: 0;
  right: -1rem;
  width: 160px;
  opacity: 0.5;
  transform: rotate(168deg);
}

.about-page__copy h2 {
  margin-bottom: 1.2rem;
}

.about-page__copy > p {
  color: var(--ink-soft);
  font-size: 0.97rem;
  line-height: 1.78;
}

.about-quote {
  margin: 2rem 0 0;
  padding: 1.4rem 1.5rem;
  border: 1px solid var(--line-green);
  border-radius: var(--radius-sm);
  background: var(--sage-wash);
}

.about-quote > svg {
  margin-bottom: 0.5rem;
  color: var(--sage-deep);
}

.about-quote p {
  margin-bottom: 0.75rem;
  color: var(--ink);
  font-family: var(--font-serif);
  font-size: 1.22rem;
  font-style: italic;
  line-height: 1.5;
}

.about-quote footer {
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 650;
  line-height: 1.4;
}

.about-values {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--line-green);
}

.about-value {
  position: relative;
  padding: 1.6rem 1.6rem 0 0;
  border-right: 1px solid var(--line-green);
}

.about-value:not(:first-child) {
  padding-left: 1.6rem;
}

.about-value:last-child {
  border-right: 0;
  padding-right: 0;
}

.about-value__num {
  display: block;
  margin-bottom: 1.2rem;
  color: var(--sage-dark);
  font-family: var(--font-serif);
  font-size: 1rem;
  line-height: 1;
}

.about-value > svg {
  margin-bottom: 0.8rem;
  color: var(--sage-dark);
  stroke-width: 1.7;
}

.about-value h3 {
  margin-bottom: 0.5rem;
  font-size: 1.23rem;
}

.about-value p {
  color: var(--ink-soft);
  font-size: 0.85rem;
  line-height: 1.65;
}

.about-standards {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: center;
}

.about-standards__media {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--cream-deep);
}

.about-standards__media img {
  width: 100%;
  aspect-ratio: 1.08;
  object-fit: cover;
}

.about-standards__badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background: rgba(252, 250, 245, 0.92);
  color: var(--ink);
  font-size: 0.66rem;
  font-weight: 750;
  line-height: 1.4;
  backdrop-filter: blur(8px);
}

.about-standards__copy h2 {
  margin-bottom: 1.1rem;
}

.about-standards__copy > p {
  color: var(--ink-soft);
  font-size: 0.96rem;
  line-height: 1.75;
}

.about-standards__list {
  margin-top: 1.5rem;
}

.about-services {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
}

.about-service {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper);
  color: var(--ink);
  text-decoration: none;
  transition:
    border-color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;
}

.about-service:nth-child(4),
.about-service:nth-child(5) {
  grid-column: span 3;
}

.about-service:hover {
  border-color: var(--sage-deep);
  box-shadow: var(--shadow-sm);
  transform: translateY(-3px);
}

.about-service h3 {
  margin: 1rem 0 0.45rem;
  font-size: 1.28rem;
}

.about-service p {
  flex: 1;
  margin-bottom: 1rem;
  color: var(--ink-soft);
  font-size: 0.84rem;
  line-height: 1.65;
}

.about-service .link-arrow {
  margin-top: auto;
  font-size: 0.78rem;
}

@media (max-width: 1000px) {
  .about-page,
  .about-standards {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-page__visual,
  .about-standards__media {
    max-width: 600px;
  }

  .about-values {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-value:nth-child(2) {
    border-right: 0;
  }

  .about-value:nth-child(3),
  .about-value:nth-child(4) {
    margin-top: 1.8rem;
    border-top: 1px solid var(--line-green);
    padding-top: 1.6rem;
  }

  .about-value:nth-child(3) {
    padding-left: 0;
  }

  .about-services {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-service,
  .about-service:nth-child(4),
  .about-service:nth-child(5) {
    grid-column: span 1;
  }

  .about-service:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .about-values {
    grid-template-columns: 1fr;
  }

  .about-value,
  .about-value:not(:first-child),
  .about-value:nth-child(3) {
    margin-top: 0;
    padding: 1.3rem 0;
    border-top: 1px solid var(--line-green);
    border-right: 0;
  }

  .about-value:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .about-services {
    grid-template-columns: 1fr;
  }

  .about-service:last-child {
    grid-column: auto;
  }

  .about-page__signature {
    right: 0;
  }
}
</style>
