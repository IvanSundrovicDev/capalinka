<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-panel">
        <LeafBranch class="cta-panel__leaf" soft />
        <div class="cta-panel__copy">
          <span class="eyebrow">{{ eyebrow }}</span>
          <h2 v-html="title" />
          <p>{{ text }}</p>
        </div>
        <div class="cta-panel__actions">
          <div class="btn-row">
            <NuxtLink class="btn btn--light" to="/kontakt">
              Zatražite ponudu
              <ArrowRight :size="18" aria-hidden="true" />
            </NuxtLink>
            <a class="btn btn--ghost-light" :href="`tel:${site.phoneHref}`">
              <Phone :size="17" aria-hidden="true" />
              {{ site.phoneDisplay }}
            </a>
          </div>
          <p class="cta-panel__note">
            Bez obveze. Ponudu prilagođavamo opsegu i lokaciji posla.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Phone } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    text?: string
  }>(),
  {
    eyebrow: 'Sljedeći korak',
    title: 'Spremni za prostor koji odiše <em class="italic-accent">svježinom</em>?',
    text: 'Nazovite nas ili pošaljite kratak opis prostora i željenog termina. Dogovorit ćemo opseg i dati vam jasnu okvirnu ponudu.',
  },
)

const site = useSite()
</script>

<style scoped>
.cta-section {
  padding: 0 0 clamp(3.5rem, 7vw, 6rem);
  background: var(--cream);
}

.cta-panel {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
  overflow: hidden;
  padding: clamp(2.4rem, 5.5vw, 4.8rem);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at 85% 10%, rgba(169, 212, 195, 0.2), transparent 24rem),
    var(--dark);
  color: var(--cream-on-dark);
}

.cta-panel::after {
  position: absolute;
  top: -140px;
  right: -120px;
  width: 380px;
  height: 380px;
  border: 1px solid rgba(169, 212, 195, 0.14);
  border-radius: 50%;
  content: '';
  pointer-events: none;
}

.cta-panel__copy {
  position: relative;
  z-index: 1;
}

.cta-panel h2 {
  max-width: 640px;
  margin-bottom: 1.1rem;
  color: var(--cream-on-dark);
  font-size: clamp(2.1rem, 3.8vw, 3.5rem);
}

.cta-panel p {
  max-width: 55ch;
  margin: 0;
  color: rgba(246, 241, 229, 0.7);
}

.cta-panel__actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
}

.cta-panel__actions .btn-row {
  width: 100%;
}

.cta-panel__note {
  font-size: 0.76rem !important;
  color: rgba(246, 241, 229, 0.6) !important;
  line-height: 1.5;
}

.cta-panel__leaf {
  position: absolute;
  right: -30px;
  bottom: -140px;
  width: 340px;
  opacity: 0.65;
  transform: rotate(12deg);
}

@media (max-width: 900px) {
  .cta-panel {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cta-panel__leaf {
    width: 260px;
    bottom: -120px;
    opacity: 0.45;
  }
}

@media (max-width: 520px) {
  .cta-panel {
    padding: 2rem 1.4rem;
    border-radius: 24px;
  }

  .cta-panel__actions .btn-row {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-panel__actions .btn {
    width: 100%;
  }
}
</style>
