<template src="./tpl.html"></template>
<script type="text/javascript">
   import HomeService from 'SERVICE/home'
   import Util from 'UTIL/index'
   import "./style/style.less"
	 export default{
			data () {
				return {
          info: ''
        }
			},

			ready () {
        Util.statistics();
        var _this = this;
        HomeService
        .fetchData('personalInfo',{},'get')
        .then((res) => {
            _this.info = res;
            if(!_this.info.userNickname){
              _this.info.userNickname = _this.info.cellNum;
            }
         
        })
			},

			methods: {
				 logout () {
            var _this = this;
            HomeService
            .fetchData('logout',{},'get')
            .then((res) => {
               Util.deletcookie('login');
              _this.$parent.$root.itemNum = 0;
              _this.$router.go({name:'login'});
            });

          }
			}


	}
</script>



