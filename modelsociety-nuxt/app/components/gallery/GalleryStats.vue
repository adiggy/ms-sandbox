<script setup lang="ts">
defineProps<{
  imageCount: number
  views: number
  comments: number
}>()

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toString()
}
</script>

<template>
  <div class="gallery-stats">
    <div class="gallery-stats__item">
      <span class="gallery-stats__icon">
        <v-icon size="16">mdi-image</v-icon>
      </span>
      <span class="gallery-stats__value text-caption">{{ formatNumber(imageCount) }}</span>
    </div>
    <div class="gallery-stats__item">
      <span class="gallery-stats__icon">
        <v-icon size="16">mdi-eye</v-icon>
      </span>
      <span class="gallery-stats__value text-caption">{{ formatNumber(views) }}</span>
    </div>
    <div class="gallery-stats__item">
      <span class="gallery-stats__icon">
        <v-icon size="16">mdi-comment</v-icon>
      </span>
      <span class="gallery-stats__value text-caption">{{ formatNumber(comments) }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery-stats {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &__item {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    background-color: rgba(0, 0, 0, 0.06); // matches btn--tertiary
    border-radius: 6px;
    line-height: 1;
  }

  &__value {
    color: var(--color-text-tertiary);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  :deep(.v-icon) {
    color: var(--color-text-tertiary);
  }
}
</style>
