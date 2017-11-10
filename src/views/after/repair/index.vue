<template src="./tpl.html"></template>
<script >
    import './style/style.less'
    import  HomeService from 'SERVICE/home'
    export default {
        data() {
        return {
            repairList: false
        }
    },

    ready () {

        var _this = this;
        HomeService
                .fetchData('repairstores',{},'get')
                .then((res) => {
            _this.repairList = res;
        });
//        $(".navTab .link-box").on("click",function(){
//            $(this).hide();
//            $(this).parent().find("i").html("&#xe615;");
//        })
    },
    methods: {
        jsClick:function (e){
            var $parentNode = $(e.target).parent();
            $parentNode.siblings(".navTab").find(".link-box").slideUp();
            $parentNode.siblings(".navTab").find("i").html("&#xe615;");
            if($parentNode.find(".link-box").css("display") == "block"){
                $parentNode.find(".link-box").slideUp();
                $(e.target).find("i").html("&#xe615;");
            }else{
                $parentNode.find(".link-box").slideDown();
                $(e.target).find("i").html("&#xe613;");
            }
        }
    }
    }

</script>

