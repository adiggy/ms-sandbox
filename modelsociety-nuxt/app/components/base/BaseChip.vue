<script setup lang="ts">
defineProps<{
  active?: boolean
  size?: 'small' | 'default'
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
.base-chip {
  cursor: pointer;
  border: none;
  border-radius: 9999px;
  padding: 0.5em 1.25em;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  background-color: rgba(0, 0, 0, 0.06);
  color: var(--color-text-secondary);
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &--active {
    background-color: var(--color-text-primary);
    color: white;

    &:hover {
      background-color: var(--color-text-primary);
    }
  }
}
</style>
