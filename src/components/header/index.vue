<template src="./tpl.html"></template>
<script >
	import './style/style.less'
	import Util from 'UTIL/index'
	export default {
		props: ['isshowheader','itemNum'],
		data() {
		  return {
                isShow: false,
            }
		},

		ready () {
			this.hideNav();
		},

		methods: {

          showNav (event) {
            event.stopPropagation()
            $("#st-container").addClass("st-menu-open");
            $("body,html").css({"overflow":"hidden"});
          },

          hideNav () {
            $("#st-container").on("click",function (e) {
//              e.stopPropagation();
              $(this).removeClass("st-menu-open");
              $("body,html").css({"overflow":""});
            })
          },

	  },
	}

</script>

