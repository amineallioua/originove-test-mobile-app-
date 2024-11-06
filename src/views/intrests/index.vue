
<template>
    <IonPage  class=" px-6 bg-white pt-6  flex flex-col justify-normale " >
  
        <div>
            <button class=" w-[35px] h-[35px] bg-[#E5EDF1]  rounded-[50%]   " >  </button>
          </div>
          
        <div class=" w-full h-full mt-[87px]  flex flex-col items-center   " >
            <img src="@/assets/images/logo.png" class="h-[59px] w-[237px]" alt="Logo" />
            <h3 class=" text-[24px] font-[600] text-[#005073] mt-[40px] text-center " > Choisissez vos centres <br> d'intérêt.</h3>
            <p class=" text-[12px] font-[400] opacity-80 text-[#00283A] text-center mt-[10px] " >Choisissez vos centres d'intérêt pour vivre la <br> meilleure expérience sur l'application <br> Spotter Map.</p>
            <div class=" w-full mt-5  flex gap-2 flex-wrap " >
   
   <checkbox/><checkbox/><checkbox/><checkbox/><checkbox/><checkbox/><checkbox/><checkbox/><checkbox/><checkbox/><checkbox/>
</div>
<div class=" mt-[20px]  "  >
    <p class="  text-[12px] text-[#00283A] font-[500] opacity-50  " > Vous avez choisi </p></div>
    <button @click="next" class=" shadow-custom  w-[160px] h-[44px] bg-[#005073] rounded-[100px] mt-[70px] text-[14px] font-[500] text-white " >
               Suivant
           </button>
            </div>

          
    </IonPage>
  </template>



<script>
import { IonPage  } from '@ionic/vue';
import checkbox from './checkbox.vue'
export default {
    components:{
        IonPage,
        checkbox
    }

}
</script>