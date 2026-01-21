<script setup lang="ts">
import { mockGalleryDetail } from '~/data/mock/galleryDetail'

const gallery = mockGalleryDetail

const showCommentsDrawer = ref(false)
const isLoggedIn = ref(false)
</script>

<template>
  <div class="gallery-detail">
    <aside class="gallery-detail__sidebar">
      <div class="gallery-detail__sidebar-content">
        <section class="gallery-detail__section">
          <h1 class="gallery-detail__title text-headline">{{ gallery.title }}</h1>

          <CuratorRow :curator="gallery.owner" linkable />

          <GalleryStats
            :image-count="gallery.imageCount"
            :views="gallery.views"
            :comments="gallery.comments"
          />
        </section>

        <section v-if="gallery.isOwner" class="gallery-detail__section">
          <div class="gallery-detail__edit-header">
            <span class="icon-box">
              <v-icon size="16">mdi-pencil</v-icon>
            </span>
            <span class="text-eyebrow">Edit Your Gallery</span>
          </div>
          <div class="gallery-detail__edit-actions">
            <button class="btn btn--tertiary btn--small">
              <span class="btn__text">Edit Title</span>
            </button>
            <button class="btn btn--tertiary btn--small">
              <span class="btn__text">Edit Description</span>
            </button>
            <button class="btn btn--tertiary btn--small">
              <span class="btn__text">Delete Gallery</span>
              <v-icon size="14">mdi-delete-outline</v-icon>
            </button>
          </div>
        </section>

        <section class="gallery-detail__section">
          <div class="gallery-detail__more-header">
            <span class="text-eyebrow">More galleries</span>
            <div class="gallery-detail__more-by">
              <span class="text-caption text-tertiary"><em>by</em></span>
              <NuxtLink :to="`/members/${gallery.owner.slug}`" class="link-primary">
                <em>{{ gallery.owner.publicName }}</em>
              </NuxtLink>
            </div>
          </div>
          <div class="gallery-detail__more-links">
            <template v-for="(link, index) in gallery.otherGalleriesByOwner" :key="link.slug">
              <NuxtLink :to="`/galleries/${link.slug}`" class="link-primary">{{ link.title }}</NuxtLink>
              <span v-if="index < gallery.otherGalleriesByOwner.length - 1">, </span>
            </template>
            <span> ...</span>
          </div>
          <button class="btn btn--tertiary btn--small">
            <span class="btn__text">Show All</span>
          </button>
        </section>

        <button
          class="gallery-detail__comments-trigger btn btn--tertiary btn--small"
          @click="showCommentsDrawer = true"
        >
          <span class="btn__text">See All Comments ({{ gallery.comments }})</span>
        </button>

        <section class="gallery-detail__section gallery-detail__comments-desktop">
          <CommentsSection
            :comments="gallery.commentsList"
            :total-count="gallery.comments"
            :is-logged-in="isLoggedIn"
          />
        </section>
      </div>
    </aside>

    <main class="gallery-detail__main">
      <GalleryThumbnailGrid
        :thumbnails="gallery.previewImageUrls"
        :total-count="gallery.imageCount"
      />

      <div class="gallery-detail__feed">
        <GalleryImageCard
          v-for="image in gallery.images"
          :key="image.imageId"
          :image="image"
          :is-owner="gallery.isOwner"
        />
      </div>
    </main>

    <CommentsDrawer
      v-model="showCommentsDrawer"
      :comments="gallery.commentsList"
      :total-count="gallery.comments"
      :is-logged-in="isLoggedIn"
    />
  </div>
</template>

<style scoped lang="scss">
.gallery-detail {
  display: grid;
  grid-template-columns: 21rem 1fr;
  gap: 3rem;
  max-width: 100%;
  padding: 2rem;

  &__sidebar {
    position: relative;
  }

  &__sidebar-content {
    position: sticky;
    top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-height: calc(100vh - 6rem);
    overflow-y: auto;
    padding-right: 1rem;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    font-size: 2.5rem;
    line-height: 1.1;
    margin: 0;
  }

  &__edit-header,
  &__more-header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__edit-header {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  &__edit-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__more-by {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  &__more-links {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--color-text-primary);
  }

  &__comments-trigger {
    display: none;
  }

  &__comments-desktop {
    display: block;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 0;
  }

  &__feed {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
}

@media (max-width: 1199px) {
  .gallery-detail {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;

    &__sidebar-content {
      position: static;
      max-height: none;
      overflow: visible;
      padding-right: 0;
    }

    &__comments-trigger {
      display: inline-flex;
      align-self: flex-start;
    }

    &__comments-desktop {
      display: none;
    }
  }
}

@media (max-width: 599px) {
  .gallery-detail {
    padding: 1rem;
    gap: 1.5rem;

    &__title {
      font-size: 2rem;
    }
  }
}
</style>
