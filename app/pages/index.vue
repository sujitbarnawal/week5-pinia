<!-- pages/home.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/useUser'

const router = useRouter()
const { user, isLoggedIn, logout } = useUser()

if (!isLoggedIn.value) {
  router.push('/login') 
}
</script>

<template>
  <div class="text-center max-w-4xl mx-auto mt-10">
    <h1 class="text-2xl font-bold">Welcome, {{ user?.name }}</h1>
    <p>Email: {{ user?.email }}</p>
    <button @click="logout" class="mt-4 bg-red-500 text-white p-2 rounded">Logout</button>
  </div>
</template>
