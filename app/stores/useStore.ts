export const useStore = defineStore("store", () => {
  const name = ref("Sujit Barnawal");
  const email = ref("sujit@gmail.com");
  const updateName=(newName:string)=>{
    name.value=newName
  }
  return{name,email,updateName}
});
