<template>
  <div class="gallery">
    <div v-if="showFilters" class="gallery__filters" role="group" aria-label="Filtrirajte galeriju">
      <button
        v-for="category in categories"
        :key="category.name"
        type="button"
        class="gallery__filter"
        :class="{ 'is-active': selectedCategory === category.name }"
        :aria-pressed="selectedCategory === category.name"
        @click="setCategory(category.name)"
      >
        {{ category.name }}
        <span>{{ category.count }}</span>
      </button>
    </div>

    <div v-if="visibleItems.length" class="gallery__grid">
      <figure
        v-for="(item, index) in visibleItems"
        :key="item.id"
        class="gallery-item"
      >
        <button
          type="button"
          class="gallery-item__button"
          :aria-label="`Otvori veći prikaz: ${item.category} – ${item.title}`"
          @click="openLightbox(index, $event)"
        >
          <span class="gallery-item__media">
            <img
              :src="item.src"
              :alt="item.alt"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <span class="gallery-item__category">{{ item.category }}</span>
            <span class="gallery-item__zoom" aria-hidden="true">
              <Maximize2 :size="18" />
            </span>
          </span>
        </button>
        <figcaption class="gallery-item__caption">
          <span class="gallery-item__title">{{ item.title }}</span>
          <span class="gallery-item__text">{{ item.caption }}</span>
        </figcaption>
      </figure>
    </div>

    <p v-else class="gallery__empty">
      U ovoj kategoriji još nema prikaza. Odaberite drugu kategoriju.
    </p>

    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="isOpen && activeItem"
          ref="lightboxEl"
          class="lightbox"
          role="dialog"
          aria-modal="true"
          :aria-label="`Galerija: ${activeItem.title}`"
          @click.self="closeLightbox"
        >
          <div class="lightbox__top">
            <span class="lightbox__counter">
              {{ (activeIndex ?? 0) + 1 }} / {{ visibleItems.length }}
            </span>
            <button
              ref="closeButton"
              type="button"
              class="lightbox__icon-button"
              aria-label="Zatvori galeriju"
              @click="closeLightbox"
            >
              <X :size="22" aria-hidden="true" />
            </button>
          </div>

          <div class="lightbox__stage">
            <button
              v-if="visibleItems.length > 1"
              type="button"
              class="lightbox__nav lightbox__nav--prev"
              aria-label="Prethodna fotografija"
              @click="showPrevious"
            >
              <ChevronLeft :size="24" aria-hidden="true" />
            </button>

            <figure class="lightbox__figure">
              <img
                :src="activeItem.src"
                :alt="activeItem.alt"
                width="1200"
                height="900"
                decoding="async"
              />
              <figcaption class="lightbox__caption">
                <span class="lightbox__category">{{ activeItem.category }}</span>
                <strong>{{ activeItem.title }}</strong>
                <span class="lightbox__text">{{ activeItem.caption }}</span>
              </figcaption>
            </figure>

            <button
              v-if="visibleItems.length > 1"
              type="button"
              class="lightbox__nav lightbox__nav--next"
              aria-label="Sljedeća fotografija"
              @click="showNext"
            >
              <ChevronRight :size="24" aria-hidden="true" />
            </button>
          </div>

          <div v-if="visibleItems.length > 1" class="lightbox__bottom">
            <div class="lightbox__thumbs" role="group" aria-label="Odabir fotografije">
              <button
                v-for="(item, index) in visibleItems"
                :key="`thumb-${item.id}`"
                type="button"
                class="lightbox__thumb"
                :class="{ 'is-active': activeIndex === index }"
                :aria-label="`Prikaži: ${item.title}`"
                :aria-current="activeIndex === index ? 'true' : undefined"
                @click="activeIndex = index"
              >
                <img
                  :src="item.src"
                  alt=""
                  width="1200"
                  height="900"
                  loading="lazy"
                />
              </button>
            </div>
            <span class="lightbox__hint">
              <ArrowLeft :size="13" aria-hidden="true" />
              <ArrowRight :size="13" aria-hidden="true" />
              za listanje · Esc za zatvaranje
            </span>
          </div>

          <p class="sr-only" aria-live="polite">
            Slika {{ (activeIndex ?? 0) + 1 }} od {{ visibleItems.length }}:
            {{ activeItem.title }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from 'lucide-vue-next'
import type { GalleryItem } from '~/data/gallery'

const props = withDefaults(
  defineProps<{
    items: GalleryItem[]
    showFilters?: boolean
  }>(),
  { showFilters: false },
)

const selectedCategory = ref('Sve')
const activeIndex = ref<number | null>(null)
const triggerEl = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const lightboxEl = ref<HTMLElement | null>(null)

const categories = computed(() => {
  const names = [...new Set(props.items.map((item) => item.category))]
  return [
    { name: 'Sve', count: props.items.length },
    ...names.map((name) => ({
      name,
      count: props.items.filter((item) => item.category === name).length,
    })),
  ]
})

const visibleItems = computed(() => {
  if (selectedCategory.value === 'Sve') return props.items
  return props.items.filter((item) => item.category === selectedCategory.value)
})

const isOpen = computed(() => activeIndex.value !== null)
const activeItem = computed(() =>
  activeIndex.value === null ? null : visibleItems.value[activeIndex.value] ?? null,
)

function setCategory(category: string) {
  selectedCategory.value = category
}

function openLightbox(index: number, event: MouseEvent) {
  triggerEl.value = event.currentTarget as HTMLElement
  activeIndex.value = index
  nextTick(() => closeButton.value?.focus())
}

function closeLightbox() {
  const trigger = triggerEl.value
  activeIndex.value = null
  nextTick(() => trigger?.focus())
}

function showNext() {
  if (!visibleItems.value.length) return
  activeIndex.value = ((activeIndex.value ?? 0) + 1) % visibleItems.value.length
}

function showPrevious() {
  if (!visibleItems.value.length) return
  activeIndex.value =
    ((activeIndex.value ?? 0) - 1 + visibleItems.value.length) %
    visibleItems.value.length
}

function handleKeydown(event: KeyboardEvent) {
  if (!isOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeLightbox()
    return
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    showNext()
    return
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    showPrevious()
    return
  }

  if (event.key !== 'Tab' || !lightboxEl.value) return

  const focusable = Array.from(
    lightboxEl.value.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => element.offsetParent !== null)

  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  const activeElement = document.activeElement

  if (event.shiftKey && activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}

watch(isOpen, (open) => {
  if (!import.meta.client) return
  document.body.classList.toggle('lightbox-open', open)
  if (open) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
  }
})

watch(selectedCategory, () => {
  activeIndex.value = null
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
    document.body.classList.remove('lightbox-open')
  }
})
</script>

<style scoped>
.gallery__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.gallery__filter {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 40px;
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
  color: var(--ink-soft);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.3;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.gallery__filter span {
  color: var(--muted);
  font-size: 0.65rem;
}

.gallery__filter:hover {
  border-color: var(--sage-deep);
  color: var(--ink);
}

.gallery__filter.is-active {
  border-color: var(--ink);
  background: var(--ink);
  color: var(--cream);
}

.gallery__filter.is-active span {
  color: var(--sage);
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.1rem, 2.4vw, 1.9rem);
}

.gallery-item {
  margin: 0;
  min-width: 0;
}

.gallery-item__button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
}

.gallery-item__media {
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--cream-deep);
}

.gallery-item__media::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(13, 47, 42, 0.02) 35%,
    rgba(13, 47, 42, 0.2) 100%
  );
  content: '';
  opacity: 0;
  transition: opacity 0.35s ease;
}

.gallery-item__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.gallery-item__button:hover .gallery-item__media img,
.gallery-item__button:focus-visible .gallery-item__media img {
  transform: scale(1.045);
}

.gallery-item__button:hover .gallery-item__media::after,
.gallery-item__button:focus-visible .gallery-item__media::after {
  opacity: 1;
}

.gallery-item__category {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  z-index: 1;
  padding: 0.3rem 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 999px;
  background: rgba(247, 244, 236, 0.9);
  color: var(--ink);
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1.4;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}

.gallery-item__zoom {
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  background: rgba(13, 47, 42, 0.66);
  color: var(--cream);
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    background-color 0.2s ease;
  backdrop-filter: blur(6px);
}

.gallery-item__button:hover .gallery-item__zoom,
.gallery-item__button:focus-visible .gallery-item__zoom {
  opacity: 1;
  transform: translateY(0);
}

.gallery-item__caption {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.85rem 0.2rem 0;
}

.gallery-item__title {
  color: var(--ink);
  font-family: var(--font-serif);
  font-size: 1.12rem;
  font-weight: 500;
  line-height: 1.3;
}

.gallery-item__text {
  color: var(--muted);
  font-size: 0.79rem;
  line-height: 1.5;
}

.gallery__empty {
  padding: 2rem;
  border: 1px dashed var(--line);
  border-radius: var(--radius);
  color: var(--muted);
  text-align: center;
}

/* Lightbox */

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: flex;
  flex-direction: column;
  padding: 1.2rem clamp(0.8rem, 2.5vw, 2.5rem) 1rem;
  overflow-y: auto;
  background: rgba(7, 24, 21, 0.97);
  color: var(--cream-on-dark);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.lightbox__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto 0.8rem;
  flex-shrink: 0;
}

.lightbox__counter {
  font-size: 0.75rem;
  font-weight: 750;
  letter-spacing: 0.12em;
}

.lightbox__icon-button,
.lightbox__nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(246, 241, 229, 0.24);
  border-radius: 50%;
  background: rgba(246, 241, 229, 0.06);
  color: var(--cream-on-dark);
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.lightbox__icon-button {
  width: 44px;
  height: 44px;
}

.lightbox__icon-button:hover,
.lightbox__nav:hover {
  border-color: rgba(169, 212, 195, 0.6);
  background: var(--sage);
  color: var(--dark);
}

.lightbox__stage {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: clamp(0.6rem, 2vw, 1.6rem);
  min-height: 0;
  width: 100%;
}

.lightbox__figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0;
  min-width: 0;
}

.lightbox__figure > img {
  width: auto;
  max-width: 100%;
  max-height: min(66vh, 720px);
  border: 1px solid rgba(246, 241, 229, 0.14);
  border-radius: 14px;
  object-fit: contain;
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.6);
}

.lightbox__caption {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  max-width: 760px;
  padding: 0.95rem 0.3rem 0;
  text-align: center;
}

.lightbox__category {
  color: var(--sage);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.lightbox__caption strong {
  color: var(--cream-on-dark);
  font-family: var(--font-serif);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 500;
  line-height: 1.3;
}

.lightbox__text {
  color: rgba(246, 241, 229, 0.6);
  font-size: 0.8rem;
  line-height: 1.5;
}

.lightbox__nav {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}

.lightbox__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  margin: 1rem auto 0;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(246, 241, 229, 0.12);
  flex-shrink: 0;
}

.lightbox__thumbs {
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  padding-bottom: 0.15rem;
}

.lightbox__thumb {
  width: 64px;
  height: 48px;
  flex-shrink: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(246, 241, 229, 0.18);
  border-radius: 7px;
  background: transparent;
  opacity: 0.5;
  transition:
    opacity 0.2s ease,
    border-color 0.2s ease;
}

.lightbox__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox__thumb:hover {
  opacity: 0.85;
}

.lightbox__thumb.is-active {
  border-color: var(--sage);
  opacity: 1;
}

.lightbox__hint {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  color: rgba(246, 241, 229, 0.62);
  font-size: 0.68rem;
  line-height: 1.4;
}

.lightbox__hint svg:first-child {
  margin-right: 0.1rem;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.28s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-active .lightbox__figure {
  transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}

.lightbox-enter-from .lightbox__figure {
  transform: scale(0.965);
}

@media (max-width: 1000px) {
  .gallery__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .gallery__grid {
    grid-template-columns: 1fr;
  }

  .lightbox {
    padding-top: 0.9rem;
  }

  .lightbox__stage {
    gap: 0.4rem;
  }

  .lightbox__nav {
    width: 38px;
    height: 38px;
  }

  .lightbox__figure > img {
    max-height: 55vh;
  }

  .lightbox__bottom {
    justify-content: center;
  }

  .lightbox__thumbs {
    display: none;
  }

  .lightbox__hint {
    display: none;
  }
}

@media (max-width: 480px) {
  .gallery__filter {
    min-height: 36px;
    padding: 0.4rem 0.7rem;
    font-size: 0.72rem;
  }

  .lightbox__nav {
    width: 34px;
    height: 34px;
  }

  .lightbox__caption {
    padding-top: 0.6rem;
  }

  .lightbox__text {
    font-size: 0.73rem;
  }
}
</style>
