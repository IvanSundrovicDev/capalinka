<template>
  <div>
    <PageHero
      eyebrow="Usluge Obrta Čapalinka"
      :title="service.h1"
      :intro="service.lead"
      :breadcrumbs="[
        { label: 'Usluge', to: '/usluge' },
        { label: service.name },
      ]"
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

      <template #aside>
        <div class="service-hero-art">
          <img
            :src="service.image"
            :alt="service.imageAlt"
            width="1200"
            height="900"
            fetchpriority="high"
          />
          <span class="service-hero-art__badge">
            <MapPin :size="14" aria-hidden="true" />
            Donji Miholjac i okolica
          </span>
        </div>
        <ul class="service-hero-tags" aria-label="Naglasci usluge">
          <li v-for="highlight in service.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
      </template>
    </PageHero>

    <section id="ukljuceno" class="section">
      <div class="container service-included">
        <div class="service-included__main">
          <span class="eyebrow">Što uključuje</span>
          <h2>Detalji na koje možete <em class="italic-accent">računati</em></h2>
          <p class="service-included__intro">{{ service.shortDescription }}</p>
          <ul class="check-list service-included__list">
            <li v-for="item in service.included" :key="item">{{ item }}</li>
          </ul>
          <p class="service-included__note">
            Konačan opseg uvijek potvrđujemo prije dolaska kako bi dogovor bio jasan
            objema stranama.
          </p>
        </div>

        <aside class="service-facts">
          <span class="overline">Brzi dogovor</span>
          <h3>Ponuda prema vašem prostoru</h3>
          <p>{{ service.priceNote }}</p>

          <div class="service-facts__divider" aria-hidden="true" />

          <div class="service-facts__item">
            <MapPin :size="17" aria-hidden="true" />
            <span>
              <strong>Područje</strong>
              Donji Miholjac i okolica
            </span>
          </div>
          <div class="service-facts__item">
            <Clock :size="17" aria-hidden="true" />
            <span>
              <strong>Termin</strong>
              Po dogovoru
            </span>
          </div>
          <div class="service-facts__item">
            <Sparkles :size="17" aria-hidden="true" />
            <span>
              <strong>Pristup</strong>
              Prema opsegu posla
            </span>
          </div>

          <NuxtLink class="btn btn--light service-facts__btn" to="/kontakt">
            Pošaljite upit
            <ArrowRight :size="17" aria-hidden="true" />
          </NuxtLink>
          <a class="service-facts__phone" :href="`tel:${site.phoneHref}`">
            <Phone :size="16" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
        </aside>
      </div>
    </section>

    <section class="section section--sage section--compact">
      <div class="container">
        <div class="for-who__head">
          <div>
            <span class="eyebrow">Za koga je usluga</span>
            <h2>Kome najčešće <em class="italic-accent">pomažemo</em>?</h2>
          </div>
          <p>
            Svaki prostor ima svoj ritam. Zato pristup prilagođavamo potrebama,
            terminu i razini angažmana koji vam odgovara.
          </p>
        </div>
        <div class="for-who__grid">
          <div
            v-for="(item, index) in service.forWho"
            :key="item"
            class="for-who__card"
          >
            <span class="for-who__number" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="proces" class="section">
      <div class="container">
        <SectionIntro
          eyebrow="Kako radimo"
          title="Jednostavan proces, <em class='italic-accent'>bez nagađanja</em>"
          text="Javite nam se s osnovnim informacijama, dogovorimo opseg i termin, a zatim se posvetite onome što vam je važnije."
        />
        <ol class="process-list">
          <li
            v-for="(step, index) in service.process"
            :key="step.title"
            class="process-step"
          >
            <span class="process-step__number" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section section--paper service-story">
      <div class="container service-story__layout">
        <div class="service-story__aside">
          <span class="eyebrow">Detaljnije</span>
          <h2>Više od <em class="italic-accent">osnovnog pristupa</em></h2>
          <p>
            Kvaliteta se ne vidi samo u završnom izgledu, nego i u načinu na koji
            se posao dogovara i izvodi. Zato su jasna komunikacija, poštovanje
            prostora i dosljednost dio svake usluge.
          </p>
          <NuxtLink to="/o-nama" class="link-arrow">
            Upoznajte naš pristup
            <ArrowRight :size="17" aria-hidden="true" />
          </NuxtLink>
          <LeafBranch class="service-story__leaf" soft />
        </div>

        <div class="service-story__body">
          <article
            v-for="section in service.sections"
            :key="section.title"
            class="service-story__section"
          >
            <h3>{{ section.title }}</h3>
            <p
              v-for="paragraph in section.paragraphs"
              :key="paragraph"
              v-html="paragraph"
            />
          </article>
        </div>
      </div>
    </section>

    <section class="section section--compact">
      <div class="container">
        <SectionIntro
          eyebrow="Iz galerije"
          title="Pogledajte kako pristupamo <em class='italic-accent'>prostoru</em>"
          text="Ilustrativni prikazi radova i usluga. Kliknite na prikaz za veći pregled."
          link-to="/galerija"
          link-label="Cijela galerija"
        />
        <GalleryGrid :items="galleryPreview" />
      </div>
    </section>

    <section id="faq" class="section section--sage">
      <div class="container faq-layout">
        <div class="faq-layout__intro">
          <span class="eyebrow">Pitanja i odgovori</span>
          <h2>Dobra pitanja, <em class="italic-accent">jasni odgovori</em></h2>
          <p>
            Prije dogovora korisno je znati što možete očekivati. Ako vaše
            pitanje nije na popisu, slobodno nas nazovite ili pošaljite upit.
          </p>
          <a class="phone-link faq-layout__phone" :href="`tel:${site.phoneHref}`">
            <Phone :size="17" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
        </div>
        <FaqList :items="service.faqs" />
      </div>
    </section>

    <section v-if="relatedServices.length" class="section section--compact">
      <div class="container">
        <SectionIntro
          eyebrow="Povezane usluge"
          title="Često se dogovaraju <em class='italic-accent'>zajedno</em>"
          text="Kombinirajte usluge prema potrebi prostora i terminu koji vam odgovara."
          link-to="/usluge"
          link-label="Sve usluge"
        />
        <div class="related-grid">
          <ServiceCard
            v-for="related in relatedServices"
            :key="related.path"
            :service="related"
          />
        </div>
      </div>
    </section>

    <CtaBand
      :eyebrow="service.shortName"
      :title="service.ctaTitle"
      :text="service.ctaText"
    />
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Clock, MapPin, Phone, Sparkles } from 'lucide-vue-next'
import {
  getServiceBySlug,
  type ServiceContent,
} from '~/data/services'
import { galleryItems } from '~/data/gallery'

const props = defineProps<{
  service: ServiceContent
}>()

const site = useSite()

const relatedServices = computed(() =>
  props.service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is ServiceContent => Boolean(service))
    .slice(0, 3),
)

const galleryPreview = computed(() => {
  const matching = galleryItems.filter(
    (item) => item.category === props.service.galleryCategory,
  )
  const rest = galleryItems.filter(
    (item) => item.category !== props.service.galleryCategory,
  )
  return [...matching, ...rest].slice(0, 3)
})
</script>

<style scoped>
.service-hero-art {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--cream-deep);
  box-shadow: var(--shadow-md);
}

.service-hero-art::after {
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 20px;
  content: '';
  pointer-events: none;
}

.service-hero-art img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.service-hero-art__badge {
  position: absolute;
  bottom: 1.1rem;
  left: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.48rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background: rgba(252, 250, 245, 0.9);
  color: var(--ink);
  font-size: 0.7rem;
  font-weight: 750;
  line-height: 1.4;
  backdrop-filter: blur(10px);
}

.service-hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.service-hero-tags li {
  margin: 0;
  padding: 0.38rem 0.7rem;
  border: 1px solid var(--line-green);
  border-radius: 999px;
  background: var(--sage-wash);
  color: var(--ink-soft);
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.4;
}

.service-included {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(290px, 0.8fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

.service-included h2 {
  margin-bottom: 1rem;
}

.service-included__intro {
  max-width: 62ch;
  color: var(--ink-soft);
  font-size: 1.02rem;
}

.service-included__list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem 1.8rem;
  margin-top: 1.6rem;
}

.service-included__list li {
  font-size: 0.91rem;
}

.service-included__note {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.6;
}

.service-facts {
  position: sticky;
  top: calc(var(--header-height) + 1.5rem);
  padding: 1.8rem;
  overflow: hidden;
  border-radius: var(--radius);
  background:
    radial-gradient(circle at 100% 0%, rgba(169, 212, 195, 0.16), transparent 14rem),
    var(--dark);
  color: var(--cream-on-dark);
}

.service-facts h3 {
  margin-bottom: 0.7rem;
  color: var(--cream-on-dark);
  font-size: 1.65rem;
}

.service-facts > p {
  margin-bottom: 1.4rem;
  color: rgba(246, 241, 229, 0.66);
  font-size: 0.84rem;
  line-height: 1.65;
}

.service-facts__divider {
  height: 1px;
  margin: 0 0 1.15rem;
  background: rgba(246, 241, 229, 0.12);
}

.service-facts__item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  margin-bottom: 0.8rem;
  color: rgba(246, 241, 229, 0.68);
  font-size: 0.79rem;
  line-height: 1.5;
}

.service-facts__item svg {
  margin-top: 0.16rem;
  flex-shrink: 0;
  color: var(--sage);
}

.service-facts__item strong {
  display: block;
  color: var(--cream-on-dark);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.service-facts__btn {
  width: 100%;
  margin-top: 0.85rem;
}

.service-facts__phone {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.7rem;
  color: rgba(246, 241, 229, 0.72);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.service-facts__phone:hover {
  color: var(--sage);
}

.for-who__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: end;
  margin-bottom: 2.5rem;
}

.for-who__head h2 {
  margin-bottom: 0;
}

.for-who__head > p {
  max-width: 45ch;
  margin: 0 0 0.4rem;
  color: var(--ink-soft);
}

.for-who__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.for-who__card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.4rem;
  border: 1px solid var(--line-green);
  border-radius: var(--radius-sm);
  background: rgba(252, 250, 245, 0.62);
}

.for-who__number {
  color: var(--sage-dark);
  font-family: var(--font-serif);
  font-size: 1.1rem;
  line-height: 1.3;
}

.for-who__card p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.88rem;
  line-height: 1.6;
}

.process-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}

.process-step {
  margin: 0;
  padding: 1.5rem 1.6rem 0 0;
  border-right: 1px solid var(--line);
}

.process-step:last-child {
  border-right: 0;
  padding-right: 0;
}

.process-step:not(:first-child) {
  padding-left: 1.6rem;
}

.process-step__number {
  display: block;
  margin-bottom: 1.4rem;
  color: var(--sage-dark);
  font-family: var(--font-serif);
  font-size: 2rem;
  line-height: 1;
}

.process-step h3 {
  margin-bottom: 0.55rem;
  font-size: 1.22rem;
  line-height: 1.3;
}

.process-step p {
  color: var(--ink-soft);
  font-size: 0.86rem;
  line-height: 1.65;
}

.service-story__layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: start;
}

.service-story__aside {
  position: sticky;
  top: calc(var(--header-height) + 1.5rem);
  overflow: hidden;
  padding: 2rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--cream);
}

.service-story__aside h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.service-story__aside p {
  color: var(--ink-soft);
  font-size: 0.9rem;
  line-height: 1.7;
}

.service-story__aside .link-arrow {
  margin-top: 0.4rem;
}

.service-story__leaf {
  position: absolute;
  right: -60px;
  bottom: -100px;
  width: 200px;
  opacity: 0.4;
}

.service-story__section {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--line);
}

.service-story__section + .service-story__section {
  padding-top: 2.2rem;
}

.service-story__section:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.service-story__section h3 {
  margin-bottom: 0.9rem;
  font-size: clamp(1.5rem, 2.2vw, 1.95rem);
}

.service-story__section p {
  color: var(--ink-soft);
  font-size: 1rem;
  line-height: 1.78;
}

.faq-layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

.faq-layout__intro h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.9rem, 3.2vw, 2.8rem);
}

.faq-layout__intro p {
  max-width: 40ch;
  color: var(--ink-soft);
  font-size: 0.94rem;
  line-height: 1.7;
}

.faq-layout__phone {
  margin-top: 0.6rem;
  color: var(--ink);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

@media (max-width: 1000px) {
  .service-included {
    grid-template-columns: 1fr;
  }

  .service-facts {
    position: static;
    max-width: 600px;
  }

  .service-included__list {
    grid-template-columns: 1fr;
  }

  .service-story__layout,
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .service-story__aside {
    position: static;
    max-width: 600px;
  }

  .process-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-step:nth-child(2) {
    border-right: 0;
    padding-right: 0;
  }

  .process-step:nth-child(3) {
    padding-left: 0;
  }

  .process-step:nth-child(3),
  .process-step:nth-child(4) {
    margin-top: 1.6rem;
  }

  .related-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 800px) {
  .for-who__head {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .for-who__grid {
    grid-template-columns: 1fr;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .process-list {
    grid-template-columns: 1fr;
  }

  .process-step,
  .process-step:not(:first-child),
  .process-step:nth-child(3) {
    margin-top: 0;
    padding: 1.4rem 0;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .process-step:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  .service-facts,
  .service-story__aside {
    padding: 1.4rem;
  }

  .service-hero-art__badge {
    bottom: 0.7rem;
    left: 0.7rem;
    font-size: 0.64rem;
  }
}
</style>
