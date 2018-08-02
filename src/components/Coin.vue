<template>
  <div :style="{ width: size , height: size, lineHeight: size }"  class="coin" :class="{flip: isFlip}"> {{question.src}} </div>
</template>
<script>
 import Vue from 'vue';
    export default{
      data: function () {
        debugger;
         var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth  ; 

          var height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight  ;
            
            let lowNummber = Math.min(width, height); 
          return {
            size: lowNummber - lowNummber/5 +'px '
          }
        },
        props: {
          question : Object,
          isFlip: Boolean
        }, 
        created : () => {
         
        } 
    }
</script>
 


 