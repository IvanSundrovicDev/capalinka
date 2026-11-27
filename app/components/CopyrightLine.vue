<template>
  <span class="copyright-line">
    © {{ currentYear }} Obrt Čapalinka · vl. Sanela Šimara · Sva prava
    pridržana.
  </span>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.copyright-line {
  display: block;
  line-height: inherit;
}
</style>
