<template src="./tpl.html"></template>
<script type="text/javascript">
   import Util from 'UTIL/index'
	 export default{
	 		props: ['info','selectName','placeHolderProps'],
			data () {
				return {
					
				}
			},
			watch: {
				info(val){
					this.$els.gdetail.innerHTML = val.detailInfo;
					var props = "";
					this.info.goodsInfoObject.goodsSpecTypes.forEach(function(e,i){
						props += e.type + '/';
					})
					this.placeHolderProps = props;
				}
			},

			ready () {
				$("#showSpec").width($(window).width())
//	   console.log(this);
//	   			this.$set("placeHolderProps",'frafafa');
			},

			methods: {

				chooseSpec(){
					this.$dispatch('changeSpec2');
					this.$dispatch('isSelect',true);
				},

		  }		

	}
</script>



