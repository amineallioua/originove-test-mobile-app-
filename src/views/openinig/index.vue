<template>
  <IonPage class="bg-white overflow-hidden   ">

  

    <div
    v-if="transition"
     class="  h-[664px]  w-[1184px]  absolute left-[-232px] top-[-138px] " >
    <img
      v-if="show"
      src="@/assets/images/map.gif"
      class="  opacity-15 "
      alt="Map Animation"
    />
  </div>



    <div v-if="transition" class=" flex-col justify-center flex items-center h-full w-full">
      <img src="@/assets/images/logo.png" class="h-[59px] w-[237px]" alt="Logo" />
      <h3 class=" text-[16px] font-[500] text-black " >Your Eyes on the market</h3>
    </div>



    <div v-else class="  w-full px-5 h-[518px] mt-[116px]  " >  
    <Swiper
    @swiper="onSwiperInit"
    :slides-per-view="1"
    :allow-touch-move="false"

    >

      <swiper-slide v-for=" swipe in this.swipers" :key='swipe.title'  >
        <div class="  w-full h-full flex flex-col  items-center text-center " >
      <img   :src="getImage(swipe.img)" class=" w-[188px] h-[378px] m-0 "  alt="">
      <h3 class=" font-[600] text-[20px] text-[#005073]  mt-[16px] mb-[10px] " >{{ swipe.title }}</h3>
      <p class=" font-[400] text-[12px] text-[#00283A] " > {{ swipe.description   }}</p>
    </div>
      </swiper-slide>
    </Swiper>

   



   </div>


<div class=" flex w-screen flex-col  absolute bottom-0 pb-5 items-center gap-[34px]  " >
  <button  @click="handleclick()"  class="transition-opacity  relative bottom-0 duration-1000 bg-[#005073] 
  ease-in opacity-0 text-[16px] font-[600] text-white w-[152px] h-[44px] rounded-full "
  :class="{ 'opacity-100': show }" >   Get Started  </button>


  <p class="transition-opacity  text-black duration-1000 ease-in opacity-0 text-[8px] font-[400] text-center "
  :class="{ 'opacity-100': show }" >Spotterdz.com</p>
</div>
 
  </IonPage>
</template>

<script>
import { IonPage , IonButton, IonContent ,  } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
export default {
  components: {
    IonPage,
    IonButton,
    IonContent,
    Swiper,
    SwiperSlide,
  },

  data(){
    return{
      show:ref(false),
      transition:ref(true),
      swiperInstance:ref(null),
      count:ref(0),
      totalSlides:ref(0),
      swipers:[
      {
    img: "phone1.png",
    title: "Tous les magasins et entreprises de services sont à portée de main.",
    description: "Trouver le meilleur magasin n'a jamais été aussi facile."
  },
  {
    img: "phone2.png",
    title: "Trouvez tout ce que vous voulez.",
    description: "Il vous suffit de télécharger la photo et nous nous occupons du reste."
  },
  {
    img: "phone3.png",
    title: "Une page d'accueil pour trouver toutes les actualités des pages que vous suivez.",
    description: "Promotions, nouveaux produits, et bien plus encore."
  },
  {
    img: "phone4.png",
    title: "Utilisez la fonction de super recherche pour trouver n'importe quel produit.",
    description: "Utilisez la fonction de super recherche pour trouver n'importe quel produit."
  },
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true; // Fade in after the component mounts
    }, 1000);
  },
  methods: {
    handleclick(){
      if ( this.count == 0 ){
        this.transition=false
        this.count++
        console.log(this.totalSlides , this.count)
        return
      }
      if(    this.count ==  this.totalSlides ){
        return  console.log("start")
       
      }
    else{

      this.swiperInstance.slideNext(); 
      this.count++
      console.log(this.totalSlides , this.count)
    }
      },
    onSwiperInit(swiper) {
      this.swiperInstance = swiper;
      this.totalSlides = swiper.slides.length;
    }, 
    getImage(img) {
      return new URL(`@/assets/images/${img}`, import.meta.url).href;
    },
  },
};
</script>


