<template src="./tpl.html"></template>
<script type="text/javascript">
   import HomeService from 'SERVICE/home'
   import Util from 'UTIL/index'
   import headNav from "COMPONENT/headNav"
   export default{
      components:{headNav},
			data () {
				return {
				  orderNo: '',
                  expNo:'',
          info: false
				}
			},
			ready () {
			 	var _this = this;
        _this.$dispatch('isshowheader', false);
        _this.getInfo();
        Util.statistics();

			},
      

			methods: {
       getInfo () {
          var _this = this;
          _this.orderNo = this.$route.params.orderNo;
           HomeService
            .fetchData('orderDetail',{orderNo:_this.orderNo},'get')
            .then((res) => {
              _this.info = res;
            });

       },
				cancelOrder () {
          var _this = this;
          var orderNo = _this.orderNo;
          swal({title:"您确定要取消订单吗？",type:"warning",showCancelButton:true,closeOnConfirm:false},
            function(){
                let obj = {
                  orderNo: orderNo,
                  reason: ""
                };
                 HomeService
                .fetchData('closeOrder',obj)
                .then((res) => {
                    swal({title:"取消订单成功！"},function(){
                        _this.getInfo();
                    });
                });
            })
          }
			},
      beforeDestroy(){
        this.$dispatch('isshowheader', true);
      }

	}
</script>
<style lang="less" rel="stylesheet/less">
  @import "./style/style.less";
</style>



