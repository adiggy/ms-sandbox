<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  src: string | null
  name: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'circle' | 'portrait'
}>()

// For circle variant, this is the diameter
// For portrait variant, this is the height (width calculated from 23:32 ratio)
const sizeMap = {
  sm: 32,
  md: 40,
  lg: 64,
}

const avatarHeight = computed(() => sizeMap[props.size ?? 'md'])
const avatarWidth = computed(() => {
  if (props.variant === 'portrait') {
    return Math.round(avatarHeight.value * (23 / 32))
  }
  return avatarHeight.value
})

const initials = computed(() => {
  const parts = props.name.trim().split(' ')
  if (parts.length >= 2 && parts[0] && parts[1]) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }
  return props.name.slice(0, 2).toUpperCase()
})

const isPortrait = computed(() => props.variant === 'portrait')
</script>

<template>
  <div
    :class="['base-avatar', { 'base-avatar--portrait': isPortrait }]"
    :style="{ width: `${avatarWidth}px`, height: `${avatarHeight}px` }"
  >
    <img v-if="src" :src="src" :alt="name" class="base-avatar__image" />
    <span v-else class="base-avatar__initials">{{ initials }}</span>
  </div>
</template>

<style scoped lang="scss">
.base-avatar {
  flex-shrink: 0;
  background-color: var(--color-text-tertiary);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &--portrait {
    border-radius: 4px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__initials {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 0.65em;
    color: white;
  }
}
</style>
