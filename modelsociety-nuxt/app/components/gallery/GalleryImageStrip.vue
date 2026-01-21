<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>

<template>
  <div class="gallery-image-strip">
    <div class="gallery-image-strip__scroll">
      <img
        v-for="(url, index) in images"
        :key="index"
        :src="url"
        :alt="`Gallery image ${index + 1}`"
        class="gallery-image-strip__image"
        loading="lazy"
      />
    </div>
    <div class="gallery-image-strip__gradient" />
  </div>
</template>

<style scoped lang="scss">
.gallery-image-strip {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 19rem;

  @media (max-width: 959px) {
    height: 6rem;
  }

  @media (max-width: 599px) {
    height: 4rem;
  }

  &__scroll {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__image {
    height: 100%;
    width: auto;
    object-fit: cover;
    border-radius: 4px;
  }

  &__gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 40%;
    background: linear-gradient(270deg, var(--color-background), transparent);
    pointer-events: none;
  }
}
</style>
