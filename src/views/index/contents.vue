<template>
  <div>
    <div class="conNav">
      <a href="" @click.prevent="bdclass(1)" :class="{'green': count === 1}">全部</a>
      <a href="" @click.prevent="bdclass(2)" :class="{'green': count === 2}">精华</a>
      <a href="" @click.prevent="bdclass(3)" :class="{'green': count === 3}">分享</a>
      <a href="" @click.prevent="bdclass(4)" :class="{'green': count === 4}">问答</a>
      <a href="" @click.prevent="bdclass(5)" :class="{'green': count === 5}">招聘</a>
      <a href="" @click.prevent="bdclass(6)" :class="{'green': count === 6}">客户端测试</a>   
    </div>
     <div class="cell">
       <!-- 分页时，将获取到的数据按一定的数据分割，循环分割后的数据 -->
        <div class="conTent" v-for="item in list.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.id"  :data="list">
             <span class="dq">
                <span class="pull-left"> <img :src="item.author.avatar_url" alt=""></span>
                <span class="count-pull"> {{item.reply_count}}/ <span>{{item.visit_count}}</span> </span>
             </span>
             <span class="put">{{tab(item)}}</span>
             <span class="topic-title" @click="url(item)">{{item.title}} </span>
             <span class="last-active">{{times(item)}}</span>
        </div>     
     </div>

    
   <el-pagination    @current-change="handleCurrentChange"
      small
      layout="prev, pager, next"
      :total="this.list.length">
    </el-pagination>
    </div>
 
</template>

<script>
export default {
  data() {
    return {
      count:1,
      list:null,
      time:Date.parse(new Date()), 
      time1:null,
      currentPage:1, //初始页
      pagesize:10,    //    每页的数据
    };
  },
  components: {},
  methods: {
    bdclass(n){
      this.count=n
    },
      // handleSizeChange(size) {
      //           this.pagesize = size;
      //           console.log(this.pagesize)  //每页下拉显示数据
      //   },
        handleCurrentChange(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },

    url(item){
      // 跳转路由 this.$router.push({name:'Detail',query:{ids:item.id}})
      //跳转路由 this.$router.push({path:'Detail',par:{ids:item.id}})
      this.$router.push({name:'Detail',query:{ids:item.id}})
    },
    getData() {
      this.$axios
        .req("/api/topics")
        .then(res => {
          this.list=res.data 
          console.log(this.list)
          })
        .catch(err => {
          console.log("未获得数据");
        });
    },
      times(item){
        //this.$dayjs(item.last_reply_at).valueOf()将日期转换为时间戳
        //this.$dayjs(item.last_reply_at).format() 将时间戳转换为日期
      let mouth = this.$dayjs(this.time- this.$dayjs(item.last_reply_at).valueOf()).format('MM');
      let day = this.$dayjs(this.time- this.$dayjs(item.last_reply_at).valueOf()).format('DD');
      let hor =  this.$dayjs(this.time- this.$dayjs(item.last_reply_at).valueOf()).format('hh'); 
      let min =  this.$dayjs(this.time- this.$dayjs(item.last_reply_at).valueOf()).format('mm'); 
      if(mouth>1){return '一个月之前'}
      else if(day>1){return (day-1)+'天之前'}
      else if(hor>1){return (hor-1)+'小时之前'}
      else if(min>1){return (min-1)+'分钟之前'}
      },
      tab(item){
        if(item.tab==='share'&&item.visit_count<=20000){
          return '分享'
        }else if(item.tab==='ask'){
          return '问答'
        }else if(item.visit_count>=20000&&top===false){
          return '精华'
        }else if(top){
          return '置顶'
        }
      }
  },
  mounted() {
    this.getData();
    // let time1 = '2019-04-24T03:36:12.582Z'
    // let time2 = this.$dayjs(time1).format()
    // let time3 = this.$dayjs(time1).valueOf()
    // console.log(time3)
    // console.log(this.time)

  },
  watch: {},
  computed: {
       type(){
         
       }
  }
};
</script>

<style scoped lang='scss'>
  .green{
        background:#80bd01;
        color: #f0f0f0 !important;
        }
.box {
  color: #fff;
}

.conNav {
    height: 40px;
    background: #f6f6f6;

      a{
        line-height: 40px;
        text-decoration: none ;
        margin-left:10px;
        margin-top: 10px;
        color: #80bd01;
    }
  }
  .cell{
  height: 25%;
}
  .conTent{
    margin-left: 5px;
     border-top: 1px solid #f0f0f0;
     padding: 10px 0 10px ;
     img{
       height: 30px;
       width: 30px;
     }
     .dq{
       display: inline-block;
       width: 130px;
         .pull-left{
          display: inline-block;
          width:30px;
          height: 30px;
     }
     .count-pull{
       display: inline-block;
       text-align: center;
       font-size: 14px;
       line-height: 30px;
       margin-left: 15px;
     }
     }
   
     .put{
       display: inline-block;
        background: #80bd01;
        padding: 2px 4px;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        margin-left: 3px;
     }
      .topic-title{
       width: 400px;
       height: 30px;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
        line-height: 30px;
        margin-left: 12px;
        color: #333
     }
     .last-active{
       display: block;
       float: right;
      margin-right: 5px;
        min-width: 50px;
        white-space: nowrap;
        color: #778087;
        font-size: 11px;
     }
    
    }

</style>