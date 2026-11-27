<template>
  <div>
    <PageHero
      eyebrow="Usluge"
      title="Čišćenje, uređenje okoliša i prijevoz za vaš prostor"
      intro="Od apartmana koji čeka nove goste do dvorišta koje treba urediti i pošiljke koja mora stići na odredište. U Donjem Miholjcu i okolici pružamo praktične usluge koje se dogovaraju jasno, prema vašem prostoru i terminu."
      :breadcrumbs="[{ label: 'Usluge' }]"
    >
      <template #actions>
        <div class="btn-row">
          <NuxtLink class="btn" to="/kontakt">
            Zatražite ponudu
            <ArrowRight :size="18" aria-hidden="true" />
          </NuxtLink>
          <a class="btn btn--outline" :href="`tel:${site.phoneHref}`">
            <Phone :size="17" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
        </div>
      </template>
    </PageHero>

    <section class="section">
      <div class="container">
        <SectionIntro
          eyebrow="Naša ponuda"
          title="Odaberite uslugu, a mi <em class='italic-accent'>dogovaramo detalje</em>"
          text="Svaka usluga može se dogovoriti jednokratno ili prema potrebi. Nije potrebno unaprijed znati svaki detalj – dovoljno je opisati situaciju, a mi ćemo predložiti opseg."
        />

        <div class="services-page__grid">
          <ServiceCard
            v-for="service in services"
            :key="service.path"
            :service="service"
          />
        </div>
      </div>
    </section>

    <section class="section section--sage">
      <div class="container">
        <div class="services-values__head">
          <div>
            <span class="eyebrow">Naš standard</span>
            <h2>Jasan dogovor, <em class="italic-accent">uredan rezultat</em></h2>
          </div>
          <p>
            Usluga je dobra kada znate što ćete dobiti. Zato prije početka
            preciziramo opseg, vrijeme i sve što je potrebno pripremiti.
          </p>
        </div>

        <div class="services-values__grid">
          <article class="services-value">
            <span class="icon-badge">
              <CalendarDays :size="24" aria-hidden="true" />
            </span>
            <h3>Termin po dogovoru</h3>
            <p>
              Predlažemo termin koji odgovara vama i raspoloživosti. Za sezonu i
              veće projekte preporučujemo rezervaciju unaprijed.
            </p>
          </article>
          <article class="services-value">
            <span class="icon-badge">
              <HeartHandshake :size="24" aria-hidden="true" />
            </span>
            <h3>Prostor s poštovanjem</h3>
            <p>
              Ponašamo se prema vašem domu, apartmanu ili radnom prostoru s
              pažnjom – bez nepotrebnog nereda i neopreznog rukovanja.
            </p>
          </article>
          <article class="services-value">
            <span class="icon-badge">
              <ShieldCheck :size="24" aria-hidden="true" />
            </span>
            <h3>Dogovor bez iznenađenja</h3>
            <p>
              Prije dolaska znate što je uključeno i što ostaje izvan opsega. Ako
              se pojavi dodatna potreba, o njoj razgovaramo otvoreno.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container">
        <SectionIntro
          eyebrow="Kombinacije"
          title="Ponekad je najbolje <em class='italic-accent'>povezati poslove</em>"
          text="Ako na istom objektu treba više od jedne stvari, dogovorimo redoslijed kako se poslovi ne bi preklapali i kako bi prostor bio spreman u jednom terminu."
        />

        <div class="services-combos">
          <NuxtLink class="combo" to="/usluge/ciscenje-apartmana">
            <span class="combo__num">01</span>
            <h3>Apartman + okoliš</h3>
            <p>
              Priprema interijera za goste i uređenje dvorišta ili terase prije
              početka sezone.
            </p>
            <span class="link-arrow">
              Čišćenje apartmana
              <ArrowUpRight :size="16" aria-hidden="true" />
            </span>
          </NuxtLink>
          <NuxtLink class="combo" to="/usluge/zavrsna-ciscenja">
            <span class="combo__num">02</span>
            <h3>Radovi + završno čišćenje</h3>
            <p>
              Nakon renovacije prostor treba temeljito očistiti prije useljenja,
              namještanja ili dolaska gostiju.
            </p>
            <span class="link-arrow">
              Završno čišćenje
              <ArrowUpRight :size="16" aria-hidden="true" />
            </span>
          </NuxtLink>
          <NuxtLink class="combo" to="/prijevoz-robe-i-materijala">
            <span class="combo__num">03</span>
            <h3>Materijal + prijevoz</h3>
            <p>
              Prijevoz robe i materijala do objekta u kojem se uređuje, čisti ili
              oprema prostor.
            </p>
            <span class="link-arrow">
              Prijevoz robe i materijala
              <ArrowUpRight :size="16" aria-hidden="true" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container services-faq">
        <div class="services-faq__intro">
          <span class="eyebrow">Pitanja i odgovori</span>
          <h2>Prije prvog <em class="italic-accent">dogovora</em></h2>
          <p>
            Kratke informacije koje pomažu da uslugu odaberete bez nagađanja. Ako
            trebate dodatnu procjenu, javite nam se.
          </p>
          <NuxtLink to="/kontakt" class="link-arrow">
            Pošaljite upit
            <ArrowRight :size="17" aria-hidden="true" />
          </NuxtLink>
        </div>
        <FaqList :items="serviceFaqs" />
      </div>
    </section>

    <CtaBand
      title="Niste sigurni koja vam usluga treba?"
      text="Opišite nam situaciju i lokaciju, a mi ćemo predložiti najpraktičnije rješenje – bez obveze i bez kompliciranja."
    />
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  HeartHandshake,
  Phone,
  ShieldCheck,
} from 'lucide-vue-next'
import { services } from '~/data/services'
import { faqSchema } from '~/utils/schema'

const site = useSite()

const serviceFaqs = [
  {
    question: 'Kako odabrati pravu uslugu za svoj prostor?',
    answer:
      'Ako pripremate apartman za goste, odaberite čišćenje apartmana. Za dom ili stan odaberite stambene prostore, a nakon renovacije završno čišćenje. Uređenje okoliša odnosi se na dvorišta i vanjske površine, dok je prijevoz robe i materijala namijenjen prijevozu pošiljaka.',
  },
  {
    question: 'Može li se dogovoriti više usluga u istom terminu?',
    answer:
      'Da, uz prethodni dogovor. Neke se usluge mogu izvesti istog dana, dok druge zahtijevaju različit redoslijed. Predložit ćemo raspored koji ima smisla za vaš prostor ili pošiljku.',
  },
  {
    question: 'Radite li vikendom?',
    answer:
      'Termini se dogovaraju prema raspoloživosti, uključujući vikende kada je to moguće. Za vikend termine najbolje je javiti se što ranije kako bismo ih uskladili.',
  },
  {
    question: 'Kako se formira cijena usluge?',
    answer:
      'Cijena ovisi o opsegu posla, veličini prostora ili pošiljke te lokaciji. Nakon kratkog opisa dajemo okvirnu ponudu, a konačne detalje potvrđujemo prije dolaska.',
  },
  {
    question: 'Radite li izvan Donjeg Miholjca?',
    answer:
      'Da, prema dogovoru. Pokrivamo prigradska naselja, susjedne općine i šire područje istočne Slavonije. Za udaljenije lokacije javite se unaprijed kako bismo uskladili termin.',
  },
]

usePageSeo({
  title: 'Usluge čišćenja i prijevoza u Donjem Miholjcu',
  description:
    'Pregled usluga Obrta Čapalinka u Donjem Miholjcu: čišćenje apartmana i stanova, završna čišćenja, uređenje okoliša i prijevoz robe i materijala.',
  path: '/usluge',
})

useJsonLd(
  breadcrumbSchema([{ label: 'Početna', to: '/' }, { label: 'Usluge' }], site),
  'ld-breadcrumb',
)
useJsonLd(faqSchema(serviceFaqs), 'ld-faq')
</script>

<style scoped>
.services-page__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.services-page__grid :deep(.service-card:last-child) {
  grid-column: 1 / -1;
}

.services-values__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: end;
  margin-bottom: 2.6rem;
}

.services-values__head h2 {
  margin-bottom: 0;
}

.services-values__head > p {
  max-width: 46ch;
  margin: 0 0 0.3rem;
  color: var(--ink-soft);
}

.services-values__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.services-value {
  padding: 1.7rem;
  border: 1px solid var(--line-green);
  border-radius: var(--radius);
  background: rgba(252, 250, 245, 0.66);
}

.services-value h3 {
  margin: 1.2rem 0 0.55rem;
  font-size: 1.35rem;
}

.services-value p {
  color: var(--ink-soft);
  font-size: 0.87rem;
  line-height: 1.68;
}

.services-combos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.combo {
  display: flex;
  flex-direction: column;
  padding: 1.7rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--cream);
  color: var(--ink);
  text-decoration: none;
  transition:
    border-color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;
}

.combo:hover {
  border-color: var(--sage-deep);
  box-shadow: var(--shadow-sm);
  transform: translateY(-3px);
}

.combo__num {
  margin-bottom: 1.2rem;
  color: var(--sage-dark);
  font-family: var(--font-serif);
  font-size: 1.15rem;
}

.combo h3 {
  margin-bottom: 0.55rem;
  font-size: 1.4rem;
}

.combo p {
  flex: 1;
  margin-bottom: 1.2rem;
  color: var(--ink-soft);
  font-size: 0.86rem;
  line-height: 1.65;
}

.combo .link-arrow {
  margin-top: auto;
}

.services-faq {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

.services-faq__intro h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.9rem, 3.2vw, 2.8rem);
}

.services-faq__intro p {
  max-width: 40ch;
  color: var(--ink-soft);
  font-size: 0.94rem;
  line-height: 1.7;
}

@media (max-width: 960px) {
  .services-values__head {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .services-values__grid {
    grid-template-columns: 1fr;
  }

  .services-combos {
    grid-template-columns: 1fr;
  }

  .services-faq {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .services-faq__intro {
    max-width: 580px;
  }
}

@media (max-width: 700px) {
  .services-page__grid {
    grid-template-columns: 1fr;
  }

  .services-page__grid :deep(.service-card:last-child) {
    grid-column: auto;
  }
}
</style>
