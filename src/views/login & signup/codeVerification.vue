<template>
        <div class=" w-full min-h-auto  px-6 flex flex-col items-center  mt-[40px]   justify-between   " >
    <h3 class=" text-[24px] font-[600] text-[#005073]  " > E-mail envoyé</h3>
    <p class=" text-[12px] font-[400] opacity-80 text-[#00283A] text-center mt-[14px] " >Entrez le code à 6 chiffres que nous vous <br> avons envoyé par e-mail</p>
<v-otp-input  :length="5" class=" mt-[64px] text-[24px] text-[#00283A]  font-[600] " ></v-otp-input>
<button @click="next" class=" shadow-custom  w-[160px] h-[44px] bg-[#005073] mb-10 rounded-[100px] mt-[48px] text-[14px] font-[500] text-white " >
    Continue
           </button>
</div>
</template>
<script>
export default {

    props : {
      next:Function
    }

}
</script>
<style>
.v-otp-input__field{
    width: 46px;
    height: 46px;
    background-color: #E5EDF1;
    border-radius: 8px;
    direction: none;
}

</style>