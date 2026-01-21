import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#f9f9f9',
            surface: '#ffffff',
            primary: '#EA1C33',
            secondary: '#1b1c1d',
            error: '#B00020',
          },
        },
      },
    },
    defaults: {
      VBtn: {
        color: 'primary',
        variant: 'flat',
      },
    },
  })

  app.vueApp.use(vuetify)
})
