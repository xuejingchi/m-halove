<template src="./tpl.html"></template>
<script type="text/javascript">
    import Util from 'UTIL'
    import  HomeService from 'SERVICE/home'

    export default {
        data () {
        return {
            sellList: false,
            storesList: {}
        }
    },

    ready (){
        var _this = this;
        HomeService
                .fetchData('provinces',{},'get')
                .then((res) => {
            _this.sellList = res;
        });
    },
    methods: {
        sellClick:function (e,id,i){
            var _this = this;
            var $param = $(e.target).parent().find(".link-box1").css("display");
            var $parentNode1 = $(e.target).parent();
            if ($param == "block"){
                $parentNode1.find(".link-box1").slideUp();
                $parentNode1.find("i").html("&#xe615;");
            } else {
                if ($parentNode1.find(".link-box1").length < 1){
                    HomeService
                            .fetchData('province',{pid:id},'get')
                            .then((res) => {
                        _this.sellList.list[i].namePinyin = res;
                        this.$nextTick(function(){
                            $parentNode1.find(".link-box1").slideDown();
                            $parentNode1.find("i").html("&#xe613;");
                        })
                    })
                } else {
                    $parentNode1.find(".link-box1").slideDown();
                    $parentNode1.find("i").html("&#xe613;");
                }
            }
        }
    }

    }
</script>
<style lang="less" rel="stylesheet/less">
    @import "./style/style.less";
</style>
