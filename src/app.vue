<template>
  <div>
      <div class="st-container st-effect-4" id="st-container">
      <com-nav :navpage='navLight'></com-nav>
      <div class="st-pusher">
        <div class="container st-content">
          <com-header :isshowheader='isShowCom.isShowHeader' :item-num="itemNum"></com-header>
          <router-view></router-view>
          <com-footer :isshowfooter='isShowCom.isShowFooter'></com-footer>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
import comHeader from 'COMPONENT/header'
import comFooter from 'COMPONENT/footer'
import comNav from 'COMPONENT/nav'
import HomeService from 'SERVICE/home'
import Util from 'UTIL'
/* 根组件的作用有点像是 AngularJS 的 $rootScope */
export default {
  // 路由会自动将该组件挂载到 #app 上
  // 顶级变量必须设置默认值方能引入 observer
  components:{
    comHeader,
    comFooter,
    comNav
  },

  data () {
    return {
      localPage:'/homePage',
      itemNum: 0,
      isShowCom:{
        isShowFooter: true,
        isShowHeader: true
      }
    }
  },

  ready(){
    this.fetchCar();
  },

  methods:{
    fetchCar(){
      HomeService
        .fetchData('getShoppingCartAmount',{},'post',true)
        .then((res) => {
          if(res.code === 200)
            this.itemNum = res.data;
        })
    }
  },

  events: {
    'isshowfooter': function (code) {
      this.isShowCom.isShowFooter = code;
    },
    'isshowheader': function (code) {
      this.isShowCom.isShowHeader = code;
    },
    
    addCarNum(num){
      this.fetchCar()
    }
  },

  
}
</script>
