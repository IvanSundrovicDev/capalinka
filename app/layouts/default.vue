<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Preskoči na sadržaj</a>
    <AppHeader />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
    <MobileCallBar />
  </div>
</template>

<script setup lang="ts">
// Layout wrapper for the public website.
</script>
