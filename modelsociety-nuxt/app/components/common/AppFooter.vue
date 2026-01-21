<script setup lang="ts">
const sitemapSections = [
  {
    title: 'BROWSE',
    links: [
      { label: 'Images', to: '/images' },
      { label: 'Models', to: '/models' },
      { label: 'Photographers', to: '/photographers' },
      { label: 'Artists', to: '/artists' },
      { label: 'Galleries', to: '/galleries' },
    ],
  },
  {
    title: 'COMMUNITY',
    links: [
      { label: 'Featured', to: '/featured' },
      { label: 'Recent', to: '/recent' },
      { label: 'Spotlight', to: '/spotlight' },
    ],
  },
  {
    title: 'ABOUT',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Content Policy', to: '/content-policy' },
    ],
  },
]
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <div class="app-footer__grid">
        <div class="app-footer__brand">
          <img src="/ms-logo.svg" alt="Model Society" height="32" class="app-footer__logo" />
          <p class="app-footer__tagline text-secondary">
            A community for artists and art lovers celebrating the beauty of the human form.
          </p>
        </div>

        <div
          v-for="section in sitemapSections"
          :key="section.title"
          class="app-footer__section"
        >
          <h4 class="app-footer__section-title text-eyebrow">{{ section.title }}</h4>
          <ul class="app-footer__links">
            <li v-for="link in section.links" :key="link.to">
              <NuxtLink :to="link.to" class="app-footer__link text-caption">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <v-divider class="my-6" />

      <div class="app-footer__bottom">
        <p class="text-caption text-tertiary">
          &copy; {{ new Date().getFullYear() }} Model Society. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  margin-top: auto;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 3rem 1.5rem 2rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 959px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 599px) {
      grid-template-columns: 1fr;
    }
  }

  &__brand {
    @media (max-width: 959px) {
      grid-column: 1 / -1;
    }
  }

  &__logo {
    margin-bottom: 1rem;
  }

  &__tagline {
    font-size: 0.875rem;
    line-height: 1.6;
    max-width: 280px;
  }

  &__section-title {
    color: var(--color-text-primary);
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }

  &__links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__link {
    display: block;
    color: var(--color-text-secondary);
    text-decoration: none;
    padding: 0.375rem 0;
    font-size: 0.875rem;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary);
    }
  }

  &__bottom {
    text-align: center;
  }
}
</style>
