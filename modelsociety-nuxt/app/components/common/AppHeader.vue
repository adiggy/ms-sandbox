<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'IMAGES', to: '/images' },
  { label: 'MODELS', to: '/models' },
  { label: 'PHOTOGRAPHERS', to: '/photographers' },
  { label: 'ARTISTS', to: '/artists' },
  { label: 'GALLERIES', to: '/galleries' },
]
</script>

<template>
  <header class="app-header">
    <div class="app-header__container">
      <NuxtLink to="/" class="app-header__logo">
        <img src="/ms-logo.svg" alt="Model Society" height="32" />
      </NuxtLink>

      <nav class="app-header__nav">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="app-header__nav-link text-eyebrow"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="app-header__actions">
        <v-btn variant="outlined" size="small" class="app-header__btn">
          <span class="text-eyebrow">UPGRADE</span>
        </v-btn>
        <v-btn variant="text" size="small" class="app-header__btn">
          <span class="text-eyebrow">LOGIN</span>
        </v-btn>
        <v-btn color="primary" size="small" class="app-header__btn">
          <span class="text-eyebrow">JOIN FREE</span>
        </v-btn>
      </div>

      <v-btn
        variant="text"
        icon="mdi-menu"
        class="app-header__menu-btn"
        @click="mobileMenuOpen = true"
      />
    </div>

    <v-navigation-drawer
      v-model="mobileMenuOpen"
      location="right"
      temporary
    >
      <div class="app-header__mobile-menu">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="app-header__mobile-link text-eyebrow"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <v-divider class="my-4" />
        <v-btn variant="outlined" block class="mb-2">
          <span class="text-eyebrow">UPGRADE</span>
        </v-btn>
        <v-btn variant="text" block class="mb-2">
          <span class="text-eyebrow">LOGIN</span>
        </v-btn>
        <v-btn color="primary" block>
          <span class="text-eyebrow">JOIN FREE</span>
        </v-btn>
      </div>
    </v-navigation-drawer>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__nav {
    display: none;
    align-items: center;
    gap: 2rem;

    @media (min-width: 960px) {
      display: flex;
    }
  }

  &__nav-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.75rem;
    transition: color 0.2s ease;

    &:hover,
    &.router-link-active {
      color: var(--color-primary);
    }
  }

  &__actions {
    display: none;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 960px) {
      display: flex;
    }
  }

  &__btn {
    font-size: 0.7rem;
  }

  &__menu-btn {
    display: inline-flex;

    @media (min-width: 960px) {
      display: none;
    }
  }

  &__mobile-menu {
    padding: 1.5rem;
  }

  &__mobile-link {
    display: block;
    padding: 1rem 0;
    color: var(--color-text-primary);
    text-decoration: none;
    border-bottom: 1px solid var(--color-border);
    font-size: 0.875rem;

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
