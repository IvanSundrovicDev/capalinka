<template>
  <component :is="icon" aria-hidden="true" />
</template>

<script setup lang="ts">
import {
  ClipboardCheck,
  Sofa,
  SprayCan,
  Sprout,
  Truck,
} from 'lucide-vue-next'
import type { ServiceIcon } from '~/data/services'

const props = defineProps<{
  name: ServiceIcon
}>()

const icons: Record<ServiceIcon, Component> = {
  spray: SprayCan,
  sofa: Sofa,
  'clipboard-check': ClipboardCheck,
  sprout: Sprout,
  truck: Truck,
}

const icon = computed(() => icons[props.name] || SprayCan)
</script>
