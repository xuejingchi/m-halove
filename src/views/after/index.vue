<template src="./tpl.html"></template>
<script type="text/javascript">
    import  repair from './repair'
    import  sell from './sell'
    import  faq from './faq'
    export default{
        components: {repair,sell,faq},

        data () {
        return {
            repairCode: 'repair'
        }
    },
    created(){
        this.$dispatch('isshowfooter', false);
    },

    ready () {

        $(".tabBox").height($(window).height()-100);
        var $tabBox =  wrap.querySelectorAll('.tabBox')[0];
        var windowWidth = document.body.clientWidth;
        $(".tabBox").width(3*windowWidth);
        $(".tabList").width(windowWidth);

        var init={
            translate:function(obj,windowWidth,star){
                obj.style.webkitTransform='translate3d('+-star*windowWidth+'px,0,0)';
                obj.style.transform='translate3d('+-star*windowWidth+',0,0)px';
                obj.style.webkitTransition='all 0.3s ease-in-out';
                obj.style.transition='all 0.3s ease-in-out';
            }
        }

        $(".tabClick li").on("click",function(){
            $(".tabList").scrollTop(0);
            $(this).addClass("active");
            $(this).siblings("li").removeClass("active");
            var index = $(this).index();
            init.translate($tabBox,windowWidth,index);
        });
    },

    beforeDestroy(){
        this.$dispatch('isshowfooter', true);
    }

    }
</script>
<style lang="less" rel="stylesheet/less">
    @import "./style/style.less";
</style>




