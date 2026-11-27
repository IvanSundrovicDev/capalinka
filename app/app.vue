<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { services } from '~/data/services'
import { localBusinessSchema, websiteSchema } from '~/utils/schema'

const site = useSite()

useHead({
  titleTemplate: '%s | Obrt Čapalinka',
})

useJsonLd(localBusinessSchema(site, services), 'ld-local-business')
useJsonLd(websiteSchema(site), 'ld-website')
</script>
