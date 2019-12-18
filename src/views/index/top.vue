<template>
 <div>
   <div class="tbox">
          <span class>
            <a href>
              <img src="../../assets/cnodejs_light.svg" alt />
            </a>
            <i icon="el-icon-zoom-in"></i>
            <input type="search" />
          </span>
          <ul>
            <li>
              <a href>首页</a>
            </li>
            <li>
              <a href>新手入门</a>
            </li>
            <li>
              <a href>API</a>
            </li>
            <li>
              <a href>关于</a>
            </li>
            <li>
              <a href="" @click.prevent="exit">退出</a>
            </li>
            <li> 
             <a href="" @click.prevent="login">登录</a>
              </li>
          </ul>
        </div>
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
login(){
 this.$router.push('/Login')
},
exit(){
  localStorage.removeItem('name')
  this.$store.state.name=""
  //  console.log(localStorage.removeItem('name'))
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
.tbox{
   width: 90%;
  margin: 0 auto;
}
.el-header a img {
  width: 120px;
  height: 28.2px;
}
.el-header span {
  float: left;
}
.el-header .tbox ul {
  float: right;
}
.el-header .tbox ul li {
  width: 82px;
  height: 20px;
  float: left;
}
.el-header .tbox ul li a {
  text-decoration: none;
  color: #d3dce6;
}
</style>