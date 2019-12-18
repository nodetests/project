<template>
  <div v-if="this.list !=false">
    <div class="header">
      <div class="headers">
        <span class="title">{{list.title}}</span>
        ·<span>发表于{{creatTime()}}</span> 
        &nbsp;&nbsp;
        ·<span>作者：{{list.author.loginname}}</span>
        ·<span>{{list.visit_count}}次浏览</span>
        ·<span>来自 {{ty}}</span>
      </div>
    </div>
   <div v-html="list.content" class="content">{{list.content}}</div>
   <div class="bottom">
     <div class="header">
       <span>{{list.replies.length}}回复</span>
     </div>
     <div class="apply" v-for="(item,index) in this.arr" :key="index">
        <div class="author"> 
             <img :src="item.author.avatar_url" alt="">
             <a href="">{{item.index}}</a>
              <span>{{item.author.loginname}}</span>
              <span>{{applyTime(item)}}</span>
        
         
        </div>
        <div class="content">
            <p v-html="item.content">{{item.content}}</p>
        </div>
     </div>
    </div>
  </div>
  
   
</template>

<script>
export default {
  data() {
    return {
      ty:'',
      list: [],
      ids: null,
      arr:[],
      nowTime:Date.parse(new Date()), 
    };
  },
  components: {},
  methods: {
    getData() {
      this.$axios
        .req(`/api/topic/${this.ids}`)
        .then(res => {
          this.list = res.data;
          this.arr =this.list.replies
          console.log(this.list);
          console.log(this.arr)
        })
        .catch(err => {
          console.log("未获得数据");
        });
    },
      creatTime(){
      let mouth = this.$dayjs(this.nowTime - this.$dayjs(this.list.create_at).valueOf()).format('MM');
      return (mouth-0)+'个月之前'
      },
      applyTime(item){
        let month = this.$dayjs(this.nowTime -this.$dayjs(item.create_at).valueOf()).format('MM'); 
      return (month-0)+'个月之前'
      }
  },
  mounted() {
       this.ids = this.$route.query.ids;
       this.getData();
  },
  watch: {},
  computed: {
    type(){
      if(this.list.tab =='share'){
        this.ty = '分享'
      }
    }
  },
};
</script>

<style scoped lang='scss'>

.header{
  height: 87px;
  border-bottom: 1px solid #cccccc;
    .headers{
        width: 75%;
        padding: 10px;
          .title{
            display: inline-block;
            width: 806px;
            font-size: 22px;
            font-weight: 700px;
            margin: 8px 0;
            }
        }
 
   }
.content{
  margin-bottom: 10px;
  h2{
    margin: 0 0 15px;
  }
}
.bottom{
  border-top: 10px solid #cccccc;
    .header{
      height: 40px;
    }
    .apply{
      height: 81px;
       .author{
         height: 20px;
         font-size: 15px;
            img{
              width: 30px;
              height: 30px;
              line-height: 34px;
              float: left;
            }
            span{
              margin-left: 5px;
              float: left;
            }
         }
           
       }
       .content{
            p{
              height: 30px;
            }
       }
    }

</style>