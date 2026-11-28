<template>
  <footer class="site-footer">
    <LeafBranch class="footer__leaf" soft />

    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <BrandLogo class="footer__logo" size="lg" tone="light" />
          <p class="footer__description">
            Lokalni obrt iz Donjeg Miholjca posvećen brizi o prostoru. Čišćenje,
            uređenje okoliša i prijevoz robe i materijala – s pažnjom prema
            detaljima i dogovoru koji se poštuje.
          </p>

          <div class="footer__contact">
            <a class="footer__phone" :href="`tel:${site.phoneHref}`">
              <span class="footer__contact-icon">
                <Phone :size="17" aria-hidden="true" />
              </span>
              <span>
                <small>Nazovite nas</small>
                <strong>{{ site.phoneDisplay }}</strong>
              </span>
            </a>
            <a class="footer__contact-line" :href="`mailto:${site.email}`">
              <Mail :size="15" aria-hidden="true" />
              {{ site.email }}
            </a>
            <span class="footer__contact-line">
              <MapPin :size="15" aria-hidden="true" />
              {{ site.city }}, {{ site.postalCode }}, Hrvatska
            </span>
            <span class="footer__contact-line">
              <Clock :size="15" aria-hidden="true" />
              {{ site.hoursLabel }}
            </span>
          </div>
        </div>

        <nav class="footer__col" aria-label="Usluge u podnožju">
          <h2 class="footer__heading">Usluge</h2>
          <NuxtLink
            v-for="service in services"
            :key="service.path"
            :to="service.path"
            class="footer__link"
          >
            {{ service.name }}
          </NuxtLink>
          <NuxtLink to="/usluge" class="footer__link footer__link--strong">
            Sve usluge
            <ArrowUpRight :size="14" aria-hidden="true" />
          </NuxtLink>
        </nav>

        <nav class="footer__col" aria-label="Informacije">
          <h2 class="footer__heading">Informacije</h2>
          <NuxtLink to="/o-nama" class="footer__link">O obrtu</NuxtLink>
          <NuxtLink to="/galerija" class="footer__link">Galerija</NuxtLink>
          <NuxtLink to="/podrucja" class="footer__link">Područja rada</NuxtLink>
          <NuxtLink to="/kontakt" class="footer__link">Kontakt</NuxtLink>
          <NuxtLink
            to="/politika-privatnosti"
            class="footer__link"
          >
            Politika privatnosti
          </NuxtLink>
        </nav>

        <div class="footer__col footer__col--area">
          <h2 class="footer__heading">Gdje radimo</h2>
          <p class="footer__area-text">
            Donji Miholjac, prigradska naselja, susjedne općine i šira okolica
            istočne Slavonije.
          </p>
          <NuxtLink to="/podrucja" class="footer__link footer__link--strong">
            Pogledajte sva područja
            <ArrowUpRight :size="14" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>

      <div class="footer__areas">
        <span class="footer__areas-label">Najčešća područja</span>
        <div class="footer__area-chips">
          <NuxtLink
            v-for="area in ['Donji Miholjac', 'Valpovo', 'Belišće', 'Osijek', 'Našice', 'Slatina', 'Virovitica']"
            :key="area"
            to="/podrucja"
            class="footer__area-chip"
          >
            {{ area }}
          </NuxtLink>
        </div>
      </div>

      <div class="footer__bottom">
        <CopyrightLine />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-vue-next'
import { services } from '~/data/services'

const site = useSite()
</script>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  padding: clamp(4rem, 7vw, 6.5rem) 0 0;
  background:
    radial-gradient(circle at 4% 8%, rgba(169, 212, 195, 0.09), transparent 24rem),
    radial-gradient(circle at 96% 28%, rgba(169, 212, 195, 0.06), transparent 24rem),
    var(--dark);
  color: var(--cream-on-dark);
}

.footer__leaf {
  position: absolute;
  top: -30px;
  right: -50px;
  width: min(30vw, 400px);
  opacity: 0.12;
  color: var(--sage);
  transform: rotate(155deg);
}

.footer__top {
  position: relative;
  display: grid;
  grid-template-columns: minmax(260px, 1.7fr) minmax(130px, 0.65fr) minmax(130px, 0.7fr) minmax(170px, 0.8fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  padding-bottom: clamp(3rem, 6vw, 4.5rem);
}

.footer__brand {
  max-width: 400px;
}

.footer__logo {
  color: var(--cream-on-dark);
  margin-bottom: 1.4rem;
}

.footer__description {
  margin-bottom: 1.75rem;
  color: rgba(246, 241, 229, 0.62);
  font-size: 0.9rem;
  line-height: 1.7;
}

.footer__contact {
  display: grid;
  gap: 0.65rem;
}

.footer__phone {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.15rem;
  color: var(--cream-on-dark);
  text-decoration: none;
}

.footer__phone:hover strong {
  color: var(--sage);
}

.footer__contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(169, 212, 195, 0.22);
  border-radius: 50%;
  background: rgba(169, 212, 195, 0.09);
  color: var(--sage);
  flex-shrink: 0;
}

.footer__phone small {
  display: block;
  margin-bottom: 0.1rem;
  color: rgba(246, 241, 229, 0.66);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer__phone strong {
  color: inherit;
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.15;
  transition: color 0.2s ease;
}

.footer__contact-line {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(246, 241, 229, 0.6);
  font-size: 0.8rem;
  line-height: 1.5;
  text-decoration: none;
}

.footer__contact-line svg {
  flex-shrink: 0;
  color: var(--sage);
  opacity: 0.8;
}

a.footer__contact-line:hover {
  color: var(--cream-on-dark);
}

.footer__heading {
  margin: 0 0 1.2rem;
  color: var(--cream-on-dark);
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.17em;
  line-height: 1.4;
  text-transform: uppercase;
}

.footer__col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
}

.footer__link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: rgba(246, 241, 229, 0.65);
  font-size: 0.85rem;
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.18s ease;
}

.footer__link:hover {
  color: var(--sage);
}

.footer__link--strong {
  margin-top: 0.45rem;
  color: var(--sage);
  font-weight: 700;
}

.footer__area-text {
  margin-bottom: 0.2rem;
  color: rgba(246, 241, 229, 0.6);
  font-size: 0.85rem;
  line-height: 1.65;
}

.footer__areas {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(246, 241, 229, 0.1);
  border-bottom: 1px solid rgba(246, 241, 229, 0.1);
}

.footer__areas-label {
  flex-shrink: 0;
  color: rgba(246, 241, 229, 0.62);
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.footer__area-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.footer__area-chip {
  padding: 0.28rem 0.65rem;
  border: 1px solid rgba(169, 212, 195, 0.18);
  border-radius: 999px;
  color: rgba(246, 241, 229, 0.7);
  font-size: 0.72rem;
  line-height: 1.3;
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    color 0.18s ease,
    background-color 0.18s ease;
}

.footer__area-chip:hover {
  border-color: rgba(169, 212, 195, 0.42);
  background: rgba(169, 212, 195, 0.08);
  color: var(--sage);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem 0 1.8rem;
  color: rgba(246, 241, 229, 0.62);
  font-size: 0.73rem;
  line-height: 1.6;
}

@media (max-width: 1000px) {
  .footer__top {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .footer__brand {
    grid-column: 1 / -1;
    max-width: 540px;
  }
}

@media (max-width: 700px) {
  .footer__top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.2rem 1.5rem;
  }

  .footer__col--area {
    grid-column: 1 / -1;
  }

  .footer__areas {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.6rem;
  }

  .footer__bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.6rem;
  }

  .footer__leaf {
    width: 250px;
    opacity: 0.1;
  }
}

@media (max-width: 420px) {
  .footer__top {
    grid-template-columns: 1fr;
  }

  .footer__col--area {
    grid-column: auto;
  }
}
</style>
