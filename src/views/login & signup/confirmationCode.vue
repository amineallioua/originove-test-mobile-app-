<template>
    <div class=" w-full min-h-auto  px-6 flex flex-col items-center pb-5 mt-[80px]   justify-between   " >
        <div class=" w-[60px] h-[60px] bg-slate-400 " ></div>
        <h3 class=" text-[24px] font-[600] text-[#005073] mt-[15.5px] " > Email confirmé</h3>
<p class=" text-[12px] font-[400] opacity-80 text-[#00283A] text-center mt-[18px] " >Votre adresse e-mail est confirmée, <br> félicitations et merci de nous avoir aidés à <br> vérifier votre authenticité</p>
<button @click="goToIntrests" class=" shadow-custom  w-[160px] h-[44px] bg-[#005073] rounded-[100px] mt-[28px] text-[14px] font-[500] text-white " >
Continue
       </button>
    
</div>
</template>
<script>
import { IonCheckbox } from '@ionic/vue';
import { useRouter } from 'vue-router';
export default {
    data(){
        return{
            router:useRouter()
        }
        
    },
    components:{
        IonCheckbox
    },
    methods:{
        goToIntrests(){
            this.router.push('/intrests')
        }
    }


}
</script>
<style>


</style>