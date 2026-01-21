<script setup lang="ts">
defineProps<{
  active?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    :class="['base-chip', { 'base-chip--active': active }]"
    @click="emit('click')"
  >
    <span class="text-eyebrow">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
// BaseChip uses btn--tertiary (inactive) and btn--secondary (active) styling
// Values kept in sync with shared button system in main.scss
.base-chip {
  cursor: pointer;
  border: none;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  background-color: rgba(0, 0, 0, 0.06);
  color: var(--color-text-primary);
  transition: all 0.15s ease;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.15);
  }

  &--active {
    background-color: var(--color-text-primary);
    color: white;

    &:hover {
      background-color: #000;
    }

    &:active {
      background-color: #333;
    }
  }
}
</style>
