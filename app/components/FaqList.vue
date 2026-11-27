<template>
  <div class="faq-list">
    <details v-for="(faq, index) in items" :key="faq.question" class="faq-item">
      <summary class="faq-item__summary">
        <span class="faq-item__number" aria-hidden="true">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <span class="faq-item__question">{{ faq.question }}</span>
        <span class="faq-item__icon" aria-hidden="true">
          <Plus :size="18" />
        </span>
      </summary>
      <div class="faq-item__answer">
        <p>{{ faq.answer }}</p>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import type { ServiceFaq } from '~/data/services'

defineProps<{
  items: ServiceFaq[]
}>()
</script>

<style scoped>
.faq-list {
  border-top: 1px solid var(--line);
}

.faq-item {
  border-bottom: 1px solid var(--line);
}

.faq-item__summary {
  display: grid;
  grid-template-columns: 2.3rem minmax(0, 1fr) auto;
  gap: 0.8rem;
  align-items: start;
  padding: 1.35rem 0;
  list-style: none;
  cursor: pointer;
}

.faq-item__summary::-webkit-details-marker {
  display: none;
}

.faq-item__number {
  padding-top: 0.24rem;
  color: var(--sage-dark);
  font-family: var(--font-serif);
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.3;
}

.faq-item__question {
  color: var(--ink);
  font-family: var(--font-serif);
  font-size: clamp(1.08rem, 1.6vw, 1.3rem);
  font-weight: 500;
  line-height: 1.35;
  transition: color 0.2s ease;
}

.faq-item__summary:hover .faq-item__question {
  color: var(--sage-dark);
}

.faq-item__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-top: 0.05rem;
  border: 1px solid var(--line-green);
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--sage-dark);
  transition:
    transform 0.25s ease,
    background-color 0.25s ease,
    color 0.25s ease;
}

.faq-item[open] .faq-item__icon {
  background: var(--sage);
  color: var(--ink);
  transform: rotate(45deg);
}

.faq-item__answer {
  padding: 0 3rem 1.4rem 3.1rem;
}

.faq-item__answer p {
  max-width: 72ch;
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.95rem;
  line-height: 1.72;
}

.section--dark .faq-list {
  border-color: rgba(246, 241, 229, 0.14);
}

.section--dark .faq-item {
  border-color: rgba(246, 241, 229, 0.14);
}

.section--dark .faq-item__question {
  color: var(--cream-on-dark);
}

.section--dark .faq-item__answer p {
  color: rgba(246, 241, 229, 0.68);
}

@media (max-width: 640px) {
  .faq-item__summary {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.7rem;
  }

  .faq-item__number {
    display: none;
  }

  .faq-item__answer {
    padding: 0 0 1.3rem;
  }
}
</style>
