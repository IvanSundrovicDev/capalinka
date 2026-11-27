<template>
  <div class="error-page">
    <LeafBranch class="error-page__leaf" soft />
    <header class="error-page__header container">
      <BrandLogo size="md" />
    </header>

    <main class="error-page__main container">
      <span class="error-page__code">{{ error?.statusCode || 404 }}</span>
      <span class="eyebrow">Stranica nije pronađena</span>
      <h1>Izgleda da je ova stranica <em class="italic-accent">promašila adresu.</em></h1>
      <p>
        Stranica koju tražite možda je premještena ili više ne postoji. Vratite se
        na početnu ili nas jednostavno nazovite – rado ćemo vas usmjeriti.
      </p>
      <div class="btn-row">
        <button type="button" class="btn" @click="goHome">
          Na početnu
          <ArrowLeft :size="17" aria-hidden="true" />
        </button>
        <NuxtLink class="btn btn--outline" to="/kontakt">
          Kontaktirajte nas
          <ArrowRight :size="17" aria-hidden="true" />
        </NuxtLink>
      </div>
    </main>

    <footer class="error-page__footer container">
      <CopyrightLine />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useHead({
  title: 'Stranica nije pronađena | Obrt Čapalinka',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-page {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 90% 10%, rgba(169, 212, 195, 0.32), transparent 28rem),
    var(--cream);
}

.error-page__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 94px;
  border-bottom: 1px solid var(--line);
}

.error-page__main {
  position: relative;
  z-index: 1;
  width: min(calc(100% - 3rem), 720px);
  margin: auto;
  padding: 5rem 0;
}

.error-page__code {
  display: block;
  margin-bottom: 0.6rem;
  color: var(--sage);
  font-family: var(--font-serif);
  font-size: clamp(5rem, 15vw, 11rem);
  font-weight: 500;
  line-height: 0.85;
  opacity: 0.75;
}

.error-page h1 {
  margin-bottom: 1.2rem;
  font-size: clamp(2.4rem, 5vw, 4rem);
}

.error-page h1 em {
  display: block;
}

.error-page__main p {
  max-width: 55ch;
  margin-bottom: 2rem;
  color: var(--ink-soft);
}

.error-page__leaf {
  position: absolute;
  right: -80px;
  bottom: -120px;
  width: 420px;
  opacity: 0.5;
  transform: rotate(12deg);
}

.error-page__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.75rem;
}

@media (max-width: 640px) {
  .error-page__header {
    min-height: 78px;
  }

  .error-page__main {
    width: min(calc(100% - 2rem), 720px);
    padding: 3rem 0;
  }

  .error-page__leaf {
    width: 280px;
    opacity: 0.35;
  }
}
</style>
