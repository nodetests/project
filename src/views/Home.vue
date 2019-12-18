<template>
  <div id="app">
    
    <el-container>
      <el-header>
        <top></top>
      </el-header>
      <el-container> 
        
        <el-main>
          <router-view/>  
     

        </el-main>
        <el-aside width="200px" v-if="$route.path==='/'">
          <asides> </asides>
        </el-aside>
      </el-container>

      <el-footer>
        <boottom></boottom>
      </el-footer>
    </el-container>
     <slot><scrollTop></scrollTop></slot>
  </div>
</template>


<script>
import top from './index/top'
import asides from './index/asides'
import boottom from './index/boottom'
import scrollTop from './index/scrollTop'
export default {
  data() {
    return {
     flag:true
    };
  },
  components: {
    top,
    asides,
    boottom,
    scrollTop
  },
  beforeRouteLeave (to, from, next) {
    if(to.path==='/Login'){
       this.flag=false
       next()
    }else{
      this.flag=true
      next()
    }
  },

  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

 <style scoped lang='scss'>

#app{
  background-color: #E1E1E1
}
.el-container:nth-child(2) {
  width: 90%;
  margin: 0 auto;
   margin-top:20px;
 
}
.el-main{
  background: #fff;
  color: #000;
  padding: 0 !important;
 
}
.el-header{
 
  background-color: #444;
  color: #d3dce6;
  text-align: center;
  line-height: 60px;
}
.el-footer{
    margin-top: 30px;
    background-color: #fff;
    color: #ababab;
     text-align: center;
     line-height: 60px;
    // width: 90%;
    // max-width: 1400px;
    // min-width: 960px;
    // margin: 0 auto;
    // color: #e2e2e2;
    // padding: 20px 0;
    // font-size: 13px;
    // line-height: 2em;
}
.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 15%;
  margin-left: 20px;
}


body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>