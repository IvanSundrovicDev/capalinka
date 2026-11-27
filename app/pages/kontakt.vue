<template>
  <div>
    <PageHero
      eyebrow="Kontakt"
      title="Razgovarajmo o vašem prostoru"
      intro="Imate pitanje o čišćenju, uređenju okoliša ili prijevozu robe i materijala? Javite nam se telefonom ili pošaljite kratak upit. Dogovor počinje jednostavno – s nekoliko osnovnih informacija."
      :breadcrumbs="[{ label: 'Kontakt' }]"
    >
      <template #actions>
        <div class="contact-hero__actions">
          <a class="btn" :href="`tel:${site.phoneHref}`">
            <Phone :size="17" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
          <span class="contact-hero__note">
            <Clock :size="15" aria-hidden="true" />
            {{ site.hoursLabel }}
          </span>
        </div>
      </template>
    </PageHero>

    <section class="section">
      <div class="container contact-page">
        <aside class="contact-info">
          <span class="eyebrow">Kontakt podaci</span>
          <h2>Tu smo za vaša <em class="italic-accent">pitanja</em></h2>
          <p>
            Najbrži način da provjerite termin i okvirnu cijenu je telefonski
            razgovor. Ako vam je draže pisati, pošaljite upit i navedite osnovne
            informacije o prostoru, lokaciji i željenom terminu.
          </p>

          <div class="contact-methods">
            <a class="contact-method" :href="`tel:${site.phoneHref}`">
              <span class="contact-method__icon">
                <Phone :size="19" aria-hidden="true" />
              </span>
              <span>
                <small>Telefon</small>
                <strong>{{ site.phoneDisplay }}</strong>
                <span>Najbrži odgovor i dogovor termina</span>
              </span>
            </a>
            <a class="contact-method" :href="`mailto:${site.email}`">
              <span class="contact-method__icon">
                <Mail :size="19" aria-hidden="true" />
              </span>
              <span>
                <small>E-pošta</small>
                <strong>{{ site.email }}</strong>
                <span>Za upite i dodatne informacije</span>
              </span>
            </a>
            <div class="contact-method">
              <span class="contact-method__icon">
                <MapPin :size="19" aria-hidden="true" />
              </span>
              <span>
                <small>Lokacija</small>
                <strong>{{ site.city }}, {{ site.postalCode }}</strong>
                <span>{{ site.county }}, Hrvatska</span>
              </span>
            </div>
            <div class="contact-method">
              <span class="contact-method__icon">
                <Clock :size="19" aria-hidden="true" />
              </span>
              <span>
                <small>Radno vrijeme</small>
                <strong>Termini po dogovoru</strong>
                <span>Javite se unaprijed za željeni termin</span>
              </span>
            </div>
          </div>

          <div class="contact-info__areas">
            <span class="overline">Područje rada</span>
            <p>
              Donji Miholjac, prigradska naselja, susjedne općine te šira okolica
              – Valpovo, Belišće, Osijek, Našice, Slatina i Virovitica.
            </p>
            <NuxtLink to="/podrucja" class="link-arrow">
              Sva područja rada
              <ArrowRight :size="16" aria-hidden="true" />
            </NuxtLink>
          </div>
        </aside>

        <ContactForm />
      </div>
    </section>

    <section class="section section--compact contact-map-section">
      <div class="container">
        <div class="contact-map">
          <ContactMap />
          <div class="contact-map__card">
            <span class="contact-map__pin">
              <MapPin :size="19" aria-hidden="true" />
            </span>
            <div>
              <strong>Donji Miholjac</strong>
              <span>Osječko-baranjska županija</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container contact-faq">
        <div class="contact-faq__intro">
          <span class="eyebrow">Prije upita</span>
          <h2>Kratke informacije za <em class="italic-accent">brži dogovor</em></h2>
          <p>
            Ne morate unaprijed znati svaki detalj. Dovoljno je da nam kažete što
            vam treba i gdje se nalazite, a mi ćemo postaviti dodatna pitanja.
          </p>
          <a class="phone-link" :href="`tel:${site.phoneHref}`">
            <Phone :size="17" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
        </div>
        <FaqList :items="contactFaqs" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from 'lucide-vue-next'
import { breadcrumbSchema, faqSchema } from '~/utils/schema'

const site = useSite()

const contactFaqs = [
  {
    question: 'Kako najbrže dobiti odgovor i dogovoriti termin?',
    answer:
      'Najbrže je nazvati na 095 509 4124. Ako ne možemo odgovoriti odmah, javit ćemo se čim budemo u mogućnosti. Možete poslati i upit putem obrasca ili e-pošte.',
  },
  {
    question: 'Mogu li poslati fotografije prostora ili pošiljke?',
    answer:
      'Da, fotografije pomažu u procjeni opsega i trajanja posla. Možete ih poslati uz upit ili dogovoriti slanje nakon prvog razgovora. Za prijevoz je korisno vidjeti vrstu i količinu robe.',
  },
  {
    question: 'Je li slanje upita obvezujuće?',
    answer:
      'Nije. Upit služi za razmjenu informacija i okvirnu procjenu. Tek nakon dogovora o opsegu, terminu i uvjetima potvrđujemo posao.',
  },
  {
    question: 'Koliko unaprijed treba rezervirati termin?',
    answer:
      'Ovisi o usluzi i sezoni. Za redovito čišćenje i manje poslove često je dovoljno nekoliko dana, a za veće projekte, sezonu ili prijevoz preporučujemo raniju najavu.',
  },
]

usePageSeo({
  title: 'Kontakt i ponuda – Donji Miholjac',
  description:
    'Kontaktirajte Obrt Čapalinka u Donjem Miholjcu – telefon 095 509 4124. Upiti za čišćenje, uređenje okoliša i prijevoz robe i materijala.',
  path: '/kontakt',
})

useJsonLd(
  breadcrumbSchema(
    [
      { label: 'Početna', to: '/' },
      { label: 'Kontakt', to: '/kontakt' },
    ],
    site,
  ),
  'ld-breadcrumb',
)
useJsonLd(faqSchema(contactFaqs), 'ld-faq')
</script>

<style scoped>
.contact-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
}

.contact-hero__note {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 650;
}

.contact-hero__note svg {
  color: var(--sage-deep);
}

.contact-page {
  display: grid;
  grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1.22fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

.contact-info {
  position: sticky;
  top: calc(var(--header-height) + 1.5rem);
}

.contact-info h2 {
  margin-bottom: 1rem;
  font-size: clamp(2rem, 3.3vw, 2.8rem);
}

.contact-info > p {
  max-width: 46ch;
  color: var(--ink-soft);
  font-size: 0.94rem;
  line-height: 1.7;
}

.contact-methods {
  display: grid;
  gap: 0.2rem;
  margin: 1.7rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  font-size: 0.8rem;
  line-height: 1.5;
  text-decoration: none;
}

.contact-method:last-child {
  border-bottom: 0;
}

.contact-method__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border: 1px solid var(--line-green);
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--sage-dark);
}

.contact-method:hover .contact-method__icon {
  background: var(--sage);
}

.contact-method small {
  display: block;
  margin-bottom: 0.08rem;
  color: var(--muted);
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  line-height: 1.4;
  text-transform: uppercase;
}

.contact-method strong {
  display: block;
  color: var(--ink);
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1.4;
}

.contact-method span span {
  color: var(--muted);
  font-size: 0.74rem;
}

.contact-info__areas {
  padding: 1.25rem;
  border: 1px solid var(--line-green);
  border-radius: var(--radius-sm);
  background: var(--sage-wash);
}

.contact-info__areas p {
  margin: 0.4rem 0 0.8rem;
  color: var(--ink-soft);
  font-size: 0.82rem;
  line-height: 1.6;
}

.contact-info__areas .link-arrow {
  font-size: 0.78rem;
}

.contact-map-section {
  background: var(--paper);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.contact-map {
  position: relative;
  height: 460px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--sage-wash);
}

.contact-map__card {
  position: absolute;
  z-index: 600;
  bottom: 1.9rem;
  left: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  max-width: calc(100% - 2.4rem);
  padding: 0.85rem 1rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(252, 250, 245, 0.94);
  box-shadow: var(--shadow-md);
  color: var(--muted);
  font-size: 0.7rem;
  line-height: 1.4;
  pointer-events: none;
  backdrop-filter: blur(10px);
}

.contact-map__pin {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border: 1px solid var(--line-green);
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--sage-dark);
  line-height: 0;
}

.contact-map__pin svg {
  display: block;
  width: 19px;
  height: 19px;
}

.contact-map__card strong {
  display: block;
  color: var(--ink);
  font-size: 0.82rem;
}

.contact-map__card > div > span {
  display: block;
}

.contact-faq {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

.contact-faq__intro h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.9rem, 3.2vw, 2.8rem);
}

.contact-faq__intro p {
  max-width: 40ch;
  color: var(--ink-soft);
  font-size: 0.94rem;
  line-height: 1.7;
}

.contact-faq__intro .phone-link {
  margin-top: 0.5rem;
}

@media (max-width: 1000px) {
  .contact-page {
    grid-template-columns: 1fr;
  }

  .contact-info {
    position: static;
    max-width: 600px;
  }

  .contact-faq {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 700px) {
  .contact-map {
    height: 340px;
  }

  .contact-map__card {
    right: 1rem;
    bottom: 1.8rem;
    left: 1rem;
  }
}
</style>
