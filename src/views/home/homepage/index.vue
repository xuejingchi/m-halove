<template src="./tpl.html"></template>
<script >
	import service from "SERVICE/home"
	import Util from 'UTIL'
  export default{
		data () {
			return {
				itemCode:'H1'
			}
		},

		ready () {
			Util.statistics();
			var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					paginationClickable: true,
					spaceBetween: 0,
					centeredSlides: true,
					autoplay: 2500,
					autoplayStopOnLast: false,
					autoplayDisableOnInteraction: false
			});
		}


	}
</script>
<style lang="less" rel="stylesheet/less">
  @import "./style/style.less";
</style>
