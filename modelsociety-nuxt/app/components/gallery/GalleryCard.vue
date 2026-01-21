<script setup lang="ts">
import type { GalleryPreview } from '~/types'

defineProps<{
  gallery: GalleryPreview
}>()
</script>

<template>
  <NuxtLink :to="`/galleries/${gallery.slug}`" class="gallery-card">
    <div class="gallery-card__content">
      <h2 class="gallery-card__title text-headline">{{ gallery.title }}</h2>

      <div class="gallery-card__curator">
        <BaseAvatar
          :src="gallery.owner.avatarUrl"
          :name="gallery.owner.publicName"
          size="sm"
          variant="portrait"
        />
        <div class="gallery-card__curator-text">
          <span class="text-caption text-tertiary">Curated by</span>
          <span class="text-caption text-secondary">{{ gallery.owner.publicName }}</span>
        </div>
      </div>

      <GalleryStats
        :image-count="gallery.imageCount"
        :views="gallery.views"
        :comments="gallery.comments"
      />

      <v-btn
        variant="outlined"
        size="small"
        class="gallery-card__btn gallery-card__btn--mobile"
      >
        <span class="text-eyebrow">VIEW GALLERY ({{ gallery.imageCount }})</span>
      </v-btn>
    </div>

    <div class="gallery-card__images">
      <GalleryImageStrip :images="gallery.previewImageUrls" />
      <div class="gallery-card__btn-overlay">
        <v-btn color="primary" size="large">
          <span class="text-eyebrow">VIEW GALLERY ({{ gallery.imageCount }})</span>
        </v-btn>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.gallery-card {
  display: flex;
  align-items: center;
  gap: 2rem;
  text-decoration: none;
  color: inherit;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);


  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 21rem;
    flex-shrink: 0;
  }

  &__title {
    font-size: 2.5rem;
    line-height: 1.1;
    color: var(--color-text-primary);
    margin: 0;
  }

  &__curator {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__curator-text {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem;
    line-height: 1;
  }

  &__images {
    flex: 1;
    position: relative;
    height: 19rem;
    display: flex;
    overflow: hidden;
  }

  &__btn-overlay {
    position: absolute;
    top: 50%;
    left: 9rem;
    transform: translateY(-50%);
    z-index: 10;
    display: flex;
    pointer-events: none;

    :deep(.v-btn) {
      border-radius: 8px;
      padding: 0.75rem 2rem;
      height: auto;
      border: none;
      box-shadow: none;

      .text-eyebrow {
        font-size: 0.875rem;
      }
    }

    @media (max-width: 959px) {
      display: none;
    }
  }

  &__btn {
    align-self: flex-start;
  }

  &__btn--mobile {
    display: none !important;

    @media (max-width: 959px) {
      display: inline-flex !important;
    }
  }
}

@media (max-width: 959px) {
  .gallery-card {
    flex-direction: column;
    align-items: flex-start;

    &__content {
      width: 100%;
    }

    &__images {
      width: 100%;
      height: 8rem;
    }
  }
}

@media (max-width: 599px) {
  .gallery-card {
    &__images {
      height: 5rem;
    }

    &__title {
      font-size: 1.75rem;
    }
  }
}
</style>
