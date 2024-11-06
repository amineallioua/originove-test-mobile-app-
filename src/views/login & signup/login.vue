<template>
    <IonPage class=" px-6 bg-white pt-6  flex flex-col justify-between " >
       <div class=" flex flex-col justify-between overflow-scroll h-full " >
        <div>
            <button class=" w-[35px] h-[35px] bg-[#E5EDF1]  rounded-[50%]   " >  </button>
          </div>
          
        <div class=" w-full h-auto mt-[87px]  flex flex-col items-center   " >
            <img src="@/assets/images/logo.png" class="h-[59px] w-[237px]" alt="Logo" />
            <h3 class=" text-[24px] font-[600] text-[#005073] mt-[40px] " > Se Connecter</h3>
            <p class=" text-[12px] font-[400] opacity-80 text-[#00283A] text-center mt-[10px] " >Remplissez ces informations afin d'accéder 
                à votre compte.</p>



                <div class="form-container  mt-[13px] text-black ">
        <form @submit.prevent="handleLogin">
          <!-- Email Field -->
          <IonItem>
            <label position="floating" class=" ml-[5px] mb-2 text-[14px] font-[500] text-[#00283A] opacity-[25%] " >E-mail</label>
            <input
            class=" w-full h-[48px] p-4 mb-3 bg-[#E5EDF1] rounded-[16px] outline-none "
            placeholder="mail@email.com"
              v-model="email"
              type="email"
              required
              autocomplete="email"
            />
          </IonItem>

          <!-- Password Field -->
          <IonItem>
            <label position="floating" class=" mb-2 text-[14px] ml-[5px] font-[500] text-[#00283A] opacity-[25%] " >Mot de passe</label>
            <input
            class=" w-full h-[48px] mb-3 p-4 bg-[#E5EDF1] rounded-[16px] outline-none  "
            placeholder="*************"
              v-model="password"
              type="password"
              required
              autocomplete="current-password"
            />
          </IonItem>

          <!-- Submit Button -->
        
        </form>
        <p class=" text-[13px] font-[500] text-[#005073] text-right mr-[5px] " > Mot de passe oublié ? </p>
      </div>
      <button class=" shadow-custom  w-[160px] h-[44px] bg-[#005073] rounded-[100px] mt-[34px] text-[14px] font-[500] text-white " >Connexion</button>
      <p class=" text-[12px] font-[400] mt-4 text-[#005073] opacity-[50%]  " >Vous n'avez pas de compte ?</p>
      <button class=" text-[12px] font-[400]  text-[#005073] " @click="togglesignup" > Créez-en un maintenant</button>
      <p class=" text-[12px] font-[400] mt-[43px] text-[#005073] opacity-[50%] " >Ou bien se connecter avec</p>
     
    </div>
    <div class=" flex justify-center gap-[11px] mt-5  pb-[55px]  " >  
            <button class=" w-[60px] h-[60px] bg-[#E5EDF1] rounded-[50%] " ></button>   
            <button class=" w-[60px] h-[60px] bg-[#E5EDF1] rounded-[50%] " ></button>   
            <button class=" w-[60px] h-[60px] bg-[#E5EDF1] rounded-[50%] " ></button>   

        </div>
      </div>
    </IonPage>
</template>
<script>
import { IonPage , IonContent ,IonHeader , IonFooter } from '@ionic/vue';
import { useRouter } from 'vue-router';
export default {
components:{
    IonPage,
    IonContent ,IonHeader , IonFooter
},
data(){
  return{
    router:useRouter()
  }
},
methods:{
  togglesignup(){
    this.router.push('./signup')
  }
}
}

</script>
ion-content {
  --background: white;
}