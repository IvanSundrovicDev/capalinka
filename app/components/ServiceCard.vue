<template>
  <article
    class="service-card"
    :class="{ 'service-card--transport': service.slug === 'prijevoz-robe-i-materijala' }"
  >
    <div class="service-card__top">
      <span class="service-card__icon">
        <ServiceIcon :name="service.icon" />
      </span>
      <span class="service-card__tag">{{ service.shortName }}</span>
    </div>

    <div class="service-card__body">
      <h3>
        <NuxtLink :to="service.path">{{ service.name }}</NuxtLink>
      </h3>
      <p>{{ service.shortDescription }}</p>
    </div>

    <ul class="service-card__highlights" aria-label="Naglasci usluge">
      <li v-for="highlight in service.highlights" :key="highlight">
        {{ highlight }}
      </li>
    </ul>

    <span class="service-card__link" aria-hidden="true">
      Saznajte više
      <ArrowUpRight :size="17" />
    </span>

    <LeafBranch v-if="service.slug === 'prijevoz-robe-i-materijala'" class="service-card__leaf" soft />
  </article>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { ServiceContent } from '~/data/services'

defineProps<{
  service: ServiceContent
}>()
</script>

<style scoped>
.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: clamp(1.5rem, 2.4vw, 2rem);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper);
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.service-card:hover {
  border-color: var(--line-green);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.service-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.6rem;
}

.service-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border: 1px solid var(--line-green);
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--sage-dark);
  transition:
    background-color 0.28s ease,
    color 0.28s ease;
}

.service-card__icon svg {
  width: 24px;
  height: 24px;
  stroke-width: 1.65;
}

.service-card:hover .service-card__icon {
  background: var(--sage);
  color: var(--ink);
}

.service-card__tag {
  color: var(--muted);
  font-size: 0.63rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  line-height: 1.4;
  text-align: right;
  text-transform: uppercase;
}

.service-card__body {
  flex: 1;
}

.service-card h3 {
  margin: 0 0 0.7rem;
  font-size: clamp(1.45rem, 2vw, 1.8rem);
}

.service-card h3 a {
  text-decoration: none;
}

.service-card h3 a::after {
  position: absolute;
  inset: 0;
  content: '';
}

.service-card p {
  margin-bottom: 1.3rem;
  color: var(--ink-soft);
  font-size: 0.93rem;
  line-height: 1.65;
}

.service-card__highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0 0 1.5rem;
  padding: 0;
  list-style: none;
}

.service-card__highlights li {
  margin: 0;
  padding: 0.27rem 0.58rem;
  border: 1px solid var(--line-green);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.4);
  color: var(--ink-soft);
  font-size: 0.68rem;
  font-weight: 650;
  line-height: 1.4;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--sage-dark);
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.4;
  text-decoration: none;
}

.service-card__link svg {
  transition: transform 0.22s ease;
}

.service-card:hover .service-card__link svg {
  transform: translate(2px, -2px);
}

.service-card--transport {
  background:
    radial-gradient(circle at 100% 0%, rgba(169, 212, 195, 0.16), transparent 20rem),
    var(--dark);
  border-color: rgba(169, 212, 195, 0.18);
  color: var(--cream-on-dark);
}

.service-card--transport .service-card__icon {
  border-color: rgba(169, 212, 195, 0.24);
  background: rgba(169, 212, 195, 0.1);
  color: var(--sage);
}

.service-card--transport:hover .service-card__icon {
  background: var(--sage);
  color: var(--dark);
}

.service-card--transport h3,
.service-card--transport h3 a {
  color: var(--cream-on-dark);
}

.service-card--transport p {
  color: rgba(246, 241, 229, 0.72);
}

.service-card--transport .service-card__tag {
  color: rgba(169, 212, 195, 0.75);
}

.service-card--transport .service-card__highlights li {
  border-color: rgba(169, 212, 195, 0.18);
  background: rgba(169, 212, 195, 0.07);
  color: rgba(246, 241, 229, 0.7);
}

.service-card--transport .service-card__link {
  color: var(--sage);
}

.service-card__leaf {
  position: absolute;
  right: -50px;
  bottom: -80px;
  width: 210px;
  opacity: 0.15;
  transform: rotate(20deg);
}
</style>
