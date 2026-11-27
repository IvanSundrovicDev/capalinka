<template>
  <div class="section-head" :class="{ 'section-head--center': center }">
    <div class="section-head__copy">
      <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
      <h2 v-html="title" />
      <p v-if="center && text" class="lead" v-html="text" />
    </div>
    <div v-if="!center && (text || linkTo)" class="section-head__aside">
      <p v-if="text" v-html="text" />
      <NuxtLink v-if="linkTo && linkLabel" :to="linkTo" class="link-arrow">
        {{ linkLabel }}
        <ArrowRight :size="17" aria-hidden="true" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    text?: string
    linkTo?: string
    linkLabel?: string
    center?: boolean
  }>(),
  {
    eyebrow: '',
    text: '',
    linkTo: '',
    linkLabel: '',
    center: false,
  },
)
</script>
