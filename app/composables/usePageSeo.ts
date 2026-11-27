import { webPageSchema } from '~/utils/schema'

interface PageSeoOptions {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
}

export function usePageSeo(options: PageSeoOptions) {
  const site = useSite()
  const canonical = new URL(options.path, `${site.url}/`).toString()
  const image = new URL(options.image || '/og-image.png', `${site.url}/`).toString()

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: options.type || 'website',
    ogUrl: canonical,
    ogImage: image,
    ogImageAlt: options.imageAlt || `${site.name} – ${site.city}`,
    ogLocale: 'hr_HR',
    ogSiteName: site.name,
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
    twitterImageAlt: options.imageAlt || `${site.name} – ${site.city}`,
    articlePublishedTime: options.publishedTime,
    articleModifiedTime: options.modifiedTime,
    robots: options.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' },
    ],
  })

  useJsonLd(
    webPageSchema({
      site,
      title: options.title,
      description: options.description,
      path: options.path,
    }),
    'ld-webpage',
  )
}
