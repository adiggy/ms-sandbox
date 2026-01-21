<script setup lang="ts">
</script>

<template>
  <div class="home-page">
    <section class="home-page__hero">
      <h1 class="home-page__title text-headline">
        Celebrating the beauty of the human form
      </h1>
      <p class="home-page__subtitle text-secondary">
        A community for artists and art lovers
      </p>
      <div class="home-page__actions">
        <v-btn variant="outlined" size="large">
          <span class="text-eyebrow">WATCH INTRO</span>
        </v-btn>
        <v-btn color="primary" size="large">
          <span class="text-eyebrow">JOIN FREE</span>
        </v-btn>
      </div>
    </section>

    <section class="home-page__cta">
      <v-btn to="/galleries" variant="outlined" size="large">
        <span class="text-eyebrow">BROWSE GALLERIES</span>
      </v-btn>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  &__hero {
    text-align: center;
    padding: 6rem 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }

  &__title {
    font-size: 4rem;
    line-height: 1.1;
    color: var(--color-text-primary);
    margin: 0 0 1.5rem;

    @media (max-width: 599px) {
      font-size: 2.5rem;
    }
  }

  &__subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__cta {
    text-align: center;
    padding: 3rem 1.5rem;
  }
}
</style>
