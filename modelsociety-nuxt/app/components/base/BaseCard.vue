<script setup lang="ts">
defineProps<{
  elevation?: number
  hover?: boolean
}>()
</script>

<template>
  <v-card
    :elevation="elevation ?? 1"
    :class="{ 'base-card--hover': hover }"
    class="base-card"
  >
    <slot />
  </v-card>
</template>

<style scoped lang="scss">
.base-card {
  background-color: rgb(var(--v-theme-surface));
  border-radius: 8px;
  overflow: hidden;

  &--hover {
    transition: box-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  }
}
</style>
