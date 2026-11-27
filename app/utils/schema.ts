import type { ServiceContent, ServiceFaq } from '~/data/services'
import { serviceAreas } from '~/data/site'
import type { SiteInfo } from '~/composables/useSite'

function absolute(path: string, siteUrl: string) {
  return new URL(path, `${siteUrl}/`).toString()
}

export function localBusinessSchema(site: SiteInfo, services: ServiceContent[]) {
  const businessId = `${site.url}/#business`

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': businessId,
    name: site.name,
    legalName: site.legalName,
    alternateName: 'Čapalinka Donji Miholjac',
    slogan: site.tagline,
    description: site.longDescription,
    url: `${site.url}/`,
    telephone: site.phoneHref,
    email: site.email,
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/logo-mark.png`,
    priceRange: site.priceRange,
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      postalCode: site.postalCode,
      addressRegion: site.county,
      addressCountry: site.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.lat,
      longitude: site.lng,
    },
    founder: {
      '@type': 'Person',
      name: site.owner,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phoneHref,
      contactType: 'customer service',
      availableLanguage: ['hr'],
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: site.county,
      },
      ...serviceAreas.map((name) => ({
        '@type': 'City',
        name,
      })),
    ],
    knowsLanguage: ['hr'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usluge Obrta Čapalinka',
      numberOfItems: services.length,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.shortDescription,
          url: absolute(service.path, site.url),
          provider: { '@id': businessId },
          areaServed: serviceAreas.map((name) => ({
            '@type': 'City',
            name,
          })),
        },
      })),
    },
  }
}

export function websiteSchema(site: SiteInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    description: site.shortDescription,
    inLanguage: 'hr-HR',
    publisher: {
      '@id': `${site.url}/#business`,
    },
  }
}

export function webPageSchema(options: {
  site: SiteInfo
  title: string
  description: string
  path: string
}) {
  const pageUrl = absolute(options.path, options.site.url)

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: options.title,
    description: options.description,
    inLanguage: 'hr-HR',
    isPartOf: {
      '@id': `${options.site.url}/#website`,
    },
    about: {
      '@id': `${options.site.url}/#business`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${options.site.url}/og-image.png`,
    },
  }
}

export function breadcrumbSchema(
  items: { label: string; to?: string }[],
  site: SiteInfo,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.to ? { item: absolute(item.to, site.url) } : {}),
    })),
  }
}

export function serviceSchema(service: ServiceContent, site: SiteInfo) {
  const pageUrl = absolute(service.path, site.url)

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: pageUrl,
    provider: {
      '@id': `${site.url}/#business`,
    },
    areaServed: serviceAreas.map((name) => ({
      '@type': 'City',
      name,
    })),
    mainEntityOfPage: {
      '@id': `${pageUrl}#webpage`,
    },
  }
}

export function faqSchema(faqs: ServiceFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
