<template>
  <div>
    <section class="home-hero">
      <LeafBranch class="home-hero__leaf" soft />
      <div class="home-hero__dots decorative-dots" aria-hidden="true" />
      <div class="container home-hero__layout">
        <div class="home-hero__copy">
          <span class="eyebrow animate-in">Donji Miholjac i okolica</span>
          <h1 class="animate-in animate-in--delay-1">
            Čistoća koja se osjeti,
            <em class="italic-accent">briga koja se pamti.</em>
          </h1>
          <p class="lead home-hero__lead animate-in animate-in--delay-2">
            Profesionalno čišćenje apartmana, stambenih prostora i završno
            čišćenje nakon radova. Uz pouzdan prijevoz robe i materijala – sve na
            jednom mjestu, za domove i objekte u Donjem Miholjcu i okolici.
          </p>

          <div class="btn-row animate-in animate-in--delay-3">
            <NuxtLink class="btn btn--lg" to="/kontakt">
              Zatražite ponudu
              <ArrowRight :size="18" aria-hidden="true" />
            </NuxtLink>
            <NuxtLink class="btn btn--outline btn--lg" to="/usluge">
              Istražite usluge
            </NuxtLink>
          </div>

          <ul class="home-hero__trust animate-in animate-in--delay-3">
            <li>
              <span class="home-hero__trust-icon"><Check :size="13" aria-hidden="true" /></span>
              Lokalni obrt iz Donjeg Miholjca
            </li>
            <li>
              <span class="home-hero__trust-icon"><Check :size="13" aria-hidden="true" /></span>
              Termini i opseg po dogovoru
            </li>
            <li>
              <span class="home-hero__trust-icon"><Check :size="13" aria-hidden="true" /></span>
              Pažljivo prema svakom prostoru
            </li>
          </ul>
        </div>

        <div class="home-hero__visual animate-in animate-in--delay-2">
          <div class="home-hero__ring" aria-hidden="true" />
          <div class="home-hero__card">
            <LeafBranch class="home-hero__card-leaf" soft />
            <div class="home-hero__card-head">
              <BrandLogo size="xl" stacked />
              <span class="home-hero__card-label">Čišćenje · okoliš · prijevoz</span>
            </div>

            <div class="home-hero__card-divider">
              <span>Naše usluge</span>
            </div>

            <ul class="home-hero__services">
              <li v-for="service in services" :key="service.path">
                <span class="home-hero__service-icon">
                  <ServiceIcon :name="service.icon" />
                </span>
                <span>{{ service.name }}</span>
              </li>
            </ul>

            <div class="home-hero__card-footer">
              <a class="home-hero__phone" :href="`tel:${site.phoneHref}`">
                <span class="home-hero__phone-icon">
                  <Phone :size="18" aria-hidden="true" />
                </span>
                <span>
                  <small>Pozovite nas</small>
                  <strong>{{ site.phoneDisplay }}</strong>
                </span>
              </a>
              <span class="home-hero__card-seal">
                <MapPin :size="14" aria-hidden="true" />
                Donji Miholjac
              </span>
            </div>
          </div>

          <div class="home-hero__float home-hero__float--top">
            <CalendarDays :size="16" aria-hidden="true" />
            <span><strong>Termini</strong> po dogovoru</span>
          </div>
        </div>
      </div>
    </section>

    <div class="trust-strip">
      <div class="container trust-strip__inner">
        <div class="trust-strip__item">
          <span class="trust-strip__icon"><MapPin :size="20" aria-hidden="true" /></span>
          <span>
            <strong>Lokalno i dostupno</strong>
            Donji Miholjac i okolica
          </span>
        </div>
        <div class="trust-strip__item">
          <span class="trust-strip__icon"><CalendarDays :size="20" aria-hidden="true" /></span>
          <span>
            <strong>Dogovor po mjeri</strong>
            Termin prema vašem rasporedu
          </span>
        </div>
        <div class="trust-strip__item">
          <span class="trust-strip__icon"><HeartHandshake :size="20" aria-hidden="true" /></span>
          <span>
            <strong>Pažljiv pristup</strong>
            Prema prostoru i materijalima
          </span>
        </div>
        <div class="trust-strip__item">
          <span class="trust-strip__icon"><PackageCheck :size="20" aria-hidden="true" /></span>
          <span>
            <strong>Više na jednom mjestu</strong>
            Čišćenje, okoliš i prijevoz
          </span>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <SectionIntro
          eyebrow="Naše usluge"
          title="Sve što vaš prostor treba, <em class='italic-accent'>na jednom mjestu</em>"
          text="Od pripreme apartmana i održavanja doma do završnog čišćenja nakon radova, uređenja okoliša i prijevoza robe i materijala. Svatko od nas traži drugačiju razinu pomoći – zato se opseg uvijek dogovara unaprijed."
          link-to="/usluge"
          link-label="Pogledajte sve usluge"
        />

        <div class="home-services">
          <ServiceCard
            v-for="service in services"
            :key="service.path"
            :service="service"
          />
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container about-home">
        <div class="about-home__visual">
          <div class="about-home__frame">
            <img
              src="/images/gallery/apartment-bedroom.svg"
              alt="Ilustracija urednog apartmana s krevetom, prozorom i biljkom – briga o prostoru"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="about-home__badge">
            <span class="about-home__badge-icon">
              <House :size="20" aria-hidden="true" />
            </span>
            <span>
              <strong>Obrt Čapalinka</strong>
              Lokalno, iz Donjeg Miholjca
            </span>
          </div>
          <div class="about-home__outline" aria-hidden="true" />
          <LeafBranch class="about-home__leaf" soft />
        </div>

        <div class="about-home__copy">
          <span class="eyebrow">O obrtu</span>
          <h2>
            Briga o prostoru koja počinje
            <em class="italic-accent">dogovorom</em>
          </h2>
          <p>
            Obrt Čapalinka vodi Sanela Šimara. Iz Donjeg Miholjca pružamo
            praktičnu pomoć vlasnicima apartmana, stanova i kuća, ali i obrtima
            kojima je potreban pouzdan prijevoz ili uređen okoliš. Naš pristup je
            jednostavan: pažljivo saslušamo što vam treba, dogovorimo jasan opseg
            i posao obavimo bez nepotrebnog kompliciranja.
          </p>
          <p>
            Vjerujemo da se kvaliteta ne vidi samo u završnom izgledu prostora,
            nego i u načinu na koji se dolazi, radi i ostavlja prostor nakon
            posla. Zato su poštovanje vašeg vremena i prostora jednako važni kao
            i sam rezultat.
          </p>

          <blockquote class="home-quote">
            <Quote :size="22" aria-hidden="true" />
            <p>
              „Dobar posao se ne mjeri samo vremenom koje traje, nego osjećajem
              kada u prostor uđete nakon nas.“
            </p>
            <footer>
              <strong>Sanela Šimara</strong>
              <span>vlasnica Obrta Čapalinka</span>
            </footer>
          </blockquote>

          <ul class="check-list about-home__values">
            <li>Jasan dogovor prije početka posla</li>
            <li>Pažnja prema materijalima i detaljima</li>
            <li>Dosljednost u svakom dogovorenom terminu</li>
            <li>Lokalna dostupnost i jednostavna komunikacija</li>
          </ul>

          <NuxtLink to="/o-nama" class="link-arrow">
            Upoznajte Obrt Čapalinka
            <ArrowRight :size="17" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section section--sage">
      <div class="container">
        <SectionIntro
          eyebrow="Kako surađujemo"
          title="Tri koraka do urednog prostora, <em class='italic-accent'>bez komplikacija</em>"
          text="Bez dugih formulara i nejasnih ponuda. Dovoljan je kratak razgovor kako bismo znali što vam treba i kada možemo doći."
        />

        <ol class="home-process">
          <li class="home-process__step">
            <span class="home-process__num">01</span>
            <h3>Javite se</h3>
            <p>
              Nazovite ili pošaljite upit s nekoliko osnovnih informacija o
              prostoru, pošiljci ili dvorištu.
            </p>
          </li>
          <li class="home-process__step">
            <span class="home-process__num">02</span>
            <h3>Dogovorimo detalje</h3>
            <p>
              Zajedno određujemo opseg, termin i sve što je potrebno pripremiti
              prije dolaska.
            </p>
          </li>
          <li class="home-process__step">
            <span class="home-process__num">03</span>
            <h3>Posao je obavljen</h3>
            <p>
              Dolazimo prema dogovoru i ostavljamo prostor spreman za život,
              goste ili sljedeći korak.
            </p>
          </li>
        </ol>

        <div class="home-process__footer">
          <p>Imate poseban zahtjev ili kombinaciju usluga?</p>
          <NuxtLink to="/kontakt" class="link-arrow">
            Razgovarajmo o tome
            <ArrowRight :size="17" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionIntro
          eyebrow="Galerija"
          title="Prostori koji odišu <em class='italic-accent'>svježinom</em>"
          text="Pogledajte ilustrativne prikaze usluga i prostora. Svaki prikaz možete otvoriti u većem formatu i pregledati detalje."
          link-to="/galerija"
          link-label="Cijela galerija"
        />
        <GalleryGrid :items="galleryItems.slice(0, 6)" />
      </div>
    </section>

    <section class="section section--dark areas-home">
      <LeafBranch class="areas-home__leaf" soft />
      <div class="container">
        <div class="areas-home__head">
          <div>
            <span class="eyebrow">Područje rada</span>
            <h2>
              Lokalno, s kratkim putem
              <em class="italic-accent">do vas</em>
            </h2>
          </div>
          <div class="areas-home__head-aside">
            <p>
              Radimo u Donjem Miholjcu i prigradskim naseljima, u susjednim
              općinama te na širem području istočne Slavonije. Za dolazak u
              udaljenija mjesta dogovorimo se unaprijed.
            </p>
            <NuxtLink to="/podrucja" class="btn btn--ghost-light btn--sm">
              Sva područja rada
              <ArrowRight :size="16" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <div class="areas-home__grid">
          <article
            v-for="(group, index) in areaGroups"
            :key="group.title"
            class="areas-home__card"
          >
            <span class="areas-home__num" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
            <ul class="areas-home__places">
              <li v-for="place in group.places" :key="place">{{ place }}</li>
            </ul>
          </article>
        </div>

        <p class="areas-home__note">
          Ne vidite svoje mjesto? Javite nam se – dolazak izvan navedenih područja
          dogovaramo prema vrsti posla i terminu.
        </p>
      </div>
    </section>

    <section id="faq" class="section">
      <div class="container home-faq">
        <div class="home-faq__intro">
          <span class="eyebrow">Pitanja i odgovori</span>
          <h2>Ono što klijenti najčešće <em class="italic-accent">pitaju</em></h2>
          <p>
            Kratki odgovori na najčešća pitanja o uslugama, terminima i području
            rada. Za detalje vezane uz vaš prostor najbolje je nazvati ili
            poslati upit.
          </p>
          <a class="phone-link home-faq__phone" :href="`tel:${site.phoneHref}`">
            <Phone :size="17" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
        </div>
        <FaqList :items="homeFaqs" />
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  CalendarDays,
  Check,
  HeartHandshake,
  House,
  MapPin,
  PackageCheck,
  Phone,
  Quote,
} from 'lucide-vue-next'
import { services } from '~/data/services'
import { galleryItems } from '~/data/gallery'
import { areaGroups } from '~/data/site'
import { faqSchema } from '~/utils/schema'

const site = useSite()

const homeFaqs = [
  {
    question: 'Koje usluge nudite u Donjem Miholjcu i okolici?',
    answer:
      'Nudimo čišćenje apartmana, čišćenje stanova i kuća, završna čišćenja nakon renovacije, uređenje okoliša te prijevoz robe i materijala. Opseg svake usluge dogovaramo prema prostoru, lokaciji i vašim potrebama.',
  },
  {
    question: 'Kako mogu zatražiti ponudu?',
    answer:
      'Najbrže telefonom na 095 509 4124, no možete nam se javiti i putem kontakt forme. Recite nam lokaciju, vrstu usluge i okvirni termin, a mi ćemo predložiti daljnje korake.',
  },
  {
    question: 'Dolazite li izvan Donjeg Miholjca?',
    answer:
      'Da. Osim Donjeg Miholjca i prigradskih naselja, dolazimo u Viljevo, Magadenovac, Marijanci, Podravsku Moslavinu, Čađavicu, Sopje te šire prema Valpovu, Belišću, Osijeku, Našicama, Slatini i Virovitici, prema dogovoru.',
  },
  {
    question: 'Kako se dogovaraju termini i cijene?',
    answer:
      'Termin i cijena dogovaraju se nakon kratkog opisa posla. Na cijenu utječu opseg, veličina prostora ili pošiljke te lokacija. Prije početka znate što je uključeno, a ponuda je prilagođena stvarnoj situaciji.',
  },
  {
    question: 'Mogu li kombinirati više usluga?',
    answer:
      'Da. Često se dogovaraju kombinacije završnog čišćenja i prijevoza, čišćenja apartmana i uređenja okoliša ili više usluga na istom objektu. Kombinaciju prilagođavamo redoslijedu radova i terminu.',
  },
  {
    question: 'Je li potrebno pripremiti nešto prije dolaska?',
    answer:
      'Ovisi o usluzi. Za čišćenje je korisno da su dostupne voda i struja te da su poznata pravila pristupa. Za prijevoz je važno opisati robu i osigurati pristup utovaru. Detalje uvijek potvrđujemo pri dogovoru.',
  },
]

usePageSeo({
  title: 'Čišćenje i prijevoz u Donjem Miholjcu',
  description:
    'Čišćenje apartmana i stambenih prostora, završna čišćenja, uređenje okoliša i prijevoz robe i materijala u Donjem Miholjcu i okolici.',
  path: '/',
})

useJsonLd(faqSchema(homeFaqs), 'ld-faq')
</script>

<style scoped>
/* ---------- Hero ---------- */

.home-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(2.2rem, 5vw, 4.2rem) 0 clamp(4rem, 8vw, 7rem);
  background:
    radial-gradient(circle at 82% 38%, rgba(169, 212, 195, 0.28), transparent 24rem),
    radial-gradient(circle at 8% 4%, rgba(255, 255, 255, 0.4), transparent 22rem),
    var(--cream);
}

.home-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(380px, 0.8fr);
  gap: clamp(2.5rem, 4vw, 4rem);
  align-items: center;
}

.home-hero h1 {
  max-width: 760px;
  margin-bottom: 1.4rem;
  font-size: clamp(2.8rem, 4.1vw, 3.8rem);
  line-height: 1.03;
}

.home-hero h1 em {
  display: block;
}

.home-hero__lead {
  max-width: 55ch;
  margin-bottom: 2rem;
}

.home-hero__trust {
  display: grid;
  gap: 0.55rem;
  margin: 2.2rem 0 0;
  padding: 1.2rem 0 0;
  border-top: 1px solid var(--line);
  list-style: none;
}

.home-hero__trust li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.5;
}

.home-hero__trust-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--sage-dark);
}

.home-hero__visual {
  position: relative;
  z-index: 1;
  justify-self: end;
  width: 100%;
  max-width: 480px;
}

.home-hero__ring {
  position: absolute;
  top: 50%;
  left: 54%;
  z-index: 0;
  width: 520px;
  height: 520px;
  border: 1px solid rgba(92, 154, 132, 0.32);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.home-hero__ring::before {
  position: absolute;
  inset: 34px;
  border: 1px dashed rgba(92, 154, 132, 0.24);
  border-radius: 50%;
  content: '';
}

.home-hero__card {
  position: relative;
  z-index: 1;
  padding: 2rem 2rem 1.8rem;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 28px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.55), transparent 40%),
    var(--paper-strong);
  box-shadow: var(--shadow-lg);
  transform: rotate(-1.2deg);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.home-hero__card:hover {
  transform: rotate(0deg);
}

.home-hero__card::after {
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(222, 217, 203, 0.65);
  border-radius: 20px;
  content: '';
  pointer-events: none;
}

.home-hero__card-leaf {
  position: absolute;
  top: -20px;
  right: -30px;
  width: 170px;
  opacity: 0.65;
  transform: rotate(165deg);
}

.home-hero__card-head {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 0 0;
  text-align: center;
}

.home-hero__card-label {
  color: var(--muted);
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  line-height: 1.4;
  text-transform: uppercase;
}

.home-hero__card-divider {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 1.35rem 0 1.1rem;
  color: var(--sage-dark);
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.home-hero__card-divider::before,
.home-hero__card-divider::after {
  flex: 1;
  height: 1px;
  background: var(--line-green);
  content: '';
}

.home-hero__services {
  display: grid;
  gap: 0.2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-hero__services li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;
  padding: 0.43rem 0.3rem;
  border-radius: 9px;
  color: var(--ink);
  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.35;
}

.home-hero__service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  flex-shrink: 0;
  border: 1px solid var(--line-green);
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--sage-dark);
}

.home-hero__service-icon svg {
  width: 15px;
  height: 15px;
  stroke-width: 1.7;
}

.home-hero__card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--line);
}

.home-hero__phone {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--ink);
  text-decoration: none;
}

.home-hero__phone-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--ink);
  color: var(--cream);
}

.home-hero__phone small {
  display: block;
  margin-bottom: 0.05rem;
  color: var(--muted);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-transform: uppercase;
}

.home-hero__phone strong {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.2;
  white-space: nowrap;
}

.home-hero__phone:hover strong {
  color: var(--sage-dark);
}

.home-hero__card-seal {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--muted);
  font-size: 0.62rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: right;
}

.home-hero__card-seal svg {
  color: var(--sage-deep);
  flex-shrink: 0;
}

.home-hero__float {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.85rem;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(252, 250, 245, 0.94);
  box-shadow: var(--shadow-md);
  color: var(--ink-soft);
  font-size: 0.7rem;
  line-height: 1.4;
  backdrop-filter: blur(12px);
}

.home-hero__float svg {
  color: var(--sage-dark);
  flex-shrink: 0;
}

.home-hero__float strong {
  display: block;
  font-size: 0.68rem;
  font-weight: 800;
}

.home-hero__float--top {
  top: 4%;
  left: -8%;
  transform: rotate(-3deg);
}

.home-hero__leaf {
  position: absolute;
  top: -80px;
  right: -70px;
  width: 430px;
  opacity: 0.55;
  transform: rotate(165deg);
}

.home-hero__dots {
  position: absolute;
  bottom: 8%;
  left: 2%;
  width: 160px;
  height: 130px;
  opacity: 0.5;
}

/* ---------- Trust strip ---------- */

.trust-strip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--paper);
}

.trust-strip__inner {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  border-right: 1px solid var(--line);
  border-left: 1px solid var(--line);
  background: var(--line);
}

.trust-strip__item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.35rem 1.5rem;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 0.78rem;
  line-height: 1.5;
}

.trust-strip__item strong {
  display: block;
  margin-bottom: 0.08rem;
  color: var(--ink);
  font-size: 0.8rem;
  font-weight: 800;
  line-height: 1.4;
}

.trust-strip__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--sage-dark);
}

/* ---------- Services ---------- */

.home-services {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.25rem;
}

.home-services :deep(.service-card) {
  grid-column: span 2;
}

.home-services :deep(.service-card:nth-child(4)),
.home-services :deep(.service-card:nth-child(5)) {
  grid-column: span 3;
}

/* ---------- About ---------- */

.about-home {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.about-home__visual {
  position: relative;
  padding: 1.2rem 1.2rem 2rem 0;
}

.about-home__frame {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 180px 180px 24px 24px;
  background: var(--cream-deep);
}

.about-home__frame img {
  width: 100%;
  aspect-ratio: 1.05;
  object-fit: cover;
}

.about-home__outline {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0.8rem;
  left: 1.6rem;
  border: 1px solid var(--sage-deep);
  border-radius: 180px 180px 24px 24px;
  opacity: 0.4;
}

.about-home__badge {
  position: absolute;
  right: -1rem;
  bottom: 3rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--paper-strong);
  box-shadow: var(--shadow-md);
  color: var(--ink-soft);
  font-size: 0.7rem;
  line-height: 1.4;
}

.about-home__badge strong {
  display: block;
  font-size: 0.76rem;
  font-weight: 800;
}

.about-home__badge-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--sage-dark);
  flex-shrink: 0;
}

.about-home__leaf {
  position: absolute;
  top: -20px;
  right: 0;
  width: 150px;
  opacity: 0.4;
  transform: rotate(170deg);
}

.about-home__copy h2 {
  margin-bottom: 1.2rem;
}

.about-home__copy > p {
  color: var(--ink-soft);
  font-size: 0.98rem;
  line-height: 1.75;
}

.home-quote {
  position: relative;
  margin: 1.6rem 0;
  padding: 1.4rem 1.5rem 1.2rem;
  border: 1px solid var(--line-green);
  border-radius: var(--radius-sm);
  background: var(--sage-wash);
}

.home-quote > svg {
  margin-bottom: 0.5rem;
  color: var(--sage-deep);
}

.home-quote p {
  margin-bottom: 0.8rem;
  color: var(--ink);
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.5;
}

.home-quote footer {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem;
  color: var(--muted);
  font-size: 0.7rem;
  line-height: 1.4;
}

.home-quote footer strong {
  color: var(--ink);
  font-size: 0.74rem;
}

.about-home__values {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 1.2rem;
  margin: 1.3rem 0 1.5rem;
}

.about-home__values li {
  font-size: 0.82rem;
}

/* ---------- Process ---------- */

.home-process {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line-green);
}

.home-process__step {
  position: relative;
  margin: 0;
  padding: 1.6rem 2rem 0 0;
  border-right: 1px solid var(--line-green);
}

.home-process__step:not(:first-child) {
  padding-left: 2rem;
}

.home-process__step:last-child {
  border-right: 0;
  padding-right: 0;
}

.home-process__num {
  display: block;
  margin-bottom: 1.2rem;
  color: var(--sage-dark);
  font-family: var(--font-serif);
  font-size: 2rem;
  line-height: 1;
}

.home-process__step h3 {
  margin-bottom: 0.5rem;
  font-size: 1.35rem;
}

.home-process__step p {
  color: var(--ink-soft);
  font-size: 0.88rem;
  line-height: 1.65;
}

.home-process__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2.5rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--line-green);
}

.home-process__footer p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.9rem;
}

/* ---------- Areas ---------- */

.areas-home {
  overflow: hidden;
}

.areas-home__leaf {
  position: absolute;
  right: -80px;
  bottom: -140px;
  width: 400px;
  opacity: 0.5;
  transform: rotate(10deg);
}

.areas-home__head {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: clamp(1.5rem, 5vw, 5rem);
  align-items: end;
  margin-bottom: 3rem;
}

.areas-home__head h2 {
  margin-bottom: 0;
}

.areas-home__head-aside {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
}

.areas-home__head-aside p {
  max-width: 46ch;
  margin: 0;
}

.areas-home__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.areas-home__card {
  padding: 1.5rem;
  border: 1px solid rgba(169, 212, 195, 0.18);
  border-radius: var(--radius);
  background: rgba(246, 241, 229, 0.035);
}

.areas-home__num {
  display: block;
  margin-bottom: 1rem;
  color: var(--sage);
  font-family: var(--font-serif);
  font-size: 1.15rem;
  line-height: 1;
}

.areas-home__card h3 {
  margin-bottom: 0.6rem;
  color: var(--cream-on-dark);
  font-size: 1.3rem;
}

.areas-home__card > p {
  margin-bottom: 1rem;
  color: rgba(246, 241, 229, 0.6);
  font-size: 0.82rem;
  line-height: 1.65;
}

.areas-home__places {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.areas-home__places li {
  margin: 0;
  padding: 0.25rem 0.5rem;
  border: 1px solid rgba(169, 212, 195, 0.16);
  border-radius: 999px;
  color: rgba(246, 241, 229, 0.7);
  font-size: 0.68rem;
  font-weight: 600;
  line-height: 1.4;
}

.areas-home__note {
  margin-top: 1.8rem;
  color: rgba(246, 241, 229, 0.62);
  font-size: 0.8rem;
}

/* ---------- FAQ ---------- */

.home-faq {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

.home-faq__intro {
  position: sticky;
  top: calc(var(--header-height) + 1.5rem);
}

.home-faq__intro h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.9rem, 3.2vw, 2.8rem);
}

.home-faq__intro p {
  max-width: 42ch;
  color: var(--ink-soft);
  font-size: 0.94rem;
  line-height: 1.7;
}

.home-faq__phone {
  margin-top: 0.5rem;
}

/* ---------- Responsive ---------- */

@media (max-width: 1180px) {
  .home-hero__float--top {
    left: -2%;
  }
}

@media (max-width: 1020px) {
  .home-hero__layout {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .home-hero__copy {
    max-width: 720px;
  }

  .home-hero__visual {
    justify-self: center;
    max-width: 470px;
  }

  .home-hero__ring {
    width: 480px;
    height: 480px;
  }

  .home-services :deep(.service-card) {
    grid-column: span 3;
  }

  .home-services :deep(.service-card:nth-child(4)) {
    grid-column: span 3;
  }

  .home-services :deep(.service-card:nth-child(5)) {
    grid-column: span 6;
  }

  .about-home {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-home__visual {
    max-width: 580px;
  }

  .areas-home__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 880px) {
  .trust-strip__inner {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .areas-home__head {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .home-faq {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .home-faq__intro {
    position: static;
    max-width: 580px;
  }

  .home-hero__float--top {
    top: 3%;
  }

  .home-hero__leaf {
    width: 320px;
    opacity: 0.4;
  }
}

@media (max-width: 700px) {
  .home-hero {
    padding-top: 2rem;
  }

  .home-hero h1 {
    font-size: clamp(2.7rem, 12vw, 3.6rem);
  }

  .home-hero__card {
    transform: none;
    padding: 1.5rem 1.35rem 1.35rem;
    border-radius: 22px;
  }

  .home-hero__card::after {
    inset: 7px;
    border-radius: 17px;
  }

  .home-hero__visual {
    max-width: 420px;
  }

  .home-hero__ring {
    width: 370px;
    height: 370px;
  }

  .home-hero__float {
    display: none;
  }

  .home-hero__card-seal {
    display: none;
  }

  .home-hero__phone {
    margin-inline: auto;
  }

  .home-hero__trust {
    margin-top: 1.7rem;
  }

  .home-services :deep(.service-card),
  .home-services :deep(.service-card:nth-child(4)),
  .home-services :deep(.service-card:nth-child(5)) {
    grid-column: span 6;
  }

  .about-home__values {
    grid-template-columns: 1fr;
  }

  .about-home__badge {
    right: 0;
    bottom: 1rem;
  }

  .home-process {
    grid-template-columns: 1fr;
    border-top: 0;
  }

  .home-process__step,
  .home-process__step:not(:first-child) {
    padding: 1.3rem 0;
    border-top: 1px solid var(--line-green);
    border-right: 0;
  }

  .home-process__num {
    margin-bottom: 0.7rem;
    font-size: 1.5rem;
  }

  .home-process__footer {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 520px) {
  .home-hero__ring {
    display: none;
  }

  .home-hero__card-head {
    padding-top: 0.2rem;
  }

  .home-hero__services li {
    font-size: 0.77rem;
  }

  .home-hero__card-label {
    font-size: 0.55rem;
  }

  .trust-strip__inner {
    grid-template-columns: 1fr;
  }

  .home-hero__phone strong {
    font-size: 1.25rem;
  }

  .home-quote p {
    font-size: 1.08rem;
  }
}
</style>
