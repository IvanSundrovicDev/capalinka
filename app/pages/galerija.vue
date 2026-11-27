<template>
  <div>
    <PageHero
      eyebrow="Galerija"
      title="Prikazi prostora, detalja i usluga"
      intro="Ilustrativni prikazi onoga što radimo – od pripreme apartmana i stambenih prostora do završnih čišćenja, uređenja okoliša i prijevoza. Odaberite kategoriju i otvorite prikaz u većem formatu."
      :breadcrumbs="[{ label: 'Galerija' }]"
    >
      <template #actions>
        <div class="gallery-hero__meta">
          <span class="chip chip--sage">
            <Images :size="14" aria-hidden="true" />
            {{ galleryItems.length }} prikaza
          </span>
          <span class="chip chip--sage">
            <LayoutGrid :size="14" aria-hidden="true" />
            {{ categoryCount }} kategorija
          </span>
          <NuxtLink class="link-arrow" to="/usluge">
            Pogledajte usluge
            <ArrowRight :size="17" aria-hidden="true" />
          </NuxtLink>
        </div>
      </template>
    </PageHero>

    <section class="section">
      <div class="container">
        <h2 class="sr-only">Galerija ilustrativnih prikaza usluga</h2>
        <GalleryGrid :items="galleryItems" show-filters />
        <p class="gallery-note">
          <Info :size="15" aria-hidden="true" />
          Prikazi su ilustrativni i služe kao vizualni primjer usluga.
        </p>
      </div>
    </section>

    <CtaBand
      eyebrow="Vaš prostor"
      title="Želite da i vaš prostor izgleda <em class='italic-accent'>ovako uredno</em>?"
      text="Javite nam se s kratkim opisom prostora i željenim terminom. Dogovorit ćemo opseg i dati vam jasnu okvirnu ponudu."
    />
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Images, Info, LayoutGrid } from 'lucide-vue-next'
import { galleryItems } from '~/data/gallery'
import { breadcrumbSchema } from '~/utils/schema'

const site = useSite()
const categoryCount = new Set(galleryItems.map((item) => item.category)).size

usePageSeo({
  title: 'Galerija radova i usluga u Donjem Miholjcu',
  description:
    'Pogledajte ilustrativne prikaze čišćenja apartmana, stambenih prostora, završnih čišćenja, uređenja okoliša i prijevoza u Donjem Miholjcu i okolici.',
  path: '/galerija',
})

useJsonLd(
  breadcrumbSchema(
    [
      { label: 'Početna', to: '/' },
      { label: 'Galerija', to: '/galerija' },
    ],
    site,
  ),
  'ld-breadcrumb',
)
</script>

<style scoped>
.gallery-hero__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
}

.gallery-hero__meta .link-arrow {
  margin-left: 0.4rem;
}

.gallery-note {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  max-width: 680px;
  margin: 2.5rem 0 0;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.55;
}

.gallery-note svg {
  margin-top: 0.14rem;
  flex-shrink: 0;
  color: var(--sage-deep);
}
</style>
