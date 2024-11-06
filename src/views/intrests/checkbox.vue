<template>
<button @click="clicked" class=" flex  items-center gap-[7px] h-6 rounded-[1020px] px-[10px] my-[6px] bg-[#E5EDF1] text-[12px] text-[#005073] font-[500] " >
  ioefaazdzadzi  <div class=" w-[13px] h-[13px]  rounded-[50%] duration-200 ease-linear " :class="{ 'bg-[#005073]' : isclicked  , 'bg-white': !isclicked  } " > </div>
</button>
</template>
<script>
export default {
    data(){
        return{
            isclicked:false
        }
    },
    methods:{
        clicked(){
            this.isclicked = !this.isclicked;

        }
    }

}
</script>