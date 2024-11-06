<template>
  <IonPage class="bg-white overflow-hidden   ">

  

    <div

     class="  h-[664px] w-[1184px] duration-1000 ease-out absolute left-[-232px] top-[-138px] "        :class="{ 'opacity-0': !transition, 'opacity-100': transition } "   >
    <img
      
      src="@/assets/images/map.gif"
      class="   duration-1000 ease-in  "  :class="{ 'opacity-0': !show, 'opacity-15': show }" 
      alt="Map Animation"
    />
  </div>



    <div  class=" flex-col justify-center duration-1000 ease-out gap-5 flex items-center h-full w-full"      :class="{ 'opacity-0': !transition, 'opacity-100  ': transition }"> >
      <img src="@/assets/images/logo.png" class="h-[59px] w-[237px]" alt="Logo" />
      <h3 class=" text-[16px] font-[500] text-black " >Your Eyes on the market</h3>
    </div>



    <div  class="  w-full px-5 h-[518px] duration-1000 ease-out absolute  top-[116px]  "      :class="{ 'opacity-0  ': transition, 'opacity-100  ': !transition }"> 
    <Swiper
    @swiper="onSwiperInit"
    :slides-per-view="1"
    :allow-touch-move="false"

    > 

      <swiper-slide v-for=" swipe in this.swipers" :key='swipe.title'  >
        <div class="  w-full h-full flex flex-col  items-center text-center " >
      <img  :src="getImageUrl(swipe.img)" class=" w-[188px] h-[378px] m-0 "  alt="">
      <h3 class=" font-[600] text-[20px] text-[#005073]  mt-[16px] mb-[10px] " >{{ swipe.title }}</h3>
      <p class=" font-[400] text-[12px] text-[#00283A] " > {{ swipe.description   }}</p>
    </div>
      </swiper-slide>
    </Swiper>

   



   </div>


<div class="  w-screen   absolute bottom-0   pb-5 " >
  <div class=" flex items-left relative justify-center pb-[34px] " >   
    
    <Button @click="skip" class="text-[16px]  duration-1000 ease-out text-right pr-[28px]  font-[600]  text-[#005073] w-[152px] h-[44px]  "  :class="{ 'absolute  opacity-0 ':transition    , 'relative opacity-100 ':!transition  }" >Passer</Button>


  <Button  @click="handleclick()"  class="  relative bottom-0 duration-1000 bg-[#005073] 
  ease-in opacity-0 text-[16px] font-[600] text-white w-[152px] h-[44px] rounded-full "
  :class="{ 'opacity-100 ': show } "   >   {{ transition ? 'Get Started' : 'Suivant'    }}  </Button> </div>

  <p class="  text-black duration-1000 ease-in opacity-0 text-[8px] font-avenir  font-[400] text-center "
  :class="{ 'opacity-100': show }" >Spotterdz.com</p>


</div>




 <div  class=" w-full h-[344px] duration-1000 ease-in-out  bg-[#00283A] pt-3 px-6 flex flex-col items-center absolute z-10  rounded-t-[36px] " :class="{   'bottom-[-344px]':!toggleConnect     ,'bottom-[0px]':toggleConnect }" >
 
  <svg width="74" height="6" viewBox="0 0 74 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3H71.5" stroke="white" stroke-opacity="0.25" stroke-width="5" stroke-linecap="round"/>
</svg>
<button class=" w-full h-[48px] bg-white rounded-[16px] text-[16px] font-[600] text-black mt-[35px] mb-4  " > <ion-icon name="logo-apple"></ion-icon> Continuer avec Apple</button>
<button class=" w-full h-[48px] bg-[#264858] rounded-[16px] text-[16px] font-[600] mb-4  " >  Continuer avec Google</button>
<button class=" w-full h-[48px]  bg-[#264858] rounded-[16px] text-[16px] font-[600] mb-4  " >S'inscrire avec un E-mail</button>
<button @click="navigateToSignup"  class="w-full h-[48px]  border-[3px] border-solid border-[#005073] rounded-[16px] text-[16px] font-[600] mb-4">Se Connecter</button> </div>

  </IonPage>
</template>

<script>
import { IonPage , IonButton,  } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    IonPage,
    IonButton,
    Swiper,
    SwiperSlide,
  },

  data(){

    return{
      router :useRouter(),
      show:ref(false),
      transition:ref(true),
      swiperInstance:ref(null),
      count:ref(0),
      totalSlides:4,
      toggleConnect:ref(false),
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
        this.transition=true
        this.toggleConnect=true
       
      }
    else{

      this.swiperInstance.slideNext(); 
      this.count++
     
    }
      },
    onSwiperInit(swiper) {
      this.swiperInstance = swiper;
      
    }, 
    getImageUrl(img) {
      return new URL(`../../assets/images/${img}`, import.meta.url).href;
    
  },
  navigateToSignup () {
    this.router.push('/login')
  },
  skip(){
    this.transition=true
    this.toggleConnect=true
  }

  },
};
</script>


