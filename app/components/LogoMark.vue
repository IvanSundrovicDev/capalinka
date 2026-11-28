<template>
  <img
    :src="tone === 'light' ? '/logo-mark-light.svg' : '/logo-mark.svg'"
    class="logo-mark"
    width="390"
    height="372"
    alt=""
    aria-hidden="true"
    decoding="async"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: 'dark' | 'light'
  }>(),
  {
    tone: 'dark',
  },
)
</script>

<style scoped>
.logo-mark {
  display: block;
  width: auto;
  height: auto;
}
</style>
