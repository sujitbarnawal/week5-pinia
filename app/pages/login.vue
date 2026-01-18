<!-- pages/login.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/useUser'

const router = useRouter()
const { login } = useUser()

const name = ref('')
const email = ref('')
const error = ref('')

const nameError = computed(() => name.value.length < 3 ? 'Name too short' : '')
const emailError = computed(() => !email.value.includes('@') ? 'Invalid email' : '')
const canSubmit = computed(() => !nameError.value && !emailError.value)

const submitForm = () => {
  if (!canSubmit.value) {
    error.value = 'Fix errors first'
    return
  }
  login(name.value, email.value)
  router.push('/')
}
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-2 max-w-4xl bg-white rounded-full p-4 mx-auto mt-5">
    <input v-model="name" placeholder="Name" class="border p-2" />
    <span class="text-red-500 text-sm">{{ nameError }}</span>

    <input v-model="email" placeholder="Email" class="border p-2" />
    <span class="text-red-500 text-sm">{{ emailError }}</span>

    <span class="text-red-500">{{ error }}</span>

    <button :disabled="!canSubmit" class="bg-blue-500 text-white p-2 rounded">
      Login
    </button>
  </form>
</template>
