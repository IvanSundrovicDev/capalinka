export const siteData = {
  name: 'Obrt Čapalinka',
  legalName: 'Obrt Čapalinka, vl. Sanela Šimara',
  owner: 'Sanela Šimara',
  ownerRole: 'vlasnica obrta',
  phoneDisplay: '095 509 4124',
  phoneHref: '+385955094124',
  email: 'kontakt@capalinka.hr',
  city: 'Donji Miholjac',
  postalCode: '31540',
  county: 'Osječko-baranjska županija',
  country: 'Hrvatska',
  countryCode: 'HR',
  lat: 45.761,
  lng: 18.165,
  priceRange: '€€',
  hoursLabel: 'Termini po dogovoru',
  tagline: 'Čistoća koja se osjeti, briga koja se pamti.',
  shortDescription:
    'Čišćenje apartmana i stambenih prostora, završna čišćenja, uređenje okoliša te prijevoz robe i materijala u Donjem Miholjcu i okolici.',
  longDescription:
    'Obrt Čapalinka lokalni je obrt iz Donjeg Miholjca posvećen brizi o prostoru. Nudimo čišćenje apartmana i stambenih prostora, završna čišćenja nakon radova, uređenje okoliša te prijevoz robe i materijala. Radimo temeljito, po dogovoru i s poštovanjem prema svakom domu, apartmanu ili poslovnom prostoru.',
} as const

export const mainNavigation = [
  { label: 'Početna', to: '/' },
  { label: 'Usluge', to: '/usluge' },
  { label: 'Galerija', to: '/galerija' },
  { label: 'O nama', to: '/o-nama' },
  { label: 'Kontakt', to: '/kontakt' },
] as const

export const areaGroups = [
  {
    title: 'Donji Miholjac i prigradska naselja',
    description:
      'Naša matična adresa i najbliže područje – za redovite termine, brze dogovore i dolazak bez dugih putovanja.',
    places: [
      'Donji Miholjac',
      'Golinci',
      'Miholjački Poreč',
      'Podgajci Podravski',
      'Radikovci',
      'Rakitovica',
      'Sveti Đurađ',
    ],
  },
  {
    title: 'Susjedne općine',
    description:
      'Dolazimo i u mjesta u neposrednoj okolici Donjeg Miholjca, uz dogovor o terminu i opsegu posla.',
    places: [
      'Viljevo',
      'Magadenovac',
      'Marijanci',
      'Podravska Moslavina',
      'Čađavica',
      'Sopje',
    ],
  },
  {
    title: 'Šira okolica',
    description:
      'Za veće projekte, završna čišćenja i prijevoz robe dogovaramo dolazak i na širem području istočne Slavonije.',
    places: ['Valpovo', 'Belišće', 'Osijek', 'Našice', 'Slatina', 'Virovitica'],
  },
] as const

export const serviceAreas = areaGroups.flatMap((group) => [...group.places])

export const galleryCategories = [
  'Sve',
  'Apartmani',
  'Stambeni prostori',
  'Završna čišćenja',
  'Uređenje okoliša',
  'Prijevoz',
  'Poslovni prostori',
] as const
