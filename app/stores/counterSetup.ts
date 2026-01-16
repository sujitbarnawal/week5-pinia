
// usign setup store 

//Diffrence between setup store and options store
// options store ----------> setup store
// state ----------> ref
// getters ----------> computed
// actions ----------> methods
//no useFetch,useCookie-------->useFetch,useCookie
//simpler store----------->more flexible and powerful

export const useCounterSetup=defineStore('counterSetup',()=>{
    const count = ref(0)
    const doubleCount = computed(()=>{
        return count.value*2
    })
    const increment = ()=>{
        count.value++
    }
    const decrement = ()=>{
        count.value--
    }

    return {count,doubleCount,increment,decrement}
})