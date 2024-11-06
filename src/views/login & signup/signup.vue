<template>
<IonPage class=" bg-white pt-6  flex flex-col overflow-visible " >
  <IonContent>
    <div class="  flex flex-col justify-between  " >
        <div>
            <button class=" ml-6 w-[35px] h-[35px] bg-[#E5EDF1]  rounded-[50%]   " >  </button>
          </div>
          <div  class=" w-full flex justify-center " > 
          <img src="@/assets/images/logo.png" class="h-[59px] w-[237px] mt-[55px] " alt="Logo" />
        </div>
        
          <swiper @swiper="onswipe" :slider-per-view="1" pagination class=" m-0   "   :allow-touch-move="false"   :autoHeight="true">
            <swiper-slide  >
              <firstPage :next="goNext"  />
            </swiper-slide>
            <swiper-slide>  
              <secondPage :next="goNext" />
            </swiper-slide>
            <swiper-slide>  
              <therdPage :next="goNext" />
            </swiper-slide>
            <swiper-slide>
              <fourthPage :next="goNext" />
            </swiper-slide>
            <swiper-slide>
              <fifthPage :next="goNext" />
            </swiper-slide>
            
  
          </swiper>

       



    </div>
  </IonContent>
</IonPage>
</template>
<script>
import { IonPage , IonContent } from '@ionic/vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import firstPage from './chooseUser.vue';
import secondPage from './personalInformation.vue'
import therdPage from './contactInfo.vue';
import fourthPage from './codeVerification.vue';
import fifthPage from './confirmationCode.vue'

 export default {
  data(){
    return{
      swiper:null,
    }
  },
    components:{
        IonPage,
        Swiper,
        SwiperSlide,
        firstPage,
        secondPage,
        therdPage,
        IonContent,
        fourthPage,
        fifthPage,
    },
 
methods:{
  onswipe(swiper){
    this.swiper=swiper
  },
  goNext(){
    this.swiper.slideNext()
  }
  
}
 }
</script>