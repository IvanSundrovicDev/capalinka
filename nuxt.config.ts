const siteUrl = (
  process.env.NUXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  'https://www.capalinka.hr'
).replace(/\/$/, '')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
  css: [
    '@fontsource-variable/playfair-display/index.css',
    '@fontsource-variable/playfair-display/wght-italic.css',
    '@fontsource-variable/mulish/index.css',
    '~/assets/css/main.css',
  ],
  site: {
    url: siteUrl,
    name: 'Obrt Čapalinka',
    description:
      'Čišćenje apartmana, stambenih prostora, završna čišćenja, uređenje okoliša i prijevoz robe i materijala u Donjem Miholjcu i okolici.',
    defaultLocale: 'hr',
  },
  runtimeConfig: {
    public: {
      siteUrl,
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'hr' },
      meta: [
        { name: 'theme-color', content: '#F7F4EC' },
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'geo.region', content: 'HR-14' },
        { name: 'geo.placename', content: 'Donji Miholjac' },
        { name: 'geo.position', content: '45.761;18.165' },
        { name: 'ICBM', content: '45.761, 18.165' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  sitemap: {
    autoLastmod: true,
    exclude: ['/politika-privatnosti'],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
      routes: [
        '/',
        '/usluge',
        '/usluge/ciscenje-apartmana',
        '/usluge/stambeni-prostori',
        '/usluge/zavrsna-ciscenja',
        '/usluge/uredenje-okolisa',
        '/prijevoz-robe-i-materijala',
        '/o-nama',
        '/galerija',
        '/podrucja',
        '/kontakt',
        '/politika-privatnosti',
      ],
    },
  },
})
