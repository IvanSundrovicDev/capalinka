<template>
  <header
    class="site-header"
    :class="{ 'is-scrolled': scrolled, 'is-menu-open': mobileOpen }"
  >
    <div class="topbar">
      <div class="container topbar__inner">
        <div class="topbar__group">
          <span class="topbar__item">
            <MapPin :size="14" aria-hidden="true" />
            Donji Miholjac i okolica
          </span>
          <span class="topbar__divider" aria-hidden="true" />
          <span class="topbar__item topbar__item--services">
            Čišćenje · Uređenje okoliša · Prijevoz robe i materijala
          </span>
        </div>
        <div class="topbar__group topbar__group--right">
          <span class="topbar__item">
            <Clock :size="14" aria-hidden="true" />
            Termini po dogovoru
          </span>
        </div>
      </div>
    </div>

    <div class="header-main">
      <div class="container header-main__inner">
        <BrandLogo class="header-brand" size="md" />

        <nav class="desktop-nav" aria-label="Glavna navigacija">
          <NuxtLink to="/" class="desktop-nav__link" exact-active-class="is-active">
            Početna
          </NuxtLink>

          <div
            ref="dropdownEl"
            class="nav-drop"
            :class="{ 'is-open': servicesOpen }"
            @mouseenter="servicesOpen = true"
            @mouseleave="handleDropdownMouseLeave"
            @focusout="handleDropdownFocusOut"
          >
            <button
              type="button"
              class="nav-drop__button"
              :class="{ 'is-active': isServicesActive }"
              :aria-expanded="servicesOpen ? 'true' : 'false'"
              aria-controls="services-dropdown"
              @click="servicesOpen = !servicesOpen"
            >
              Usluge
              <ChevronDown :size="14" aria-hidden="true" />
            </button>
            <div
              id="services-dropdown"
              class="nav-drop__panel"
              :aria-hidden="servicesOpen ? 'false' : 'true'"
            >
              <div class="nav-drop__grid">
                <NuxtLink
                  v-for="service in services"
                  :key="service.path"
                  :to="service.path"
                  class="nav-drop__item"
                  @click="servicesOpen = false"
                >
                  <span class="nav-drop__icon">
                    <ServiceIcon :name="service.icon" />
                  </span>
                  <span class="nav-drop__text">
                    <strong>{{ service.name }}</strong>
                    <small>{{ service.menuDescription }}</small>
                  </span>
                </NuxtLink>
              </div>
              <NuxtLink to="/usluge" class="nav-drop__all" @click="servicesOpen = false">
                Sve usluge i detalji
                <ArrowUpRight :size="16" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/galerija"
            class="desktop-nav__link"
            active-class="is-active"
          >
            Galerija
          </NuxtLink>
          <NuxtLink to="/o-nama" class="desktop-nav__link" active-class="is-active">
            O nama
          </NuxtLink>
          <NuxtLink
            to="/kontakt"
            class="desktop-nav__link"
            active-class="is-active"
          >
            Kontakt
          </NuxtLink>
        </nav>

        <div class="header-actions">
          <NuxtLink class="btn btn--sm header-cta" to="/kontakt">
            Zatražite ponudu
            <ArrowRight :size="17" aria-hidden="true" />
          </NuxtLink>

          <button
            ref="menuToggle"
            type="button"
            class="menu-toggle"
            :aria-expanded="mobileOpen ? 'true' : 'false'"
            aria-controls="mobile-menu"
            :aria-label="mobileOpen ? 'Zatvori izbornik' : 'Otvori izbornik'"
            @click="toggleMobileMenu"
          >
            <X v-if="mobileOpen" :size="23" aria-hidden="true" />
            <Menu v-else :size="23" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <Transition name="mobile-panel">
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        ref="mobilePanel"
        class="mobile-menu"
      >
        <div class="mobile-menu__inner">
          <div class="mobile-menu__eyebrow">
            <span>Obrt Čapalinka</span>
            <span>Donji Miholjac</span>
          </div>

          <nav class="mobile-nav" aria-label="Mobilna navigacija">
            <NuxtLink
              v-for="item in mainNavigation.filter((entry) => entry.to !== '/usluge')"
              :key="item.to"
              :to="item.to"
              class="mobile-nav__link"
              @click="closeMobileMenu"
            >
              {{ item.label }}
              <ArrowUpRight :size="19" aria-hidden="true" />
            </NuxtLink>
          </nav>

          <div class="mobile-services">
            <span class="mobile-menu__label">Usluge</span>
            <NuxtLink
              v-for="service in services"
              :key="service.path"
              :to="service.path"
              class="mobile-services__link"
              @click="closeMobileMenu"
            >
              <ServiceIcon :name="service.icon" />
              {{ service.name }}
            </NuxtLink>
          </div>

          <div class="mobile-menu__contact">
            <p class="mobile-menu__location">
              <MapPin :size="15" aria-hidden="true" />
              {{ site.city }}, Hrvatska
            </p>
            <NuxtLink class="btn" to="/kontakt" @click="closeMobileMenu">
              Zatražite ponudu
              <ArrowRight :size="17" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
        <LeafBranch class="mobile-menu__leaf" soft />
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Clock,
  MapPin,
  Menu,
  X,
} from 'lucide-vue-next'
import { mainNavigation } from '~/data/site'
import { services } from '~/data/services'

const site = useSite()
const route = useRoute()

const scrolled = ref(false)
const mobileOpen = ref(false)
const servicesOpen = ref(false)
const dropdownEl = ref<HTMLElement | null>(null)
const mobilePanel = ref<HTMLElement | null>(null)
const menuToggle = ref<HTMLButtonElement | null>(null)

const isServicesActive = computed(
  () =>
    route.path.startsWith('/usluge') ||
    route.path === '/prijevoz-robe-i-materijala',
)

function updateScroll() {
  scrolled.value = window.scrollY > 14
}

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value
  servicesOpen.value = false
  if (mobileOpen.value) {
    nextTick(() => {
      mobilePanel.value?.querySelector<HTMLElement>('a, button')?.focus()
    })
  }
}

function closeMobileMenu(restoreFocus = false) {
  if (!mobileOpen.value) return
  mobileOpen.value = false
  if (restoreFocus) {
    nextTick(() => menuToggle.value?.focus())
  }
}

function handleDropdownFocusOut(event: FocusEvent) {
  const nextTarget = event.relatedTarget as Node | null
  if (!nextTarget || !dropdownEl.value?.contains(nextTarget)) {
    servicesOpen.value = false
  }
}

function handleDropdownMouseLeave() {
  if (!dropdownEl.value?.contains(document.activeElement)) {
    servicesOpen.value = false
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape') return
  if (mobileOpen.value) {
    closeMobileMenu(true)
    return
  }
  servicesOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
    servicesOpen.value = false
  },
)

watch(mobileOpen, (isOpen) => {
  if (!import.meta.client) return
  document.body.classList.toggle('menu-open', isOpen)
  document
    .querySelectorAll<HTMLElement>('#main-content, .site-footer, .mobile-call-wrap')
    .forEach((element) => {
      if (isOpen) {
        element.setAttribute('inert', '')
      } else {
        element.removeAttribute('inert')
      }
    })
})

function handleResize() {
  if (window.innerWidth > 1119 && mobileOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  document.body.classList.remove('menu-open')
  document
    .querySelectorAll<HTMLElement>('#main-content, .site-footer, .mobile-call-wrap')
    .forEach((element) => element.removeAttribute('inert'))
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
}

.topbar {
  max-height: 38px;
  overflow: hidden;
  background: var(--dark);
  color: var(--cream-on-dark);
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}

.topbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: 38px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.015em;
}

.topbar__group {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
}

.topbar__group--right {
  gap: 1.6rem;
  flex-shrink: 0;
}

.topbar__item {
  display: inline-flex;
  align-items: center;
  gap: 0.42rem;
  white-space: nowrap;
  opacity: 0.82;
}

.topbar__divider {
  width: 1px;
  height: 12px;
  background: rgba(246, 241, 229, 0.24);
  flex-shrink: 0;
}

.is-scrolled .topbar {
  max-height: 0;
  opacity: 0;
}

.header-main {
  position: relative;
  z-index: 101;
  border-bottom: 1px solid rgba(222, 217, 203, 0.8);
  background: rgba(247, 244, 236, 0.9);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.is-menu-open .header-main {
  background: var(--cream);
}

.is-scrolled .header-main {
  background: rgba(250, 248, 242, 0.96);
  box-shadow: 0 10px 30px -27px rgba(13, 47, 42, 0.6);
}

.header-main__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1rem, 2vw, 2rem);
  min-height: 84px;
}

.header-brand {
  flex-shrink: 0;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(0.85rem, 1.55vw, 1.35rem);
  margin-left: auto;
}

.desktop-nav__link,
.nav-drop__button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.2;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.desktop-nav__link::after,
.nav-drop__button::after {
  position: absolute;
  right: 0;
  bottom: 0.15rem;
  left: 0;
  height: 1.5px;
  background: var(--sage-deep);
  content: '';
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.22s ease;
}

.desktop-nav__link:hover,
.nav-drop__button:hover,
.desktop-nav__link.is-active,
.nav-drop__button.is-active {
  color: var(--sage-dark);
}

.desktop-nav__link:hover::after,
.desktop-nav__link.is-active::after,
.nav-drop__button.is-active::after {
  transform: scaleX(1);
}

.nav-drop {
  position: relative;
}

.nav-drop__button svg {
  transition: transform 0.22s ease;
}

.nav-drop.is-open .nav-drop__button svg {
  transform: rotate(180deg);
}

.nav-drop__panel {
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 50%;
  z-index: 10;
  width: 480px;
  padding: 0.65rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper-strong);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 8px);
  visibility: hidden;
  transition:
    opacity 0.22s ease,
    transform 0.22s ease,
    visibility 0.22s;
}

.nav-drop__panel::before {
  position: absolute;
  top: -1rem;
  right: 0;
  left: 0;
  height: 1rem;
  content: '';
}

.nav-drop.is-open .nav-drop__panel {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
  visibility: visible;
}

.nav-drop__grid {
  display: grid;
  gap: 0.15rem;
}

.nav-drop__item {
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
  padding: 0.7rem;
  border-radius: 12px;
  color: var(--ink);
  text-decoration: none;
  transition: background-color 0.18s ease;
}

.nav-drop__item:hover,
.nav-drop__item:focus-visible {
  background: var(--sage-wash);
}

.nav-drop__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: 1px solid var(--line-green);
  border-radius: 50%;
  background: var(--paper);
  color: var(--sage-dark);
}

.nav-drop__icon svg {
  width: 18px;
  height: 18px;
  stroke-width: 1.7;
}

.nav-drop__text {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  min-width: 0;
  padding-top: 0.05rem;
}

.nav-drop__text strong {
  font-size: 0.86rem;
  font-weight: 800;
  line-height: 1.3;
}

.nav-drop__text small {
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 500;
  line-height: 1.4;
}

.nav-drop__all {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.35rem;
  padding: 0.8rem 0.75rem 0.4rem;
  border-top: 1px solid var(--line);
  color: var(--sage-dark);
  font-size: 0.8rem;
  font-weight: 800;
  text-decoration: none;
}

.nav-drop__all:hover {
  color: var(--ink);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: transparent;
  color: var(--ink);
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.menu-toggle:hover {
  border-color: var(--sage-deep);
  background: var(--sage-wash);
}

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 90;
  overflow-y: auto;
  padding: 118px 0 36px;
  background:
    radial-gradient(circle at 100% 0%, rgba(169, 212, 195, 0.3), transparent 26rem),
    var(--cream);
}

.mobile-menu__inner {
  width: min(calc(100% - 2rem), 620px);
  margin-inline: auto;
}

.mobile-menu__eyebrow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.mobile-nav {
  display: grid;
  margin: 1.1rem 0 1.6rem;
}

.mobile-nav__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(222, 217, 203, 0.65);
  color: var(--ink);
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 5.6vw, 2rem);
  font-weight: 500;
  line-height: 1.25;
  text-decoration: none;
}

.mobile-nav__link svg {
  color: var(--sage-deep);
  flex-shrink: 0;
}

.mobile-nav__link:hover,
.mobile-nav__link.router-link-active {
  color: var(--sage-dark);
}

.mobile-services {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.2rem 1rem;
  padding: 1.25rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.mobile-menu__label {
  grid-column: 1 / -1;
  margin-bottom: 0.5rem;
  color: var(--sage-dark);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.mobile-services__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.38rem 0;
  color: var(--ink-soft);
  font-size: 0.84rem;
  font-weight: 650;
  line-height: 1.35;
  text-decoration: none;
}

.mobile-services__link svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--sage-dark);
  stroke-width: 1.7;
}

.mobile-services__link:hover {
  color: var(--ink);
}

.mobile-menu__contact {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.mobile-menu__location {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.mobile-menu__contact .btn {
  width: 100%;
}

.mobile-menu__leaf {
  position: absolute;
  right: -40px;
  bottom: -30px;
  width: 240px;
  opacity: 0.55;
}

.mobile-panel-enter-active,
.mobile-panel-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-panel-enter-from,
.mobile-panel-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1119px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .header-actions {
    margin-left: auto;
  }
}

@media (max-width: 960px) {
  .topbar {
    display: none;
  }

  .mobile-menu {
    padding-top: 104px;
  }
}

@media (max-width: 719px) {
  .header-cta {
    display: none;
  }

  .header-main__inner {
    min-height: 74px;
  }
}

@media (max-width: 520px) {
  .mobile-services {
    grid-template-columns: 1fr;
  }

  .mobile-menu {
    padding-top: 94px;
  }
}
</style>
