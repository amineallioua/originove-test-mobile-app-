<template>
    <div class=" w-full min-h-full  px-6 flex flex-col items-center  justify-between   " >
        
          <h3 class=" text-[24px] font-[600] text-[#005073] mt-[40px] " > Créer un compte</h3>
            <p class=" text-[12px] font-[400] opacity-80 text-[#00283A] text-center mt-[10px] " >Choisissez le type de compte</p>
            <div class=" flex gap-10 mt-8 justify-between " >    
                <button class="  opacity-[50%] focus:opacity-100 focus:shadow-custom2 focus:border-[1px] focus:border-solid focus:border-[#005073] w-[124px] h-[124px] rounded-[8px] bg-[#E5EDF1] text-[#005073] text-[12px] font-[500]"  > Utilisateur normal</button>
                <button class=" opacity-[50%] focus:opacity-100 focus:shadow-custom2 focus:border-[1px] focus:border-solid focus:border-[#005073]  w-[124px] h-[124px] rounded-[8px] bg-[#E5EDF1] text-[#005073] text-[12px] font-[500] "  >Business</button>
            </div>
            <p class="w-[288px] text-[12px] font-[500] text-[#00283A] mt-6 " >En tant qu'utilisateur normal, vous pouvez naviguer sur les cartes, acheter des produits et services, et les évaluer.</p>
            <button @click="next" class=" shadow-custom  w-[160px] h-[44px] bg-[#005073] rounded-[100px] mt-[32px] text-[14px] font-[500] text-white " >Continue</button>
            <p class=" text-[12px] font-[400] mt-4 text-[#005073] opacity-[50%]  " >Vous avez déjà un compte ?</p>
      <button class=" text-[12px] font-[400]  text-[#005073] " @click="togglelogin" >Connectez-vous à votre compte</button>
      <p class=" text-[12px] font-[400] mt-[43px] text-[#005073] opacity-[50%] " >Ou inscrivez-vous avec</p>
      <div class=" flex justify-center gap-[11px] mt-5  pb-[55px]  " >  
            <button class=" w-[60px] h-[60px] bg-[#E5EDF1] rounded-[50%] " ></button>   
            <button class=" w-[60px] h-[60px] bg-[#E5EDF1] rounded-[50%] " ></button>   
            <button class=" w-[60px] h-[60px] bg-[#E5EDF1] rounded-[50%] " ></button>   

        </div>
     
        </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
  props : {
      next:Function
    },
    data(){
  return{
    router:useRouter()
  }
},
    methods:{
        togglelogin(){
    this.router.push('./login')
  }
}
}
</script>