<template src="./tpl.html"></template>
<script type="text/javascript">
   import HomeService from 'SERVICE/home'
   import Util from 'UTIL/index'
   import "./style/style.less"
   import headNav from "COMPONENT/headNav"
	 export default{
      components:{headNav},
			data () {
				return {
				  listParams: {
            pageSize: 50,
            pageNum: 1
          },
          isempty:false,
          listInfo: false
				}
			},
			ready () {
         var _this = this;
          _this.$dispatch('isshowheader', false);
          Util.statistics();
         HomeService
          .fetchData('orderList',_this.listParams,'get')
          .then((res) => {
            _this.listInfo = res;
            // console.log(res)
            if(!res || res.length <1){
              this.isempty = true;
            }
          });
			},
      beforeDestroy(){
        this.$dispatch('isshowheader', true);
      }

	}
</script>



