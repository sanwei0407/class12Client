<template>
  <div class="main">

      <div class="ct br">
        <div class="st br">
            <md-swiper>
                      <md-swiper-item>
                        <div class="sitem">
                            <img src="https://fakeimg.pl/300/" />
                        </div>
                      </md-swiper-item>
                       <md-swiper-item>
                        <div class="sitem">
                            <img src="https://fakeimg.pl/300/" />
                        </div>
                      </md-swiper-item>
                       <md-swiper-item>
                        <div class="sitem">
                            <img src="https://fakeimg.pl/300/" />
                        </div>
                      </md-swiper-item>
            </md-swiper>
        </div>
        <div class="wrap br">

            <!-- 搜索区域 -->
            <div class="search ">
                  <div class="row1 ">
                    <div>
                      <span>111</span>
                      <div>广州 </div>
                    </div>
                    <div>
                      <span>222</span>
                      <div>创客街</div>
                    </div>
                    <div>
                      <span>333</span>
                      <div></div>
                    </div>
                  </div>

                    <div class="row2">
                      <div>
                        <div class="date">3月11</div>
                        <div class="wk"> 周五 17:40</div>
                      </div>
                      <div class="total"> 共两天 </div>
                      <div>
                        <div class="date">3月11</div>
                        <div class="wk"> 周五 17:40</div>
                      </div>
                    </div>

                    <div class="srtBt">
                      去订车
                    </div>
            </div>
            <!-- 优惠券 -->
            <div class="coup br">
                <div class="arrow"></div>
            </div>
            <!-- 其他区域 -->
            <div class="other br"></div>
        </div>
      </div>
      <div class="ft br">
        <div>
          <i></i>
          <div> a</div>
        </div>
        <div>
          <i></i>
          <div> a</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style lang="scss" scoped>
.ft{
  height: 165px;
}

.st{
  height: 550px;
    .sitem{
      height:550px;
      width:100vw;
      img{
        width: 100%;
        height:100%;
        object-fit: cover;
      }
  }

}
.wrap {
  width: 1008px;
  margin: -100px auto 0;
  z-index:999;
  position: relative;
  background: #f4f7f7;

}
.search{
  height: 670px;
  background:#fff;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
  .row1 {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 45px;
    span{
      font-size: 35px;
      color: #969696;
      display: block;
    }
    &>div>div{
      color:#343434;
      font-size: 45px;
      line-height: 115px;
    }
  }
  .row2{
    display: flex;
    justify-content: space-between;
    margin-top: 65px;
    .date{
      font-size: 43px;
      color: #343434;
      font-weight: 600;
    }
    &>div{
      text-align: center;
    }
  }
  .total{

    font-size: 40px;
    position: relative;
    &::after{
      content: '';
      height: 4px;
      position: absolute;
      width: 115px;
      background: -webkit-linear-gradient(left,#fff,#343434);
      top:50%;
      left:-80px;
      transform: translate(-100%,-50%);
    }
    &::before{
      content: '';
      height: 4px;
      position: absolute;
      width: 115px;
      background: -webkit-linear-gradient(left,#343434,#fff);
      top:50%;
      right:-80px;
      transform: translate(100%,-50%);
    }
  }
  .wk{
    font-size: 24px;
    color: #989898
  }
  .srtBt{
    height: 130px;
    border-radius: 15px;
    background: #fbc659;
    line-height: 130px;
    text-align: center;
    color:#343434;
    margin-top: 65px;
  }

}
.coup{
  height: 260px;
  margin:30px 0;
  background: #ff6a57;
  display: flex;
  align-items: center;

  .arrow {
    width: 625px;
    height: 215px;
    margin-left: 30px;
    background: #fff4de;
    clip-path: polygon(0 0, 585px 0, 100% 50%,585px 100%, 0 100% );


  }
}
.other{
  height: 493px;
}
.ft{
  display: flex;
  height: 165px;
  &>div{
    width: 0;
    flex-grow: 1;
    display: flex;
    text-align: center;
  }
}

</style>
