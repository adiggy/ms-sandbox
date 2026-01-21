<script setup lang="ts">
import type { GalleryImage } from '~/types'

defineProps<{
  image: GalleryImage
  isOwner?: boolean
}>()
</script>

<template>
  <article class="gallery-image-card">
    <NuxtLink :to="`/images/${image.imageId}`" class="gallery-image-card__image-link">
      <img
        :src="image.imageUrl"
        :alt="`Photo by ${image.photographer.publicName}`"
        class="gallery-image-card__image"
        loading="lazy"
      />
    </NuxtLink>

    <div class="gallery-image-card__content">
      <div class="gallery-image-card__credits">
        <div class="gallery-image-card__credit">
          <span class="text-eyebrow gallery-image-card__label">Photographer:</span>
          <NuxtLink :to="`/members/${image.photographer.slug}`" class="link-primary">
            {{ image.photographer.publicName }}
          </NuxtLink>
        </div>
        <div v-if="image.model" class="gallery-image-card__credit">
          <span class="text-eyebrow gallery-image-card__label">Model:</span>
          <NuxtLink :to="`/members/${image.model.slug}`" class="link-primary">
            {{ image.model.publicName }}
          </NuxtLink>
        </div>
      </div>

      <div class="gallery-image-card__actions">
        <button class="btn btn--icon" aria-label="Add to favorites">
          <v-icon size="18">mdi-heart</v-icon>
        </button>
        <button v-if="isOwner" class="btn btn--tertiary btn--small">
          <span class="btn__text">Remove from gallery</span>
          <v-icon size="14">mdi-delete-outline</v-icon>
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.gallery-image-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__image-link {
    display: block;
    line-height: 0;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }

  &__credits {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  &__credit {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  &__label {
    font-size: 0.7rem;
    color: var(--color-text-tertiary);
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .link-primary {
    font-size: 0.875rem;
  }

  .btn--icon:hover {
    color: var(--color-primary);
  }
}

@media (max-width: 599px) {
  .gallery-image-card {
    &__content {
      flex-direction: column;
      gap: 0.75rem;
    }

    &__credits {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
}
</style>
