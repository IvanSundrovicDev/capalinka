<template>
  <nav class="breadcrumbs" aria-label="Putanja stranice">
    <NuxtLink to="/" class="breadcrumbs__link">Početna</NuxtLink>
    <template v-for="(item, index) in items" :key="`${item.label}-${index}`">
      <ChevronRight :size="12" class="breadcrumbs__sep" aria-hidden="true" />
      <NuxtLink
        v-if="item.to && index < items.length - 1"
        :to="item.to"
        class="breadcrumbs__link"
      >
        {{ item.label }}
      </NuxtLink>
      <span
        v-else
        class="breadcrumbs__current"
        :aria-current="index === items.length - 1 ? 'page' : undefined"
      >
        {{ item.label }}
      </span>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: clamp(1.6rem, 3vw, 2.5rem);
  color: var(--muted);
  font-size: 0.73rem;
  font-weight: 650;
  line-height: 1.5;
}

.breadcrumbs__link {
  color: var(--muted);
  text-decoration: none;
}

.breadcrumbs__link:hover {
  color: var(--sage-dark);
}

.breadcrumbs__sep {
  flex-shrink: 0;
  color: var(--sage-deep);
  opacity: 0.7;
}

.breadcrumbs__current {
  color: var(--ink);
  font-weight: 750;
}
</style>
