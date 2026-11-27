<template>
  <ServiceDetail :service="service" />
</template>

<script setup lang="ts">
import { getServiceBySlug } from '~/data/services'
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '~/utils/schema'

const route = useRoute()
const site = useSite()
const service = getServiceBySlug(String(route.params.slug))

if (!service || service.path !== `/usluge/${route.params.slug}`) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Usluga nije pronađena',
    fatal: true,
  })
}

usePageSeo({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
  imageAlt: service.imageAlt,
})

useJsonLd(
  breadcrumbSchema(
    [
      { label: 'Početna', to: '/' },
      { label: 'Usluge', to: '/usluge' },
      { label: service.name, to: service.path },
    ],
    site,
  ),
  'ld-breadcrumb',
)
useJsonLd(serviceSchema(service, site), 'ld-service')
useJsonLd(faqSchema(service.faqs), 'ld-faq')
</script>
