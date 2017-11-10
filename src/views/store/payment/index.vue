<template src="./tpl.html"></template>
<script type="text/javascript">
 import HomeService from 'SERVICE/home'
   import Util from 'UTIL/index'
   // import headNav from "COMPONENT/headNav"
   export default{
      // components:{headNav},
			data () {
				return {
				  orderNo: "",
          info: false,
          setTimeId:'',

				}
			},
			ready () {
         
         var _this = this;
          _this.$dispatch('isshowheader', false);
         _this.orderNo = this.$route.params.orderNo;
          HomeService
          .fetchData('orderDetail',{orderNo: _this.orderNo},'get')
          .then((res) => {
              _this.info = res;
              var newTime = new Date().getTime();
              var expiredTime = res.expiredTime;
              var timeLate = expiredTime - newTime;
              if(timeLate<0){
                swal({title:"订单已过期"},function(){
                    _this.$router.go({name:'orderList'});
                });
                return false;
              }

               clearInterval(_this.setTimeId);
               _this.setTimeId = setInterval(function(){
                 if (timeLate <0){
                      clearInterval(_this.setTimeId);
                      return;
                  }
                  var hour = Math.floor(timeLate/60/60/1000);
                  var minute= Math.floor(timeLate/60/1000)%60;
                  var second=Math.floor(timeLate/1000)%60;
                  timeLate -= 1000;
                  $("#lastTime").html(hour+"小时"+minute+"分钟"+second+"秒");
               },1000);
               
          });
          
          Util.statistics();
			},
			methods: {
					 payNow (orderNo){
                let obj = {
                  orderNo: orderNo,
                  feeChn: "aliwap"
                };
                HomeService
                .fetchData('pay',obj,'post')
                .then((res) => {
                    $("#_input_charset").val(res._input_charset);
                    $("#service").val(res.service);
                    $("#partner").val(res.partner);
                    $("#sign_type").val(res.sign_type);
                    $("#sign").val(res.sign);
                    $("#out_trade_no").val(res.out_trade_no);
                    $("#subject").val(res.subject);
                    $("#payment_type").val(res.payment_type);
                    $("#total_fee").val(res.total_fee);
                    $("#seller_id").val(res.seller_id);
                    $("#show_url").val(res.show_url);
                    $("#body").val(res.body);
                    $("#notify_url").val(res.notify_url);
                    $("#return_url").val(res.return_url);
                    $("#app_pay").val(res.app_pay);
                    $("#payForm").submit();
                });
            },
            back (){
              window.location.href = "/store/orderPayStatus?out_trade_no="+this.orderNo;
            }
			},
      beforeDestroy () {
        clearInterval(this.setTimeId);
      }
      

	}
</script>
<style lang="less" rel="stylesheet/less">
  @import "./style/style.less";
</style>



