<script setup lang="ts">
    const {increment,decrement}=useCounterSetup()
    const {count,doubleCount}=storeToRefs(useCounterSetup())
</script>

<template>
  <div class="max-w-4xl bg-white mx-auto rounded-lg mt-4">
    <h1 class="text-center mt-2 text-4xl font-semibold">Counter</h1>
    <div class="mt-4 flex items-center justify-center gap-5 ">
        <button @click="decrement" class="px-5 border rounded-lg text-center mt-2 text-4xl font-semibold">-</button>
        <p class="text-center mt-2 text-4xl font-semibold">{{ count }}</p>
        <button @click="increment" class="px-5 border rounded-lg text-center mt-2 text-4xl font-semibold">+</button>


    </div>
    <p class="text-center mt-2 text-2xl font-semibold">Double of Count: {{doubleCount}}</p>
  </div>
</template>
