<script setup lang="ts">
import { ref } from 'vue'
import { mockGalleries } from '~/data/mock/galleries'

const categories = [
  'RECENTLY UPDATED',
  'NEWEST',
  'SHUFFLE',
  'MOST POPULAR',
  'MOST COMMENTED',
  'MOST VIEWED',
]

const selectedCategory = ref('RECENTLY UPDATED')

function selectCategory(category: string) {
  selectedCategory.value = category
}
</script>

<template>
  <div class="galleries-page">
    <section class="galleries-page__header">
      <h1 class="galleries-page__title text-headline">Curated galleries</h1>
    </section>

    <section class="galleries-page__filters scrollbar-hidden">
      <div class="galleries-page__filter-chips">
        <BaseChip
          v-for="category in categories"
          :key="category"
          :active="selectedCategory === category"
          size="small"
          @click="selectCategory(category)"
        >
          {{ category }}
        </BaseChip>
      </div>
    </section>

    <section class="galleries-page__content">
      <GalleryCard
        v-for="gallery in mockGalleries"
        :key="gallery.galleryId"
        :gallery="gallery"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
.galleries-page {
  padding: 0 1.5rem;

  &__header {
    text-align: center;
    padding: 3rem 0 2rem;
  }

  &__title {
    font-size: 4rem;
    color: var(--color-text-primary);
    margin: 0;

    @media (max-width: 599px) {
      font-size: 2.5rem;
    }
  }

  &__filters {
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-border);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__filter-chips {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    min-width: max-content;
    padding: 0 1rem;

    @media (max-width: 599px) {
      justify-content: flex-start;
    }
  }

  &__content {
    padding: 1rem 0 3rem;
  }
}
</style>
