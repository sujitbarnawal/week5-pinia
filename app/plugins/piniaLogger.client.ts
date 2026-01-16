import type { Pinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
  const $pinia = nuxtApp.$pinia as Pinia

  $pinia.use(({ store }) => {
    const savedState = localStorage.getItem(store.$id)
    if (savedState) {
      store.$patch(JSON.parse(savedState))
    }

    store.$subscribe((_mutation, state) => {
      localStorage.setItem(store.$id, JSON.stringify(state))
    })
  })
})