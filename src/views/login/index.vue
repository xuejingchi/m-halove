<template src="./tpl.html"></template>
<script type="text/javascript">
   import './style/style.less'
   import HomeService from 'SERVICE/home'
   import Util from 'UTIL/index'

	export default{
			data () {
				return {
					loginParams: {
						phone: '',
						code: ''
					}
				}
			},
      created(){
        this.$dispatch('isshowfooter', false);
        if(Util.getcookie('login')){
          this.$router.go('/')
        }
      },
			ready () {
        Util.statistics();
			},
      beforeDestroy(){
        this.$dispatch('isshowfooter', true);
      },
			methods: {
				sendCode () {
            var _this = this;
            if (_this.loginParams.phone.length <11){
                 Util.notify("请输入正确的手机号");
                return;
            }

            HomeService
            .fetchData('getVcode',{mobile:_this.loginParams.phone},'post',true)
            .then((res) => {
              if(res.code!=200){
                Util.notify(res.msg);
                return false;
              }

            $("#showTime").show();
            $("#sendSuccess").hide();
              var timeLate = 59000;
              var setTimeId = setInterval(function(){ShowCountDown()},1000)

              function ShowCountDown(){
                  if (timeLate <0){
                      $("#sendSuccess").show();
                      $("#showTime").hide();
                       $("#showTime").html("60&nbsp;秒");
                      clearInterval(setTimeId);
                      return;
                  }
                  var second=(timeLate/1000);
                  timeLate -= 1000;
                  $("#showTime").html(second+"&nbsp;秒");
              }

            })

				},

				login () {
            var _this  = this;
            if (_this.loginParams.phone.length < 11 ){
                 Util.notify("请输入正确的手机号");
                return;
            }
            if(_this.loginParams.code.length <4){
                 Util.notify("请输入正确的验证码");
                return;
            }
            HomeService
            .fetchData('login',{ mobile: _this.loginParams.phone,vcode: _this.loginParams.code},'post',true)
            .then((res) => {
              if(res.code == 200){
                let type = this.$route.query.type;
               Util.historyBack(this.$router,type);
               Util.setcookie('login','true',8);
               this.$dispatch('addCarNum');
              }else{
                Util.notify(res.msg);
              }
             
            })
            
				}

			}
	}
</script>



