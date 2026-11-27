<template>
  <section class="page-hero">
    <LeafBranch class="page-hero__leaf" soft />
    <div class="page-hero__dots decorative-dots" aria-hidden="true" />
    <div class="container page-hero__inner">
      <Breadcrumbs :items="breadcrumbs" />
      <div class="page-hero__layout" :class="{ 'has-aside': !!$slots.aside }">
        <div class="page-hero__content">
          <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
          <h1>{{ title }}</h1>
          <p v-if="intro" class="lead">{{ intro }}</p>
          <div v-if="$slots.actions" class="page-hero__actions">
            <slot name="actions" />
          </div>
        </div>
        <div v-if="$slots.aside" class="page-hero__aside">
          <slot name="aside" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    intro?: string
    breadcrumbs: { label: string; to?: string }[]
  }>(),
  {
    eyebrow: '',
    intro: '',
  },
)
</script>

<style scoped>
.page-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(2rem, 4vw, 3.2rem) 0 clamp(3.2rem, 7vw, 6rem);
  border-bottom: 1px solid var(--line);
  background:
    radial-gradient(circle at 88% 12%, rgba(169, 212, 195, 0.35), transparent 28rem),
    linear-gradient(180deg, var(--paper) 0%, var(--cream) 100%);
}

.page-hero__inner {
  position: relative;
  z-index: 1;
}

.page-hero__layout.has-aside {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.72fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}

.page-hero__content {
  max-width: 860px;
}

.page-hero h1 {
  margin-bottom: 1.4rem;
  font-size: clamp(2.6rem, 5.4vw, 4.6rem);
}

.has-aside h1 {
  font-size: clamp(2.4rem, 4.4vw, 3.9rem);
}

.page-hero .lead {
  max-width: 68ch;
}

.page-hero__aside {
  position: relative;
  min-width: 0;
}

.page-hero__actions {
  margin-top: 2rem;
}

.page-hero__leaf {
  position: absolute;
  top: -70px;
  right: -30px;
  width: min(36vw, 420px);
  opacity: 0.7;
  transform: rotate(170deg);
}

.page-hero__dots {
  position: absolute;
  right: 7%;
  bottom: 8%;
  width: 140px;
  height: 100px;
  opacity: 0.4;
}

@media (max-width: 900px) {
  .page-hero__layout.has-aside {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .page-hero__aside {
    max-width: 560px;
  }
}

@media (max-width: 700px) {
  .page-hero__leaf {
    right: -110px;
    width: 300px;
    opacity: 0.55;
  }

  .page-hero__dots {
    display: none;
  }
}
</style>
