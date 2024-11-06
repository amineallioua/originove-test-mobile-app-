<template>
     <div class=" w-full min-h-full px-6   flex flex-col items-center mt-[40px]  pb-[22px]   " >
       
          <h3 class=" text-[24px] font-[600] text-[#005073]  " > Créer un compte</h3>
            <p class=" text-[12px] font-[400] opacity-80 text-[#00283A] text-center mt-[10px] " >Remplissez vos informations personnelles</p>


            <div class="form-container  mt-[13px] text-black ">
        <form @submit.prevent="handleLogin">
         

          <IonItem>
            <label position="floating" class=" ml-[5px] mb-2 text-[14px] font-[500] text-[#00283A] opacity-[25%] " >Prénom</label>
            <input
            class=" w-full h-[48px] p-4 mb-3 bg-[#E5EDF1] rounded-[16px] outline-none "
            placeholder="First name"
              v-model="name"
              type="text"
              required
            />
          </IonItem>

          <IonItem>
            <label position="floating" class=" ml-[5px] mb-2 text-[14px] font-[500] text-[#00283A] opacity-[25%] " >Nom</label>
            <input
            class=" w-full h-[48px] p-4 mb-3 bg-[#E5EDF1] rounded-[16px] outline-none "
            placeholder="Last name"
              v-model="lastName"
              type="text"
              required
            />
          </IonItem>

          <IonItem>
            <label position="floating" class=" ml-[5px] mb-2 text-[14px] font-[500] text-[#00283A] opacity-[25%] " >Wilaya</label>
            <select id="accountType"  name="accountType"  placeholder="Wilaya"  class=" w-full h-[48px] p-4 mb-3 bg-[#E5EDF1] text-[14px] text-[#00283A] font-[500] rounded-[16px] outline-none ">
                <option  class="  text-[14px] text-[#00283A] font-[500] text-opacity-25 " v-for=" ( wilaya , index ) in algerianWilayas " :key="index" >{{wilaya}}</option>
               
                </select>
          </IonItem>
          <IonItem>
            <label position="floating" class=" ml-[5px] mb-2 text-[14px] font-[500] text-[#00283A] opacity-[25%] " >Genre</label>
            <select id="accountType"  name="accountType"  placeholder="Wilaya"  class=" w-full h-[48px] p-4 mb-3 bg-[#E5EDF1] text-[14px] text-[#00283A] font-[500] rounded-[16px] outline-none ">
                <option  class="  text-[14px] text-[#00283A] font-[500] text-opacity-25 " v-for=" ( wilaya , index ) in algerianWilayas " :key="index" >{{wilaya}}</option>
               
                </select>
          </IonItem>


          <IonItem>
            <label position="floating" class=" ml-[5px] mb-2 text-[14px] font-[500] text-[#00283A] opacity-[25%] " >Date de naissance</label>
           <div  class=" flex justify-between gap-5 "  >
            <select id="accountType"  name="accountType"  placeholder="Wilaya"  class=" w-[84px] h-[48px] p-4 mb-3 bg-[#E5EDF1] text-[14px] text-[#00283A] font-[500] rounded-[16px] outline-none ">
                <option  class="  text-[14px] text-[#00283A] font-[500] text-opacity-25 " v-for=" ( wilaya , index ) in algerianWilayas " :key="index" >{{wilaya}}</option>
               
                </select>
                <select id="accountType"  name="accountType"  placeholder="Wilaya"  class=" w-[84px] h-[48px] p-4 mb-3 bg-[#E5EDF1] text-[14px] text-[#00283A] font-[500] rounded-[16px] outline-none ">
                <option  class="  text-[14px] text-[#00283A] font-[500] text-opacity-25 " v-for=" ( wilaya , index ) in algerianWilayas " :key="index" >{{wilaya}}</option>
               
                </select>
                <select id="accountType"  name="accountType"  placeholder="Wilaya"  class=" w-[108px] h-[48px] p-4 mb-3 bg-[#E5EDF1] text-[14px] text-[#00283A] font-[500] rounded-[16px] outline-none ">
                <option  class="  text-[14px] text-[#00283A] font-[500] text-opacity-25 " v-for=" ( wilaya , index ) in algerianWilayas " :key="index" >{{wilaya}}</option>
               
                </select>
            </div>
         
          </IonItem>

          

      
        
        </form>
       
      </div>
      <button @click="next" class=" shadow-custom  w-[160px] h-[44px] bg-[#005073] rounded-[100px] mt-[72px] text-[14px] font-[500] text-white " >
                Suivant
            </button>

     </div>

</template>
<script>
export default {
  props : {
      next:Function
    },
    data(){
        return{ 
  algerianWilayas : [
 "Adrar",
  "Aïn Defla",
  "Aïn Témouchent",
  "Algiers",
  "Annaba",
  "Batna",
  "Béchar",
  "Béni Abbès",
  "Béjaïa",
  "Biskra",
  "Blida",
  "Bordj Badji Mokhtar",
  "Bordj Bou Arréridj",
  "Bouira",
  "Boumerdès",
  "Chlef",
  "Constantine",
  "Djanet",
  "Djelfa",
  "El Bayadh",
  "El Meniaa",
  "El M'Ghair",
  "El Oued",
  "El Tarf",
  "Ghardaïa",
  "Guelma",
  "Illizi",
  "In Guezzam",
  "In Salah",
  "Jijel",
  "Khenchela",
  "Laghouat",
  "M'Sila",
  "Mascara",
  "Médéa",
  "Mila",
  "Mostaganem",
  "Naâma",
  "Oran",
  "Ouargla",
  "Oum El Bouaghi",
  "Ouled Djellal",
  "Relizane",
  "Saïda",
  "Sétif",
  "Sidi Bel Abbès",
  "Skikda",
  "Souk Ahras",
  "Tamanrasset",
  "Tébessa",
  "Tiaret",
  "Timimoun",
  "Tindouf",
  "Tipaza",
  "Tissemsilt",
  "Tizi Ouzou",
  "Tlemcen",
  "Touggourt"
]

        }
    }
}
</script>