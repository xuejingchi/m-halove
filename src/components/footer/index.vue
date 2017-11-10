<template src="./tpl.html"></template>
<script >
	import './style/style.less'
	export default {
		props: ['isshowfooter'],
		data() {
		  return {
         isShow: false
      }
		},

		ready () {
		 $(window).scroll(function() {
	        $(window).scrollTop() > 200 ? $("#top").fadeIn('slow') : $("#top").fadeOut('slow');
	    });

		 $(".js-name").on("click",function(e){
//			 阻止冒泡
//			 e.stopPropagation();
		 	 var $parentNode = $(this).parent();
		 	  $parentNode.siblings(".navTab").find(".link-box").slideUp();
		 	  $parentNode.siblings(".navTab").find("i").html("&#xe615;");
		 	  if($parentNode.find(".link-box").css("display") == "block"){
		 	  	$parentNode.find(".link-box").slideUp();
		 	  	$(this).find("i").html("&#xe615;");
		 	  }else{
		 	  	$parentNode.find(".link-box").slideDown();
		 	  	$(this).find("i").html("&#xe613;");
		 	  }
		 });
		 $(".navTab .link-box").on("click",function(){
			$(this).hide();
			$(this).parent().find("i").html("&#xe615;");
		 })
		},

		methods: {
			showWechat () {
				this.isShow = true;
			},
			hideWechat () {
				this.isShow = false;
			},
			toTop () {
				$('body,html').animate({scrollTop: 0},400);
		     	return false;
			}
		}
	}

</script>

