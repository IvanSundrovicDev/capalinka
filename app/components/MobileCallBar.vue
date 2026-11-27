<template>
  <div v-if="showBar" class="mobile-call-wrap">
    <div class="mobile-call-bar">
      <a class="mobile-call-bar__button mobile-call-bar__button--call" :href="`tel:${site.phoneHref}`">
        <Phone :size="18" aria-hidden="true" />
        <span>Nazovite</span>
      </a>
      <NuxtLink class="mobile-call-bar__button mobile-call-bar__button--cta" to="/kontakt">
        <span>Zatražite ponudu</span>
        <ArrowRight :size="18" aria-hidden="true" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Phone } from 'lucide-vue-next'

const site = useSite()
const route = useRoute()

const normalizedPath = computed(() => route.path.replace(/\/+$/, '') || '/')

const showBar = computed(
  () => !['/kontakt', '/politika-privatnosti'].includes(normalizedPath.value),
)
</script>

<style scoped>
.mobile-call-wrap {
  display: none;
}

.mobile-call-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 80;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem calc(0.6rem + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  background: rgba(250, 248, 242, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.mobile-call-bar__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 46px;
  padding: 0.6rem 0.8rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.2;
  text-decoration: none;
}

.mobile-call-bar__button--call {
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink);
}

.mobile-call-bar__button--cta {
  background: var(--ink);
  color: var(--cream);
}

@media (max-width: 760px) {
  .mobile-call-wrap {
    display: block;
    height: 68px;
  }
}
</style>
