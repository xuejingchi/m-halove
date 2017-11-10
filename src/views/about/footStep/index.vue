<template src="./tpl.html"></template>
<script type="text/javascript">
import Util from 'UTIL'
	 export default{
			data () {
				return {

				}
			},
			ready () {
				$(window).scrollTop(0);
				Util.statistics();
			}

	}
</script>
<style lang="less" rel="stylesheet/less">
  @import "./style/style.less";
</style>


