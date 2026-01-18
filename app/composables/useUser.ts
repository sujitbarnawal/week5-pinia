export type User={
    name:string,
    email:string
}

export const useUser=()=>{
    const cookie=useCookie<User|null>('user')
    const user= useState<User|null>('user',()=>cookie.value )
    watch(user,(val)=>{
        cookie.value=val
        if(import.meta.client){
            localStorage.setItem('USER',JSON.stringify(val))
        }
    },{deep:true})

    const isLoggedIn = computed(()=>{
        return !!user.value?.email
    })

    const login = (name:string,email:string)=>{
        user.value={
            name,
            email
        }
    }

    const logout=()=>{
        user.value={email:'',name:''}
        cookie.value=null
        if(import.meta.client){
            localStorage.removeItem('USER')
        }
        navigateTo('/login')
    }

    return {user,login,logout,isLoggedIn}

}