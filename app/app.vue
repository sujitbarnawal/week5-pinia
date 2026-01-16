<script setup lang="ts">
    const counter = useCounterSetup()
const { increment, decrement } = counter
const { count, doubleCount } = storeToRefs(counter)
const store =useStore()
const {name,email}=storeToRefs(store)
const {updateName}=store
const update=()=>{
    updateName(newName.value)
    newName.value=''
}
const newName=ref('')
</script>

<template>
    <div class="max-w-4xl bg-white mx-auto rounded-lg mt-4">
        <h1 class="text-center mt-2 text-4xl font-semibold">Counter</h1>
        <div class="mt-4 flex items-center justify-center gap-5 ">
            <button  @click="decrement" class="px-5 border rounded-lg text-center mt-2 text-4xl font-semibold">-</button>
            <p class="text-center mt-2 text-4xl font-semibold">{{ count }}</p>
            <button @click="increment" class="px-5 border rounded-lg text-center mt-2 text-4xl font-semibold">+</button>


        </div>
        <p class="text-center mt-2 text-2xl font-semibold">Double of Count: {{ doubleCount }}</p>
    </div>
    <div class="max-w-4xl bg-white mx-auto rounded-lg mt-4">
        <h1 class="text-center mt-2 text-4xl font-semibold">User Profile</h1>
        <div class="mt-4 flex items-center flex-col justify-center gap-2 ">

            <p class="text-center mt-2 text-2xl font-semibold">Name: {{ name }}</p>
            <p class="text-center mt-2 text-2xl font-semibold">Email: {{ email }}</p>
            <label class="text-2xl font-semibold mt-5" for="name">Update Name</label>
            <input class="border rounded-lg px-4 py-2" type="text" placeholder="new-name" v-model="newName">
            <button class="mt-2 mb-2 border-indigo-500 border-2 px-4 py-3"  @click="update">update</button>
        </div>

    </div>
</template>
