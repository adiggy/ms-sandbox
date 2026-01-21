import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(
          vuetify({
            autoImport: true,
            styles: { configFile: 'assets/styles/vuetify-settings.scss' },
          })
        )
      })
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  css: ['~/assets/styles/main.scss'],

  app: {
    head: {
      title: 'Model Society',
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/cyl0lez.css' }],
    },
  },
})
