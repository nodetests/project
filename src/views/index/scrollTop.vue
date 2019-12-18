<template>
 <div>
  <div class="scrolltop" @click="scrolltop">返回顶部</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
   scrolltop(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
   }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.scrolltop{
    width: 24px;
    color: gray;
    padding: 12px 0 12px 5px;
    position: fixed;
    right: 10px;
    bottom: 20%;
    cursor: pointer;
    text-align: center;
    z-index: 20;
    background: #fff;
    border-radius: 12px 0 0 12px;
}
</style>