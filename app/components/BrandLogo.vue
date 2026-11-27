<template>
  <NuxtLink
    to="/"
    class="brand"
    :class="[`brand--${size}`, { 'brand--stacked': stacked }]"
  >
    <LogoMark class="brand__mark" />
    <span class="brand__copy">
      <span class="brand__name">Obrt Čapalinka</span>
      <span v-if="tagline" class="brand__owner">vl. Sanela Šimara</span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg' | 'xl'
    tagline?: boolean
    stacked?: boolean
  }>(),
  {
    size: 'md',
    tagline: true,
    stacked: false,
  },
)
</script>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--ink);
  line-height: 1;
  text-decoration: none;
}

.brand__mark {
  width: auto;
  flex-shrink: 0;
  color: currentColor;
  transition: transform 0.25s ease;
}

.brand:hover .brand__mark {
  transform: translateY(-1px) rotate(-1deg);
}

.brand__copy {
  display: flex;
  flex-direction: column;
  gap: 0.34rem;
  min-width: 0;
}

.brand__name {
  font-family: var(--font-serif);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 0.95;
  white-space: nowrap;
}

.brand__owner {
  color: currentColor;
  font-family: var(--font-sans);
  font-size: 0.53rem;
  font-weight: 650;
  letter-spacing: 0.16em;
  line-height: 1.1;
  opacity: 0.72;
  text-transform: uppercase;
  white-space: nowrap;
}

.brand--sm .brand__mark {
  height: 40px;
}

.brand--sm .brand__name {
  font-size: 1.08rem;
}

.brand--sm .brand__owner {
  font-size: 0.47rem;
}

.brand--md .brand__mark {
  height: 52px;
}

.brand--md .brand__name {
  font-size: 1.33rem;
}

.brand--lg .brand__mark {
  height: 72px;
}

.brand--lg .brand__name {
  font-size: 1.95rem;
}

.brand--lg .brand__owner {
  font-size: 0.62rem;
}

.brand--xl .brand__mark {
  height: 122px;
}

.brand--xl .brand__name {
  font-size: 2.65rem;
}

.brand--xl .brand__owner {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
}

.brand--stacked {
  flex-direction: column;
  gap: 0.55rem;
  text-align: center;
}

.brand--stacked .brand__copy {
  align-items: center;
}

@media (max-width: 640px) {
  .brand--md .brand__mark {
    height: 44px;
  }

  .brand--md .brand__name {
    font-size: 1.15rem;
  }

  .brand--md .brand__owner {
    font-size: 0.48rem;
  }

  .brand--xl .brand__mark {
    height: 92px;
  }

  .brand--xl .brand__name {
    font-size: 2rem;
  }

  .brand--xl .brand__owner {
    font-size: 0.62rem;
  }
}
</style>
