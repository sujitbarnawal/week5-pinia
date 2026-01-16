// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:['/assets/css/main.css'],
  app:{
    head:{
      title:'Pinia - State Management',
      meta:[{name:'description',content:'Learning Pinia with Nuxt'}]
    }
  },
  modules:['@nuxtjs/tailwindcss','@pinia/nuxt']
})
