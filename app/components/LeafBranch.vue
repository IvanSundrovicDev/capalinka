<template>
  <svg
    class="leaf-branch"
    viewBox="0 0 260 330"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M18 318C60 268 94 219 125 164C151 117 177 70 218 15"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <g stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
      <g transform="translate(38 276) rotate(-58) scale(.72)">
        <path
          d="M0 0C18-20 42-26 64-20C56 3 34 18 0 0Z"
          fill="currentColor"
          fill-opacity=".06"
        />
        <path d="M6 1C20-6 38-12 54-15" />
      </g>
      <g transform="translate(60 243) rotate(-30) scale(.78)">
        <path
          d="M0 0C18-20 42-26 64-20C56 3 34 18 0 0Z"
          fill="currentColor"
          fill-opacity=".06"
        />
        <path d="M6 1C20-6 38-12 54-15" />
      </g>
      <g transform="translate(84 209) rotate(-8) scale(.8)">
        <path
          d="M0 0C18-20 42-26 64-20C56 3 34 18 0 0Z"
          fill="currentColor"
          fill-opacity=".06"
        />
        <path d="M6 1C20-6 38-12 54-15" />
      </g>
      <g transform="translate(106 176) rotate(18) scale(.76)">
        <path
          d="M0 0C18-20 42-26 64-20C56 3 34 18 0 0Z"
          fill="currentColor"
          fill-opacity=".06"
        />
        <path d="M6 1C20-6 38-12 54-15" />
      </g>
      <g transform="translate(128 141) rotate(42) scale(.72)">
        <path
          d="M0 0C18-20 42-26 64-20C56 3 34 18 0 0Z"
          fill="currentColor"
          fill-opacity=".06"
        />
        <path d="M6 1C20-6 38-12 54-15" />
      </g>
      <g transform="translate(151 104) rotate(60) scale(.66)">
        <path
          d="M0 0C18-20 42-26 64-20C56 3 34 18 0 0Z"
          fill="currentColor"
          fill-opacity=".06"
        />
        <path d="M6 1C20-6 38-12 54-15" />
      </g>
      <g transform="translate(176 64) rotate(78) scale(.6)">
        <path
          d="M0 0C18-20 42-26 64-20C56 3 34 18 0 0Z"
          fill="currentColor"
          fill-opacity=".06"
        />
        <path d="M6 1C20-6 38-12 54-15" />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    soft?: boolean
  }>(),
  { soft: false },
)
</script>

<style scoped>
.leaf-branch {
  color: var(--sage);
  pointer-events: none;
}

.leaf-branch.soft {
  color: rgba(53, 111, 94, 0.16);
}
</style>
