<script setup lang="ts">
const props = defineProps<{
  thumbnails: string[]
  totalCount: number
  maxVisible?: number
}>()

const maxThumbnails = props.maxVisible ?? 18

const visibleThumbnails = computed(() => props.thumbnails.slice(0, maxThumbnails))
const hasMore = computed(() => props.totalCount > maxThumbnails)
</script>

<template>
  <div class="thumbnail-grid">
    <div class="thumbnail-grid__images">
      <button
        v-for="(url, index) in visibleThumbnails"
        :key="index"
        class="thumbnail-grid__item"
      >
        <img :src="url" :alt="`Thumbnail ${index + 1}`" class="thumbnail-grid__image" loading="lazy" />
      </button>
    </div>
    <div v-if="hasMore" class="thumbnail-grid__footer">
      <button class="btn btn--tertiary btn--small">
        <span class="btn__text">Show All ({{ totalCount }})</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thumbnail-grid {
  background-color: var(--color-text-primary);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__images {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    gap: 0.5rem;
  }

  &__item {
    aspect-ratio: 1;
    border: none;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    background: transparent;

    &:hover {
      opacity: 0.8;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}

@media (max-width: 1199px) {
  .thumbnail-grid {
    &__images {
      grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
    }
  }
}

@media (max-width: 599px) {
  .thumbnail-grid {
    padding: 1rem;

    &__images {
      grid-template-columns: repeat(auto-fill, minmax(3.5rem, 1fr));
    }
  }
}
</style>
