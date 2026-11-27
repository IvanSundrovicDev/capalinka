<template>
  <ServiceDetail :service="transportService" />
</template>

<script setup lang="ts">
import { transportService } from '~/data/services'
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '~/utils/schema'

const site = useSite()

usePageSeo({
  title: transportService.metaTitle,
  description: transportService.metaDescription,
  path: transportService.path,
  imageAlt: transportService.imageAlt,
})

useJsonLd(
  breadcrumbSchema(
    [
      { label: 'Početna', to: '/' },
      { label: 'Usluge', to: '/usluge' },
      { label: transportService.name, to: transportService.path },
    ],
    site,
  ),
  'ld-breadcrumb',
)
useJsonLd(serviceSchema(transportService, site), 'ld-service')
useJsonLd(faqSchema(transportService.faqs), 'ld-faq')
</script>
