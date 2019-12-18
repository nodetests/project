<template>
 <div>
   
   <div class="box">
      账号：<el-input v-model="username" placeholder="请输入账号" style="width:400px"></el-input><br>
      密码：<el-input v-model="password" placeholder="请输入密码" style="width:400px"></el-input><br>
   <el-row>
  <el-button type="primary" @click="login" class="login">登录</el-button>
</el-row>
   </div>
  
 </div>
</template>

<script>
 export default {
   data () {
     return {
       username:'',
       password:''
     }
   },
   components: {

   },
   methods: {
    login(){
      localStorage.setItem('name',this.username)
      localStorage.setItem('psd',this.password)
      this.$store.state.name=localStorage.getItem('name')
      this.$router.push('/')
    },
   },
  //  beforeRouteLeave (to, from, next) {
     
  //  },
   mounted() {
    // this.$store.state=localStorage.getItem('name')
   },
   watch: {

   },
   computed: {

   },

 }
</script>

<style scoped lang='scss'>
 .box{
   width: 50%;
   margin: 0 auto;
   margin-top: 20px;
   .el-input{
      margin-top: 10px
   }
   .login{
     margin-top: 10px
   }
 }
</style>