<template>
   <div class="main">
     <div class="nav br">车型列表</div>
     <md-scroll-view class="ct" :auto-reflow="true" :scrolling-y="true" :scrolling-x="false">
<!--    <div class="ct">-->


       <div class="wrap">
         <div class="item" v-for="item in list" :key="item.id">
           <div class="cover br"></div>
           <div class="info">
             <div class="title">{{ item.name  }}</div>
             <div class="type">
               <span>1.6L自动挡</span>
               <span> 三厢5座 </span>
             </div>
             <div class="detail">
               <span>查看详情</span>
               <span>价格日历</span>
             </div>
           </div>
           <div class="price">
             <span>110</span>
           </div>
         </div>
       </div>

<!--    </div>-->


     </md-scroll-view>
   </div>
</template>

<script>
export default {
  name: "List",
  data(){
    return {
        list :[ ]
    }
  },
  created(){
    this.getList()
  },
  methods :{
    async getList(){
        let res = await this.$api.post('/car/getAll');
        const { success,data } = res.data;
        this.list = data.rows
    }
  }
}
</script>

<style scoped lang="scss">

.main{
  background: #f7f7f7;
}
.ct{
  overflow: hidden;
}
.nav{
  height: 80px;
}
.wrap{
  width: 992px;
  margin:0 auto;
}

.item {
  background: #fff;
  display: flex;
  padding: 35px;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  .cover{
    width: 220px;
    height: 220px;
    margin-right: 25px;
  }
  .info{
      flex:1;
  }
  .title {
    font-size: 50px;
    line-height: 2;
  }
  .price {

    span {
      font-size: 50px;
      color:#f3ac00;
      line-height: 1;
      &::before{
        content: "￥";
        font-size: 44px;
        display: inline-block;
        transform: scale(.5);
        transform-origin: 100% 100%;
      }
    }
  }
  .type {
    line-height: 1;
    font-size: 36px;
    color:#666565;
    text-align: left;
    span {
      padding: 0 15px;
    }
    span:first-child {
      border-right: 1px solid #d3d3d3;
      padding-left: 0;
    }

  }
  .detail{
    font-size: 36px;
  }
}

</style>
