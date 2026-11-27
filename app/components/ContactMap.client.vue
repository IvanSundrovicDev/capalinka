<template>
  <div class="leaflet-map-wrap">
    <div
      ref="mapEl"
      class="leaflet-map"
      role="region"
      aria-label="Interaktivna karta s lokacijom Obrta Čapalinka u Donjem Miholjcu"
    />
    <div v-if="!ready" class="leaflet-map__loading" aria-hidden="true">
      <span v-if="!error" class="leaflet-map__spinner" />
      {{ error || 'Učitavanje karte…' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const site = useSite()
const mapEl = ref<HTMLElement | null>(null)
const ready = ref(false)
const error = ref('')
let map: L.Map | null = null
let resizeObserver: ResizeObserver | null = null

onMounted(async () => {
  await nextTick()
  try {
    if (!mapEl.value) {
      throw new Error('Karta nije pronađena u DOM-u.')
    }

    map = L.map(mapEl.value, {
      center: [site.lat, site.lng],
      zoom: 13,
      minZoom: 9,
      maxZoom: 18,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    })

  L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      crossOrigin: true,
    },
  ).addTo(map)

  const markerIcon = L.divIcon({
    className: 'capalinka-map-marker',
    html: `
      <span class="capalinka-map-marker__badge" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </span>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -27],
  })

  L.marker([site.lat, site.lng], {
    icon: markerIcon,
    title: site.name,
    alt: `${site.name}, ${site.city}`,
    riseOnHover: true,
  })
    .addTo(map)
    .bindPopup(
      `<strong>${site.name}</strong><span>${site.city}, ${site.postalCode}</span>`,
      {
        closeButton: false,
        offset: [0, -1],
      },
    )

  resizeObserver = new ResizeObserver(() => {
    map?.invalidateSize()
  })
  resizeObserver.observe(mapEl.value)

  requestAnimationFrame(() => {
    map?.invalidateSize()
    ready.value = true
  })
  } catch (exception) {
    error.value = 'Karta trenutačno nije dostupna.'
    console.error('Leaflet map initialization failed:', exception)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  resizeObserver = null
  map?.remove()
  map = null
})
</script>

<style scoped>
.leaflet-map-wrap {
  position: absolute;
  inset: 0;
}

.leaflet-map {
  width: 100%;
  height: 100%;
  background: var(--sage-wash);
  font-family: var(--font-sans);
}

.leaflet-map__loading {
  position: absolute;
  inset: 0;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  background: var(--sage-wash);
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  pointer-events: none;
}

.leaflet-map__spinner {
  width: 24px;
  height: 24px;
  border: 2px solid var(--line-green);
  border-top-color: var(--sage-dark);
  border-radius: 50%;
  animation: map-spin 0.8s linear infinite;
}

.leaflet-map :deep(.leaflet-tile-pane) {
  filter: grayscale(0.35) sepia(0.2) saturate(0.85) brightness(1.03) contrast(0.95);
}

.leaflet-map :deep(.leaflet-container) {
  background: var(--sage-wash);
}

.leaflet-map :deep(.leaflet-control-zoom) {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 11px;
  box-shadow: 0 10px 24px -20px rgba(13, 47, 42, 0.7);
}

.leaflet-map :deep(.leaflet-control-zoom a) {
  width: 36px;
  height: 36px;
  border-color: var(--line);
  background: rgba(252, 250, 245, 0.96);
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 1.1rem;
  line-height: 36px;
}

.leaflet-map :deep(.leaflet-control-zoom a:hover) {
  background: var(--sage-wash);
  color: var(--ink);
}

.leaflet-map :deep(.leaflet-control-attribution) {
  padding: 2px 6px;
  border-top-left-radius: 7px;
  background: rgba(252, 250, 245, 0.9);
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 10px;
  line-height: 1.5;
  backdrop-filter: blur(6px);
}

.leaflet-map :deep(.leaflet-control-attribution a) {
  color: var(--sage-dark);
}

.leaflet-map :deep(.capalinka-map-marker) {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  line-height: 0;
}

.leaflet-map :deep(.capalinka-map-marker__badge) {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 2px solid var(--ink);
  border-radius: 50%;
  background: var(--sage-wash);
  color: var(--ink);
  box-shadow:
    0 0 0 8px rgba(169, 212, 195, 0.3),
    0 12px 28px -14px rgba(13, 47, 42, 0.75);
  line-height: 0;
}

.leaflet-map :deep(.capalinka-map-marker__badge svg) {
  display: block;
  width: 21px;
  height: 21px;
}

.leaflet-map :deep(.leaflet-popup-content-wrapper) {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper-strong);
  color: var(--ink);
  box-shadow: 0 16px 40px -25px rgba(13, 47, 42, 0.65);
}

.leaflet-map :deep(.leaflet-popup-tip) {
  background: var(--paper-strong);
  border: 1px solid var(--line);
}

.leaflet-map :deep(.leaflet-popup-content) {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin: 10px 14px;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  line-height: 1.45;
}

.leaflet-map :deep(.leaflet-popup-content strong) {
  color: var(--ink);
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
}

.leaflet-map :deep(.leaflet-popup-content span) {
  color: var(--muted);
  font-size: 0.72rem;
}

@keyframes map-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .leaflet-map__spinner {
    animation: none;
  }
}
</style>
