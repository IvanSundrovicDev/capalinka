export interface GalleryItem {
  id: string
  src: string
  title: string
  category: string
  caption: string
  alt: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'apartman-spreman-za-goste',
    src: '/images/gallery/apartment-bedroom.svg',
    title: 'Apartman spreman za goste',
    category: 'Apartmani',
    caption: 'Svježa posteljina, uredne površine i miran kutak za odmor.',
    alt: 'Ilustracija urednog apartmana s krevetom, prozorom i biljkom – priprema za goste',
  },
  {
    id: 'udobnost-dnevnog-boravka',
    src: '/images/gallery/living-room.svg',
    title: 'Udobnost dnevnog boravka',
    category: 'Stambeni prostori',
    caption: 'Čistoća koja poštuje namještaj, materijale i svakodnevni život.',
    alt: 'Ilustracija čistog dnevnog boravka s kaučem, stolićem, policom i biljkom',
  },
  {
    id: 'novi-pocetak-nakon-radova',
    src: '/images/gallery/final-cleaning.svg',
    title: 'Novi početak nakon radova',
    category: 'Završna čišćenja',
    caption: 'Od fine prašine do posljednjeg detalja prije useljenja.',
    alt: 'Ilustracija završnog čišćenja s ljestvama, kantom i blistavim prozorom',
  },
  {
    id: 'uredno-dvoriste',
    src: '/images/gallery/garden.svg',
    title: 'Uređeno dvorište',
    category: 'Uređenje okoliša',
    caption: 'Uredne staze, oblikovana živica i prostor koji poziva na boravak.',
    alt: 'Ilustracija uređenog dvorišta s kućom, živicom, stazom i drvetom',
  },
  {
    id: 'roba-na-pravom-putu',
    src: '/images/gallery/transport.svg',
    title: 'Roba na pravom putu',
    category: 'Prijevoz',
    caption: 'Prijevoz robe i materijala uz jasan dogovor i pažljivo rukovanje.',
    alt: 'Ilustracija kombija za prijevoz robe s kutijama i cestom',
  },
  {
    id: 'detalji-u-kuhinji',
    src: '/images/gallery/kitchen.svg',
    title: 'Detalji u kuhinji',
    category: 'Stambeni prostori',
    caption: 'Čiste radne površine, sjajne slavine i uredan početak dana.',
    alt: 'Ilustracija uredne kuhinje s elementima, sudoperom i biljkom',
  },
  {
    id: 'svjezina-kupaonice',
    src: '/images/gallery/bathroom.svg',
    title: 'Svježina kupaonice',
    category: 'Stambeni prostori',
    caption: 'Blistave površine i osjećaj čistoće u svakom detalju.',
    alt: 'Ilustracija čiste kupaonice s kadom, ogledalom i biljkom',
  },
  {
    id: 'uredan-poslovni-prostor',
    src: '/images/gallery/office.svg',
    title: 'Uredan poslovni prostor',
    category: 'Poslovni prostori',
    caption: 'Prostor u kojem se dobro radi i rado prima goste.',
    alt: 'Ilustracija urednog poslovnog prostora s radnim stolom, računalom i biljkom',
  },
]

export function getGalleryCategoryCount(category: string) {
  return galleryItems.filter((item) => item.category === category).length
}
